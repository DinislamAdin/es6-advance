const number = [12, 44, 34, 44, 66];
const half = number.map(x => x / 2);
const third = number.map(x => x / 3);
// console.log(half, third);

const friend = ['din', 'islam', 'karim', 'monga'];
const friends = friend.map(f => f[0]);
const friendLength = friend.map(f => f.length);
// console.log(friends, friendLength);



const products = [
    { id: 1, name: 'mobile', price: 50010 },
    { id: 2, name: 'laptop', price: 50010 },
    { id: 3, name: 'tablet', price: 50010 },
    { id: 4, name: 'watch', price: 50001 },
];

const items = products.map(products => products.name);
const price = products.map(products => products.price);
console.log(items, price);