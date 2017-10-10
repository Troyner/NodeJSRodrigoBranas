// Desta forma fica mais o código modulo fica mais encapsulado.

var createSerialGenerator = function () {
	var max = 10000;

	var generate = function () {
		return Math.floor(Math.random() * max);
	};

	return {
		generate: generate
	};
}

module.exports = createSerialGenerator();