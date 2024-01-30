
class Deck {
    constructor(cards) {
        this.cards = cards
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

function createDeck() {
    var deck= new array(52)
    for (let i=1; i < 5; i++) {
        for (letj=1; i < 14; j++) {
            var card = Card(i,j)
            deck[((i*13)+j)] = card
            console.log(card)
        }
    }
    console.log(deck);
    return deck 
}
var gameDeck = new Deck(createDeck())

for ( let i = 0 ; i < deck.length ; i=i+1 ) {
    var newPlace = Math.floor(Math.random()* (deck.length-1)) + 1 
    var placeCard = deck[newPlace]
    deck[newPlace] = deck[i]
    deck[i] = placeCard
}