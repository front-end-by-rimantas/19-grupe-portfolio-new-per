import { counterAnimation } from './counterAnimation.js';

function counterAnimationOnScroll() {
    window.addEventListener('scroll', function() {
        let element = document.querySelectorAll('.block-counter');

        for (let i = 0; i < element.length; i++) {
            let position = element[i].getBoundingClientRect();
            let counter = element[i].querySelector(".integers");
            if(position.top >= 60 && position.bottom <= window.innerHeight) {
                counterAnimation(counter);
            }
        }
    });
}

export { counterAnimationOnScroll }