//Updated Object
//  There is two ways to update object
//Assign object
 
const person={name:"john"};
const updated = object.assign({},person,{name:"bob"})//person will copy all the property of that object person
console.log(updated);

//There is other way to update object is spread operator

const person1={name:"john"};
const updated1={...person1, name:"bob"} /// ... is spread operator its copy all peroperty of person1
console.log(updated1); 