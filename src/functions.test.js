const {
    capitalize,
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray,
} = require('./functions');

//Capitalize tests
test('Capitalize function exists', () => {
    expect(typeof capitalize).toBe('function');
});

test('Capitalize first letter', () => {
    expect(capitalize('hello')).toBe('Hello');
});
// check for edges cases like: no input, a single character input, etc

test('Capitalize given no input', () => {
    expect(() => capitalize()).toThrow(Error);
});

test('Capitalize: Length 1 input', () => {
    expect(capitalize('a')).toBe('A');
});

// reverseString tests
test('reverseString: function exists', () => {
    expect(typeof reverseString).toBe('function');
});

test('reverseString: function reverses', () => {
    expect(reverseString('hello')).toBe('olleh');
});
test('reverseString: Function provides input', () => {
    expect(() => reverseString()).toThrow(Error);
});

// calculator() tests
test('calculator(): function exists', () => {
    expect(typeof calculator).toBe('function');
});

test('calculator(): addition works', () => {
    expect(calculator(2, 3).add).toBe(5);
});
test('calculator(): subtraction works', () => {
    expect(calculator(5, 3).subtract).toBe(2);
});

test('calculator(): multiplication works', () => {
    expect(calculator(2, 3).multiply).toBe(6);
});
test('calculator(): divison works', () => {
    expect(calculator(6, 2).divide).toBe(3);
});

//caesarCipher tests
test('caesarCipher(): function exists', () => {
    expect(typeof caesarCipher).toBe('function');
});

test('caesarCipher(): Ciphers letters', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('caesarCipher(): High shift factor', () => {
    expect(caesarCipher('abc', 100)).toBe('wxy');
});

test('caesarCipher(): capital letters', () => {
    expect(caesarCipher('dEf', 3)).toBe('gHi');
});
test('caesarCipher(): punctuation', () => {
    expect(caesarCipher('abc,def', 3)).toBe('def,ghi');
});

//analyzeArray tests
test('analyzeArray(arr): function exists', () => {
    expect(typeof analyzeArray).toBe('function');
});

test('analyzeArray(arr): Calculations work', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
