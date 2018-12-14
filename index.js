const fs = require('fs');
const WordTrimmer = require('./lib/WordTrimmer');
const WordTranslator = require('./lib/WordTranslator');

class Generator {
    constructor(ideas) {
        this.ideas = ideas;
        this.names = "";
    }
    async generateNames() {
        let generatorInstance = this;
        let dictionary = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));

        let trimmer = new WordTrimmer(dictionary, generatorInstance.ideas);
        let wordsToTranslate = trimmer.getEligibleWords();

        let translator = new WordTranslator(wordsToTranslate);
        await translator.getTranslations().then(function () {
            generatorInstance.names = JSON.stringify(translator.translations);
            //FIXME return that ffs
            console.log(generatorInstance.names);
        });
    }
}

module.exports = Generator;


