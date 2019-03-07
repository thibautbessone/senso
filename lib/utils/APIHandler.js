const gTranslate = require("@k3rn31p4nic/google-translate-api");
const romanizer = require("transliteration");

class APIHandler {
    /**
     * Entity used to handle all the boring and repetitive stuff aka API calls, does nothing but I can instantiate it
     * @constructor
     */
    constructor() {}

    /**
     * Translates given word into given language
     * @return Array
     */
    async translate(word, language) {
        let translation = {};
        await gTranslate(word, {from: "en", to: language.code}).then((res) => {
            translation = {
                language: language.code,
                translation: res.text
            };
            if(language.romanize) { // for all the weebs outta there, and ma friend
                translation.romanized = romanizer.transliterate(res.text);
            }
        }).catch((err) => {
            console.error(err);
        });
        return translation;
    }
}

module.exports = APIHandler;