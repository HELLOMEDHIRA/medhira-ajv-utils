# Quick Start

Get started with MEDHIRA AJV Utils in 5 minutes.

## Basic Setup

Step 1: Import required packages:

```js
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';
```

Step 2: Initialize AJV with plugins:

```js
const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);
ajvFormats(ajv);
```

Step 3: Register custom formats and keywords:

```js
ajvCustomFormatsRegistry(ajv);
ajvCustomKeywordsRegistry(ajv);
```

Step 4: Use in your schema:

```js
const schema = {
  type: 'object',
  properties: {
    userId: { type: 'string', format: 'uuid' },
    panCard: { type: 'string', format: 'india-PAN' },
    price: { type: 'number', decimalPrecision: 2 }
  }
};

const validate = ajv.compile(schema);
const data = {
  userId: 'e3ced088-62a2-418b-bda1-d114a37badb3',
  panCard: 'HNEPS8362B',
  price: 19.99
};

const valid = validate(data);
if (!valid) {
  console.log(validate.errors);
}
```

## Complete Example

```js
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';

// Initialize
const ajv = new Ajv({ allErrors: true });
ajvErrors(ajv);
ajvFormats(ajv);

// Register custom formats and keywords
ajvCustomFormatsRegistry(ajv);
ajvCustomKeywordsRegistry(ajv);

// Define schema
const schema = {
  type: 'object',
  required: ['id', 'pan', 'amount'],
  properties: {
    id: { type: 'string', format: 'uuid' },
    pan: { type: 'string', format: 'india-PAN' },
    ifsc: { type: 'string', format: 'india-IFSC' },
    pincode: { type: 'string', format: 'india-pincode' },
    amount: { type: 'number', decimalPrecision: 2 }
  }
};

// Validate
const validate = ajv.compile(schema);
const result = validate({
  id: 'e3ced088-62a2-418b-bda1-d114a37badb3',
  pan: 'HNEPS8362B',
  ifsc: 'SBIN0001234',
  pincode: '516501',
  amount: 1500.50
});

console.log('Valid:', result);
```

## Next Steps

- [Formats](../formats/all-formats.md) - Available validation formats
- [Keywords](../keywords/decimalprecision.md) - Custom keywords