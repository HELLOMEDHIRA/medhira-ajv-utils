import { FormatDefinition } from 'ajv';

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

const uuidFormat: FormatDefinition<string> = {
  type: 'string',
  validate: (data) => UUID_PATTERN.test(data),
};
export default uuidFormat;
