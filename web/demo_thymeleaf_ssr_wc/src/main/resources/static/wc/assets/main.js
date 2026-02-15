function i(e,t,r,o){var a=arguments.length,n=a<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,r):o,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")n=Reflect.decorate(e,t,r,o);else for(var p=e.length-1;p>=0;p--)(l=e[p])&&(n=(a<3?l(n):a>3?l(t,r,n):l(t,r))||n);return a>3&&n&&Object.defineProperty(t,r,n),n}function f(e,t,r,o){if(r==="a"&&!o)throw new TypeError("Private accessor was defined without a getter");if(typeof t=="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return r==="m"?o:r==="a"?o.call(e):o?o.value:t.get(e)}function U(e,t,r,o,a){if(o==="m")throw new TypeError("Private method is not writable");if(o==="a"&&!a)throw new TypeError("Private accessor was defined without a setter");if(typeof t=="function"?e!==t||!a:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return o==="a"?a.call(e,r):a?a.value=r:t.set(e,r),r}const nt=globalThis,_t=nt.ShadowRoot&&(nt.ShadyCSS===void 0||nt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,kt=Symbol(),At=new WeakMap;let Nt=class{constructor(t,r,o){if(this._$cssResult$=!0,o!==kt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=r}get styleSheet(){let t=this.o;const r=this.t;if(_t&&t===void 0){const o=r!==void 0&&r.length===1;o&&(t=At.get(r)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&At.set(r,t))}return t}toString(){return this.cssText}};const sr=e=>new Nt(typeof e=="string"?e:e+"",void 0,kt),R=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((o,a,n)=>o+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[n+1],e[0]);return new Nt(r,e,kt)},cr=(e,t)=>{if(_t)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const o=document.createElement("style"),a=nt.litNonce;a!==void 0&&o.setAttribute("nonce",a),o.textContent=r.cssText,e.appendChild(o)}},Et=_t?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const o of t.cssRules)r+=o.cssText;return sr(r)})(e):e;const{is:dr,defineProperty:pr,getOwnPropertyDescriptor:fr,getOwnPropertyNames:ur,getOwnPropertySymbols:hr,getPrototypeOf:mr}=Object,ut=globalThis,zt=ut.trustedTypes,gr=zt?zt.emptyScript:"",br=ut.reactiveElementPolyfillSupport,G=(e,t)=>e,ct={toAttribute(e,t){switch(t){case Boolean:e=e?gr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},wt=(e,t)=>!dr(e,t),Rt={attribute:!0,type:String,converter:ct,reflect:!1,useDefault:!1,hasChanged:wt};Symbol.metadata??=Symbol("metadata"),ut.litPropertyMetadata??=new WeakMap;let O=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,r=Rt){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(t,r),!r.noAccessor){const o=Symbol(),a=this.getPropertyDescriptor(t,o,r);a!==void 0&&pr(this.prototype,t,a)}}static getPropertyDescriptor(t,r,o){const{get:a,set:n}=fr(this.prototype,t)??{get(){return this[r]},set(l){this[r]=l}};return{get:a,set(l){const p=a?.call(this);n?.call(this,l),this.requestUpdate(t,p,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Rt}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const t=mr(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const r=this.properties,o=[...ur(r),...hr(r)];for(const a of o)this.createProperty(a,r[a])}const t=this[Symbol.metadata];if(t!==null){const r=litPropertyMetadata.get(t);if(r!==void 0)for(const[o,a]of r)this.elementProperties.set(o,a)}this._$Eh=new Map;for(const[r,o]of this.elementProperties){const a=this._$Eu(r,o);a!==void 0&&this._$Eh.set(a,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const r=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const a of o)r.unshift(Et(a))}else t!==void 0&&r.push(Et(t));return r}static _$Eu(t,r){const o=r.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,r=this.constructor.elementProperties;for(const o of r.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cr(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,r,o){this._$AK(t,o)}_$ET(t,r){const o=this.constructor.elementProperties.get(t),a=this.constructor._$Eu(t,o);if(a!==void 0&&o.reflect===!0){const n=(o.converter?.toAttribute!==void 0?o.converter:ct).toAttribute(r,o.type);this._$Em=t,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(t,r){const o=this.constructor,a=o._$Eh.get(t);if(a!==void 0&&this._$Em!==a){const n=o.getPropertyOptions(a),l=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:ct;this._$Em=a;const p=l.fromAttribute(r,n.type);this[a]=p??this._$Ej?.get(a)??p,this._$Em=null}}requestUpdate(t,r,o,a=!1,n){if(t!==void 0){const l=this.constructor;if(a===!1&&(n=this[t]),o??=l.getPropertyOptions(t),!((o.hasChanged??wt)(n,r)||o.useDefault&&o.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(l._$Eu(t,o))))return;this.C(t,r,o)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,r,{useDefault:o,reflect:a,wrapped:n},l){o&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,l??r??this[t]),n!==!0||l!==void 0)||(this._$AL.has(t)||(this.hasUpdated||o||(r=void 0),this._$AL.set(t,r)),a===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[a,n]of this._$Ep)this[a]=n;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,n]of o){const{wrapped:l}=n,p=this[a];l!==!0||this._$AL.has(a)||p===void 0||this.C(a,void 0,n,p)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),this._$EO?.forEach(o=>o.hostUpdate?.()),this.update(r)):this._$EM()}catch(o){throw t=!1,this._$EM(),o}t&&this._$AE(r)}willUpdate(t){}_$AE(t){this._$EO?.forEach(r=>r.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(r=>this._$ET(r,this[r])),this._$EM()}updated(t){}firstUpdated(t){}};O.elementStyles=[],O.shadowRootOptions={mode:"open"},O[G("elementProperties")]=new Map,O[G("finalized")]=new Map,br?.({ReactiveElement:O}),(ut.reactiveElementVersions??=[]).push("2.1.2");const $t=globalThis,Tt=e=>e,dt=$t.trustedTypes,Wt=dt?dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ut="$lit$",x=`lit$${Math.random().toFixed(9).slice(2)}$`,jt="?"+x,vr=`<${jt}>`,F=document,J=()=>F.createComment(""),Q=e=>e===null||typeof e!="object"&&typeof e!="function",St=Array.isArray,Cr=e=>St(e)||typeof e?.[Symbol.iterator]=="function",mt=`[ 	
\f\r]`,Y=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Lt=/-->/g,Mt=/>/g,T=RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),It=/'/g,Ft=/"/g,Vt=/^(?:script|style|textarea|title)$/i,yr=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),k=yr(1),E=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),Ht=new WeakMap,L=F.createTreeWalker(F,129);function qt(e,t){if(!St(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Wt!==void 0?Wt.createHTML(t):t}const Br=(e,t)=>{const r=e.length-1,o=[];let a,n=t===2?"<svg>":t===3?"<math>":"",l=Y;for(let p=0;p<r;p++){const d=e[p];let g,m,u=-1,y=0;for(;y<d.length&&(l.lastIndex=y,m=l.exec(d),m!==null);)y=l.lastIndex,l===Y?m[1]==="!--"?l=Lt:m[1]!==void 0?l=Mt:m[2]!==void 0?(Vt.test(m[2])&&(a=RegExp("</"+m[2],"g")),l=T):m[3]!==void 0&&(l=T):l===T?m[0]===">"?(l=a??Y,u=-1):m[1]===void 0?u=-2:(u=l.lastIndex-m[2].length,g=m[1],l=m[3]===void 0?T:m[3]==='"'?Ft:It):l===Ft||l===It?l=T:l===Lt||l===Mt?l=Y:(l=T,a=void 0);const v=l===T&&e[p+1].startsWith("/>")?" ":"";n+=l===Y?d+vr:u>=0?(o.push(g),d.slice(0,u)+Ut+d.slice(u)+x+v):d+x+(u===-2?p:v)}return[qt(e,n+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),o]};class tt{constructor({strings:t,_$litType$:r},o){let a;this.parts=[];let n=0,l=0;const p=t.length-1,d=this.parts,[g,m]=Br(t,r);if(this.el=tt.createElement(g,o),L.currentNode=this.el.content,r===2||r===3){const u=this.el.content.firstChild;u.replaceWith(...u.childNodes)}for(;(a=L.nextNode())!==null&&d.length<p;){if(a.nodeType===1){if(a.hasAttributes())for(const u of a.getAttributeNames())if(u.endsWith(Ut)){const y=m[l++],v=a.getAttribute(u).split(x),H=/([.?@])?(.*)/.exec(y);d.push({type:1,index:n,name:H[2],strings:v,ctor:H[1]==="."?kr:H[1]==="?"?wr:H[1]==="@"?$r:ht}),a.removeAttribute(u)}else u.startsWith(x)&&(d.push({type:6,index:n}),a.removeAttribute(u));if(Vt.test(a.tagName)){const u=a.textContent.split(x),y=u.length-1;if(y>0){a.textContent=dt?dt.emptyScript:"";for(let v=0;v<y;v++)a.append(u[v],J()),L.nextNode(),d.push({type:2,index:++n});a.append(u[y],J())}}}else if(a.nodeType===8)if(a.data===jt)d.push({type:2,index:n});else{let u=-1;for(;(u=a.data.indexOf(x,u+1))!==-1;)d.push({type:7,index:n}),u+=x.length-1}n++}}static createElement(t,r){const o=F.createElement("template");return o.innerHTML=t,o}}function j(e,t,r=e,o){if(t===E)return t;let a=o!==void 0?r._$Co?.[o]:r._$Cl;const n=Q(t)?void 0:t._$litDirective$;return a?.constructor!==n&&(a?._$AO?.(!1),n===void 0?a=void 0:(a=new n(e),a._$AT(e,r,o)),o!==void 0?(r._$Co??=[])[o]=a:r._$Cl=a),a!==void 0&&(t=j(e,a._$AS(e,t.values),a,o)),t}class _r{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:o}=this._$AD,a=(t?.creationScope??F).importNode(r,!0);L.currentNode=a;let n=L.nextNode(),l=0,p=0,d=o[0];for(;d!==void 0;){if(l===d.index){let g;d.type===2?g=new ot(n,n.nextSibling,this,t):d.type===1?g=new d.ctor(n,d.name,d.strings,this,t):d.type===6&&(g=new Sr(n,this,t)),this._$AV.push(g),d=o[++p]}l!==d?.index&&(n=L.nextNode(),l++)}return L.currentNode=F,a}p(t){let r=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,r),r+=o.strings.length-2):o._$AI(t[r])),r++}}class ot{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,r,o,a){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=o,this.options=a,this._$Cv=a?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&t?.nodeType===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=j(this,t,r),Q(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==E&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Cr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==C&&Q(this._$AH)?this._$AA.nextSibling.data=t:this.T(F.createTextNode(t)),this._$AH=t}$(t){const{values:r,_$litType$:o}=t,a=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=tt.createElement(qt(o.h,o.h[0]),this.options)),o);if(this._$AH?._$AD===a)this._$AH.p(r);else{const n=new _r(a,this),l=n.u(this.options);n.p(r),this.T(l),this._$AH=n}}_$AC(t){let r=Ht.get(t.strings);return r===void 0&&Ht.set(t.strings,r=new tt(t)),r}k(t){St(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let o,a=0;for(const n of t)a===r.length?r.push(o=new ot(this.O(J()),this.O(J()),this,this.options)):o=r[a],o._$AI(n),a++;a<r.length&&(this._$AR(o&&o._$AB.nextSibling,a),r.length=a)}_$AR(t=this._$AA.nextSibling,r){for(this._$AP?.(!1,!0,r);t!==this._$AB;){const o=Tt(t).nextSibling;Tt(t).remove(),t=o}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class ht{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,o,a,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=r,this._$AM=a,this.options=n,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=C}_$AI(t,r=this,o,a){const n=this.strings;let l=!1;if(n===void 0)t=j(this,t,r,0),l=!Q(t)||t!==this._$AH&&t!==E,l&&(this._$AH=t);else{const p=t;let d,g;for(t=n[0],d=0;d<n.length-1;d++)g=j(this,p[o+d],r,d),g===E&&(g=this._$AH[d]),l||=!Q(g)||g!==this._$AH[d],g===C?t=C:t!==C&&(t+=(g??"")+n[d+1]),this._$AH[d]=g}l&&!a&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class kr extends ht{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}}class wr extends ht{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==C)}}class $r extends ht{constructor(t,r,o,a,n){super(t,r,o,a,n),this.type=5}_$AI(t,r=this){if((t=j(this,t,r,0)??C)===E)return;const o=this._$AH,a=t===C&&o!==C||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,n=t!==C&&(o===C||a);a&&this.element.removeEventListener(this.name,this,o),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Sr{constructor(t,r,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){j(this,t)}}const xr=$t.litHtmlPolyfillSupport;xr?.(tt,ot),($t.litHtmlVersions??=[]).push("3.3.2");const Pr=(e,t,r)=>{const o=r?.renderBefore??t;let a=o._$litPart$;if(a===void 0){const n=r?.renderBefore??null;o._$litPart$=a=new ot(t.insertBefore(J(),n),n,void 0,r??{})}return a._$AI(e),a};const xt=globalThis;let w=class extends O{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pr(r,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return E}};w._$litElement$=!0,w.finalized=!0,xt.litElementHydrateSupport?.({LitElement:w});const Ar=xt.litElementPolyfillSupport;Ar?.({LitElement:w});(xt.litElementVersions??=[]).push("4.2.2");const et=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};const Er={attribute:!0,type:String,converter:ct,reflect:!1,hasChanged:wt},zr=(e=Er,t,r)=>{const{kind:o,metadata:a}=r;let n=globalThis.litPropertyMetadata.get(a);if(n===void 0&&globalThis.litPropertyMetadata.set(a,n=new Map),o==="setter"&&((e=Object.create(e)).wrapped=!0),n.set(r.name,e),o==="accessor"){const{name:l}=r;return{set(p){const d=t.get.call(this);t.set.call(this,p),this.requestUpdate(l,d,e,!0,p)},init(p){return p!==void 0&&this.C(l,void 0,e,p),p}}}if(o==="setter"){const{name:l}=r;return function(p){const d=this[l];t.call(this,p),this.requestUpdate(l,d,e,!0,p)}}throw Error("Unsupported decorator location: "+o)};function h(e){return(t,r)=>typeof r=="object"?zr(e,t,r):((o,a,n)=>{const l=a.hasOwnProperty(n);return a.constructor.createProperty(n,o),l?Object.getOwnPropertyDescriptor(a,n):void 0})(e,t,r)}const gt=e=>e??C;const Yt={ATTRIBUTE:1},Gt=e=>(...t)=>({_$litDirective$:e,values:t});let Kt=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,o){this._$Ct=t,this._$AM=r,this._$Ci=o}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}};const K=Gt(class extends Kt{constructor(e){if(super(e),e.type!==Yt.ATTRIBUTE||e.name!=="class"||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(o=>o!=="")));for(const o in t)t[o]&&!this.nt?.has(o)&&this.st.add(o);return this.render(t)}const r=e.element.classList;for(const o of this.st)o in t||(r.remove(o),this.st.delete(o));for(const o in t){const a=!!t[o];a===this.st.has(o)||this.nt?.has(o)||(a?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return E}});var vt,Zt;function Xt(e){return e==="role"||e.startsWith("aria")}const at=new WeakMap;let bt=!1;function c(e,t){if(at.has(e)||at.set(e,new Set),!at.get(e).has(t)){if(!Xt(t))throw new Error("@aria can only be called on ARIAMixin properties");Object.defineProperty(e,t,{enumerable:!0,configurable:!1,get(){return this.attachOrRetrieveInternals()[t]},set(r){const o=this.attachOrRetrieveInternals();o[t]=r,this.host.requestUpdate()}}),at.get(e).add(t)}}function Rr(e){return!(e instanceof HTMLElement)||e.hidden?"":e.getAttribute?.("aria-label")??e.textContent}class s{static getLabels(t){return Array.from(this.instances.get(t)?.internals.labels??[])}static getAriaPosInSet(t){return t.getAttribute("aria-posinset")??this.instances.get(t)?.ariaPosInSet??null}static setAriaPosInSet(t,r){const o=this.instances.get(t);o?o.ariaPosInSet=r!=null?String(r):null:r!=null?t.setAttribute("aria-posinset",String(r)):t.removeAttribute("aria-posinset")}static getAriaSetSize(t){return t.getAttribute("aria-setsize")??this.instances.get(t)?.ariaSetSize??null}static setAriaSetSize(t,r){const o=this.instances.get(t);o?o.ariaSetSize=r!=null?String(r):null:r!=null?t.setAttribute("aria-setsize",String(r)):t.removeAttribute("aria-setsize")}static of(t,r){bt=!0;const o=s.instances.get(t)??new s(t,r);return o.initializeOptions(r),bt=!1,o}get formDisabled(){return this.element?.matches(":disabled")||this._formDisabled}get labels(){return this.internals.labels}get validity(){return this.internals.validity}get computedLabelText(){return this.internals.ariaLabel||Array.from(this.internals.labels).reduce((t,r)=>`${t}${Rr(r)}`,"")}get element(){return this.host instanceof HTMLElement?this.host:this.options?.getHTMLElement?.()}constructor(t,r){if(vt.add(this),this.host=t,this.options=r,this.role=null,this.ariaActivedescendant=null,this.ariaAtomic=null,this.ariaAutoComplete=null,this.ariaBusy=null,this.ariaBrailleLabel=null,this.ariaBrailleRoleDescription=null,this.ariaChecked=null,this.ariaColCount=null,this.ariaColIndex=null,this.ariaColIndexText=null,this.ariaColSpan=null,this.ariaCurrent=null,this.ariaDescription=null,this.ariaDisabled=null,this.ariaExpanded=null,this.ariaHasPopup=null,this.ariaHidden=null,this.ariaInvalid=null,this.ariaKeyShortcuts=null,this.ariaLabel=null,this.ariaLevel=null,this.ariaLive=null,this.ariaModal=null,this.ariaMultiLine=null,this.ariaMultiSelectable=null,this.ariaOrientation=null,this.ariaPlaceholder=null,this.ariaPosInSet=null,this.ariaPressed=null,this.ariaReadOnly=null,this.ariaRelevant=null,this.ariaRequired=null,this.ariaRoleDescription=null,this.ariaRowCount=null,this.ariaRowIndex=null,this.ariaRowIndexText=null,this.ariaRowSpan=null,this.ariaSelected=null,this.ariaSetSize=null,this.ariaSort=null,this.ariaValueMax=null,this.ariaValueMin=null,this.ariaValueNow=null,this.ariaValueText=null,this.ariaActiveDescendantElement=null,this.ariaControlsElements=null,this.ariaDescribedByElements=null,this.ariaDetailsElements=null,this.ariaErrorMessageElements=null,this.ariaFlowToElements=null,this.ariaLabelledByElements=null,this.ariaOwnsElements=null,this._formDisabled=!1,!bt)throw new Error("InternalsController must be constructed with `InternalsController.for()`");if(!this.element)throw new Error("InternalsController must be instantiated with an HTMLElement or a `getHTMLElement` function");this.attachOrRetrieveInternals(),this.initializeOptions(r),s.instances.set(t,this),f(this,vt,"m",Zt).call(this)}attachOrRetrieveInternals(){return this.internals??(this.internals=this.element.attachInternals()),this.internals}initializeOptions(t){var r;this.options??(this.options=t??{});const{getHTMLElement:o,...a}=this.options;(r=this.options).getHTMLElement??(r.getHTMLElement=o);for(const[n,l]of Object.entries(a))Xt(n)&&(this[n]=l)}setFormValue(...t){return this.internals.setFormValue(...t)}setValidity(...t){return this.internals.setValidity(...t)}checkValidity(...t){return this.internals.checkValidity(...t)}reportValidity(...t){return this.internals.reportValidity(...t)}submit(){this.internals.form?.requestSubmit()}reset(){this.internals.form?.reset()}}vt=new WeakSet,Zt=function(){const t=this.element.formDisabledCallback;this.element.formDisabledCallback=r=>{this._formDisabled=r,t?.call(this.host,r)}};s.instances=new WeakMap;s.isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);i([c],s.prototype,"role",void 0);i([c],s.prototype,"ariaActivedescendant",void 0);i([c],s.prototype,"ariaAtomic",void 0);i([c],s.prototype,"ariaAutoComplete",void 0);i([c],s.prototype,"ariaBusy",void 0);i([c],s.prototype,"ariaBrailleLabel",void 0);i([c],s.prototype,"ariaBrailleRoleDescription",void 0);i([c],s.prototype,"ariaChecked",void 0);i([c],s.prototype,"ariaColCount",void 0);i([c],s.prototype,"ariaColIndex",void 0);i([c],s.prototype,"ariaColIndexText",void 0);i([c],s.prototype,"ariaColSpan",void 0);i([c],s.prototype,"ariaCurrent",void 0);i([c],s.prototype,"ariaDescription",void 0);i([c],s.prototype,"ariaDisabled",void 0);i([c],s.prototype,"ariaExpanded",void 0);i([c],s.prototype,"ariaHasPopup",void 0);i([c],s.prototype,"ariaHidden",void 0);i([c],s.prototype,"ariaInvalid",void 0);i([c],s.prototype,"ariaKeyShortcuts",void 0);i([c],s.prototype,"ariaLabel",void 0);i([c],s.prototype,"ariaLevel",void 0);i([c],s.prototype,"ariaLive",void 0);i([c],s.prototype,"ariaModal",void 0);i([c],s.prototype,"ariaMultiLine",void 0);i([c],s.prototype,"ariaMultiSelectable",void 0);i([c],s.prototype,"ariaOrientation",void 0);i([c],s.prototype,"ariaPlaceholder",void 0);i([c],s.prototype,"ariaPosInSet",void 0);i([c],s.prototype,"ariaPressed",void 0);i([c],s.prototype,"ariaReadOnly",void 0);i([c],s.prototype,"ariaRelevant",void 0);i([c],s.prototype,"ariaRequired",void 0);i([c],s.prototype,"ariaRoleDescription",void 0);i([c],s.prototype,"ariaRowCount",void 0);i([c],s.prototype,"ariaRowIndex",void 0);i([c],s.prototype,"ariaRowIndexText",void 0);i([c],s.prototype,"ariaRowSpan",void 0);i([c],s.prototype,"ariaSelected",void 0);i([c],s.prototype,"ariaSetSize",void 0);i([c],s.prototype,"ariaSort",void 0);i([c],s.prototype,"ariaValueMax",void 0);i([c],s.prototype,"ariaValueMin",void 0);i([c],s.prototype,"ariaValueNow",void 0);i([c],s.prototype,"ariaValueText",void 0);i([c],s.prototype,"ariaActiveDescendantElement",void 0);i([c],s.prototype,"ariaControlsElements",void 0);i([c],s.prototype,"ariaDescribedByElements",void 0);i([c],s.prototype,"ariaDetailsElements",void 0);i([c],s.prototype,"ariaErrorMessageElements",void 0);i([c],s.prototype,"ariaFlowToElements",void 0);i([c],s.prototype,"ariaLabelledByElements",void 0);i([c],s.prototype,"ariaOwnsElements",void 0);var it,P,W,M,Z,lt,st,Jt,Qt;function Tr(e){return e.length===1&&typeof e[0]=="object"&&e[0]!==null}function Ot(e){switch(e.nodeType){case Node.TEXT_NODE:return!!e.textContent?.trim();case Node.COMMENT_NODE:return!1;default:return!0}}class Wr{constructor(t,r,o){this.slot=t,this.name=r,this.host=o}get elements(){return this.slot?.assignedElements?.()}get hasContent(){return this.name===q.default?!!this.elements.length||!![...this.host.childNodes].some(t=>t instanceof Element?!t.hasAttribute("slot"):Ot(t)):!!this.slot.assignedNodes().some(Ot)}}class q{constructor(t,...r){it.add(this),this.host=t,W.set(this,new Map),M.set(this,[]),Z.set(this,{}),lt.set(this,async()=>{const{host:o}=this;await o.updateComplete;const a=f(this,W,"f");for(let n of f(this,M,"f").concat(Object.values(f(this,Z,"f")))){n||(n=P.default);const l=f(this,it,"m",Qt).call(this,n);l&&a.set(n,new Wr(l,n,o))}o.requestUpdate()}),st.set(this,new MutationObserver(f(this,lt,"f"))),t.addController(this),f(this,it,"m",Jt).call(this,...r),f(this,M,"f").length||U(this,M,[null],"f")}async hostConnected(){f(this,st,"f").observe(this.host,{childList:!0}),f(this,W,"f").clear(),await this.host.updateComplete,f(this,lt,"f").call(this),await this.host.updateComplete,this.host.requestUpdate()}hostDisconnected(){f(this,st,"f").disconnect()}getSlotted(...t){return!t.length||t.length===1&&t.at(0)===null?f(this,W,"f").get(P.default)?.elements??[]:t.flatMap(r=>f(this,W,"f").get(r??P.default)?.elements??[])}hasSlotted(...t){const r=Array.from(t,o=>o??P.default);return r.length||r.push(P.default),r.some(o=>{const a=f(this,W,"f").get(o);return a?a.hasContent:!1})}isEmpty(...t){return!this.hasSlotted(...t)}}P=q,W=new WeakMap,M=new WeakMap,Z=new WeakMap,lt=new WeakMap,st=new WeakMap,it=new WeakSet,Jt=function(...t){if(Tr(t)){const[{slots:r,deprecations:o}]=t;U(this,M,r,"f"),U(this,Z,o??{},"f")}else t.length>=1&&(U(this,M,t,"f"),U(this,Z,{},"f"))},Qt=function(t){const r=t===P.default?"slot:not([name])":`slot[name="${t}"]`;return this.host.shadowRoot?.querySelector?.(r)??null};q.default=Symbol("default slot");q.anonymous=P.default;const Lr="modulepreload",Mr=function(e){return"/"+e},Dt={},Ir=function(t,r,o){let a=Promise.resolve();if(r&&r.length>0){let g=function(m){return Promise.all(m.map(u=>Promise.resolve(u).then(y=>({status:"fulfilled",value:y}),y=>({status:"rejected",reason:y}))))};var l=g;document.getElementsByTagName("link");const p=document.querySelector("meta[property=csp-nonce]"),d=p?.nonce||p?.getAttribute("nonce");a=g(r.map(m=>{if(m=Mr(m),m in Dt)return;Dt[m]=!0;const u=m.endsWith(".css"),y=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${m}"]${y}`))return;const v=document.createElement("link");if(v.rel=u?"stylesheet":Lr,u||(v.as="script"),v.crossOrigin="",v.href=m,d&&v.setAttribute("nonce",d),document.head.appendChild(v),u)return new Promise((H,lr)=>{v.addEventListener("load",H),v.addEventListener("error",()=>lr(new Error(`Unable to preload CSS for ${m}`)))})}))}function n(p){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=p,window.dispatchEvent(d),!d.defaultPrevented)throw p}return a.then(p=>{for(const d of p||[])d.status==="rejected"&&n(d.reason);return t().catch(n)})};function Fr(e){return h({...e,state:!0,attribute:!1})}const _=class _{get prefix(){return this.host instanceof HTMLElement?`[${this.host.localName}${this.host.id?`#${this.host.id}`:""}]`:`[${this.host.constructor.name}]`}static debugLog(t=null){try{return t!==null&&(_.logDebug=!!t,localStorage.pfeLog=!!t),localStorage.pfeLog==="true"}catch{return _.logDebug}}static debug(...t){_.debugLog()&&console.debug(...t)}static info(...t){_.debugLog()&&console.info(...t)}static log(...t){_.debugLog()&&console.log(...t)}static warn(...t){console.warn(...t)}static error(...t){console.error([...t].join(" "))}debug(...t){_.debug(this.prefix,...t)}info(...t){_.info(this.prefix,...t)}log(...t){_.log(this.prefix,...t)}warn(...t){_.warn(this.prefix,...t)}error(...t){_.error(this.prefix,...t)}constructor(t){if(this.host=t,_.instances.get(t))return _.instances.get(t);t.addController(this),_.instances.set(t,this)}hostConnected(){this.debug("connected")}};_.instances=new WeakMap;let X=_;var I,rt,Ct,tr,pt,rr;const Hr=R`:host {
  position: relative;
  display:  inline-block;
  line-height:  0;
  height: fit-content !important;
  width: fit-content !important;
}

#container {
  display: grid;
  grid-template: 1fr / 1fr;
  place-content: center;
}

#container.content ::slotted(*) {
  display: none;
}

svg {
  fill: currentcolor;
}

:host([size=sm]) #container { --_size: var(--pf-global--icon--FontSize--sm, 10px); }
:host([size=md]) #container { --_size: var(--pf-global--icon--FontSize--md, 18px); }
:host([size=lg]) #container { --_size: var(--pf-global--icon--FontSize--lg, 24px); }
:host([size=xl]) #container { --_size: var(--pf-global--icon--FontSize--xl, 54px); }

#container, svg {
  /** size of the icon */
  width: var(--pf-icon--size, var(--_size));
  height: var(--pf-icon--size, var(--_size));
  min-width: var(--pf-icon--size, var(--_size));
  min-height: var(--pf-icon--size, var(--_size));
}

`,or=globalThis.requestIdleCallback??globalThis.requestAnimationFrame??(async e=>Promise.resolve().then(e));class Or extends ErrorEvent{constructor(t,r,o){super("error",{message:`Could not load icon "${r}" from set "${t}".`}),this.originalError=o}}let B=class D extends w{constructor(){super(...arguments),I.add(this),this.set="fas",this.icon="",this.size="sm",this.loading="lazy",rt.set(this,!1),Ct.set(this,new X(this))}static addIconSet(t,r){if(typeof t!="string")X.warn(`[${this.name}]: the first argument to addIconSet must be a string.`);else if(typeof r!="function")X.warn(`[${this.name}]: the second argument to addIconSet must be a function.`);else{this.resolvers.set(t,r);for(const o of this.instances)f(o,I,"m",pt).call(o)}}static reset(){this.resolvers.clear(),this.resolve=this.defaultResolve}connectedCallback(){super.connectedCallback(),D.instances.add(this)}willUpdate(t){t.has("icon")&&f(this,I,"m",pt).call(this)}disconnectedCallback(){super.disconnectedCallback(),D.io.unobserve(this),D.instances.delete(this)}render(){const t=this.content??"";return k`
      <div id="container" aria-hidden="true">${t}<!--
         summary: Container for the fallback (i.e. slotted) content
        -->
        <span part="fallback"
          ?hidden=${!!t}><!--
           summary: Slotted content is used as a fallback in case the icon doesn't load
        --><slot></slot>
        </span>
      </div>
    `}async load(){const{set:t,icon:r}=this,o=D.resolvers.get(t)??D.resolve;if(t&&r&&typeof o=="function")try{this.content=await o(t,r),f(this,I,"m",rr).call(this)}catch(a){f(this,Ct,"f").error(a.message),this.dispatchEvent?.(new Or(t,r,a))}}};rt=new WeakMap;Ct=new WeakMap;I=new WeakSet;tr=function(){B.io.observe(this),f(this,rt,"f")&&this.load()};pt=function(){switch(this.loading){case"idle":return void or(()=>this.load());case"lazy":return void f(this,I,"m",tr).call(this);case"eager":return void this.load()}};rr=async function(){await this.updateComplete,this.dispatchEvent?.(new Event("load",{bubbles:!0}))};B.styles=[Hr];B.onIntersect=e=>e.forEach(({isIntersecting:t,target:r})=>{const o=r;U(o,rt,t,"f"),or(()=>{f(o,rt,"f")&&f(o,I,"m",pt).call(o)})});B.defaultResolve=(e,t)=>Ir(()=>import(`@patternfly/icons/${e}/${t}.js`),[]).then(r=>r.default.cloneNode(!0));B.io=new IntersectionObserver(B.onIntersect);B.resolvers=new Map;B.instances=new Set;B.resolve=B.defaultResolve;B.version="4.3.1";i([h()],B.prototype,"set",void 0);i([h({reflect:!0})],B.prototype,"icon",void 0);i([h({reflect:!0})],B.prototype,"size",void 0);i([h()],B.prototype,"loading",void 0);i([Fr()],B.prototype,"content",void 0);B=i([et("pf-icon")],B);const er="important",Dr=" !"+er,Nr=Gt(class extends Kt{constructor(e){if(super(e),e.type!==Yt.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,r)=>{const o=e[r];return o==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${o};`},"")}update(e,[t]){const{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const o of this.ft)t[o]==null&&(this.ft.delete(o),o.includes("-")?r.removeProperty(o):r[o]=null);for(const o in t){const a=t[o];if(a!=null){this.ft.add(o);const n=typeof a=="string"&&a.endsWith(Dr);o.includes("-")||n?r.setProperty(o,n?a.slice(0,-11):a,n?er:""):r[o]=a}}return E}});var ar;const Ur=R`:host {
  display: inline-block;
  width: min-content;
  min-height: 0;
  aspect-ratio: 1 / 1;
}

[hidden] {
  display: none !important;
}

svg {
  overflow: hidden;
  /** Width for spinner */
  width: var(--pf-c-spinner--Width,
    /** Diameter for spinner */
    var(--pf-c-spinner--diameter,
      var(--pf-global--icon--FontSize--xl, 3.375rem)));
  /** Height for spinner */
  height: var(--pf-c-spinner--Height,
    var(--pf-c-spinner--diameter,
      var(--pf-global--icon--FontSize--xl, 3.375rem)));
  animation:
    pf-c-spinner-animation-rotate
    /** Animation duration for spinner */
    calc(var(--pf-c-spinner--AnimationDuration, 1.4s) * 2)
    /** Animation timing function for spinner */
    var(--pf-c-spinner--AnimationTimingFunction, linear) infinite;
}

circle {
  width: 100%;
  height: 100%;
  transform-origin: 50% 50%;
  stroke-linecap: round;
  stroke-dasharray: 283;
  stroke-dashoffset: 280;
  /** Color for spinner */
  stroke: var(--pf-c-spinner--Color, var(--pf-global--primary-color--100, #06c));
  /** Stroke width for spinner */
  stroke-width: var(--pf-c-spinner--stroke-width, 10);
  animation:
    pf-c-spinner-animation-dash
    var(--pf-c-spinner--AnimationDuration, 1.4s)
    /** Path animation timing function for spinner */
    var(--pf-c-spinner__path--AnimationTimingFunction, ease-in-out) infinite;
}

:host([size="sm"]) svg {
  /** Diameter for small spinner */
  --pf-c-spinner--diameter: var(--pf-c-spinner--m-sm--diameter,
    var(--pf-global--icon--FontSize--sm, 0.625rem));
}

:host([size="md"]) svg {
  /** Diameter for medium spinner */
  --pf-c-spinner--diameter: var(--pf-c-spinner--m-md--diameter,
    var(--pf-global--icon--FontSize--md, 1.125rem));
}

:host([size="lg"]) svg {
  /** Diameter for large spinner */
  --pf-c-spinner--diameter: var(--pf-c-spinner--m-lg--diameter,
    var(--pf-global--icon--FontSize--lg, 1.5rem));
}

:host([size="xl"]) svg {
  /** Diameter for extra large spinner */
  --pf-c-spinner--diameter: var(--pf-c-spinner--m-xl--diameter,
    var(--pf-global--icon--FontSize--xl, 3.375rem));
}

@keyframes pf-c-spinner-animation-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes pf-c-spinner-animation-dash {
  0% {
    stroke-dashoffset: 280;
    transform: rotate(0);
  }
  15% {
    /** Path stroke width for spinner */
    stroke-width: calc(var(--pf-c-spinner__path--StrokeWidth, 10) - 4);
  }
  40% {
    stroke-dashoffset: 150;
    stroke-dasharray: 220;
  }
  100% {
    stroke-dashoffset: 280;
    transform: rotate(720deg);
  }
}
`;let V=class extends w{constructor(){super(...arguments),ar.set(this,s.of(this,{role:"progressbar"})),this.size="xl"}render(){return k`
      <svg viewBox="0 0 100 100"
           style="${Nr({"--pf-c-spinner--diameter":this.diameter})}">
        <circle cx="50" cy="50" r="45" fill="none" />
      </svg>
    `}};ar=new WeakMap;V.styles=[Ur];V.version="4.3.1";i([h({reflect:!0})],V.prototype,"size",void 0);i([h({reflect:!0})],V.prototype,"diameter",void 0);V=i([et("pf-spinner")],V);var A,$,yt,Pt,ft,nr;const jr=R`:host {
\t/** PaddingTop for the button */
\t--pf-c-button--PaddingTop: var(--pf-global--spacer--form-element, 0.375rem);
\t/** PaddingRight for the button */
\t--pf-c-button--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** PaddingBottom for the button */
\t--pf-c-button--PaddingBottom: var(--pf-global--spacer--form-element, 0.375rem);
\t/** PaddingLeft for the button */
\t--pf-c-button--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t/** LineHeight for the button */
\t--pf-c-button--LineHeight: var(--pf-global--LineHeight--md, 1.5);
\t/** FontWeight for the button */
\t--pf-c-button--FontWeight: var(--pf-global--FontWeight--normal, 400);
\t/** FontSize for the button */
\t--pf-c-button--FontSize: var(--pf-global--FontSize--md, 1rem);
\t/** BackgroundColor for the button */
\t--pf-c-button--BackgroundColor: transparent;
\t/** BorderRadius for the button */
\t--pf-c-button--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
\t/** BorderRadius for the button after element */
\t--pf-c-button--after--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
\t/** BorderColor for the button after element */
\t--pf-c-button--after--BorderColor: transparent;
\t/** BorderWidth for the button after element */
\t--pf-c-button--after--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** BorderWidth for the button after element on hover */
\t--pf-c-button--hover--after--BorderWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** BorderWidth for the button after element on focus */
\t--pf-c-button--focus--after--BorderWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** BorderWidth for the button after element when active */
\t--pf-c-button--active--after--BorderWidth: var(--pf-global--BorderWidth--md, 2px);
\t/** Color for the button when disabled */
\t--pf-c-button--disabled--Color: var(--pf-global--disabled-color--100, #6a6e73);
\t/** BackgroundColor for the button when disabled */
\t--pf-c-button--disabled--BackgroundColor: var(--pf-global--disabled-color--200, #d2d2d2);
\t/** BorderColor for the button after element when disabled */
\t--pf-c-button--disabled--after--BorderColor: transparent;
\t/** BackgroundColor for the primary button variant */
\t--pf-c-button--m-primary--BackgroundColor: var(--pf-global--primary-color--100, #06c);
\t/** Color for the primary button variant */
\t--pf-c-button--m-primary--Color: var(--pf-global--Color--light-100, #fff);
\t/** BackgroundColor for the primary button variant on hover */
\t--pf-c-button--m-primary--hover--BackgroundColor: var(--pf-global--primary-color--200, #004080);
\t/** Color for the primary button variant on hover */
\t--pf-c-button--m-primary--hover--Color: var(--pf-global--Color--light-100, #fff);
\t/** BackgroundColor for the primary button variant on focus */
\t--pf-c-button--m-primary--focus--BackgroundColor: var(--pf-global--primary-color--200, #004080);
\t/** Color for the primary button variant on focus */
\t--pf-c-button--m-primary--focus--Color: var(--pf-global--Color--light-100, #fff);
\t/** BackgroundColor for the primary button variant when active */
\t--pf-c-button--m-primary--active--BackgroundColor: var(--pf-global--primary-color--200, #004080);
\t/** Color for the primary button variant when active */
\t--pf-c-button--m-primary--active--Color: var(--pf-global--Color--light-100, #fff);
\t/** BackgroundColor for the secondary button variant */
\t--pf-c-button--m-secondary--BackgroundColor: transparent;
\t/** BorderColor for the secondary button variant after element */
\t--pf-c-button--m-secondary--after--BorderColor: var(--pf-global--primary-color--100, #06c);
\t/** Color for the secondary button variant */
\t--pf-c-button--m-secondary--Color: var(--pf-global--primary-color--100, #06c);
\t/** BackgroundColor for the secondary button variant on hover */
\t--pf-c-button--m-secondary--hover--BackgroundColor: transparent;
\t/** BorderColor for the secondary button variant after element on hover */
\t--pf-c-button--m-secondary--hover--after--BorderColor: var(--pf-global--primary-color--100, #06c);
\t/** Color for the secondary button variant on hover */
\t--pf-c-button--m-secondary--hover--Color: var(--pf-global--primary-color--100, #06c);
\t/** BackgroundColor for the secondary button variant on focus */
\t--pf-c-button--m-secondary--focus--BackgroundColor: transparent;
\t/** BorderColor for the secondary button variant after element on focus */
\t--pf-c-button--m-secondary--focus--after--BorderColor: var(--pf-global--primary-color--100, #06c);
\t/** Color for the secondary button variant on focus */
\t--pf-c-button--m-secondary--focus--Color: var(--pf-global--primary-color--100, #06c);
\t/** BackgroundColor for the secondary button variant when active */
\t--pf-c-button--m-secondary--active--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--active--after--BorderColor: var(--pf-global--primary-color--100, #06c);
\t--pf-c-button--m-secondary--active--Color: var(--pf-global--primary-color--100, #06c);
\t--pf-c-button--m-secondary--m-danger--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--m-danger--Color: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-secondary--m-danger--after--BorderColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-secondary--m-danger--hover--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--m-danger--hover--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-secondary--m-danger--hover--after--BorderColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-secondary--m-danger--focus--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--m-danger--focus--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-secondary--m-danger--focus--after--BorderColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-secondary--m-danger--active--BackgroundColor: transparent;
\t--pf-c-button--m-secondary--m-danger--active--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-secondary--m-danger--active--after--BorderColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-tertiary--BackgroundColor: transparent;
\t--pf-c-button--m-tertiary--after--BorderColor: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--hover--BackgroundColor: transparent;
\t--pf-c-button--m-tertiary--hover--after--BorderColor: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--hover--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--focus--BackgroundColor: transparent;
\t--pf-c-button--m-tertiary--focus--after--BorderColor: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--focus--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--active--BackgroundColor: transparent;
\t--pf-c-button--m-tertiary--active--after--BorderColor: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-tertiary--active--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-warning--BackgroundColor: var(--pf-global--warning-color--100, #f0ab00);
\t--pf-c-button--m-warning--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--m-warning--hover--BackgroundColor: var(--pf-global--palette--gold-500, #c58c00);
\t--pf-c-button--m-warning--hover--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--m-warning--focus--BackgroundColor: var(--pf-global--palette--gold-500, #c58c00);
\t--pf-c-button--m-warning--focus--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--m-warning--active--BackgroundColor: var(--pf-global--palette--gold-500, #c58c00);
\t--pf-c-button--m-warning--active--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--m-danger--BackgroundColor: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-danger--Color: var(--pf-global--Color--light-100, #fff);
\t--pf-c-button--m-danger--hover--BackgroundColor: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-danger--hover--Color: var(--pf-global--Color--light-100, #fff);
\t--pf-c-button--m-danger--focus--BackgroundColor: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-danger--focus--Color: var(--pf-global--Color--light-100, #fff);
\t--pf-c-button--m-danger--active--BackgroundColor: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-danger--active--Color: var(--pf-global--Color--light-100, #fff);
\t--pf-c-button--m-link--BackgroundColor: transparent;
\t--pf-c-button--m-link--Color: var(--pf-global--link--Color, #06c);
\t--pf-c-button--m-link--hover--BackgroundColor: transparent;
\t--pf-c-button--m-link--hover--Color: var(--pf-global--link--Color--hover, #004080);
\t--pf-c-button--m-link--focus--BackgroundColor: transparent;
\t--pf-c-button--m-link--focus--Color: var(--pf-global--link--Color--hover, #004080);
\t--pf-c-button--m-link--active--BackgroundColor: transparent;
\t--pf-c-button--m-link--active--Color: var(--pf-global--link--Color--hover, #004080);
\t--pf-c-button--m-link--disabled--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-inline--FontSize: inherit;
\t--pf-c-button--m-link--m-inline--hover--TextDecoration: var(--pf-global--link--TextDecoration--hover, underline);
\t--pf-c-button--m-link--m-inline--hover--Color: var(--pf-global--link--Color--hover, #004080);
\t--pf-c-button--m-link--m-inline--PaddingTop: 0;
\t--pf-c-button--m-link--m-inline--PaddingRight: 0;
\t--pf-c-button--m-link--m-inline--PaddingBottom: 0;
\t--pf-c-button--m-link--m-inline--PaddingLeft: 0;
\t--pf-c-button--m-link--m-inline__progress--Left: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-button--m-link--m-inline--m-in-progress--PaddingLeft: calc(var(--pf-c-button--m-link--m-inline__progress--Left) + 1rem + var(--pf-global--spacer--sm, 0.5rem));
\t--pf-c-button--m-link--m-danger--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-danger--Color: var(--pf-global--danger-color--100, #c9190b);
\t--pf-c-button--m-link--m-danger--hover--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-danger--hover--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-link--m-danger--focus--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-danger--focus--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-link--m-danger--active--BackgroundColor: transparent;
\t--pf-c-button--m-link--m-danger--active--Color: var(--pf-global--danger-color--200, #a30000);
\t--pf-c-button--m-plain--BackgroundColor: transparent;
\t--pf-c-button--m-plain--Color: var(--pf-global--Color--200, #6a6e73);
\t--pf-c-button--m-plain--hover--BackgroundColor: transparent;
\t--pf-c-button--m-plain--hover--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-plain--focus--BackgroundColor: transparent;
\t--pf-c-button--m-plain--focus--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-plain--active--BackgroundColor: transparent;
\t--pf-c-button--m-plain--active--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-plain--disabled--Color: var(--pf-global--disabled-color--200, #d2d2d2);
\t--pf-c-button--m-plain--disabled--BackgroundColor: transparent;
\t--pf-c-button--m-control--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--BorderRadius: 0;
\t--pf-c-button--m-control--after--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\t--pf-c-button--m-control--after--BorderTopColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t--pf-c-button--m-control--after--BorderRightColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t--pf-c-button--m-control--after--BorderBottomColor: var(--pf-global--BorderColor--200, #8a8d90);
\t--pf-c-button--m-control--after--BorderLeftColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t--pf-c-button--m-control--disabled--BackgroundColor: var(--pf-global--disabled-color--300, #f0f0f0);
\t--pf-c-button--m-control--hover--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--hover--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--hover--after--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-button--m-control--hover--after--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-button--m-control--active--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--active--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--active--after--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-button--m-control--active--after--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-button--m-control--focus--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--focus--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--focus--after--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-button--m-control--focus--after--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-button--m-control--m-expanded--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t--pf-c-button--m-control--m-expanded--Color: var(--pf-global--Color--100, #151515);
\t--pf-c-button--m-control--m-expanded--after--BorderBottomWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-button--m-control--m-expanded--after--BorderBottomColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-button--m-small--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t--pf-c-button--m-display-lg--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t--pf-c-button--m-display-lg--PaddingRight: var(--pf-global--spacer--xl, 2rem);
\t--pf-c-button--m-display-lg--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t--pf-c-button--m-display-lg--PaddingLeft: var(--pf-global--spacer--xl, 2rem);
\t--pf-c-button--m-display-lg--FontWeight: var(--pf-global--FontWeight--bold, 700);
\t--pf-c-button--m-link--m-display-lg--FontSize: var(--pf-global--FontSize--lg, 1.125rem);
\t--pf-c-button__icon--m-start--MarginRight: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-button__icon--m-end--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-button__progress--width: calc(var(--pf-global--icon--FontSize--md, 1.125rem) + var(--pf-global--spacer--sm, 0.5rem));
\t--pf-c-button__progress--Opacity: 0;
\t--pf-c-button__progress--TranslateY: -50%;
\t--pf-c-button__progress--TranslateX: 0;
\t--pf-c-button__progress--Top: 50%;
\t--pf-c-button__progress--Left: var(--pf-global--spacer--md, 1rem);
\t--pf-c-button--m-progress--TransitionProperty: padding;
\t--pf-c-button--m-progress--TransitionDuration: var(--pf-global--TransitionDuration, 250ms);
\t--pf-c-button--m-progress--PaddingRight: calc(var(--pf-global--spacer--md, 1rem) + var(--pf-c-button__progress--width) / 2);
\t--pf-c-button--m-progress--PaddingLeft: calc(var(--pf-global--spacer--md, 1rem) + var(--pf-c-button__progress--width) / 2);
\t--pf-c-button--m-in-progress--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t--pf-c-button--m-in-progress--PaddingLeft: calc(var(--pf-global--spacer--md, 1rem) + var(--pf-c-button__progress--width));
\t--pf-c-button--m-in-progress--m-plain--Color: var(--pf-global--primary-color--100, #06c);
\t--pf-c-button--m-in-progress--m-plain__progress--Left: 50%;
\t--pf-c-button--m-in-progress--m-plain__progress--TranslateX: -50%;
\t--pf-c-button__count--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);
\t--pf-c-button--disabled__c-badge--Color: var(--pf-global--Color--dark-100, #151515);
\t--pf-c-button--disabled__c-badge--BackgroundColor: var(--pf-global--BackgroundColor--200, #f0f0f0);
\t--pf-c-button--m-primary__c-badge--BorderColor: var(--pf-global--BorderColor--300, #f0f0f0);
\t--pf-c-button--m-primary__c-badge--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);

  /** Internal button color property */
  --_button-color: var(--pf-c-button--m-primary--Color);
  /** Internal button background color property */
  --_button-background-color: var(--pf-c-button--m-primary--BackgroundColor);
}
`,Vr=R`/******************************
 *                            *
 *            ICON            *
 *                            *
 ******************************/

.hasIcon {
  gap: calc(2 * var(--pf-c-button__icon--m-start--MarginLeft,
    var(--pf-global--spacer--xs, 0.25rem)));
}

`,qr=R`:host {
\tfont-size: var(--pf-c-button--FontSize);
\tfont-weight: var(--pf-c-button--FontWeight);
\tline-height: var(--pf-c-button--LineHeight);
\ttext-align: center;
\twhite-space: nowrap;
  font-size: var(--pf-c-button--FontSize,
    var(--pf-global--FontSize--md, 1rem));
  font-weight: var(--pf-c-button--FontWeight,
    var(--pf-global--FontWeight--normal, 400));
  line-height: var(--pf-c-button--LineHeight,
    var(--pf-global--LineHeight--md, 1.5));
  display: inline-block;
  height: max-content;
  cursor: pointer;
  position: relative;
  font-family: inherit;
  border-width: 0;
  border-style: solid;
  border-radius: var(--pf-c-button--BorderRadius,
    var(--pf-global--BorderRadius--sm, 3px));
}

:host([hidden]),
[hidden] {
  display: none !important;
}

:host([inline]) {
  display: inline;
  --pf-c-button--PaddingTop: 0;
  --pf-c-button--PaddingLeft: 0;
  --pf-c-button--PaddingBottom: 0;
  --pf-c-button--PaddingRight: 0;
}

pf-icon,
::slotted(pf-icon) {
  color: currentcolor;
  padding-inline-start: var(--_button-icon-padding-inline-start);
  padding-inline-end: var(--_button-icon-padding-inline-end);
  vertical-align: var(--_button-icon-vertical-align);
}

#icon {
  margin-inline-end: var(--pf-c-button__icon--m-start--MarginRight,
      var(--pf-global--spacer--xs, 0.25rem));
}

#button {
  display: inline-block;
  color: var(--_button-color);
  padding:
    var(--pf-c-button--PaddingTop,
      var(--pf-global--spacer--form-element, 0.375rem))
    var(--pf-c-button--PaddingRight,
      var(--pf-global--spacer--md, 1rem))
    var(--pf-c-button--PaddingBottom,
      var(--pf-global--spacer--form-element, 0.375rem))
    var(--pf-c-button--PaddingLeft,
      var(--pf-global--spacer--md, 1rem));
  &::before,
  &::after {
    position: absolute;
    inset: 0;
    content: "";
  }
  &::before {
    background-color: var(--_button-background-color);
    border-radius: var(--pf-c-button--BorderRadius,
      var(--pf-global--BorderRadius--sm, 3px));
  }
  &::after {
    pointer-events: none;
    border-style: solid;
    border-width: var(--pf-c-button--after--BorderWidth);
    border-color: var(--pf-c-button--after--BorderColor);
    border-radius: var(--pf-c-button--after--BorderRadius);
  }
  &.anchor {
    text-decoration: none;
    &::after {
      pointer-events: all;
    }
  }
}

#text {
  display: inline;
  position: relative;
}

:host(:focus) {
  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--focus--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--focus--BackgroundColor,
    var(--pf-global--primary-color--200, #004080));
  --pf-c-button--after--BorderWidth: var(--pf-c-button--focus--after--BorderWidth,
    var(--pf-global--BorderWidth--md, 2px));
  /* DANGER */
  --pf-c-button--m-danger--Color: var(--pf-c-button--m-danger--focus--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-danger--focus--BackgroundColor,
    var(--pf-global--danger-color--200, #a30000));
  /* LINK */
  --pf-c-button--m-link--Color: var(--pf-c-button--m-link--focus--Color,
    var(--pf-global--link--Color--hover, #004080));
  --pf-c-button--m-link--BackgroundColor: var(--pf-c-button--m-link--hover--BackgroundColor, transparent);
  /* PLAIN */
  --pf-c-button--m-plain--Color: var(--pf-c-button--m-plain--focus--Color,
    var(--pf-global--Color--100, #151515));
  --pf-c-button--m-plain--BackgroundColor: var(--pf-c-button--m-plain--focus--BackgroundColor,
    transparent);
}

:host(:hover) {
  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--hover--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--hover--BackgroundColor,
    var(--pf-global--primary-color--200, #004080));
  --pf-c-button--after--BorderWidth: var(--pf-c-button--hover--after--BorderWidth,
    var(--pf-global--BorderWidth--md, 2px));
  /* DANGER */
  --pf-c-button--m-danger--Color: var(--pf-c-button--m-danger--hover--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-danger--hover--BackgroundColor,
    var(--pf-global--danger-color--200, #a30000));
  /* LINK */
  --pf-c-button--m-link--Color: var(--pf-c-button--m-link--hover--Color,
    var(--pf-global--link--Color--hover, #004080));
  --pf-c-button--m-link--BackgroundColor: var(--pf-c-button--m-link--hover--BackgroundColor, transparent);
  /* PLAIN */
  --pf-c-button--m-plain--Color: var(--pf-c-button--m-plain--hover--Color,
    var(--pf-global--Color--100, #151515));
  --pf-c-button--m-plain--BackgroundColor: var(--pf-c-button--m-plain--hover--BackgroundColor,
    transparent);
}

:host(:active) {
  --pf-c-button--m-primary--Color: var(--pf-c-button--m-primary--active--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-primary--BackgroundColor: var(--pf-c-button--m-primary--active--BackgroundColor,
    var(--pf-global--primary-color--200, #004080));
  --pf-c-button--after--BorderWidth: var(--pf-c-button--active--after--BorderWidth,
    var(--pf-global--BorderWidth--md, 2px));
  /* DANGER */
  --pf-c-button--m-danger--Color: var(--pf-c-button--m-danger--active--Color,
    var(--pf-global--Color--light-100, #fff));
  --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-danger--active--BackgroundColor,
    var(--pf-global--danger-color--200, #a30000));
  /* LINK */
  --pf-c-button--m-link--Color: var(--pf-c-button--m-link--active--Color,
    var(--pf-global--link--Color--hover, #004080));
  --pf-c-button--m-link--BackgroundColor: var(--pf-c-button--m-link--active--BackgroundColor, transparent);
}

.disabled,
:host(:disabled),
:host([danger]:disabled),
:host([link]:disabled) .link {
  pointer-events: none;
  cursor: default;
}

[part=icon] {
  --pf-icon--size: 16px;
  display: inline-flex;
  align-items: center;
  position: absolute;
  & ::slotted(*) {
    width: 16px;
    max-width: 16px;
    height: 16px;
    max-height: 16px;
  }
}

.hasIcon [part=icon] {
  cursor: pointer;
}

.hasIcon #button {
  position: absolute;
  inset: 0;
}

/******************************
 *                            *
 *           PLAIN            *
 *                            *
 ******************************/

#button.plain {
  --pf-c-button--disabled--BackgroundColor: var(--pf-c-button--m-plain--disabled--BackgroundColor, transparent);
  --pf-c-button--after--BorderWidth: 0 !important;
  --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--after--BorderColor,
    var(--pf-global--Color--100, #151515));
  --pf-c-button--disabled--Color: var(--pf-c-button--m-plain--disabled--Color,
    var(--pf-global--disabled-color--200, #d2d2d2));
  --_button-color: var(--pf-c-button--m-plain--Color,
    var(--pf-global--Color--200, #6a6e73));
  --_button-background-color: var(--pf-c-button--m-plain--BackgroundColor,
    transparent);
  :host(:active) & {
    --pf-c-button--m-plain--Color: var(--pf-c-button--m-plain--active--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-plain--BackgroundColor: var(--pf-c-button--m-plain--active--BackgroundColor,
      tranparent);
  }
  &:not(.hasIcon) [part=icon],
  &.loading [part=icon] {
    left: 16px;
  }
  & [part=icon] {
    display: contents;
  }
  &.disabled,
  &.link.disabled {
    --_button-color: var(--pf-c-button--disabled--Color,
      var(--pf-c-button--m-plain--disabled--Color,
        var(--pf-global--disabled--color--200, #d2d2d2)));
  }
}

.hasIcon:not(.plain) [part=icon] {
  position: relative;
}

/******************************
 *                            *
 *    ICON POSITION RIGHT     *
 *                            *
 ******************************/

:host([icon-position=right]) .loading [part=icon] {
  order: 1;
}

:host([icon-position=right]) #button.hasIcon  {
  padding-left: var(--pf-c-button--PaddingLeft, var(--pf-global--spacer--md, 1rem));
  padding-right: calc(16px + 8px + var(--pf-c-button--PaddingRight, var(--pf-global--spacer--md, 1rem)));
}

/******************************
 *                            *
 *          WARNING           *
 *                            *
 ******************************/

#button.warning {
  --_button-color: var(--pf-c-button--m-warning--Color,
    var(--pf-global--Color--dark-100, #151515));
  --_button-background-color: var(--pf-c-button--m-warning--BackgroundColor,
    var(--pf-global--warning-color--100, #f0ab00));
  :host(:focus) & {
    --pf-c-button--m-warning--Color: var(--pf-c-button--m-warning--focus--Color,
      var(--pf-global--Color--dark-100, #151515));
    --pf-c-button--m-warning--BackgroundColor: var(--pf-c-button--m-warning--focus--BackgroundColor,
      var(--pf-global--palette--gold-500, #c58c00));
  }
  :host(:hover) & {
    --pf-c-button--m-warning--Color: var(--pf-c-button--m-warning--hover--Color,
      var(--pf-global--Color--dark-100, #151515));
    --pf-c-button--m-warning--BackgroundColor: var(--pf-c-button--m-warning--hover--BackgroundColor,
      var(--pf-global--palette--gold-500, #c58c00));
  }
  :host(:active) & {
    --pf-c-button--m-warning--Color: var(--pf-c-button--m-warning--active--Color,
      var(--pf-global--Color--dark-100, #151515));
    --pf-c-button--m-warning--BackgroundColor: var(--pf-c-button--m-warning--active--BackgroundColor,
      var(--pf-global--palette--gold-500, #c58c00));
  }
  &.disabled {
    --_button-color: var(--pf-c-button--disabled--Color,
      var(--pf-global--disabled-color--100, #6a6e73));
    --_button-background-color: var(--pf-c-button--disabled--BackgroundColor,
      var(--pf-global--disabled-color--200, #d2d2d2));
  }
}

/******************************
 *                            *
 *          LOADING           *
 *                            *
 ******************************/

:host([loading]) #button {
  position: relative;
  display: flex;
  align-items: center;
}

#button.loading {
  & [part=icon] {
    display: inline-block;
    z-index: 1;
    position: absolute;
    cursor: pointer;
    top: var(--pf-c-button__progress--Top, 50%);
    left: var(--pf-c-button__progress--Left,
      var(--pf-global--spacer--md, 1rem));
    line-height: 1;
    transform: translate(
      var(--pf-c-button__progress--TranslateX, 0),
      var(--pf-c-button__progress--TranslateY, -50%));
    margin-inline-end: var(--pf-c-button__icon--m-start--MarginRight,
      var(--pf-global--spacer--xs, 0.25rem));
  }
  &.primary:not(.plain),
  &.danger {
    --pf-c-spinner--Color: white;
  }
  &:not(.plain) {
    padding-left: calc(12px + var(--pf-c-button--PaddingLeft, var(--pf-global--spacer--md, 1rem)));
    --pf-c-button--PaddingRight: var(--pf-c-button--m-in-progress--PaddingRight,
      var(--pf-global--spacer--md, 1rem));
    --pf-c-button--PaddingLeft: var(--pf-c-button--m-in-progress--PaddingLeft,
      calc(
        var(--pf-global--spacer--md, 1rem) + var(--pf-c-button__progress--width,
          calc(var(--pf-global--icon--FontSize--md, 1.125rem) + var(--pf-global--spacer--sm, 0.5rem))) / 2));
  }

}

/******************************
 *                            *
 *         SECONDARY          *
 *                            *
 ******************************/

#button.secondary {
  --pf-c-button--m-danger--Color: var(--pf-c-button--m-secondary--m-danger--Color,
    var(--pf-global--danger-color--100, #c9190b));
  --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-secondary--m-danger--BackgroundColor, transparent);
  --_button-color: var(--pf-c-button--m-secondary--Color,
    var(--pf-global--primary-color--100, #06c));
  --_button-background-color: var(--pf-c-button--m-secondary--BackgroundColor, transparent);
  --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--after--BorderColor,
    var(--pf-global--primary-color--100, #06c));
  :host(:focus) & {
    --pf-c-button--m-secondary--Color: var(--pf-c-button--m-secondary--focus--Color,
      var(--pf-global--primary-color--100, #06c));
    --pf-c-button--m-secondary--BackgroundColor: var(--pf-c-button--m-secondary--focus--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--focus--after--BorderColor,
      var(--pf-global--primary-color--100, #06c));
    /* DANGER */
    --pf-c-button--m-danger--Color: var(--pf-c-button--m-secondary--m-danger--focus--Color,
      var(--pf-global--danger--color--200, #a30000));
    --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-secondary--m-danger--focus--BackgroundColor, transparent);
  }
  :host(:hover) & {
    --pf-c-button--m-secondary--Color: var(--pf-c-button--m-secondary--hover--Color,
      var(--pf-global--primary-color--100, #06c));
    --pf-c-button--m-secondary--BackgroundColor: var(--pf-c-button--m-secondary--hover--BackgroundColor,
      transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--hover--after--BorderColor,
      var(--pf-global--primary-color--100, #06c));
    /* DANGER */
    --pf-c-button--m-danger--Color: var(--pf-c-button--m-secondary--m-danger--hover--Color,
      var(--pf-global--danger--color--200, #a30000));
    --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-secondary--m-danger--hover--BackgroundColor, transparent);
  }
  :host(:active) & {
    --pf-c-button--m-secondary--Color: var(--pf-c-button--m-secondary--active--Color,
      var(--pf-global--primary-color--100, #06c));
    --pf-c-button--m-secondary--BackgroundColor: var(--pf-c-button--m-secondary--active--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--active--after--BorderColor,
      var(--pf-global--primary-color--100, #06c));
    /* DANGER */
    --pf-c-button--m-danger--Color: var(--pf-c-button--m-secondary--m-danger--active--Color,
      var(--pf-global--danger--color--200, #a30000));
    --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-secondary--m-danger--active--BackgroundColor, transparent);
  }
  &.danger {
    --_button-color: var(--pf-c-button--m-secondary--m-danger--Color,
      var(--pf-global--danger--color--100, #c9190b));
    --_button-background-color: var(--pf-c-button--m-secondary--m-danger--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--m-danger--after--BorderColor,
      var(--pf-global--danger--color--100, #c9190b));
    :host(:focus) & {
      --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--m-danger--focus--after--BorderColor,
        var(--pf-global--danger--color--100, #c9190b));
    }
    :host(:hover) & {
      --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--m-danger--hover--after--BorderColor,
        var(--pf-global--danger--color--100, #c9190b));
    }
    :host(:active) & {
      --pf-c-button--after--BorderColor: var(--pf-c-button--m-secondary--m-danger--active--after--BorderColor,
        var(--pf-global--danger--color--100, #c9190b));
    }
  }
}

/******************************
 *                            *
 *         TERTIARY           *
 *                            *
 ******************************/

#button.tertiary {
  --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--after--BorderColor,
    var(--pf-global--Color--100, #151515));
  --_button-color: var(--pf-c-button--m-tertiary--Color,
    var(--pf-global--Color--100, #151515));
  --_button-background-color: var(--pf-c-button--m-tertiary--BackgroundColor, transparent);
  :host(:focus) & {
    --pf-c-button--m-tertiary--Color: var(--pf-c-button--m-tertiary--focus--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-tertiary--BackgroundColor: var(--pf-c-button--m-tertiary--focus--BackgroundColor,
      transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--focus--after--BorderColor,
      var(--pf-global--Color--100, #151515));
  }
  :host(:hover) & {
    --pf-c-button--m-tertiary--Color: var(--pf-c-button--m-tertiary--hover--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-tertiary--BackgroundColor: var(--pf-c-button--m-tertiary--hover--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--hover--after--BorderColor,
      var(--pf-global--Color--100, #151515));
  }
  :host(:active) & {
    --pf-c-button--m-tertiary--Color: var(--pf-c-button--m-tertiary--active--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-tertiary--BackgroundColor: var(--pf-c-button--m-tertiary--active--BackgroundColor, transparent);
    --pf-c-button--after--BorderColor: var(--pf-c-button--m-tertiary--active--after--BorderColor,
      var(--pf-global--Color--100, #151515));
  }
}

/******************************
 *                            *
 *          CONTROL           *
 *                            *
 ******************************/

#button.control {
  --pf-c-button--BorderRadius: var(--pf-c-button--m-control--BorderRadius, 0);
  --pf-c-button--disabled--BackgroundColor: var(--pf-c-button--m-control--disabled--BackgroundColor,
    var(--pf-global--disabled-color--300, #f0f0f0));
  --pf-c-button--after--BorderRadius: 0;
  --pf-c-button--after--BorderWidth: var(--pf-c-button--m-control--after--BorderWidth,
    var(--pf-global--BorderWidth--sm, 1px));
  --pf-c-button--after--BorderColor:
    var(--pf-c-button--m-control--after--BorderTopColor,
      var(--pf-global--BorderColor--300, #f0f0f0))
    var(--pf-c-button--m-control--after--BorderRightColor,
      var(--pf-global--BorderColor--300, #f0f0f0))
    var(--pf-c-button--m-control--after--BorderBottomColor,
      var(--pf-global--BorderColor--200, #8a8d90))
    var(--pf-c-button--m-control--after--BorderLeftColor,
      var(--pf-global--BorderColor--300, #f0f0f0));
  --_button-color: var(--pf-c-button--m-control--Color,
    var(--pf-global--Color--100, #151515));
  --_button-background-color: var(--pf-c-button--m-control--BackgroundColor,
    var(--pf-global--BackgroundColor--100, #fff));
  :host(:focus) & {
    --pf-c-button--m-control--Color: var(--pf-c-button--m-control--focus--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-control--BackgroundColor: var(--pf-c-button--m-control--focus--BackgroundColor,
      var(--pf-global--BackgroundColor--100, #fff));
    --pf-c-button--m-control--after--BorderBottomColor: var(--pf-c-button--m-control--focus--after--BorderBottomColor,
      var(--pf-global--active-color--100, #06c));
    &::after {
      border-block-end-width: var(--pf-c-button--m-control--focus--after--BorderBottomWidth,
        var(--pf-global--BorderWidth--md, 2px));
    }
  }
  :host(:hover) & {
    --pf-c-button--m-control--Color: var(--pf-c-button--m-control--hover--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-control--BackgroundColor: var(--pf-c-button--m-control--hover--BackgroundColor,
      var(--pf-global--BackgroundColor--100, #fff));
    --pf-c-button--m-control--after--BorderBottomColor: var(--pf-c-button--m-control--hover--after--BorderBottomColor,
      var(--pf-global--active-color--100, #06c));
    &::after {
      border-block-end-width: var(--pf-c-button--m-control--hover--after--BorderBottomWidth,
        var(--pf-global--BorderWidth--md, 2px));
    }
  }
  :host(:active) & {
    --pf-c-button--m-control--Color: var(--pf-c-button--m-control--active--Color,
      var(--pf-global--Color--100, #151515));
    --pf-c-button--m-control--BackgroundColor: var(--pf-c-button--m-control--active--BackgroundColor,
      var(--pf-global--BackgroundColor--100, #fff));
    --pf-c-button--m-control--after--BorderBottomColor: var(--pf-c-button--m-control--active--after--BorderBottomColor,
      var(--pf-global--active-color--100, #06c));
    &::after {
      border-block-end-width: var(--pf-c-button--m-control--active--after--BorderBottomWidth,
        var(--pf-global--BorderWidth--md, 2px));
    }
  }
}

/******************************
 *                            *
 *           LINK             *
 *                            *
 ******************************/

#button.link {
  --pf-c-button--disabled--BackgroundColor: var(--pf-c-button--m-link--disabled--BackgroundColor, transparent);
  --_button-color: var(--pf-c-button--m-link--Color, var(--pf-global--link--Color, #06c));
  --_button-background-color: var(--pf-c-button--m-link--BackgroundColor,
    var(--pf-c-button--m-link--BackgroundColor, transparent));
  &.inline {
    :host(:hover) & {
      text-decoration: var(--pf-c-button--m-link--m-inline--hover--TextDecoration,
        var(--pf-global--link--TextDecoration--hover, underline));
    }
  }
  &.danger {
    --pf-c-button--m-danger--Color: var(--pf-c-button--m-link--m-danger--Color,
        var(--pf-global--danger-color--100, #c9190b));
    --pf-c-button--m-danger--BackgroundColor: var(--pf-c-button--m-link--m-danger--BackgroundColor, transparent);
    :host(:hover) & {
      --pf-c-button--m-link--m-danger--Color: var(--pf-c-button--m-link--m-danger--hover--Color,
          var(--pf-global--danger-color--200, #a30000));
      --pf-c-button--m-link--m-danger--BackgroundColor: var(--pf-c-button--m-link--m-danger--hover--BackgroundColor, transparent);
    }
    :host(:focus) & {
      --pf-c-button--m-link--m-danger--Color: var(--pf-c-button--m-link--m-danger--focus--Color,
        var(--pf-global--danger-color--200, #a30000));
      --pf-c-button--m-link--m-danger--BackgroundColor: var(--pf-c-button--m-link--m-danger--focus--BackgroundColor, transparent);
    }
    :host(:active) & {
      --pf-c-button--m-link--m-danger--Color: var(--pf-c-button--m-link--m-danger--active--Color,
        var(--pf-global--danger-color--200, #a30000));
      --pf-c-button--m-link--m-danger--BackgroundColor: var(--pf-c-button--m-link--m-danger--active--BackgroundColor, transparent);
    }
  }
}

/******************************
 *                            *
 *         DISABLED           *
 *                            *
 ******************************/

:host(:is(:disabled,[disabled])) {
  pointer-events: none;
  cursor: default;
}

#button.disabled {
  &:not(.plain) {
    --_button-color: var(--pf-c-button--disabled--Color,
      var(--pf-global--disabled-color--100, #6a6e73));
    --_button-background-color: var(--pf-c-button--disabled--BackgroundColor,
      var(--pf-global--disabled-color--200, #d2d2d2));
  }
  &::after {
    border-color: var(--pf-c-button--disabled--after--BorderColor, transparent);
  }
}

/******************************
 *                            *
 *           BLOCK            *
 *                            *
 ******************************/

:host([block]) {
  display: flex;
  width: 100%;
  justify-content: center;
}

/******************************
 *                            *
 *           LARGE            *
 *                            *
 ******************************/

:host([size="large"]) {
  --pf-c-button--PaddingTop: var(--pf-c-button--m-display-lg--PaddingTop,
    var(--pf-global--spacer--md, 1rem));
  --pf-c-button--PaddingRight: var(--pf-c-button--m-display-lg--PaddingRight,
    var(--pf-global--spacer--xl, 2rem));
  --pf-c-button--PaddingBottom: var(--pf-c-button--m-display-lg--PaddingBottom,
    var(--pf-global--spacer--md, 1rem));
  --pf-c-button--PaddingLeft: var(--pf-c-button--m-display-lg--PaddingLeft,
    var(--pf-global--spacer--xl, 2rem));
  --pf-c-button--FontWeight: var(--pf-c-button--m-display-lg--FontWeight,
    var(--pf-global--FontWeight--bold, 700));
}

/******************************
 *                            *
 *           SMALL            *
 *                            *
 ******************************/

:host([size="small"]) {
  --pf-c-button--FontSize: var(--pf-c-button--m-small--FontSize,
    var(--pf-global--FontSize--md, 1rem));
}

/******************************
 *                            *
 *          DANGER            *
 *                            *
 ******************************/

#button.danger {
  --_button-color: var(--pf-c-button--m-danger--Color,
    var(--pf-global--Color--light-100, #fff));
  --_button-background-color: var(--pf-c-button--m-danger--BackgroundColor,
    var(--pf-global--danger-color--100, #c9190b));
}

`;let b=class extends w{constructor(){super(...arguments),A.add(this),this.disabled=!1,this.loading=!1,this.warning=!1,this.danger=!1,this.plain=!1,this.variant="primary",this.inline=!1,this.block=!1,$.set(this,s.of(this,{role:this.variant==="link"?"none":"button"})),yt.set(this,new q(this,"icon",null))}connectedCallback(){super.connectedCallback(),this.addEventListener("click",f(this,A,"m",ft)),this.addEventListener("keydown",f(this,A,"m",nr))}willUpdate(){f(this,$,"f").ariaLabel=this.label||null,f(this,$,"f").ariaDisabled=String(!!this.disabled),this.variant==="link"&&this.href?(this.removeAttribute("tabindex"),f(this,$,"f").role="none"):(this.tabIndex=0,f(this,$,"f").role="button")}async formDisabledCallback(){await this.updateComplete,this.requestUpdate()}render(){const t=!!this.icon||!!this.loading||f(this,yt,"f").hasSlotted("icon"),{warning:r,variant:o,danger:a,loading:n,plain:l,inline:p,block:d,size:g,href:m,target:u}=this,y=f(this,A,"a",Pt),v=k`
      <slot id="icon"
            part="icon"
            name="icon"
            ?hidden="${!t}">
        <pf-icon role="presentation"
                 icon="${gt(this.icon)}"
                 set="${gt(this.iconSet)}"
                 ?hidden="${!this.icon||this.loading}"></pf-icon>
        <pf-spinner size="md"
                    ?hidden="${!this.loading}"
                    aria-label="${this.getAttribute("loading-label")??"loading"}"></pf-spinner>
      </slot>
      <slot id="text"></slot>
    `;return o==="link"&&m?k`
        <a id="button"
           href="${m}"
           target="${gt(u)}"
           class="${K({[o]:!0,[g??""]:!!g,anchor:!0,inline:p,block:d,danger:a,disabled:y,hasIcon:t,loading:n,plain:l,warning:r})}">${v}</a>`:k`
      <div id="button"
           class="${K({[o]:!0,[g??""]:!!g,inline:p,block:d,danger:a,disabled:y,hasIcon:t,loading:n,plain:l,warning:r})}">${v}</div>`}};$=new WeakMap;yt=new WeakMap;A=new WeakSet;Pt=function(){return this.disabled||f(this,$,"f").formDisabled};ft=function(){if(!f(this,A,"a",Pt))return this.type==="reset"?f(this,$,"f").reset():f(this,$,"f").submit()};nr=function(t){switch(t.key){case" ":t.preventDefault(),t.stopPropagation(),this.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))&&f(this,A,"m",ft).call(this);break;case"Enter":this.dispatchEvent(new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window}))&&f(this,A,"m",ft).call(this)}};b.formAssociated=!0;b.styles=[jr,Vr,qr];b.version="4.3.1";i([h({reflect:!0})],b.prototype,"type",void 0);i([h()],b.prototype,"label",void 0);i([h()],b.prototype,"value",void 0);i([h()],b.prototype,"name",void 0);i([h({reflect:!0,type:Boolean})],b.prototype,"disabled",void 0);i([h({type:Boolean,reflect:!0})],b.prototype,"loading",void 0);i([h({reflect:!0})],b.prototype,"size",void 0);i([h({type:Boolean,reflect:!0})],b.prototype,"warning",void 0);i([h({type:Boolean,reflect:!0})],b.prototype,"danger",void 0);i([h({type:Boolean,reflect:!0})],b.prototype,"plain",void 0);i([h({reflect:!0})],b.prototype,"variant",void 0);i([h({reflect:!0,type:Boolean})],b.prototype,"inline",void 0);i([h({reflect:!0,type:Boolean})],b.prototype,"block",void 0);i([h()],b.prototype,"icon",void 0);i([h({attribute:"icon-set"})],b.prototype,"iconSet",void 0);i([h({reflect:!0})],b.prototype,"href",void 0);i([h({reflect:!0})],b.prototype,"target",void 0);b=i([et("pf-button")],b);var N;const Yr=R`:host {
\t/** BackgroundColor for the card */
\t--pf-c-card--BackgroundColor: var(--pf-global--BackgroundColor--100, #fff);
\t/** BoxShadow for the card */
\t--pf-c-card--BoxShadow: var(--pf-global--BoxShadow--sm, 0 0.0625rem 0.125rem 0 rgba(3, 3, 3, 0.12), 0 0 0.125rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--first-child--PaddingTop: var(--pf-global--spacer--lg, 1.5rem);
\t--pf-c-card--child--PaddingRight: var(--pf-global--spacer--lg, 1.5rem);
\t--pf-c-card--child--PaddingBottom: var(--pf-global--spacer--lg, 1.5rem);
\t--pf-c-card--child--PaddingLeft: var(--pf-global--spacer--lg, 1.5rem);
\t--pf-c-card--c-divider--child--PaddingTop: var(--pf-global--spacer--lg, 1.5rem);
\t/** FontFamily for the card title */
\t--pf-c-card__title--FontFamily: var(--pf-global--FontFamily--heading--sans-serif, "RedHatDisplay", "Overpass", overpass, helvetica, arial, sans-serif);
\t/** FontSize for the card title */
\t--pf-c-card__title--FontSize: var(--pf-global--FontSize--md, 1rem);
\t/** FontWeight for the card title */
\t--pf-c-card__title--FontWeight: var(--pf-global--FontWeight--bold, 700);
\t--pf-c-card__title--not--last-child--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t--pf-c-card__body--FontSize: var(--pf-global--FontSize--md, 1rem);
\t--pf-c-card__footer--FontSize: var(--pf-global--FontSize--md, 1rem);
\t--pf-c-card__actions--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t--pf-c-card__actions--child--MarginLeft: var(--pf-global--spacer--sm, 0.5rem);
\t--pf-c-card__header-toggle--MarginTop: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t--pf-c-card__header-toggle--MarginRight: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-card__header-toggle--MarginBottom: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t--pf-c-card__header-toggle--MarginLeft: calc(var(--pf-global--spacer--md, 1rem) * -1);
\t--pf-c-card__header-toggle-icon--Transition: var(--pf-global--Transition, all 250ms cubic-bezier(0.42, 0, 0.58, 1));
\t--pf-c-card--m-expanded__header-toggle-icon--Rotate: 90deg;
\t--pf-c-card--m-hoverable--hover--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--hover--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--focus--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--active--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--m-selected--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable--m-selected--before--Height: var(--pf-global--BorderWidth--lg, 3px);
\t--pf-c-card--m-selectable--m-selected--before--BackgroundColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-card--m-hoverable-raised--hover--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--m-hoverable-raised--hover--before--BackgroundColor: var(--pf-global--active-color--400, #73bcf7);
\t--pf-c-card--m-selectable-raised--before--Right: 0;
\t--pf-c-card--m-selectable-raised--before--Bottom: 0;
\t--pf-c-card--m-selectable-raised--before--Left: 0;
\t--pf-c-card--m-flat--m-selectable-raised--before--Right: calc(-1 * var(--pf-c-card--m-flat--BorderWidth));
\t--pf-c-card--m-flat--m-selectable-raised--before--Bottom: calc(-1 * var(--pf-c-card--m-flat--BorderWidth));
\t--pf-c-card--m-flat--m-selectable-raised--before--Left: calc(-1 * var(--pf-c-card--m-flat--BorderWidth));
\t--pf-c-card--m-selectable-raised--before--Height: var(--pf-global--BorderWidth--xl, 4px);
\t--pf-c-card--m-selectable-raised--before--BackgroundColor: transparent;
\t--pf-c-card--m-selectable-raised--before--Transition: none;
\t--pf-c-card--m-selectable-raised--before--ScaleY: 1;
\t--pf-c-card--m-selectable-raised--before--TranslateY: 0;
\t--pf-c-card--m-selectable-raised--hover--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--m-selectable-raised--hover--before--BackgroundColor: var(--pf-global--active-color--400, #73bcf7);
\t--pf-c-card--m-selectable-raised--focus--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--m-selectable-raised--focus--before--BackgroundColor: var(--pf-global--active-color--400, #73bcf7);
\t--pf-c-card--m-selectable-raised--active--BoxShadow: var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06));
\t--pf-c-card--m-selectable-raised--active--before--BackgroundColor: var(--pf-global--active-color--400, #73bcf7);
\t--pf-c-card--m-selectable-raised--m-selected-raised--before--BackgroundColor: var(--pf-global--active-color--100, #06c);
\t--pf-c-card--m-selectable-raised--m-selected-raised--BoxShadow: var(--pf-global--BoxShadow--lg, 0 0.5rem 1rem 0 rgba(3, 3, 3, 0.16), 0 0 0.375rem 0 rgba(3, 3, 3, 0.08));
\t--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY--base: -0.5rem;
\t--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY: var(--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY--base);
\t--pf-c-card--m-flat--m-selectable-raised--m-selected-raised--TranslateY: calc(var(--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY--base) + var(--pf-c-card--m-flat--BorderWidth));
\t--pf-c-card--m-rounded--m-selectable-raised--m-selected-raised--TranslateY: calc(var(--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY--base) + var(--pf-c-card--m-rounded--BorderRadius));
\t--pf-c-card--m-selectable-raised--m-selected-raised--ZIndex: var(--pf-global--ZIndex--xs, 100);
\t--pf-c-card--m-selectable-raised--m-selected-raised--Transition: transform .25s linear, box-shadow .25s linear;
\t--pf-c-card--m-selectable-raised--m-selected-raised--before--Transition: transform .25s linear;
\t--pf-c-card--m-selectable-raised--m-selected-raised--before--TranslateY: calc(var(--pf-c-card--m-selectable-raised--m-selected-raised--TranslateY) * -1);
\t--pf-c-card--m-selectable-raised--m-selected-raised--before--ScaleY: 2;
\t--pf-c-card--m-non-selectable-raised--BackgroundColor: var(--pf-global--BackgroundColor--light-200, #fafafa);
\t--pf-c-card--m-non-selectable-raised--before--BackgroundColor: var(--pf-global--disabled-color--200, #d2d2d2);
\t--pf-c-card--m-non-selectable-raised--before--ScaleY: 2;
\t--pf-c-card--m-flat--m-non-selectable-raised--before--BorderColor: var(--pf-global--disabled-color--200, #d2d2d2);
\t/** FontSize for the card body in compact size */
\t--pf-c-card--m-compact__body--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** FontSize for the card footer in compact size */
\t--pf-c-card--m-compact__footer--FontSize: var(--pf-global--FontSize--sm, 0.875rem);
\t/** PaddingTop for the first child in compact size */
\t--pf-c-card--m-compact--first-child--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t/** PaddingRight for children in compact size */
\t--pf-c-card--m-compact--child--PaddingRight: var(--pf-global--spacer--md, 1rem);
\t/** PaddingBottom for children in compact size */
\t--pf-c-card--m-compact--child--PaddingBottom: var(--pf-global--spacer--md, 1rem);
\t/** PaddingLeft for children in compact size */
\t--pf-c-card--m-compact--child--PaddingLeft: var(--pf-global--spacer--md, 1rem);
\t--pf-c-card--m-compact--c-divider--child--PaddingTop: var(--pf-global--spacer--md, 1rem);
\t/** PaddingBottom for the title when not last child in compact size */
\t--pf-c-card--m-compact__title--not--last-child--PaddingBottom: var(--pf-global--spacer--sm, 0.5rem);
\t/** FontSize for the title in large size */
\t--pf-c-card--m-display-lg__title--FontSize: var(--pf-global--FontSize--xl, 1.25rem);
\t/** PaddingTop for the first child in large size */
\t--pf-c-card--m-display-lg--first-child--PaddingTop: var(--pf-global--spacer--xl, 2rem);
\t/** PaddingRight for children in large size */
\t--pf-c-card--m-display-lg--child--PaddingRight: var(--pf-global--spacer--xl, 2rem);
\t/** PaddingBottom for children in large size */
\t--pf-c-card--m-display-lg--child--PaddingBottom: var(--pf-global--spacer--xl, 2rem);
\t/** PaddingLeft for children in large size */
\t--pf-c-card--m-display-lg--child--PaddingLeft: var(--pf-global--spacer--xl, 2rem);
\t--pf-c-card--m-display-lg--c-divider--child--PaddingTop: var(--pf-global--spacer--xl, 2rem);
\t/** PaddingBottom for the title when not last child in large size */
\t--pf-c-card--m-display-lg__title--not--last-child--PaddingBottom: var(--pf-global--spacer--lg, 1.5rem);
\t/** BorderWidth for the flat variant */
\t--pf-c-card--m-flat--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** BorderColor for the flat variant */
\t--pf-c-card--m-flat--BorderColor: var(--pf-global--BorderColor--100, #d2d2d2);
\t/** BorderRadius for the rounded variant */
\t--pf-c-card--m-rounded--BorderRadius: var(--pf-global--BorderRadius--sm, 3px);
\t/** Height for the full height variant */
\t--pf-c-card--m-full-height--Height: 100%;
\t/** BoxShadow for the plain variant */
\t--pf-c-card--m-plain--BoxShadow: none;
\t/** BackgroundColor for the plain variant */
\t--pf-c-card--m-plain--BackgroundColor: transparent;
\t--pf-c-card__header--m-toggle-right--toggle--MarginRight: calc(var(--pf-global--spacer--form-element, 0.375rem) * -1);
\t--pf-c-card__header--m-toggle-right--toggle--MarginLeft: var(--pf-global--spacer--xs, 0.25rem);
\t--pf-c-card__header--m-toggle-right--actions--MarginRight: 0;
\t--pf-c-card__input--focus--BorderWidth: var(--pf-global--BorderWidth--md, 2px);
\t--pf-c-card__input--focus--BorderColor: var(--pf-global--primary-color--100, #06c);
  display: flex;
  flex-direction: column;
\tbackground-color: var(--pf-c-card--BackgroundColor);
\tbox-shadow: var(--pf-c-card--BoxShadow);
}

[hidden],
.empty {
  display: none !important;
}

header {
  padding-block-start: var(--pf-c-card--first-child--PaddingTop);
  padding-block-end: var(--pf-c-card__title--not--last-child--PaddingBottom);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
}

header ::slotted(*) {
  margin-block: 0 !important;

  font-family: var(--pf-c-card__title--FontFamily) !important;
  font-size: var(--pf-c-card__title--FontSize) !important;
  font-weight: var(--pf-c-card__title--FontWeight) !important;
}

header ::slotted(pf-dropdown) {
  margin-inline-start: auto;
}

article {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
}

[part="header"],
[part="body"],
[part="footer"] {
  padding-inline-start: var(--pf-c-card--child--PaddingLeft);
  padding-inline-end: var(--pf-c-card--child--PaddingRight);
  padding-block-end: var(--pf-c-card--child--PaddingBottom);
}

#title {
  display: block;
  flex: 1 0 100%;
  padding-block-start: var(--pf-c-card__title--not--last-child--PaddingBottom);
}

[part="body"] {
  font-size: var(--pf-c-card__body--FontSize);
  flex: var(--pf-c-card__body--FullHeight--Flex);
}

[part="body"] ::slotted(:not([slot]):first-of-type) {
  margin-block-start: 0 !important;
}

[part="body"] ::slotted(:not([slot]):last-of-type) {
  margin-block-end: 0 !important;
}

[part="footer"] {
  margin-block-start: auto;
  display: flex;
  gap: 0.5em;
  inset-block-end: 0;
  font-size: var(--pf-c-card__footer--FontSize);
}

:host([size="compact"]) {
\t--pf-c-card__body--FontSize: var(--pf-c-card--m-compact__body--FontSize);
\t--pf-c-card__footer--FontSize: var(--pf-c-card--m-compact__footer--FontSize);
\t--pf-c-card--first-child--PaddingTop: var(--pf-c-card--m-compact--first-child--PaddingTop);
\t--pf-c-card--child--PaddingRight: var(--pf-c-card--m-compact--child--PaddingRight);
\t--pf-c-card--child--PaddingBottom: var(--pf-c-card--m-compact--child--PaddingBottom);
\t--pf-c-card--child--PaddingLeft: var(--pf-c-card--m-compact--child--PaddingLeft);
\t--pf-c-card--c-divider--child--PaddingTop: var(--pf-c-card--m-compact--c-divider--child--PaddingTop);
\t--pf-c-card__title--not--last-child--PaddingBottom: var(--pf-c-card--m-compact__title--not--last-child--PaddingBottom);
}

:host([size="large"]) {
\t--pf-c-card__title--FontSize: var(--pf-c-card--m-display-lg__title--FontSize);
\t--pf-c-card--first-child--PaddingTop: var(--pf-c-card--m-display-lg--first-child--PaddingTop);
\t--pf-c-card--child--PaddingRight: var(--pf-c-card--m-display-lg--child--PaddingRight);
\t--pf-c-card--child--PaddingBottom: var(--pf-c-card--m-display-lg--child--PaddingBottom);
\t--pf-c-card--child--PaddingLeft: var(--pf-c-card--m-display-lg--child--PaddingLeft);
\t--pf-c-card--c-divider--child--PaddingTop: var(--pf-c-card--m-display-lg--c-divider--child--PaddingTop);
\t--pf-c-card__title--not--last-child--PaddingBottom: var(--pf-c-card--m-display-lg__title--not--last-child--PaddingBottom);
}

:host([flat]) {
  --pf-c-card--BoxShadow: none;
  border: var(--pf-c-card--m-flat--BorderWidth) solid var(--pf-c-card--m-flat--BorderColor);
}

:host([plain]) {
  --pf-c-card--BoxShadow: var(--pf-c-card--m-plain--BoxShadow);
  --pf-c-card--BackgroundColor: var(--pf-c-card--m-plain--BackgroundColor);
}

:host([rounded]) {
  border-radius: var(--pf-c-card--m-rounded--BorderRadius);
}

:host([full-height]) {
  height: var(--pf-c-card--m-full-height--Height);
  --pf-c-card__body--FullHeight--Flex: 1 1 auto;
}

`;let z=class extends w{constructor(){super(...arguments),this.rounded=!1,this.fullHeight=!1,this.plain=!1,N.set(this,new q(this,"header","title",null,"footer"))}render(){return k`
      <article>
        <!-- summary: The container for *header* content -->
        <header id="header"
                part="header"
                class="${K({empty:f(this,N,"f").isEmpty("header")})}">
          <!-- summary: When included, defines the contents of a card.
               description: |
                 Card headers can contain images as well as the title of a card and an actions menu
                 represented by the right-aligned kebab. In most cases, your card should include a
                 header. The only exceptions are when cards being used as a layout element to
                 create a white background behind other content.
          -->
          <slot name="header"></slot>
          <!-- summary: Communicates the title of a card if it's not included in the header.
               description: |
                 If a card will be utilized as a selectable and clickable card, the title
                 needs to be made as a linked text to trigger action and indicate interaction.
          -->
          <slot id="title" name="title" ?hidden="${f(this,N,"f").isEmpty("title")}"></slot>
        </header>
        <!-- summary: The container for *body* content -->
        <div id="body"
             part="body"
             class="${K({empty:f(this,N,"f").isEmpty(null)})}">
          <!-- summary: Body. Provides details about the item.
               description: |
                 A card body can include any combination of static text and/or active content.
          -->
          <slot></slot>
        </div>
        <!-- summary: The container for *footer* content -->
        <footer id="footer"
                part="footer"
                class="${K({empty:f(this,N,"f").isEmpty("footer")})}">
          <!-- summary: Contains external links, actions, or static text at the bottom of a card. -->
          <slot name="footer"></slot>
        </footer>
      </article>
    `}};N=new WeakMap;z.styles=[Yr];z.version="4.3.1";i([h({reflect:!0})],z.prototype,"size",void 0);i([h({type:Boolean,reflect:!0})],z.prototype,"rounded",void 0);i([h({type:Boolean,reflect:!0,attribute:"full-height"})],z.prototype,"fullHeight",void 0);i([h({type:Boolean,reflect:!0})],z.prototype,"plain",void 0);z=i([et("pf-card")],z);var Bt,ir;const Gr=R`:host {
  display: inline-block;
\t/** Border color for avatar */
\t--pf-c-avatar--BorderColor: transparent;
\t/** Border width for avatar */
\t--pf-c-avatar--BorderWidth: 0;
\t/** Border radius for avatar */
\t--pf-c-avatar--BorderRadius: var(--pf-global--BorderRadius--lg, 30em);
\t/** Width for avatar */
\t--pf-c-avatar--Width: 2.25rem;
\t/** Height for avatar */
\t--pf-c-avatar--Height: 2.25rem;
\t/** Width for small avatar */
\t--pf-c-avatar--m-sm--Width: 1.5rem;
\t/** Height for small avatar */
\t--pf-c-avatar--m-sm--Height: 1.5rem;
\t/** Width for medium avatar */
\t--pf-c-avatar--m-md--Width: 2.25rem;
\t/** Height for medium avatar */
\t--pf-c-avatar--m-md--Height: 2.25rem;
\t/** Width for large avatar */
\t--pf-c-avatar--m-lg--Width: 4.5rem;
\t/** Height for large avatar */
\t--pf-c-avatar--m-lg--Height: 4.5rem;
\t/** Width for extra large avatar */
\t--pf-c-avatar--m-xl--Width: 8rem;
\t/** Height for extra large avatar */
\t--pf-c-avatar--m-xl--Height: 8rem;
\t--pf-c-avatar--m-light--BorderColor: var(--pf-global--BorderColor--dark-100, #d2d2d2);
\t--pf-c-avatar--m-light--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\t/** Border color for dark avatar */
\t--pf-c-avatar--m-dark--BorderColor: var(--pf-global--palette--black-700, #4f5255);
\t--pf-c-avatar--m-dark--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
\twidth: var(--pf-c-avatar--Width);
\theight: var(--pf-c-avatar--Height);
\tborder-radius: var(--pf-c-avatar--BorderRadius);
}

:host([hidden]),
[hidden] {
  display: none !important;
}

svg,
img {
  display: inline;
  object-fit: cover;
  width: var(--pf-c-avatar--Width);
  height: var(--pf-c-avatar--Height);
  border-radius: var(--pf-c-avatar--BorderRadius);
  border: var(--pf-c-avatar--BorderWidth) solid var(--pf-c-avatar--BorderColor);
}

:host([border]) {
  --pf-c-avatar--BorderWidth: var(--pf-global--BorderWidth--sm, 1px);
}

:host([border="dark"]) {
  --pf-c-avatar--BorderColor: var(--pf-c-avatar--m-dark--BorderColor);
}

:host([size="sm"]) {
  --pf-c-avatar--Width: var(--pf-c-avatar--m-sm--Width);
  --pf-c-avatar--Height: var(--pf-c-avatar--m-sm--Height);
}

:host([size="md"]) {
  --pf-c-avatar--Width: var(--pf-c-avatar--m-md--Width);
  --pf-c-avatar--Height: var(--pf-c-avatar--m-md--Height);
}

:host([size="lg"]) {
  --pf-c-avatar--Width: var(--pf-c-avatar--m-lg--Width);
  --pf-c-avatar--Height: var(--pf-c-avatar--m-lg--Height);
}

:host([size="xl"]) {
  --pf-c-avatar--Width: var(--pf-c-avatar--m-xl--Width);
  --pf-c-avatar--Height: var(--pf-c-avatar--m-xl--Height);
}
`;class Kr extends Event{constructor(t){super("load",{bubbles:!0}),this.originalEvent=t}}let S=class extends w{constructor(){super(...arguments),Bt.add(this),this.alt="Avatar image",this.size="sm",this.dark=!1}render(){return this.src!=null?k`
      <img id="img"
           alt="${this.alt??""}"
           src=${this.src}
           @load="${f(this,Bt,"m",ir)}">
    `:this.dark?k`
      <svg xmlns="http://www.w3.org/2000/svg"
           style="enable-background:new 0 0 36 36"
           viewBox="0 0 36 36">
        <style>.st1,.st2{fill-rule:evenodd;clip-rule:evenodd;fill:#6a6e73}.st2{fill:#4f5255}</style><path d="M0 0h36v36H0z" style="fill:#212427"/>
        <path d="M30.5 36c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6C6.7 27 5.8 32.2 5.4 36h25.1zM17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" class="st1"/><path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2zM22.7 36v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h-3.2z" class="st2"/>
      </svg>
    `:k`
      <svg xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 36 36" viewBox="0 0 36 36">
        <style>.st2{fill:#b8bbbe}</style><path d="M0 0h36v36H0z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#f0f0f0"/>
        <path d="M17.7 20.1c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z" style="fill-rule:evenodd;clip-rule:evenodd;fill:#d2d2d2"/><path d="M13.3 36v-6.7c-2 .4-2.9 1.4-3.1 3.5l-.1 3.2h3.2z" class="st2"/>
        <path d="m10.1 36 .1-3.2c.2-2.1 1.1-3.1 3.1-3.5V36h9.4v-6.7c2 .4 2.9 1.4 3.1 3.5l.1 3.2h4.7c-.4-3.9-1.3-9-2.9-11-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-.6-6.3-.6-6.1.7-6.1.7c-1.2.4-2.4 1.2-3.4 2.6-1.7 1.9-2.6 7.1-3 10.9h4.7z" style="fill:#d2d2d2"/><path d="m25.9 36-.1-3.2c-.2-2.1-1.1-3.1-3.1-3.5V36h3.2z" class="st2"/>
      </svg>
      `}};Bt=new WeakSet;ir=function(t){this.dispatchEvent(new Kr(t))};S.styles=[Gr];S.version="4.3.1";i([h()],S.prototype,"src",void 0);i([h({reflect:!0})],S.prototype,"alt",void 0);i([h({reflect:!0})],S.prototype,"size",void 0);i([h({reflect:!0})],S.prototype,"border",void 0);i([h({type:Boolean,reflect:!0})],S.prototype,"dark",void 0);S=i([et("pf-avatar")],S);class Zr extends w{static get properties(){return{username:{type:String},role:{type:String},userId:{type:String}}}static get styles(){return R`
      :host {
        display: block;
        max-width: 300px;
      }
      
      /* Wir stylen hier nur das Layout UNSERER Inhalte.
         Das innere Styling von pf-card oder pf-button bleibt geschützt. */
      .user-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      /* Custom Styling für den Titel im PatternFly Slot */
      h3 {
        margin: 0;
        color: var(--pf-global--primary-color--100, #0066cc); /* Nutzung von PF Variablen */
      }
    `}constructor(){super(),this.username="Gast",this.role="Besucher"}_handleContact(){this.dispatchEvent(new CustomEvent("contact-user",{detail:{id:this.userId,name:this.username},bubbles:!0,composed:!0}))}render(){return k`
      <pf-card>
        <h3 slot="header">Mitarbeiter-Profil</h3>

        <div class="user-info">
          <img 
            src="https://i.pravatar.cc/150?u=${this.userId}" 
            alt="${this.username}"
            style="width: 50px; height: 50px; border-radius: 50%;"
          >
          <div>
            <strong>${this.username}</strong><br>
            <small>${this.role}</small>
          </div>
        </div>

        <div slot="footer">
          <pf-button @click="${this._handleContact}" variant="primary" style="width: 100%">
            Kontaktieren
          </pf-button>
        </div>
      </pf-card>
    `}}customElements.define("my-user-card",Zr);
