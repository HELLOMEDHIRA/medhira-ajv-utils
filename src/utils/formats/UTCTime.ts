import { FormatDefinition } from 'ajv';

const UTCTimeFormat: FormatDefinition<string> = {
  type: 'string',
  validate: (data: string) => /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(data),
};
export default UTCTimeFormat;
