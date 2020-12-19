class Portfolio {
    constructor(selector, data){
        this.selector = selector;
        this.data = data.data;
        this.portfolioDOM = document.querySelector(this.selector);

        this.buttons = data.buttons;
        this.buttonsDOM = null;


        this.init();
    }
    init(){
        this.renderHTML();
        this.generateButtons();
    }

    generateButtons(){
        let buttonsHTML = '';
        for (let button of this.buttons){
            //validacijos reiks
            //add active class for active button
            buttonsHTML += `<button class="portfolio-btn">${button.value}</button>`
        }
        return buttonsHTML;

    }
    generateCards(){
        let cardsHTML = '';
        const cards = this.data;
        const dataLength = this.data.length;

        for (let i = 0; i < dataLength; i++){
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
        this.portfolioDOM.insertAdjacentHTML('beforeEnd', 
                        `<div class="filtering col-12">
                            ${this.generateButtons()}
                        </div>
                        <div class="container-portfolio col-12">
                                ${this.generateCards()}
                        </div>`
        );}
}

export { Portfolio }