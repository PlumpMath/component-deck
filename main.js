window.onload = function() {
  var suits = ['♠', '♣', '♥', '♦'],
      deck = [];

  /**
   * @constructor
   * @param suit {String} String of suit
   * @param face {Number} Number between 1 and 10
   */
  function Card(suit, face) {
    this.card = document.createElement('ryan-card');

    this.card.setAttribute('suit', suit);
    this.card.setAttribute('face', face);
    this.card.setAttribute('face-up', 'true');

    return this.card;
  }
  
  for (var i in suits) {
    for (var j = 1; j <= 10; j++) {
      deck.push(new Card(suits[i], j));
    }
  }

  for (var k in deck) {
    document.querySelector('.deck-container').appendChild(deck[k]);
  }
};
