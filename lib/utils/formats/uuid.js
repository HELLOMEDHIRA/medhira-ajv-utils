"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const uuidFormat = {
    type: 'string',
    validate: (data) => (0, uuid_1.validate)(data),
};
exports.default = uuidFormat;
