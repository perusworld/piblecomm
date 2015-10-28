var debug = require('debug')('nodeblecomm:test');
var logger = require("./logger")
var nodeblecomm = require("./nodeblecomm").server()
var readline = require('readline');

var bleListner = new nodeblecomm.SimpleBLEListner('fff0', 'fff1', 'fff2');
var simpleLogger = new logger.SimpleLogger();

simpleLogger.init(300);
nodeblecomm.BLECommContext.init(simpleLogger, bleListner);

bleListner.onDataCallBack = function (data) {
};
bleListner.init();

var rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function (input) {
	if (input == 'exit') {
		bleListner.stop();
		rl.close();
		process.exit(0);
	} else {
		bleListner.send(new Buffer(input));
	}
});
rl.setPrompt('>');
rl.prompt();

