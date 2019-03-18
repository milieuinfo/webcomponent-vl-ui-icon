import"./node_modules/vl-ui-core/vl-core.src.js";customElements.define("vl-icon",class extends HTMLElement{constructor(){super(),this._shadow=this.attachShadow({mode:"open"}),this._shadow.innerHTML=`
          <style>
            @import "../style.css";
          </style>
          <span class="vl-icon vl-vi" aria-hidden="true"></span>
        `,this._el=this._shadow.querySelector(".vl-icon")}static get observedAttributes(){return["icon","size"]}attributeChangedCallback(s,e,i){switch(s){case"icon":this._iconChangedCallback(e,i);break;case"size":this._sizeChangedCallback(e,i)}}_iconChangedCallback(s,e){this._el.classList.remove("vl-vi-"+s),e&&this._el.classList.add("vl-vi-"+e)}_sizeChangedCallback(s,e){this._el.classList.remove("vl-icon--"+s),"small"!=e&&"large"!=e||this._el.classList.add("vl-icon--"+e)}});