const fs = require('fs');

let ideas = process.argv.splice(2); //gets args

console.log(ideas);

let dictionary = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));

ideas.forEach(function (idea) {
    console.log(idea);
    findWords(idea, dictionary);
});

function findWords(idea, dico) {
    let newDico = {};
    Object.keys(dictionary).forEach(function (key) {
        if(dico[key].includes(idea)) {
            newDico[key] = dico[key];
        }
    });
    dictionary = newDico;
    console.log(Object.keys(newDico).length);
}