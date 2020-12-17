import { clientCounterAnimation } from './clientCounterAnimation.js';

function counterAnimationOnScroll() {
    window.addEventListener('scroll', function() {
        let element = document.querySelectorAll('.block-counter');
        console.log(element);
        for (let i = 0; i < element.length; i++) {
            let position = element[i]. getBoundingClientRect();
            let integers = element[i].querySelector('.integers');
            console.log(integers);
            if (position.top >= 60 && position.bottom <= window.innerHeight) {
                clientCounterAnimation(integers);
            }
        }

    });
}

export { counterAnimationOnScroll } 