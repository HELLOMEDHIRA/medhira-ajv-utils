# Other Formats

Additional validation formats provided by MEDHIRA AJV Utils.

## Additional Formats

| Format | Description |
|--------|-------------|
| `uuid` | Universal Unique Identifier |
| `positive-number-in-string` | Non-negative number as string |
| `utc-date-time` | UTC date and time |
| `iso8601-duration` | ISO 8601 duration |

## uuid

Validates UUID (Universally Unique Identifier).

```json
{
  "id": {
    "type": "string",
    "format": "uuid"
  }
}
```

**Valid:** `e3ced088-62a2-418b-bda1-d114a37badb3`

**Invalid:** `e3ced088-62a2-418b-bda1-d114a`

Supports UUID versions 1, 3, 4, and 5.

## positive-number-in-string

Validates non-negative numbers represented as strings.

```json
{
  "count": {
    "type": "string",
    "format": "positive-number-in-string"
  }
}
```

**Valid:** `'123'`, `'0'`, `'999.99'`, `'0.5'`

**Invalid:** `'-123'`, `'abc'`, `'12.34.56'`

## utc-date-time

Validates UTC date and time format. Milliseconds are optional.

```json
{
  "timestamp": {
    "type": "string",
    "format": "utc-date-time"
  }
}
```

**Valid:** `'2024-09-21T14:30:00Z'`, `'2024-09-21T14:30:00.000Z'`

**Invalid:** `'12/09/2023'`, `'2024-09-21'`

Format: ISO 8601 with `Z` UTC suffix.

## iso8601-duration

Validates ISO 8601 duration format.

```json
{
  "duration": {
    "type": "string",
    "format": "iso8601-duration"
  }
}
```

**Valid:** `'P13D'`, `'PT12H'`, `'PT1H30M'`

**Invalid:** `'12 hours'`, `'1d'`

## Next Section

- [Keywords](../keywords/decimalprecision.md)
