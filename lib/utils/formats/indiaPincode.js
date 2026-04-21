"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pincodeFormat = {
    type: 'string',
    validate: (data) => /^\d{6}$/.test(data),
};
exports.default = pincodeFormat;
