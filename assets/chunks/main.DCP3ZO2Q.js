var vo=Object.defineProperty;var cr=t=>{throw TypeError(t)};var wo=(t,e,n)=>e in t?vo(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Xt=(t,e,n)=>wo(t,typeof e!="symbol"?e+"":e,n),sn=(t,e,n)=>e.has(t)||cr("Cannot "+n);var G=(t,e,n)=>(sn(t,e,"read from private field"),n?n.call(t):e.get(t)),q=(t,e,n)=>e.has(t)?cr("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),be=(t,e,n,r)=>(sn(t,e,"write to private field"),r?r.call(t,n):e.set(t,n),n),S=(t,e,n)=>(sn(t,e,"access private method"),n);import{a as it,E as vt,x as A}from"./lit-element.By1J7QW_.js";import{a as ve,o as Ne}from"./unsafe-html.AtzkzaYx.js";import{n as j}from"./when.BR7zwNJC.js";import{e as xo,a as Ao}from"./addCommonStyleSheet.B9YrlOoW.js";import{d as Jt}from"./dayjs.min.Ba62AOpW.js";import{_ as Ie}from"./index.BUIxO2d3.js";import{s as jt,u as ur}from"./static.DsnaG827.js";import{c as _o}from"./repeat.C2O7mtQQ.js";import"./toolcool-range-slider.min.BBXDELo7.js";import{o as Mo}from"./orient2d.DArCjZZA.js";import{f as Ce,a as un,b as Co,m as Lo,l as So}from"./index.BSpBAx16.js";import{g as Sr,c as bt}from"./commonjsHelpers.BosuxZz1.js";import"./directive.CvdRHFdJ.js";import"./directive-helpers.CWui_jsK.js";const $o=`
:host {
  display: flex;
  box-sizing: border-box;
  height: 100%;
  line-height: 1;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
form#itemfilter {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}
form#itemfilter:not(.inline) {
  height: 100%;
  overflow: hidden;
}
details {
  width: 100%;
}
`;Ao();const Rn=`
${xo}
.field {
  margin-block-end: 0;
}
.field.small>:is(input,textarea,select) {
  font-size: 0.75rem;
}

:host, :root {
  --primary-color: var(--primary);
  --secondary-color: var(--secondary);
  --item-color: color-mix(
    in srgb,
    var(--primary-color) 10%,
    transparent
  );
  --item-hover-color: color-mix(
    in srgb,
    var(--surface) 80%,
    transparent
  );
  --item-select-color: var(--surface-variant);
  --inline-bg-color: color-mix(
    in srgb,
    var(--secondary-color) 10%,
    transparent
  );
  --border-color: color-mix(
    in srgb,
    #000000 20%,
    transparent
  );
  --background-color: var(--eox-background-color, transparent);
  --padding: 0.5rem;
  --padding-vertical: 0.25rem;
  --list-padding: 2rem;
  --text-transform: capitalize;
  --form-flex-direction: column;
  --filter-display: block;
  background-color: var(--background-color);
  display: flex;
  flex-direction: column;
}
form#itemfilter {
  flex-direction: var(--form-flex-direction);
  margin-top: 0;
}
eox-itemfilter-container {
  min-width: 200px;
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
}
eox-itemfilter-results {
  flex-grow: 1;
  overflow: hidden;
  max-height: 100%;
  display: flex;
  flex-direction: column;
}
eox-itemfilter-results button.chip {
  pointer-events: none;
}
.list li {
  padding: 0 var(--padding) !important;
}
.list.no-padding > li {
  padding: 0 !important;
}
li label {
  display: flex;
  align-items: center;
}
.title {
  text-transform: var(--text-transform);
}
.subtitle {
  opacity: .7;
}
.image {
  object-fit: cover;
  overflow: hidden;
}
.title-container {
  display: flex;
  flex-direction: column;
}
eox-itemfilter-expandcontainer {
  max-height: 300px;
  width: 100%;
}
eox-itemfilter-expandcontainer > [data-type=filter] {
  display: block;
  height: calc(100% - 32px);
  overflow-y: auto;
  overflow-x: hidden;
  max-width: 100%;
}
[data-type=filter] .title,
details summary {
  text-transform: var(--text-transform);
}
details summary nav {
  height: 32px;
}
details > summary {
  min-block-size: 0rem;
  padding: 0 var(--padding);
  user-select: none;
}
details > summary i {
  transition: transform 0.1s ease-in-out;
}
details[open] > summary i {
  transform: rotate(90deg);
}
ul.multiselect.list > li,
ul.select.list > li,
details > div > ul#results.list > li {
  padding-left: var(--list-padding) !important;
}
section:not(section:last-of-type) {
  margin-bottom: 1rem;
}
#section-results {
  overflow: hidden;
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: 0;
}
#container-results {
  border-radius: none;
}
.no-results {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
ul#results li:not(:hover) .result-action {
  display: none;
}
eox-layout {
  padding: .5rem var(--padding);
  gap: var(--card-gap, 16px);
  --column-width: var(--card-width, 300px);
  --row-height: var(--card-height, 200px);
}
eox-layout-item {
  position: relative;
  border-radius: var(--card-border-radius, 8px);
  cursor: pointer;
}
eox-layout-item > span {
  display: block;
  height: 100%;
}
eox-layout-item .image {
  width: 100%;
  height: 100%;
  transition: filter .3s ease-in-out;
  margin: 0;
}
eox-layout-item:hover .image {
  filter: brightness(.5);
}
eox-layout-item nav {
  height: 100%;
}
eox-layout-item .title-container {
  position: absolute;
  bottom: 0;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  width: 100%;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.85),
    transparent
  );
  padding-top: 25px;
}
eox-layout-item .title {
  font-weight: bold;
}
eox-layout-item .result-action {
  position: absolute;
  top: 20px;
  right: 20px;
  background: #ffffffbb;
  padding: 8px;
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
ul#results eox-layout-item.highlighted .result-action > * {
  filter: none;
}
section {
  position: relative;
  background-color: var(--background-color);
}
nav.title-nav {
  padding-left: var(--padding);
  padding-right: var(--padding);
}
eox-itemfilter-range,
tc-range-slider {
  align-items: center;
  display: block;
}
tc-range-slider {
  width: calc(100% - 32px);
  margin-left: 8px;
  margin-right: 8px;
  --width: 100%;
}
.range-before,
.range-after {
  font-size: small;
}
.range-before,
.range-after {
  margin: 1rem 0px;
}

.inline-content {
  max-height: 300px;
  overflow-y: auto;
  margin-top: 4px;
  padding: 8px;
}
.inline-container-wrapper {
  width: 100%;
  position: relative;
}
.inline-container {
  position: relative;
  align-items: center;
  border: 1px solid var(--border-color);
  border-radius: 4px;
  flex: 1;
  justify-content: space-between;
  cursor: text;
  transition: all 0.2s ease-in-out;
  display: flex;
  inline-size: 100%;
  block-size: 100%;
  overflow-x: auto;
}
[popover] {
  position: fixed;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: none;
}
.input-container {
  display: flex;
  flex: 1;
  align-items: center;
}
.input-container input,
.input-container input:focus {
  height: 100%;
  border: none;
  outline: none;
  border: 0;
  min-width: 25%;
}
.button-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 1px;
  top: 5px;
  height: calc(100% - 10px);
  width: 34px;
  background: white;
}
button.icon {
  color: #004170;
  height: 24px;
  font-size: large;
  width: unset;
}
-container-results::-webkit-scrollbar,
.inline-container::-webkit-scrollbar,
.inline-content::-webkit-scrollbar {
  inline-size: 0.4rem;
  block-size: 0.4rem;
}
-container-results::-webkit-scrollbar-thumb,
.inline-container::-webkit-scrollbar-thumb,
.inline-content::-webkit-scrollbar-thumb {
  background: lightgrey;
  border-radius: 1rem;
  cursor: default;
}
.inline-container:is(:hover,:focus)::-webkit-scrollbar-thumb,
.inline-content:is(:hover,:focus)::-webkit-scrollbar-thumb {
  background: var(--outline);
}
.hidden {
  height: 0;
  padding: 0;
  border: none;
}
.hidden:hover {
  border: none;
}
.autocomplete-container,
.text-container {
  position: relative;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: text;
}
.autocomplete-container-wrapper,
.text-container-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.autocomplete-container-wrapper::-webkit-scrollbar {
  display: none;
}
.chip-wrapper {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.chip-wrapper::-webkit-scrollbar {
  display: none;
  width: 0;
  background: transparent;
}
.autocomplete-input,
.text-input {
  flex: 1;
  border: 1px solid var(--border-color);
  outline: none;
  box-sizing: border-box;
  margin-top: 0 !important;
  margin-bottom: 0 !important;
  min-width: 150px;
}
input[type="text"].text-input,
input[type="text"].autocomplete-input {
  padding: 9px 6px !important;
  border-radius: 4px;
}
.text-input:invalid {
  border: 1px solid red;
}
.selected-items {
  display: flex;
  flex-wrap: nowrap;
  gap: 4px;
}
.select li,
.multiselect li,
eox-itemfilter-results li {
  border-radius: .5rem !important;
  display: flex;
  justify-content: space-between;
  min-block-size: 32px !important;
}
.select li:hover,
.multiselect li:hover,
eox-itemfilter-results li:hover,
details summary:hover {
  background: var(--item-hover-color);
}
eox-itemfilter-results li.highlighted {
  color: white;
  background: var(--item-select-color);
}
mark.highlight {
  all: inherit;
  display: inline;
  background: yellow;
  color: black;
}
.selected-item span {
  margin-right: 8px;
}
.selected-item button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  line-height: 1;
}
.multiselect-container,
.select-container {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.multiselect-container label,
.select-container label {
  display: flex;
  align-items: center;
  cursor: pointer;
}
.multiselect-container input,
.select-container input {
  margin-right: 8px;
  max-width: 170px;
}
.select-overflow {
  max-height: calc(32px * var(--select-filter-max-items));
  overflow-y: auto;
}
.chip-title strong {
  font-weight: 500;
}
.chip-wrapper {
  max-width: 100%;
  overflow-x: scroll;
}
.chip-container {
  display: flex;
  flex: 0;
  align-items: center;
}
.chip {
  white-space: nowrap;
}
.input-container.field {
  min-width: 10rem;
}
.input-container.dirty-filter-input {
  margin-left: 25px;
}
.error-validation {
  position: relative;
  color: #ba1a1a !important;
  font-size: x-small;
}
@media (prefers-color-scheme: dark) {
  .error-validation {
    color: #ffb4ab !important;
  }
}
input {
  background-color: var(--background-color);
}
`;var ke,$r;class Eo extends it{constructor(){super();q(this,ke);this.filterObject={},this.unstyled=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},unstyled:{type:Boolean}}}render(){return A`
      <style>
        ${!this.unstyled&&Rn}
      </style>

      ${j(this.filterObject.featured,()=>A`<slot name="filter"></slot>`,()=>A`<details
            @toggle="${S(this,ke,$r)}"
            class="details-filter max-width"
            ?open=${this.filterObject.expanded||vt}
          >
            <summary class="square">
              <nav class="responsive tiny-space">
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>chevron-right</title>
                    <path
                      d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                    />
                  </svg>
                </i>
                <span
                  class="title max"
                  style="${!this.filterObject.title&&"text-transform: var(--text-transform)"}"
                >
                  ${this.filterObject.title||this.filterObject.key||"Filter"}
                </span>
                <slot name="reset-button"></slot>
              </nav>
            </summary>
            <div>
              <slot name="filter"></slot>
            </div>
          </details>`)}
    `}}ke=new WeakSet,$r=function(n){this.dispatchEvent(new CustomEvent("details-toggled",{detail:n,bubbles:!0,composed:!0}))};customElements.define("eox-itemfilter-expandcontainer",Eo);function dt(t){return Array.isArray?Array.isArray(t):Pr(t)==="[object Array]"}function Ro(t){if(typeof t=="string")return t;let e=t+"";return e=="0"&&1/t==-1/0?"-0":e}function Po(t){return t==null?"":Ro(t)}function et(t){return typeof t=="string"}function Er(t){return typeof t=="number"}function Do(t){return t===!0||t===!1||Bo(t)&&Pr(t)=="[object Boolean]"}function Rr(t){return typeof t=="object"}function Bo(t){return Rr(t)&&t!==null}function z(t){return t!=null}function on(t){return!t.trim().length}function Pr(t){return t==null?t===void 0?"[object Undefined]":"[object Null]":Object.prototype.toString.call(t)}const ko="Incorrect 'index' type",To=t=>`Invalid value for key ${t}`,Oo=t=>`Pattern length exceeds max of ${t}.`,jo=t=>`Missing ${t} property in key`,No=t=>`Property 'weight' in key '${t}' must be a positive integer`,fr=Object.prototype.hasOwnProperty;class Io{constructor(e){this._keys=[],this._keyMap={};let n=0;e.forEach(r=>{let i=Dr(r);this._keys.push(i),this._keyMap[i.id]=i,n+=i.weight}),this._keys.forEach(r=>{r.weight/=n})}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function Dr(t){let e=null,n=null,r=null,i=1,o=null;if(et(t)||dt(t))r=t,e=hr(t),n=fn(t);else{if(!fr.call(t,"name"))throw new Error(jo("name"));const a=t.name;if(r=a,fr.call(t,"weight")&&(i=t.weight,i<=0))throw new Error(No(a));e=hr(a),n=fn(a),o=t.getFn}return{path:e,id:n,weight:i,src:r,getFn:o}}function hr(t){return dt(t)?t:t.split(".")}function fn(t){return dt(t)?t.join("."):t}function Ho(t,e){let n=[],r=!1;const i=(o,a,l)=>{if(z(o))if(!a[l])n.push(o);else{let u=a[l];const f=o[u];if(!z(f))return;if(l===a.length-1&&(et(f)||Er(f)||Do(f)))n.push(Po(f));else if(dt(f)){r=!0;for(let h=0,g=f.length;h<g;h+=1)i(f[h],a,l+1)}else a.length&&i(f,a,l+1)}};return i(t,et(e)?e.split("."):e,0),r?n:n[0]}const Fo={includeMatches:!1,findAllMatches:!1,minMatchCharLength:1},qo={isCaseSensitive:!1,ignoreDiacritics:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1},Uo={location:0,threshold:.6,distance:100},Wo={useExtendedSearch:!1,getFn:Ho,ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var _={...qo,...Fo,...Uo,...Wo};const Go=/[^ ]+/g;function zo(t=1,e=3){const n=new Map,r=Math.pow(10,e);return{get(i){const o=i.match(Go).length;if(n.has(o))return n.get(o);const a=1/Math.pow(o,.5*t),l=parseFloat(Math.round(a*r)/r);return n.set(o,l),l},clear(){n.clear()}}}class Pn{constructor({getFn:e=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){this.norm=zo(n,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach((n,r)=>{this._keysMap[n.id]=r})}create(){this.isCreated||!this.docs.length||(this.isCreated=!0,et(this.docs[0])?this.docs.forEach((e,n)=>{this._addString(e,n)}):this.docs.forEach((e,n)=>{this._addObject(e,n)}),this.norm.clear())}add(e){const n=this.size();et(e)?this._addString(e,n):this._addObject(e,n)}removeAt(e){this.records.splice(e,1);for(let n=e,r=this.size();n<r;n+=1)this.records[n].i-=1}getValueForItemAtKeyId(e,n){return e[this._keysMap[n]]}size(){return this.records.length}_addString(e,n){if(!z(e)||on(e))return;let r={v:e,i:n,n:this.norm.get(e)};this.records.push(r)}_addObject(e,n){let r={i:n,$:{}};this.keys.forEach((i,o)=>{let a=i.getFn?i.getFn(e):this.getFn(e,i.path);if(z(a)){if(dt(a)){let l=[];const u=[{nestedArrIndex:-1,value:a}];for(;u.length;){const{nestedArrIndex:f,value:h}=u.pop();if(z(h))if(et(h)&&!on(h)){let g={v:h,i:f,n:this.norm.get(h)};l.push(g)}else dt(h)&&h.forEach((g,y)=>{u.push({nestedArrIndex:y,value:g})})}r.$[o]=l}else if(et(a)&&!on(a)){let l={v:a,n:this.norm.get(a)};r.$[o]=l}}}),this.records.push(r)}toJSON(){return{keys:this.keys,records:this.records}}}function Br(t,e,{getFn:n=_.getFn,fieldNormWeight:r=_.fieldNormWeight}={}){const i=new Pn({getFn:n,fieldNormWeight:r});return i.setKeys(t.map(Dr)),i.setSources(e),i.create(),i}function Ko(t,{getFn:e=_.getFn,fieldNormWeight:n=_.fieldNormWeight}={}){const{keys:r,records:i}=t,o=new Pn({getFn:e,fieldNormWeight:n});return o.setKeys(r),o.setIndexRecords(i),o}function we(t,{errors:e=0,currentLocation:n=0,expectedLocation:r=0,distance:i=_.distance,ignoreLocation:o=_.ignoreLocation}={}){const a=e/t.length;if(o)return a;const l=Math.abs(r-n);return i?a+l/i:l?1:a}function Vo(t=[],e=_.minMatchCharLength){let n=[],r=-1,i=-1,o=0;for(let a=t.length;o<a;o+=1){let l=t[o];l&&r===-1?r=o:!l&&r!==-1&&(i=o-1,i-r+1>=e&&n.push([r,i]),r=-1)}return t[o-1]&&o-r>=e&&n.push([r,o-1]),n}const St=32;function Yo(t,e,n,{location:r=_.location,distance:i=_.distance,threshold:o=_.threshold,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,includeMatches:u=_.includeMatches,ignoreLocation:f=_.ignoreLocation}={}){if(e.length>St)throw new Error(Oo(St));const h=e.length,g=t.length,y=Math.max(0,Math.min(r,g));let p=o,b=y;const w=l>1||u,L=w?Array(g):[];let C;for(;(C=t.indexOf(e,b))>-1;){let O=we(e,{currentLocation:C,expectedLocation:y,distance:i,ignoreLocation:f});if(p=Math.min(O,p),b=C+h,w){let Z=0;for(;Z<h;)L[C+Z]=1,Z+=1}}b=-1;let E=[],$=1,R=h+g;const k=1<<h-1;for(let O=0;O<h;O+=1){let Z=0,U=R;for(;Z<U;)we(e,{errors:O,currentLocation:y+U,expectedLocation:y,distance:i,ignoreLocation:f})<=p?Z=U:R=U,U=Math.floor((R-Z)/2+Z);R=U;let ne=Math.max(1,y-U+1),Kt=a?g:Math.min(y+U,g)+h,pt=Array(Kt+2);pt[Kt+1]=(1<<O)-1;for(let W=Kt;W>=ne;W-=1){let kt=W-1,re=n[t.charAt(kt)];if(w&&(L[kt]=+!!re),pt[W]=(pt[W+1]<<1|1)&re,O&&(pt[W]|=(E[W+1]|E[W])<<1|1|E[W+1]),pt[W]&k&&($=we(e,{errors:O,currentLocation:kt,expectedLocation:y,distance:i,ignoreLocation:f}),$<=p)){if(p=$,b=kt,b<=y)break;ne=Math.max(1,2*y-b)}}if(we(e,{errors:O+1,currentLocation:y,expectedLocation:y,distance:i,ignoreLocation:f})>p)break;E=pt}const ot={isMatch:b>=0,score:Math.max(.001,$)};if(w){const O=Vo(L,l);O.length?u&&(ot.indices=O):ot.isMatch=!1}return ot}function Xo(t){let e={};for(let n=0,r=t.length;n<r;n+=1){const i=t.charAt(n);e[i]=(e[i]||0)|1<<r-n-1}return e}const Le=String.prototype.normalize?t=>t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g,""):t=>t;class kr{constructor(e,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreDiacritics:f=_.ignoreDiacritics,ignoreLocation:h=_.ignoreLocation}={}){if(this.options={location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h},e=u?e:e.toLowerCase(),e=f?Le(e):e,this.pattern=e,this.chunks=[],!this.pattern.length)return;const g=(p,b)=>{this.chunks.push({pattern:p,alphabet:Xo(p),startIndex:b})},y=this.pattern.length;if(y>St){let p=0;const b=y%St,w=y-b;for(;p<w;)g(this.pattern.substr(p,St),p),p+=St;if(b){const L=y-St;g(this.pattern.substr(L),L)}}else g(this.pattern,0)}searchIn(e){const{isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i}=this.options;if(e=n?e:e.toLowerCase(),e=r?Le(e):e,this.pattern===e){let w={isMatch:!0,score:0};return i&&(w.indices=[[0,e.length-1]]),w}const{location:o,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,ignoreLocation:h}=this.options;let g=[],y=0,p=!1;this.chunks.forEach(({pattern:w,alphabet:L,startIndex:C})=>{const{isMatch:E,score:$,indices:R}=Yo(e,w,L,{location:o+C,distance:a,threshold:l,findAllMatches:u,minMatchCharLength:f,includeMatches:i,ignoreLocation:h});E&&(p=!0),y+=$,E&&R&&(g=[...g,...R])});let b={isMatch:p,score:p?y/this.chunks.length:1};return p&&i&&(b.indices=g),b}}class At{constructor(e){this.pattern=e}static isMultiMatch(e){return dr(e,this.multiRegex)}static isSingleMatch(e){return dr(e,this.singleRegex)}search(){}}function dr(t,e){const n=t.match(e);return n?n[1]:null}class Jo extends At{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const n=e===this.pattern;return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class Zo extends At{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const r=e.indexOf(this.pattern)===-1;return{isMatch:r,score:r?0:1,indices:[0,e.length-1]}}}class Qo extends At{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const n=e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,this.pattern.length-1]}}}class ta extends At{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const n=!e.startsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class ea extends At{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const n=e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[e.length-this.pattern.length,e.length-1]}}}class na extends At{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const n=!e.endsWith(this.pattern);return{isMatch:n,score:n?0:1,indices:[0,e.length-1]}}}class Tr extends At{constructor(e,{location:n=_.location,threshold:r=_.threshold,distance:i=_.distance,includeMatches:o=_.includeMatches,findAllMatches:a=_.findAllMatches,minMatchCharLength:l=_.minMatchCharLength,isCaseSensitive:u=_.isCaseSensitive,ignoreDiacritics:f=_.ignoreDiacritics,ignoreLocation:h=_.ignoreLocation}={}){super(e),this._bitapSearch=new kr(e,{location:n,threshold:r,distance:i,includeMatches:o,findAllMatches:a,minMatchCharLength:l,isCaseSensitive:u,ignoreDiacritics:f,ignoreLocation:h})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class Or extends At{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let n=0,r;const i=[],o=this.pattern.length;for(;(r=e.indexOf(this.pattern,n))>-1;)n=r+o,i.push([r,n-1]);const a=!!i.length;return{isMatch:a,score:a?0:1,indices:i}}}const hn=[Jo,Or,Qo,ta,na,ea,Zo,Tr],pr=hn.length,ra=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/,ia="|";function sa(t,e={}){return t.split(ia).map(n=>{let r=n.trim().split(ra).filter(o=>o&&!!o.trim()),i=[];for(let o=0,a=r.length;o<a;o+=1){const l=r[o];let u=!1,f=-1;for(;!u&&++f<pr;){const h=hn[f];let g=h.isMultiMatch(l);g&&(i.push(new h(g,e)),u=!0)}if(!u)for(f=-1;++f<pr;){const h=hn[f];let g=h.isSingleMatch(l);if(g){i.push(new h(g,e));break}}}return i})}const oa=new Set([Tr.type,Or.type]);class aa{constructor(e,{isCaseSensitive:n=_.isCaseSensitive,ignoreDiacritics:r=_.ignoreDiacritics,includeMatches:i=_.includeMatches,minMatchCharLength:o=_.minMatchCharLength,ignoreLocation:a=_.ignoreLocation,findAllMatches:l=_.findAllMatches,location:u=_.location,threshold:f=_.threshold,distance:h=_.distance}={}){this.query=null,this.options={isCaseSensitive:n,ignoreDiacritics:r,includeMatches:i,minMatchCharLength:o,findAllMatches:l,ignoreLocation:a,location:u,threshold:f,distance:h},e=n?e:e.toLowerCase(),e=r?Le(e):e,this.pattern=e,this.query=sa(this.pattern,this.options)}static condition(e,n){return n.useExtendedSearch}searchIn(e){const n=this.query;if(!n)return{isMatch:!1,score:1};const{includeMatches:r,isCaseSensitive:i,ignoreDiacritics:o}=this.options;e=i?e:e.toLowerCase(),e=o?Le(e):e;let a=0,l=[],u=0;for(let f=0,h=n.length;f<h;f+=1){const g=n[f];l.length=0,a=0;for(let y=0,p=g.length;y<p;y+=1){const b=g[y],{isMatch:w,indices:L,score:C}=b.search(e);if(w){if(a+=1,u+=C,r){const E=b.constructor.type;oa.has(E)?l=[...l,...L]:l.push(L)}}else{u=0,a=0,l.length=0;break}}if(a){let y={isMatch:!0,score:u/a};return r&&(y.indices=l),y}}return{isMatch:!1,score:1}}}const dn=[];function la(...t){dn.push(...t)}function pn(t,e){for(let n=0,r=dn.length;n<r;n+=1){let i=dn[n];if(i.condition(t,e))return new i(t,e)}return new kr(t,e)}const Se={AND:"$and",OR:"$or"},gn={PATH:"$path",PATTERN:"$val"},yn=t=>!!(t[Se.AND]||t[Se.OR]),ca=t=>!!t[gn.PATH],ua=t=>!dt(t)&&Rr(t)&&!yn(t),gr=t=>({[Se.AND]:Object.keys(t).map(e=>({[e]:t[e]}))});function jr(t,e,{auto:n=!0}={}){const r=i=>{let o=Object.keys(i);const a=ca(i);if(!a&&o.length>1&&!yn(i))return r(gr(i));if(ua(i)){const u=a?i[gn.PATH]:o[0],f=a?i[gn.PATTERN]:i[u];if(!et(f))throw new Error(To(u));const h={keyId:fn(u),pattern:f};return n&&(h.searcher=pn(f,e)),h}let l={children:[],operator:o[0]};return o.forEach(u=>{const f=i[u];dt(f)&&f.forEach(h=>{l.children.push(r(h))})}),l};return yn(t)||(t=gr(t)),r(t)}function fa(t,{ignoreFieldNorm:e=_.ignoreFieldNorm}){t.forEach(n=>{let r=1;n.matches.forEach(({key:i,norm:o,score:a})=>{const l=i?i.weight:null;r*=Math.pow(a===0&&l?Number.EPSILON:a,(l||1)*(e?1:o))}),n.score=r})}function ha(t,e){const n=t.matches;e.matches=[],z(n)&&n.forEach(r=>{if(!z(r.indices)||!r.indices.length)return;const{indices:i,value:o}=r;let a={indices:i,value:o};r.key&&(a.key=r.key.src),r.idx>-1&&(a.refIndex=r.idx),e.matches.push(a)})}function da(t,e){e.score=t.score}function pa(t,e,{includeMatches:n=_.includeMatches,includeScore:r=_.includeScore}={}){const i=[];return n&&i.push(ha),r&&i.push(da),t.map(o=>{const{idx:a}=o,l={item:e[a],refIndex:a};return i.length&&i.forEach(u=>{u(o,l)}),l})}class _t{constructor(e,n={},r){this.options={..._,...n},this.options.useExtendedSearch,this._keyStore=new Io(this.options.keys),this.setCollection(e,r)}setCollection(e,n){if(this._docs=e,n&&!(n instanceof Pn))throw new Error(ko);this._myIndex=n||Br(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){z(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=()=>!1){const n=[];for(let r=0,i=this._docs.length;r<i;r+=1){const o=this._docs[r];e(o,r)&&(this.removeAt(r),r-=1,i-=1,n.push(o))}return n}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:n=-1}={}){const{includeMatches:r,includeScore:i,shouldSort:o,sortFn:a,ignoreFieldNorm:l}=this.options;let u=et(e)?et(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return fa(u,{ignoreFieldNorm:l}),o&&u.sort(a),Er(n)&&n>-1&&(u=u.slice(0,n)),pa(u,this._docs,{includeMatches:r,includeScore:i})}_searchStringList(e){const n=pn(e,this.options),{records:r}=this._myIndex,i=[];return r.forEach(({v:o,i:a,n:l})=>{if(!z(o))return;const{isMatch:u,score:f,indices:h}=n.searchIn(o);u&&i.push({item:o,idx:a,matches:[{score:f,value:o,norm:l,indices:h}]})}),i}_searchLogical(e){const n=jr(e,this.options),r=(l,u,f)=>{if(!l.children){const{keyId:g,searcher:y}=l,p=this._findMatches({key:this._keyStore.get(g),value:this._myIndex.getValueForItemAtKeyId(u,g),searcher:y});return p&&p.length?[{idx:f,item:u,matches:p}]:[]}const h=[];for(let g=0,y=l.children.length;g<y;g+=1){const p=l.children[g],b=r(p,u,f);if(b.length)h.push(...b);else if(l.operator===Se.AND)return[]}return h},i=this._myIndex.records,o={},a=[];return i.forEach(({$:l,i:u})=>{if(z(l)){let f=r(n,l,u);f.length&&(o[u]||(o[u]={idx:u,item:l,matches:[]},a.push(o[u])),f.forEach(({matches:h})=>{o[u].matches.push(...h)}))}}),a}_searchObjectList(e){const n=pn(e,this.options),{keys:r,records:i}=this._myIndex,o=[];return i.forEach(({$:a,i:l})=>{if(!z(a))return;let u=[];r.forEach((f,h)=>{u.push(...this._findMatches({key:f,value:a[h],searcher:n}))}),u.length&&o.push({idx:l,item:a,matches:u})}),o}_findMatches({key:e,value:n,searcher:r}){if(!z(n))return[];let i=[];if(dt(n))n.forEach(({v:o,i:a,n:l})=>{if(!z(o))return;const{isMatch:u,score:f,indices:h}=r.searchIn(o);u&&i.push({score:f,key:e,value:o,idx:a,norm:l,indices:h})});else{const{v:o,n:a}=n,{isMatch:l,score:u,indices:f}=r.searchIn(o);l&&i.push({score:u,key:e,value:o,norm:a,indices:f})}return i}}_t.version="7.1.0";_t.createIndex=Br;_t.parseIndex=Ko;_t.config=_;_t.parseQuery=jr;la(aa);function Nr(t,e){const n=new _t(e.filterProperties,{keys:["title"]});if(!(t.target instanceof HTMLInputElement))return;const r=t.target.value,o=n.search(r).map(a=>a.item.key||a.item.keys.join("|"));Object.keys(e.filters).forEach(a=>{e.querySelector(`[data-details="${a}"]`).parentElement.style.display=o.includes(a)||!r?"":"none"})}function ga(t,e){if(!(t.target instanceof HTMLElement))return;const n=t.target.getAttribute("data-close").replace("|","-");e.querySelector(`#filter-${n}`).reset(),e.dispatchEvent(new CustomEvent("filter")),e.requestUpdate()}const mn=Math.min,Nt=Math.max,$e=Math.round,xe=Math.floor,nt=t=>({x:t,y:t});function Ir(t){return t.split("-")[0]}function ya(t){return t.split("-")[1]}function ma(t){return t==="x"?"y":"x"}function ba(t){return t==="y"?"height":"width"}const va=new Set(["top","bottom"]);function Hr(t){return va.has(Ir(t))?"y":"x"}function wa(t){return ma(Hr(t))}function Fr(t){const{x:e,y:n,width:r,height:i}=t;return{width:r,height:i,top:n,left:e,right:e+r,bottom:n+i,x:e,y:n}}function yr(t,e,n){let{reference:r,floating:i}=t;const o=Hr(e),a=wa(e),l=ba(a),u=Ir(e),f=o==="y",h=r.x+r.width/2-i.width/2,g=r.y+r.height/2-i.height/2,y=r[l]/2-i[l]/2;let p;switch(u){case"top":p={x:h,y:r.y-i.height};break;case"bottom":p={x:h,y:r.y+r.height};break;case"right":p={x:r.x+r.width,y:g};break;case"left":p={x:r.x-i.width,y:g};break;default:p={x:r.x,y:r.y}}switch(ya(e)){case"start":p[a]-=y*(n&&f?-1:1);break;case"end":p[a]+=y*(n&&f?-1:1);break}return p}const xa=async(t,e,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:a}=n,l=o.filter(Boolean),u=await(a.isRTL==null?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:h,y:g}=yr(f,r,u),y=r,p={},b=0;for(let w=0;w<l.length;w++){const{name:L,fn:C}=l[w],{x:E,y:$,data:R,reset:k}=await C({x:h,y:g,initialPlacement:r,placement:y,strategy:i,middlewareData:p,rects:f,platform:a,elements:{reference:t,floating:e}});h=E??h,g=$??g,p={...p,[L]:{...p[L],...R}},k&&b<=50&&(b++,typeof k=="object"&&(k.placement&&(y=k.placement),k.rects&&(f=k.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):k.rects),{x:h,y:g}=yr(f,y,u)),w=-1)}return{x:h,y:g,placement:y,strategy:i,middlewareData:p}};function He(){return typeof window<"u"}function Wt(t){return qr(t)?(t.nodeName||"").toLowerCase():"#document"}function K(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function st(t){var e;return(e=(qr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function qr(t){return He()?t instanceof Node||t instanceof K(t).Node:!1}function Q(t){return He()?t instanceof Element||t instanceof K(t).Element:!1}function rt(t){return He()?t instanceof HTMLElement||t instanceof K(t).HTMLElement:!1}function mr(t){return!He()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof K(t).ShadowRoot}const Aa=new Set(["inline","contents"]);function ee(t){const{overflow:e,overflowX:n,overflowY:r,display:i}=tt(t);return/auto|scroll|overlay|hidden|clip/.test(e+r+n)&&!Aa.has(i)}const _a=new Set(["table","td","th"]);function Ma(t){return _a.has(Wt(t))}const Ca=[":popover-open",":modal"];function Fe(t){return Ca.some(e=>{try{return t.matches(e)}catch{return!1}})}const La=["transform","translate","scale","rotate","perspective"],Sa=["transform","translate","scale","rotate","perspective","filter"],$a=["paint","layout","strict","content"];function Dn(t){const e=Bn(),n=Q(t)?tt(t):t;return La.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||Sa.some(r=>(n.willChange||"").includes(r))||$a.some(r=>(n.contain||"").includes(r))}function Ea(t){let e=wt(t);for(;rt(e)&&!Ft(e);){if(Dn(e))return e;if(Fe(e))return null;e=wt(e)}return null}function Bn(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Ra=new Set(["html","body","#document"]);function Ft(t){return Ra.has(Wt(t))}function tt(t){return K(t).getComputedStyle(t)}function qe(t){return Q(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function wt(t){if(Wt(t)==="html")return t;const e=t.assignedSlot||t.parentNode||mr(t)&&t.host||st(t);return mr(e)?e.host:e}function Ur(t){const e=wt(t);return Ft(e)?t.ownerDocument?t.ownerDocument.body:t.body:rt(e)&&ee(e)?e:Ur(e)}function Zt(t,e,n){var r;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Ur(t),o=i===((r=t.ownerDocument)==null?void 0:r.body),a=K(i);if(o){const l=bn(a);return e.concat(a,a.visualViewport||[],ee(i)?i:[],l&&n?Zt(l):[])}return e.concat(i,Zt(i,[],n))}function bn(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Wr(t){const e=tt(t);let n=parseFloat(e.width)||0,r=parseFloat(e.height)||0;const i=rt(t),o=i?t.offsetWidth:n,a=i?t.offsetHeight:r,l=$e(n)!==o||$e(r)!==a;return l&&(n=o,r=a),{width:n,height:r,$:l}}function kn(t){return Q(t)?t:t.contextElement}function It(t){const e=kn(t);if(!rt(e))return nt(1);const n=e.getBoundingClientRect(),{width:r,height:i,$:o}=Wr(e);let a=(o?$e(n.width):n.width)/r,l=(o?$e(n.height):n.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const Pa=nt(0);function Gr(t){const e=K(t);return!Bn()||!e.visualViewport?Pa:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Da(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==K(t)?!1:e}function Et(t,e,n,r){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),o=kn(t);let a=nt(1);e&&(r?Q(r)&&(a=It(r)):a=It(t));const l=Da(o,n,r)?Gr(o):nt(0);let u=(i.left+l.x)/a.x,f=(i.top+l.y)/a.y,h=i.width/a.x,g=i.height/a.y;if(o){const y=K(o),p=r&&Q(r)?K(r):r;let b=y,w=bn(b);for(;w&&r&&p!==b;){const L=It(w),C=w.getBoundingClientRect(),E=tt(w),$=C.left+(w.clientLeft+parseFloat(E.paddingLeft))*L.x,R=C.top+(w.clientTop+parseFloat(E.paddingTop))*L.y;u*=L.x,f*=L.y,h*=L.x,g*=L.y,u+=$,f+=R,b=K(w),w=bn(b)}}return Fr({width:h,height:g,x:u,y:f})}function Tn(t,e){const n=qe(t).scrollLeft;return e?e.left+n:Et(st(t)).left+n}function zr(t,e,n){n===void 0&&(n=!1);const r=t.getBoundingClientRect(),i=r.left+e.scrollLeft-(n?0:Tn(t,r)),o=r.top+e.scrollTop;return{x:i,y:o}}function Ba(t){let{elements:e,rect:n,offsetParent:r,strategy:i}=t;const o=i==="fixed",a=st(r),l=e?Fe(e.floating):!1;if(r===a||l&&o)return n;let u={scrollLeft:0,scrollTop:0},f=nt(1);const h=nt(0),g=rt(r);if((g||!g&&!o)&&((Wt(r)!=="body"||ee(a))&&(u=qe(r)),rt(r))){const p=Et(r);f=It(r),h.x=p.x+r.clientLeft,h.y=p.y+r.clientTop}const y=a&&!g&&!o?zr(a,u,!0):nt(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-u.scrollLeft*f.x+h.x+y.x,y:n.y*f.y-u.scrollTop*f.y+h.y+y.y}}function ka(t){return Array.from(t.getClientRects())}function Ta(t){const e=st(t),n=qe(t),r=t.ownerDocument.body,i=Nt(e.scrollWidth,e.clientWidth,r.scrollWidth,r.clientWidth),o=Nt(e.scrollHeight,e.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Tn(t);const l=-n.scrollTop;return tt(r).direction==="rtl"&&(a+=Nt(e.clientWidth,r.clientWidth)-i),{width:i,height:o,x:a,y:l}}function Oa(t,e){const n=K(t),r=st(t),i=n.visualViewport;let o=r.clientWidth,a=r.clientHeight,l=0,u=0;if(i){o=i.width,a=i.height;const f=Bn();(!f||f&&e==="fixed")&&(l=i.offsetLeft,u=i.offsetTop)}return{width:o,height:a,x:l,y:u}}const ja=new Set(["absolute","fixed"]);function Na(t,e){const n=Et(t,!0,e==="fixed"),r=n.top+t.clientTop,i=n.left+t.clientLeft,o=rt(t)?It(t):nt(1),a=t.clientWidth*o.x,l=t.clientHeight*o.y,u=i*o.x,f=r*o.y;return{width:a,height:l,x:u,y:f}}function br(t,e,n){let r;if(e==="viewport")r=Oa(t,n);else if(e==="document")r=Ta(st(t));else if(Q(e))r=Na(e,n);else{const i=Gr(t);r={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Fr(r)}function Kr(t,e){const n=wt(t);return n===e||!Q(n)||Ft(n)?!1:tt(n).position==="fixed"||Kr(n,e)}function Ia(t,e){const n=e.get(t);if(n)return n;let r=Zt(t,[],!1).filter(l=>Q(l)&&Wt(l)!=="body"),i=null;const o=tt(t).position==="fixed";let a=o?wt(t):t;for(;Q(a)&&!Ft(a);){const l=tt(a),u=Dn(a);!u&&l.position==="fixed"&&(i=null),(o?!u&&!i:!u&&l.position==="static"&&!!i&&ja.has(i.position)||ee(a)&&!u&&Kr(t,a))?r=r.filter(h=>h!==a):i=l,a=wt(a)}return e.set(t,r),r}function Ha(t){let{element:e,boundary:n,rootBoundary:r,strategy:i}=t;const a=[...n==="clippingAncestors"?Fe(e)?[]:Ia(e,this._c):[].concat(n),r],l=a[0],u=a.reduce((f,h)=>{const g=br(e,h,i);return f.top=Nt(g.top,f.top),f.right=mn(g.right,f.right),f.bottom=mn(g.bottom,f.bottom),f.left=Nt(g.left,f.left),f},br(e,l,i));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}}function Fa(t){const{width:e,height:n}=Wr(t);return{width:e,height:n}}function qa(t,e,n){const r=rt(e),i=st(e),o=n==="fixed",a=Et(t,!0,o,e);let l={scrollLeft:0,scrollTop:0};const u=nt(0);function f(){u.x=Tn(i)}if(r||!r&&!o)if((Wt(e)!=="body"||ee(i))&&(l=qe(e)),r){const p=Et(e,!0,o,e);u.x=p.x+e.clientLeft,u.y=p.y+e.clientTop}else i&&f();o&&!r&&i&&f();const h=i&&!r&&!o?zr(i,l):nt(0),g=a.left+l.scrollLeft-u.x-h.x,y=a.top+l.scrollTop-u.y-h.y;return{x:g,y,width:a.width,height:a.height}}function an(t){return tt(t).position==="static"}function vr(t,e){if(!rt(t)||tt(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return st(t)===n&&(n=n.ownerDocument.body),n}function Vr(t,e){const n=K(t);if(Fe(t))return n;if(!rt(t)){let i=wt(t);for(;i&&!Ft(i);){if(Q(i)&&!an(i))return i;i=wt(i)}return n}let r=vr(t,e);for(;r&&Ma(r)&&an(r);)r=vr(r,e);return r&&Ft(r)&&an(r)&&!Dn(r)?n:r||Ea(t)||n}const Ua=async function(t){const e=this.getOffsetParent||Vr,n=this.getDimensions,r=await n(t.floating);return{reference:qa(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function Wa(t){return tt(t).direction==="rtl"}const Ga={convertOffsetParentRelativeRectToViewportRelativeRect:Ba,getDocumentElement:st,getClippingRect:Ha,getOffsetParent:Vr,getElementRects:Ua,getClientRects:ka,getDimensions:Fa,getScale:It,isElement:Q,isRTL:Wa};function Yr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function za(t,e){let n=null,r;const i=st(t);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,u){l===void 0&&(l=!1),u===void 0&&(u=1),o();const f=t.getBoundingClientRect(),{left:h,top:g,width:y,height:p}=f;if(l||e(),!y||!p)return;const b=xe(g),w=xe(i.clientWidth-(h+y)),L=xe(i.clientHeight-(g+p)),C=xe(h),$={rootMargin:-b+"px "+-w+"px "+-L+"px "+-C+"px",threshold:Nt(0,mn(1,u))||1};let R=!0;function k(ot){const O=ot[0].intersectionRatio;if(O!==u){if(!R)return a();O?a(!1,O):r=setTimeout(()=>{a(!1,1e-7)},1e3)}O===1&&!Yr(f,t.getBoundingClientRect())&&a(),R=!1}try{n=new IntersectionObserver(k,{...$,root:i.ownerDocument})}catch{n=new IntersectionObserver(k,$)}n.observe(t)}return a(!0),o}function Ka(t,e,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:u=!1}=r,f=kn(t),h=i||o?[...f?Zt(f):[],...Zt(e)]:[];h.forEach(C=>{i&&C.addEventListener("scroll",n,{passive:!0}),o&&C.addEventListener("resize",n)});const g=f&&l?za(f,n):null;let y=-1,p=null;a&&(p=new ResizeObserver(C=>{let[E]=C;E&&E.target===f&&p&&(p.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var $;($=p)==null||$.observe(e)})),n()}),f&&!u&&p.observe(f),p.observe(e));let b,w=u?Et(t):null;u&&L();function L(){const C=Et(t);w&&!Yr(w,C)&&n(),w=C,b=requestAnimationFrame(L)}return n(),()=>{var C;h.forEach(E=>{i&&E.removeEventListener("scroll",n),o&&E.removeEventListener("resize",n)}),g==null||g(),(C=p)==null||C.disconnect(),p=null,u&&cancelAnimationFrame(b)}}const Va=(t,e,n)=>{const r=new Map,i={platform:Ga,...n},o={...i.platform,_c:r};return xa(t,e,{...i,platform:o})};function Ya(t){const e=t.renderRoot.querySelector(".inline-container-wrapper"),n=t.renderRoot.querySelector("[popover]");return Ka(e,n,()=>{n.matches(":popover-open")&&Va(e,n,{strategy:"fixed"}).then(({x:i,y:o})=>{Object.assign(n.style,{left:`${i}px`,top:`${o}px`,width:`${e.getBoundingClientRect().width}px`})})},{animationFrame:!0})}function Xr(t){t.renderRoot.querySelector("#eox-itemfilter-input-search").value="",Nr({target:{value:""}},t)}function Xa(t,e){e.inlineMode&&t.stopPropagation()}function Ja(t){t.inlineMode&&(t.showDropdown=!0)}function Za(t,e){e.inlineMode&&(t.stopPropagation(),e.showDropdown=!0)}function Qa(t,e){e.inlineMode&&t.key==="Escape"&&e.showDropdown&&(Xr(e),e.showDropdown=!1)}function tl(t,e){e.inlineMode&&t.target instanceof HTMLElement&&t.target.tagName!=="DROPDOWN-FORM"&&t.target.tagName!=="EOX-ITEMFILTER"&&e.showDropdown&&(Xr(e),e.showDropdown=!1)}function el(t,e){var n,r,i=0,o,a,l,u,f,h,g,y=t[0],p=t[1],b=e.length;for(n=0;n<b;n++){r=0;var w=e[n],L=w.length-1;if(h=w[0],h[0]!==w[L][0]&&h[1]!==w[L][1])throw new Error("First and last coordinates in a ring must be the same");for(a=h[0]-y,l=h[1]-p,r;r<L;r++){if(g=w[r+1],u=g[0]-y,f=g[1]-p,l===0&&f===0){if(u<=0&&a>=0||a<=0&&u>=0)return 0}else if(f>=0&&l<=0||f<=0&&l>=0){if(o=Mo(a,u,l,f,0,0),o===0)return 0;(o>0&&f>0&&l<=0||o<0&&f<=0&&l>0)&&i++}h=g,l=f,a=u}}return i%2!==0}function Jr(t){if(!t)throw new Error("coord is required");if(!Array.isArray(t)){if(t.type==="Feature"&&t.geometry!==null&&t.geometry.type==="Point")return[...t.geometry.coordinates];if(t.type==="Point")return[...t.coordinates]}if(Array.isArray(t)&&t.length>=2&&!Array.isArray(t[0])&&!Array.isArray(t[1]))return[...t];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function nl(t){if(Array.isArray(t))return t;if(t.type==="Feature"){if(t.geometry!==null)return t.geometry.coordinates}else if(t.coordinates)return t.coordinates;throw new Error("coords must be GeoJSON Feature, Geometry Object or an Array")}function qt(t){return t.type==="Feature"?t.geometry:t}function J(t,e,n={}){if(!t)throw new Error("point is required");if(!e)throw new Error("polygon is required");const r=Jr(t),i=qt(e),o=i.type,a=e.bbox;let l=i.coordinates;if(a&&rl(r,a)===!1)return!1;o==="Polygon"&&(l=[l]);let u=!1;for(var f=0;f<l.length;++f){const h=el(r,l[f]);if(h===0)return!n.ignoreBoundary;h&&(u=!0)}return u}function rl(t,e){return e[0]<=t[0]&&e[1]<=t[1]&&e[2]>=t[0]&&e[3]>=t[1]}class Zr{constructor(e=[],n=il){if(this.data=e,this.length=this.data.length,this.compare=n,this.length>0)for(let r=(this.length>>1)-1;r>=0;r--)this._down(r)}push(e){this.data.push(e),this.length++,this._up(this.length-1)}pop(){if(this.length===0)return;const e=this.data[0],n=this.data.pop();return this.length--,this.length>0&&(this.data[0]=n,this._down(0)),e}peek(){return this.data[0]}_up(e){const{data:n,compare:r}=this,i=n[e];for(;e>0;){const o=e-1>>1,a=n[o];if(r(i,a)>=0)break;n[e]=a,e=o}n[e]=i}_down(e){const{data:n,compare:r}=this,i=this.length>>1,o=n[e];for(;e<i;){let a=(e<<1)+1,l=n[a];const u=a+1;if(u<this.length&&r(n[u],l)<0&&(a=u,l=n[u]),r(l,o)>=0)break;n[e]=l,e=a}n[e]=o}}function il(t,e){return t<e?-1:t>e?1:0}function Qr(t,e){return t.p.x>e.p.x?1:t.p.x<e.p.x?-1:t.p.y!==e.p.y?t.p.y>e.p.y?1:-1:1}function sl(t,e){return t.rightSweepEvent.p.x>e.rightSweepEvent.p.x?1:t.rightSweepEvent.p.x<e.rightSweepEvent.p.x?-1:t.rightSweepEvent.p.y!==e.rightSweepEvent.p.y?t.rightSweepEvent.p.y<e.rightSweepEvent.p.y?1:-1:1}class wr{constructor(e,n,r,i){this.p={x:e[0],y:e[1]},this.featureId=n,this.ringId=r,this.eventId=i,this.otherEvent=null,this.isLeftEndpoint=null}isSamePoint(e){return this.p.x===e.p.x&&this.p.y===e.p.y}}function ol(t,e){if(t.type==="FeatureCollection"){const n=t.features;for(let r=0;r<n.length;r++)xr(n[r],e)}else xr(t,e)}let Ae=0,_e=0,Me=0;function xr(t,e){const n=t.type==="Feature"?t.geometry:t;let r=n.coordinates;(n.type==="Polygon"||n.type==="MultiLineString")&&(r=[r]),n.type==="LineString"&&(r=[[r]]);for(let i=0;i<r.length;i++)for(let o=0;o<r[i].length;o++){let a=r[i][o][0],l=null;_e=_e+1;for(let u=0;u<r[i][o].length-1;u++){l=r[i][o][u+1];const f=new wr(a,Ae,_e,Me),h=new wr(l,Ae,_e,Me+1);f.otherEvent=h,h.otherEvent=f,Qr(f,h)>0?(h.isLeftEndpoint=!0,f.isLeftEndpoint=!1):(f.isLeftEndpoint=!0,h.isLeftEndpoint=!1),e.push(f),e.push(h),a=l,Me=Me+1}}Ae=Ae+1}class al{constructor(e){this.leftSweepEvent=e,this.rightSweepEvent=e.otherEvent}}function ll(t,e){if(t===null||e===null||t.leftSweepEvent.ringId===e.leftSweepEvent.ringId&&(t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.leftSweepEvent)||t.rightSweepEvent.isSamePoint(e.rightSweepEvent)||t.leftSweepEvent.isSamePoint(e.leftSweepEvent)||t.leftSweepEvent.isSamePoint(e.rightSweepEvent)))return!1;const n=t.leftSweepEvent.p.x,r=t.leftSweepEvent.p.y,i=t.rightSweepEvent.p.x,o=t.rightSweepEvent.p.y,a=e.leftSweepEvent.p.x,l=e.leftSweepEvent.p.y,u=e.rightSweepEvent.p.x,f=e.rightSweepEvent.p.y,h=(f-l)*(i-n)-(u-a)*(o-r),g=(u-a)*(r-l)-(f-l)*(n-a),y=(i-n)*(r-l)-(o-r)*(n-a);if(h===0)return!1;const p=g/h,b=y/h;if(p>=0&&p<=1&&b>=0&&b<=1){const w=n+p*(i-n),L=r+p*(o-r);return[w,L]}return!1}function cl(t,e){e=e||!1;const n=[],r=new Zr([],sl);for(;t.length;){const i=t.pop();if(i.isLeftEndpoint){const o=new al(i);for(let a=0;a<r.data.length;a++){const l=r.data[a];if(e&&l.leftSweepEvent.featureId===i.featureId)continue;const u=ll(o,l);u!==!1&&n.push(u)}r.push(o)}else i.isLeftEndpoint===!1&&r.pop()}return n}function ul(t,e){const n=new Zr([],Qr);return ol(t,n),cl(n,e)}var fl=ul;function On(t,e,n={}){const{removeDuplicates:r=!0,ignoreSelfIntersections:i=!0}=n;let o=[];t.type==="FeatureCollection"?o=o.concat(t.features):t.type==="Feature"?o.push(t):(t.type==="LineString"||t.type==="Polygon"||t.type==="MultiLineString"||t.type==="MultiPolygon")&&o.push(Ce(t)),e.type==="FeatureCollection"?o=o.concat(e.features):e.type==="Feature"?o.push(e):(e.type==="LineString"||e.type==="Polygon"||e.type==="MultiLineString"||e.type==="MultiPolygon")&&o.push(Ce(e));const a=fl(un(o),i);let l=[];if(r){const u={};a.forEach(f=>{const h=f.join(",");u[h]||(u[h]=!0,l.push(f))})}else l=a;return un(l.map(u=>Co(u)))}function ti(t,e,n){if(t!==null)for(var r,i,o,a,l,u,f,h=0,g=0,y,p=t.type,b=p==="FeatureCollection",w=p==="Feature",L=b?t.features.length:1,C=0;C<L;C++){f=b?t.features[C].geometry:w?t.geometry:t,y=f?f.type==="GeometryCollection":!1,l=y?f.geometries.length:1;for(var E=0;E<l;E++){var $=0,R=0;if(a=y?f.geometries[E]:f,a!==null){u=a.coordinates;var k=a.type;switch(h=0,k){case null:break;case"Point":if(e(u,g,C,$,R)===!1)return!1;g++,$++;break;case"LineString":case"MultiPoint":for(r=0;r<u.length;r++){if(e(u[r],g,C,$,R)===!1)return!1;g++,k==="MultiPoint"&&$++}k==="LineString"&&$++;break;case"Polygon":case"MultiLineString":for(r=0;r<u.length;r++){for(i=0;i<u[r].length-h;i++){if(e(u[r][i],g,C,$,R)===!1)return!1;g++}k==="MultiLineString"&&$++,k==="Polygon"&&R++}k==="Polygon"&&$++;break;case"MultiPolygon":for(r=0;r<u.length;r++){for(R=0,i=0;i<u[r].length;i++){for(o=0;o<u[r][i].length-h;o++){if(e(u[r][i][o],g,C,$,R)===!1)return!1;g++}R++}$++}break;case"GeometryCollection":for(r=0;r<a.geometries.length;r++)if(ti(a.geometries[r],e)===!1)return!1;break;default:throw new Error("Unknown Geometry Type")}}}}}function hl(t,e){var n,r,i,o,a,l,u,f,h,g,y=0,p=t.type==="FeatureCollection",b=t.type==="Feature",w=p?t.features.length:1;for(n=0;n<w;n++){for(l=p?t.features[n].geometry:b?t.geometry:t,f=p?t.features[n].properties:b?t.properties:{},h=p?t.features[n].bbox:b?t.bbox:void 0,g=p?t.features[n].id:b?t.id:void 0,u=l?l.type==="GeometryCollection":!1,a=u?l.geometries.length:1,i=0;i<a;i++){if(o=u?l.geometries[i]:l,o===null){if(e(null,y,f,h,g)===!1)return!1;continue}switch(o.type){case"Point":case"LineString":case"MultiPoint":case"Polygon":case"MultiLineString":case"MultiPolygon":{if(e(o,y,f,h,g)===!1)return!1;break}case"GeometryCollection":{for(r=0;r<o.geometries.length;r++)if(e(o.geometries[r],y,f,h,g)===!1)return!1;break}default:throw new Error("Unknown Geometry Type")}}y++}}function Ee(t,e){hl(t,function(n,r,i,o,a){var l=n===null?null:n.type;switch(l){case null:case"Point":case"LineString":case"Polygon":return e(Ce(n,i,{bbox:o,id:a}),r,0)===!1?!1:void 0}var u;switch(l){case"MultiPoint":u="Point";break;case"MultiLineString":u="LineString";break;case"MultiPolygon":u="Polygon";break}for(var f=0;f<n.coordinates.length;f++){var h=n.coordinates[f],g={type:u,coordinates:h};if(e(Ce(g,i),r,f)===!1)return!1}})}function vn(t,e={}){const n=qt(t);switch(!e.properties&&t.type==="Feature"&&(e.properties=t.properties),n.type){case"Polygon":return dl(n,e);case"MultiPolygon":return pl(n,e);default:throw new Error("invalid poly")}}function dl(t,e={}){const r=qt(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{};return ei(r,i)}function pl(t,e={}){const r=qt(t).coordinates,i=e.properties?e.properties:t.type==="Feature"?t.properties:{},o=[];return r.forEach(a=>{o.push(ei(a,i))}),un(o)}function ei(t,e){return t.length>1?Lo(t,e):So(t[0],e)}function gl(t,e,{ignoreSelfIntersections:n=!0}={ignoreSelfIntersections:!0}){let r=!0;return Ee(t,i=>{Ee(e,o=>{if(r===!1)return!1;r=yl(i.geometry,o.geometry,n)})}),r}function yl(t,e,n){switch(t.type){case"Point":switch(e.type){case"Point":return!wl(t.coordinates,e.coordinates);case"LineString":return!Ar(e,t);case"Polygon":return!J(t,e)}break;case"LineString":switch(e.type){case"Point":return!Ar(t,e);case"LineString":return!ml(t,e,n);case"Polygon":return!_r(e,t,n)}break;case"Polygon":switch(e.type){case"Point":return!J(e,t);case"LineString":return!_r(t,e,n);case"Polygon":return!bl(e,t,n)}}return!1}function Ar(t,e){for(let n=0;n<t.coordinates.length-1;n++)if(vl(t.coordinates[n],t.coordinates[n+1],e.coordinates))return!0;return!1}function ml(t,e,n){return On(t,e,{ignoreSelfIntersections:n}).features.length>0}function _r(t,e,n){for(const i of e.coordinates)if(J(i,t))return!0;return On(e,vn(t),{ignoreSelfIntersections:n}).features.length>0}function bl(t,e,n){for(const i of t.coordinates[0])if(J(i,e))return!0;for(const i of e.coordinates[0])if(J(i,t))return!0;return On(vn(t),vn(e),{ignoreSelfIntersections:n}).features.length>0}function vl(t,e,n){const r=n[0]-t[0],i=n[1]-t[1],o=e[0]-t[0],a=e[1]-t[1];return r*a-i*o!==0?!1:Math.abs(o)>=Math.abs(a)?o>0?t[0]<=n[0]&&n[0]<=e[0]:e[0]<=n[0]&&n[0]<=t[0]:a>0?t[1]<=n[1]&&n[1]<=e[1]:e[1]<=n[1]&&n[1]<=t[1]}function wl(t,e){return t[0]===e[0]&&t[1]===e[1]}function xl(t,e,{ignoreSelfIntersections:n=!0}={}){let r=!1;return Ee(t,i=>{Ee(e,o=>{if(r===!0)return!0;r=!gl(i.geometry,o.geometry,{ignoreSelfIntersections:n})})}),r}var Al=xl;function Re(t,e={}){if(t.bbox!=null&&e.recompute!==!0)return t.bbox;const n=[1/0,1/0,-1/0,-1/0];return ti(t,r=>{n[0]>r[0]&&(n[0]=r[0]),n[1]>r[1]&&(n[1]=r[1]),n[2]<r[0]&&(n[2]=r[0]),n[3]<r[1]&&(n[3]=r[1])}),n}function Pe(t,e,n={}){const r=Jr(t),i=nl(e);for(let o=0;o<i.length-1;o++){let a=!1;if(n.ignoreEndVertices&&(o===0&&(a="start"),o===i.length-2&&(a="end"),o===0&&o+1===i.length-1&&(a="both")),_l(i[o],i[o+1],r,a,typeof n.epsilon>"u"?null:n.epsilon))return!0}return!1}function _l(t,e,n,r,i){const o=n[0],a=n[1],l=t[0],u=t[1],f=e[0],h=e[1],g=n[0]-l,y=n[1]-u,p=f-l,b=h-u,w=g*b-y*p;if(i!==null){if(Math.abs(w)>i)return!1}else if(w!==0)return!1;if(Math.abs(p)===Math.abs(b)&&Math.abs(p)===0)return r?!1:n[0]===t[0]&&n[1]===t[1];if(r){if(r==="start")return Math.abs(p)>=Math.abs(b)?p>0?l<o&&o<=f:f<=o&&o<l:b>0?u<a&&a<=h:h<=a&&a<u;if(r==="end")return Math.abs(p)>=Math.abs(b)?p>0?l<=o&&o<f:f<o&&o<=l:b>0?u<=a&&a<h:h<a&&a<=u;if(r==="both")return Math.abs(p)>=Math.abs(b)?p>0?l<o&&o<f:f<o&&o<l:b>0?u<a&&a<h:h<a&&a<u}else return Math.abs(p)>=Math.abs(b)?p>0?l<=o&&o<=f:f<=o&&o<=l:b>0?u<=a&&a<=h:h<=a&&a<=u;return!1}function Ml(t,e){var n=qt(t),r=qt(e),i=n.type,o=r.type;switch(i){case"Point":switch(o){case"MultiPoint":return Cl(n,r);case"LineString":return Pe(n,r,{ignoreEndVertices:!0});case"Polygon":case"MultiPolygon":return J(n,r,{ignoreBoundary:!0});default:throw new Error("feature2 "+o+" geometry not supported")}case"MultiPoint":switch(o){case"MultiPoint":return Ll(n,r);case"LineString":return Sl(n,r);case"Polygon":case"MultiPolygon":return $l(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"LineString":switch(o){case"LineString":return El(n,r);case"Polygon":case"MultiPolygon":return Rl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}case"Polygon":switch(o){case"Polygon":case"MultiPolygon":return Pl(n,r);default:throw new Error("feature2 "+o+" geometry not supported")}default:throw new Error("feature1 "+i+" geometry not supported")}}function Cl(t,e){var n,r=!1;for(n=0;n<e.coordinates.length;n++)if(ri(e.coordinates[n],t.coordinates)){r=!0;break}return r}function Ll(t,e){for(var n=0;n<t.coordinates.length;n++){for(var r=!1,i=0;i<e.coordinates.length;i++)ri(t.coordinates[n],e.coordinates[i])&&(r=!0);if(!r)return!1}return!0}function Sl(t,e){for(var n=!1,r=0;r<t.coordinates.length;r++){if(!Pe(t.coordinates[r],e))return!1;n||(n=Pe(t.coordinates[r],e,{ignoreEndVertices:!0}))}return n}function $l(t,e){for(var n=!0,r=!1,i=0;i<t.coordinates.length;i++){if(r=J(t.coordinates[i],e),!r){n=!1;break}r=J(t.coordinates[i],e,{ignoreBoundary:!0})}return n&&r}function El(t,e){for(var n=0;n<t.coordinates.length;n++)if(!Pe(t.coordinates[n],e))return!1;return!0}function Rl(t,e){var n=Re(e),r=Re(t);if(!ni(n,r))return!1;for(var i=!1,o=0;o<t.coordinates.length;o++){if(!J(t.coordinates[o],e))return!1;if(i||(i=J(t.coordinates[o],e,{ignoreBoundary:!0})),!i&&o<t.coordinates.length-1){var a=Dl(t.coordinates[o],t.coordinates[o+1]);i=J(a,e,{ignoreBoundary:!0})}}return i}function Pl(t,e){var n=Re(t),r=Re(e);if(!ni(r,n))return!1;for(var i=0;i<t.coordinates[0].length;i++)if(!J(t.coordinates[0][i],e))return!1;return!0}function ni(t,e){return!(t[0]>e[0]||t[2]<e[2]||t[1]>e[1]||t[3]<e[3])}function ri(t,e){return t[0]===e[0]&&t[1]===e[1]}function Dl(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}var Bl=Ml;const kl=(t,e)=>e?Al(t,e):!0,Tl=(t,e)=>e?Bl(t,e):!0;function Ol(t,e="highlight",n="title"){const r=(o,a,l)=>{const u=a.split(".");let f;for(f=0;f<u.length-1;f++)o=o[u[f]];o[u[f]]=l},i=(o,a=[])=>{let l="",u=0;return a.forEach(f=>{const h=f[1]+1;l+=[o.substring(u,f[0]),`<mark class="${e}">`,o.substring(f[0],h),"</mark>"].join(""),u=h}),l+=o.substring(u),l};return t.filter(({matches:o})=>o&&o.length).map(({item:o,matches:a})=>{const l={...o};return a.forEach(u=>{u.key===n&&r(l,u.key,i(u.value,u.indices))}),l})}let ii;const jl=(t,e)=>{ii=new _t(t,{threshold:.4,distance:50,includeMatches:!0,useExtendedSearch:!0,...e})},Nl=async(t,e,n)=>{const r=Object.entries(e).filter(([,l])=>l.type==="text"||l.type==="select"||l.type==="multiselect").reduce((l,[u,f])=>{const h="$or",g=[],y=(p,b)=>{const w={};f.type==="text"?w[p]=`${b}`:w[u]=`="${p}"`,g.push(w)};return Object.entries(f.state).filter(([,p])=>p).forEach(([p,b])=>y(p,b)),g.length>0&&l.push({[h]:g}),l},[]);let i;if(!(r.length>0)&&n.matchAllWhenEmpty!==!1)i=t;else{const l={$and:[...r]},u=ii.search(l);i=n.enableHighlighting?Ol(u,"highlight",n.titleProperty):u.map(f=>f.item)}const o=Object.entries(e).filter(([,l])=>l.type==="range").reduce((l,[u,f])=>(l[u]={min:f.state.min,max:f.state.max,format:f.format},l),{});if(Object.keys(o).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const[h,g]of Object.entries(o)){const y=b=>g.format==="date"?Jt(b).unix():b,p=$t(h,i[u]);p?Array.isArray(p)?f[h]=o[h].min<=y(p[1])&&y(p[0])<=o[h].max:y(p)>=o[h].min&&y(p)<=o[h].max?f[h]=!0:f[h]=!1:f[h]=!0}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}const a=Object.entries(e).filter(([,l])=>l.type==="spatial").reduce((l,[u,f])=>(l[u]={geometry:f.state.geometry,mode:f.state.mode},l),{});if(Object.values(a).map(l=>l.geometry).filter(l=>!!l).length>0){const l=[];for(let u=0;u<i.length;u++){const f={};for(const h of Object.keys(a)){const g=$t(h,i[u]),y=a[h].mode||"within";g&&(y==="within"?Tl(g,a[h].geometry):kl(g,a[h].geometry))?f[h]=!0:f[h]=!1}Object.values(f).every(h=>!!h)&&l.push(i[u])}i=[...l]}return i};function Il(t,e){return[{type:"Vector",properties:{id:"draw"},source:{type:"Vector",...t&&{format:"GeoJSON"},...t&&{url:e}},zIndex:1,interactions:[{type:"draw",options:{id:"drawInteraction",type:"Box",modify:!0}}]},{type:"Tile",source:{type:"XYZ",url:"https://tiles.maps.eox.at/wmts/1.0.0/osm_3857/default/g/{z}/{y}/{x}.jpg",attribution:"{ OSM: Data &copy; OpenStreetMap contributors and others, Rendering &copy; EOX }"}}]}function Ue(t){if(!t.dirty)return null;switch(t.type){case"multiselect":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"range":t.state.min=t.min,t.state.max=t.max;break;case"select":for(const n in t.state)t.state.hasOwnProperty(n)&&(t.state[n]=!1);break;case"spatial":t.state.geometry=void 0;break;case"text":t.keys.forEach(n=>{t.state[n]=void 0});break}return delete t.stringifiedState,delete t.dirty,t}function Mr(t,e){return t*2+e}function Hl(t){return Object.keys(t).map(e=>({title:A`${t[e].title||t[e].key}:
      ${t[e].stringifiedState}`,key:e})).filter(e=>t[e.key].dirty)}function wn(t){return Object.values(t).map(e=>e.dirty).filter(e=>e).length>0}async function Fl(t,e,n){return await(await fetch(`${n.externalFilter(t,e)}`)).json()}function si(t,e,n){let r;if(t.detail?r=t.detail.target:r=t.target,r!=null&&r.classList.contains("details-filter")){if(!r.open||e!=null&&e.expandMultipleFilters)return;n.shadowRoot.querySelectorAll("eox-itemfilter-expandcontainer").forEach(i=>{const o=i.shadowRoot.querySelector(".details-filter");o&&o!==r&&o.removeAttribute("open")})}else{if(!(r!=null&&r.open)||e!=null&&e.expandMultipleResults)return;n.querySelectorAll("details").forEach(i=>{i!==r&&i.removeAttribute("open")})}}function $t(t,e){return t!=null&&t.includes(".")?t.split(".").reduce((n,r)=>n&&n[r],e):e[t]}var P,oi,xn,An,ai,_n,Mn,li,Cn,ci,ui;class ql extends it{constructor(){super();q(this,P);this.filterProperties={},this.unstyled=!1,this.inlineMode=!1,this.filters={},this._handleClickOutside=S(this,P,ai).bind(this),this._handleKeyDown=S(this,P,_n).bind(this)}static get properties(){return{filterProperties:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},unstyled:{type:Boolean},filters:{state:!0,type:Object}}}set showDropdown(n){this.renderRoot.querySelector("[popover]").togglePopover(n)}get showDropdown(){var n;return(n=this.renderRoot.querySelector("[popover]"))==null?void 0:n.matches(":popover-open")}connectedCallback(){super.connectedCallback(),this.inlineMode&&S(this,P,xn).call(this)}disconnectedCallback(){this.inlineMode&&S(this,P,An).call(this),super.disconnectedCallback()}_overlayCleanup(){}updateInline(){this.inlineMode&&this.requestUpdate()}updated(n){n.has("inlineMode")&&(this.inlineMode?S(this,P,xn).call(this):S(this,P,An).call(this))}render(){return A`
      <style>
        ${!this.unstyled&&Rn}
      </style>
      ${this.inlineMode?A`
            <div
              class="inline-container-wrapper"
              @click="${S(this,P,Mn)}"
            >
              <div class="inline-container square border" part="container">
                <div class="chip-container">
                  <div class="chip-wrapper">
                    <eox-itemfilter-chips
                      .items=${Hl(this.filters)}
                      .controller=${{remove:n=>S(this,P,ci).call(this,n)}}
                    >
                    </eox-itemfilter-chips>
                  </div>

                  ${j(wn(this.filters),()=>A`
                      <button
                        class="chip-close circle transparent small no-margin"
                        @click=${()=>this.dispatchEvent(new CustomEvent("reset"))}
                      >
                        ${this.unstyled?"x":A`
                              <i class="small">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 24 24"
                                >
                                  <title>close</title>
                                  <path
                                    d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                  />
                                </svg>
                              </i>
                            `}
                      </button>
                    `)}
                </div>
                <div
                  class="input-container field no-margin ${wn(this.filters)?"dirty-filter-input":""}"
                >
                  <input
                    autocomplete="off"
                    id="eox-itemfilter-input-search"
                    type="text"
                    @click="${S(this,P,Mn)}"
                    @focus="${S(this,P,li)}"
                    @input="${S(this,P,ui)}"
                    placeholder="Search and add filter"
                    aria-haspopup="true"
                    aria-expanded="${this.showDropdown}"
                  />
                </div>
              </div>
              <div
                popover="manual"
                class="square surface-container-lowest small-elevate"
              >
                <div
                  class="inline-content"
                  slot="content"
                  @keydown="${S(this,P,_n)}"
                  @click="${S(this,P,Cn)}"
                  @focus="${S(this,P,Cn)}"
                >
                  <slot name="section"></slot>
                </div>
              </div>
            </div>
          `:A`<slot name="section"></slot>`}
    `}}P=new WeakSet,oi=function(){setTimeout(()=>this._overlayCleanup=Ya(this))},xn=function(){document.addEventListener("click",this._handleClickOutside),document.addEventListener("focusout",this._handleClickOutside),document.addEventListener("keydown",this._handleKeyDown),S(this,P,oi).call(this)},An=function(){document.removeEventListener("click",this._handleClickOutside),document.removeEventListener("focusout",this._handleClickOutside),document.removeEventListener("keydown",this._handleKeyDown),this._overlayCleanup()},ai=function(n){tl(n,this)},_n=function(n){Qa(n,this)},Mn=function(n){Za(n,this)},li=function(){Ja(this)},Cn=function(n){Xa(n,this)},ci=function(n){ga(n,this)},ui=function(n){Nr(n,this)};customElements.define("eox-itemfilter-container",ql);function Ul(t){const e=t.renderRoot.querySelector("input[type='text']");e.value="",Ue(t.filterObject),t.requestUpdate()}function Wl(t){const e=t.renderRoot.querySelector("input[type='text']");t.isValid=e.checkValidity(),t.filterObject.keys.forEach(n=>{t.filterObject.state[n]=e.value}),t.filterObject.dirty=!0,t.filterObject.stringifiedState=e.value,t.dispatchEvent(new CustomEvent("filter")),e.value===""&&t.reset()}const Ln="ddd, D MMM YYYY HH:mm:ss";function Gl(t){if(t.filterObject=Ue(t.filterObject),t.filterObject){const e=t.querySelector("tc-range-slider"),n=t.filterObject.min,r=t.filterObject.max;e.value1!==n&&(e.value1=n),e.value2!==r&&(e.value2=r)}t.requestUpdate()}function zl(t,e){const[n,r]=t.detail.values;(n!==e.filterObject.state.min||r!==e.filterObject.state.max)&&([e.filterObject.state.min,e.filterObject.state.max]=[n,r],e.filterObject.dirty=!0),e.filterObject.dirty&&(e.filterObject.stringifiedState=e.filterObject.format==="date"?`${Jt.unix(n).format(Ln)} - ${Jt.unix(r).format(Ln)}`:`${n} - ${r}`),e.dispatchEvent(new CustomEvent("filter")),n===e.filterObject.min&&r===e.filterObject.max?e.reset():e.requestUpdate()}function Kl(t,e,n){const r=n.filterObject.format==="date",i=n.filterObject.state[t],o=r?Jt.unix(i).format(Ln):i;return A`<div class="range-${e}">${o}</div>`}function Vl(t){Yl(-1,t),Ue(t.filterObject),t.requestUpdate()}function Yl(t,e){e.selectedItems=[],jn(e),hi(e)}function fi(t,e){const n=e.selectedItems.indexOf(t);n>=0?e.selectedItems=e.selectedItems.filter((r,i)=>i!==n):e.type==="multiselect"?e.selectedItems=[...e.selectedItems,t]:(e.selectedItems=[t],e.showSuggestions=!1),jn(e),hi(e)}function Xl(t,e){t.target instanceof HTMLInputElement&&(e.query=t.target.value,e.showSuggestions=!0)}function Jl(t,e){switch(t.key){case"ArrowDown":e.highlightedIndex=Math.min(e.highlightedIndex+1,e.filteredSuggestions.length-1);break;case"ArrowUp":e.highlightedIndex=Math.max(e.highlightedIndex-1,0);break;case"Enter":e.highlightedIndex>=0&&fi(e.filteredSuggestions[e.highlightedIndex],e);break;case"Escape":e.showSuggestions=!1;break}}function Zl(t,e){(t.has("suggestions")||t.has("query"))&&jn(e)}function Ql(t,e){var r;const n=((r=t.filterObject)==null?void 0:r.sort)||((i,o)=>i.toString().localeCompare(o.toString(),void 0,{numeric:!0}));return e.sort(n).map(i=>i)}function jn(t){var r,i,o;const e=(((r=t.filterObject)==null?void 0:r.filterKeys)||t.suggestions).map(a=>`${a}`);let n=e;t.query&&(n=new _t(e,{threshold:.4}).search(t.query).map(l=>l.item)),t.filteredSuggestions=(i=t.filterObject)!=null&&i.filterKeys?n:Ql(t,n),(o=t.filterObject)!=null&&o.filterKeys&&(t.filterObject.state=e.reduce((a,l)=>(l in a||(a[l]=void 0),a),t.filterObject.state)),t.highlightedIndex=-1}function hi(t){Object.keys(t.filterObject.state).forEach(e=>{t.filterObject.state[e]=t.selectedItems.includes(e)}),t.filterObject.stringifiedState=Object.keys(t.filterObject.state).filter(e=>t.filterObject.state[e]).join(", ")||"",t.filterObject.dirty=t.filterObject.stringifiedState.length>0,t.dispatchEvent(new CustomEvent("filter")),t.requestUpdate()}function tc(t){Ue(t.filterObject),t.renderRoot.querySelector("eox-itemfilter-spatial-filter").reset(),t.requestUpdate()}function ec(t){t.renderRoot.querySelector("#eox-map").innerHTML="",di(t)}function nc(t,e){e.filterObject.state.mode=t;const n=new CustomEvent("filter",{detail:{[e.filterObject.key]:{}}});e.dispatchEvent(n)}function di(t){const e=t.renderRoot.querySelector("#eox-map");e.innerHTML===""&&(e.innerHTML='<eox-map part="map" style="height: 400px"></eox-map>');const n=t.geometry&&rc(t.geometry),r=Il(t.geometry,n);t.eoxMap=t.renderRoot.querySelector("eox-map"),setTimeout(()=>{t.eoxMap.layers=r;const i=o=>{const a=new CustomEvent("filter",{detail:{geometry:{type:"Polygon",coordinates:o.getGeometry().clone().transform("EPSG:3857","EPSG:4326").getCoordinates()}}});t.dispatchEvent(a)};t.eoxMap.interactions.drawInteraction.on("drawend",o=>{i(o.feature),t.eoxMap.removeInteraction("drawInteraction")}),t.eoxMap.interactions.drawInteraction_modify.on("modifyend",o=>{i(o.features.getArray()[0])})},1e3)}function rc(t){return`data:text/json,${encodeURIComponent(JSON.stringify({type:"FeatureCollection",features:[{type:"Feature",properties:null,geometry:t}]}))}`}var Te;class ic extends it{constructor(){super();q(this,Te,()=>{Wl(this)});Xt(this,"debouncedInputHandler",Ie(G(this,Te),500,{leading:!0}));this.filterObject={},this.unstyled=!1,this.tabIndex=0,this.isValid=!1}static get properties(){return{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number},unstyled:{type:Boolean},isValid:{state:!0,type:Boolean}}}reset(){Ul(this)}createRenderRoot(){return this}render(){return j(this.filterObject,()=>{var n;return A`
        <style></style>
        <div class="text-container">
          <div
            class="text-container-wrapper field small"
            style="margin-left: var(--list-padding)"
          >
            <input
              type="text"
              placeholder=${this.filterObject.placeholder}
              data-cy="search"
              class="text-input"
              part="input-search"
              value="${Object.values(this.filterObject.state)[0]}"
              tabindex=${this.tabIndex}
              pattern="${((n=this.filterObject.validation)==null?void 0:n.pattern)||".*"}"
              @input="${this.debouncedInputHandler}"
              @click=${r=>r.stopPropagation()}
            />
          </div>
        </div>
        <small class="error-validation" style="margin-left: var(--list-padding)"
          >${this.filterObject.validation&&this.isValid===!1?this.filterObject.validation.message:""}</small
        >
      `})}}Te=new WeakMap;customElements.define("eox-itemfilter-text",ic);function sc(t,e,n){return t.filter(r=>{const i=r[n.config.aggregateResults];let o;return n.filters[n.config.aggregateResults]&&(o=Object.keys(n.filters[n.config.aggregateResults]).filter(l=>n.filters[n.config.aggregateResults].state[l])),(o!=null&&o.length?o.includes(e):!0)&&Array.isArray(i)?i.includes(e):i===e})}function oc(t,e){return A`
    <details
      class="details-results"
      @toggle=${e.handleAccordion}
      ?open=${e.config.expandResults||vt}
    >
      <summary class="square">
        <nav class="responsive tiny-space">
          <i class="small">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <title>chevron-right</title>
              <path
                d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
              />
            </svg>
          </i>
          <span class="title"> ${t} </span>
          <button
            class="chip"
            style="--_size: 1rem; padding: 0.7rem; font-size: small"
          >
            ${e.aggregateResults(e.results,t).length}
          </button>
        </nav>
      </summary>
      <div>
        ${pi(e,t)}
      </div>
    </details>
  `}function pi(t,e){const n=t.results,r=e?t.aggregateResults(n,e):n,i=t.config,o=a=>{var l;return((l=t.selectedResult)==null?void 0:l[i.idProperty])===a[i.idProperty]?"highlighted":vt};return ur`
    ${t.resultType==="cards"?jt("<eox-layout fill-grid>"):jt('<ul id="results" class="list no-space" part="results">')}
      ${_o(r,a=>a.id,a=>ur`
        ${t.resultType==="cards"?jt("<eox-layout-item"):jt("<li")}
            class="${o(a)}"
            @click=${()=>{t.selectedResult===a?t.selectedResult=null:t.selectedResult=a,t.dispatchEvent(new CustomEvent("result",{detail:t.selectedResult}))}}
          >
            <nav id="${a.id}" class="responsive tiny-space">
              ${j(i.subTitleProperty||i.imageProperty,()=>A`
                  ${j(t.resultType==="cards",()=>$t(i.imageProperty,a)?A`
                            <img
                              class="image"
                              src="${$t(i.imageProperty,a)}"
                            />
                          `:A`
                            <svg
                              class="image"
                              width="100%"
                              height="100%"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="100%"
                                height="100%"
                                fill="var(--primary-color)"
                              />
                            </svg>
                          `,()=>A`
                      <i class="small">
                        ${$t(i.imageProperty,a)?A`
                              <img
                                class="image"
                                src="${$t(i.imageProperty,a)}"
                              />
                            `:A`
                              <svg
                                class="image"
                                width="100%"
                                height="100%"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="100%"
                                  height="100%"
                                  fill="var(--primary-color)"
                                />
                              </svg>
                            `}
                      </i>
                    `)}
                  <div class="title-container small-line max truncate">
                    <span class="title truncate"
                      >${ve(a[i.titleProperty])}</span
                    >
                    ${j(!!a[i.subTitleProperty],()=>A`
                        <small class="subtitle no-line truncate"
                          >${ve(a[i.subTitleProperty].toString())}</small
                        >
                      `)}
                  </div>
                `,()=>A`
                  <div class="small-line max truncate">
                    <span class="title truncate"
                      >${ve(a[i.titleProperty])}</span
                    >
                  </div>
                `)}
              ${j(t.enableResultAction,()=>A`
                  <button
                    class="result-action square transparent primary-text small"
                    @click=${l=>{l.stopPropagation(),t.dispatchEvent(new CustomEvent("click:result-action",{detail:a}))}}
                  >
                    <icon class="small"
                      >${ve(t.resultActionIcon)}</icon
                    >
                  </button>
                `)}
            </nav>
          </li>
        `)}
    ${t.resultType==="cards"?jt("</eox-layout>"):jt("</ul>")}
  `}var Pt,Sn,gi;class ac extends it{constructor(){super();q(this,Pt);this.config=null,this.results=null,this.filters={},this.resultAggregation=[],this.selectedResult=null,this.resultType="list",this.resultActionIcon=void 0}static get properties(){return{config:{attribute:!1,type:Object},results:{state:!0,type:Array},filters:{state:!0,type:Object},resultAggregation:{attribute:!1,type:Array},selectedResult:{state:!0,type:Object},resultType:{attribute:"result-type",type:String},resultActionIcon:{attribute:!1,type:String}}}aggregateResults(n,r){return sc(n,r,this)}createRenderRoot(){return this}handleAccordion(n){si(n,this.config,this)}render(){return A`
      <section id="section-results">
        <div slot="resultstitle"></div>
        <div id="container-results" class="scroll">
          ${j(this.results.length<1,()=>A`<small class="no-results">No matching items</small>`,()=>vt)}
          ${j(this.config.aggregateResults,()=>Ne(this.resultAggregation.filter(n=>this.aggregateResults(this.results,n).length),n=>A`${j(this.aggregateResults(this.results,n).length===1&&this.config.autoSpreadSingle,()=>A`<div style="margin-left: -8px">
                        ${S(this,Pt,Sn).call(this,n)}
                      </div>`,()=>S(this,Pt,gi).call(this,n))}`),()=>S(this,Pt,Sn).call(this))}
        </div>
      </section>
    `}}Pt=new WeakSet,Sn=function(n){return pi(this,n)},gi=function(n){return oc(n,this)};customElements.define("eox-itemfilter-results",ac);var xt,mi,bi,vi;class yi extends it{constructor(){super();q(this,xt);Xt(this,"debouncedInputHandler",Ie(S(this,xt,vi),500,{leading:!0}));this.filterObject={},this.suggestions=[],this.selectedItems=[],this.query="",this.showSuggestions=!1,this.highlightedIndex=-1,this.filteredSuggestions=[],this.type="select",this.unstyled=!1,this.tabIndex=0,this.inlineMode=!1}updated(n){Zl(n,this)}reset(){Vl(this)}firstUpdated(){this.filterObject.state&&(this.selectedItems=Object.keys(this.filterObject.state).map(n=>this.filterObject.state[n]?n:null).filter(n=>!!n),this.filterObject.stringifiedState=this.selectedItems.join(", ")||"",this.requestUpdate())}createRenderRoot(){return this}render(){const n=this.type.includes("multi")?"checkbox":"radio",r=this.filteredSuggestions.length>5?"select-overflow scroll":vt;return A`
      <style>
        :host,
        :root {
          --select-filter-max-items: 5;
        }
      </style>
      ${j((this.filterObject.filterKeys||this.suggestions).length>=10,()=>A`<div class="autocomplete-container">
            <div
              class="autocomplete-container-wrapper field small no-round"
              style="margin-left: var(--list-padding)"
            >
              <input
                autocomplete="off"
                tabindex=${this.tabIndex}
                class="autocomplete-input"
                type="text"
                .value=${this.query}
                placeholder="${this.filterObject.placeholder||"Find..."}"
                @input=${S(this,xt,mi)}
                @keydown=${S(this,xt,bi)}
                @blur=${()=>this.showSuggestions=!1}
                @focus=${()=>this.showSuggestions=!0}
              />
            </div>
          </div>`)}
      <div class="select-container ${r}">
        <ul class="${this.type} list no-space">
          ${this.filteredSuggestions.map(i=>A`
              <li
                data-identifier="${i.toString().toLowerCase()}"
                data-title="${i}"
              >
                <label class="${n} small max">
                  <input
                    type="${n}"
                    name=${i}
                    .checked=${this.selectedItems.includes(i)}
                    @change=${()=>this.debouncedInputHandler(i)}
                    @keydown=${o=>{o.key===" "&&this.inlineMode&&this.debouncedInputHandler(i)}}
                    tabindex=${this.tabIndex+1}
                  />
                  <span class="title small-line">${i}</span>
                </label>
              </li>
            `)}
        </ul>
      </div>
    `}}xt=new WeakSet,mi=function(n){Xl(n,this)},bi=function(n){Jl(n,this)},vi=function(n){fi(n,this)},Xt(yi,"properties",{filterObject:{attribute:!1,type:Object},suggestions:{attribute:!1,type:Array},selectedItems:{state:!0,type:Array},query:{state:!0,type:String},showSuggestions:{state:!0,type:Boolean},highlightedIndex:{state:!0,type:Number},filteredSuggestions:{state:!0,type:Array},type:{attribute:!0,type:String},unstyled:{type:Boolean},tabIndex:{attribute:!1,type:Number},inlineMode:{attribute:"inline-mode",type:Boolean}});customElements.define("eox-itemfilter-select",yi);var Dt,xi,$n;class wi extends it{constructor(){super();q(this,Dt);this.filterObject={},this.tabIndex=0,this.inputHandler=S(this,Dt,xi).bind(this),this.debouncedInputHandler=Ie(this.inputHandler,500,{leading:!1})}reset(){Gl(this)}createRenderRoot(){return this}render(){return j(this.filterObject,()=>A`
        <div style="margin-left: var(--list-padding)">
          ${S(this,Dt,$n).call(this,"min","before")}
          <tc-range-slider
            min="${this.filterObject.min}"
            max="${this.filterObject.max}"
            value1="${this.filterObject.state.min||this.filterObject.min}"
            value2="${this.filterObject.state.max||this.filterObject.max}"
            step="${this.filterObject.step||1}"
            @change=${this.debouncedInputHandler}
          ></tc-range-slider>
          ${S(this,Dt,$n).call(this,"max","after")}
        </div>
      `)}}Dt=new WeakSet,xi=function(n){zl(n,this)},$n=function(n,r){return Kl(n,r,this)},Xt(wi,"properties",{filterObject:{attribute:!1,type:Object},tabIndex:{attribute:!1,type:Number}});customElements.define("eox-itemfilter-range",wi);var Oe,Ai;class lc extends it{constructor(){super();q(this,Oe);this.filterObject={},this.tabIndex=0}static get properties(){return{filterObject:{type:Object},tabIndex:{attribute:!1,type:Number}}}reset(){tc(this)}createRenderRoot(){return this}render(){return j(this.filterObject,()=>{var n;return A`
        <div style="margin-left: var(--list-padding)">
          <nav class="vertical-margin small-margin wrap">
            ${Ne(["intersects","within"],r=>A`
                <label class="radio small small-text">
                  <input
                    tabindex=${this.tabIndex}
                    type="radio"
                    name="mode"
                    .checked="${(this.filterObject.state.mode||"")===r||vt}"
                    value="${r}"
                    @click=${()=>S(this,Oe,Ai).call(this,r)}
                  />
                  <span>${r} filter geometry</span>
                </label>
              `)}
          </nav>
          <eox-itemfilter-spatial-filter
            exportparts="map: spatial-filter-map"
            .geometry="${(n=this.filterObject.state)==null?void 0:n.geometry}"
            @filter="${r=>{this.filterObject.state.geometry=r.detail.geometry,this.filterObject.dirty=!0,this.filterObject.stringifiedState="Polygon",this.dispatchEvent(new CustomEvent("filter"))}}"
          ></eox-itemfilter-spatial>
        </div>
      `})}}Oe=new WeakSet,Ai=function(n){nc(n,this)};customElements.define("eox-itemfilter-spatial",lc);var je,_i;class cc extends it{constructor(){super();q(this,je);this.geometry=null,this.eoxMap=null}static get properties(){return{geometry:{type:Object},eoxMap:{type:Object}}}firstUpdated(){S(this,je,_i).call(this)}reset(){ec(this)}render(){return A`<div id="eox-map"></div>`}}je=new WeakSet,_i=function(){di(this)};customElements.define("eox-itemfilter-spatial-filter",cc);function uc(t,e){e.renderRoot.querySelectorAll(".chip").forEach(n=>{n.classList.remove("highlighted")}),t.target instanceof HTMLElement&&t.target.classList.add("highlighted"),e.requestUpdate()}function fc(t,e){const{code:n,target:r}=t;r instanceof HTMLElement&&r.id!=="eox-itemfilter-input-search"||e.parentElement.classList.contains("hidden")&&["ArrowLeft","ArrowRight","Backspace"].includes(n)||(n==="Space"&&t.preventDefault(),["Escape","Space","Enter"].includes(n)||t.stopPropagation(),["ArrowLeft","ArrowRight","Escape","Backspace"].includes(n)&&hc(n,t.target.value??"",e))}function hc(t,e,n){const r=n.renderRoot.querySelector(".chip.highlighted");if((t==="Escape"||e)&&r&&r.classList.remove("highlighted"),t==="Backspace"&&!e){if(n.items.length){r&&(r.querySelector(".chip-item-close").click(),n.items.splice(Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(r),1));const i=n.renderRoot.querySelectorAll(".chip")[n.renderRoot.querySelectorAll(".chip").length-1];i.classList.contains("highlighted")||i.classList.add("highlighted"),n.requestUpdate()}n._dispatchEvent()}if((t==="ArrowLeft"||t==="ArrowRight")&&!e){if(n.renderRoot.querySelectorAll(".chip").length<1)return;let i=0;const o=n.renderRoot.querySelector(".chip.highlighted");o&&(i=Array.from(n.renderRoot.querySelectorAll(".chip")).indexOf(o),o.classList.remove("highlighted")),i=i+(t==="ArrowLeft"?-1:1),t==="ArrowLeft"&&i<0&&(i=n.renderRoot.querySelectorAll(".chip").length-1),t==="ArrowRight"&&i>n.renderRoot.querySelectorAll(".chip").length-1&&(i=0),Array.from(n.renderRoot.querySelectorAll(".chip"))[i].classList.add("highlighted")}}var Bt,En,Mi;class dc extends it{constructor(){super();q(this,Bt);this.items={},this.controller={}}static get properties(){return{items:{attribute:!1,type:Object},controller:{attribute:!1,type:Object}}}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.getRootNode().addEventListener("keydown",S(this,Bt,En).bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.getRootNode().removeEventListener("keydown",S(this,Bt,En).bind(this))}_dispatchEvent(){this.dispatchEvent(new CustomEvent("items-selected",{detail:this.items}))}render(){return A`
      <span class="chip-container">
        ${Ne(this.items,n=>A`
            <span class="chip tiny-margin" @click=${S(this,Bt,Mi).bind(this)}>
              <span class="chip-title">${n.title}</span>
                <span
                  class="chip-item-close hidden"
                  data-close=${n.key}
                  @click=${r=>{r.stopPropagation(),this.controller.remove(r),this.requestUpdate()}}
                ></span>
              </span>
            </span>
          `)}
      </span>
    `}}Bt=new WeakSet,En=function(n){fc(n,this)},Mi=function(n){uc(n,this)};customElements.define("eox-itemfilter-chips",dc);const pc=Object.freeze({aggregateResults:void 0,autoSpreadSingle:!1,enableHighlighting:!1,externalFilter:()=>{},filterProperties:[],fuseConfig:{},inlineMode:!1,matchAllWhenEmpty:!0,showResults:!0,idProperty:"id",titleProperty:"title",subTitleProperty:void 0,imageProperty:void 0,expandMultipleFilters:!0,expandResults:!0,expandMultipleResults:!0}),Cr=["aggregateResults","autoSpreadSingle","enableHighlighting","externalFilter","filterProperties","fuseConfig","inlineMode","matchAllWhenEmpty","showResults","titleProperty","subTitleProperty","imageProperty","idProperty","expandMultipleFilters","expandResults","expandMultipleResults","items"];var gc=200,Nn="__lodash_hash_undefined__",yc=1/0,mc="[object Function]",bc="[object GeneratorFunction]",vc=/[\\^$.*+?()[\]{}|]/g,wc=/^\[object .+?Constructor\]$/,xc=typeof bt=="object"&&bt&&bt.Object===Object&&bt,Ac=typeof self=="object"&&self&&self.Object===Object&&self,In=xc||Ac||Function("return this")();function _c(t,e){var n=t?t.length:0;return!!n&&Cc(t,e,0)>-1}function Mc(t,e,n,r){for(var i=t.length,o=n+-1;++o<i;)if(e(t[o],o,t))return o;return-1}function Cc(t,e,n){if(e!==e)return Mc(t,Lc,n);for(var r=n-1,i=t.length;++r<i;)if(t[r]===e)return r;return-1}function Lc(t){return t!==t}function Sc(t,e){return t.has(e)}function $c(t,e){return t==null?void 0:t[e]}function Ec(t){var e=!1;if(t!=null&&typeof t.toString!="function")try{e=!!(t+"")}catch{}return e}function Ci(t){var e=-1,n=Array(t.size);return t.forEach(function(r){n[++e]=r}),n}var Rc=Array.prototype,Pc=Function.prototype,Li=Object.prototype,ln=In["__core-js_shared__"],Lr=function(){var t=/[^.]+$/.exec(ln&&ln.keys&&ln.keys.IE_PROTO||"");return t?"Symbol(src)_1."+t:""}(),Si=Pc.toString,Hn=Li.hasOwnProperty,Dc=Li.toString,Bc=RegExp("^"+Si.call(Hn).replace(vc,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),kc=Rc.splice,Tc=Fn(In,"Map"),cn=Fn(In,"Set"),Qt=Fn(Object,"create");function Rt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Oc(){this.__data__=Qt?Qt(null):{}}function jc(t){return this.has(t)&&delete this.__data__[t]}function Nc(t){var e=this.__data__;if(Qt){var n=e[t];return n===Nn?void 0:n}return Hn.call(e,t)?e[t]:void 0}function Ic(t){var e=this.__data__;return Qt?e[t]!==void 0:Hn.call(e,t)}function Hc(t,e){var n=this.__data__;return n[t]=Qt&&e===void 0?Nn:e,this}Rt.prototype.clear=Oc;Rt.prototype.delete=jc;Rt.prototype.get=Nc;Rt.prototype.has=Ic;Rt.prototype.set=Hc;function Gt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function Fc(){this.__data__=[]}function qc(t){var e=this.__data__,n=We(e,t);if(n<0)return!1;var r=e.length-1;return n==r?e.pop():kc.call(e,n,1),!0}function Uc(t){var e=this.__data__,n=We(e,t);return n<0?void 0:e[n][1]}function Wc(t){return We(this.__data__,t)>-1}function Gc(t,e){var n=this.__data__,r=We(n,t);return r<0?n.push([t,e]):n[r][1]=e,this}Gt.prototype.clear=Fc;Gt.prototype.delete=qc;Gt.prototype.get=Uc;Gt.prototype.has=Wc;Gt.prototype.set=Gc;function zt(t){var e=-1,n=t?t.length:0;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}function zc(){this.__data__={hash:new Rt,map:new(Tc||Gt),string:new Rt}}function Kc(t){return Ge(this,t).delete(t)}function Vc(t){return Ge(this,t).get(t)}function Yc(t){return Ge(this,t).has(t)}function Xc(t,e){return Ge(this,t).set(t,e),this}zt.prototype.clear=zc;zt.prototype.delete=Kc;zt.prototype.get=Vc;zt.prototype.has=Yc;zt.prototype.set=Xc;function De(t){var e=-1,n=t?t.length:0;for(this.__data__=new zt;++e<n;)this.add(t[e])}function Jc(t){return this.__data__.set(t,Nn),this}function Zc(t){return this.__data__.has(t)}De.prototype.add=De.prototype.push=Jc;De.prototype.has=Zc;function We(t,e){for(var n=t.length;n--;)if(ou(t[n][0],e))return n;return-1}function Qc(t){if(!$i(t)||ru(t))return!1;var e=au(t)||Ec(t)?Bc:wc;return e.test(iu(t))}function tu(t,e,n){var r=-1,i=_c,o=t.length,a=!0,l=[],u=l;if(o>=gc){var f=eu(t);if(f)return Ci(f);a=!1,i=Sc,u=new De}else u=l;t:for(;++r<o;){var h=t[r],g=h;if(h=h!==0?h:0,a&&g===g){for(var y=u.length;y--;)if(u[y]===g)continue t;l.push(h)}else i(u,g,n)||(u!==l&&u.push(g),l.push(h))}return l}var eu=cn&&1/Ci(new cn([,-0]))[1]==yc?function(t){return new cn(t)}:lu;function Ge(t,e){var n=t.__data__;return nu(e)?n[typeof e=="string"?"string":"hash"]:n.map}function Fn(t,e){var n=$c(t,e);return Qc(n)?n:void 0}function nu(t){var e=typeof t;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?t!=="__proto__":t===null}function ru(t){return!!Lr&&Lr in t}function iu(t){if(t!=null){try{return Si.call(t)}catch{}try{return t+""}catch{}}return""}function su(t){return t&&t.length?tu(t):[]}function ou(t,e){return t===e||t!==t&&e!==e}function au(t){var e=$i(t)?Dc.call(t):"";return e==mc||e==bc}function $i(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function lu(){}var cu=su;const Ei=Sr(cu);var Be={exports:{}};Be.exports;(function(t,e){var n=200,r="Expected a function",i="__lodash_hash_undefined__",o=1,a=2,l=9007199254740991,u="[object Arguments]",f="[object Array]",h="[object Boolean]",g="[object Date]",y="[object Error]",p="[object Function]",b="[object GeneratorFunction]",w="[object Map]",L="[object Number]",C="[object Object]",E="[object Promise]",$="[object RegExp]",R="[object Set]",k="[object String]",ot="[object Symbol]",O="[object WeakMap]",Z="[object ArrayBuffer]",U="[object DataView]",ne="[object Float32Array]",Kt="[object Float64Array]",pt="[object Int8Array]",qn="[object Int16Array]",W="[object Int32Array]",kt="[object Uint8Array]",re="[object Uint8ClampedArray]",Bi="[object Uint16Array]",ki="[object Uint32Array]",Ti=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Oi=/^\w*$/,ji=/^\./,Ni=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ii=/[\\^$.*+?()[\]{}|]/g,Hi=/\\(\\)?/g,Fi=/^\[object .+?Constructor\]$/,qi=/^(?:0|[1-9]\d*)$/,D={};D[ne]=D[Kt]=D[pt]=D[qn]=D[W]=D[kt]=D[re]=D[Bi]=D[ki]=!0,D[u]=D[f]=D[Z]=D[h]=D[U]=D[g]=D[y]=D[p]=D[w]=D[L]=D[C]=D[$]=D[R]=D[k]=D[O]=!1;var Un=typeof bt=="object"&&bt&&bt.Object===Object&&bt,Ui=typeof self=="object"&&self&&self.Object===Object&&self,gt=Un||Ui||Function("return this")(),Wn=e&&!e.nodeType&&e,Gn=Wn&&!0&&t&&!t.nodeType&&t,Wi=Gn&&Gn.exports===Wn,zn=Wi&&Un.process,Kn=function(){try{return zn&&zn.binding("util")}catch{}}(),Vn=Kn&&Kn.isTypedArray;function Gi(s,c){for(var d=-1,m=s?s.length:0,x=Array(m);++d<m;)x[d]=c(s[d],d,s);return x}function zi(s,c){for(var d=-1,m=c.length,x=s.length;++d<m;)s[x+d]=c[d];return s}function Ki(s,c){for(var d=-1,m=s?s.length:0;++d<m;)if(c(s[d],d,s))return!0;return!1}function Vi(s){return function(c){return c==null?void 0:c[s]}}function Yi(s,c){for(var d=-1,m=Array(s);++d<s;)m[d]=c(d);return m}function Xi(s){return function(c){return s(c)}}function Ji(s,c){return s==null?void 0:s[c]}function ze(s){var c=!1;if(s!=null&&typeof s.toString!="function")try{c=!!(s+"")}catch{}return c}function Zi(s){var c=-1,d=Array(s.size);return s.forEach(function(m,x){d[++c]=[x,m]}),d}function Qi(s,c){return function(d){return s(c(d))}}function ts(s){var c=-1,d=Array(s.size);return s.forEach(function(m){d[++c]=m}),d}var es=Array.prototype,ns=Function.prototype,ie=Object.prototype,Ke=gt["__core-js_shared__"],Yn=function(){var s=/[^.]+$/.exec(Ke&&Ke.keys&&Ke.keys.IE_PROTO||"");return s?"Symbol(src)_1."+s:""}(),Xn=ns.toString,at=ie.hasOwnProperty,Tt=ie.toString,rs=RegExp("^"+Xn.call(at).replace(Ii,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),se=gt.Symbol,Jn=gt.Uint8Array,is=ie.propertyIsEnumerable,ss=es.splice,Zn=se?se.isConcatSpreadable:void 0,os=Qi(Object.keys,Object),Ve=Ot(gt,"DataView"),Vt=Ot(gt,"Map"),Ye=Ot(gt,"Promise"),Xe=Ot(gt,"Set"),Je=Ot(gt,"WeakMap"),Yt=Ot(Object,"create"),as=Ct(Ve),ls=Ct(Vt),cs=Ct(Ye),us=Ct(Xe),fs=Ct(Je),oe=se?se.prototype:void 0,Ze=oe?oe.valueOf:void 0,Qn=oe?oe.toString:void 0;function Mt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function hs(){this.__data__=Yt?Yt(null):{}}function ds(s){return this.has(s)&&delete this.__data__[s]}function ps(s){var c=this.__data__;if(Yt){var d=c[s];return d===i?void 0:d}return at.call(c,s)?c[s]:void 0}function gs(s){var c=this.__data__;return Yt?c[s]!==void 0:at.call(c,s)}function ys(s,c){var d=this.__data__;return d[s]=Yt&&c===void 0?i:c,this}Mt.prototype.clear=hs,Mt.prototype.delete=ds,Mt.prototype.get=ps,Mt.prototype.has=gs,Mt.prototype.set=ys;function lt(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function ms(){this.__data__=[]}function bs(s){var c=this.__data__,d=le(c,s);if(d<0)return!1;var m=c.length-1;return d==m?c.pop():ss.call(c,d,1),!0}function vs(s){var c=this.__data__,d=le(c,s);return d<0?void 0:c[d][1]}function ws(s){return le(this.__data__,s)>-1}function xs(s,c){var d=this.__data__,m=le(d,s);return m<0?d.push([s,c]):d[m][1]=c,this}lt.prototype.clear=ms,lt.prototype.delete=bs,lt.prototype.get=vs,lt.prototype.has=ws,lt.prototype.set=xs;function ct(s){var c=-1,d=s?s.length:0;for(this.clear();++c<d;){var m=s[c];this.set(m[0],m[1])}}function As(){this.__data__={hash:new Mt,map:new(Vt||lt),string:new Mt}}function _s(s){return ce(this,s).delete(s)}function Ms(s){return ce(this,s).get(s)}function Cs(s){return ce(this,s).has(s)}function Ls(s,c){return ce(this,s).set(s,c),this}ct.prototype.clear=As,ct.prototype.delete=_s,ct.prototype.get=Ms,ct.prototype.has=Cs,ct.prototype.set=Ls;function ae(s){var c=-1,d=s?s.length:0;for(this.__data__=new ct;++c<d;)this.add(s[c])}function Ss(s){return this.__data__.set(s,i),this}function $s(s){return this.__data__.has(s)}ae.prototype.add=ae.prototype.push=Ss,ae.prototype.has=$s;function ut(s){this.__data__=new lt(s)}function Es(){this.__data__=new lt}function Rs(s){return this.__data__.delete(s)}function Ps(s){return this.__data__.get(s)}function Ds(s){return this.__data__.has(s)}function Bs(s,c){var d=this.__data__;if(d instanceof lt){var m=d.__data__;if(!Vt||m.length<n-1)return m.push([s,c]),this;d=this.__data__=new ct(m)}return d.set(s,c),this}ut.prototype.clear=Es,ut.prototype.delete=Rs,ut.prototype.get=Ps,ut.prototype.has=Ds,ut.prototype.set=Bs;function ks(s,c){var d=ft(s)||en(s)?Yi(s.length,String):[],m=d.length,x=!!m;for(var v in s)at.call(s,v)&&!(x&&(v=="length"||rr(v,m)))&&d.push(v);return d}function le(s,c){for(var d=s.length;d--;)if(or(s[d][0],c))return d;return-1}var Ts=Zs(Ns);function Os(s,c,d,m,x){var v=-1,M=s.length;for(d||(d=io),x||(x=[]);++v<M;){var B=s[v];d(B)?zi(x,B):x[x.length]=B}return x}var js=Qs();function Ns(s,c){return s&&js(s,c,ge)}function tr(s,c){c=ue(c,s)?[c]:er(c);for(var d=0,m=c.length;s!=null&&d<m;)s=s[fe(c[d++])];return d&&d==m?s:void 0}function Is(s){return Tt.call(s)}function Hs(s,c){return s!=null&&c in Object(s)}function Qe(s,c,d,m,x){return s===c?!0:s==null||c==null||!de(s)&&!pe(c)?s!==s&&c!==c:Fs(s,c,Qe,d,m,x)}function Fs(s,c,d,m,x,v){var M=ft(s),B=ft(c),T=f,N=f;M||(T=yt(s),T=T==u?C:T),B||(N=yt(c),N=N==u?C:N);var H=T==C&&!ze(s),F=N==C&&!ze(c),I=T==N;if(I&&!H)return v||(v=new ut),M||ho(s)?nr(s,c,d,m,x,v):to(s,c,T,d,m,x,v);if(!(x&a)){var V=H&&at.call(s,"__wrapped__"),Y=F&&at.call(c,"__wrapped__");if(V||Y){var mt=V?s.value():s,ht=Y?c.value():c;return v||(v=new ut),d(mt,ht,m,x,v)}}return I?(v||(v=new ut),eo(s,c,d,m,x,v)):!1}function qs(s,c,d,m){var x=d.length,v=x;if(s==null)return!v;for(s=Object(s);x--;){var M=d[x];if(M[2]?M[1]!==s[M[0]]:!(M[0]in s))return!1}for(;++x<v;){M=d[x];var B=M[0],T=s[B],N=M[1];if(M[2]){if(T===void 0&&!(B in s))return!1}else{var H=new ut,F;if(!(F===void 0?Qe(N,T,m,o|a,H):F))return!1}}return!0}function Us(s){if(!de(s)||oo(s))return!1;var c=ar(s)||ze(s)?rs:Fi;return c.test(Ct(s))}function Ws(s){return pe(s)&&nn(s.length)&&!!D[Tt.call(s)]}function Gs(s){return typeof s=="function"?s:s==null?mo:typeof s=="object"?ft(s)?Ys(s[0],s[1]):Vs(s):bo(s)}function zs(s){if(!ao(s))return os(s);var c=[];for(var d in Object(s))at.call(s,d)&&d!="constructor"&&c.push(d);return c}function Ks(s,c){var d=-1,m=he(s)?Array(s.length):[];return Ts(s,function(x,v,M){m[++d]=c(x,v,M)}),m}function Vs(s){var c=no(s);return c.length==1&&c[0][2]?sr(c[0][0],c[0][1]):function(d){return d===s||qs(d,s,c)}}function Ys(s,c){return ue(s)&&ir(c)?sr(fe(s),c):function(d){var m=go(d,s);return m===void 0&&m===c?yo(d,s):Qe(c,m,void 0,o|a)}}function Xs(s){return function(c){return tr(c,s)}}function Js(s){if(typeof s=="string")return s;if(rn(s))return Qn?Qn.call(s):"";var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function er(s){return ft(s)?s:lo(s)}function Zs(s,c){return function(d,m){if(d==null)return d;if(!he(d))return s(d,m);for(var x=d.length,v=-1,M=Object(d);++v<x&&m(M[v],v,M)!==!1;);return d}}function Qs(s){return function(c,d,m){for(var x=-1,v=Object(c),M=m(c),B=M.length;B--;){var T=M[++x];if(d(v[T],T,v)===!1)break}return c}}function nr(s,c,d,m,x,v){var M=x&a,B=s.length,T=c.length;if(B!=T&&!(M&&T>B))return!1;var N=v.get(s);if(N&&v.get(c))return N==c;var H=-1,F=!0,I=x&o?new ae:void 0;for(v.set(s,c),v.set(c,s);++H<B;){var V=s[H],Y=c[H];if(m)var mt=M?m(Y,V,H,c,s,v):m(V,Y,H,s,c,v);if(mt!==void 0){if(mt)continue;F=!1;break}if(I){if(!Ki(c,function(ht,Lt){if(!I.has(Lt)&&(V===ht||d(V,ht,m,x,v)))return I.add(Lt)})){F=!1;break}}else if(!(V===Y||d(V,Y,m,x,v))){F=!1;break}}return v.delete(s),v.delete(c),F}function to(s,c,d,m,x,v,M){switch(d){case U:if(s.byteLength!=c.byteLength||s.byteOffset!=c.byteOffset)return!1;s=s.buffer,c=c.buffer;case Z:return!(s.byteLength!=c.byteLength||!m(new Jn(s),new Jn(c)));case h:case g:case L:return or(+s,+c);case y:return s.name==c.name&&s.message==c.message;case $:case k:return s==c+"";case w:var B=Zi;case R:var T=v&a;if(B||(B=ts),s.size!=c.size&&!T)return!1;var N=M.get(s);if(N)return N==c;v|=o,M.set(s,c);var H=nr(B(s),B(c),m,x,v,M);return M.delete(s),H;case ot:if(Ze)return Ze.call(s)==Ze.call(c)}return!1}function eo(s,c,d,m,x,v){var M=x&a,B=ge(s),T=B.length,N=ge(c),H=N.length;if(T!=H&&!M)return!1;for(var F=T;F--;){var I=B[F];if(!(M?I in c:at.call(c,I)))return!1}var V=v.get(s);if(V&&v.get(c))return V==c;var Y=!0;v.set(s,c),v.set(c,s);for(var mt=M;++F<T;){I=B[F];var ht=s[I],Lt=c[I];if(m)var lr=M?m(Lt,ht,I,c,s,v):m(ht,Lt,I,s,c,v);if(!(lr===void 0?ht===Lt||d(ht,Lt,m,x,v):lr)){Y=!1;break}mt||(mt=I=="constructor")}if(Y&&!mt){var ye=s.constructor,me=c.constructor;ye!=me&&"constructor"in s&&"constructor"in c&&!(typeof ye=="function"&&ye instanceof ye&&typeof me=="function"&&me instanceof me)&&(Y=!1)}return v.delete(s),v.delete(c),Y}function ce(s,c){var d=s.__data__;return so(c)?d[typeof c=="string"?"string":"hash"]:d.map}function no(s){for(var c=ge(s),d=c.length;d--;){var m=c[d],x=s[m];c[d]=[m,x,ir(x)]}return c}function Ot(s,c){var d=Ji(s,c);return Us(d)?d:void 0}var yt=Is;(Ve&&yt(new Ve(new ArrayBuffer(1)))!=U||Vt&&yt(new Vt)!=w||Ye&&yt(Ye.resolve())!=E||Xe&&yt(new Xe)!=R||Je&&yt(new Je)!=O)&&(yt=function(s){var c=Tt.call(s),d=c==C?s.constructor:void 0,m=d?Ct(d):void 0;if(m)switch(m){case as:return U;case ls:return w;case cs:return E;case us:return R;case fs:return O}return c});function ro(s,c,d){c=ue(c,s)?[c]:er(c);for(var m,x=-1,M=c.length;++x<M;){var v=fe(c[x]);if(!(m=s!=null&&d(s,v)))break;s=s[v]}if(m)return m;var M=s?s.length:0;return!!M&&nn(M)&&rr(v,M)&&(ft(s)||en(s))}function io(s){return ft(s)||en(s)||!!(Zn&&s&&s[Zn])}function rr(s,c){return c=c??l,!!c&&(typeof s=="number"||qi.test(s))&&s>-1&&s%1==0&&s<c}function ue(s,c){if(ft(s))return!1;var d=typeof s;return d=="number"||d=="symbol"||d=="boolean"||s==null||rn(s)?!0:Oi.test(s)||!Ti.test(s)||c!=null&&s in Object(c)}function so(s){var c=typeof s;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?s!=="__proto__":s===null}function oo(s){return!!Yn&&Yn in s}function ao(s){var c=s&&s.constructor,d=typeof c=="function"&&c.prototype||ie;return s===d}function ir(s){return s===s&&!de(s)}function sr(s,c){return function(d){return d==null?!1:d[s]===c&&(c!==void 0||s in Object(d))}}var lo=tn(function(s){s=po(s);var c=[];return ji.test(s)&&c.push(""),s.replace(Ni,function(d,m,x,v){c.push(x?v.replace(Hi,"$1"):m||d)}),c});function fe(s){if(typeof s=="string"||rn(s))return s;var c=s+"";return c=="0"&&1/s==-1/0?"-0":c}function Ct(s){if(s!=null){try{return Xn.call(s)}catch{}try{return s+""}catch{}}return""}function co(s,c){return Os(uo(s,c))}function uo(s,c){var d=ft(s)?Gi:Ks;return d(s,Gs(c))}function tn(s,c){if(typeof s!="function"||c&&typeof c!="function")throw new TypeError(r);var d=function(){var m=arguments,x=c?c.apply(this,m):m[0],v=d.cache;if(v.has(x))return v.get(x);var M=s.apply(this,m);return d.cache=v.set(x,M),M};return d.cache=new(tn.Cache||ct),d}tn.Cache=ct;function or(s,c){return s===c||s!==s&&c!==c}function en(s){return fo(s)&&at.call(s,"callee")&&(!is.call(s,"callee")||Tt.call(s)==u)}var ft=Array.isArray;function he(s){return s!=null&&nn(s.length)&&!ar(s)}function fo(s){return pe(s)&&he(s)}function ar(s){var c=de(s)?Tt.call(s):"";return c==p||c==b}function nn(s){return typeof s=="number"&&s>-1&&s%1==0&&s<=l}function de(s){var c=typeof s;return!!s&&(c=="object"||c=="function")}function pe(s){return!!s&&typeof s=="object"}function rn(s){return typeof s=="symbol"||pe(s)&&Tt.call(s)==ot}var ho=Vn?Xi(Vn):Ws;function po(s){return s==null?"":Js(s)}function go(s,c,d){var m=s==null?void 0:tr(s,c);return m===void 0?d:m}function yo(s,c){return s!=null&&ro(s,c,Hs)}function ge(s){return he(s)?ks(s):zs(s)}function mo(s){return s}function bo(s){return ue(s)?Vi(fe(s)):Xs(s)}t.exports=co})(Be,Be.exports);var uu=Be.exports;const Ri=Sr(uu);function fu(t,e,n){let r=[];t.filterProperties.length&&t.filterProperties.forEach(o=>{const a={},l=f=>o.format==="date"?Jt(f).unix():parseFloat(f);e.forEach(f=>{var h,g;if(o.type==="range"){const y=$t(o.key,f);if(Array.isArray(y)){const p=[l(y[0]),l(y[1])];a.min=a.min!==void 0?Math.min(a.min,p[0]):p[0],a.max=a.max!==void 0?Math.max(a.max,p[1]):p[1]}else{const p=l(y);a.min=a.min!==void 0?Math.min(a.min,p):p,a.max=a.max!==void 0?Math.max(a.max,p):p}return}Array.isArray(f[o.key])?f[o.key].forEach(y=>{a[y]=void 0}):o.type==="spatial"?(a.geometry=((h=o==null?void 0:o.state)==null?void 0:h.geometry)||void 0,a.geometry&&(o.stringifiedState=a.geometry.type),a.mode=o.mode||"intersects"):(g=o.key)!=null&&g.includes(".")?Ei(Ri(n.items,o.key)).filter(y=>y).forEach(y=>{a[y]=void 0}):a[f[o.key]]=void 0});const u=o.key||o.keys.join("|");n.filters[u]=Object.assign({type:o.type||"multiselect",dirty:o.state?Object.values(o.state).some(f=>f):void 0,key:u},o.type==="range"?{min:a.min,max:a.max,format:o.format}:{},o),n.filters[u].state=Object.assign({},a,o.state)}),t.matchAllWhenEmpty!==!1&&(n.results=n.sortResults(e),n.requestUpdate()),t.aggregateResults&&(r=Array.from(new Set(e.reduce((o,a)=>o.concat(a[t.aggregateResults]),[]))).sort((o,a)=>o.localeCompare(a)));const i=[];return Object.values(n.filters).forEach(o=>{o.type==="text"?o.keys.forEach(a=>{i.includes(a)||i.push(a)}):(o.type==="select"||o.type==="multiselect")&&(i.includes(o.key)||i.push(o.key))}),jl(e,Object.assign({keys:i},t.fuseConfig)),r}async function hu(t,e,n){let r;n.externalFilter?r=await Fl(e,n.filters,t):r=await Nl(e,n.filters,t),n.results=n.sortResults(r)}function du(t,e,n){const r=`filter-${t.key}`.replace("|","-");switch(t.type){case"text":return A`<eox-itemfilter-text
        data-type="filter"
        data-cy="text-filter"
        slot="filter"
        id="${r}"
        .tabIndex=${e}
        .filterObject=${t}
        .unstyled=${n.unstyled}
        @filter=${()=>n.search()}
      ></eox-itemfilter-text>`;case"multiselect":case"select":return A`
        <eox-itemfilter-select
          .inlineMode=${n.inlineMode||!1}
          data-type="filter"
          id="${r}"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .suggestions="${Ei(Ri(n.items,t.key)).filter(i=>i)}"
          type="${t.type}"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-select>
      `;case"range":return A`
        <eox-itemfilter-range
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          .unstyled=${n.unstyled}
          @filter=${()=>n.search()}
        ></eox-itemfilter-range>
      `;case"spatial":return A`
        <eox-itemfilter-spatial
          id="${r}"
          data-type="filter"
          .tabIndex=${e}
          .filterObject=${t}
          slot="filter"
          @filter=${()=>n.search()}
        ></eox-itemfilter-spatial>
      `;default:return A``}}function pu(t,e){return[...t].sort((n,r)=>n[e.titleProperty].localeCompare(r[e.titleProperty]))}function gu(t,e,n){return A`
    ${j(t.dirty,()=>A`
        <button
          type="button"
          tabindex=${e}
          slot="reset-button"
          class="reset-icon icon square primary-text transparent small no-margin"
          @click=${r=>{const i=r.target.parentElement.querySelector("[slot=filter]");i&&typeof i.reset=="function"&&i.reset(),n.search(),n.requestUpdate()}}
        >
          ${n.unstyled?"Reset":A`
                <i class="small">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <title>close</title>
                    <path
                      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                    />
                  </svg>
                </i>
                <div class="tooltip left">Reset filter</div>
              `}
        </button>
      `)}
  `}function yu(t){t.renderRoot.querySelectorAll("[data-type='filter']").forEach(e=>{typeof e.reset=="function"&&e.reset()}),t.search()}var te,Ht,X,Ut,Pi,Di;class mu extends it{constructor(){super();q(this,Ut);q(this,te,[]);q(this,Ht,[]);q(this,X,pc);this.items=null,this.filters={},this.results=[],this.selectedResult=null,this.search=Ie(this.searchHandler,100,{leading:!0}),this.aggregateResults=void 0,this.autoSpreadSingle=!1,this.enableHighlighting=!1,this.externalFilter=null,this.filterProperties=[],this.fuseConfig={},this.inlineMode=!1,this.matchAllWhenEmpty=!0,this.showResults=!0,this.titleProperty="title",this.subTitleProperty=void 0,this.imageProperty=void 0,this.idProperty="id",this.expandMultipleFilters=!0,this.expandResults=!0,this.expandMultipleResults=!0,this.resultType="list",this.enableResultAction=!1,this.resultActionIcon='<svg style="width: 24px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>click me!</title><path fill="currentColor" d="M11.5,11L17.88,16.37L17,16.55L16.36,16.67C15.73,16.8 15.37,17.5 15.65,18.07L15.92,18.65L17.28,21.59L15.86,22.25L14.5,19.32L14.24,18.74C13.97,18.15 13.22,17.97 12.72,18.38L12.21,18.78L11.5,19.35V11M10.76,8.69A0.76,0.76 0 0,0 10,9.45V20.9C10,21.32 10.34,21.66 10.76,21.66C10.95,21.66 11.11,21.6 11.24,21.5L13.15,19.95L14.81,23.57C14.94,23.84 15.21,24 15.5,24C15.61,24 15.72,24 15.83,23.92L18.59,22.64C18.97,22.46 19.15,22 18.95,21.63L17.28,18L19.69,17.55C19.85,17.5 20,17.43 20.12,17.29C20.39,16.97 20.35,16.5 20,16.21L11.26,8.86L11.25,8.87C11.12,8.76 10.95,8.69 10.76,8.69M15,10V8H20V10H15M13.83,4.76L16.66,1.93L18.07,3.34L15.24,6.17L13.83,4.76M10,0H12V5H10V0M3.93,14.66L6.76,11.83L8.17,13.24L5.34,16.07L3.93,14.66M3.93,3.34L5.34,1.93L8.17,4.76L6.76,6.17L3.93,3.34M7,10H2V8H7V10" /></svg>',this.styleOverride="",this.unstyled=!1}static get properties(){return{items:{attribute:!1,type:Object},results:{state:!0,attribute:!1,type:Object},filters:{state:!0,attribute:!1,type:Object},selectedResult:{attribute:!1,type:Object},aggregateResults:{attribute:"aggregate-results",type:String},autoSpreadSingle:{attribute:"auto-spread-single",type:Boolean},enableHighlighting:{attribute:"enable-highlighting",type:Boolean},filterProperties:{attribute:!1,type:Array},fuseConfig:{attribute:!1,type:Object},inlineMode:{attribute:"inline-mode",type:Boolean},matchAllWhenEmpty:{attribute:"match-all-when-empty",type:Boolean},showResults:{attribute:"show-result",type:Boolean},idProperty:{attribute:"id-property",type:String},titleProperty:{attribute:"title-property",type:String},subTitleProperty:{attribute:"sub-title-property",type:String},imageProperty:{attribute:"image-property",type:String},expandMultipleFilters:{attribute:"enable-multiple-filter",type:Boolean},expandResults:{attribute:"expand-result",type:Boolean},expandMultipleResults:{attribute:"expand-multiple-results",type:Boolean},externalFilter:{attribute:!1,type:Function},resultType:{attribute:"result-type",type:String},enableResultAction:{attribute:!1,type:Boolean},resultActionIcon:{attribute:!1,type:String},styleOverride:{type:String},unstyled:{type:Boolean}}}apply(){be(this,te,fu(G(this,X),G(this,Ht),this)),this.search()}async searchHandler(){await hu(G(this,X),G(this,Ht),this),this.dispatchEvent(new CustomEvent("filter",{detail:{results:this.results,filters:this.filters},bubbles:!0,composed:!0})),this.inlineMode&&this.renderRoot.querySelector("eox-itemfilter-container").updateInline(),this.requestUpdate()}sortResults(n){return pu(n,G(this,X))}resetFilters(){yu(this)}firstUpdated(n){var i;let r={};Cr.map(o=>{r={...r,[o]:this[o]}}),be(this,X,r),be(this,Ht,((i=this.items)==null?void 0:i.map((o,a)=>Object.assign({id:o[this.idProperty]||`item-${a}`},o)))||[]),this.apply()}updated(n){Cr.map(r=>n.has(r)?(this.firstUpdated(void 0),!0):!1)}updateResult(n){this.selectedResult=n.detail,this.dispatchEvent(new CustomEvent("select",{detail:this.selectedResult,bubbles:!0,composed:!0})),this.requestUpdate()}emitResultAction(n){this.dispatchEvent(new CustomEvent("click:result-action",{detail:n.detail,bubbles:!0,composed:!0}))}render(){var n;return A`
      <style>
        ${$o}
        ${!this.unstyled&&Rn}
        ${this.styleOverride}
      </style>
      <form
        id="itemfilter"
        class=${this.inlineMode?"inline":vt}
        @submit="${r=>r.preventDefault()}"
      >
        ${j(this.filterProperties,()=>A`
            <div style="display: var(--filter-display);">
              <eox-itemfilter-container
                .filters=${this.filters}
                .filterProperties=${this.filterProperties}
                .inlineMode=${this.inlineMode||!1}
                @reset=${()=>this.resetFilters()}
                @filter=${()=>this.search()}
              >
                <section
                  slot="section"
                  style="height: 100%; overflow: hidden; display: flex; flex-direction: column;"
                >
                  ${j(!this.inlineMode,()=>A`
                      <nav class="title-nav">
                        <div class="max">
                          <slot name="filterstitle"
                            ><p><strong>Filters</strong></p></slot
                          >
                        </div>
                        ${j(!this.inlineMode&&G(this,X).filterProperties&&!this.inlineMode&&G(this,X).filterProperties&&wn(this.filters),()=>A`
                            <button
                              type="button"
                              id="filter-reset"
                              class="reset-icon border small"
                              data-cy="filter-reset"
                              @click=${()=>this.resetFilters()}
                            >
                              ${this.unstyled?vt:A`
                                    <i class="small">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                      >
                                        <title>close</title>
                                        <path
                                          d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                        />
                                      </svg>
                                    </i>
                                  `}
                              <span class="small-text">Reset all</span>
                            </button>
                          `)}
                      </nav>
                    `)}
                  <div class="scroll" style="flex: 1;">
                    <ul id="filters" class="list no-space">
                      ${Ne(Object.values(this.filters),(r,i)=>A` <li class="no-padding">
                            <eox-itemfilter-expandcontainer
                              .filterObject=${r}
                              @details-toggled=${o=>si(o,G(this,X),this)}
                              data-details="${r.key}"
                            >
                              ${S(this,Ut,Di).call(this,r,Mr(i,1))}
                              ${S(this,Ut,Pi).call(this,r,Mr(i,2))}
                            </eox-itemfilter-expandcontainer>
                          </li>`)}
                    </ul>
                  </div>
                </section>
              </eox-itemfilter-container>
            </div>
          `)}
        ${j(((n=G(this,X))==null?void 0:n.showResults)&&this.results,()=>A`
            <div class="small-space"></div>
            <eox-itemfilter-results
              .config=${G(this,X)}
              .results=${this.results}
              .filters=${this.filters}
              .resultAggregation=${G(this,te)}
              .selectedResult=${this.selectedResult}
              .resultType=${this.resultType}
              .enableResultAction=${this.enableResultAction}
              .resultActionIcon=${this.resultActionIcon}
              @result=${this.updateResult}
              @click:result-action=${this.emitResultAction}
            >
              <nav class="title-nav">
                <slot name="resultstitle"
                  ><p><strong>Results</strong></p></slot
                >
              </nav>
            </eox-itemfilter-results>
          `)}
      </form>
    `}}te=new WeakMap,Ht=new WeakMap,X=new WeakMap,Ut=new WeakSet,Pi=function(n,r){return du(n,r,this)},Di=function(n,r){return gu(n,r,this)};customElements.define("eox-itemfilter",mu);export{mu as EOxItemFilter};
