class WordTrimmer {
    /**
     * Entity used to pick words matching given ideas
     * @constructor
     * @param {JSON} baseDictionary - Dictionary as a JSON
     * @param {array} ideas - The ideas to match
     */
    constructor(baseDictionary, ideas) {
        this.baseDictionary = baseDictionary;
        this.ideas = ideas;
    }

    /**
     * Picks words matching the ideas adn returns them
     * @return Array
     */
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

        console.log('Words to be translated : ' + eligibleWords);
        return eligibleWords;
    }

    /**
     * Picks words matching a single idea and updates the dictionary with it
     */
    trimWords(idea, dico) {
        let newDico = {};
        Object.keys(this.baseDictionary).forEach(function (key) {
            if(dico[key].includes(idea)) {
                newDico[key] = dico[key];
            }
        });
        this.baseDictionary = newDico;
        console.log("Matching words: " + Object.keys(newDico));
    }
}

module.exports = WordTrimmer;