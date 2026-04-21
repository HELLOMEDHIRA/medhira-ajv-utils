import { FormatDefinition } from 'ajv';

const iso8601DurationFormat: FormatDefinition<string> = {
  type: 'string',
  validate: (data: string) => /^P(?!$)(\d+Y)?(\d+M)?(\d+W)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+(\.\d+)?S)?)?$/.test(data),
};
export default iso8601DurationFormat;
