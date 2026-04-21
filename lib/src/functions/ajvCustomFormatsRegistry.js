"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const formats_1 = __importDefault(require("../utils/formats"));
const ajvCustomFormatsRegistry = (ajv) => {
    return formats_1.default.forEach((format) => ajv.addFormat(format.name, format.format));
};
exports.default = ajvCustomFormatsRegistry;
