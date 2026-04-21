import { KeywordDefinition } from 'ajv';

const decimalPrecisionKeyword: KeywordDefinition = {
  keyword: 'decimalPrecision',
  type: ['number', 'string'],
  schemaType: ['number', 'string'],
  errors: true,
  validate: (schema: any, data: any) => {
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
export default decimalPrecisionKeyword;
