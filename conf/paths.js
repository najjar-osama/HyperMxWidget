const path = require('path');

module.exports = {
	srcDir: path.join(__dirname, '..', 'src'),
	srcEntry: path.join(__dirname, '..', 'src', 'index.js'),
	distDir: path.join(__dirname, '..', 'dist'),
	buildDir: path.join(__dirname, '..', 'build'),
	widgetPackageXML: path.join(__dirname, '..', 'src', 'package.ejs'),
	widgetConfigXML: path.join(__dirname, '..', 'src', 'widget.config.ejs')
};
