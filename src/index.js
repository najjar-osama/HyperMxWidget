import widgetBase from 'MxWidgetBase';
import declare from 'dojoBaseDeclare';
import * as widgetConf from '../conf/widget.config.json';

export default declare(`${widgetConf.name}.${widgetConf.name}`, [ widgetBase ], {
	constructor() {},
	postCreate() {
		console.debug(`${this.id} has been successfully initialized!`);
	}
});
