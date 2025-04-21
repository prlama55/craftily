import { promises as fs } from "node:fs";
import path from "node:path";
import { compile } from "tailwindcss";

const tailwindPath = require.resolve("tailwindcss/theme");
const utilsDir = path.resolve(path.join(__dirname, "..", "src/utils"));

// Removed invalid import of 'tailwindcss/theme'
export async function loadThemes() {
  const [defaultTheme, theme] = await Promise.all([
    fs.readFile(tailwindPath, "utf-8"),
    fs.readFile(path.resolve(path.join(utilsDir, "variables.css")), "utf-8")
  ]);
  return { defaultTheme, theme };
}

export async function compileAndExtractStyles(
  defaultTheme: string,
  theme: string
): Promise<string> {
  const compiledContent: string = (
    await compile(`
        @layer theme{${defaultTheme}${theme}}
    `)
  ).build([]);
  return compiledContent.trim();
}
