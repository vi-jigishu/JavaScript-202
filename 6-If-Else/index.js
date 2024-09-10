// if(1){

// }
// else if(2){

// }
// else{

// }


const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);


    if(age>=100){
        resultElement.textContent = `You are too old to enter this website`;
    }
    else if(age == 0){
        resultElement.textContent = `You cant enter. You are just born`;
    }
    else if(age>=18) resultElement.textContent =`You are old enough to enetr this site`;

    else if(age<0) resultElement.textContent =`Your age can't be negative`;

    else resultElement.textContent = `You must be 18+ to enter this website`;
}
