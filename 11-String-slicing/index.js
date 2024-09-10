// Stting Slicing = creating a sustring from a portion of anoteher String. 
// string.slice(start, end);


const fullName = "Bro Code";

let firstName = fullName.slice(0, 3);
console.log(firstName)

console.log(fullName.slice(3))

console.log(fullName.slice(-1))   //Will begin from the end.


console.log("Yout first name is "+ fullName.slice(0, fullName.indexOf(" ")))


const email= "Bro1@gmail.com"

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") +1 );
console.log(username);
console.log(extension);