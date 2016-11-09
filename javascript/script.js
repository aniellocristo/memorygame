// Arrays
var totalCards = ['apple.jpg', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
var finalContainer = [ ];

var countArray = function(array, item) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] === item) {
            count++;
        }
    }
    return count;
}

//Function to cycle through and make sure no more than two of the same cards are drawn.
var toPush = function(finalContainer, card) {
  if (countArray(finalContainer, card) < 2) {
    finalContainer.push(card)
  } else {
     card = totalCards[Math.floor(Math.random() * totalCards.length)];
     toPush(finalContainer, card)
  }
}

//For Loop - Send the randomly selected cards to the finalContainer array.
for (var i = 0; i < totalCards.length * 2; i++) {
  var card = totalCards[Math.floor(Math.random() * totalCards.length)];
  toPush(finalContainer, card)

}

var container = document.getElementById('gameBoard')

//For Loop - to append images to array index's.
for (var i = 0; i < totalCards.length * 2; i++) {
  var imgT = document.createElement('img')
  imgT.src = `./images/${finalContainer[i]}`
  container.appendChild(imgT)
}
