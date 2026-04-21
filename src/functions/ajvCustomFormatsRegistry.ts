import Ajv from 'ajv';
import FormatI from '../utils/formats/interfaces/FormatI.interface';
import ajvCustomFormats from '../utils/formats';

const ajvCustomFormatsRegistry = (ajv: Ajv) => {
  return ajvCustomFormats.forEach((format: FormatI) => ajv.addFormat(format.name, format.format));
};
export default ajvCustomFormatsRegistry;
