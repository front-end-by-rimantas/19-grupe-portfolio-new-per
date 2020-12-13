let wordCount = 0;
const speed = 200;
const sarasas = ['algis','nijole'];
let currentWord = '';
let index = 0;
const DOM = document.querySelector('li');

function renderTypewriter(){
    if (wordCount < sarasas[index].length){
        currentWord = sarasas[0].charAt([wordCount]);
        DOM.textContent += currentWord;
        ++wordCount;
        setTimeout(renderTypewriter, speed);
    }    
}

export { renderTypewriter };