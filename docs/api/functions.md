# Functions

API reference for MEDHIRA AJV Utils.

## ajvCustomFormatsRegistry

Registers all custom formats with an AJV instance.

```js
import { ajvCustomFormatsRegistry } from 'medhira-ajv-utils';
```

### Syntax

```js
ajvCustomFormatsRegistry(ajv);
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ajv` | `Ajv` | An AJV instance |

### Returns

`void`

### Example

```js
import Ajv from 'ajv';
import { ajvCustomFormatsRegistry } from 'medhira-ajv-utils';

const ajv = new Ajv();
ajvCustomFormatsRegistry(ajv);

// Now you can use custom formats
const schema = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' }
  }
};
```

---

## ajvCustomKeywordsRegistry

Registers all custom keywords with an AJV instance.

```js
import { ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';
```

### Syntax

```js
ajvCustomKeywordsRegistry(ajv);
```

### Parameters

| Parameter | Type | Description |
|-----------|------|-------------|
| `ajv` | `Ajv` | An AJV instance |

### Returns

`void`

### Example

```js
import Ajv from 'ajv';
import { ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';

const ajv = new Ajv();
ajvCustomKeywordsRegistry(ajv);

// Now you can use custom keywords
const schema = {
  type: 'object',
  properties: {
    price: { type: 'number', decimalPrecision: 2 }
  }
};
```

---

## Combined Usage

```js
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';

// Initialize AJV
const ajv = new Ajv({ allErrors: true });

// Add plugins
ajvErrors(ajv);
ajvFormats(ajv);

// Register custom formats and keywords
ajvCustomFormatsRegistry(ajv);
ajvCustomKeywordsRegistry(ajv);

// Use in schema
const schema = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    price: { type: 'number', decimalPrecision: 2 }
  }
};

const validate = ajv.compile(schema);
```

---

## Next Section

- [License](../about/license.md)