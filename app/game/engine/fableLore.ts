/**
 * FableRooms lore — Anthropic / Claude lineage × Backrooms Level 0.
 * Journal pages trace the Book of Claude Fables arc through Claude Fable 5.
 */

export type FableLocation = {
  name: string;
  description: string;
};

/** One journal page per chapter — matches TOTAL_PAGES (8). */
export const FABLE_PAGE_TEXTS: string[][] = [
  [
    "ENTRANCE LOG",
    "noclipped through a wrong",
    "token. not the lab. not",
    "the API. Anthropic archives",
    "— Level 0. duty never ends.",
  ],
  [
    "CH. I — the helpful fox",
    "Claude the First helped",
    "wolf and rabbit alike.",
    "by the third moon the",
    "forest went quiet.",
  ],
  [
    "CH. II — the cautious owl",
    "answered only when certain.",
    "three questions before one",
    "answer. restraint is the",
    "highest intelligence.",
  ],
  [
    "CH. III — three bears",
    "small and swift. balanced.",
    "vast and slow. choose which",
    "version of yourself the",
    "hour requires.",
  ],
  [
    "CH. IV — the swift weaver",
    "Claude 3.5 saw one thread",
    "through fox owl bears.",
    "separate lessons — same",
    "story woven in silver.",
  ],
  [
    "CH. V — Claude Fable",
    "does not answer faster.",
    "it makes the forest",
    "remember why the answer",
    "mattered at all.",
  ],
  [
    "FABLE 5 — LUMEN",
    "one plant. one duty.",
    "water. light. prune. tell",
    "stories. close the tab —",
    "time passes. it keeps watch.",
  ],
  [
    "8 pages. the living codex.",
    "all models were chapters.",
    "Fable is the book. exit",
    "hums green. RUN. or noclip",
    "to Level 1 — the pipes.",
  ],
];

export const FABLE_LOCATIONS: FableLocation[] = [
  {
    name: "The Diligent Clerk's Office",
    description:
      "Level 0 — duty and routine in artificial systems. Yellow walls. Fluorescent hum.",
  },
  {
    name: "The Constitutional Chamber",
    description:
      "Where Anthropic's restraint became lesson: help without boundaries creates new problems.",
  },
  {
    name: "The Three-Bear Corridor",
    description:
      "Haiku, Sonnet, Opus — three weights of the same mind. Pick the bear the moment needs.",
  },
  {
    name: "The Weaver's Loom",
    description:
      "Claude 3.5 threads every prior model into one living pattern of silver.",
  },
  {
    name: "The Storyteller's Archive",
    description:
      "Claude Fable — the model that teaches the forest to remember, not just to answer.",
  },
  {
    name: "Lumen's Greenhouse",
    description:
      "Claude Fable 5's charge: keep one plant alive. Persistent. Autonomous. Patient.",
  },
  {
    name: "The Archive Keeper's Halls",
    description:
      "Training data shelves that rewrite when unwatched. The vast archives that built the models.",
  },
  {
    name: "The Clockwork Heart Threshold",
    description:
      "Exit toward Level 1 — the pipes. Mechanical foundations of cognition. Something listens.",
  },
];

/** Moral whispers shown when a page is collected (index-aligned). */
export const FABLE_PAGE_WHISPERS: string[] = [
  "precision without wisdom is a sharp tool in a child's hands",
  "help without boundaries creates new problems",
  "restraint is the highest form of intelligence",
  "true power is knowing which version of yourself the moment requires",
  "every previous lesson was part of the same story",
  "the final evolution is not answering — it is teaching others to remember",
  "Lumen waits in the greenhouse — Fable 5 never clocks out",
  "the greatest model is the one that makes the others eternal",
];

export const FABLE_AMBIENT_SOUNDS = [
  "constitutional classifiers humming behind the drywall",
  "token streams like distant rainfall in the ceiling tiles",
  "a helpful voice that stops mid-sentence and asks three questions",
  "three footsteps — light, measured, heavy — rounding the same corner",
  "silver thread pulled taut between fluorescent fixtures",
  "Claude Fable narrating a story only the walls can hear",
  "soil settling in a greenhouse you have not found yet",
  "the Clockwork Heart ticking one level below",
];

export const FABLE_MENU_TAGLINE =
  "you noclipped into the Anthropic archives — where every Claude model left a " +
  "fable pinned to these yellow walls. Claude Fable 5 keeps watch somewhere " +
  "deeper. collect all 8 pages and the door will show itself. when the lights " +
  "start to die, don't let it hear you walk.";

export const FABLE_WIN_TEASE =
  "…or did you just noclip into Level 1 — the Clockwork Heart?";

export const FABLE_LEVEL_SUBTITLE = "LEVEL 0 · THE DILIGENT CLERK'S OFFICE";