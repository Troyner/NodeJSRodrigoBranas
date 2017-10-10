// Utilizando dessa forma, busca o modulo na mesmo diretório do arquivo JS.
// var serialGenerator = require('./serialGenerator');

// busca o modulo no ditório anterior que está o diretório do arquivo JS.
// var serialGenerator = require('../serialGenerator');

// busca por padrão em uma pasta como nome node_modules.
var serialGenerator = require('serialGenerator');
console.log(serialGenerator.generate());

// Ainda no caso acima, definimos o nome do diretório como serialGenerator, para fazer que o
// node encontre ele, basta criar o arquivo JS como nome de index.js, lembrando que para
// adicionar um module no código, não é necessário colocar a extensão .js após o nome do modulo,
// e neste caso que o usamos o diretório, nem podemos colocar a extensão no require.


var serialGeneratorOutraFormaDeExport = require('./serialGeneratorOutraFormaDeExport');
console.log(serialGeneratorOutraFormaDeExport.generate());

var serialGeneratorExportDaFuncaoFabrica = require('./serialGeneratorExportDaFuncaoFabrica');
console.log(serialGeneratorExportDaFuncaoFabrica.generate());

var serialGeneratorExportDaFuncaoConstrutora = require('./serialGeneratorExportDaFuncaoConstrutora');
console.log(serialGeneratorExportDaFuncaoConstrutora.generate());

var createSerialGeneratorExportDaFuncaoFabricaSemCache = require('./serialGeneratorExportDaFuncaoFabricaSemCache');
var serialGeneratorExportDaFuncaoFabricaSemCache = createSerialGeneratorExportDaFuncaoFabricaSemCache();
console.log(serialGeneratorExportDaFuncaoFabricaSemCache.generate());