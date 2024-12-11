# normalize-hex-color

A lightweight TypeScript utility that normalizes hex color codes by transforming short hex colors into full 6-digit format.

## Installation

```bash
npm install normalize-hex-color
```

## Usage

```typescript
import { normalizeHexColor as nc } from 'normalize-hex-color';
// Basic usage
nc('1') // returns '#111111'
nc('12') // returns '#121212'
nc('123') // returns '#123123'
// With hash prefix
nc('#a') // returns '#AAAAAA'
nc('#aB') // returns '#ABABAB'
nc('#aBc') // returns '#ABCABC'

// errors
nc('') // throws error
nc('G') // throws error
```


## Test

```bash
npm test
```

## Features

- Converts short hex colors to full 6-digit format
- Supports optional hash (#) prefix
- Case-insensitive input (output is always uppercase)
- Written in TypeScript with full type support
- Zero dependencies
- Comprehensive error handling

## API

### `normalizeHexColor(input: string): string`

Normalizes a hex color code by repeating the input to create a full 6-digit hex color.

#### Parameters

- `input` (string): A hex color code (1-6 digits) with optional hash prefix

#### Returns

- Returns a normalized 6-digit hex color code with hash prefix (uppercase)

#### Throws

- Throws an error if input is not a string
- Throws an error if input contains invalid hex characters

## License

ISC © Hwanhoon Kim

## Contributing

Issues and pull requests are welcome! Feel free to contribute to this project on [GitHub](https://github.com/kimhwanhoon/normalize-hex-color).# normalize-hex-color
