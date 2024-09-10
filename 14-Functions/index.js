function happyBirthday(username, age){
    console.log("Happy birthday to you!")
    console.log("Happy birthday to you!")
    console.log("Happy birthday dear you!")
    console.log("Happy birthday to you!")
    console.log(`Hey ${username} you are ${age} years old.`)

}

happyBirthday("Priyanshu", 21)



function add(x, y){
    let result = x + y;
    return result;
}

function isEven(number){
    return number % 2 === 0 ? true: false
}

function isValidEmail(email){
    if(email.includes("@gmail.com")) return true;
}

console.log(add(3, 5))
console.log(isEven(45))
console.log(isValidEmail("helo@gmail.com"))

