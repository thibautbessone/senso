const fs = require('fs');
const WordTrimmer = require('./lib/WordTrimmer');
const WordTranslator = require('./lib/WordTranslator');

class Generator {
    /**
     * Entity used to return names with their translation
     * @constructor
     * @param {array} ideas - The ideas for the project name
     */
    constructor(ideas) {
        this.ideas = ideas;
        this.names = "";
    }

    /**
     * Generate the names from a base dictionary (dictionary.json) matching the given ideas
     * @return Promise<any> JSON object containing words and their translations
     */
    generateNames() {
        return new Promise(async resolve => {
            let generatorInstance = this;
            let dictionary = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));

            let trimmer = new WordTrimmer(dictionary, generatorInstance.ideas);
            let wordsToTranslate = trimmer.getEligibleWords();

            let translator = new WordTranslator(wordsToTranslate);
            await translator.getTranslations().then(function () {
                generatorInstance.names = JSON.stringify(translator.translations);
                resolve(generatorInstance.names);
            });
        });
    }
}

module.exports = Generator;


