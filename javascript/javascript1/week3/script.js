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
      console.log(`${seriesDurations[i].title} took ${persentOfLife} % of my life`);
      }
    }
  
  logOutSeriesText(); // logs out the text found above