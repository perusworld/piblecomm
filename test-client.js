var debug = require('debug')('nodeblecomm:test');
var logger = require("./logger")
var nodeblecomm = require("./nodeblecomm").client
var readline = require('readline');

var bleConnector = new nodeblecomm.SimpleBLEConnector('fff0', 'fff1', 'fff2');
var simpleLogger = new logger.SimpleLogger();

simpleLogger.init(300);
nodeblecomm.BLEConnContext.init(simpleLogger, bleConnector);

bleConnector.init();

var rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('>');
rl.prompt();
