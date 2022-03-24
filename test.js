const { config } = require('./index');
test('chamando com debug', () => {
    config('./test.json', { debug: true });
});
test('chamando com uppercase', () => {

    config('./test.json', { uppercase: false });
});
test('chamando com default', () => {

    config(undefined, { debug: true });
});

