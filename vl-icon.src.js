/**
 * vl-icon
 *
 * <span class="vl-icon vl-icon--small vl-vi vl-vi-calendar" aria-hidden="true"></span>
 * ...wordt...
 * <vl-icon icon="calendar" size="small"></vl-icon>
 *
 * De wrapper class "vl-icon-wrapper" wordt NIET in deze Web Component geïmplementeerd
 *
 * @demo demo/vl-icon.html
 */
import './node_modules/vl-ui-core/vl-core.src.js';


customElements.define('vl-icon', class extends HTMLElement {

    constructor() {

        // (always call super first)
        super();

        // Create shadow root
        this._shadow = this.attachShadow({mode: 'open'});
        this._shadow.innerHTML = `
          <style>
            @import "../style.css";
          </style>
          <span class="vl-icon vl-vi" aria-hidden="true"></span>
        `;
        this._el = this._shadow.querySelector(".vl-icon");
    }



    //observed attributes
    static get observedAttributes() {return ['icon','size']; }


    // Respond to attribute changes
    attributeChangedCallback(attr, oldValue, newValue) {
        switch (attr) {
            case 'icon':
                this._iconChangedCallback(oldValue,newValue);
                break;
            case 'size':
                this._sizeChangedCallback(oldValue,newValue);
                break;
            default:
                break;
        }

    }


    _iconChangedCallback(oldValue,newValue) {
        this._el.classList.remove('vl-vi-' + oldValue);
        if (newValue){
            this._el.classList.add('vl-vi-' + newValue);
        }
    };


    _sizeChangedCallback(oldValue,newValue) {
        this._el.classList.remove('vl-icon--' + oldValue);
        if (newValue == "small" || newValue == "large"){
            this._el.classList.add('vl-icon--' + newValue);
        }
    };


});