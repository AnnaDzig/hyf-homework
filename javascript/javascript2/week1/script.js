//1.1. Find the shortest word

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];
function shortestDanishWord() {
    return danishWords.sort((a, b) => a.length - b.length)[0];
}

console.log(shortestDanishWord()) ;