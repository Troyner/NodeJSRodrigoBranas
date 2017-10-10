var serialGeneratorA = require('./serialGeneratorTestCache');
var serialGeneratorB = require('./serialGeneratorTestCache');
console.log(serialGeneratorA === serialGeneratorB);

var createSerialGenerator = require('./serialGeneratorExportDaFuncaoFabricaSemCache');
var serialGeneratorExportDaFuncaoFabricaSemCacheA = createSerialGenerator();
var serialGeneratorExportDaFuncaoFabricaSemCacheB = createSerialGenerator();
console.log(serialGeneratorExportDaFuncaoFabricaSemCacheA === serialGeneratorExportDaFuncaoFabricaSemCacheB);

var SerialGenerator = require('./serialGeneratorExportDaFuncaoConstrutoraSemCache');
var serialGeneratorExportDaFuncaoConstrutoraSemCacheA = new SerialGenerator();
var serialGeneratorExportDaFuncaoConstrutoraSemCacheB = new SerialGenerator();
console.log(serialGeneratorExportDaFuncaoConstrutoraSemCacheA === serialGeneratorExportDaFuncaoConstrutoraSemCacheB);