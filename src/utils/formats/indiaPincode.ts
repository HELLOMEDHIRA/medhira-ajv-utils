import { FormatDefinition } from 'ajv';

const pincodeFormat: FormatDefinition<string> = {
  type: 'string',
  validate: (data: string) => /^\d{6}$/.test(data),
};
export default pincodeFormat;
