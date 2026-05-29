# Functions

Public API reference for MEDHIRA AJV Utils.

This package exposes **two functions only**. Individual format and keyword implementations are internal.

## ajvCustomFormatsRegistry

Registers all custom formats with an AJV instance.

### Import

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

### Registered Formats

| Format | Description |
|--------|-------------|
| `uuid` | UUID validation |
| `india-PAN` | Indian PAN number |
| `india-Personal-PAN` | Indian personal PAN |
| `india-IFSC` | Indian IFSC code |
| `india-pincode` | Indian PIN code |
| `udyam` | Udyam registration ID |
| `positive-number-in-string` | Non-negative number as string |
| `utc-date-time` | UTC ISO 8601 timestamp |
| `iso8601-duration` | ISO 8601 duration |

### Example

```js
import Ajv from 'ajv';
import { ajvCustomFormatsRegistry } from 'medhira-ajv-utils';

const ajv = new Ajv();
ajvCustomFormatsRegistry(ajv);

const schema = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
  },
};
```

---

## ajvCustomKeywordsRegistry

Registers all custom keywords with an AJV instance.

### Import

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

### Registered Keywords

| Keyword | Description |
|---------|-------------|
| `decimalPrecision` | Maximum decimal places for numbers and numeric strings |

### Example

```js
import Ajv from 'ajv';
import { ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';

const ajv = new Ajv();
ajvCustomKeywordsRegistry(ajv);

const schema = {
  type: 'object',
  properties: {
    price: { type: 'number', decimalPrecision: 2 },
  },
};
```

---

## Combined Usage

```js
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';
import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';

const ajv = new Ajv({ allErrors: true });

ajvErrors(ajv);
ajvFormats(ajv);
ajvCustomFormatsRegistry(ajv);
ajvCustomKeywordsRegistry(ajv);

const schema = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    price: { type: 'number', decimalPrecision: 2 },
  },
};

const validate = ajv.compile(schema);
```

## Next Section

- [License](../about/license.md)
