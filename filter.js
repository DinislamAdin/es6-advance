const numbers = [35, 55, 64, 65, 46, 45, 37, 14, 64];
const bigNums = numbers.filter(number => number > 20);
const tiney = numbers.filter(n => n < 30);
const odd = numbers.filter(num => num % 2 ===0)
console.log(odd);



const products = [
    { id: 1, name: 'mobile', price: 500100 },
    { id: 2, name: 'laptop', price: 500100 },
    { id: 3, name: 'tablet', price: 50010 },
    { id: 4, name: 'watch', price: 50001 },
];


const expensive = products.filter(product => product.price > 100000);

console.log(expensive);