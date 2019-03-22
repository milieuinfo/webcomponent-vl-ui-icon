import{VlElement}from"./node_modules/vl-ui-core/vl-core.src.js";export class VlIcon extends VlElement{constructor(){super(`
            <style>
                @import "../style.css";
            </style>
            <span class="vl-icon vl-vi" aria-hidden="true"></span>
        `)}static get _observedAttributes(){return["icon","size"]}_iconChangedCallback(oldValue,newValue){this._changeClass(this._element,"vl-vi-"+oldValue,"vl-vi-"+newValue)}_sizeChangedCallback(oldValue,newValue){if(["small","large"].indexOf(newValue)>=0){this._changeClass(this._element,"vl-icon--"+oldValue,"vl-icon--"+newValue)}else{this._element.classList.remove("vl-icon--"+oldValue)}}};customElements.define("vl-icon",VlIcon);