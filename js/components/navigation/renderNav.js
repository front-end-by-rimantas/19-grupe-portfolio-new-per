
import { Validator } from '../validator/Validator.js';

class RenderNav {
    constructor (params) {
        this.selector = params.selector;
        this.menuLinks = params.menu;
        this.DOM = null;
        this.homeURL = null;
        

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }

        this.render();
        this.addEvents();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    generateLogo() {

        if (true) {
        return `<div class="navbar-logo col-3">
                    <a href="#">
                    <img class="white" src="./img/logo-2.png" alt="White New Per logo"></img>
                    <img class="over-bar" src="./img/logo.png" alt="Black New Per logo"></img>
                    </a>
                </div>`;
        } else {
        return;
        }
    }

    isValidMenuLink(menuItem) {
        if (!Validator.isObject(menuItem)) {
            return false;
        }
        return true;
    }

    generateNav() {
        let HTML = '';
        for(let i = 0; i < this.menuLinks.length; i++) {
            const menuItem = this.menuLinks[i];
        if(!this.isValidMenuLink(menuItem)) {
            continue;
        }
            HTML += `<a class="nav-a" href="${menuItem.link}">${menuItem.text}</a>`;
        }
        return HTML;
    }

    isValidMenu() {
        if (!Validator.isArray(this.menuLinks)) {
            return false;
        }
        return true;
    }

    generateHTML() {
        if (!this.isValidMenu()) {
            return '';
        }
        return `<div class="row navmenu">
                ${this.generateLogo()}
                <div class="menu-btn col-9">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
                <div class="nav-links col-9">
                ${this.generateNav()}
                </div>`;
    }
    
    render() {
        // console.log(this.DOM);
        this.DOM.innerHTML = this.generateHTML();
    }

    addEvents(){
        const navDOM = this.DOM.closest('nav');
        const burgerNavDOM = document.querySelector('.nav-links');
        const burgerDOM = document.querySelector('.menu-btn');

        burgerDOM.addEventListener('click', () => {
            burgerDOM.classList.toggle('expand');
            burgerNavDOM.classList.toggle('expand');
        });

        addEventListener('scroll', () => {
        if (scrollY > 250) {
            navDOM.classList.remove('over-bar');
            navDOM.classList.add('white');
        } else {
            navDOM.classList.remove('white');
            navDOM.classList.add('over-bar');
        }
        })
    }
}
export { RenderNav }