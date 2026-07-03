/**
 * ~15s promo — Playwright native video capture → MP4.
 * Usage: node scripts/record-promo.mjs [baseUrl]
 */
import { chromium } from "playwright";
import { spawnSync } from "node:child_process";
import { mkdirSync, readdirSync, renameSync, rmSync } from "node:fs";
import { join } from "node:path";

const URL = process.argv[2] ?? "http://localhost:3000";
const OUT_DIR = "scripts";
const WEBM = join(OUT_DIR, "fablerooms-promo.webm");
const MP4 = join(OUT_DIR, "fablerooms-promo.mp4");
mkdirSync(OUT_DIR, { recursive: true });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
  args: ["--mute-audio", "--enable-unsafe-swiftshader"],
});

const context = await browser.newContext({
  viewport: { width: 1280, height: 720 },
  recordVideo: { dir: OUT_DIR, size: { width: 1280, height: 720 } },
});

const page = await context.newPage();
console.log("Loading", URL);
await page.goto(URL, { waitUntil: "networkidle", timeout: 90000 });

await wait(2500);

await page.waitForFunction(
  () => {
    const b = [...document.querySelectorAll("button")].find((x) =>
      x.textContent?.includes("ENTER"),
    );
    return b && !b.disabled;
  },
  { timeout: 45000 },
);

await page.getByRole("button", { name: /ENTER/i }).click();
await wait(1500);

const canvas = page.locator("canvas").first();
const box = await canvas.boundingBox();
if (box) {
  await page.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  await wait(400);
}

const hold = async (key, ms) => {
  await page.keyboard.down(key);
  await wait(ms);
  await page.keyboard.up(key);
};

console.log("Recording gameplay…");
await hold("w", 2800);
for (let i = 0; i < 30; i++) {
  await page.mouse.move(640 + i * 7, 360);
  await wait(50);
}
await page.keyboard.down("Shift");
await hold("w", 2200);
await page.keyboard.up("Shift");
await page.keyboard.press("f");
await hold("w", 1800);
await page.keyboard.press("f");
await page.keyboard.press("c");
await hold("w", 2000);
await page.keyboard.press("c");
for (let i = 0; i < 25; i++) {
  await page.mouse.move(900 + i * 4, 370);
  await wait(60);
}
await hold("w", 1500);
await wait(1200);

const video = page.video();
await context.close();
await browser.close();

if (!video) throw new Error("No video recorded");
const rawPath = await video.path();
renameSync(rawPath, WEBM);
console.log("Encoding MP4…");

const ff = spawnSync(
  "ffmpeg",
  ["-y", "-i", WEBM, "-c:v", "libx264", "-pix_fmt", "yuv420p", "-movflags", "+faststart", MP4],
  { stdio: "inherit" },
);

if (ff.status !== 0) process.exit(ff.status ?? 1);
rmSync(WEBM, { force: true });

// Clean stray webm artifacts playwright may leave
for (const f of readdirSync(OUT_DIR)) {
  if (f.endsWith(".webm") && f !== "fablerooms-promo.webm") rmSync(join(OUT_DIR, f));
}

console.log(`Done: ${MP4}`);