// Desta forma fica mais o código modulo fica mais encapsulado.

var SerialGenerator = function () {
	var max = 10000;

	this.generate = function () {
		return Math.floor(Math.random() * max);
	};
}

module.exports = new SerialGenerator();