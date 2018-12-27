const path = require('path');

module.exports = {
	srcDir: path.join(__dirname, '..', 'src'),
	srcEntry: path.join(__dirname, '..', 'src', 'index.js'),
	confDir: __dirname,
	distDir: path.join(__dirname, '..', 'dist'),
	buildDir: path.join(__dirname, '..', 'build'),
	mxTestProjectDir: path.join(__dirname, '..', 'test'),
	widgetPackageXML: path.join(__dirname, '..', 'src', 'package.ejs'),
	widgetConfigXML: path.join(__dirname, '..', 'src', 'widget.config.ejs')
};
