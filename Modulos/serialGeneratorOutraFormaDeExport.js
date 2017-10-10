// Outra forma de exportar o modulo é da seguinte maneira:
// Está maneira é interessante, pois ficamos livre para interagir com o código,
// e no final exportamos apenas a função, sem precisar ficar exportando tudo.

var max = 10000;

var generate = function () {
	return Math.floor(Math.random() * max);
};

// Porém desta forma perdemos a refência de this e exports, tendo que usar sempre
// module.exports.
module.exports = {
	generate: generate
}
