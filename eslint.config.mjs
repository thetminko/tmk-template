import nx from '@nx/eslint-plugin';
import eslintConfigPrettier from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import sonar from 'eslint-plugin-sonarjs';
import security from 'eslint-plugin-security';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  eslintConfigPrettier,
  sonar.configs.recommended,
  security.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    ...eslintPluginReact.configs.recommended,
    ...eslintPluginReact.configs['jsx-runtime'],
    ...eslintPluginReactHooks.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.serviceworker,
        ...globals.browser
      }
    }
  },
  {
    ignores: ['**/dist', '**/vite.config.*.timestamp*', '**/vitest.config.*.timestamp*']
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: 'scope:core',
              onlyDependOnLibsWithTags: []
            },
            {
              sourceTag: 'scope:app-lib',
              onlyDependOnLibsWithTags: ['scope:core']
            },
            {
              sourceTag: 'scope:app',
              onlyDependOnLibsWithTags: ['scope:core', 'scope:app-lib']
            },
            {
              sourceTag: 'type:common',
              onlyDependOnLibsWithTags: ['type:common']
            },
            {
              sourceTag: 'type:backend',
              onlyDependOnLibsWithTags: ['type:common', 'type:backend']
            },
            {
              sourceTag: 'type:web',
              onlyDependOnLibsWithTags: ['type:common', 'type:web']
            },
            {
              sourceTag: 'app:sample-app',
              onlyDependOnLibsWithTags: ['app:sample-app', 'scope:core', 'scope:app-lib']
            }
          ]
        }
      ]
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.cts', '**/*.mts', '**/*.js', '**/*.jsx', '**/*.cjs', '**/*.mjs'],
    // Override or add rules here
    rules: {}
  }
];
