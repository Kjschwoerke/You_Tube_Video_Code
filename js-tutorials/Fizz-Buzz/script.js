const getFizzBuzz =()=>{


    // remove the last fizzBuzz output on the display
    const display = document.getElementById('display')
    
    while(display.hasChildNodes()){
        display.removeChild(display.firstChild )
    }

    //create an array from 0 to the number specified in the HTML input field
    let fbInput = 0
    
    fbInput = document.getElementById('fb-input').value
    const createArray = (n) => {
        let createArr = []
        let num = 0 
        for (let i=0; i<=n; i++){
            createArr.push(num)
            num++
        }
        return createArr
    }

    //create a function to run "fizzBuzz on the Array"
    const fizzBuzz = (arr) => {
        let fizzBuzzArr = []
        
        for (let i = 0; i<arr.length; i++){
            if (arr[i] === 0) {fizzBuzzArr.push('Zero')} else {
                if (arr[i]%3 === 0 && arr[i]%5 !== 0) {fizzBuzzArr.push('Fizz')}
                else if (arr[i]%5 === 0 && arr[i]%3 !== 0) {fizzBuzzArr.push('Buzz')}
                else if (arr[i]%3 === 0 && arr[i]%5 === 0) {fizzBuzzArr.push('Fizz-Buzz')}
                else {fizzBuzzArr.push(arr[i])}
            }
        }
        return fizzBuzzArr
    }

   //Display the fizzBuzz results in the DOM
    function createList(arr) {
        for(let i = 0; i<arr.length; i++){
            let node = document.createElement("LI")
            let textNode = document.createTextNode(arr[i])
            node.appendChild(textNode)
            document.getElementById('display').appendChild(node)
        }
        
    }
    const array = fizzBuzz(createArray(fbInput))
    createList(array)  
}


//Create EventListeners for both Enter keypress and mouse click to run fizzBuzz
document.getElementById('fb-input').addEventListener('keypress', function(e) {
    if(e.keyCode === 13) {
        getFizzBuzz()
        console.log('test')
    }
})
document.getElementById('fb-button').addEventListener('click', function(e) {
        getFizzBuzz()
        console.log('test')
})
