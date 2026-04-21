# India Formats

MEDHIRA AJV Utils provides validation formats specific to India.

## Available India Formats

| Format | Description |
|--------|-------------|
| `india-PAN` | Indian PAN number |
| `india-IFSC` | Indian IFSC code |
| `india-pincode` | Indian PIN code |
| `udyam` | Udyam registration ID |

## india-PAN

Validates Indian Permanent Account Number (PAN).

```json
{
  "pan": {
    "type": "string",
    "format": "india-PAN"
  }
}
```

**Valid**: `HNEPS8362B`, `ABCPQ1234G`

**Invalid**: `PT12H`, `1234567890`

PAN Format:
- 10 characters
- First 5 letters (alphabet)
- Next 4 numbers
- Last 1 letter (alphabet)

## india-IFSC

Validates Indian Financial System Code (IFSC).

```json
{
  "ifsc": {
    "type": "string",
    "format": "india-IFSC"
  }
}
```

**Valid**: `SBIN0001234`, `HDFC0000123`

**Invalid**: `PT12H`, `1234567890`

IFSC Format:
- 11 characters
- First 4 letters (bank code)
- Next 0
- Last 6 numbers

## india-pincode

Validates Indian Postal Index Number (PIN).

```json
{
  "pincode": {
    "type": "string",
    "format": "india-pincode"
  }
}
```

**Valid**: `516501`, `110001`

**Invalid**: `1234`, `1234567890`

PIN Format:
- 6 digits

## udyam

Validates Udyam registration ID.

```json
{
  "udyam": {
    "type": "string",
    "format": "udyam"
  }
}
```

**Valid**: `Udyam-12-34-1234567`

**Invalid**: `e3ced088-62a2-418b-bda1-d114a`

Udyam Format:
- `Udyam-XX-YY-ZZZZZZZ`
- XX: 2-digit state code
- YY: 2-digit district code
- ZZZZZZZ: 7-digit registration number

## Next Section

- [Other Formats](./other-formats.md)