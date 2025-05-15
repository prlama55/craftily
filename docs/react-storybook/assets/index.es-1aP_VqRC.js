import{R as v,r as f}from"./index-D4lIrffr.js";function d(e,t,r,s){var o,a=arguments.length,i=a<3?t:s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")i=Reflect.decorate(e,t,r,s);else for(var n=e.length-1;n>=0;n--)(o=e[n])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function h(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=globalThis,Gt=Nt.ShadowRoot&&(Nt.ShadyCSS===void 0||Nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Qt=Symbol(),ne=new WeakMap;let Ie=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==Qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Gt&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=ne.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ne.set(t,e))}return e}toString(){return this.cssText}};const Mr=e=>new Ie(typeof e=="string"?e:e+"",void 0,Qt),x=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,o,a)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new Ie(r,e,Qt)},Br=(e,t)=>{if(Gt)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),o=Nt.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=r.cssText,e.appendChild(s)}},le=Gt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return Mr(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Hr,defineProperty:Ir,getOwnPropertyDescriptor:Lr,getOwnPropertyNames:Vr,getOwnPropertySymbols:Dr,getPrototypeOf:qr}=Object,tt=globalThis,ce=tt.trustedTypes,Wr=ce?ce.emptyScript:"",de=tt.reactiveElementPolyfillSupport,vt=(e,t)=>e,zt={toAttribute(e,t){switch(t){case Boolean:e=e?Wr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},te=(e,t)=>!Hr(e,t),he={attribute:!0,type:String,converter:zt,reflect:!1,useDefault:!1,hasChanged:te};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),tt.litPropertyMetadata??(tt.litPropertyMetadata=new WeakMap);let X=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=he){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&Ir(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:o}=Lr(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const i=s==null?void 0:s.call(this);o==null||o.call(this,a),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??he}static _$Ei(){if(this.hasOwnProperty(vt("elementProperties")))return;const e=qr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(vt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(vt("properties"))){const t=this.properties,r=[...Vr(t),...Dr(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(le(s))}else e!==void 0&&t.push(le(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Br(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var r;const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const a=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:zt).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var r,s;const o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const i=o.getPropertyOptions(a),n=typeof i.converter=="function"?{fromAttribute:i.converter}:((r=i.converter)==null?void 0:r.fromAttribute)!==void 0?i.converter:zt;this._$Em=a,this[a]=n.fromAttribute(t,i.type)??((s=this._$Ej)==null?void 0:s.get(a))??null,this._$Em=null}}requestUpdate(e,t,r){var s;if(e!==void 0){const o=this.constructor,a=this[e];if(r??(r=o.getPropertyOptions(e)),!((r.hasChanged??te)(a,t)||r.useDefault&&r.reflect&&a===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:o},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:i}=a,n=this[o];i!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,a,n)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$EO)==null||e.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};X.elementStyles=[],X.shadowRootOptions={mode:"open"},X[vt("elementProperties")]=new Map,X[vt("finalized")]=new Map,de==null||de({ReactiveElement:X}),(tt.reactiveElementVersions??(tt.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const jt=globalThis,Pt=jt.trustedTypes,pe=Pt?Pt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Le="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,Ve="?"+M,Fr=`<${Ve}>`,F=document,gt=()=>F.createComment(""),bt=e=>e===null||typeof e!="object"&&typeof e!="function",Yt=Array.isArray,Vt=`[ 	
\f\r]`,it=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,ve=/>/g,H=RegExp(`>|${Vt}(?:([^\\s"'>=/]+)(${Vt}*=${Vt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fe=/'/g,me=/"/g,De=/^(?:script|style|textarea|title)$/i,g=(e=>(t,...r)=>({_$litType$:e,strings:t,values:r}))(1),et=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),ge=new WeakMap,q=F.createTreeWalker(F,129);function qe(e,t){if(!Yt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return pe!==void 0?pe.createHTML(t):t}const Yr=(e,t)=>{const r=e.length-1,s=[];let o,a=t===2?"<svg>":t===3?"<math>":"",i=it;for(let n=0;n<r;n++){const l=e[n];let m,u,c=-1,$=0;for(;$<l.length&&(i.lastIndex=$,u=i.exec(l),u!==null);)$=i.lastIndex,i===it?u[1]==="!--"?i=ue:u[1]!==void 0?i=ve:u[2]!==void 0?(De.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=H):u[3]!==void 0&&(i=H):i===H?u[0]===">"?(i=o??it,c=-1):u[1]===void 0?c=-2:(c=i.lastIndex-u[2].length,m=u[1],i=u[3]===void 0?H:u[3]==='"'?me:fe):i===me||i===fe?i=H:i===ue||i===ve?i=it:(i=H,o=void 0);const b=i===H&&e[n+1].startsWith("/>")?" ":"";a+=i===it?l+Fr:c>=0?(s.push(m),l.slice(0,c)+Le+l.slice(c)+M+b):l+M+(c===-2?n:b)}return[qe(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};let Jt=class We{constructor({strings:t,_$litType$:r},s){let o;this.parts=[];let a=0,i=0;const n=t.length-1,l=this.parts,[m,u]=Yr(t,r);if(this.el=We.createElement(m,s),q.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=q.nextNode())!==null&&l.length<n;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(Le)){const $=u[i++],b=o.getAttribute(c).split(M),_=/([.?@])?(.*)/.exec($);l.push({type:1,index:a,name:_[2],strings:b,ctor:_[1]==="."?Kr:_[1]==="?"?Xr:_[1]==="@"?Zr:Bt}),o.removeAttribute(c)}else c.startsWith(M)&&(l.push({type:6,index:a}),o.removeAttribute(c));if(De.test(o.tagName)){const c=o.textContent.split(M),$=c.length-1;if($>0){o.textContent=Pt?Pt.emptyScript:"";for(let b=0;b<$;b++)o.append(c[b],gt()),q.nextNode(),l.push({type:2,index:++a});o.append(c[$],gt())}}}else if(o.nodeType===8)if(o.data===Ve)l.push({type:2,index:a});else{let c=-1;for(;(c=o.data.indexOf(M,c+1))!==-1;)l.push({type:7,index:a}),c+=M.length-1}a++}}static createElement(t,r){const s=F.createElement("template");return s.innerHTML=t,s}};function rt(e,t,r=e,s){var o,a;if(t===et)return t;let i=s!==void 0?(o=r._$Co)==null?void 0:o[s]:r._$Cl;const n=bt(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=i:r._$Cl=i),i!==void 0&&(t=rt(e,i._$AS(e,t.values),i,s)),t}let Jr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:r}=this._$AD,s=((e==null?void 0:e.creationScope)??F).importNode(t,!0);q.currentNode=s;let o=q.nextNode(),a=0,i=0,n=r[0];for(;n!==void 0;){if(a===n.index){let l;n.type===2?l=new kt(o,o.nextSibling,this,e):n.type===1?l=new n.ctor(o,n.name,n.strings,this,e):n.type===6&&(l=new Gr(o,this,e)),this._$AV.push(l),n=r[++i]}a!==(n==null?void 0:n.index)&&(o=q.nextNode(),a++)}return q.currentNode=F,s}p(e){let t=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,t),t+=r.strings.length-2):r._$AI(e[t])),t++}};class kt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,s,o){this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=rt(this,t,r),bt(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==et&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):(s=>Yt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function")(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==w&&bt(this._$AH)?this._$AA.nextSibling.data=t:this.T(F.createTextNode(t)),this._$AH=t}$(t){var r;const{values:s,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Jt.createElement(qe(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===a)this._$AH.p(s);else{const i=new Jr(a,this),n=i.u(this.options);i.p(s),this.T(n),this._$AH=i}}_$AC(t){let r=ge.get(t.strings);return r===void 0&&ge.set(t.strings,r=new Jt(t)),r}k(t){Yt(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,o=0;for(const a of t)o===r.length?r.push(s=new kt(this.O(gt()),this.O(gt()),this,this.options)):s=r[o],s._$AI(a),o++;o<r.length&&(this._$AR(s&&s._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}let Bt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,r,s,o){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=w}_$AI(e,t=this,r,s){const o=this.strings;let a=!1;if(o===void 0)e=rt(this,e,t,0),a=!bt(e)||e!==this._$AH&&e!==et,a&&(this._$AH=e);else{const i=e;let n,l;for(e=o[0],n=0;n<o.length-1;n++)l=rt(this,i[r+n],t,n),l===et&&(l=this._$AH[n]),a||(a=!bt(l)||l!==this._$AH[n]),l===w?e=w:e!==w&&(e+=(l??"")+o[n+1]),this._$AH[n]=l}a&&!s&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Kr=class extends Bt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}},Xr=class extends Bt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==w)}},Zr=class extends Bt{constructor(e,t,r,s,o){super(e,t,r,s,o),this.type=5}_$AI(e,t=this){if((e=rt(this,e,t,0)??w)===et)return;const r=this._$AH,s=e===w&&r!==w||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==w&&(r===w||s);s&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}};class Gr{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){rt(this,t)}}const be=jt.litHtmlPolyfillSupport;be==null||be(Jt,kt),(jt.litHtmlVersions??(jt.litHtmlVersions=[])).push("3.3.0");const Qr=(e,t,r)=>{const s=(r==null?void 0:r.renderBefore)??t;let o=s._$litPart$;if(o===void 0){const a=(r==null?void 0:r.renderBefore)??null;s._$litPart$=o=new kt(t.insertBefore(gt(),a),a,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yt=globalThis;let y=class extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Qr(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return et}};var ye;y._$litElement$=!0,y.finalized=!0,(ye=yt.litElementHydrateSupport)==null||ye.call(yt,{LitElement:y});const $e=yt.litElementPolyfillSupport;$e==null||$e({LitElement:y}),(yt.litElementVersions??(yt.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ts={attribute:!0,type:String,converter:zt,reflect:!1,hasChanged:te},es=(e=ts,t,r)=>{const{kind:s,metadata:o}=r;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),s==="accessor"){const{name:i}=r;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,l,e)},init(n){return n!==void 0&&this.C(i,void 0,e,n),n}}}if(s==="setter"){const{name:i}=r;return function(n){const l=this[i];t.call(this,n),this.requestUpdate(i,l,e)}}throw Error("Unsupported decorator location: "+s)};function p(e){return(t,r)=>typeof r=="object"?es(e,t,r):((s,o,a)=>{const i=o.hasOwnProperty(a);return o.constructor.createProperty(a,s),i?Object.getOwnPropertyDescriptor(o,a):void 0})(e,t,r)}let nt=class extends y{constructor(){super(...arguments),this.type="info",this.title="",this.dismissible=!0}render(){return g`
      <div part="alert" class="alert ${this.type} ${this.className}">
        <span part="icon" class="icon">
          <slot name="icon"></slot>
        </span>
        ${this.title?g`<strong part="title">${this.title}</strong>`:""}
        <slot part="content"></slot>
        ${this.dismissible?g`<button part="close" class="close" @click=${()=>this.remove()}>&times;</button>`:""}
      </div>
    `}};nt.styles=x`
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
  `,d([p({type:String}),h("design:type",String)],nt.prototype,"type",void 0),d([p({type:String}),h("design:type",Object)],nt.prototype,"title",void 0),d([p({type:Boolean}),h("design:type",Object)],nt.prototype,"dismissible",void 0),customElements.get("craftily-alert")||customElements.define("craftily-alert",nt);const Fe=f.forwardRef((e,t)=>{const{variant:r,title:s,dismissible:o,children:a,className:i,part:n,...l}=e;return v.createElement("craftily-alert",{ref:t,variant:r,title:s,dismissible:o,class:i,part:n,...l},a)});Fe.displayName="Alert";let I=class extends y{constructor(){super(...arguments),this.variant="primary",this.shape="circle",this.alt=""}render(){const e=["avatar",this.variant,this.shape].filter(Boolean).join(" "),t=this.size?`--avatar-size: ${this.size};`:"";return g`
      ${this.src?g`<img class="${e}" src="${this.src}" alt="${this.alt}" style="${t}" />`:g`<div class="${e}" style="${t}"><slot></slot></div>`}
    `}};I.styles=x`
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
  `,d([p({type:String}),h("design:type",String)],I.prototype,"variant",void 0),d([p({type:String}),h("design:type",String)],I.prototype,"shape",void 0),d([p({type:String}),h("design:type",String)],I.prototype,"src",void 0),d([p({type:String}),h("design:type",Object)],I.prototype,"alt",void 0),d([p({type:String}),h("design:type",String)],I.prototype,"size",void 0),customElements.get("craftily-avatar")||customElements.define("craftily-avatar",I);const Ye=f.forwardRef((e,t)=>{const{shape:r,src:s,alt:o,size:a,className:i,children:n,...l}=e;return v.createElement("craftily-avatar",{ref:t,shape:r,src:s,alt:o,size:a,class:i,...l},n)});Ye.displayName="Avatar";let St=class extends y{constructor(){super(...arguments),this.variant="primary",this.dot=!1}render(){const e=["badge",this.variant!=="primary"?this.variant:"",this.dot?"dot":""].filter(Boolean).join(" ");return g`
      <div class="${e}">
        <slot></slot>
      </div>
    `}};St.styles=x`
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
  `,d([p({type:String}),h("design:type",String)],St.prototype,"variant",void 0),d([p({type:Boolean}),h("design:type",Object)],St.prototype,"dot",void 0),customElements.get("craftily-badge")||customElements.define("craftily-badge",St);const Je=f.forwardRef((e,t)=>{const{variant:r,dot:s,className:o,children:a,...i}=e;return v.createElement("craftily-badge",{ref:t,variant:r,dot:s,class:o,...i},a)});Je.displayName="Badge";let L=class extends y{constructor(){super(...arguments),this.variant="primary",this.size="md",this.disabled=!1,this.iconPosition="left"}renderIcon(){return g`<slot name="icon" class="icon"></slot>`}renderLabel(){return g`<slot name="label">${this.label}</slot>`}handleClick(e){this.dispatchEvent(new CustomEvent("click",{detail:{originalEvent:e},bubbles:!0,composed:!0}))}render(){const e=this.renderIcon(),t=this.renderLabel();return g`
      <button
        class="btn btn-${this.variant} btn-${this.size}"
        ?disabled=${this.disabled}
        part="button"
        @click=${this.handleClick}
      >
        ${this.iconPosition==="left"?g`${e}${t}`:g`${t}${e}`}
      </button>
    `}};L.styles=x`
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
  `,d([p({type:String}),h("design:type",String)],L.prototype,"variant",void 0),d([p({type:String}),h("design:type",String)],L.prototype,"size",void 0),d([p({type:Boolean,reflect:!0}),h("design:type",Object)],L.prototype,"disabled",void 0),d([p({type:String,attribute:"icon-position"}),h("design:type",String)],L.prototype,"iconPosition",void 0),d([p({type:String}),h("design:type",String)],L.prototype,"label",void 0),customElements.get("craftily-button")||customElements.define("craftily-button",L);const Ke=f.forwardRef((e,t)=>{const{variant:r,size:s,disabled:o,iconPosition:a,icon:i,label:n,className:l,children:m,onClick:u,...c}=e,$=f.useCallback(b=>{u&&b instanceof CustomEvent&&u(b)},[u]);return f.useEffect(()=>{let b=null;if(t&&(typeof t=="function"||t.current&&(b=t.current)),!!b)return b.addEventListener("click",$),()=>b==null?void 0:b.removeEventListener("click",$)},[$,t]),v.createElement("craftily-button",{ref:t,variant:r,size:s,disabled:o,"icon-position":a,class:l,...c},[i&&v.createElement("span",{key:"icon",slot:"icon"},i),n&&v.createElement("span",{key:"label",slot:"label"},n),m])});Ke.displayName="Button";let Xe=class extends y{render(){return g`
      <div class="card">
        <slot></slot>
      </div>
    `}};Xe.styles=x`
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
  `;let Ze=class extends y{render(){return g`<slot></slot>`}};Ze.styles=x`
    :host {
      display: block;
      font-size: var(--card-title-font-size, var(--text-lg));
      font-weight: var(--font-weight-semibold, 600);
      margin-bottom: var(--spacing-sm, 0.5rem);
    }
  `;let Ge=class extends y{render(){return g`<slot></slot>`}};Ge.styles=x`
    :host {
      display: block;
      font-size: var(--card-body-font-size, var(--text-base));
    }
  `;let xe=class extends y{render(){return g`
      <div class="actions">
        <slot></slot>
      </div>
    `}};xe.styles=x`
    :host {
      display: block;
      margin-top: var(--spacing-md, 1rem);
    }

    .actions {
      display: flex;
      justify-content: flex-end;
      gap: var(--spacing-sm, 0.5rem);
    }
  `,customElements.get("craftily-card")||customElements.define("craftily-card",Xe),customElements.get("craftily-card-title")||customElements.define("craftily-card-title",Ze),customElements.get("craftily-card-body")||customElements.define("craftily-card-body",Ge),customElements.get("craftily-card-actions")||customElements.define("craftily-card-actions",xe);const rs=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-card-title",{ref:t,class:r,...o},s)}),ss=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-card-body",{ref:t,class:r,...o},s)}),os=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-card-actions",{ref:t,class:r,...o},s)}),as=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-card-header",{ref:t,class:r,...o},s)}),is=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-card-footer",{ref:t,class:r,...o},s)}),Qe=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-card",{ref:t,class:r,...o},s)}),qs=Object.assign(Qe,{Title:rs,Body:ss,Actions:os,Header:as,Footer:is});let K=class extends y{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.name="",this.value=""}handleChange(e){const t=e.target;this.checked=t.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}render(){return g`
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
    `}};K.styles=x`
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
  `,d([p({type:Boolean,reflect:!0}),h("design:type",Object)],K.prototype,"checked",void 0),d([p({type:Boolean,reflect:!0}),h("design:type",Object)],K.prototype,"disabled",void 0),d([p({type:String}),h("design:type",Object)],K.prototype,"name",void 0),d([p({type:String}),h("design:type",Object)],K.prototype,"value",void 0),customElements.get("craftily-checkbox")||customElements.define("craftily-checkbox",K);const tr=f.forwardRef((e,t)=>{const{checked:r,disabled:s,name:o,value:a,className:i,children:n,onChange:l,...m}=e,u=f.useCallback(c=>{l&&c instanceof CustomEvent&&l(c)},[l]);return v.createElement("craftily-checkbox",{ref:t,checked:r,disabled:s,name:o,value:a,class:i,onChange:u,...m},n)});tr.displayName="Checkbox";let er=class extends y{render(){return g`
      <div class="brand">
        <slot></slot>
      </div>
    `}};er.styles=x`
    :host {
      display: block;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: var(--spacing-sm, 0.5rem);
    }
  `;let rr=class extends y{render(){return g`
      <footer class="footer">
        <div class="footer-content">
          <slot></slot>
        </div>
      </footer>
    `}};rr.styles=x`
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
  `;let sr=class extends y{render(){return g`
      <nav class="navigation">
        <slot></slot>
      </nav>
    `}};sr.styles=x`
    :host {
      display: block;
      width: 100%;
    }

    .navigation {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: var(--spacing-lg, 1.5rem);
    }
  `;let or=class extends y{render(){return g`
      <div class="nav-group">
        <h3 class="title">${this.getAttribute("title")}</h3>
        <slot></slot>
      </div>
    `}};or.styles=x`
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
  `;let ar=class extends y{render(){return g`
      <a class="link" href="${this.getAttribute("href")}">
        <slot></slot>
      </a>
    `}};ar.styles=x`
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
  `;let ir=class extends y{render(){return g`
      <div class="copyright">
        <slot></slot>
      </div>
    `}};ir.styles=x`
    :host {
      display: block;
      width: 100%;
      text-align: center;
    }

    .copyright {
      color: var(--footer-copyright-color, var(--color-base-content-secondary, #64748b));
      font-size: var(--text-sm, 0.875rem);
    }
  `;let nr=class extends y{render(){return g`
      <div class="social">
        <slot></slot>
      </div>
    `}};nr.styles=x`
    :host {
      display: block;
      width: 100%;
    }

    .social {
      display: flex;
      justify-content: center;
      gap: var(--spacing-md, 1rem);
    }
  `;let _e=class extends y{render(){const e=this.getAttribute("icon"),t=this.getAttribute("aria-label");return g`
      <a class="social-link" href="${this.getAttribute("href")}" aria-label="${t}">
        <i class="fa fa-${e}"></i>
      </a>
    `}};_e.styles=x`
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
  `,customElements.get("craftily-footer")||customElements.define("craftily-footer",rr),customElements.get("craftily-footer-navigation")||customElements.define("craftily-footer-navigation",sr),customElements.get("craftily-footer-nav-group")||customElements.define("craftily-footer-nav-group",or),customElements.get("craftily-footer-link")||customElements.define("craftily-footer-link",ar),customElements.get("craftily-footer-copyright")||customElements.define("craftily-footer-copyright",ir),customElements.get("craftily-footer-social")||customElements.define("craftily-footer-social",nr),customElements.get("craftily-footer-social-link")||customElements.define("craftily-footer-social-link",_e),customElements.get("craftily-footer-brand")||customElements.define("craftily-footer-brand",er);function $t(...e){const t=[];return e.forEach(r=>{r&&(typeof r=="string"?t.push(r):typeof r=="object"&&Object.entries(r).forEach(([s,o])=>{o&&t.push(s)}))}),t.join(" ")}const ee=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e,a=$t(r,{footer:!0});return v.createElement("craftily-footer",{ref:t,class:a||"",...o},s)}),lr=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-footer-copyright",{ref:t,class:r||"",...o},s)}),cr=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-footer-navigation",{ref:t,class:r||"",...o},s)}),dr=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-footer-social",{ref:t,class:r||"",...o},s)}),hr=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-footer-brand",{ref:t,class:r||"",...o},s)}),pr=f.forwardRef((e,t)=>{const{className:r,children:s,title:o,...a}=e;return v.createElement("craftily-footer-nav-group",{ref:t,class:r||"",title:o,...a},s)}),ur=f.forwardRef((e,t)=>{const{className:r,children:s,href:o,...a}=e;return v.createElement("craftily-footer-link",{ref:t,class:r||"",href:o,...a},s)}),vr=f.forwardRef((e,t)=>{const{className:r,href:s,icon:o,label:a,...i}=e;return v.createElement("craftily-footer-social-link",{ref:t,class:r||"",href:s,icon:o,"aria-label":a,...i})});ee.displayName="Footer";lr.displayName="Footer.Copyright";cr.displayName="Footer.Navigation";dr.displayName="Footer.Social";hr.displayName="Footer.Brand";pr.displayName="Footer.NavGroup";ur.displayName="Footer.Link";vr.displayName="Footer.SocialLink";const Ws=Object.assign(ee,{Copyright:lr,Navigation:cr,Social:dr,Brand:hr,NavGroup:pr,Link:ur,SocialLink:vr});let fr=class extends y{render(){return g`
      <header class="header">
        <slot></slot>
      </header>
    `}};fr.styles=x`
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
  `;let mr=class extends y{render(){return g`
      <div class="header-brand">
        <slot></slot>
      </div>
    `}};mr.styles=x`
    :host {
      display: block;
    }

    .header-brand {
      font-size: var(--header-brand-font-size, var(--text-xl));
      font-weight: var(--font-weight-bold, 700);
      color: var(--header-brand-color, var(--color-primary));
      text-decoration: none;
    }
  `;let gr=class extends y{render(){return g`
      <nav class="header-nav">
        <slot></slot>
      </nav>
    `}};gr.styles=x`
    :host {
      display: block;
    }

    .header-nav {
      display: flex;
      gap: var(--header-nav-gap, var(--spacing-md, 1rem));
    }
  `;let Kt=class extends y{constructor(){super(...arguments),this.active=!1}render(){return g`
      <a class="header-nav-item ${this.active?"active":""}">
        <slot></slot>
      </a>
    `}};Kt.styles=x`
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
  `,d([p({type:Boolean,reflect:!0}),h("design:type",Object)],Kt.prototype,"active",void 0);let br=class extends y{render(){return g`
      <div class="header-actions">
        <slot></slot>
      </div>
    `}};br.styles=x`
    :host {
      display: block;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: var(--header-actions-gap, var(--spacing-sm, 0.5rem));
    }
  `;let yr=class extends y{render(){return g`
      <div class="header-search">
        <slot></slot>
      </div>
    `}};yr.styles=x`
    :host {
      display: block;
    }

    .header-search {
      display: flex;
      align-items: center;
      gap: var(--header-search-gap, var(--spacing-sm, 0.5rem));
    }
  `;let Dt=class extends y{constructor(){super(...arguments),this.open=!1}render(){return g`
      <div class="header-mobile-menu ${this.open?"open":""}">
        <slot></slot>
      </div>
    `}};Dt.styles=x`
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
  `,d([p({type:Boolean,reflect:!0}),h("design:type",Object)],Dt.prototype,"open",void 0),customElements.get("craftily-header")||customElements.define("craftily-header",fr),customElements.get("craftily-header-brand")||customElements.define("craftily-header-brand",mr),customElements.get("craftily-header-nav")||customElements.define("craftily-header-nav",gr),customElements.get("craftily-header-nav-item")||customElements.define("craftily-header-nav-item",Kt),customElements.get("craftily-header-actions")||customElements.define("craftily-header-actions",br),customElements.get("craftily-header-search")||customElements.define("craftily-header-search",yr),customElements.get("craftily-header-mobile-menu")||customElements.define("craftily-header-mobile-menu",Dt);const ns=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-header-brand",{ref:t,class:r,...o},s)}),ls=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-header-nav",{ref:t,class:r,...o},s)}),cs=f.forwardRef((e,t)=>{const{className:r,active:s,children:o,...a}=e;return v.createElement("craftily-header-nav-item",{ref:t,class:r,active:s,...a},o)}),ds=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-header-actions",{ref:t,class:r,...o},s)}),hs=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-header-search",{ref:t,class:r,...o},s)}),$r=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-header",{ref:t,class:r,...o},s)}),ps=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-header-mobile-menu",{ref:t,class:r,...o},s)}),Fs=Object.assign($r,{Brand:ns,Nav:ls,NavItem:cs,Actions:ds,Search:hs,MobileMenu:ps});function C(e,t,r,s){var o=arguments.length,a=o<3?t:s,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(e,t,r,s);else for(var n=e.length-1;n>=0;n--)(i=e[n])&&(a=(o<3?i(a):o>3?i(t,r,a):i(t,r))||a);return o>3&&a&&Object.defineProperty(t,r,a),a}function N(e,t){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(e,t)}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ot=globalThis,re=Ot.ShadowRoot&&(Ot.ShadyCSS===void 0||Ot.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,se=Symbol(),we=new WeakMap;let xr=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==se)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(re&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=we.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&we.set(t,e))}return e}toString(){return this.cssText}};const us=e=>new xr(typeof e=="string"?e:e+"",void 0,se),vs=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((s,o,a)=>s+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[a+1],e[0]);return new xr(r,e,se)},fs=(e,t)=>{if(re)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const s=document.createElement("style"),o=Ot.litNonce;o!==void 0&&s.setAttribute("nonce",o),s.textContent=r.cssText,e.appendChild(s)}},Ee=re?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const s of t.cssRules)r+=s.cssText;return us(r)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ms,defineProperty:gs,getOwnPropertyDescriptor:bs,getOwnPropertyNames:ys,getOwnPropertySymbols:$s,getPrototypeOf:xs}=Object,st=globalThis,ke=st.trustedTypes,_s=ke?ke.emptyScript:"",Ae=st.reactiveElementPolyfillSupport,ft=(e,t)=>e,Ut={toAttribute(e,t){switch(t){case Boolean:e=e?_s:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},oe=(e,t)=>!ms(e,t),Se={attribute:!0,type:String,converter:Ut,reflect:!1,useDefault:!1,hasChanged:oe};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),st.litPropertyMetadata??(st.litPropertyMetadata=new WeakMap);let Z=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Se){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),s=this.getPropertyDescriptor(e,r,t);s!==void 0&&gs(this.prototype,e,s)}}static getPropertyDescriptor(e,t,r){const{get:s,set:o}=bs(this.prototype,e)??{get(){return this[t]},set(a){this[t]=a}};return{get:s,set(a){const i=s==null?void 0:s.call(this);o==null||o.call(this,a),this.requestUpdate(e,i,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Se}static _$Ei(){if(this.hasOwnProperty(ft("elementProperties")))return;const e=xs(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ft("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ft("properties"))){const t=this.properties,r=[...ys(t),...$s(t)];for(const s of r)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,s]of t)this.elementProperties.set(r,s)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const s=this._$Eu(t,r);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const s of r)t.unshift(Ee(s))}else e!==void 0&&t.push(Ee(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return fs(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var r;const s=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,s);if(o!==void 0&&s.reflect===!0){const a=(((r=s.converter)==null?void 0:r.toAttribute)!==void 0?s.converter:Ut).toAttribute(t,s.type);this._$Em=e,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Em=null}}_$AK(e,t){var r,s;const o=this.constructor,a=o._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const i=o.getPropertyOptions(a),n=typeof i.converter=="function"?{fromAttribute:i.converter}:((r=i.converter)==null?void 0:r.fromAttribute)!==void 0?i.converter:Ut;this._$Em=a,this[a]=n.fromAttribute(t,i.type)??((s=this._$Ej)==null?void 0:s.get(a))??null,this._$Em=null}}requestUpdate(e,t,r){var s;if(e!==void 0){const o=this.constructor,a=this[e];if(r??(r=o.getPropertyOptions(e)),!((r.hasChanged??oe)(a,t)||r.useDefault&&r.reflect&&a===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(o._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:s,wrapped:o},a){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,a??t??this[e]),o!==!0||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,a]of this._$Ep)this[o]=a;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,a]of s){const{wrapped:i}=a,n=this[o];i!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,a,n)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$EO)==null||e.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(r)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var s;return(s=r.hostUpdated)==null?void 0:s.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};Z.elementStyles=[],Z.shadowRootOptions={mode:"open"},Z[ft("elementProperties")]=new Map,Z[ft("finalized")]=new Map,Ae==null||Ae({ReactiveElement:Z}),(st.reactiveElementVersions??(st.reactiveElementVersions=[])).push("2.1.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt=globalThis,Mt=Tt.trustedTypes,Ce=Mt?Mt.createPolicy("lit-html",{createHTML:e=>e}):void 0,_r="$lit$",B=`lit$${Math.random().toFixed(9).slice(2)}$`,wr="?"+B,ws=`<${wr}>`,Y=document,xt=()=>Y.createComment(""),_t=e=>e===null||typeof e!="object"&&typeof e!="function",ae=Array.isArray,Es=e=>ae(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",qt=`[ 	
\f\r]`,lt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ne=/-->/g,Oe=/>/g,V=RegExp(`>|${qt}(?:([^\\s"'>=/]+)(${qt}*=${qt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Re=/'/g,ze=/"/g,Er=/^(?:script|style|textarea|title)$/i,ks=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),U=ks(1),ot=Symbol.for("lit-noChange"),E=Symbol.for("lit-nothing"),je=new WeakMap,W=Y.createTreeWalker(Y,129);function kr(e,t){if(!ae(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Ce!==void 0?Ce.createHTML(t):t}const As=(e,t)=>{const r=e.length-1,s=[];let o,a=t===2?"<svg>":t===3?"<math>":"",i=lt;for(let n=0;n<r;n++){const l=e[n];let m,u,c=-1,$=0;for(;$<l.length&&(i.lastIndex=$,u=i.exec(l),u!==null);)$=i.lastIndex,i===lt?u[1]==="!--"?i=Ne:u[1]!==void 0?i=Oe:u[2]!==void 0?(Er.test(u[2])&&(o=RegExp("</"+u[2],"g")),i=V):u[3]!==void 0&&(i=V):i===V?u[0]===">"?(i=o??lt,c=-1):u[1]===void 0?c=-2:(c=i.lastIndex-u[2].length,m=u[1],i=u[3]===void 0?V:u[3]==='"'?ze:Re):i===ze||i===Re?i=V:i===Ne||i===Oe?i=lt:(i=V,o=void 0);const b=i===V&&e[n+1].startsWith("/>")?" ":"";a+=i===lt?l+ws:c>=0?(s.push(m),l.slice(0,c)+_r+l.slice(c)+B+b):l+B+(c===-2?n:b)}return[kr(e,a+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class wt{constructor({strings:t,_$litType$:r},s){let o;this.parts=[];let a=0,i=0;const n=t.length-1,l=this.parts,[m,u]=As(t,r);if(this.el=wt.createElement(m,s),W.currentNode=this.el.content,r===2||r===3){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(o=W.nextNode())!==null&&l.length<n;){if(o.nodeType===1){if(o.hasAttributes())for(const c of o.getAttributeNames())if(c.endsWith(_r)){const $=u[i++],b=o.getAttribute(c).split(B),_=/([.?@])?(.*)/.exec($);l.push({type:1,index:a,name:_[2],strings:b,ctor:_[1]==="."?Cs:_[1]==="?"?Ns:_[1]==="@"?Os:Ht}),o.removeAttribute(c)}else c.startsWith(B)&&(l.push({type:6,index:a}),o.removeAttribute(c));if(Er.test(o.tagName)){const c=o.textContent.split(B),$=c.length-1;if($>0){o.textContent=Mt?Mt.emptyScript:"";for(let b=0;b<$;b++)o.append(c[b],xt()),W.nextNode(),l.push({type:2,index:++a});o.append(c[$],xt())}}}else if(o.nodeType===8)if(o.data===wr)l.push({type:2,index:a});else{let c=-1;for(;(c=o.data.indexOf(B,c+1))!==-1;)l.push({type:7,index:a}),c+=B.length-1}a++}}static createElement(t,r){const s=Y.createElement("template");return s.innerHTML=t,s}}function at(e,t,r=e,s){var o,a;if(t===ot)return t;let i=s!==void 0?(o=r._$Co)==null?void 0:o[s]:r._$Cl;const n=_t(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==n&&((a=i==null?void 0:i._$AO)==null||a.call(i,!1),n===void 0?i=void 0:(i=new n(e),i._$AT(e,r,s)),s!==void 0?(r._$Co??(r._$Co=[]))[s]=i:r._$Cl=i),i!==void 0&&(t=at(e,i._$AS(e,t.values),i,s)),t}class Ss{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:s}=this._$AD,o=((t==null?void 0:t.creationScope)??Y).importNode(r,!0);W.currentNode=o;let a=W.nextNode(),i=0,n=0,l=s[0];for(;l!==void 0;){if(i===l.index){let m;l.type===2?m=new At(a,a.nextSibling,this,t):l.type===1?m=new l.ctor(a,l.name,l.strings,this,t):l.type===6&&(m=new Rs(a,this,t)),this._$AV.push(m),l=s[++n]}i!==(l==null?void 0:l.index)&&(a=W.nextNode(),i++)}return W.currentNode=Y,o}p(t){let r=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,r),r+=s.strings.length-2):s._$AI(t[r])),r++}}class At{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,s,o){this.type=2,this._$AH=E,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=s,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=at(this,t,r),_t(t)?t===E||t==null||t===""?(this._$AH!==E&&this._$AR(),this._$AH=E):t!==this._$AH&&t!==ot&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Es(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==E&&_t(this._$AH)?this._$AA.nextSibling.data=t:this.T(Y.createTextNode(t)),this._$AH=t}$(t){var r;const{values:s,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=wt.createElement(kr(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===a)this._$AH.p(s);else{const i=new Ss(a,this),n=i.u(this.options);i.p(s),this.T(n),this._$AH=i}}_$AC(t){let r=je.get(t.strings);return r===void 0&&je.set(t.strings,r=new wt(t)),r}k(t){ae(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let s,o=0;for(const a of t)o===r.length?r.push(s=new At(this.O(xt()),this.O(xt()),this,this.options)):s=r[o],s._$AI(a),o++;o<r.length&&(this._$AR(s&&s._$AB.nextSibling,o),r.length=o)}_$AR(t=this._$AA.nextSibling,r){var s;for((s=this._$AP)==null?void 0:s.call(this,!1,!0,r);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class Ht{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,s,o,a){this.type=1,this._$AH=E,this._$AN=void 0,this.element=t,this.name=r,this._$AM=o,this.options=a,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=E}_$AI(t,r=this,s,o){const a=this.strings;let i=!1;if(a===void 0)t=at(this,t,r,0),i=!_t(t)||t!==this._$AH&&t!==ot,i&&(this._$AH=t);else{const n=t;let l,m;for(t=a[0],l=0;l<a.length-1;l++)m=at(this,n[s+l],r,l),m===ot&&(m=this._$AH[l]),i||(i=!_t(m)||m!==this._$AH[l]),m===E?t=E:t!==E&&(t+=(m??"")+a[l+1]),this._$AH[l]=m}i&&!o&&this.j(t)}j(t){t===E?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Cs extends Ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===E?void 0:t}}class Ns extends Ht{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==E)}}class Os extends Ht{constructor(t,r,s,o,a){super(t,r,s,o,a),this.type=5}_$AI(t,r=this){if((t=at(this,t,r,0)??E)===ot)return;const s=this._$AH,o=t===E&&s!==E||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,a=t!==E&&(s===E||o);o&&this.element.removeEventListener(this.name,this,s),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}}class Rs{constructor(t,r,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){at(this,t)}}const Pe=Tt.litHtmlPolyfillSupport;Pe==null||Pe(wt,At),(Tt.litHtmlVersions??(Tt.litHtmlVersions=[])).push("3.3.0");const zs=(e,t,r)=>{const s=(r==null?void 0:r.renderBefore)??t;let o=s._$litPart$;if(o===void 0){const a=(r==null?void 0:r.renderBefore)??null;s._$litPart$=o=new At(t.insertBefore(xt(),a),a,void 0,r??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Et=globalThis;let mt=class extends Z{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=zs(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return ot}};var Ue;mt._$litElement$=!0,mt.finalized=!0,(Ue=Et.litElementHydrateSupport)==null||Ue.call(Et,{LitElement:mt});const Te=Et.litElementPolyfillSupport;Te==null||Te({LitElement:mt});(Et.litElementVersions??(Et.litElementVersions=[])).push("4.2.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const js={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:oe},Ps=(e=js,t,r)=>{const{kind:s,metadata:o}=r;let a=globalThis.litPropertyMetadata.get(o);if(a===void 0&&globalThis.litPropertyMetadata.set(o,a=new Map),s==="setter"&&((e=Object.create(e)).wrapped=!0),a.set(r.name,e),s==="accessor"){const{name:i}=r;return{set(n){const l=t.get.call(this);t.set.call(this,n),this.requestUpdate(i,l,e)},init(n){return n!==void 0&&this.C(i,void 0,e,n),n}}}if(s==="setter"){const{name:i}=r;return function(n){const l=this[i];t.call(this,n),this.requestUpdate(i,l,e)}}throw Error("Unsupported decorator location: "+s)};function D(e){return(t,r)=>typeof r=="object"?Ps(e,t,r):((s,o,a)=>{const i=o.hasOwnProperty(a);return o.constructor.createProperty(a,s),i?Object.getOwnPropertyDescriptor(o,a):void 0})(e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Wt(e){return D({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Us=(e,t,r)=>(r.configurable=!0,r.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,r),r);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Me(e,t){return(r,s,o)=>{const a=i=>{var n;return((n=i.renderRoot)==null?void 0:n.querySelector(e))??null};return Us(r,s,{get(){return a(this)}})}}const Ts={brightness:100,contrast:100,saturate:100,grayscale:0,opacity:100,sepia:0,hueRotate:0,blur:0,color:void 0},Be={brightness:{defaultValue:100,min:0,max:200},contrast:{defaultValue:100,min:0,max:200},saturate:{defaultValue:100,min:0,max:300},grayscale:{defaultValue:0,min:0,max:1},opacity:{defaultValue:100,min:0,max:100},sepia:{defaultValue:0,min:0,max:100},hueRotate:{defaultValue:0,min:0,max:360},blur:{defaultValue:0,min:0,max:10},color:{defaultValue:void 0}},Xt={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",webp:"image/webp"},ct=new class{constructor(){this.canvas=null}applyImageFilters(e,t,r,s=Ts){e&&t&&r&&(this.canvas=r,e.clearRect(0,0,r.width,r.height),e.filter=`
          brightness(${s.brightness}%) 
          contrast(${s.contrast}%) 
          grayscale(${s.grayscale}) 
          saturate(${s.saturate}%) 
          sepia(${s.sepia}) 
          hue-rotate(${100*parseFloat(s.hueRotate)}deg)
          blur(${s.blur}px)
          opacity(${s.opacity}%) 
        `.trim(),e.drawImage(t,0,0,r.width,r.height),s.color&&(e.globalCompositeOperation="source-atop",e.fillStyle=s.color,e.fillRect(0,0,r.width,r.height),e.globalCompositeOperation="source-over"))}toBlob(e="png",t=1){const r=Xt[e];if(!r)throw new Error(`Unsupported format: ${e}`);return new Promise((s,o)=>{this.canvas.toBlob(a=>{a?s(a):o(new Error("Failed to create blob"))},r,t)})}toPng(e=1){return this.toBlob("png",e)}toJpeg(e=1){return this.toBlob("jpeg",e)}toJpg(e=1){return this.toBlob("jpg",e)}toBmp(e=1){return this.toBlob("bmp",e)}toWebp(e=1){return this.toBlob("webp",e)}toDataURL(e="png",t=1){const r=Xt[e];if(!r)throw new Error(`Unsupported format: ${e}`);return this.canvas.toDataURL(r,t)}downloadImage(e="png",t=1){const r=this.toDataURL(e,t),s=document.createElement("a");s.href=r,s.download="image",s.click()}download(e="png",t=1){this.downloadImage(e,t)}};var Ms=vs`
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
`;class k extends mt{constructor(){super(...arguments),this.src="",this.controls=void 0,this.defaultState=Be,this.format="png",this.mimeTypes=Xt}connectedCallback(){super.connectedCallback(),this.defaultState=Object.entries(Be).reduce((t,[r,s])=>{var o,a;return t[r]={defaultValue:((a=(o=this.controls)==null?void 0:o[r])==null?void 0:a.value)||s.defaultValue,min:s==null?void 0:s.min,max:s==null?void 0:s.max},t},{})}showActions(){if(this.src)return U`<div class="actions ${this.showDownload?"":"hide-download"}">
      <span class="divider"></span>
      ${this.showDownload?U`<button @click=${this.download} title="Download">
            ${U`<span class="icon">⬇️</span>`}
          </button>`:""}
      <button @click=${this.reset} title="Reset">${U`<span class="icon">🔄</span>`}</button>
    </div>`}render(){return U`
      ${this.showUpload?U`<div class="upload">
            <label>Select Image:</label>
            <input type="file" accept="image/*" @change=${this.onFileChange} />
          </div>`:""}
      <canvas></canvas>
      <img src=${this.src} crossorigin="anonymous" @load=${this.draw} style="display:none;" />

      <div class="toolbar">
        ${this.showActions()}
        ${Object.entries(this.controls||{}).map(([t,r])=>this.inputControl(t,r))}
      </div>
    `}inputControl(t,r){if(this.src)return t==="color"?U`<div class="control">
        <label>${r.label}</label>
        <input
          name=${t}
          type="color"
          value="${r.value||this.defaultState[t].defaultValue}"
          @input=${s=>this.updateValue(t,s.target.value)}
        />
      </div>`:U`<div class="control">
      <label>${r.label}</label>
      <input
        name=${t}
        type="range"
        min="${this.defaultState[t].min}"
        max="${this.defaultState[t].max}"
        step="0.1"
        value="${r.value||this.defaultState[t].defaultValue}"
        @input=${s=>this.updateValue(t,s.target.value)}
      />
    </div>`}updateValue(t,r){this.controls[t].value=r,this.draw(),this.onControlChange(`${t}Changed`)}draw(){var t,r,s,o,a,i,n,l,m,u,c,$,b,_,P,O,A,z;const R=this.canvas.getContext("2d"),J=this.imgEl;if(!R||!J)return;const It=this.width||J.naturalWidth,Lt=this.height||J.naturalHeight;this.canvas.width=It,this.canvas.height=Lt,ct.applyImageFilters(R,J,this.canvas,{brightness:((r=(t=this.controls)==null?void 0:t.brightness)==null?void 0:r.value)||this.defaultState.brightness.defaultValue,contrast:((o=(s=this.controls)==null?void 0:s.contrast)==null?void 0:o.value)||this.defaultState.contrast.defaultValue,saturate:((i=(a=this.controls)==null?void 0:a.saturate)==null?void 0:i.value)||this.defaultState.saturate.defaultValue,grayscale:((l=(n=this.controls)==null?void 0:n.grayscale)==null?void 0:l.value)||this.defaultState.grayscale.defaultValue,opacity:((u=(m=this.controls)==null?void 0:m.opacity)==null?void 0:u.value)||this.defaultState.opacity.defaultValue,sepia:(($=(c=this.controls)==null?void 0:c.sepia)==null?void 0:$.value)||this.defaultState.sepia.defaultValue,hueRotate:((_=(b=this.controls)==null?void 0:b.hueRotate)==null?void 0:_.value)||this.defaultState.hueRotate.defaultValue,blur:((O=(P=this.controls)==null?void 0:P.blur)==null?void 0:O.value)||this.defaultState.blur.defaultValue,color:((z=(A=this.controls)==null?void 0:A.color)==null?void 0:z.value)||this.defaultState.color.defaultValue})}download(t){t.preventDefault(),ct.download(this.format,1)}onFileChange(t){var r;const s=t.target,o=(r=s.files)==null?void 0:r[0];o&&(this.src=URL.createObjectURL(o))}reset(){this.controls=Object.entries(this.controls||{}).reduce((t,[r,s])=>{var o;const a=this.renderRoot.querySelector(`input[name="${r}"]`);return a&&s.value!==this.defaultState[r].defaultValue&&(a.value=(o=this.defaultState[r])==null?void 0:o.defaultValue),t[r]={...s,value:this.defaultState[r].defaultValue},t},{}),this.draw(),this.onControlChange("image-reset")}onControlChange(t){const r=new CustomEvent("onControlChange",{detail:{toDataURL:(s="png",o=1)=>ct.toDataURL(s,o),toBlob:(s="png",o=1)=>ct.toBlob(s,o),download:(s="png",o=1)=>ct.download(s,o),metadata:{canvas:this.canvas,controls:this.controls,eventType:t}},bubbles:!0,composed:!0});this.dispatchEvent(r)}}k.styles=Ms,C([D({type:String}),N("design:type",Object)],k.prototype,"src",void 0),C([D({type:Object}),N("design:type",Object)],k.prototype,"controls",void 0),C([D({type:Number}),N("design:type",Number)],k.prototype,"width",void 0),C([D({type:Number}),N("design:type",Number)],k.prototype,"height",void 0),C([D({type:Boolean}),N("design:type",Boolean)],k.prototype,"showUpload",void 0),C([D({type:Boolean}),N("design:type",Boolean)],k.prototype,"showDownload",void 0),C([Wt(),N("design:type",Object)],k.prototype,"defaultState",void 0),C([Wt(),N("design:type",String)],k.prototype,"format",void 0),C([Me("canvas"),N("design:type",HTMLCanvasElement)],k.prototype,"canvas",void 0),C([Me("img"),N("design:type",HTMLImageElement)],k.prototype,"imgEl",void 0),C([Wt(),N("design:type",Object)],k.prototype,"mimeTypes",void 0),customElements.get("craftily-image-editor")||customElements.define("craftily-image-editor",k);const Bs=({onImageEdit:e,initialImage:t,controls:r,showUpload:s,showDownload:o})=>{const a=f.useRef(null);return f.useEffect(()=>{const i=a.current;if(i){const n=l=>{const m=l;e==null||e(m.detail)};return i.addEventListener("image-edited",n),()=>{i.removeEventListener("image-edited",n)}}},[t,e]),v.createElement("craftily-image-editor",{ref:a,src:t||"",controls:r,showUpload:s,showDownload:o})};Bs.displayName="ImageEditor";let j=class extends y{constructor(){super(...arguments),this.value="",this.placeholder="",this.type="text",this.disabled=!1,this.name="",this.error="",this.success=!1}handleInput(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.requestUpdate()}handleChange(e){const t=e.target;this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})),this.requestUpdate()}handleWrapperClick(e){var t;if(this.disabled)return;const r=(t=this.shadowRoot)==null?void 0:t.querySelector("input");r&&r.focus()}render(){["input",this.error?"error":"",this.success?"success":""].filter(Boolean).join(" ");const e=["input-wrapper",this.error?"error":"",this.success?"success":"",this.disabled?"disabled":""].filter(Boolean).join(" ");return g`
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
        ${this.error?g`<div class="error-message">${this.error}</div>`:""}
      </div>
    `}};j.styles=x`
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
  `,d([p({type:String}),h("design:type",Object)],j.prototype,"value",void 0),d([p({type:String}),h("design:type",Object)],j.prototype,"placeholder",void 0),d([p({type:String}),h("design:type",Object)],j.prototype,"type",void 0),d([p({type:Boolean}),h("design:type",Object)],j.prototype,"disabled",void 0),d([p({type:String}),h("design:type",Object)],j.prototype,"name",void 0),d([p({type:String}),h("design:type",Object)],j.prototype,"error",void 0),d([p({type:Boolean}),h("design:type",Object)],j.prototype,"success",void 0),customElements.get("craftily-input")||customElements.define("craftily-input",j);const Ar=f.forwardRef((e,t)=>{const{value:r,placeholder:s,type:o="text",disabled:a,name:i,error:n,success:l,className:m,prefix:u,suffix:c,onInput:$,onChange:b,children:_,...P}=e,O=f.useCallback(R=>{$&&R instanceof CustomEvent&&$(R)},[$]),A=f.useCallback(R=>{b&&R instanceof CustomEvent&&b(R)},[b]),z=[];return u&&z.push(v.createElement("div",{key:"prefix",slot:"prefix"},u)),c&&z.push(v.createElement("div",{key:"suffix",slot:"suffix"},c)),_&&z.push(_),v.createElement("craftily-input",{ref:t,value:r,placeholder:s,type:o,disabled:a,name:i,error:n,success:l,class:m,onInput:O,onChange:A,...P},z)});Ar.displayName="Input";let Ct=class extends y{constructor(){super(...arguments),this.open=!1,this.title=""}updated(e){e.has("open")&&(this.open?document.body.style.overflow="hidden":document.body.style.overflow="")}handleClose(){this.open=!1,this.dispatchEvent(new CustomEvent("close",{composed:!0,bubbles:!0}))}handleBackdropClick(e){e.target===e.currentTarget&&this.handleClose(),e.stopPropagation()}render(){return g`
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
    `}};Ct.styles=x`
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
  `,d([p({type:Boolean,reflect:!0}),h("design:type",Object)],Ct.prototype,"open",void 0),d([p({type:String}),h("design:type",Object)],Ct.prototype,"title",void 0),customElements.get("craftily-modal")||customElements.define("craftily-modal",Ct);function Zt(e,t=[]){return f.useCallback(r=>{e==null||e(r)},[e,...t])}function Sr(e,t,r){const[s,o]=f.useState(t),a=e!==void 0,i=a?e:s,n=f.useCallback(l=>{a||o(l),r==null||r(l)},[a,r]);return[i,n]}const Cr=f.forwardRef((e,t)=>{const{open:r,defaultOpen:s=!1,title:o,closeOnBackdrop:a=!0,hideCloseButton:i=!1,closeButtonLabel:n="×",className:l,children:m,footer:u,onClose:c,...$}=e,[b,_]=Sr(r,s,A=>{A||c==null||c()}),P=Zt(A=>{A.target.classList.contains("modal")&&!a||(_(!1),c==null||c())});$t(l,{"modal-open":b,"modal-hide-close":i});const O={"data-close-on-backdrop":a,"data-hide-close-button":i,"data-close-button-label":n};return v.createElement("craftily-modal",{ref:t,open:b,title:o,class:$t("craftily-modal",l),onClose:P,...O,...$},[m,u&&v.createElement("div",{key:"footer",slot:"footer"},u)].filter(Boolean))});Cr.displayName="Modal";let G=class extends y{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.name="",this.value=""}handleChange(e){const t=e.target;this.checked=t.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked,value:this.value},bubbles:!0,composed:!0}))}render(){return g`
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
    `}};G.styles=x`
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
  `,d([p({type:Boolean,reflect:!0}),h("design:type",Object)],G.prototype,"checked",void 0),d([p({type:Boolean,reflect:!0}),h("design:type",Object)],G.prototype,"disabled",void 0),d([p({type:String}),h("design:type",Object)],G.prototype,"name",void 0),d([p({type:String}),h("design:type",Object)],G.prototype,"value",void 0);class dt extends y{constructor(){super(...arguments),this.name="",this.value="",this.horizontal=!1}updateRadioStates(){this.querySelectorAll("craftily-radio").forEach(t=>{t.checked=t.value===this.value})}handleRadioChange(t){const r=t.target;r.tagName.toLowerCase()==="craftily-radio"&&(this.value=r.value,this.updateRadioStates(),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))}updated(t){t.has("value")&&this.updateRadioStates()}render(){return g`
      <div class="radio-group" @change=${this.handleRadioChange}>
        <slot></slot>
      </div>
    `}}dt.styles=x`
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
  `,d([p({type:String}),h("design:type",Object)],dt.prototype,"name",void 0),d([p({type:String}),h("design:type",Object)],dt.prototype,"value",void 0),d([p({type:Boolean,reflect:!0}),h("design:type",Object)],dt.prototype,"horizontal",void 0),customElements.get("craftily-radio")||customElements.define("craftily-radio",G),customElements.get("craftily-radio-group")||customElements.define("craftily-radio-group",dt);const Nr=f.forwardRef((e,t)=>{const{checked:r,disabled:s,name:o,value:a,className:i,children:n,onChange:l,...m}=e,u=f.useCallback(c=>{l&&c instanceof CustomEvent&&l(c)},[l]);return v.createElement("craftily-radio",{ref:t,checked:r,disabled:s,name:o,value:a,class:i,onChange:u,...m},n)}),Or=f.forwardRef((e,t)=>{const{name:r,value:s,defaultValue:o,horizontal:a,className:i,children:n,onChange:l,...m}=e,[u,c]=v.useState(o||s);v.useEffect(()=>{s!==void 0&&c(s)},[s]);const $=f.useCallback(b=>{if(b instanceof CustomEvent){const _=b.detail.value;s===void 0&&c(_),l&&l(b)}},[l,s]);return v.createElement("craftily-radio-group",{ref:t,name:r,value:u,horizontal:a,class:i,onChange:$,...m},n)});Nr.displayName="Radio";Or.displayName="RadioGroup";class T extends y{constructor(){super(...arguments),this.value="",this.placeholder="",this.disabled=!1,this.name="",this.error="",this.options=[]}handleChange(t){const r=t.target;this.value=r.value,this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}render(){return g`
      <div>
        <select
          class="select"
          .value=${this.value}
          ?disabled=${this.disabled}
          .name=${this.name}
          @change=${this.handleChange}
        >
          <slot></slot>
          ${this.placeholder?g`<option value="" disabled selected>${this.placeholder}</option>`:""}
          ${this.options.map(t=>g` <option value=${t.value}>${t.label}</option> `)}
          <slot></slot>
        </select>
        ${this.error?g`<div class="error-message">${this.error}</div>`:""}
      </div>
    `}}T.styles=x`
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
  `,d([p({type:String}),h("design:type",Object)],T.prototype,"value",void 0),d([p({type:String}),h("design:type",Object)],T.prototype,"placeholder",void 0),d([p({type:Boolean}),h("design:type",Object)],T.prototype,"disabled",void 0),d([p({type:String}),h("design:type",Object)],T.prototype,"name",void 0),d([p({type:String}),h("design:type",Object)],T.prototype,"error",void 0),d([p({type:Array}),h("design:type",Array)],T.prototype,"options",void 0);let He=class extends y{constructor(){super(...arguments),this.value=""}render(){return g`
      <option value=${this.value}>
        <slot></slot>
      </option>
    `}};d([p({type:String}),h("design:type",Object)],He.prototype,"value",void 0),customElements.get("craftily-select")||customElements.define("craftily-select",T),customElements.get("craftily-option")||customElements.define("craftily-option",He);const Rr=f.forwardRef((e,t)=>{const{value:r,defaultValue:s="",multiple:o=!1,loading:a=!1,loadingText:i="",placeholder:n="",disabled:l=!1,name:m="",error:u="",options:c=[],className:$,children:b,onChange:_,...P}=e,[O,A]=Sr(r,s||(o?[]:""),S=>{_==null||_({target:{value:S}})}),z=Zt(S=>{S.detail&&typeof S.detail.value<"u"&&(A(S.detail.value),_==null||_(S.detail.value))}),R=Zt(()=>{A(o?[]:"")}),J=$t($,{"select-loading":a,"select-disabled":l,"select-error":!!u,"select-multiple":o}),It={ref:t,value:Array.isArray(O)?O.join(","):O||"",placeholder:n,"data-disabled":!!(l||a),name:m,error:u,options:c,class:J||"","data-loading":!!a,"data-loading-text":i,"data-multiple":!!o,onChange:z,onClear:R,...P},Lt=()=>a?[v.createElement("craftily-spinner",{key:"spinner",size:"sm"}),i&&v.createElement("span",{key:"text"},i)].filter(Boolean):b||c.map(S=>v.createElement("option",{key:S.value,value:S.value,disabled:S.disabled},S.label));return v.createElement("craftily-select",It,Lt())}),zr=f.forwardRef((e,t)=>{const{value:r,disabled:s=!1,children:o,className:a,...i}=e,n=$t(a,{"option-disabled":s});return v.createElement("craftily-option",{ref:t,value:r||"","data-disabled":!!s,class:n||"",...i},o)});Rr.displayName="Select";zr.displayName="Option";class ht extends y{constructor(){super(...arguments),this.size="md",this.color="",this.label=""}render(){const t=this.color?`--spinner-color: ${this.color};`:"";return g`
      <div class="spinner-container">
        <div class="spinner" style="${t}"></div>
        ${this.label?g`<span class="spinner-text">${this.label}</span>`:""}
      </div>
    `}}ht.styles=x`
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
  `,d([p({type:String,reflect:!0}),h("design:type",String)],ht.prototype,"size",void 0),d([p({type:String}),h("design:type",Object)],ht.prototype,"color",void 0),d([p({type:String}),h("design:type",Object)],ht.prototype,"label",void 0),customElements.get("craftily-spinner")||customElements.define("craftily-spinner",ht);const jr=f.forwardRef((e,t)=>{const{size:r="md",color:s,label:o,className:a,...i}=e;return v.createElement("craftily-spinner",{ref:t,size:r,color:s,label:o,class:a,...i})});jr.displayName="Spinner";class pt extends y{constructor(){super(...arguments),this.position="top",this.content="",this.trigger="hover"}render(){return g`
      <div class="tooltip-container" tabindex="${this.trigger==="focus"?"0":"-1"}">
        <slot></slot>
        <div class="tooltip-text">
          ${this.content?this.content:g`<slot name="content"></slot>`}
        </div>
      </div>
    `}}pt.styles=x`
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
  `,d([p({type:String,reflect:!0}),h("design:type",String)],pt.prototype,"position",void 0),d([p({type:String}),h("design:type",Object)],pt.prototype,"content",void 0),d([p({type:String,reflect:!0}),h("design:type",String)],pt.prototype,"trigger",void 0),customElements.get("craftily-tooltip")||customElements.define("craftily-tooltip",pt);const Pr=f.forwardRef((e,t)=>{const{className:r,children:s,...o}=e;return v.createElement("craftily-tooltip-trigger",{ref:t,class:r,...o},s)});Pr.displayName="TooltipTrigger";const ie=f.forwardRef((e,t)=>{const{content:r,placement:s="top",className:o,children:a,...i}=e;return v.createElement("craftily-tooltip",{ref:t,content:r,placement:s,class:o,...i},a)});ie.displayName="Tooltip";const Ys=Object.assign(ie,{Trigger:Pr});class Q extends y{constructor(){super(...arguments),this.value="",this.defaultValue="",this.variant="default",this.size="md",this._value=""}connectedCallback(){super.connectedCallback(),this._value=this.value||this.defaultValue,this.updateTabStates()}updated(t){t.has("value")&&(this._value=this.value,this.updateTabStates())}updateTabStates(){const t=this.querySelectorAll("craftily-tabs-trigger"),r=this.querySelectorAll("craftily-tabs-content");t.forEach(s=>{s.selected=s.value===this._value}),r.forEach(s=>{s.hidden=s.value!==this._value})}handleTabChange(t){this._value=t,this.updateTabStates(),this.dispatchEvent(new CustomEvent("change",{detail:{value:t},bubbles:!0,composed:!0}))}render(){return g`
      <div class="tabs" part="tabs">
        <slot></slot>
      </div>
    `}}Q.styles=x`
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
  `,d([p({type:String}),h("design:type",Object)],Q.prototype,"value",void 0),d([p({type:String}),h("design:type",Object)],Q.prototype,"defaultValue",void 0),d([p({type:String}),h("design:type",Object)],Q.prototype,"variant",void 0),d([p({type:String}),h("design:type",Object)],Q.prototype,"size",void 0);class Ur extends y{render(){return g`
      <div class="tabs-list" part="list">
        <slot></slot>
      </div>
    `}}Ur.styles=x`
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
  `;class Rt extends y{constructor(){super(...arguments),this.value="",this.selected=!1}handleClick(){const t=this.closest("craftily-tabs");t&&t.handleTabChange(this.value)}render(){return g`
      <button class="trigger" role="tab" aria-selected=${this.selected} @click=${this.handleClick}>
        <slot></slot>
      </button>
    `}}Rt.styles=x`
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
  `,d([p({type:String}),h("design:type",Object)],Rt.prototype,"value",void 0),d([p({type:Boolean,reflect:!0}),h("design:type",Object)],Rt.prototype,"selected",void 0);class Ft extends y{constructor(){super(...arguments),this.value=""}render(){return g`
      <div class="content" role="tabpanel">
        <slot></slot>
      </div>
    `}}Ft.styles=x`
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
  `,d([p({type:String}),h("design:type",Object)],Ft.prototype,"value",void 0),customElements.get("craftily-tabs")||customElements.define("craftily-tabs",Q),customElements.get("craftily-tabs-list")||customElements.define("craftily-tabs-list",Ur),customElements.get("craftily-tabs-trigger")||customElements.define("craftily-tabs-trigger",Rt),customElements.get("craftily-tabs-content")||customElements.define("craftily-tabs-content",Ft);const Tr=v.forwardRef((e,t)=>{const{value:r,defaultValue:s,variant:o,size:a,onChange:i,children:n,className:l,...m}=e,u=f.useRef(null);return f.useEffect(()=>{const c=u.current;c&&r!==void 0&&(c.value=r)},[r]),f.useEffect(()=>{const c=u.current;if(!c)return;const $=b=>{b instanceof CustomEvent&&b.detail&&typeof b.detail.value=="string"&&(i==null||i(b.detail.value))};return c.addEventListener("change",$),()=>c.removeEventListener("change",$)},[i]),v.createElement("craftily-tabs",{ref:c=>{u.current=c,typeof t=="function"?t(c):t&&(t.current=c)},value:r,defaultValue:s,variant:o,size:a,class:l,...m},n)}),Hs=v.forwardRef((e,t)=>{const{children:r,className:s,...o}=e,a=f.useRef(null);return v.createElement("craftily-tabs-list",{ref:i=>{a.current=i,typeof t=="function"?t(i):t&&(t.current=i)},class:s,part:"list",...o},r)}),Is=v.forwardRef((e,t)=>{const{value:r,children:s,className:o,...a}=e,i=f.useRef(null);return v.createElement("craftily-tabs-trigger",{ref:n=>{i.current=n,typeof t=="function"?t(n):t&&(t.current=n)},value:r,class:o,part:"trigger",...a},s)}),Ls=v.forwardRef((e,t)=>{const{value:r,children:s,className:o,...a}=e,i=f.useRef(null);return v.createElement("craftily-tabs-content",{ref:n=>{i.current=n,typeof t=="function"?t(n):t&&(t.current=n)},value:r,class:o,part:"content",...a},s)}),Js=Object.assign(Tr,{List:Hs,Trigger:Is,Content:Ls});class ut extends y{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.name=""}handleChange(t){const r=t.target;this.checked=r.checked,this.dispatchEvent(new CustomEvent("change",{detail:{checked:this.checked},bubbles:!0,composed:!0}))}render(){return g`
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
    `}}ut.styles=x`
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
  `,d([p({type:Boolean}),h("design:type",Object)],ut.prototype,"checked",void 0),d([p({type:Boolean}),h("design:type",Object)],ut.prototype,"disabled",void 0),d([p({type:String}),h("design:type",Object)],ut.prototype,"name",void 0),customElements.get("craftily-switch")||customElements.define("craftily-switch",ut);const Vs=v.forwardRef((e,t)=>{const{checked:r,disabled:s,name:o,onChange:a,className:i}=e,n=f.useRef(null),l=f.useCallback(m=>{m instanceof CustomEvent&&m.detail&&typeof m.detail.checked=="boolean"&&(a==null||a(m.detail.checked))},[a]);return f.useEffect(()=>{const m=n.current;if(m)return m.addEventListener("change",l),()=>m.removeEventListener("change",l)},[l]),v.createElement("craftily-switch",{ref:t,checked:r,disabled:s,name:o,class:i,onChange:l},null)});Fe.__docgenInfo={description:"",methods:[],displayName:"Alert"};Ye.__docgenInfo={description:"",methods:[],displayName:"Avatar"};Je.__docgenInfo={description:"",methods:[],displayName:"Badge"};Ke.__docgenInfo={description:"",methods:[],displayName:"Button"};Qe.__docgenInfo={description:"",methods:[],displayName:"is"};tr.__docgenInfo={description:"",methods:[],displayName:"Checkbox"};ee.__docgenInfo={description:"",methods:[],displayName:"Footer"};$r.__docgenInfo={description:"",methods:[],displayName:"ls"};Ar.__docgenInfo={description:"",methods:[],displayName:"Input"};Cr.__docgenInfo={description:"",methods:[],displayName:"Modal"};zr.__docgenInfo={description:"",methods:[],displayName:"Option"};Nr.__docgenInfo={description:"",methods:[],displayName:"Radio"};Or.__docgenInfo={description:"",methods:[],displayName:"RadioGroup"};Rr.__docgenInfo={description:"",methods:[],displayName:"Select"};jr.__docgenInfo={description:"",methods:[],displayName:"Spinner"};Vs.__docgenInfo={description:"",methods:[],displayName:"Mo"};Tr.__docgenInfo={description:"",methods:[],displayName:"Ds"};ie.__docgenInfo={description:"",methods:[],displayName:"Tooltip"};export{Nr as B,Cr as H,jr as I,Fe as K,Rr as L,Or as M,Je as Q,Ar as T,Bs as U,Ye as Z,Vs as a,Js as b,Fs as c,Ys as d,Ke as e,qs as h,tr as n,Ws as x};
