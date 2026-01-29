function add(a){
    return function(b){
        return a+b;
    };
}
//Normal function 
// (a+b)=>a,b 
// this is curry function
const add2 = a => b => a+b;
add(1,5)