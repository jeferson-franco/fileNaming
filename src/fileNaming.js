function solution(names) {
    let result = [];
    let map = new Map();
    for (let i = 0; i < names.length; i++) {
        if (map.has(names[i])) {
            let count = map.get(names[i]);
            let newName = names[i] + '(' + count + ')';
            while (map.has(newName)) {
                count++;
                newName = names[i] + '(' + count + ')';
            }
            map.set(names[i], count + 1);
            map.set(newName, 1);
            result.push(newName);
        } else {
            map.set(names[i], 1);
            result.push(names[i]);
        }
    }
    return result;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test fileNaming

// alternative solution
