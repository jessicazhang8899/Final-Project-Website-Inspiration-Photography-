//To close the modal window (with the welcome message) before the main website can show up.//
const modalCloseBtn = document.querySelector ('.modal-close-button')
modalCloseBtn.addEventListener('click', function(event) {
    event.preventDefault()
    const modalWindow = document.querySelector('.modal-window')
    modalWindow.style.display = 'none';
})

//To increase user interactity by clicking the "Explore Services" button; then can see see the hidden text and the website background color change.//
const exploreBtn = document.querySelector('#body-change-color')
exploreBtn.addEventListener('click', function(event) {
    event.preventDefault()
    const h3 = document.querySelector('.free-trial')
    h3.style.display = 'block'
    const body = document.querySelector ('body')
    body.style.backgroundColor = 'rgb(255, 248, 240)'
})

//User can also get more interactive elements by clicking the "Submit" button when they input the form, and will see a "Thank you!" animation.//
const submitBtn = document.querySelector('#show-thanks')
submitBtn.addEventListener('click', function(event) {
    event.preventDefault()
    const h4 = document.querySelector('.thanks')
    h4.style.display = 'block'
    const body = document.querySelector('body')
    body.style.backgroundColor = 'lavender'
})

document.querySelector('#show-thanks').addEventListener('click', function () {
    const h4 = document.querySelector('.thanks')
    h4.classList.toggle('dance')
  })


