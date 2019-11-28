const VlIcon = require('../components/vl-icon');
const { Page } = require('vl-ui-core');
const { Config } = require('vl-ui-core');

class VlIconPage extends Page {
    async _getIcon(selector) {
        return new VlIcon(this.driver, selector);
    }

    async load() {
        await super.load(Config.baseUrl + '/demo/vl-icon.html');
    }
}

module.exports = VlIconPage;
