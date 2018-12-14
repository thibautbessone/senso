const gTranslate = require('@k3rn31p4nic/google-translate-api');

class APIHandler {
    constructor() {}

    async translate(word, language) {
        let translation ='';
        await gTranslate(word, {from: 'en', to: language}).then(res => {
            //console.log(res);
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