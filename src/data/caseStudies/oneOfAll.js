import { asset } from "./assets";

const img = (name, caption) => ({ src: asset(`one-of-all/${name}`), caption });

const oneOfAll = {
  slug: "one-of-all",
  title: "One of All",
  eyebrow: "Unreal Engine 5 · Single-Player Level",
  tagline: "A narrative-driven traversal and combat level set in the Western Ghats of India",
  watermark: "GHATS",
  meta: [
    ["Genre", "Action-Adventure"],
    ["Engine", "Unreal Engine 5"],
    ["Role", "Solo Level Designer"],
    ["Duration", "13 Weeks"],
  ],
  lede: [
    "One of All is a linear, third-person action-adventure level built solo in Unreal Engine 5 over thirteen weeks. The player is Viyan, an architect chasing a lost Chola manuscript into unexplored jungle. The level asks him to read the environment — to spot the route, find the story, and get past a mercenary force that arrived first.",
    "The goal was a level in the tradition of Uncharted, Tomb Raider and the Star Wars Jedi games: one where the player is guided by the environment rather than by waypoints and UI, and where the story is told by what the world looks like and what has been left behind in it.",
  ],
  cover: img("hero", "Viyan looking out toward the temple"),
  sections: [
    {
      label: "Responsibilities",
      heading: "What I Did",
      blocks: [
        {
          type: "list",
          items: [
            "Designed and built a complete 10–15 minute level from 2D sketch to greybox and playable build.",
            "Planned the pacing around three combat encounters, spacing them with traversal and quiet story beats so the player is never in sustained combat.",
            "Built the traversal language around climbing, rope swing, piton climbing, sliding and ziplines, introducing each mechanic safely before demanding it under pressure.",
            "Told the backstory environmentally through statues, ruins and readable diary notes.",
            "Ran two structured playtest rounds with general players and professional playtesters and iterated against the findings.",
          ],
        },
      ],
    },
    {
      label: "The Level",
      heading: "The Level",
      blocks: [
        {
          type: "text",
          body: "The level runs as a single unbroken route from a mountain cliff to the heart of a buried temple — linear by design, with no backtracking, but carrying an optional exploration branch and multiple approaches inside each combat space.",
        },
        {
          type: "images",
          frame: true,
          items: [
            img("level-pacing", "Level flow map — nine key moments from cliff to temple"),
            { ...img("rough-sketch", "Original 2D route sketch"), rotate: 90 },
          ],
        },
      ],
    },
    {
      label: "Key Moments",
      heading: "Key Moments",
      blocks: [
        {
          type: "moments",
          items: [
            { title: "Player Start", body: "Viyan starts on a cliff with the temple's gopuram visible in the distance. Doubles as the tutorial — every mechanic is introduced here, in the order the level uses them." },
            { title: "The Cave", body: "Optional climb to a cave containing writings about the book and the people who fled." },
            { title: "Forest Traversal", body: "Movement through dense forest to a cliff overlooking modern structures. A zipline commits the player downward." },
            { title: "First Combat", body: "6 enemies holding a mercenary outpost. Fully stealth-capable, or fight it head-on." },
            { title: "The Diary", body: "The blocked village entrance, and a diary filling in another piece of the history." },
            { title: "Hard Combat", body: "9 enemies. An open firefight in the ruined village — no stealth, pure cover and positioning." },
            { title: "The Temple", body: "Out of the village and up through the mountains to the temple grounds." },
            { title: "Easy Combat", body: "5 enemies holding a camp — a lighter encounter after the village." },
            { title: "The Fall", body: "A shaft opens beneath the player. A free-fall drops them into water, where a statue's shadow points to the final clue." },
          ],
        },
      ],
    },
    {
      label: "Design Breakdown",
      heading: "Design Breakdown",
      blocks: [
        {
          type: "sub",
          title: "Building Backwards From the Landmark",
          blocks: [
            {
              type: "text",
              body: [
                "I blocked the level out in reverse, starting with the temple and working back to the player's starting cliff. The temple is what the player orients by, so it had to be placed and sized first; everything else was arranged around what could be seen of it and when.",
                "It was my most useful structural decision and the one needing most correction. The first playtest showed almost every player missed the landmark entirely — the anchor the whole route was built around wasn't doing its job. I scaled the temple up so it reads from the opening vista and key points along the route. Later, extending the temple grounds pushed it further away and lost its presence again, so I raised it onto a platform to restore the silhouette.",
              ],
            },
            {
              type: "images",
              items: [
                img("temple-scale", "Temple landmark, before and after scaling"),
                img("temple-platform", "Temple grounds after extension and platform raise"),
              ],
            },
          ],
        },
        {
          type: "sub",
          title: "Funnel Before Reveal",
          blocks: [
            {
              type: "text",
              body: "The approach into the ruined village runs up a long stair enclosed by mountain on both sides. The compression is deliberate — a narrow, low-visibility climb that opens onto the village and the temple beyond. Squeezing the player before a reveal makes the reveal land harder, and it gave me control over what can be seen and when, which matters in a level where the landmark does the navigation work.",
            },
            { type: "images", items: [img("stairs-approach", "Stairs approach into the ruined village")] },
          ],
        },
        {
          type: "sub",
          title: "Traversal as Pacing",
          blocks: [
            {
              type: "text",
              body: [
                "Traversal is the level's breathing room. Every fight is preceded and followed by movement — a climb, a rope swing, a long boulder ascent — giving the player space to scavenge, look around and take in the environmental story. The opening area doubles as the tutorial, introducing crouch, climbing, sliding, rope and piton climb in the order the level uses them, ending on a one-way zipline. By the first fight, every tool has been used once in safety.",
                "The boulder ascent is the beat I'm happiest with: to sell the scale, I routed it around the boulder's full circumference rather than straight up, so it takes real time and the view changes throughout.",
              ],
            },
            { type: "images", items: [img("boulder-ascent", "Traversal route — rope swing to boulder ascent")] },
          ],
        },
        {
          type: "sub",
          title: "Three Combat Encounters, Three Identities",
          blocks: [
            {
              type: "text",
              body: "All enemies start neutral and escalate through suspicious to fully aware, and that state is always reversible — a stealth approach that goes wrong can be recovered. Enemies spawn on approach via custom triggers rather than at level start, for both performance and design reasons.",
            },
            {
              type: "list",
              items: [
                { lead: "Outpost (6 enemies)", text: "fully stealth-capable. Patrol paths give a readable surveillance rhythm; a climbable cliff offers a stealth entry, cover at the entrance allows a firefight instead. A leading line on the ground guides the player to the exit either way." },
                { lead: "Ruined village (9 enemies)", text: "the largest and hardest fight. Open ground, no stealth, no patrol paths; built purely around cover, positioning and sightlines." },
                { lead: "Temple camp (5 enemies)", text: "the smallest, and the one that exercises the full sandbox. Custom climbable structures, ziplines and stealth routes let the player attack from height, from stealth or head-on. Mixed AI behaviour keeps it unpredictable, and loot sits just before the encounter." },
              ],
            },
            {
              type: "images",
              items: [
                img("outpost-combat", "First combat area — outpost layout and stealth route"),
                img("temple-camp", "Temple camp with climbable structures"),
              ],
            },
          ],
        },
        {
          type: "sub",
          title: "Rewarding Exploration",
          blocks: [
            {
              type: "text",
              body: "An optional branch before the first zipline uses a mechanic found nowhere else in the level. Two routes reach the cave at its end — one climbing the cliff with a moveable object, one that only reveals itself to players who properly explore. Inside is story content available nowhere on the main route, and a zipline closes the loop back. If the level asks the player to leave the critical path, it has to pay them back for it.",
            },
            { type: "images", items: [img("exploration-cave", "Optional exploration branch and cave")] },
          ],
        },
        {
          type: "sub",
          title: "Telling the Story Through the Space",
          blocks: [
            {
              type: "text",
              body: "There are no cutscenes. The history — a community that hid itself away to protect its architectural knowledge, then moved on when found — is told through what they left behind. Statues of Hindu deities mark the route and double as navigational confirmation: seeing one tells the player they're going the right way. The ruined village is the clearest single piece of storytelling, and diary entries carry the specifics. A blocked main entrance communicates that the mercenaries arrived first, without a line of dialogue.",
            },
            { type: "images", items: [img("statues", "Statues used as storytelling and wayfinding")] },
          ],
        },
      ],
    },
    {
      label: "Playtesting",
      heading: "Playtesting and Iteration",
      blocks: [
        {
          type: "text",
          body: "I tested with two groups and asked each a different kind of question. General players were asked about their choices rather than about design — why did you go that way, what pulled you toward that area. Professional playtesters got the structural questions on flow, pacing and composition. The player group showed me how someone builds a mental picture of a space with no context, which is what tells you whether an affordance works; the professionals could tell me why something wasn't working, not just that it wasn't.",
        },
        {
          type: "cards",
          items: [
            {
              title: "Round One — Blockout",
              rows: [
                { tag: "Found", body: "The landmark was missed by almost every player; some climbing sections were spaced too far apart (though multiple routes meant players simply found another way); clipping through stairs and geometry. Professionals confirmed the flow read well but wanted richer exploration and better composition on the openings into combat." },
                { tag: "Changed", body: "Scaled up the temple; reworked the climbing sections; added AI to all three combat spaces with patrol paths where stealth was intended; added the optional exploration branch." },
              ],
            },
            {
              title: "Round Two — With AI",
              rows: [
                { tag: "Found", body: "Only 1 in 5 players reached the final area first try — the AI was too hard and there were no respawn points. Only 2 in 5 found the exploration branch. Players took damage landing from ziplines. Professionals confirmed the reworked combat openings were an improvement, warned the ground-level leading line would be lost once foliage went in, and suggested story content alone may not read as a sufficient exploration reward." },
                { tag: "Changed", body: "Rebalanced difficulty directly — reduced enemy health, lowered their damage output, increased damage taken and raised player health; fixed the zipline damage and clipping." },
              ],
            },
          ],
        },
        {
          type: "callout",
          title: "What the Failure Rate Cost Me",
          body: "The failure rate did more damage than a difficulty problem normally would. With so many players failing, I had to ask them to replay repeatedly to reach the end — and a player on their third frustrated attempt is not giving usable pacing data. The thing I most needed to measure was the thing the difficulty made impossible to measure. Difficulty tuning isn't a polish-stage task; it gates whether any of your other feedback is trustworthy.",
        },
      ],
    },
    {
      label: "Challenges",
      heading: "Challenges",
      blocks: [
        {
          type: "sub",
          title: "A Packaging Failure That Cost a Week",
          blocks: [
            {
              type: "text",
              body: "Late on, after removing a half-built save system, the project stopped packaging with no prior warning. Rather than guessing, I worked through the editor log line by line. The actual blocker was small and buried: the project's version field was empty, and Unreal cannot build a network version identifier from an empty string, so the build failed a validity check. Alongside it were an invalid rope hook reference, a lighting cache mismatch on a climbing volume, a collision mesh with degenerate triangles, and assorted content browser issues. Some had no documentation at all, so I took the remainder to professionals on a Discord server; when one still wouldn't clear, migrating the level into a fresh project resolved it.",
            },
          ],
        },
        {
          type: "sub",
          title: "Cutting the Puzzle",
          blocks: [
            {
              type: "text",
              body: "The level was originally scoped as a narrative-driven puzzle level. Sitting down to design the puzzle, two things became clear at once: I was short on time, and puzzle design is its own discipline, not something bolted onto the margins of a level design project. Cutting it was right — attempting both would have compromised the part I set out to do well — but it's a scoping mistake I should have caught at planning rather than two-thirds through.",
            },
          ],
        },
        {
          type: "sub",
          title: "Performance and Foliage",
          blocks: [
            {
              type: "text",
              body: "The first foliage pass ran at one to three million triangles and hit performance hard. I reduced density, enabled Nanite with Preserve Area so foliage wouldn't drop out at distance, and used culling to bring the cost back under control.",
            },
          ],
        },
      ],
    },
    {
      label: "Reflection",
      heading: "What I Learned",
      blocks: [
        {
          type: "list",
          items: [
            "Landmarks are load-bearing. If the thing players navigate by isn't clearly readable, everything built around it stops working — I had to relearn this twice.",
            "Difficulty tuning is not polish. Getting it wrong contaminates every other piece of feedback you try to collect.",
            "Ask players about their choices, not your design — and watch the play rather than only collecting the answers. Almost every real problem surfaced from watching, not from what was said afterwards.",
            "Scope honestly and early; read the error rather than copying the fix.",
          ],
        },
      ],
    },
  ],
};

export default oneOfAll;