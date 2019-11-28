
const { assert, driver } = require('vl-ui-core').Test;
const VlIconPage = require('./pages/vl-icon.page');

describe('vl-icon', async () => {
    const vlIconPage = new VlIconPage(driver);

    before(() => {
        return vlIconPage.load();
    });

    it('placeholder', async () => {
        assert.isTrue(true);
    });

    after(() => driver && driver.quit());
});
