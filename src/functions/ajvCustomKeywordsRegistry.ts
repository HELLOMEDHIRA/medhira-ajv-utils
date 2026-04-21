import Ajv, { KeywordDefinition } from 'ajv';
import ajvCustomKeywords from '../utils/keywords';

const ajvCustomKeywordsRegistry = (ajv: Ajv) => {
  return ajvCustomKeywords.forEach((keyword: KeywordDefinition) => ajv.addKeyword(keyword));
};
export default ajvCustomKeywordsRegistry;
