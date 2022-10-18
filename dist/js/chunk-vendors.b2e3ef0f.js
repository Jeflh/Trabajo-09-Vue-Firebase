(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"0366":function(e,t,n){var r=n("59ed");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,i){return e.call(t,n,r,i)}}return function(){return e.apply(t,arguments)}}},"057f":function(e,t,n){var r=n("fc6a"),i=n("241c").f,o={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],a=function(e){try{return i(e)}catch(t){return s.slice()}};e.exports.f=function(e){return s&&"[object Window]"==o.call(e)?a(e):i(r(e))}},"06cf":function(e,t,n){var r=n("83ab"),i=n("d1e7"),o=n("5c6c"),s=n("fc6a"),a=n("a04b"),c=n("5135"),u=n("0cfb"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=s(e),t=a(t),u)try{return l(e,t)}catch(n){}if(c(e,t))return o(!i.f.call(e,t),e[t])}},"0b42":function(e,t,n){var r=n("e8b5"),i=n("68ee"),o=n("861d"),s=n("b622"),a=s("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===Array||r(t.prototype))?t=void 0:o(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?Array:t}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t){e.exports=function(e){try{return String(e)}catch(t){return"Object"}}},"159b":function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("17c2"),a=n("9112"),c=function(e){if(e&&e.forEach!==s)try{a(e,"forEach",s)}catch(t){e.forEach=s}};for(var u in i)i[u]&&c(r[u]&&r[u].prototype);c(o)},1626:function(e,t){e.exports=function(e){return"function"===typeof e}},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,i=n("a640"),o=i("forEach");e.exports=o?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"19aa":function(e,t){e.exports=function(e,t,n){if(e instanceof t)return e;throw TypeError("Incorrect "+(n?n+" ":"")+"invocation")}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1dde":function(e,t,n){var r=n("d039"),i=n("b622"),o=n("2d00"),s=i("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return w})),n.d(t,"c",(function(){return y})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return T})),n.d(t,"f",(function(){return d})),n.d(t,"g",(function(){return x})),n.d(t,"h",(function(){return S})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return C})),n.d(t,"k",(function(){return L})),n.d(t,"l",(function(){return f})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return g})),n.d(t,"o",(function(){return k})),n.d(t,"p",(function(){return _})),n.d(t,"q",(function(){return p})),n.d(t,"r",(function(){return v})),n.d(t,"s",(function(){return A})),n.d(t,"t",(function(){return j}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let h=(15&s)<<2|c>>6,d=63&c;a||(d=64,o||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const h=t<<2|s>>4;if(r.push(h),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&l(n)&&(e[n]=u(e[n],t[n]));return e}function l(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function p(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(f())}function m(){return"object"===typeof self&&self.self===self}function g(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function v(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function _(){const e=f();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b="FirebaseError";class y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=b,Object.setPrototypeOf(this,y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?O(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new y(r,s,n);return a}}function O(e,t){return e.replace(E,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const E=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function k(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function S(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(I(n)&&I(o)){if(!S(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function I(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function j(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function C(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){const n=new R(e,t);return n.subscribe.bind(n)}class R{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=P(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=N),void 0===r.error&&(r.error=N),void 0===r.complete&&(r.complete=N);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function P(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function N(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("825a"),i=n("e95a"),o=n("50c4"),s=n("0366"),a=n("9a1f"),c=n("35a1"),u=n("2a62"),l=function(e,t){this.stopped=e,this.result=t};e.exports=function(e,t,n){var h,d,f,p,m,g,v,_=n&&n.that,b=!(!n||!n.AS_ENTRIES),y=!(!n||!n.IS_ITERATOR),w=!(!n||!n.INTERRUPTED),O=s(t,_,1+b+w),E=function(e){return h&&u(h,"normal",e),new l(!0,e)},T=function(e){return b?(r(e),w?O(e[0],e[1],E):O(e[0],e[1])):w?O(e,E):O(e)};if(y)h=e;else{if(d=c(e),!d)throw TypeError(String(e)+" is not iterable");if(i(d)){for(f=0,p=o(e.length);p>f;f++)if(m=T(e[f]),m&&m instanceof l)return m;return new l(!1)}h=a(e,d)}g=h.next;while(!(v=g.call(h)).done){try{m=T(v.value)}catch(k){u(h,"throw",k)}if("object"==typeof m&&m&&m instanceof l)return m}return new l(!1)}},"23cb":function(e,t,n){var r=n("a691"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(h in t){if(f=t[h],e.noTargetGet?(p=i(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f===typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&o(f,"sham",!0),s(l,h,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"24ee":function(e,t,n){"use strict";var r,i=n("614a"),o=n("5606"),s=n("1fd5"),a=n("ffa6");(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(r||(r={}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const c="firebasestorage.googleapis.com",u="storageBucket",l=12e4,h=6e5;class d extends s["c"]{constructor(e,t){super(f(e),`Firebase Storage: ${t} (${f(e)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}_codeEquals(e){return f(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function f(e){return"storage/"+e}function p(){const e="An unknown error occurred, please check the error payload for server response.";return new d("unknown",e)}function m(e){return new d("object-not-found","Object '"+e+"' does not exist.")}function g(e){return new d("quota-exceeded","Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d("unauthenticated",e)}function _(){return new d("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function b(e){return new d("unauthorized","User does not have permission to access '"+e+"'.")}function y(){return new d("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function w(){return new d("canceled","User canceled the upload/download.")}function O(e){return new d("invalid-url","Invalid URL '"+e+"'.")}function E(e){return new d("invalid-default-bucket","Invalid default bucket '"+e+"'.")}function T(){return new d("no-default-bucket","No default bucket found. Did you set the '"+u+"' property when initializing the app?")}function k(){return new d("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function S(){return new d("server-file-wrong-size","Server recorded incorrect upload file size, please retry the upload.")}function I(){return new d("no-download-url","The given file does not have any download URLs.")}function A(e){return new d("invalid-argument",e)}function j(){return new d("app-deleted","The Firebase app was deleted.")}function C(e){return new d("invalid-root-operation","The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function x(e,t){return new d("invalid-format","String does not match format '"+e+"': "+t)}function R(e){throw new d("internal-error","Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=r.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=r.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=r.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,n,r){if(this.sent_)throw R("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==r)for(const i in r)r.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,r[i].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw R("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw R("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponseText(){if(!this.sent_)throw R("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}function N(){return new P}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{createConnection(){return N()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=D.makeFromUrl(e,t)}catch(r){return new D(e,"")}if(""===n.path)return n;throw E(e)}static makeFromUrl(e,t){let n=null;const r="([A-Za-z0-9.\\-_]+)";function i(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const o="(/(.*))?$",s=new RegExp("^gs://"+r+o,"i"),a={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${r}/o${d}`,"i"),p={bucket:1,path:3},m=t===c?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",v=new RegExp(`^https?://${m}/${r}/${g}`,"i"),_={bucket:1,path:2},b=[{regex:s,indices:a,postModify:i},{regex:f,indices:p,postModify:u},{regex:v,indices:_,postModify:u}];for(let c=0;c<b.length;c++){const t=b[c],r=t.regex.exec(e);if(r){const e=r[t.indices.bucket];let i=r[t.indices.path];i||(i=""),n=new D(e,i),t.postModify(n);break}}if(null==n)throw O(e);return n}}class M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(e,t,n){let r=1,i=null,o=!1,s=0;function a(){return 2===s}let c=!1;function u(...e){c||(c=!0,t.apply(null,e))}function l(t){i=setTimeout(()=>{i=null,e(h,a())},t)}function h(e,...t){if(c)return;if(e)return void u.call(null,e,...t);const n=a()||o;if(n)return void u.call(null,e,...t);let i;r<64&&(r*=2),1===s?(s=2,i=0):i=1e3*(r+Math.random()),l(i)}let d=!1;function f(e){d||(d=!0,c||(null!==i?(e||(s=2),clearTimeout(i),l(0)):e||(s=1)))}return l(0),setTimeout(()=>{o=!0,f(!0)},n),f}function F(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e){return void 0!==e}function $(e){return"function"===typeof e}function B(e){return"object"===typeof e&&!Array.isArray(e)}function H(e){return"string"===typeof e||e instanceof String}function z(e){return q()&&e instanceof Blob}function q(){return"undefined"!==typeof Blob}function W(e,t,n,r){if(r<t)throw A(`Invalid value for '${e}'. Expected ${t} or greater.`);if(r>n)throw A(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(e,t,n){let r=t;return null==n&&(r="https://"+t),`${n}://${r}/v0${e}`}function K(e){const t=encodeURIComponent;let n="?";for(const r in e)if(e.hasOwnProperty(r)){const i=t(r)+"="+t(e[r]);n=n+i+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e,t,n,r,i,o,s,a,c,u,l){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=e,this.method_=t,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=o.slice(),this.callback_=s,this.errorCallback_=a,this.progressCallback_=u,this.timeout_=c,this.pool_=l,this.promise_=new Promise((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()})}start_(){const e=this;function t(t,n){if(n)return void t(!1,new J(!1,null,!0));const i=e.pool_.createConnection();function o(t){const n=t.loaded,r=t.lengthComputable?t.total:-1;null!==e.progressCallback_&&e.progressCallback_(n,r)}e.pendingConnection_=i,null!==e.progressCallback_&&i.addUploadProgressListener(o),i.send(e.url_,e.method_,e.body_,e.headers_).then(()=>{null!==e.progressCallback_&&i.removeUploadProgressListener(o),e.pendingConnection_=null;const n=i.getErrorCode()===r.NO_ERROR,s=i.getStatus();if(!n||e.isRetryStatusCode_(s)){const e=i.getErrorCode()===r.ABORT;return void t(!1,new J(!1,null,e))}const a=-1!==e.successCodes_.indexOf(s);t(!0,new J(a,i))})}function n(t,n){const r=e.resolve_,i=e.reject_,o=n.connection;if(n.wasSuccessCode)try{const t=e.callback_(o,o.getResponseText());V(t)?r(t):r()}catch(s){i(s)}else if(null!==o){const t=p();t.serverResponse=o.getResponseText(),e.errorCallback_?i(e.errorCallback_(o,t)):i(t)}else if(n.canceled){const t=e.appDelete_?j():w();i(t)}else{const e=y();i(e)}}this.canceled_?n(!1,new J(!1,null,!0)):this.backoffId_=U(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&F(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(e){const t=e>=500&&e<600,n=[408,429],r=-1!==n.indexOf(e),i=-1!==this.additionalRetryCodes_.indexOf(e);return t||r||i}}class J{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function Y(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function Q(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function Z(e,t){t&&(e["X-Firebase-GMPID"]=t)}function ee(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function te(e,t,n,r,i,o){const s=K(e.urlParams),a=e.url+s,c=Object.assign({},e.headers);return Z(c,t),Y(c,n),Q(c,o),ee(c,r),new X(a,e.method,c,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function re(...e){const t=ne();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(q())return new Blob(e);throw new d("unsupported-environment","This browser doesn't seem to support creating Blobs")}function ie(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ae{constructor(e,t){this.data=e,this.contentType=t||null}}function ce(e,t){switch(e){case se.RAW:return new ae(ue(t));case se.BASE64:case se.BASE64URL:return new ae(he(e,t));case se.DATA_URL:return new ae(fe(t),pe(t))}throw p()}function ue(e){const t=[];for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);if(r<=127)t.push(r);else if(r<=2047)t.push(192|r>>6,128|63&r);else if(55296===(64512&r)){const i=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(i){const i=r,o=e.charCodeAt(++n);r=65536|(1023&i)<<10|1023&o,t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else t.push(239,191,189)}else 56320===(64512&r)?t.push(239,191,189):t.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(t)}function le(e){let t;try{t=decodeURIComponent(e)}catch(n){throw x(se.DATA_URL,"Malformed data URL.")}return ue(t)}function he(e,t){switch(e){case se.BASE64:{const n=-1!==t.indexOf("-"),r=-1!==t.indexOf("_");if(n||r){const t=n?"-":"_";throw x(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case se.BASE64URL:{const n=-1!==t.indexOf("+"),r=-1!==t.indexOf("/");if(n||r){const t=n?"+":"/";throw x(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oe(t)}catch(i){throw x(e,"Invalid character found")}const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r}class de{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw x(se.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=me(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function fe(e){const t=new de(e);return t.base64?he(se.BASE64,t.rest):le(t.rest)}function pe(e){const t=new de(e);return t.contentType}function me(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e,t){let n=0,r="";z(e)?(this.data_=e,n=e.size,r=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(e,t){if(z(this.data_)){const n=this.data_,r=ie(n,e,t);return null===r?null:new ge(r)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new ge(n,!0)}}static getBlob(...e){if(q()){const t=e.map(e=>e instanceof ge?e.data_:e);return new ge(re.apply(null,t))}{const t=e.map(e=>H(e)?ce(se.RAW,e).data:e.data_);let n=0;t.forEach(e=>{n+=e.byteLength});const r=new Uint8Array(n);let i=0;return t.forEach(e=>{for(let t=0;t<e.length;t++)r[i++]=e[t]}),new ge(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){let t;try{t=JSON.parse(e)}catch(n){return null}return B(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function be(e,t){const n=t.split("/").filter(e=>e.length>0).join("/");return 0===e.length?n:e+"/"+n}function ye(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(e,t){return t}class Oe{constructor(e,t,n,r){this.server=e,this.local=t||e,this.writable=!!n,this.xform=r||we}}let Ee=null;function Te(e){return!H(e)||e.length<2?e:ye(e)}function ke(){if(Ee)return Ee;const e=[];function t(e,t){return Te(t)}e.push(new Oe("bucket")),e.push(new Oe("generation")),e.push(new Oe("metageneration")),e.push(new Oe("name","fullPath",!0));const n=new Oe("name");function r(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const i=new Oe("size");return i.xform=r,e.push(i),e.push(new Oe("timeCreated")),e.push(new Oe("updated")),e.push(new Oe("md5Hash",null,!0)),e.push(new Oe("cacheControl",null,!0)),e.push(new Oe("contentDisposition",null,!0)),e.push(new Oe("contentEncoding",null,!0)),e.push(new Oe("contentLanguage",null,!0)),e.push(new Oe("contentType",null,!0)),e.push(new Oe("metadata","customMetadata",!0)),Ee=e,Ee}function Se(e,t){function n(){const n=e["bucket"],r=e["fullPath"],i=new D(n,r);return t._makeStorageReference(i)}Object.defineProperty(e,"ref",{get:n})}function Ie(e,t,n){const r={type:"file"},i=n.length;for(let o=0;o<i;o++){const e=n[o];r[e.local]=e.xform(r,t[e.server])}return Se(r,e),r}function Ae(e,t,n){const r=ve(t);if(null===r)return null;const i=r;return Ie(e,i,n)}function je(e,t,n,r){const i=ve(t);if(null===i)return null;if(!H(i["downloadTokens"]))return null;const o=i["downloadTokens"];if(0===o.length)return null;const s=encodeURIComponent,a=o.split(","),c=a.map(t=>{const i=e["bucket"],o=e["fullPath"],a="/b/"+s(i)+"/o/"+s(o),c=G(a,n,r),u=K({alt:"media",token:t});return c+u});return c[0]}function Ce(e,t){const n={},r=t.length;for(let i=0;i<r;i++){const r=t[i];r.writable&&(n[r.server]=e[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="prefixes",Re="items";function Pe(e,t,n){const r={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[xe])for(const i of n[xe]){const n=i.replace(/\/$/,""),o=e._makeStorageReference(new D(t,n));r.prefixes.push(o)}if(n[Re])for(const i of n[Re]){const n=e._makeStorageReference(new D(t,i["name"]));r.items.push(n)}return r}function Ne(e,t,n){const r=ve(n);if(null===r)return null;const i=r;return Pe(e,t,i)}class Le{constructor(e,t,n,r){this.url=e,this.method=t,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(e){if(!e)throw p()}function Me(e,t){function n(n,r){const i=Ae(e,r,t);return De(null!==i),i}return n}function Ue(e,t){function n(n,r){const i=Ne(e,t,r);return De(null!==i),i}return n}function Fe(e,t){function n(n,r){const i=Ae(e,r,t);return De(null!==i),je(i,r,e.host,e._protocol)}return n}function Ve(e){function t(t,n){let r;return r=401===t.getStatus()?t.getResponseText().includes("Firebase App Check token is invalid")?_():v():402===t.getStatus()?g(e.bucket):403===t.getStatus()?b(e.path):n,r.serverResponse=n.serverResponse,r}return t}function $e(e){const t=Ve(e);function n(n,r){let i=t(n,r);return 404===n.getStatus()&&(i=m(e.path)),i.serverResponse=r.serverResponse,i}return n}function Be(e,t,n){const r=t.fullServerUrl(),i=G(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Le(i,o,Me(e,n),s);return a.errorHandler=$e(t),a}function He(e,t,n,r,i){const o={};t.isRoot?o["prefix"]="":o["prefix"]=t.path+"/",n&&n.length>0&&(o["delimiter"]=n),r&&(o["pageToken"]=r),i&&(o["maxResults"]=i);const s=t.bucketOnlyServerUrl(),a=G(s,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new Le(a,c,Ue(e,t.bucket),u);return l.urlParams=o,l.errorHandler=Ve(t),l}function ze(e,t,n){const r=t.fullServerUrl(),i=G(r,e.host,e._protocol),o="GET",s=e.maxOperationRetryTime,a=new Le(i,o,Fe(e,n),s);return a.errorHandler=$e(t),a}function qe(e,t,n,r){const i=t.fullServerUrl(),o=G(i,e.host,e._protocol),s="PATCH",a=Ce(n,r),c={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new Le(o,s,Me(e,r),u);return l.headers=c,l.body=a,l.errorHandler=$e(t),l}function We(e,t){const n=t.fullServerUrl(),r=G(n,e.host,e._protocol),i="DELETE",o=e.maxOperationRetryTime;function s(e,t){}const a=new Le(r,i,s,o);return a.successCodes=[200,204],a.errorHandler=$e(t),a}function Ge(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function Ke(e,t,n){const r=Object.assign({},n);return r["fullPath"]=e.path,r["size"]=t.size(),r["contentType"]||(r["contentType"]=Ge(null,t)),r}function Xe(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();s["Content-Type"]="multipart/related; boundary="+c;const u=Ke(t,r,i),l=Ce(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ge.getBlob(h,r,d);if(null===f)throw k();const p={name:u["fullPath"]},m=G(o,e.host,e._protocol),g="POST",v=e.maxUploadRetryTime,_=new Le(m,g,Me(e,n),v);return _.urlParams=p,_.headers=s,_.body=f.uploadData(),_.errorHandler=Ve(t),_}class Je{constructor(e,t,n,r){this.current=e,this.total=t,this.finalized=!!n,this.metadata=r||null}}function Ye(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(i){De(!1)}const r=t||["active"];return De(!!n&&-1!==r.indexOf(n)),n}function Qe(e,t,n,r,i){const o=t.bucketOnlyServerUrl(),s=Ke(t,r,i),a={name:s["fullPath"]},c=G(o,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":""+r.size(),"X-Goog-Upload-Header-Content-Type":s["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ce(s,n),d=e.maxUploadRetryTime;function f(e){let t;Ye(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){De(!1)}return De(H(t)),t}const p=new Le(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Ve(t),p}function Ze(e,t,n,r){const i={"X-Goog-Upload-Command":"query"};function o(e){const t=Ye(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(o){De(!1)}n||De(!1);const i=Number(n);return De(!isNaN(i)),new Je(i,r.size(),"final"===t)}const s="POST",a=e.maxUploadRetryTime,c=new Le(n,s,o,a);return c.headers=i,c.errorHandler=Ve(t),c}const et=262144;function tt(e,t,n,r,i,o,s,a){const c=new Je(0,0);if(s?(c.current=s.current,c.total=s.total):(c.current=0,c.total=r.size()),r.size()!==c.total)throw S();const u=c.total-c.current;let l=u;i>0&&(l=Math.min(l,i));const h=c.current,d=h+l,f=l===u?"upload, finalize":"upload",p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":""+c.current},m=r.slice(h,d);if(null===m)throw k();function g(e,n){const i=Ye(e,["active","final"]),s=c.current+l,a=r.size();let u;return u="final"===i?Me(t,o)(e,n):null,new Je(s,a,"final"===i,u)}const v="POST",_=t.maxUploadRetryTime,b=new Le(n,v,g,_);return b.headers=p,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=Ve(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nt={STATE_CHANGED:"state_changed"},rt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function it(e){switch(e){case"running":case"pausing":case"canceling":return rt.RUNNING;case"paused":return rt.PAUSED;case"success":return rt.SUCCESS;case"canceled":return rt.CANCELED;case"error":return rt.ERROR;default:return rt.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,n){const r=$(e)||null!=t||null!=n;if(r)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(e){return(...t)=>{Promise.resolve().then(()=>e(...t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=ke(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{this._request=void 0,this._chunkMultiplier=1,e._codeEquals("canceled")?(this._needToFetchStatus=!0,this.completeTransitions_()):(this._error=e,this._transition("error"))},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals("canceled")?this.completeTransitions_():(this._error=e,this._transition("error"))},this._promise=new Promise((e,t)=>{this._resolve=e,this._reject=t,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this._continueUpload():this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,t)=>{const n=Qe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((t,n)=>{const r=Ze(this._ref.storage,this._ref._location,e,this._blob),i=this._ref.storage._makeRequest(r,t,n);this._request=i,i.getPromise().then(e=>{e=e,this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=et*this._chunkMultiplier,t=new Je(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken((r,i)=>{let o;try{o=tt(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const s=this._ref.storage._makeRequest(o,r,i);this._request=s,s.getPromise().then(e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){const e=et*this._chunkMultiplier;e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,t)=>{const n=Be(this._ref.storage,this._ref._location,this._mappings),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,t)=>{const n=Xe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),r=this._ref.storage._makeRequest(n,e,t);this._request=r,r.getPromise().then(e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":this._state=e,void 0!==this._request&&this._request.cancel();break;case"pausing":this._state=e,void 0!==this._request&&this._request.cancel();break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=w(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=it(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,r){const i=new ot(t||void 0,n||void 0,r||void 0);return this._addObserver(i),()=>{this._removeObserver(i)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach(e=>{this._notifyObserver(e)})}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(it(this._state)){case rt.SUCCESS:st(this._resolve.bind(null,this.snapshot))();break;case rt.CANCELED:case rt.ERROR:const t=this._reject;st(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=it(this._state);switch(t){case rt.RUNNING:case rt.PAUSED:e.next&&st(e.next.bind(e,this.snapshot))();break;case rt.SUCCESS:e.complete&&st(e.complete.bind(e))();break;case rt.CANCELED:case rt.ERROR:e.error&&st(e.error.bind(e,this._error))();break;default:e.error&&st(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e,t){this._service=e,this._location=t instanceof D?t:D.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ct(e,t)}get root(){const e=new D(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ye(this._location.path)}get storage(){return this._service}get parent(){const e=_e(this._location.path);if(null===e)return null;const t=new D(this._location.bucket,e);return new ct(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw C(e)}}function ut(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new at(e,new ge(t),n)}function lt(e){const t={prefixes:[],items:[]};return ht(e,t).then(()=>t)}async function ht(e,t,n){const r={pageToken:n},i=await dt(e,r);t.prefixes.push(...i.prefixes),t.items.push(...i.items),null!=i.nextPageToken&&await ht(e,t,i.nextPageToken)}async function dt(e,t){null!=t&&"number"===typeof t.maxResults&&W("options.maxResults",1,1e3,t.maxResults);const n=t||{},r=He(e.storage,e._location,"/",n.pageToken,n.maxResults);return(await e.storage.makeRequestWithTokens(r)).getPromise()}async function ft(e){e._throwIfRoot("getMetadata");const t=Be(e.storage,e._location,ke());return(await e.storage.makeRequestWithTokens(t)).getPromise()}async function pt(e,t){e._throwIfRoot("updateMetadata");const n=qe(e.storage,e._location,t,ke());return(await e.storage.makeRequestWithTokens(n)).getPromise()}async function mt(e){e._throwIfRoot("getDownloadURL");const t=ze(e.storage,e._location,ke());return(await e.storage.makeRequestWithTokens(t)).getPromise().then(e=>{if(null===e)throw I();return e})}async function gt(e){e._throwIfRoot("deleteObject");const t=We(e.storage,e._location);return(await e.storage.makeRequestWithTokens(t)).getPromise()}function vt(e,t){const n=be(e._location.path,t),r=new D(e._location.bucket,n);return new ct(e.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return/^[A-Za-z]+:\/\//.test(e)}function bt(e,t){return new ct(e,t)}function yt(e,t){if(e instanceof Tt){const n=e;if(null==n._bucket)throw T();const r=new ct(n,n._bucket);return null!=t?yt(r,t):r}return void 0!==t?vt(e,t):e}function wt(e,t){if(t&&_t(t)){if(e instanceof Tt)return bt(e,t);throw A("To use ref(service, url), the first argument must be a Storage instance.")}return yt(e,t)}function Ot(e,t){const n=null===t||void 0===t?void 0:t[u];return null==n?null:D.makeFromBucketSpec(n,e)}function Et(e,t,n,r={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:i}=r;i&&(e._overrideAuthToken="string"===typeof i?i:Object(s["f"])(i,e.app.options.projectId))}class Tt{constructor(e,t,n,r,i,o){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=o,this._bucket=null,this._host=c,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=l,this._maxUploadRetryTime=h,this._requests=new Set,this._bucket=null!=i?D.makeFromBucketSpec(i,this._host):Ot(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=D.makeFromBucketSpec(this._url,e):this._bucket=Ot(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){W("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){W("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ct(this,e)}_makeRequest(e,t,n){if(this._deleted)return new M(j());{const r=te(e,this._appId,t,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(e){const[t,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n)}}const kt="@firebase/storage",St="0.8.3",It="storage";function At(e,t,n){return e=Object(s["k"])(e),ut(e,t,n)}function jt(e){return e=Object(s["k"])(e),ft(e)}function Ct(e,t){return e=Object(s["k"])(e),pt(e,t)}function xt(e,t){return e=Object(s["k"])(e),dt(e,t)}function Rt(e){return e=Object(s["k"])(e),lt(e)}function Pt(e){return e=Object(s["k"])(e),mt(e)}function Nt(e){return e=Object(s["k"])(e),gt(e)}function Lt(e,t){return e=Object(s["k"])(e),wt(e,t)}function Dt(e,t){return vt(e,t)}function Mt(e,t,n,r={}){Et(e,t,n,r)}function Ut(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return new Tt(n,r,i,new L,t,o["SDK_VERSION"])}function Ft(){Object(o["_registerComponent"])(new a["a"](It,Ut,"PUBLIC").setMultipleInstances(!0)),Object(o["registerVersion"])(kt,St)}Ft();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vt{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Vt(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then(t=>{if(e)return e(new Vt(t,this,this._ref))},t)}on(e,t,n,r){let i=void 0;return t&&(i="function"===typeof t?e=>t(new Vt(e,this,this._ref)):{next:t.next?e=>t.next(new Vt(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,i,n||void 0,r||void 0)}}class Bt{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map(e=>new Ht(e,this._service))}get items(){return this._delegate.items.map(e=>new Ht(e,this._service))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Dt(this._delegate,e);return new Ht(t,this.storage)}get root(){return new Ht(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Ht(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new $t(At(this._delegate,e,t),this)}putString(e,t=se.RAW,n){this._throwIfRoot("putString");const r=ce(t,e),i=Object.assign({},n);return null==i["contentType"]&&null!=r.contentType&&(i["contentType"]=r.contentType),new $t(new at(this._delegate,new ge(r.data,!0),i),this)}listAll(){return Rt(this._delegate).then(e=>new Bt(e,this.storage))}list(e){return xt(this._delegate,e||void 0).then(e=>new Bt(e,this.storage))}getMetadata(){return jt(this._delegate)}updateMetadata(e){return Ct(this._delegate,e)}getDownloadURL(){return Pt(this._delegate)}delete(){return this._throwIfRoot("delete"),Nt(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw C(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(qt(e))throw A("ref() expected a child path but got a URL, use refFromURL instead.");return new Ht(Lt(this._delegate,e),this)}refFromURL(e){if(!qt(e))throw A("refFromURL() expected a full URL but got a child path, use ref() instead.");try{D.makeFromUrl(e,this._delegate.host)}catch(t){throw A("refFromUrl() expected a valid full URL but got an invalid one.")}return new Ht(Lt(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){Mt(this._delegate,e,t,n)}}function qt(e){return/^[A-Za-z]+:\/\//.test(e)}const Wt="@firebase/storage-compat",Gt="0.1.3",Kt="storage-compat";function Xt(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("storage").getImmediate({identifier:t}),i=new zt(n,r);return i}function Jt(e){const t={TaskState:rt,TaskEvent:nt,StringFormat:se,Storage:zt,Reference:Ht};e.INTERNAL.registerComponent(new a["a"](Kt,Xt,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Wt,Gt)}Jt(i["a"])},"260b":function(e,t,n){"use strict";var r=n("5606");n.d(t,"a",(function(){return r["initializeApp"]}));var i="firebase",o="9.1.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(r["registerVersion"])(i,o,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("825a"),i=n("dc4a");e.exports=function(e,t,n){var o,s;r(e);try{if(o=i(e,"return"),!o){if("throw"===t)throw n;return n}o=o.call(e)}catch(a){s=!0,o=a}if("throw"===t)throw n;if(s)throw o;return r(o),n}},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("1626"),u=n("d039"),l=n("0366"),h=n("1be4"),d=n("cc12"),f=n("1cdc"),p=n("605d"),m=a.setImmediate,g=a.clearImmediate,v=a.process,_=a.MessageChannel,b=a.Dispatch,y=0,w={},O="onreadystatechange";try{r=a.location}catch(I){}var E=function(e){if(w.hasOwnProperty(e)){var t=w[e];delete w[e],t()}},T=function(e){return function(){E(e)}},k=function(e){E(e.data)},S=function(e){a.postMessage(String(e),r.protocol+"//"+r.host)};m&&g||(m=function(e){var t=[],n=arguments.length,r=1;while(n>r)t.push(arguments[r++]);return w[++y]=function(){(c(e)?e:Function(e)).apply(void 0,t)},i(y),y},g=function(e){delete w[e]},p?i=function(e){v.nextTick(T(e))}:b&&b.now?i=function(e){b.now(T(e))}:_&&!f?(o=new _,s=o.port2,o.port1.onmessage=k,i=l(s.postMessage,s,1)):a.addEventListener&&c(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!u(S)?(i=S,a.addEventListener("message",k,!1)):i=O in d("script")?function(e){h.appendChild(d("script"))[O]=function(){h.removeChild(this),E(e)}}:function(e){setTimeout(T(e),0)}),e.exports={set:m,clear:g}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l?(r=l.split("."),i=r[0]<4?1:r[0]+r[1]):s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=r[1]))),e.exports=i&&+i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("825a"),s=n("df75");e.exports=r?Object.defineProperties:function(e,t){o(e);var n,r=s(t),a=r.length,c=0;while(a>c)i.f(e,n=r[c++],t[n]);return e}},"3bbe":function(e,t,n){var r=n("1626");e.exports=function(e){if("object"===typeof e||r(e))return e;throw TypeError("Can't set "+String(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f4e":function(e,t,n){"use strict";n.d(t,"setupDevtoolsPlugin",(function(){return s}));var r=n("abc5"),i=n("b774"),o=n("f30a");function s(e,t){const n=Object(r["b"])(),s=Object(r["a"])(),a=r["c"]&&e.enableEarlyProxy;if(!s||!n.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__&&a){const r=a?new o["a"](e,s):null,i=n.__VUE_DEVTOOLS_PLUGINS__=n.__VUE_DEVTOOLS_PLUGINS__||[];i.push({pluginDescriptor:e,setupFn:t,proxy:r}),r&&t(r.proxiedTarget)}else s.emit(i["b"],e,t)}},"3f8c":function(e,t){e.exports={}},"428f":function(e,t,n){var r=n("da84");e.exports=r},"44ad":function(e,t,n){var r=n("d039"),i=n("c6b6"),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==i(e)?o.call(e,""):Object(e)}:Object},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("1626"),i=n("861d");e.exports=function(e,t){var n,o;if("string"===t&&r(n=e.toString)&&!i(o=n.call(e)))return o;if(r(n=e.valueOf)&&!i(o=n.call(e)))return o;if("string"!==t&&r(n=e.toString)&&!i(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("50c4"),o=n("23cb"),s=function(e){return function(t,n,s){var a,c=r(t),u=i(c.length),l=o(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),i=n("b727").filter,o=n("1dde"),s=o("filter");r({target:"Array",proto:!0,forced:!s},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4f60":function(e,t,n){"use strict";var r=n("614a");n.d(t,"a",(function(){return r["a"]}));var i="firebase",o="9.1.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
r["a"].registerVersion(i,o,"app-compat")},"4fc1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return h}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function h(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},5087:function(e,t,n){var r=n("68ee"),i=n("0d51");e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("a691"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5135:function(e,t,n){var r=n("7b0b"),i={}.hasOwnProperty;e.exports=Object.hasOwn||function(e,t){return i.call(r(e),t)}},5502:function(e,t,n){"use strict";n.d(t,"a",(function(){return X})),n.d(t,"b",(function(){return Q}));var r=n("7a23"),i=n("3f4e"),o="store";function s(e,t){Object.keys(e).forEach((function(n){return t(e[n],n)}))}function a(e){return null!==e&&"object"===typeof e}function c(e){return e&&"function"===typeof e.then}function u(e,t){if(!e)throw new Error("[vuex] "+t)}function l(e,t){return function(){return e(t)}}function h(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function d(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;p(e,n,[],e._modules.root,!0),f(e,n,t)}function f(e,t,n){var i=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var o=e._wrappedGetters,a={};s(o,(function(t,n){a[n]=l(t,e),Object.defineProperty(e.getters,n,{get:function(){return a[n]()},enumerable:!0})})),e._state=Object(r["u"])({data:t}),e.strict&&y(e),i&&n&&e._withCommit((function(){i.data=null}))}function p(e,t,n,r,i){var o=!n.length,s=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[s]&&console.error("[vuex] duplicate namespace "+s+" for the namespaced module "+n.join("/")),e._modulesNamespaceMap[s]=r),!o&&!i){var a=w(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit((function(){c in a&&console.warn('[vuex] state field "'+c+'" was overridden by a module with the same name at "'+n.join(".")+'"'),a[c]=r.state}))}var u=r.context=m(e,s,n);r.forEachMutation((function(t,n){var r=s+n;v(e,r,t,u)})),r.forEachAction((function(t,n){var r=t.root?n:s+n,i=t.handler||t;_(e,r,i,u)})),r.forEachGetter((function(t,n){var r=s+n;b(e,r,t,u)})),r.forEachChild((function(r,o){p(e,t,n.concat(o),r,i)}))}function m(e,t,n){var r=""===t,i={dispatch:r?e.dispatch:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;if(a&&a.root||(c=t+c,e._actions[c]))return e.dispatch(c,s);console.error("[vuex] unknown local action type: "+o.type+", global type: "+c)},commit:r?e.commit:function(n,r,i){var o=O(n,r,i),s=o.payload,a=o.options,c=o.type;a&&a.root||(c=t+c,e._mutations[c])?e.commit(c,s,a):console.error("[vuex] unknown local mutation type: "+o.type+", global type: "+c)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return g(e,t)}},state:{get:function(){return w(e.state,n)}}}),i}function g(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach((function(i){if(i.slice(0,r)===t){var o=i.slice(r);Object.defineProperty(n,o,{get:function(){return e.getters[i]},enumerable:!0})}})),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function v(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push((function(t){n.call(e,r.state,t)}))}function _(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push((function(t){var i=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},t);return c(i)||(i=Promise.resolve(i)),e._devtoolHook?i.catch((function(t){throw e._devtoolHook.emit("vuex:error",t),t})):i}))}function b(e,t,n,r){e._wrappedGetters[t]?console.error("[vuex] duplicate getter key: "+t):e._wrappedGetters[t]=function(e){return n(r.state,r.getters,e.state,e.getters)}}function y(e){Object(r["C"])((function(){return e._state.data}),(function(){u(e._committing,"do not mutate vuex store state outside mutation handlers.")}),{deep:!0,flush:"sync"})}function w(e,t){return t.reduce((function(e,t){return e[t]}),e)}function O(e,t,n){return a(e)&&e.type&&(n=t,t=e,e=e.type),u("string"===typeof e,"expects string as the type, but found "+typeof e+"."),{type:e,payload:t,options:n}}var E="vuex bindings",T="vuex:mutations",k="vuex:actions",S="vuex",I=0;function A(e,t){Object(i["setupDevtoolsPlugin"])({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[E]},(function(n){n.addTimelineLayer({id:T,label:"Vuex Mutations",color:j}),n.addTimelineLayer({id:k,label:"Vuex Actions",color:j}),n.addInspector({id:S,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree((function(n){if(n.app===e&&n.inspectorId===S)if(n.filter){var r=[];L(r,t._modules.root,n.filter,""),n.rootNodes=r}else n.rootNodes=[N(t._modules.root,"")]})),n.on.getInspectorState((function(n){if(n.app===e&&n.inspectorId===S){var r=n.nodeId;g(t,r),n.state=D(U(t._modules,r),"root"===r?t.getters:t._makeLocalGettersCache,r)}})),n.on.editInspectorState((function(n){if(n.app===e&&n.inspectorId===S){var r=n.nodeId,i=n.path;"root"!==r&&(i=r.split("/").filter(Boolean).concat(i)),t._withCommit((function(){n.set(t._state.data,i,n.state.value)}))}})),t.subscribe((function(e,t){var r={};e.payload&&(r.payload=e.payload),r.state=t,n.notifyComponentUpdate(),n.sendInspectorTree(S),n.sendInspectorState(S),n.addTimelineEvent({layerId:T,event:{time:Date.now(),title:e.type,data:r}})})),t.subscribeAction({before:function(e,t){var r={};e.payload&&(r.payload=e.payload),e._id=I++,e._time=Date.now(),r.state=t,n.addTimelineEvent({layerId:k,event:{time:e._time,title:e.type,groupId:e._id,subtitle:"start",data:r}})},after:function(e,t){var r={},i=Date.now()-e._time;r.duration={_custom:{type:"duration",display:i+"ms",tooltip:"Action duration",value:i}},e.payload&&(r.payload=e.payload),r.state=t,n.addTimelineEvent({layerId:k,event:{time:Date.now(),title:e.type,groupId:e._id,subtitle:"end",data:r}})}})}))}var j=8702998,C=6710886,x=16777215,R={label:"namespaced",textColor:x,backgroundColor:C};function P(e){return e&&"root"!==e?e.split("/").slice(-2,-1)[0]:"Root"}function N(e,t){return{id:t||"root",label:P(t),tags:e.namespaced?[R]:[],children:Object.keys(e._children).map((function(n){return N(e._children[n],t+n+"/")}))}}function L(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[R]:[]}),Object.keys(t._children).forEach((function(i){L(e,t._children[i],n,r+i+"/")}))}function D(e,t,n){t="root"===n?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map((function(t){return{key:t,editable:!0,value:e.state[t]}}))};if(r.length){var o=M(t);i.getters=Object.keys(o).map((function(e){return{key:e.endsWith("/")?P(e):e,editable:!1,value:F((function(){return o[e]}))}}))}return i}function M(e){var t={};return Object.keys(e).forEach((function(n){var r=n.split("/");if(r.length>1){var i=t,o=r.pop();r.forEach((function(e){i[e]||(i[e]={_custom:{value:{},display:e,tooltip:"Module",abstract:!0}}),i=i[e]._custom.value})),i[o]=F((function(){return e[n]}))}else t[n]=F((function(){return e[n]}))})),t}function U(e,t){var n=t.split("/").filter((function(e){return e}));return n.reduce((function(e,r,i){var o=e[r];if(!o)throw new Error('Missing module "'+r+'" for path "'+t+'".');return i===n.length-1?o:o._children}),"root"===t?e:e.root._children)}function F(e){try{return e()}catch(t){return t}}var V=function(e,t){this.runtime=t,this._children=Object.create(null),this._rawModule=e;var n=e.state;this.state=("function"===typeof n?n():n)||{}},$={namespaced:{configurable:!0}};$.namespaced.get=function(){return!!this._rawModule.namespaced},V.prototype.addChild=function(e,t){this._children[e]=t},V.prototype.removeChild=function(e){delete this._children[e]},V.prototype.getChild=function(e){return this._children[e]},V.prototype.hasChild=function(e){return e in this._children},V.prototype.update=function(e){this._rawModule.namespaced=e.namespaced,e.actions&&(this._rawModule.actions=e.actions),e.mutations&&(this._rawModule.mutations=e.mutations),e.getters&&(this._rawModule.getters=e.getters)},V.prototype.forEachChild=function(e){s(this._children,e)},V.prototype.forEachGetter=function(e){this._rawModule.getters&&s(this._rawModule.getters,e)},V.prototype.forEachAction=function(e){this._rawModule.actions&&s(this._rawModule.actions,e)},V.prototype.forEachMutation=function(e){this._rawModule.mutations&&s(this._rawModule.mutations,e)},Object.defineProperties(V.prototype,$);var B=function(e){this.register([],e,!1)};function H(e,t,n){if(G(e,n),t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return void console.warn("[vuex] trying to add a new module '"+r+"' on hot reloading, manual reload is needed");H(e.concat(r),t.getChild(r),n.modules[r])}}B.prototype.get=function(e){return e.reduce((function(e,t){return e.getChild(t)}),this.root)},B.prototype.getNamespace=function(e){var t=this.root;return e.reduce((function(e,n){return t=t.getChild(n),e+(t.namespaced?n+"/":"")}),"")},B.prototype.update=function(e){H([],this.root,e)},B.prototype.register=function(e,t,n){var r=this;void 0===n&&(n=!0),G(e,t);var i=new V(t,n);if(0===e.length)this.root=i;else{var o=this.get(e.slice(0,-1));o.addChild(e[e.length-1],i)}t.modules&&s(t.modules,(function(t,i){r.register(e.concat(i),t,n)}))},B.prototype.unregister=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1],r=t.getChild(n);r?r.runtime&&t.removeChild(n):console.warn("[vuex] trying to unregister module '"+n+"', which is not registered")},B.prototype.isRegistered=function(e){var t=this.get(e.slice(0,-1)),n=e[e.length-1];return!!t&&t.hasChild(n)};var z={assert:function(e){return"function"===typeof e},expected:"function"},q={assert:function(e){return"function"===typeof e||"object"===typeof e&&"function"===typeof e.handler},expected:'function or object with "handler" function'},W={getters:z,mutations:z,actions:q};function G(e,t){Object.keys(W).forEach((function(n){if(t[n]){var r=W[n];s(t[n],(function(t,i){u(r.assert(t),K(e,n,i,t,r.expected))}))}}))}function K(e,t,n,r,i){var o=t+" should be "+i+' but "'+t+"."+n+'"';return e.length>0&&(o+=' in module "'+e.join(".")+'"'),o+=" is "+JSON.stringify(r)+".",o}function X(e){return new J(e)}var J=function e(t){var n=this;void 0===t&&(t={}),u("undefined"!==typeof Promise,"vuex requires a Promise polyfill in this browser."),u(this instanceof e,"store must be called with the new operator.");var r=t.plugins;void 0===r&&(r=[]);var i=t.strict;void 0===i&&(i=!1);var o=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new B(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=o;var s=this,a=this,c=a.dispatch,l=a.commit;this.dispatch=function(e,t){return c.call(s,e,t)},this.commit=function(e,t,n){return l.call(s,e,t,n)},this.strict=i;var h=this._modules.root.state;p(this,h,[],this._modules.root),f(this,h),r.forEach((function(e){return e(n)}))},Y={state:{configurable:!0}};J.prototype.install=function(e,t){e.provide(t||o,this),e.config.globalProperties.$store=this;var n=void 0===this._devtools||this._devtools;n&&A(e,this)},Y.state.get=function(){return this._state.data},Y.state.set=function(e){u(!1,"use store.replaceState() to explicit replace store state.")},J.prototype.commit=function(e,t,n){var r=this,i=O(e,t,n),o=i.type,s=i.payload,a=i.options,c={type:o,payload:s},u=this._mutations[o];u?(this._withCommit((function(){u.forEach((function(e){e(s)}))})),this._subscribers.slice().forEach((function(e){return e(c,r.state)})),a&&a.silent&&console.warn("[vuex] mutation type: "+o+". Silent option has been removed. Use the filter functionality in the vue-devtools")):console.error("[vuex] unknown mutation type: "+o)},J.prototype.dispatch=function(e,t){var n=this,r=O(e,t),i=r.type,o=r.payload,s={type:i,payload:o},a=this._actions[i];if(a){try{this._actionSubscribers.slice().filter((function(e){return e.before})).forEach((function(e){return e.before(s,n.state)}))}catch(u){console.warn("[vuex] error in before action subscribers: "),console.error(u)}var c=a.length>1?Promise.all(a.map((function(e){return e(o)}))):a[0](o);return new Promise((function(e,t){c.then((function(t){try{n._actionSubscribers.filter((function(e){return e.after})).forEach((function(e){return e.after(s,n.state)}))}catch(u){console.warn("[vuex] error in after action subscribers: "),console.error(u)}e(t)}),(function(e){try{n._actionSubscribers.filter((function(e){return e.error})).forEach((function(t){return t.error(s,n.state,e)}))}catch(u){console.warn("[vuex] error in error action subscribers: "),console.error(u)}t(e)}))}))}console.error("[vuex] unknown action type: "+i)},J.prototype.subscribe=function(e,t){return h(e,this._subscribers,t)},J.prototype.subscribeAction=function(e,t){var n="function"===typeof e?{before:e}:e;return h(n,this._actionSubscribers,t)},J.prototype.watch=function(e,t,n){var i=this;return u("function"===typeof e,"store.watch only accepts a function."),Object(r["C"])((function(){return e(i.state,i.getters)}),t,Object.assign({},n))},J.prototype.replaceState=function(e){var t=this;this._withCommit((function(){t._state.data=e}))},J.prototype.registerModule=function(e,t,n){void 0===n&&(n={}),"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),u(e.length>0,"cannot register the root module by using registerModule."),this._modules.register(e,t),p(this,this.state,e,this._modules.get(e),n.preserveState),f(this,this.state)},J.prototype.unregisterModule=function(e){var t=this;"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.unregister(e),this._withCommit((function(){var n=w(t.state,e.slice(0,-1));delete n[e[e.length-1]]})),d(this)},J.prototype.hasModule=function(e){return"string"===typeof e&&(e=[e]),u(Array.isArray(e),"module path must be a string or an Array."),this._modules.isRegistered(e)},J.prototype.hotUpdate=function(e){this._modules.update(e),d(this,!0)},J.prototype._withCommit=function(e){var t=this._committing;this._committing=!0,e(),this._committing=t},Object.defineProperties(J.prototype,Y);te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapState: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=this.$store.state,n=this.$store.getters;if(e){var r=ne(this.$store,"mapState",e);if(!r)return;t=r.context.state,n=r.context.getters}return"function"===typeof i?i.call(this,t,n):t[i]},n[r].vuex=!0})),n})),te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapMutations: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.commit;if(e){var o=ne(this.$store,"mapMutations",e);if(!o)return;r=o.context.commit}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));var Q=te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapGetters: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;i=e+i,n[r]=function(){if(!e||ne(this.$store,"mapGetters",e)){if(i in this.$store.getters)return this.$store.getters[i];console.error("[vuex] unknown getter: "+i)}},n[r].vuex=!0})),n}));te((function(e,t){var n={};return ee(t)||console.error("[vuex] mapActions: mapper parameter must be either an Array or an Object"),Z(t).forEach((function(t){var r=t.key,i=t.val;n[r]=function(){var t=[],n=arguments.length;while(n--)t[n]=arguments[n];var r=this.$store.dispatch;if(e){var o=ne(this.$store,"mapActions",e);if(!o)return;r=o.context.dispatch}return"function"===typeof i?i.apply(this,[r].concat(t)):r.apply(this.$store,[i].concat(t))}})),n}));function Z(e){return ee(e)?Array.isArray(e)?e.map((function(e){return{key:e,val:e}})):Object.keys(e).map((function(t){return{key:t,val:e[t]}})):[]}function ee(e){return Array.isArray(e)||a(e)}function te(e){return function(t,n){return"string"!==typeof t?(n=t,t=""):"/"!==t.charAt(t.length-1)&&(t+="/"),e(t,n)}}function ne(e,t,n){var r=e._modulesNamespaceMap[n];return r||console.error("[vuex] module namespace not found in "+t+"(): "+n),r}},5530:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("b64b"),n("a4d3"),n("4de4"),n("e439"),n("159b"),n("dbb4");function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},5606:function(e,t,n){"use strict";n.r(t),n.d(t,"SDK_VERSION",(function(){return X})),n.d(t,"_DEFAULT_ENTRY_NAME",(function(){return D})),n.d(t,"_addComponent",(function(){return V})),n.d(t,"_addOrOverwriteComponent",(function(){return $})),n.d(t,"_apps",(function(){return U})),n.d(t,"_clearComponents",(function(){return q})),n.d(t,"_components",(function(){return F})),n.d(t,"_getProvider",(function(){return H})),n.d(t,"_registerComponent",(function(){return B})),n.d(t,"_removeServiceInstance",(function(){return z})),n.d(t,"deleteApp",(function(){return Z})),n.d(t,"getApp",(function(){return Y})),n.d(t,"getApps",(function(){return Q})),n.d(t,"initializeApp",(function(){return J})),n.d(t,"onLog",(function(){return te})),n.d(t,"registerVersion",(function(){return ee})),n.d(t,"setLogLevel",(function(){return ne}));var r=n("ffa6"),i=n("4fc1"),o=n("1fd5");n.d(t,"FirebaseError",(function(){return o["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.2",l=new i["b"]("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",_="@firebase/database",b="@firebase/database-compat",y="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",E="@firebase/installations-compat",T="@firebase/messaging",k="@firebase/messaging-compat",S="@firebase/performance",I="@firebase/performance-compat",A="@firebase/remote-config",j="@firebase/remote-config-compat",C="@firebase/storage",x="@firebase/storage-compat",R="@firebase/firestore",P="@firebase/firestore-compat",N="firebase",L="9.1.1",D="[DEFAULT]",M={[c]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[_]:"fire-rtdb",[b]:"fire-rtdb-compat",[y]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[E]:"fire-iid-compat",[T]:"fire-fcm",[k]:"fire-fcm-compat",[S]:"fire-perf",[I]:"fire-perf-compat",[A]:"fire-rc",[j]:"fire-rc-compat",[C]:"fire-gcs",[x]:"fire-gcs-compat",[R]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[N]:"fire-js-all"},U=new Map,F=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e,t){e.container.addOrOverwriteComponent(t)}function B(e){const t=e.name;if(F.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;F.set(t,e);for(const n of U.values())V(n,e);return!0}function H(e,t){return e.container.getProvider(t)}function z(e,t,n=D){H(e,t).clearInstance(n)}function q(){F.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},G=new o["b"]("app","Firebase",W);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=L;function J(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:D,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw G.create("bad-app-name",{appName:String(i)});const s=U.get(i);if(s){if(Object(o["h"])(e,s.options)&&Object(o["h"])(n,s.config))return s;throw G.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of F.values())a.addComponent(r);const c=new K(e,n,a);return U.set(i,c),c}function Y(e=D){const t=U.get(e);if(!t)throw G.create("no-app",{appName:e});return t}function Q(){return Array.from(U.values())}async function Z(e){const t=e.name;U.has(t)&&(U.delete(t),await Promise.all(e.container.getProviders().map(e=>e.delete())),e.isDeleted=!0)}function ee(e,t,n){var i;let o=null!==(i=M[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}B(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}function te(e,t){if(null!==e&&"function"!==typeof e)throw G.create("invalid-log-argument");Object(i["d"])(e,t)}function ne(e){Object(i["c"])(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){B(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),ee(c,u,e),ee("fire-js","")}re()},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.18.1",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("241c"),o=n("7418"),s=n("825a");e.exports=r("Reflect","ownKeys")||function(e){var t=i.f(s(e)),n=o.f;return n?t.concat(n(e)):t}},"577e":function(e,t,n){var r=n("f5df");e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return String(e)}},"59ed":function(e,t,n){var r=n("1626"),i=n("0d51");e.exports=function(e){if(r(e))return e;throw TypeError(i(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("5135"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("d039"),o=n("df75"),s=n("7418"),a=n("d1e7"),c=n("7b0b"),u=n("44ad"),l=Object.assign,h=Object.defineProperty;e.exports=!l||i((function(){if(r&&1!==l({b:1},l(h({},"a",{enumerable:!0,get:function(){h(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=l({},e)[n]||o(l({},t)).join("")!=i}))?function(e,t){var n=c(e),i=arguments.length,l=1,h=s.f,d=a.f;while(i>l){var f,p=u(arguments[l++]),m=h?o(p).concat(h(p)):o(p),g=m.length,v=0;while(g>v)f=m[v++],r&&!d.call(p,f)||(n[f]=p[f])}return n}:l},"614a":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("1fd5"),i=n("ffa6"),o=n("5606"),s=n("4fc1");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,Object(o["_addComponent"])(e,new i["a"]("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(o["deleteApp"])(this._delegate)))}_getService(e,t=o["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=o["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Object(o["_addComponent"])(this._delegate,e)}_addOrOverwriteComponent(e){Object(o["_addOrOverwriteComponent"])(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new r["b"]("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:s,registerVersion:o["registerVersion"],setLogLevel:o["setLogLevel"],onLog:o["onLog"],apps:null,SDK_VERSION:o["SDK_VERSION"],INTERNAL:{registerComponent:l,removeApp:i,useAsService:h,modularAPIs:o}};function i(e){delete t[e]}function s(e){if(e=e||o["_DEFAULT_ENTRY_NAME"],!Object(r["e"])(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(i,s={}){const a=o["initializeApp"](i,s);if(Object(r["e"])(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map(e=>t[e])}function l(t){const i=t.name,a=i.replace("-compat","");if(o["_registerComponent"](t)&&"PUBLIC"===t.type){const o=(e=s())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:i});return e[a]()};void 0!==t.serviceProps&&Object(r["i"])(o,t.serviceProps),n[a]=o,e.prototype[a]=function(...e){const n=this._getService.bind(this,i);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),s["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){Object(r["i"])(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:r["g"],ErrorFactory:r["b"],deepExtend:r["i"]}),e}const d=h(),f=new s["b"]("@firebase/app-compat"),p="@firebase/app-compat",m="0.1.3";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){Object(o["registerVersion"])(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(r["m"])()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},6547:function(e,t,n){var r=n("a691"),i=n("577e"),o=n("1d80"),s=function(e){return function(t,n){var s,a,c=i(o(t)),u=r(n),l=c.length;return u<0||u>=l?e?"":void 0:(s=c.charCodeAt(u),s<55296||s>56319||u+1===l||(a=c.charCodeAt(u+1))<56320||a>57343?e?c.charAt(u):s:e?c.slice(u,u+2):a-56320+(s-55296<<10)+65536)}};e.exports={codeAt:s(!1),charAt:s(!0)}},"65f0":function(e,t,n){var r=n("0b42");e.exports=function(e,t){return new(r(e))(0===t?0:t)}},"68ee":function(e,t,n){var r=n("d039"),i=n("1626"),o=n("f5df"),s=n("d066"),a=n("8925"),c=[],u=s("Reflect","construct"),l=/^\s*(?:class|function)\b/,h=l.exec,d=!l.exec((function(){})),f=function(e){if(!i(e))return!1;try{return u(Object,c,e),!0}catch(t){return!1}},p=function(e){if(!i(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!h.call(l,a(e))};e.exports=!u||r((function(){var e;return f(f.call)||!f(Object)||!f((function(){e=!0}))||e}))?p:f},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("861d"),u=n("9112"),l=n("5135"),h=n("c6cd"),d=n("f772"),f=n("d012"),p="Object already initialized",m=a.WeakMap,g=function(e){return o(e)?i(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var _=h.state||(h.state=new m),b=_.get,y=_.has,w=_.set;r=function(e,t){if(y.call(_,e))throw new TypeError(p);return t.facade=e,w.call(_,e,t),t},i=function(e){return b.call(_,e)||{}},o=function(e){return y.call(_,e)}}else{var O=d("state");f[O]=!0,r=function(e,t){if(l(e,O))throw new TypeError(p);return t.facade=e,u(e,O,t),t},i=function(e){return l(e,O)?e[O]:{}},o=function(e){return l(e,O)}}e.exports={set:r,get:i,has:o,enforce:g,getterFor:v}},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{for(const[n,r]of t)e[n]=r;return e}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return et})),n.d(t,"b",(function(){return q}));var r=n("7a23");n("3f4e");
/*!
  * vue-router v4.0.11
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),h="undefined"!==typeof window;function d(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const m=()=>{};const g=/\/$/,v=e=>e.replace(g,"");function _(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=S(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function y(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(t.matched[r],n.matched[i])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!T(e[n],t[n]))return!1;return!0}function T(e,t){return Array.isArray(e)?k(e,t):Array.isArray(t)?k(t,e):e===t}function k(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function S(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var I,A;(function(e){e["pop"]="pop",e["push"]="push"})(I||(I={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function j(e){if(!e)if(h){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const C=/^[^#]+#/;function x(e,t){return e.replace(C,"#")+t}function R(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function N(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=R(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function L(e,t){const n=history.state?history.state.position-t:-1;return n+e}const D=new Map;function M(e,t){D.set(e,t)}function U(e){const t=D.get(e);return D.delete(e),t}let F=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),y(n,"")}const s=y(n,e);return s+r+i}function $(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:I.pop,direction:l?l>0?A.forward:A.back:A.unknown})})};function c(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:P()}),"")}function h(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function B(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?P():null}}function H(e){const{history:t,location:n}=window,r={value:V(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:F()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=f({},t.state,B(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=f({},i.value,t.state,{forward:e,scroll:P()});o(s.current,s,!0);const a=f({},B(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function z(e){e=j(e);const t=H(e),n=$(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:x.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function q(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),z(e)}function W(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},X=o("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function Y(e,t){return f(new Error,{type:e,[X]:!0},t)}function Q(e,t){return e instanceof Error&&X in e&&(null==t||!!(e.type&t))}const Z="[^/]+?",ee={sensitive:!1,strict:!1,start:!0,end:!0},te=/[.+*?^${}()[\]/\\]/g;function ne(e,t){const n=f({},ee,t),r=[];let i=n.start?"^":"";const o=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(te,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const h=c||Z;if(h!==Z){s+=10;try{new RegExp(`(${h})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+u.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&l.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===h&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function re(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function ie(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=re(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},se=/[a-zA-Z0-9_]/;function ae(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function h(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function d(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&h(),s()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:se.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),h(),s(),i}function ce(e,t,n){const r=ne(ae(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=he(e);a.aliasOf=r&&r.record;const u=me(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(h=ce(t,n,u),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!fe(h)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],h,r&&r.children[t])}r=r||h,c(h)}return d?()=>{s(d)}:m}function s(e){if(G(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&ie(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!fe(e)&&r.set(e.record.name,e)}function u(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Y(1,{location:e});s=i.record.name,a=f(le(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw Y(1,{location:e,currentLocation:t});s=i.record.name,a=f({},t.params,e.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:pe(c)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function le(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function he(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function fe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ge=/#/g,ve=/&/g,_e=/\//g,be=/=/g,ye=/\?/g,we=/\+/g,Oe=/%5B/g,Ee=/%5D/g,Te=/%5E/g,ke=/%60/g,Se=/%7B/g,Ie=/%7C/g,Ae=/%7D/g,je=/%20/g;function Ce(e){return encodeURI(""+e).replace(Ie,"|").replace(Oe,"[").replace(Ee,"]")}function xe(e){return Ce(e).replace(Se,"{").replace(Ae,"}").replace(Te,"^")}function Re(e){return Ce(e).replace(we,"%2B").replace(je,"+").replace(ge,"%23").replace(ve,"%26").replace(ke,"`").replace(Se,"{").replace(Ae,"}").replace(Te,"^")}function Pe(e){return Re(e).replace(be,"%3D")}function Ne(e){return Ce(e).replace(ge,"%23").replace(ye,"%3F")}function Le(e){return null==e?"":Ne(e).replace(_e,"%2F")}function De(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Me(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(we," "),n=e.indexOf("="),o=De(n<0?e:e.slice(0,n)),s=n<0?null:De(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Ue(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Re(e)):[r&&Re(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ve(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(Y(4,{from:n,to:t})):e instanceof Error?a(e):W(e)?a(Y(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function Be(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(He(s)){const a=s.__vccOpts||s,c=a[t];c&&i.push($e(c,n,r,o,e))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=d(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&$e(c,n,r,o,e)()}))}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function ze(e){const t=Object(r["n"])(c),n=Object(r["n"])(u),i=Object(r["b"])(()=>t.resolve(Object(r["A"])(e.to))),o=Object(r["b"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(O.bind(null,r));if(s>-1)return s;const a=Xe(e[t-2]);return t>1&&Xe(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["b"])(()=>o.value>-1&&Ke(n.params,i.value.params)),a=Object(r["b"])(()=>o.value>-1&&o.value===n.matched.length-1&&E(n.params,i.value.params));function l(n={}){return Ge(n)?t[Object(r["A"])(e.replace)?"replace":"push"](Object(r["A"])(e.to)).catch(m):Promise.resolve()}return{route:i,href:Object(r["b"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const qe=Object(r["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ze,setup(e,{slots:t}){const n=Object(r["u"])(ze(e)),{options:i}=Object(r["n"])(c),o=Object(r["b"])(()=>({[Je(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["m"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=qe;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ke(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Xe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Ye=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["n"])(l),o=Object(r["b"])(()=>e.route||i.value),c=Object(r["n"])(a,0),u=Object(r["b"])(()=>o.value.matched[c]);Object(r["t"])(a,c+1),Object(r["t"])(s,u),Object(r["t"])(l,o);const h=Object(r["v"])();return Object(r["C"])(()=>[h.value,u.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&O(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Qe(n.default,{Component:a,route:i});const l=s.props[e.name],d=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=Object(r["m"])(a,f({},d,t,{onVnodeUnmounted:p,ref:h}));return Qe(n.default,{Component:m,route:i})||m}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Ze=Ye;function et(e){const t=ue(e.routes,e),n=e.parseQuery||Me,i=e.stringifyQuery||Ue,o=e.history;const s=Ve(),a=Ve(),d=Ve(),g=Object(r["y"])(K);let v=K;h&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const y=p.bind(null,e=>""+e),O=p.bind(null,Le),E=p.bind(null,De);function T(e,n){let r,i;return G(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function S(){return t.getRoutes().map(e=>e.record)}function A(e){return!!t.getRecordMatcher(e)}function j(e,r){if(r=f({},r||g.value),"string"===typeof e){const i=_(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return f(i,s,{params:E(s.params),hash:De(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=f({},e,{path:_(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];s=f({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=y(E(a.params));const u=b(i,f({},e,{hash:xe(c),path:a.path})),l=o.createHref(u);return f({fullPath:u,hash:c,query:i===Ue?Fe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function C(e){return"string"===typeof e?_(n,e,g.value.path):f({},e)}function x(e,t){if(v!==e)return Y(8,{from:t,to:e})}function R(e){return V(e)}function D(e){return R(f(C(e),{replace:!0}))}function F(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=C(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=v=j(e),r=g.value,o=e.state,s=e.force,a=!0===e.replace,c=F(n);if(c)return V(f(C(c),{state:o,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(i,r,n)&&(l=Y(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):B(u,r)).catch(e=>Q(e)?e:ee(e,u,r)).then(e=>{if(e){if(Q(e,2))return V(f(C(e.to),{state:o,force:s,replace:a}),t||u)}else e=z(u,r,!0,a,o);return H(u,r,e),e})}function $(e,t){const n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,o]=nt(e,t);n=Be(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push($e(r,e,t))});const c=$.bind(null,e,t);return n.push(c),tt(n).then(()=>{n=[];for(const r of s.list())n.push($e(r,e,t));return n.push(c),tt(n)}).then(()=>{n=Be(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push($e(r,e,t))});return n.push(c),tt(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push($e(i,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(c),tt(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=Be(o,"beforeRouteEnter",e,t),n.push(c),tt(n))).then(()=>{n=[];for(const r of a.list())n.push($e(r,e,t));return n.push(c),tt(n)}).catch(e=>Q(e,8)?e:Promise.reject(e))}function H(e,t,n){for(const r of d.list())r(e,t,n)}function z(e,t,n,r,i){const s=x(e,t);if(s)return s;const a=t===K,c=h?history.state:{};n&&(r||a?o.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),g.value=e,re(e,t,n,a),ne()}let q;function W(){q=o.listen((e,t,n)=>{const r=j(e),i=F(r);if(i)return void V(f(i,{replace:!0}),r).catch(m);v=r;const s=g.value;h&&M(L(s.fullPath,n.delta),P()),B(r,s).catch(e=>Q(e,12)?e:Q(e,2)?(V(e.to,r).then(e=>{Q(e,20)&&!n.delta&&n.type===I.pop&&o.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||z(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===I.pop&&Q(e,20)&&o.go(-1,!1)),H(r,s,e)}).catch(m)})}let X,J=Ve(),Z=Ve();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return X&&g.value!==K?Promise.resolve():new Promise((e,t)=>{J.add([e,t])})}function ne(e){X||(X=!0,W(),J.list().forEach(([t,n])=>e?n(e):t()),J.reset())}function re(t,n,i,o){const{scrollBehavior:s}=e;if(!h||!s)return Promise.resolve();const a=!i&&U(L(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["o"])().then(()=>s(t,n,a)).then(e=>e&&N(e)).catch(e=>ee(e,t,n))}const ie=e=>o.go(e);let oe;const se=new Set,ae={currentRoute:g,addRoute:T,removeRoute:k,hasRoute:A,getRoutes:S,resolve:j,options:e,push:R,replace:D,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:d.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",Ze),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["A"])(g)}),h&&!oe&&g.value===K&&(oe=!0,R(o.location).catch(e=>{0}));const n={};for(const o in K)n[o]=Object(r["b"])(()=>g.value[o]);e.provide(c,t),e.provide(u,Object(r["u"])(n)),e.provide(l,g);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(v=K,q&&q(),g.value=K,oe=!1,X=!1),i()}}};return ae}function tt(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function nt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find(e=>O(e,o))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||i.push(a))}return[n,r,i]}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("5135"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,h=u.get,d=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,h=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==g)&&s(n,"name",g),u=d(n),u.source||(u.source=f.join("string"==typeof g?g:""))),e!==r?(h?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},"746f":function(e,t,n){var r=n("428f"),i=n("5135"),o=n("e538"),s=n("9bf2").f;e.exports=function(e){var t=r.Symbol||(r.Symbol={});i(t,e)||s(t,e,{value:o.f(e)})}},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7a23":function(e,t,n){"use strict";n.d(t,"b",(function(){return qe})),n.d(t,"u",(function(){return Ee})),n.d(t,"v",(function(){return Me})),n.d(t,"y",(function(){return Ue})),n.d(t,"A",(function(){return $e})),n.d(t,"z",(function(){return r["L"]})),n.d(t,"a",(function(){return Mn})),n.d(t,"d",(function(){return Xn})),n.d(t,"e",(function(){return cr})),n.d(t,"f",(function(){return Kn})),n.d(t,"g",(function(){return tr})),n.d(t,"h",(function(){return ar})),n.d(t,"i",(function(){return sr})),n.d(t,"j",(function(){return nr})),n.d(t,"k",(function(){return bt})),n.d(t,"l",(function(){return wr})),n.d(t,"m",(function(){return _i})),n.d(t,"n",(function(){return ct})),n.d(t,"o",(function(){return ei})),n.d(t,"p",(function(){return Et})),n.d(t,"q",(function(){return Tt})),n.d(t,"r",(function(){return Dt})),n.d(t,"s",(function(){return Hn})),n.d(t,"t",(function(){return at})),n.d(t,"w",(function(){return fr})),n.d(t,"x",(function(){return Pn})),n.d(t,"C",(function(){return fi})),n.d(t,"D",(function(){return Qe})),n.d(t,"E",(function(){return _n})),n.d(t,"c",(function(){return So})),n.d(t,"B",(function(){return bo})),n.d(t,"F",(function(){return Oo}));var r=n("9ff4");let i;const o=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,v=[];let _;const b=Symbol(""),y=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(_=this),S(),m=1<<++p,p<=g?h(this):O(this),this.fn()}finally{p<=g&&d(this),m=1<<--p,I(),v.pop();const e=v.length;_=e>0?v[e-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const T=[];function k(){T.push(E),E=!1}function S(){T.push(E),E=!0}function I(){const e=T.pop();E=void 0===e||e}function A(e,t,n){if(!j())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;C(i,o)}function j(){return E&&void 0!==_}function C(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(_),n&&(e.add(_),_.deps.push(e))}function x(e,t,n,i,o,s){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(y)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(b)),Object(r["t"])(e)&&u.push(a.get(y)));break;case"set":Object(r["t"])(e)&&u.push(a.get(b));break}if(1===u.length)u[0]&&R(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);R(c(e))}}function R(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==_||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const P=Object(r["H"])("__proto__,__v_isRef,__isVue"),N=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),L=V(),D=V(!1,!0),M=V(!0),U=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=Ce(this);for(let t=0,i=this.length;t<i;t++)A(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Ce)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){k();const n=Ce(this)[t].apply(this,e);return I(),n}}),e}function V(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&o===(e?t?ye:be:t?_e:ve).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(U,i))return Reflect.get(U,i,o);const a=Reflect.get(n,i,o);if(Object(r["E"])(i)?N.has(i):P(i))return a;if(e||A(n,"get",i),t)return a;if(De(a)){const e=!s||!Object(r["s"])(i);return e?a.value:a}return Object(r["v"])(a)?e?ke(a):Ee(a):a}}const $=H(),B=H(!0);function H(e=!1){return function(t,n,i,o){let s=t[n];if(!e&&(i=Ce(i),s=Ce(s),!Object(r["o"])(t)&&De(s)&&!De(i)))return s.value=i,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,o);return t===Ce(o)&&(a?Object(r["j"])(i,s)&&x(t,"set",n,i,s):x(t,"add",n,i)),c}}function z(e,t){const n=Object(r["k"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&x(e,"delete",t,void 0,i),o}function q(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&N.has(t)||A(e,"has",t),n}function W(e){return A(e,"iterate",Object(r["o"])(e)?"length":b),Reflect.ownKeys(e)}const G={get:L,set:$,deleteProperty:z,has:q,ownKeys:W},K={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},X=Object(r["h"])({},G,{get:D,set:B}),J=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Ce(e),o=Ce(t);t!==o&&!n&&A(i,"get",t),!n&&A(i,"get",o);const{has:s}=Y(i),a=r?J:n?Pe:Re;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=Ce(n),i=Ce(e);return e!==i&&!t&&A(r,"has",e),!t&&A(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&A(Ce(e),"iterate",b),Reflect.get(e,"size",e)}function te(e){e=Ce(e);const t=Ce(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),x(t,"add",e,e)),this}function ne(e,t){t=Ce(t);const n=Ce(this),{has:i,get:o}=Y(n);let s=i.call(n,e);s||(e=Ce(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&x(n,"set",e,t,a):x(n,"add",e,t),this}function re(e){const t=Ce(this),{has:n,get:r}=Y(t);let i=n.call(t,e);i||(e=Ce(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&x(t,"delete",e,void 0,o),s}function ie(){const e=Ce(this),t=0!==e.size,n=void 0,r=e.clear();return t&&x(e,"clear",void 0,void 0,n),r}function oe(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=Ce(o),a=t?J:e?Pe:Re;return!e&&A(s,"iterate",b),o.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function se(e,t,n){return function(...i){const o=this["__v_raw"],s=Ce(o),a=Object(r["t"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),h=n?J:t?Pe:Re;return!t&&A(s,"iterate",u?y:b),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Q(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)}),[e,n,t,r]}const[ue,le,he,de]=ce();function fe(e,t){const n=t?e?de:he:e?le:ue;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,o)}const pe={get:fe(!1,!1)},me={get:fe(!1,!0)},ge={get:fe(!0,!1)};const ve=new WeakMap,_e=new WeakMap,be=new WeakMap,ye=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(r["O"])(e))}function Ee(e){return e&&e["__v_isReadonly"]?e:Se(e,!1,G,pe,ve)}function Te(e){return Se(e,!1,X,me,_e)}function ke(e){return Se(e,!0,K,ge,be)}function Se(e,t,n,i,o){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=Oe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Ie(e){return Ae(e)?Ie(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function je(e){return Ie(e)||Ae(e)}function Ce(e){const t=e&&e["__v_raw"];return t?Ce(t):e}function xe(e){return Object(r["g"])(e,"__v_skip",!0),e}const Re=e=>Object(r["v"])(e)?Ee(e):e,Pe=e=>Object(r["v"])(e)?ke(e):e;function Ne(e){j()&&(e=Ce(e),e.dep||(e.dep=c()),C(e.dep))}function Le(e,t){e=Ce(e),e.dep&&R(e.dep)}function De(e){return Boolean(e&&!0===e.__v_isRef)}function Me(e){return Fe(e,!1)}function Ue(e){return Fe(e,!0)}function Fe(e,t){return De(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Ce(e),this._value=t?e:Re(e)}get value(){return Ne(this),this._value}set value(e){e=this._shallow?e:Ce(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Re(e),Le(this,e))}}function $e(e){return De(e)?e.value:e}const Be={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function He(e){return Ie(e)?e:new Proxy(e,Be)}class ze{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,Le(this))}),this["__v_isReadonly"]=n}get value(){const e=Ce(this);return Ne(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qe(e,t){let n,i;const o=Object(r["p"])(e);o?(n=e,i=r["d"]):(n=e.get,i=e.set);const s=new ze(n,i,o||!i);return s}Promise.resolve();new Set;new Map;function We(e,t,...n){const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["N"]))}let c;let u=i[c=Object(r["M"])(t)]||i[c=Object(r["M"])(Object(r["e"])(t))];!u&&s&&(u=i[c=Object(r["M"])(Object(r["l"])(t))]),u&&Ur(u,e,6,o);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Ur(l,e,6,o)}}function Ge(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const i=e=>{const n=Ge(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),i.set(e,a),a):(i.set(e,null),null)}function Ke(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Xe=null,Je=null;function Ye(e){const t=Xe;return Xe=e,Je=e&&e.type.__scopeId||null,t}function Qe(e,t=Xe,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Wn(-1);const i=Ye(t),o=e(...n);return Ye(i),r._d&&Wn(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Ze(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:h,renderCache:d,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let v,_;const b=Ye(e);try{if(4&n.shapeFlag){const e=o||i;v=ur(h.call(e,e,d,s,p,f,m)),_=u}else{const e=t;0,v=ur(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),_=t.props?u:et(u)}}catch(w){$n.length=0,Fr(w,e,1),v=nr(Fn)}let y=v;if(_&&!1!==g){const e=Object.keys(_),{shapeFlag:t}=y;e.length&&7&t&&(a&&e.some(r["u"])&&(_=tt(_,a)),y=or(y,_))}return n.dirs&&(y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),v=y,Ye(b),v}const et=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},tt=(e,t)=>{const n={};for(const i in e)Object(r["u"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function nt(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||rt(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?rt(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Ke(u,n))return!0}}return!1}function rt(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!Ke(n,o))return!0}return!1}function it({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const ot=e=>e.__isSuspense;function st(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):ai(e)}function at(e,t){if(yr){let n=yr.provides;const r=yr.parent&&yr.parent.provides;r===n&&(n=yr.provides=Object.create(r)),n[e]=t}else 0}function ct(e,t,n=!1){const i=yr||Xe;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(i.proxy):t}else 0}function ut(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Rt(()=>{e.isMounted=!0}),Lt(()=>{e.isUnmounting=!0}),e}const lt=[Function,Array],ht={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:lt,onEnter:lt,onAfterEnter:lt,onEnterCancelled:lt,onBeforeLeave:lt,onLeave:lt,onAfterLeave:lt,onLeaveCancelled:lt,onBeforeAppear:lt,onAppear:lt,onAfterAppear:lt,onAppearCancelled:lt},setup(e,{slots:t}){const n=wr(),r=ut();let i;return()=>{const o=t.default&&_t(t.default(),!0);if(!o||!o.length)return;const s=Ce(e),{mode:a}=s;const c=o[0];if(r.isLeaving)return mt(c);const u=gt(c);if(!u)return mt(c);const l=pt(u,s,r,n);vt(u,l);const h=n.subTree,d=h&&gt(h);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(d&&d.type!==Fn&&(!Yn(u,d)||f)){const e=pt(d,s,r,n);if(vt(d,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},mt(c);"in-out"===a&&u.type!==Fn&&(e.delayLeave=(e,t,n)=>{const i=ft(r,d);i[String(d.key)]=d,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},dt=ht;function ft(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function pt(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:_}=t,b=String(e.key),y=ft(n,e),w=(e,t)=>{e&&Ur(e,r,9,t)},O={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const o=y[b];o&&Yn(e,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,o=l;if(!n.isMounted){if(!i)return;t=g||c,r=v||u,o=_||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?o:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(h,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),w(n?p:f,[t]),t._leaveCb=void 0,y[i]===e&&delete y[i])};y[i]=e,d?(d(t,s),d.length<=1&&s()):s()},clone(e){return pt(e,t,n,r)}};return O}function mt(e){if(wt(e))return e=or(e),e.children=null,e}function gt(e){return wt(e)?e.children?e.children[0]:void 0:e}function vt(e,t){6&e.shapeFlag&&e.component?vt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _t(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Mn?(128&o.patchFlag&&r++,n=n.concat(_t(o.children,t))):(t||o.type!==Fn)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function bt(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const yt=e=>!!e.type.__asyncLoader;const wt=e=>e.type.__isKeepAlive;RegExp,RegExp;function Ot(e,t){return Object(r["o"])(e)?e.some(e=>Ot(e,t)):Object(r["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function Et(e,t){kt(e,"a",t)}function Tt(e,t){kt(e,"da",t)}function kt(e,t,n=yr){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}e()});if(jt(t,r,n),n){let e=n.parent;while(e&&e.parent)wt(e.parent.vnode)&&St(r,t,n,e),e=e.parent}}function St(e,t,n,i){const o=jt(t,e,i,!0);Dt(()=>{Object(r["K"])(i[t],o)},n)}function It(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function At(e){return 128&e.shapeFlag?e.ssContent:e}function jt(e,t,n=yr,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;k(),Or(n);const i=Ur(t,n,e,r);return Er(),I(),i});return r?i.unshift(o):i.push(o),o}}const Ct=e=>(t,n=yr)=>(!Ir||"sp"===e)&&jt(e,t,n),xt=Ct("bm"),Rt=Ct("m"),Pt=Ct("bu"),Nt=Ct("u"),Lt=Ct("bum"),Dt=Ct("um"),Mt=Ct("sp"),Ut=Ct("rtg"),Ft=Ct("rtc");function Vt(e,t=yr){jt("ec",e,t)}let $t=!0;function Bt(e){const t=Wt(e),n=e.proxy,i=e.ctx;$t=!1,t.beforeCreate&&zt(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:h,beforeMount:d,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:_,beforeUnmount:b,destroyed:y,unmounted:w,render:O,renderTracked:E,renderTriggered:T,errorCaptured:k,serverPrefetch:S,expose:I,inheritAttrs:A,components:j,directives:C,filters:x}=t,R=null;if(l&&Ht(l,i,R,e.appContext.config.unwrapInjectedRef),a)for(const N in a){const e=a[N];Object(r["p"])(e)&&(i[N]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["v"])(t)&&(e.data=Ee(t))}if($t=!0,s)for(const N in s){const e=s[N],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=qe({get:t,set:o});Object.defineProperty(i,N,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)qt(c[r],i,n,r);if(u){const e=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{at(t,e[t])})}function P(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(h&&zt(h,e,"c"),P(xt,d),P(Rt,f),P(Pt,p),P(Nt,m),P(Et,g),P(Tt,v),P(Vt,k),P(Ft,E),P(Ut,T),P(Lt,b),P(Dt,w),P(Mt,S),Object(r["o"])(I))if(I.length){const t=e.exposed||(e.exposed={});I.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=A&&(e.inheritAttrs=A),j&&(e.components=j),C&&(e.directives=C)}function Ht(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=Yt(e));for(const o in e){const n=e[o];let s;s=Object(r["v"])(n)?"default"in n?ct(n.from||o,n.default,!0):ct(n.from||o):ct(n),De(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function zt(e,t,n){Ur(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function qt(e,t,n,i){const o=i.includes(".")?gi(n,i):()=>n[i];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&fi(o,n)}else if(Object(r["p"])(e))fi(o,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>qt(e,t,n,i));else{const i=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(i)&&fi(o,i,e)}else 0}function Wt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Gt(c,e,s,!0)),Gt(c,t,s)):c=t,o.set(t,c),c}function Gt(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Gt(e,o,n,!0),i&&i.forEach(t=>Gt(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Kt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Kt={data:Xt,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:Qt,created:Qt,beforeMount:Qt,mounted:Qt,beforeUpdate:Qt,updated:Qt,beforeDestroy:Qt,beforeUnmount:Qt,destroyed:Qt,unmounted:Qt,activated:Qt,deactivated:Qt,errorCaptured:Qt,serverPrefetch:Qt,components:Zt,directives:Zt,watch:en,provide:Xt,inject:Jt};function Xt(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function Jt(e,t){return Zt(Yt(e),Yt(t))}function Yt(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Qt(e,t){return e?[...new Set([].concat(e,t))]:t}function Zt(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function en(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=Qt(e[r],t[r]);return n}function tn(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,Qn,1),e.propsDefaults=Object.create(null),rn(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:Te(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function nn(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=Ce(o),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;rn(e,t,o,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=on(u,c,s,void 0,e,!0)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const h=t[a];if(u)if(Object(r["k"])(s,a))h!==s[a]&&(s[a]=h,l=!0);else{const t=Object(r["e"])(a);o[t]=on(u,c,t,h,e,!1)}else h!==s[a]&&(s[a]=h,l=!0)}}l&&x(e,"set","$attrs")}function rn(e,t,n,i){const[o,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["z"])(u))continue;const l=t[u];let h;o&&Object(r["k"])(o,h=Object(r["e"])(u))?s&&s.includes(h)?(a||(a={}))[h]=l:n[h]=l:Ke(e.emitsOptions,u)||l!==i[u]&&(i[u]=l,c=!0)}if(s){const t=Ce(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=on(o,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function on(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(Or(o),i=r[n]=e.call(null,t),Er())}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function sn(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!Object(r["p"])(e)){const i=e=>{u=!0;const[n,i]=sn(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let h=0;h<s.length;h++){0;const e=Object(r["e"])(s[h]);an(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(an(t)){const n=s[e],i=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const e=ln(Boolean,i.type),n=ln(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function an(e){return"$"!==e[0]}function cn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function un(e,t){return cn(e)===cn(t)}function ln(e,t){return Object(r["o"])(t)?t.findIndex(t=>un(t,e)):Object(r["p"])(t)&&un(t,e)?0:-1}const hn=e=>"_"===e[0]||"$stable"===e,dn=e=>Object(r["o"])(e)?e.map(ur):[ur(e)],fn=(e,t,n)=>{const r=Qe((...e)=>dn(t(...e)),n);return r._c=!1,r},pn=(e,t,n)=>{const i=e._ctx;for(const o in e){if(hn(o))continue;const n=e[o];if(Object(r["p"])(n))t[o]=fn(o,n,i);else if(null!=n){0;const e=dn(n);t[o]=()=>e}}},mn=(e,t)=>{const n=dn(t);e.slots.default=()=>n},gn=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=Ce(t),Object(r["g"])(t,"_",n)):pn(t,e.slots={})}else e.slots={},t&&mn(e,t);Object(r["g"])(e.slots,Qn,1)},vn=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,pn(t,o)),a=t}else t&&(mn(e,t),a={default:1});if(s)for(const r in o)hn(r)||r in a||delete o[r]};function _n(e,t){const n=Xe;if(null===n)return e;const i=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&vi(n),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function bn(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(k(),Ur(c,n,8,[e.el,a,e,t]),I())}}function yn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wn=0;function On(e,t){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const o=yn(),s=new Set;let a=!1;const c=o.app={_uid:wn++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:bi,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["p"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["p"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s,u){if(!a){const l=nr(n,i);return l.appContext=o,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Nr(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function En(){}const Tn=st;function kn(e){return Sn(e)}function Sn(e,t){En();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:h,parentNode:d,nextSibling:f,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!Yn(e,t)&&(r=K(e),H(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:h}=t;switch(u){case Un:_(e,t,n,r);break;case Fn:b(e,t,n,r);break;case Vn:null==e&&y(t,n,r,s);break;case Mn:P(e,t,n,r,i,o,s,a,c);break;default:1&h?T(e,t,n,r,i,o,s,a,c):6&h?N(e,t,n,r,i,o,s,a,c):(64&h||128&h)&&u.process(e,t,n,r,i,o,s,a,c,J)}null!=l&&i&&In(l,e&&e.ref,o,t||e,!t)},_=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},b=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},y=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r)},O=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=f(e),i(e,n,r),e=o;i(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},T=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?S(t,n,r,i,o,s,a,c):C(e,t,i,o,s,a,c)},S=(e,t,n,o,c,u,l,d)=>{let f,p;const{type:g,props:v,shapeFlag:_,transition:b,patchFlag:y,dirs:w}=e;if(e.el&&void 0!==m&&-1===y)f=e.el=m(e.el);else{if(f=e.el=a(e.type,u,v&&v.is,v),8&_?h(f,e.children):16&_&&j(e.children,f,null,o,c,u&&"foreignObject"!==g,l,d),w&&bn(e,null,o,"created"),v){for(const t in v)"value"===t||Object(r["z"])(t)||s(f,t,null,v[t],u,e.children,o,c,G);"value"in v&&s(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&An(p,o,e)}A(f,e,e.scopeId,l,o)}w&&bn(e,null,o,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&b&&!b.persisted;O&&b.beforeEnter(f),i(f,t,n),((p=v&&v.onVnodeMounted)||O||w)&&Tn(()=>{p&&An(p,o,e),O&&b.enter(f),w&&bn(e,null,o,"mounted")},c)},A=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let o=0;o<r.length;o++)p(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},j=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?lr(e[u]):ur(e[u]);v(null,c,t,n,r,i,o,s,a)}},C=(e,t,n,i,o,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:d,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let g;(g=m.onVnodeBeforeUpdate)&&An(g,n,t,e),f&&bn(t,e,n,"beforeUpdate");const v=o&&"foreignObject"!==t.type;if(d?x(e.dynamicChildren,d,u,n,i,v,a):c||F(e,t,u,null,n,i,v,a,!1),l>0){if(16&l)R(u,t,p,m,n,i,o);else if(2&l&&p.class!==m.class&&s(u,"class",null,m.class,o),4&l&&s(u,"style",p.style,m.style,o),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=m[a];l===c&&"value"!==a||s(u,a,c,l,o,e.children,n,i,G)}}1&l&&e.children!==t.children&&h(u,t.children)}else c||null!=d||R(u,t,p,m,n,i,o);((g=m.onVnodeUpdated)||f)&&Tn(()=>{g&&An(g,n,t,e),f&&bn(t,e,n,"updated")},i)},x=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Mn||!Yn(c,u)||70&c.shapeFlag)?d(c.el):n;v(c,u,l,null,r,i,o,s,!0)}},R=(e,t,n,i,o,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],h=n[u];l!==h&&"value"!==u&&s(e,u,h,l,c,t.children,o,a,G)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||s(e,u,n[u],null,c,t.children,o,a,G);"value"in i&&s(e,"value",n.value,i.value)}},P=(e,t,n,r,o,s,a,u,l)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(i(h,n,r),i(d,n,r),j(t.children,n,d,o,s,a,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(x(e.dynamicChildren,p,n,o,s,a,u),(null!=t.key||o&&t===o.subTree)&&jn(e,t,!0)):F(e,t,n,d,o,s,a,u,l)},N=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):L(t,n,r,i,o,s,c):D(e,t,c)},L=(e,t,n,r,i,o,s)=>{const a=e.component=br(e,r,i);if(wt(e)&&(a.ctx.renderer=J),Ar(a),a.asyncDep){if(i&&i.registerDep(a,M),!e.el){const e=a.subTree=nr(Fn);b(null,e,t,n)}}else M(a,e,t,n,i,o,s)},D=(e,t,n)=>{const r=t.component=e.component;if(nt(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void U(r,t,n);r.next=t,ii(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},M=(e,t,n,i,o,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:l,vnode:h}=e,f=n;0,u.allowRecurse=!1,n?(n.el=h.el,U(e,n,a)):n=h,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&An(t,l,n,h),u.allowRecurse=!0;const p=Ze(e);0;const m=e.subTree;e.subTree=p,v(m,p,d(m.el),K(m),e,o,s),n.el=p.el,null===f&&it(e,p.el),c&&Tn(c,o),(t=n.props&&n.props.onVnodeUpdated)&&Tn(()=>An(t,l,n,h),o)}else{let a;const{el:c,props:l}=t,{bm:h,m:d,parent:f}=e,p=yt(t);if(u.allowRecurse=!1,h&&Object(r["n"])(h),!p&&(a=l&&l.onVnodeBeforeMount)&&An(a,f,t),u.allowRecurse=!0,c&&Q){const n=()=>{e.subTree=Ze(e),Q(c,e.subTree,e,o,null)};p?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=Ze(e);0,v(null,r,n,i,e,o,s),t.el=r.el}if(d&&Tn(d,o),!p&&(a=l&&l.onVnodeMounted)){const e=t;Tn(()=>An(a,f,e),o)}256&t.shapeFlag&&e.a&&Tn(e.a,o),e.isMounted=!0,t=n=i=null}},u=new w(c,()=>ni(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,u.allowRecurse=l.allowRecurse=!0,l()},U=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,nn(e,t.props,r,n),vn(e,t.children,n),k(),ci(void 0,e.update),I()},F=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,d=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void $(u,d,n,r,i,o,s,a,c);if(256&f)return void V(u,d,n,r,i,o,s,a,c)}8&p?(16&l&&G(u,i,o),d!==u&&h(n,d)):16&l?16&p?$(u,d,n,r,i,o,s,a,c):G(u,i,o,!0):(8&l&&h(n,""),16&p&&j(d,n,r,i,o,s,a,c))},V=(e,t,n,i,o,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,h=t.length,d=Math.min(l,h);let f;for(f=0;f<d;f++){const r=t[f]=u?lr(t[f]):ur(t[f]);v(e[f],r,n,null,o,s,a,c,u)}l>h?G(e,o,s,!0,!1,d):j(t,n,i,o,s,a,c,u,d)},$=(e,t,n,i,o,s,a,c,u)=>{let l=0;const h=t.length;let d=e.length-1,f=h-1;while(l<=d&&l<=f){const r=e[l],i=t[l]=u?lr(t[l]):ur(t[l]);if(!Yn(r,i))break;v(r,i,n,null,o,s,a,c,u),l++}while(l<=d&&l<=f){const r=e[d],i=t[f]=u?lr(t[f]):ur(t[f]);if(!Yn(r,i))break;v(r,i,n,null,o,s,a,c,u),d--,f--}if(l>d){if(l<=f){const e=f+1,r=e<h?t[e].el:i;while(l<=f)v(null,t[l]=u?lr(t[l]):ur(t[l]),n,r,o,s,a,c,u),l++}}else if(l>f)while(l<=d)H(e[l],o,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?lr(t[l]):ur(t[l]);null!=e.key&&g.set(e.key,l)}let _,b=0;const y=f-m+1;let w=!1,O=0;const E=new Array(y);for(l=0;l<y;l++)E[l]=0;for(l=p;l<=d;l++){const r=e[l];if(b>=y){H(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(_=m;_<=f;_++)if(0===E[_-m]&&Yn(r,t[_])){i=_;break}void 0===i?H(r,o,s,!0):(E[i-m]=l+1,i>=O?O=i:w=!0,v(r,t[i],n,null,o,s,a,c,u),b++)}const T=w?Cn(E):r["a"];for(_=T.length-1,l=y-1;l>=0;l--){const e=m+l,r=t[e],d=e+1<h?t[e+1].el:i;0===E[l]?v(null,r,n,d,o,s,a,c,u):w&&(_<0||l!==T[_]?B(r,n,d,2):_--)}}},B=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void B(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,J);if(a===Mn){i(s,t,n);for(let e=0;e<u.length;e++)B(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===Vn)return void O(e,t,n);const h=2!==r&&1&l&&c;if(h)if(0===r)c.beforeEnter(s),i(s,t,n),Tn(()=>c.enter(s),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),u=()=>{e(s,()=>{a(),o&&o()})};r?r(s,a,u):u()}else i(s,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:h,dirs:d}=e;if(null!=a&&In(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&d,p=!yt(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&An(m,t,e),6&l)W(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&bn(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,J,r):u&&(o!==Mn||h>0&&64&h)?G(u,t,n,!1,!0):(o===Mn&&384&h||!i&&16&l)&&G(c,t,n),r&&z(e)}(p&&(m=s&&s.onVnodeUnmounted)||f)&&Tn(()=>{m&&An(m,t,e),f&&bn(e,null,t,"unmounted")},n)},z=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Mn)return void q(n,r);if(t===Vn)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},q=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},W=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=e;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,H(a,e,t,n)),c&&Tn(c,t),Tn(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)H(e[s],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),X=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),ui(),t._vnode=e},J={p:v,um:H,m:B,r:z,mt:L,mc:j,pc:F,pbc:x,n:K,o:e};let Y,Q;return t&&([Y,Q]=t(J)),{render:X,hydrate:Y,createApp:On(X,Y)}}function In(e,t,n,i,o=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>In(e,t&&(Object(r["o"])(t)?t[s]:t),n,i,o));if(yt(i)&&!o)return;const s=4&i.shapeFlag?Nr(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=e;const l=t&&t.r,h=c.refs===r["b"]?c.refs={}:c.refs,d=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(h[l]=null,Object(r["k"])(d,l)&&(d[l]=null)):De(l)&&(l.value=null)),Object(r["D"])(u)){const e=()=>{h[u]=a,Object(r["k"])(d,u)&&(d[u]=a)};a?(e.id=-1,Tn(e,n)):e()}else if(De(u)){const e=()=>{u.value=a};a?(e.id=-1,Tn(e,n)):e()}else Object(r["p"])(u)&&Mr(u,c,12,[a,h])}function An(e,t,n,r=null){Ur(e,t,7,[n,r])}function jn(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=lr(o[r]),t.el=e.el),n||jn(e,t))}}function Cn(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const xn=e=>e.__isTeleport;const Rn="components";function Pn(e,t){return Ln(Rn,e,!0,t)||e}const Nn=Symbol();function Ln(e,t,n=!0,i=!1){const o=Xe||yr;if(o){const n=o.type;if(e===Rn){const e=Lr(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=Dn(o[e]||n[e],t)||Dn(o.appContext[e],t);return!s&&i?n:s}}function Dn(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Mn=Symbol(void 0),Un=Symbol(void 0),Fn=Symbol(void 0),Vn=Symbol(void 0),$n=[];let Bn=null;function Hn(e=!1){$n.push(Bn=e?null:[])}function zn(){$n.pop(),Bn=$n[$n.length-1]||null}let qn=1;function Wn(e){qn+=e}function Gn(e){return e.dynamicChildren=qn>0?Bn||r["a"]:null,zn(),qn>0&&Bn&&Bn.push(e),e}function Kn(e,t,n,r,i,o){return Gn(tr(e,t,n,r,i,o,!0))}function Xn(e,t,n,r,i){return Gn(nr(e,t,n,r,i,!0))}function Jn(e){return!!e&&!0===e.__v_isVNode}function Yn(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",Zn=({key:e})=>null!=e?e:null,er=({ref:e})=>null!=e?Object(r["D"])(e)||De(e)||Object(r["p"])(e)?{i:Xe,r:e}:e:null;function tr(e,t=null,n=null,i=0,o=null,s=(e===Mn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Zn(t),ref:t&&er(t),scopeId:Je,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(hr(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),qn>0&&!a&&Bn&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Bn.push(u),u}const nr=rr;function rr(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==Nn||(e=Fn),Jn(e)){const r=or(e,t,!0);return n&&hr(r,n),r}if(Dr(e)&&(e=e.__vccOpts),t){t=ir(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(je(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:ot(e)?128:xn(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return tr(e,t,n,i,o,a,s,!0)}function ir(e){return e?je(e)||Qn in e?Object(r["h"])({},e):e:null}function or(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,c=t?dr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Zn(c),ref:t&&t.ref?n&&o?Object(r["o"])(o)?o.concat(er(t)):[o,er(t)]:er(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Mn?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&or(e.ssContent),ssFallback:e.ssFallback&&or(e.ssFallback),el:e.el,anchor:e.anchor};return u}function sr(e=" ",t=0){return nr(Un,null,e,t)}function ar(e,t){const n=nr(Vn,null,e);return n.staticCount=t,n}function cr(e="",t=!1){return t?(Hn(),Xn(Fn,null,e)):nr(Fn,null,e)}function ur(e){return null==e||"boolean"===typeof e?nr(Fn):Object(r["o"])(e)?nr(Mn,null,e.slice()):"object"===typeof e?lr(e):nr(Un,null,String(e))}function lr(e){return null===e.el||e.memo?e:or(e)}function hr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),hr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Qn in t?3===r&&Xe&&(1===Xe.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Xe}}else Object(r["p"])(t)?(t={default:t,_ctx:Xe},n=32):(t=String(t),64&i?(n=16,t=[sr(t)]):n=8);e.children=t,e.shapeFlag|=n}function dr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["I"])([t.class,i.class]));else if("style"===e)t.style=Object(r["J"])([t.style,i.style]);else if(Object(r["w"])(e)){const n=t[e],r=i[e];n!==r&&(t[e]=n?[].concat(n,r):r)}else""!==e&&(t[e]=i[e])}return t}function fr(e,t,n,i){let o;const s=n&&n[i];if(Object(r["o"])(e)||Object(r["D"])(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["v"])(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}const pr=e=>e?Tr(e)?Nr(e)||e.proxy:pr(e.parent):null,mr=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>pr(e.parent),$root:e=>pr(e.root),$emit:e=>e.emit,$options:e=>Wt(e),$forceUpdate:e=>()=>ni(e.update),$nextTick:e=>ei.bind(e.proxy),$watch:e=>mi.bind(e)}),gr={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 0:return i[t];case 1:return o[t];case 3:return n[t];case 2:return s[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=0,i[t];if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=1,o[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=2,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=3,n[t];$t&&(a[t]=4)}}const h=mr[t];let d,f;return h?("$attrs"===t&&A(e,"get",t),h(e)):(d=c.__cssModules)&&(d=d[t])?d:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=3,n[t]):(f=u.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return void 0!==n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(mr,a)||Object(r["k"])(o.config.globalProperties,a)}};const vr=yn();let _r=0;function br(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||vr,a={uid:_r++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:sn(i,o),emitsOptions:Ge(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=We.bind(null,a),e.ce&&e.ce(a),a}let yr=null;const wr=()=>yr||Xe,Or=e=>{yr=e,e.scope.on()},Er=()=>{yr&&yr.scope.off(),yr=null};function Tr(e){return 4&e.vnode.shapeFlag}let kr,Sr,Ir=!1;function Ar(e,t=!1){Ir=t;const{props:n,children:r}=e.vnode,i=Tr(e);tn(e,n,i,t),gn(e,r);const o=i?jr(e,t):void 0;return Ir=!1,o}function jr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=xe(new Proxy(e.ctx,gr));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Pr(e):null;Or(e),k();const o=Mr(i,e,0,[e.props,n]);if(I(),Er(),Object(r["y"])(o)){if(o.then(Er,Er),t)return o.then(n=>{Cr(e,n,t)}).catch(t=>{Fr(t,e,0)});e.asyncDep=o}else Cr(e,o,t)}else xr(e,t)}function Cr(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=He(t)),xr(e,n)}function xr(e,t,n){const i=e.type;if(!e.render){if(!t&&kr&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=kr(t,c)}}e.render=i.render||r["d"],Sr&&Sr(e)}Or(e),k(),Bt(e),I(),Er()}function Rr(e){return new Proxy(e.attrs,{get(t,n){return A(e,"get","$attrs"),t[n]}})}function Pr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Rr(e))},slots:e.slots,emit:e.emit,expose:t}}function Nr(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(He(xe(e.exposed)),{get(t,n){return n in t?t[n]:n in mr?mr[n](e):void 0}}))}function Lr(e){return Object(r["p"])(e)&&e.displayName||e.name}function Dr(e){return Object(r["p"])(e)&&"__vccOpts"in e}function Mr(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){Fr(o,t,n)}return i}function Ur(e,t,n,i){if(Object(r["p"])(e)){const o=Mr(e,t,n,i);return o&&Object(r["y"])(o)&&o.catch(e=>{Fr(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push(Ur(e[r],t,n,i));return o}function Fr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Mr(s,null,10,[e,i,o])}Vr(e,n,i,r)}function Vr(e,t,n,r=!0){console.error(e)}let $r=!1,Br=!1;const Hr=[];let zr=0;const qr=[];let Wr=null,Gr=0;const Kr=[];let Xr=null,Jr=0;const Yr=Promise.resolve();let Qr=null,Zr=null;function ei(e){const t=Qr||Yr;return e?t.then(this?e.bind(this):e):t}function ti(e){let t=zr+1,n=Hr.length;while(t<n){const r=t+n>>>1,i=li(Hr[r]);i<e?t=r+1:n=r}return t}function ni(e){Hr.length&&Hr.includes(e,$r&&e.allowRecurse?zr+1:zr)||e===Zr||(null==e.id?Hr.push(e):Hr.splice(ti(e.id),0,e),ri())}function ri(){$r||Br||(Br=!0,Qr=Yr.then(hi))}function ii(e){const t=Hr.indexOf(e);t>zr&&Hr.splice(t,1)}function oi(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ri()}function si(e){oi(e,Wr,qr,Gr)}function ai(e){oi(e,Xr,Kr,Jr)}function ci(e,t=null){if(qr.length){for(Zr=t,Wr=[...new Set(qr)],qr.length=0,Gr=0;Gr<Wr.length;Gr++)Wr[Gr]();Wr=null,Gr=0,Zr=null,ci(e,t)}}function ui(e){if(Kr.length){const e=[...new Set(Kr)];if(Kr.length=0,Xr)return void Xr.push(...e);for(Xr=e,Xr.sort((e,t)=>li(e)-li(t)),Jr=0;Jr<Xr.length;Jr++)Xr[Jr]();Xr=null,Jr=0}}const li=e=>null==e.id?1/0:e.id;function hi(e){Br=!1,$r=!0,ci(e),Hr.sort((e,t)=>li(e)-li(t));r["d"];try{for(zr=0;zr<Hr.length;zr++){const e=Hr[zr];e&&!1!==e.active&&Mr(e,null,14)}}finally{zr=0,Hr.length=0,ui(e),$r=!1,Qr=null,(Hr.length||qr.length||Kr.length)&&hi(e)}}const di={};function fi(e,t,n){return pi(e,t,n)}function pi(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=yr;let u,l,h=!1,d=!1;if(De(e)?(u=()=>e.value,h=!!e._shallow):Ie(e)?(u=()=>e,i=!0):Object(r["o"])(e)?(d=!0,h=e.some(Ie),u=()=>e.map(e=>De(e)?e.value:Ie(e)?vi(e):Object(r["p"])(e)?Mr(e,c,2):void 0)):u=Object(r["p"])(e)?t?()=>Mr(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Ur(e,c,3,[f])}:r["d"],t&&i){const e=u;u=()=>vi(e())}let f=e=>{l=v.onStop=()=>{Mr(e,c,4)}};if(Ir)return f=r["d"],t?n&&Ur(t,c,3,[u(),d?[]:void 0,f]):u(),r["d"];let p=d?[]:di;const m=()=>{if(v.active)if(t){const e=v.run();(i||h||(d?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),Ur(t,c,3,[e,p===di?void 0:p,f]),p=e)}else v.run()};let g;m.allowRecurse=!!t,g="sync"===o?m:"post"===o?()=>Tn(m,c&&c.suspense):()=>{!c||c.isMounted?si(m):m()};const v=new w(u,g);return t?n?m():p=v.run():"post"===o?Tn(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,v)}}function mi(e,t,n){const i=this.proxy,o=Object(r["D"])(e)?e.includes(".")?gi(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["p"])(t)?s=t:(s=t.handler,n=t);const a=yr;Or(this);const c=pi(o,s.bind(i),n);return a?Or(a):Er(),c}function gi(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function vi(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),De(e))vi(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)vi(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{vi(e,t)});else if(Object(r["x"])(e))for(const n in e)vi(e[n],t);return e}function _i(e,t,n){const i=arguments.length;return 2===i?Object(r["v"])(t)&&!Object(r["o"])(t)?Jn(t)?nr(e,null,[t]):nr(e,t):nr(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&Jn(n)&&(n=[n]),nr(e,t,n))}Symbol("");const bi="3.2.19",yi="http://www.w3.org/2000/svg",wi="undefined"!==typeof document?document:null,Oi=new Map,Ei={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?wi.createElementNS(yi,e):wi.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>wi.createTextNode(e),createComment:e=>wi.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wi.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let o=Oi.get(e);if(!o){const t=wi.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,o=t.content,r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}Oi.set(e,o)}return t.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ti(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ki(e,t,n){const i=e.style,o=i.display;if(n)if(Object(r["D"])(n))t!==n&&(i.cssText=n);else{for(const e in n)Ii(i,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&Ii(i,e,"")}else e.removeAttribute("style");"_vod"in e&&(i.display=o)}const Si=/\s*!important$/;function Ii(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Ii(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Ci(e,t);Si.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Si,""),"important"):e[i]=n}}const Ai=["Webkit","Moz","ms"],ji={};function Ci(e,t){const n=ji[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return ji[t]=i;i=Object(r["f"])(i);for(let r=0;r<Ai.length;r++){const n=Ai[r]+i;if(n in e)return ji[t]=n}return t}const xi="http://www.w3.org/1999/xlink";function Ri(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(xi,t.slice(6,t.length)):e.setAttributeNS(xi,t,n);else{const i=Object(r["C"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Pi(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName){e._value=n;const r=null==n?"":n;return e.value!==r&&(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let Ni=Date.now,Li=!1;if("undefined"!==typeof window){Ni()>document.createEvent("Event").timeStamp&&(Ni=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Li=!!(e&&Number(e[1])<=53)}let Di=0;const Mi=Promise.resolve(),Ui=()=>{Di=0},Fi=()=>Di||(Mi.then(Ui),Di=Ni());function Vi(e,t,n,r){e.addEventListener(t,n,r)}function $i(e,t,n,r){e.removeEventListener(t,n,r)}function Bi(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=zi(t);if(r){const s=o[t]=qi(r,i);Vi(e,n,s,a)}else s&&($i(e,n,s,a),o[t]=void 0)}}const Hi=/(?:Once|Passive|Capture)$/;function zi(e){let t;if(Hi.test(e)){let n;t={};while(n=e.match(Hi))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function qi(e,t){const n=e=>{const r=e.timeStamp||Ni();(Li||r>=n.attached-1)&&Ur(Wi(e,n.value),t,5,[e])};return n.value=e,n.attached=Fi(),n}function Wi(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const Gi=/^on[a-z]/,Ki=(e,t,n,i,o=!1,s,a,c,u)=>{"class"===t?Ti(e,i,o):"style"===t?ki(e,n,i):Object(r["w"])(t)?Object(r["u"])(t)||Bi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):Xi(e,t,i,o))?Pi(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Ri(e,t,i,o))};function Xi(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Gi.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Gi.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const Ji="transition",Yi="animation",Qi=(e,{slots:t})=>_i(dt,no(e),t);Qi.displayName="Transition";const Zi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},eo=(Qi.props=Object(r["h"])({},dt.props,Zi),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),to=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function no(e){const t={};for(const r in e)r in Zi||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:h=c,leaveFromClass:d=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=ro(o),g=m&&m[0],v=m&&m[1],{onBeforeEnter:_,onEnter:b,onEnterCancelled:y,onLeave:w,onLeaveCancelled:O,onBeforeAppear:E=_,onAppear:T=b,onAppearCancelled:k=y}=t,S=(e,t,n)=>{so(e,t?h:c),so(e,t?l:a),n&&n()},I=(e,t)=>{so(e,p),so(e,f),t&&t()},A=e=>(t,n)=>{const r=e?T:b,o=()=>S(t,e,n);eo(r,[t,o]),ao(()=>{so(t,e?u:s),oo(t,e?h:c),to(r)||uo(t,i,g,o)})};return Object(r["h"])(t,{onBeforeEnter(e){eo(_,[e]),oo(e,s),oo(e,a)},onBeforeAppear(e){eo(E,[e]),oo(e,u),oo(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>I(e,t);oo(e,d),po(),oo(e,f),ao(()=>{so(e,d),oo(e,p),to(w)||uo(e,i,v,n)}),eo(w,[e,n])},onEnterCancelled(e){S(e,!1),eo(y,[e])},onAppearCancelled(e){S(e,!0),eo(k,[e])},onLeaveCancelled(e){I(e),eo(O,[e])}})}function ro(e){if(null==e)return null;if(Object(r["v"])(e))return[io(e.enter),io(e.leave)];{const t=io(e);return[t,t]}}function io(e){const t=Object(r["N"])(e);return t}function oo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function so(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function ao(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let co=0;function uo(e,t,n,r){const i=e._endId=++co,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=lo(e,t);if(!s)return r();const u=s+"end";let l=0;const h=()=>{e.removeEventListener(u,d),o()},d=t=>{t.target===e&&++l>=c&&h()};setTimeout(()=>{l<c&&h()},a+1),e.addEventListener(u,d)}function lo(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(Ji+"Delay"),o=r(Ji+"Duration"),s=ho(i,o),a=r(Yi+"Delay"),c=r(Yi+"Duration"),u=ho(a,c);let l=null,h=0,d=0;t===Ji?s>0&&(l=Ji,h=s,d=o.length):t===Yi?u>0&&(l=Yi,h=u,d=c.length):(h=Math.max(s,u),l=h>0?s>u?Ji:Yi:null,d=l?l===Ji?o.length:c.length:0);const f=l===Ji&&/\b(transform|all)(,|$)/.test(n[Ji+"Property"]);return{type:l,timeout:h,propCount:d,hasTransform:f}}function ho(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>fo(t)+fo(e[n])))}function fo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function po(){return document.body.offsetHeight}new WeakMap,new WeakMap;const mo=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function go(e){e.target.composing=!0}function vo(e){const t=e.target;t.composing&&(t.composing=!1,_o(t,"input"))}function _o(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const bo={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=mo(o);const s=i||o.props&&"number"===o.props.type;Vi(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=Object(r["N"])(i)),e._assign(i)}),n&&Vi(e,"change",()=>{e.value=e.value.trim()}),t||(Vi(e,"compositionstart",go),Vi(e,"compositionend",vo),Vi(e,"change",vo))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=mo(s),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}};const yo=["ctrl","shift","alt","meta"],wo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>yo.some(n=>e[n+"Key"]&&!t.includes(n))},Oo=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=wo[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Eo=Object(r["h"])({patchProp:Ki},Ei);let To;function ko(){return To||(To=kn(Eo))}const So=(...e)=>{const t=ko().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Io(e);if(!i)return;const o=t._component;Object(r["p"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Io(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("1d80");e.exports=function(e){return Object(r(e))}},"7b17":function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"top",(function(){return i})),n.d(r,"bottom",(function(){return o})),n.d(r,"right",(function(){return s})),n.d(r,"left",(function(){return a})),n.d(r,"auto",(function(){return c})),n.d(r,"basePlacements",(function(){return u})),n.d(r,"start",(function(){return l})),n.d(r,"end",(function(){return h})),n.d(r,"clippingParents",(function(){return d})),n.d(r,"viewport",(function(){return f})),n.d(r,"popper",(function(){return p})),n.d(r,"reference",(function(){return m})),n.d(r,"variationPlacements",(function(){return g})),n.d(r,"placements",(function(){return v})),n.d(r,"beforeRead",(function(){return _})),n.d(r,"read",(function(){return b})),n.d(r,"afterRead",(function(){return y})),n.d(r,"beforeMain",(function(){return w})),n.d(r,"main",(function(){return O})),n.d(r,"afterMain",(function(){return E})),n.d(r,"beforeWrite",(function(){return T})),n.d(r,"write",(function(){return k})),n.d(r,"afterWrite",(function(){return S})),n.d(r,"modifierPhases",(function(){return I})),n.d(r,"applyStyles",(function(){return L})),n.d(r,"arrow",(function(){return ie})),n.d(r,"computeStyles",(function(){return le})),n.d(r,"eventListeners",(function(){return fe})),n.d(r,"flip",(function(){return Le})),n.d(r,"hide",(function(){return Fe})),n.d(r,"offset",(function(){return Be})),n.d(r,"popperOffsets",(function(){return ze})),n.d(r,"preventOverflow",(function(){return Ge})),n.d(r,"popperGenerator",(function(){return it})),n.d(r,"detectOverflow",(function(){return xe})),n.d(r,"createPopperBase",(function(){return ot})),n.d(r,"createPopper",(function(){return at})),n.d(r,"createPopperLite",(function(){return ut}));var i="top",o="bottom",s="right",a="left",c="auto",u=[i,o,s,a],l="start",h="end",d="clippingParents",f="viewport",p="popper",m="reference",g=u.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+h])}),[]),v=[].concat(u,[c]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+h])}),[]),_="beforeRead",b="read",y="afterRead",w="beforeMain",O="main",E="afterMain",T="beforeWrite",k="write",S="afterWrite",I=[_,b,y,w,O,E,T,k,S];function A(e){return e?(e.nodeName||"").toLowerCase():null}function j(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function C(e){var t=j(e).Element;return e instanceof t||e instanceof Element}function x(e){var t=j(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function R(e){if("undefined"===typeof ShadowRoot)return!1;var t=j(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function P(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];x(i)&&A(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function N(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),s=o.reduce((function(e,t){return e[t]="",e}),{});x(r)&&A(r)&&(Object.assign(r.style,s),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var L={name:"applyStyles",enabled:!0,phase:"write",fn:P,effect:N,requires:["computeStyles"]};function D(e){return e.split("-")[0]}function M(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,i=1;return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function U(e){var t=M(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function F(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&R(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function V(e){return j(e).getComputedStyle(e)}function $(e){return["table","td","th"].indexOf(A(e))>=0}function B(e){return((C(e)?e.ownerDocument:e.document)||window.document).documentElement}function H(e){return"html"===A(e)?e:e.assignedSlot||e.parentNode||(R(e)?e.host:null)||B(e)}function z(e){return x(e)&&"fixed"!==V(e).position?e.offsetParent:null}function q(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&x(e)){var r=V(e);if("fixed"===r.position)return null}var i=H(e);while(x(i)&&["html","body"].indexOf(A(i))<0){var o=V(i);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return i;i=i.parentNode}return null}function W(e){var t=j(e),n=z(e);while(n&&$(n)&&"static"===V(n).position)n=z(n);return n&&("html"===A(n)||"body"===A(n)&&"static"===V(n).position)?t:n||q(e)||t}function G(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}var K=Math.max,X=Math.min,J=Math.round;function Y(e,t,n){return K(e,X(t,n))}function Q(){return{top:0,right:0,bottom:0,left:0}}function Z(e){return Object.assign({},Q(),e)}function ee(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var te=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,Z("number"!==typeof e?e:ee(e,u))};function ne(e){var t,n=e.state,r=e.name,c=e.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,h=D(n.placement),d=G(h),f=[a,s].indexOf(h)>=0,p=f?"height":"width";if(u&&l){var m=te(c.padding,n),g=U(u),v="y"===d?i:a,_="y"===d?o:s,b=n.rects.reference[p]+n.rects.reference[d]-l[d]-n.rects.popper[p],y=l[d]-n.rects.reference[d],w=W(u),O=w?"y"===d?w.clientHeight||0:w.clientWidth||0:0,E=b/2-y/2,T=m[v],k=O-g[p]-m[_],S=O/2-g[p]/2+E,I=Y(T,S,k),A=d;n.modifiersData[r]=(t={},t[A]=I,t.centerOffset=I-S,t)}}function re(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&F(t.elements.popper,i)&&(t.elements.arrow=i)}var ie={name:"arrow",enabled:!0,phase:"main",fn:ne,effect:re,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function oe(e){return e.split("-")[1]}var se={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ae(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:J(J(t*i)/i)||0,y:J(J(n*i)/i)||0}}function ce(e){var t,n=e.popper,r=e.popperRect,c=e.placement,u=e.variation,l=e.offsets,d=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,g=!0===m?ae(l):"function"===typeof m?m(l):l,v=g.x,_=void 0===v?0:v,b=g.y,y=void 0===b?0:b,w=l.hasOwnProperty("x"),O=l.hasOwnProperty("y"),E=a,T=i,k=window;if(p){var S=W(n),I="clientHeight",A="clientWidth";S===j(n)&&(S=B(n),"static"!==V(S).position&&"absolute"===d&&(I="scrollHeight",A="scrollWidth")),S=S,c!==i&&(c!==a&&c!==s||u!==h)||(T=o,y-=S[I]-r.height,y*=f?1:-1),c!==a&&(c!==i&&c!==o||u!==h)||(E=s,_-=S[A]-r.width,_*=f?1:-1)}var C,x=Object.assign({position:d},p&&se);return f?Object.assign({},x,(C={},C[T]=O?"0":"",C[E]=w?"0":"",C.transform=(k.devicePixelRatio||1)<=1?"translate("+_+"px, "+y+"px)":"translate3d("+_+"px, "+y+"px, 0)",C)):Object.assign({},x,(t={},t[T]=O?y+"px":"",t[E]=w?_+"px":"",t.transform="",t))}function ue(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,s=void 0===o||o,a=n.roundOffsets,c=void 0===a||a,u={placement:D(t.placement),variation:oe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ce(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ce(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var le={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:ue,data:{}},he={passive:!0};function de(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=void 0===i||i,s=r.resize,a=void 0===s||s,c=j(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach((function(e){e.addEventListener("scroll",n.update,he)})),a&&c.addEventListener("resize",n.update,he),function(){o&&u.forEach((function(e){e.removeEventListener("scroll",n.update,he)})),a&&c.removeEventListener("resize",n.update,he)}}var fe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:de,data:{}},pe={left:"right",right:"left",bottom:"top",top:"bottom"};function me(e){return e.replace(/left|right|bottom|top/g,(function(e){return pe[e]}))}var ge={start:"end",end:"start"};function ve(e){return e.replace(/start|end/g,(function(e){return ge[e]}))}function _e(e){var t=j(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function be(e){return M(B(e)).left+_e(e).scrollLeft}function ye(e){var t=j(e),n=B(e),r=t.visualViewport,i=n.clientWidth,o=n.clientHeight,s=0,a=0;return r&&(i=r.width,o=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:i,height:o,x:s+be(e),y:a}}function we(e){var t,n=B(e),r=_e(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=K(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=K(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+be(e),c=-r.scrollTop;return"rtl"===V(i||n).direction&&(a+=K(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:c}}function Oe(e){var t=V(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Ee(e){return["html","body","#document"].indexOf(A(e))>=0?e.ownerDocument.body:x(e)&&Oe(e)?e:Ee(H(e))}function Te(e,t){var n;void 0===t&&(t=[]);var r=Ee(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),o=j(r),s=i?[o].concat(o.visualViewport||[],Oe(r)?r:[]):r,a=t.concat(s);return i?a:a.concat(Te(H(s)))}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Se(e){var t=M(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ie(e,t){return t===f?ke(ye(e)):x(t)?Se(t):ke(we(B(e)))}function Ae(e){var t=Te(H(e)),n=["absolute","fixed"].indexOf(V(e).position)>=0,r=n&&x(e)?W(e):e;return C(r)?t.filter((function(e){return C(e)&&F(e,r)&&"body"!==A(e)})):[]}function je(e,t,n){var r="clippingParents"===t?Ae(e):[].concat(t),i=[].concat(r,[n]),o=i[0],s=i.reduce((function(t,n){var r=Ie(e,n);return t.top=K(r.top,t.top),t.right=X(r.right,t.right),t.bottom=X(r.bottom,t.bottom),t.left=K(r.left,t.left),t}),Ie(e,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ce(e){var t,n=e.reference,r=e.element,c=e.placement,u=c?D(c):null,d=c?oe(c):null,f=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(u){case i:t={x:f,y:n.y-r.height};break;case o:t={x:f,y:n.y+n.height};break;case s:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var m=u?G(u):null;if(null!=m){var g="y"===m?"height":"width";switch(d){case l:t[m]=t[m]-(n[g]/2-r[g]/2);break;case h:t[m]=t[m]+(n[g]/2-r[g]/2);break;default:}}return t}function xe(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,c=n.boundary,l=void 0===c?d:c,h=n.rootBoundary,g=void 0===h?f:h,v=n.elementContext,_=void 0===v?p:v,b=n.altBoundary,y=void 0!==b&&b,w=n.padding,O=void 0===w?0:w,E=Z("number"!==typeof O?O:ee(O,u)),T=_===p?m:p,k=e.rects.popper,S=e.elements[y?T:_],I=je(C(S)?S:S.contextElement||B(e.elements.popper),l,g),A=M(e.elements.reference),j=Ce({reference:A,element:k,strategy:"absolute",placement:a}),x=ke(Object.assign({},k,j)),R=_===p?x:A,P={top:I.top-R.top+E.top,bottom:R.bottom-I.bottom+E.bottom,left:I.left-R.left+E.left,right:R.right-I.right+E.right},N=e.modifiersData.offset;if(_===p&&N){var L=N[a];Object.keys(P).forEach((function(e){var t=[s,o].indexOf(e)>=0?1:-1,n=[i,o].indexOf(e)>=0?"y":"x";P[e]+=L[n]*t}))}return P}function Re(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?v:c,h=oe(r),d=h?a?g:g.filter((function(e){return oe(e)===h})):u,f=d.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=d);var p=f.reduce((function(t,n){return t[n]=xe(e,{placement:n,boundary:i,rootBoundary:o,padding:s})[D(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Pe(e){if(D(e)===c)return[];var t=me(e);return[ve(e),t,ve(t)]}function Ne(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var u=n.mainAxis,h=void 0===u||u,d=n.altAxis,f=void 0===d||d,p=n.fallbackPlacements,m=n.padding,g=n.boundary,v=n.rootBoundary,_=n.altBoundary,b=n.flipVariations,y=void 0===b||b,w=n.allowedAutoPlacements,O=t.options.placement,E=D(O),T=E===O,k=p||(T||!y?[me(O)]:Pe(O)),S=[O].concat(k).reduce((function(e,n){return e.concat(D(n)===c?Re(t,{placement:n,boundary:g,rootBoundary:v,padding:m,flipVariations:y,allowedAutoPlacements:w}):n)}),[]),I=t.rects.reference,A=t.rects.popper,j=new Map,C=!0,x=S[0],R=0;R<S.length;R++){var P=S[R],N=D(P),L=oe(P)===l,M=[i,o].indexOf(N)>=0,U=M?"width":"height",F=xe(t,{placement:P,boundary:g,rootBoundary:v,altBoundary:_,padding:m}),V=M?L?s:a:L?o:i;I[U]>A[U]&&(V=me(V));var $=me(V),B=[];if(h&&B.push(F[N]<=0),f&&B.push(F[V]<=0,F[$]<=0),B.every((function(e){return e}))){x=P,C=!1;break}j.set(P,B)}if(C)for(var H=y?3:1,z=function(e){var t=S.find((function(t){var n=j.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return x=t,"break"},q=H;q>0;q--){var W=z(q);if("break"===W)break}t.placement!==x&&(t.modifiersData[r]._skip=!0,t.placement=x,t.reset=!0)}}var Le={name:"flip",enabled:!0,phase:"main",fn:Ne,requiresIfExists:["offset"],data:{_skip:!1}};function De(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Me(e){return[i,s,o,a].some((function(t){return e[t]>=0}))}function Ue(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=xe(t,{elementContext:"reference"}),a=xe(t,{altBoundary:!0}),c=De(s,r),u=De(a,i,o),l=Me(c),h=Me(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:h},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":h})}var Fe={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ue};function Ve(e,t,n){var r=D(e),o=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*o,[a,s].indexOf(r)>=0?{x:l,y:u}:{x:u,y:l}}function $e(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,s=v.reduce((function(e,n){return e[n]=Ve(n,t.rects,o),e}),{}),a=s[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=s}var Be={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:$e};function He(e){var t=e.state,n=e.name;t.modifiersData[n]=Ce({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ze={name:"popperOffsets",enabled:!0,phase:"read",fn:He,data:{}};function qe(e){return"x"===e?"y":"x"}function We(e){var t=e.state,n=e.options,r=e.name,c=n.mainAxis,u=void 0===c||c,h=n.altAxis,d=void 0!==h&&h,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,v=n.tether,_=void 0===v||v,b=n.tetherOffset,y=void 0===b?0:b,w=xe(t,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),O=D(t.placement),E=oe(t.placement),T=!E,k=G(O),S=qe(k),I=t.modifiersData.popperOffsets,A=t.rects.reference,j=t.rects.popper,C="function"===typeof y?y(Object.assign({},t.rects,{placement:t.placement})):y,x={x:0,y:0};if(I){if(u||d){var R="y"===k?i:a,P="y"===k?o:s,N="y"===k?"height":"width",L=I[k],M=I[k]+w[R],F=I[k]-w[P],V=_?-j[N]/2:0,$=E===l?A[N]:j[N],B=E===l?-j[N]:-A[N],H=t.elements.arrow,z=_&&H?U(H):{width:0,height:0},q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Q(),J=q[R],Z=q[P],ee=Y(0,A[N],z[N]),te=T?A[N]/2-V-ee-J-C:$-ee-J-C,ne=T?-A[N]/2+V+ee+Z+C:B+ee+Z+C,re=t.elements.arrow&&W(t.elements.arrow),ie=re?"y"===k?re.clientTop||0:re.clientLeft||0:0,se=t.modifiersData.offset?t.modifiersData.offset[t.placement][k]:0,ae=I[k]+te-se-ie,ce=I[k]+ne-se;if(u){var ue=Y(_?X(M,ae):M,L,_?K(F,ce):F);I[k]=ue,x[k]=ue-L}if(d){var le="x"===k?i:a,he="x"===k?o:s,de=I[S],fe=de+w[le],pe=de-w[he],me=Y(_?X(fe,ae):fe,de,_?K(pe,ce):pe);I[S]=me,x[S]=me-de}}t.modifiersData[r]=x}}var Ge={name:"preventOverflow",enabled:!0,phase:"main",fn:We,requiresIfExists:["offset"]};function Ke(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Xe(e){return e!==j(e)&&x(e)?Ke(e):_e(e)}function Je(e){var t=e.getBoundingClientRect(),n=t.width/e.offsetWidth||1,r=t.height/e.offsetHeight||1;return 1!==n||1!==r}function Ye(e,t,n){void 0===n&&(n=!1);var r=x(t),i=x(t)&&Je(t),o=B(t),s=M(e,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==A(t)||Oe(o))&&(a=Xe(t)),x(t)?(c=M(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):o&&(c.x=be(o))),{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function Qe(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var o=[].concat(e.requires||[],e.requiresIfExists||[]);o.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function Ze(e){var t=Qe(e);return I.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function et(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function tt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var nt={placement:"bottom",modifiers:[],strategy:"absolute"};function rt(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function it(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?nt:i;return function(e,t,n){void 0===n&&(n=o);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},nt,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],a=!1,c={state:i,setOptions:function(n){var s="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},o,i.options,s),i.scrollParents={reference:C(e)?Te(e):e.contextElement?Te(e.contextElement):[],popper:Te(t)};var a=Ze(tt([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(rt(t,n)){i.rects={reference:Ye(t,W(n),"fixed"===i.options.strategy),popper:U(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var o=i.orderedModifiers[r],s=o.fn,u=o.options,l=void 0===u?{}:u,h=o.name;"function"===typeof s&&(i=s({state:i,options:l,name:h,instance:c})||i)}else i.reset=!1,r=-1}}},update:et((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){l(),a=!0}};if(!rt(e,t))return c;function u(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"===typeof o){var a=o({state:i,name:t,instance:c,options:r}),u=function(){};s.push(a||u)}}))}function l(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var ot=it(),st=[fe,ze,le,L,Be,Le,Ge,ie,Fe],at=it({defaultModifiers:st}),ct=[fe,ze,le,L],ut=it({defaultModifiers:ct});
/*!
  * Bootstrap v5.1.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const lt=1e6,ht=1e3,dt="transitionend",ft=e=>null===e||void 0===e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),pt=e=>{do{e+=Math.floor(Math.random()*lt)}while(document.getElementById(e));return e},mt=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},gt=e=>{const t=mt(e);return t&&document.querySelector(t)?t:null},vt=e=>{const t=mt(e);return t?document.querySelector(t):null},_t=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*ht):0},bt=e=>{e.dispatchEvent(new Event(dt))},yt=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),wt=e=>yt(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,Ot=(e,t,n)=>{Object.keys(n).forEach(r=>{const i=n[r],o=t[r],s=o&&yt(o)?"element":ft(o);if(!new RegExp(i).test(s))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${i}".`)})},Et=e=>!(!yt(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),Tt=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),kt=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?kt(e.parentNode):null},St=()=>{},It=e=>{e.offsetHeight},At=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},jt=[],Ct=e=>{"loading"===document.readyState?(jt.length||document.addEventListener("DOMContentLoaded",()=>{jt.forEach(e=>e())}),jt.push(e)):e()},xt=()=>"rtl"===document.documentElement.dir,Rt=e=>{Ct(()=>{const t=At();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},Pt=e=>{"function"===typeof e&&e()},Nt=(e,t,n=!0)=>{if(!n)return void Pt(e);const r=5,i=_t(t)+r;let o=!1;const s=({target:n})=>{n===t&&(o=!0,t.removeEventListener(dt,s),Pt(e))};t.addEventListener(dt,s),setTimeout(()=>{o||bt(t)},i)},Lt=(e,t,n,r)=>{let i=e.indexOf(t);if(-1===i)return e[!n&&r?e.length-1:0];const o=e.length;return i+=n?1:-1,r&&(i=(i+o)%o),e[Math.max(0,Math.min(i,o-1))]},Dt=/[^.]*(?=\..*)\.|.*/,Mt=/\..*/,Ut=/::\d+$/,Ft={};let Vt=1;const $t={mouseenter:"mouseover",mouseleave:"mouseout"},Bt=/^(mouseenter|mouseleave)/i,Ht=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function zt(e,t){return t&&`${t}::${Vt++}`||e.uidEvent||Vt++}function qt(e){const t=zt(e);return e.uidEvent=t,Ft[t]=Ft[t]||{},Ft[t]}function Wt(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&en.off(e,r.type,t),t.apply(e,[r])}}function Gt(e,t,n){return function r(i){const o=e.querySelectorAll(t);for(let{target:s}=i;s&&s!==this;s=s.parentNode)for(let a=o.length;a--;)if(o[a]===s)return i.delegateTarget=s,r.oneOff&&en.off(e,i.type,t,n),n.apply(s,[i]);return null}}function Kt(e,t,n=null){const r=Object.keys(e);for(let i=0,o=r.length;i<o;i++){const o=e[r[i]];if(o.originalHandler===t&&o.delegationSelector===n)return o}return null}function Xt(e,t,n){const r="string"===typeof t,i=r?n:t;let o=Zt(e);const s=Ht.has(o);return s||(o=e),[r,i,o]}function Jt(e,t,n,r,i){if("string"!==typeof t||!e)return;if(n||(n=r,r=null),Bt.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[o,s,a]=Xt(t,n,r),c=qt(e),u=c[a]||(c[a]={}),l=Kt(u,s,o?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const h=zt(s,t.replace(Dt,"")),d=o?Gt(e,n,r):Wt(e,n);d.delegationSelector=o?n:null,d.originalHandler=s,d.oneOff=i,d.uidEvent=h,u[h]=d,e.addEventListener(a,d,o)}function Yt(e,t,n,r,i){const o=Kt(t[n],r,i);o&&(e.removeEventListener(n,o,Boolean(i)),delete t[n][o.uidEvent])}function Qt(e,t,n,r){const i=t[n]||{};Object.keys(i).forEach(o=>{if(o.includes(r)){const r=i[o];Yt(e,t,n,r.originalHandler,r.delegationSelector)}})}function Zt(e){return e=e.replace(Mt,""),$t[e]||e}const en={on(e,t,n,r){Jt(e,t,n,r,!1)},one(e,t,n,r){Jt(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,o,s]=Xt(t,n,r),a=s!==t,c=qt(e),u=t.startsWith(".");if("undefined"!==typeof o){if(!c||!c[s])return;return void Yt(e,c,s,o,i?n:null)}u&&Object.keys(c).forEach(n=>{Qt(e,c,n,t.slice(1))});const l=c[s]||{};Object.keys(l).forEach(n=>{const r=n.replace(Ut,"");if(!a||t.includes(r)){const t=l[n];Yt(e,c,s,t.originalHandler,t.delegationSelector)}})},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=At(),i=Zt(t),o=t!==i,s=Ht.has(i);let a,c=!0,u=!0,l=!1,h=null;return o&&r&&(a=r.Event(t,n),r(e).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented()),s?(h=document.createEvent("HTMLEvents"),h.initEvent(i,c,!0)):h=new CustomEvent(t,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach(e=>{Object.defineProperty(h,e,{get(){return n[e]}})}),l&&h.preventDefault(),u&&e.dispatchEvent(h),h.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),h}},tn=new Map,nn={set(e,t,n){tn.has(e)||tn.set(e,new Map);const r=tn.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return tn.has(e)&&tn.get(e).get(t)||null},remove(e,t){if(!tn.has(e))return;const n=tn.get(e);n.delete(t),0===n.size&&tn.delete(e)}},rn="5.1.2";class on{constructor(e){e=wt(e),e&&(this._element=e,nn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){nn.remove(this._element,this.constructor.DATA_KEY),en.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){Nt(e,t,n)}static getInstance(e){return nn.get(wt(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return rn}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}const sn=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,r=e.NAME;en.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),Tt(this))return;const i=vt(this)||this.closest("."+r),o=e.getOrCreateInstance(i);o[t]()}))},an="alert",cn="bs.alert",un="."+cn,ln="close"+un,hn="closed"+un,dn="fade",fn="show";class pn extends on{static get NAME(){return an}close(){const e=en.trigger(this._element,ln);if(e.defaultPrevented)return;this._element.classList.remove(fn);const t=this._element.classList.contains(dn);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),en.trigger(this._element,hn),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=pn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}sn(pn,"close"),Rt(pn);const mn="button",gn="bs.button",vn="."+gn,_n=".data-api",bn="active",yn='[data-bs-toggle="button"]',wn=`click${vn}${_n}`;class On extends on{static get NAME(){return mn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(bn))}static jQueryInterface(e){return this.each((function(){const t=On.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function En(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function Tn(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}en.on(document,wn,yn,e=>{e.preventDefault();const t=e.target.closest(yn),n=On.getOrCreateInstance(t);n.toggle()}),Rt(On);const kn={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+Tn(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+Tn(t))},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter(e=>e.startsWith("bs")).forEach(n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=En(e.dataset[n])}),t},getDataAttribute(e,t){return En(e.getAttribute("data-bs-"+Tn(t)))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},Sn=3,In={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const n=[];let r=e.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==Sn)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(", ");return this.find(t,e).filter(e=>!Tt(e)&&Et(e))}},An="carousel",jn="bs.carousel",Cn="."+jn,xn=".data-api",Rn="ArrowLeft",Pn="ArrowRight",Nn=500,Ln=40,Dn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Mn={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Un="next",Fn="prev",Vn="left",$n="right",Bn={[Rn]:$n,[Pn]:Vn},Hn="slide"+Cn,zn="slid"+Cn,qn="keydown"+Cn,Wn="mouseenter"+Cn,Gn="mouseleave"+Cn,Kn="touchstart"+Cn,Xn="touchmove"+Cn,Jn="touchend"+Cn,Yn="pointerdown"+Cn,Qn="pointerup"+Cn,Zn="dragstart"+Cn,er=`load${Cn}${xn}`,tr=`click${Cn}${xn}`,nr="carousel",rr="active",ir="slide",or="carousel-item-end",sr="carousel-item-start",ar="carousel-item-next",cr="carousel-item-prev",ur="pointer-event",lr=".active",hr=".active.carousel-item",dr=".carousel-item",fr=".carousel-item img",pr=".carousel-item-next, .carousel-item-prev",mr=".carousel-indicators",gr="[data-bs-target]",vr="[data-bs-slide], [data-bs-slide-to]",_r='[data-bs-ride="carousel"]',br="touch",yr="pen";class wr extends on{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=In.findOne(mr,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Dn}static get NAME(){return An}next(){this._slide(Un)}nextWhenVisible(){!document.hidden&&Et(this._element)&&this.next()}prev(){this._slide(Fn)}pause(e){e||(this._isPaused=!0),In.findOne(pr,this._element)&&(bt(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=In.findOne(hr,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void en.one(this._element,zn,()=>this.to(e));if(t===e)return this.pause(),void this.cycle();const n=e>t?Un:Fn;this._slide(n,this._items[e])}_getConfig(e){return e={...Dn,...kn.getDataAttributes(this._element),..."object"===typeof e?e:{}},Ot(An,e,Mn),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Ln)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?$n:Vn)}_addEventListeners(){this._config.keyboard&&en.on(this._element,qn,e=>this._keydown(e)),"hover"===this._config.pause&&(en.on(this._element,Wn,e=>this.pause(e)),en.on(this._element,Gn,e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===yr||e.pointerType===br),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},r=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(e=>this.cycle(e),Nn+this._config.interval))};In.find(fr,this._element).forEach(e=>{en.on(e,Zn,e=>e.preventDefault())}),this._pointerEvent?(en.on(this._element,Yn,e=>t(e)),en.on(this._element,Qn,e=>r(e)),this._element.classList.add(ur)):(en.on(this._element,Kn,e=>t(e)),en.on(this._element,Xn,e=>n(e)),en.on(this._element,Jn,e=>r(e)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Bn[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?In.find(dr,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Un;return Lt(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),r=this._getItemIndex(In.findOne(hr,this._element));return en.trigger(this._element,Hn,{relatedTarget:e,direction:t,from:r,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=In.findOne(lr,this._indicatorsElement);t.classList.remove(rr),t.removeAttribute("aria-current");const n=In.find(gr,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[r].classList.add(rr),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||In.findOne(hr,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),r=In.findOne(hr,this._element),i=this._getItemIndex(r),o=t||this._getItemByOrder(n,r),s=this._getItemIndex(o),a=Boolean(this._interval),c=n===Un,u=c?sr:or,l=c?ar:cr,h=this._orderToDirection(n);if(o&&o.classList.contains(rr))return void(this._isSliding=!1);if(this._isSliding)return;const d=this._triggerSlideEvent(o,h);if(d.defaultPrevented)return;if(!r||!o)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const f=()=>{en.trigger(this._element,zn,{relatedTarget:o,direction:h,from:i,to:s})};if(this._element.classList.contains(ir)){o.classList.add(l),It(o),r.classList.add(u),o.classList.add(u);const e=()=>{o.classList.remove(u,l),o.classList.add(rr),r.classList.remove(rr,l,u),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,r,!0)}else r.classList.remove(rr),o.classList.add(rr),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[$n,Vn].includes(e)?xt()?e===Vn?Fn:Un:e===Vn?Un:Fn:e}_orderToDirection(e){return[Un,Fn].includes(e)?xt()?e===Fn?Vn:$n:e===Fn?$n:Vn:e}static carouselInterface(e,t){const n=wr.getOrCreateInstance(e,t);let{_config:r}=n;"object"===typeof t&&(r={...r,...t});const i="string"===typeof t?t:r.slide;if("number"===typeof t)n.to(t);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){wr.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=vt(this);if(!t||!t.classList.contains(nr))return;const n={...kn.getDataAttributes(t),...kn.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),wr.carouselInterface(t,n),r&&wr.getInstance(t).to(r),e.preventDefault()}}en.on(document,tr,vr,wr.dataApiClickHandler),en.on(window,er,()=>{const e=In.find(_r);for(let t=0,n=e.length;t<n;t++)wr.carouselInterface(e[t],wr.getInstance(e[t]))}),Rt(wr);const Or="collapse",Er="bs.collapse",Tr="."+Er,kr=".data-api",Sr={toggle:!0,parent:null},Ir={toggle:"boolean",parent:"(null|element)"},Ar="show"+Tr,jr="shown"+Tr,Cr="hide"+Tr,xr="hidden"+Tr,Rr=`click${Tr}${kr}`,Pr="show",Nr="collapse",Lr="collapsing",Dr="collapsed",Mr=`:scope .${Nr} .${Nr}`,Ur="collapse-horizontal",Fr="width",Vr="height",$r=".collapse.show, .collapse.collapsing",Br='[data-bs-toggle="collapse"]';class Hr extends on{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=In.find(Br);for(let r=0,i=n.length;r<i;r++){const e=n[r],t=gt(e),i=In.find(t).filter(e=>e===this._element);null!==t&&i.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Sr}static get NAME(){return Or}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=In.find(Mr,this._config.parent);t=In.find($r,this._config.parent).filter(t=>!e.includes(t))}const n=In.findOne(this._selector);if(t.length){const r=t.find(e=>n!==e);if(e=r?Hr.getInstance(r):null,e&&e._isTransitioning)return}const r=en.trigger(this._element,Ar);if(r.defaultPrevented)return;t.forEach(t=>{n!==t&&Hr.getOrCreateInstance(t,{toggle:!1}).hide(),e||nn.set(t,Er,null)});const i=this._getDimension();this._element.classList.remove(Nr),this._element.classList.add(Lr),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(Lr),this._element.classList.add(Nr,Pr),this._element.style[i]="",en.trigger(this._element,jr)},s=i[0].toUpperCase()+i.slice(1),a="scroll"+s;this._queueCallback(o,this._element,!0),this._element.style[i]=this._element[a]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;const e=en.trigger(this._element,Cr);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",It(this._element),this._element.classList.add(Lr),this._element.classList.remove(Nr,Pr);const n=this._triggerArray.length;for(let i=0;i<n;i++){const e=this._triggerArray[i],t=vt(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Lr),this._element.classList.add(Nr),en.trigger(this._element,xr)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Pr)}_getConfig(e){return e={...Sr,...kn.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=wt(e.parent),Ot(Or,e,Ir),e}_getDimension(){return this._element.classList.contains(Ur)?Fr:Vr}_initializeChildren(){if(!this._config.parent)return;const e=In.find(Mr,this._config.parent);In.find(Br,this._config.parent).filter(t=>!e.includes(t)).forEach(e=>{const t=vt(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))})}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach(e=>{t?e.classList.remove(Dr):e.classList.add(Dr),e.setAttribute("aria-expanded",t)})}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=Hr.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}en.on(document,Rr,Br,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=gt(this),n=In.find(t);n.forEach(e=>{Hr.getOrCreateInstance(e,{toggle:!1}).toggle()})})),Rt(Hr);const zr="dropdown",qr="bs.dropdown",Wr="."+qr,Gr=".data-api",Kr="Escape",Xr="Space",Jr="Tab",Yr="ArrowUp",Qr="ArrowDown",Zr=2,ei=new RegExp(`${Yr}|${Qr}|${Kr}`),ti="hide"+Wr,ni="hidden"+Wr,ri="show"+Wr,ii="shown"+Wr,oi=`click${Wr}${Gr}`,si=`keydown${Wr}${Gr}`,ai=`keyup${Wr}${Gr}`,ci="show",ui="dropup",li="dropend",hi="dropstart",di="navbar",fi='[data-bs-toggle="dropdown"]',pi=".dropdown-menu",mi=".navbar-nav",gi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",vi=xt()?"top-end":"top-start",_i=xt()?"top-start":"top-end",bi=xt()?"bottom-end":"bottom-start",yi=xt()?"bottom-start":"bottom-end",wi=xt()?"left-start":"right-start",Oi=xt()?"right-start":"left-start",Ei={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ti={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class ki extends on{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Ei}static get DefaultType(){return Ti}static get NAME(){return zr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Tt(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=en.trigger(this._element,ri,e);if(t.defaultPrevented)return;const n=ki.getParentFromElement(this._element);this._inNavbar?kn.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(mi)&&[].concat(...document.body.children).forEach(e=>en.on(e,"mouseover",St)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ci),this._element.classList.add(ci),en.trigger(this._element,ii,e)}hide(){if(Tt(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=en.trigger(this._element,ti,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>en.off(e,"mouseover",St)),this._popper&&this._popper.destroy(),this._menu.classList.remove(ci),this._element.classList.remove(ci),this._element.setAttribute("aria-expanded","false"),kn.removeDataAttribute(this._menu,"popper"),en.trigger(this._element,ni,e))}_getConfig(e){if(e={...this.constructor.Default,...kn.getDataAttributes(this._element),...e},Ot(zr,e,this.constructor.DefaultType),"object"===typeof e.reference&&!yt(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(zr.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e}_createPopper(e){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:yt(this._config.reference)?t=wt(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),i=n.modifiers.find(e=>"applyStyles"===e.name&&!1===e.enabled);this._popper=at(t,this._menu,n),i&&kn.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(ci)}_getMenuElement(){return In.next(this._element,pi)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(li))return wi;if(e.classList.contains(hi))return Oi;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(ui)?t?_i:vi:t?yi:bi}_detectNavbar(){return null!==this._element.closest("."+di)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=In.find(gi,this._menu).filter(Et);n.length&&Lt(n,t,e===Qr,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=ki.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===Zr||"keyup"===e.type&&e.key!==Jr))return;const t=In.find(fi);for(let n=0,r=t.length;n<r;n++){const r=ki.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&e.key===Jr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(i.clickEvent=e)}r._completeHide(i)}}static getParentFromElement(e){return vt(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Xr||e.key!==Kr&&(e.key!==Qr&&e.key!==Yr||e.target.closest(pi)):!ei.test(e.key))return;const t=this.classList.contains(ci);if(!t&&e.key===Kr)return;if(e.preventDefault(),e.stopPropagation(),Tt(this))return;const n=this.matches(fi)?this:In.prev(this,fi)[0],r=ki.getOrCreateInstance(n);if(e.key!==Kr)return e.key===Yr||e.key===Qr?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==Xr||ki.clearMenus());r.hide()}}en.on(document,si,fi,ki.dataApiKeydownHandler),en.on(document,si,pi,ki.dataApiKeydownHandler),en.on(document,oi,ki.clearMenus),en.on(document,ai,ki.clearMenus),en.on(document,oi,fi,(function(e){e.preventDefault(),ki.getOrCreateInstance(this).toggle()})),Rt(ki);const Si=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ii=".sticky-top";class Ai{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(Si,"paddingRight",t=>t+e),this._setElementAttributes(Ii,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e)[t];e.style[t]=n(Number.parseFloat(i))+"px"};this._applyManipulationCallback(e,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Si,"paddingRight"),this._resetElementAttributes(Ii,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&kn.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=kn.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(kn.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){yt(e)?t(e):In.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const ji={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ci={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},xi="backdrop",Ri="fade",Pi="show",Ni="mousedown.bs."+xi;class Li{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&It(this._getElement()),this._getElement().classList.add(Pi),this._emulateAnimation(()=>{Pt(e)})):Pt(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(Pi),this._emulateAnimation(()=>{this.dispose(),Pt(e)})):Pt(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Ri),this._element=e}return this._element}_getConfig(e){return e={...ji,..."object"===typeof e?e:{}},e.rootElement=wt(e.rootElement),Ot(xi,e,Ci),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),en.on(this._getElement(),Ni,()=>{Pt(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(en.off(this._element,Ni),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){Nt(e,this._getElement(),this._config.isAnimated)}}const Di={trapElement:null,autofocus:!0},Mi={trapElement:"element",autofocus:"boolean"},Ui="focustrap",Fi="bs.focustrap",Vi="."+Fi,$i="focusin"+Vi,Bi="keydown.tab"+Vi,Hi="Tab",zi="forward",qi="backward";class Wi{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),en.off(document,Vi),en.on(document,$i,e=>this._handleFocusin(e)),en.on(document,Bi,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,en.off(document,Vi))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const r=In.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===qi?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===Hi&&(this._lastTabNavDirection=e.shiftKey?qi:zi)}_getConfig(e){return e={...Di,..."object"===typeof e?e:{}},Ot(Ui,e,Mi),e}}const Gi="modal",Ki="bs.modal",Xi="."+Ki,Ji=".data-api",Yi="Escape",Qi={backdrop:!0,keyboard:!0,focus:!0},Zi={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},eo="hide"+Xi,to="hidePrevented"+Xi,no="hidden"+Xi,ro="show"+Xi,io="shown"+Xi,oo="resize"+Xi,so="click.dismiss"+Xi,ao="keydown.dismiss"+Xi,co="mouseup.dismiss"+Xi,uo="mousedown.dismiss"+Xi,lo=`click${Xi}${Ji}`,ho="modal-open",fo="fade",po="show",mo="modal-static",go=".modal.show",vo=".modal-dialog",_o=".modal-body",bo='[data-bs-toggle="modal"]';class yo extends on{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=In.findOne(vo,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Ai}static get Default(){return Qi}static get NAME(){return Gi}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=en.trigger(this._element,ro,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(ho),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),en.on(this._dialog,uo,()=>{en.one(this._element,co,e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;const e=en.trigger(this._element,eo);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(po),en.off(this._element,so),en.off(this._dialog,uo),this._queueCallback(()=>this._hideModal(),this._element,t)}dispose(){[window,this._dialog].forEach(e=>en.off(e,Xi)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Li({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Wi({trapElement:this._element})}_getConfig(e){return e={...Qi,...kn.getDataAttributes(this._element),..."object"===typeof e?e:{}},Ot(Gi,e,Zi),e}_showElement(e){const t=this._isAnimated(),n=In.findOne(_o,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&It(this._element),this._element.classList.add(po);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,en.trigger(this._element,io,{relatedTarget:e})};this._queueCallback(r,this._dialog,t)}_setEscapeEvent(){this._isShown?en.on(this._element,ao,e=>{this._config.keyboard&&e.key===Yi?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Yi||this._triggerBackdropTransition()}):en.off(this._element,ao)}_setResizeEvent(){this._isShown?en.on(window,oo,()=>this._adjustDialog()):en.off(window,oo)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(ho),this._resetAdjustments(),this._scrollBar.reset(),en.trigger(this._element,no)})}_showBackdrop(e){en.on(this._element,so,e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(fo)}_triggerBackdropTransition(){const e=en.trigger(this._element,to);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||t.contains(mo)||(i||(r.overflowY="hidden"),t.add(mo),this._queueCallback(()=>{t.remove(mo),i||this._queueCallback(()=>{r.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!xt()||n&&!e&&xt())&&(this._element.style.paddingLeft=t+"px"),(n&&!e&&!xt()||!n&&e&&xt())&&(this._element.style.paddingRight=t+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=yo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}en.on(document,lo,bo,(function(e){const t=vt(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),en.one(t,ro,e=>{e.defaultPrevented||en.one(t,no,()=>{Et(this)&&this.focus()})});const n=In.findOne(go);n&&yo.getInstance(n).hide();const r=yo.getOrCreateInstance(t);r.toggle(this)})),sn(yo),Rt(yo);const wo="offcanvas",Oo="bs.offcanvas",Eo="."+Oo,To=".data-api",ko=`load${Eo}${To}`,So="Escape",Io={backdrop:!0,keyboard:!0,scroll:!1},Ao={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},jo="show",Co="offcanvas-backdrop",xo=".offcanvas.show",Ro="show"+Eo,Po="shown"+Eo,No="hide"+Eo,Lo="hidden"+Eo,Do=`click${Eo}${To}`,Mo="keydown.dismiss"+Eo,Uo='[data-bs-toggle="offcanvas"]';class Fo extends on{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return wo}static get Default(){return Io}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=en.trigger(this._element,Ro,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new Ai).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(jo);const n=()=>{this._config.scroll||this._focustrap.activate(),en.trigger(this._element,Po,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=en.trigger(this._element,No);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(jo),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Ai).reset(),en.trigger(this._element,Lo)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...Io,...kn.getDataAttributes(this._element),..."object"===typeof e?e:{}},Ot(wo,e,Ao),e}_initializeBackDrop(){return new Li({className:Co,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Wi({trapElement:this._element})}_addEventListeners(){en.on(this._element,Mo,e=>{this._config.keyboard&&e.key===So&&this.hide()})}static jQueryInterface(e){return this.each((function(){const t=Fo.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}en.on(document,Do,Uo,(function(e){const t=vt(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Tt(this))return;en.one(t,Lo,()=>{Et(this)&&this.focus()});const n=In.findOne(xo);n&&n!==t&&Fo.getInstance(n).hide();const r=Fo.getOrCreateInstance(t);r.toggle(this)})),en.on(window,ko,()=>In.find(xo).forEach(e=>Fo.getOrCreateInstance(e).show())),sn(Fo),Rt(Fo);const Vo=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),$o=/^aria-[\w-]*$/i,Bo=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,Ho=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,zo=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!Vo.has(n)||Boolean(Bo.test(e.nodeValue)||Ho.test(e.nodeValue));const r=t.filter(e=>e instanceof RegExp);for(let i=0,o=r.length;i<o;i++)if(r[i].test(n))return!0;return!1},qo={"*":["class","dir","id","lang","role",$o],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Wo(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),o=[].concat(...i.body.querySelectorAll("*"));for(let s=0,a=o.length;s<a;s++){const e=o[s],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const r=[].concat(...e.attributes),i=[].concat(t["*"]||[],t[n]||[]);r.forEach(t=>{zo(t,i)||e.removeAttribute(t.nodeName)})}return i.body.innerHTML}const Go="tooltip",Ko="bs.tooltip",Xo="."+Ko,Jo="bs-tooltip",Yo=new Set(["sanitize","allowList","sanitizeFn"]),Qo={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},Zo={AUTO:"auto",TOP:"top",RIGHT:xt()?"left":"right",BOTTOM:"bottom",LEFT:xt()?"right":"left"},es={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:qo,popperConfig:null},ts={HIDE:"hide"+Xo,HIDDEN:"hidden"+Xo,SHOW:"show"+Xo,SHOWN:"shown"+Xo,INSERTED:"inserted"+Xo,CLICK:"click"+Xo,FOCUSIN:"focusin"+Xo,FOCUSOUT:"focusout"+Xo,MOUSEENTER:"mouseenter"+Xo,MOUSELEAVE:"mouseleave"+Xo},ns="fade",rs="modal",is="show",os="show",ss="out",as=".tooltip-inner",cs="."+rs,us="hide.bs.modal",ls="hover",hs="focus",ds="click",fs="manual";class ps extends on{constructor(e,t){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return es}static get NAME(){return Go}static get Event(){return ts}static get DefaultType(){return Qo}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(is))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),en.off(this._element.closest(cs),us,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=en.trigger(this._element,this.constructor.Event.SHOW),t=kt(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(as).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),i=pt(this.constructor.NAME);r.setAttribute("id",i),this._element.setAttribute("aria-describedby",i),this._config.animation&&r.classList.add(ns);const o="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,s=this._getAttachment(o);this._addAttachmentClass(s);const{container:a}=this._config;nn.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(r),en.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=at(this._element,r,this._getPopperConfig(s)),r.classList.add(is);const c=this._resolvePossibleFunction(this._config.customClass);c&&r.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>{en.on(e,"mouseover",St)});const u=()=>{const e=this._hoverState;this._hoverState=null,en.trigger(this._element,this.constructor.Event.SHOWN),e===ss&&this._leave(null,this)},l=this.tip.classList.contains(ns);this._queueCallback(u,this.tip,l)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==os&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),en.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=en.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(is),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>en.off(e,"mouseover",St)),this._activeTrigger[ds]=!1,this._activeTrigger[hs]=!1,this._activeTrigger[ls]=!1;const r=this.tip.classList.contains(ns);this._queueCallback(t,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(ns,is),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),as)}_sanitizeAndSetContent(e,t,n){const r=In.findOne(n,e);t||!r?this.setElementContent(r,t):r.remove()}setElementContent(e,t){if(null!==e)return yt(t)?(t=wt(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Wo(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return Zo[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach(e=>{if("click"===e)en.on(this._element,this.constructor.Event.CLICK,this._config.selector,e=>this.toggle(e));else if(e!==fs){const t=e===ls?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===ls?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;en.on(this._element,t,this._config.selector,e=>this._enter(e)),en.on(this._element,n,this._config.selector,e=>this._leave(e))}}),this._hideModalHandler=()=>{this._element&&this.hide()},en.on(this._element.closest(cs),us,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?hs:ls]=!0),t.getTipElement().classList.contains(is)||t._hoverState===os?t._hoverState=os:(clearTimeout(t._timeout),t._hoverState=os,t._config.delay&&t._config.delay.show?t._timeout=setTimeout(()=>{t._hoverState===os&&t.show()},t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?hs:ls]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=ss,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(()=>{t._hoverState===ss&&t.hide()},t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=kn.getDataAttributes(this._element);return Object.keys(t).forEach(e=>{Yo.has(e)&&delete t[e]}),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:wt(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),Ot(Go,e,this.constructor.DefaultType),e.sanitize&&(e.template=Wo(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map(e=>e.trim()).forEach(t=>e.classList.remove(t))}_getBasicClassPrefix(){return Jo}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=ps.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Rt(ps);const ms="popover",gs="bs.popover",vs="."+gs,_s="bs-popover",bs={...ps.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},ys={...ps.DefaultType,content:"(string|element|function)"},ws={HIDE:"hide"+vs,HIDDEN:"hidden"+vs,SHOW:"show"+vs,SHOWN:"shown"+vs,INSERTED:"inserted"+vs,CLICK:"click"+vs,FOCUSIN:"focusin"+vs,FOCUSOUT:"focusout"+vs,MOUSEENTER:"mouseenter"+vs,MOUSELEAVE:"mouseleave"+vs},Os=".popover-header",Es=".popover-body";class Ts extends ps{static get Default(){return bs}static get NAME(){return ms}static get Event(){return ws}static get DefaultType(){return ys}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Os),this._sanitizeAndSetContent(e,this._getContent(),Es)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return _s}static jQueryInterface(e){return this.each((function(){const t=Ts.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Rt(Ts);const ks="scrollspy",Ss="bs.scrollspy",Is="."+Ss,As=".data-api",js={offset:10,method:"auto",target:""},Cs={offset:"number",method:"string",target:"(string|element)"},xs="activate"+Is,Rs="scroll"+Is,Ps=`load${Is}${As}`,Ns="dropdown-item",Ls="active",Ds='[data-bs-spy="scroll"]',Ms=".nav, .list-group",Us=".nav-link",Fs=".nav-item",Vs=".list-group-item",$s=`${Us}, ${Vs}, .${Ns}`,Bs=".dropdown",Hs=".dropdown-toggle",zs="offset",qs="position";class Ws extends on{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,en.on(this._scrollElement,Rs,()=>this._process()),this.refresh(),this._process()}static get Default(){return js}static get NAME(){return ks}refresh(){const e=this._scrollElement===this._scrollElement.window?zs:qs,t="auto"===this._config.method?e:this._config.method,n=t===qs?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=In.find($s,this._config.target);r.map(e=>{const r=gt(e),i=r?In.findOne(r):null;if(i){const e=i.getBoundingClientRect();if(e.width||e.height)return[kn[t](i).top+n,r]}return null}).filter(e=>e).sort((e,t)=>e[0]-t[0]).forEach(e=>{this._offsets.push(e[0]),this._targets.push(e[1])})}dispose(){en.off(this._scrollElement,Is),super.dispose()}_getConfig(e){return e={...js,...kn.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=wt(e.target)||document.documentElement,Ot(ks,e,Cs),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=$s.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=In.findOne(t.join(","),this._config.target);n.classList.add(Ls),n.classList.contains(Ns)?In.findOne(Hs,n.closest(Bs)).classList.add(Ls):In.parents(n,Ms).forEach(e=>{In.prev(e,`${Us}, ${Vs}`).forEach(e=>e.classList.add(Ls)),In.prev(e,Fs).forEach(e=>{In.children(e,Us).forEach(e=>e.classList.add(Ls))})}),en.trigger(this._scrollElement,xs,{relatedTarget:e})}_clear(){In.find($s,this._config.target).filter(e=>e.classList.contains(Ls)).forEach(e=>e.classList.remove(Ls))}static jQueryInterface(e){return this.each((function(){const t=Ws.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}en.on(window,Ps,()=>{In.find(Ds).forEach(e=>new Ws(e))}),Rt(Ws);const Gs="tab",Ks="bs.tab",Xs="."+Ks,Js=".data-api",Ys="hide"+Xs,Qs="hidden"+Xs,Zs="show"+Xs,ea="shown"+Xs,ta=`click${Xs}${Js}`,na="dropdown-menu",ra="active",ia="fade",oa="show",sa=".dropdown",aa=".nav, .list-group",ca=".active",ua=":scope > li > .active",la='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ha=".dropdown-toggle",da=":scope > .dropdown-menu .active";class fa extends on{static get NAME(){return Gs}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ra))return;let e;const t=vt(this._element),n=this._element.closest(aa);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?ua:ca;e=In.find(t,n),e=e[e.length-1]}const r=e?en.trigger(e,Ys,{relatedTarget:this._element}):null,i=en.trigger(this._element,Zs,{relatedTarget:e});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const o=()=>{en.trigger(e,Qs,{relatedTarget:this._element}),en.trigger(this._element,ea,{relatedTarget:e})};t?this._activate(t,t.parentNode,o):o()}_activate(e,t,n){const r=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?In.children(t,ca):In.find(ua,t),i=r[0],o=n&&i&&i.classList.contains(ia),s=()=>this._transitionComplete(e,i,n);i&&o?(i.classList.remove(oa),this._queueCallback(s,e,!0)):s()}_transitionComplete(e,t,n){if(t){t.classList.remove(ra);const e=In.findOne(da,t.parentNode);e&&e.classList.remove(ra),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(ra),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),It(e),e.classList.contains(ia)&&e.classList.add(oa);let r=e.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(na)){const t=e.closest(sa);t&&In.find(ha,t).forEach(e=>e.classList.add(ra)),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=fa.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}en.on(document,ta,la,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),Tt(this))return;const t=fa.getOrCreateInstance(this);t.show()})),Rt(fa);const pa="toast",ma="bs.toast",ga="."+ma,va="mouseover"+ga,_a="mouseout"+ga,ba="focusin"+ga,ya="focusout"+ga,wa="hide"+ga,Oa="hidden"+ga,Ea="show"+ga,Ta="shown"+ga,ka="fade",Sa="hide",Ia="show",Aa="showing",ja={animation:"boolean",autohide:"boolean",delay:"number"},Ca={animation:!0,autohide:!0,delay:5e3};class xa extends on{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ja}static get Default(){return Ca}static get NAME(){return pa}show(){const e=en.trigger(this._element,Ea);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(ka);const t=()=>{this._element.classList.remove(Aa),en.trigger(this._element,Ta),this._maybeScheduleHide()};this._element.classList.remove(Sa),It(this._element),this._element.classList.add(Ia),this._element.classList.add(Aa),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Ia))return;const e=en.trigger(this._element,wa);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Sa),this._element.classList.remove(Aa),this._element.classList.remove(Ia),en.trigger(this._element,Oa)};this._element.classList.add(Aa),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Ia)&&this._element.classList.remove(Ia),super.dispose()}_getConfig(e){return e={...Ca,...kn.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},Ot(pa,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){en.on(this._element,va,e=>this._onInteraction(e,!0)),en.on(this._element,_a,e=>this._onInteraction(e,!1)),en.on(this._element,ba,e=>this._onInteraction(e,!0)),en.on(this._element,ya,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=xa.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}sn(xa),Rt(xa)},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),h=">",d="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},_=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},b=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},y=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}y="undefined"!=typeof document?document.domain&&r?_(r):b():_(r);var e=s.length;while(e--)delete y[f][s[e]];return y()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=y(),void 0===t?n:o(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("5e77"),s=n("1626"),a=n("9ed3"),c=n("e163"),u=n("d2bb"),l=n("d44e"),h=n("9112"),d=n("6eeb"),f=n("b622"),p=n("3f8c"),m=n("ae93"),g=o.PROPER,v=o.CONFIGURABLE,_=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,y=f("iterator"),w="keys",O="values",E="entries",T=function(){return this};e.exports=function(e,t,n,o,f,m,k){a(n,t,o);var S,I,A,j=function(e){if(e===f&&N)return N;if(!b&&e in R)return R[e];switch(e){case w:return function(){return new n(this,e)};case O:return function(){return new n(this,e)};case E:return function(){return new n(this,e)}}return function(){return new n(this)}},C=t+" Iterator",x=!1,R=e.prototype,P=R[y]||R["@@iterator"]||f&&R[f],N=!b&&P||j(f),L="Array"==t&&R.entries||P;if(L&&(S=c(L.call(new e)),S!==Object.prototype&&S.next&&(i||c(S)===_||(u?u(S,_):s(S[y])||d(S,y,T)),l(S,C,!0,!0),i&&(p[C]=T))),g&&f==O&&P&&P.name!==O&&(!i&&v?h(R,"name",O):(x=!0,N=function(){return P.call(this)})),f)if(I={values:j(O),keys:m?N:j(w),entries:j(E)},k)for(A in I)(b||x||!(A in R))&&d(R,A,I[A]);else r({target:t,proto:!0,forced:b||x},I);return i&&!k||R[y]===N||d(R,y,N,{name:f}),p[t]=N,I}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("861d");e.exports=function(e){if(r(e))return e;throw TypeError(String(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(e,t,n){"use strict";var r=n("a04b"),i=n("9bf2"),o=n("5c6c");e.exports=function(e,t,n){var s=r(t);s in e?i.f(e,s,o(0,n)):e[s]=n}},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"===typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("1626"),i=n("c6cd"),o=Function.toString;r(i.inspectSource)||(i.inspectSource=function(e){return o.call(e)}),e.exports=i.inspectSource},"90e3":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(R){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),s=new j(r||[]);return o._invoke=k(e,n,s),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(R){return{type:"throw",arg:R}}}e.wrap=u;var h="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function v(){}function _(){}var b={};c(b,o,(function(){return this}));var y=Object.getPrototypeOf,w=y&&y(y(C([])));w&&w!==n&&r.call(w,o)&&(b=w);var O=_.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(i,o,s,a){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,h=u.value;return h&&"object"===typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(h).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function k(e,t,n){var r=h;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return x()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=S(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===h)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function S(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,S(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function I(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(I,this),this.reset(!0)}function C(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:x}}function x(){return{value:t,done:!0}}return v.prototype=_,c(O,"constructor",_),c(_,"constructor",v),v.displayName=c(_,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,_):(e.__proto__=_,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},E(T.prototype),c(T.prototype,s,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new T(u(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},E(O),c(O,a,"Generator"),c(O,o,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=C,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:C(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(e,t,n){var r=n("59ed"),i=n("825a"),o=n("35a1");e.exports=function(e,t){var n=arguments.length<2?o(e):t;if(r(n))return i(n.call(e));throw TypeError(String(e)+" is not iterable")}},"9ab4":function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return o})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return a})),n.d(t,"e",(function(){return c}));function r(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function i(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r["throw"](e))}catch(t){o(t)}}function c(e){e.done?n(e.value):i(e.value).then(s,a)}c((r=r.apply(e,t||[])).next())}))}function o(e,t){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(e){return function(t){return c([e,t])}}function c(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(i=2&o[0]?r["return"]:o[0]?r["throw"]||((i=r["return"])&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(i=s.trys,!(i=i.length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}Object.create;function s(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function a(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),s=[];try{while((void 0===t||t-- >0)&&!(r=o.next()).done)s.push(r.value)}catch(a){i={error:a}}finally{try{r&&!r.done&&(n=o["return"])&&n.call(o)}finally{if(i)throw i.error}}return s}function c(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create},"9bf2":function(e,t,n){var r=n("83ab"),i=n("0cfb"),o=n("825a"),s=n("a04b"),a=Object.defineProperty;t.f=r?a:function(e,t,n){if(o(e),t=s(t),o(n),i)try{return a(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n){var u=t+" Iterator";return e.prototype=i(r,{next:o(1,n)}),s(e,u,!1,!0),a[u]=c,e}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return S})),n.d(t,"d",(function(){return k})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return C})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return P})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return N})),n.d(t,"p",(function(){return U})),n.d(t,"q",(function(){return o})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return G})),n.d(t,"t",(function(){return L})),n.d(t,"u",(function(){return j})),n.d(t,"v",(function(){return $})),n.d(t,"w",(function(){return A})),n.d(t,"x",(function(){return W})),n.d(t,"y",(function(){return B})),n.d(t,"z",(function(){return K})),n.d(t,"A",(function(){return v})),n.d(t,"B",(function(){return D})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return F})),n.d(t,"E",(function(){return V})),n.d(t,"F",(function(){return b})),n.d(t,"G",(function(){return y})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return x})),n.d(t,"L",(function(){return w})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return oe})),n.d(t,"O",(function(){return q}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=F(r)?d(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return F(e)||$(e)?e:void 0}const l=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(F(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if($(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),v=r(m);function _(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=b(e[r],t[r]);return n}function b(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=N(e),r=N(t),n||r)return!(!n||!r)&&_(e,t);if(n=$(e),r=$(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!b(e[n],t[n]))return!1}}return String(e)===String(t)}function y(e,t){return e.findIndex(e=>b(e,t))}const w=e=>null==e?"":N(e)||$(e)&&(e.toString===H||!U(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):L(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!$(t)||N(t)||W(t)?t:String(t),E={},T=[],k=()=>{},S=()=>!1,I=/^on[^a-z]/,A=e=>I.test(e),j=e=>e.startsWith("onUpdate:"),C=Object.assign,x=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},R=Object.prototype.hasOwnProperty,P=(e,t)=>R.call(e,t),N=Array.isArray,L=e=>"[object Map]"===z(e),D=e=>"[object Set]"===z(e),M=e=>e instanceof Date,U=e=>"function"===typeof e,F=e=>"string"===typeof e,V=e=>"symbol"===typeof e,$=e=>null!==e&&"object"===typeof e,B=e=>$(e)&&U(e.then)&&U(e.catch),H=Object.prototype.toString,z=e=>H.call(e),q=e=>z(e).slice(8,-1),W=e=>"[object Object]"===z(e),G=e=>F(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),X=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},J=/-(\w)/g,Y=X(e=>e.replace(J,(e,t)=>t?t.toUpperCase():"")),Q=/\B([A-Z])/g,Z=X(e=>e.replace(Q,"-$1").toLowerCase()),ee=X(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=X(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ie=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let se;const ae=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:String(t)}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a4d3:function(e,t,n){"use strict";var r=n("23e7"),i=n("da84"),o=n("d066"),s=n("c430"),a=n("83ab"),c=n("4930"),u=n("d039"),l=n("5135"),h=n("e8b5"),d=n("1626"),f=n("861d"),p=n("d9b5"),m=n("825a"),g=n("7b0b"),v=n("fc6a"),_=n("a04b"),b=n("577e"),y=n("5c6c"),w=n("7c73"),O=n("df75"),E=n("241c"),T=n("057f"),k=n("7418"),S=n("06cf"),I=n("9bf2"),A=n("d1e7"),j=n("6eeb"),C=n("5692"),x=n("f772"),R=n("d012"),P=n("90e3"),N=n("b622"),L=n("e538"),D=n("746f"),M=n("d44e"),U=n("69f3"),F=n("b727").forEach,V=x("hidden"),$="Symbol",B="prototype",H=N("toPrimitive"),z=U.set,q=U.getterFor($),W=Object[B],G=i.Symbol,K=o("JSON","stringify"),X=S.f,J=I.f,Y=T.f,Q=A.f,Z=C("symbols"),ee=C("op-symbols"),te=C("string-to-symbol-registry"),ne=C("symbol-to-string-registry"),re=C("wks"),ie=i.QObject,oe=!ie||!ie[B]||!ie[B].findChild,se=a&&u((function(){return 7!=w(J({},"a",{get:function(){return J(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=X(W,t);r&&delete W[t],J(e,t,n),r&&e!==W&&J(W,t,r)}:J,ae=function(e,t){var n=Z[e]=w(G[B]);return z(n,{type:$,tag:e,description:t}),a||(n.description=t),n},ce=function(e,t,n){e===W&&ce(ee,t,n),m(e);var r=_(t);return m(n),l(Z,r)?(n.enumerable?(l(e,V)&&e[V][r]&&(e[V][r]=!1),n=w(n,{enumerable:y(0,!1)})):(l(e,V)||J(e,V,y(1,{})),e[V][r]=!0),se(e,r,n)):J(e,r,n)},ue=function(e,t){m(e);var n=v(t),r=O(n).concat(pe(n));return F(r,(function(t){a&&!he.call(n,t)||ce(e,t,n[t])})),e},le=function(e,t){return void 0===t?w(e):ue(w(e),t)},he=function(e){var t=_(e),n=Q.call(this,t);return!(this===W&&l(Z,t)&&!l(ee,t))&&(!(n||!l(this,t)||!l(Z,t)||l(this,V)&&this[V][t])||n)},de=function(e,t){var n=v(e),r=_(t);if(n!==W||!l(Z,r)||l(ee,r)){var i=X(n,r);return!i||!l(Z,r)||l(n,V)&&n[V][r]||(i.enumerable=!0),i}},fe=function(e){var t=Y(v(e)),n=[];return F(t,(function(e){l(Z,e)||l(R,e)||n.push(e)})),n},pe=function(e){var t=e===W,n=Y(t?ee:v(e)),r=[];return F(n,(function(e){!l(Z,e)||t&&!l(W,e)||r.push(Z[e])})),r};if(c||(G=function(){if(this instanceof G)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?b(arguments[0]):void 0,t=P(e),n=function(e){this===W&&n.call(ee,e),l(this,V)&&l(this[V],t)&&(this[V][t]=!1),se(this,t,y(1,e))};return a&&oe&&se(W,t,{configurable:!0,set:n}),ae(t,e)},j(G[B],"toString",(function(){return q(this).tag})),j(G,"withoutSetter",(function(e){return ae(P(e),e)})),A.f=he,I.f=ce,S.f=de,E.f=T.f=fe,k.f=pe,L.f=function(e){return ae(N(e),e)},a&&(J(G[B],"description",{configurable:!0,get:function(){return q(this).description}}),s||j(W,"propertyIsEnumerable",he,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:G}),F(O(re),(function(e){D(e)})),r({target:$,stat:!0,forced:!c},{for:function(e){var t=b(e);if(l(te,t))return te[t];var n=G(t);return te[t]=n,ne[n]=t,n},keyFor:function(e){if(!p(e))throw TypeError(e+" is not a symbol");if(l(ne,e))return ne[e]},useSetter:function(){oe=!0},useSimple:function(){oe=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:le,defineProperty:ce,defineProperties:ue,getOwnPropertyDescriptor:de}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:fe,getOwnPropertySymbols:pe}),r({target:"Object",stat:!0,forced:u((function(){k.f(1)}))},{getOwnPropertySymbols:function(e){return k.f(g(e))}}),K){var me=!c||u((function(){var e=G();return"[null]"!=K([e])||"{}"!=K({a:e})||"{}"!=K(Object(e))}));r({target:"JSON",stat:!0,forced:me},{stringify:function(e,t,n){var r,i=[e],o=1;while(arguments.length>o)i.push(arguments[o++]);if(r=t,(f(t)||void 0!==e)&&!p(e))return h(t)||(t=function(e,t){if(d(r)&&(t=r.call(this,e,t)),!p(t))return t}),i[1]=t,K.apply(null,i)}})}if(!G[B][H]){var ge=G[B].valueOf;j(G[B],H,(function(){return ge.apply(this,arguments)}))}M(G,$),R[V]=!0},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},a680:function(e,t,n){"use strict";n.d(t,"a",(function(){return pn})),n.d(t,"b",(function(){return xt})),n.d(t,"c",(function(){return fn})),n.d(t,"d",(function(){return Rt})),n.d(t,"e",(function(){return ln})),n.d(t,"f",(function(){return hn})),n.d(t,"g",(function(){return It})),n.d(t,"h",(function(){return dn}));var r=n("5606"),i=n("ffa6"),o=n("4fc1"),s=n("1fd5");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let c="9.1.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u=new o["b"]("@firebase/firestore");function l(e,...t){if(u.logLevel<=o["a"].DEBUG){const n=t.map(f);u.debug(`Firestore (${c}): ${e}`,...n)}}function h(e,...t){if(u.logLevel<=o["a"].ERROR){const n=t.map(f);u.error(`Firestore (${c}): ${e}`,...n)}}function d(e,...t){if(u.logLevel<=o["a"].WARN){const n=t.map(f);u.warn(`Firestore (${c}): ${e}`,...n)}}function f(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e="Unexpected state"){const t=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+e;throw h(t),new Error(t)}function m(e,t){e||p()}function g(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="ok",_="cancelled",b="unknown",y="invalid-argument",w="deadline-exceeded",O="not-found",E="permission-denied",T="unauthenticated",k="resource-exhausted",S="failed-precondition",I="aborted",A="out-of-range",j="unimplemented",C="internal",x="unavailable";class R extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{constructor(e,t){this.user=t,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+e}}class N{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(a.UNAUTHENTICATED))}shutdown(){}}class L{constructor(e){this.auth=null,e.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(m("string"==typeof e.accessToken),new P(e.accessToken,new a(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class D{constructor(e,t,n){this.t=e,this.i=t,this.o=n,this.type="FirstParty",this.user=a.FIRST_PARTY}get authHeaders(){const e={"X-Goog-AuthUser":this.i},t=this.t.auth.getAuthHeaderValueForFirstParty([]);return t&&(e.Authorization=t),this.o&&(e["X-Goog-Iam-Authorization-Token"]=this.o),e}}class M{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new D(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(a.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class F{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof F&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,n){void 0===t?t=0:t>e.length&&p(),void 0===n?n=e.length-t:n>e.length-t&&p(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===V.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof V?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class $ extends V{construct(e,t,n){return new $(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new R(y,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new $(t)}static emptyPath(){return new $([])}}const B=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends V{construct(e,t,n){return new H(e,t,n)}static isValidIdentifier(e){return B.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new R(y,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new R(y,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new R(y,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new R(y,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.path=e}static fromPath(e){return new z($.fromString(e))}static fromName(e){return new z($.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===$.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return $.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new z(new $(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(e,t,n){if(!n)throw new R(y,`Function ${e}() cannot be called with an empty ${t}.`)}function W(e){if(!z.isDocumentKey(e))throw new R(y,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function G(e){if(z.isDocumentKey(e))throw new R(y,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function K(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":p()}function X(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new R(y,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=K(e);throw new R(y,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function J(e){return null==e}function Y(e){return 0===e&&1/e==-1/0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Z,ee;function te(e){if(void 0===e)return h("RPC_ERROR","HTTP error has no status"),b;switch(e){case 200:return v;case 400:return S;case 401:return T;case 403:return E;case 404:return O;case 409:return I;case 416:return A;case 429:return k;case 499:return _;case 500:return b;case 501:return j;case 503:return x;case 504:return w;default:return e>=200&&e<300?v:e>=400&&e<500?S:e>=500&&e<600?C:b}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(ee=Z||(Z={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";class ne extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.u=t+"://"+e.host,this.h="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}l(e,t,n,r){const i=this.m(e,t);l("RestConnection","Sending: ",i,n);const o={};return this.p(o,r),this.g(e,i,o,n).then(e=>(l("RestConnection","Received: ",e),e),t=>{throw d("RestConnection",e+" failed with error: ",t,"url: ",i,"request:",n),t})}v(e,t,n,r){return this.l(e,t,n,r)}p(e,t){if(e["X-Goog-Api-Client"]="gl-js/ fire/"+c,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t)for(const n in t.authHeaders)t.authHeaders.hasOwnProperty(n)&&(e[n]=t.authHeaders[n])}m(e,t){const n=Q[e];return`${this.u}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}T(e,t){throw new Error("Not supported by FetchConnection")}async g(e,t,n,r){const i=JSON.stringify(r);let o;try{o=await this.I(t,{method:"POST",headers:n,body:i})}catch(e){throw new R(te(e.status),"Request failed with error: "+e.statusText)}if(!o.ok)throw new R(te(o.status),"Request failed with error: "+o.statusText);return o.json()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=re(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function oe(e,t){return e<t?-1:e>t?1:0}function se(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new R(y,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new R(y,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new R(y,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new R(y,"Timestamp seconds out of range: "+e)}static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ae(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ae(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function le(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e){this.fields=e,e.sort(H.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return se(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new de(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new de(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}de.EMPTY_BYTE_STRING=new de("");const fe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(e){if(m(!!e),"string"==typeof e){let t=0;const n=fe.exec(e);if(m(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:me(e.seconds),nanos:me(e.nanos)}}function me(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ge(e){return"string"==typeof e?de.fromBase64String(e):de.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ve(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function _e(e){const t=e.mapValue.fields.__previous_value__;return ve(t)?_e(t):t}function be(e){const t=pe(e.mapValue.fields.__local_write_time__.timestampValue);return new ae(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ve(e)?4:10:p()}function we(e,t){const n=ye(e);if(n!==ye(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return be(e).isEqual(be(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=pe(e.timestampValue),r=pe(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ge(e.bytesValue).isEqual(ge(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return me(e.geoPointValue.latitude)===me(t.geoPointValue.latitude)&&me(e.geoPointValue.longitude)===me(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return me(e.integerValue)===me(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=me(e.doubleValue),r=me(t.doubleValue);return n===r?Y(n)===Y(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return se(e.arrayValue.values||[],t.arrayValue.values||[],we);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ue(n)!==ue(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!we(n[i],r[i])))return!1;return!0}(e,t);default:return p()}}function Oe(e){return!!e&&"nullValue"in e}function Ee(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Te(e){return!!e&&"mapValue"in e}function ke(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return le(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=ke(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=ke(e.arrayValue.values[n]);return t}return Object.assign({},e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.value=e}static empty(){return new Se({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Te(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=ke(t)}setAll(e){let t=H.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=ke(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Te(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Te(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){le(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Se(ke(this.value))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Ie(e,0,ce.min(),Se.empty(),0)}static newFoundDocument(e,t,n){return new Ie(e,1,t,n,0)}static newNoDocument(e,t){return new Ie(e,2,t,Se.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,Se.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Se.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Se.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ie(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,t=null,n=[],r=[],i=null,o=null,s=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.P=null}}function je(e,t=null,n=[],r=[],i=null,o=null,s=null){return new Ae(e,t,n,r,i,o,s)}class Ce{constructor(e,t){this.position=e,this.before=t}}class xe{constructor(e,t="asc"){this.field=e,this.dir=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Re{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.D=null,this.$=null,this.startAt,this.endAt}}function Pe(e){return!J(e.limit)&&"L"===e.limitType}function Ne(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Le(e){for(const t of e.filters)if(t.N())return t.field;return null}function De(e){const t=g(e);if(null===t.D){t.D=[];const e=Le(t),n=Ne(t);if(null!==e&&null===n)e.isKeyField()||t.D.push(new xe(e)),t.D.push(new xe(H.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.D.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.D.push(new xe(H.keyField(),e))}}}return t.D}function Me(e){const t=g(e);if(!t.$)if("F"===t.limitType)t.$=je(t.path,t.collectionGroup,De(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of De(t)){const t="desc"===i.dir?"asc":"desc";e.push(new xe(i.field,t))}const n=t.endAt?new Ce(t.endAt.position,!t.endAt.before):null,r=t.startAt?new Ce(t.startAt.position,!t.startAt.before):null;t.$=je(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.$}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ue(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Y(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.F){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Y(t)?"-0":t}}(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(){this._=void 0}}class Ve extends Fe{}class $e extends Fe{constructor(e){super(),this.elements=e}}class Be extends Fe{constructor(e){super(),this.elements=e}}class He extends Fe{constructor(e,t){super(),this.S=e,this.q=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ze}static exists(e){return new ze(void 0,e)}static updateTime(e){return new ze(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class qe{}class We extends qe{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ge extends qe{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}class Ke extends qe{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Xe extends qe{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),Ye=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Qe{constructor(e,t){this.databaseId=e,this.F=t}}function Ze(e,t){return e.F?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function et(e,t){return e.F?t.toBase64():t.toUint8Array()}function tt(e,t){return Ze(e,t.toTimestamp())}function nt(e){return m(!!e),ce.fromTimestamp(function(e){const t=pe(e);return new ae(t.seconds,t.nanos)}(e))}function rt(e,t){return function(e){return new $(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function it(e,t){return rt(e.databaseId,t.path)}function ot(e,t){const n=function(e){const t=$.fromString(e);return m(vt(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new R(y,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new R(y,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new z((m((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)));var r}function st(e,t){return rt(e.databaseId,t)}function at(e){return new $(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ct(e,t,n){return{name:it(e,t),fields:n.value.mapValue.fields}}function ut(e,t){return"found"in t?function(e,t){m(!!t.found),t.found.name,t.found.updateTime;const n=ot(e,t.found.name),r=nt(t.found.updateTime),i=new Se({mapValue:{fields:t.found.fields}});return Ie.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){m(!!t.missing),m(!!t.readTime);const n=ot(e,t.missing),r=nt(t.readTime);return Ie.newNoDocument(n,r)}(e,t):p()}function lt(e,t){let n;if(t instanceof We)n={update:ct(e,t.key,t.value)};else if(t instanceof Ke)n={delete:it(e,t.key)};else if(t instanceof Ge)n={update:ct(e,t.key,t.data),updateMask:gt(t.fieldMask)};else{if(!(t instanceof Xe))return p();n={verify:it(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof Ve)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof $e)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Be)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof He)return{fieldPath:t.field.canonicalString(),increment:n.q};throw p()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:tt(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:p()}(e,t.precondition)),n}function ht(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=st(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=st(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map(e=>function(e){if("=="===e.op){if(Ee(e.value))return{unaryFilter:{field:mt(e.field),op:"IS_NAN"}};if(Oe(e.value))return{unaryFilter:{field:mt(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ee(e.value))return{unaryFilter:{field:mt(e.field),op:"IS_NOT_NAN"}};if(Oe(e.value))return{unaryFilter:{field:mt(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:mt(e.field),op:pt(e.op),value:e.value}}}(e));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>function(e){return{field:mt(e.field),direction:ft(e.dir)}}(e))}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const s=function(e,t){return e.F||J(t)?t:{value:t}}(e,t.limit);return null!==s&&(n.structuredQuery.limit=s),t.startAt&&(n.structuredQuery.startAt=dt(t.startAt)),t.endAt&&(n.structuredQuery.endAt=dt(t.endAt)),n}function dt(e){return{before:e.before,values:e.position}}function ft(e){return Je[e]}function pt(e){return Ye[e]}function mt(e){return{fieldPath:e.canonicalString()}}function gt(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function vt(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(e){return new Qe(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt extends class{}{constructor(e,t,n){super(),this.credentials=e,this.Y=t,this.S=n,this.K=!1}J(){if(this.K)throw new R(S,"The client has already been terminated.")}l(e,t,n){return this.J(),this.credentials.getToken().then(r=>this.Y.l(e,t,n,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T&&this.credentials.invalidateToken(),e):new R(b,e.toString())})}v(e,t,n){return this.J(),this.credentials.getToken().then(r=>this.Y.v(e,t,n,r)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T&&this.credentials.invalidateToken(),e):new R(b,e.toString())})}terminate(){this.K=!0}}async function yt(e,t){const n=g(e),r=at(n.S)+"/documents",i={writes:t.map(e=>lt(n.S,e))};await n.l("Commit",r,i)}async function wt(e,t){const n=g(e),r=at(n.S)+"/documents",i={documents:t.map(e=>it(n.S,e))},o=await n.v("BatchGetDocuments",r,i),s=new Map;o.forEach(e=>{const t=ut(n.S,e);s.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=s.get(e.toString());m(!!t),a.push(t)}),a}async function Ot(e,t){const n=g(e),r=ht(n.S,Me(t));return(await n.v("RunQuery",r.parent,{structuredQuery:r.structuredQuery})).filter(e=>!!e.document).map(e=>function(e,t,n){const r=ot(e,t.name),i=nt(t.updateTime),o=new Se({mapValue:{fields:t.fields}}),s=Ie.newFoundDocument(r,i,o);return n&&s.setHasCommittedMutations(),n?s.setHasCommittedMutations():s}(n.S,e.document,void 0))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et=new Map;function Tt(e){if(e._terminated)throw new R(S,"The client has already been terminated.");if(!Et.has(e)){l("ComponentProvider","Initializing Datastore");const o=function(e){return new ne(e,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new U(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),s=_t(e._databaseId),a=function(e,t,n){return new bt(e,t,n)}(e._credentials,o,s);Et.set(e,a)}var t,n,r,i;
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return Et.get(e)}class kt{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new R(y,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new R(y,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new R(y,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){this._credentials=t,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new kt({}),this._settingsFrozen=!1,e instanceof F?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new R(y,'"projectId" not provided in firebase.initializeApp.');return new F(e.options.projectId)}(e))}get app(){if(!this._app)throw new R(S,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new R(S,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new kt(e),void 0!==e.credentials&&(this._credentials=function(e){if(!e)return new N;switch(e.type){case"gapi":e.client;return m(!("object"!=typeof r["_removeServiceInstance"]||null===r["_removeServiceInstance"]||!r["_removeServiceInstance"].auth||!r["_removeServiceInstance"].auth.getAuthHeaderValueForFirstParty)),new M(r["_removeServiceInstance"],e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new R(y,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Et.get(e);t&&(l("ComponentProvider","Removing Datastore"),Et.delete(e),t.terminate())}(this),Promise.resolve()}}function It(e=Object(r["getApp"])()){return Object(r["_getProvider"])(e,"firestore/lite").getImmediate()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ct(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new At(this.firestore,e,this._key)}}class jt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new jt(this.firestore,e,this._query)}}class Ct extends jt{constructor(e,t,n){super(e,t,new Re(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new At(this.firestore,null,new z(e))}withConverter(e){return new Ct(this.firestore,e,this._path)}}function xt(e,t,...n){if(e=Object(s["k"])(e),q("collection","path",t),e instanceof St){const r=$.fromString(t,...n);return G(r),new Ct(e,null,r)}{if(!(e instanceof At||e instanceof Ct))throw new R(y,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child($.fromString(t,...n));return G(r),new Ct(e.firestore,null,r)}}function Rt(e,t,...n){if(e=Object(s["k"])(e),1===arguments.length&&(t=ie.A()),q("doc","path",t),e instanceof St){const r=$.fromString(t,...n);return W(r),new At(e,null,new z(r))}{if(!(e instanceof At||e instanceof Ct))throw new R(y,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child($.fromString(t,...n));return W(r),new At(e.firestore,e instanceof Ct?e.converter:null,new z(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pt{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new R(y,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(de.fromBase64String(e))}catch(e){throw new R(y,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Nt(de.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new R(y,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new R(y,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mt=/^__.*__$/;class Ut{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ge(e,this.data,this.fieldMask,t,this.fieldTransforms):new We(e,this.data,t,this.fieldTransforms)}}class Ft{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Ge(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Vt(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class $t{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.S=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get X(){return this.settings.X}tt(e){return new $t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.S,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}et(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.tt({path:n,nt:!1});return r.rt(e),r}st(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.tt({path:n,nt:!1});return r.Z(),r}it(e){return this.tt({path:void 0,nt:!0})}ot(e){return tn(e,this.settings.methodName,this.settings.ut||!1,this.path,this.settings.ct)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.rt(this.path.get(e))}rt(e){if(0===e.length)throw this.ot("Document fields must not be empty");if(Vt(this.X)&&Mt.test(e))throw this.ot('Document fields cannot begin and end with "__"')}}class Bt{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.S=n||_t(e)}at(e,t,n,r=!1){return new $t({X:e,methodName:t,ct:n,path:H.emptyPath(),nt:!1,ut:r},this.databaseId,this.S,this.ignoreUndefinedProperties)}}function Ht(e){const t=e._freezeSettings(),n=_t(e._databaseId);return new Bt(e._databaseId,!!t.ignoreUndefinedProperties,n)}function zt(e,t,n,r,i,o={}){const s=e.at(o.merge||o.mergeFields?2:0,t,n,i);Yt("Data must be an object, but it was:",s,r);const a=Xt(r,s);let c,u;if(o.merge)c=new he(s.fieldMask),u=s.fieldTransforms;else if(o.mergeFields){const e=[];for(const r of o.mergeFields){const i=Qt(t,r,n);if(!s.contains(i))throw new R(y,`Field '${i}' is specified in your field mask but missing from your input data.`);nn(e,i)||e.push(i)}c=new he(e),u=s.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,u=s.fieldTransforms;return new Ut(new Se(a),c,u)}class qt extends Lt{_toFieldTransform(e){if(2!==e.X)throw 1===e.X?e.ot(this._methodName+"() can only appear at the top level of your update data"):e.ot(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qt}}function Wt(e,t,n,r){const i=e.at(1,t,n);Yt("Data must be an object, but it was:",i,r);const o=[],a=Se.empty();le(r,(e,r)=>{const c=en(t,e,n);r=Object(s["k"])(r);const u=i.st(c);if(r instanceof qt)o.push(c);else{const e=Kt(r,u);null!=e&&(o.push(c),a.set(c,e))}});const c=new he(o);return new Ft(a,c,i.fieldTransforms)}function Gt(e,t,n,r,i,o){const a=e.at(1,t,n),c=[Qt(t,r,n)],u=[i];if(o.length%2!=0)throw new R(y,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<o.length;s+=2)c.push(Qt(t,o[s])),u.push(o[s+1]);const l=[],h=Se.empty();for(let f=c.length-1;f>=0;--f)if(!nn(l,c[f])){const e=c[f];let t=u[f];t=Object(s["k"])(t);const n=a.st(e);if(t instanceof qt)l.push(e);else{const r=Kt(t,n);null!=r&&(l.push(e),h.set(e,r))}}const d=new he(l);return new Ft(h,d,a.fieldTransforms)}function Kt(e,t){if(Jt(e=Object(s["k"])(e)))return Yt("Unsupported field value:",t,e),Xt(e,t);if(e instanceof Lt)return function(e,t){if(!Vt(t.X))throw t.ot(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.ot(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.nt&&4!==t.X)throw t.ot("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=Kt(i,t.it(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(s["k"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ue(t.S,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ae.fromDate(e);return{timestampValue:Ze(t.S,n)}}if(e instanceof ae){const n=new ae(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ze(t.S,n)}}if(e instanceof Dt)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Nt)return{bytesValue:et(t.S,e._byteString)};if(e instanceof At){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ot(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:rt(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ot("Unsupported field value: "+K(e))}(e,t)}function Xt(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(e,(e,r)=>{const i=Kt(r,t.et(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Jt(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ae||e instanceof Dt||e instanceof Nt||e instanceof At||e instanceof Lt)}function Yt(e,t,n){if(!Jt(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=K(n);throw"an object"===r?t.ot(e+" a custom object"):t.ot(e+" "+r)}}function Qt(e,t,n){if((t=Object(s["k"])(t))instanceof Pt)return t._internalPath;if("string"==typeof t)return en(e,t);throw tn("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Zt=new RegExp("[~\\*/\\[\\]]");function en(e,t,n){if(t.search(Zt)>=0)throw tn(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Pt(...t.split("."))._internalPath}catch(r){throw tn(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tn(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new R(y,a+e+c)}function nn(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new At(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new on(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(an("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class on extends rn{data(){return super.data()}}class sn{constructor(e,t){this._docs=t,this.query=e}get docs(){return[...this._docs]}get size(){return this.docs.length}get empty(){return 0===this.docs.length}forEach(e,t){this._docs.forEach(e,t)}}function an(e,t){return"string"==typeof t?en(e,t):t instanceof Pt?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function cn(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class un extends class{convertValue(e,t="none"){switch(ye(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ge(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw p()}}convertObject(e,t){const n={};return le(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new Dt(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":_e(e);return null==r["_registerComponent"]?null:this.convertValue(r["_registerComponent"],t);case"estimate":return this.convertTimestamp(be(e));default:return null}}convertTimestamp(e){const t=pe(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=$.fromString(e);m(vt(n));const r=new F(n.get(1),n.get(3)),i=new z(n.popFirst(5));return r.isEqual(t)||h(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new At(this.firestore,null,t)}}function ln(e){const t=Tt((e=X(e,At)).firestore),n=new un(e.firestore);return wt(t,[e._key]).then(t=>{m(1===t.length);const r=t[0];return new rn(e.firestore,n,e._key,r.isFoundDocument()?r:null,e.converter)})}function hn(e){!function(e){if(Pe(e)&&0===e.explicitOrderBy.length)throw new R(j,"limitToLast() queries require specifying at least one orderBy() clause")}((e=X(e,jt))._query);const t=Tt(e.firestore),n=new un(e.firestore);return Ot(t,e._query).then(t=>{const r=t.map(t=>new on(e.firestore,n,t.key,t,e.converter));return Pe(e._query)&&r.reverse(),new sn(e,r)})}function dn(e,t,n,...r){const i=Ht((e=X(e,At)).firestore);let o;return o="string"==typeof(t=Object(s["k"])(t))||t instanceof Pt?Gt(i,"updateDoc",e._key,t,n,r):Wt(i,"updateDoc",e._key,t),yt(Tt(e.firestore),[o.toMutation(e._key,ze.exists(!0))])}function fn(e){return yt(Tt((e=X(e,At)).firestore),[new Ke(e._key,ze.none())])}function pn(e,t){const n=Rt(e=X(e,Ct)),r=cn(e.converter,t),i=zt(Ht(e.firestore),"addDoc",n._key,r,null!==n.converter,{});return yt(Tt(e.firestore),[i.toMutation(n._key,ze.exists(!1))]).then(()=>n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e){c=e}(r["SDK_VERSION"]+"_lite"),Object(r["_registerComponent"])(new i["a"]("firestore/lite",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new St(n,new L(e.getProvider("auth-internal")));return t&&r._setSettings(t),r},"PUBLIC")),Object(r["registerVersion"])("firestore-lite","3.1.0","node")},a691:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),h=n("6eeb"),d=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:d},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&h(o.prototype,"finally",f,{unsafe:!0})}},ab8b:function(e,t,n){},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),h=n("b622"),d=n("c430"),f=h("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));m?r={}:d&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b575:function(e,t,n){var r,i,o,s,a,c,u,l,h=n("da84"),d=n("06cf").f,f=n("2cf4").set,p=n("1cdc"),m=n("d4c3"),g=n("a4b4"),v=n("605d"),_=h.MutationObserver||h.WebKitMutationObserver,b=h.document,y=h.process,w=h.Promise,O=d(h,"queueMicrotask"),E=O&&O.value;E||(r=function(){var e,t;v&&(e=y.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},p||v||g||!_||!b?!m&&w&&w.resolve?(u=w.resolve(void 0),u.constructor=w,l=u.then,s=function(){l.call(u,r)}):s=v?function(){y.nextTick(r)}:function(){f.call(h,r)}:(a=!0,c=b.createTextNode(""),new _(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=E||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("5135"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,h=c?l:l&&l.withoutSetter||s;e.exports=function(e){return o(u,e)&&(a||"string"==typeof u[e])||(a&&o(l,e)?u[e]=l[e]:u[e]=h("Symbol."+e)),u[e]}},b64b:function(e,t,n){var r=n("23e7"),i=n("7b0b"),o=n("df75"),s=n("d039"),a=s((function(){o(1)}));r({target:"Object",stat:!0,forced:a},{keys:function(e){return o(i(e))}})},b727:function(e,t,n){var r=n("0366"),i=n("44ad"),o=n("7b0b"),s=n("50c4"),a=n("65f0"),c=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,l=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,m,g,v){for(var _,b,y=o(p),w=i(y),O=r(m,g,3),E=s(w.length),T=0,k=v||a,S=t?k(p,E):n||d?k(p,0):void 0;E>T;T++)if((f||T in w)&&(_=w[T],b=O(_,T,y),e))if(t)S[T]=b;else if(b)switch(e){case 3:return!0;case 5:return _;case 6:return T;case 2:c.call(S,_)}else switch(e){case 4:return!1;case 7:c.call(S,_)}return h?-1:u||l?l:S}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},b774:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const r="devtools-plugin:setup",i="plugin:settings:set"},c04e:function(e,t,n){var r=n("861d"),i=n("d9b5"),o=n("dc4a"),s=n("485a"),a=n("b622"),c=a("toPrimitive");e.exports=function(e,t){if(!r(e)||i(e))return e;var n,a=o(e,c);if(a){if(void 0===t&&(t="default"),n=a.call(e,t),!r(n)||i(n))return n;throw TypeError("Can't convert object to primitive value")}return void 0===t&&(t="number"),s(e,t)}},c430:function(e,t){e.exports=!1},c6b6:function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("5135"),i=n("fc6a"),o=n("4d64").indexOf,s=n("d012");e.exports=function(e,t){var n,a=i(e),c=0,u=[];for(n in a)!r(s,n)&&r(a,n)&&u.push(n);while(t.length>c)r(a,n=t[c++])&&(~o(u,n)||u.push(n));return u}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84");e.exports=function(e,t){try{Object.defineProperty(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("825a"),i=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(o){}return function(n,o){return r(n),i(o),t?e.call(n,o):n.__proto__=o,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("5135"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d9b5:function(e,t,n){var r=n("1626"),i=n("d066"),o=n("fdbf");e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&Object(e)instanceof t}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dbb4:function(e,t,n){var r=n("23e7"),i=n("83ab"),o=n("56ef"),s=n("fc6a"),a=n("06cf"),c=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(e){var t,n,r=s(e),i=a.f,u=o(r),l={},h=0;while(u.length>h)n=i(r,t=u[h++]),void 0!==n&&c(l,t,n);return l}})},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),h=s.values,d=function(e,t){if(e){if(e[u]!==h)try{a(e,u,h)}catch(r){e[u]=h}if(e[l]||a(e,l,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(o,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},e163:function(e,t,n){var r=n("5135"),i=n("1626"),o=n("7b0b"),s=n("f772"),a=n("e177"),c=s("IE_PROTO"),u=Object.prototype;e.exports=a?Object.getPrototypeOf:function(e){var t=o(e);if(r(t,c))return t[c];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof Object?u:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("7dd0"),c="Array Iterator",u=s.set,l=s.getterFor(c);e.exports=a(Array,"Array",(function(e,t){u(this,{type:c,target:r(e),index:0,kind:t})}),(function(){var e=l(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values"),o.Arguments=o.Array,i("keys"),i("values"),i("entries")},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e439:function(e,t,n){var r=n("23e7"),i=n("d039"),o=n("fc6a"),s=n("06cf").f,a=n("83ab"),c=i((function(){s(1)})),u=!a||c;r({target:"Object",stat:!0,forced:u,sham:!a},{getOwnPropertyDescriptor:function(e,t){return s(o(e),t)}})},e538:function(e,t,n){var r=n("b622");t.f=r},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),h=n("fea9"),d=n("6eeb"),f=n("e2cc"),p=n("d2bb"),m=n("d44e"),g=n("2626"),v=n("59ed"),_=n("1626"),b=n("861d"),y=n("19aa"),w=n("8925"),O=n("2266"),E=n("1c7e"),T=n("4840"),k=n("2cf4").set,S=n("b575"),I=n("cdf9"),A=n("44de"),j=n("f069"),C=n("e667"),x=n("69f3"),R=n("94ca"),P=n("b622"),N=n("6069"),L=n("605d"),D=n("2d00"),M=P("species"),U="Promise",F=x.get,V=x.set,$=x.getterFor(U),B=h&&h.prototype,H=h,z=B,q=u.TypeError,W=u.document,G=u.process,K=j.f,X=K,J=!!(W&&W.createEvent&&u.dispatchEvent),Y=_(u.PromiseRejectionEvent),Q="unhandledrejection",Z="rejectionhandled",ee=0,te=1,ne=2,re=1,ie=2,oe=!1,se=R(U,(function(){var e=w(H),t=e!==String(H);if(!t&&66===D)return!0;if(c&&!z["finally"])return!0;if(D>=51&&/native code/.test(e))return!1;var n=new H((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[M]=r,oe=n.then((function(){}))instanceof r,!oe||!t&&N&&!Y})),ae=se||!E((function(e){H.all(e)["catch"]((function(){}))})),ce=function(e){var t;return!(!b(e)||!_(t=e.then))&&t},ue=function(e,t){if(!e.notified){e.notified=!0;var n=e.reactions;S((function(){var r=e.value,i=e.state==te,o=0;while(n.length>o){var s,a,c,u=n[o++],l=i?u.ok:u.fail,h=u.resolve,d=u.reject,f=u.domain;try{l?(i||(e.rejection===ie&&fe(e),e.rejection=re),!0===l?s=r:(f&&f.enter(),s=l(r),f&&(f.exit(),c=!0)),s===u.promise?d(q("Promise-chain cycle")):(a=ce(s))?a.call(s,h,d):h(s)):d(r)}catch(p){f&&!c&&f.exit(),d(p)}}e.reactions=[],e.notified=!1,t&&!e.rejection&&he(e)}))}},le=function(e,t,n){var r,i;J?(r=W.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Y&&(i=u["on"+e])?i(r):e===Q&&A("Unhandled promise rejection",n)},he=function(e){k.call(u,(function(){var t,n=e.facade,r=e.value,i=de(e);if(i&&(t=C((function(){L?G.emit("unhandledRejection",r,n):le(Q,n,r)})),e.rejection=L||de(e)?ie:re,t.error))throw t.value}))},de=function(e){return e.rejection!==re&&!e.parent},fe=function(e){k.call(u,(function(){var t=e.facade;L?G.emit("rejectionHandled",t):le(Z,t,e.value)}))},pe=function(e,t,n){return function(r){e(t,r,n)}},me=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ne,ue(e,!0))},ge=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw q("Promise can't be resolved itself");var r=ce(t);r?S((function(){var n={done:!1};try{r.call(t,pe(ge,n,e),pe(me,n,e))}catch(i){me(n,i,e)}})):(e.value=t,e.state=te,ue(e,!1))}catch(i){me({done:!1},i,e)}}};if(se&&(H=function(e){y(this,H,U),v(e),r.call(this);var t=F(this);try{e(pe(ge,t),pe(me,t))}catch(n){me(t,n)}},z=H.prototype,r=function(e){V(this,{type:U,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:ee,value:void 0})},r.prototype=f(z,{then:function(e,t){var n=$(this),r=K(T(this,H));return r.ok=!_(e)||e,r.fail=_(t)&&t,r.domain=L?G.domain:void 0,n.parent=!0,n.reactions.push(r),n.state!=ee&&ue(n,!1),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=F(e);this.promise=e,this.resolve=pe(ge,t),this.reject=pe(me,t)},j.f=K=function(e){return e===H||e===o?new i(e):X(e)},!c&&_(h)&&B!==Object.prototype)){s=B.then,oe||(d(B,"then",(function(e,t){var n=this;return new H((function(e,t){s.call(n,e,t)})).then(e,t)}),{unsafe:!0}),d(B,"catch",z["catch"],{unsafe:!0}));try{delete B.constructor}catch(ve){}p&&p(B,z)}a({global:!0,wrap:!0,forced:se},{Promise:H}),m(H,U,!1,!0),g(U),o=l(U),a({target:U,stat:!0,forced:se},{reject:function(e){var t=K(this);return t.reject.call(void 0,e),t.promise}}),a({target:U,stat:!0,forced:c||se},{resolve:function(e){return I(c&&this===o?H:this,e)}}),a({target:U,stat:!0,forced:ae},{all:function(e){var t=this,n=K(t),r=n.resolve,i=n.reject,o=C((function(){var n=v(t.resolve),o=[],s=0,a=1;O(e,(function(e){var c=s++,u=!1;o.push(void 0),a++,n.call(t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=K(t),r=n.reject,i=C((function(){var i=v(t.resolve);O(e,(function(e){i.call(t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("5135"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t){for(var n=i(t),a=s.f,c=o.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||a(e,l,c(t,l))}}},e8b5:function(e,t,n){var r=n("c6b6");e.exports=Array.isArray||function(e){return"Array"==r(e)}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},ea7b:function(e,t,n){"use strict";n.d(t,"a",(function(){return at})),n.d(t,"b",(function(){return cr})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ct})),n.d(t,"e",(function(){return lt}));var r=n("1fd5"),i=n("5606"),o=n("9ab4"),s=n("4fc1"),a=n("ffa6");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),h=new s["b"]("@firebase/auth");function d(e,...t){h.logLevel<=s["a"].ERROR&&h.error(`Auth (${i["SDK_VERSION"]}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function _(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function b(e,t){e||_(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y=new Map;function w(e){b(e instanceof Function,"Expected a class definition");let t=y.get(e);return t?(b(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,y.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=Object(i["_getProvider"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["h"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||Object(r["n"])()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e,t){this.shortDelay=e,this.longDelay=t,b(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["q"])()||Object(r["r"])()}get(){return I()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e,t){b(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void _("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void _("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void _("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},P=new j(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function L(e,t,n,i,o={}){return D(e,o,()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["s"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=new(x.headers());return c.set("Content-Type","application/json"),c.set("X-Client-Version",e._getSdkClientVersion()),e.languageCode&&c.set("X-Firebase-Locale",e.languageCode),x.fetch()(U(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function D(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),t);try{const t=new F(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);f(e,a)}}catch(o){if(o instanceof r["c"])throw o;f(e,"network-request-failed")}}async function M(e,t,n,r,i={}){const o=await L(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{serverResponse:o}),o}function U(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?C(e.config,i):`${e.config.apiScheme}://${i}`}class F{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"timeout")),P.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $(e,t){return L(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return L(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=Object(r["k"])(e),i=await n.getIdToken(t),o=W(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:H(q(o.auth_time)),issuedAtTime:H(q(o.iat)),expirationTime:H(q(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function q(e){return 1e3*Number(e)}function W(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",o),null}}function G(e){const t=W(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&X(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function X({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,B(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Y(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function Z(e){const t=Object(r["k"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=Object(o["d"])(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await D(e,{},()=>{const n=Object(r["s"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=U(e,i,"/v1/token","key="+o);return x.fetch()(s,{method:"POST",headers:{"X-Client-Version":e._getSdkClientVersion(),"Content-Type":"application/x-www-form-urlencoded"},body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=Object(o["d"])(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new J(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,_=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:b,emailVerified:y,isAnonymous:w,providerData:O,stsTokenManager:E}=t;v(b&&E,e,"internal-error");const T=re.fromJSON(this.name,E);v("string"===typeof b,e,"internal-error"),ie(l,e.name),ie(h,e.name),v("boolean"===typeof y,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(_,e.name);const k=new oe({uid:b,auth:e,email:h,emailVerified:y,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:_});return O&&Array.isArray(O)&&(k.providerData=O.map(e=>Object.assign({},e))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new ue(i,e,n)):new ue(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=Object(r["l"])()){return/firefox\//i.test(e)}function de(e=Object(r["l"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["l"])()){return/crios\//i.test(e)}function pe(e=Object(r["l"])()){return/iemobile/i.test(e)}function me(e=Object(r["l"])()){return/android/i.test(e)}function ge(e=Object(r["l"])()){return/blackberry/i.test(e)}function ve(e=Object(r["l"])()){return/webos/i.test(e)}function _e(e=Object(r["l"])()){return/iphone|ipad|ipod/i.test(e)}function be(e=Object(r["l"])()){var t;return _e(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function ye(){return Object(r["p"])()&&10===document.documentMode}function we(e=Object(r["l"])()){return _e(e)||me(e)||ve(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["l"])());break;case"Worker":n=`${le(Object(r["l"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["SDK_VERSION"]}/${o}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n;this._deleted||(this.persistenceManager=await ue.create(this,e),this._deleted||((null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)&&await this._popupRedirectResolver._initialize(this),await this.initializeCurrentUser(t),this._deleted||(this._isInitialized=!0)))}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["k"])(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}_getSdkClientVersion(){return this.clientVersion}}function ke(e){return Object(r["k"])(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["g"])(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ie{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return _("not implemented")}_getIdTokenResponse(e){return _("not implemented")}_linkToIdToken(e,t){return _("not implemented")}_getReauthenticationResolver(e){return _("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return L(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function je(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ce(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}async function xe(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends Ie{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Re(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Re(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return je(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ce(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return xe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne="http://localhost";class Le extends Ie{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Le(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=Object(o["d"])(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Le(n,r);return Object.assign(s,i),s}_getIdTokenResponse(e){const t=this.buildRequest();return Pe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:Ne,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["s"])(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function De(e,t){return L(e,"POST","/v1/accounts:sendVerificationCode",N(e,t))}async function Me(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t))}async function Ue(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Fe={["USER_NOT_FOUND"]:"user-not-found"};async function Ve(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",N(e,n),Fe)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e extends Ie{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $e({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $e({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Me(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ue(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ve(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new $e({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Be(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function He(e){const t=Object(r["t"])(Object(r["j"])(e))["link"],n=t?Object(r["t"])(Object(r["j"])(t))["deep_link_id"]:null,i=Object(r["t"])(Object(r["j"])(e))["deep_link_id"],o=i?Object(r["t"])(Object(r["j"])(i))["link"]:null;return o||i||n||t||e}class ze{constructor(e){var t,n,i,o,s,a;const c=Object(r["t"])(Object(r["j"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=Be(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=He(e);try{return new ze(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qe{constructor(){this.providerId=qe.PROVIDER_ID}static credential(e,t){return Re._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ze.parseLink(t);return v(n,"argument-error"),Re._fromEmailAndCode(e,n.code,n.tenantId)}}qe.PROVIDER_ID="password",qe.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qe.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends We{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke extends Ge{constructor(){super("facebook.com")}static credential(e){return Le._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Le._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com",Xe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je extends Ge{constructor(){super("github.com")}static credential(e){return Le._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch(t){return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com",Je.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Le._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Qe(e,t){return M(e,"POST","/v1/accounts:signUp",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ye.TWITTER_SIGN_IN_METHOD="twitter.com",Ye.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=et(n),s=new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,this.name="FirebaseError",Object.setPrototypeOf(this,tt.prototype),this.appName=e.name,this.code=t.code,this.tenantId=null!==(i=e.tenantId)&&void 0!==i?i:void 0,this.serverResponse=t.customData.serverResponse}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,nt(r,i,t,e),n);v(o.idToken,r,"internal-error");const s=W(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ot(e,t,n=!1){const r="signIn",i=await nt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ot(ke(e),t)}async function at(e,t,n){const r=ke(e),i=await Qe(r,{returnSecureToken:!0,email:t,password:n}),o=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ct(e,t,n){return st(Object(r["k"])(e),qe.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(e,t,n,i){return Object(r["k"])(e).onAuthStateChanged(t,n,i)}function lt(e){return Object(r["k"])(e).signOut()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ht(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:start",N(e,t))}function dt(e,t){return L(e,"POST","/v2/accounts/mfaEnrollment:finalize",N(e,t))}new WeakMap;const ft="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t){this.storage=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ft,"1"),this.storage.removeItem(ft),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){const e=Object(r["l"])();return de(e)||_e(e)}const gt=1e3,vt=10;class _t extends pt{constructor(){super(window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);ye()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,vt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}_t.type="LOCAL";const bt=_t;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt extends pt{constructor(){super(window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}yt.type="SESSION";const wt=yt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Et(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await Ot(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Tt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Et.receivers=[];class kt{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Tt("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function It(e){St().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(){return"undefined"!==typeof St()["WorkerGlobalScope"]&&"function"===typeof St()["importScripts"]}async function jt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Ct(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function xt(){return At()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt="firebaseLocalStorageDb",Pt=1,Nt="firebaseLocalStorage",Lt="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mt(e,t){return e.transaction([Nt],t?"readwrite":"readonly").objectStore(Nt)}function Ut(){const e=indexedDB.deleteDatabase(Rt);return new Dt(e).toPromise()}function Ft(){const e=indexedDB.open(Rt,Pt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Nt,{keyPath:Lt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Nt)?t(n):(n.close(),await Ut(),t(await Ft()))})})}async function Vt(e,t,n){const r=Mt(e,!0).put({[Lt]:t,value:n});return new Dt(r).toPromise()}async function $t(e,t){const n=Mt(e,!1).get(t),r=await new Dt(n).toPromise();return void 0===r?null:r.value}function Bt(e,t){const n=Mt(e,!0).delete(t);return new Dt(n).toPromise()}const Ht=800,zt=3;class qt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ft()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>zt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return At()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Et._getInstance(xt()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await jt(),!this.activeServiceWorker)return;this.sender=new kt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ct()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ft();return await Vt(e,ft,"1"),await Bt(e,ft),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>$t(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Mt(e,!1).getAll();return new Dt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}qt.type="LOCAL";const Wt=qt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:start",N(e,t))}function Kt(e,t){return L(e,"POST","/v2/accounts/mfaSignIn:finalize",N(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Jt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Xt().appendChild(r)})}function Yt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Yt("rcb"),new j(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qt="recaptcha";async function Zt(e,t,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,e,"argument-error"),v(n.type===Qt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");const n=await ht(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await Gt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await De(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class en{constructor(e){this.providerId=en.PROVIDER_ID,this.auth=ke(e)}verifyPhoneNumber(e,t){return Zt(this.auth,e,Object(r["k"])(t))}static credential(e,t){return $e._fromVerification(e,t)}static credentialFromResult(e){const t=e;return en.credentialFromTaggedObject(t)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?$e._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(e,t){return t?w(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class nn extends Ie{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rn(e){return ot(e.auth,new nn(e),e.bypassAuthState)}function on(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new nn(e),e.bypassAuthState)}async function sn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),rt(n,new nn(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rn;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return on;default:f(this.auth,"internal-error")}}resolve(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){b(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new j(2e3,1e4);class un extends an{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){b(1===this.filter.length,"Popup operations only handle one event");const e=Tt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,cn.get())};e()}}un.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ln="pendingRedirect",hn=new Map;class dn extends an{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hn.get(this.auth._key());if(!e){try{const t=await fn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}hn.set(this.auth._key(),e)}return e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(e,t){const n=mn(t),r="true"===await pn(e)._get(n);return await pn(e)._remove(n),r}function pn(e){return w(e._redirectPersistence)}function mn(e){return ce(ln,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gn(e,t,n=!1){const r=ke(e),i=tn(r,t),o=new dn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vn=6e5;class _n{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(bn(e))}saveEventToCache(e){this.cachedEventUids.add(bn(e)),this.lastProcessedEventTime=Date.now()}}function bn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function wn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function On(e,t={}){return L(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tn=/^https?/;async function kn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await On(e);for(const r of t)try{if(Sn(r))return}catch(n){}f(e,"unauthorized-domain")}function Sn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Tn.test(n))return!1;if(En.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=new j(3e4,6e4);function An(){const e=St().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function jn(e){return new Promise((t,n)=>{var r,i,o;function s(){An(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{An(),n(p(e,"network-request-failed"))},timeout:In.get()})}if(null===(i=null===(r=St().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=St().gapi)||void 0===o?void 0:o.load)){const t=Yt("iframefcb");return St()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Jt("https://apis.google.com/js/api.js?onload="+t)}s()}}).catch(e=>{throw Cn=null,e})}let Cn=null;function xn(e){return Cn=Cn||jn(e),Cn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new j(5e3,15e3),Pn="__/auth/iframe",Nn="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},Dn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?C(t,Nn):`https://${e.config.authDomain}/${Pn}`,o={apiKey:t.apiKey,appName:e.name,v:i["SDK_VERSION"]},s=Dn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["s"])(o).slice(1)}`}async function Un(e){const t=await xn(e),n=St().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Mn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=St().setTimeout(()=>{r(i)},Rn.get());function s(){St().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vn=500,$n=600,Bn="_blank",Hn="http://localhost";class zn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function qn(e,t,n,i=Vn,o=$n){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Fn),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["l"])().toLowerCase();n&&(c=fe(l)?Bn:n),he(l)&&(t=t||Hn,u.scrollbars="yes");const h=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(be(l)&&"_self"!==c)return Wn(t||"",c),new zn(null);const d=window.open(t||"",c,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new zn(d)}function Wn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn="__/auth/handler",Kn="emulator/auth/handler";function Xn(e,t,n,o,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["SDK_VERSION"],eventId:s};if(t instanceof We){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["o"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ge){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Jn(e)}?${Object(r["s"])(u).slice(1)}`}function Jn({config:e}){return e.emulator?C(e,Kn):`https://${e.authDomain}/${Gn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="webStorageSupport";class Qn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=gn}async _openPopup(e,t,n,r){var i;b(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Xn(e,t,n,T(),r);return qn(e,o,Tt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),It(Xn(e,t,n,T(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(b(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n}async initAndGetManager(e){const t=await Un(e),n=new _n(e);return t.register("authEvent",t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Yn,{type:Yn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Yn];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=kn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||de()||_e()}}const Zn=Qn;class er{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return _("unexpected MultiFactorSessionType")}}}class tr extends er{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tr(e)}_finalizeEnroll(e,t,n){return dt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Kt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nr{constructor(){}static assertion(e){return tr._fromCredential(e)}}nr.FACTOR_ID="phone";var rr="@firebase/auth",ir="0.18.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class or{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ar(e){Object(i["_registerComponent"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},s=new Te(t,r);return E(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["_registerComponent"])(new a["a"]("auth-internal",e=>{const t=ke(e.getProvider("auth").getImmediate());return(e=>new or(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["registerVersion"])(rr,ir,sr(e))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(e=Object(i["getApp"])()){const t=Object(i["_getProvider"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:Zn,persistence:[Wt,bt,wt]})}ar("Browser")},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f30a:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("b774");class i{constructor(e,t){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=e,this.hook=t;const n={};if(e.settings)for(const r in e.settings){const t=e.settings[r];n[r]=t.defaultValue}const i="__vue-devtools-plugin-settings__"+e.id;let o={...n};try{const e=localStorage.getItem(i),t=JSON.parse(e);Object.assign(o,t)}catch(s){}this.fallbacks={getSettings(){return o},setSettings(e){try{localStorage.setItem(i,JSON.stringify(e))}catch(s){}o=e}},t.on(r["a"],(e,t)=>{e===this.plugin.id&&this.fallbacks.setSettings(t)}),this.proxiedOn=new Proxy({},{get:(e,t)=>this.target?this.target.on[t]:(...e)=>{this.onQueue.push({method:t,args:e})}}),this.proxiedTarget=new Proxy({},{get:(e,t)=>this.target?this.target[t]:"on"===t?this.proxiedOn:Object.keys(this.fallbacks).includes(t)?(...e)=>(this.targetQueue.push({method:t,args:e,resolve:()=>{}}),this.fallbacks[t](...e)):(...e)=>new Promise(n=>{this.targetQueue.push({method:t,args:e,resolve:n})})})}async setRealTarget(e){this.target=e;for(const t of this.onQueue)this.target.on[t.method](...t.args);for(const t of this.targetQueue)t.resolve(await this.target[t.method](...t.args))}}},f5df:function(e,t,n){var r=n("00ee"),i=n("1626"),o=n("c6b6"),s=n("b622"),a=s("toStringTag"),c="Arguments"==o(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=Object(e),a))?n:c?o(t):"Object"==(r=o(t))&&i(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise},ffa6:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));var r=n("9ab4"),i=n("1fd5"),o=function(){function e(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},e.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},e.prototype.setServiceProps=function(e){return this.serviceProps=e,this},e.prototype.setInstanceCreatedCallback=function(e){return this.onInstanceCreated=e,this},e}(),s="[DEFAULT]",a=function(){function e(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e.prototype.get=function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var n=new i["a"];if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch(o){}}return this.instancesDeferred.get(t).promise},e.prototype.getImmediate=function(e){var t,n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}},e.prototype.getComponent=function(){return this.component},e.prototype.setComponent=function(e){var t,n;if(e.name!==this.name)throw Error("Mismatching Component "+e.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=e,this.shouldAutoInitialize()){if(u(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(f){}try{for(var i=Object(r["f"])(this.instancesDeferred.entries()),o=i.next();!o.done;o=i.next()){var a=Object(r["c"])(o.value,2),c=a[0],l=a[1],h=this.normalizeInstanceIdentifier(c);try{var d=this.getOrInitializeService({instanceIdentifier:h});l.resolve(d)}catch(f){}}}catch(p){t={error:p}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}}},e.prototype.clearInstance=function(e){void 0===e&&(e=s),this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)},e.prototype.delete=function(){return Object(r["a"])(this,void 0,void 0,(function(){var e;return Object(r["b"])(this,(function(t){switch(t.label){case 0:return e=Array.from(this.instances.values()),[4,Promise.all(Object(r["e"])(Object(r["e"])([],Object(r["c"])(e.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()})))),Object(r["c"])(e.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))))];case 1:return t.sent(),[2]}}))}))},e.prototype.isComponentSet=function(){return null!=this.component},e.prototype.isInitialized=function(e){return void 0===e&&(e=s),this.instances.has(e)},e.prototype.getOptions=function(e){return void 0===e&&(e=s),this.instancesOptions.get(e)||{}},e.prototype.initialize=function(e){var t,n;void 0===e&&(e={});var i=e.options,o=void 0===i?{}:i,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(this.name+"("+s+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:s,options:o});try{for(var c=Object(r["f"])(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r["c"])(u.value,2),h=l[0],d=l[1],f=this.normalizeInstanceIdentifier(h);s===f&&d.resolve(a)}}catch(p){t={error:p}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(t)throw t.error}}return a},e.prototype.onInit=function(e,t){var n,r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);var o=this.instances.get(r);return o&&e(o,r),function(){i.delete(e)}},e.prototype.invokeOnInitCallbacks=function(e,t){var n,i,o=this.onInitCallbacks.get(t);if(o)try{for(var s=Object(r["f"])(o),a=s.next();!a.done;a=s.next()){var c=a.value;try{c(e,t)}catch(u){}}}catch(l){n={error:l}}finally{try{a&&!a.done&&(i=s.return)&&i.call(s)}finally{if(n)throw n.error}}},e.prototype.getOrInitializeService=function(e){var t=e.instanceIdentifier,n=e.options,r=void 0===n?{}:n,i=this.instances.get(t);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:c(t),options:r}),this.instances.set(t,i),this.instancesOptions.set(t,r),this.invokeOnInitCallbacks(i,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,i)}catch(o){}return i||null},e.prototype.normalizeInstanceIdentifier=function(e){return void 0===e&&(e=s),this.component?this.component.multipleInstances?e:s:e},e.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},e}();function c(e){return e===s?void 0:e}function u(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l=function(){function e(e){this.name=e,this.providers=new Map}return e.prototype.addComponent=function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component "+e.name+" has already been registered with "+this.name);t.setComponent(e)},e.prototype.addOrOverwriteComponent=function(e){var t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)},e.prototype.getProvider=function(e){if(this.providers.has(e))return this.providers.get(e);var t=new a(e,this);return this.providers.set(e,t),t},e.prototype.getProviders=function(){return Array.from(this.providers.values())},e}()}}]);
//# sourceMappingURL=chunk-vendors.b2e3ef0f.js.map