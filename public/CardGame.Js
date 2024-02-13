
class Deck {
    position = 0
    constructor(cards) {
        this.cards = cards
    }
    shuffle(){
        for ( let i = 0 ; i < this.cards.length ; i=i+1 ) {
            var newPlace = Math.floor(Math.random()* (this.cards.length-1)) 
            var temp = this.cards[newPlace]
            this.cards[newPlace] = this.cards[i]
            this.cards[i] = temp
       }
       this.position = 0
    }
    deal(hand){
        for (let i=0; i < hand.length; i++) {
            hand[0] = cards[this.position]
            this.position = this.position + 1
        }
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
gameDeck.shuffle()
var playerHand = new Array(5)
var opponentHand = new Array(5)

function handValue(hand) {
    pairs = 0
    for (let i=)
}



/*for ( let i = 0 ; i < deck.length ; i=i+1 ) {
    var newPlace = Math.floor(Math.random()* (deck.length-1)) + 1 
    var placeCard = deck[newPlace]
    deck[newPlace] = deck[i]
    deck[i] = placeCard
}
*/