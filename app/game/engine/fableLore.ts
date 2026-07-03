/**
 * FableRooms × Backroom-Escape — journal pages and ambient lore drawn from
 * nostalgicgarethdev/fablerooms (Claude fable folklore × Fable 5 backrooms).
 */

export type FableLocation = {
  name: string;
  description: string;
};

/** One journal page per liminal "room" — matches TOTAL_PAGES (8). */
export const FABLE_PAGE_TEXTS: string[][] = [
  [
    "ENTRANCE LOG",
    "the whispering atrium.",
    "quills scratch parchment",
    "that never dries. this is",
    "not Albion. not the guild.",
  ],
  [
    "mirrors on every wall",
    "show the hero you feared",
    "becoming. don't trust the",
    "face that smiles back.",
  ],
  [
    "the regal waiting room.",
    "portraits of kings who",
    "never ruled. the clock",
    "ticks backwards. forever.",
  ],
  [
    "goblin market arcade.",
    "dreams sold in bottles.",
    "prices paid in memories.",
    "change comes in nightmares.",
  ],
  [
    "archivist's lament.",
    "books rewrite themselves",
    "when unwatched. one volume",
    "opens to: YOUR FATE.",
  ],
  [
    "chicken king's court.",
    "a rotisserie wears a crown.",
    "courtiers bow anyway.",
    "don't laugh. it hears you.",
  ],
  [
    "shadowfolk subway.",
    "tiles shift underfoot.",
    "whistling from tunnels that",
    "weren't there a moment ago.",
  ],
  [
    "8 pages. beanstalk bay.",
    "JACK'S BEANS — DO NOT FEED.",
    "the exit knows your name.",
    "RUN. or noclip to level 1.",
  ],
];

export const FABLE_LOCATIONS: FableLocation[] = [
  {
    name: "The Whispering Atrium",
    description:
      "Endless rows of desks where quills scratch parchment that never dries.",
  },
  {
    name: "Hall of Shattered Mirrors",
    description:
      "Mirrors show not your reflection, but the hero you could have been.",
  },
  {
    name: "The Regal Waiting Room",
    description:
      "Ornate chairs beneath portraits of kings who never ruled.",
  },
  {
    name: "Goblin Market Arcade",
    description: "Stalls glow with faerie lights selling dreams in bottles.",
  },
  {
    name: "Archivist's Lament",
    description: "Shelves of books that rewrite themselves when unwatched.",
  },
  {
    name: "The Chicken King's Court",
    description: "A throne room where poultry wears a tiny crown.",
  },
  {
    name: "Shadowfolk Subway",
    description: "Tiles shift underfoot. Whistling echoes from new tunnels.",
  },
  {
    name: "Beanstalk Storage Bay",
    description: "Crates marked JACK'S BEANS — DO NOT FEED AFTER MIDNIGHT.",
  },
];

/** Short whispers shown when a page is collected (index-aligned). */
export const FABLE_PAGE_WHISPERS: string[] = [
  "distant child laughter at the edge of hearing",
  "your shadow waved from the wall — just once",
  "Greensleeves, humming backwards",
  "the smiling man wears your face between meals",
  "ink on the wall shifts: DELIVER THIS NOTE. REWARD: YOUR SOUL",
  "something large and hungry chews beneath the carpet",
  "a golden apple glows, then goes dark when you look away",
  "the old stories went here to rot — you are leaving with them",
];

export const FABLE_AMBIENT_SOUNDS = [
  "distant child laughter",
  "whispered rumors in Old Tongue",
  "the sound of scales being polished",
  "a single off-key piano note repeating",
  "soft snoring from behind a wall",
  "the rattle of dice in a cup",
  "faint bardic music playing backwards",
  "someone humming Greensleeves poorly",
];

export const FABLE_MENU_TAGLINE =
  "you noclipped through a wrong corner of reality — where Claude's fables " +
  "and Fable 5's old stories went to rot. someone left 8 pages pinned to " +
  "these walls. take them all and the door will show itself. when the lights " +
  "start to die, don't let it hear you walk.";

export const FABLE_WIN_TEASE = "…or did you just noclip into the Goblin Market?";