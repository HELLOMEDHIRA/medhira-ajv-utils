# India Formats

MEDHIRA AJV Utils provides validation formats specific to India.

## Available India Formats

| Format | Description |
|--------|-------------|
| `india-PAN` | Indian PAN number |
| `india-Personal-PAN` | Indian personal PAN number |
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

**Valid:** `HNEPS8362B`, `ABCPQ1234G`

**Invalid:** `PT12H`, `1234567890`

PAN format:

- 10 characters
- First 5 letters
- Next 4 digits
- Last 1 letter

## india-Personal-PAN

Validates Indian personal PAN numbers where the 4th character is `P`.

```json
{
  "pan": {
    "type": "string",
    "format": "india-Personal-PAN"
  }
}
```

**Valid:** `AAAPA1234A`

**Invalid:** `HNEPS8362B`, `PT12H`

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

**Valid:** `SBIN0001234`, `HDFC0000123`

**Invalid:** `PT12H`, `1234567890`

IFSC format:

- 11 characters
- First 4 letters (bank code)
- 5th character is `0`
- Last 6 alphanumeric characters

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

**Valid:** `516501`, `110001`

**Invalid:** `1234`, `1234567890`

PIN format: exactly 6 digits.

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

**Valid:** `UDYAM-MH-12-1234567`

**Invalid:** `Udyam-12-34-1234567`, `UDYAM-12-34-1234567`

Udyam format: `UDYAM-XX-YY-ZZZZZZZ`

- `XX` — 2-letter state code (e.g. `MH`, `DL`)
- `YY` — 2-digit district code
- `ZZZZZZZ` — 7-digit registration number

## Next Section

- [Other Formats](./other-formats.md)
