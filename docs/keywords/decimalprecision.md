# decimalPrecision

The `decimalPrecision` keyword enforces strict control over decimal places.

## Usage

Works with both `number` and `string` types.

### For Number Type

```json
{
  "price": {
    "type": "number",
    "decimalPrecision": 2
  }
}
```

**Valid**: `2`, `2.11`

**Invalid**: `2.123`

### For String Type

```json
{
  "amount": {
    "type": "string",
    "decimalPrecision": 2
  }
}
```

**Valid**: `'2'`, `'2.11'`

**Invalid**: `'2.123'`, `'2.123a'`

## Examples

### Currency Values

```json
{
  "price": {
    "type": "number",
    "decimalPrecision": 2
  }
}
{
  "price": 19.99
}
```

### Percentage

```json
{
  "rate": {
    "type": "number",
    "decimalPrecision": 2
  }
}
{
  "rate": 5.50
}
```

### String Currency

```json
{
  "amount": {
    "type": "string",
    "decimalPrecision": 3
  }
}
{
  "amount": "150.123"
}
```

## Error Messages

Default error message:

```
should have at most X decimal places
```

## Combining with Other Keywords

```json
{
  "price": {
    "type": "number",
    "minimum": 0,
    "decimalPrecision": 2
  }
}
```

## Next Section

- [API Reference](../api/functions.md)