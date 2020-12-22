import { counterAnimation } from './counterAnimation.js';

function counterAnimationOnScroll() {
    let elements = document.querySelectorAll('.block-counter');
    const count = elements.length;

    const animated = Array(count).fill(false);  // [true, false, false, false]

    window.addEventListener('scroll', function () {
        for (let i = 0; i < elements.length; i++) {
            let position = elements[i].getBoundingClientRect();
            let counter = elements[i].querySelector(".integers");
            if (position.bottom <= window.innerHeight && !animated[i]) {
                animated[i] = true;
                counterAnimation(counter);
            }
        }
    });
}

export { counterAnimationOnScroll }