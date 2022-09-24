let player = {
    name: "Vinicius",
    chips: 150
}

let cards = []
let sum = 0

let isAlive = false
let hasBlackjack = false
let message = ""

let messageEl = document.getElementById("message")
let sumEl = document.getElementById("sum")
let cardsEl = document.querySelector("#cards")
let playerEl = document.querySelector("#player")

function getRandomCard(){
    let randomNumber =  Math.floor(Math.random() * 13 + 1)
    
    if(randomNumber > 10 && randomNumber < 14){
        return 10
    } else if(randomNumber === 1){
        return 11
    } else{
        return randomNumber
    }
}

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    isAlive = true
    hasBlackjack = false

    cards = [firstCard, secondCard]
    sum = cards[0] + cards[1]

    renderGame()
}

function renderGame(){
  
    cardsEl.textContent = "Cards:"
    sumEl.textContent = "Sum: " + sum

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i]
    }

    if(sum < 21){
        message = "Do you want to draw a new card? 🙂"
    } else if(sum === 21){
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackjack = true
    } else{
        message = "You're out of the game! 😭"
        isAlive = false
    }
    messageEl.textContent = message 

    if(hasBlackjack === true){
        player.chips += 100
    }
    playerEl.textContent = player.name + ": $" + player.chips
}

function newCard(){
    if(isAlive === true && hasBlackjack === false){
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
}