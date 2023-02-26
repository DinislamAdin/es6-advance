const numbers = [35, 55, 64, 65, 46, 45, 37, 14, 64];

const five = numbers.find(num => num % 5 === 0);
const fiveAll = numbers.filter(num => num % 5 === 0);
console.log(five);
console.log(fiveAll);


const products = [
    { id: 1, name: 'mobile', price: 500100 },
    { id: 2, name: 'laptop', price: 500100 },
    { id: 3, name: 'tablet', price: 5001 },
    { id: 4, name: 'watch', price: 50001 },
];

const chip = products.find(cihpe => cihpe.price < 5555);

console.log(chip);