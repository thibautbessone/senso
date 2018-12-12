const fs = require('fs');
const WordTrimmer = require('./lib/WordTrimmer');

const ideas = process.argv.splice(2); //gets args
console.log(ideas);

let dictionary = JSON.parse(fs.readFileSync('dictionary.json', 'utf8'));
let trimmer = new WordTrimmer(dictionary, ideas);
trimmer.getEligibleWords();


