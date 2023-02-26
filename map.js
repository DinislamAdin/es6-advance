const numbers = [3, 5, 6, 4, 3];
function getDoubled(number) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}

function doubleOldIt(num){
    return num * 2;
}

const doubleIt = num => num * 2;

const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
console.log(makeDoubleDirect);




const result = getDoubled(numbers);
console.log(result);
console.log(makeDouble);




const fiveTime = [1, 2, 3, 4, 5].map(x => x * 5);
console.log(fiveTime);