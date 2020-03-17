const { VlElement } = require('vl-ui-core').Test;

class VlIcon extends VlElement {
    constructor(driver, selector) {
        super(driver, selector);
    }

    get _iconPrefix() {
        return 'vl-vi-';
    }

    get _attributePrefix() {
        return 'data-vl-';
    }

    async getType() {
        const classList = await this.getClassList();
        return classList.find(clazz => clazz.startsWith(this._iconPrefix)).substring(this._iconPrefix.length);
    }

    async isBefore() {
        return this.hasAttribute(this._attributePrefix + 'before');
    }

    async isAfter() {
        return this.hasAttribute(this._attributePrefix + 'after');
    }

    async getSize() {
        return this.getAttribute(this._attributePrefix + 'size');
    }

    async isSmallSize() {
        return (await this.getSize()) === 'small';
     }
     
     async isLargeSize() {
        return (await this.getSize()) === 'large';
     }

    async isLight() {
        return this.hasAttribute(this._attributePrefix + 'light');
    }

    async is90Degrees() {
        return this.hasAttribute(this._attributePrefix + '90deg');
    }

    async is180Degrees() {
        return this.hasAttribute(this._attributePrefix + '180deg');
    }
}

module.exports = VlIcon;
