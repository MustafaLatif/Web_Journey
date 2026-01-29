/// npm i immutable
/// we use it because js is not a immutable language
let book =map({title:"harry potter"});
 function publish(book){
return book.set("ispublished", true);
 }
 book= publish(book);
console.log(book.toJs()); 