import { FormatDefinition } from 'ajv';

interface FormatI {
  name: string;
  format: FormatDefinition<any>;
}
export default FormatI;
