const paths = require('./paths');
const widgetConf = require('./widget.config.json');
const XMLPlugin = require('xml-webpack-plugin');

const MODES = {
	DEV: 'development',
	PROD: 'production'
};
const isProd = process.env.MODE === MODES.PROD;
const isDev = process.env.MODE === MODES.DEV;

const widgetXMLFiles = [
	{
		template: paths.widgetPackageXML,
		filename: 'package.xml',
		data: {
			NAME: widgetConf.name
		}
	},
	{
		template: paths.widgetConfigXML,
		filename: `${widgetConf.name}/${widgetConf.name}.xml`,
		data: {
			NAME: widgetConf.name,
			FRIENDLY_NAME: widgetConf.friendlyName,
			WIDGET_DESC: widgetConf.description
		}
	}
];

module.exports = {
	mode: isDev ? MODES.DEV : MODES.PROD,
	watch: isDev,
	entry: paths.srcEntry,
	output: {
		path: isDev ? paths.buildDir : paths.distDir,
		filename: isDev ? `${widgetConf.name}/${widgetConf.name}.js` : `${widgetConf.name}/${widgetConf.name}.min.js`,
		libraryTarget: 'amd'
	},
	module: {
		rules: [ { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' } ]
	},
	externals: {
		MxWidgetBase: 'mxui/widget/_WidgetBase'
	},
	plugins: [
		new XMLPlugin({
			files: widgetXMLFiles
		})
	]
};
