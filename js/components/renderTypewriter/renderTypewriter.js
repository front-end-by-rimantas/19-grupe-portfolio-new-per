class RenderTypeWriter {
        /**
     * Typewriting effect
     * @param {string} selector Selector for where the word will be printed 
     * @param {Array} words Array of words to be printed
     */
    constructor(selector, words){
        this.selector = selector;
        this.words = words;

        this.currentWord = '';
        this.currentLetter = '';
        
        this.wordCount = 0;
        this.letterCount = 0;
        
        // sets speed of letter printing
        this.writingSpeed = 70;
        
        this.endWord = false;

        // gets the place where to print
        this.DOM = document.querySelector(this.selector);
        
    }
    typeWriting(){
            
        // sets the current word according to word list
        this.currentWord = this.words[this.wordCount];

        this.writingSpeed = 70;

        //if the it's deleting a word, the speed is doubled
        if(this.endWord) {
            this.writingSpeed = this.writingSpeed / 2;
        }

        //checks what the method is doing and does the changes accordingly 
        if (!this.endWord){
            this.currentLetter = this.currentWord.substring(0, this.letterCount + 1);
            this.letterCount++;
        } 
        else {
            this.currentLetter = this.currentWord.substring(0, this.letterCount - 1);
            this.letterCount--;
        }

        // prints out / deletes letters from the page
        this.DOM.textContent = this.currentLetter;

        // If the end of the current word
            if(!this.endWord && this.currentLetter === this.currentWord) {
            this.endWord = true;
            this.writingSpeed = 1500;
        
        // if the word is deleted, change to the next word
        } else if(this.endWord && this.currentLetter === '') {
            this.endWord = false;
            this.wordCount++;
        }
        if (this.wordCount === this.words.length){
            this.wordCount = 0;
            setTimeout(() => this.typeWriting(), this.writingSpeed);
        } else {
            setTimeout(() => this.typeWriting(), this.writingSpeed);
        }
    }
}
export { RenderTypeWriter } 


