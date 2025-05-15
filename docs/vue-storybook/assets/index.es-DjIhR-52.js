import{d as y,u as w,c as m,o as Ye,a as f,m as A,b as x,e as U,f as P,F as ue,g as he,t as Je,n as kt,h as St,j as R,k as Qt,l as Ge,p as Er,q as u,s as kr,v as Sr}from"./vue.esm-bundler-B6fWMb2G.js";function c(e,t,r,o){var s,a=arguments.length,i=a<3?t:o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(s=e[n])&&(i=(a<3?s(i):a>3?s(t,r,i):s(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function d(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Bt=globalThis,te=Bt.ShadowRoot&&(Bt.ShadyCSS===void 0||Bt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),ve=new WeakMap;let Xe=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(te&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ve.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ve.set(t,e))}return e}toString(){return this.cssText}};const Cr=e=>new Xe(typeof e=="string"?e:e+"",void 0,ee),$=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,s,a)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[a+1],e[0]);return new Xe(r,e,ee)},zr=(e,t)=>{if(te)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),s=Bt.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,e.appendChild(o)}},fe=te?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return Cr(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Or,defineProperty:Pr,getOwnPropertyDescriptor:jr,getOwnPropertyNames:Br,getOwnPropertySymbols:Nr,getPrototypeOf:Ur}=Object,rt=globalThis,me=rt.trustedTypes,Rr=me?me.emptyScript:"",ge=rt.reactiveElementPolyfillSupport,mt=(e,t)=>e,Rt={toAttribute(e,t){switch(t){case Boolean:e=e?Rr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},re=(e,t)=>!Or(e,t),be={attribute:!0,type:String,converter:Rt,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),rt.litPropertyMetadata??(rt.litPropertyMetadata=new WeakMap);let K=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&Pr(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:s}=jr(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:o,set(a){const i=o==null?void 0:o.call(this);s==null||s.call(this,a),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??be}static _$Ei(){if(this.hasOwnProperty(mt("elementProperties")))return;const e=Ur(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(mt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(mt("properties"))){const t=this.properties,r=[...Br(t),...Nr(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(fe(o))}else e!==void 0&&t.push(fe(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return zr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var r;const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const a=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:Rt).toAttribute(t,o.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var r,o;const s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const i=s.getPropertyOptions(a),n=typeof i.converter=="function"?{fromAttribute:i.converter}:((r=i.converter)==null?void 0:r.fromAttribute)!==void 0?i.converter:Rt;this._$Em=a,this[a]=n.fromAttribute(t,i.type)??((o=this._$Ej)==null?void 0:o.get(a))??null,this._$Em=null}}requestUpdate(e,t,r){var o;if(e!==void 0){const s=this.constructor,a=this[e];if(r??(r=s.getPropertyOptions(e)),!((r.hasChanged??re)(a,t)||r.useDefault&&r.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:s},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),s!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,a]of o){const{wrapped:i}=a,n=this[s];i!==!0||this._$AL.has(s)||n===void 0||this.C(s,void 0,a,n)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};K.elementStyles=[],K.shadowRootOptions={mode:"open"},K[mt("elementProperties")]=new Map,K[mt("finalized")]=new Map,ge==null||ge({ReactiveElement:K}),(rt.reactiveElementVersions??(rt.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=globalThis,Vt=Tt.trustedTypes,ye=Vt?Vt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ze="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Ke="?"+M,Tr=`<${Ke}>`,G=document,yt=()=>G.createComment(""),$t=e=>e===null||typeof e!="object"&&typeof e!="function",Gt=Array.isArray,qt=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=/-->/g,_e=/>/g,I=RegExp(`>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),xe=/'/g,we=/"/g,Qe=/^(?:script|style|textarea|title)$/i,v=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),ot=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),Ae=new WeakMap,Y=G.createTreeWalker(G,129);function tr(e,t){if(!Gt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ye!==void 0?ye.createHTML(t):t}const Vr=(e,t)=>{const r=e.length-1,o=[];let s,a=t===2?"<svg>":t===3?"<math>":"",i=lt;for(let n=0;n<r;n++){const l=e[n];let _,b,h=-1,E=0;for(;E<l.length&&(i.lastIndex=E,b=i.exec(l),b!==null);)E=i.lastIndex,i===lt?b[1]==="!--"?i=$e:b[1]!==void 0?i=_e:b[2]!==void 0?(Qe.test(b[2])&&(s=RegExp("</"+b[2],"g")),i=I):b[3]!==void 0&&(i=I):i===I?b[0]===">"?(i=s??lt,h=-1):b[1]===void 0?h=-2:(h=i.lastIndex-b[2].length,_=b[1],i=b[3]===void 0?I:b[3]==='"'?we:xe):i===we||i===xe?i=I:i===$e||i===_e?i=lt:(i=I,s=void 0);const k=i===I&&e[n+1].startsWith("/>")?" ":"";a+=i===lt?l+Tr:h>=0?(o.push(_),l.slice(0,h)+Ze+l.slice(h)+M+k):l+M+(h===-2?n:k)}return[tr(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};let Xt=class er{constructor({strings:t,_$litType$:r},o){let s;this.parts=[];let a=0,i=0;const n=t.length-1,l=this.parts,[_,b]=Vr(t,r);if(this.el=er.createElement(_,o),Y.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=Y.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(Ze)){const E=b[i++],k=s.getAttribute(h).split(M),O=/([.?@])?(.*)/.exec(E);l.push({type:1,index:a,name:O[2],strings:k,ctor:O[1]==="."?Mr:O[1]==="?"?Lr:O[1]==="@"?Ir:It}),s.removeAttribute(h)}else h.startsWith(M)&&(l.push({type:6,index:a}),s.removeAttribute(h));if(Qe.test(s.tagName)){const h=s.textContent.split(M),E=h.length-1;if(E>0){s.textContent=Vt?Vt.emptyScript:"";for(let k=0;k<E;k++)s.append(h[k],yt()),Y.nextNode(),l.push({type:2,index:++a});s.append(h[E],yt())}}}else if(s.nodeType===8)if(s.data===Ke)l.push({type:2,index:a});else{let h=-1;for(;(h=s.data.indexOf(M,h+1))!==-1;)l.push({type:7,index:a}),h+=M.length-1}a++}}static createElement(t,r){const o=G.createElement("template");return o.innerHTML=t,o}};function st(e,t,r=e,o){var s,a;if(t===ot)return t;let i=o!==void 0?(s=r._$Co)==null?void 0:s[o]:r._$Cl;const n=$t(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=i:r._$Cl=i),i!==void 0&&(t=st(e,i._$AS(e,t.values),i,o)),t}let Hr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,o=((e==null?void 0:e.creationScope)??G).importNode(t,!0);Y.currentNode=o;let s=Y.nextNode(),a=0,i=0,n=r[0];for(;n!==void 0;){if(a===n.index){let l;n.type===2?l=new Ct(s,s.nextSibling,this,e):n.type===1?l=new n.ctor(s,n.name,n.strings,this,e):n.type===6&&(l=new Dr(s,this,e)),this._$AV.push(l),n=r[++i]}a!==(n==null?void 0:n.index)&&(s=Y.nextNode(),a++)}return Y.currentNode=G,o}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};class Ct{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,o,s){this.type=2,this._$AH=S,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=st(this,t,r),$t(t)?t===S||t==null||t===""?(this._$AH!==S&&this._$AR(),this._$AH=S):t!==this._$AH&&t!==ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(o=>Gt(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function")(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==S&&$t(this._$AH)?this._$AA.nextSibling.data=t:this.T(G.createTextNode(t)),this._$AH=t}$(t){var r;const{values:o,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=Xt.createElement(tr(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===a)this._$AH.p(o);else{const i=new Hr(a,this),n=i.u(this.options);i.p(o),this.T(n),this._$AH=i}}_$AC(t){let r=Ae.get(t.strings);return r===void 0&&Ae.set(t.strings,r=new Xt(t)),r}k(t){Gt(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,s=0;for(const a of t)s===r.length?r.push(o=new Ct(this.O(yt()),this.O(yt()),this,this.options)):o=r[s],o._$AI(a),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}let It=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,o,s){this.type=1,this._$AH=S,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=s,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=S}_$AI(e,t=this,r,o){const s=this.strings;let a=!1;if(s===void 0)e=st(this,e,t,0),a=!$t(e)||e!==this._$AH&&e!==ot,a&&(this._$AH=e);else{const i=e;let n,l;for(e=s[0],n=0;n<s.length-1;n++)l=st(this,i[r+n],t,n),l===ot&&(l=this._$AH[n]),a||(a=!$t(l)||l!==this._$AH[n]),l===S?e=S:e!==S&&(e+=(l??"")+s[n+1]),this._$AH[n]=l}a&&!o&&this.j(e)}j(e){e===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Mr=class extends It{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===S?void 0:e}},Lr=class extends It{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==S)}},Ir=class extends It{constructor(e,t,r,o,s){super(e,t,r,o,s),this.type=5}_$AI(e,t=this){if((e=st(this,e,t,0)??S)===ot)return;const r=this._$AH,o=e===S&&r!==S||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,s=e!==S&&(r===S||o);o&&this.element.removeEventListener(this.name,this,r),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}};class Dr{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){st(this,t)}}const Ee=Tt.litHtmlPolyfillSupport;Ee==null||Ee(Xt,Ct),(Tt.litHtmlVersions??(Tt.litHtmlVersions=[])).push("3.3.0");const qr=(e,t,r)=>{const o=(r==null?void 0:r.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const a=(r==null?void 0:r.renderBefore)??null;o._$litPart$=s=new Ct(t.insertBefore(yt(),a),a,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const _t=globalThis;let g=class extends K{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ot}};var ke;g._$litElement$=!0,g.finalized=!0,(ke=_t.litElementHydrateSupport)==null||ke.call(_t,{LitElement:g});const Se=_t.litElementPolyfillSupport;Se==null||Se({LitElement:g}),(_t.litElementVersions??(_t.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Fr={attribute:!0,type:String,converter:Rt,reflect:!1,hasChanged:re},Wr=(e=Fr,t,r)=>{const{kind:o,metadata:s}=r;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),o==="accessor"){const{name:i}=r;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,l,e)},init(n){return n!==void 0&&this.C(i,void 0,e,n),n}}}if(o==="setter"){const{name:i}=r;return function(n){const l=this[i];t.call(this,n),this.requestUpdate(i,l,e)}}throw Error("Unsupported decorator location: "+o)};function p(e){return(t,r)=>typeof r=="object"?Wr(e,t,r):((o,s,a)=>{const i=s.hasOwnProperty(a);return s.constructor.createProperty(a,o),i?Object.getOwnPropertyDescriptor(s,a):void 0})(e,t,r)}let ct=class extends g{constructor(){super(...arguments),this.type="info",this.title="",this.dismissible=!0}render(){return v`
      <div part="alert" class="alert ${this.type} ${this.className}">
        <span part="icon" class="icon">
          <slot name="icon"></slot>
        </span>
        ${this.title?v`<strong part="title">${this.title}</strong>`:""}
        <slot part="content"></slot>
        ${this.dismissible?v`<button part="close" class="close" @click=${()=>this.remove()}>&times;</button>`:""}
      </div>
    `}};ct.styles=$`
    .alert {
      padding: var(--alert-padding, var(--spacing-sm, 0.25rem));
      border-radius: var(--alert-border-radius, var(--radius-sm, 0.25rem));
      font-size: var(--alert-font-size, var(--text-md, 1rem));
      display: flex;
      align-items: center;
      gap: var(--alert-spacing, var(--spacing-sm, 0.25rem));
      border: 1px solid;
    }

    .alert .icon {
      font-size: var(--alert-icon-size, var(--text-md, 1rem));
    }

    .close {
      margin-left: auto;
      background: transparent;
      border: none;
      font-size: var(--alert-close-size, var(--text-lg, 1.8rem));
      cursor: pointer;
      color: var(--color-base-content, #fff);
    }

    .close:hover {
      opacity: 0.8;
    }
    /* Variants */
    .info {
      background: var(--alert-info-bg, var(--color-info));
      color: var(--alert-info-content, var(--color-info-content));
      border-color: var(--alert-info-border, var(--color-info-content));
    }

    .success {
      background: var(--alert-success-bg, var(--color-success));
      color: var(--alert-success-content, var(--color-success-content));
      border-color: var(--alert-success-border, var(--color-success-content));
    }

    .warning {
      background: var(--alert-warning-bg, var(--color-warning));
      color: var(--alert-warning-content, var(--color-warning-content));
      border-color: var(--alert-warning-border, var(--color-warning-content));
    }

    .danger {
      background: var(--alert-danger-bg, var(--color-error));
      color: var(--alert-danger-content, var(--color-error-content));
      border-color: var(--alert-danger-border, var(--color-error-content));
    }
  `,c([p({type:String}),d("design:type",String)],ct.prototype,"type",void 0),c([p({type:String}),d("design:type",Object)],ct.prototype,"title",void 0),c([p({type:Boolean}),d("design:type",Object)],ct.prototype,"dismissible",void 0),customElements.get("craftily-alert")||customElements.define("craftily-alert",ct);const Yr=["type","title","part","dismissible"],ks=y({name:"Alert",inheritAttrs:!1,__name:"Alert",props:{type:{default:"info"},title:{default:""},part:{},dismissible:{type:Boolean,default:!1},className:{default:void 0}},setup(e){const t=w();return(r,o)=>(u(),m("craftily-alert",A({type:r.type,title:r.title,part:r.part,dismissible:r.dismissible,class:r.className},x(t)),[f(r.$slots,"default")],16,Yr))}});let D=class extends g{constructor(){super(...arguments),this.variant="primary",this.shape="circle",this.alt=""}render(){const e=["avatar",this.variant,this.shape].filter(Boolean).join(" "),t=this.size?`--avatar-size: ${this.size};`:"";return v`
      ${this.src?v`<img class="${e}" src="${this.src}" alt="${this.alt}" style="${t}" />`:v`<div class="${e}" style="${t}"><slot></slot></div>`}
    `}};D.styles=$`
    :host {
      display: inline-block;
    }

    .avatar {
      display: inline-block;
      object-fit: cover;
      width: var(--avatar-size, 2.5rem);
      height: var(--avatar-size, 2.5rem);
      background-color: var(--avatar-bg);
      color: var(--avatar-color);
      border: var(--avatar-border);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      border-radius: var(--avatar-border-radius, 50%);
      aspect-ratio: 1/1;
    }

    .avatar.primary {
      --avatar-bg: var(--color-primary);
      --avatar-color: var(--color-primary-content);
      --avatar-border: 2px solid var(--color-primary);
    }

    .avatar.secondary {
      --avatar-bg: var(--color-secondary);
      --avatar-color: var(--color-secondary-content);
      --avatar-border: 2px solid var(--color-secondary);
    }

    .avatar.danger {
      --avatar-bg: var(--color-danger);
      --avatar-color: var(--color-danger-content);
      --avatar-border: 2px solid var(--color-danger);
    }

    .avatar.square {
      --avatar-border-radius: 2rem;
    }

    .avatar.circle {
      --avatar-border-radius: 100%;
    }
  `,c([p({type:String}),d("design:type",String)],D.prototype,"variant",void 0),c([p({type:String}),d("design:type",String)],D.prototype,"shape",void 0),c([p({type:String}),d("design:type",String)],D.prototype,"src",void 0),c([p({type:String}),d("design:type",Object)],D.prototype,"alt",void 0),c([p({type:String}),d("design:type",String)],D.prototype,"size",void 0),customElements.get("craftily-avatar")||customElements.define("craftily-avatar",D);const Jr=["variant","shape","src","alt","size"],Ss=y({name:"Avatar",inheritAttrs:!1,__name:"Avatar",props:{variant:{default:"primary"},shape:{default:"circle"},src:{},alt:{default:""},size:{default:"md"},className:{default:void 0}},setup(e){const t=e,r=Qt(()=>t.size?{sm:"1.5rem",md:"2.5rem",lg:"3.5rem",xl:"5rem"}[t.size]||t.size:"2.5rem"),o=w();return(s,a)=>(u(),m("craftily-avatar",A({variant:s.variant,shape:s.shape,src:s.src,alt:s.alt,size:r.value,class:s.className},x(o)),[f(s.$slots,"default")],16,Jr))}});let Pt=class extends g{constructor(){super(...arguments),this.variant="primary",this.dot=!1}render(){const e=["badge",this.variant!=="primary"?this.variant:"",this.dot?"dot":""].filter(Boolean).join(" ");return v`
      <div class="${e}">
        <slot></slot>
      </div>
    `}};Pt.styles=$`
    :host {
      display: inline-block;
    }

    .badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--badge-padding, 0.25em 0.5em);
      font-size: var(--badge-font-size, var(--text-xs));
      font-weight: var(--badge-font-weight, var(--font-weight-semibold, 600));
      border-radius: var(--badge-border-radius, var(--radius-full));
      background-color: var(--badge-bg, var(--color-primary));
      color: var(--badge-content, var(--color-primary-content));
      line-height: 1;
      white-space: nowrap;
    }

    .badge.secondary {
      background-color: var(--badge-secondary-bg, var(--color-secondary));
      color: var(--badge-secondary-content, var(--color-secondary-content));
    }

    .badge.accent {
      background-color: var(--badge-accent-bg, var(--color-accent));
      color: var(--badge-accent-content, var(--color-accent-content));
    }

    .badge.ghost {
      background-color: var(--badge-ghost-bg, var(--color-base-200));
      color: var(--badge-ghost-content, var(--color-base-content));
      border: 1px solid var(--color-base-300);
    }

    .badge.outline {
      background-color: transparent;
      color: var(--badge-outline-content, var(--color-primary));
      border: 1px solid var(--badge-outline-border, var(--color-primary));
    }

    .badge.dot {
      padding-left: calc(var(--badge-dot-size, 0.5em) + var(--spacing-xs, 0.25rem) * 2);
      position: relative;
    }

    .badge.dot::before {
      content: '';
      position: absolute;
      left: var(--spacing-xs, 0.25rem);
      top: 50%;
      transform: translateY(-50%);
      width: var(--badge-dot-size, 0.5em);
      height: var(--badge-dot-size, 0.5em);
      border-radius: var(--radius-full);
      background-color: currentColor;
    }
  `,c([p({type:String}),d("design:type",String)],Pt.prototype,"variant",void 0),c([p({type:Boolean}),d("design:type",Object)],Pt.prototype,"dot",void 0),customElements.get("craftily-badge")||customElements.define("craftily-badge",Pt);const Gr=["variant","dot"],Cs=y({name:"CraftilyBadge",inheritAttrs:!1,__name:"Badge",props:{variant:{default:"primary"},dot:{type:Boolean,default:!1},size:{default:"md"},className:{default:""}},setup(e){const t=e,r=Qt(()=>{if(!t.size)return{};const s={sm:{fontSize:"0.65rem",padding:"0.15em 0.4em"},md:{fontSize:"0.75rem",padding:"0.25em 0.5em"},lg:{fontSize:"0.85rem",padding:"0.35em 0.6em"}};return s[t.size]?{"--badge-font-size":s[t.size].fontSize,"--badge-padding":s[t.size].padding}:{"--badge-font-size":t.size}}),o=w();return(s,a)=>(u(),m("craftily-badge",A({variant:s.variant,dot:s.dot,class:s.className},x(o),{style:r.value}),[f(s.$slots,"default")],16,Gr))}});let q=class extends g{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.iconPosition="left"}renderIcon(){return v`<slot name="icon" class="icon"></slot>`}renderLabel(){return v`<slot name="label">${this.label}</slot>`}handleClick(e){this.dispatchEvent(new CustomEvent("click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}render(){const e=this.renderIcon(),t=this.renderLabel();return v`
      <button
        class="btn btn-${this.variant} btn-${this.size}"
        ?disabled=${this.disabled}
        part="button"
        @click=${this.handleClick}
      >
        ${this.iconPosition==="left"?v`${e}${t}`:v`${t}${e}`}
      </button>
    `}};q.styles=$`
    :host {
      display: inline-block;
    }
    .btn {
      background: var(--btn-bg, var(--color-base));
      color: var(--btn-content, var(--color-base-content));
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--btn-border-radius, var(--radius-sm, 0.1rem));
      font-weight: var(--font-weight-normal, 500);
      cursor: pointer;
      transition:
        background 0.4s ease,
        color 0.4s ease;
      border: var(--btn-border, none);
      box-shadow: var(--btn-box-shadow, none);
      padding: var(--btn-padding, 0.5rem);
      font-size: var(--btn-font-size, var(--text-md, 1rem));
      height: var(--btn-height, calc(var(--spacing, 0.25rem) * 8));
      outline-style: var(--btn-outline-style, none);
      gap: var(--spacing, 0.25rem);
      white-space: nowrap;
      opacity: 0.9;
    }
    .btn:hover {
      opacity: 0.8;
      --btn-box-shadow: none;
    }
    .btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      --btn-box-shadow: none;
    }
    .btn:active {
      opacity: 1;
    }
    .btn-xs {
      --btn-border-radius: 2px;
      --btn-height: calc(var(--spacing, 0.25rem) * 4);
      --btn-font-size: var(--text-xs, 0.75rem);
    }
    .btn-sm {
      --btn-border-radius: var(--spacing, 0.25rem);
      --btn-height: calc(var(--spacing, 0.25rem) * 6);
      --btn-font-size: var(--text-sm, 0.875rem);
    }
    .btn-md {
      --btn-border-radius: var(--radius-xs, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 8);
      --btn-font-size: var(--text-md, 1rem);
    }
    .btn-lg {
      --btn-border-radius: var(--radius-sm, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 10);
      --btn-font-size: var(--text-lg, 1.125rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 2);
    }
    .btn-xl {
      --btn-border-radius: var(--radius-md, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 12);
      --btn-font-size: var(--text-xl, 1.25rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 4);
    }
    .btn-xxl {
      --btn-border-radius: var(--radius-md, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 14);
      --btn-font-size: var(--text-xxl, 1.5rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 6);
    }
    .btn-3xl {
      --btn-border-radius: var(--radius-md, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 16);
      --btn-font-size: var(--text-3xl, 1.75rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 8);
    }
    .btn-4xl {
      --btn-border-radius: var(--radius-md, var(--spacing));
      --btn-height: calc(var(--spacing, 0.25rem) * 16);
      --btn-font-size: var(--text-4xl, 2rem);
      --btn-padding: calc(var(--spacing, 0.25rem) * 10);
    }
    .btn-primary {
      --btn-bg: var(--color-primary);
      --btn-content: var(--color-primary-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-secondary {
      --btn-bg: var(--color-secondary);
      --btn-content: var(--color-secondary-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-outline {
      --btn-bg: transparent;
      --btn-content: var(--color-primary);
      --btn-outline-style: solid;
      outline-width: 1px;
    }
    .btn-success {
      --btn-bg: var(--color-success);
      --btn-content: var(--color-success-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-error {
      --btn-bg: var(--color-error);
      --btn-content: var(--color-error-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-warning {
      --btn-bg: var(--color-warning);
      --btn-content: var(--color-warning-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-info {
      --btn-bg: var(--color-info);
      --btn-content: var(--color-info-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-accent {
      --btn-bg: var(--color-accent);
      --btn-content: var(--color-accent-content);
      --btn-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.24), 0 0.01rem 0.05rem 0 rgba(0, 0, 0, 0.19);
    }
    .btn-ghost {
      --btn-bg: transparent;
      --btn-content: var(--color-primary);
      --btn-outline-style: none;
    }
    .icon,
    .icon * {
      width: var(--btn-font-size);
      height: var(--btn-font-size);
    }
  `,c([p({type:String}),d("design:type",String)],q.prototype,"variant",void 0),c([p({type:String}),d("design:type",String)],q.prototype,"size",void 0),c([p({type:Boolean,reflect:!0}),d("design:type",Object)],q.prototype,"disabled",void 0),c([p({type:String,attribute:"icon-position"}),d("design:type",String)],q.prototype,"iconPosition",void 0),c([p({type:String}),d("design:type",String)],q.prototype,"label",void 0),customElements.get("craftily-button")||customElements.define("craftily-button",q);const Xr=["variant","size","disabled","icon-position","label"],zs=y({name:"Button",inheritAttrs:!1,__name:"Button",props:{variant:{default:"primary"},size:{default:"md"},disabled:{type:Boolean,default:!1},iconPosition:{default:"left"},label:{default:void 0},className:{default:void 0}},emits:["click"],setup(e,{emit:t}){const r=t,o=w(),s=a=>{a instanceof CustomEvent&&a.detail&&r("click",a)};return Ye(()=>{customElements.get("craftily-button")||console.warn("craftily-button web component is not defined")}),(a,i)=>(u(),m("craftily-button",A({variant:a.variant,size:a.size,disabled:a.disabled,"icon-position":a.iconPosition,label:a.label,class:a.className},x(o),{onClick:s}),[f(a.$slots,"icon",{slot:"icon"}),f(a.$slots,"default",{slot:"label"})],16,Xr))}}),Zr=y({name:"ButtonGroup",__name:"ButtonGroup",props:{vertical:{type:Boolean,default:!1}},setup(e){return(t,r)=>(u(),m("div",{class:Er(["craftily-button-group",{"is-vertical":t.vertical}])},[f(t.$slots,"default")],2))}}),j=(e,t)=>{const r=e.__vccOpts||e;for(const[o,s]of t)r[o]=s;return r},Os=j(Zr,[["__scopeId","data-v-6e6c9813"]]);let Z=class extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.name="",this.value=""}handleChange(e){const t=e.target;this.checked=t.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}render(){return v`
      <label class="checkbox-wrapper">
        <input
          type="checkbox"
          class="checkbox"
          .checked=${this.checked}
          .disabled=${this.disabled}
          .name=${this.name}
          .value=${this.value}
          @change=${this.handleChange}
        />
        <span class="checkbox-label">
          <slot></slot>
        </span>
      </label>
    `}};Z.styles=$`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs, 0.25rem);
    }

    .checkbox-wrapper {
      display: flex;
      align-items: center;
      gap: var(--spacing-xs, 0.25rem);
    }

    .checkbox {
      appearance: none;
      width: var(--checkbox-size, 1.25em);
      height: var(--checkbox-size, 1.25em);
      border: var(--checkbox-border, 2px solid var(--color-base, #e0e0e0));
      border-radius: var(--checkbox-border-radius, var(--radius-xs, 0.05rem));
      background-color: var(--checkbox-bg, var(--color-base, #ffffff));
      position: relative;
      cursor: pointer;
      transition:
        background-color 0.2s ease,
        border-color 0.2s ease;
    }

    .checkbox:checked {
      background-color: var(--checkbox-checked-bg, var(--color-primary));
      border-color: var(--checkbox-checked-border-color, var(--color-primary));
    }

    .checkbox:checked::before {
      content: '\\2713';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: var(--checkbox-checkmark-size, 0.8em);
      color: var(--checkbox-checkmark-color, var(--color-primary-content, #ffffff));
    }

    .checkbox:disabled {
      background-color: var(--checkbox-disabled-bg, var(--color-base, #f0f0f0));
      border-color: var(--checkbox-disabled-border-color, var(--color-base, #e0e0e0));
      cursor: not-allowed;
      opacity: 0.7;
    }

    .checkbox:disabled::before {
      color: var(--checkbox-disabled-checkmark-color, var(--color-base, #e0e0e0));
    }

    .checkbox-label {
      margin-left: var(--spacing-xs, 0.25rem);
      cursor: pointer;
      user-select: none;
    }

    :host([disabled]) .checkbox-label {
      cursor: not-allowed;
      opacity: 0.7;
    }
  `,c([p({type:Boolean,reflect:!0}),d("design:type",Object)],Z.prototype,"checked",void 0),c([p({type:Boolean,reflect:!0}),d("design:type",Object)],Z.prototype,"disabled",void 0),c([p({type:String}),d("design:type",Object)],Z.prototype,"name",void 0),c([p({type:String}),d("design:type",Object)],Z.prototype,"value",void 0),customElements.get("craftily-checkbox")||customElements.define("craftily-checkbox",Z);const Kr=["checked","disabled","name","value"],Ps=y({name:"CraftilyCheckbox",inheritAttrs:!1,__name:"Checkbox",props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{default:""},value:{default:""},className:{default:""}},emits:["update:modelValue","change"],setup(e,{emit:t}){const r=t,o=w(),s=a=>{if(a instanceof CustomEvent&&a.detail){const{checked:i}=a.detail;r("update:modelValue",i),r("change",a)}};return(a,i)=>(u(),m("craftily-checkbox",A({checked:a.modelValue,disabled:a.disabled,name:a.name,value:a.value,class:a.className},x(o),{onChange:s}),[f(a.$slots,"default")],16,Kr))}});let rr=class extends g{render(){return v`
      <div class="brand">
        <slot></slot>
      </div>
    `}};rr.styles=$`
    :host {
      display: block;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm, 0.5rem);
    }
  `;let or=class extends g{render(){return v`
      <footer class="footer">
        <div class="footer-content">
          <slot></slot>
        </div>
      </footer>
    `}};or.styles=$`
    :host {
      display: block;
      width: 100%;
    }

    .footer {
      background-color: var(--footer-bg, var(--color-base, #f1f5f9));
      color: var(--footer-content, var(--color-base-content, #1e293b));
      padding: var(--footer-padding, var(--spacing-lg, 1.5rem) var(--spacing-md, 1rem));
      text-align: var(--footer-text-align, left);
      margin-top: var(--footer-margin-top, auto);
    }

    .footer-content {
      max-width: var(--footer-content-max-width, 1200px);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg, 1.5rem);
    }
  `;let sr=class extends g{render(){return v`
      <nav class="navigation">
        <slot></slot>
      </nav>
    `}};sr.styles=$`
    :host {
      display: block;
      width: 100%;
    }

    .navigation {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-lg, 1.5rem);
    }
  `;let ar=class extends g{render(){return v`
      <div class="nav-group">
        <h3 class="title">${this.getAttribute("title")}</h3>
        <slot></slot>
      </div>
    `}};ar.styles=$`
    :host {
      display: block;
    }

    .nav-group {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm, 0.5rem);
    }

    .title {
      font-weight: var(--font-weight-medium, 500);
      font-size: var(--text-sm, 0.875rem);
      text-transform: uppercase;
      color: var(--footer-nav-title-color, var(--color-base-content, #1e293b));
      margin-bottom: var(--spacing-xs, 0.25rem);
    }
  `;let ir=class extends g{render(){return v`
      <a class="link" href="${this.getAttribute("href")}">
        <slot></slot>
      </a>
    `}};ir.styles=$`
    :host {
      display: block;
    }

    .link {
      color: var(--footer-link-color, var(--color-base-content-secondary, #64748b));
      text-decoration: none;
      font-size: var(--text-sm, 0.875rem);
      transition: color 0.2s ease;
    }

    .link:hover {
      color: var(--footer-link-hover-color, var(--color-primary, #2563eb));
    }
  `;let nr=class extends g{render(){return v`
      <div class="copyright">
        <slot></slot>
      </div>
    `}};nr.styles=$`
    :host {
      display: block;
      width: 100%;
      text-align: center;
    }

    .copyright {
      color: var(--footer-copyright-color, var(--color-base-content-secondary, #64748b));
      font-size: var(--text-sm, 0.875rem);
    }
  `;let lr=class extends g{render(){return v`
      <div class="social">
        <slot></slot>
      </div>
    `}};lr.styles=$`
    :host {
      display: block;
      width: 100%;
    }

    .social {
      display: flex;
      justify-content: center;
      gap: var(--spacing-md, 1rem);
    }
  `;let Ce=class extends g{render(){const e=this.getAttribute("icon"),t=this.getAttribute("aria-label");return v`
      <a class="social-link" href="${this.getAttribute("href")}" aria-label="${t}">
        <i class="fa fa-${e}"></i>
      </a>
    `}};Ce.styles=$`
    :host {
      display: block;
    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: var(--footer-social-link-color, var(--color-base-content-secondary, #64748b));
      font-size: var(--text-lg, 1.125rem);
      transition: color 0.2s ease;
      width: 2.5rem;
      height: 2.5rem;
      border-radius: 9999px;
      background-color: var(--footer-social-link-bg, var(--color-base-300, #e2e8f0));
    }

    .social-link:hover {
      color: var(--footer-social-link-hover-color, var(--color-primary, #2563eb));
      background-color: var(--footer-social-link-hover-bg, var(--color-base-200, #f1f5f9));
    }
  `,customElements.get("craftily-footer")||customElements.define("craftily-footer",or),customElements.get("craftily-footer-navigation")||customElements.define("craftily-footer-navigation",sr),customElements.get("craftily-footer-nav-group")||customElements.define("craftily-footer-nav-group",ar),customElements.get("craftily-footer-link")||customElements.define("craftily-footer-link",ir),customElements.get("craftily-footer-copyright")||customElements.define("craftily-footer-copyright",nr),customElements.get("craftily-footer-social")||customElements.define("craftily-footer-social",lr),customElements.get("craftily-footer-social-link")||customElements.define("craftily-footer-social-link",Ce),customElements.get("craftily-footer-brand")||customElements.define("craftily-footer-brand",rr);const Qr=y({name:"FooterBrand"});function to(e,t,r,o,s,a){return u(),m("craftily-footer-brand",null,[f(e.$slots,"default")])}const eo=j(Qr,[["render",to]]),ro=y({name:"FooterNavigation"});function oo(e,t,r,o,s,a){return u(),m("craftily-footer-navigation",null,[f(e.$slots,"default")])}const so=j(ro,[["render",oo]]),ao=y({name:"FooterSocial"});function io(e,t,r,o,s,a){return u(),m("craftily-footer-social",null,[f(e.$slots,"default")])}const no=j(ao,[["render",io]]),lo=y({name:"FooterCopyright"});function co(e,t,r,o,s,a){return u(),m("craftily-footer-copyright",null,[f(e.$slots,"default")])}const po=j(lo,[["render",co]]),js=y({name:"Footer",inheritAttrs:!1,__name:"Footer",setup(e){const t=w();return(r,o)=>(u(),m("craftily-footer",kt(St(x(t))),[r.$slots.brand?(u(),U(eo,{key:0},{default:R(()=>[f(r.$slots,"brand")]),_:3})):P("",!0),r.$slots.navigation?(u(),U(so,{key:1},{default:R(()=>[f(r.$slots,"navigation")]),_:3})):P("",!0),r.$slots.social?(u(),U(no,{key:2},{default:R(()=>[f(r.$slots,"social")]),_:3})):P("",!0),r.$slots.copyright?(u(),U(po,{key:3},{default:R(()=>[f(r.$slots,"copyright")]),_:3})):P("",!0),f(r.$slots,"default")],16))}}),uo=y({name:"FooterNavGroup",props:{title:String},inheritAttrs:!1}),ho=["title"];function vo(e,t,r,o,s,a){return u(),m("craftily-footer-nav-group",{title:e.title},[f(e.$slots,"default")],8,ho)}const Bs=j(uo,[["render",vo]]),fo=y({name:"FooterLink",props:{href:String},inheritAttrs:!1}),mo=["href"];function go(e,t,r,o,s,a){return u(),m("craftily-footer-link",{href:e.href},[f(e.$slots,"default")],8,mo)}const Ns=j(fo,[["render",go]]),bo=y({name:"FooterSocialLink",props:{href:String,icon:String,label:String},inheritAttrs:!1}),yo=["href","icon","label"];function $o(e,t,r,o,s,a){return u(),m("craftily-footer-social-link",{href:e.href,icon:e.icon,label:e.label},[f(e.$slots,"default")],8,yo)}const Us=j(bo,[["render",$o]]);let cr=class extends g{render(){return v`
      <header class="header">
        <slot></slot>
      </header>
    `}};cr.styles=$`
    :host {
      display: block;
    }

    .header {
      height: var(--header-height, 60px);
      background-color: var(--header-bg, var(--color-base-100, #ffffff));
      padding: var(--header-padding, 0 var(--spacing-md, 1rem));
      box-shadow: var(--header-shadow, var(--shadow-md));
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: var(--header-position, sticky);
      top: var(--header-top, 0);
      left: var(--header-left, 0);
      right: var(--header-right, 0);
      z-index: var(--z-header, 950);
    }
  `;let dr=class extends g{render(){return v`
      <div class="header-brand">
        <slot></slot>
      </div>
    `}};dr.styles=$`
    :host {
      display: block;
    }

    .header-brand {
      font-size: var(--header-brand-font-size, var(--text-xl));
      font-weight: var(--font-weight-bold, 700);
      color: var(--header-brand-color, var(--color-primary));
      text-decoration: none;
    }
  `;let pr=class extends g{render(){return v`
      <nav class="header-nav">
        <slot></slot>
      </nav>
    `}};pr.styles=$`
    :host {
      display: block;
    }

    .header-nav {
      display: flex;
      gap: var(--header-nav-gap, var(--spacing-md, 1rem));
    }
  `;let Zt=class extends g{constructor(){super(...arguments),this.active=!1}render(){return v`
      <a class="header-nav-item ${this.active?"active":""}">
        <slot></slot>
      </a>
    `}};Zt.styles=$`
    :host {
      display: block;
    }

    .header-nav-item {
      color: var(--header-nav-item-color, var(--color-base-content));
      text-decoration: none;
      padding: var(--header-nav-item-padding, 0.5rem 0.75rem);
      border-radius: var(--header-nav-item-radius, var(--radius-sm, 0.1rem));
      transition:
        background-color 0.2s ease,
        color 0.2s ease;
    }

    .header-nav-item:hover {
      background-color: var(--header-nav-item-hover-bg, var(--color-base-200, #f0f0f0));
      color: var(--header-nav-item-hover-color, var(--color-primary));
    }

    .header-nav-item.active {
      color: var(--header-nav-item-active-color, var(--color-primary));
      font-weight: var(--font-weight-semibold, 600);
      border-bottom: var(--header-nav-item-active-border, 2px solid var(--color-primary));
    }
  `,c([p({type:Boolean,reflect:!0}),d("design:type",Object)],Zt.prototype,"active",void 0);let ur=class extends g{render(){return v`
      <div class="header-actions">
        <slot></slot>
      </div>
    `}};ur.styles=$`
    :host {
      display: block;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: var(--header-actions-gap, var(--spacing-sm, 0.5rem));
    }
  `;let hr=class extends g{render(){return v`
      <div class="header-search">
        <slot></slot>
      </div>
    `}};hr.styles=$`
    :host {
      display: block;
    }

    .header-search {
      display: flex;
      align-items: center;
      gap: var(--header-search-gap, var(--spacing-sm, 0.5rem));
    }
  `;let Ft=class extends g{constructor(){super(...arguments),this.open=!1}render(){return v`
      <div class="header-mobile-menu ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}};Ft.styles=$`
    :host {
      display: block;
    }

    .header-mobile-menu {
      position: fixed;
      top: var(--header-height, 60px);
      left: 0;
      right: 0;
      bottom: 0;
      background-color: var(--header-mobile-menu-bg, var(--color-base-100, #ffffff));
      padding: var(--header-mobile-menu-padding, var(--spacing-md, 1rem));
      transform: translateX(100%);
      transition: transform 0.3s ease;
      z-index: var(--z-header-mobile-menu, 940);
      overflow-y: auto;
    }

    .header-mobile-menu.open {
      transform: translateX(0);
    }
  `,c([p({type:Boolean,reflect:!0}),d("design:type",Object)],Ft.prototype,"open",void 0),customElements.get("craftily-header")||customElements.define("craftily-header",cr),customElements.get("craftily-header-brand")||customElements.define("craftily-header-brand",dr),customElements.get("craftily-header-nav")||customElements.define("craftily-header-nav",pr),customElements.get("craftily-header-nav-item")||customElements.define("craftily-header-nav-item",Zt),customElements.get("craftily-header-actions")||customElements.define("craftily-header-actions",ur),customElements.get("craftily-header-search")||customElements.define("craftily-header-search",hr),customElements.get("craftily-header-mobile-menu")||customElements.define("craftily-header-mobile-menu",Ft);const Rs=y({name:"Header",inheritAttrs:!1,__name:"Header",setup(e){const t=w();return(r,o)=>(u(),m("craftily-header",kt(St(x(t))),[f(r.$slots,"default")],16))}}),Ts=y({name:"HeaderBrand",inheritAttrs:!1,__name:"HeaderBrand",setup(e){const t=w();return(r,o)=>(u(),m("craftily-header-brand",kt(St(x(t))),[f(r.$slots,"default")],16))}}),Vs=y({name:"HeaderNav",inheritAttrs:!1,__name:"HeaderNav",setup(e){const t=w();return(r,o)=>(u(),m("craftily-header-nav",kt(St(x(t))),[f(r.$slots,"default")],16))}}),_o=["active"],Hs=y({name:"HeaderNavItem",inheritAttrs:!1,__name:"HeaderNavItem",props:{active:{type:Boolean,default:!1}},setup(e){const t=e,r=w();return(o,s)=>(u(),m("craftily-header-nav-item",A({active:t.active},x(r)),[f(o.$slots,"default")],16,_o))}}),Ms=y({name:"HeaderActions",inheritAttrs:!1,__name:"HeaderActions",setup(e){const t=w();return(r,o)=>(u(),m("craftily-header-actions",kt(St(x(t))),[f(r.$slots,"default")],16))}});function B(e,t,r,o){var s=arguments.length,a=s<3?t:o,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,r,o);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(s<3?i(a):s>3?i(t,r,a):i(t,r))||a);return s>3&&a&&Object.defineProperty(t,r,a),a}function N(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,oe=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),ze=new WeakMap;let vr=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(oe&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ze.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ze.set(t,e))}return e}toString(){return this.cssText}};const xo=e=>new vr(typeof e=="string"?e:e+"",void 0,se),wo=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,s,a)=>o+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+e[a+1],e[0]);return new vr(r,e,se)},Ao=(e,t)=>{if(oe)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),s=Nt.litNonce;s!==void 0&&o.setAttribute("nonce",s),o.textContent=r.cssText,e.appendChild(o)}},Oe=oe?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return xo(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Eo,defineProperty:ko,getOwnPropertyDescriptor:So,getOwnPropertyNames:Co,getOwnPropertySymbols:zo,getPrototypeOf:Oo}=Object,at=globalThis,Pe=at.trustedTypes,Po=Pe?Pe.emptyScript:"",je=at.reactiveElementPolyfillSupport,gt=(e,t)=>e,Ht={toAttribute(e,t){switch(t){case Boolean:e=e?Po:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},ae=(e,t)=>!Eo(e,t),Be={attribute:!0,type:String,converter:Ht,reflect:!1,useDefault:!1,hasChanged:ae};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),at.litPropertyMetadata??(at.litPropertyMetadata=new WeakMap);let Q=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Be){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(e,r,t);o!==void 0&&ko(this.prototype,e,o)}}static getPropertyDescriptor(e,t,r){const{get:o,set:s}=So(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:o,set(a){const i=o==null?void 0:o.call(this);s==null||s.call(this,a),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Be}static _$Ei(){if(this.hasOwnProperty(gt("elementProperties")))return;const e=Oo(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(gt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(gt("properties"))){const t=this.properties,r=[...Co(t),...zo(t)];for(const o of r)this.createProperty(o,t[o])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,o]of t)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const o=this._$Eu(t,r);o!==void 0&&this._$Eh.set(o,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const o of r)t.unshift(Oe(o))}else e!==void 0&&t.push(Oe(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ao(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var r;const o=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,o);if(s!==void 0&&o.reflect===!0){const a=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:Ht).toAttribute(t,o.type);this._$Em=e,a==null?this.removeAttribute(s):this.setAttribute(s,a),this._$Em=null}}_$AK(e,t){var r,o;const s=this.constructor,a=s._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const i=s.getPropertyOptions(a),n=typeof i.converter=="function"?{fromAttribute:i.converter}:((r=i.converter)==null?void 0:r.fromAttribute)!==void 0?i.converter:Ht;this._$Em=a,this[a]=n.fromAttribute(t,i.type)??((o=this._$Ej)==null?void 0:o.get(a))??null,this._$Em=null}}requestUpdate(e,t,r){var o;if(e!==void 0){const s=this.constructor,a=this[e];if(r??(r=s.getPropertyOptions(e)),!((r.hasChanged??ae)(a,t)||r.useDefault&&r.reflect&&a===((o=this._$Ej)==null?void 0:o.get(e))&&!this.hasAttribute(s._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:o,wrapped:s},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),s!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),o===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[s,a]of this._$Ep)this[s]=a;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[s,a]of o){const{wrapped:i}=a,n=this[s];i!==!0||this._$AL.has(s)||n===void 0||this.C(s,void 0,a,n)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$EO)==null||e.forEach(o=>{var s;return(s=o.hostUpdate)==null?void 0:s.call(o)}),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Q.elementStyles=[],Q.shadowRootOptions={mode:"open"},Q[gt("elementProperties")]=new Map,Q[gt("finalized")]=new Map,je==null||je({ReactiveElement:Q}),(at.reactiveElementVersions??(at.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=globalThis,Lt=Mt.trustedTypes,Ne=Lt?Lt.createPolicy("lit-html",{createHTML:e=>e}):void 0,fr="$lit$",L=`lit$${Math.random().toFixed(9).slice(2)}$`,mr="?"+L,jo=`<${mr}>`,X=document,xt=()=>X.createComment(""),wt=e=>e===null||typeof e!="object"&&typeof e!="function",ie=Array.isArray,Bo=e=>ie(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Wt=`[ 	
\f\r]`,dt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ue=/-->/g,Re=/>/g,F=RegExp(`>|${Wt}(?:([^\\s"'>=/]+)(${Wt}*=${Wt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Te=/'/g,Ve=/"/g,gr=/^(?:script|style|textarea|title)$/i,No=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),V=No(1),it=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),He=new WeakMap,J=X.createTreeWalker(X,129);function br(e,t){if(!ie(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ne!==void 0?Ne.createHTML(t):t}const Uo=(e,t)=>{const r=e.length-1,o=[];let s,a=t===2?"<svg>":t===3?"<math>":"",i=dt;for(let n=0;n<r;n++){const l=e[n];let _,b,h=-1,E=0;for(;E<l.length&&(i.lastIndex=E,b=i.exec(l),b!==null);)E=i.lastIndex,i===dt?b[1]==="!--"?i=Ue:b[1]!==void 0?i=Re:b[2]!==void 0?(gr.test(b[2])&&(s=RegExp("</"+b[2],"g")),i=F):b[3]!==void 0&&(i=F):i===F?b[0]===">"?(i=s??dt,h=-1):b[1]===void 0?h=-2:(h=i.lastIndex-b[2].length,_=b[1],i=b[3]===void 0?F:b[3]==='"'?Ve:Te):i===Ve||i===Te?i=F:i===Ue||i===Re?i=dt:(i=F,s=void 0);const k=i===F&&e[n+1].startsWith("/>")?" ":"";a+=i===dt?l+jo:h>=0?(o.push(_),l.slice(0,h)+fr+l.slice(h)+L+k):l+L+(h===-2?n:k)}return[br(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class At{constructor({strings:t,_$litType$:r},o){let s;this.parts=[];let a=0,i=0;const n=t.length-1,l=this.parts,[_,b]=Uo(t,r);if(this.el=At.createElement(_,o),J.currentNode=this.el.content,r===2||r===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=J.nextNode())!==null&&l.length<n;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(fr)){const E=b[i++],k=s.getAttribute(h).split(L),O=/([.?@])?(.*)/.exec(E);l.push({type:1,index:a,name:O[2],strings:k,ctor:O[1]==="."?To:O[1]==="?"?Vo:O[1]==="@"?Ho:Dt}),s.removeAttribute(h)}else h.startsWith(L)&&(l.push({type:6,index:a}),s.removeAttribute(h));if(gr.test(s.tagName)){const h=s.textContent.split(L),E=h.length-1;if(E>0){s.textContent=Lt?Lt.emptyScript:"";for(let k=0;k<E;k++)s.append(h[k],xt()),J.nextNode(),l.push({type:2,index:++a});s.append(h[E],xt())}}}else if(s.nodeType===8)if(s.data===mr)l.push({type:2,index:a});else{let h=-1;for(;(h=s.data.indexOf(L,h+1))!==-1;)l.push({type:7,index:a}),h+=L.length-1}a++}}static createElement(t,r){const o=X.createElement("template");return o.innerHTML=t,o}}function nt(e,t,r=e,o){var s,a;if(t===it)return t;let i=o!==void 0?(s=r._$Co)==null?void 0:s[o]:r._$Cl;const n=wt(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,r,o)),o!==void 0?(r._$Co??(r._$Co=[]))[o]=i:r._$Cl=i),i!==void 0&&(t=nt(e,i._$AS(e,t.values),i,o)),t}class Ro{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,s=((t==null?void 0:t.creationScope)??X).importNode(r,!0);J.currentNode=s;let a=J.nextNode(),i=0,n=0,l=o[0];for(;l!==void 0;){if(i===l.index){let _;l.type===2?_=new zt(a,a.nextSibling,this,t):l.type===1?_=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(_=new Mo(a,this,t)),this._$AV.push(_),l=o[++n]}i!==(l==null?void 0:l.index)&&(a=J.nextNode(),i++)}return J.currentNode=X,s}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class zt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,o,s){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=nt(this,t,r),wt(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==it&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Bo(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==C&&wt(this._$AH)?this._$AA.nextSibling.data=t:this.T(X.createTextNode(t)),this._$AH=t}$(t){var r;const{values:o,_$litType$:s}=t,a=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=At.createElement(br(s.h,s.h[0]),this.options)),s);if(((r=this._$AH)==null?void 0:r._$AD)===a)this._$AH.p(o);else{const i=new Ro(a,this),n=i.u(this.options);i.p(o),this.T(n),this._$AH=i}}_$AC(t){let r=He.get(t.strings);return r===void 0&&He.set(t.strings,r=new At(t)),r}k(t){ie(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,s=0;for(const a of t)s===r.length?r.push(o=new zt(this.O(xt()),this.O(xt()),this,this.options)):o=r[s],o._$AI(a),s++;s<r.length&&(this._$AR(o&&o._$AB.nextSibling,s),r.length=s)}_$AR(t=this._$AA.nextSibling,r){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,r);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Dt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,s,a){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=r,this._$AM=s,this.options=a,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=C}_$AI(t,r=this,o,s){const a=this.strings;let i=!1;if(a===void 0)t=nt(this,t,r,0),i=!wt(t)||t!==this._$AH&&t!==it,i&&(this._$AH=t);else{const n=t;let l,_;for(t=a[0],l=0;l<a.length-1;l++)_=nt(this,n[o+l],r,l),_===it&&(_=this._$AH[l]),i||(i=!wt(_)||_!==this._$AH[l]),_===C?t=C:t!==C&&(t+=(_??"")+a[l+1]),this._$AH[l]=_}i&&!s&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class To extends Dt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}}class Vo extends Dt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==C)}}class Ho extends Dt{constructor(t,r,o,s,a){super(t,r,o,s,a),this.type=5}_$AI(t,r=this){if((t=nt(this,t,r,0)??C)===it)return;const o=this._$AH,s=t===C&&o!==C||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,a=t!==C&&(o===C||s);s&&this.element.removeEventListener(this.name,this,o),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Mo{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){nt(this,t)}}const Me=Mt.litHtmlPolyfillSupport;Me==null||Me(At,zt),(Mt.litHtmlVersions??(Mt.litHtmlVersions=[])).push("3.3.0");const Lo=(e,t,r)=>{const o=(r==null?void 0:r.renderBefore)??t;let s=o._$litPart$;if(s===void 0){const a=(r==null?void 0:r.renderBefore)??null;o._$litPart$=s=new zt(t.insertBefore(xt(),a),a,void 0,r??{})}return s._$AI(e),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=globalThis;let bt=class extends Q{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Lo(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return it}};var Le;bt._$litElement$=!0,bt.finalized=!0,(Le=Et.litElementHydrateSupport)==null||Le.call(Et,{LitElement:bt});const Ie=Et.litElementPolyfillSupport;Ie==null||Ie({LitElement:bt});(Et.litElementVersions??(Et.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Io={attribute:!0,type:String,converter:Ht,reflect:!1,hasChanged:ae},Do=(e=Io,t,r)=>{const{kind:o,metadata:s}=r;let a=globalThis.litPropertyMetadata.get(s);if(a===void 0&&globalThis.litPropertyMetadata.set(s,a=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),o==="accessor"){const{name:i}=r;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,l,e)},init(n){return n!==void 0&&this.C(i,void 0,e,n),n}}}if(o==="setter"){const{name:i}=r;return function(n){const l=this[i];t.call(this,n),this.requestUpdate(i,l,e)}}throw Error("Unsupported decorator location: "+o)};function W(e){return(t,r)=>typeof r=="object"?Do(e,t,r):((o,s,a)=>{const i=s.hasOwnProperty(a);return s.constructor.createProperty(a,o),i?Object.getOwnPropertyDescriptor(s,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yt(e){return W({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const qo=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function De(e,t){return(r,o,s)=>{const a=i=>{var n;return((n=i.renderRoot)==null?void 0:n.querySelector(e))??null};return qo(r,o,{get(){return a(this)}})}}const Fo={brightness:100,contrast:100,saturate:100,grayscale:0,opacity:100,sepia:0,hueRotate:0,blur:0,color:void 0},qe={brightness:{defaultValue:100,min:0,max:200},contrast:{defaultValue:100,min:0,max:200},saturate:{defaultValue:100,min:0,max:300},grayscale:{defaultValue:0,min:0,max:1},opacity:{defaultValue:100,min:0,max:100},sepia:{defaultValue:0,min:0,max:100},hueRotate:{defaultValue:0,min:0,max:360},blur:{defaultValue:0,min:0,max:10},color:{defaultValue:void 0}},Kt={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",webp:"image/webp"},pt=new class{constructor(){this.canvas=null}applyImageFilters(e,t,r,o=Fo){e&&t&&r&&(this.canvas=r,e.clearRect(0,0,r.width,r.height),e.filter=`
          brightness(${o.brightness}%) 
          contrast(${o.contrast}%) 
          grayscale(${o.grayscale}) 
          saturate(${o.saturate}%) 
          sepia(${o.sepia}) 
          hue-rotate(${100*parseFloat(o.hueRotate)}deg)
          blur(${o.blur}px)
          opacity(${o.opacity}%) 
        `.trim(),e.drawImage(t,0,0,r.width,r.height),o.color&&(e.globalCompositeOperation="source-atop",e.fillStyle=o.color,e.fillRect(0,0,r.width,r.height),e.globalCompositeOperation="source-over"))}toBlob(e="png",t=1){const r=Kt[e];if(!r)throw new Error(`Unsupported format: ${e}`);return new Promise((o,s)=>{this.canvas.toBlob(a=>{a?o(a):s(new Error("Failed to create blob"))},r,t)})}toPng(e=1){return this.toBlob("png",e)}toJpeg(e=1){return this.toBlob("jpeg",e)}toJpg(e=1){return this.toBlob("jpg",e)}toBmp(e=1){return this.toBlob("bmp",e)}toWebp(e=1){return this.toBlob("webp",e)}toDataURL(e="png",t=1){const r=Kt[e];if(!r)throw new Error(`Unsupported format: ${e}`);return this.canvas.toDataURL(r,t)}downloadImage(e="png",t=1){const r=this.toDataURL(e,t),o=document.createElement("a");o.href=r,o.download="image",o.click()}download(e="png",t=1){this.downloadImage(e,t)}};var Wo=wo`
  :host {
    display: block;
    font-family: sans-serif;
    max-width: 100%;
    justify-self: center;
  }
  canvas {
    max-width: 100%;
    display: block;
    margin-bottom: 1rem;
    outline: 1px solid;
    justify-self: center;
  }
  .toolbar {
    display: inline-flex;
    gap: 1rem;
    padding: 1rem;
    flex-direction: column;
    width: 100%;
  }
  .control {
    display: grid;
    grid-template-columns: 110px 1fr 50px;
  }
  input[type='color'] {
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }
  .preview {
    margin-top: 1rem;
  }
  .preview img {
    max-width: 100%;
    display: block;
  }
  .upload {
    margin-bottom: 1rem;
  }
  .actions {
    display: grid;
    grid-template-columns: 1fr 20px 50px;
    gap: 1rem;
    justify-content: end;
    justify-items: start;
  }
  .actions.hide-download {
    grid-template-columns: 1fr 50px;
  }
  .actions button {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    display: inline-block;
    line-height: 1;
  }
  .actions button:hover {
    opacity: 0.8;
  }
  .actions .icon {
    display: inline-block;
    line-height: 1;
  }
  .actions .divider {
    background: #dddddd;
    width: 100%;
  }
`;class z extends bt{constructor(){super(...arguments),this.src="",this.controls=void 0,this.defaultState=qe,this.format="png",this.mimeTypes=Kt}connectedCallback(){super.connectedCallback(),this.defaultState=Object.entries(qe).reduce((t,[r,o])=>{var s,a;return t[r]={defaultValue:((a=(s=this.controls)==null?void 0:s[r])==null?void 0:a.value)||o.defaultValue,min:o==null?void 0:o.min,max:o==null?void 0:o.max},t},{})}showActions(){if(this.src)return V`<div class="actions ${this.showDownload?"":"hide-download"}">
      <span class="divider"></span>
      ${this.showDownload?V`<button @click=${this.download} title="Download">
            ${V`<span class="icon">⬇️</span>`}
          </button>`:""}
      <button @click=${this.reset} title="Reset">${V`<span class="icon">🔄</span>`}</button>
    </div>`}render(){return V`
      ${this.showUpload?V`<div class="upload">
            <label>Select Image:</label>
            <input type="file" accept="image/*" @change=${this.onFileChange} />
          </div>`:""}
      <canvas></canvas>
      <img src=${this.src} crossorigin="anonymous" @load=${this.draw} style="display:none;" />

      <div class="toolbar">
        ${this.showActions()}
        ${Object.entries(this.controls||{}).map(([t,r])=>this.inputControl(t,r))}
      </div>
    `}inputControl(t,r){if(this.src)return t==="color"?V`<div class="control">
        <label>${r.label}</label>
        <input
          name=${t}
          type="color"
          value="${r.value||this.defaultState[t].defaultValue}"
          @input=${o=>this.updateValue(t,o.target.value)}
        />
      </div>`:V`<div class="control">
      <label>${r.label}</label>
      <input
        name=${t}
        type="range"
        min="${this.defaultState[t].min}"
        max="${this.defaultState[t].max}"
        step="0.1"
        value="${r.value||this.defaultState[t].defaultValue}"
        @input=${o=>this.updateValue(t,o.target.value)}
      />
    </div>`}updateValue(t,r){this.controls[t].value=r,this.draw(),this.onControlChange(`${t}Changed`)}draw(){var t,r,o,s,a,i,n,l,_,b,h,E,k,O,ne,le,ce,de;const pe=this.canvas.getContext("2d"),Ot=this.imgEl;if(!pe||!Ot)return;const wr=this.width||Ot.naturalWidth,Ar=this.height||Ot.naturalHeight;this.canvas.width=wr,this.canvas.height=Ar,pt.applyImageFilters(pe,Ot,this.canvas,{brightness:((r=(t=this.controls)==null?void 0:t.brightness)==null?void 0:r.value)||this.defaultState.brightness.defaultValue,contrast:((s=(o=this.controls)==null?void 0:o.contrast)==null?void 0:s.value)||this.defaultState.contrast.defaultValue,saturate:((i=(a=this.controls)==null?void 0:a.saturate)==null?void 0:i.value)||this.defaultState.saturate.defaultValue,grayscale:((l=(n=this.controls)==null?void 0:n.grayscale)==null?void 0:l.value)||this.defaultState.grayscale.defaultValue,opacity:((b=(_=this.controls)==null?void 0:_.opacity)==null?void 0:b.value)||this.defaultState.opacity.defaultValue,sepia:((E=(h=this.controls)==null?void 0:h.sepia)==null?void 0:E.value)||this.defaultState.sepia.defaultValue,hueRotate:((O=(k=this.controls)==null?void 0:k.hueRotate)==null?void 0:O.value)||this.defaultState.hueRotate.defaultValue,blur:((le=(ne=this.controls)==null?void 0:ne.blur)==null?void 0:le.value)||this.defaultState.blur.defaultValue,color:((de=(ce=this.controls)==null?void 0:ce.color)==null?void 0:de.value)||this.defaultState.color.defaultValue})}download(t){t.preventDefault(),pt.download(this.format,1)}onFileChange(t){var r;const o=t.target,s=(r=o.files)==null?void 0:r[0];s&&(this.src=URL.createObjectURL(s))}reset(){this.controls=Object.entries(this.controls||{}).reduce((t,[r,o])=>{var s;const a=this.renderRoot.querySelector(`input[name="${r}"]`);return a&&o.value!==this.defaultState[r].defaultValue&&(a.value=(s=this.defaultState[r])==null?void 0:s.defaultValue),t[r]={...o,value:this.defaultState[r].defaultValue},t},{}),this.draw(),this.onControlChange("image-reset")}onControlChange(t){const r=new CustomEvent("onControlChange",{detail:{toDataURL:(o="png",s=1)=>pt.toDataURL(o,s),toBlob:(o="png",s=1)=>pt.toBlob(o,s),download:(o="png",s=1)=>pt.download(o,s),metadata:{canvas:this.canvas,controls:this.controls,eventType:t}},bubbles:!0,composed:!0});this.dispatchEvent(r)}}z.styles=Wo,B([W({type:String}),N("design:type",Object)],z.prototype,"src",void 0),B([W({type:Object}),N("design:type",Object)],z.prototype,"controls",void 0),B([W({type:Number}),N("design:type",Number)],z.prototype,"width",void 0),B([W({type:Number}),N("design:type",Number)],z.prototype,"height",void 0),B([W({type:Boolean}),N("design:type",Boolean)],z.prototype,"showUpload",void 0),B([W({type:Boolean}),N("design:type",Boolean)],z.prototype,"showDownload",void 0),B([Yt(),N("design:type",Object)],z.prototype,"defaultState",void 0),B([Yt(),N("design:type",String)],z.prototype,"format",void 0),B([De("canvas"),N("design:type",HTMLCanvasElement)],z.prototype,"canvas",void 0),B([De("img"),N("design:type",HTMLImageElement)],z.prototype,"imgEl",void 0),B([Yt(),N("design:type",Object)],z.prototype,"mimeTypes",void 0),customElements.get("craftily-image-editor")||customElements.define("craftily-image-editor",z);const Yo=["controls","showDownload","showUpload","src"],Ls=y({__name:"ImageEditor",props:{controls:{},showUpload:{type:Boolean},showDownload:{type:Boolean},src:{}},emits:["onControlChange"],setup(e,{emit:t}){const r=t,o=s=>{r("onControlChange",s.detail)};return(s,a)=>(u(),m("div",null,[Ge("craftily-image-editor",{controls:s.controls,showDownload:s.showDownload,showUpload:s.showUpload,src:s.src,"on:onControlChange":o},null,40,Yo)]))}});let T=class extends g{constructor(){super(...arguments),this.value="",this.placeholder="",this.type="text",this.disabled=!1,this.name="",this.error="",this.success=!1}handleInput(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.requestUpdate()}handleChange(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})),this.requestUpdate()}handleWrapperClick(e){var t;if(this.disabled)return;const r=(t=this.shadowRoot)==null?void 0:t.querySelector("input");r&&r.focus()}render(){["input",this.error?"error":"",this.success?"success":""].filter(Boolean).join(" ");const e=["input-wrapper",this.error?"error":"",this.success?"success":"",this.disabled?"disabled":""].filter(Boolean).join(" ");return v`
      <div>
        <div class="${e}" @click=${this.handleWrapperClick}>
          <slot name="prefix"></slot>
          <input
            class="input"
            value=${this.value}
            placeholder=${this.placeholder}
            type=${this.type}
            ?disabled=${this.disabled}
            name=${this.name}
            @input=${this.handleInput}
            @change=${this.handleChange}
            part="input"
          />
          <slot name="suffix"></slot>
        </div>
        ${this.error?v`<div class="error-message">${this.error}</div>`:""}
      </div>
    `}};T.styles=$`
    :host {
      display: inline-block;
      width: 100%;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      border: var(--input-border, 1px solid var(--color-base, #e0e0e0));
      border-radius: var(--input-border-radius, var(--radius-sm, 0.1rem));
      background-color: var(--input-bg, var(--color-base, #ffffff));
      transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease;
      position: relative;
    }

    .input-wrapper:focus-within {
      outline: none;
      border-color: var(--input-focus-border-color, var(--color-primary));
      box-shadow: var(
        --input-focus-shadow,
        0 0 0 2px var(--color-primary, rgba(59, 130, 246, 0.5))
      );
    }

    .input-wrapper.disabled {
      background-color: var(--input-disabled-bg, var(--color-base, #f0f0f0));
      cursor: not-allowed;
    }

    .input-wrapper.error {
      border-color: var(--input-error-border-color, var(--color-error));
    }

    .input-wrapper.success {
      border-color: var(--input-success-border-color, var(--color-success));
    }

    .input {
      flex-grow: 1;
      width: 100%; /* Allow flex to control final width */
      height: var(--input-height, calc(var(--spacing, 0.25rem) * 10));
      padding: var(--input-padding, 0 0.75rem);
      font-size: var(--input-font-size, var(--text-base));
      border: none; /* Border is now on input-wrapper */
      color: var(--input-text-color, var(--color-base-content, #000000));
      outline: none; /* Focus outline handled by wrapper */
      position: relative;
      z-index: 2; /* Ensure input is above other elements */
    }

    /* .input:focus is handled by .input-wrapper:focus-within */

    .input:disabled {
      /* background-color: var(--input-disabled-bg, var(--color-base-200, #f0f0f0)); */ /* Handled by wrapper */
      cursor: not-allowed;
      opacity: 0.7;
    }

    /* .input.error styling is handled by .input-wrapper.error */

    /* .input.success styling is handled by .input-wrapper.success */

    .error-message {
      color: var(--input-error-text-color, var(--color-error));
      font-size: var(--input-error-font-size, var(--text-sm));
      margin-top: var(--spacing-xs, 0.25rem);
    }

    ::slotted([slot='suffix']) {
      margin-left: var(--spacing-xs, 0.25rem);
      position: relative;
      z-index: 1;
      pointer-events: none;
    }

    ::slotted([slot='prefix']) {
      position: relative;
      z-index: 1;
      pointer-events: none;
    }

    ::slotted(span[slot='prefix']),
    ::slotted(span[slot='suffix']) {
      display: inline-flex;
      align-items: center;
      padding: 0 var(--spacing-sm, 0.5rem);
      color: var(--input-text-color, var(--color-base-content, #000000));
      opacity: 0.7;
    }
  `,c([p({type:String}),d("design:type",Object)],T.prototype,"value",void 0),c([p({type:String}),d("design:type",Object)],T.prototype,"placeholder",void 0),c([p({type:String}),d("design:type",Object)],T.prototype,"type",void 0),c([p({type:Boolean}),d("design:type",Object)],T.prototype,"disabled",void 0),c([p({type:String}),d("design:type",Object)],T.prototype,"name",void 0),c([p({type:String}),d("design:type",Object)],T.prototype,"error",void 0),c([p({type:Boolean}),d("design:type",Object)],T.prototype,"success",void 0),customElements.get("craftily-input")||customElements.define("craftily-input",T);const Jo=["value","placeholder","type","disabled","name","error","success"],Go={key:0,slot:"prefix"},Xo={key:1,slot:"suffix"},Is=y({name:"CraftilyInput",inheritAttrs:!1,__name:"Input",props:{modelValue:{default:""},placeholder:{default:""},type:{default:"text"},disabled:{type:Boolean,default:!1},name:{default:""},error:{default:""},success:{type:Boolean,default:!1}},emits:["update:modelValue","input","change"],setup(e,{emit:t}){const r=t,o=w(),s=n=>{r("update:modelValue",n.detail.value),r("input",n)},a=n=>{r("update:modelValue",n.detail.value),r("change",n)},i=n=>{var l;const _=(l=n.currentTarget.shadowRoot)==null?void 0:l.querySelector("input");_&&_.focus()};return Ye(()=>{customElements.get("craftily-input")||console.warn("craftily-input web component is not defined")}),(n,l)=>(u(),m("craftily-input",A({value:n.modelValue,placeholder:n.placeholder,type:n.type,disabled:n.disabled,name:n.name,error:n.error,success:n.success},x(o),{onInput:s,onChange:a,onClick:i}),[n.$slots.prefix?(u(),m("div",Go,[f(n.$slots,"prefix")])):P("",!0),n.$slots.suffix?(u(),m("div",Xo,[f(n.$slots,"suffix")])):P("",!0)],16,Jo))}});let jt=class extends g{constructor(){super(...arguments),this.open=!1,this.title=""}updated(e){e.has("open")&&(this.open?document.body.style.overflow="hidden":document.body.style.overflow="")}handleClose(){this.open=!1,this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleClose(),e.stopPropagation()}render(){return v`
      <div class="modal ${this.open?"open":""}" @click=${this.handleBackdropClick}>
        <div class="modal-content">
          <div class="modal-header">
            <h2>${this.title}</h2>
            <button class="close" @click=${this.handleClose}>&times;</button>
          </div>
          <div class="modal-body">
            <slot></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    `}};jt.styles=$`
    :host {
      display: block;
    }

    .modal {
      display: none;
      position: fixed;
      z-index: 10;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.6);
    }

    .modal.open {
      display: block;
      animation: fadeIn 0.3s ease;
    }

    .modal-content {
      background-color: white;
      margin: 5% auto;
      padding: 2rem;
      border-radius: var(--radius-md, 0.2rem);
      width: 90%;
      max-width: var(--modal-max-width, 600px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      position: relative;
      animation: slideIn 0.3s ease;
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }

    .modal-header h2 {
      margin: 0;
      font-size: var(--modal-title-size, 1.5rem);
      color: var(--modal-title-color, inherit);
    }

    .close {
      font-size: 1.5rem;
      cursor: pointer;
      background: none;
      border: none;
      padding: 0.5rem;
      line-height: 1;
      color: var(--modal-close-color, #666);
      transition: color 0.2s ease;
    }

    .close:hover {
      color: var(--modal-close-hover-color, #000);
    }

    .modal-body {
      margin-bottom: 1rem;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
    }

    @keyframes fadeIn {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }

    @keyframes slideIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }
  `,c([p({type:Boolean,reflect:!0}),d("design:type",Object)],jt.prototype,"open",void 0),c([p({type:String}),d("design:type",Object)],jt.prototype,"title",void 0),customElements.get("craftily-modal")||customElements.define("craftily-modal",jt);const Zo=y({name:"Modal",inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:""},closeOnBackdrop:{type:Boolean,default:!0},hideCloseButton:{type:Boolean,default:!1},closeButtonLabel:{type:String,default:"×"},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)}},emits:["update:modelValue","close"],mounted(){customElements.get("craftily-modal")||console.warn("craftily-modal web component is not defined")},methods:{handleClose(e){this.$emit("update:modelValue",!1),this.$emit("close",e)}}}),Ko=["open","title"],Qo={slot:"footer"};function ts(e,t,r,o,s,a){return u(),m("craftily-modal",A({open:e.modelValue,title:e.title},e.$attrs,{onClose:t[0]||(t[0]=(...i)=>e.handleClose&&e.handleClose(...i))}),[f(e.$slots,"default"),Ge("div",Qo,[f(e.$slots,"footer")])],16,Ko)}const Ds=j(Zo,[["render",ts]]);let tt=class extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.name="",this.value=""}handleChange(e){const t=e.target;this.checked=t.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}render(){return v`
      <label class="radio-wrapper">
        <input
          type="radio"
          class="radio"
          .checked=${this.checked}
          .disabled=${this.disabled}
          .name=${this.name}
          .value=${this.value}
          @change=${this.handleChange}
        />
        <span class="radio-label">
          <slot></slot>
        </span>
      </label>
    `}};tt.styles=$`
    :host {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs, 0.25rem);
    }

    .radio-wrapper {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: var(--spacing-xs, 0.25rem);
    }

    .radio {
      appearance: none;
      width: var(--radio-size, 1.25em);
      height: var(--radio-size, 1.25em);
      border: var(--radio-border, 2px solid var(--color-base-300, #e0e0e0));
      border-radius: var(--radio-border-radius, 50%);
      background-color: var(--radio-bg, var(--color-base-100, #ffffff));
      position: relative;
      cursor: pointer;
      transition:
        background-color 0.2s ease,
        border-color 0.2s ease;
    }

    .radio:checked {
      border-color: var(--radio-checked-border-color, var(--color-primary));
      background-color: var(--radio-checked-bg, var(--color-primary));
    }

    .radio:checked::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: var(--radio-dot-size, 0.5em);
      height: var(--radio-dot-size, 0.5em);
      border-radius: 50%;
      background-color: var(--radio-dot-color, var(--color-primary-content, #ffffff));
    }

    .radio:disabled {
      background-color: var(--radio-disabled-bg, var(--color-base-200, #f0f0f0));
      border-color: var(--radio-disabled-border-color, var(--color-base-300, #e0e0e0));
      cursor: not-allowed;
      opacity: 0.7;
    }

    .radio:disabled::before {
      background-color: var(--radio-disabled-dot-color, var(--color-base-300, #e0e0e0));
    }

    .radio-label {
      margin-left: var(--spacing-xs, 0.25rem);
      cursor: pointer;
      user-select: none;
    }

    :host([disabled]) .radio-label {
      cursor: not-allowed;
      opacity: 0.7;
    }
  `,c([p({type:Boolean,reflect:!0}),d("design:type",Object)],tt.prototype,"checked",void 0),c([p({type:Boolean,reflect:!0}),d("design:type",Object)],tt.prototype,"disabled",void 0),c([p({type:String}),d("design:type",Object)],tt.prototype,"name",void 0),c([p({type:String}),d("design:type",Object)],tt.prototype,"value",void 0);class ut extends g{constructor(){super(...arguments),this.name="",this.value="",this.horizontal=!1}updateRadioStates(){this.querySelectorAll("craftily-radio").forEach(t=>{t.checked=t.value===this.value})}handleRadioChange(t){const r=t.target;r.tagName.toLowerCase()==="craftily-radio"&&(this.value=r.value,this.updateRadioStates(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))}updated(t){t.has("value")&&this.updateRadioStates()}render(){return v`
      <div class="radio-group" @change=${this.handleRadioChange}>
        <slot></slot>
      </div>
    `}}ut.styles=$`
    :host {
      display: block;
    }

    .radio-group {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-sm, 0.5rem);
    }

    :host([horizontal]) .radio-group {
      flex-direction: row;
      gap: var(--spacing-md, 1rem);
    }
  `,c([p({type:String}),d("design:type",Object)],ut.prototype,"name",void 0),c([p({type:String}),d("design:type",Object)],ut.prototype,"value",void 0),c([p({type:Boolean,reflect:!0}),d("design:type",Object)],ut.prototype,"horizontal",void 0),customElements.get("craftily-radio")||customElements.define("craftily-radio",tt),customElements.get("craftily-radio-group")||customElements.define("craftily-radio-group",ut);const es=y({name:"CraftilyRadio",props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{type:String,default:""},value:{type:String,default:""}},emits:["update:modelValue","change"],setup(e,{emit:t}){return{handleChange:r=>{t("update:modelValue",r.detail.checked),t("change",r)}}},inheritAttrs:!1}),rs=["checked","disabled","name","value"];function os(e,t,r,o,s,a){return u(),m("craftily-radio",A({checked:e.modelValue,disabled:e.disabled,name:e.name,value:e.value},e.$attrs,{onChange:t[0]||(t[0]=(...i)=>e.handleChange&&e.handleChange(...i))}),[f(e.$slots,"default")],16,rs)}const qs=j(es,[["render",os]]),ss=y({name:"CraftilyRadioGroup",props:{modelValue:{type:String,default:""},name:{type:String,default:""},horizontal:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,{emit:t}){return{handleChange:r=>{t("update:modelValue",r.detail.value),t("change",r)}}},inheritAttrs:!1}),as=["name","value","horizontal"];function is(e,t,r,o,s,a){return u(),m("craftily-radio-group",A({name:e.name,value:e.modelValue,horizontal:e.horizontal},e.$attrs,{onChange:t[0]||(t[0]=(...i)=>e.handleChange&&e.handleChange(...i))}),[f(e.$slots,"default")],16,as)}const Fs=j(ss,[["render",is]]);let H=class extends g{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.name="",this.error="",this.options=[]}handleChange(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return v`
      <div>
        <select
          class="select"
          .value=${this.value}
          ?disabled=${this.disabled}
          .name=${this.name}
          @change=${this.handleChange}
        >
          <slot></slot>
          ${this.placeholder?v`<option value="" disabled selected>${this.placeholder}</option>`:""}
          ${this.options.map(e=>v` <option value=${e.value}>${e.label}</option> `)}
          <slot></slot>
        </select>
        ${this.error?v`<div class="error-message">${this.error}</div>`:""}
      </div>
    `}};H.styles=$`
    :host {
      display: inline-block;
      width: 100%;
    }

    .select {
      width: 100%;
      appearance: none;
      height: var(--select-height, calc(var(--spacing, 0.25rem) * 10));
      padding: var(--select-padding, 0 2.5rem 0 0.75rem);
      font-size: var(--select-font-size, var(--text-base));
      border-radius: var(--select-border-radius, var(--radius-sm, 0.1rem));
      border: var(--select-border, 1px solid var(--color-base-300, #e0e0e0));
      background-color: var(--select-bg, var(--color-base-100, #ffffff));
      color: var(--select-text-color, var(--color-base-content, #000000));
      background-image: var(
        --select-arrow-icon,
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E")
      );
      background-repeat: no-repeat;
      background-position: right var(--spacing-sm, 0.5rem) center;
      background-size: var(--select-arrow-size, 1.25em);
      cursor: pointer;
      transition:
        border-color 0.3s ease,
        box-shadow 0.3s ease;
    }

    .select:focus {
      outline: none;
      border-color: var(--select-focus-border-color, var(--color-primary));
      box-shadow: var(
        --select-focus-shadow,
        0 0 0 2px var(--color-primary-focus, rgba(59, 130, 246, 0.5))
      );
    }

    .select:disabled {
      background-color: var(--select-disabled-bg, var(--color-base-200, #f0f0f0));
      border-color: var(--select-disabled-border-color, var(--color-base-300, #e0e0e0));
      cursor: not-allowed;
      opacity: 0.7;
      background-image: var(
        --select-disabled-arrow-icon,
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%239ca3af'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E")
      );
    }

    .error-message {
      color: var(--select-error-text-color, var(--color-error));
      font-size: var(--select-error-font-size, var(--text-sm));
      margin-top: var(--spacing-xs, 0.25rem);
    }
  `,c([p({type:String}),d("design:type",Object)],H.prototype,"value",void 0),c([p({type:String}),d("design:type",Object)],H.prototype,"placeholder",void 0),c([p({type:Boolean}),d("design:type",Object)],H.prototype,"disabled",void 0),c([p({type:String}),d("design:type",Object)],H.prototype,"name",void 0),c([p({type:String}),d("design:type",Object)],H.prototype,"error",void 0),c([p({type:Array}),d("design:type",Array)],H.prototype,"options",void 0);let Fe=class extends g{constructor(){super(...arguments),this.value=""}render(){return v`
      <option value=${this.value}>
        <slot></slot>
      </option>
    `}};c([p({type:String}),d("design:type",Object)],Fe.prototype,"value",void 0),customElements.get("craftily-select")||customElements.define("craftily-select",H),customElements.get("craftily-option")||customElements.define("craftily-option",Fe);const ns=["value","placeholder","disabled","name","error","options","data-multiple"],ls={key:0,value:"",disabled:""},Ws=y({name:"Select",inheritAttrs:!1,__name:"Select",props:{modelValue:{default:""},options:{default:()=>[]},loading:{type:Boolean,default:!1},loadingText:{default:"Loading..."},multiple:{type:Boolean,default:!1},placeholder:{default:""},disabled:{type:Boolean,default:!1},name:{default:""},error:{default:""}},emits:["update:modelValue","change"],setup(e,{emit:t}){const r=t,o=w(),s=a=>{if(a instanceof CustomEvent&&a.detail&&typeof a.detail.value<"u"){const i=a.detail.value;r("update:modelValue",i),r("change",a)}};return(a,i)=>(u(),m("craftily-select",A({value:a.modelValue,placeholder:a.placeholder,disabled:a.disabled||a.loading,name:a.name,error:a.error,options:a.loading?[]:a.options,"data-multiple":a.multiple},x(o),{onChange:s}),[a.loading?(u(),m("option",ls,Je(a.loadingText),1)):f(a.$slots,"default",{key:1})],16,ns))}}),cs=["value","disabled"],Ys=y({name:"Option",inheritAttrs:!1,__name:"Option",props:{value:{},disabled:{type:Boolean,default:!1}},setup(e){const t=w();return(r,o)=>(u(),m("craftily-option",A({value:r.value,disabled:r.disabled},x(t)),[f(r.$slots,"default")],16,cs))}});let ht=class extends g{constructor(){super(...arguments),this.size="md",this.color="",this.label=""}render(){const e=this.color?`--spinner-color: ${this.color};`:"";return v`
      <div class="spinner-container">
        <div class="spinner" style="${e}"></div>
        ${this.label?v`<span class="spinner-text">${this.label}</span>`:""}
      </div>
    `}};ht.styles=$`
    :host {
      display: inline-block;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .spinner {
      width: var(--spinner-size, 2rem);
      height: var(--spinner-size, 2rem);
      border-width: var(--spinner-border-width, 3px);
      border-style: solid;
      border-color: var(--spinner-color, var(--color-primary));
      border-top-color: transparent;
      border-radius: 50%;
      display: inline-block;
      animation: spin 1s linear infinite;
    }

    :host([size='sm']) .spinner {
      --spinner-size: 1rem;
      --spinner-border-width: 2px;
    }

    :host([size='md']) .spinner {
      --spinner-size: 2rem;
      --spinner-border-width: 3px;
    }

    :host([size='lg']) .spinner {
      --spinner-size: 3rem;
      --spinner-border-width: 4px;
    }

    :host([size='xl']) .spinner {
      --spinner-size: 4rem;
      --spinner-border-width: 4px;
    }

    .spinner-container {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm, 0.5rem);
    }

    .spinner-text {
      color: var(--spinner-text-color, inherit);
      font-size: var(--spinner-text-size, inherit);
    }
  `,c([p({type:String,reflect:!0}),d("design:type",String)],ht.prototype,"size",void 0),c([p({type:String}),d("design:type",Object)],ht.prototype,"color",void 0),c([p({type:String}),d("design:type",Object)],ht.prototype,"label",void 0),customElements.get("craftily-spinner")||customElements.define("craftily-spinner",ht);const ds=y({name:"Spinner",props:{size:{type:String,default:"md"},color:{type:String,default:""},label:{type:String,default:""}},inheritAttrs:!1}),ps=["size","color","label"];function us(e,t,r,o,s,a){return u(),m("craftily-spinner",A({size:e.size,color:e.color,label:e.label},e.$attrs),null,16,ps)}const Js=j(ds,[["render",us]]);let vt=class extends g{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.name=""}handleChange(e){const t=e.target;this.checked=t.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}render(){return v`
      <label class="switch">
        <input
          type="checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          name=${this.name}
          @change=${this.handleChange}
        />
        <span class="slider"></span>
      </label>
    `}};vt.styles=$`
    :host {
      display: inline-block;
    }

    .switch {
      position: relative;
      display: inline-block;
      width: 36px;
      height: 20px;
    }

    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }

    .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 20px;
    }

    .slider:before {
      position: absolute;
      content: '';
      height: 16px;
      width: 16px;
      left: 2px;
      bottom: 2px;
      background-color: white;
      transition: 0.4s;
      border-radius: 50%;
    }

    input:checked + .slider {
      background-color: #2196f3;
    }

    input:disabled + .slider {
      opacity: 0.5;
      cursor: not-allowed;
    }

    input:checked + .slider:before {
      transform: translateX(16px);
    }
  `,c([p({type:Boolean}),d("design:type",Object)],vt.prototype,"checked",void 0),c([p({type:Boolean}),d("design:type",Object)],vt.prototype,"disabled",void 0),c([p({type:String}),d("design:type",Object)],vt.prototype,"name",void 0),customElements.get("craftily-switch")||customElements.define("craftily-switch",vt);const hs=["checked","disabled","name"],Gs=y({name:"CraftilySwitch",inheritAttrs:!1,__name:"Switch",props:{modelValue:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:{default:""},className:{default:""}},emits:["update:modelValue"],setup(e,{emit:t}){const r=t,o=w(),s=a=>{a instanceof CustomEvent&&a.detail&&typeof a.detail.checked=="boolean"&&r("update:modelValue",a.detail.checked)};return(a,i)=>(u(),m("craftily-switch",A({checked:a.modelValue,disabled:a.disabled,name:a.name,class:a.className},x(o),{onChange:s}),null,16,hs))}});class et extends g{constructor(){super(...arguments),this.value="",this.defaultValue="",this.variant="default",this.size="md",this._value=""}connectedCallback(){super.connectedCallback(),this._value=this.value||this.defaultValue,this.updateTabStates()}updated(t){t.has("value")&&(this._value=this.value,this.updateTabStates())}updateTabStates(){const t=this.querySelectorAll("craftily-tabs-trigger"),r=this.querySelectorAll("craftily-tabs-content");t.forEach(o=>{o.selected=o.value===this._value}),r.forEach(o=>{o.hidden=o.value!==this._value})}handleTabChange(t){this._value=t,this.updateTabStates(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}render(){return v`
      <div class="tabs" part="tabs">
        <slot></slot>
      </div>
    `}}et.styles=$`
    :host {
      display: block;
      width: 100%;
    }

    .tabs {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-md, 1rem);
    }

    :host([variant='pills']) ::slotted(craftily-tabs-list) {
      --tabs-list-border: none;
      --tabs-trigger-border-radius: var(--radius-md, 0.375rem);
      --tabs-trigger-active-bg: var(--color-primary);
      --tabs-trigger-active-color: var(--color-primary-content);
    }

    :host([variant='underline']) ::slotted(craftily-tabs-list) {
      --tabs-list-border: none;
      --tabs-trigger-border-bottom: 2px solid transparent;
      --tabs-trigger-active-border-color: var(--color-primary);
      --tabs-trigger-hover-border-color: var(--color-primary-focus);
    }
  `,c([p({type:String}),d("design:type",Object)],et.prototype,"value",void 0),c([p({type:String}),d("design:type",Object)],et.prototype,"defaultValue",void 0),c([p({type:String}),d("design:type",Object)],et.prototype,"variant",void 0),c([p({type:String}),d("design:type",Object)],et.prototype,"size",void 0);let yr=class extends g{render(){return v`
      <div class="tabs-list" part="list">
        <slot></slot>
      </div>
    `}};yr.styles=$`
    :host {
      display: block;
      width: 100%;
    }

    .tabs-list {
      display: flex;
      gap: var(--spacing-md, 1rem);
      border-bottom: var(--tabs-list-border, 1px solid var(--color-border, #e2e8f0));
      padding-bottom: var(--spacing-sm, 0.5rem);
    }
  `;class Ut extends g{constructor(){super(...arguments),this.value="",this.selected=!1}handleClick(){const t=this.closest("craftily-tabs");t&&t.handleTabChange(this.value)}render(){return v`
      <button class="trigger" role="tab" aria-selected=${this.selected} @click=${this.handleClick}>
        <slot></slot>
      </button>
    `}}Ut.styles=$`
    :host {
      display: block;
    }

    .trigger {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: var(--tabs-trigger-padding, 0.5rem 1rem);
      border: none;
      background: var(--tabs-trigger-bg, transparent);
      cursor: pointer;
      font-size: var(--tabs-trigger-font-size, 1rem);
      color: var(--tabs-trigger-color, var(--color-base-content, #4a5568));
      border-radius: var(--tabs-trigger-border-radius, 0);
      border-bottom: var(--tabs-trigger-border-bottom, none);
      transition: all 0.2s ease;
      gap: var(--spacing-xs, 0.25rem);
    }

    .trigger:hover {
      background: var(--tabs-trigger-hover-bg, var(--color-base-200, #edf2f7));
      border-color: var(--tabs-trigger-hover-border-color, transparent);
      color: var(--tabs-trigger-hover-color, var(--color-primary, #2b6cb0));
    }

    .trigger[aria-selected='true'] {
      background: var(--tabs-trigger-active-bg, transparent);
      color: var(--tabs-trigger-active-color, var(--color-primary, #2b6cb0));
      font-weight: var(--tabs-trigger-active-font-weight, 500);
      border-color: var(--tabs-trigger-active-border-color, transparent);
    }

    :host([variant='pills']) .trigger[aria-selected='true'] {
      background-color: #2b6cb0;
      color: white;
    }

    :host([variant='underline']) .trigger[aria-selected='true'] {
      border-bottom: 2px solid #2b6cb0;
    }
  `,c([p({type:String}),d("design:type",Object)],Ut.prototype,"value",void 0),c([p({type:Boolean,reflect:!0}),d("design:type",Object)],Ut.prototype,"selected",void 0);class Jt extends g{constructor(){super(...arguments),this.value=""}render(){return v`
      <div class="content" role="tabpanel">
        <slot></slot>
      </div>
    `}}Jt.styles=$`
    :host {
      display: block;
      width: 100%;
    }

    .content {
      padding: var(--tabs-content-padding, 1rem 0);
      animation: fadeIn 0.2s ease;
    }

    :host([hidden]) {
      display: none;
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(2px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `,c([p({type:String}),d("design:type",Object)],Jt.prototype,"value",void 0),customElements.get("craftily-tabs")||customElements.define("craftily-tabs",et),customElements.get("craftily-tabs-list")||customElements.define("craftily-tabs-list",yr),customElements.get("craftily-tabs-trigger")||customElements.define("craftily-tabs-trigger",Ut),customElements.get("craftily-tabs-content")||customElements.define("craftily-tabs-content",Jt);const vs=y({name:"TabsList",inheritAttrs:!1,__name:"TabsList",props:{className:{default:void 0}},setup(e){const t=w();return(r,o)=>(u(),m("craftily-tabs-list",A({class:r.className},x(t)),[f(r.$slots,"default")],16))}}),fs=["value","disabled"],ms=y({name:"TabsTrigger",inheritAttrs:!1,__name:"TabsTrigger",props:{value:{},disabled:{type:Boolean,default:!1},className:{default:void 0}},setup(e){const t=w();return(r,o)=>(u(),m("craftily-tabs-trigger",A({value:r.value,disabled:r.disabled,class:r.className},x(t)),[f(r.$slots,"default")],16,fs))}}),gs=["value"],bs=y({name:"TabsContent",inheritAttrs:!1,__name:"TabsContent",props:{value:{},className:{default:void 0}},setup(e){const t=w();return(r,o)=>(u(),m("craftily-tabs-content",A({value:r.value,class:r.className},x(t)),[f(r.$slots,"default")],16,gs))}}),ys=["value","default-value","variant","size"],Xs=y({name:"Tabs",inheritAttrs:!1,__name:"Tabs",props:{modelValue:{default:void 0},defaultValue:{default:void 0},variant:{default:"default"},size:{default:"md"},className:{default:void 0},tabs:{default:()=>[]}},emits:["update:modelValue","change"],setup(e,{emit:t}){const r=t,o=w(),s=a=>{a instanceof CustomEvent&&a.detail&&typeof a.detail.value=="string"&&(r("update:modelValue",a.detail.value),r("change",a.detail.value))};return(a,i)=>(u(),m("craftily-tabs",A({value:a.modelValue,"default-value":a.defaultValue,variant:a.variant,size:a.size,class:a.className},x(o),{onChange:s}),[a.tabs&&a.tabs.length?(u(),U(vs,{key:0},{default:R(()=>[(u(!0),m(ue,null,he(a.tabs,n=>(u(),U(ms,{key:n.value,value:n.value,disabled:n.disabled},{default:R(()=>[kr(Je(n.label),1)]),_:2},1032,["value","disabled"]))),128))]),_:1})):P("",!0),a.tabs&&a.tabs.length?(u(!0),m(ue,{key:1},he(a.tabs,n=>(u(),U(bs,{key:n.value,value:n.value},{default:R(()=>[f(a.$slots,n.value)]),_:2},1032,["value"]))),128)):f(a.$slots,"default",{key:2})],16,ys))}});class ft extends g{constructor(){super(...arguments),this.position="top",this.content="",this.trigger="hover"}render(){return v`
      <div class="tooltip-container" tabindex="${this.trigger==="focus"?"0":"-1"}">
        <slot></slot>
        <div class="tooltip-text">
          ${this.content?this.content:v`<slot name="content"></slot>`}
        </div>
      </div>
    `}}ft.styles=$`
    :host {
      display: inline-block;
      position: relative;
    }

    .tooltip-container {
      position: relative;
      display: inline-block;
      cursor: pointer;
    }

    .tooltip-text {
      visibility: hidden;
      width: max-content;
      max-width: var(--tooltip-max-width, 200px);
      background-color: var(--tooltip-bg, var(--color-neutral, #333333));
      color: var(--tooltip-content, var(--color-neutral-content, #ffffff));
      text-align: center;
      border-radius: var(--tooltip-border-radius, var(--radius-sm, 0.1rem));
      padding: var(--tooltip-padding, 0.5rem);
      position: absolute;
      z-index: var(--z-tooltip, 1010);
      opacity: 0;
      transition:
        opacity 0.3s,
        visibility 0.3s;
      font-size: var(--tooltip-font-size, var(--text-sm));
      box-shadow: var(--tooltip-shadow, var(--shadow-md));
    }

    .tooltip-text::after {
      content: '';
      position: absolute;
      border-width: 5px;
      border-style: solid;
    }

    /* Position variants */
    :host([position='top']) .tooltip-text {
      bottom: 125%;
      left: 50%;
      transform: translateX(-50%);
    }

    :host([position='top']) .tooltip-text::after {
      top: 100%;
      left: 50%;
      margin-left: -5px;
      border-color: var(--tooltip-bg, var(--color-neutral, #333333)) transparent transparent
        transparent;
    }

    :host([position='right']) .tooltip-text {
      top: 50%;
      left: 105%;
      transform: translateY(-50%);
    }

    :host([position='right']) .tooltip-text::after {
      top: 50%;
      right: 100%;
      margin-top: -5px;
      border-color: transparent var(--tooltip-bg, var(--color-neutral, #333333)) transparent
        transparent;
    }

    :host([position='left']) .tooltip-text {
      top: 50%;
      right: 105%;
      transform: translateY(-50%);
    }

    :host([position='left']) .tooltip-text::after {
      top: 50%;
      left: 100%;
      margin-top: -5px;
      border-color: transparent transparent transparent
        var(--tooltip-bg, var(--color-neutral, #333333));
    }

    :host([position='bottom']) .tooltip-text {
      top: 125%;
      left: 50%;
      transform: translateX(-50%);
    }

    :host([position='bottom']) .tooltip-text::after {
      bottom: 100%;
      left: 50%;
      margin-left: -5px;
      border-color: transparent transparent var(--tooltip-bg, var(--color-neutral, #333333))
        transparent;
    }

    /* Show tooltip on hover */
    .tooltip-container:hover .tooltip-text {
      visibility: visible;
      opacity: 1;
    }

    /* Show tooltip when trigger is focus */
    :host([trigger='focus']) .tooltip-container:focus-within .tooltip-text {
      visibility: visible;
      opacity: 1;
    }
  `,c([p({type:String,reflect:!0}),d("design:type",String)],ft.prototype,"position",void 0),c([p({type:String}),d("design:type",Object)],ft.prototype,"content",void 0),c([p({type:String,reflect:!0}),d("design:type",String)],ft.prototype,"trigger",void 0),customElements.get("craftily-tooltip")||customElements.define("craftily-tooltip",ft);const $s=["position","content","trigger"],_s={key:0,slot:"content"},Zs=y({name:"Tooltip",inheritAttrs:!1,__name:"Tooltip",props:{position:{default:"top"},content:{default:""},trigger:{default:"hover"},className:{default:void 0}},setup(e){const t=e,{position:r,content:o,trigger:s,className:a}=t,i=w(),n=Sr(),l=Qt(()=>!!n.content);return(_,b)=>(u(),m("craftily-tooltip",A({position:x(r),content:l.value?void 0:x(o),trigger:x(s),class:x(a)},x(i)),[f(_.$slots,"default"),l.value?(u(),m("div",_s,[f(_.$slots,"content")])):P("",!0)],16,$s))}});class $r extends g{render(){return v`
      <div class="card">
        <slot></slot>
      </div>
    `}}$r.styles=$`
    :host {
      display: block;
    }

    .card {
      padding: var(--card-padding, 1rem);
      border-radius: var(--card-border-radius, var(--radius-md, 0.2rem));
      background-color: var(--card-bg, var(--color-base-100, #ffffff));
      box-shadow: var(--card-shadow, var(--shadow-md));
      border: var(--card-border, 1px solid var(--color-base-300, #e0e0e0));
    }
  `;class _r extends g{render(){return v`<slot></slot>`}}_r.styles=$`
    :host {
      display: block;
      font-size: var(--card-title-font-size, var(--text-lg));
      font-weight: var(--font-weight-semibold, 600);
      margin-bottom: var(--spacing-sm, 0.5rem);
    }
  `;class xr extends g{render(){return v`<slot></slot>`}}xr.styles=$`
    :host {
      display: block;
      font-size: var(--card-body-font-size, var(--text-base));
    }
  `;class We extends g{render(){return v`
      <div class="actions">
        <slot></slot>
      </div>
    `}}We.styles=$`
    :host {
      display: block;
      margin-top: var(--spacing-md, 1rem);
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: var(--spacing-sm, 0.5rem);
    }
  `,customElements.get("craftily-card")||customElements.define("craftily-card",$r),customElements.get("craftily-card-title")||customElements.define("craftily-card-title",_r),customElements.get("craftily-card-body")||customElements.define("craftily-card-body",xr),customElements.get("craftily-card-actions")||customElements.define("craftily-card-actions",We);const xs=y({name:"CardTitle",inheritAttrs:!1,__name:"CardTitle",props:{className:{default:void 0}},setup(e){const t=w();return(r,o)=>(u(),m("craftily-card-title",A({class:r.className},x(t)),[f(r.$slots,"default")],16))}}),ws=y({name:"CardBody",inheritAttrs:!1,__name:"CardBody",props:{className:{default:void 0}},setup(e){const t=w();return(r,o)=>(u(),m("craftily-card-body",A({class:r.className},x(t)),[f(r.$slots,"default")],16))}}),As=y({name:"CardActions",inheritAttrs:!1,__name:"CardActions",props:{className:{default:void 0}},setup(e){const t=w();return(r,o)=>(u(),m("craftily-card-actions",A({class:r.className},x(t)),[f(r.$slots,"default")],16))}}),Ks=y({name:"Card",inheritAttrs:!1,__name:"Card",props:{className:{default:void 0}},setup(e){const t=w();return(r,o)=>(u(),m("craftily-card",A({class:r.className},x(t)),[r.$slots.title?(u(),U(xs,{key:0},{default:R(()=>[f(r.$slots,"title")]),_:3})):P("",!0),r.$slots.body||r.$slots.default?(u(),U(ws,{key:1},{default:R(()=>[f(r.$slots,"body"),!r.$slots.body&&r.$slots.default?f(r.$slots,"default",{key:0}):P("",!0)]),_:3})):P("",!0),r.$slots.actions?(u(),U(As,{key:2},{default:R(()=>[f(r.$slots,"actions")]),_:3})):P("",!0)],16))}});export{Is as $,ws as A,Gs as B,Ws as C,qs as E,zs as I,Os as L,Cs as M,Js as P,js as Q,Ss as R,Zs as T,ks as U,Ks as a,Ls as b,As as c,Ds as d,Bs as e,Xs as f,Rs as g,Vs as h,Ms as i,Fs as k,Ts as p,Ps as q,Us as r,Ns as t,Hs as u,xs as w,Ys as z};
