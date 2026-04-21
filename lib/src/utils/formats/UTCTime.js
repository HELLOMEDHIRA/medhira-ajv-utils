"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UTCTimeFormat = {
    type: 'string',
    validate: (data) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data),
};
exports.default = UTCTimeFormat;
