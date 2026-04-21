import { FormatDefinition } from 'ajv';

const positiveNumberInStringFormat: FormatDefinition<string | number> = {
  type: 'string',
  validate: (data: string | number) => {
    const number = typeof data === 'string' ? parseFloat(data) : data;
    const result = !isNaN(number) && number >= 0;
    return result;
  },
};
export default positiveNumberInStringFormat;
