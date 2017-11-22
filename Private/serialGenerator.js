var config = require('./config');

exports.generate = function () {
	/*
	 * Como o max é privado do index.js, ele não é enxergado aqui no serialGenerator.js.
	 */
	return Math.floor(Math.random() * config.max);

	/*
	 * Quando a variável max é colocada no escopo global por outro arquivo js,
	 * podemos acessar ela das seguintes formas:
	 * 
	 * return Math.floor(Math.random() * max);
	 * return Math.floor(Math.random() * global.max);
	 * return Math.floor(Math.random() * GLOBAL.max);
	 * return Math.floor(Math.random() * root.max);
	*/
};