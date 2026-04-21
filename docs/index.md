---
title: MEDHIRA AJV Utils
---

<p align="center">
  <img src="https://raw.githubusercontent.com/HELLOMEDHIRA/medhira/main/assets/medhira-logo.png" alt="MEDHIRA Logo" width="150"/>
</p>

<p align="center">
  <strong>Engineering Intelligence Across Everything</strong>
</p>

---

MEDHIRA AJV Utils is an advanced utility package designed to extend AJV (Another JSON Schema Validator) with custom formats and keywords, allowing developers to create more precise and tailored JSON schema validations.

!!! note
    This package requires **ajv**, **ajv-formats**, and **ajv-errors** as peer dependencies.

## Why MEDHIRA?

In modern applications, data validation is critical. **MEDHIRA AJV Utils** provides:

- **Ready-to-use Formats** - Pre-built validation for common patterns
- **Custom Keywords** - Extend AJV with your own validation logic
- **India-Specific Formats** - PAN, IFSC, PIN code, Udyam validation
- **TypeScript Support** - Full type definitions included
- **Zero Dependencies** - Lightweight and fast

## Key Features

- :material-check-circle: **Custom Formats** - UUID, India-PAN, IFSC, PIN code, Udyam
- :material-key: **Custom Keywords** - decimalPrecision validation
- :material-file-document: **ISO 8601** - Date, time, duration formats
- :material-language-typescript: **Full TypeScript Support**
- :material India: **India-Specific** - Indian business identifiers

## Quick Example

```js
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';

ajvErrors(ajv);
ajvFormats(ajv);

ajvCustomFormatsRegistry(ajv);
ajvCustomKeywordsRegistry(ajv);

const schema = {
  type: 'object',
  properties: {
    id: { type: 'string', format: 'uuid' },
    pan: { type: 'string', format: 'india-PAN' },
    price: { type: 'number', decimalPrecision: 2 }
  }
};

const validate = ajv.compile(schema);
```

## Sponsor & Support

To keep this library maintained and up-to-date, please consider sponsoring it on GitHub.

Or, if you're looking for private support or help in customizing the experience, reach out to us at **hello.medhira@gmail.com**

---

**MEDHIRA** - Engineering Intelligence Across Everything
