const faceDownCard = document.getElementById('face-down-card')
const lineOfCards = document.getElementById('line-of-cards')
const arrayCards = ['tres-de-ouros','quatro-de-paus','cinco-de-ouros','seis-de-copas','sete-de-espadas','sete-de-paus','nove-de-espadas']
const arrayAnimation = ['rotate','skew','scale','translate']

function animate(element){
    let removeClass = element.classList[1]
    element.classList.remove(removeClass)
    let indexAnimation = Math.floor(Math.random() * arrayAnimation.length)
    element.classList.add(`${arrayAnimation[indexAnimation]}`)
    console.log(element.classList)
}

faceDownCard.addEventListener('click', () => {
    let indexCard = Math.floor(Math.random() * 7)
    let indexAnimation = Math.floor(Math.random() * arrayAnimation.length)
    let card = document.createElement('div')
    card.innerHTML = `<img src='images/${arrayCards[indexCard]}.png'>`
    card.classList.add('card')
    lineOfCards.appendChild(card)
    card.classList.add(`${arrayAnimation[indexAnimation]}`)
    card.addEventListener('click', (e) => {
        animate(card)
    })
})