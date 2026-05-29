import Ajv from 'ajv';
import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from '../index';

const createAjv = () => {
  const ajv = new Ajv({ allErrors: true });
  ajvCustomFormatsRegistry(ajv);
  ajvCustomKeywordsRegistry(ajv);
  return ajv;
};

const validateFormat = (format: string, value: string) => {
  const ajv = createAjv();
  const validate = ajv.compile({ type: 'string', format });
  return validate(value);
};

describe('ajvCustomFormatsRegistry', () => {
  describe('uuid', () => {
    it('accepts valid UUIDs', () => {
      expect(validateFormat('uuid', 'e3ced088-62a2-418b-bda1-d114a37badb3')).toBe(true);
    });

    it('rejects invalid UUIDs', () => {
      expect(validateFormat('uuid', 'e3ced088-62a2-418b-bda1-d114a')).toBe(false);
    });
  });

  describe('india-PAN', () => {
    it('accepts valid PAN numbers', () => {
      expect(validateFormat('india-PAN', 'HNEPS8362B')).toBe(true);
      expect(validateFormat('india-PAN', 'ABCPQ1234G')).toBe(true);
    });

    it('rejects invalid PAN numbers', () => {
      expect(validateFormat('india-PAN', 'PT12H')).toBe(false);
    });
  });

  describe('india-Personal-PAN', () => {
    it('accepts personal PAN numbers', () => {
      expect(validateFormat('india-Personal-PAN', 'AAAPA1234A')).toBe(true);
    });

    it('rejects non-personal PAN numbers', () => {
      expect(validateFormat('india-Personal-PAN', 'HNEAS8362B')).toBe(false);
    });
  });

  describe('india-IFSC', () => {
    it('accepts valid IFSC codes', () => {
      expect(validateFormat('india-IFSC', 'SBIN0001234')).toBe(true);
      expect(validateFormat('india-IFSC', 'HDFC0000123')).toBe(true);
    });

    it('rejects invalid IFSC codes', () => {
      expect(validateFormat('india-IFSC', 'PT12H')).toBe(false);
    });
  });

  describe('india-pincode', () => {
    it('accepts valid pincodes', () => {
      expect(validateFormat('india-pincode', '516501')).toBe(true);
      expect(validateFormat('india-pincode', '110001')).toBe(true);
    });

    it('rejects invalid pincodes', () => {
      expect(validateFormat('india-pincode', '1234')).toBe(false);
    });
  });

  describe('udyam', () => {
    it('accepts valid Udyam registration IDs', () => {
      expect(validateFormat('udyam', 'UDYAM-MH-12-1234567')).toBe(true);
    });

    it('rejects invalid Udyam registration IDs', () => {
      expect(validateFormat('udyam', 'Udyam-12-34-1234567')).toBe(false);
      expect(validateFormat('udyam', 'UDYAM-12-34-1234567')).toBe(false);
    });
  });

  describe('positive-number-in-string', () => {
    it('accepts non-negative numeric strings', () => {
      expect(validateFormat('positive-number-in-string', '123')).toBe(true);
      expect(validateFormat('positive-number-in-string', '0')).toBe(true);
      expect(validateFormat('positive-number-in-string', '999.99')).toBe(true);
    });

    it('rejects negative or non-numeric strings', () => {
      expect(validateFormat('positive-number-in-string', '-123')).toBe(false);
      expect(validateFormat('positive-number-in-string', 'abc')).toBe(false);
    });
  });

  describe('utc-date-time', () => {
    it('accepts UTC timestamps with or without milliseconds', () => {
      expect(validateFormat('utc-date-time', '2024-09-21T14:30:00Z')).toBe(true);
      expect(validateFormat('utc-date-time', '2024-09-21T14:30:00.000Z')).toBe(true);
    });

    it('rejects non-UTC timestamps', () => {
      expect(validateFormat('utc-date-time', '12/09/2023')).toBe(false);
      expect(validateFormat('utc-date-time', '2024-09-21')).toBe(false);
    });
  });

  describe('iso8601-duration', () => {
    it('accepts valid ISO 8601 durations', () => {
      expect(validateFormat('iso8601-duration', 'P13D')).toBe(true);
      expect(validateFormat('iso8601-duration', 'PT12H')).toBe(true);
      expect(validateFormat('iso8601-duration', 'PT1H30M')).toBe(true);
    });

    it('rejects invalid duration strings', () => {
      expect(validateFormat('iso8601-duration', '12 hours')).toBe(false);
      expect(validateFormat('iso8601-duration', '1d')).toBe(false);
    });

    it('does not register the legacy iso8601-date-time alias', () => {
      const ajv = createAjv();
      expect(() => ajv.compile({ type: 'string', format: 'iso8601-date-time' })).toThrow();
    });
  });
});

describe('ajvCustomKeywordsRegistry', () => {
  const validateDecimalPrecision = (schema: Record<string, unknown>, data: unknown) => {
    const ajv = createAjv();
    const validate = ajv.compile(schema);
    return validate(data);
  };

  describe('decimalPrecision', () => {
    it('validates number precision', () => {
      expect(validateDecimalPrecision({ type: 'number', decimalPrecision: 2 }, 2)).toBe(true);
      expect(validateDecimalPrecision({ type: 'number', decimalPrecision: 2 }, 2.11)).toBe(true);
      expect(validateDecimalPrecision({ type: 'number', decimalPrecision: 2 }, 2.123)).toBe(false);
    });

    it('validates string precision', () => {
      expect(validateDecimalPrecision({ type: 'string', decimalPrecision: 2 }, '2')).toBe(true);
      expect(validateDecimalPrecision({ type: 'string', decimalPrecision: 2 }, '2.11')).toBe(true);
      expect(validateDecimalPrecision({ type: 'string', decimalPrecision: 2 }, '2.123')).toBe(false);
      expect(validateDecimalPrecision({ type: 'string', decimalPrecision: 2 }, '2.123a')).toBe(false);
    });

    it('rejects non-finite numbers', () => {
      expect(validateDecimalPrecision({ type: 'number', decimalPrecision: 2 }, Number.NaN)).toBe(
        false,
      );
    });
  });
});

describe('public API', () => {
  it('exports registry functions only', () => {
    expect(typeof ajvCustomFormatsRegistry).toBe('function');
    expect(typeof ajvCustomKeywordsRegistry).toBe('function');
  });
});
