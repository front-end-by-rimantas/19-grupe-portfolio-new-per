const words = ['photographer','web developer','ui/ux designer'];
let currentWord = '';
let wordIndex = 0;
let letterCount = 0;
const wordSpeed = 500;
const letterSpeed = 50;
const DOM = document.getElementById('typeWriter');

function renderTypeWriting(){
    if (letterCount < words[wordIndex].length){
        currentWord = words[wordIndex].charAt([letterCount]);
        DOM.textContent += currentWord;
        letterCount++;
        setTimeout(renderTypeWriting, letterSpeed);
    } 
    else if (letterCount === words[wordIndex].length) {
        letterCount = 0;
        wordIndex++;
        setTimeout(renderTypeWriting, wordSpeed);
        DOM.textContent = '';
        console.log("INDEX: " + wordIndex);
        console.log("length: " + words.length);
    }
    console.log(currentWord);
    console.log(words[wordIndex]);
}

// function delete(){
    
// }

export { renderTypeWriting };































