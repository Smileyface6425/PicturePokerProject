
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
    var deck= new Array(52)
    console.log(deck)
    for (let i=0; i < 4; i++) {
        for (let j=0; j < 13; j++) {
            var card = new Card(i,j)
            deck[((i*13)+j)] = card
            console.log(card)
            console.log(deck)
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
    temp = 0
    possibleHands = new Array(20)
    for (let i = 0; i < (length.hand - 1); i = i + 1){
        if (hand[i].value == hand[i+1].value){
            possibleHands[temp] = hand[i].value
            possibleHands[temp+1] = hand[i+1].value
            temp = temp + 2
        }
    }
}


/*firebase init emutators - to start
  firebase emulators:start - to run the darn thing*/
/*for ( let i = 0 ; i < deck.length ; i=i+1 ) {
    var newPlace = Math.floor(Math.random()* (deck.length-1)) + 1 
    var placeCard = deck[newPlace]
    deck[newPlace] = deck[i]
    deck[i] = placeCard
}
*/