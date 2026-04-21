<p align="center">
  <img src="https://raw.githubusercontent.com/HELLOMEDHIRA/medhira/main/assets/medhira-logo.png" alt="MEDHIRA Logo" width="200"/>
</p>

<p align="center">
  <strong>Engineering Intelligence Across Everything</strong>
</p>

---

# medhira-ajv-utils

MEDHIRA AJV Utils is an advanced utility package designed to extend AJV (Another JSON Schema Validator) with custom formats and keywords, allowing developers to create more precise and tailored JSON schema validations. This package simplifies the process of defining complex validation rules, making it easier to handle specific application logic directly within your JSON schema.

## Why MEDHIRA?

In modern applications, data validation is critical. **MEDHIRA AJV Utils** provides:

- **Ready-to-use Formats** - Pre-built validation for common patterns
- **Custom Keywords** - Extend AJV with your own validation logic
- **India-Specific Formats** - PAN, IFSC, PIN code, Udyam validation
- **TypeScript Support** - Full type definitions included
- **Zero Dependencies** - Lightweight and fast

## Installation

```bash
# NPM
npm install --save medhira-ajv-utils ajv ajv-formats ajv-errors

# Yarn
yarn add medhira-ajv-utils ajv ajv-formats ajv-errors
```

## Usage

```js
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';
import ajvFormats from 'ajv-formats';

import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';

ajvErrors(ajv);
ajvFormats(ajv);

ajvCustomFormatsRegistry(ajv);
ajvCustomKeywordsRegistry(ajv);
```

## Keywords

### decimalPrecision

This Keyword works for both string and number values, enforcing strict control over decimal places.

```json
{
  "price": {
    "type": "number",
    "decimalPrecision": 2
  }
}

// Valid: 2, 2.11
// Invalid: 2.123
```

## Formats

### uuid

Validates UUID (Universally Unique Identifier).

```json
{
  "id": {
    "type": "string",
    "format": "uuid"
  }
}

// Valid: 'e3ced088-62a2-418b-bda1-d114a37badb3'
// Invalid: 'e3ced088-62a2-418b-bda1-d114a'
```

### india-PAN

Validates Indian PAN number.

```json
{
  "pan": {
    "type": "string",
    "format": "india-PAN"
  }
}

// Valid: 'HNEPS8362B'
// Invalid: 'PT12H'
```

### india-IFSC

Validates Indian IFSC code.

```json
{
  "ifsc": {
    "type": "string",
    "format": "india-IFSC"
  }
}

// Valid: 'SBIN0001234'
// Invalid: 'PT12H'
```

### india-pincode

Validates Indian PIN code.

```json
{
  "pincode": {
    "type": "string",
    "format": "india-pincode"
  }
}

// Valid: '516501'
// Invalid: 'PT12H'
```

### udyam

Validates Udyam registration ID.

```json
{
  "udyam": {
    "type": "string",
    "format": "udyam"
  }
}

// Valid: 'Udyam-12-34-1234567'
// Invalid: 'e3ced088-62a2-418b-bda1-d114a'
```

### positive-number-in-string

Validates positive numbers as strings.

```json
{
  "price": {
    "type": "string",
    "format": "positive-number-in-string"
  }
}

// Valid: '123'
// Invalid: '-123'
```

### utc-date-time

Validates UTC date and time.

```json
{
  "timestamp": {
    "type": "string",
    "format": "utc-date-time"
  }
}

// Valid: '2024-09-21T14:30:00Z'
// Invalid: '12/09/2023'
```

### iso8601-duration

Validates ISO 8601 duration format.

```json
{
  "duration": {
    "type": "string",
    "format": "iso8601-duration"
  }
}

// Valid: 'PT13D'
// Invalid: 'PT12H'
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## Sponsor & Support

To keep this library maintained and up-to-date, please consider sponsoring it on GitHub.

Or, if you're looking for private support or help in customizing the experience, reach out to us at **hello.medhira@gmail.com**

## About MEDHIRA

**MEDHIRA** - Engineering Intelligence Across Everything

- Website: [https://medhira.readthedocs.io/en/latest/](https://medhira.readthedocs.io/en/latest/)
- GitHub: [https://github.com/HELLOMEDHIRA](https://github.com/HELLOMEDHIRA)
- Email: hello.medhira@gmail.com

---

## License

Apache-2.0

---

Made with passion by MEDHIRA