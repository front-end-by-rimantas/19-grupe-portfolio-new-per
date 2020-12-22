class Testimonials {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.isLineControlsVisible = params.isLineControlsVisible || true;
        this.cloneCount = params.cloneCount || 2;
        this.reviewWidth = 0;
        this.DOM = null;
        this.controlsDOM = null;
        this.linesDOMs = null;
        this.listDOM = null;
        this.activeLineIndex = 0;
        this.anime = 0;
        this.init();
    }
    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
        this.addEvents();
        // this.autoAnimation();
        this.animation();
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
        const reviewWidth = 100 / (this.data.length + 2 * this.cloneCount);
        this.reviewWidth = reviewWidth;
        const dataCopy = [this.data[3], this.data[4], ...this.data, this.data[0], this.data[1]];
        for (let testimonial of dataCopy) {
            if (!this.isValidTestimonial(testimonial)) {
                continue;
            }
            HTML += `<div class="review-wrap" style="width: ${reviewWidth}%";>
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
        const listWidth = (this.data.length + 2 * this.cloneCount) * 100;
        const HTML = `<div class="allTestimonials">
        <div class="screen">
            <div class="list" style="width: ${listWidth}%; margin-left: -${this.cloneCount}00%;">
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

    animation() {
        let position = 0;
        let index = 0;
        const interval = setInterval(() => {
            const length = this.linesDOMs.length - 1;
            position += this.reviewWidth;
            index += 1;
            this.listDOM.style.transform = `translateX(-${position}%)`;
            this.linesDOMs[index].classList.add('active');
            this.linesDOMs[length].classList.remove('active');
            this.linesDOMs[index-1].classList.remove('active');
            this.linesDOMs[index].classList.add('active');
            if (index === length) {
                position = -this.reviewWidth;
                index = -1;
            }
        }, 3000);
    }

    addEvents() {
       
        for (let i=0; i<this.linesDOMs.length; i++) {
            const line = this.linesDOMs[i];
        line.addEventListener('click', () => {
            let proc = `-${this.reviewWidth}` * i;
            this.listDOM = document.querySelector('.screen > .list');
            this.listDOM.style.transform = `translateX(${proc}%)`;
            this.linesDOMs[this.activeLineIndex].classList.remove('active');
            this.activeLineIndex = i;
            line.classList.add('active');
        })
        }  
    }   
}

export { Testimonials }

