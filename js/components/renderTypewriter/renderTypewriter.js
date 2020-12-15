import { typeWriterAllWords } from "../../data//typewriterData.js"

let currentWord = '';
let currentLetter = '';

let wordCount = 0;
let letterCount = 0;

// sets speed of letter printing
const letterSpeed = 150;

// gets the place where to print
const DOM = document.getElementById('typeWriter');

function renderTypeWriting(){
   
    DOM.textContent = currentWord.substring(0, letterCount - 1);

    // restarts the word printing if the count is equal to the list length
    if (wordCount === typeWriterAllWords.length){
        wordCount = 0;
    }
    // takes the word from the list
    currentWord = typeWriterAllWords[wordCount];

    // slices/deletes the first letter from the word and increases lettercount
    currentLetter = currentWord.slice(0, ++letterCount);

    // prints the letter in selected DOM area
    DOM.textContent = currentLetter;
    
    // checks if the lettercount is same as current word printing count, resets the lettercount and selects next word.
    if (letterCount === currentWord.length) {
        setTimeout
        wordCount++;
        letterCount = 0;
    }
    // repeats the function all over again, with the selected printing speed
    setTimeout(renderTypeWriting, letterSpeed)
};

export { renderTypeWriting };