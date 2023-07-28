import { TSESLint } from '@typescript-eslint/utils';
import noNonUTCSets from './only-utc';
const parserResolver = require.resolve('@typescript-eslint/parser');

const ruleTester = new TSESLint.RuleTester({
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  parser: parserResolver as any,
});

ruleTester.run('only-utc', noNonUTCSets, {
  valid: [
    'someDate.setUTCFullYear()',
    'someDate.setUTCMonth()',
    'someDate.setUTCDate()',
    'someDate.setUTCHours()',
    'someDate.setUTCMinutes()',
    'someDate.setUTCSeconds()',
    'someDate.setUTCMilliseconds()',
  ],
  invalid: [
    {
      code: 'someDate.setFullYear()',
      errors: [{ messageId: 'messageIdForSetFullYearFailure' }],
      output: 'someDate.setUTCFullYear()',
    },
    {
      code: 'someDate.setMonth()',
      errors: [{ messageId: 'messageIdForSetMonthFailure' }],
      output: 'someDate.setUTCMonth()',
    },
    {
      code: 'someDate.setDate()',
      errors: [{ messageId: 'messageIdForSetDateFailure' }],
      output: 'someDate.setUTCDate()',
    },
    {
      code: 'someDate.setHours()',
      errors: [{ messageId: 'messageIdForSetHoursFailure' }],
      output: 'someDate.setUTCHours()',
    },
    {
      code: 'someDate.setMinutes()',
      errors: [{ messageId: 'messageIdForSetMinutesFailure' }],
      output: 'someDate.setUTCMinutes()',
    },
    {
      code: 'someDate.setSeconds()',
      errors: [{ messageId: 'messageIdForSetSecondsFailure' }],
      output: 'someDate.setUTCSeconds()',
    },
    {
      code: 'someDate.setMilliseconds()',
      errors: [{ messageId: 'messageIdForSetMillisecondsFailure' }],
      output: 'someDate.setUTCMilliseconds()',
    },
  ],
});
