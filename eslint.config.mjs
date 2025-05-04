import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import vueParser from 'vue-eslint-parser';
import tsParser from '@typescript-eslint/parser'; // if you're using TypeScript
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'tsconfig.json'],
  },
  {
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
    },
  },
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.turbo/**',
      '**/.next/**',
      '**/coverage/**',
      '**/build/**',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.ts',
      '**/*.d.ts',
      'tsconfig.json',
    ],
  },
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.turbo/**',
      '**/.next/**',
      '**/coverage/**',
      '**/build/**',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.ts',
      '**/*.d.ts',
      'tsconfig.json',
    ],
    files: ['**/*.{js,jsx,ts,tsx,vue}'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      // TypeScript rules
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-require-imports': 'off',

      // React rules
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Vue rules
      'vue/multi-word-component-names': 'off',

      // General rules
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-unused-vars': 'off',
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: ['./tsconfig.json'],
      },
    },
  },
  {
    ignores: [
      '**/dist/**',
      '**/node_modules/**',
      '**/.turbo/**',
      '**/.next/**',
      '**/coverage/**',
      '**/build/**',
      '**/*.config.js',
      '**/*.config.mjs',
      '**/*.config.ts',
      '**/*.d.ts',
      'tsconfig.json',
    ],
    files: ['**/*.vue'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: vueParser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        sourceType: 'module',
      },
    },
  },
];
