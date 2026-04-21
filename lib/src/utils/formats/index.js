"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indiaIFSC_1 = __importDefault(require("./indiaIFSC"));
const indiaPAN_1 = __importDefault(require("./indiaPAN"));
const indiaPersonalPAN_1 = __importDefault(require("./indiaPersonalPAN"));
const indiaPincode_1 = __importDefault(require("./indiaPincode"));
const iso8601Duration_1 = __importDefault(require("./iso8601Duration"));
const positiveNumberInString_1 = __importDefault(require("./positiveNumberInString"));
const udyam_1 = __importDefault(require("./udyam"));
const UTCTime_1 = __importDefault(require("./UTCTime"));
const uuid_1 = __importDefault(require("./uuid"));
const ajvCustomFormats = [
    {
        name: 'uuid',
        format: uuid_1.default,
    },
    {
        name: 'udyam',
        format: udyam_1.default,
    },
    {
        name: 'positive-number-in-string',
        format: positiveNumberInString_1.default,
    },
    {
        name: 'utc-date-time',
        format: UTCTime_1.default,
    },
    {
        name: 'iso8601-date-time',
        format: iso8601Duration_1.default,
    },
    {
        name: 'india-PAN',
        format: indiaPAN_1.default,
    },
    {
        name: 'india-Personal-PAN',
        format: indiaPersonalPAN_1.default,
    },
    {
        name: 'india-pincode',
        format: indiaPincode_1.default,
    },
    {
        name: 'india-IFSC',
        format: indiaIFSC_1.default,
    },
];
exports.default = ajvCustomFormats;
