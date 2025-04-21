import postcss from "postcss";
import postcssJs from "postcss-js";
import { compileAndExtractStyles, loadThemes } from "./compileStyles";

interface ReplaceableObject {
  [key: string]: any;
}

interface FallbackReplacer {
  (match: string, variable: string, prefix: string, fallback: string): string;
}

const cleanCss = (cssContent: string): string => {
  // Precompile regular expressions for better performance
  const emptyFallbackRegex: RegExp = /var\((--[^,)]+),\s*\)/g;
  const spacingWidthFallbackRegex: RegExp =
    /var\((--(spacing|width)[\w-]*),\s*((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*)\)/g;
  const spacingVarRegex: RegExp = /var\(--spacing\)/g;

  // Remove empty fallbacks
  cssContent = cssContent.replace(emptyFallbackRegex, "var($1)");

  // Remove spacing, width css variable if there's a fallback value
  cssContent = cssContent.replace(spacingWidthFallbackRegex, ((
    match,
    fallback
  ) => {
    // If there's no actual fallback value, return the original match
    return fallback.trim() ? fallback.trim() : match;
  }) as FallbackReplacer);

  // Replace all `var(--spacing)` with `0.25rem`
  cssContent = cssContent.replace(spacingVarRegex, "0.25rem");

  return cssContent;
};

const replaceApplyTrueWithEmptyObject = (obj: ReplaceableObject): void => {
  const stack: ReplaceableObject[] = [obj];

  while (stack.length > 0) {
    const currentObj = stack.pop() as ReplaceableObject;

    for (const [key, value] of Object.entries(currentObj)) {
      if (typeof value === "object" && value !== null) {
        stack.push(value as ReplaceableObject);
      }

      if (key.startsWith("@apply") && value === true) {
        currentObj[key] = {};
      }
    }
  }
};

// function to convert camelCase to kebab-case
const camelToKebab = (str: string): string => {
  return str.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
};

// Function to transform object keys from camelCase to kebab-case
interface TransformableObject {
  [key: string]: any;
}

const transformKeys = (obj: any): any => {
  if (typeof obj !== "object" || obj === null) return obj;

  if (Array.isArray(obj)) {
    return obj.map(transformKeys);
  }

  return Object.fromEntries(
    Object.entries(obj as TransformableObject).map(([key, value]) => [
      camelToKebab(key),
      typeof value === "object" ? transformKeys(value) : value
    ])
  );
};

export const init = async () => {
  try {
    // Load themes
    const { defaultTheme, theme } = await loadThemes();

    // First convert Tailwind CSS to raw CSS
    const rawCss = await compileAndExtractStyles(defaultTheme, theme);

    // Clean the CSS
    const cleanedCss = cleanCss(rawCss);

    // Parse the CSS and convert to JS object
    const root = postcss.parse(cleanedCss);
    const jsContent = postcssJs.objectify(root);

    const kebabCaseContent = transformKeys(jsContent);

    // Apply any necessary transformations
    replaceApplyTrueWithEmptyObject(kebabCaseContent);

    // Return stringified JS object
    return JSON.stringify(kebabCaseContent, null, undefined);
  } catch (error) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error(`Error converting CSS to JS: ${error.message}`);
    } else {
      throw new Error("Error converting CSS to JS: An unknown error occurred");
    }
  }
};
