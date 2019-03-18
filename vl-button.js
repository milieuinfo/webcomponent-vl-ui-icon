class VlIcon extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).innerHTML=`
          <style>
            @import ../style.css
          </style>
          <span class="vl-icon vl-vi vl-vi-calendar" aria-hidden="true"></span>
        `}connectedCallback(){const t=document.getElementById("icon");if(this.hasAttribute("icon")){const i=this.getAttribute("icon");t.classList.add("vl-vi-"+i)}if(this.hasAttribute("size")){const i=this.getAttribute("size");t.classList.add("vl-icon--"+i)}}static get observedAttributes(){return["icon","size"]}attributeChangedCallback(t,i,e){switch(t){case"icon":break;case"size":}}}customElements.define("vl-icon",VlIcon);