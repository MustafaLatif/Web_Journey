/// Immer is immutability library
///npm i immer
import{produce} from 'immer';

let book =map({title:"harry potter"});
 function publish(book){
 return produce(book, draftBook =>{
    draftBook.isPublished = true;
});
 }
let updated= publish(book);
console.log(book);
console.log(updated) 