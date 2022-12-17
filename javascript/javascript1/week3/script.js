//Item array removal
const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "katrine",
    "Tala",
  ];
  const nameToRemove = "Ahmad";
  
  // Write some code here
  /*const filteredNames = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i] !== nameToRemove) {
      filteredNames.push(names[i]);
    }
  }*/
  // Code done 

   delete names[nameToRemove];
  console.log(filteredNames); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']

 //When will we be there??
 const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };

  function whenWillBeThere (){
    let arivalTime = travelInformation.destinationDistance / travelInformation.speed;
    let inMinutes = (arivalTime - Math.floor(arivalTime)) * 60;
    return `${Math.floor(arivalTime)} hours and ${Math.floor(inMinutes)} minutes`;
}
  
  
  const travelTime = whenWillBeThere(travelInformation);
  console.log(travelTime); // 8 hours and 38 minutes

  //Series duration of my life
  const seriesDurations = [
    {
      title: "Friends",
      days: 10,
      hours: 4,
      minutes: 20,
    },
    {
      title: "The Big Bang Theory",
      days: 14,
      hours: 10,
      minutes: 38,
    },
    {
      title: "Breaking bad",
      days: 14,
      hours: 10,
      minutes: 38,
    },
  ];
 
  
  function logOutSeriesText() {
    const age = 80;
    const ageInHours = age * 365 * 24;
    let amount = 0;

    for (let i = 0; i < seriesDurations.length; i++) {
      let hoursTime = seriesDurations[i].days * 24 + seriesDurations[i].hours;
      let persentOfLife = hoursTime * 100 / ageInHours;
      console.log(`${seriesDurations[i].title} took ${persentOfLife.toFixed(3)} % of my life`);
      }
    }
  
  logOutSeriesText(); // logs out the text found above


  //NOnoN0nOYes (Note taking app)

  const notes = [];

function saveNote(content, id) {
  notes.push({"content": content, "id": id})// write some code here
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]


//_____Get a note___________

function getNote(id) {
  for (let i = 0; i < notes.length; i++){
    if (notes[1].id === id || id !== Number){
      return notes[i];
    } else return "Error"; 
    } }
 
const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

//______Log out notes_______

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++){
    return console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`)// your code here
}
}
logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry.