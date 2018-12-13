const fs = require('fs');
const WordTrimmer = require('./lib/WordTrimmer');
const WordTranslator = require('./lib/WordTranslator');

const ideas = process.argv.splice(2); //gets args
let dictionary = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));

let trimmer = new WordTrimmer(dictionary, ideas);
let wordsToTranslate = trimmer.getEligibleWords();

let translator = new WordTranslator(wordsToTranslate);
translator.getTranslations();



