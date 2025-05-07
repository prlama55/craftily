import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import terser from '@rollup/plugin-terser';
import copy from 'rollup-plugin-copy';
import litcss from 'rollup-plugin-lit-css';
const plugins = [
  litcss({ include: '**/*.css' }),
  typescript({
    tsconfig: './tsconfig.json',
    declaration: true,
    declarationDir: 'dist',
    rootDir: 'src',
  }),
  terser(),
  copy({
    targets: [{ src: 'src/global.d.ts', dest: 'dist' }],
  }),
];
export default defineConfig([
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs',
        format: 'commonjs',
        sourcemap: true,
        exports: 'auto',
      },
    ],
    plugins,
    external: ['lit', 'lit/decorators.js', 'tslib'],
  },
  {
    input: 'src/components/index.ts',
    output: [
      {
        file: 'dist/ImageEditor.js',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/ImageEditor.cjs',
        format: 'commonjs',
        sourcemap: true,
        exports: 'auto',
      },
    ],
    plugins,
    external: ['lit', 'lit/decorators.js', 'tslib'],
  },
]);
