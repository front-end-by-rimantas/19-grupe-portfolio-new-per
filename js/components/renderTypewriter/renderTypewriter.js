const sarasas = ['photographer','web developer','ui/ux designer'];
let letterCount = 0;
let currentWord = '';
let index = 0;
const speed = 100;
const DOM = document.querySelector('li');

// console.log(sarasas);
// console.log(sarasas[0]);
// console.log(sarasas[0].length);
// console.log(sarasas[1]);
// console.log(sarasas[1].length);
// console.log(sarasas[2]);
// console.log(sarasas[2].length);

function renderTypewriter(){
    if (letterCount === sarasas[index].length){
        index++;
        letterCount = 0;
        DOM.textContent = '';
        setTimeout(renderTypewriter, speed);
        console.log("INDEX: " + index);
        console.log("length: " + sarasas.length);
    }
    if (letterCount < sarasas[index].length){
        currentWord = sarasas[index].charAt([letterCount]);
        DOM.textContent += currentWord;
        letterCount++;
        setTimeout(renderTypewriter, speed);
    }
    if (index === sarasas.length){
        index = 0;
        letterCount = 0;
        setTimeout(renderTypewriter, speed);
    }
}

export { renderTypewriter };

