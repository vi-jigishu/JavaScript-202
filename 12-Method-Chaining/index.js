// Method chaining = calling one method after another in on line of code .Method


// ------------------------No METHOD CHAINING------------------------
let username = window.prompt("Enter your username: ");

username = username.trim();
let letter = username.charAt(0);
letter = letter.toUpperCase();

let extrachars= username.slice(1);
extrachars = extrachars.toLowerCase();
username = letter+extrachars;

console.log(username);




// ------------------------METHOD CHAINING------------------------

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username);