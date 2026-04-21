"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indiaPANFormat = {
    type: 'string',
    validate: (data) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data),
};
exports.default = indiaPANFormat;
