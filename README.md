
# env-from-json

This Node.js module exports a `config` function that can be used to create environment variables from a JSON object or file.

## Installation

To install this module, run the following command:

```
npm install env-from-json
```

## Usage

To use this module, first require it in your code:

```javascript
const { config } = require('env-from-json');
```

Then, call the `config` function with an object or a file path as the first argument:

```javascript
// create environment variables from an object
config({
    key1: 'value1',
    key2: {
        key3: 'value3',
        key4: ['value4', 'value5']
    }
});

// create environment variables from a file
config('./path/to/file.json');
```

The `config` function also takes an optional second argument that can be used to specify preferences:

```javascript
// create environment variables in lowercase and enable debug messages
config(undefined, { uppercase: false, debug: true });
```

The preferences object can have two properties: `uppercase` and `debug`. The `uppercase` property is a boolean that determines whether the keys of the resulting environment variables should be in uppercase or not. The default value is `true`. The `debug` property is a boolean that determines whether debug messages should be logged or not. The default value is `false`.

## License

This module is licensed under the MIT license.
