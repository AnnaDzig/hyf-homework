//A future calculator
const yearOfBirth = 1984;
let yearFuture = 2027;
let age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`)

//A dog age calculator 
const dogYearOfBirth = 2020;
let dogYearFuture = 2045;
let dogYear = (dogYearFuture - dogYearOfBirth)/2*10;
let shouldShowResultInDogYears = false;

if(shouldShowResultInDogYears) {
console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
} else {
    console.log(`Your dog will be ${dogYearFuture - dogYearOfBirth} dogs years old in ${dogYearFuture}`);  
}