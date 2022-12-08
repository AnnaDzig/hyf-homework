
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


