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
let houseCosts = 2500000;
let wideMeters = 8;
let deepMeters = 10;
let highMeters = 10;
let gardenSizeInMeter2 = 100;
let volumeInMeters = wideMeters * deepMeters * highMeters;
let housePrice = volumeInMeters * 2.5 * 1000 + gardenSizeInMeter2 * 300;
console.log(housePrice);
if (housePrice < houseCosts) {
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
