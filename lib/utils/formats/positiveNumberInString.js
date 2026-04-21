"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const positiveNumberInStringFormat = {
    type: 'string',
    validate: (data) => {
        const number = typeof data === 'string' ? parseFloat(data) : data;
        const result = !isNaN(number) && number >= 0;
        return result;
    },
};
exports.default = positiveNumberInStringFormat;
