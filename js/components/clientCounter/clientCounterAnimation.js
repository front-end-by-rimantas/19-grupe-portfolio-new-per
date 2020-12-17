

function clientCounterAnimation(counter) {
    const speed = 100;
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        
        const increase = Math.round(target / speed);

        if(count < target) {
            counter.innerText = count + increase;
            setTimeout(updateCount, 50);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
}

export { clientCounterAnimation }

