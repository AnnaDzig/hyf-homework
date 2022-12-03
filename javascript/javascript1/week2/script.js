
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
