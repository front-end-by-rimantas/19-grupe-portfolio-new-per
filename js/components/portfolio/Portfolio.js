class Portfolio {
    constructor(data){
        this.data = data;
        
        this.render();
    }
    
    render() {
        console.log(this.data.buttons);
        console.log(this.data.data);
    }
}

export { Portfolio }