const lucas1 = document.querySelector('.lucas'); 
const john1 = document.querySelector('.john'); 
const bmi = document.querySelector('.bmi'); 
const celcius1 = document.querySelector(".celcius"); 
const farenheit1 = document.querySelector(".farenheit"); 
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");


var lucasHeight = 1.69; 
var johnHeight = 1.95; 

var lucasWeight = 78; 
var johnWeight = 92; 

var lucas = lucasWeight / (lucasHeight * lucasHeight); 
lucas = Math.round(lucas * 100) / 100; 

lucas1.innerHTML += lucas; 

var john = johnWeight / (johnHeight * johnHeight); 
john = Math.round(john * 100) / 100; 

john1.innerHTML += john; 


if(lucas > john){
    console.log("The BMI of John is " + john + "The BMI of Lucas is " + lucas + "Lucas' BMI is higher than John's BMI that is " + true); 
    bmi.innerHTML += "The BMI of John is " + john + " The BMI of Lucas is " + lucas + " Lucas' BMI is higher than John's BMI that is " + true; 
}

var celcius = 44; 
var celToFarenheit = (celcius * 1.8) + 32; 
console.log(`${celcius}°C is ${celToFarenheit}°F`); 


var farenheit = 70; 
var fartoCelcius = (farenheit - 32) * (5/9); 
fartoCelcius = Math.round(fartoCelcius * 100) / 100; 
console.log(`${farenheit}°F is ${fartoCelcius}°C`); 

celcius1.innerHTML += `${celcius}°C is ${celToFarenheit}°F`; 
farenheit1.innerHTML += `${farenheit}°F is ${fartoCelcius}°C`; 

var output = `Lucas' BMI (${lucas}) is higher than John's (${john})!`;

if(lucas > john){
    var output1 = "Lucas BMI is higher than John's"
}

for(let i =0; i < output1.length; i++){
    console.log(output1.charAt(i)); 
    question1.innerHTML += output1.charAt(i) + "~"; 
}

question2.innerHTML += output; 






