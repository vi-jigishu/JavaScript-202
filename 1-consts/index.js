// const=  a variable that cannot be changed

const PI = 3.14159;
let radius;
let circumference;

// PI = 444;    

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value
    radius = Number(radius);
    circumference = 2*PI*radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}


// radius = window.prompt('Eneter the radius: ')
// radius = Number(radius);
// circumference = 2*PI*radius;

// console.log(circumference);