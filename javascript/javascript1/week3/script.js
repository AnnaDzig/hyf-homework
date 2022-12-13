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