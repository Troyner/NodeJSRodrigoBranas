// Podemos entender que todos apontam para a mesma referência.
console.log(module.exports === exports);
console.log(module.exports === this);
console.log(this === exports);

// Porém apenas o module.exports é retornado da função require, isso quer dizer que por qualquer,
// motivo se o module.exports for alterado, os outros que fazem refência vão ficar desvinculados.

//console.log(arguments);