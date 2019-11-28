
const { assert, driver } = require('vl-ui-core').Test;
const VlIconPage = require('./pages/vl-icon.page');

describe('vl-icon', async () => {
    const vlIconPage = new VlIconPage(driver);

    before(() => {
        return vlIconPage.load();
    });

    it('als gebruiker wil ik het verschil kunnen zien tussen een klein en een gewoon icon', async () => {
        assert.isTrue(true);
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een licht en een gewoon icon', async () => {
        assert.isTrue(true);
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een groot en een gewoon icon', async () => {
        assert.isTrue(true);
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een icoon dat 90 graden gedraaid is en een gewoon icon', async () => {
        assert.isTrue(true);
    });   
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een icoon dat 180 graden gedraaid is en een gewoon icon', async () => {
        assert.isTrue(true);
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een icoon waar gedefinieerd is dat het voor een tekst staat en een gewoon icoon', async () => {
        assert.isTrue(true);
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een icoon waar gedefinieerd is dat het achter een tekst staat en een gewoon icoon', async () => {
        assert.isTrue(true);
    });
    
    after(() => driver && driver.quit());
});
