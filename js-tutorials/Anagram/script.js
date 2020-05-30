let isAnagram = "true"

let runIsAnagram =() =>{

let firstword = document.getElementById("first-input").value
let secondword = document.getElementById("second-input").value
let display = document.getElementById("answer-display")

let wordOne = firstword.split('').sort()
let wordTwo = secondword.split('').sort()

//create a function to check if the words have the same letters and same number of letters
const anagram = (w1, w2) =>{
    if (w1.length !==w2.length) {
        isAnagram = "false"
        return
    }
    for (let i=0; i<wordOne.length; i++) {
        if (w1[i] !== w2[i]){
        isAnagram = "false"
        return
        }
    }
    isAnagram = "true"
    return
}
//call the anagram function
anagram(wordOne, wordTwo) 

//display the results in the DOM 
display.innerHTML = isAnagram   
}
