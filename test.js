const { config } = require('./config'); // assuming the provided code is in a file named 'config.js'
const assert = require('assert');

describe('config', () => {
    it('should create environment variables from an object', () => {
        const data = {
            key1: 'value1',
            key2: {
                key3: 'value3',
                key4: ['value4', 'value5']
            }
        };
        config(data);
        assert.strictEqual(process.env.KEY1, 'value1');
        assert.strictEqual(process.env.KEY2_KEY3, 'value3');
        assert.strictEqual(process.env.KEY2_KEY4_0, 'value4');
        assert.strictEqual(process.env.KEY2_KEY4_1, 'value5');
    });

    it('should create environment variables from a file', () => {
        const filePath = './test.json';
        fs.writeFileSync(filePath, JSON.stringify({
            key1: 'value1',
            key2: {
                key3: 'value3',
                key4: ['value4', 'value5']
            }
        }));
        config(filePath);
        assert.strictEqual(process.env.KEY1, 'value1');
        assert.strictEqual(process.env.KEY2_KEY3, 'value3');
        assert.strictEqual(process.env.KEY2_KEY4_0, 'value4');
        assert.strictEqual(process.env.KEY2_KEY4_1, 'value5');
    });
});
