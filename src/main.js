var dependency = require('madjs-browserify-example-dependency');

function example() {
	return { text: "This is an example.", dependency: dependency };
}

module.exports = example;