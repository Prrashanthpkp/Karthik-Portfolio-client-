import { asset } from "./assets";

const img = (name, caption) => ({ src: asset(`colour-blind/${name}`), caption });

const colourBlind = {
  slug: "colour-blind",
  title: "Colour Blind",
  eyebrow: "Unity · Narrative Puzzle",
  watermark: "COLOUR",
  meta: [
    ["Genre", "Narrative / Puzzle"],
    ["Engine", "Unity"],
    ["Role", "Level & Narrative Designer"],
    ["Year", "2024"],
  ],
  lede: [
    "Colour Blind is a 3D narrative-driven puzzle game in which you play as a student whose world has faded to black and white under the weight of growing up as a teen. By collecting objects scattered throughout the classroom, each tied to a forgotten memory, you slowly bring colour back into the world — uncovering the story with the help of your plushie friends along the way.",
  ],
  cover: null,
  sections: [
    {
      label: "Trailer",
      blocks: [{ type: "video", youtubeId: "xG6w3erzOjo", title: "Colour Blind — Trailer" }],
    },
    {
      label: "Screens",
      blocks: [
        {
          type: "images",
          items: [1, 2, 3, 4, 5].map((n) => img(`screenshot-${n}`, `Screenshot ${n}`)),
        },
      ],
    },
    {
      label: "Responsibilities",
      heading: "What I Did",
      blocks: [
        {
          type: "list",
          items: [
            "Designed all puzzles, the core gameplay loop for the game and wrote the narrative for the game.",
            "Worked with an adaptive multi-disciplinary team of artists, programmers, and designers.",
            "Implemented and designed puzzles with verticality in a closed setting, increasing the difficulty as the level progresses.",
            "Wrote the full narrative for the game, which will also be reflected in the puzzles.",
            "Pitched and prototyped core game and level ideas via rapid prototyping using Unity.",
            "Balanced general gameplay, from puzzle difficulty and pacing to item placement, ensuring every puzzle served the narrative.",
            "Supported the programming team by debugging and fixing game-breaking issues in the codebase.",
          ],
        },
      ],
    },
    {
      label: "Process",
      heading: "Level Design Process",
      blocks: [
        {
          type: "text",
          body: "My design process stays consistent across every project. Because Colour Blind is built around a colour-restoration mechanic, my first step was to study how other games have handled colour as a core system. I researched titles such as Hue, Degrees of Separation, Chicory: A Colourful Tale, Alba: A Wildlife Adventure, and Gris, all of which were valuable sources of inspiration. Once I had gathered references, I sketched several paper drafts exploring what each level could look like. This always comes before any in-engine work, as it gives me a quick, reliable reference to build from. From there I move to digital drafts, adding more detail around what I can achieve through scripting within the level.",
        },
        {
          type: "list",
          items: [
            "Designed several paper-based drafts, then finalised them digitally.",
            "Researched numerous games of the same genre for inspiration and a basis for levels.",
            "Grey-boxed rough ideas before the main level creation.",
          ],
        },
        {
          type: "images",
          items: [1, 2, 3, 4].map((n) => img(`process-${n}`, `Design process ${n}`)),
        },
      ],
    },
    {
      label: "Design Goals",
      heading: "Design Goals",
      blocks: [
        {
          type: "cards",
          items: [
            {
              title: "Engaging Puzzle Design",
              rows: [
                { tag: "Goal", body: "Create narrative-driven puzzles that use verticality to escalate difficulty as the player progresses, so each new puzzle feels like a meaningful step deeper into the story." },
                { tag: "Objective", body: "Design a vertical, closed space level where puzzles increase in complexity as the player progresses. Tie each puzzle solution to a collectible memory object, so solving a puzzle gives the player the main object to restore colour and advances the narrative. Balance puzzle pacing and item placement through repeated QA testing to keep the experience challenging but fair." },
              ],
            },
            {
              title: "A Convincing Narrative for a Sensitive Topic",
              rows: [
                { tag: "Goal", body: "Write and implement a believable, emotionally honest story that handles the pressures of teenage life with care and authenticity." },
                { tag: "Objective", body: "Develop a narrative delivered through environmental storytelling and memory objects rather than heavy exposition, allowing players to piece together the story at their own pace. Anchor the emotional arc to the colour-restoration mechanic, so the world growing more vibrant mirrors the protagonist's progress. Use the plushie companions as a gentle narrative device to guide the player and soften difficult moments. Research the subject matter responsibly and refine tone through playtesting to ensure the story lands as intended without feeling exploitative or hollow." },
              ],
            },
          ],
        },
        { type: "images", items: [img("puzzle-1", "Puzzle design")] },
      ],
    },
    {
      label: "Reflection",
      heading: "What I Learnt",
      blocks: [
        {
          type: "list",
          items: [
            "How to lead and work with an adaptive small multi-disciplinary indie team.",
            "Learning to present and pitch the game in a public space alongside industry professionals.",
            "Conducting QA and playtesting as early as possible is vital to any game's development for catching bugs and balancing issues.",
            "Leveraged personal research into player demographics to manage and balance existing content via QA testing.",
            "How to implement verticality in narrative-driven puzzle difficulty, from initial design through to in-engine implementation.",
            "How to work with and alongside sound designers, as well as the process it takes to get them organised.",
          ],
        },
      ],
    },
  ],
};

export default colourBlind;