//Updating Array

const numbers=[1,2,3,4];

// Adding
//const added=[0,...numbers,5]
//index finding
const index=numbers.indexOf(2);
const added=[...numbers.slice(0, index),4,
    ...numbers.slice(index)  
]///[1,4,2,3]

//Removing
const removed=numbers.filter (n =>n !==2);
console.log(removed)

//Updating
numbers.map(n => n===2 ? 20 : n);
console.log(updated);