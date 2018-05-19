//TESTPLUGIN
var PluginName = 'TestPlugin'
var PluginVersion = '1.0'
var PluginAuthor = 'dnesov'
var PluginDescription = 'A test script to show a message.'
exports.data = {
    PluginName: PluginName,
    PluginVersion: PluginVersion,
    PluginAuthor: PluginAuthor,
    PluginDescription : PluginDescription
}
//Load libs
const colors = require('colors');
console.log('You can add your own scripts to the server. See config for details.'.magenta.underline)