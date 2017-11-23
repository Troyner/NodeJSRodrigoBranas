var options = [
	'a) pid',
	'b) title',
	'c) arch',
	'd) platform',
	'e) env',
	'u) uptime',
	'm) memoryUsage',
	'v) versions',
	'q) quit'
];

exports.showOptions = function () {
	options.forEach( function (option) {
		console.log(option);
	});
}