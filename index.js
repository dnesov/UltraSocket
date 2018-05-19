  //Load libraries
const fs = require('fs')
const os = require('os')
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
  //Variables
var date = new Date();
var hours = (new Date()).getHours();
var minutes = (new Date()).getMinutes();
var time = '['+hours+':'+minutes+']'
var logData = 'Server Started'
var getScriptValue = module.exports
var WriteLine = fs.createWriteStream('log.txt', {
  flags: 'a'
})
  //Load config
const configData = fs.readFileSync('config.txt', 'utf8');
const config = configData
  .split(os.EOL)
  .map(line => line.split('='))
  .reduce((acc, val) => {
    const configName = val[0].trim()
    const configValue = val[1].trim()
    acc[configName] = configValue
    return acc
  }, {})
  //Load custom script
var customscript = require(config.customscript);
var scriptData = customscript.data
  //Colors
var colors = require('colors');
  //Set variables from config
var port = config.port 
colors.setTheme({
    input: 'white',
    prompt: 'grey',
    info: 'blue',
    data: 'grey',
    warn: 'yellow',
    success: 'green',
    danger: 'red'
  });
//Server logic
console.log('ULTRASOCKET SERVER v0.1.0'.cyan);
console.log('[SUCCESS]Custom script loaded! Here is some information:'.bold.green)
console.log('Script name: '+scriptData.PluginName)
console.log('Script version: '+scriptData.PluginVersion)
console.log('Script author: '+scriptData.PluginAuthor)
console.log('Script description: '+scriptData.PluginDescription)
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
io.on('connection', function(socket){
    WriteLine.write(time+'[INFO] a user connected')
    console.log(time+'[INFO] a user connected'.info.bold);
    socket.on('disconnect', function(){
      WriteLine.write(time+'[INFO] user disconnected')
      console.log(time+'[INFO] user disconnected'.warn.bold);
    });
  });
  http.listen(port, function(){
    console.log(colors.success.bold(time+'[SUCCESS] listening on '+port));
  });