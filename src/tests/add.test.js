const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello, ${name}`

test('should add two numbers', () =>{
    const result = add(3, 4);
    expect(result).toBe(7);

    if (result !== 7) {
        throw new Error('Added wrong numbers ${result}');
    }

});

test(`should have greeting with name var`, ()=>{
    const trash = generateGreeting('Cat');
    expect(trash).toBe('Hello, Cat');
})

test('should generate greeting for no name', () =>{
    const result = generateGreeting();
    expect(result).toBe('Hello, undefined');
})

