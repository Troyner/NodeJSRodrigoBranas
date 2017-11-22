/*
 * Maneiras de adicionar a variável global do JS.
 * max = 10000;
 * global.max = 10000;
 * GLOBAL.max = 10000;
 * root.max = 10000;
 * 
 * Não há diferença em usar qualquer um dos 3, pois
 * no código fonte do NodeJS todos recebem o valor
 * de global.
 */

/*
 * Esta maneira deixa o valor de max como privaado
 * var max = 10000; 
 */

var serialGenerator = require('./serialGenerator');
console.log(serialGenerator.generate());