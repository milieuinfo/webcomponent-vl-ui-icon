import{VlElement}from"https://cdn.milieuinfo.be/vl-ui-icon/0.1.0/node_modules/vl-ui-core/vl-core.js";export class VlIcon extends VlElement{constructor(){super(`
            <style>
                @import "https://cdn.milieuinfo.be/vl-ui-icon/0.1https://cdn.milieuinfo.be/vl-ui-icon/0.2.0/style.css";
            </style>
            <span class="vl-icon vl-vi" aria-hidden="true"></span>
        `)}static get _observedAttributes(){return["icon","size"]}_iconChangedCallback(oldValue,newValue){this._changeClass(this._element,"vl-vi-"+oldValue,"vl-vi-"+newValue)}_sizeChangedCallback(oldValue,newValue){if(["small","large"].indexOf(newValue)>=0){this._changeClass(this._element,"vl-icon--"+oldValue,"vl-icon--"+newValue)}else{this._element.classList.remove("vl-icon--"+oldValue)}}};customElements.define("vl-icon",VlIcon);