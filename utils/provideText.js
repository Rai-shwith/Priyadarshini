import fs from "fs";
import path from "path";

const translationsPath = path.join(process.cwd(), "utils/translations.json");
const languageData = JSON.parse(fs.readFileSync(translationsPath, "utf8"));

export const provideText = async (lang) => {
  return languageData[lang] || languageData["en"]; // Default to English
};
