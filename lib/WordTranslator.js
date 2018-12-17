const APIHandler = require('./utils/APIHandler');

class WordTranslator {
    /**
     * Entity used to return names with their translation
     * @constructor
     * @param {array} wordsToTranslate - The ideas for the project name
     */
    constructor(wordsToTranslate) {
        this.wordsToTranslate = wordsToTranslate;
        this.langagues = [
            {
                code:'ar', //arabic
                romanize: false
            },{
                code:'es', //spanish
                romanize: false
            },{
                code:'fr', //french,
                romanize: false
            },{
                code:'ja', //japanese, this one is for you weebs
                romanize: true
            },{
                code:'ko', //korean, this one is also for you weebs
                romanize: true
            },{
                code:'ru', //rush B ma friend
                romanize: true
            }
        ];
        //Object storing words translations
        this.translations = {};
        //Handles the translation API calls
        this.handler = new APIHandler();
    }

    /**
     * Retrieves translations (pretty self-explanatory isn't it)
     * @return Array
     */
    async getTranslations() {
        let translatorInstance = this;
        await translatorInstance.translateWords().then(function () {
            return translatorInstance.translations;
        });
    }

    /**
     * Translates words (pretty self-explanatory again isn't it)
     * @return translated words
     */
    async translateWords() {
        let translatorInstance = this;
        for(const word of translatorInstance.wordsToTranslate) {
            let tempTranslations = [];
            for(const language of translatorInstance.langagues) {
                // Translations for one word
                tempTranslations.push(await translatorInstance.handler.translate(word, language));
            }
            translatorInstance.translations[word] = tempTranslations;
        }
        return translatorInstance.translations;
    }
}

module.exports = WordTranslator;