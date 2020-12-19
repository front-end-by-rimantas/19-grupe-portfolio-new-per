function counterAnimation(counter) {
    const speed = 6;
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const inc = Math.round(target / speed);
        if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCount, 400);
        } else {
            counter.innerText = target;
        }
    }
    updateCount();
}


export { counterAnimation };