class Portfolio {
    constructor(selector, data){
        this.selector = selector;
        this.data = data.data;
        this.buttons = data.buttons;


        this.portfolioDOM = document.querySelector(this.selector);
        this.buttonsDOM = null;

        this.render();
        this.generateButtons();
    }
    generateButtons(){
        let HTML = '';

        this.buttonsDOM = document.querySelector(".filtering");
        for (let button of this.buttons){
            //validacijos reiks
            //add active class for active button
            this.buttonsDOM.innerHTML += `<button class="portfolio-btn">${button.value}</button>`
        }
    }
    render() {
        let HTML = '';
        this.portfolioDOM.insertAdjacentHTML('beforeEnd', `<div class="filtering col-12"></div>`);
    // <div class="container-portfolio col-12">
    //     <div class="gallery-item h-2">
    //         <div class="port-image">
    //             <img src="./img/portfolio/1.jpg" alt="image">
    //         </div>
    //         <div class="portfolio-hover">
    //             <div class="portfolio-hover-links">
    //                 <h5 class="upper">Lil bag</h5>
    //                 <a href="#0">
    //                     <i class="fa fa-link"></i>
    //                 </a>
    //                 <a href="./img/portfolio/1.jpg">
    //                     <i class="fa fa-dot-circle-o"></i>
    //                 </a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    }
}

export { Portfolio }