// Button

const clickButton = document.querySelector('.click')

const resetButton = document.querySelector('.reset')

// Div

const click = document.querySelector('.clicker')


let counter = 0

let defaultClicks

click.innerText = `Количество кликов: ${counter}`

clickButton.addEventListener('click', function() {
    counter++
    click.innerText = `Количество кликов: ${counter}`
})

resetButton.addEventListener('click', () => {
    counter = 0
    click.innerText = `Количество кликов: ${counter}`
})