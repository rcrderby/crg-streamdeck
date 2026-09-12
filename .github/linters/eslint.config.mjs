// ESLint flat configuration, used by Super Linter to lint JSON
// https://eslint.org/docs/latest/use/configure/configuration-files
// https://ota-meshi.github.io/eslint-plugin-jsonc/

import { defineConfig, globalIgnores } from 'eslint/config';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import jsoncParser from 'jsonc-eslint-parser';

const compat = new FlatCompat({
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default defineConfig([
  globalIgnores(['!**/.*', '**/node_modules/.*']),
  {
    // '.devcontainer/devcontainer.json' is JSON with Comments, which
    // the Dev Containers specification allows and the file relies on.
    // The parser reads JSONC so the comments parse, and the rule that
    // bans them is off so they pass.
    files: ['**/*.json'],

    extends: compat.extends('plugin:jsonc/recommended-with-json'),

    languageOptions: {
      parser: jsoncParser,
      ecmaVersion: 'latest',
      sourceType: 'script',

      parserOptions: {
        jsonSyntax: 'JSONC'
      }
    },

    rules: {
      'jsonc/no-comments': 'off'
    }
  },
  {
    files: ['**/*.jsonc'],

    extends: compat.extends('plugin:jsonc/recommended-with-jsonc'),

    languageOptions: {
      parser: jsoncParser,
      ecmaVersion: 'latest',
      sourceType: 'script',

      parserOptions: {
        jsonSyntax: 'JSONC'
      }
    }
  },
  {
    files: ['**/*.json5'],

    extends: compat.extends('plugin:jsonc/recommended-with-json5'),

    languageOptions: {
      parser: jsoncParser,
      ecmaVersion: 'latest',
      sourceType: 'script',

      parserOptions: {
        jsonSyntax: 'JSON5'
      }
    }
  }
]);
