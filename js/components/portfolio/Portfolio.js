import { Validator } from "../validator/Validator.js"

class Portfolio {
        constructor(selector, data){
        this.selector = selector;
        this.data = data.cards;
        
        this.portfolioDOM = null;

        this.init();
    }

    init(){
        if(!Validator.isSelector(this.selector)){
            return;
        }
        this.portfolioDOM = document.querySelector(this.selector);
        this.renderHTML();
        this.generateButtons();
        this.addEvent();
    }
    
    updateContent(button) {
        button = button.toLowerCase();
        const galleryItem = document.querySelectorAll('.gallery-item');

        for (let i = 0; i < this.data.length; i++){
            const tag = this.data[i].tag
            if (button === 'all'){
                galleryItem[i].classList.remove('hidden');
                continue;
            }
            if (tag.includes(button)){
                galleryItem[i].classList.remove('hidden');
            }
            else {
                galleryItem[i].classList.add('hidden');
            }
        }
    }

    // Generate filter buttons start
    generateButtons() {
        let buttonsHTML = `<button class='portfolio-btn active'>All</button>`
        
        let buttons = [];

        for (let item of this.data) {
            for (let tag of item.tag){
                buttons.push(tag)
            }
        }
        // Array with unique tags
        const uniqueTags = [...new Set(buttons)];

        // Print out the buttons
        for (let button of uniqueTags){
            if(!button){
                continue;
            }
            buttonsHTML += `<button class="portfolio-btn">${button}</button>`
        }
        return buttonsHTML;
    }
    // Generate filter buttons ends
    
    // Generate portfolio card start
    isValidCard(card){
        if(!Validator.isObject(card)) {
            return false;
        }
        if(!Validator.isImageFile(card.img)){
            return false;
        }
        if(!Validator.isTitle(card.title)){
            card.title = 'My job'
        }
        return true;
    }

    generateCards(){
        let cardsHTML = '';
        const item = this.data
        const dataLength = this.data.length;
        for (let i = 0; i < dataLength; i++){
            if (!this.isValidCard(item[i])) {
                continue;
            }
            cardsHTML += `<div class="gallery-item ${item[i].class}">
            <div class="port-image">
                <img src="./img/portfolio/${item[i].img}" alt="${item[i].title} project">
            </div>
            <div class="portfolio-hover">
                <div class="portfolio-hover-links">
                    <h5 class="upper">${item[i].title}</h5>
                    <a href="#0"><i class="fa fa-link"></i></a>
                    <a href="./img/portfolio/${item[i].img}">
                        <i class="fa fa-dot-circle-o"></i>
                    </a>
                </div>
            </div>
        </div>`
        }
        return cardsHTML;
    }
    // Generate portfolio card ends
    
    // Section render starts
    renderHTML() {
        this.portfolioDOM.insertAdjacentHTML('beforeEnd', 
        `<div class="filtering col-12">
        ${this.generateButtons()}
        </div>
        <div class="container-portfolio col-12">
        ${this.generateCards()}
        </div>`
        );
    }
    // Section render ends

    // Event listeners start
    addEvent() {
        const buttonsDOM = this.portfolioDOM.querySelectorAll('.portfolio-btn');
        let activeButton = null;

        //for each button do eventlistener
        for (let button of buttonsDOM){
            button.addEventListener('click', () => {
                activeButton = button;
                this.updateContent(button.innerText);
            });
        }
    }
    
    // Event listeners end
}

export { Portfolio }