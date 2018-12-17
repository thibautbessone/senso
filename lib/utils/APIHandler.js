const gTranslate = require('@k3rn31p4nic/google-translate-api');

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
        await gTranslate(word, {from: 'en', to: language}).then(res => {
            translation = {
                language: language,
                translation: res.text
            };
        }).catch(err => {
            console.error(err);
        });
        return translation;
    }
}

module.exports = APIHandler;