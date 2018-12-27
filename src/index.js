import widgetBase from 'MxWidgetBase';
import declare from 'dojoBaseDeclare';
import * as widgetConf from '../conf/widget.config.json';
import './style/style.scss';

import app from './app';
export default declare(`${widgetConf.name}.${widgetConf.name}`, [ widgetBase ], {
	constructor() {},
	postCreate() {
		console.debug(`${this.id} has been successfully initialized!`);
		app(this.domNode);
	}
});
