function counterAnimation(counter) {
    const totalTime = 5;
    const target = parseInt(counter.dataset.target);
    const fps = 60;
    const inc = target / totalTime / fps;
    let value = 0;

    const timer = setInterval(() => {
        value += inc;
        counter.innerText = Math.round(value);
        
        if (value >= target) {
            clearInterval(timer);
        }
    }, 400 / fps)
}


export { counterAnimation };