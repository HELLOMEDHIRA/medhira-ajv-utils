import { FormatDefinition } from 'ajv';

const ifscFormat: FormatDefinition<string> = {
  type: 'string',
  validate: (data: string) => /^[A-Z]{4}0[A-Z0-9]{6}$/.test(data),
};
export default ifscFormat;
