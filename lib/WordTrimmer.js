class WordTrimmer {
    constructor(baseDictionary, ideas) {
        this.baseDictionary = baseDictionary;
        this.ideas = ideas;
    }

    getEligibleWords() {
        let trimmerInstance = this;
        let eligibleWords = [];
        trimmerInstance.ideas.forEach(function (idea) {
            console.log("Idea: " + idea);
            trimmerInstance.trimWords(idea, trimmerInstance.baseDictionary);
        });

        //Trimmed dictionary
        Object.keys(trimmerInstance.baseDictionary).forEach(function (key) {
            eligibleWords.push(key);
        });

        console.log(eligibleWords);
        return eligibleWords;
    }

    trimWords(idea, dico) {
        let newDico = {};
        Object.keys(this.baseDictionary).forEach(function (key) {
            if(dico[key].includes(idea)) {
                newDico[key] = dico[key];
            }
        });
        this.baseDictionary = newDico;
        console.log("Matching words: " + Object.keys(newDico).length);
    }
}

module.exports = WordTrimmer;