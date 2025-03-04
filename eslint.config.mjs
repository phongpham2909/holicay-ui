import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import { includeIgnoreFile } from '@eslint/compat';
import unusedImports from 'eslint-plugin-unused-imports';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  includeIgnoreFile(gitignorePath),
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'plugin:prettier/recommended'),
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    rules: {
      'prettier/prettier': 'warn',
      'react/display-name': 'off',
      'react-hooks/rules-of-hooks': 'warn',
      'react/destructuring-assignment': 'off', // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
      'react/require-default-props': 'off', // Allow non-defined react props as undefined
      'react/jsx-props-no-spreading': 'off', // _app.tsx uses spread operator and also, react-hook-form
      'react-hooks/exhaustive-deps': 'off', // Incorrectly report needed dependency with Next.js router
      '@typescript-eslint/no-require-imports': 'warn',
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'unused-imports/no-unused-imports': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
];

export default eslintConfig;
