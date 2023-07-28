"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const only_utc_1 = __importDefault(require("./only-utc"));
const parserResolver = require.resolve('@typescript-eslint/parser');
const ruleTester = new utils_1.TSESLint.RuleTester({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parser: parserResolver,
});
ruleTester.run('only-utc', only_utc_1.default, {
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
