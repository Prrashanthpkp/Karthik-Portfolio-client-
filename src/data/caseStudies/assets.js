/* Loads every image under src/assets/projects/ automatically.
   Look one up by "folder/name" WITHOUT the extension, e.g. asset("one-of-all/hero").
   - .png / .jpg / .jpeg / .webp all work, so the extension never has to match.
   - A missing file returns null, and the page shows a placeholder instead of crashing. */
const files = import.meta.glob(
  "../../assets/projects/**/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}",
  { eager: true, import: "default" }
);

const byKey = {};
for (const [path, url] of Object.entries(files)) {
  const key = path
    .replace("../../assets/projects/", "")
    .replace(/\.[^.]+$/, "")
    .toLowerCase();
  byKey[key] = url;
}

export const asset = (key) => byKey[key.toLowerCase()] ?? null;