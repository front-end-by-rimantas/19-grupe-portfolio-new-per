class Testimonials {
    constructor(params) {
        this.selector = params.selector || 'body';
        this.data = params.data || [];
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
    render() {
        const HTML = `<div class="allTestimonials">
        <div class="screen">
            <div class="list" style="width: 500%";>
            ${this.generateReviews()}
            </div>
                </div>
                <div class="review-sliders rev-row">
                    <div class="slider"></div>
                    <div class="slider"></div>
                    <div class="slider"></div>
                </div>
            </div>`;

        this.DOM.innerHTML = HTML;
    }
}

export { Testimonials }