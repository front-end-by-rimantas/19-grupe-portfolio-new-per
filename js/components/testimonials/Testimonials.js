class Testimonials {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
        this.isLineControlsVisible = params.isLineControlsVisible || true;
        this.DOM = null;
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
    }
}

export { Testimonials }