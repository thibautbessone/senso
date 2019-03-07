const WordTrimmer = require("./lib/WordTrimmer");
const WordTranslator = require("./lib/WordTranslator");
const dictionary = require("./dictionary.json");

class Generator {
    /**
     * Entity used to return names with their translation
     * @constructor
     * @param {array} ideas - The ideas for the project name
     * @param maxWords - the maximum amount of words to translate
     */
    constructor(ideas, maxWords) {
        this.ideas = ideas;
        this.names = "";
        this.maxWords = maxWords;
    }

    /**
     * Generate the names from a base dictionary (dictionary.json) matching the given ideas
     * @return Promise<any> JSON object containing words and their translations
     */
    generateNames() {
        return new Promise(async (resolve) => {
            let generatorInstance = this;
            let trimmer = new WordTrimmer(dictionary, generatorInstance.ideas);
            let wordsToTranslate = trimmer.getEligibleWords();

            let translator = new WordTranslator(wordsToTranslate, this.maxWords);
            await translator.getTranslations().then(function () {
                generatorInstance.names = JSON.stringify(translator.translations);
                resolve(generatorInstance.names);
            });
        });
    }
}

module.exports = Generator;


