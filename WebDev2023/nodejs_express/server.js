const fs = require('fs');
const file = fs.readFileSync(__dirname + '/public/puzzle_input');
const input = file.toString();

const test = []
input.split('\n\n').forEach((x, index) => {
    x.split('\n').reduce((acc, curr) => {
        if (curr !== '' && curr) {
            const total = acc + parseInt(curr);
            test.push([index+1, total])
            return acc;
        }
        else return acc;
    }, 0);
});

let sortedTest  = test.sort((a, b) => a[1] - b[1]).reverse();
console.log(sortedTest[0][1] + sortedTest[1][1] + sortedTest[2][1])

