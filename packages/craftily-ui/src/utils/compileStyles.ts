import { promises as fs } from 'node:fs';
import path from 'node:path';
import { compile } from 'tailwindcss';

const tailwindPath = require.resolve('tailwindcss/theme');
const utilsDir = path.resolve(path.join(__dirname, '..', 'src/utils'));

// Removed invalid import of 'tailwindcss/theme'
export async function loadThemes() {
  const [defaultTheme, theme] = await Promise.all([
    fs.readFile(tailwindPath, 'utf-8'),
    fs.readFile(path.resolve(path.join(utilsDir, 'variables.css')), 'utf-8'),
  ]);
  return { defaultTheme, theme };
}

/**
 * Compiles and extracts styles by merging the default theme and a custom theme.
 *
 * This function takes two theme strings, combines them into a single `@layer theme` block,
 * compiles the styles, and returns the resulting CSS as a trimmed string.
 *
 * @param defaultTheme - The default theme styles as a string.
 * @param theme - The custom theme styles as a string to be merged with the default theme.
 * @returns A promise that resolves to the compiled and trimmed CSS string.
 */
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
