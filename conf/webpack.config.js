const paths = require('./paths');
const widgetConf = require('./widget.config.json');
const XMLPlugin = require('xml-webpack-plugin');
const ArchivePlugin = require('webpack-archive-plugin');

const MODES = {
	DEV: 'development',
	PROD: 'production'
};
const isProd = process.env.MODE === MODES.PROD;
const isDev = process.env.MODE === MODES.DEV;

const widgetXMLFiles = [
	{
		template: paths.widgetPackageXML,
		filename: `package.xml`,
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
	target: 'web',
	watch: isDev,
	entry: paths.srcEntry,
	output: {
		path: isDev ? paths.buildDir : paths.distDir,
		filename: `${widgetConf.name}/${widgetConf.name}.js`,
		libraryTarget: 'amd'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
						plugins: [ 'add-module-exports', [ '@babel/plugin-transform-react-jsx', { pragma: 'h' } ] ]
					}
				}
			}
		]
	},
	externals: [
		{ MxWidgetBase: 'mxui/widget/_WidgetBase' },
		{ dojoBaseDeclare: 'dojo/_base/declare' },
		/mx|mxui|mendix|dijit|dojo/
	],
	plugins: [
		new XMLPlugin({
			files: widgetXMLFiles
		}),
		new ArchivePlugin({
			output: `${paths.distDir}/${widgetConf.name}`,
			format: 'zip',
			ext: 'mpk'
		}),
		new ArchivePlugin({
			output: `${paths.mxTestProjectDir}/widgets/${widgetConf.name}`,
			format: 'zip',
			ext: 'mpk'
		})
	]
};
