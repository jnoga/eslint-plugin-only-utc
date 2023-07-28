import { AST_NODE_TYPES, TSESLint } from '@typescript-eslint/utils';

type MessageIds = 'messageIdForSetFullYearFailure' |
  'messageIdForSetMonthFailure' |
  'messageIdForSetDateFailure' |
  'messageIdForSetHoursFailure' |
  'messageIdForSetMinutesFailure' |
  'messageIdForSetSecondsFailure' |
  'messageIdForSetMillisecondsFailure' |
  'messageIdForSomeOtherFailure';

const onlyUTCSets: TSESLint.RuleModule<MessageIds> = {
  defaultOptions: [],
  meta: {
    type: 'problem',
    messages: {
      messageIdForSetFullYearFailure: 'Non UTC setFullYear detected',
      messageIdForSetMonthFailure: 'Non UTC setMonth detected',
      messageIdForSetDateFailure: 'Non UTC setDate detected',
      messageIdForSetHoursFailure: 'Non UTC setHours detected',
      messageIdForSetMinutesFailure: 'Non UTC setMinutes detected',
      messageIdForSetSecondsFailure: 'Non UTC setSeconds detected',
      messageIdForSetMillisecondsFailure: 'Non UTC setMilliseconds detected',
      messageIdForSomeOtherFailure: 'Unexpected error in `No non UTC sets` rule',
    },
    fixable: 'code',
    schema: [], // no options
  },
  create: (context) => ({
    MemberExpression: (node) => {
      if (node.property.type !== AST_NODE_TYPES.Identifier) {
        return;
      }
      if (node.property.name === 'setFullYear') {
        return context.report({
          node: node.property,
          messageId: 'messageIdForSetFullYearFailure',
          fix: (fixer) => {
            return fixer.replaceText(
              node.property,
              'setUTCFullYear',
            );
          },
        });
      }
      if (node.property.name === 'setMonth') {
        return context.report({
          node: node.property,
          messageId: 'messageIdForSetMonthFailure',
          fix: (fixer) => {
            return fixer.replaceText(
              node.property,
              'setUTCMonth',
            );
          },
        });
      }
      if (node.property.name === 'setDate') {
        return context.report({
          node: node.property,
          messageId: 'messageIdForSetDateFailure',
          fix: (fixer) => {
            return fixer.replaceText(
              node.property,
              'setUTCDate',
            );
          },
        });
      }

      if (node.property.name === 'setHours') {
        return context.report({
          node: node.property,
          messageId: 'messageIdForSetHoursFailure',
          fix: (fixer) => {
            return fixer.replaceText(
              node.property,
              'setUTCHours',
            );
          },
        });
      }

      if (node.property.name === 'setMinutes') {
        return context.report({
          node: node.property,
          messageId: 'messageIdForSetMinutesFailure',
          fix: (fixer) => {
            return fixer.replaceText(
              node.property,
              'setUTCMinutes',
            );
          },
        });
      }

      if (node.property.name === 'setSeconds') {
        return context.report({
          node: node.property,
          messageId: 'messageIdForSetSecondsFailure',
          fix: (fixer) => {
            return fixer.replaceText(
              node.property,
              'setUTCSeconds',
            );
          },
        });
      }

      if (node.property.name === 'setMilliseconds') {
        return context.report({
          node: node.property,
          messageId: 'messageIdForSetMillisecondsFailure',
          fix: (fixer) => {
            return fixer.replaceText(
              node.property,
              'setUTCMilliseconds',
            );
          },
        });
      }
    },
  }),
};

export default onlyUTCSets;
