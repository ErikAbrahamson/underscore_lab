// Standard shuffle with while-loop and splice.
function shuffle(array) {
  var arrayCopy = array, shuffled = [];
  while (arrayCopy > 0) {
    var randomKey = Math.floor(Math.random() * (arrayCopy.length + 1));
    shuffled.push(arrayCopy[randomKey]);
    arrayCopy.splice(randomKey, 1);
  }
  return shuffled;
}

// Beginning of cardShuffle example
function cardShuffle() {
  var currentIndex = deck.length;
  var deck = [
   '&#x1F0A1','&#x1F0A2','&#x1F0A3','&#x1F0A4','&#x1F0A5','&#x1F0A6','&#x1F0A7',
   '&#x1F0A8','&#x1F0A9','&#x1F0AA','&#x1F0AB','&#x1F0AD','&#x1F0AE','&#x1F0B1',
   '&#x1F0B2','&#x1F0B3','&#x1F0B4','&#x1F0B5','&#x1F0B6','&#x1F0B7','&#x1F0B8',
   '&#x1F0B9','&#x1F0BA','&#x1F0BB','&#x1F0BD','&#x1F0BE','&#x1F0C1','&#x1F0C2',
   '&#x1F0C3','&#x1F0C4','&#x1F0C5','&#x1F0C6','&#x1F0C7','&#x1F0C8','&#x1F0C9',
   '&#x1F0CA','&#x1F0CB','&#x1F0CD','&#x1F0CE','&#x1F0D1','&#x1F0D2','&#x1F0D3',
   '&#x1F0D4','&#x1F0D5','&#x1F0D6','&#x1F0D7','&#x1F0D8','&#x1F0D9','&#x1F0DA',
   '&#x1F0DB','&#x1F0DD', '&#x1F0DE'
 ];

  while (deck.length) {
    var randomIndex = Math.floor(Math.random() * currentIndex);
    var temp = deck[currentIndex];

    currentIndex -= 1;
    console.log(currentIndex);

    deck[currentIndex] = deck[randomIndex];
    deck[randomIndex] = tempValue;
  }
}

function updateDom(html, id) {
  var element = element.getElementById(id);
  element.innerHTML = html;


}
