import { FormatDefinition } from 'ajv';

const indiaPersonalPANFormat: FormatDefinition<string> = {
  type: 'string',
  validate: (data: string) =>  /^[A-Z]{3}P[A-Z][0-9]{4}[A-Z]$/.test(data),
};
export default indiaPersonalPANFormat;
