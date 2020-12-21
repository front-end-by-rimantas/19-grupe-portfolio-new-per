import { Validator } from "../validator/Validator.js"

class Portfolio {
        constructor(selector, data){
        this.selector = selector;
        this.data = data.cards;
        
        this.buttons = data.buttons;
        this.buttonsDOM = null;

        this.init();
    }
    init(){
        if(!Validator.isSelector(this.selector)){
            return;
        }
        this.renderHTML();
        this.generateButtons();
    }

    isValidButton(button){
        if(!Validator.isObject(button)){
            return false;
        }
        if(!Validator.isTitle(button.value)){
            return false;
        }
        return true;
    }

    generateButtons(){
        let buttonsHTML = '';
        for (let button of this.buttons){
            if(!this.isValidButton(button)){
                continue;
            }
            buttonsHTML += `<button class="portfolio-btn">${button.value}</button>`
        }
        return buttonsHTML;
    }

       
    isValidCard(cardIndex){
        if(!Validator.isObject(this.data[cardIndex])) {
            return false;
        }
        if(!Validator.isImageFile(this.data[cardIndex].img)){
            return false;
        }
        if(!Validator.isTitle(this.data[cardIndex].title)){
            this.data[cardIndex].title = 'My job'
        }
        return true;
    }

    generateCards(){
        let cardsHTML = '';
        const cards = this.data;
        const dataLength = this.data.length;

        for (let i = 0; i < dataLength; i++){
            if (!this.isValidCard(i)) {
                continue;
            }
            cardsHTML += `<div class="gallery-item ${cards[i].class}">
            <div class="port-image">
                <img src="./img/portfolio/${cards[i].img}" alt="image">
            </div>
            <div class="portfolio-hover">
                <div class="portfolio-hover-links">
                    <h5 class="upper">${cards[i].title}</h5>
                    <a href="#0"><i class="fa fa-link"></i></a>
                    <a href="./img/portfolio/${cards[i].img}">
                        <i class="fa fa-dot-circle-o"></i>
                    </a>
                </div>
            </div>
        </div>`
        }
        return cardsHTML;
    }

    renderHTML() {
        const portfolioDOM = document.querySelector(this.selector);
        
        portfolioDOM.insertAdjacentHTML('beforeEnd', 
                        `<div class="filtering col-12">
                            ${this.generateButtons()}
                        </div>
                        <div class="container-portfolio col-12">
                                ${this.generateCards()}
                        </div>`
        );}
}

export { Portfolio }