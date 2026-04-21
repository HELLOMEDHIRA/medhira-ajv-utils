"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keywords_1 = __importDefault(require("../utils/keywords"));
const ajvCustomKeywordsRegistry = (ajv) => {
    return keywords_1.default.forEach((keyword) => ajv.addKeyword(keyword));
};
exports.default = ajvCustomKeywordsRegistry;
