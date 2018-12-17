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
            'ar', //arabic
            'es', //spanish
            'fr', //french,
            'ja', //japanese, this one is for you weebs
            'ko', //korean, this one is also for you weebs
            'ru' //rush B ma friend
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