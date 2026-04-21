"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iso8601DurationFormat = {
    type: 'string',
    validate: (data) => /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+(\.\d+)?S)?)?$/.test(data),
};
exports.default = iso8601DurationFormat;
