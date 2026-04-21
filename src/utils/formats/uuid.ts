import { FormatDefinition } from 'ajv';
import { validate as uuidValidate } from 'uuid';
const uuidFormat: FormatDefinition<string> = {
  type: 'string',
  validate: (data) => uuidValidate(data),
};
export default uuidFormat;
