import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";
import { defineConfig } from "rollup";
import tailwindcss from "@tailwindcss/postcss";
import terser from "@rollup/plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
const plugins = [
  resolve({
    browser: true
  }),
  commonjs(),
  typescript({
    tsconfig: "./tsconfig.json",
    declaration: true,
    declarationDir: "dist/types",
    rootDir: "src"
  }),
  postcss({
    extract: true, // extracts to dist/theme.css
    minimize: false, // or use cssnano for production
    plugins: [tailwindcss(), autoprefixer()]
  }),
  terser() // Minify the output
];
export default defineConfig([
  {
    input: "src/theme.ts", // Entry point for the core package
    output: [
      {
        file: "dist/theme.js", // Output file for ES module
        format: "esm",
        sourcemap: true
      },
      {
        file: "dist/theme.cjs", // Output file for cjs
        format: "commonjs",
        sourcemap: true,
        exports: "auto"
      }
    ],
    external: [
      "@tailwindcss/forms",
      "@tailwindcss/typography",
      "@tailwindcss/aspect-ratio",
      "postcss",
      "postcss-js",
      "tailwindcss/defaultTheme",
      "node:fs",
      "node:path",
      "tailwindcss"
    ],
    plugins: plugins
  },
  {
    input: "src/index.ts", // Entry point for the core package
    output: [
      {
        file: "dist/index.js", // Output file for ES module
        format: "esm",
        sourcemap: true
      },
      {
        file: "dist/index.cjs", // Output file for cjs
        format: "commonjs",
        sourcemap: true,
        exports: "auto"
      },
      {
        file: "dist/index.umd.js",
        format: "umd",
        name: "Craftily",
        globals: {
          tslib: "tslib" // 🔥 needed if tslib is external
        }
      }
    ],
    external: [],
    plugins: [
      ...plugins,
      copy({
        targets: [{ src: "index.html", dest: "dist" }]
      })
    ]
  }
]);
