// ternary operator = a shortcut to if{} and else{} statements. Helps to assign a variable based on a condition  
//                    condition ? codeIftrue : codeIfFalse;


let age = 19;
// age >=18 ? console.log("You are an adult") : console.log("You are a minor");

let message = age >=18 ? "You are an adult" : "You are a minor";
console.log(message);



let purchaseAmount = 125;
let discount = purchaseAmount >=100 ? 10 : 0;
console.log(`Your total is $${purchaseAmount - purchaseAmount*(discount/100)}`);