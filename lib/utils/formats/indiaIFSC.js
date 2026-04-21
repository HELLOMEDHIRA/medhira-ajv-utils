"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ifscFormat = {
    type: 'string',
    validate: (data) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(data),
};
exports.default = ifscFormat;
