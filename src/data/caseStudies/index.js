import oneOfAll from "./oneOfAll";
import colourBlind from "./colourBlind";

// Every project that has its own page. Key = the URL slug (/projects/<slug>).
export const caseStudies = {
  [oneOfAll.slug]: oneOfAll,
  [colourBlind.slug]: colourBlind,
};