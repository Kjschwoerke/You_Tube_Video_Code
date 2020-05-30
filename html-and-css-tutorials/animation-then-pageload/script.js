const triggerButton = document.getElementById('animated-button');
const animatedDiv = document.getElementById('animated')

const triggerAnimation = () => {
    animatedDiv.className = 'animated-div'
}

$('#animated').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function() {
        window.location.href = "./next.html"
        //window.open('./next.html')
    }
)

//window.open('url') (opens url in new window)
//window.location.href = "url" (opens url in same window)
