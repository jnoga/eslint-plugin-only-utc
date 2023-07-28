import { TSESLint } from '@typescript-eslint/utils';
import noNonUTCSets from './rules/only-utc';

export const rules = {
  'only-utc': noNonUTCSets,
} satisfies Record<string, TSESLint.RuleModule<string, Array<unknown>>>;
