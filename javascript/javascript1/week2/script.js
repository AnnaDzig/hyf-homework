
//Fllight booking fullname function
function gettFullname (firstname, surname, useFormalName, gender) {
    if (useFormalName == true && gender == 'male') {
        return `Lord ${firstname} ${surname}`
    } else if (useFormalName == true && gender == 'female'){
        return `Mis ${firstname} ${surname}`
    }else {
        return `${firstname} ${surname}`
    }
}

let fullname1 = gettFullname('Leonardo', 'DiCaprio', true, 'male')
let fullname2 = gettFullname('Angellina', 'Jolie', true, 'female')
let fullname = gettFullname('Joey', 'Ttibbiani', false, 'male')

//Event application

let weekday = new Date();
function getEventWeekday(event) {
  
const dayTitle = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = weekday.getDay();

if(typeof event === 'number') {
    if (event > (7 - day)){
        let futureEventIndex = (event + day) % 7;
        return `The event will be on ${dayTitle[futureEventIndex]}`;
    }else if (event < (7 - day)){
        let futureEventIndexLover = day + event;
        return `The event will be on ${dayTitle[futureEventIndexLover]}`;
    }else {
        console.log('incorrect')
    }
}
}
getEventWeekday(12)


//Weather wear
const clothesToWear = temperatureOutside;

function temperatureOutside(temperature) {
    if (typeof(temperature) != 'number'){
        advice = 'incorrect';
    } else if (temperature < 0) {
        advice = 'It is freezing outside, put on gloves, a scarf, a warm jacket and a hat'
    } else if (temperature <= 10) {
        advice = 'It is cold outside, put on a jacket'
    } else if (temperature <= 15){
        advice = 'It is pretty warm  outside, you do not need to put on your jacket'
    } else {
        advice = 'It is hot  outside, take off your clothes and go to the beach '
    }

    return advice;
}

temperatureOutside(18)

//Student manager 

const class07Students = [];
function getNumberOfStudents() {
  return class07Students.length
}
function addStudentToClass(studentName) {

    if (studentName) {
        // if the class is full
        if (class07Students.length < 6) {
            if (class07Students.includes(studentName)) {
                return alert ("Student " + studentName + " already existed in class 07");
            } else {
                class07Students.push(studentName);
                return class07Students;
            }
        } else {
            // Add Queen 
            if (studentName === "Queen") {
                class07Students.push(studentName);
                return class07Students;
            } else {
                return alert ("Cannot add more students to class 07");
            }
        }
    } else {
        return alert ("Please enter student name");
    }

}

//Candy helper

const boughtCandyPrices = [];
const table = {
    "sweet": 0.5,
    "chocolate": 0.7,
    "toffee": 1.1,
    "chewing-gum": 0.03
};

let amountToSpend = Math.random() * 100;

function addCandy(candyType, weight) { 
  if (table.hasOwnProperty(candyType)) {
      boughtCandyPrices.push(table[candyType] * weight);
      return boughtCandyPrices;
  }
  return "Incorrect";  
}
function canBuyMoreCandy() {
  let index = 0;
  let sum = 0;
  while (index < boughtCandyPrices.length) {
      sum += boughtCandyPrices[index];
      index++;
  }
  
  if (amountToSpend > sum) {
      console.log("You can buy more, so please do!");
  } else {
      console.log("Enough candy for you!");
  }

}
console.log(addCandy("mint", 10));
console.log(addCandy("toffee", 50));
console.log(addCandy("chewing-gum", 10));
console.log(addCandy("chocolate", 40));
canBuyMoreCandy();
