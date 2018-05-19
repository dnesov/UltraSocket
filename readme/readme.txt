ULTRASOCKET v0.1.0 by dnesov


CUSTOM SCRIPTS INSTRUCTION:

Create new .js file and name as you want.
You can add server side libs!

To make your script work, you need to add this to begining of your script:
var PluginName = 'TestPlugin'
var PluginVersion = '1.0'
var PluginAuthor = 'yourname'
exports.data = {
    PluginName: PluginName,
    PluginVersion: PluginVersion,
    PluginAuthor: PluginAuthor,
    PluginDescription : PluginDescription
}

All scripts are written in JavaScript. Multiple script support will be soon.

Some other tips:
You can make your console logs colorfull. Dont forget to imprt COLOR library:
var colors = require('colors');
Example:
console.log('Magenta underline').magenta.underline
