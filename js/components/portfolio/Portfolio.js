import { Validator } from "../validator/Validator.js"

class Portfolio {
        constructor(selector, data){
        this.selector = selector;
        this.data = data.cards;
        
        this.portfolioDOM = null;

        this.buttons = data.buttons;
        
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
    
    update() {
        let tags = []
        const galleryItem = document.querySelectorAll('.gallery-item');
        // surandam visus cardsus is this.data
        for (let item of this.data) {
            // surandam visus tags is kiekvieno cardso
            for (let tag of item.tags){
                // jeigu paspausto mygtuko pavadinimas atitinka tags'a , atspausdina atitinka! 
                if (this.buttonText === 'all'){
                    continue;
                }
                if (tag === this.buttonText){
                    console.log('Atitinka!');
                }
                console.log('Neatitinka :(');
            }
        }
    }


//     this.photosDOM[i].classList.remove('hidden');
//     continue;
// }

// if (this.data[i].tags.includes(tag)) {
//     this.photosDOM[i].classList.remove('hidden');
// } else {
//     this.photosDOM[i].classList.add('hidden');
// }

    // Generate filter buttons start
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
        let buttonsHTML = `<button class='portfolio-btn active'>All</button>`
        for (let button of this.buttons){
            if(!this.isValidButton(button)){
                continue;
            }
            buttonsHTML += `<button class="portfolio-btn">${button.value}</button>`
        }
        return buttonsHTML;
    }
    // Generate filter buttons ends
    
    // Generate portfolio card start
    isValidCard(card){
        if(!Validator.isObject(card)) {
            console.log('blogaiobj');
            return false;
        }
        if(!Validator.isImageFile(card.img)){
            console.log('blogaiimg');
            return false;
        }
        if(!Validator.isTitle(card.title)){
            console.log('blogaijob');
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
            cardsHTML += `<div class="gallery-item ${item[i].class}" data-tag="${item[i].tags[0]}">
            <div class="port-image">
                <img src="./img/portfolio/${item[i].img}" alt="image">
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

    updateContent(){

    }

    // Event listeners start
    addEvent() {
        const buttonsDOM = this.portfolioDOM.querySelectorAll('.portfolio-btn');
        this.buttonText = '';

        //for each button do eventlistener
        for (let button of buttonsDOM){
            button.addEventListener('click', () => {
                this.buttonText = button.innerText.toLowerCase();
                this.update();
            });
        }
    }
    
    // Event listeners end
}

export { Portfolio }

