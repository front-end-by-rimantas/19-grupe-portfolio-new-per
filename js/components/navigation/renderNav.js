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
        return `<img class="white" src="./img/logo-2.png" alt="White New Per logo"></img>`;
        } else {
        return `<a class="navbar-logo col-3" href="#">
                <img class="over-bar" src="./img/logo.png" alt="Black New Per logo">
                </a>`;
        }
    }

    isValidMenuLink() {
        return true;
    }

    // generateNav() {
    //     let HTML = '';
    //     for(let i = 0; i < this.menuLinks.length; i++) {
    //         HTML += `<a class="nav-a" href="#about">About</a>`;
    //     }
    //     return HTML;
    // }

    isValidMenu() {
        if (!Array.isArray(this.menuLinks)) {
            return false;
        }
        if (this.menuLinks.length === 0) {
            return false;
        }
        return true;
    }

    generateHTML() {
        if (!this.isValidMenu()) {
            return '';
        }
        return `${this.generateLogo()}
                <div class="row navmenu">
                    <div class="nav-links col-9">
                        <a class="nav-a activeNavLink" href="#home">Home</a>
                        <a class="nav-a" href="#about">About</a>
                        <a class="nav-a" href="#services">Services</a>
                        <a class="nav-a" href="#portfolio">Portfolio</a>
                        <a class="nav-a" href="#client">Client</a>
                        <a class="nav-a" href="#blog">Blog</a>
                        <a class="nav-a" href="#contact">Contact</a>
                    </div>
                    <div class="menu-btn">
                        <i class="fa fa-bars"></i>
                    </div>
                </div>`;
    }
    
    render() {
        this.DOM.innerHTML = this.generateHTML();
    }
}
export { RenderNav }