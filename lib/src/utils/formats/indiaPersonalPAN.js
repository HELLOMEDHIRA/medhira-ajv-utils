"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indiaPersonalPANFormat = {
    type: 'string',
    validate: (data) => /^[A-Z]{3}P[A-Z][0-9]{4}[A-Z]$/.test(data),
};
exports.default = indiaPersonalPANFormat;
