import{VlElement}from"https://cdn.milieuinfo.be/vl-ui-icon/0.2.0/node_modules/vl-ui-core/vl-core.js";export class VlIcon extends VlElement(HTMLElement){static get _observedAttributes(){return["icon","size"]}static get _observedChildClassAttributes(){return["before","after"]}constructor(){super(`
            <style>
                @import "https://cdn.milieuinfo.be/vl-ui-icon//style.css";
            </style>
            <span class="vl-icon vl-vi" aria-hidden="true"></span>
        `)}get _classPrefix(){return"vl-icon--"}_iconChangedCallback(oldValue,newValue){this._changeClass(this._element,oldValue,newValue,"vl-vi-")}_sizeChangedCallback(oldValue,newValue){if(["small","large"].indexOf(newValue)>=0){this._changeClass(this._element,oldValue,newValue)}else{this._element.classList.remove(this._prefix+oldValue)}}};customElements.define("vl-icon",VlIcon);