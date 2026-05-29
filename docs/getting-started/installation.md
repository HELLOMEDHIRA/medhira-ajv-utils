# Installation

This guide will help you install MEDHIRA AJV Utils.

## Requirements

- **Node.js** 18+
- **npm** or **yarn**

## Install the Package

```bash
# NPM
npm install medhira-ajv-utils ajv ajv-formats ajv-errors

# Yarn
yarn add medhira-ajv-utils ajv ajv-formats ajv-errors
```

## Peer Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| `ajv` | ^8.20.0 | Core validation library |
| `ajv-formats` | ^3.0.1 | Standard JSON Schema formats |
| `ajv-errors` | ^3.0.0 | Custom error messages |

This package has **no runtime dependencies**.

## Verify Installation

```js
import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';

console.log('MEDHIRA AJV Utils installed successfully');
console.log(typeof ajvCustomFormatsRegistry); // 'function'
console.log(typeof ajvCustomKeywordsRegistry); // 'function'
```

## Next Steps

- [Quick Start](quick-start.md) — Get up and running
- [Formats](../formats/all-formats.md) — Available validation formats
- [Keywords](../keywords/decimalprecision.md) — Custom keywords
