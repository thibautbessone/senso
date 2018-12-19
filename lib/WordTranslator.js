const APIHandler = require('./utils/APIHandler');

class WordTranslator {
    /**
     * Entity used to return names with their translation
     * @constructor
     * @param {array} wordsToTranslate - The ideas for the project name
     * @param {int} maxWords the number of word translations to retrieve

     */
    constructor(wordsToTranslate, maxWords) {
        this.wordsToTranslate = wordsToTranslate;
        this.maxWords = maxWords;
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
     * Translates words (pretty self-explanatory again isn't it) randomly chosen in the list of words to translate
     * @return translated words
     */
    async translateWords() {
        let translatorInstance = this;
        if(translatorInstance.wordsToTranslate.length < translatorInstance.maxWords) translatorInstance.maxWords = translatorInstance.wordsToTranslate.length; // Avoid out of bounds access
        let randomWordsToTranslate = translatorInstance.wordsToTranslate.sort(() => .5 - Math.random()).slice(0, translatorInstance.maxWords);// shuffle & get subarray
        randomWordsToTranslate.sort(function (a,b) { return a.localeCompare(b)}); //sort back the resulting array
        for(const word of randomWordsToTranslate) {
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