import { KeywordDefinition } from 'ajv';

const NUMERIC_STRING_PATTERN = /^-?\d+(\.\d+)?$/;

const countDecimalPlaces = (value: number): number => {
  if (!Number.isFinite(value)) {
    return Number.NaN;
  }

  const asString = value.toString();
  if (asString.includes('e') || asString.includes('E')) {
    const [mantissa] = value.toFixed(20).split('e');
    const normalized = mantissa.replace(/0+$/, '').replace(/\.$/, '');
    const decimalPart = normalized.split('.')[1];
    return decimalPart ? decimalPart.length : 0;
  }

  const decimalPart = asString.split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

const decimalPrecisionKeyword: KeywordDefinition = {
  keyword: 'decimalPrecision',
  type: ['number', 'string'],
  schemaType: 'number',
  errors: true,
  validate: (schema: number, data: unknown) => {
    if (typeof schema !== 'number' || schema < 0) {
      return false;
    }

    if (typeof data === 'number') {
      const precision = countDecimalPlaces(data);
      return !Number.isNaN(precision) && precision <= schema;
    }

    if (typeof data === 'string') {
      if (!NUMERIC_STRING_PATTERN.test(data)) {
        return false;
      }
      const decimalPart = data.split('.')[1];
      const precision = decimalPart ? decimalPart.length : 0;
      return precision <= schema;
    }

    return false;
  },
  metaSchema: {
    type: 'number',
    minimum: 0,
  },
  error: {
    message: (cxt) => `should have at most ${cxt.schema} decimal places`,
  },
};
export default decimalPrecisionKeyword;
