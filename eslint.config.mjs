import globals from 'globals';
import pluginJs from '@eslint/js';
import * as tseslint from '@typescript-eslint/eslint-plugin';
import pluginReact from 'eslint-plugin-react';

/** @type {import('eslint').Linter.FlatConfig[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  ...pluginJs.configs.recommended,
  ...(tseslint.configs.recommended ? [...tseslint.configs.recommended] : []),
  ...pluginReact.configs.flat.recommended,
];
