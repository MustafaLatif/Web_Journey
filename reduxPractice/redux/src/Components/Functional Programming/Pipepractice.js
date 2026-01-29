const trim=str=>str.trim();
const wrap=(str,type)=>`<${type}>${str}<${type}/>`;
// in curry function we write this wrap in this way
// const wrap = type => str =>`<${type}>${str}<${type}/>
const toLowerCase=str=>str.toLowerCase();
// transform we used it for Lodash utility library which we used fro clean code 
// npm i LoDash 
// pipe: every function in the pipe function have to a function
const transform =pipe(trim,toLowerCase,wrap("div"));
console.log(tranform(input));