# Installation

This guide will help you install MEDHIRA AJV Utils.

## Requirements

- **Node.js** 18+
- **npm** or **yarn**

## Install the Package

```bash
# NPM
npm install --save medhira-ajv-utils ajv ajv-formats ajv-errors

# Yarn
yarn add medhira-ajv-utils ajv ajv-formats ajv-errors
```

## Peer Dependencies

This package requires the following peer dependencies:

| Package | Version | Description |
|---------|---------|-------------|
| `ajv` | ^8.17.1 | Core validation library |
| `ajv-formats` | ^3.0.1 | JSON Schema formats |
| `ajv-errors` | ^3.0.0 | Custom error messages |

## Verify Installation

To verify the installation was successful:

```js
import { ajvCustomFormatsRegistry, ajvCustomKeywordsRegistry } from 'medhira-ajv-utils';

console.log('MEDHIRA AJV Utils installed successfully');
```

## Next Steps

- [Quick Start](quick-start.md) - Get up and running
- [Formats](../formats/all-formats.md) - Available validation formats
- [Keywords](../keywords/decimalprecision.md) - Custom keywords