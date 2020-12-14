const sarasas = ['photographer','web developer','ui/ux designer'];
let wordCount = 0;
let currentWord = '';
let index = 0;
const speed = 500;
const DOM = document.querySelector('li');

// console.log(sarasas);
// console.log(sarasas[0]);
// console.log(sarasas[0].length);
// console.log(sarasas[1]);
// console.log(sarasas[1].length);
// console.log(sarasas[2]);
// console.log(sarasas[2].length);

function renderTypewriter(){
    if (wordCount === sarasas[index].length){
        index++;
        setTimeout(renderTypewriter, speed);
        wordCount = 0;
        DOM.textContent = '';
    }
    if (wordCount < sarasas[index].length){
        currentWord = sarasas[index].charAt([wordCount]);
        DOM.textContent += currentWord;
        wordCount++;
        setTimeout(renderTypewriter, speed);
    }
    console.log(wordCount);
    console.log(sarasas[index]);
}

export { renderTypewriter };

