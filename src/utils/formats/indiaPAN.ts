import { FormatDefinition } from 'ajv';

const indiaPANFormat: FormatDefinition<string> = {
  type: 'string',
  validate: (data: string) => /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(data),
};
export default indiaPANFormat;
