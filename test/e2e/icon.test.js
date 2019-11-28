
const { assert, driver } = require('vl-ui-core').Test;
const VlIconPage = require('./pages/vl-icon.page');

describe('vl-icon', async () => {
    const vlIconPage = new VlIconPage(driver);

    before(() => {
        return vlIconPage.load();
    });

    it('als gebruiker wil ik het verschil kunnen zien tussen een klein en een gewoon icon', async () => {
        const icon = await vlIconPage.getSmallIcon();
        await assert.eventually.isTrue(icon.isSmall());
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een licht en een gewoon icon', async () => {
        const icon = await vlIconPage.getLightIcon();
        await assert.eventually.isTrue(icon.isLight());
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een groot en een gewoon icon', async () => {
        const icon = await vlIconPage.getLargeIcon();
        await assert.eventually.isTrue(icon.isLarge());
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een icoon dat 90 graden gedraaid is en een gewoon icon', async () => {
        const icon = await vlIconPage.getIcon90();
        await assert.eventually.isTrue(icon.is90Degrees());
    });   
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een icoon dat 180 graden gedraaid is en een gewoon icon', async () => {
        const icon = await vlIconPage.getIcon180();
        await assert.eventually.isTrue(icon.is180Degrees());
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een icoon waar gedefinieerd is dat het voor een tekst staat en een gewoon icoon', async () => {
        const icon = await vlIconPage.getIconBefore();
        await assert.eventually.isTrue(icon.isBefore());
    });    
    
    it('als gebruiker wil ik het verschil kunnen zien tussen een icoon waar gedefinieerd is dat het achter een tekst staat en een gewoon icoon', async () => {
        const icon = await vlIconPage.getIconAfter();
        await assert.eventually.isTrue(icon.isAfter());
    });
    
    after(() => driver && driver.quit());
});
