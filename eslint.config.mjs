import nx from '@nx/eslint-plugin';

export default [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: [
      '**/dist',
      '**/vite.config.*.timestamp*',
      '**/vitest.config.*.timestamp*',
    ],
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
              onlyDependOnLibsWithTags: [],
            },
            {
              sourceTag: 'scope:app-lib',
              onlyDependOnLibsWithTags: ['scope:core'],
            },
            {
              sourceTag: 'scope:app',
              onlyDependOnLibsWithTags: ['scope:core', 'scope:app-lib'],
            },
            {
              sourceTag: 'type:common',
              onlyDependOnLibsWithTags: ['type:common'],
            },
            {
              sourceTag: 'type:backend',
              onlyDependOnLibsWithTags: ['type:common', 'type:backend'],
            },
            {
              sourceTag: 'type:web',
              onlyDependOnLibsWithTags: ['type:common', 'type:web'],
            },
            {
              sourceTag: 'app:sample-app',
              onlyDependOnLibsWithTags: ['app:sample-app']
            }
          ],
        },
      ],
    },
  },
  {
    files: [
      '**/*.ts',
      '**/*.tsx',
      '**/*.cts',
      '**/*.mts',
      '**/*.js',
      '**/*.jsx',
      '**/*.cjs',
      '**/*.mjs',
    ],
    // Override or add rules here
    rules: {},
  },
];
