import ifscFormat from './indiaIFSC';
import indiaPANFormat from './indiaPAN';
import indiaPersonalPANFormat from './indiaPersonalPAN';
import pincodeFormat from './indiaPincode';
import FormatI from './interfaces/FormatI.interface';
import iso8601DurationFormat from './iso8601Duration';
import positiveNumberInStringFormat from './positiveNumberInString';
import udyamFormat from './udyam';
import UTCTimeFormat from './UTCTime';
import uuidFormat from './uuid';

const ajvCustomFormats: FormatI[] = [
  {
    name: 'uuid',
    format: uuidFormat,
  },
  {
    name: 'udyam',
    format: udyamFormat,
  },
  {
    name: 'positive-number-in-string',
    format: positiveNumberInStringFormat,
  },
  {
    name: 'utc-date-time',
    format: UTCTimeFormat,
  },
  {
    name: 'iso8601-date-time',
    format: iso8601DurationFormat,
  },
  {
    name: 'india-PAN',
    format: indiaPANFormat,
  },
  {
    name: 'india-Personal-PAN',
    format: indiaPersonalPANFormat,
  },
  {
    name: 'india-pincode',
    format: pincodeFormat,
  },
  {
    name: 'india-IFSC',
    format: ifscFormat,
  },
];
export default ajvCustomFormats;
