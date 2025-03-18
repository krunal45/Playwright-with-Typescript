console.log('Hello!');
let a = 'First'
let b = 2
let c = true
console.log(a);
console.log(b);
console.log(c);
console.log(typeof a);

console.log('--For Loop--');

let fruits = ['Apple','Banana','Chickoo','Dragon Fruit']
fruits.forEach(fruit => {
    console.log(fruit); 
});

console.log('--While Loop--');
let noOfFruits = fruits.length;
while(noOfFruits >0){
    console.log(fruits[noOfFruits - 1]);
    noOfFruits --;
}