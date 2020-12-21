import { Validator } from '../validator/Validator.js';

class Testimonials {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.isLineControlsVisible = params.isLineControlsVisible || true;
        this.DOM = null;
        this.controlsDOM = null;
        this.linesDOMs = null;
        this.listDOM = null;
        this.activeLineIndex = 0;

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
        if (!DOM) {
            return false;
        }
        this.DOM = DOM;
        return true;
    }
    isValidTestimonial(testimonial) {
        if (!Validator.isObject(testimonial)) {
            console.error('ERROR: testimonial has to be an object type');
            return false;
        }
        if (typeof testimonial.rating !== 'string' || testimonial.rating === '' || testimonial.rating.length > 2) {
            console.var('ERROR: testimonial rating has to be string type, not empty and no longer than 2 symbols.');
            return false;
        }
        if (!Validator.isTitle(testimonial.title)) {
            console.error('ERROR: testimonial title has to be a string type');
            return false;
        }
        if (!Validator.isDescription(testimonial.comment)) {
            console.error('ERROR: testimonial coment has to be a string type, not empty and no longer than 1000 symbols.');
            return false;
        }
        if (typeof testimonial.name !== 'string' || testimonial.name === '' || testimonial.rating.length > 50) {
            console.var('ERROR: testimonial name has to be string type, not empty and no longer than 50 symbols.');
            return false;
        }
        return true;
    }
    generateStars(rating) {
        const maxStars = 5;
        let HTML = '<i class="fa fa-star" aria-hidden="true"></i>'.repeat(rating);
        HTML += '<i class="fa fa-star-o" aria-hidden="true"></i>'.repeat(maxStars - rating);
        return HTML;
    }
    generateReviews() {
        let HTML = '';
        for (let testimonial of this.data) {
            if (!this.isValidTestimonial(testimonial)) {
                continue;
            }
            HTML += `<div class="review-wrap" style="width: 20%";>
            <h5 class="review-title upper rev-row">${testimonial.title}</h5>
            <div class="stars rev-row">${this.generateStars(testimonial.rating)}</div>
            <p class="review rev-row">${testimonial.comment}</p>
            <h5 class="rev-row reviewer upper">${testimonial.name}</h5>
            <h5 class="rev-row reviewer-pos upper">${testimonial.specialization}</h5>
        </div>`;
    }
        return HTML;
    }

    generateControls() {
        let HTML = '';

        if (!this.isLineControlsVisible) {
            return HTML;
        }

        const testimonialsCount = this.data.length;
        let linesHTML = `<div class="slider active"></div>`;
        linesHTML += `<div class="slider"></div>`.repeat(testimonialsCount - 1)

        HTML = `<div class="review-sliders rev-row">
                    ${this.isLineControlsVisible ? linesHTML : ''}
                </div>`

        return HTML;
    }
    render() {
        const HTML = `<div class="allTestimonials">
        <div class="screen">
            <div class="list" style="width: 500%";>
            ${this.generateReviews()}
            </div>
                </div>
                ${this.generateControls()}
            </div>`;

        this.DOM.innerHTML = HTML;

        this.listDOM = this.DOM.querySelector('.list');

        if (this.isLineControlsVisible) {
            this.controlsDOM = this.DOM.querySelector('.review-sliders');

            if (this.isLineControlsVisible) {
                this.linesDOMs = this.controlsDOM.querySelectorAll('.slider');
            }
        }
    }

    addEvents() {
        for (let i=0; i<this.linesDOMs.length; i++) {
            const line = this.linesDOMs[i];

        line.addEventListener('click', () => {
            let proc = -20 * i + '%';
            this.listDOM.style.transform = `translateX(${proc})`;
            
            // this.controlsDOM.querySelector('.slider.active').classList.remove('active')

            this.linesDOMs[this.activeLineIndex].classList.remove('active');
            this.activeLineIndex = i;
            line.classList.add('active');

        })
    }
    }
}

export { Testimonials }