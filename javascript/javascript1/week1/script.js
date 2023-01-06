//A future calculator
const yearOfBirth = 1984;
const yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`)

//A dog age calculator 
const dogYearOfBirth = 2020;
let dogYearFuture = 2045;
let dogYear = (dogYearFuture - dogYearOfBirth) * 5;
let shouldShowResultInDogYears = false;

if(shouldShowResultInDogYears) {
console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
} else {
    console.log(`Your dog will be ${dogYearFuture - dogYearOfBirth} dogs years old in ${dogYearFuture}`);  
}

//A house price estimation 
const house = {
    wideMeters: 8,
    deepMeters: 10,
    highMeters: 10,
    gardenSizeInMeter2: 100,
    price: 2500000,
}

const volumeInMeters = house.wideMeters * house.deepMeters * house.highMeters;
const housePrice = volumeInMeters * 2.5 * 1000 + house.gardenSizeInMeter2 * 300;
console.log(housePrice);
if (housePrice < house.price) {
    console.log('You are paying too much!')
}else {
    console.log('You are paying too little!')
}

//Name generator
const firstWords = ["Furry ","Fancy ","Sparkling ","Magnificent ","Bright ","Colorfull ","High ", "Easy ", "Awesome ", "Corporate "];
const secondWords = ["way ","group ","union ","season ","time ","fruit ","mix ","link" ,"story" ,"jorney ","ocean "];
const randomNumber = Math.floor(Math.random()*firstWords.length);
let startapName = firstWords[randomNumber] + secondWords[randomNumber];
console.log("The startup: \""+startapName+"\" contains " + startapName.length + " characters");


const passengerAge = 25;
if (passengerAge >= 0 && passengerAge <= 2) {
console.log ("You get a free ride")
} else if (passengerAge >= 3 && passengerAge <= 18) {
    console.log ("you get 15% discount")
} else if (passengerAge >=19 && passengerAge <= 26) {
    console.log ("You get 10% discount") 
} else if (passengerAge>=27 && passengerAge <= 59){
    console.log("You don't get any discount")
} else if (passengerAge >= 60) {
    console.log("You don't 70% discount")
}
else {
    console.log ("Wrong input")
}

let result = a + b < 4 ? "belolv" : "over"; 



let i = 10;
do {
    if(i===10){
console.log("Happy new year!")
    }
    else if(i===0){
      console.log("Omg it started");  
    } else {
        console.log(i)
    }
  i--;
} while (i >= 0) 

function min(a,b){
    if(a <= b){
        return a
    } else return b
}
min(2,5)

