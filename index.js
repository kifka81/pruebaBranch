const dogNames = require('dog-names');
const chalk = require('chalk');

console.log(dogNames.femaleRandom());
console.log(chalk.blue(dogNames.femaleRandom()));
//=> 'Lucy'

