import type { Linter } from 'eslint';
import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import parserVue from 'vue-eslint-parser';
import parserTypescript from '@typescript-eslint/parser';
import prettier from 'eslint-config-prettier';

const config: Linter.Config[] = [
  js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  
  // TypeScript
  {
    files: ['**/*.ts', '**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        parser: parserTypescript,
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': 'off',
      'no-undef': 'off',
      'prefer-const': 'error',
    },
  },

  // Vue
  {
    files: ['**/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  // Prettier (простое подключение)
  prettier,

  // Игноры
  {
    ignores: ['dist/', 'node_modules/', '*.config.*'],
  },
];

export default config;
