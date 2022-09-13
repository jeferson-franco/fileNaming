const solution = require('./fileNaming.js');

test('test 1', () => {
    expect(solution(["doc", 
    "doc", 
    "image", 
    "doc(1)", 
    "doc"])).toEqual(["doc", 
    "doc(1)", 
    "image", 
    "doc(1)(1)", 
    "doc(2)"]);
});

test('test 2', () => {
    expect(solution(["a(1)", 
    "a(6)", 
    "a", 
    "a", 
    "a", 
    "a", 
    "a", 
    "a", 
    "a", 
    "a", 
    "a", 
    "a"])).toEqual(["a(1)", 
    "a(6)", 
    "a", 
    "a(2)", 
    "a(3)", 
    "a(4)", 
    "a(5)", 
    "a(7)", 
    "a(8)", 
    "a(9)", 
    "a(10)", 
    "a(11)"]);
});

test('test 3', () => {
    expect(solution(["dd", 
    "dd(1)", 
    "dd(2)", 
    "dd", 
    "dd(1)", 
    "dd(1)(2)", 
    "dd(1)(1)", 
    "dd", 
    "dd(1)"])).toEqual(["dd", 
    "dd(1)", 
    "dd(2)", 
    "dd(3)", 
    "dd(1)(1)", 
    "dd(1)(2)", 
    "dd(1)(1)(1)", 
    "dd(4)", 
    "dd(1)(3)"]);
});

test('test 4', () => {
    expect(solution(["a", 
    "b", 
    "cd", 
    "b ", 
    "a(3)"])).toEqual(["a", 
    "b", 
    "cd", 
    "b ", 
    "a(3)"]);
});

test('test 5', () => {
    expect(solution(["name", 
    "name", 
    "name(1)", 
    "name(3)", 
    "name(2)", 
    "name(2)"])).toEqual(["name", 
    "name(1)", 
    "name(1)(1)", 
    "name(3)", 
    "name(2)", 
    "name(2)(1)"]);
});

test('test 6', () => {
    expect(solution([])).toEqual([]);
});
