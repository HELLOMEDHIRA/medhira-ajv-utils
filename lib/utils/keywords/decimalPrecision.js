"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decimalPrecisionKeyword = {
    keyword: 'decimalPrecision',
    type: ['number', 'string'],
    schemaType: ['number', 'string'],
    errors: true,
    validate: (schema, data) => {
        if (isNaN(data)) {
            return false;
        }
        const numberDataType = typeof data === 'number';
        const decimalPart = numberDataType ? data.toString().split('.')[1] : data.split('.')[1];
        const precision = decimalPart ? decimalPart.length : 0;
        return precision <= schema;
    },
    metaSchema: {
        type: 'number',
        minimum: 0,
    },
    error: {
        message: (cxt) => `should have not more than ${cxt.schema} decimal places`,
    },
};
exports.default = decimalPrecisionKeyword;
