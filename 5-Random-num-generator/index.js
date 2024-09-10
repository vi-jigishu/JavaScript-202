//RANDOM NUMBER GENERATOR


// let randomNum = Math.floor(Math.random() * 6) + 1;

// const min =50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max- min)) + min;

// console.log(randomNum);


const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLable");
const min =1;
const max= 6;
let randomNum;


myButton.onclick = function(){
    randomNum = Math.floor(Math.random() * max)+min;
    myLabel.textContent = randomNum;
}