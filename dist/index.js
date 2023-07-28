"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
const only_utc_1 = __importDefault(require("./rules/only-utc"));
exports.rules = {
    'only-utc': only_utc_1.default,
};
