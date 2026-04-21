import { FormatDefinition } from 'ajv';

const udyamFormat: FormatDefinition<string> = {
  type: 'string',
  validate: (data: string) => /^UDYAM-[A-Z]{2}-[0-9]{2}-\d{7}$/.test(data),
};
export default udyamFormat;
