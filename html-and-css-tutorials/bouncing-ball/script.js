const ball = document.getElementById("ball")
const shadow = document.getElementById("ball-shadow")
const animateButton = document.getElementById('animate-button')


//Create the function to start and stop the ball animation.

let animated = false

const animateBall = () => {
    if(!animated) {
        ball.classList.add('ball-animated')
        shadow.classList.add('ball-shadow-animated')
        animateButton.innerHTML = "Click To Stop Animation"
        animated = true
    } else if (animated) {
        ball.classList.remove('ball-animated')
        shadow.classList.remove('ball-shadow-animated')
        animateButton.innerHTML = "Click To Start Animation"
        animated = false
    }
}