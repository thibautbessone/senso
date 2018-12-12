const fs = require('fs');

const ideas = process.argv.splice(2); //gets args
console.log(ideas);

let dictionary = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));
getEligibleWords();

function getEligibleWords() {
    let eligibleWords = [];
    ideas.forEach(function (idea) {
        console.log("Idea: " + idea);
        trimWords(idea, dictionary);
    });

    //Trimmed dictionary
    Object.keys(dictionary).forEach(function (key) {
        eligibleWords.push(key);
    });

    console.log(eligibleWords);
    return eligibleWords;
}

function trimWords(idea, dico) {
    let newDico = {};
    Object.keys(dictionary).forEach(function (key) {
        if(dico[key].includes(idea)) {
            newDico[key] = dico[key];
        }
    });
    dictionary = newDico;
    console.log("Matching words: " + Object.keys(newDico).length);
}