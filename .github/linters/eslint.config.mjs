// ESLint flat configuration, used by Super Linter to lint JSON
// https://eslint.org/docs/latest/use/configure/configuration-files
// https://ota-meshi.github.io/eslint-plugin-jsonc/

import { defineConfig, globalIgnores } from 'eslint/config';
import eslintPluginJsonc from 'eslint-plugin-jsonc';

export default defineConfig([
  globalIgnores(['!**/.*', '**/node_modules/.*']),

  // The plugin's own flat configurations set the parser for each
  // syntax, matching what Super Linter's default configuration does
  ...eslintPluginJsonc.configs['recommended-with-json'].map((config) => ({
    ...config,
    files: ['**/*.json']
  })),
  ...eslintPluginJsonc.configs['recommended-with-jsonc'].map((config) => ({
    ...config,
    files: ['**/*.jsonc']
  })),
  ...eslintPluginJsonc.configs['recommended-with-json5'].map((config) => ({
    ...config,
    files: ['**/*.json5']
  })),

  {
    // '.devcontainer/devcontainer.json' is JSON with Comments, which
    // the Dev Containers specification allows and the file relies on.
    // The parser reads JSONC so the comments parse, and the rule that
    // bans them is off so they pass.
    files: ['**/*.json'],

    languageOptions: {
      parserOptions: {
        jsonSyntax: 'JSONC'
      }
    },

    rules: {
      'jsonc/no-comments': 'off'
    }
  }
]);
