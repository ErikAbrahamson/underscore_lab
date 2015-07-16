function shuffle(array) {
  var arrayCopy = array, shuffled = [];
  while (arrayCopy > 0) {
    var randomKey = Math.floor(Math.random() * (arrayCopy.length + 1));
    shuffled.push(arrayCopy[randomKey]);
    arrayCopy.splice(randomKey, 1)
  }
  return shuffled;
}
