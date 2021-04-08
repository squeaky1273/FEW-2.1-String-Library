const strings = require('./index')

test('upperFirst', () => {
    expect(strings.upperFirst('foo')).toBe('Foo')
   })

test('upperAll', () => {
    expect(strings.upperAll('foo')).toBe('FOO')
})

test('upperFirstWords', () => {
    expect(strings.upperFirstWords('foo foo foo')).toBe('Foo Foo Foo')
})

test('removeExtraSpaces', () => {
    expect(strings.removeExtraSpaces('foo    foo     foo')).toBe('foo foo foo')
})

test('shift', () => {
    expect(strings.shift('Hello World')).toBe('ello WorldH')
})

test('kebabCase', () => {
    expect(strings.kebabCase('hello world')).toBe('hello-world')
})

test('snakeCase', () => {
    expect(strings.snakeCase('hello world')).toBe('hello_world')
})

test('camelCase', () => {
    expect(strings.camelCase('hello world')).toBe('helloWorld')
})

// test('removeExtraSpaces', () => {
//     expect(strings.removeExtraSpaces('foo    foo     foo')).toBe('foo foo foo')
// })

test('makeHashTag', () => {
    expect(strings.makeHashTag('Foo')).toBe('#Foo')
})