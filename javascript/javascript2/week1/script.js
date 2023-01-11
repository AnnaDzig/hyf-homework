//1.1. Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestDanishWord() {
    return danishWords.sort((a, b) => a.length - b.length)[0];
}

console.log(shortestDanishWord()) ;

//1.2. Find and count the Danish letters

const danishString = "Jeg har en blå bil";
const letter = 'å'
const danishString2 = "Blå grød med røde bær";

const returnObject = {};



function oneLetterCounter(){
    let count = 1;
    for (let i = 0; i < danishString.length; i++) {
      if (danishString[i] === letter[i + 1]) {
        count++;
      } else {
        console.log(`total:${danishString.length} 'å' ${count} times`);
        count = 1;
      }
    }
}
oneLetterCounter();

function letterCounter() {
        // loop over input string
        for (let i = 0; i < danishString2.length; i++) {
          // check if character has been seen before
          if (returnObject.hasOwnProperty(danishString2[i])) {
            // increase its count by 1
            returnObject[danishString2[i]] += 1;
          } else {
            // add it to the object with a count of 1
            returnObject[danishString2[i]] = 1;
          }
        }
        return returnObject;
      }; 

console.log(letterCounter());
