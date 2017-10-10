console.log('Criando o serialGeneratorTestCache');

var max = 10000;

module.exports.generate = function () {
	return Math.floor(Math.random() * max);
};