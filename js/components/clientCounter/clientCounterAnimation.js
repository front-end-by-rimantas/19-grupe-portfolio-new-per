function clientCounterAnimation() {
    const counters = document.querySelectorAll('.counter.integers');
    const speed = 6;

    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        let count = 0;
        const inc = Math.round(target / speed);
        const updateCount = () => {
            
            if(count < target) {
                count += inc;
                counter.innerText = count;
                setTimeout(updateCount, 50);
            } else {
            counter.innerText = target;
            }
            counter.innerText = count < 10 ? '0' + count : count;
        }
    updateCount();
    });
}
export { clientCounterAnimation }