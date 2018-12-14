const APIHandler = require('./utils/APIHandler');

class WordTranslator {
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
        this.translations = {};
        this.handler = new APIHandler();
    }

    async getTranslations() {
        let translatorInstance = this;
        await translatorInstance.translateWords().then(function () {
            return translatorInstance.translations;
        });
    }
    async translateWords() {
        let tempTranslations = [];
        let translatorInstance = this;
        for(const word of translatorInstance.wordsToTranslate) {
            for(const language of translatorInstance.langagues) {
                tempTranslations.push(await translatorInstance.handler.translate(word, language, translatorInstance));
            }
            translatorInstance.translations[word] = tempTranslations;
        }
        return translatorInstance.translations;
    }
}

module.exports = WordTranslator;