# FableRooms — Backrooms of Claude Fable 5

A first-person survival horror game that runs entirely in the browser.
Built with **Next.js + Three.js**. Every asset — textures, the monster, the
level, every sound — is **generated procedurally at runtime**. There are no
image or audio files in this project.

This fork merges [StarKnightt/Backroom-Escape](https://github.com/StarKnightt/Backroom-Escape) with [FableRooms](https://github.com/nostalgicgarethdev/fablerooms) and [The Book of Claude Fables](https://github.com/nostalgicgarethdev/claude-fables-book): the Anthropic model lineage (Helpful Fox → Cautious Owl → Three Bears → Weaver → Claude Fable → Fable 5 / Lumen) pinned to Backrooms Level 0.

![genre](https://img.shields.io/badge/genre-horror-1a1a1a) ![engine](https://img.shields.io/badge/three.js-r184-b8a440)

## The game

You noclipped through a wrong corner of reality, where old stories went to rot.
Level 0: an endless office of mono-yellow wallpaper, damp carpet and buzzing
fluorescent light. Someone was here before you — they left fable-stained pages
pinned to the walls.

- **Find all 8 journal pages** — each maps to a chapter in the Claude lineage (Helpful Fox, Constitutional Chamber, Storyteller's Archive, Lumen's Greenhouse…)
- **Follow the dying lights.** The fixture nearest every page sputters.
- **Find the exit door** (green glow) — it only opens once you hold every page.
- **Drink the almond water.** Four bottles restore stamina and calm your heart.
- **Avoid the Wanderer.** It roams, kills lights, hunts by sound and sight.

### Controls

| Key | Action |
| --- | --- |
| WASD | Move |
| Mouse | Look |
| Shift | Sprint |
| C | Sneak |
| F | Flashlight |
| E | Interact |
| Esc | Pause |

Headphones strongly recommended. Each run generates a fresh maze from a new seed.

## Run it

```bash
pnpm install
pnpm dev      # http://localhost:3000
```

## Credits

- **Engine & procedural generation:** [StarKnightt/Backroom-Escape](https://github.com/StarKnightt/Backroom-Escape)
- **FableRooms lore & concept:** [nostalgicgarethdev/fablerooms](https://github.com/nostalgicgarethdev/fablerooms)

## Dev smoke tests

```bash
node scripts/smoke.mjs
node scripts/inspect.mjs
node scripts/flow.mjs
```