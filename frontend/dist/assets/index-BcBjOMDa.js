(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var gg={exports:{}},Ec={},xg={exports:{}},et={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var po=Symbol.for("react.element"),Gy=Symbol.for("react.portal"),Wy=Symbol.for("react.fragment"),Xy=Symbol.for("react.strict_mode"),$y=Symbol.for("react.profiler"),qy=Symbol.for("react.provider"),Yy=Symbol.for("react.context"),Ky=Symbol.for("react.forward_ref"),Zy=Symbol.for("react.suspense"),Qy=Symbol.for("react.memo"),Jy=Symbol.for("react.lazy"),Lp=Symbol.iterator;function eS(t){return t===null||typeof t!="object"?null:(t=Lp&&t[Lp]||t["@@iterator"],typeof t=="function"?t:null)}var vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_g=Object.assign,yg={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||vg}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Sg(){}Sg.prototype=Qs.prototype;function Qf(t,e,n){this.props=t,this.context=e,this.refs=yg,this.updater=n||vg}var Jf=Qf.prototype=new Sg;Jf.constructor=Qf;_g(Jf,Qs.prototype);Jf.isPureReactComponent=!0;var Ip=Array.isArray,bg=Object.prototype.hasOwnProperty,eh={current:null},wg={key:!0,ref:!0,__self:!0,__source:!0};function Mg(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)bg.call(e,i)&&!wg.hasOwnProperty(i)&&(r[i]=e[i]);var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in l=t.defaultProps,l)r[i]===void 0&&(r[i]=l[i]);return{$$typeof:po,type:t,key:s,ref:a,props:r,_owner:eh.current}}function tS(t,e){return{$$typeof:po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function th(t){return typeof t=="object"&&t!==null&&t.$$typeof===po}function nS(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Up=/\/+/g;function Qc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nS(""+t.key):e.toString(36)}function Sl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case po:case Gy:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Qc(a,0):i,Ip(r)?(n="",t!=null&&(n=t.replace(Up,"$&/")+"/"),Sl(r,e,n,"",function(u){return u})):r!=null&&(th(r)&&(r=tS(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Up,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Ip(t))for(var l=0;l<t.length;l++){s=t[l];var c=i+Qc(s,l);a+=Sl(s,e,n,c,r)}else if(c=eS(t),typeof c=="function")for(t=c.call(t),l=0;!(s=t.next()).done;)s=s.value,c=i+Qc(s,l++),a+=Sl(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function No(t,e,n){if(t==null)return t;var i=[],r=0;return Sl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function iS(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},bl={transition:null},rS={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:bl,ReactCurrentOwner:eh};function Eg(){throw Error("act(...) is not supported in production builds of React.")}et.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!th(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};et.Component=Qs;et.Fragment=Wy;et.Profiler=$y;et.PureComponent=Qf;et.StrictMode=Xy;et.Suspense=Zy;et.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rS;et.act=Eg;et.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=_g({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=eh.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(c in e)bg.call(e,c)&&!wg.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&l!==void 0?l[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}return{$$typeof:po,type:t.type,key:r,ref:s,props:i,_owner:a}};et.createContext=function(t){return t={$$typeof:Yy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:qy,_context:t},t.Consumer=t};et.createElement=Mg;et.createFactory=function(t){var e=Mg.bind(null,t);return e.type=t,e};et.createRef=function(){return{current:null}};et.forwardRef=function(t){return{$$typeof:Ky,render:t}};et.isValidElement=th;et.lazy=function(t){return{$$typeof:Jy,_payload:{_status:-1,_result:t},_init:iS}};et.memo=function(t,e){return{$$typeof:Qy,type:t,compare:e===void 0?null:e}};et.startTransition=function(t){var e=bl.transition;bl.transition={};try{t()}finally{bl.transition=e}};et.unstable_act=Eg;et.useCallback=function(t,e){return Sn.current.useCallback(t,e)};et.useContext=function(t){return Sn.current.useContext(t)};et.useDebugValue=function(){};et.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};et.useEffect=function(t,e){return Sn.current.useEffect(t,e)};et.useId=function(){return Sn.current.useId()};et.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};et.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};et.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};et.useMemo=function(t,e){return Sn.current.useMemo(t,e)};et.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};et.useRef=function(t){return Sn.current.useRef(t)};et.useState=function(t){return Sn.current.useState(t)};et.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};et.useTransition=function(){return Sn.current.useTransition()};et.version="18.3.1";xg.exports=et;var ne=xg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS=ne,aS=Symbol.for("react.element"),oS=Symbol.for("react.fragment"),lS=Object.prototype.hasOwnProperty,cS=sS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,uS={key:!0,ref:!0,__self:!0,__source:!0};function Tg(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)lS.call(e,i)&&!uS.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:aS,type:t,key:s,ref:a,props:r,_owner:cS.current}}Ec.Fragment=oS;Ec.jsx=Tg;Ec.jsxs=Tg;gg.exports=Ec;var o=gg.exports,Ag={exports:{}},kn={},Ng={exports:{}},Rg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(W,z){var G=W.length;W.push(z);e:for(;0<G;){var J=G-1>>>1,ue=W[J];if(0<r(ue,z))W[J]=z,W[G]=ue,G=J;else break e}}function n(W){return W.length===0?null:W[0]}function i(W){if(W.length===0)return null;var z=W[0],G=W.pop();if(G!==z){W[0]=G;e:for(var J=0,ue=W.length,Ae=ue>>>1;J<Ae;){var X=2*(J+1)-1,oe=W[X],me=X+1,Ne=W[me];if(0>r(oe,G))me<ue&&0>r(Ne,oe)?(W[J]=Ne,W[me]=G,J=me):(W[J]=oe,W[X]=G,J=X);else if(me<ue&&0>r(Ne,G))W[J]=Ne,W[me]=G,J=me;else break e}}return z}function r(W,z){var G=W.sortIndex-z.sortIndex;return G!==0?G:W.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var c=[],u=[],f=1,m=null,h=3,g=!1,_=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(W){for(var z=n(u);z!==null;){if(z.callback===null)i(u);else if(z.startTime<=W)i(u),z.sortIndex=z.expirationTime,e(c,z);else break;z=n(u)}}function S(W){if(b=!1,y(W),!_)if(n(c)!==null)_=!0,H(A);else{var z=n(u);z!==null&&j(S,z.startTime-W)}}function A(W,z){_=!1,b&&(b=!1,d(w),w=-1),g=!0;var G=h;try{for(y(z),m=n(c);m!==null&&(!(m.expirationTime>z)||W&&!U());){var J=m.callback;if(typeof J=="function"){m.callback=null,h=m.priorityLevel;var ue=J(m.expirationTime<=z);z=t.unstable_now(),typeof ue=="function"?m.callback=ue:m===n(c)&&i(c),y(z)}else i(c);m=n(c)}if(m!==null)var Ae=!0;else{var X=n(u);X!==null&&j(S,X.startTime-z),Ae=!1}return Ae}finally{m=null,h=G,g=!1}}var T=!1,v=null,w=-1,O=5,P=-1;function U(){return!(t.unstable_now()-P<O)}function V(){if(v!==null){var W=t.unstable_now();P=W;var z=!0;try{z=v(!0,W)}finally{z?L():(T=!1,v=null)}}else T=!1}var L;if(typeof p=="function")L=function(){p(V)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,B=N.port2;N.port1.onmessage=V,L=function(){B.postMessage(null)}}else L=function(){x(V,0)};function H(W){v=W,T||(T=!0,L())}function j(W,z){w=x(function(){W(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(W){W.callback=null},t.unstable_continueExecution=function(){_||g||(_=!0,H(A))},t.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<W?Math.floor(1e3/W):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(W){switch(h){case 1:case 2:case 3:var z=3;break;default:z=h}var G=h;h=z;try{return W()}finally{h=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(W,z){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var G=h;h=W;try{return z()}finally{h=G}},t.unstable_scheduleCallback=function(W,z,G){var J=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?J+G:J):G=J,W){case 1:var ue=-1;break;case 2:ue=250;break;case 5:ue=1073741823;break;case 4:ue=1e4;break;default:ue=5e3}return ue=G+ue,W={id:f++,callback:z,priorityLevel:W,startTime:G,expirationTime:ue,sortIndex:-1},G>J?(W.sortIndex=G,e(u,W),n(c)===null&&W===n(u)&&(b?(d(w),w=-1):b=!0,j(S,G-J))):(W.sortIndex=ue,e(c,W),_||g||(_=!0,H(A))),W},t.unstable_shouldYield=U,t.unstable_wrapCallback=function(W){var z=h;return function(){var G=h;h=z;try{return W.apply(this,arguments)}finally{h=G}}}})(Rg);Ng.exports=Rg;var dS=Ng.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fS=ne,Fn=dS;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cg=new Set,Va={};function is(t,e){js(t,e),js(t+"Capture",e)}function js(t,e){for(Va[t]=e,t=0;t<e.length;t++)Cg.add(e[t])}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ld=Object.prototype.hasOwnProperty,hS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Op={},Fp={};function pS(t){return ld.call(Fp,t)?!0:ld.call(Op,t)?!1:hS.test(t)?Fp[t]=!0:(Op[t]=!0,!1)}function mS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gS(t,e,n,i){if(e===null||typeof e>"u"||mS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function bn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var an={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){an[t]=new bn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];an[e]=new bn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){an[t]=new bn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){an[t]=new bn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){an[t]=new bn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){an[t]=new bn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){an[t]=new bn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){an[t]=new bn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){an[t]=new bn(t,5,!1,t.toLowerCase(),null,!1,!1)});var nh=/[\-:]([a-z])/g;function ih(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(nh,ih);an[e]=new bn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(nh,ih);an[e]=new bn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(nh,ih);an[e]=new bn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){an[t]=new bn(t,1,!1,t.toLowerCase(),null,!1,!1)});an.xlinkHref=new bn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){an[t]=new bn(t,1,!1,t.toLowerCase(),null,!0,!0)});function rh(t,e,n,i){var r=an.hasOwnProperty(e)?an[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gS(e,n,r,i)&&(n=null),i||r===null?pS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Wi=fS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),Ss=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),sh=Symbol.for("react.strict_mode"),cd=Symbol.for("react.profiler"),Pg=Symbol.for("react.provider"),Dg=Symbol.for("react.context"),ah=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),dd=Symbol.for("react.suspense_list"),oh=Symbol.for("react.memo"),tr=Symbol.for("react.lazy"),Lg=Symbol.for("react.offscreen"),kp=Symbol.iterator;function la(t){return t===null||typeof t!="object"?null:(t=kp&&t[kp]||t["@@iterator"],typeof t=="function"?t:null)}var It=Object.assign,Jc;function Ea(t){if(Jc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jc=e&&e[1]||""}return`
`+Jc+t}var eu=!1;function tu(t,e){if(!t||eu)return"";eu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,l=s.length-1;1<=a&&0<=l&&r[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(r[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||r[a]!==s[l]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=l);break}}}finally{eu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ea(t):""}function xS(t){switch(t.tag){case 5:return Ea(t.type);case 16:return Ea("Lazy");case 13:return Ea("Suspense");case 19:return Ea("SuspenseList");case 0:case 2:case 15:return t=tu(t.type,!1),t;case 11:return t=tu(t.type.render,!1),t;case 1:return t=tu(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bs:return"Fragment";case Ss:return"Portal";case cd:return"Profiler";case sh:return"StrictMode";case ud:return"Suspense";case dd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Dg:return(t.displayName||"Context")+".Consumer";case Pg:return(t._context.displayName||"Context")+".Provider";case ah:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case oh:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case tr:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function vS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===sh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ig(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function _S(t){var e=Ig(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Co(t){t._valueTracker||(t._valueTracker=_S(t))}function Ug(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Ig(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Wl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hd(t,e){var n=e.checked;return It({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Og(t,e){e=e.checked,e!=null&&rh(t,"checked",e,!1)}function pd(t,e){Og(t,e);var n=Sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?md(t,e.type,n):e.hasOwnProperty("defaultValue")&&md(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function zp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function md(t,e,n){(e!=="number"||Wl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ta=Array.isArray;function Ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return It({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function jp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(Ta(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function Fg(t,e){var n=Sr(e.value),i=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Hp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function kg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?kg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Po,Bg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Po=Po||document.createElement("div"),Po.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Po.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yS=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){yS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function zg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function jg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=zg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var SS=It({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(SS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function _d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function lh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Sd=null,Is=null,Us=null;function Vp(t){if(t=xo(t)){if(typeof Sd!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Cc(e),Sd(t.stateNode,t.type,e))}}function Hg(t){Is?Us?Us.push(t):Us=[t]:Is=t}function Vg(){if(Is){var t=Is,e=Us;if(Us=Is=null,Vp(t),e)for(t=0;t<e.length;t++)Vp(e[t])}}function Gg(t,e){return t(e)}function Wg(){}var nu=!1;function Xg(t,e,n){if(nu)return t(e,n);nu=!0;try{return Gg(t,e,n)}finally{nu=!1,(Is!==null||Us!==null)&&(Wg(),Vg())}}function Wa(t,e){var n=t.stateNode;if(n===null)return null;var i=Cc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var bd=!1;if(Bi)try{var ca={};Object.defineProperty(ca,"passive",{get:function(){bd=!0}}),window.addEventListener("test",ca,ca),window.removeEventListener("test",ca,ca)}catch{bd=!1}function bS(t,e,n,i,r,s,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(f){this.onError(f)}}var Da=!1,Xl=null,$l=!1,wd=null,wS={onError:function(t){Da=!0,Xl=t}};function MS(t,e,n,i,r,s,a,l,c){Da=!1,Xl=null,bS.apply(wS,arguments)}function ES(t,e,n,i,r,s,a,l,c){if(MS.apply(this,arguments),Da){if(Da){var u=Xl;Da=!1,Xl=null}else throw Error(ce(198));$l||($l=!0,wd=u)}}function rs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gp(t){if(rs(t)!==t)throw Error(ce(188))}function TS(t){var e=t.alternate;if(!e){if(e=rs(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Gp(r),t;if(s===i)return Gp(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,l=r.child;l;){if(l===n){a=!0,n=r,i=s;break}if(l===i){a=!0,i=r,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,i=r;break}if(l===i){a=!0,i=s,n=r;break}l=l.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function qg(t){return t=TS(t),t!==null?Yg(t):null}function Yg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Yg(t);if(e!==null)return e;t=t.sibling}return null}var Kg=Fn.unstable_scheduleCallback,Wp=Fn.unstable_cancelCallback,AS=Fn.unstable_shouldYield,NS=Fn.unstable_requestPaint,Ft=Fn.unstable_now,RS=Fn.unstable_getCurrentPriorityLevel,ch=Fn.unstable_ImmediatePriority,Zg=Fn.unstable_UserBlockingPriority,ql=Fn.unstable_NormalPriority,CS=Fn.unstable_LowPriority,Qg=Fn.unstable_IdlePriority,Tc=null,vi=null;function PS(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(Tc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:IS,DS=Math.log,LS=Math.LN2;function IS(t){return t>>>=0,t===0?32:31-(DS(t)/LS|0)|0}var Do=64,Lo=4194304;function Aa(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Yl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~r;l!==0?i=Aa(l):(s&=a,s!==0&&(i=Aa(s)))}else a=n&~r,a!==0?i=Aa(a):s!==0&&(i=Aa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function US(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function OS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-ai(s),l=1<<a,c=r[a];c===-1?(!(l&n)||l&i)&&(r[a]=US(l,e)):c<=e&&(t.expiredLanes|=l),s&=~l}}function Md(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jg(){var t=Do;return Do<<=1,!(Do&4194240)&&(Do=64),t}function iu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function FS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function uh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var gt=0;function ex(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var tx,dh,nx,ix,rx,Ed=!1,Io=[],dr=null,fr=null,hr=null,Xa=new Map,$a=new Map,rr=[],kS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xp(t,e){switch(t){case"focusin":case"focusout":dr=null;break;case"dragenter":case"dragleave":fr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":Xa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":$a.delete(e.pointerId)}}function ua(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=xo(e),e!==null&&dh(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function BS(t,e,n,i,r){switch(e){case"focusin":return dr=ua(dr,t,e,n,i,r),!0;case"dragenter":return fr=ua(fr,t,e,n,i,r),!0;case"mouseover":return hr=ua(hr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Xa.set(s,ua(Xa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,$a.set(s,ua($a.get(s)||null,t,e,n,i,r)),!0}return!1}function sx(t){var e=Br(t.target);if(e!==null){var n=rs(e);if(n!==null){if(e=n.tag,e===13){if(e=$g(n),e!==null){t.blockedOn=e,rx(t.priority,function(){nx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yd=i,n.target.dispatchEvent(i),yd=null}else return e=xo(n),e!==null&&dh(e),t.blockedOn=n,!1;e.shift()}return!0}function $p(t,e,n){wl(t)&&n.delete(e)}function zS(){Ed=!1,dr!==null&&wl(dr)&&(dr=null),fr!==null&&wl(fr)&&(fr=null),hr!==null&&wl(hr)&&(hr=null),Xa.forEach($p),$a.forEach($p)}function da(t,e){t.blockedOn===e&&(t.blockedOn=null,Ed||(Ed=!0,Fn.unstable_scheduleCallback(Fn.unstable_NormalPriority,zS)))}function qa(t){function e(r){return da(r,t)}if(0<Io.length){da(Io[0],t);for(var n=1;n<Io.length;n++){var i=Io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(dr!==null&&da(dr,t),fr!==null&&da(fr,t),hr!==null&&da(hr,t),Xa.forEach(e),$a.forEach(e),n=0;n<rr.length;n++)i=rr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<rr.length&&(n=rr[0],n.blockedOn===null);)sx(n),n.blockedOn===null&&rr.shift()}var Os=Wi.ReactCurrentBatchConfig,Kl=!0;function jS(t,e,n,i){var r=gt,s=Os.transition;Os.transition=null;try{gt=1,fh(t,e,n,i)}finally{gt=r,Os.transition=s}}function HS(t,e,n,i){var r=gt,s=Os.transition;Os.transition=null;try{gt=4,fh(t,e,n,i)}finally{gt=r,Os.transition=s}}function fh(t,e,n,i){if(Kl){var r=Td(t,e,n,i);if(r===null)hu(t,e,i,Zl,n),Xp(t,i);else if(BS(r,t,e,n,i))i.stopPropagation();else if(Xp(t,i),e&4&&-1<kS.indexOf(t)){for(;r!==null;){var s=xo(r);if(s!==null&&tx(s),s=Td(t,e,n,i),s===null&&hu(t,e,i,Zl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else hu(t,e,i,null,n)}}var Zl=null;function Td(t,e,n,i){if(Zl=null,t=lh(i),t=Br(t),t!==null)if(e=rs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Zl=t,null}function ax(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RS()){case ch:return 1;case Zg:return 4;case ql:case CS:return 16;case Qg:return 536870912;default:return 16}default:return 16}}var or=null,hh=null,Ml=null;function ox(){if(Ml)return Ml;var t,e=hh,n=e.length,i,r="value"in or?or.value:or.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ml=r.slice(t,1<i?1-i:void 0)}function El(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function qp(){return!1}function Bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:qp,this.isPropagationStopped=qp,this}return It(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ph=Bn(Js),go=It({},Js,{view:0,detail:0}),VS=Bn(go),ru,su,fa,Ac=It({},go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fa&&(fa&&t.type==="mousemove"?(ru=t.screenX-fa.screenX,su=t.screenY-fa.screenY):su=ru=0,fa=t),ru)},movementY:function(t){return"movementY"in t?t.movementY:su}}),Yp=Bn(Ac),GS=It({},Ac,{dataTransfer:0}),WS=Bn(GS),XS=It({},go,{relatedTarget:0}),au=Bn(XS),$S=It({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),qS=Bn($S),YS=It({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KS=Bn(YS),ZS=It({},Js,{data:0}),Kp=Bn(ZS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},JS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},eb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=eb[t])?!!e[t]:!1}function mh(){return tb}var nb=It({},go,{key:function(t){if(t.key){var e=QS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=El(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?JS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mh,charCode:function(t){return t.type==="keypress"?El(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?El(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ib=Bn(nb),rb=It({},Ac,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zp=Bn(rb),sb=It({},go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mh}),ab=Bn(sb),ob=It({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),lb=Bn(ob),cb=It({},Ac,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ub=Bn(cb),db=[9,13,27,32],gh=Bi&&"CompositionEvent"in window,La=null;Bi&&"documentMode"in document&&(La=document.documentMode);var fb=Bi&&"TextEvent"in window&&!La,lx=Bi&&(!gh||La&&8<La&&11>=La),Qp=" ",Jp=!1;function cx(t,e){switch(t){case"keyup":return db.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ux(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ws=!1;function hb(t,e){switch(t){case"compositionend":return ux(e);case"keypress":return e.which!==32?null:(Jp=!0,Qp);case"textInput":return t=e.data,t===Qp&&Jp?null:t;default:return null}}function pb(t,e){if(ws)return t==="compositionend"||!gh&&cx(t,e)?(t=ox(),Ml=hh=or=null,ws=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return lx&&e.locale!=="ko"?null:e.data;default:return null}}var mb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function em(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mb[t.type]:e==="textarea"}function dx(t,e,n,i){Hg(i),e=Ql(e,"onChange"),0<e.length&&(n=new ph("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Ia=null,Ya=null;function gb(t){bx(t,0)}function Nc(t){var e=Ts(t);if(Ug(e))return t}function xb(t,e){if(t==="change")return e}var fx=!1;if(Bi){var ou;if(Bi){var lu="oninput"in document;if(!lu){var tm=document.createElement("div");tm.setAttribute("oninput","return;"),lu=typeof tm.oninput=="function"}ou=lu}else ou=!1;fx=ou&&(!document.documentMode||9<document.documentMode)}function nm(){Ia&&(Ia.detachEvent("onpropertychange",hx),Ya=Ia=null)}function hx(t){if(t.propertyName==="value"&&Nc(Ya)){var e=[];dx(e,Ya,t,lh(t)),Xg(gb,e)}}function vb(t,e,n){t==="focusin"?(nm(),Ia=e,Ya=n,Ia.attachEvent("onpropertychange",hx)):t==="focusout"&&nm()}function _b(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nc(Ya)}function yb(t,e){if(t==="click")return Nc(e)}function Sb(t,e){if(t==="input"||t==="change")return Nc(e)}function bb(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:bb;function Ka(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ld.call(e,r)||!li(t[r],e[r]))return!1}return!0}function im(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function rm(t,e){var n=im(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=im(n)}}function px(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?px(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mx(){for(var t=window,e=Wl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Wl(t.document)}return e}function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wb(t){var e=mx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&px(n.ownerDocument.documentElement,n)){if(i!==null&&xh(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=rm(n,s);var a=rm(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Mb=Bi&&"documentMode"in document&&11>=document.documentMode,Ms=null,Ad=null,Ua=null,Nd=!1;function sm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nd||Ms==null||Ms!==Wl(i)||(i=Ms,"selectionStart"in i&&xh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ua&&Ka(Ua,i)||(Ua=i,i=Ql(Ad,"onSelect"),0<i.length&&(e=new ph("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ms)))}function Oo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Es={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},cu={},gx={};Bi&&(gx=document.createElement("div").style,"AnimationEvent"in window||(delete Es.animationend.animation,delete Es.animationiteration.animation,delete Es.animationstart.animation),"TransitionEvent"in window||delete Es.transitionend.transition);function Rc(t){if(cu[t])return cu[t];if(!Es[t])return t;var e=Es[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in gx)return cu[t]=e[n];return t}var xx=Rc("animationend"),vx=Rc("animationiteration"),_x=Rc("animationstart"),yx=Rc("transitionend"),Sx=new Map,am="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tr(t,e){Sx.set(t,e),is(e,[t])}for(var uu=0;uu<am.length;uu++){var du=am[uu],Eb=du.toLowerCase(),Tb=du[0].toUpperCase()+du.slice(1);Tr(Eb,"on"+Tb)}Tr(xx,"onAnimationEnd");Tr(vx,"onAnimationIteration");Tr(_x,"onAnimationStart");Tr("dblclick","onDoubleClick");Tr("focusin","onFocus");Tr("focusout","onBlur");Tr(yx,"onTransitionEnd");js("onMouseEnter",["mouseout","mouseover"]);js("onMouseLeave",["mouseout","mouseover"]);js("onPointerEnter",["pointerout","pointerover"]);js("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ab=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function om(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ES(i,e,void 0,t),t.currentTarget=null}function bx(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var l=i[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==s&&r.isPropagationStopped())break e;om(r,l,u),s=c}else for(a=0;a<i.length;a++){if(l=i[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==s&&r.isPropagationStopped())break e;om(r,l,u),s=c}}}if($l)throw t=wd,$l=!1,wd=null,t}function Mt(t,e){var n=e[Ld];n===void 0&&(n=e[Ld]=new Set);var i=t+"__bubble";n.has(i)||(wx(e,t,2,!1),n.add(i))}function fu(t,e,n){var i=0;e&&(i|=4),wx(n,t,i,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Za(t){if(!t[Fo]){t[Fo]=!0,Cg.forEach(function(n){n!=="selectionchange"&&(Ab.has(n)||fu(n,!1,t),fu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,fu("selectionchange",!1,e))}}function wx(t,e,n,i){switch(ax(e)){case 1:var r=jS;break;case 4:r=HS;break;default:r=fh}n=r.bind(null,e,n,t),r=void 0,!bd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function hu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var l=i.stateNode.containerInfo;if(l===r||l.nodeType===8&&l.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;l!==null;){if(a=Br(l),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}l=l.parentNode}}i=i.return}Xg(function(){var u=s,f=lh(n),m=[];e:{var h=Sx.get(t);if(h!==void 0){var g=ph,_=t;switch(t){case"keypress":if(El(n)===0)break e;case"keydown":case"keyup":g=ib;break;case"focusin":_="focus",g=au;break;case"focusout":_="blur",g=au;break;case"beforeblur":case"afterblur":g=au;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Yp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=ab;break;case xx:case vx:case _x:g=qS;break;case yx:g=lb;break;case"scroll":g=VS;break;case"wheel":g=ub;break;case"copy":case"cut":case"paste":g=KS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Zp}var b=(e&4)!==0,x=!b&&t==="scroll",d=b?h!==null?h+"Capture":null:h;b=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,d!==null&&(S=Wa(p,d),S!=null&&b.push(Qa(p,S,y)))),x)break;p=p.return}0<b.length&&(h=new g(h,_,null,n,f),m.push({event:h,listeners:b}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",h&&n!==yd&&(_=n.relatedTarget||n.fromElement)&&(Br(_)||_[zi]))break e;if((g||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,g?(_=n.relatedTarget||n.toElement,g=u,_=_?Br(_):null,_!==null&&(x=rs(_),_!==x||_.tag!==5&&_.tag!==6)&&(_=null)):(g=null,_=u),g!==_)){if(b=Yp,S="onMouseLeave",d="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(b=Zp,S="onPointerLeave",d="onPointerEnter",p="pointer"),x=g==null?h:Ts(g),y=_==null?h:Ts(_),h=new b(S,p+"leave",g,n,f),h.target=x,h.relatedTarget=y,S=null,Br(f)===u&&(b=new b(d,p+"enter",_,n,f),b.target=y,b.relatedTarget=x,S=b),x=S,g&&_)t:{for(b=g,d=_,p=0,y=b;y;y=as(y))p++;for(y=0,S=d;S;S=as(S))y++;for(;0<p-y;)b=as(b),p--;for(;0<y-p;)d=as(d),y--;for(;p--;){if(b===d||d!==null&&b===d.alternate)break t;b=as(b),d=as(d)}b=null}else b=null;g!==null&&lm(m,h,g,b,!1),_!==null&&x!==null&&lm(m,x,_,b,!0)}}e:{if(h=u?Ts(u):window,g=h.nodeName&&h.nodeName.toLowerCase(),g==="select"||g==="input"&&h.type==="file")var A=xb;else if(em(h))if(fx)A=Sb;else{A=_b;var T=vb}else(g=h.nodeName)&&g.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=yb);if(A&&(A=A(t,u))){dx(m,A,n,f);break e}T&&T(t,h,u),t==="focusout"&&(T=h._wrapperState)&&T.controlled&&h.type==="number"&&md(h,"number",h.value)}switch(T=u?Ts(u):window,t){case"focusin":(em(T)||T.contentEditable==="true")&&(Ms=T,Ad=u,Ua=null);break;case"focusout":Ua=Ad=Ms=null;break;case"mousedown":Nd=!0;break;case"contextmenu":case"mouseup":case"dragend":Nd=!1,sm(m,n,f);break;case"selectionchange":if(Mb)break;case"keydown":case"keyup":sm(m,n,f)}var v;if(gh)e:{switch(t){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else ws?cx(t,n)&&(w="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(lx&&n.locale!=="ko"&&(ws||w!=="onCompositionStart"?w==="onCompositionEnd"&&ws&&(v=ox()):(or=f,hh="value"in or?or.value:or.textContent,ws=!0)),T=Ql(u,w),0<T.length&&(w=new Kp(w,t,null,n,f),m.push({event:w,listeners:T}),v?w.data=v:(v=ux(n),v!==null&&(w.data=v)))),(v=fb?hb(t,n):pb(t,n))&&(u=Ql(u,"onBeforeInput"),0<u.length&&(f=new Kp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:u}),f.data=v))}bx(m,e)})}function Qa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Wa(t,n),s!=null&&i.unshift(Qa(t,s,r)),s=Wa(t,e),s!=null&&i.push(Qa(t,s,r))),t=t.return}return i}function as(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function lm(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===i)break;l.tag===5&&u!==null&&(l=u,r?(c=Wa(n,s),c!=null&&a.unshift(Qa(n,c,l))):r||(c=Wa(n,s),c!=null&&a.push(Qa(n,c,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var Nb=/\r\n?/g,Rb=/\u0000|\uFFFD/g;function cm(t){return(typeof t=="string"?t:""+t).replace(Nb,`
`).replace(Rb,"")}function ko(t,e,n){if(e=cm(e),cm(t)!==e&&n)throw Error(ce(425))}function Jl(){}var Rd=null,Cd=null;function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,Cb=typeof clearTimeout=="function"?clearTimeout:void 0,um=typeof Promise=="function"?Promise:void 0,Pb=typeof queueMicrotask=="function"?queueMicrotask:typeof um<"u"?function(t){return um.resolve(null).then(t).catch(Db)}:Dd;function Db(t){setTimeout(function(){throw t})}function pu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),qa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);qa(e)}function pr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),mi="__reactFiber$"+ea,Ja="__reactProps$"+ea,zi="__reactContainer$"+ea,Ld="__reactEvents$"+ea,Lb="__reactListeners$"+ea,Ib="__reactHandles$"+ea;function Br(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dm(t);t!==null;){if(n=t[mi])return n;t=dm(t)}return e}t=n,n=t.parentNode}return null}function xo(t){return t=t[mi]||t[zi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ts(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Cc(t){return t[Ja]||null}var Id=[],As=-1;function Ar(t){return{current:t}}function Et(t){0>As||(t.current=Id[As],Id[As]=null,As--)}function bt(t,e){As++,Id[As]=t.current,t.current=e}var br={},pn=Ar(br),Tn=Ar(!1),Xr=br;function Hs(t,e){var n=t.type.contextTypes;if(!n)return br;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function An(t){return t=t.childContextTypes,t!=null}function ec(){Et(Tn),Et(pn)}function fm(t,e,n){if(pn.current!==br)throw Error(ce(168));bt(pn,e),bt(Tn,n)}function Mx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,vS(t)||"Unknown",r));return It({},n,i)}function tc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||br,Xr=pn.current,bt(pn,t),bt(Tn,Tn.current),!0}function hm(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Mx(t,e,Xr),i.__reactInternalMemoizedMergedChildContext=t,Et(Tn),Et(pn),bt(pn,t)):Et(Tn),bt(Tn,n)}var Pi=null,Pc=!1,mu=!1;function Ex(t){Pi===null?Pi=[t]:Pi.push(t)}function Ub(t){Pc=!0,Ex(t)}function Nr(){if(!mu&&Pi!==null){mu=!0;var t=0,e=gt;try{var n=Pi;for(gt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Pi=null,Pc=!1}catch(r){throw Pi!==null&&(Pi=Pi.slice(t+1)),Kg(ch,Nr),r}finally{gt=e,mu=!1}}return null}var Ns=[],Rs=0,nc=null,ic=0,Hn=[],Vn=0,$r=null,Li=1,Ii="";function Fr(t,e){Ns[Rs++]=ic,Ns[Rs++]=nc,nc=t,ic=e}function Tx(t,e,n){Hn[Vn++]=Li,Hn[Vn++]=Ii,Hn[Vn++]=$r,$r=t;var i=Li;t=Ii;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var s=32-ai(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Li=1<<32-ai(e)+r|n<<r|i,Ii=s+t}else Li=1<<s|n<<r|i,Ii=t}function vh(t){t.return!==null&&(Fr(t,1),Tx(t,1,0))}function _h(t){for(;t===nc;)nc=Ns[--Rs],Ns[Rs]=null,ic=Ns[--Rs],Ns[Rs]=null;for(;t===$r;)$r=Hn[--Vn],Hn[Vn]=null,Ii=Hn[--Vn],Hn[Vn]=null,Li=Hn[--Vn],Hn[Vn]=null}var On=null,Un=null,At=!1,ii=null;function Ax(t,e){var n=Wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function pm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,On=t,Un=pr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,On=t,Un=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=$r!==null?{id:Li,overflow:Ii}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,On=t,Un=null,!0):!1;default:return!1}}function Ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Od(t){if(At){var e=Un;if(e){var n=e;if(!pm(t,e)){if(Ud(t))throw Error(ce(418));e=pr(n.nextSibling);var i=On;e&&pm(t,e)?Ax(i,n):(t.flags=t.flags&-4097|2,At=!1,On=t)}}else{if(Ud(t))throw Error(ce(418));t.flags=t.flags&-4097|2,At=!1,On=t}}}function mm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;On=t}function Bo(t){if(t!==On)return!1;if(!At)return mm(t),At=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pd(t.type,t.memoizedProps)),e&&(e=Un)){if(Ud(t))throw Nx(),Error(ce(418));for(;e;)Ax(t,e),e=pr(e.nextSibling)}if(mm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Un=pr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Un=null}}else Un=On?pr(t.stateNode.nextSibling):null;return!0}function Nx(){for(var t=Un;t;)t=pr(t.nextSibling)}function Vs(){Un=On=null,At=!1}function yh(t){ii===null?ii=[t]:ii.push(t)}var Ob=Wi.ReactCurrentBatchConfig;function ha(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=r.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function zo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function gm(t){var e=t._init;return e(t._payload)}function Rx(t){function e(d,p){if(t){var y=d.deletions;y===null?(d.deletions=[p],d.flags|=16):y.push(p)}}function n(d,p){if(!t)return null;for(;p!==null;)e(d,p),p=p.sibling;return null}function i(d,p){for(d=new Map;p!==null;)p.key!==null?d.set(p.key,p):d.set(p.index,p),p=p.sibling;return d}function r(d,p){return d=vr(d,p),d.index=0,d.sibling=null,d}function s(d,p,y){return d.index=y,t?(y=d.alternate,y!==null?(y=y.index,y<p?(d.flags|=2,p):y):(d.flags|=2,p)):(d.flags|=1048576,p)}function a(d){return t&&d.alternate===null&&(d.flags|=2),d}function l(d,p,y,S){return p===null||p.tag!==6?(p=bu(y,d.mode,S),p.return=d,p):(p=r(p,y),p.return=d,p)}function c(d,p,y,S){var A=y.type;return A===bs?f(d,p,y.props.children,S,y.key):p!==null&&(p.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===tr&&gm(A)===p.type)?(S=r(p,y.props),S.ref=ha(d,p,y),S.return=d,S):(S=Dl(y.type,y.key,y.props,null,d.mode,S),S.ref=ha(d,p,y),S.return=d,S)}function u(d,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=wu(y,d.mode,S),p.return=d,p):(p=r(p,y.children||[]),p.return=d,p)}function f(d,p,y,S,A){return p===null||p.tag!==7?(p=Gr(y,d.mode,S,A),p.return=d,p):(p=r(p,y),p.return=d,p)}function m(d,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=bu(""+p,d.mode,y),p.return=d,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ro:return y=Dl(p.type,p.key,p.props,null,d.mode,y),y.ref=ha(d,null,p),y.return=d,y;case Ss:return p=wu(p,d.mode,y),p.return=d,p;case tr:var S=p._init;return m(d,S(p._payload),y)}if(Ta(p)||la(p))return p=Gr(p,d.mode,y,null),p.return=d,p;zo(d,p)}return null}function h(d,p,y,S){var A=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return A!==null?null:l(d,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ro:return y.key===A?c(d,p,y,S):null;case Ss:return y.key===A?u(d,p,y,S):null;case tr:return A=y._init,h(d,p,A(y._payload),S)}if(Ta(y)||la(y))return A!==null?null:f(d,p,y,S,null);zo(d,y)}return null}function g(d,p,y,S,A){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(y)||null,l(p,d,""+S,A);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return d=d.get(S.key===null?y:S.key)||null,c(p,d,S,A);case Ss:return d=d.get(S.key===null?y:S.key)||null,u(p,d,S,A);case tr:var T=S._init;return g(d,p,y,T(S._payload),A)}if(Ta(S)||la(S))return d=d.get(y)||null,f(p,d,S,A,null);zo(p,S)}return null}function _(d,p,y,S){for(var A=null,T=null,v=p,w=p=0,O=null;v!==null&&w<y.length;w++){v.index>w?(O=v,v=null):O=v.sibling;var P=h(d,v,y[w],S);if(P===null){v===null&&(v=O);break}t&&v&&P.alternate===null&&e(d,v),p=s(P,p,w),T===null?A=P:T.sibling=P,T=P,v=O}if(w===y.length)return n(d,v),At&&Fr(d,w),A;if(v===null){for(;w<y.length;w++)v=m(d,y[w],S),v!==null&&(p=s(v,p,w),T===null?A=v:T.sibling=v,T=v);return At&&Fr(d,w),A}for(v=i(d,v);w<y.length;w++)O=g(v,d,w,y[w],S),O!==null&&(t&&O.alternate!==null&&v.delete(O.key===null?w:O.key),p=s(O,p,w),T===null?A=O:T.sibling=O,T=O);return t&&v.forEach(function(U){return e(d,U)}),At&&Fr(d,w),A}function b(d,p,y,S){var A=la(y);if(typeof A!="function")throw Error(ce(150));if(y=A.call(y),y==null)throw Error(ce(151));for(var T=A=null,v=p,w=p=0,O=null,P=y.next();v!==null&&!P.done;w++,P=y.next()){v.index>w?(O=v,v=null):O=v.sibling;var U=h(d,v,P.value,S);if(U===null){v===null&&(v=O);break}t&&v&&U.alternate===null&&e(d,v),p=s(U,p,w),T===null?A=U:T.sibling=U,T=U,v=O}if(P.done)return n(d,v),At&&Fr(d,w),A;if(v===null){for(;!P.done;w++,P=y.next())P=m(d,P.value,S),P!==null&&(p=s(P,p,w),T===null?A=P:T.sibling=P,T=P);return At&&Fr(d,w),A}for(v=i(d,v);!P.done;w++,P=y.next())P=g(v,d,w,P.value,S),P!==null&&(t&&P.alternate!==null&&v.delete(P.key===null?w:P.key),p=s(P,p,w),T===null?A=P:T.sibling=P,T=P);return t&&v.forEach(function(V){return e(d,V)}),At&&Fr(d,w),A}function x(d,p,y,S){if(typeof y=="object"&&y!==null&&y.type===bs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ro:e:{for(var A=y.key,T=p;T!==null;){if(T.key===A){if(A=y.type,A===bs){if(T.tag===7){n(d,T.sibling),p=r(T,y.props.children),p.return=d,d=p;break e}}else if(T.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===tr&&gm(A)===T.type){n(d,T.sibling),p=r(T,y.props),p.ref=ha(d,T,y),p.return=d,d=p;break e}n(d,T);break}else e(d,T);T=T.sibling}y.type===bs?(p=Gr(y.props.children,d.mode,S,y.key),p.return=d,d=p):(S=Dl(y.type,y.key,y.props,null,d.mode,S),S.ref=ha(d,p,y),S.return=d,d=S)}return a(d);case Ss:e:{for(T=y.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(d,p.sibling),p=r(p,y.children||[]),p.return=d,d=p;break e}else{n(d,p);break}else e(d,p);p=p.sibling}p=wu(y,d.mode,S),p.return=d,d=p}return a(d);case tr:return T=y._init,x(d,p,T(y._payload),S)}if(Ta(y))return _(d,p,y,S);if(la(y))return b(d,p,y,S);zo(d,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(d,p.sibling),p=r(p,y),p.return=d,d=p):(n(d,p),p=bu(y,d.mode,S),p.return=d,d=p),a(d)):n(d,p)}return x}var Gs=Rx(!0),Cx=Rx(!1),rc=Ar(null),sc=null,Cs=null,Sh=null;function bh(){Sh=Cs=sc=null}function wh(t){var e=rc.current;Et(rc),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Fs(t,e){sc=t,Sh=Cs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Mn=!0),t.firstContext=null)}function $n(t){var e=t._currentValue;if(Sh!==t)if(t={context:t,memoizedValue:e,next:null},Cs===null){if(sc===null)throw Error(ce(308));Cs=t,sc.dependencies={lanes:0,firstContext:t}}else Cs=Cs.next=t;return e}var zr=null;function Mh(t){zr===null?zr=[t]:zr.push(t)}function Px(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Mh(e)):(n.next=r.next,r.next=n),e.interleaved=n,ji(t,i)}function ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nr=!1;function Eh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Dx(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Oi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function mr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,ut&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(t,n)}function Tl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}function xm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ac(t,e,n,i){var r=t.updateQueue;nr=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,l=r.shared.pending;if(l!==null){r.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(s!==null){var m=r.baseState;a=0,f=u=c=null,l=s;do{var h=l.lane,g=l.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:g,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var _=t,b=l;switch(h=e,g=n,b.tag){case 1:if(_=b.payload,typeof _=="function"){m=_.call(g,m,h);break e}m=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=b.payload,h=typeof _=="function"?_.call(g,m,h):_,h==null)break e;m=It({},m,h);break e;case 2:nr=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[l]:h.push(l))}else g={eventTime:g,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=g,c=m):f=f.next=g,a|=h;if(l=l.next,l===null){if(l=r.shared.pending,l===null)break;h=l,l=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(c=m),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Yr|=a,t.lanes=a,t.memoizedState=m}}function vm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var vo={},_i=Ar(vo),eo=Ar(vo),to=Ar(vo);function jr(t){if(t===vo)throw Error(ce(174));return t}function Th(t,e){switch(bt(to,e),bt(eo,t),bt(_i,vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=xd(e,t)}Et(_i),bt(_i,e)}function Ws(){Et(_i),Et(eo),Et(to)}function Lx(t){jr(to.current);var e=jr(_i.current),n=xd(e,t.type);e!==n&&(bt(eo,t),bt(_i,n))}function Ah(t){eo.current===t&&(Et(_i),Et(eo))}var Pt=Ar(0);function oc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var gu=[];function Nh(){for(var t=0;t<gu.length;t++)gu[t]._workInProgressVersionPrimary=null;gu.length=0}var Al=Wi.ReactCurrentDispatcher,xu=Wi.ReactCurrentBatchConfig,qr=0,Lt=null,Vt=null,Qt=null,lc=!1,Oa=!1,no=0,Fb=0;function cn(){throw Error(ce(321))}function Rh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Ch(t,e,n,i,r,s){if(qr=s,Lt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?jb:Hb,t=n(i,r),Oa){s=0;do{if(Oa=!1,no=0,25<=s)throw Error(ce(301));s+=1,Qt=Vt=null,e.updateQueue=null,Al.current=Vb,t=n(i,r)}while(Oa)}if(Al.current=cc,e=Vt!==null&&Vt.next!==null,qr=0,Qt=Vt=Lt=null,lc=!1,e)throw Error(ce(300));return t}function Ph(){var t=no!==0;return no=0,t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Qt===null?Lt.memoizedState=Qt=t:Qt=Qt.next=t,Qt}function qn(){if(Vt===null){var t=Lt.alternate;t=t!==null?t.memoizedState:null}else t=Vt.next;var e=Qt===null?Lt.memoizedState:Qt.next;if(e!==null)Qt=e,Vt=t;else{if(t===null)throw Error(ce(310));Vt=t,t={memoizedState:Vt.memoizedState,baseState:Vt.baseState,baseQueue:Vt.baseQueue,queue:Vt.queue,next:null},Qt===null?Lt.memoizedState=Qt=t:Qt=Qt.next=t}return Qt}function io(t,e){return typeof e=="function"?e(t):e}function vu(t){var e=qn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Vt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var l=a=null,c=null,u=s;do{var f=u.lane;if((qr&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var m={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=m,a=i):c=c.next=m,Lt.lanes|=f,Yr|=f}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=l,li(i,e.memoizedState)||(Mn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Lt.lanes|=s,Yr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function _u(t){var e=qn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);li(s,e.memoizedState)||(Mn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function Ix(){}function Ux(t,e){var n=Lt,i=qn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,Mn=!0),i=i.queue,Dh(kx.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Qt!==null&&Qt.memoizedState.tag&1){if(n.flags|=2048,ro(9,Fx.bind(null,n,i,r,e),void 0,null),Jt===null)throw Error(ce(349));qr&30||Ox(n,e,r)}return r}function Ox(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Fx(t,e,n,i){e.value=n,e.getSnapshot=i,Bx(e)&&zx(t)}function kx(t,e,n){return n(function(){Bx(e)&&zx(t)})}function Bx(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function zx(t){var e=ji(t,1);e!==null&&oi(e,t,1,-1)}function _m(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:io,lastRenderedState:t},e.queue=t,t=t.dispatch=zb.bind(null,Lt,t),[e.memoizedState,t]}function ro(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Lt.updateQueue,e===null?(e={lastEffect:null,stores:null},Lt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jx(){return qn().memoizedState}function Nl(t,e,n,i){var r=hi();Lt.flags|=t,r.memoizedState=ro(1|e,n,void 0,i===void 0?null:i)}function Dc(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Vt!==null){var a=Vt.memoizedState;if(s=a.destroy,i!==null&&Rh(i,a.deps)){r.memoizedState=ro(e,n,s,i);return}}Lt.flags|=t,r.memoizedState=ro(1|e,n,s,i)}function ym(t,e){return Nl(8390656,8,t,e)}function Dh(t,e){return Dc(2048,8,t,e)}function Hx(t,e){return Dc(4,2,t,e)}function Vx(t,e){return Dc(4,4,t,e)}function Gx(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Wx(t,e,n){return n=n!=null?n.concat([t]):null,Dc(4,4,Gx.bind(null,e,t),n)}function Lh(){}function Xx(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function $x(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Rh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function qx(t,e,n){return qr&21?(li(n,e)||(n=Jg(),Lt.lanes|=n,Yr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Mn=!0),t.memoizedState=n)}function kb(t,e){var n=gt;gt=n!==0&&4>n?n:4,t(!0);var i=xu.transition;xu.transition={};try{t(!1),e()}finally{gt=n,xu.transition=i}}function Yx(){return qn().memoizedState}function Bb(t,e,n){var i=xr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Kx(t))Zx(e,n);else if(n=Px(t,e,n,i),n!==null){var r=vn();oi(n,t,i,r),Qx(n,e,i)}}function zb(t,e,n){var i=xr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kx(t))Zx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(r.hasEagerState=!0,r.eagerState=l,li(l,a)){var c=e.interleaved;c===null?(r.next=r,Mh(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=Px(t,e,r,i),n!==null&&(r=vn(),oi(n,t,i,r),Qx(n,e,i))}}function Kx(t){var e=t.alternate;return t===Lt||e!==null&&e===Lt}function Zx(t,e){Oa=lc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Qx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,uh(t,n)}}var cc={readContext:$n,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useInsertionEffect:cn,useLayoutEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useMutableSource:cn,useSyncExternalStore:cn,useId:cn,unstable_isNewReconciler:!1},jb={readContext:$n,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:$n,useEffect:ym,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Nl(4194308,4,Gx.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return Nl(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=hi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Bb.bind(null,Lt,t),[i.memoizedState,t]},useRef:function(t){var e=hi();return t={current:t},e.memoizedState=t},useState:_m,useDebugValue:Lh,useDeferredValue:function(t){return hi().memoizedState=t},useTransition:function(){var t=_m(!1),e=t[0];return t=kb.bind(null,t[1]),hi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Lt,r=hi();if(At){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),Jt===null)throw Error(ce(349));qr&30||Ox(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ym(kx.bind(null,i,s,t),[t]),i.flags|=2048,ro(9,Fx.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=hi(),e=Jt.identifierPrefix;if(At){var n=Ii,i=Li;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=no++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Fb++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Hb={readContext:$n,useCallback:Xx,useContext:$n,useEffect:Dh,useImperativeHandle:Wx,useInsertionEffect:Hx,useLayoutEffect:Vx,useMemo:$x,useReducer:vu,useRef:jx,useState:function(){return vu(io)},useDebugValue:Lh,useDeferredValue:function(t){var e=qn();return qx(e,Vt.memoizedState,t)},useTransition:function(){var t=vu(io)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Ix,useSyncExternalStore:Ux,useId:Yx,unstable_isNewReconciler:!1},Vb={readContext:$n,useCallback:Xx,useContext:$n,useEffect:Dh,useImperativeHandle:Wx,useInsertionEffect:Hx,useLayoutEffect:Vx,useMemo:$x,useReducer:_u,useRef:jx,useState:function(){return _u(io)},useDebugValue:Lh,useDeferredValue:function(t){var e=qn();return Vt===null?e.memoizedState=t:qx(e,Vt.memoizedState,t)},useTransition:function(){var t=_u(io)[0],e=qn().memoizedState;return[t,e]},useMutableSource:Ix,useSyncExternalStore:Ux,useId:Yx,unstable_isNewReconciler:!1};function ti(t,e){if(t&&t.defaultProps){e=It({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:It({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Lc={isMounted:function(t){return(t=t._reactInternals)?rs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=vn(),r=xr(t),s=Oi(i,r);s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(oi(e,t,r,i),Tl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=vn(),r=xr(t),s=Oi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=mr(t,s,r),e!==null&&(oi(e,t,r,i),Tl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=vn(),i=xr(t),r=Oi(n,i);r.tag=2,e!=null&&(r.callback=e),e=mr(t,r,i),e!==null&&(oi(e,t,i,n),Tl(e,t,i))}};function Sm(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ka(n,i)||!Ka(r,s):!0}function Jx(t,e,n){var i=!1,r=br,s=e.contextType;return typeof s=="object"&&s!==null?s=$n(s):(r=An(e)?Xr:pn.current,i=e.contextTypes,s=(i=i!=null)?Hs(t,r):br),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function bm(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Lc.enqueueReplaceState(e,e.state,null)}function Bd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Eh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=$n(s):(s=An(e)?Xr:pn.current,r.context=Hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(kd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Lc.enqueueReplaceState(r,r.state,null),ac(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",i=e;do n+=xS(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function yu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Gb=typeof WeakMap=="function"?WeakMap:Map;function ev(t,e,n){n=Oi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){dc||(dc=!0,Kd=i),zd(t,e)},n}function tv(t,e,n){n=Oi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){zd(t,e),typeof i!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function wm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Gb;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=rw.bind(null,t,e,n),e.then(t,t))}function Mm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Em(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Oi(-1,1),e.tag=2,mr(n,e,1))),n.lanes|=1),t)}var Wb=Wi.ReactCurrentOwner,Mn=!1;function xn(t,e,n,i){e.child=t===null?Cx(e,null,n,i):Gs(e,t.child,n,i)}function Tm(t,e,n,i,r){n=n.render;var s=e.ref;return Fs(e,r),i=Ch(t,e,n,i,s,r),n=Ph(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(At&&n&&vh(e),e.flags|=1,xn(t,e,i,r),e.child)}function Am(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,nv(t,e,s,i,r)):(t=Dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ka,n(a,i)&&t.ref===e.ref)return Hi(t,e,r)}return e.flags|=1,t=vr(s,i),t.ref=e.ref,t.return=e,e.child=t}function nv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ka(s,i)&&t.ref===e.ref)if(Mn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Mn=!0);else return e.lanes=t.lanes,Hi(t,e,r)}return jd(t,e,n,i,r)}function iv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},bt(Ds,Ln),Ln|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,bt(Ds,Ln),Ln|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,bt(Ds,Ln),Ln|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,bt(Ds,Ln),Ln|=i;return xn(t,e,r,n),e.child}function rv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function jd(t,e,n,i,r){var s=An(n)?Xr:pn.current;return s=Hs(e,s),Fs(e,r),n=Ch(t,e,n,i,s,r),i=Ph(),t!==null&&!Mn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Hi(t,e,r)):(At&&i&&vh(e),e.flags|=1,xn(t,e,n,r),e.child)}function Nm(t,e,n,i,r){if(An(n)){var s=!0;tc(e)}else s=!1;if(Fs(e,r),e.stateNode===null)Rl(t,e),Jx(e,n,i),Bd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=$n(u):(u=An(n)?Xr:pn.current,u=Hs(e,u));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==i||c!==u)&&bm(e,a,i,u),nr=!1;var h=e.memoizedState;a.state=h,ac(e,i,a,r),c=e.memoizedState,l!==i||h!==c||Tn.current||nr?(typeof f=="function"&&(kd(e,n,f,i),c=e.memoizedState),(l=nr||Sm(e,n,l,i,h,c,u))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Dx(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ti(e.type,l),a.props=u,m=e.pendingProps,h=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=$n(c):(c=An(n)?Xr:pn.current,c=Hs(e,c));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||h!==c)&&bm(e,a,i,c),nr=!1,h=e.memoizedState,a.state=h,ac(e,i,a,r);var _=e.memoizedState;l!==m||h!==_||Tn.current||nr?(typeof g=="function"&&(kd(e,n,g,i),_=e.memoizedState),(u=nr||Sm(e,n,u,i,h,_,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Hd(t,e,n,i,s,r)}function Hd(t,e,n,i,r,s){rv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&hm(e,n,!1),Hi(t,e,s);i=e.stateNode,Wb.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Gs(e,t.child,null,s),e.child=Gs(e,null,l,s)):xn(t,e,l,s),e.memoizedState=i.state,r&&hm(e,n,!0),e.child}function sv(t){var e=t.stateNode;e.pendingContext?fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&fm(t,e.context,!1),Th(t,e.containerInfo)}function Rm(t,e,n,i,r){return Vs(),yh(r),e.flags|=256,xn(t,e,n,i),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function av(t,e,n){var i=e.pendingProps,r=Pt.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(r&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),bt(Pt,r&1),t===null)return Od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Oc(a,i,0,null),t=Gr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=Vd,t):Ih(e,a));if(r=t.memoizedState,r!==null&&(l=r.dehydrated,l!==null))return Xb(t,e,a,i,l,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,l=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=vr(r,c),i.subtreeFlags=r.subtreeFlags&14680064),l!==null?s=vr(l,s):(s=Gr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Gd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Vd,i}return s=t.child,t=s.sibling,i=vr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ih(t,e){return e=Oc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function jo(t,e,n,i){return i!==null&&yh(i),Gs(e,t.child,null,n),t=Ih(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Xb(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=yu(Error(ce(422))),jo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Oc({mode:"visible",children:i.children},r,0,null),s=Gr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Gs(e,t.child,null,a),e.child.memoizedState=Gd(a),e.memoizedState=Vd,s);if(!(e.mode&1))return jo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var l=i.dgst;return i=l,s=Error(ce(419)),i=yu(s,i,void 0),jo(t,e,a,i)}if(l=(a&t.childLanes)!==0,Mn||l){if(i=Jt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(t,r),oi(i,t,r,-1))}return zh(),i=yu(Error(ce(421))),jo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=sw.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Un=pr(r.nextSibling),On=e,At=!0,ii=null,t!==null&&(Hn[Vn++]=Li,Hn[Vn++]=Ii,Hn[Vn++]=$r,Li=t.id,Ii=t.overflow,$r=e),e=Ih(e,i.children),e.flags|=4096,e)}function Cm(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fd(t.return,e,n)}function Su(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function ov(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(xn(t,e,i.children,n),i=Pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Cm(t,n,e);else if(t.tag===19)Cm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(bt(Pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&oc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Su(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&oc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Su(e,!0,n,null,s);break;case"together":Su(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Rl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Hi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Yr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=vr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=vr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function $b(t,e,n){switch(e.tag){case 3:sv(e),Vs();break;case 5:Lx(e);break;case 1:An(e.type)&&tc(e);break;case 4:Th(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;bt(rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(bt(Pt,Pt.current&1),e.flags|=128,null):n&e.child.childLanes?av(t,e,n):(bt(Pt,Pt.current&1),t=Hi(t,e,n),t!==null?t.sibling:null);bt(Pt,Pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return ov(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),bt(Pt,Pt.current),i)break;return null;case 22:case 23:return e.lanes=0,iv(t,e,n)}return Hi(t,e,n)}var lv,Wd,cv,uv;lv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};cv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,jr(_i.current);var s=null;switch(n){case"input":r=hd(t,r),i=hd(t,i),s=[];break;case"select":r=It({},r,{value:void 0}),i=It({},i,{value:void 0}),s=[];break;case"textarea":r=gd(t,r),i=gd(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Jl)}vd(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var l=r[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(l=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Va.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Mt("scroll",t),s||l===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};uv=function(t,e,n,i){n!==i&&(e.flags|=4)};function pa(t,e){if(!At)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function un(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function qb(t,e,n){var i=e.pendingProps;switch(_h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return un(e),null;case 1:return An(e.type)&&ec(),un(e),null;case 3:return i=e.stateNode,Ws(),Et(Tn),Et(pn),Nh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Jd(ii),ii=null))),Wd(t,e),un(e),null;case 5:Ah(e);var r=jr(to.current);if(n=e.type,t!==null&&e.stateNode!=null)cv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return un(e),null}if(t=jr(_i.current),Bo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[Ja]=s,t=(e.mode&1)!==0,n){case"dialog":Mt("cancel",i),Mt("close",i);break;case"iframe":case"object":case"embed":Mt("load",i);break;case"video":case"audio":for(r=0;r<Na.length;r++)Mt(Na[r],i);break;case"source":Mt("error",i);break;case"img":case"image":case"link":Mt("error",i),Mt("load",i);break;case"details":Mt("toggle",i);break;case"input":Bp(i,s),Mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},Mt("invalid",i);break;case"textarea":jp(i,s),Mt("invalid",i)}vd(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?i.textContent!==l&&(s.suppressHydrationWarning!==!0&&ko(i.textContent,l,t),r=["children",l]):typeof l=="number"&&i.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&ko(i.textContent,l,t),r=["children",""+l]):Va.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Mt("scroll",i)}switch(n){case"input":Co(i),zp(i,s,!0);break;case"textarea":Co(i),Hp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Jl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=kg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[mi]=e,t[Ja]=i,lv(t,e,!1,!1),e.stateNode=t;e:{switch(a=_d(n,i),n){case"dialog":Mt("cancel",t),Mt("close",t),r=i;break;case"iframe":case"object":case"embed":Mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Na.length;r++)Mt(Na[r],t);r=i;break;case"source":Mt("error",t),r=i;break;case"img":case"image":case"link":Mt("error",t),Mt("load",t),r=i;break;case"details":Mt("toggle",t),r=i;break;case"input":Bp(t,i),r=hd(t,i),Mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=It({},i,{value:void 0}),Mt("invalid",t);break;case"textarea":jp(t,i),r=gd(t,i),Mt("invalid",t);break;default:r=i}vd(n,r),l=r;for(s in l)if(l.hasOwnProperty(s)){var c=l[s];s==="style"?jg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Bg(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ga(t,c):typeof c=="number"&&Ga(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Va.hasOwnProperty(s)?c!=null&&s==="onScroll"&&Mt("scroll",t):c!=null&&rh(t,s,c,a))}switch(n){case"input":Co(t),zp(t,i,!1);break;case"textarea":Co(t),Hp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Jl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return un(e),null;case 6:if(t&&e.stateNode!=null)uv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=jr(to.current),jr(_i.current),Bo(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==n)&&(t=On,t!==null))switch(t.tag){case 3:ko(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ko(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return un(e),null;case 13:if(Et(Pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(At&&Un!==null&&e.mode&1&&!(e.flags&128))Nx(),Vs(),e.flags|=98560,s=!1;else if(s=Bo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[mi]=e}else Vs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;un(e),s=!1}else ii!==null&&(Jd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Pt.current&1?Gt===0&&(Gt=3):zh())),e.updateQueue!==null&&(e.flags|=4),un(e),null);case 4:return Ws(),Wd(t,e),t===null&&Za(e.stateNode.containerInfo),un(e),null;case 10:return wh(e.type._context),un(e),null;case 17:return An(e.type)&&ec(),un(e),null;case 19:if(Et(Pt),s=e.memoizedState,s===null)return un(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)pa(s,!1);else{if(Gt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=oc(t),a!==null){for(e.flags|=128,pa(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return bt(Pt,Pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ft()>$s&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304)}else{if(!i)if(t=oc(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),pa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!At)return un(e),null}else 2*Ft()-s.renderingStartTime>$s&&n!==1073741824&&(e.flags|=128,i=!0,pa(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ft(),e.sibling=null,n=Pt.current,bt(Pt,i?n&1|2:n&1),e):(un(e),null);case 22:case 23:return Bh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Ln&1073741824&&(un(e),e.subtreeFlags&6&&(e.flags|=8192)):un(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function Yb(t,e){switch(_h(e),e.tag){case 1:return An(e.type)&&ec(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ws(),Et(Tn),Et(pn),Nh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ah(e),null;case 13:if(Et(Pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));Vs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Et(Pt),null;case 4:return Ws(),null;case 10:return wh(e.type._context),null;case 22:case 23:return Bh(),null;case 24:return null;default:return null}}var Ho=!1,hn=!1,Kb=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function Ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ot(t,e,i)}else n.current=null}function Xd(t,e,n){try{n()}catch(i){Ot(t,e,i)}}var Pm=!1;function Zb(t,e){if(Rd=Kl,t=mx(),xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,f=0,m=t,h=null;t:for(;;){for(var g;m!==n||r!==0&&m.nodeType!==3||(l=a+r),m!==s||i!==0&&m.nodeType!==3||(c=a+i),m.nodeType===3&&(a+=m.nodeValue.length),(g=m.firstChild)!==null;)h=m,m=g;for(;;){if(m===t)break t;if(h===n&&++u===r&&(l=a),h===s&&++f===i&&(c=a),(g=m.nextSibling)!==null)break;m=h,h=m.parentNode}m=g}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Cd={focusedElem:t,selectionRange:n},Kl=!1,Ce=e;Ce!==null;)if(e=Ce,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ce=t;else for(;Ce!==null;){e=Ce;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var b=_.memoizedProps,x=_.memoizedState,d=e.stateNode,p=d.getSnapshotBeforeUpdate(e.elementType===e.type?b:ti(e.type,b),x);d.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(S){Ot(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Ce=t;break}Ce=e.return}return _=Pm,Pm=!1,_}function Fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Xd(e,n,s)}r=r.next}while(r!==i)}}function Ic(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function dv(t){var e=t.alternate;e!==null&&(t.alternate=null,dv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[Ja],delete e[Ld],delete e[Lb],delete e[Ib])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function fv(t){return t.tag===5||t.tag===3||t.tag===4}function Dm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||fv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Jl));else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}var tn=null,ni=!1;function qi(t,e,n){for(n=n.child;n!==null;)hv(t,e,n),n=n.sibling}function hv(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(Tc,n)}catch{}switch(n.tag){case 5:hn||Ps(n,e);case 6:var i=tn,r=ni;tn=null,qi(t,e,n),tn=i,ni=r,tn!==null&&(ni?(t=tn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):tn.removeChild(n.stateNode));break;case 18:tn!==null&&(ni?(t=tn,n=n.stateNode,t.nodeType===8?pu(t.parentNode,n):t.nodeType===1&&pu(t,n),qa(t)):pu(tn,n.stateNode));break;case 4:i=tn,r=ni,tn=n.stateNode.containerInfo,ni=!0,qi(t,e,n),tn=i,ni=r;break;case 0:case 11:case 14:case 15:if(!hn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Xd(n,e,a),r=r.next}while(r!==i)}qi(t,e,n);break;case 1:if(!hn&&(Ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(l){Ot(n,e,l)}qi(t,e,n);break;case 21:qi(t,e,n);break;case 22:n.mode&1?(hn=(i=hn)||n.memoizedState!==null,qi(t,e,n),hn=i):qi(t,e,n);break;default:qi(t,e,n)}}function Lm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Kb),e.forEach(function(i){var r=aw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Zn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:tn=l.stateNode,ni=!1;break e;case 3:tn=l.stateNode.containerInfo,ni=!0;break e;case 4:tn=l.stateNode.containerInfo,ni=!0;break e}l=l.return}if(tn===null)throw Error(ce(160));hv(s,a,r),tn=null,ni=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Ot(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)pv(e,t),e=e.sibling}function pv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Zn(e,t),ui(t),i&4){try{Fa(3,t,t.return),Ic(3,t)}catch(b){Ot(t,t.return,b)}try{Fa(5,t,t.return)}catch(b){Ot(t,t.return,b)}}break;case 1:Zn(e,t),ui(t),i&512&&n!==null&&Ps(n,n.return);break;case 5:if(Zn(e,t),ui(t),i&512&&n!==null&&Ps(n,n.return),t.flags&32){var r=t.stateNode;try{Ga(r,"")}catch(b){Ot(t,t.return,b)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Og(r,s),_d(l,a);var u=_d(l,s);for(a=0;a<c.length;a+=2){var f=c[a],m=c[a+1];f==="style"?jg(r,m):f==="dangerouslySetInnerHTML"?Bg(r,m):f==="children"?Ga(r,m):rh(r,f,m,u)}switch(l){case"input":pd(r,s);break;case"textarea":Fg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Ls(r,!!s.multiple,g,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ls(r,!!s.multiple,s.defaultValue,!0):Ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ja]=s}catch(b){Ot(t,t.return,b)}}break;case 6:if(Zn(e,t),ui(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(b){Ot(t,t.return,b)}}break;case 3:if(Zn(e,t),ui(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(e.containerInfo)}catch(b){Ot(t,t.return,b)}break;case 4:Zn(e,t),ui(t);break;case 13:Zn(e,t),ui(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Fh=Ft())),i&4&&Lm(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(hn=(u=hn)||f,Zn(e,t),hn=u):Zn(e,t),ui(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!f&&t.mode&1)for(Ce=t,f=t.child;f!==null;){for(m=Ce=f;Ce!==null;){switch(h=Ce,g=h.child,h.tag){case 0:case 11:case 14:case 15:Fa(4,h,h.return);break;case 1:Ps(h,h.return);var _=h.stateNode;if(typeof _.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(b){Ot(i,n,b)}}break;case 5:Ps(h,h.return);break;case 22:if(h.memoizedState!==null){Um(m);continue}}g!==null?(g.return=h,Ce=g):Um(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{r=m.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,c=m.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=zg("display",a))}catch(b){Ot(t,t.return,b)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=u?"":m.memoizedProps}catch(b){Ot(t,t.return,b)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Zn(e,t),ui(t),i&4&&Lm(t);break;case 21:break;default:Zn(e,t),ui(t)}}function ui(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(fv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ga(r,""),i.flags&=-33);var s=Dm(t);Yd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,l=Dm(t);qd(t,l,a);break;default:throw Error(ce(161))}}catch(c){Ot(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Qb(t,e,n){Ce=t,mv(t)}function mv(t,e,n){for(var i=(t.mode&1)!==0;Ce!==null;){var r=Ce,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Ho;if(!a){var l=r.alternate,c=l!==null&&l.memoizedState!==null||hn;l=Ho;var u=hn;if(Ho=a,(hn=c)&&!u)for(Ce=r;Ce!==null;)a=Ce,c=a.child,a.tag===22&&a.memoizedState!==null?Om(r):c!==null?(c.return=a,Ce=c):Om(r);for(;s!==null;)Ce=s,mv(s),s=s.sibling;Ce=r,Ho=l,hn=u}Im(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ce=s):Im(t)}}function Im(t){for(;Ce!==null;){var e=Ce;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:hn||Ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!hn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ti(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&vm(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}vm(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&qa(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}hn||e.flags&512&&$d(e)}catch(h){Ot(e,e.return,h)}}if(e===t){Ce=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Um(t){for(;Ce!==null;){var e=Ce;if(e===t){Ce=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ce=n;break}Ce=e.return}}function Om(t){for(;Ce!==null;){var e=Ce;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ic(4,e)}catch(c){Ot(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Ot(e,r,c)}}var s=e.return;try{$d(e)}catch(c){Ot(e,s,c)}break;case 5:var a=e.return;try{$d(e)}catch(c){Ot(e,a,c)}}}catch(c){Ot(e,e.return,c)}if(e===t){Ce=null;break}var l=e.sibling;if(l!==null){l.return=e.return,Ce=l;break}Ce=e.return}}var Jb=Math.ceil,uc=Wi.ReactCurrentDispatcher,Uh=Wi.ReactCurrentOwner,Xn=Wi.ReactCurrentBatchConfig,ut=0,Jt=null,jt=null,rn=0,Ln=0,Ds=Ar(0),Gt=0,so=null,Yr=0,Uc=0,Oh=0,ka=null,wn=null,Fh=0,$s=1/0,Ci=null,dc=!1,Kd=null,gr=null,Vo=!1,lr=null,fc=0,Ba=0,Zd=null,Cl=-1,Pl=0;function vn(){return ut&6?Ft():Cl!==-1?Cl:Cl=Ft()}function xr(t){return t.mode&1?ut&2&&rn!==0?rn&-rn:Ob.transition!==null?(Pl===0&&(Pl=Jg()),Pl):(t=gt,t!==0||(t=window.event,t=t===void 0?16:ax(t.type)),t):1}function oi(t,e,n,i){if(50<Ba)throw Ba=0,Zd=null,Error(ce(185));mo(t,n,i),(!(ut&2)||t!==Jt)&&(t===Jt&&(!(ut&2)&&(Uc|=n),Gt===4&&sr(t,rn)),Nn(t,i),n===1&&ut===0&&!(e.mode&1)&&($s=Ft()+500,Pc&&Nr()))}function Nn(t,e){var n=t.callbackNode;OS(t,e);var i=Yl(t,t===Jt?rn:0);if(i===0)n!==null&&Wp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Wp(n),e===1)t.tag===0?Ub(Fm.bind(null,t)):Ex(Fm.bind(null,t)),Pb(function(){!(ut&6)&&Nr()}),n=null;else{switch(ex(i)){case 1:n=ch;break;case 4:n=Zg;break;case 16:n=ql;break;case 536870912:n=Qg;break;default:n=ql}n=wv(n,gv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function gv(t,e){if(Cl=-1,Pl=0,ut&6)throw Error(ce(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=Yl(t,t===Jt?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=hc(t,i);else{e=i;var r=ut;ut|=2;var s=vv();(Jt!==t||rn!==e)&&(Ci=null,$s=Ft()+500,Vr(t,e));do try{nw();break}catch(l){xv(t,l)}while(!0);bh(),uc.current=s,ut=r,jt!==null?e=0:(Jt=null,rn=0,e=Gt)}if(e!==0){if(e===2&&(r=Md(t),r!==0&&(i=r,e=Qd(t,r))),e===1)throw n=so,Vr(t,0),sr(t,i),Nn(t,Ft()),n;if(e===6)sr(t,i);else{if(r=t.current.alternate,!(i&30)&&!ew(r)&&(e=hc(t,i),e===2&&(s=Md(t),s!==0&&(i=s,e=Qd(t,s))),e===1))throw n=so,Vr(t,0),sr(t,i),Nn(t,Ft()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:kr(t,wn,Ci);break;case 3:if(sr(t,i),(i&130023424)===i&&(e=Fh+500-Ft(),10<e)){if(Yl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){vn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Dd(kr.bind(null,t,wn,Ci),e);break}kr(t,wn,Ci);break;case 4:if(sr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ai(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ft()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Jb(i/1960))-i,10<i){t.timeoutHandle=Dd(kr.bind(null,t,wn,Ci),i);break}kr(t,wn,Ci);break;case 5:kr(t,wn,Ci);break;default:throw Error(ce(329))}}}return Nn(t,Ft()),t.callbackNode===n?gv.bind(null,t):null}function Qd(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(Vr(t,e).flags|=256),t=hc(t,e),t!==2&&(e=wn,wn=n,e!==null&&Jd(e)),t}function Jd(t){wn===null?wn=t:wn.push.apply(wn,t)}function ew(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(t,e){for(e&=~Oh,e&=~Uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function Fm(t){if(ut&6)throw Error(ce(327));ks();var e=Yl(t,0);if(!(e&1))return Nn(t,Ft()),null;var n=hc(t,e);if(t.tag!==0&&n===2){var i=Md(t);i!==0&&(e=i,n=Qd(t,i))}if(n===1)throw n=so,Vr(t,0),sr(t,e),Nn(t,Ft()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,kr(t,wn,Ci),Nn(t,Ft()),null}function kh(t,e){var n=ut;ut|=1;try{return t(e)}finally{ut=n,ut===0&&($s=Ft()+500,Pc&&Nr())}}function Kr(t){lr!==null&&lr.tag===0&&!(ut&6)&&ks();var e=ut;ut|=1;var n=Xn.transition,i=gt;try{if(Xn.transition=null,gt=1,t)return t()}finally{gt=i,Xn.transition=n,ut=e,!(ut&6)&&Nr()}}function Bh(){Ln=Ds.current,Et(Ds)}function Vr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Cb(n)),jt!==null)for(n=jt.return;n!==null;){var i=n;switch(_h(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ec();break;case 3:Ws(),Et(Tn),Et(pn),Nh();break;case 5:Ah(i);break;case 4:Ws();break;case 13:Et(Pt);break;case 19:Et(Pt);break;case 10:wh(i.type._context);break;case 22:case 23:Bh()}n=n.return}if(Jt=t,jt=t=vr(t.current,null),rn=Ln=e,Gt=0,so=null,Oh=Uc=Yr=0,wn=ka=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}zr=null}return t}function xv(t,e){do{var n=jt;try{if(bh(),Al.current=cc,lc){for(var i=Lt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}lc=!1}if(qr=0,Qt=Vt=Lt=null,Oa=!1,no=0,Uh.current=null,n===null||n.return===null){Gt=1,so=e,jt=null;break}e:{var s=t,a=n.return,l=n,c=e;if(e=rn,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Mm(a);if(g!==null){g.flags&=-257,Em(g,a,l,s,e),g.mode&1&&wm(s,u,e),e=g,c=u;var _=e.updateQueue;if(_===null){var b=new Set;b.add(c),e.updateQueue=b}else _.add(c);break e}else{if(!(e&1)){wm(s,u,e),zh();break e}c=Error(ce(426))}}else if(At&&l.mode&1){var x=Mm(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Em(x,a,l,s,e),yh(Xs(c,l));break e}}s=c=Xs(c,l),Gt!==4&&(Gt=2),ka===null?ka=[s]:ka.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=ev(s,c,e);xm(s,d);break e;case 1:l=c;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(gr===null||!gr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=tv(s,l,e);xm(s,S);break e}}s=s.return}while(s!==null)}yv(n)}catch(A){e=A,jt===n&&n!==null&&(jt=n=n.return);continue}break}while(!0)}function vv(){var t=uc.current;return uc.current=cc,t===null?cc:t}function zh(){(Gt===0||Gt===3||Gt===2)&&(Gt=4),Jt===null||!(Yr&268435455)&&!(Uc&268435455)||sr(Jt,rn)}function hc(t,e){var n=ut;ut|=2;var i=vv();(Jt!==t||rn!==e)&&(Ci=null,Vr(t,e));do try{tw();break}catch(r){xv(t,r)}while(!0);if(bh(),ut=n,uc.current=i,jt!==null)throw Error(ce(261));return Jt=null,rn=0,Gt}function tw(){for(;jt!==null;)_v(jt)}function nw(){for(;jt!==null&&!AS();)_v(jt)}function _v(t){var e=bv(t.alternate,t,Ln);t.memoizedProps=t.pendingProps,e===null?yv(t):jt=e,Uh.current=null}function yv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Yb(n,e),n!==null){n.flags&=32767,jt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Gt=6,jt=null;return}}else if(n=qb(n,e,Ln),n!==null){jt=n;return}if(e=e.sibling,e!==null){jt=e;return}jt=e=t}while(e!==null);Gt===0&&(Gt=5)}function kr(t,e,n){var i=gt,r=Xn.transition;try{Xn.transition=null,gt=1,iw(t,e,n,i)}finally{Xn.transition=r,gt=i}return null}function iw(t,e,n,i){do ks();while(lr!==null);if(ut&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(FS(t,s),t===Jt&&(jt=Jt=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Vo||(Vo=!0,wv(ql,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Xn.transition,Xn.transition=null;var a=gt;gt=1;var l=ut;ut|=4,Uh.current=null,Zb(t,n),pv(n,t),wb(Cd),Kl=!!Rd,Cd=Rd=null,t.current=n,Qb(n),NS(),ut=l,gt=a,Xn.transition=s}else t.current=n;if(Vo&&(Vo=!1,lr=t,fc=r),s=t.pendingLanes,s===0&&(gr=null),PS(n.stateNode),Nn(t,Ft()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(dc)throw dc=!1,t=Kd,Kd=null,t;return fc&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Zd?Ba++:(Ba=0,Zd=t):Ba=0,Nr(),null}function ks(){if(lr!==null){var t=ex(fc),e=Xn.transition,n=gt;try{if(Xn.transition=null,gt=16>t?16:t,lr===null)var i=!1;else{if(t=lr,lr=null,fc=0,ut&6)throw Error(ce(331));var r=ut;for(ut|=4,Ce=t.current;Ce!==null;){var s=Ce,a=s.child;if(Ce.flags&16){var l=s.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(Ce=u;Ce!==null;){var f=Ce;switch(f.tag){case 0:case 11:case 15:Fa(8,f,s)}var m=f.child;if(m!==null)m.return=f,Ce=m;else for(;Ce!==null;){f=Ce;var h=f.sibling,g=f.return;if(dv(f),f===u){Ce=null;break}if(h!==null){h.return=g,Ce=h;break}Ce=g}}}var _=s.alternate;if(_!==null){var b=_.child;if(b!==null){_.child=null;do{var x=b.sibling;b.sibling=null,b=x}while(b!==null)}}Ce=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Ce=a;else e:for(;Ce!==null;){if(s=Ce,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Fa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ce=d;break e}Ce=s.return}}var p=t.current;for(Ce=p;Ce!==null;){a=Ce;var y=a.child;if(a.subtreeFlags&2064&&y!==null)y.return=a,Ce=y;else e:for(a=p;Ce!==null;){if(l=Ce,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ic(9,l)}}catch(A){Ot(l,l.return,A)}if(l===a){Ce=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,Ce=S;break e}Ce=l.return}}if(ut=r,Nr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(Tc,t)}catch{}i=!0}return i}finally{gt=n,Xn.transition=e}}return!1}function km(t,e,n){e=Xs(n,e),e=ev(t,e,1),t=mr(t,e,1),e=vn(),t!==null&&(mo(t,1,e),Nn(t,e))}function Ot(t,e,n){if(t.tag===3)km(t,t,n);else for(;e!==null;){if(e.tag===3){km(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=Xs(n,t),t=tv(e,t,1),e=mr(e,t,1),t=vn(),e!==null&&(mo(e,1,t),Nn(e,t));break}}e=e.return}}function rw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=vn(),t.pingedLanes|=t.suspendedLanes&n,Jt===t&&(rn&n)===n&&(Gt===4||Gt===3&&(rn&130023424)===rn&&500>Ft()-Fh?Vr(t,0):Oh|=n),Nn(t,e)}function Sv(t,e){e===0&&(t.mode&1?(e=Lo,Lo<<=1,!(Lo&130023424)&&(Lo=4194304)):e=1);var n=vn();t=ji(t,e),t!==null&&(mo(t,e,n),Nn(t,n))}function sw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Sv(t,n)}function aw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Sv(t,n)}var bv;bv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Tn.current)Mn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Mn=!1,$b(t,e,n);Mn=!!(t.flags&131072)}else Mn=!1,At&&e.flags&1048576&&Tx(e,ic,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Rl(t,e),t=e.pendingProps;var r=Hs(e,pn.current);Fs(e,n),r=Ch(null,e,i,t,r,n);var s=Ph();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,An(i)?(s=!0,tc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Eh(e),r.updater=Lc,e.stateNode=r,r._reactInternals=e,Bd(e,i,t,n),e=Hd(null,e,i,!0,s,n)):(e.tag=0,At&&s&&vh(e),xn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Rl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=lw(i),t=ti(i,t),r){case 0:e=jd(null,e,i,t,n);break e;case 1:e=Nm(null,e,i,t,n);break e;case 11:e=Tm(null,e,i,t,n);break e;case 14:e=Am(null,e,i,ti(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),jd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Nm(t,e,i,r,n);case 3:e:{if(sv(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Dx(t,e),ac(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Xs(Error(ce(423)),e),e=Rm(t,e,i,n,r);break e}else if(i!==r){r=Xs(Error(ce(424)),e),e=Rm(t,e,i,n,r);break e}else for(Un=pr(e.stateNode.containerInfo.firstChild),On=e,At=!0,ii=null,n=Cx(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vs(),i===r){e=Hi(t,e,n);break e}xn(t,e,i,n)}e=e.child}return e;case 5:return Lx(e),t===null&&Od(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Pd(i,r)?a=null:s!==null&&Pd(i,s)&&(e.flags|=32),rv(t,e),xn(t,e,a,n),e.child;case 6:return t===null&&Od(e),null;case 13:return av(t,e,n);case 4:return Th(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Gs(e,null,i,n):xn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Tm(t,e,i,r,n);case 7:return xn(t,e,e.pendingProps,n),e.child;case 8:return xn(t,e,e.pendingProps.children,n),e.child;case 12:return xn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,bt(rc,i._currentValue),i._currentValue=a,s!==null)if(li(s.value,a)){if(s.children===r.children&&!Tn.current){e=Hi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var c=l.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=Oi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Fd(s.return,n,e),l.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Fd(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}xn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Fs(e,n),r=$n(r),i=i(r),e.flags|=1,xn(t,e,i,n),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),Am(t,e,i,r,n);case 15:return nv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Rl(t,e),e.tag=1,An(i)?(t=!0,tc(e)):t=!1,Fs(e,n),Jx(e,i,r),Bd(e,i,r,n),Hd(null,e,i,!0,t,n);case 19:return ov(t,e,n);case 22:return iv(t,e,n)}throw Error(ce(156,e.tag))};function wv(t,e){return Kg(t,e)}function ow(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(t,e,n,i){return new ow(t,e,n,i)}function jh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lw(t){if(typeof t=="function")return jh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ah)return 11;if(t===oh)return 14}return 2}function vr(t,e){var n=t.alternate;return n===null?(n=Wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Dl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")jh(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case bs:return Gr(n.children,r,s,e);case sh:a=8,r|=8;break;case cd:return t=Wn(12,n,e,r|2),t.elementType=cd,t.lanes=s,t;case ud:return t=Wn(13,n,e,r),t.elementType=ud,t.lanes=s,t;case dd:return t=Wn(19,n,e,r),t.elementType=dd,t.lanes=s,t;case Lg:return Oc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Pg:a=10;break e;case Dg:a=9;break e;case ah:a=11;break e;case oh:a=14;break e;case tr:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Wn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Gr(t,e,n,i){return t=Wn(7,t,i,e),t.lanes=n,t}function Oc(t,e,n,i){return t=Wn(22,t,i,e),t.elementType=Lg,t.lanes=n,t.stateNode={isHidden:!1},t}function bu(t,e,n){return t=Wn(6,t,null,e),t.lanes=n,t}function wu(t,e,n){return e=Wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function cw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=iu(0),this.expirationTimes=iu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=iu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Hh(t,e,n,i,r,s,a,l,c){return t=new cw(t,e,n,l,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Eh(s),t}function uw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ss,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Mv(t){if(!t)return br;t=t._reactInternals;e:{if(rs(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(An(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(An(n))return Mx(t,n,e)}return e}function Ev(t,e,n,i,r,s,a,l,c){return t=Hh(n,i,!0,t,r,s,a,l,c),t.context=Mv(null),n=t.current,i=vn(),r=xr(n),s=Oi(i,r),s.callback=e??null,mr(n,s,r),t.current.lanes=r,mo(t,r,i),Nn(t,i),t}function Fc(t,e,n,i){var r=e.current,s=vn(),a=xr(r);return n=Mv(n),e.context===null?e.context=n:e.pendingContext=n,e=Oi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=mr(r,e,a),t!==null&&(oi(t,r,a,s),Tl(t,r,a)),a}function pc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Vh(t,e){Bm(t,e),(t=t.alternate)&&Bm(t,e)}function dw(){return null}var Tv=typeof reportError=="function"?reportError:function(t){console.error(t)};function Gh(t){this._internalRoot=t}kc.prototype.render=Gh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Fc(t,e,null,null)};kc.prototype.unmount=Gh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){Fc(null,t,null,null)}),e[zi]=null}};function kc(t){this._internalRoot=t}kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ix();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rr.length&&e!==0&&e<rr[n].priority;n++);rr.splice(n,0,t),n===0&&sx(t)}};function Wh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Bc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function zm(){}function fw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=pc(a);s.call(u)}}var a=Ev(e,i,t,0,null,!1,!1,"",zm);return t._reactRootContainer=a,t[zi]=a.current,Za(t.nodeType===8?t.parentNode:t),Kr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var l=i;i=function(){var u=pc(c);l.call(u)}}var c=Hh(t,0,!1,null,null,!1,!1,"",zm);return t._reactRootContainer=c,t[zi]=c.current,Za(t.nodeType===8?t.parentNode:t),Kr(function(){Fc(e,c,n,i)}),c}function zc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var l=r;r=function(){var c=pc(a);l.call(c)}}Fc(e,a,t,r)}else a=fw(n,e,t,r,i);return pc(a)}tx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Aa(e.pendingLanes);n!==0&&(uh(e,n|1),Nn(e,Ft()),!(ut&6)&&($s=Ft()+500,Nr()))}break;case 13:Kr(function(){var i=ji(t,1);if(i!==null){var r=vn();oi(i,t,1,r)}}),Vh(t,1)}};dh=function(t){if(t.tag===13){var e=ji(t,134217728);if(e!==null){var n=vn();oi(e,t,134217728,n)}Vh(t,134217728)}};nx=function(t){if(t.tag===13){var e=xr(t),n=ji(t,e);if(n!==null){var i=vn();oi(n,t,e,i)}Vh(t,e)}};ix=function(){return gt};rx=function(t,e){var n=gt;try{return gt=t,e()}finally{gt=n}};Sd=function(t,e,n){switch(e){case"input":if(pd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Cc(i);if(!r)throw Error(ce(90));Ug(i),pd(i,r)}}}break;case"textarea":Fg(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};Gg=kh;Wg=Kr;var hw={usingClientEntryPoint:!1,Events:[xo,Ts,Cc,Hg,Vg,kh]},ma={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},pw={bundleType:ma.bundleType,version:ma.version,rendererPackageName:ma.rendererPackageName,rendererConfig:ma.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=qg(t),t===null?null:t.stateNode},findFiberByHostInstance:ma.findFiberByHostInstance||dw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Go=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Go.isDisabled&&Go.supportsFiber)try{Tc=Go.inject(pw),vi=Go}catch{}}kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hw;kn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Wh(e))throw Error(ce(200));return uw(t,e,null,n)};kn.createRoot=function(t,e){if(!Wh(t))throw Error(ce(299));var n=!1,i="",r=Tv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Hh(t,1,!1,null,null,n,!1,i,r),t[zi]=e.current,Za(t.nodeType===8?t.parentNode:t),new Gh(e)};kn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=qg(e),t=t===null?null:t.stateNode,t};kn.flushSync=function(t){return Kr(t)};kn.hydrate=function(t,e,n){if(!Bc(e))throw Error(ce(200));return zc(null,t,e,!0,n)};kn.hydrateRoot=function(t,e,n){if(!Wh(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Tv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ev(e,null,t,1,n??null,r,!1,s,a),t[zi]=e.current,Za(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new kc(e)};kn.render=function(t,e,n){if(!Bc(e))throw Error(ce(200));return zc(null,t,e,!1,n)};kn.unmountComponentAtNode=function(t){if(!Bc(t))throw Error(ce(40));return t._reactRootContainer?(Kr(function(){zc(null,null,t,!1,function(){t._reactRootContainer=null,t[zi]=null})}),!0):!1};kn.unstable_batchedUpdates=kh;kn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Bc(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return zc(t,e,n,!1,i)};kn.version="18.3.1-next-f1338f8080-20240426";function Av(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Av)}catch(t){console.error(t)}}Av(),Ag.exports=kn;var mw=Ag.exports,Nv,jm=mw;Nv=jm.createRoot,jm.hydrateRoot;function Rv(t,e){return function(){return t.apply(e,arguments)}}const{toString:gw}=Object.prototype,{getPrototypeOf:Vi}=Object,{iterator:_o,toStringTag:Cv}=Symbol,Gi=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),Pv=t=>typeof t=="string"&&(t==="__proto__"||t==="constructor"||t==="prototype"),jc=(t,e,n)=>t===Object.prototype||!n&&e===null,xw=t=>{if(!Object.isExtensible(t))return!1;const e=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&e.push(...Object.getOwnPropertySymbols(t)),e.every(n=>{if(Pv(n))return!1;const i=Object.getOwnPropertyDescriptor(t,n);return!!i&&i.configurable&&i.writable===!0})},Xh=(t,e)=>{let n=t;const i=[];for(;n!=null;){if(i.indexOf(n)!==-1)return!1;i.push(n);const r=Vi(n);if(jc(n,r,n===t))return!1;if(Gi(n,e))return!0;n=r}return!1},vw=(t,e)=>t!=null&&Xh(t,e)?t[e]:void 0,_w=t=>{if(t==null||typeof t!="object"&&typeof t!="function")return t;const e=Vi(t);if(e===null&&xw(t))return t;const n=Object.create(null),i=Object.create(null),r=[];let s=t;for(;s!=null&&r.indexOf(s)===-1;){r.push(s);const a=s===t?e:Vi(s);if(jc(s,a,s===t))break;const l=Object.getOwnPropertyNames(s);Object.getOwnPropertySymbols&&l.push(...Object.getOwnPropertySymbols(s));for(const c of l)Pv(c)||Gi(i,c)||(n[c]=t[c],i[c]=!0);s=a}return n},$h=(t=>e=>{const n=gw.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Yn=t=>(t=t.toLowerCase(),e=>$h(e)===t),Hc=t=>e=>typeof e===t,{isArray:Zr}=Array,Qr=Hc("undefined");function ta(t){return t!==null&&!Qr(t)&&t.constructor!==null&&!Qr(t.constructor)&&Rn(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Dv=Yn("ArrayBuffer");function yw(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Dv(t.buffer),e}const Sw=Hc("string"),Rn=Hc("function"),bw=Hc("number"),na=t=>t!==null&&typeof t=="object",ww=t=>t===!0||t===!1,Ll=t=>{if(!na(t))return!1;const e=Vi(t);return(e===null||e===Object.prototype||Vi(e)===null)&&(jc(t,e,!0)||!Gi(t,Cv)&&!Gi(t,_o))},Mw=t=>{if(!na(t)||ta(t))return!1;try{return Object.keys(t).length===0&&Object.getPrototypeOf(t)===Object.prototype}catch{return!1}},Ew=Yn("Date"),Tw=Yn("File"),Aw=t=>!!(t&&typeof t.uri<"u"),Nw=t=>t&&typeof t.getParts<"u",Rw=Yn("Blob"),Cw=Yn("FileList"),Pw=Yn("Set"),Dw=t=>na(t)&&Rn(t.pipe);function Lw(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Hm=Lw(),Vm=typeof Hm.FormData<"u"?Hm.FormData:void 0,Iw=t=>{if(!t)return!1;if(Vm&&t instanceof Vm)return!0;const e=Vi(t);if(!e||e===Object.prototype||!Rn(t.append))return!1;const n=$h(t);return n==="formdata"||n==="object"&&Rn(t.toString)&&t.toString()==="[object FormData]"},Uw=Yn("URLSearchParams"),[Ow,Fw,kw,Bw]=["ReadableStream","Request","Response","Headers"].map(Yn),zw=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function yo(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let i,r;if(typeof t!="object"&&(t=[t]),Zr(t))for(i=0,r=t.length;i<r;i++)e.call(null,t[i],i,t);else{if(ta(t))return;const s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;let l;for(i=0;i<a;i++)l=s[i],e.call(null,t[l],l,t)}}function jw(t,e){if(ta(t))return null;e=e.toLowerCase();const n=Object.keys(t);let i=n.length,r;for(;i-- >0;)if(r=n[i],e===r.toLowerCase())return r;return null}const Hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Lv=t=>!Qr(t)&&t!==Hr;function ef(...t){const{caseless:e,skipUndefined:n}=Lv(this)&&this||{},i={},r=e?Object.create(null):null,s=(a,l)=>{if(l==="__proto__"||l==="constructor"||l==="prototype")return;let c=l;if(r&&typeof l=="string"){const f=l.toLowerCase(),m=r[f];m!==void 0&&Gi(i,m)?c=m:r[f]=l}const u=Gi(i,c)?i[c]:void 0;Ll(u)&&Ll(a)?i[c]=ef(u,a):Ll(a)?i[c]=ef({},a):Zr(a)?i[c]=a.slice():(!n||!Qr(a))&&(i[c]=a)};for(let a=0,l=t.length;a<l;a++){const c=t[a];if(!c||ta(c)||(yo(c,s),typeof c!="object"||Zr(c)||!Object.getOwnPropertySymbols))continue;const u=Object.getOwnPropertySymbols(c);for(let f=0;f<u.length;f++){const m=u[f];Jw.call(c,m)&&s(c[m],m)}}return i}const Hw=(t,e,n,{allOwnKeys:i}={})=>(yo(e,(r,s)=>{n&&Rn(r)?Object.defineProperty(t,s,{__proto__:null,value:Rv(r,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(t,s,{__proto__:null,value:r,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:i}),t),Vw=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),Gw=(t,e,n,i)=>{t.prototype=Object.create(e.prototype,i),Object.defineProperty(t.prototype,"constructor",{__proto__:null,value:t,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(t,"super",{__proto__:null,value:e.prototype}),n&&Object.assign(t.prototype,n)},Ww=(t,e,n,i)=>{let r,s,a;const l={};if(e=e||{},t==null)return e;do{for(r=Object.getOwnPropertyNames(t),s=r.length;s-- >0;)a=r[s],(!i||i(a,t,e))&&!l[a]&&(e[a]=t[a],l[a]=!0);t=n!==!1&&Vi(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},Xw=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const i=t.indexOf(e,n);return i!==-1&&i===n},$w=t=>{if(!t)return null;if(Zr(t))return t;let e=t.length;if(!Number.isSafeInteger(e)||e<0||e>4294967295)return null;const n=new Set,i=new Set;let r=t;for(;r!=null&&n.size<e;){if(i.has(r))return null;i.add(r);const a=Vi(r);if(jc(r,a,r===t))break;Object.getOwnPropertyNames(r).forEach(l=>{const c=+l;Number.isInteger(c)&&c>=0&&c<e&&String(c)===l&&Gi(r,l)&&n.add(c)}),r=a}if(n.size!==e)return null;const s=new Array(e);for(;e-- >0;)s[e]=t[e];return s},qw=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&Vi(Uint8Array)),Yw=(t,e)=>{const i=(t&&t[_o]).call(t);let r;for(;(r=i.next())&&!r.done;){const s=r.value;e.call(t,s[0],s[1])}},Kw=(t,e)=>{let n;const i=[];for(;(n=t.exec(e))!==null;)i.push(n);return i},Zw=Yn("HTMLFormElement"),Qw=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,i,r){return i.toUpperCase()+r}),{propertyIsEnumerable:Jw}=Object.prototype,eM=Yn("RegExp"),Iv=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),i={};yo(n,(r,s)=>{let a;(a=e(r,s,t))!==!1&&(i[s]=a||r)}),Object.defineProperties(t,i)},tM=t=>{Iv(t,(e,n)=>{if(Rn(t)&&["arguments","caller","callee"].includes(n))return!1;const i=t[n];if(Rn(i)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},nM=(t,e)=>{const n={},i=r=>{r.forEach(s=>{n[s]=!0})};return Zr(t)?i(t):i(String(t).split(e)),n},iM=()=>{},rM=(t,e)=>t!=null&&Number.isFinite(t=+t)?t:e;function sM(t){return!!(t&&Rn(t.append)&&t[Cv]==="FormData"&&t[_o])}const aM=t=>{const e=new WeakSet,n=i=>{if(na(i)){if(e.has(i))return;if(ta(i))return i;if(!("toJSON"in i)){e.add(i);let r;if(Pw(i)){r=[];for(const s of i){const a=n(s);!Qr(a)&&r.push(a)}}else r=Zr(i)?[]:{},yo(i,(s,a)=>{const l=n(s);!Qr(l)&&(r[a]=l)});return e.delete(i),r}}return i};return n(t)},oM=Yn("AsyncFunction"),lM=t=>t&&(na(t)||Rn(t))&&Rn(t.then)&&Rn(t.catch),Uv=((t,e)=>t?setImmediate:e?((n,i)=>(Hr.addEventListener("message",({source:r,data:s})=>{r===Hr&&s===n&&i.length&&i.shift()()},!1),r=>{i.push(r),Hr.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Rn(Hr.postMessage)),cM=typeof queueMicrotask<"u"?queueMicrotask.bind(Hr):typeof process<"u"&&process.nextTick||Uv,Ov=t=>t!=null&&Rn(t[_o]),uM=t=>t!=null&&Xh(t,_o)&&Ov(t),D={isArray:Zr,isArrayBuffer:Dv,isBuffer:ta,isFormData:Iw,isArrayBufferView:yw,isString:Sw,isNumber:bw,isBoolean:ww,isObject:na,isPlainObject:Ll,isEmptyObject:Mw,isReadableStream:Ow,isRequest:Fw,isResponse:kw,isHeaders:Bw,isUndefined:Qr,isDate:Ew,isFile:Tw,isReactNativeBlob:Aw,isReactNative:Nw,isBlob:Rw,isRegExp:eM,isFunction:Rn,isStream:Dw,isURLSearchParams:Uw,isTypedArray:qw,isFileList:Cw,forEach:yo,merge:ef,extend:Hw,trim:zw,stripBOM:Vw,inherits:Gw,toFlatObject:Ww,kindOf:$h,kindOfTest:Yn,endsWith:Xw,toArray:$w,forEachEntry:Yw,matchAll:Kw,isHTMLForm:Zw,hasOwnProperty:Gi,hasOwnProp:Gi,hasOwnInPrototypeChain:Xh,getSafeProp:vw,toSafeFlatObject:_w,reduceDescriptors:Iv,freezeMethods:tM,toObjectSet:nM,toCamelCase:Qw,noop:iM,toFiniteNumber:rM,findKey:jw,global:Hr,isContextDefined:Lv,isSpecCompliantForm:sM,toJSONObject:aM,isAsyncFn:oM,isThenable:lM,setImmediate:Uv,asap:cM,isIterable:Ov,isSafeIterable:uM},dM=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),fM=t=>{const e=Object.create(null);let n,i,r;return t&&t.split(`
`).forEach(function(a){r=a.indexOf(":"),n=a.substring(0,r).trim().toLowerCase(),i=a.substring(r+1).trim();const l=D.hasOwnProp(e,n);!n||l&&D.hasOwnProp(dM,n)||(n==="set-cookie"?l?e[n].push(i):e[n]=[i]:e[n]=l?e[n]+", "+i:i)}),e};function hM(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}const pM=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),mM=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function qh(t,e){return D.isArray(t)?t.map(n=>qh(n,e)):hM(String(t).replace(e,""))}const gM=t=>qh(t,pM),xM=t=>qh(t,mM);function Fv(t){const e=Object.create(null);return D.forEach(t.toJSON(),(n,i)=>{e[i]=xM(n)}),e}const Gm=Symbol("internals");function ga(t){return t&&String(t).trim().toLowerCase()}function Il(t){return t===!1||t==null?t:D.isArray(t)?t.map(Il):gM(String(t))}function vM(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let i;for(;i=n.exec(t);)e[i[1]]=i[2];return e}const _M=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/;function Mu(t){let e=0,n=t.length;for(;e<n;){const i=t.charCodeAt(e);if(i!==9&&i!==32)break;e+=1}for(;n>e;){const i=t.charCodeAt(n-1);if(i!==9&&i!==32)break;n-=1}return e===0&&n===t.length?t:t.slice(e,n)}function yM(t){const e=t.length-1;if(e<1||t.charCodeAt(0)!==34||t.charCodeAt(e)!==34)return t;let n="";for(let i=1;i<e;i++){const r=t.charCodeAt(i);if(r===34||r===92&&(i+=1,i>=e))return t;n+=t[i]}return n}function SM(t){const e=Object.create(null),n=String(t);let i=0,r=!1,s=!1;function a(l){const c=Mu(n.slice(i,l)),u=c.indexOf("=");if(u<1)return;const f=Mu(c.slice(0,u));if(!_M.test(f))return;const m=f.toLowerCase();if(m==="__proto__"||m==="constructor"||m==="prototype")return;const h=Mu(c.slice(u+1));e[m]=yM(h)}for(let l=0;l<n.length;l++){const c=n.charCodeAt(l);r?s?s=!1:c===92?s=!0:c===34&&(r=!1):c===34?r=!0:(c===44||c===59)&&(a(l),i=l+1)}return a(n.length),e}const bM=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim()),wM="__Proto__",Wm=t=>t==="__proto__"?wM:t;function Eu(t,e,n,i,r){if(D.isFunction(i))return i.call(t,e,n);if(r&&(e=n),!!D.isString(e)){if(D.isString(i))return e.indexOf(i)!==-1;if(D.isRegExp(i))return i.test(e)}}function MM(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,i)=>n.toUpperCase()+i)}function EM(t,e){const n=D.toCamelCase(" "+e);["get","set","has"].forEach(i=>{Object.defineProperty(t,i+n,{__proto__:null,value:function(r,s,a){return this[i].call(this,e,r,s,a)},configurable:!0})})}let Wt=class{constructor(e){e&&this.set(e)}set(e,n,i){const r=this;function s(l,c,u){const f=ga(c);if(!f)return;const m=D.findKey(r,f);(!m||r[m]===void 0||u===!0||u===void 0&&r[m]!==!1)&&(r[Wm(m||c)]=Il(l))}const a=(l,c)=>D.forEach(l,(u,f)=>s(u,f,c));if(D.isPlainObject(e)||e instanceof this.constructor)a(e,n);else if(D.isString(e)&&(e=e.trim())&&!bM(e))a(fM(e),n);else if(D.isObject(e)&&D.isSafeIterable(e)){let l=Object.create(null),c,u;for(const f of e){if(!D.isArray(f))throw new TypeError("Object iterator must return a key-value pair");u=f[0],D.hasOwnProp(l,u)?(c=l[u],l[u]=D.isArray(c)?[...c,f[1]]:[c,f[1]]):l[u]=f[1]}a(l,n)}else e!=null&&s(n,e,i);return this}get(e,n){if(e=ga(e),e){const i=D.findKey(this,e);if(i){const r=this[i];if(!n)return r;if(n===!0)return vM(r);if(D.isFunction(n))return n.call(this,r,i);if(D.isRegExp(n))return n.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=ga(e),e){const i=D.findKey(this,e);return!!(i&&this[i]!==void 0&&(!n||Eu(this,this[i],i,n)))}return!1}delete(e,n){const i=this;let r=!1;function s(a){if(a=ga(a),a){const l=D.findKey(i,a);l&&(!n||Eu(i,i[l],l,n))&&(delete i[l],r=!0)}}return D.isArray(e)?e.forEach(s):s(e),r}clear(e){const n=Object.keys(this);let i=n.length,r=!1;for(;i--;){const s=n[i];(!e||Eu(this,this[s],s,e,!0))&&(delete this[s],r=!0)}return r}normalize(e){const n=this,i=Object.create(null);return D.forEach(this,(r,s)=>{const a=D.findKey(i,s);if(a){n[a]=Il(r),delete n[s];return}const l=Wm(e?MM(s):String(s).trim());l!==s&&delete n[s],n[l]=Il(r),i[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return D.forEach(this,(i,r)=>{i!=null&&i!==!1&&(n[r]=e&&D.isArray(i)?i.join(", "):i)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}getSetCookie(){const e=this.get("set-cookie");return D.isArray(e)?e:e==null||e===!1?[]:[e]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static parseParameters(e){return SM(e)}static concat(e,...n){const i=new this(e);return n.forEach(r=>i.set(r)),i}static accessor(e){const i=(this[Gm]=this[Gm]={accessors:{}}).accessors,r=this.prototype;function s(a){const l=ga(a);i[l]||(EM(r,a),i[l]=!0)}return D.isArray(e)?e.forEach(s):s(e),this}};Wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(Wt.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(i){this[n]=i}}});D.freezeMethods(Wt);const mc="[REDACTED ****]";function TM(t){if(D.hasOwnProp(t,"toJSON"))return!0;let e=Object.getPrototypeOf(t);for(;e&&e!==Object.prototype;){if(D.hasOwnProp(e,"toJSON"))return!0;e=Object.getPrototypeOf(e)}return!1}function AM(t,e){const n=new Set(e.map(s=>String(s).toLowerCase())),i=[],r=s=>{if(s===null||typeof s!="object"||D.isBuffer(s))return s;if(i.indexOf(s)!==-1)return;s instanceof Wt&&(s=s.toJSON()),i.push(s);let a;if(D.isArray(s))a=[],s.forEach((l,c)=>{const u=r(l);D.isUndefined(u)||(a[c]=u)});else{if(!D.isPlainObject(s)&&TM(s))return i.pop(),s;a=Object.create(null);for(const[l,c]of Object.entries(s)){const u=n.has(l.toLowerCase())?mc:r(c);D.isUndefined(u)||(a[l]=u)}}return i.pop(),a};return r(t)}function Xm(t){try{return String(t)}catch{return""}}function NM(t){return t.errors.map(n=>{try{return n&&n.message?Xm(n.message):Xm(n)}catch{return""}}).filter(Boolean).join("; ")||t.name||"AggregateError"}const RM=`
Caused by: `,tf=Symbol("causeStack");function CM(t,e){const n=D.hasOwnProp(t,tf)&&t[tf];return n&&e.endsWith(n)?e.length-n.length:-1}function PM(t,e){try{const n=e&&e.stack;if(typeof n!="string"||!n)return;const i=t.stack;if(typeof i!="string"||!i)return;const r=RM+n;t.stack=i+r,Object.defineProperty(t,tf,{__proto__:null,value:r})}catch{}}let he=class kv extends Error{static from(e,n,i,r,s,a){let l=e.message;!l&&D.isArray(e.errors)&&e.errors.length&&(l=NM(e));const c=new kv(l,n||e.code,i,r,s);return Object.defineProperty(c,"cause",{__proto__:null,value:e,writable:!0,enumerable:!1,configurable:!0}),c.name=e.name,PM(c,e),e.status!=null&&c.status==null&&(c.status=e.status),a&&Object.assign(c,a),c}constructor(e,n,i,r,s){super(e),Object.defineProperty(this,"message",{__proto__:null,value:e,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),i&&(this.config=i),r&&(this.request=r),s&&(this.response=s,this.status=s.status)}toJSON(){const e=this.config,n=e&&D.hasOwnProp(e,"redact")?e.redact:void 0,i=D.isArray(n)&&n.length>0?AM(e,n):D.toJSONObject(e);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i,code:this.code,status:this.status}}};he.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";he.ERR_BAD_OPTION="ERR_BAD_OPTION";he.ECONNABORTED="ECONNABORTED";he.ETIMEDOUT="ETIMEDOUT";he.ECONNREFUSED="ECONNREFUSED";he.ERR_NETWORK="ERR_NETWORK";he.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";he.ERR_DEPRECATED="ERR_DEPRECATED";he.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";he.ERR_BAD_REQUEST="ERR_BAD_REQUEST";he.ERR_CANCELED="ERR_CANCELED";he.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";he.ERR_INVALID_URL="ERR_INVALID_URL";he.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const DM=null,Bv=100;function nf(t){return D.isPlainObject(t)||D.isArray(t)}function zv(t){return D.endsWith(t,"[]")?t.slice(0,-2):t}function Tu(t,e,n){return t?t.concat(e).map(function(r,s){return r=zv(r),!n&&s?"["+r+"]":r}).join(n?".":""):e}function LM(t){return D.isArray(t)&&!t.some(nf)}const IM=D.toFlatObject(D,{},null,function(e){return/^is[A-Z]/.test(e)});function Vc(t,e,n){if(!D.isObject(t))throw new TypeError("target must be an object");e=e||new FormData;const i=(p,y)=>{const S=D.getSafeProp(n,p);return D.isUndefined(S)?y:S},r=i("metaTokens",!0),s=i("visitor")||b,a=i("dots",!1),l=i("indexes",!1),c=i("Blob")||typeof Blob<"u"&&Blob,u=i("maxDepth",Bv),f=c&&D.isSpecCompliantForm(e),m=[];if(!D.isFunction(s))throw new TypeError("visitor must be a function");function h(p){if(p===null)return"";if(D.isDate(p))return p.toISOString();if(D.isBoolean(p))return p.toString();if(!f&&D.isBlob(p))throw new he("Blob is not supported. Use a Buffer instead.");if(D.isArrayBuffer(p)||D.isTypedArray(p)){if(f&&typeof c=="function")return new c([p]);throw new he("Blob is not supported. Use a Buffer instead.",he.ERR_NOT_SUPPORT)}return p}function g(p){if(p>u)throw new he("Object is too deeply nested ("+p+" levels). Max depth: "+u,he.ERR_FORM_DATA_DEPTH_EXCEEDED)}function _(p,y){if(u===1/0)return JSON.stringify(p);const S=[];return JSON.stringify(p,function(T,v){if(!D.isObject(v))return v;for(;S.length&&S[S.length-1]!==this;)S.pop();return S.push(v),g(y+S.length-1),v})}function b(p,y,S){let A=p;if(D.isReactNative(e)&&D.isReactNativeBlob(p))return e.append(Tu(S,y,a),h(p)),!1;if(p&&!S&&typeof p=="object"){if(D.endsWith(y,"{}"))y=r?y:y.slice(0,-2),p=_(p,1);else if(D.isArray(p)&&LM(p)||(D.isFileList(p)||D.endsWith(y,"[]"))&&(A=D.toArray(p)))return y=zv(y),A.forEach(function(v,w){!(D.isUndefined(v)||v===null)&&e.append(l===!0?Tu([y],w,a):l===null?y:y+"[]",h(v))}),!1}return nf(p)?!0:(e.append(Tu(S,y,a),h(p)),!1)}const x=Object.assign(IM,{defaultVisitor:b,convertValue:h,isVisitable:nf});function d(p,y,S=0){if(!D.isUndefined(p)){if(g(S),m.indexOf(p)!==-1)throw new Error("Circular reference detected in "+y.join("."));m.push(p),D.forEach(p,function(T,v){(!(D.isUndefined(T)||T===null)&&s.call(e,T,D.isString(v)?v.trim():v,y,x))===!0&&d(T,y?y.concat(v):[v],S+1)}),m.pop()}}if(!D.isObject(t))throw new TypeError("data must be an object");return d(t),e}function $m(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(t).replace(/[!'()~]|%20/g,function(i){return e[i]})}function Yh(t,e){this._pairs=[],t&&Vc(t,this,e)}const jv=Yh.prototype;jv.append=function(e,n){this._pairs.push([e,n])};jv.toString=function(e){const n=e?i=>e.call(this,i,$m):$m;return this._pairs.map(function(r){return n(r[0])+"="+n(r[1])},"").join("&")};function UM(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Hv(t,e,n){if(!e)return t;t=t||"";const i=D.isFunction(n)?{serialize:n}:n,r=D.getSafeProp(i,"encode")||UM,s=D.getSafeProp(i,"serialize");let a;if(s?a=s(e,i):a=D.isURLSearchParams(e)?e.toString():new Yh(e,i).toString(r),a){const l=t.indexOf("#");l!==-1&&(t=t.slice(0,l)),t+=(t.indexOf("?")===-1?"?":"&")+a}return t}const xa=Symbol("internals");function Vv(t){return t?t.length:0}function qm(t){if(t)for(;t.length&&t[t.length-1]===null;)t.pop()}function OM(t){return typeof t=="string"&&t!==""&&String(Number(t))===t?Number(t):t}function va(t,e){const n=t.handlers,i=Vv(n);n!==e.handlersRef?(e.handlersRef=n,e.handlerEntries.clear()):i!==e.handlersLength&&(i?e.handlerEntries.forEach(function(s,a){n[s.index]!==s.handler&&e.handlerEntries.delete(a)}):e.handlerEntries.clear()),e.handlersLength=i}class Ym{constructor(){this.handlers=[],this[xa]={handlersRef:this.handlers,handlersLength:this.handlers.length,handlerEntries:new Map,iterationDepth:0,nextId:0}}use(e,n,i){const r={fulfilled:e,rejected:n,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null},s=this[xa];this.handlers==null&&(this.handlers=[]),va(this,s);const a=s.nextId++;return this.handlers.push(r),s.handlerEntries.set(a,{handler:r,index:this.handlers.length-1}),s.handlersLength=this.handlers.length,a}eject(e){const n=this[xa];va(this,n);const i=OM(e),r=n.handlerEntries.get(i);if(r){if(n.handlerEntries.delete(i),this.handlers[r.index]!==r.handler)return;this.handlers[r.index]=null,n.iterationDepth||(qm(this.handlers),n.handlersLength=this.handlers.length)}}clear(){this.handlers&&(this.handlers=[],va(this,this[xa]))}forEach(e){const n=this[xa];va(this,n),n.iterationDepth++;try{D.forEach(this.handlers,function(r){r!==null&&e(r)})}finally{--n.iterationDepth||(va(this,n),qm(this.handlers),n.handlersLength=Vv(this.handlers))}}}const Kh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0,encodeBasicAuthUsername:!1},FM=typeof URLSearchParams<"u"?URLSearchParams:Yh,kM=typeof FormData<"u"?FormData:null,BM=typeof Blob<"u"?Blob:null,zM={isBrowser:!0,classes:{URLSearchParams:FM,FormData:kM,Blob:BM},protocols:["http","https","file","blob","url","data"]},Zh=typeof window<"u"&&typeof document<"u",rf=typeof navigator=="object"&&navigator||void 0,jM=Zh&&(!rf||["ReactNative","NativeScript","NS"].indexOf(rf.product)<0),HM=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",VM=Zh&&window.location.href||"http://localhost",GM=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Zh,hasStandardBrowserEnv:jM,hasStandardBrowserWebWorkerEnv:HM,navigator:rf,origin:VM},Symbol.toStringTag,{value:"Module"})),Ht={...GM,...zM};function WM(t,e){return Vc(t,new Ht.classes.URLSearchParams,{visitor:function(n,i,r,s){return Ht.isNode&&D.isBuffer(n)?(this.append(i,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)},...e})}const Km=Bv;function Gv(t){if(t>Km)throw new he("FormData field is too deeply nested ("+t+" levels). Max depth: "+Km,he.ERR_FORM_DATA_DEPTH_EXCEEDED)}function XM(t){const e=[],n=/[^.[\]]+|\[([^.[\]]*)]/g;let i;for(;(i=n.exec(t))!==null;)Gv(e.length),e.push(i[0]==="[]"?"":i[1]||i[0]);return e}function Wv(t){const e={},n=Object.keys(t);let i;const r=n.length;let s;for(i=0;i<r;i++)s=n[i],e[s]=t[s];return e}function Xv(t){if(!D.isArray(t))return t;const e=Object.keys(t);return e.length!==t.length||e.some((n,i)=>n!==String(i))?Wv(t):t}function $M(t){const e=[t];for(;e.length;){const n=e.pop();Object.keys(n).forEach(i=>{const r=n[i]=Xv(n[i]);(D.isArray(r)||D.isPlainObject(r))&&e.push(r)})}return t}function $v(t){function e(n,i,r,s){Gv(s);let a=n[s++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=s>=n.length;return a=!a&&D.isArray(r)?r.length:a,c?(D.hasOwnProp(r,a)?(r[a]=Xv(r[a]),r[a]=D.isArray(r[a])?r[a].concat(i):[r[a],i]):r[a]=i,!l):((!D.hasOwnProp(r,a)||!D.isObject(r[a]))&&(r[a]=[]),e(n,i,r[a],s)&&D.isArray(r[a])&&(r[a]=Wv(r[a])),!l)}if(D.isFormData(t)&&D.isFunction(t.entries)){const n={};return D.forEachEntry(t,(i,r)=>{e(XM(i),r,n,0)}),$M(n)}return null}const qv=Object.freeze(["get","delete","head","options","post","put","patch","purge","link","unlink","query"]),os=(t,e)=>t!=null&&D.hasOwnProp(t,e)?t[e]:void 0;function qM(t,e,n){if(D.isString(t))try{return(e||JSON.parse)(t),D.trim(t)}catch(i){if(i.name!=="SyntaxError")throw i}return(n||JSON.stringify)(t)}const So={transitional:Kh,adapter:["xhr","http","fetch"],transformRequest:[function(e,n){const i=n.getContentType()||"",r=i.indexOf("application/json")>-1,s=D.isObject(e);if(s&&D.isHTMLForm(e)&&(e=new FormData(e)),D.isFormData(e))return r?JSON.stringify($v(e)):e;if(D.isArrayBuffer(e)||D.isBuffer(e)||D.isStream(e)||D.isFile(e)||D.isBlob(e)||D.isReadableStream(e))return e;if(D.isArrayBufferView(e))return e.buffer;if(D.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){const c=os(this,"formSerializer");if(i.indexOf("application/x-www-form-urlencoded")>-1)return WM(e,c).toString();if((l=D.isFileList(e))||i.indexOf("multipart/form-data")>-1){const u=os(this,"env"),f=u&&u.FormData;return Vc(l?{"files[]":e}:e,f&&new f,c)}}return s||r?(n.setContentType("application/json",!1),qM(e)):e}],transformResponse:[function(e){const n=os(this,"transitional")||So.transitional,i=n&&n.forcedJSONParsing,r=os(this,"responseType"),s=r==="json";if(D.isResponse(e)||D.isReadableStream(e))return e;if(e&&D.isString(e)&&(i&&!r||s)){const l=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e,os(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?he.from(c,he.ERR_BAD_RESPONSE,this,null,os(this,"response")):c}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(qv,t=>{So.headers[t]={}});function Au(t,e){const n=this||So,i=e||n,r=Wt.from(i.headers);let s=i.data;return D.forEach(t,function(l){s=l.call(n,s,r.normalize(),e?e.status:void 0)}),r.normalize(),s}function Yv(t){return!!(t&&t.__CANCEL__)}let bo=class extends he{constructor(e,n,i){super(e??"canceled",he.ERR_CANCELED,n,i),this.name="CanceledError",this.__CANCEL__=!0}};function Kv(t,e,n){const i=n.config.validateStatus;!n.status||!i||i(n.status)?t(n):e(new he("Request failed with status code "+n.status,n.status>=400&&n.status<500?he.ERR_BAD_REQUEST:he.ERR_BAD_RESPONSE,n.config,n.request,n))}const YM=/[\t\n\r]/g;function Zv(t){if(typeof t!="string")return t;let e=0;for(;e<t.length&&t.charCodeAt(e)<=32;)e++;return t.slice(e).replace(YM,"")}function Nu(t){const e=/^([-+\w]{1,25}):(?:\/\/)?/.exec(t);return e&&e[1].toLowerCase()||""}const Zm=t=>{try{return decodeURIComponent(t)}catch{return t}},Qv=Ht.hasStandardBrowserEnv?{write(t,e,n,i,r,s,a){if(typeof document>"u")return;const l=[`${t}=${encodeURIComponent(e)}`];D.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),D.isString(i)&&l.push(`path=${i}`),D.isString(r)&&l.push(`domain=${r}`),s===!0&&l.push("secure"),D.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(t){if(typeof document>"u")return null;const e=document.cookie;if(!e)return null;const n=e.split(";");for(let i=0;i<n.length;i++){const r=n[i].replace(/^\s+/,""),s=r.indexOf("=");if(s!==-1&&r.slice(0,s)===t)return Zm(r.slice(s+1))}return null},async readAsync(t){try{const e=typeof window<"u"&&window.cookieStore;if(e&&D.isFunction(e.get)){const n=await e.get(t);return n?Zm(n.value):null}}catch{}return this.read(t)},remove(t){this.write(t,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},async readAsync(){return null},remove(){}};function KM(t,e){t=t||10;const n=new Array(t),i=new Array(t);let r=0,s=0,a;return e=e!==void 0?e:1e3,function(c){const u=Date.now(),f=i[s];a||(a=u),n[r]=c,i[r]=u;let m=s,h=0;for(;m!==r;)h+=n[m++],m=m%t;if(r=(r+1)%t,r===s&&(s=(s+1)%t),u-a<e)return;const g=f&&u-f;return g?Math.round(h*1e3/g):void 0}}function ZM(t,e){let n=0,i=1e3/e,r,s;const a=(f,m=Date.now())=>{n=m,r=null,s&&(clearTimeout(s),s=null),t(...f)};return[(...f)=>{const m=Date.now(),h=m-n;h>=i?a(f,m):(r=f,s||(s=setTimeout(()=>{s=null,a(r)},i-h)))},()=>r&&a(r),(...f)=>a(f)]}const gc=(t,e,n=3)=>{let i=0;const r=KM(50,250);return ZM(s=>{if(!s||!D.isNumber(s.loaded))return;const a=s.loaded,l=s.lengthComputable?s.total:void 0,c=Math.max(0,l!=null?Math.min(a,l):a),u=Math.max(0,c-i),f=r(u);i=Math.max(i,c);const m={loaded:c,total:l,progress:l?c/l:void 0,bytes:u,rate:f||void 0,estimated:f&&l?(l-c)/f:void 0,event:s,lengthComputable:l!=null,[e?"download":"upload"]:!0};t(m)},n)},Qm=(t,e)=>{const n=t!=null;return[i=>e[0]({lengthComputable:n,total:t,loaded:i}),e[1]]},Jm=(t,e=D.asap)=>(...n)=>e(()=>t(...n)),QM=Ht.hasStandardBrowserEnv?(t=>e=>(e=new URL(e,document.baseURI||Ht.origin),t.protocol===e.protocol&&t.host===e.host&&t.port===e.port))(new URL(Ht.origin)):()=>!0;function JM(t){return typeof t!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function eE(t,e){if(!e)return t;let n=t.length;for(;n>0&&t.charCodeAt(n-1)===47;)n--;return t.slice(0,n)+"/"+e.replace(/^\/+/,"")}const tE=/^https?:(?!\/\/)/i;function nE(t){return t&&t.replace(/(^|&)([^=&]*=)?[^&]+/g,(e,n,i="")=>`${n}${i}${mc}`)}function iE(t){const e=t.replace(/^(https?:\/{0,2})[^/?#]*@/i,`$1${mc}@`),n=e.indexOf("#"),r=(n===-1?e:e.slice(0,n)).replace(/([?&][^=&#]*=)[^&#]*/g,`$1${mc}`);return n===-1?r:`${r}#${nE(e.slice(n+1))}`}function e0(t,e){if(typeof t=="string"){const n=Zv(t);if(tE.test(n))throw new he(`Invalid URL ${JSON.stringify(iE(n))}: missing "//" after protocol`,he.ERR_INVALID_URL,e)}}function Jv(t,e,n,i){e0(e,i);let r=!JM(e);return t&&(r||n===!1)?(e0(t,i),eE(t,e)):e}function rE(t){const e=[{value:t}],n=new WeakSet,i=new WeakSet;for(;e.length;){const{value:r,done:s}=e.pop();if(!D.isPlainObject(r)&&!D.isArray(r))continue;if(s){n.delete(r);continue}if(n.has(r))throw new he("Circular reference detected in params",he.ERR_BAD_OPTION_VALUE);if(i.has(r))continue;i.add(r),n.add(r),e.push({value:r,done:!0});const a=Object.keys(r);Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertySymbols(r).forEach(l=>{const c=Object.getOwnPropertyDescriptor(r,l);c&&c.enumerable&&a.push(l)}),a.forEach(l=>{if(l==="__proto__"||l==="constructor"||l==="prototype"){const c=Object.getOwnPropertyDescriptor(r,l);c&&D.hasOwnProp(c,"value")&&e.push({value:c.value})}else e.push({value:r[l]})})}}const t0=t=>t instanceof Wt?{...t}:t,sf=t=>Object.getOwnPropertySymbols&&Object.getOwnPropertyDescriptor?Object.keys(t).concat(Object.getOwnPropertySymbols(t).filter(e=>{const n=Object.getOwnPropertyDescriptor(t,e);return n&&n.enumerable})):Object.keys(t);function sE(t,e){const n=[],i=new WeakMap,r={};function s(l,c){if(!D.isPlainObject(c))return D.isArray(c)?c.slice():c;const u=D.isPlainObject(l)?l:r;let f=i.get(c);if(f||(f=new WeakMap,i.set(c,f)),f.has(u))return f.get(u);const m={};return f.set(u,m),n.push({base:u,source:c,result:m}),m}const a=D.isUndefined(e)?s(void 0,t):s(t,e);for(;n.length;){const{base:l,source:c,result:u}=n.pop(),f=new Set(sf(l)),m=new Set(sf(c));new Set([...f,...m]).forEach(g=>{if(g==="__proto__"||g==="constructor"||g==="prototype")return;const _=m.has(g),b=_?c[g]:void 0,x=(!_||D.isPlainObject(b))&&f.has(g)?l[g]:void 0;u[g]=_?s(x,b):s(void 0,x)})}return rE(a),a}function wr(t,e,n,i){return D.isPlainObject(t)&&D.isPlainObject(e)?D.merge.call({caseless:i},t,e):D.isPlainObject(e)?D.merge({},e):D.isArray(e)?e.slice():e}function e_(t,e,n,i){if(D.isUndefined(e)){if(!D.isUndefined(t))return wr(void 0,t,n,i)}else return wr(t,e,n,i)}function Ru(t,e){if(!D.isUndefined(e))return wr(void 0,e)}function wt(t,e){if(D.isUndefined(e)){if(!D.isUndefined(t))return wr(void 0,t)}else return wr(void 0,e)}function aE(t,e,n){const i=D.hasOwnProp(e,"transitional")?e.transitional:void 0;if(!D.isUndefined(i))if(D.isPlainObject(i)){if(D.hasOwnProp(i,n))return i[n]}else return;const r=D.hasOwnProp(t,"transitional")?t.transitional:void 0;if(D.isPlainObject(r)&&D.hasOwnProp(r,n))return r[n]}function af(t,e,n,i,r){if(D.hasOwnProp(r,n))return wr(t,e);if(D.hasOwnProp(i,n))return wr(void 0,t)}function oE(t,e,n){return e_(t0(t),t0(e),n,!0)}const lE=Object.freeze({__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0}),n0={url:Ru,method:Ru,data:Ru,baseURL:wt,transformRequest:wt,transformResponse:wt,params:sE,paramsSerializer:wt,timeout:wt,timeoutErrorMessage:wt,withCredentials:wt,withXSRFToken:wt,adapter:wt,responseType:wt,xsrfCookieName:wt,xsrfHeaderName:wt,onUploadProgress:wt,onDownloadProgress:wt,decompress:wt,maxContentLength:wt,maxBodyLength:wt,beforeRedirect:wt,transport:wt,httpAgent:wt,httpsAgent:wt,cancelToken:wt,socketPath:wt,allowedSocketPaths:wt,responseEncoding:wt,validateStatus:af,headers:oE};function Jr(t,e){t=t||{},e=e||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",lE);const i=sf({...t,...e});for(let r=0,s=i.length;r<s;r++){const a=i[r];if(a==="__proto__"||a==="constructor"||a==="prototype")continue;const l=D.hasOwnProp(n0,a)?n0[a]:e_,c=D.hasOwnProp(t,a)?t[a]:void 0,u=D.hasOwnProp(e,a)?e[a]:void 0,f=l===af?l(c,u,a,t,e):l(c,u,a);D.isUndefined(f)&&l!==af||(n[a]=f)}return D.hasOwnProp(e,"validateStatus")&&D.isUndefined(e.validateStatus)&&aE(t,e,"validateStatusUndefinedResolves")===!1&&(D.hasOwnProp(t,"validateStatus")?n.validateStatus=wr(void 0,t.validateStatus):delete n.validateStatus),n}const cE=["content-type","content-length"];function uE(t,e,n){if(n!=="content-only"){t.set(e);return}Object.entries(e||{}).forEach(([i,r])=>{cE.includes(i.toLowerCase())&&t.set(i,r)})}const i0=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),dE=t=>Qv.read(t);function t_(t,e=dE){const n=Jr({},t),i=g=>D.hasOwnProp(n,g)?n[g]:void 0,r=i("data");let s=i("withXSRFToken");const a=i("xsrfHeaderName"),l=i("xsrfCookieName");let c=i("headers");const u=i("auth"),f=i("baseURL"),m=i("allowAbsoluteUrls"),h=i("url");if(n.headers=c=Wt.from(c),n.url=Hv(Jv(f,h,m,n),i("params"),i("paramsSerializer")),u){const g=D.getSafeProp(u,"username")||"",_=D.getSafeProp(u,"password")||"",b=i("transitional"),x=b&&D.hasOwnProp(b,"encodeBasicAuthUsername")&&b.encodeBasicAuthUsername===!0;try{c.set("Authorization","Basic "+btoa((x?i0(g):g)+":"+(_?i0(_):"")))}catch(d){throw he.from(d,he.ERR_BAD_OPTION_VALUE,t)}}if(D.isFormData(r)){const g=D.getSafeProp(r,"getHeaders");Ht.hasStandardBrowserEnv||Ht.hasStandardBrowserWebWorkerEnv||D.isReactNative(r)?c.setContentType(void 0):D.isFunction(g)&&uE(c,g.call(r),i("formDataHeaderPolicy"))}if(Ht.hasStandardBrowserEnv&&(D.isFunction(s)&&(s=s(n)),s===!0||s==null&&QM(n.url))){const _=a&&l&&e(l);_&&c.set(a,_)}return n}const fE=typeof XMLHttpRequest<"u",hE=fE&&function(t){return new Promise(function(n,i){let r;try{const w=Ht.hasStandardBrowserEnv&&typeof window<"u"&&window.cookieStore;r=w&&D.isFunction(w.get)}catch{}let s;const a=t_(t,r?w=>(s=w,null):void 0);let l=a.data;const c=Wt.from(a.headers).normalize();let{responseType:u,onUploadProgress:f,onDownloadProgress:m}=a,h,g,_,b,x,d,p;function y(){clearTimeout(g);try{x&&x()}catch(w){setTimeout(()=>{throw w})}try{d&&d()}catch(w){setTimeout(()=>{throw w})}S&&(b&&S.removeEventListener("progress",b),S.upload&&(_&&S.upload.removeEventListener("progress",_),x&&S.upload.removeEventListener("loadend",x))),a.cancelToken&&a.cancelToken.unsubscribe(h),a.signal&&a.signal.removeEventListener("abort",h)}let S=new XMLHttpRequest;S.open(a.method.toUpperCase(),a.url,!0),S.timeout=a.timeout;function A(w){if(!S)return;if(S.status===0&&(Nu(Zv(a.url))||Nu(Ht.origin))!=="file"&&!(S.responseURL&&S.responseURL.startsWith("file:"))){i(new he("Request aborted",he.ECONNABORTED,t,S)),y(),S=null;return}try{w?p&&p(w):d&&d()}catch(V){setTimeout(()=>{throw V})}if(!S)return;const O=Wt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),U={data:!u||u==="text"||u==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:O,config:t,request:S};Kv(function(L){n(L),y()},function(L){i(L),y()},U),S=null}if("onloadend"in S?S.onloadend=A:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(A)},S.onabort=function(){S&&(i(new he("Request aborted",he.ECONNABORTED,t,S)),y(),S=null)},S.onerror=function(O){const P=O&&O.message?O.message:"Network Error",U=new he(P,he.ERR_NETWORK,t,S);U.event=O||null,i(U),y(),S=null},S.ontimeout=function(){if(!S)return;let O=a.timeout?"timeout of "+a.timeout+"ms exceeded":"timeout exceeded";const P=a.transitional||Kh;a.timeoutErrorMessage&&(O=a.timeoutErrorMessage),i(new he(O,P.clarifyTimeoutError?he.ETIMEDOUT:he.ECONNABORTED,t,S)),y(),S=null},l===void 0&&c.setContentType(null),D.isUndefined(a.withCredentials)||(S.withCredentials=!!a.withCredentials),u&&u!=="json"&&(S.responseType=a.responseType),m&&([b,d,p]=gc(m,!0),S.addEventListener("progress",b)),f&&S.upload&&([_,x]=gc(f),S.upload.addEventListener("progress",_),S.upload.addEventListener("loadend",x)),a.cancelToken||a.signal){if(h=w=>{if(!S)return;i(!w||w.type?new bo(null,t,S):w);const O=S;y(),S=null,O.abort()},a.cancelToken&&a.cancelToken.subscribe(h),!S)return;a.signal&&(a.signal.aborted?h():a.signal.addEventListener("abort",h))}if(!S)return;const T=Nu(a.url);if(T&&!Ht.protocols.includes(T)){i(new he("Unsupported protocol "+T+":",he.ERR_BAD_REQUEST,t)),y();return}const v=()=>{S&&("setRequestHeader"in S&&D.forEach(Fv(c),function(O,P){S.setRequestHeader(P,O)}),S.send(l||null))};if(s){const w=typeof performance<"u"&&D.isFunction(performance.now)?()=>performance.now():Date.now,O=S.timeout>0?w()+Number(S.timeout):void 0,P=()=>{if(!S)return;const U=S;U.ontimeout(),U.abort()};if(O!==void 0){const U=()=>{const V=O-w();V>0?g=setTimeout(U,Math.min(V,2147483647)):P()};U()}Qv.readAsync(s).then(U=>{if(S){if(O!==void 0&&w()>=O){P();return}if(U){const V=D.hasOwnProp(a,"xsrfHeaderName")&&a.xsrfHeaderName;c.set(V,U)}v()}}).catch(U=>{S&&(i(he.from(U,null,t,S)),y(),S=null)})}else v()})},pE=(t,e)=>{if(t=t?t.filter(Boolean):[],!e&&!t.length)return;const n=new AbortController;let i=!1;const r=function(c){if(!i){i=!0,a();const u=c instanceof Error?c:this.reason;n.abort(u instanceof he?u:new bo(u instanceof Error?u.message:u))}};let s=e&&setTimeout(()=>{s=null,r(new he(`timeout of ${e}ms exceeded`,he.ETIMEDOUT))},e);const a=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach(c=>{const u=D.getSafeProp(c,"unsubscribe");D.isFunction(u)?u.call(c,r):c.removeEventListener("abort",r)}),t=null)};t.forEach(c=>{if(!i){if(c.aborted){r.call(c);return}c.addEventListener("abort",r,{once:!0})}});const{signal:l}=n;return l.unsubscribe=()=>D.asap(a),l},mE=function*(t,e){let n=t.byteLength;if(n<e){yield t;return}let i=0,r;for(;i<n;)r=i+e,yield t.slice(i,r),i=r},gE=async function*(t,e){for await(const n of xE(t))yield*mE(n,e)},xE=async function*(t){if(t[Symbol.asyncIterator]){yield*t;return}const e=t.getReader();try{for(;;){const{done:n,value:i}=await e.read();if(n)break;yield i}}finally{await e.cancel()}},r0=(t,e,n,i)=>{const r=gE(t,e);let s=0,a,l=c=>{a||(a=!0,i&&i(c))};return new ReadableStream({async pull(c){try{const{done:u,value:f}=await r.next();if(u){l(),c.close();return}let m=f.byteLength;if(n){let h=s+=m;n(h)}c.enqueue(new Uint8Array(f))}catch(u){throw l(u),u}},cancel(c){return l(c),r.return()}},{highWaterMark:2})},er=`\r
`,s0=t=>String(t).replace(/\r\n|\r|\n/g,er),a0=t=>String(t).replace(/[\r\n"]/g,e=>e==="\r"?"%0D":e===`
`?"%0A":"%22"),_a=(t,e)=>{let n=0;for(let i=0;i<t.length;i++){const r=t.charCodeAt(i);e&&(r===13||r===10)?(r===13&&t.charCodeAt(i+1)===10&&i++,n+=2):r<128?n++:r<2048?n+=2:r>=55296&&r<=56319&&t.charCodeAt(i+1)>=56320&&t.charCodeAt(i+1)<=57343?(n+=4,i++):n+=3}return n};class Ul extends TypeError{constructor(e,n){super(e),this.name="FormDataError",this.reason=n}}function vE(t,e,n,i,r){if(!D.isFunction(e))throw new Ul("Blob is not supported","blob");if(!D.isString(r)||!/^[A-Za-z0-9'()+_,./:=? -]{1,70}$/.test(r)||/ $/.test(r))throw new Ul("Invalid multipart boundary","boundary");const s="--"+r+"--"+er;let a=s.length;const l=[],c=f=>{if(a+f>n)throw i()};c(0);for(const[f,m]of t){const h=D.isString(m),g=h?_a(m,!0):m.size;if(!Number.isFinite(g)||g<0)throw new Ul("Unsupported FormData part size","part");c(g+_a(f,!0)+(!h&&m.name?_a(m.name,!1):0)+(!h&&m.type?_a(m.type,!1):0));let _="--"+r+er+'Content-Disposition: form-data; name="'+a0(s0(f))+'"';h||(_+='; filename="'+a0(D.isString(m.name)?m.name:"blob")+'"'+er+"Content-Type: "+String(m.type||"application/octet-stream").replace(/[\r\n]/g,"")),_+=er+er;const b=_a(_,!1)+g+er.length;c(b),a+=b,l.push({header:_,value:m,isString:h})}const u=[];for(const f of l)u.push(f.header,f.isString?s0(f.value):f.value,er);return u.push(s),new e(u,{type:"multipart/form-data; boundary="+r})}function _E(t,e,n,i,r){if(!D.isFunction(e))throw new he("Blob is not supported",he.ERR_NOT_SUPPORT);if(r===void 0)if(D.isFunction(Ht.generateString))r="axios-"+Ht.generateString(36,"0123456789abcdef");else{const s=D.global.crypto;if(!s||!D.isFunction(s.getRandomValues))throw new he("Random byte generation is not supported",he.ERR_NOT_SUPPORT);const a=new Uint8Array(18);s.getRandomValues(a),r="axios-"+Array.from(a,l=>("0"+l.toString(16)).slice(-2)).join("")}try{return vE(t,e,n,i,r)}catch(s){if(s instanceof Ul){const a=s.reason==="boundary"?he.ERR_BAD_OPTION_VALUE:he.ERR_BAD_REQUEST;throw new he(s.message,a)}throw s}}const o0=t=>t>=48&&t<=57||t>=65&&t<=70||t>=97&&t<=102,n_=(t,e,n)=>e+2<n&&o0(t.charCodeAt(e+1))&&o0(t.charCodeAt(e+2)),l0=t=>t<=57?t-48:(t&223)-55,yE=t=>t>=65&&t<=90||t>=97&&t<=122||t>=48&&t<=57||t===43||t===47||t===45||t===95,SE=t=>t===9||t===10||t===12||t===13||t===32,bE=t=>{const e=Math.floor(t/4),n=t%4;return e*3+(n===2?1:n===3?2:0)},wE=t=>{const e=t.length;let n=0;return e>0&&t.charCodeAt(e-1)===61&&(n++,e>1&&t.charCodeAt(e-2)===61&&n++),Math.floor((e-n)*3/4)},ME=t=>{const e=t.length;let n=0,i=0,r=!1;for(let s=0;s<e;s++){let a=t.charCodeAt(s);if(a===37&&n_(t,s,e)&&(a=l0(t.charCodeAt(s+1))*16+l0(t.charCodeAt(s+2)),s+=2),!SE(a)){if(a===61){i++;continue}if(!yE(a)||i>0){r=!0;continue}n++}}return r||i>2||i>0&&(n+i)%4!==0||n%4===1?wE(t):bE(n)},EE=(t,e,n)=>{if(!t||typeof t!="string"||!/^data:/i.test(t))return 0;const i=t.indexOf(",");if(i<0)return 0;const r=t.slice(5,i),s=t.slice(i+1);if(n.test(r))return e(s);let l=0;for(let c=0,u=s.length;c<u;c++){const f=s.charCodeAt(c);if(f===37&&n_(s,c,u))l+=1,c+=2;else if(f<128)l+=1;else if(f<2048)l+=2;else if(f>=55296&&f<=56319&&c+1<u){const m=s.charCodeAt(c+1);m>=56320&&m<=57343?(l+=4,c++):l+=3}else l+=3}return l};function TE(t){const e=typeof t=="string"?t.indexOf("#"):-1;return EE(e===-1?t:t.slice(0,e),ME,/; *base64[\t\n\f\r ]*$/i)}const Qh="1.21.0",c0=64*1024,u0={cache:"default",redirect:"follow",referrer:"about:client",referrerPolicy:"",mode:"cors",integrity:"",keepalive:!1,priority:"auto",window:null},{isFunction:Wo}=D,AE=t=>encodeURIComponent(t).replace(/%([0-9A-F]{2})/gi,(e,n)=>String.fromCharCode(parseInt(n,16))),d0=t=>{if(!D.isString(t))return t;try{return decodeURIComponent(t)}catch{return t}},Xo=(t,...e)=>{try{return!!t(...e)}catch{return!1}},NE=t=>{const e=t.indexOf("://");let n=t;return e!==-1&&(n=n.slice(e+3)),n.includes("@")||n.includes(":")},RE=t=>{const e=D.global!==void 0&&D.global!==null?D.global:globalThis,{ReadableStream:n,TextEncoder:i}=e;t=D.merge.call({skipUndefined:!0},{Request:e.Request,Response:e.Response,Blob:e.Blob},t);const r=D.hasOwnProp(t,"fetch")?t.fetch:void 0,{Request:s,Response:a,Blob:l}=t,c=r?Wo(r):typeof fetch=="function",u=Wo(s),f=Wo(a);if(!c)return!1;const m=c&&Wo(n),h=c&&(typeof i=="function"?(y=>S=>y.encode(S))(new i):async y=>new Uint8Array(await new s(y).arrayBuffer())),g=u&&m&&Xo(()=>{let y=!1;const S=new s(Ht.origin,{body:new n,method:"POST",get duplex(){return y=!0,"half"}}),A=S.headers.has("Content-Type");return S.body!=null&&S.body.cancel(),y&&!A}),_=f&&m&&Xo(()=>D.isReadableStream(new a("").body)),b=Object.assign(Object.create(null),u0);u&&!Xo(()=>new s(Ht.origin,b))&&(delete b.cache,Xo(()=>new s(Ht.origin,b))||(b.cache=u0.cache));const x={stream:_&&(y=>y.body)};c&&["text","arrayBuffer","blob","formData","stream"].forEach(y=>{!x[y]&&(x[y]=(S,A)=>{let T=S&&S[y];if(T)return T.call(S);throw new he(`Response type '${y}' is not supported`,he.ERR_NOT_SUPPORT,A)})});const d=async y=>{if(y==null)return 0;if(D.isBlob(y))return y.size;if(D.isArrayBufferView(y)||D.isArrayBuffer(y))return y.byteLength;if(D.isURLSearchParams(y)&&(y=y+""),D.isString(y))return(await h(y)).byteLength},p=async(y,S)=>{const A=D.toFiniteNumber(y.getContentLength());return A??d(S)};return async y=>{let{url:S,method:A,data:T,signal:v,cancelToken:w,timeout:O,onDownloadProgress:P,onUploadProgress:U,responseType:V,headers:L,withCredentials:N="same-origin",fetchOptions:B,maxContentLength:H,maxBodyLength:j,maxRedirects:W}=t_(y);const z=D.isNumber(H)&&H>-1,G=D.isNumber(j)&&j>-1,J=Be=>D.hasOwnProp(y,Be)?y[Be]:void 0;let ue=r||fetch;V=V?(V+"").toLowerCase():"text";let Ae=pE([v,w&&w.toAbortSignal()],O),X=null;const oe=Ae&&Ae.unsubscribe&&(()=>{Ae.unsubscribe()});let me,Ne=null,ye=null;const je=()=>new he("Request body larger than maxBodyLength limit",he.ERR_BAD_REQUEST,y,X);try{let Be;const Ee=J("auth");if(Ee){const C=D.getSafeProp(Ee,"username")||"",be=D.getSafeProp(Ee,"password")||"";Be={username:C,password:be}}let Ge;if(NE(S)){if(Ge=new URL(S,Ht.origin),!Be&&(Ge.username||Ge.password)){const C=d0(Ge.username),be=d0(Ge.password);Be={username:C,password:be}}(Ge.username||Ge.password)&&(Ge.username="",Ge.password="",S=Ge.href)}if(Be&&(L.delete("authorization"),L.set("Authorization","Basic "+btoa(AE((Be.username||"")+":"+(Be.password||""))))),z&&Ge&&Ge.protocol==="data:"&&TE(Ge.href)>H)throw new he("maxContentLength size of "+H+" exceeded",he.ERR_BAD_RESPONSE,y,X);const Je=D.isSpecCompliantForm(T)&&Wt.from(J("headers")).getContentType();let We;if(D.isString(Je)&&/^multipart\/form-data(?:\s*;|$)/i.test(Je.trim())){const C=Wt.parseParameters(Je);D.hasOwnProp(C,"boundary")&&(We=C.boundary)}if(D.isSpecCompliantForm(T)&&A!=="get"&&A!=="head"&&(G||U&&g||We!==void 0)&&(T=_E(T,l,G?j:1/0,je,We),L.setContentType(We===void 0?T.type:Je),me=T.size),G&&A!=="get"&&A!=="head"){const C=await d(T);if(typeof C=="number"&&isFinite(C)&&(me=C,C>j))throw je()}const xt=G&&(D.isReadableStream(T)||D.isStream(T)),vt=(C,be,Re)=>r0(C,c0,Fe=>{if(G&&Fe>j)throw Ne=je();be&&be(Fe)},Re);if(g&&A!=="get"&&A!=="head"&&(U||xt)){if(me=me??await p(L,T),me!==0||xt){let C=new s(S,{method:"POST",body:T,duplex:"half"}),be;if(D.isFormData(T)&&(be=C.headers.get("content-type"))&&L.setContentType(be),C.body){const[Re,Fe]=U&&Qm(me,gc(Jm(U)))||[];T=vt(C.body,Re,Fe)}}}else if(xt&&!u&&m&&A!=="get"&&A!=="head")T=vt(T);else if(xt&&u&&!g&&A!=="get"&&A!=="head")throw new he("Stream request bodies are not supported by the current fetch implementation",he.ERR_NOT_SUPPORT,y,X);D.isString(N)||(N=N?"include":"omit");const Rt=u&&"credentials"in s.prototype;if(D.isFormData(T)){const C=L.getContentType();C&&/^multipart\/form-data/i.test(C)&&!/boundary=/i.test(C)&&L.delete("content-type")}L.set("User-Agent","axios/"+Qh,!1);const Ke=B==null?B:Object.assign(Object.create(null),B);Ke&&(delete Ke.body,delete Ke.headers,delete Ke.method,delete Ke.signal,delete Ke.duplex,delete Ke.credentials);const _t=Object.assign(Object.create(null),Ke,{signal:Ae,method:A.toUpperCase(),headers:Fv(L.normalize()),body:T,duplex:"half",credentials:Rt?N:void 0});u&&(D.forEach(b,(C,be)=>{_t[be]===void 0&&(_t[be]=C)}),_t.signal===void 0&&(_t.signal=null),_t.body===void 0&&(_t.body=null)),W===0&&(_t.redirect="manual",Ke&&(Ke.redirect="manual")),X=u&&new s(S,_t);let ot=await(u?ue(X,Ke):ue(S,_t));const Ut=Wt.from(ot.headers);if(z){const C=D.toFiniteNumber(Ut.getContentLength());if(C!=null&&C>H)throw new he("maxContentLength size of "+H+" exceeded",he.ERR_BAD_RESPONSE,y,X)}const ie=_&&(V==="stream"||V==="response");if(_&&ot.body&&(P||z||ie&&oe)){const C={};["status","statusText","headers"].forEach(Oe=>{C[Oe]=ot[Oe]});const be=D.toFiniteNumber(Ut.getContentLength()),[Re,Fe]=P&&Qm(be,gc(Jm(P),!0))||[];let pe=0;const Tt=Oe=>{if(z&&(pe=Oe,pe>H))throw ye=new he("maxContentLength size of "+H+" exceeded",he.ERR_BAD_RESPONSE,y,X);Re&&Re(Oe)};ot=new a(r0(ot.body,c0,Tt,()=>{Fe&&Fe(),oe&&oe()}),C)}V=V||"text";let Pe=await x[D.findKey(x,V)||"text"](ot,y);if(z&&!_&&!ie){let C;if(Pe!=null&&(typeof Pe.byteLength=="number"?C=Pe.byteLength:typeof Pe.size=="number"?C=Pe.size:typeof Pe=="string"&&(C=typeof i=="function"?new i().encode(Pe).byteLength:Pe.length)),typeof C=="number"&&C>H)throw new he("maxContentLength size of "+H+" exceeded",he.ERR_BAD_RESPONSE,y,X)}return!ie&&oe&&oe(),await new Promise((C,be)=>{Kv(C,be,{data:Pe,headers:Wt.from(ot.headers),status:ot.status,statusText:ot.statusText,config:y,request:X})})}catch(Be){if(oe&&oe(),Ae&&Ae.aborted&&Ae.reason instanceof he){const Ee=Ae.reason;throw Ee.config=y,X&&(Ee.request=X),Be!==Ee&&Object.defineProperty(Ee,"cause",{__proto__:null,value:Be,writable:!0,enumerable:!1,configurable:!0}),Ee}if(Ne)throw X&&!Ne.request&&(Ne.request=X),Ne;if(ye)throw ye;if(Be instanceof he)throw X&&!Be.request&&(Be.request=X),Be;if(Be&&Be.name==="TypeError"&&/Load failed|fetch/i.test(Be.message)){const Ee=new he("Network Error",he.ERR_NETWORK,y,X,Be&&Be.response);throw Object.defineProperty(Ee,"cause",{__proto__:null,value:Be.cause||Be,writable:!0,enumerable:!1,configurable:!0}),Ee}throw he.from(Be,Be&&Be.code,y,X,Be&&Be.response)}}},CE=new Map,i_=t=>{const e=Object.create(null),n=t&&D.hasOwnProp(t,"env")&&t.env;["fetch","Request","Response","Blob"].forEach(g=>{n&&D.hasOwnProp(n,g)&&(e[g]=n[g])});const{fetch:i,Request:r,Response:s,Blob:a}=e,l=[r,s,i,a];let c=l.length,u=c,f,m,h=CE;for(;u--;)f=l[u],m=h.get(f),m===void 0&&h.set(f,m=u?new Map:RE(e)),h=m;return m};i_();const Jh={http:DM,xhr:hE,fetch:{get:i_}};D.forEach(Jh,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{__proto__:null,value:e})}catch{}Object.defineProperty(t,"adapterName",{__proto__:null,value:e})}});const f0=t=>`- ${t}`,PE=t=>D.isFunction(t)||t===null||t===!1;function DE(t,e){t=D.isArray(t)?t:[t];const{length:n}=t;let i,r;const s={};for(let a=0;a<n;a++){i=t[a];let l;if(r=i,!PE(i)&&(r=Jh[(l=String(i)).toLowerCase()],r===void 0))throw new he(`Unknown adapter '${l}'`);if(r&&(D.isFunction(r)||(r=r.get(e))))break;s[l||"#"+a]=r}if(!r){const a=Object.entries(s).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=n?a.length>1?`since :
`+a.map(f0).join(`
`):" "+f0(a[0]):"as no adapter specified";throw new he("There is no suitable adapter to dispatch the request "+l,he.ERR_NOT_SUPPORT)}return r}const r_={getAdapter:DE,adapters:Jh};function Cu(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new bo(null,t)}function h0(t){return Math.max(0,Date.now()-t)}function Pu(t){const e=D.toSafeFlatObject(t);Cu(e),e.headers=Wt.from(D.getSafeProp(e,"headers")),e.data=Au.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const n=r_.getAdapter(e.adapter||So.adapter,e),i=Date.now();return n(e).then(function(s){Cu(e),s.duration=h0(i),e.response=s;try{s.data=Au.call(e,e.transformResponse,s)}finally{delete e.response}return s.headers=Wt.from(s.headers),s},function(s){if(!Yv(s)&&(Cu(e),s&&s.response)){s.response.duration=h0(i),e.response=s.response;try{s.response.data=Au.call(e,e.transformResponse,s.response)}finally{delete e.response}s.response.headers=Wt.from(s.response.headers)}return Promise.reject(s)})}const Gc={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Gc[t]=function(i){return typeof i===t||"a"+(e<1?"n ":" ")+t}});const p0={};Gc.transitional=function(e,n,i){function r(s,a){return"[Axios v"+Qh+"] Transitional option '"+s+"'"+a+(i?". "+i:"")}return(s,a,l)=>{if(e===!1)throw new he(r(a," has been removed"+(n?" in "+n:"")),he.ERR_DEPRECATED);return n&&!p0[a]&&(p0[a]=!0,console.warn(r(a," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,a,l):!0}};Gc.spelling=function(e){return(n,i)=>(console.warn(`${i} is likely a misspelling of ${e}`),!0)};function LE(t,e,n){if(typeof t!="object"||t===null)throw new he("options must be an object",he.ERR_BAD_OPTION_VALUE);const i=Object.keys(t);let r=i.length;for(;r-- >0;){const s=i[r],a=Object.prototype.hasOwnProperty.call(e,s)?e[s]:void 0;if(a){const l=t[s],c=l===void 0||a(l,s,t);if(c!==!0)throw new he("option "+s+" must be "+c,he.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new he("Unknown option "+s,he.ERR_BAD_OPTION)}}const Ol={assertOptions:LE,validators:Gc},Kt=Ol.validators,Du=t=>{if(t==null||D.isPlainObject(t)||t instanceof Wt)return!0;try{return D.isObject(t)&&D.getSafeProp(t,Symbol.toStringTag)==="AxiosHeaders"&&["toJSON","set","get","has","delete","clear","normalize","concat","toString",Symbol.iterator].every(e=>D.isFunction(D.getSafeProp(t,e)))}catch{return!1}};let Wr=class{constructor(e){this.defaults=e||{},this.interceptors={request:new Ym,response:new Ym}}async request(e,n){try{return await this._request(e,n)}catch(i){if(i instanceof Error)try{let r={};Error.captureStackTrace?Error.captureStackTrace(r):r=new Error;const s=r.stack;let a="";if(typeof s=="string"){const l=s.indexOf(`
`);a=l===-1?"":s.slice(l+1)}if(!i.stack)i.stack=a;else if(a){const l=a.indexOf(`
`),c=l===-1?-1:a.indexOf(`
`,l+1),u=c===-1?a:a.slice(c+1),f=String(i.stack),m=CM(i,f),h=m===-1?f:f.slice(0,m),g=m===-1?"":f.slice(m);h.endsWith(u)||(i.stack=h+`
`+a+g)}}catch{}throw i}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Jr(this.defaults,n);const{transitional:i,paramsSerializer:r,headers:s}=n;i!==void 0&&Ol.assertOptions(i,{silentJSONParsing:Kt.transitional(Kt.boolean),forcedJSONParsing:Kt.transitional(Kt.boolean),clarifyTimeoutError:Kt.transitional(Kt.boolean),legacyInterceptorReqResOrdering:Kt.transitional(Kt.boolean),advertiseZstdAcceptEncoding:Kt.transitional(Kt.boolean),validateStatusUndefinedResolves:Kt.transitional(Kt.boolean),encodeBasicAuthUsername:Kt.transitional(Kt.boolean)},!1),r!=null&&(D.isFunction(r)?n.paramsSerializer={serialize:r}:Ol.assertOptions(r,{encode:Kt.function,serialize:Kt.function},!0)),n.allowAbsoluteUrls!==void 0||(D.hasOwnProp(this.defaults,"allowAbsoluteUrls")&&this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),Ol.assertOptions(n,{baseUrl:Kt.spelling("baseURL"),withXsrfToken:Kt.spelling("withXSRFToken")},!0),n.method=(D.getSafeProp(n,"method")||D.getSafeProp(this.defaults,"method")||"get").toLowerCase();const a=D.getSafeProp(s,"common"),l=D.getSafeProp(s,n.method),c=s&&D.merge(Du(a)?a:void 0,Du(l)?l:void 0);s&&D.forEach(qv.concat("common"),x=>{Du(D.getSafeProp(s,x))&&delete s[x]}),n.headers=Wt.concat(c,s);const u=[];let f=!0;this.interceptors.request.forEach(function(d){if(typeof d.runWhen=="function"&&d.runWhen(n)===!1)return;f=f&&d.synchronous;const p=n.transitional||Kh;p&&p.legacyInterceptorReqResOrdering?u.unshift(d.fulfilled,d.rejected):u.push(d.fulfilled,d.rejected)});const m=[];this.interceptors.response.forEach(function(d){m.push(d.fulfilled,d.rejected)});let h,g=0,_;if(!f){const x=[Pu.bind(this),void 0];for(x.unshift(...u),x.push(...m),_=x.length,h=Promise.resolve(n);g<_;)h=h.then(x[g++],x[g++]);return h}_=u.length;let b=n;for(;g<_;){const x=u[g++],d=u[g++];try{b=x?x(b):b}catch(p){if(!d){h=Promise.reject(p);break}try{const y=d.call(this,p);D.isThenable(y)&&(h=Promise.resolve(y).then(()=>Pu.call(this,b)))}catch(y){h=Promise.reject(y)}break}}if(!h)try{h=Pu.call(this,b)}catch(x){h=Promise.reject(x)}for(g=0,_=m.length;g<_;)h=h.then(m[g++],m[g++]);return h}getUri(e){e=Jr(this.defaults,e);const n=Jv(e.baseURL,e.url,e.allowAbsoluteUrls,e);return Hv(n,e.params,e.paramsSerializer)}};D.forEach(["delete","get","head","options"],function(e){Wr.prototype[e]=async function(n,i){return this.request(Jr(i||{},{method:e,url:n,data:i&&D.hasOwnProp(i,"data")?i.data:void 0}))}});D.forEach(["post","put","patch","query"],function(e){function n(i){return async function(s,a,l){return this.request(Jr(l||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:s,data:a}))}}Wr.prototype[e]=n(),e!=="query"&&(Wr.prototype[e+"Form"]=n(!0))});let IE=class s_{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const i=this;this.promise.then(r=>{if(!i._listeners)return;let s=i._listeners.length;for(;s-- >0;)i._listeners[s](r);i._listeners=null}),this.promise.then=r=>{let s;const a=new Promise(l=>{i.subscribe(l),s=l}).then(r);return a.cancel=function(){i.unsubscribe(s)},a},e(function(s,a,l){i.reason||(i.reason=new bo(s,a,l),n(i.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const e=new AbortController,n=i=>{e.abort(i)};return this.subscribe(n),e.signal.unsubscribe=()=>this.unsubscribe(n),e.signal}static source(){let e;return{token:new s_(function(r){e=r}),cancel:e}}};function UE(t){return function(n){return t.apply(null,n)}}function OE(t){return D.isObject(t)&&t.isAxiosError===!0}const Fl={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,ContentTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,UnprocessableContent:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerReturnsAnUnknownError:520,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Fl).forEach(([t,e])=>{Fl[e]===void 0&&(Fl[e]=t)});function a_(t){const e=new Wr(t),n=Rv(Wr.prototype.request,e);return D.extend(n,Wr.prototype,e,{allOwnKeys:!0}),D.extend(n,e,null,{allOwnKeys:!0}),n.create=function(r){return a_(Jr(t,r))},n}const kt=a_(So);kt.Axios=Wr;kt.CanceledError=bo;kt.CancelToken=IE;kt.isCancel=Yv;kt.VERSION=Qh;kt.toFormData=Vc;kt.AxiosError=he;kt.Cancel=kt.CanceledError;kt.all=function(e){return Promise.all(e)};kt.spread=UE;kt.isAxiosError=OE;kt.mergeConfig=Jr;kt.AxiosHeaders=Wt;kt.formToJSON=t=>$v(D.isHTMLForm(t)?new FormData(t):t);kt.getAdapter=r_.getAdapter;kt.HttpStatusCode=Fl;kt.default=kt;const{Axios:e3,AxiosError:t3,CanceledError:n3,isCancel:i3,CancelToken:r3,VERSION:s3,all:a3,Cancel:o3,isAxiosError:l3,spread:c3,toFormData:u3,AxiosHeaders:d3,HttpStatusCode:f3,formToJSON:h3,getAdapter:p3,mergeConfig:m3,create:g3}=kt,FE="/api",ct=kt.create({baseURL:FE,headers:{"Content-Type":"application/json"}});ct.interceptors.request.use(t=>{const e=localStorage.getItem("token");return e&&(t.headers.Authorization=`Bearer ${e}`),t});const qe={login:async(t,e)=>(await ct.post("/auth/login",{email:t,password:e})).data,register:async t=>(await ct.post("/auth/register",t)).data,getMe:async()=>(await ct.get("/auth/me")).data,forgotPassword:async t=>(await ct.post("/auth/forgot-password",{email:t})).data,resetPassword:async t=>(await ct.post("/auth/reset-password",t)).data,getUsers:async t=>(await ct.get("/users/",{params:{role:t}})).data,getCustomers:async()=>(await ct.get("/users/customers")).data,createStaff:async t=>(await ct.post("/users/staff",t)).data,getProducts:async()=>(await ct.get("/products/")).data,createProduct:async t=>(await ct.post("/products/",t)).data,addProductVariant:async(t,e)=>(await ct.post(`/products/${t}/variants`,e)).data,getPlans:async()=>(await ct.get("/plans/")).data,createPlan:async t=>(await ct.post("/plans/",t)).data,getTaxes:async()=>(await ct.get("/taxes/")).data,createTax:async t=>(await ct.post("/taxes/",t)).data,getDiscounts:async()=>(await ct.get("/discounts/")).data,createDiscount:async t=>(await ct.post("/discounts/",t)).data,toggleDiscountActive:async t=>(await ct.put(`/discounts/${t}/toggle-active`)).data,getTemplates:async()=>(await ct.get("/quotation-templates/")).data,createTemplate:async t=>(await ct.post("/quotation-templates/",t)).data,getSubscriptions:async t=>(await ct.get("/subscriptions/",{params:t})).data,getSubscription:async t=>(await ct.get(`/subscriptions/${t}`)).data,createSubscription:async t=>(await ct.post("/subscriptions/",t)).data,updateSubscriptionStatus:async(t,e)=>(await ct.post(`/subscriptions/${t}/status`,{status:e})).data,generateInvoice:async t=>(await ct.post(`/subscriptions/${t}/generate-invoice`)).data,getInvoices:async t=>(await ct.get("/invoices/",{params:t})).data,getInvoice:async t=>(await ct.get(`/invoices/${t}`)).data,updateInvoiceStatus:async(t,e)=>(await ct.post(`/invoices/${t}/status`,null,{params:{status_action:e}})).data,sendInvoice:async t=>(await ct.post(`/invoices/${t}/send`)).data,recordPayment:async(t,e)=>(await ct.post(`/payments/invoices/${t}`,e)).data,getFinanceSummary:async t=>(await ct.get("/finance/summary",{params:t})).data,triggerBillingDay:async t=>(await ct.post("/finance/trigger-billing-day",null,{params:{target_date:t}})).data};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=t=>t==null?void 0:t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function BE(t,e,n=[]){if(e==null)throw new Error("[lucide]: iconNode is required when icon name is used");return{name:kE(t),size:24,node:e,...n.length>0?{aliases:n}:{}}}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=t=>{let e="",n=!1;for(const i of t){if(i==="-"||i==="_"||i<=" "){n=e.length>0;continue}e.length===0?e+=i.toLowerCase():e+=n?i.toUpperCase():i,n=!1}return e};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=t=>{const e=zE(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const of=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function Lu(t){return t!=null}function HE(t,e={}){var h,g;const n=e.attributeNames??{},i=_=>n[_]??_,r=t.size??t.width??Dr.width,s=t.size??t.height??Dr.height,a=((h=t.aliases)==null?void 0:h.filter(_=>typeof _=="string"&&_.trim()!=="").map(_=>`lucide-${_}`))??[],l=[...t.name?[`lucide-${t.name}`]:[],...a],c=((g=e.className)==null?void 0:g.split(" ").filter(Boolean))??[],u=e.includeDefaultClasses===!1?of(...c):of("lucide",...l,...c),f=e.absoluteStrokeWidth?Number(e.strokeWidth??Dr["stroke-width"])*Number(t.size??t.width??Dr.width)/Number(e.size??e.width??Dr.width):e.strokeWidth??Dr["stroke-width"];return["svg",{...Object.entries(Dr).reduce((_,[b,x])=>(_[i(b)]=x,_),{}),..."color"in e&&e.color&&{[i("stroke")]:e.color},..."size"in e&&Lu(e.size)&&{[i("width")]:e.size,[i("height")]:e.size},..."width"in e&&Lu(e.width)&&{[i("width")]:e.width},..."height"in e&&Lu(e.height)&&{[i("height")]:e.height},[i("stroke-width")]:f,...u&&{[i("class")]:u},[i("viewBox")]:`0 0 ${r} ${s}`,...e.hasA11yProp===!1?{[i("aria-hidden")]:"true"}:{},..."attributes"in e&&e.attributes},t.node.map(_=>{const[b,x,d]=_,p=e.nonScalingStroke?{[i("vector-effect")]:"non-scaling-stroke",...x}:x;return d?[b,p,d]:[b,p]})]}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function VE(t,e={}){return HE(t,{...e,attributeNames:{...e.attributeNames,class:"className","stroke-width":"strokeWidth","stroke-linecap":"strokeLinecap","stroke-linejoin":"strokeLinejoin","vector-effect":"vectorEffect"}})}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1},WE=ne.createContext({}),XE=()=>ne.useContext(WE),$E=ne.forwardRef(({color:t,size:e,width:n,height:i,strokeWidth:r,absoluteStrokeWidth:s,nonScalingStroke:a,className:l="",children:c,iconNode:u=[],icon:f={node:u,aliases:[],size:24},...m},h)=>{const{size:g=24,strokeWidth:_=2,absoluteStrokeWidth:b=!1,nonScalingStroke:x=!1,color:d="currentColor",className:p=""}=XE()??{},y=!!c||GE(m),[S,A,T=[]]=VE(f,{color:t??d,width:n??e??g,height:i??e??g,strokeWidth:r??_,absoluteStrokeWidth:s??b,nonScalingStroke:a??x,className:of(p,l),hasA11yProp:y,attributes:m});return ne.createElement(S,{ref:h,...A},[...T.map(([v,w])=>ne.createElement(v,w)),...Array.isArray(c)?c:[c]])});/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */function ht(t,e=[],n=[]){const i=typeof t=="string"?BE(t,e,n):t,r=ne.forwardRef(({className:s,...a},l)=>ne.createElement($E,{ref:l,icon:i,className:s,...a}));return i.name&&(r.displayName=jE(i.name)),r}/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_={name:"arrow-right",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]};o_.node;const l_=ht(o_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_={name:"box",size:24,node:[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]};c_.node;const qE=ht(c_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_={name:"chart-column",size:24,node:[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]],aliases:["bar-chart-3"]};u_.node;const d_=ht(u_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_={name:"check",size:24,node:[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]};f_.node;const $o=ht(f_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_={name:"chevron-right",size:24,node:[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]};h_.node;const qo=ht(h_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_={name:"circle-alert",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],aliases:["alert-circle"]};p_.node;const m0=ht(p_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_={name:"circle-check",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 9-5.5 5.5L8 12",key:"xofnsj"}]],aliases:["check-circle-2"]};m_.node;const g0=ht(m_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_={name:"circle-user",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]],aliases:["user-circle"]};g_.node;const YE=ht(g_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_={name:"clock",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 6v6l4 2",key:"mmk7yg"}]]};x_.node;const KE=ht(x_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_={name:"compass",size:24,node:[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}]]};v_.node;const ZE=ht(v_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __={name:"dollar-sign",size:24,node:[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M17 5H9.5a1 1 0 000 7h5a1 1 0 010 7H6",key:"pwzcbw"}]]};__.node;const y_=ht(__);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_={name:"file-text",size:24,node:[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]};S_.node;const ep=ht(S_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_={name:"funnel",size:24,node:[["path",{d:"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z",key:"sc7q7i"}]],aliases:["filter"]};b_.node;const w_=ht(b_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_={name:"layers",size:24,node:[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],aliases:["layers-3"]};M_.node;const Wc=ht(M_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_={name:"lock",size:24,node:[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]};E_.node;const QE=ht(E_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_={name:"log-out",size:24,node:[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]};T_.node;const JE=ht(T_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_={name:"mail",size:24,node:[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]};A_.node;const e1=ht(A_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_={name:"play",size:24,node:[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]};N_.node;const R_=ht(N_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_={name:"plus",size:24,node:[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]};C_.node;const _r=ht(C_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_={name:"printer",size:24,node:[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]};P_.node;const t1=ht(P_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_={name:"refresh-cw",size:24,node:[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]};D_.node;const x0=ht(D_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_={name:"search",size:24,node:[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]};L_.node;const I_=ht(L_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_={name:"send",size:24,node:[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]};U_.node;const n1=ht(U_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_={name:"shield-check",size:24,node:[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]};O_.node;const tp=ht(O_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_={name:"sliders-vertical",size:24,node:[["path",{d:"M10 8h4",key:"1sr2af"}],["path",{d:"M12 21v-9",key:"17s77i"}],["path",{d:"M12 8V3",key:"13r4qs"}],["path",{d:"M17 16h4",key:"h1uq16"}],["path",{d:"M19 12V3",key:"o1uvq1"}],["path",{d:"M19 21v-5",key:"qua636"}],["path",{d:"M3 14h4",key:"bcjad9"}],["path",{d:"M5 10V3",key:"cb8scm"}],["path",{d:"M5 21v-7",key:"1w1uti"}]],aliases:["sliders"]};F_.node;const i1=ht(F_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_={name:"sparkles",size:24,node:[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],aliases:["stars"]};k_.node;const ao=ht(k_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_={name:"trending-up",size:24,node:[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]};B_.node;const r1=ht(B_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_={name:"user-plus",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]};z_.node;const s1=ht(z_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_={name:"users",size:24,node:[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]};j_.node;const a1=ht(j_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_={name:"x",size:24,node:[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]};H_.node;const Yo=ht(H_);/**
 * @license lucide-react v1.66.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_={name:"zap",size:24,node:[["path",{d:"M15.914 4a1.5 1.5 0 00-2.474-1.561l-9 9A1.5 1.5 0 005.5 14h4.002a.5.5 0 01.471.666L8.086 20a1.5 1.5 0 002.475 1.56l9-9A1.5 1.5 0 0018.5 10h-3.997a.5.5 0 01-.472-.667z",key:"1v7up4"}]]};V_.node;const o1=ht(V_),l1=({currentUser:t,currentTab:e,onTabChange:n,onLogout:i,onQuickLogin:r,onTriggerCinematic:s})=>{const a=(t==null?void 0:t.role)==="admin",l=(t==null?void 0:t.role)==="staff",c=(t==null?void 0:t.role)==="customer";return o.jsxs("header",{className:"bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 border-b border-gold-500/35 text-cream-50 sticky top-0 z-50 shadow-cinematic",children:[o.jsxs("div",{className:"bg-burgundy-950/90 px-4 py-1.5 border-b border-gold-500/20 flex flex-wrap justify-between items-center text-xs backdrop-blur-md",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsxs("span",{className:"text-gold-300 font-serif font-semibold tracking-wide flex items-center space-x-1",children:[o.jsx(ao,{className:"w-3 h-3 text-gold-400"}),o.jsx("span",{children:"ROLE SWITCH:"})]}),o.jsx("button",{onClick:()=>r("admin@brightloop.io"),className:`px-2.5 py-0.5 rounded-full font-medium transition duration-200 border ${(t==null?void 0:t.email)==="admin@brightloop.io"?"bg-gradient-to-r from-gold-600 to-gold-400 text-burgundy-950 border-gold-300 font-bold shadow-gold-glow":"bg-burgundy-900/80 text-cream-100 hover:text-gold-200 border-gold-500/30 hover:border-gold-400/60"}`,children:"👑 Alexander Vance (Admin)"}),o.jsx("button",{onClick:()=>r("sarah.sales@brightloop.io"),className:`px-2.5 py-0.5 rounded-full font-medium transition duration-200 border ${(t==null?void 0:t.email)==="sarah.sales@brightloop.io"?"bg-gradient-to-r from-gold-600 to-gold-400 text-burgundy-950 border-gold-300 font-bold shadow-gold-glow":"bg-burgundy-900/80 text-cream-100 hover:text-gold-200 border-gold-500/30 hover:border-gold-400/60"}`,children:"💼 Sarah Jenkins (Staff)"}),o.jsx("button",{onClick:()=>r("alice@techflow.com"),className:`px-2.5 py-0.5 rounded-full font-medium transition duration-200 border ${(t==null?void 0:t.email)==="alice@techflow.com"?"bg-gradient-to-r from-gold-600 to-gold-400 text-burgundy-950 border-gold-300 font-bold shadow-gold-glow":"bg-burgundy-900/80 text-cream-100 hover:text-gold-200 border-gold-500/30 hover:border-gold-400/60"}`,children:"🏢 Alice (TechFlow Customer)"})]}),t&&o.jsxs("div",{className:"flex items-center space-x-3",children:[o.jsxs("div",{className:"flex items-center space-x-1.5 text-xs",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-gold-400 animate-pulse"}),o.jsx("span",{className:"text-cream-100 font-medium font-serif",children:t.name}),o.jsx("span",{className:`ml-1 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider border ${a?"bg-gold-500/20 text-gold-300 border-gold-400/50":l?"bg-amber-500/20 text-amber-200 border-amber-400/50":"bg-cream-100/10 text-cream-200 border-cream-300/40"}`,children:t.role})]}),s&&o.jsxs("button",{onClick:s,className:"px-2.5 py-0.5 rounded-full bg-burgundy-900/90 hover:bg-gold-500 hover:text-burgundy-950 text-gold-300 border border-gold-500/40 text-[11px] font-serif font-bold tracking-wider flex items-center space-x-1 transition duration-200 shadow-gold-subtle ml-1",title:"Experience 3D Three.js Cinematic Entry",children:[o.jsx(ao,{className:"w-3 h-3 text-gold-400 group-hover:text-burgundy-950"}),o.jsx("span",{children:"3D CINEMA"})]}),o.jsxs("button",{onClick:i,className:"text-cream-300 hover:text-gold-300 flex items-center space-x-1 transition duration-150 ml-2",title:"Sign Out",children:[o.jsx(JE,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Sign out"})]})]})]}),o.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:o.jsxs("div",{className:"flex justify-between h-16 items-center",children:[o.jsxs("div",{className:"flex items-center space-x-3 cursor-pointer group",onClick:()=>n(c?"portal":"finance"),children:[o.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 p-[1.5px] shadow-gold-glow group-hover:scale-105 transition duration-300",children:o.jsx("div",{className:"w-full h-full bg-burgundy-950 rounded-[10px] flex items-center justify-center font-serif font-black text-gold-300 text-xl tracking-widest",children:"B"})}),o.jsxs("div",{children:[o.jsx("span",{className:"text-xl font-serif font-black tracking-wide gold-gradient-text",children:"Brightloop"}),o.jsx("span",{className:"text-xs font-semibold text-gold-400/90 ml-1.5 uppercase tracking-widest",children:"Subscription OS"})]})]}),o.jsxs("nav",{className:"flex space-x-1 sm:space-x-2",children:[!c&&o.jsxs(o.Fragment,{children:[o.jsxs("button",{onClick:()=>n("finance"),className:`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${e==="finance"?"bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5":"text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5"}`,children:[o.jsx(d_,{className:`w-4 h-4 transition-colors ${e==="finance"?"text-burgundy-800":"text-gold-400"}`}),o.jsx("span",{children:"Finance & Ledger"})]}),o.jsxs("button",{onClick:()=>n("subscriptions"),className:`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${e==="subscriptions"?"bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5":"text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5"}`,children:[o.jsx(Wc,{className:`w-4 h-4 transition-colors ${e==="subscriptions"?"text-burgundy-800":"text-gold-400"}`}),o.jsx("span",{children:"Subscriptions & Quotes"})]}),o.jsxs("button",{onClick:()=>n("invoices"),className:`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${e==="invoices"?"bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5":"text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5"}`,children:[o.jsx(ep,{className:`w-4 h-4 transition-colors ${e==="invoices"?"text-burgundy-800":"text-gold-400"}`}),o.jsx("span",{children:"Invoices & Payments"})]}),o.jsxs("button",{onClick:()=>n("products"),className:`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${e==="products"?"bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5":"text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5"}`,children:[o.jsx(qE,{className:`w-4 h-4 ${e==="products"?"text-burgundy-800":"text-gold-400"}`}),o.jsx("span",{children:"Products & Variants"})]}),o.jsxs("button",{onClick:()=>n("plans"),className:`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${e==="plans"?"bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5":"text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5"}`,children:[o.jsx(i1,{className:`w-4 h-4 transition-colors ${e==="plans"?"text-burgundy-800":"text-gold-400"}`}),o.jsx("span",{children:"Plans & Discounts"})]}),a&&o.jsxs("button",{onClick:()=>n("staff"),className:`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${e==="staff"?"bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5":"text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5"}`,children:[o.jsx(tp,{className:`w-4 h-4 transition-colors ${e==="staff"?"text-burgundy-800":"text-gold-400"}`}),o.jsx("span",{children:"Staff Team"})]})]}),c&&o.jsxs("button",{onClick:()=>n("portal"),className:`flex items-center space-x-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 ease-out active:scale-95 border ${e==="portal"?"bg-cream-50 text-burgundy-950 border-gold-400 shadow-gold-subtle -translate-y-0.5":"text-cream-200 hover:text-gold-300 hover:bg-burgundy-800/60 border-transparent hover:-translate-y-0.5"}`,children:[o.jsx(YE,{className:`w-4 h-4 transition-colors ${e==="portal"?"text-burgundy-800":"text-gold-400"}`}),o.jsx("span",{children:"Customer Portal"})]})]})]})})]})},c1=({onNavigateToInvoice:t})=>{const[e,n]=ne.useState(null),[i,r]=ne.useState([]),[s,a]=ne.useState(new Date().toISOString().split("T")[0]),[l,c]=ne.useState(null),[u,f]=ne.useState(!1),[m,h]=ne.useState(0),g=async()=>{const b=performance.now();try{const[x,d]=await Promise.all([qe.getFinanceSummary(),qe.getInvoices({overdue_only:!0})]);n(x),r(d);const p=performance.now();h(Math.round(p-b))}catch(x){console.error("Error fetching finance summary:",x)}};ne.useEffect(()=>{g()},[]);const _=async()=>{var b,x;f(!0);try{const d=await qe.triggerBillingDay(s);c(d),await g()}catch(d){alert(((x=(b=d.response)==null?void 0:b.data)==null?void 0:x.detail)||"Failed to execute billing day")}finally{f(!1)}};return o.jsxs("div",{className:"space-y-7",children:[o.jsxs("div",{className:"relative overflow-hidden rounded-2xl bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 border border-gold-500/40 p-7 shadow-cinematic-lg text-cream-50",children:[o.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),o.jsx("div",{className:"absolute bottom-0 left-1/3 w-80 h-80 bg-burgundy-700/20 rounded-full blur-2xl pointer-events-none"}),o.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 relative z-10",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center space-x-2.5",children:[o.jsxs("span",{className:"bg-gold-500/20 text-gold-300 text-xs px-3 py-1 rounded-full font-serif font-bold border border-gold-400/40 tracking-wider uppercase flex items-center space-x-1.5 shadow-sm",children:[o.jsx(u1,{className:"w-3.5 h-3.5 text-gold-400"}),o.jsx("span",{children:"Executive Month-End Command"})]}),o.jsxs("span",{className:"bg-emerald-950/80 text-emerald-300 text-xs px-2.5 py-1 rounded-full font-mono flex items-center space-x-1.5 border border-emerald-500/40",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"}),o.jsxs("span",{children:["Sub-Second Response: ",m,"ms"]})]})]}),o.jsx("h1",{className:"text-3xl font-serif font-black mt-3 tracking-tight gold-gradient-text",children:"Brightloop Financial Ledger"}),o.jsx("p",{className:"text-cream-200/90 text-sm mt-1.5 max-w-2xl font-sans",children:"Instantaneous intelligence across active contracts, ARR / MRR velocity, automated billing cycles, and overdue payment chase queues."})]}),o.jsxs("div",{className:"bg-burgundy-900/90 border border-gold-400/40 p-4 rounded-xl flex flex-col sm:flex-row items-center gap-3.5 shadow-gold-subtle backdrop-blur-md",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block text-[11px] font-serif uppercase tracking-wider font-semibold text-gold-200 mb-1",children:"Billing Cycle Date"}),o.jsx("input",{type:"date",value:s,onChange:b=>a(b.target.value),className:"bg-burgundy-950 border border-gold-500/40 rounded-lg px-3 py-1.5 text-xs text-cream-50 focus:outline-none focus:ring-1 focus:ring-gold-400 font-mono"})]}),o.jsx("div",{className:"self-end mt-2 sm:mt-0",children:o.jsxs("button",{onClick:_,disabled:u,className:"bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-burgundy-950 font-serif font-bold text-xs px-4 py-2.5 rounded-lg shadow-gold-glow flex items-center space-x-1.5 transition duration-200 disabled:opacity-50",children:[u?o.jsx(x0,{className:"w-3.5 h-3.5 animate-spin text-burgundy-950"}):o.jsx(R_,{className:"w-3.5 h-3.5 fill-current"}),o.jsx("span",{children:"Execute Billing Day"})]})})]})]}),l&&o.jsxs("div",{className:"mt-5 p-3.5 bg-burgundy-900/95 border border-gold-400/60 rounded-xl text-xs flex justify-between items-center text-cream-100 shadow-gold-subtle animate-fade-in",children:[o.jsxs("div",{className:"flex items-center space-x-2.5",children:[o.jsx(g0,{className:"w-4 h-4 text-gold-400 flex-shrink-0"}),o.jsxs("span",{children:[o.jsxs("strong",{children:["Idempotent Billing Day Executed (",l.target_date,"):"]})," Evaluated ",l.subscriptions_evaluated," subscriptions, generated ",o.jsxs("strong",{children:[l.invoices_generated," new invoices"]}),". Zero skipped, idempotent guarantee satisfied."]})]}),o.jsx("button",{onClick:()=>c(null),className:"text-gold-300 hover:text-cream-50 ml-3 font-bold text-sm",children:"✕"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5",children:[o.jsxs("div",{className:"cream-card rounded-2xl p-5 transition duration-300 relative overflow-hidden group",children:[o.jsxs("div",{className:"flex justify-between items-start",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-[11px] font-serif font-bold uppercase tracking-wider text-burgundy-700/80",children:"Active Subscriptions"}),o.jsx("h3",{className:"text-3xl font-serif font-black text-burgundy-950 mt-1",children:(e==null?void 0:e.active_subscriptions_count)??0}),o.jsxs("p",{className:"text-xs text-cream-700 mt-1",children:["Out of ",(e==null?void 0:e.total_subscriptions_count)??0," total on books"]})]}),o.jsx("div",{className:"w-11 h-11 rounded-xl bg-burgundy-900 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-sm group-hover:scale-105 transition",children:o.jsx(a1,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs text-burgundy-900",children:[o.jsx("span",{className:"font-medium text-cream-700",children:"Monthly Run-rate (MRR):"}),o.jsxs("span",{className:"font-serif font-bold text-burgundy-950",children:["$",e==null?void 0:e.mrr.toLocaleString("en-US",{minimumFractionDigits:2})]})]})]}),o.jsxs("div",{className:"cream-card rounded-2xl p-5 transition duration-300 relative overflow-hidden group",children:[o.jsxs("div",{className:"flex justify-between items-start",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-[11px] font-serif font-bold uppercase tracking-wider text-burgundy-700/80",children:"Revenue Collected"}),o.jsxs("h3",{className:"text-3xl font-serif font-black text-emerald-800 mt-1",children:["$",(e==null?void 0:e.total_revenue_collected.toLocaleString("en-US",{minimumFractionDigits:2}))??"0.00"]}),o.jsxs("p",{className:"text-xs text-cream-700 mt-1",children:["Cleared from ",(e==null?void 0:e.paid_invoices_count)??0," settled invoices"]})]}),o.jsx("div",{className:"w-11 h-11 rounded-xl bg-burgundy-900 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-sm group-hover:scale-105 transition",children:o.jsx(r1,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs text-burgundy-900",children:[o.jsx("span",{className:"font-medium text-cream-700",children:"Annual Run-rate (ARR):"}),o.jsxs("span",{className:"font-serif font-bold text-burgundy-950",children:["$",e==null?void 0:e.arr.toLocaleString("en-US",{minimumFractionDigits:2})]})]})]}),o.jsxs("div",{className:"cream-card rounded-2xl p-5 transition duration-300 relative overflow-hidden group",children:[o.jsxs("div",{className:"flex justify-between items-start",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-[11px] font-serif font-bold uppercase tracking-wider text-burgundy-700/80",children:"Total Outstanding"}),o.jsxs("h3",{className:"text-3xl font-serif font-black text-amber-800 mt-1",children:["$",(e==null?void 0:e.total_outstanding_amount.toLocaleString("en-US",{minimumFractionDigits:2}))??"0.00"]}),o.jsxs("p",{className:"text-xs text-cream-700 mt-1",children:["Across ",(e==null?void 0:e.unpaid_invoices_count)??0," pending invoices"]})]}),o.jsx("div",{className:"w-11 h-11 rounded-xl bg-burgundy-900 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-sm group-hover:scale-105 transition",children:o.jsx(y_,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-gold-500/20 flex items-center justify-between text-xs text-burgundy-900",children:[o.jsx("span",{className:"font-medium text-cream-700",children:"Collection Status:"}),o.jsx("span",{className:"font-semibold text-amber-700",children:"Awaiting Settlement"})]})]}),o.jsxs("div",{className:"bg-[#FFF9F9] border border-rose-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition duration-300 relative overflow-hidden group",children:[o.jsxs("div",{className:"flex justify-between items-start",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-[11px] font-serif font-bold uppercase tracking-wider text-rose-800",children:"Overdue Receivables"}),o.jsxs("h3",{className:"text-3xl font-serif font-black text-rose-700 mt-1",children:["$",(e==null?void 0:e.overdue_invoices_amount.toLocaleString("en-US",{minimumFractionDigits:2}))??"0.00"]}),o.jsxs("p",{className:"text-xs text-rose-600 font-medium mt-1",children:[(e==null?void 0:e.overdue_invoices_count)??0," invoices past terms"]})]}),o.jsx("div",{className:"w-11 h-11 rounded-xl bg-rose-900 border border-gold-500/40 flex items-center justify-center text-gold-300 shadow-sm group-hover:scale-105 transition",children:o.jsx(m0,{className:"w-5 h-5"})})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-rose-200 flex items-center justify-between text-xs text-rose-700 font-semibold",children:[o.jsx("span",{children:"Action Required:"}),o.jsx("span",{children:"Chase Overdue Now"})]})]})]}),o.jsxs("div",{className:"cream-card rounded-2xl overflow-hidden shadow-cinematic",children:[o.jsxs("div",{className:"px-6 py-4.5 bg-gradient-to-r from-cream-100 to-cream-50 border-b border-gold-500/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2",children:[o.jsxs("div",{children:[o.jsxs("h2",{className:"text-base font-serif font-black text-burgundy-950 flex items-center space-x-2",children:[o.jsx(m0,{className:"w-5 h-5 text-rose-600"}),o.jsx("span",{children:"Overdue Invoices — Immediate Chase Ledger"})]}),o.jsx("p",{className:"text-xs text-cream-700 mt-0.5",children:"Invoices whose payment terms have lapsed. Settle immediately before turning into lost revenue."})]}),o.jsxs("button",{onClick:g,className:"text-xs text-burgundy-900 hover:text-burgundy-950 font-semibold flex items-center space-x-1 px-3 py-1.5 border border-gold-500/40 rounded-lg bg-cream-50 hover:bg-gold-50 transition",children:[o.jsx(x0,{className:"w-3.5 h-3.5 text-gold-600"}),o.jsx("span",{children:"Refresh Ledger"})]})]}),i.length===0?o.jsxs("div",{className:"py-14 text-center text-cream-700 text-sm",children:[o.jsx(g0,{className:"w-12 h-12 text-emerald-600 mx-auto mb-2 opacity-90"}),o.jsx("p",{className:"font-serif font-bold text-burgundy-950 text-base",children:"All Subscriptions Current"}),o.jsx("p",{className:"text-xs text-cream-600 mt-1",children:"Zero overdue receivables found across all books."})]}):o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-cream-100/70 text-burgundy-900 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3.5 px-5",children:"Invoice Reference"}),o.jsx("th",{className:"py-3.5 px-5",children:"Customer Organization"}),o.jsx("th",{className:"py-3.5 px-5",children:"Terms Deadline"}),o.jsx("th",{className:"py-3.5 px-5",children:"Total Billed"}),o.jsx("th",{className:"py-3.5 px-5",children:"Amount Due"}),o.jsx("th",{className:"py-3.5 px-5",children:"Status"}),o.jsx("th",{className:"py-3.5 px-5 text-right",children:"Ledger Action"})]})}),o.jsx("tbody",{className:"divide-y divide-gold-500/10",children:i.map(b=>{var x,d,p;return o.jsxs("tr",{className:"hover:bg-gold-50/40 transition",children:[o.jsx("td",{className:"py-4 px-5 font-mono font-bold text-burgundy-950",children:b.invoice_number}),o.jsxs("td",{className:"py-4 px-5",children:[o.jsx("div",{className:"font-bold text-burgundy-950 font-serif",children:(x=b.customer)==null?void 0:x.name}),o.jsx("div",{className:"text-cream-600 text-[11px]",children:((d=b.customer)==null?void 0:d.company_name)||((p=b.customer)==null?void 0:p.email)})]}),o.jsxs("td",{className:"py-4 px-5 font-semibold text-rose-700 flex items-center space-x-1.5",children:[o.jsx(KE,{className:"w-3.5 h-3.5 text-rose-500"}),o.jsxs("span",{children:[b.due_date," (Lapsed)"]})]}),o.jsxs("td",{className:"py-4 px-5 text-burgundy-900 font-medium",children:["$",b.total_amount.toFixed(2)]}),o.jsxs("td",{className:"py-4 px-5 font-serif font-black text-rose-700 text-sm",children:["$",b.amount_due.toFixed(2)]}),o.jsx("td",{className:"py-4 px-5",children:o.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300 tracking-wider",children:"OVERDUE"})}),o.jsx("td",{className:"py-4 px-5 text-right space-x-2",children:o.jsx("button",{onClick:()=>t(b.id),className:"px-3 py-1.5 bg-gradient-to-r from-burgundy-900 to-burgundy-800 hover:from-burgundy-800 hover:to-burgundy-700 text-gold-300 border border-gold-400/50 rounded-lg text-xs font-serif font-bold shadow-sm transition duration-150",children:"Chase & Settle"})})]},b.id)})})]})})]})]})};function u1(t){return o.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",...t,children:o.jsx("path",{d:"M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"})})}const d1=({currentUser:t,onNavigateToInvoice:e})=>{var We,xt,vt,Rt,Ke,_t,ot,Ut;const[n,i]=ne.useState([]),[r,s]=ne.useState([]),[a,l]=ne.useState([]),[c,u]=ne.useState([]),[f,m]=ne.useState([]),[h,g]=ne.useState([]),[_,b]=ne.useState(""),[x,d]=ne.useState("ALL"),[p,y]=ne.useState(null),[S,A]=ne.useState(!1),[T,v]=ne.useState(""),[w,O]=ne.useState(""),[P,U]=ne.useState(""),[V,L]=ne.useState(""),[N,B]=ne.useState("Net 30"),[H,j]=ne.useState(new Date().toISOString().split("T")[0]),[W,z]=ne.useState(30),[G,J]=ne.useState([]),[ue,Ae]=ne.useState(!1),X=async()=>{try{const[ie,Pe,C,be,Re,Fe]=await Promise.all([qe.getSubscriptions(),qe.getPlans(),qe.getProducts(),qe.getCustomers(),qe.getTemplates(),qe.getTaxes()]);i(ie),s(Pe),l(C),u(be),m(Re),g(Fe)}catch(ie){console.error("Error loading subscriptions data:",ie)}};ne.useEffect(()=>{X()},[]);const oe=ie=>{var Re;U(ie);const Pe=f.find(Fe=>Fe.id===ie);if(!Pe)return;O(Pe.plan_id),z(Pe.validity_days),B(Pe.payment_terms);const C=((Re=h[0])==null?void 0:Re.rate_percent)||15,be=Pe.lines.map(Fe=>({product_id:Fe.product_id,variant_id:Fe.variant_id||void 0,quantity:Fe.quantity,unit_price:Fe.unit_price,tax_rate:C}));J(be)},me=()=>{var C;if(a.length===0)return;const ie=a[0],Pe=((C=h[0])==null?void 0:C.rate_percent)||15;J([...G,{product_id:ie.id,variant_id:ie.variants.length>0?ie.variants[0].id:void 0,quantity:1,unit_price:ie.sales_price+(ie.variants.length>0?ie.variants[0].extra_price:0),tax_rate:Pe}])},Ne=(ie,Pe)=>{const C=a.find(Fe=>Fe.id===Pe);if(!C)return;const be=C.variants.length>0?C.variants[0]:null,Re=[...G];Re[ie].product_id=Pe,Re[ie].variant_id=be?be.id:void 0,Re[ie].unit_price=C.sales_price+(be?be.extra_price:0),J(Re)},ye=(ie,Pe)=>{const C=[...G];C[ie].variant_id=Pe;const be=a.find(Re=>Re.id===C[ie].product_id);if(be){const Re=be.variants.find(Fe=>Fe.id===Pe);C[ie].unit_price=be.sales_price+(Re?Re.extra_price:0)}J(C)},je=ie=>{J(G.filter((Pe,C)=>C!==ie))},Be=async ie=>{var be,Re;if(!T||!w){alert("Please select both a customer and a plan");return}if(G.length===0){alert("Please add at least one product line");return}const Pe=r.find(Fe=>Fe.id===Number(w)),C=G.reduce((Fe,pe)=>Fe+pe.quantity,0);if(Pe&&C<Pe.min_quantity){alert(`Minimum quantity required for plan "${Pe.name}" is ${Pe.min_quantity}. Currently: ${C}`);return}Ae(!0);try{await qe.createSubscription({customer_id:Number(T),plan_id:Number(w),discount_code:V.trim()||void 0,payment_terms:N,start_date:H,quotation_validity_days:W,lines:G,status:ie,notes:`Created via ${P?"Template":"Direct Offer"}`}),A(!1),U(""),v(""),O(""),J([]),L(""),await X()}catch(Fe){alert(((Re=(be=Fe.response)==null?void 0:be.data)==null?void 0:Re.detail)||"Failed to create subscription")}finally{Ae(!1)}},Ee=async(ie,Pe)=>{var C,be;try{const Re=await qe.updateSubscriptionStatus(ie,Pe);y(Re),await X()}catch(Re){alert(((be=(C=Re.response)==null?void 0:C.data)==null?void 0:be.detail)||"Status transition failed")}},Ge=async ie=>{var Pe,C;try{const be=await qe.generateInvoice(ie);if(alert(`Invoice ${be.invoice_number} generated successfully!`),await X(),(p==null?void 0:p.id)===ie){const Re=await qe.getSubscription(ie);y(Re)}}catch(be){alert(((C=(Pe=be.response)==null?void 0:Pe.data)==null?void 0:C.detail)||"Failed to generate invoice")}},Je=n.filter(ie=>{var be,Re;const Pe=x==="ALL"||ie.status===x,C=ie.subscription_number.toLowerCase().includes(_.toLowerCase())||((be=ie.customer)==null?void 0:be.name.toLowerCase().includes(_.toLowerCase()))||((Re=ie.plan)==null?void 0:Re.name.toLowerCase().includes(_.toLowerCase()));return Pe&&C});return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-serif font-black text-burgundy-950 tracking-tight",children:"Subscriptions & Quotations"}),o.jsx("p",{className:"text-cream-700 text-sm",children:"Formal quotation offers, active contracts, recurring terms, and plan lifecycle transitions."})]}),o.jsxs("button",{onClick:()=>{A(!0),G.length===0&&me()},className:"bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 hover:from-burgundy-800 hover:to-burgundy-700 text-gold-300 border border-gold-400/60 font-serif font-bold text-sm px-4 py-2.5 rounded-xl shadow-gold-subtle flex items-center space-x-2 transition duration-200",children:[o.jsx(_r,{className:"w-4 h-4 text-gold-400"}),o.jsx("span",{children:"New Quote / Subscription"})]})]}),o.jsxs("div",{className:"cream-card rounded-2xl p-4.5 flex items-center justify-between text-xs overflow-x-auto shadow-sm",children:[o.jsxs("div",{className:"flex items-center space-x-2 font-serif font-bold text-cream-600",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-cream-200 flex items-center justify-center text-burgundy-900",children:"1"}),o.jsx("span",{children:"Draft"})]}),o.jsx(qo,{className:"w-4 h-4 text-gold-500/50"}),o.jsxs("div",{className:"flex items-center space-x-2 font-serif font-bold text-amber-700",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center",children:"2"}),o.jsx("span",{children:"Quotation Offer"})]}),o.jsx(qo,{className:"w-4 h-4 text-gold-500/50"}),o.jsxs("div",{className:"flex items-center space-x-2 font-serif font-bold text-burgundy-800",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-burgundy-100 border border-burgundy-300 flex items-center justify-center text-burgundy-950",children:"3"}),o.jsx("span",{children:"Confirmed Order"})]}),o.jsx(qo,{className:"w-4 h-4 text-gold-500/50"}),o.jsxs("div",{className:"flex items-center space-x-2 font-serif font-bold text-emerald-800",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-900 shadow-sm",children:"4"}),o.jsx("span",{children:"Active (Recurring Billing)"})]}),o.jsx(qo,{className:"w-4 h-4 text-gold-500/50"}),o.jsxs("div",{className:"flex items-center space-x-2 font-serif font-bold text-cream-600",children:[o.jsx("span",{className:"w-6 h-6 rounded-full bg-cream-200 flex items-center justify-center text-burgundy-900",children:"5"}),o.jsx("span",{children:"Closed / Paused"})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[o.jsxs("div",{className:"relative flex-1",children:[o.jsx(I_,{className:"w-4 h-4 absolute left-3.5 top-3 text-gold-600"}),o.jsx("input",{type:"text",placeholder:"Search quotes, customers, or subscription plans...",value:_,onChange:ie=>b(ie.target.value),className:"w-full cream-card rounded-xl pl-10 pr-4 py-2.5 text-sm text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 placeholder:text-cream-500"})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(w_,{className:"w-4 h-4 text-gold-600"}),o.jsxs("select",{value:x,onChange:ie=>d(ie.target.value),className:"cream-card rounded-xl px-3.5 py-2.5 text-sm text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 font-serif font-medium",children:[o.jsx("option",{value:"ALL",children:"All Statuses"}),o.jsx("option",{value:"Draft",children:"Draft"}),o.jsx("option",{value:"Quotation",children:"Quotation"}),o.jsx("option",{value:"Confirmed",children:"Confirmed"}),o.jsx("option",{value:"Active",children:"Active"}),o.jsx("option",{value:"Paused",children:"Paused"}),o.jsx("option",{value:"Closed",children:"Closed"})]})]})]}),o.jsx("div",{className:"cream-card rounded-2xl overflow-hidden shadow-cinematic",children:o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-cream-100/70 text-burgundy-950 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3.5 px-4.5",children:"Reference #"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Client Organization"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Plan & Frequency"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Term Window"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Next Billing"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Recurring Total"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Status"}),o.jsx("th",{className:"py-3.5 px-4.5 text-right",children:"Actions"})]})}),o.jsxs("tbody",{className:"divide-y divide-gold-500/10",children:[Je.map(ie=>{var C,be,Re,Fe;const Pe={Draft:"bg-cream-200 text-burgundy-800 border-cream-400",Quotation:"bg-amber-100 text-amber-900 border-amber-300",Confirmed:"bg-burgundy-100 text-burgundy-900 border-burgundy-300",Active:"bg-emerald-100 text-emerald-900 border-emerald-300 font-bold shadow-sm",Paused:"bg-amber-50 text-amber-800 border-amber-300",Closed:"bg-rose-100 text-rose-900 border-rose-300"};return o.jsxs("tr",{className:"interactive-row cursor-pointer",onClick:()=>y(ie),children:[o.jsx("td",{className:"py-4 px-4.5 font-mono font-bold text-burgundy-950",children:ie.subscription_number}),o.jsxs("td",{className:"py-4 px-4.5",children:[o.jsx("div",{className:"font-serif font-bold text-burgundy-950",children:(C=ie.customer)==null?void 0:C.name}),o.jsx("div",{className:"text-[11px] text-cream-600",children:(be=ie.customer)==null?void 0:be.company_name})]}),o.jsxs("td",{className:"py-4 px-4.5",children:[o.jsx("div",{className:"font-semibold text-burgundy-900",children:(Re=ie.plan)==null?void 0:Re.name}),o.jsx("span",{className:"capitalize text-[10px] px-2 py-0.5 rounded-full bg-cream-200 text-burgundy-950 font-mono font-bold",children:(Fe=ie.plan)==null?void 0:Fe.billing_interval})]}),o.jsxs("td",{className:"py-4 px-4.5 text-cream-800",children:[o.jsx("div",{children:ie.start_date}),o.jsxs("div",{className:"text-[11px] text-cream-600",children:["Exp: ",ie.expiry_date]})]}),o.jsx("td",{className:"py-4 px-4.5 font-serif font-bold text-burgundy-950",children:ie.status==="Active"?ie.next_billing_date:"N/A"}),o.jsxs("td",{className:"py-4 px-4.5 font-serif font-black text-burgundy-950 text-sm",children:["$",ie.total_amount.toFixed(2)]}),o.jsx("td",{className:"py-4 px-4.5",children:o.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider ${Pe[ie.status]||"bg-cream-100"}`,children:ie.status.toUpperCase()})}),o.jsx("td",{className:"py-4 px-4.5 text-right",children:o.jsx("button",{onClick:()=>y(ie),className:"px-3 py-1.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg text-xs font-serif font-bold transition shadow-sm",children:"Inspect & Govern"})})]},ie.id)}),Je.length===0&&o.jsx("tr",{children:o.jsx("td",{colSpan:8,className:"py-10 text-center text-cream-600 font-serif text-sm",children:"No subscriptions matching the filter criteria."})})]})]})})}),p&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-3xl w-full p-6 space-y-6 my-8 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-start border-b border-gold-500/20 pb-4",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-mono font-bold text-burgundy-950 bg-gold-200/60 px-2.5 py-0.5 rounded border border-gold-400/60",children:p.subscription_number}),o.jsx("h2",{className:"text-2xl font-serif font-black text-burgundy-950 mt-1.5",children:"Subscription Contract Lifecycle"}),o.jsxs("p",{className:"text-xs text-cream-700",children:["Client: ",(We=p.customer)==null?void 0:We.name," (",(xt=p.customer)==null?void 0:xt.email,")"]})]}),o.jsx("button",{onClick:()=>y(null),className:"text-burgundy-800 hover:text-burgundy-950 font-bold text-xl",children:"✕"})]}),o.jsxs("div",{className:"p-3.5 bg-cream-100/60 border border-gold-500/30 rounded-xl flex flex-wrap items-center justify-between gap-2.5",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"text-xs font-serif font-bold text-burgundy-950",children:"Active Stage:"}),o.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-serif font-bold bg-burgundy-900 text-gold-300 border border-gold-400/40",children:p.status})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[p.status==="Draft"&&o.jsx("button",{onClick:()=>Ee(p.id,"Quotation"),className:"px-3.5 py-1.5 bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-lg text-xs font-serif font-bold transition shadow-sm",children:"Send Quotation Offer"}),p.status==="Quotation"&&o.jsx("button",{onClick:()=>Ee(p.id,"Confirmed"),className:"px-3.5 py-1.5 bg-burgundy-800 hover:bg-burgundy-900 text-gold-200 border border-gold-400/50 rounded-lg text-xs font-serif font-bold transition shadow-sm",children:"Confirm Contract"}),(p.status==="Confirmed"||p.status==="Draft")&&o.jsxs("button",{onClick:()=>Ee(p.id,"Active"),className:"px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-serif font-bold transition flex items-center space-x-1.5 shadow-sm",children:[o.jsx(R_,{className:"w-3.5 h-3.5 fill-current"}),o.jsx("span",{children:"Activate Recurring Contract"})]}),p.status==="Active"&&((vt=p.plan)==null?void 0:vt.allow_pause)&&o.jsx("button",{onClick:()=>Ee(p.id,"Paused"),className:"px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-serif font-bold transition",children:"Pause Subscription"}),p.status==="Paused"&&o.jsx("button",{onClick:()=>Ee(p.id,"Active"),className:"px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-serif font-bold transition",children:"Resume Active"}),p.status==="Active"&&((Rt=p.plan)==null?void 0:Rt.allow_early_close)&&o.jsx("button",{onClick:()=>Ee(p.id,"Closed"),className:"px-3.5 py-1.5 bg-rose-700 hover:bg-rose-800 text-white rounded-lg text-xs font-serif font-bold transition",children:"Close Early"}),p.status==="Closed"&&((Ke=p.plan)==null?void 0:Ke.allow_renew)&&o.jsx("button",{onClick:()=>Ee(p.id,"Active"),className:"px-3.5 py-1.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400 rounded-lg text-xs font-serif font-bold transition",children:"Renew Subscription"}),p.status==="Active"&&o.jsxs("button",{onClick:()=>Ge(p.id),className:"px-3.5 py-1.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 font-serif font-bold rounded-lg text-xs transition flex items-center space-x-1.5 shadow-gold-subtle",children:[o.jsx(ep,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Bill Next Invoice"})]})]})]}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs bg-cream-100/40 p-4 rounded-xl border border-gold-500/20",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-cream-700 block font-serif font-bold",children:"Billing Plan"}),o.jsx("span",{className:"font-bold text-burgundy-950",children:(_t=p.plan)==null?void 0:_t.name})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-cream-700 block font-serif font-bold",children:"Interval Frequency"}),o.jsx("span",{className:"font-bold text-burgundy-950 capitalize",children:(ot=p.plan)==null?void 0:ot.billing_interval})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-cream-700 block font-serif font-bold",children:"Payment Terms"}),o.jsx("span",{className:"font-bold text-burgundy-950",children:p.payment_terms})]}),o.jsxs("div",{children:[o.jsx("span",{className:"text-cream-700 block font-serif font-bold",children:"Next Billing"}),o.jsx("span",{className:"font-bold text-emerald-800",children:p.next_billing_date})]})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xs font-serif font-black text-burgundy-950 uppercase tracking-wider mb-2.5",children:"Contract Product Lines & Variant Add-ons"}),o.jsxs("table",{className:"w-full text-xs text-left border border-gold-500/20 rounded-xl overflow-hidden",children:[o.jsx("thead",{className:"bg-cream-100/70 text-burgundy-950 font-serif font-bold",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-2.5 px-3.5",children:"Product Item"}),o.jsx("th",{className:"py-2.5 px-3.5 text-center",children:"Seats / Qty"}),o.jsx("th",{className:"py-2.5 px-3.5 text-right",children:"Unit Rate"}),o.jsx("th",{className:"py-2.5 px-3.5 text-right",children:"Tax Rate"}),o.jsx("th",{className:"py-2.5 px-3.5 text-right",children:"Line Total"})]})}),o.jsx("tbody",{className:"divide-y divide-gold-500/10",children:p.lines.map(ie=>{var Pe;return o.jsxs("tr",{children:[o.jsxs("td",{className:"py-2.5 px-3.5",children:[o.jsx("span",{className:"font-serif font-bold text-burgundy-950",children:(Pe=ie.product)==null?void 0:Pe.name}),ie.variant&&o.jsxs("span",{className:"ml-1.5 text-gold-700 font-semibold bg-gold-100/70 border border-gold-400/40 px-2 py-0.5 rounded text-[10px]",children:[ie.variant.attribute_name,": ",ie.variant.attribute_value," (+$",ie.variant.extra_price,")"]})]}),o.jsx("td",{className:"py-2.5 px-3.5 text-center font-bold",children:ie.quantity}),o.jsxs("td",{className:"py-2.5 px-3.5 text-right font-medium",children:["$",ie.unit_price.toFixed(2)]}),o.jsxs("td",{className:"py-2.5 px-3.5 text-right",children:[ie.tax_rate,"%"]}),o.jsxs("td",{className:"py-2.5 px-3.5 text-right font-serif font-black text-burgundy-950",children:["$",ie.amount.toFixed(2)]})]},ie.id)})})]}),o.jsx("div",{className:"mt-4 flex justify-end",children:o.jsxs("div",{className:"w-64 space-y-1.5 text-xs bg-cream-50 p-3.5 rounded-xl border border-gold-400/40 shadow-sm",children:[o.jsxs("div",{className:"flex justify-between text-cream-800",children:[o.jsx("span",{children:"Subtotal:"}),o.jsxs("span",{className:"font-medium",children:["$",p.total_untaxed.toFixed(2)]})]}),p.total_discount>0&&o.jsxs("div",{className:"flex justify-between text-emerald-800 font-bold",children:[o.jsxs("span",{children:["Discount (",(Ut=p.discount)==null?void 0:Ut.code,"):"]}),o.jsxs("span",{children:["-$",p.total_discount.toFixed(2)]})]}),o.jsxs("div",{className:"flex justify-between text-cream-800",children:[o.jsx("span",{children:"Tax:"}),o.jsxs("span",{className:"font-medium",children:["+$",p.total_tax.toFixed(2)]})]}),o.jsxs("div",{className:"flex justify-between font-serif font-black text-sm text-burgundy-950 border-t border-gold-500/30 pt-1.5",children:[o.jsx("span",{children:"Recurring Total:"}),o.jsxs("span",{children:["$",p.total_amount.toFixed(2)]})]})]})})]}),o.jsx("div",{className:"flex justify-end pt-3 border-t border-gold-500/20",children:o.jsx("button",{onClick:()=>y(null),className:"px-4 py-2 bg-cream-200 hover:bg-cream-300 text-burgundy-950 rounded-xl text-xs font-serif font-bold transition",children:"Close Inspector"})})]})}),S&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-3xl w-full p-6 space-y-5 my-8 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-gold-500/20 pb-3",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-2xl font-serif font-black text-burgundy-950",children:"Prepare Quotation / Subscription"}),o.jsx("p",{className:"text-xs text-cream-700",children:"Select a quotation template or customize lines with product variants and discount rules."})]}),o.jsx("button",{onClick:()=>A(!1),className:"text-burgundy-800 font-bold text-xl",children:"✕"})]}),o.jsxs("div",{className:"bg-gradient-to-r from-cream-100 to-gold-50 border border-gold-400/50 rounded-xl p-3.5 shadow-sm",children:[o.jsxs("label",{className:"block text-xs font-serif font-bold text-burgundy-950 mb-1 flex items-center space-x-1",children:[o.jsx(ao,{className:"w-3.5 h-3.5 text-gold-600"}),o.jsx("span",{children:"Start from a Quotation Template (Recommended for sales reps):"})]}),o.jsxs("select",{value:P,onChange:ie=>ie.target.value&&oe(Number(ie.target.value)),className:"w-full bg-white border border-gold-400/60 rounded-lg px-3 py-2 text-xs text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 font-serif",children:[o.jsx("option",{value:"",children:"-- Choose a template to pre-fill products and terms --"}),f.map(ie=>o.jsxs("option",{value:ie.id,children:[ie.name," (Valid ",ie.validity_days," days, Terms: ",ie.payment_terms,")"]},ie.id))]})]}),o.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Customer Account *"}),o.jsxs("select",{value:T,onChange:ie=>v(Number(ie.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white",children:[o.jsx("option",{value:"",children:"-- Select Customer --"}),c.map(ie=>o.jsxs("option",{value:ie.id,children:[ie.name," ",ie.company_name?`(${ie.company_name})`:""," - ",ie.email]},ie.id))]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Billing Frequency Plan *"}),o.jsxs("select",{value:w,onChange:ie=>O(Number(ie.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white",children:[o.jsx("option",{value:"",children:"-- Select Plan --"}),r.map(ie=>o.jsxs("option",{value:ie.id,children:[ie.name," ($",ie.cost," / ",ie.billing_interval,", Min Qty: ",ie.min_quantity,")"]},ie.id))]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Quotation Validity Period (Days)"}),o.jsx("input",{type:"number",value:W,onChange:ie=>z(Number(ie.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Payment Terms"}),o.jsxs("select",{value:N,onChange:ie=>B(ie.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white",children:[o.jsx("option",{value:"Immediate",children:"Immediate"}),o.jsx("option",{value:"Net 15",children:"Net 15"}),o.jsx("option",{value:"Net 30",children:"Net 30"}),o.jsx("option",{value:"Net 60",children:"Net 60"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Discount Code (Optional)"}),o.jsx("input",{type:"text",placeholder:"e.g. VOLUME20 or WELCOME100",value:V,onChange:ie=>L(ie.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 uppercase font-mono bg-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Start Date"}),o.jsx("input",{type:"date",value:H,onChange:ie=>j(ie.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between items-center mb-2",children:[o.jsx("span",{className:"text-xs font-serif font-bold text-burgundy-950 uppercase tracking-wider",children:"Product Lines & Variants"}),o.jsxs("button",{type:"button",onClick:me,className:"text-xs font-serif font-bold text-burgundy-900 hover:text-burgundy-950 flex items-center space-x-1",children:[o.jsx(_r,{className:"w-3.5 h-3.5 text-gold-600"}),o.jsx("span",{children:"Add Line"})]})]}),o.jsx("div",{className:"space-y-2 max-h-56 overflow-y-auto border border-gold-500/20 rounded-xl p-2.5 bg-cream-50",children:G.map((ie,Pe)=>{const C=a.find(be=>be.id===ie.product_id);return o.jsxs("div",{className:"bg-white p-2.5 rounded-lg border border-gold-500/20 grid grid-cols-12 gap-2 items-center text-xs shadow-sm",children:[o.jsx("div",{className:"col-span-4",children:o.jsx("select",{value:ie.product_id,onChange:be=>Ne(Pe,Number(be.target.value)),className:"w-full border border-cream-300 rounded px-2 py-1 text-burgundy-950",children:a.map(be=>o.jsxs("option",{value:be.id,children:[be.name," ($",be.sales_price,")"]},be.id))})}),o.jsx("div",{className:"col-span-3",children:o.jsxs("select",{value:ie.variant_id||"",onChange:be=>ye(Pe,be.target.value?Number(be.target.value):void 0),className:"w-full border border-cream-300 rounded px-2 py-1 text-burgundy-950",children:[o.jsx("option",{value:"",children:"Base (No Variant)"}),C==null?void 0:C.variants.map(be=>o.jsxs("option",{value:be.id,children:[be.attribute_value," (+$",be.extra_price,")"]},be.id))]})}),o.jsx("div",{className:"col-span-2",children:o.jsx("input",{type:"number",min:"1",value:ie.quantity,onChange:be=>{const Re=[...G];Re[Pe].quantity=Math.max(1,Number(be.target.value)),J(Re)},className:"w-full border border-cream-300 rounded px-2 py-1 text-center font-bold text-burgundy-950"})}),o.jsxs("div",{className:"col-span-2 text-right font-serif font-black text-burgundy-950",children:["$",(ie.quantity*ie.unit_price).toFixed(2)]}),o.jsx("div",{className:"col-span-1 text-right",children:o.jsx("button",{type:"button",onClick:()=>je(Pe),className:"text-rose-600 hover:text-rose-800 font-bold",children:"✕"})})]},Pe)})})]}),o.jsxs("div",{className:"flex flex-wrap justify-between items-center pt-3 border-t border-gold-500/20 gap-2",children:[o.jsx("button",{type:"button",onClick:()=>A(!1),className:"px-4 py-2 border border-gold-500/30 text-burgundy-900 rounded-xl text-xs font-serif font-bold hover:bg-cream-100 transition",children:"Cancel"}),o.jsxs("div",{className:"flex space-x-2.5",children:[o.jsx("button",{type:"button",onClick:()=>Be("Quotation"),disabled:ue,className:"px-4 py-2 bg-amber-700 hover:bg-amber-800 text-cream-50 rounded-xl text-xs font-serif font-bold transition shadow-sm",children:"Save as Quotation Offer"}),o.jsx("button",{type:"button",onClick:()=>Be("Active"),disabled:ue,className:"px-4 py-2 bg-gradient-to-r from-burgundy-900 to-burgundy-800 hover:from-burgundy-800 hover:to-burgundy-700 text-gold-300 border border-gold-400/60 rounded-xl text-xs font-serif font-bold transition shadow-gold-subtle",children:"Create & Activate Contract"})]})]})]})})]})},f1=({initialInvoiceId:t})=>{var V,L;const[e,n]=ne.useState([]),[i,r]=ne.useState(""),[s,a]=ne.useState("ALL"),[l,c]=ne.useState(null),[u,f]=ne.useState(!1),[m,h]=ne.useState(0),[g,_]=ne.useState("Bank Transfer"),[b,x]=ne.useState(new Date().toISOString().split("T")[0]),[d,p]=ne.useState(""),[y,S]=ne.useState(!1),A=async()=>{try{const N=await qe.getInvoices();if(n(N),t){const B=N.find(H=>H.id===t);B&&c(B)}}catch(N){console.error("Error loading invoices:",N)}};ne.useEffect(()=>{A()},[t]);const T=async(N,B)=>{var H,j;try{if(await qe.updateInvoiceStatus(N,B),await A(),(l==null?void 0:l.id)===N){const W=await qe.getInvoice(N);c(W)}}catch(W){alert(((j=(H=W.response)==null?void 0:H.data)==null?void 0:j.detail)||"Status action failed")}},v=async N=>{var B,H;try{const j=await qe.sendInvoice(N);if(alert(j.message),await A(),(l==null?void 0:l.id)===N){const W=await qe.getInvoice(N);c(W)}}catch(j){alert(((H=(B=j.response)==null?void 0:B.data)==null?void 0:H.detail)||"Failed to send invoice")}},w=N=>{c(N),h(N.amount_due),p(`Payment for ${N.invoice_number}`),f(!0)},O=async N=>{var B,H;if(N.preventDefault(),!!l){if(m<=0){alert("Payment amount must be greater than zero");return}S(!0);try{await qe.recordPayment(l.id,{payment_method:g,amount:Number(m),payment_date:b,reference_note:d}),f(!1),await A();const j=await qe.getInvoice(l.id);c(j)}catch(j){alert(((H=(B=j.response)==null?void 0:B.data)==null?void 0:H.detail)||"Failed to record payment")}finally{S(!1)}}},P=N=>{window.open(`/api/invoices/${N}/print`,"_blank","width=900,height=800")},U=e.filter(N=>{var W,z,G;const B=N.status==="Confirmed"&&new Date(N.due_date)<new Date&&N.amount_due>0,H=s==="ALL"||(s==="OVERDUE"?B:N.status===s),j=N.invoice_number.toLowerCase().includes(i.toLowerCase())||((W=N.customer)==null?void 0:W.name.toLowerCase().includes(i.toLowerCase()))||((G=(z=N.customer)==null?void 0:z.company_name)==null?void 0:G.toLowerCase().includes(i.toLowerCase()));return H&&j});return o.jsxs("div",{className:"space-y-6",children:[o.jsx("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-serif font-black text-burgundy-950 tracking-tight",children:"Invoices & Collections"}),o.jsx("p",{className:"text-cream-700 text-sm",children:"Automated recurring invoices, payment recording, customer receipts, and overdue tracking."})]})}),o.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[o.jsxs("div",{className:"relative flex-1",children:[o.jsx(I_,{className:"w-4 h-4 absolute left-3.5 top-3 text-gold-600"}),o.jsx("input",{type:"text",placeholder:"Search by invoice number or customer name...",value:i,onChange:N=>r(N.target.value),className:"w-full cream-card rounded-xl pl-10 pr-4 py-2.5 text-sm text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 placeholder:text-cream-500"})]}),o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx(w_,{className:"w-4 h-4 text-gold-600"}),o.jsxs("select",{value:s,onChange:N=>a(N.target.value),className:"cream-card rounded-xl px-3.5 py-2.5 text-sm text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 font-serif font-medium",children:[o.jsx("option",{value:"ALL",children:"All Invoices"}),o.jsx("option",{value:"Draft",children:"Draft"}),o.jsx("option",{value:"Confirmed",children:"Confirmed"}),o.jsx("option",{value:"Paid",children:"Paid"}),o.jsx("option",{value:"OVERDUE",children:"Overdue Only"}),o.jsx("option",{value:"Cancelled",children:"Cancelled"})]})]})]}),o.jsx("div",{className:"cream-card rounded-2xl overflow-hidden shadow-cinematic",children:o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-cream-100/70 text-burgundy-950 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3.5 px-4.5",children:"Invoice #"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Client"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Issue Date"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Due Date"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Total Amount"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Amount Due"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Status"}),o.jsx("th",{className:"py-3.5 px-4.5 text-right",children:"Ledger Actions"})]})}),o.jsxs("tbody",{className:"divide-y divide-gold-500/10",children:[U.map(N=>{var H,j;const B=N.status==="Confirmed"&&new Date(N.due_date)<new Date&&N.amount_due>0;return o.jsxs("tr",{className:"interactive-row cursor-pointer",children:[o.jsx("td",{className:"py-4 px-4.5 font-mono font-bold text-burgundy-950",children:N.invoice_number}),o.jsxs("td",{className:"py-4 px-4.5",children:[o.jsx("div",{className:"font-serif font-bold text-burgundy-950",children:(H=N.customer)==null?void 0:H.name}),o.jsx("div",{className:"text-[11px] text-cream-600",children:(j=N.customer)==null?void 0:j.company_name})]}),o.jsx("td",{className:"py-4 px-4.5 text-cream-800",children:N.issue_date}),o.jsx("td",{className:"py-4 px-4.5",children:o.jsx("span",{className:`font-semibold ${B?"text-rose-700 font-bold":"text-cream-800"}`,children:N.due_date})}),o.jsxs("td",{className:"py-4 px-4.5 font-serif font-bold text-burgundy-950",children:["$",N.total_amount.toFixed(2)]}),o.jsx("td",{className:"py-4 px-4.5 font-serif font-black",children:o.jsxs("span",{className:N.amount_due>0?B?"text-rose-700":"text-amber-800":"text-emerald-800",children:["$",N.amount_due.toFixed(2)]})}),o.jsx("td",{className:"py-4 px-4.5",children:B?o.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-300",children:"OVERDUE"}):o.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider ${N.status==="Paid"?"bg-emerald-100 text-emerald-900 border-emerald-300":N.status==="Confirmed"?"bg-amber-100 text-amber-900 border-amber-300":N.status==="Draft"?"bg-cream-200 text-burgundy-800 border-cream-400":"bg-rose-100 text-rose-800 border-rose-300"}`,children:N.status.toUpperCase()})}),o.jsxs("td",{className:"py-4 px-4.5 text-right space-x-1.5",children:[o.jsx("button",{onClick:()=>c(N),className:"px-2.5 py-1.5 bg-cream-100 hover:bg-cream-200 text-burgundy-950 border border-gold-500/30 rounded-lg font-serif font-bold text-xs transition",children:"Inspect"}),N.amount_due>0&&N.status!=="Cancelled"&&o.jsx("button",{onClick:()=>w(N),className:"px-3 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg font-serif font-bold text-xs shadow-sm transition",children:"Record Pay"})]})]},N.id)}),U.length===0&&o.jsx("tr",{children:o.jsx("td",{colSpan:8,className:"py-10 text-center text-cream-600 font-serif text-sm",children:"No invoices recorded on books."})})]})]})})}),l&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-3xl w-full p-6 space-y-6 my-8 border border-gold-400",children:[o.jsxs("div",{className:"flex justify-between items-start border-b border-gold-500/20 pb-4",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-mono font-bold text-burgundy-950 bg-gold-200/60 px-2.5 py-0.5 rounded border border-gold-400/60",children:l.invoice_number}),o.jsx("h2",{className:"text-2xl font-serif font-black text-burgundy-950 mt-1",children:"Invoice Ledger & Audit Trail"}),o.jsxs("p",{className:"text-xs text-cream-700",children:["Client: ",(V=l.customer)==null?void 0:V.name," (",(L=l.customer)==null?void 0:L.email,")"]})]}),o.jsx("button",{onClick:()=>c(null),className:"text-burgundy-800 hover:text-burgundy-950 font-bold text-xl",children:"✕"})]}),o.jsxs("div",{className:"p-3.5 bg-cream-100/60 border border-gold-500/30 rounded-xl flex flex-wrap items-center justify-between gap-2",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"text-xs font-serif font-bold text-burgundy-950",children:"Status:"}),o.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-serif font-bold bg-burgundy-900 text-gold-300 border border-gold-400/50",children:l.status})]}),o.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[l.status==="Draft"&&o.jsx("button",{onClick:()=>T(l.id,"confirm"),className:"px-3.5 py-1.5 bg-burgundy-800 hover:bg-burgundy-900 text-gold-200 border border-gold-400/50 rounded-lg text-xs font-serif font-bold shadow-sm transition",children:"Confirm Invoice"}),l.status!=="Paid"&&l.status!=="Cancelled"&&o.jsx("button",{onClick:()=>T(l.id,"cancel"),className:"px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300 rounded-lg text-xs font-serif font-bold transition",children:"Cancel Invoice"}),o.jsxs("button",{onClick:()=>v(l.id),className:"px-3.5 py-1.5 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg text-xs font-serif font-bold flex items-center space-x-1.5 transition shadow-sm",children:[o.jsx(n1,{className:"w-3.5 h-3.5 text-gold-400"}),o.jsx("span",{children:"Send to Customer"})]}),o.jsxs("button",{onClick:()=>P(l.id),className:"px-3.5 py-1.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 rounded-lg text-xs font-serif font-bold flex items-center space-x-1.5 transition shadow-gold-subtle",children:[o.jsx(t1,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Print / PDF View"})]}),l.amount_due>0&&o.jsxs("button",{onClick:()=>w(l),className:"px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-serif font-bold flex items-center space-x-1.5 transition shadow-sm",children:[o.jsx(y_,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"Record Payment"})]})]})]}),o.jsxs("div",{children:[o.jsxs("table",{className:"w-full text-xs text-left border border-gold-500/20 rounded-xl overflow-hidden",children:[o.jsx("thead",{className:"bg-cream-100/70 text-burgundy-950 font-serif font-bold",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-2.5 px-3.5",children:"Line Description"}),o.jsx("th",{className:"py-2.5 px-3.5 text-center",children:"Qty"}),o.jsx("th",{className:"py-2.5 px-3.5 text-right",children:"Unit Price"}),o.jsx("th",{className:"py-2.5 px-3.5 text-right",children:"Tax Rate"}),o.jsx("th",{className:"py-2.5 px-3.5 text-right",children:"Discount"}),o.jsx("th",{className:"py-2.5 px-3.5 text-right",children:"Amount"})]})}),o.jsx("tbody",{className:"divide-y divide-gold-500/10",children:l.lines.map(N=>o.jsxs("tr",{children:[o.jsx("td",{className:"py-3 px-3.5 font-serif font-bold text-burgundy-950",children:N.description}),o.jsx("td",{className:"py-3 px-3.5 text-center font-bold",children:N.quantity}),o.jsxs("td",{className:"py-3 px-3.5 text-right",children:["$",N.unit_price.toFixed(2)]}),o.jsxs("td",{className:"py-3 px-3.5 text-right",children:[N.tax_rate,"%"]}),o.jsxs("td",{className:"py-3 px-3.5 text-right text-emerald-800 font-bold",children:["-$",N.discount_amount.toFixed(2)]}),o.jsxs("td",{className:"py-3 px-3.5 text-right font-serif font-black text-burgundy-950",children:["$",N.amount.toFixed(2)]})]},N.id))})]}),o.jsx("div",{className:"mt-4 flex justify-end",children:o.jsxs("div",{className:"w-72 space-y-1.5 text-xs bg-cream-50 p-4 rounded-xl border border-gold-400/40 shadow-sm",children:[o.jsxs("div",{className:"flex justify-between text-cream-800",children:[o.jsx("span",{children:"Untaxed Subtotal:"}),o.jsxs("span",{className:"font-medium",children:["$",l.untaxed_amount.toFixed(2)]})]}),o.jsxs("div",{className:"flex justify-between text-emerald-800 font-bold",children:[o.jsx("span",{children:"Discount:"}),o.jsxs("span",{children:["-$",l.discount_amount.toFixed(2)]})]}),o.jsxs("div",{className:"flex justify-between text-cream-800",children:[o.jsx("span",{children:"Tax Amount:"}),o.jsxs("span",{className:"font-medium",children:["+$",l.tax_amount.toFixed(2)]})]}),o.jsxs("div",{className:"flex justify-between font-serif font-black text-sm text-burgundy-950 border-t border-gold-500/30 pt-1.5",children:[o.jsx("span",{children:"Total Billed:"}),o.jsxs("span",{children:["$",l.total_amount.toFixed(2)]})]}),o.jsxs("div",{className:"flex justify-between text-emerald-800 font-bold",children:[o.jsx("span",{children:"Amount Paid:"}),o.jsxs("span",{children:["$",l.amount_paid.toFixed(2)]})]}),o.jsxs("div",{className:"flex justify-between font-serif font-black text-base text-rose-700 border-t border-gold-500/30 pt-1.5",children:[o.jsx("span",{children:"Outstanding Due:"}),o.jsxs("span",{children:["$",l.amount_due.toFixed(2)]})]})]})})]}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xs font-serif font-black text-burgundy-950 uppercase tracking-wider mb-2.5",children:"Recorded Payments Log"}),l.payments.length===0?o.jsx("p",{className:"text-xs text-cream-600 italic",children:"No payments have been logged for this invoice yet."}):o.jsx("div",{className:"border border-gold-500/20 rounded-xl overflow-hidden",children:o.jsxs("table",{className:"w-full text-xs text-left",children:[o.jsx("thead",{className:"bg-cream-100/70 text-burgundy-950 font-serif font-bold",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-2.5 px-3.5",children:"Payment Date"}),o.jsx("th",{className:"py-2.5 px-3.5",children:"Method"}),o.jsx("th",{className:"py-2.5 px-3.5",children:"Reference / Statement Note"}),o.jsx("th",{className:"py-2.5 px-3.5 text-right",children:"Amount Settled"})]})}),o.jsx("tbody",{className:"divide-y divide-gold-500/10",children:l.payments.map(N=>o.jsxs("tr",{children:[o.jsx("td",{className:"py-2.5 px-3.5 font-mono",children:N.payment_date}),o.jsx("td",{className:"py-2.5 px-3.5 font-serif font-bold text-burgundy-950",children:N.payment_method}),o.jsx("td",{className:"py-2.5 px-3.5 text-cream-700",children:N.reference_note||"—"}),o.jsxs("td",{className:"py-2.5 px-3.5 text-right font-serif font-black text-emerald-800",children:["+$",N.amount.toFixed(2)]})]},N.id))})]})})]}),o.jsx("div",{className:"flex justify-end pt-3 border-t border-gold-500/20",children:o.jsx("button",{onClick:()=>c(null),className:"px-4 py-2 bg-cream-200 hover:bg-cream-300 text-burgundy-950 rounded-xl text-xs font-serif font-bold transition",children:"Close Ledger"})})]})}),u&&l&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-md w-full p-6 space-y-4 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-gold-500/20 pb-3",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-serif font-black text-burgundy-950",children:"Record Payment"}),o.jsxs("p",{className:"text-xs text-cream-700",children:["Invoice ",l.invoice_number]})]}),o.jsx("button",{onClick:()=>f(!1),className:"text-burgundy-800 font-bold text-lg",children:"✕"})]}),o.jsxs("form",{onSubmit:O,className:"space-y-4 text-xs",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Payment Method *"}),o.jsxs("select",{value:g,onChange:N=>_(N.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white",children:[o.jsx("option",{value:"Bank Transfer",children:"Bank Wire Transfer"}),o.jsx("option",{value:"Credit Card",children:"Credit Card"}),o.jsx("option",{value:"PayPal",children:"PayPal"}),o.jsx("option",{value:"Direct Debit",children:"Direct Debit"}),o.jsx("option",{value:"Cash",children:"Cash Ledger"})]})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:["Amount Received ($) * (Outstanding: $",l.amount_due.toFixed(2),")"]}),o.jsx("input",{type:"number",step:"0.01",max:l.amount_due,value:m,onChange:N=>h(Number(N.target.value)),className:"w-full border border-gold-500/40 rounded-lg px-3 py-2 text-burgundy-950 font-serif font-black text-sm focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Payment Date *"}),o.jsx("input",{type:"date",value:b,onChange:N=>x(N.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white font-mono",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Reference / Note"}),o.jsx("input",{type:"text",placeholder:"e.g. Bank statement tx ID or check number",value:d,onChange:N=>p(N.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"})]}),o.jsxs("div",{className:"flex justify-end space-x-2.5 pt-3 border-t border-gold-500/20",children:[o.jsx("button",{type:"button",onClick:()=>f(!1),className:"px-4 py-2 border border-gold-500/30 text-burgundy-900 rounded-xl font-serif font-bold hover:bg-cream-100 transition",children:"Cancel"}),o.jsx("button",{type:"submit",disabled:y,className:"px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 rounded-xl font-serif font-black transition shadow-gold-subtle",children:"Confirm & Post Payment"})]})]})]})})]})},h1=({currentUser:t})=>{const[e,n]=ne.useState([]),[i,r]=ne.useState(!1),[s,a]=ne.useState(""),[l,c]=ne.useState("software"),[u,f]=ne.useState(0),[m,h]=ne.useState(0),[g,_]=ne.useState(""),[b,x]=ne.useState([]),[d,p]=ne.useState(null),[y,S]=ne.useState("Brand"),[A,T]=ne.useState(""),[v,w]=ne.useState(0),O=async()=>{try{const L=await qe.getProducts();n(L)}catch(L){console.error("Error loading products:",L)}};ne.useEffect(()=>{O()},[]);const P=()=>{x([...b,{attribute_name:"Brand",attribute_value:"",extra_price:0}])},U=async L=>{var N,B;if(L.preventDefault(),!s.trim()){alert("Please enter a product name");return}try{await qe.createProduct({name:s,type:l,sales_price:Number(u),cost_price:Number(m),notes:g,variants:b}),r(!1),a(""),f(0),h(0),_(""),x([]),await O()}catch(H){alert(((B=(N=H.response)==null?void 0:N.data)==null?void 0:B.detail)||"Failed to create product")}},V=async L=>{var N,B;if(L.preventDefault(),!(!d||!A.trim()))try{await qe.addProductVariant(d.id,{attribute_name:y,attribute_value:A.trim(),extra_price:Number(v)}),p(null),T(""),w(0),await O()}catch(H){alert(((B=(N=H.response)==null?void 0:N.data)==null?void 0:B.detail)||"Failed to add variant")}};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-serif font-black text-burgundy-950 tracking-tight",children:"Products & Pricing Variants"}),o.jsx("p",{className:"text-cream-700 text-sm",children:"Configure software packages, service add-ons, cost baselines, and attribute variants (e.g. Odoo brand +$560)."})]}),(t==null?void 0:t.role)==="admin"&&o.jsxs("button",{onClick:()=>{x([{attribute_name:"Brand",attribute_value:"Odoo Edition",extra_price:560}]),r(!0)},className:"bg-gradient-to-r from-burgundy-900 via-burgundy-800 to-burgundy-900 hover:from-burgundy-800 hover:to-burgundy-700 text-gold-300 border border-gold-400/60 font-serif font-bold text-sm px-4 py-2.5 rounded-xl shadow-gold-subtle flex items-center space-x-2 transition duration-200",children:[o.jsx(_r,{className:"w-4 h-4 text-gold-400"}),o.jsx("span",{children:"New Product & Variants"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:e.map(L=>{const N=L.sales_price>0?((L.sales_price-L.cost_price)/L.sales_price*100).toFixed(0):0;return o.jsx("div",{className:"cream-card rounded-2xl p-5 shadow-sm hover:shadow-cinematic transition duration-300 flex flex-col justify-between",children:o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between items-start",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-serif font-bold uppercase tracking-wider text-burgundy-900 bg-gold-200/60 px-2.5 py-0.5 rounded border border-gold-400/50",children:L.type}),o.jsx("h3",{className:"text-lg font-serif font-black text-burgundy-950 mt-2",children:L.name})]}),o.jsxs("div",{className:"text-right",children:[o.jsxs("span",{className:"text-2xl font-serif font-black text-burgundy-950",children:["$",L.sales_price.toFixed(2)]}),o.jsxs("span",{className:"block text-[11px] text-cream-600",children:["Cost: $",L.cost_price.toFixed(2)," (",N,"% margin)"]})]})]}),o.jsx("p",{className:"text-xs text-cream-700 mt-2.5 line-clamp-2",children:L.notes||"No description notes provided."}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-gold-500/20",children:[o.jsxs("div",{className:"flex justify-between items-center mb-2",children:[o.jsxs("span",{className:"text-xs font-serif font-bold text-burgundy-950 flex items-center space-x-1.5",children:[o.jsx(Wc,{className:"w-3.5 h-3.5 text-gold-600"}),o.jsx("span",{children:"Available Brand / Tier Variants:"})]}),(t==null?void 0:t.role)==="admin"&&o.jsxs("button",{onClick:()=>p(L),className:"text-[11px] text-burgundy-900 hover:text-burgundy-950 font-serif font-bold flex items-center space-x-0.5",children:[o.jsx(_r,{className:"w-3 h-3 text-gold-600"}),o.jsx("span",{children:"Add"})]})]}),L.variants.length===0?o.jsx("span",{className:"text-xs text-cream-500 italic",children:"Standard base item (No surcharge variants)"}):o.jsx("div",{className:"flex flex-wrap gap-2",children:L.variants.map(B=>o.jsxs("div",{className:"text-xs bg-cream-50 border border-gold-500/30 px-3 py-1 rounded-lg flex items-center space-x-1.5 shadow-sm",children:[o.jsx("span",{className:"font-serif font-bold text-burgundy-950",children:B.attribute_value}),o.jsxs("span",{className:"font-mono font-bold text-gold-700 bg-gold-100/80 px-1.5 py-0.5 rounded text-[11px] border border-gold-400/40",children:["+$",B.extra_price]})]},B.id))})]})]})},L.id)})}),i&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-xl w-full p-6 space-y-4 my-8 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-gold-500/20 pb-3",children:[o.jsx("h3",{className:"text-xl font-serif font-black text-burgundy-950",children:"Add New Product & Variants"}),o.jsx("button",{onClick:()=>r(!1),className:"text-burgundy-800 font-bold text-lg",children:"✕"})]}),o.jsxs("form",{onSubmit:U,className:"space-y-4 text-xs",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Product Title *"}),o.jsx("input",{type:"text",placeholder:"e.g. Brightloop Enterprise ERP",value:s,onChange:L=>a(L.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white",required:!0})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Type"}),o.jsxs("select",{value:l,onChange:L=>c(L.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white",children:[o.jsx("option",{value:"software",children:"Software"}),o.jsx("option",{value:"service",children:"Service"}),o.jsx("option",{value:"addon",children:"Add-on"}),o.jsx("option",{value:"consumable",children:"Consumable"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Sales Price ($) *"}),o.jsx("input",{type:"number",step:"0.01",value:u,onChange:L=>f(Number(L.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-2 text-burgundy-950 font-serif font-bold focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Cost Price ($)"}),o.jsx("input",{type:"number",step:"0.01",value:m,onChange:L=>h(Number(L.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Product Notes"}),o.jsx("textarea",{rows:2,value:g,onChange:L=>_(L.target.value),placeholder:"Notes about product specifications, SLA, or licensing terms",className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white"})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between items-center mb-1.5",children:[o.jsx("span",{className:"font-serif font-bold text-burgundy-950",children:"Attribute Variants (e.g. Brand: Odoo adds 560)"}),o.jsxs("button",{type:"button",onClick:P,className:"text-burgundy-900 font-serif font-bold hover:text-burgundy-950 flex items-center space-x-1",children:[o.jsx(_r,{className:"w-3 h-3 text-gold-600"}),o.jsx("span",{children:"Add Variant"})]})]}),o.jsxs("div",{className:"space-y-2 border border-gold-500/20 rounded-xl p-2.5 bg-cream-50",children:[b.map((L,N)=>o.jsxs("div",{className:"grid grid-cols-12 gap-2 items-center bg-white p-2 rounded-lg border border-gold-500/20 shadow-sm",children:[o.jsx("input",{type:"text",placeholder:"Attribute (e.g. Brand)",value:L.attribute_name,onChange:B=>{const H=[...b];H[N].attribute_name=B.target.value,x(H)},className:"col-span-4 border border-cream-300 rounded px-2 py-1"}),o.jsx("input",{type:"text",placeholder:"Value (e.g. Odoo Edition)",value:L.attribute_value,onChange:B=>{const H=[...b];H[N].attribute_value=B.target.value,x(H)},className:"col-span-4 border border-cream-300 rounded px-2 py-1"}),o.jsxs("div",{className:"col-span-3 flex items-center space-x-1",children:[o.jsx("span",{className:"text-gold-700 font-bold",children:"+$"}),o.jsx("input",{type:"number",placeholder:"560",value:L.extra_price,onChange:B=>{const H=[...b];H[N].extra_price=Number(B.target.value),x(H)},className:"w-full border border-cream-300 rounded px-2 py-1 font-bold"})]}),o.jsx("button",{type:"button",onClick:()=>x(b.filter((B,H)=>H!==N)),className:"col-span-1 text-rose-600 font-bold text-center",children:"✕"})]},N)),b.length===0&&o.jsx("p",{className:"text-cream-600 italic text-center py-2",children:"No custom attribute variants added."})]})]}),o.jsxs("div",{className:"flex justify-end space-x-2 pt-3 border-t border-gold-500/20",children:[o.jsx("button",{type:"button",onClick:()=>r(!1),className:"px-4 py-2 border border-gold-500/30 text-burgundy-900 rounded-xl font-serif font-bold hover:bg-cream-100",children:"Cancel"}),o.jsx("button",{type:"submit",className:"px-4 py-2 bg-gradient-to-r from-burgundy-900 to-burgundy-800 hover:from-burgundy-800 text-gold-300 border border-gold-400/50 rounded-xl font-serif font-bold shadow-gold-subtle",children:"Save Product"})]})]})]})}),d&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-sm w-full p-6 space-y-4 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-gold-500/20 pb-3",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-base font-serif font-black text-burgundy-950",children:"Add Surcharge Variant"}),o.jsx("p",{className:"text-xs text-cream-700",children:d.name})]}),o.jsx("button",{onClick:()=>p(null),className:"text-burgundy-800 font-bold",children:"✕"})]}),o.jsxs("form",{onSubmit:V,className:"space-y-3.5 text-xs",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Attribute Name"}),o.jsx("input",{type:"text",value:y,onChange:L=>S(L.target.value),placeholder:"e.g. Brand, Tier, Edition",className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Attribute Value"}),o.jsx("input",{type:"text",value:A,onChange:L=>T(L.target.value),placeholder:"e.g. Odoo, Enterprise",className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Extra Surcharge (+$)"}),o.jsx("input",{type:"number",value:v,onChange:L=>w(Number(L.target.value)),placeholder:"e.g. 560",className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 font-serif font-bold bg-white",required:!0})]}),o.jsxs("div",{className:"flex justify-end space-x-2 pt-2 border-t border-gold-500/20",children:[o.jsx("button",{type:"button",onClick:()=>p(null),className:"px-3.5 py-1.5 border border-gold-500/30 rounded-lg font-serif font-bold",children:"Cancel"}),o.jsx("button",{type:"submit",className:"px-4 py-1.5 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400 rounded-lg font-serif font-bold shadow-sm",children:"Save Variant"})]})]})]})})]})},p1=({currentUser:t})=>{const[e,n]=ne.useState([]),[i,r]=ne.useState([]),[s,a]=ne.useState([]),[l,c]=ne.useState([]),[u,f]=ne.useState("plans"),[m,h]=ne.useState(!1),[g,_]=ne.useState(""),[b,x]=ne.useState(""),[d,p]=ne.useState(0),[y,S]=ne.useState("monthly"),[A,T]=ne.useState(1),[v,w]=ne.useState(new Date().toISOString().split("T")[0]),[O,P]=ne.useState(""),[U,V]=ne.useState(!1),[L,N]=ne.useState(!0),[B,H]=ne.useState(!0),[j,W]=ne.useState(!0),[z,G]=ne.useState(!1),[J,ue]=ne.useState(""),[Ae,X]=ne.useState(""),[oe,me]=ne.useState("percentage"),[Ne,ye]=ne.useState(10),[je,Be]=ne.useState(0),[Ee,Ge]=ne.useState(0),[Je,We]=ne.useState(new Date().toISOString().split("T")[0]),[xt,vt]=ne.useState(new Date(Date.now()+365*24*3600*1e3).toISOString().split("T")[0]),[Rt,Ke]=ne.useState(50),[_t,ot]=ne.useState("whole_subscription"),[Ut,ie]=ne.useState(""),[Pe,C]=ne.useState(!1),[be,Re]=ne.useState(""),[Fe,pe]=ne.useState(15),[Tt,Oe]=ne.useState("Global"),He=(t==null?void 0:t.role)==="admin",R=async()=>{try{const[k,le,Q,ee]=await Promise.all([qe.getPlans(),qe.getDiscounts(),qe.getTaxes(),qe.getProducts()]);n(k),r(le),a(Q),c(ee)}catch(k){console.error("Error loading plans/discounts:",k)}};ne.useEffect(()=>{R()},[]);const M=async k=>{var le,Q;k.preventDefault();try{await qe.createPlan({name:g,description:b,cost:Number(d),billing_interval:y,min_quantity:Number(A),start_date:v,end_date:O||void 0,auto_close_on_end:U,allow_early_close:L,allow_pause:B,allow_renew:j}),h(!1),_(""),x(""),p(0),await R()}catch(ee){alert(((Q=(le=ee.response)==null?void 0:le.data)==null?void 0:Q.detail)||"Failed to create plan")}},$=async k=>{var le,Q;if(k.preventDefault(),!He){alert("Only admin can create discount rules.");return}try{await qe.createDiscount({code:J.toUpperCase().trim(),description:Ae,discount_type:oe,discount_value:Number(Ne),min_purchase_amount:Number(je),min_quantity:Number(Ee),start_date:Je,end_date:xt,usage_limit:Rt?Number(Rt):void 0,applies_to:_t,product_id:Ut?Number(Ut):void 0}),G(!1),ue(""),X(""),await R()}catch(ee){alert(((Q=(le=ee.response)==null?void 0:le.data)==null?void 0:Q.detail)||"Failed to create discount rule")}},ae=async k=>{var le,Q;k.preventDefault();try{await qe.createTax({name:be,rate_percent:Number(Fe),country:Tt}),C(!1),Re(""),await R()}catch(ee){alert(((Q=(le=ee.response)==null?void 0:le.data)==null?void 0:Q.detail)||"Failed to create tax rule")}},se=async k=>{var le,Q;try{await qe.toggleDiscountActive(k),await R()}catch(ee){alert(((Q=(le=ee.response)==null?void 0:le.data)==null?void 0:Q.detail)||"Failed to toggle discount")}};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-serif font-black text-burgundy-950 tracking-tight",children:"Plans, Discounts & Taxes"}),o.jsx("p",{className:"text-cream-700 text-sm",children:"Control billing frequencies, lifecycle policies, admin discount rules, and automated tax calculations."})]}),o.jsxs("div",{className:"flex bg-cream-100 p-1 rounded-xl text-xs font-serif font-bold text-burgundy-900 border border-gold-500/30",children:[o.jsxs("button",{onClick:()=>f("plans"),className:`px-3.5 py-1.5 rounded-lg transition ${u==="plans"?"bg-burgundy-900 text-gold-300 shadow-sm border border-gold-400/40":"hover:text-burgundy-950"}`,children:["Billing Plans (",e.length,")"]}),o.jsxs("button",{onClick:()=>f("discounts"),className:`px-3.5 py-1.5 rounded-lg transition ${u==="discounts"?"bg-burgundy-900 text-gold-300 shadow-sm border border-gold-400/40":"hover:text-burgundy-950"}`,children:["Discount Rules (",i.length,")"]}),o.jsxs("button",{onClick:()=>f("taxes"),className:`px-3.5 py-1.5 rounded-lg transition ${u==="taxes"?"bg-burgundy-900 text-gold-300 shadow-sm border border-gold-400/40":"hover:text-burgundy-950"}`,children:["Tax Rules (",s.length,")"]})]})]}),u==="plans"&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsx("h2",{className:"text-sm font-serif font-bold uppercase tracking-wider text-burgundy-900",children:"Configured Plans & Policies"}),He&&o.jsxs("button",{onClick:()=>h(!0),className:"bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400/60 font-serif font-bold text-xs px-3.5 py-2 rounded-xl shadow-gold-subtle flex items-center space-x-1.5 transition",children:[o.jsx(_r,{className:"w-4 h-4 text-gold-400"}),o.jsx("span",{children:"Create Plan"})]})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5",children:e.map(k=>o.jsxs("div",{className:"cream-card rounded-2xl p-5 shadow-sm hover:shadow-cinematic transition duration-300 flex flex-col justify-between",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between items-start",children:[o.jsx("span",{className:"text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-gold-200/70 text-burgundy-950 border border-gold-400/50",children:k.billing_interval}),o.jsxs("span",{className:"text-2xl font-serif font-black text-burgundy-950",children:["$",k.cost.toFixed(2)]})]}),o.jsx("h3",{className:"text-lg font-serif font-black text-burgundy-950 mt-2",children:k.name}),o.jsx("p",{className:"text-xs text-cream-700 mt-1",children:k.description}),o.jsxs("div",{className:"mt-3.5 text-xs text-cream-800 space-y-1 bg-cream-50 p-3 rounded-xl border border-gold-500/20",children:[o.jsxs("div",{children:[o.jsx("strong",{children:"Min Quantity:"})," ",k.min_quantity," seat(s)"]}),o.jsxs("div",{children:[o.jsx("strong",{children:"Available Window:"})," ",k.start_date," ",k.end_date?`to ${k.end_date}`:"(Ongoing)"]})]})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-gold-500/20 text-[11px] space-y-1.5",children:[o.jsx("div",{className:"font-serif font-bold text-burgundy-950 mb-1",children:"Lifecycle Policies (Admin Decided):"}),o.jsxs("div",{className:"flex items-center space-x-1.5 text-cream-800",children:[o.jsx("span",{className:`w-2 h-2 rounded-full ${k.auto_close_on_end?"bg-amber-600":"bg-cream-400"}`}),o.jsxs("span",{children:["Auto-close when ends: ",o.jsx("strong",{children:k.auto_close_on_end?"Yes":"No"})]})]}),o.jsxs("div",{className:"flex items-center space-x-1.5 text-cream-800",children:[o.jsx("span",{className:`w-2 h-2 rounded-full ${k.allow_early_close?"bg-emerald-600":"bg-cream-400"}`}),o.jsxs("span",{children:["Allow early close: ",o.jsx("strong",{children:k.allow_early_close?"Allowed":"Locked"})]})]}),o.jsxs("div",{className:"flex items-center space-x-1.5 text-cream-800",children:[o.jsx("span",{className:`w-2 h-2 rounded-full ${k.allow_pause?"bg-emerald-600":"bg-cream-400"}`}),o.jsxs("span",{children:["Allow pause: ",o.jsx("strong",{children:k.allow_pause?"Allowed":"Disabled"})]})]}),o.jsxs("div",{className:"flex items-center space-x-1.5 text-cream-800",children:[o.jsx("span",{className:`w-2 h-2 rounded-full ${k.allow_renew?"bg-emerald-600":"bg-cream-400"}`}),o.jsxs("span",{children:["Allow renew: ",o.jsx("strong",{children:k.allow_renew?"Allowed":"Disabled"})]})]})]})]},k.id))})]}),u==="discounts"&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-serif font-bold uppercase tracking-wider text-burgundy-900",children:"Admin Discount Rules Engine"}),o.jsx("p",{className:"text-xs text-cream-700",children:'"Only the admin can create discount rules. Once applied, appears on the next invoice on its own, and stops when expired or runs out."'})]}),He?o.jsxs("button",{onClick:()=>G(!0),className:"bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400/60 font-serif font-bold text-xs px-3.5 py-2 rounded-xl shadow-gold-subtle flex items-center space-x-1.5 transition",children:[o.jsx(_r,{className:"w-4 h-4 text-gold-400"}),o.jsx("span",{children:"Create Discount Rule"})]}):o.jsx("span",{className:"text-xs text-burgundy-950 font-serif font-bold bg-gold-100 px-3 py-1.5 rounded-lg border border-gold-400/50",children:"Admin privilege required to create discount rules"})]}),o.jsx("div",{className:"cream-card rounded-2xl overflow-hidden shadow-cinematic",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-cream-100/70 text-burgundy-950 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3.5 px-4.5",children:"Rule Code"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Discount Value"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Thresholds"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Scope"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Valid Window"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Usage Ledger"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Status"}),He&&o.jsx("th",{className:"py-3.5 px-4.5 text-right",children:"Toggle"})]})}),o.jsx("tbody",{className:"divide-y divide-gold-500/10",children:i.map(k=>o.jsxs("tr",{className:"hover:bg-gold-50/40",children:[o.jsxs("td",{className:"py-4 px-4.5",children:[o.jsx("div",{className:"font-mono font-bold text-burgundy-950 text-sm",children:k.code}),o.jsx("div",{className:"text-[11px] text-cream-600",children:k.description})]}),o.jsx("td",{className:"py-4 px-4.5 font-serif font-black text-emerald-800 text-sm",children:k.discount_type==="percentage"?`${k.discount_value}% OFF`:`$${k.discount_value.toFixed(2)} OFF`}),o.jsxs("td",{className:"py-4 px-4.5 text-cream-800",children:[o.jsxs("div",{children:["Min Qty: ",k.min_quantity>0?`${k.min_quantity} seats`:"None"]}),o.jsxs("div",{children:["Min Spend: ",k.min_purchase_amount>0?`$${k.min_purchase_amount}`:"None"]})]}),o.jsx("td",{className:"py-4 px-4.5 font-medium text-cream-800",children:k.applies_to==="whole_subscription"?"Whole Subscription":`Specific Product (#${k.product_id})`}),o.jsxs("td",{className:"py-4 px-4.5 text-cream-700",children:[k.start_date," to ",k.end_date]}),o.jsxs("td",{className:"py-4 px-4.5 font-serif font-bold text-burgundy-950",children:[k.used_count," / ",k.usage_limit?k.usage_limit:"∞"," used",k.usage_limit&&k.used_count>=k.usage_limit&&o.jsx("span",{className:"block text-[10px] text-rose-700 font-bold",children:"EXHAUSTED"})]}),o.jsx("td",{className:"py-4 px-4.5",children:o.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider ${k.is_active?"bg-emerald-100 text-emerald-900 border-emerald-300":"bg-cream-200 text-cream-700 border-cream-400"}`,children:k.is_active?"ACTIVE":"INACTIVE"})}),He&&o.jsx("td",{className:"py-4 px-4.5 text-right",children:o.jsx("button",{onClick:()=>se(k.id),className:"text-xs font-serif font-bold text-burgundy-900 hover:text-burgundy-950",children:k.is_active?"Deactivate":"Activate"})})]},k.id))})]})})]}),u==="taxes"&&o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsxs("div",{children:[o.jsx("h2",{className:"text-sm font-serif font-bold uppercase tracking-wider text-burgundy-900",children:"Admin Tax Rules"}),o.jsx("p",{className:"text-xs text-cream-700",children:"Taxes are calculated automatically on quotes and recurring invoices from rules the admin has set."})]}),He&&o.jsxs("button",{onClick:()=>C(!0),className:"bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400/60 font-serif font-bold text-xs px-3.5 py-2 rounded-xl shadow-gold-subtle flex items-center space-x-1.5 transition",children:[o.jsx(_r,{className:"w-4 h-4 text-gold-400"}),o.jsx("span",{children:"Add Tax Rule"})]})]}),o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-5",children:s.map(k=>o.jsxs("div",{className:"cream-card rounded-2xl p-4.5 shadow-sm",children:[o.jsxs("div",{className:"flex justify-between items-center",children:[o.jsx("span",{className:"text-xs font-serif font-bold text-burgundy-950",children:k.name}),o.jsxs("span",{className:"text-xl font-serif font-black text-burgundy-950",children:[k.rate_percent,"%"]})]}),o.jsxs("div",{className:"mt-2 text-[11px] text-cream-600",children:["Region: ",k.country||"Global"]})]},k.id))})]}),m&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-lg w-full p-6 space-y-4 my-8 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-gold-500/20 pb-3",children:[o.jsx("h3",{className:"text-xl font-serif font-black text-burgundy-950",children:"Define New Billing Plan"}),o.jsx("button",{onClick:()=>h(!1),className:"text-burgundy-800 font-bold text-lg",children:"✕"})]}),o.jsxs("form",{onSubmit:M,className:"space-y-3.5 text-xs",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Plan Title *"}),o.jsx("input",{type:"text",placeholder:"e.g. Enterprise Dedicated",value:g,onChange:k=>_(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Description"}),o.jsx("input",{type:"text",placeholder:"Plan description notes",value:b,onChange:k=>x(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Cost ($) *"}),o.jsx("input",{type:"number",step:"0.01",value:d,onChange:k=>p(Number(k.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 font-serif font-bold bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Frequency *"}),o.jsxs("select",{value:y,onChange:k=>S(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 bg-white",children:[o.jsx("option",{value:"daily",children:"Daily"}),o.jsx("option",{value:"weekly",children:"Weekly"}),o.jsx("option",{value:"monthly",children:"Monthly"}),o.jsx("option",{value:"yearly",children:"Yearly"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Min Qty *"}),o.jsx("input",{type:"number",min:"1",value:A,onChange:k=>T(Number(k.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 font-bold bg-white",required:!0})]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Start Date *"}),o.jsx("input",{type:"date",value:v,onChange:k=>w(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 bg-white font-mono",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"End Date (Optional)"}),o.jsx("input",{type:"date",value:O,onChange:k=>P(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 bg-white font-mono"})]})]}),o.jsxs("div",{className:"border border-gold-500/30 bg-cream-50 p-3.5 rounded-xl space-y-2",children:[o.jsx("span",{className:"font-serif font-bold text-burgundy-950 block",children:"Admin Lifecycle Decider:"}),o.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:U,onChange:k=>V(k.target.checked),className:"rounded text-burgundy-800"}),o.jsx("span",{children:"Close on its own when period ends (Auto-close)"})]}),o.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:L,onChange:k=>N(k.target.checked),className:"rounded text-burgundy-800"}),o.jsx("span",{children:"Permit customers/team to close early"})]}),o.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:B,onChange:k=>H(k.target.checked),className:"rounded text-burgundy-800"}),o.jsx("span",{children:"Permit subscriptions on this plan to be paused"})]}),o.jsxs("label",{className:"flex items-center space-x-2 cursor-pointer",children:[o.jsx("input",{type:"checkbox",checked:j,onChange:k=>W(k.target.checked),className:"rounded text-burgundy-800"}),o.jsx("span",{children:"Permit renewal when closed"})]})]}),o.jsxs("div",{className:"flex justify-end space-x-2.5 pt-3 border-t border-gold-500/20",children:[o.jsx("button",{type:"button",onClick:()=>h(!1),className:"px-4 py-2 border border-gold-500/30 rounded-xl font-serif font-bold",children:"Cancel"}),o.jsx("button",{type:"submit",className:"px-4 py-2 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400 rounded-xl font-serif font-bold shadow-sm",children:"Save Plan"})]})]})]})}),z&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-lg w-full p-6 space-y-4 my-8 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-gold-500/20 pb-3",children:[o.jsx("h3",{className:"text-xl font-serif font-black text-burgundy-950",children:"Create Admin Discount Rule"}),o.jsx("button",{onClick:()=>G(!1),className:"text-burgundy-800 font-bold",children:"✕"})]}),o.jsxs("form",{onSubmit:$,className:"space-y-3.5 text-xs",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Discount Code *"}),o.jsx("input",{type:"text",placeholder:"e.g. SEATS20",value:J,onChange:k=>ue(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 uppercase font-mono font-bold bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Discount Type"}),o.jsxs("select",{value:oe,onChange:k=>me(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 bg-white",children:[o.jsx("option",{value:"percentage",children:"Percentage (%)"}),o.jsx("option",{value:"fixed",children:"Fixed Amount ($)"})]})]})]}),o.jsxs("div",{children:[o.jsxs("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:["Discount Value (",oe==="percentage"?"%":"$",") *"]}),o.jsx("input",{type:"number",step:"0.01",value:Ne,onChange:k=>ye(Number(k.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 font-serif font-bold bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Description"}),o.jsx("input",{type:"text",placeholder:"e.g. 20% discount for orders with 5+ seats",value:Ae,onChange:k=>X(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 bg-white"})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Min Quantity Required"}),o.jsx("input",{type:"number",value:Ee,onChange:k=>Ge(Number(k.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 bg-white font-bold"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Min Spend Amount ($)"}),o.jsx("input",{type:"number",value:je,onChange:k=>Be(Number(k.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 bg-white font-bold"})]})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-3",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Start Date *"}),o.jsx("input",{type:"date",value:Je,onChange:k=>We(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2 py-1.5 bg-white font-mono",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"End Date *"}),o.jsx("input",{type:"date",value:xt,onChange:k=>vt(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2 py-1.5 bg-white font-mono",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Usage Limit"}),o.jsx("input",{type:"number",placeholder:"e.g. 100",value:Rt,onChange:k=>Ke(k.target.value?Number(k.target.value):""),className:"w-full border border-gold-500/30 rounded-lg px-2 py-1.5 font-bold bg-white"})]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Applies To"}),o.jsxs("select",{value:_t,onChange:k=>ot(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 bg-white",children:[o.jsx("option",{value:"whole_subscription",children:"Whole Subscription Subtotal"}),o.jsx("option",{value:"specific_product",children:"Specific Product Line Only"})]})]}),_t==="specific_product"&&o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Select Applicable Product"}),o.jsxs("select",{value:Ut,onChange:k=>ie(Number(k.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 bg-white",children:[o.jsx("option",{value:"",children:"-- Select Product --"}),l.map(k=>o.jsx("option",{value:k.id,children:k.name},k.id))]})]}),o.jsxs("div",{className:"flex justify-end space-x-2 pt-3 border-t border-gold-500/20",children:[o.jsx("button",{type:"button",onClick:()=>G(!1),className:"px-4 py-2 border border-gold-500/30 rounded-xl font-serif font-bold",children:"Cancel"}),o.jsx("button",{type:"submit",className:"px-4 py-2 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400 rounded-xl font-serif font-bold shadow-sm",children:"Create Discount Rule"})]})]})]})}),Pe&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-sm w-full p-6 space-y-4 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-gold-500/20 pb-3",children:[o.jsx("h3",{className:"text-base font-serif font-black text-burgundy-950",children:"Add Tax Rule"}),o.jsx("button",{onClick:()=>C(!1),className:"text-burgundy-800 font-bold",children:"✕"})]}),o.jsxs("form",{onSubmit:ae,className:"space-y-3.5 text-xs",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Tax Name *"}),o.jsx("input",{type:"text",placeholder:"e.g. VAT Standard (15%)",value:be,onChange:k=>Re(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Rate Percent (%) *"}),o.jsx("input",{type:"number",step:"0.1",value:Fe,onChange:k=>pe(Number(k.target.value)),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 font-serif font-bold bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Country / Region"}),o.jsx("input",{type:"text",value:Tt,onChange:k=>Oe(k.target.value),className:"w-full border border-gold-500/30 rounded-lg px-2.5 py-1.5 text-burgundy-950 bg-white"})]}),o.jsxs("div",{className:"flex justify-end space-x-2 pt-2 border-t border-gold-500/20",children:[o.jsx("button",{type:"button",onClick:()=>C(!1),className:"px-3.5 py-1.5 border border-gold-500/30 rounded-lg font-serif font-bold",children:"Cancel"}),o.jsx("button",{type:"submit",className:"px-4 py-1.5 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400 rounded-lg font-serif font-bold shadow-sm",children:"Save Tax"})]})]})]})})]})},m1=({currentUser:t})=>{const[e,n]=ne.useState([]),[i,r]=ne.useState(!1),[s,a]=ne.useState(""),[l,c]=ne.useState(""),[u,f]=ne.useState(""),[m,h]=ne.useState(""),[g,_]=ne.useState(!1),b=(t==null?void 0:t.role)==="admin",x=async()=>{try{const p=await qe.getUsers();n(p)}catch(p){console.error("Error fetching users:",p)}};ne.useEffect(()=>{x()},[]);const d=async p=>{var y,S;if(p.preventDefault(),!b){alert("Only the admin can add a new member of staff.");return}_(!0);try{await qe.createStaff({email:s.trim().toLowerCase(),name:l.trim(),phone:u.trim()||void 0,password:m}),r(!1),a(""),c(""),f(""),h(""),await x(),alert("New staff member onboarded successfully!")}catch(A){alert(((S=(y=A.response)==null?void 0:y.data)==null?void 0:S.detail)||"Failed to create staff member")}finally{_(!1)}};return o.jsxs("div",{className:"space-y-6",children:[o.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[o.jsxs("div",{children:[o.jsxs("h1",{className:"text-2xl font-serif font-black text-burgundy-950 tracking-tight flex items-center space-x-2",children:[o.jsx(tp,{className:"w-7 h-7 text-gold-600"}),o.jsx("span",{children:"Staff & Team Access Governance"})]}),o.jsx("p",{className:"text-cream-700 text-sm",children:'Strict role-based access control. "Only the admin can add a new member of staff."'})]}),b&&o.jsxs("button",{onClick:()=>r(!0),className:"bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400/60 font-serif font-bold text-sm px-4 py-2.5 rounded-xl shadow-gold-subtle flex items-center space-x-2 transition duration-200",children:[o.jsx(s1,{className:"w-4 h-4 text-gold-400"}),o.jsx("span",{children:"Onboard New Staff Member"})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 text-xs",children:[o.jsxs("div",{className:"cream-card rounded-2xl p-5 shadow-sm border border-gold-400/50",children:[o.jsx("span",{className:"font-serif font-black text-burgundy-950 block text-sm",children:"Executive Admin"}),o.jsx("p",{className:"text-cream-800 mt-1.5 leading-relaxed",children:"Full governance across the system: products, pricing plans, automated tax rules, discount rules, staff invitations, and executive financial ledgers."})]}),o.jsxs("div",{className:"cream-card rounded-2xl p-5 shadow-sm border border-gold-400/30",children:[o.jsx("span",{className:"font-serif font-black text-burgundy-950 block text-sm",children:"Internal Staff Team"}),o.jsx("p",{className:"text-cream-800 mt-1.5 leading-relaxed",children:"Handles day-to-day work: builds quotes from templates, manages subscriptions, bills recurring cycles, and registers payments with limited system config access."})]}),o.jsxs("div",{className:"cream-card rounded-2xl p-5 shadow-sm border border-gold-400/30",children:[o.jsx("span",{className:"font-serif font-black text-burgundy-950 block text-sm",children:"Customer Self-Service"}),o.jsx("p",{className:"text-cream-800 mt-1.5 leading-relaxed",children:"Direct portal: customers see only their own subscriptions and invoices without emailing anyone. Can pause/renew as plan lifecycle rules permit."})]})]}),o.jsxs("div",{className:"cream-card rounded-2xl overflow-hidden shadow-cinematic",children:[o.jsx("div",{className:"px-6 py-4.5 bg-gradient-to-r from-cream-100 to-cream-50 border-b border-gold-500/20 flex justify-between items-center",children:o.jsx("h2",{className:"text-sm font-serif font-bold uppercase tracking-wider text-burgundy-950",children:"Registered Accounts & Personnel Roster"})}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-cream-100/70 text-burgundy-950 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3.5 px-5",children:"Personnel Name"}),o.jsx("th",{className:"py-3.5 px-5",children:"Email Identifier"}),o.jsx("th",{className:"py-3.5 px-5",children:"Organization / Unit"}),o.jsx("th",{className:"py-3.5 px-5",children:"Role Badge"}),o.jsx("th",{className:"py-3.5 px-5",children:"Phone Contact"})]})}),o.jsx("tbody",{className:"divide-y divide-gold-500/10",children:e.map(p=>o.jsxs("tr",{className:"hover:bg-gold-50/40 transition",children:[o.jsx("td",{className:"py-4 px-5 font-serif font-bold text-burgundy-950",children:p.name}),o.jsx("td",{className:"py-4 px-5 font-mono text-cream-800",children:p.email}),o.jsx("td",{className:"py-4 px-5 text-cream-700",children:p.company_name||"Brightloop Internal Staff"}),o.jsx("td",{className:"py-4 px-5",children:o.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border ${p.role==="admin"?"bg-gold-100 text-burgundy-950 border-gold-400 font-serif":p.role==="staff"?"bg-burgundy-100 text-burgundy-900 border-burgundy-300 font-serif":"bg-cream-200 text-cream-800 border-cream-300"}`,children:p.role})}),o.jsx("td",{className:"py-4 px-5 text-cream-600",children:p.phone||"—"})]},p.id))})]})})]}),i&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-md w-full p-6 space-y-4 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-gold-500/20 pb-3",children:[o.jsx("h3",{className:"text-xl font-serif font-black text-burgundy-950",children:"Onboard Internal Staff"}),o.jsx("button",{onClick:()=>r(!1),className:"text-burgundy-800 font-bold text-lg",children:"✕"})]}),o.jsxs("form",{onSubmit:d,className:"space-y-3.5 text-xs",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Full Name *"}),o.jsx("input",{type:"text",placeholder:"e.g. David Miller",value:l,onChange:p=>c(p.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Staff Email Address *"}),o.jsx("input",{type:"email",placeholder:"e.g. david.sales@brightloop.io",value:s,onChange:p=>a(p.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Direct Phone"}),o.jsx("input",{type:"text",placeholder:"+1 (800) 555-0188",value:u,onChange:p=>f(p.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Initial Password * (>8 chars, 1 uppercase, 1 lowercase, 1 special char)"}),o.jsx("input",{type:"password",placeholder:"StaffPassword!2026",value:m,onChange:p=>h(p.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 font-mono bg-white",required:!0})]}),o.jsxs("div",{className:"flex justify-end space-x-2 pt-3 border-t border-gold-500/20",children:[o.jsx("button",{type:"button",onClick:()=>r(!1),className:"px-4 py-2 border border-gold-500/30 rounded-xl font-serif font-bold",children:"Cancel"}),o.jsx("button",{type:"submit",disabled:g,className:"px-4 py-2 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400 rounded-xl font-serif font-bold shadow-sm",children:"Create Staff Account"})]})]})]})})]})},g1=({currentUser:t})=>{const[e,n]=ne.useState([]),[i,r]=ne.useState([]),[s,a]=ne.useState(null),[l,c]=ne.useState("Credit Card"),[u,f]=ne.useState(!1),m=async()=>{try{const[b,x]=await Promise.all([qe.getSubscriptions({customer_id:t.id}),qe.getInvoices({customer_id:t.id})]);n(b),r(x)}catch(b){console.error("Error fetching portal data:",b)}};ne.useEffect(()=>{m()},[t.id]);const h=async(b,x)=>{var d,p;try{await qe.updateSubscriptionStatus(b,x),await m()}catch(y){alert(((p=(d=y.response)==null?void 0:d.data)==null?void 0:p.detail)||"Action not permitted by plan policy")}},g=async b=>{var x,d;if(b.preventDefault(),!!s){f(!0);try{await qe.recordPayment(s.id,{payment_method:l,amount:s.amount_due,payment_date:new Date().toISOString().split("T")[0],reference_note:"Customer Portal Instant Settlement"}),a(null),await m(),alert("Payment successful! Your invoice is now marked as PAID.")}catch(p){alert(((d=(x=p.response)==null?void 0:x.data)==null?void 0:d.detail)||"Payment failed")}finally{f(!1)}}},_=b=>{window.open(`/api/invoices/${b}/print`,"_blank","width=900,height=800")};return o.jsxs("div",{className:"space-y-7",children:[o.jsxs("div",{className:"relative overflow-hidden rounded-2xl bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 border border-gold-500/40 p-7 shadow-cinematic-lg text-cream-50",children:[o.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none -mr-16 -mt-16"}),o.jsx("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 relative z-10",children:o.jsxs("div",{children:[o.jsx("span",{className:"text-xs font-serif font-bold uppercase tracking-wider text-gold-300 bg-gold-500/20 px-3 py-1 rounded-full border border-gold-400/40",children:"Customer Self-Service Portal"}),o.jsxs("h1",{className:"text-3xl font-serif font-black mt-2.5 gold-gradient-text",children:["Welcome, ",t.name]}),o.jsxs("p",{className:"text-cream-200/90 text-xs mt-1",children:[t.company_name," • Manage recurring plans, view payment terms, and settle invoices on demand without emailing support."]})]})})]}),o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic p-6 space-y-4",children:[o.jsxs("div",{className:"flex items-center space-x-2 border-b border-gold-500/20 pb-3",children:[o.jsx(Wc,{className:"w-5 h-5 text-gold-600"}),o.jsx("h2",{className:"text-base font-serif font-bold text-burgundy-950",children:"My Subscriptions & Contracts"})]}),e.length===0?o.jsx("p",{className:"text-xs text-cream-600 py-4 italic",children:"You do not have any active subscriptions on your account."}):o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:e.map(b=>{var d,p;const x=b.plan;return o.jsxs("div",{className:"border border-gold-500/30 rounded-2xl p-5 bg-gradient-to-b from-cream-50 to-white flex flex-col justify-between shadow-sm",children:[o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between items-start",children:[o.jsxs("div",{children:[o.jsx("span",{className:"text-[10px] font-mono font-bold text-burgundy-950 bg-gold-200/70 px-2.5 py-0.5 rounded border border-gold-400/40",children:b.subscription_number}),o.jsx("h3",{className:"text-lg font-serif font-black text-burgundy-950 mt-1.5",children:(d=b.plan)==null?void 0:d.name})]}),o.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] font-serif font-bold border ${b.status==="Active"?"bg-emerald-100 text-emerald-900 border-emerald-300":b.status==="Paused"?"bg-amber-100 text-amber-900 border-amber-300":"bg-cream-200 text-cream-800 border-cream-400"}`,children:b.status.toUpperCase()})]}),o.jsxs("div",{className:"mt-3.5 text-xs space-y-1.5 text-cream-800 bg-cream-50/80 p-3.5 rounded-xl border border-gold-500/20",children:[o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"Frequency:"}),o.jsx("span",{className:"font-serif font-bold capitalize text-burgundy-950",children:(p=b.plan)==null?void 0:p.billing_interval})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"Next Scheduled Billing:"}),o.jsx("span",{className:"font-serif font-bold text-emerald-800",children:b.status==="Active"?b.next_billing_date:"N/A"})]}),o.jsxs("div",{className:"flex justify-between",children:[o.jsx("span",{children:"Expiry Date:"}),o.jsx("span",{className:"text-cream-900",children:b.expiry_date})]}),o.jsxs("div",{className:"flex justify-between font-serif font-black text-sm text-burgundy-950 border-t border-gold-500/20 pt-1.5",children:[o.jsx("span",{children:"Recurring Charge:"}),o.jsxs("span",{children:["$",b.total_amount.toFixed(2)]})]})]}),o.jsxs("div",{className:"mt-3.5 text-xs",children:[o.jsx("span",{className:"font-serif font-bold text-burgundy-950 uppercase text-[10px] tracking-wider",children:"Package Contents:"}),o.jsx("ul",{className:"mt-1.5 space-y-1.5 text-cream-800",children:b.lines.map(y=>{var S;return o.jsxs("li",{className:"flex justify-between items-center bg-white px-2.5 py-1.5 rounded-lg border border-gold-500/15",children:[o.jsxs("span",{children:[(S=y.product)==null?void 0:S.name," ",y.variant?`(${y.variant.attribute_value})`:""," × ",y.quantity]}),o.jsxs("span",{className:"font-serif font-bold text-burgundy-950",children:["$",y.amount.toFixed(2)]})]},y.id)})})]})]}),o.jsxs("div",{className:"mt-4 pt-3 border-t border-gold-500/20 flex flex-wrap items-center gap-2",children:[b.status==="Active"&&(x==null?void 0:x.allow_pause)&&o.jsx("button",{onClick:()=>h(b.id,"Paused"),className:"px-3.5 py-1.5 bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-300 rounded-lg text-xs font-serif font-bold transition",children:"Pause Subscription"}),b.status==="Paused"&&o.jsx("button",{onClick:()=>h(b.id,"Active"),className:"px-3.5 py-1.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-lg text-xs font-serif font-bold transition",children:"Resume Subscription"}),b.status==="Active"&&(x==null?void 0:x.allow_early_close)&&o.jsx("button",{onClick:()=>h(b.id,"Closed"),className:"px-3.5 py-1.5 bg-rose-50 hover:bg-rose-100 text-rose-800 border border-rose-300 rounded-lg text-xs font-serif font-bold transition",children:"Cancel Plan"}),b.status==="Closed"&&(x==null?void 0:x.allow_renew)&&o.jsx("button",{onClick:()=>h(b.id,"Active"),className:"px-3.5 py-1.5 bg-gradient-to-r from-burgundy-900 to-burgundy-800 text-gold-300 border border-gold-400 rounded-lg text-xs font-serif font-bold transition shadow-sm",children:"Renew Subscription"})]})]},b.id)})})]}),o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic p-6 space-y-4",children:[o.jsxs("div",{className:"flex items-center space-x-2 border-b border-gold-500/20 pb-3",children:[o.jsx(ep,{className:"w-5 h-5 text-gold-600"}),o.jsx("h2",{className:"text-base font-serif font-bold text-burgundy-950",children:"My Invoices & Receipts"})]}),o.jsx("div",{className:"overflow-x-auto",children:o.jsxs("table",{className:"w-full text-left text-xs",children:[o.jsx("thead",{className:"bg-cream-100/70 text-burgundy-950 border-b border-gold-500/20 uppercase font-serif tracking-wider font-bold",children:o.jsxs("tr",{children:[o.jsx("th",{className:"py-3.5 px-4.5",children:"Invoice #"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Issue Date"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Due Date"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Total Amount"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Amount Due"}),o.jsx("th",{className:"py-3.5 px-4.5",children:"Status"}),o.jsx("th",{className:"py-3.5 px-4.5 text-right",children:"Self-Service Actions"})]})}),o.jsxs("tbody",{className:"divide-y divide-gold-500/10",children:[i.map(b=>o.jsxs("tr",{className:"hover:bg-gold-50/40",children:[o.jsx("td",{className:"py-4 px-4.5 font-mono font-bold text-burgundy-950",children:b.invoice_number}),o.jsx("td",{className:"py-4 px-4.5 text-cream-800",children:b.issue_date}),o.jsx("td",{className:"py-4 px-4.5 text-cream-800",children:b.due_date}),o.jsxs("td",{className:"py-4 px-4.5 font-serif font-bold text-burgundy-950",children:["$",b.total_amount.toFixed(2)]}),o.jsx("td",{className:"py-4 px-4.5 font-serif font-black",children:o.jsxs("span",{className:b.amount_due>0?"text-rose-700":"text-emerald-800",children:["$",b.amount_due.toFixed(2)]})}),o.jsx("td",{className:"py-4 px-4.5",children:o.jsx("span",{className:`px-2.5 py-0.5 rounded-full text-[10px] font-bold border tracking-wider ${b.status==="Paid"?"bg-emerald-100 text-emerald-900 border-emerald-300":b.status==="Confirmed"?"bg-amber-100 text-amber-900 border-amber-300":"bg-cream-200 text-cream-700 border-cream-400"}`,children:b.status.toUpperCase()})}),o.jsxs("td",{className:"py-4 px-4.5 text-right space-x-2",children:[o.jsx("button",{onClick:()=>_(b.id),className:"px-3 py-1.5 bg-cream-100 hover:bg-cream-200 text-burgundy-950 border border-gold-500/30 rounded-lg text-xs font-serif font-bold transition",children:"View / Print"}),b.amount_due>0&&o.jsx("button",{onClick:()=>a(b),className:"px-3.5 py-1.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 rounded-lg text-xs font-serif font-black shadow-gold-subtle transition",children:"Settle Online"})]})]},b.id)),i.length===0&&o.jsx("tr",{children:o.jsx("td",{colSpan:7,className:"py-10 text-center text-cream-600 italic",children:"No invoices recorded."})})]})]})})]}),s&&o.jsx("div",{className:"fixed inset-0 bg-burgundy-950/75 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in",children:o.jsxs("div",{className:"cream-card rounded-2xl shadow-cinematic-lg max-w-sm w-full p-6 space-y-4 border border-gold-400 animate-scale-in",children:[o.jsxs("div",{className:"flex justify-between items-center border-b border-gold-500/20 pb-3",children:[o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-serif font-black text-burgundy-950",children:"Settle Balance Online"}),o.jsx("p",{className:"text-xs text-cream-700",children:s.invoice_number})]}),o.jsx("button",{onClick:()=>a(null),className:"text-burgundy-800 font-bold text-lg",children:"✕"})]}),o.jsxs("form",{onSubmit:g,className:"space-y-4 text-xs",children:[o.jsxs("div",{className:"bg-gradient-to-r from-gold-50 to-cream-100 border border-gold-400/50 rounded-xl p-4 text-center shadow-sm",children:[o.jsx("span",{className:"text-xs font-serif font-bold text-burgundy-950",children:"Outstanding Balance Due"}),o.jsxs("div",{className:"text-3xl font-serif font-black text-burgundy-950 mt-1",children:["$",s.amount_due.toFixed(2)]})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Select Payment Method"}),o.jsxs("select",{value:l,onChange:b=>c(b.target.value),className:"w-full border border-gold-500/30 rounded-lg px-3 py-2 text-burgundy-950 bg-white",children:[o.jsx("option",{value:"Credit Card",children:"Credit Card (Stripe Checkout)"}),o.jsx("option",{value:"Bank Transfer",children:"Wire Transfer Confirmation"}),o.jsx("option",{value:"PayPal",children:"PayPal Balance"})]})]}),o.jsxs("div",{className:"flex justify-end space-x-2 pt-2 border-t border-gold-500/20",children:[o.jsx("button",{type:"button",onClick:()=>a(null),className:"px-4 py-2 border border-gold-500/30 rounded-xl font-serif font-bold",children:"Cancel"}),o.jsx("button",{type:"submit",disabled:u,className:"px-4 py-2 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 rounded-xl font-serif font-black shadow-gold-subtle",children:u?"Authorizing...":`Pay $${s.amount_due.toFixed(2)}`})]})]})]})})]})},x1=({onSuccess:t})=>{const[e,n]=ne.useState("login"),[i,r]=ne.useState(""),[s,a]=ne.useState(""),[l,c]=ne.useState(""),[u,f]=ne.useState(""),[m,h]=ne.useState(""),[g,_]=ne.useState(""),[b,x]=ne.useState(null),[d,p]=ne.useState(!1),y=s.length>8,S=/[A-Z]/.test(s),A=/[a-z]/.test(s),T=/[!@#$%^&*(),.?":{}|<>]/.test(s),v=y&&S&&A&&T,w=async L=>{var N,B;L.preventDefault(),p(!0),x(null);try{const H=await qe.login(i.trim().toLowerCase(),s);localStorage.setItem("token",H.access_token),t(H.user,H.access_token)}catch(H){x({text:((B=(N=H.response)==null?void 0:N.data)==null?void 0:B.detail)||"Invalid email or password",type:"error"})}finally{p(!1)}},O=async L=>{var N,B;if(L.preventDefault(),!v){x({text:"Password does not satisfy security requirements",type:"error"});return}p(!0),x(null);try{const H=await qe.register({email:i.trim().toLowerCase(),password:s,name:l,company_name:u});localStorage.setItem("token",H.access_token),t(H.user,H.access_token)}catch(H){x({text:((B=(N=H.response)==null?void 0:N.data)==null?void 0:B.detail)||"Registration failed. Email might already be taken.",type:"error"})}finally{p(!1)}},P=async L=>{L.preventDefault(),p(!0),x(null);try{const N=await qe.forgotPassword(i.trim().toLowerCase());N.reset_token?(h(N.reset_token),x({text:`Reset link dispatched! Simulation token: ${N.reset_token}`,type:"success"}),n("reset")):x({text:N.message,type:"success"})}catch{x({text:"Error dispatching reset link",type:"error"})}finally{p(!1)}},U=async L=>{var N,B;L.preventDefault(),p(!0),x(null);try{const H=await qe.resetPassword({email:i.trim().toLowerCase(),reset_token:m,new_password:g});x({text:H.message,type:"success"}),n("login")}catch(H){x({text:((B=(N=H.response)==null?void 0:N.data)==null?void 0:B.detail)||"Reset failed. Token may be invalid or expired.",type:"error"})}finally{p(!1)}},V=(L,N)=>{r(L),a(N),n("login")};return o.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-burgundy-950 flex flex-col justify-center items-center p-4 relative overflow-hidden",children:[o.jsx("div",{className:"absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"}),o.jsx("div",{className:"absolute bottom-1/4 right-1/4 w-96 h-96 bg-burgundy-600/20 rounded-full blur-3xl pointer-events-none"}),o.jsxs("div",{className:"max-w-md w-full cream-card rounded-3xl shadow-cinematic-lg overflow-hidden border border-gold-400 relative z-10 animate-scale-in",children:[o.jsxs("div",{className:"bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-burgundy-950 p-7 text-center border-b border-gold-500/30",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-300 via-gold-500 to-gold-700 p-[1.5px] mx-auto shadow-gold-glow",children:o.jsx("div",{className:"w-full h-full bg-burgundy-950 rounded-[14px] flex items-center justify-center font-serif font-black text-2xl text-gold-300 tracking-wider",children:"B"})}),o.jsx("h1",{className:"text-2xl font-serif font-black mt-3.5 gold-gradient-text tracking-wide",children:"Brightloop Software"}),o.jsx("p",{className:"text-cream-200/90 text-xs mt-1 font-serif tracking-widest uppercase",children:"Subscription OS & Recurring Ledger"})]}),o.jsxs("div",{className:"bg-gradient-to-r from-cream-100 via-cream-50 to-cream-100 px-5 py-3 border-b border-gold-500/20 text-xs",children:[o.jsxs("div",{className:"text-[11px] font-serif font-bold text-burgundy-900 uppercase tracking-wider mb-2 text-center flex items-center justify-center space-x-1",children:[o.jsx(ao,{className:"w-3.5 h-3.5 text-gold-600"}),o.jsx("span",{children:"Instant Demo Accounts"})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[o.jsx("button",{type:"button",onClick:()=>V("admin@brightloop.io","BrightloopAdmin!2026"),className:"py-1.5 px-2 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg font-serif font-bold text-[11px] transition text-center shadow-sm",children:"👑 Admin"}),o.jsx("button",{type:"button",onClick:()=>V("sarah.sales@brightloop.io","StaffMember!2026"),className:"py-1.5 px-2 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg font-serif font-bold text-[11px] transition text-center shadow-sm",children:"💼 Staff"}),o.jsx("button",{type:"button",onClick:()=>V("alice@techflow.com","CustomerPass!2026"),className:"py-1.5 px-2 bg-burgundy-900 hover:bg-burgundy-800 text-gold-300 border border-gold-400/50 rounded-lg font-serif font-bold text-[11px] transition text-center shadow-sm",children:"🏢 Customer"})]})]}),b&&o.jsx("div",{className:`p-3.5 text-xs mx-6 mt-4 rounded-xl font-serif font-semibold ${b.type==="error"?"bg-rose-50 text-rose-800 border border-rose-300":"bg-emerald-50 text-emerald-900 border border-emerald-300"}`,children:b.text}),e==="login"&&o.jsxs("form",{onSubmit:w,className:"p-6 space-y-4 text-xs",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Email Address"}),o.jsxs("div",{className:"relative",children:[o.jsx(e1,{className:"w-4 h-4 text-gold-600 absolute left-3 top-2.5"}),o.jsx("input",{type:"email",value:i,onChange:L=>r(L.target.value),placeholder:"admin@brightloop.io",className:"w-full border border-gold-500/30 rounded-xl pl-9 pr-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white",required:!0})]})]}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex justify-between items-center mb-1",children:[o.jsx("label",{className:"font-serif font-bold text-burgundy-950",children:"Password"}),o.jsx("button",{type:"button",onClick:()=>{n("forgot"),x(null)},className:"text-burgundy-800 hover:text-burgundy-950 font-serif font-semibold text-[11px] underline",children:"Forgot password?"})]}),o.jsxs("div",{className:"relative",children:[o.jsx(QE,{className:"w-4 h-4 text-gold-600 absolute left-3 top-2.5"}),o.jsx("input",{type:"password",value:s,onChange:L=>a(L.target.value),placeholder:"••••••••••••",className:"w-full border border-gold-500/30 rounded-xl pl-9 pr-3 py-2 text-burgundy-950 focus:outline-none focus:ring-1 focus:ring-gold-500 bg-white font-mono",required:!0})]})]}),o.jsxs("button",{type:"submit",disabled:d,className:"w-full py-2.5 bg-gradient-to-r from-gold-600 via-gold-500 to-gold-600 hover:from-gold-500 hover:to-gold-400 text-burgundy-950 font-serif font-black rounded-xl shadow-gold-subtle transition text-sm flex justify-center items-center space-x-1.5",children:[o.jsx("span",{children:"Authenticate Account"}),o.jsx(l_,{className:"w-4 h-4"})]}),o.jsxs("div",{className:"text-center pt-2 text-cream-800",children:["New client?"," ",o.jsx("button",{type:"button",onClick:()=>{n("register"),x(null)},className:"text-burgundy-900 font-serif font-bold hover:underline",children:"Create business account"})]})]}),e==="register"&&o.jsxs("form",{onSubmit:O,className:"p-6 space-y-3.5 text-xs",children:[o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Full Legal Name *"}),o.jsx("input",{type:"text",value:l,onChange:L=>c(L.target.value),placeholder:"e.g. Jane Doe",className:"w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Company / Organization"}),o.jsx("input",{type:"text",value:u,onChange:L=>f(L.target.value),placeholder:"e.g. Acme Innovations Ltd",className:"w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 bg-white"})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Corporate Email *"}),o.jsx("input",{type:"email",value:i,onChange:L=>r(L.target.value),placeholder:"jane@acme.com",className:"w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Password *"}),o.jsx("input",{type:"password",value:s,onChange:L=>a(L.target.value),placeholder:"Must satisfy criteria below",className:"w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 font-mono bg-white",required:!0}),o.jsxs("div",{className:"mt-2.5 p-3 bg-cream-50 border border-gold-500/30 rounded-xl space-y-1 text-[11px]",children:[o.jsx("div",{className:"font-serif font-bold text-burgundy-950 mb-1",children:"Security Criteria:"}),o.jsxs("div",{className:`flex items-center space-x-1.5 ${y?"text-emerald-800 font-bold":"text-cream-600"}`,children:[y?o.jsx($o,{className:"w-3.5 h-3.5 text-emerald-600"}):o.jsx(Yo,{className:"w-3.5 h-3.5"}),o.jsxs("span",{children:["More than 8 characters (",s.length,"/9+)"]})]}),o.jsxs("div",{className:`flex items-center space-x-1.5 ${S?"text-emerald-800 font-bold":"text-cream-600"}`,children:[S?o.jsx($o,{className:"w-3.5 h-3.5 text-emerald-600"}):o.jsx(Yo,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"At least one uppercase letter (A-Z)"})]}),o.jsxs("div",{className:`flex items-center space-x-1.5 ${A?"text-emerald-800 font-bold":"text-cream-600"}`,children:[A?o.jsx($o,{className:"w-3.5 h-3.5 text-emerald-600"}):o.jsx(Yo,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"At least one lowercase letter (a-z)"})]}),o.jsxs("div",{className:`flex items-center space-x-1.5 ${T?"text-emerald-800 font-bold":"text-cream-600"}`,children:[T?o.jsx($o,{className:"w-3.5 h-3.5 text-emerald-600"}):o.jsx(Yo,{className:"w-3.5 h-3.5"}),o.jsx("span",{children:"At least one special character (!@#$%^&*...)"})]})]})]}),o.jsx("button",{type:"submit",disabled:d||!v,className:"w-full py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 hover:from-gold-500 hover:to-gold-400 disabled:opacity-50 text-burgundy-950 font-serif font-black rounded-xl shadow-gold-subtle transition text-sm",children:"Create Client Portal Account"}),o.jsxs("div",{className:"text-center pt-1 text-cream-800",children:["Existing account?"," ",o.jsx("button",{type:"button",onClick:()=>{n("login"),x(null)},className:"text-burgundy-900 font-serif font-bold hover:underline",children:"Sign in"})]})]}),e==="forgot"&&o.jsxs("form",{onSubmit:P,className:"p-6 space-y-4 text-xs",children:[o.jsx("p",{className:"text-cream-800 leading-relaxed font-serif",children:"Enter your registered email address. A password reset token link will be dispatched to your inbox."}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Registered Email"}),o.jsx("input",{type:"email",value:i,onChange:L=>r(L.target.value),placeholder:"alice@techflow.com",className:"w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 bg-white",required:!0})]}),o.jsx("button",{type:"submit",disabled:d,className:"w-full py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-burgundy-950 font-serif font-black rounded-xl shadow-gold-subtle transition text-sm",children:"Dispatch Reset Token"}),o.jsx("div",{className:"text-center",children:o.jsx("button",{type:"button",onClick:()=>{n("login"),x(null)},className:"text-burgundy-800 hover:text-burgundy-950 font-serif font-bold",children:"← Back to Login"})})]}),e==="reset"&&o.jsxs("form",{onSubmit:U,className:"p-6 space-y-3.5 text-xs",children:[o.jsx("p",{className:"text-cream-800 leading-relaxed font-serif",children:"Enter the reset token sent to your email and your new secure password."}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"Reset Token"}),o.jsx("input",{type:"text",value:m,onChange:L=>h(L.target.value),className:"w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 font-mono bg-white",required:!0})]}),o.jsxs("div",{children:[o.jsx("label",{className:"block font-serif font-bold text-burgundy-950 mb-1",children:"New Password"}),o.jsx("input",{type:"password",value:g,onChange:L=>_(L.target.value),placeholder:"NewSecurePass!2026",className:"w-full border border-gold-500/30 rounded-xl px-3 py-2 text-burgundy-950 font-mono bg-white",required:!0})]}),o.jsx("button",{type:"submit",disabled:d,className:"w-full py-2.5 bg-gradient-to-r from-gold-600 to-gold-500 text-burgundy-950 font-serif font-black rounded-xl shadow-gold-subtle transition text-sm",children:"Update Password & Enter"}),o.jsx("div",{className:"text-center",children:o.jsx("button",{type:"button",onClick:()=>{n("login"),x(null)},className:"text-burgundy-800 hover:text-burgundy-950 font-serif font-bold",children:"← Back to Login"})})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const np="187",v1=0,v0=1,_1=2,kl=1,y1=2,Ra=3,es=0,Cn=1,Di=2,Bs=0,za=1,lf=2,_0=3,y0=4,S1=5,ys=100,b1=101,w1=102,M1=103,E1=104,T1=200,A1=201,N1=202,R1=203,G_=204,W_=205,C1=206,P1=207,D1=208,L1=209,I1=210,U1=211,O1=212,F1=213,k1=214,cf=0,uf=1,df=2,oo=3,ff=4,hf=5,pf=6,mf=7,X_=0,B1=1,z1=2,Fi=0,$_=1,q_=2,Y_=3,ip=4,K_=5,Z_=6,Q_=7,J_=300,qs=301,lo=302,Iu=303,Uu=304,gf=1e3,Ui=1001,xf=1002,nn=1003,j1=1004,Ko=1005,En=1006,Ou=1007,cr=1008,In=1009,ey=1010,ty=1011,co=1012,rp=1013,bi=1014,gi=1015,wi=1016,sp=1017,ap=1018,Ys=1020,ny=35902,iy=35899,ry=1021,sy=1022,xi=1023,Mr=1026,ur=1027,ay=1028,op=1029,ts=1030,lp=1031,cp=1033,Bl=33776,zl=33777,jl=33778,Hl=33779,vf=35840,_f=35841,yf=35842,Sf=35843,bf=36196,wf=37492,Mf=37496,Ef=37488,Tf=37489,xc=37490,Af=37491,Nf=37808,Rf=37809,Cf=37810,Pf=37811,Df=37812,Lf=37813,If=37814,Uf=37815,Of=37816,Ff=37817,kf=37818,Bf=37819,zf=37820,jf=37821,Hf=36492,Vf=36494,Gf=36495,Wf=36283,Xf=36284,vc=36285,$f=36286,H1=3200,qf=0,V1=1,ar="",jn="srgb",_c="srgb-linear",yc="linear",mt="srgb",Fu=7680,G1=519,W1=512,X1=513,$1=514,oy=515,q1=516,Y1=517,ly=518,cy=519,K1=35044,S0="300 es",si=2e3,uo=2001;function Z1(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Sc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Q1(){const t=Sc("canvas");return t.style.display="block",t}const b0={};function w0(...t){const e="THREE."+t.shift();console.log(e,...t)}function uy(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ve(...t){t=uy(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ft(...t){t=uy(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Vl(...t){const e=t.join(" ");e in b0||(b0[e]=!0,Ve(...t))}function J1(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const eT={[cf]:cf,[df]:pf,[ff]:ff,[oo]:hf,[uf]:uf,[pf]:df,[mf]:mf,[hf]:oo};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let M0=1234567;const ja=Math.PI/180,fo=180/Math.PI;function ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dn[t&255]+dn[t>>8&255]+dn[t>>16&255]+dn[t>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[n&63|128]+dn[n>>8&255]+"-"+dn[n>>16&255]+dn[n>>24&255]+dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function up(t,e){return(t%e+e)%e}function tT(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function nT(t,e,n){return t!==e?(n-t)/(e-t):0}function Ha(t,e,n){return(1-n)*t+n*e}function iT(t,e,n,i){return Ha(t,e,1-Math.exp(-n*i))}function rT(t,e=1){return e-Math.abs(up(t,e*2)-e)}function sT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function aT(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function oT(t,e){return t+Math.floor(Math.random()*(e-t+1))}function lT(t,e){return t+Math.random()*(e-t)}function cT(t){return t*(.5-Math.random())}function uT(t){t!==void 0&&(M0=t);let e=M0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dT(t){return t*ja}function fT(t){return t*fo}function hT(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function pT(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function dy(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function mT(t,e,n,i,r){const s=Math.cos,a=Math.sin,l=s(n/2),c=a(n/2),u=s((e+i)/2),f=a((e+i)/2),m=s((e-i)/2),h=a((e-i)/2),g=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(l*f,c*m,c*h,l*u);break;case"YZY":t.set(c*h,l*f,c*m,l*u);break;case"ZXZ":t.set(c*m,c*h,l*f,l*u);break;case"XZX":t.set(l*f,c*_,c*g,l*u);break;case"YXY":t.set(c*g,l*f,c*_,l*u);break;case"ZYZ":t.set(c*_,c*g,l*f,l*u);break;default:Ve("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function dp(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function fy(t,e){if(e.constructor===Float32Array)return t;const n=dp(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function hy(t,e){if(e.constructor===Float32Array)return t;const n=dp(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}const gT={DEG2RAD:ja,RAD2DEG:fo,generateUUID:ia,clamp:it,euclideanModulo:up,mapLinear:tT,inverseLerp:nT,lerp:Ha,damp:iT,pingpong:rT,smoothstep:sT,smootherstep:aT,randInt:oT,randFloat:lT,randFloatSpread:cT,seededRandom:uT,degToRad:dT,radToDeg:fT,isPowerOfTwo:hT,ceilPowerOfTwo:pT,floorPowerOfTwo:dy,setQuaternionFromProperEuler:mT,normalize:hy,denormalize:fy},vp=class vp{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};vp.prototype.isVector2=!0;let at=vp;class ra{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,l){let c=i[r+0],u=i[r+1],f=i[r+2],m=i[r+3],h=s[a+0],g=s[a+1],_=s[a+2],b=s[a+3];if(m!==b||c!==h||u!==g||f!==_){let x=c*h+u*g+f*_+m*b;x<0&&(h=-h,g=-g,_=-_,b=-b,x=-x);let d=1-l;if(x<.9995){const p=Math.acos(x),y=Math.sin(p);d=Math.sin(d*p)/y,l=Math.sin(l*p)/y,c=c*d+h*l,u=u*d+g*l,f=f*d+_*l,m=m*d+b*l}else{c=c*d+h*l,u=u*d+g*l,f=f*d+_*l,m=m*d+b*l;const p=1/Math.sqrt(c*c+u*u+f*f+m*m);c*=p,u*=p,f*=p,m*=p}}e[n]=c,e[n+1]=u,e[n+2]=f,e[n+3]=m}static multiplyQuaternionsFlat(e,n,i,r,s,a){const l=i[r],c=i[r+1],u=i[r+2],f=i[r+3],m=s[a],h=s[a+1],g=s[a+2],_=s[a+3];return e[n]=l*_+f*m+c*g-u*h,e[n+1]=c*_+f*h+u*m-l*g,e[n+2]=u*_+f*g+l*h-c*m,e[n+3]=f*_-l*m-c*h-u*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,l=Math.cos,c=Math.sin,u=l(i/2),f=l(r/2),m=l(s/2),h=c(i/2),g=c(r/2),_=c(s/2);switch(a){case"XYZ":this._x=h*f*m+u*g*_,this._y=u*g*m-h*f*_,this._z=u*f*_+h*g*m,this._w=u*f*m-h*g*_;break;case"YXZ":this._x=h*f*m+u*g*_,this._y=u*g*m-h*f*_,this._z=u*f*_-h*g*m,this._w=u*f*m+h*g*_;break;case"ZXY":this._x=h*f*m-u*g*_,this._y=u*g*m+h*f*_,this._z=u*f*_+h*g*m,this._w=u*f*m-h*g*_;break;case"ZYX":this._x=h*f*m-u*g*_,this._y=u*g*m+h*f*_,this._z=u*f*_-h*g*m,this._w=u*f*m+h*g*_;break;case"YZX":this._x=h*f*m+u*g*_,this._y=u*g*m+h*f*_,this._z=u*f*_-h*g*m,this._w=u*f*m-h*g*_;break;case"XZY":this._x=h*f*m-u*g*_,this._y=u*g*m-h*f*_,this._z=u*f*_+h*g*m,this._w=u*f*m+h*g*_;break;default:Ve("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],l=n[5],c=n[9],u=n[2],f=n[6],m=n[10],h=i+l+m;if(h>0){const g=.5/Math.sqrt(h+1);this._w=.25/g,this._x=(f-c)*g,this._y=(s-u)*g,this._z=(a-r)*g}else if(i>l&&i>m){const g=2*Math.sqrt(1+i-l-m);this._w=(f-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+u)/g}else if(l>m){const g=2*Math.sqrt(1+l-i-m);this._w=(s-u)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+f)/g}else{const g=2*Math.sqrt(1+m-i-l);this._w=(a-r)/g,this._x=(s+u)/g,this._y=(c+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,l=n._x,c=n._y,u=n._z,f=n._w;return this._x=i*f+a*l+r*u-s*c,this._y=r*f+a*c+s*l-i*u,this._z=s*f+a*u+i*c-r*l,this._w=a*f-i*l-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,l=this.dot(e);l<0&&(i=-i,r=-r,s=-s,a=-a,l=-l);let c=1-n;if(l<.9995){const u=Math.acos(l),f=Math.sin(u);c=Math.sin(c*u)/f,n=Math.sin(n*u)/f,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const _p=class _p{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(E0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(E0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,l=e.z,c=e.w,u=2*(a*r-l*i),f=2*(l*n-s*r),m=2*(s*i-a*n);return this.x=n+c*u+a*m-l*f,this.y=i+c*f+l*u-s*m,this.z=r+c*m+s*f-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,l=n.y,c=n.z;return this.x=r*c-s*l,this.y=s*a-i*c,this.z=i*l-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ku.copy(this).projectOnVector(e),this.sub(ku)}reflect(e){return this.sub(ku.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};_p.prototype.isVector3=!0;let K=_p;const ku=new K,E0=new ra,yp=class yp{constructor(e,n,i,r,s,a,l,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u)}set(e,n,i,r,s,a,l,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=l,f[3]=n,f[4]=s,f[5]=c,f[6]=i,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[3],c=i[6],u=i[1],f=i[4],m=i[7],h=i[2],g=i[5],_=i[8],b=r[0],x=r[3],d=r[6],p=r[1],y=r[4],S=r[7],A=r[2],T=r[5],v=r[8];return s[0]=a*b+l*p+c*A,s[3]=a*x+l*y+c*T,s[6]=a*d+l*S+c*v,s[1]=u*b+f*p+m*A,s[4]=u*x+f*y+m*T,s[7]=u*d+f*S+m*v,s[2]=h*b+g*p+_*A,s[5]=h*x+g*y+_*T,s[8]=h*d+g*S+_*v,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8];return n*a*f-n*l*u-i*s*f+i*l*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],m=f*a-l*u,h=l*c-f*s,g=u*s-a*c,_=n*m+i*h+r*g;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=m*b,e[1]=(r*u-f*i)*b,e[2]=(l*i-r*a)*b,e[3]=h*b,e[4]=(f*n-r*c)*b,e[5]=(r*s-l*n)*b,e[6]=g*b,e[7]=(i*c-u*n)*b,e[8]=(a*n-i*s)*b,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,l){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*l)+a+e,-r*u,r*c,-r*(-u*a+c*l)+l+n,0,0,1),this}scale(e,n){return Vl("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bu.makeScale(e,n)),this}rotate(e){return Vl("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bu.makeRotation(-e)),this}translate(e,n){return Vl("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};yp.prototype.isMatrix3=!0;let Xe=yp;const Bu=new Xe,T0=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),A0=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xT(){const t={enabled:!0,workingColorSpace:_c,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===mt&&(r.r=ki(r.r),r.g=ki(r.g),r.b=ki(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===mt&&(r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ar?yc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[a].fromXYZ).multiply(this.spaces[s].toXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[_c]:{primaries:e,whitePoint:i,transfer:yc,toXYZ:T0,fromXYZ:A0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:e,whitePoint:i,transfer:mt,toXYZ:T0,fromXYZ:A0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),t}const rt=xT();function ki(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function zs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let ls;class vT{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ls===void 0&&(ls=Sc("canvas")),ls.width=e.width,ls.height=e.height;const r=ls.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=ls}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Sc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(ki(n[i]/255)*255):n[i]=ki(n[i]);return{data:n,width:e.width,height:e.height}}else return Ve("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _T=0;class fp{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:_T++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,l=r.length;a<l;a++)r[a].isDataTexture?s.push(zu(r[a].image)):s.push(zu(r[a]))}else s=zu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?vT.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ve("Texture: Unable to serialize Texture."),{})}let yT=0;const ju=new K;class _n extends ss{constructor(e=_n.DEFAULT_IMAGE,n=_n.DEFAULT_MAPPING,i=Ui,r=Ui,s=En,a=cr,l=xi,c=In,u=_n.DEFAULT_ANISOTROPY,f=ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yT++}),this.uuid=ia(),this.name="",this.source=new fp(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=l,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ju).x}get height(){return this.source.getSize(ju).y}get depth(){return this.source.getSize(ju).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ve(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==J_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gf:e.x=e.x-Math.floor(e.x);break;case Ui:e.x=e.x<0?0:1;break;case xf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gf:e.y=e.y-Math.floor(e.y);break;case Ui:e.y=e.y<0?0:1;break;case xf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=J_;_n.DEFAULT_ANISOTROPY=1;const Sp=class Sp{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],f=c[4],m=c[8],h=c[1],g=c[5],_=c[9],b=c[2],x=c[6],d=c[10];if(Math.abs(f-h)<.01&&Math.abs(m-b)<.01&&Math.abs(_-x)<.01){if(Math.abs(f+h)<.1&&Math.abs(m+b)<.1&&Math.abs(_+x)<.1&&Math.abs(u+g+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const y=(u+1)/2,S=(g+1)/2,A=(d+1)/2,T=(f+h)/4,v=(m+b)/4,w=(_+x)/4;return y>S&&y>A?y<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(y),r=T/i,s=v/i):S>A?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=w/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=v/s,r=w/s),this.set(i,r,s,n),this}let p=Math.sqrt((x-_)*(x-_)+(m-b)*(m-b)+(h-f)*(h-f));return Math.abs(p)<.001&&(p=1),this.x=(x-_)/p,this.y=(m-b)/p,this.z=(h-f)/p,this.w=Math.acos((u+g+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sp.prototype.isVector4=!0;let Dt=Sp;class ST extends ss{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n),this.textures=[];const r=i.count;for(let s=0;s<r;s++)this.textures[s]=new _n({width:e,height:n,depth:i.depth}),this.textures[s].isRenderTargetTexture=!0,this.textures[s].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new fp(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yi extends ST{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class py extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class bT extends _n{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=nn,this.minFilter=nn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Mc=class Mc{constructor(e,n,i,r,s,a,l,c,u,f,m,h,g,_,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,l,c,u,f,m,h,g,_,b,x)}set(e,n,i,r,s,a,l,c,u,f,m,h,g,_,b,x){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=a,d[9]=l,d[13]=c,d[2]=u,d[6]=f,d[10]=m,d[14]=h,d[3]=g,d[7]=_,d[11]=b,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/cs.setFromMatrixColumn(e,0).length(),s=1/cs.setFromMatrixColumn(e,1).length(),a=1/cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const h=a*f,g=a*m,_=l*f,b=l*m;n[0]=c*f,n[4]=-c*m,n[8]=u,n[1]=g+_*u,n[5]=h-b*u,n[9]=-l*c,n[2]=b-h*u,n[6]=_+g*u,n[10]=a*c}else if(e.order==="YXZ"){const h=c*f,g=c*m,_=u*f,b=u*m;n[0]=h+b*l,n[4]=_*l-g,n[8]=a*u,n[1]=a*m,n[5]=a*f,n[9]=-l,n[2]=g*l-_,n[6]=b+h*l,n[10]=a*c}else if(e.order==="ZXY"){const h=c*f,g=c*m,_=u*f,b=u*m;n[0]=h-b*l,n[4]=-a*m,n[8]=_+g*l,n[1]=g+_*l,n[5]=a*f,n[9]=b-h*l,n[2]=-a*u,n[6]=l,n[10]=a*c}else if(e.order==="ZYX"){const h=a*f,g=a*m,_=l*f,b=l*m;n[0]=c*f,n[4]=_*u-g,n[8]=h*u+b,n[1]=c*m,n[5]=b*u+h,n[9]=g*u-_,n[2]=-u,n[6]=l*c,n[10]=a*c}else if(e.order==="YZX"){const h=a*c,g=a*u,_=l*c,b=l*u;n[0]=c*f,n[4]=b-h*m,n[8]=_*m+g,n[1]=m,n[5]=a*f,n[9]=-l*f,n[2]=-u*f,n[6]=g*m+_,n[10]=h-b*m}else if(e.order==="XZY"){const h=a*c,g=a*u,_=l*c,b=l*u;n[0]=c*f,n[4]=-m,n[8]=u*f,n[1]=h*m+b,n[5]=a*f,n[9]=g*m-_,n[2]=_*m-g,n[6]=l*f,n[10]=b*m+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wT,e,MT)}lookAt(e,n,i){const r=this.elements;return Pn.subVectors(e,n),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Yi.crossVectors(i,Pn),Yi.lengthSq()===0&&(Math.abs(i.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Yi.crossVectors(i,Pn)),Yi.normalize(),Zo.crossVectors(Pn,Yi),r[0]=Yi.x,r[4]=Zo.x,r[8]=Pn.x,r[1]=Yi.y,r[5]=Zo.y,r[9]=Pn.y,r[2]=Yi.z,r[6]=Zo.z,r[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],l=i[4],c=i[8],u=i[12],f=i[1],m=i[5],h=i[9],g=i[13],_=i[2],b=i[6],x=i[10],d=i[14],p=i[3],y=i[7],S=i[11],A=i[15],T=r[0],v=r[4],w=r[8],O=r[12],P=r[1],U=r[5],V=r[9],L=r[13],N=r[2],B=r[6],H=r[10],j=r[14],W=r[3],z=r[7],G=r[11],J=r[15];return s[0]=a*T+l*P+c*N+u*W,s[4]=a*v+l*U+c*B+u*z,s[8]=a*w+l*V+c*H+u*G,s[12]=a*O+l*L+c*j+u*J,s[1]=f*T+m*P+h*N+g*W,s[5]=f*v+m*U+h*B+g*z,s[9]=f*w+m*V+h*H+g*G,s[13]=f*O+m*L+h*j+g*J,s[2]=_*T+b*P+x*N+d*W,s[6]=_*v+b*U+x*B+d*z,s[10]=_*w+b*V+x*H+d*G,s[14]=_*O+b*L+x*j+d*J,s[3]=p*T+y*P+S*N+A*W,s[7]=p*v+y*U+S*B+A*z,s[11]=p*w+y*V+S*H+A*G,s[15]=p*O+y*L+S*j+A*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],l=e[5],c=e[9],u=e[13],f=e[2],m=e[6],h=e[10],g=e[14],_=e[3],b=e[7],x=e[11],d=e[15],p=c*g-u*h,y=l*g-u*m,S=l*h-c*m,A=a*g-u*f,T=a*h-c*f,v=a*m-l*f;return n*(b*p-x*y+d*S)-i*(_*p-x*A+d*T)+r*(_*y-b*A+d*v)-s*(_*S-b*T+x*v)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],c=e[2],u=e[6],f=e[10];return n*(a*f-l*u)-i*(s*f-l*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],l=e[5],c=e[6],u=e[7],f=e[8],m=e[9],h=e[10],g=e[11],_=e[12],b=e[13],x=e[14],d=e[15],p=n*l-i*a,y=n*c-r*a,S=n*u-s*a,A=i*c-r*l,T=i*u-s*l,v=r*u-s*c,w=f*b-m*_,O=f*x-h*_,P=f*d-g*_,U=m*x-h*b,V=m*d-g*b,L=h*d-g*x,N=p*L-y*V+S*U+A*P-T*O+v*w;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=(l*L-c*V+u*U)*B,e[1]=(r*V-i*L-s*U)*B,e[2]=(b*v-x*T+d*A)*B,e[3]=(h*T-m*v-g*A)*B,e[4]=(c*P-a*L-u*O)*B,e[5]=(n*L-r*P+s*O)*B,e[6]=(x*S-_*v-d*y)*B,e[7]=(f*v-h*S+g*y)*B,e[8]=(a*V-l*P+u*w)*B,e[9]=(i*P-n*V-s*w)*B,e[10]=(_*T-b*S+d*p)*B,e[11]=(m*S-f*T-g*p)*B,e[12]=(l*O-a*U-c*w)*B,e[13]=(n*U-i*O+r*w)*B,e[14]=(b*y-_*A-x*p)*B,e[15]=(f*A-m*y+h*p)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,l=e.y,c=e.z,u=s*a,f=s*l;return this.set(u*a+i,u*l-r*c,u*c+r*l,0,u*l+r*c,f*l+i,f*c-r*a,0,u*c-r*l,f*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,l=n._z,c=n._w,u=s+s,f=a+a,m=l+l,h=s*u,g=s*f,_=s*m,b=a*f,x=a*m,d=l*m,p=c*u,y=c*f,S=c*m,A=i.x,T=i.y,v=i.z;return r[0]=(1-(b+d))*A,r[1]=(g+S)*A,r[2]=(_-y)*A,r[3]=0,r[4]=(g-S)*T,r[5]=(1-(h+d))*T,r[6]=(x+p)*T,r[7]=0,r[8]=(_+y)*v,r[9]=(x-p)*v,r[10]=(1-(h+b))*v,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=cs.set(r[0],r[1],r[2]).length();const l=cs.set(r[4],r[5],r[6]).length(),c=cs.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Qn.copy(this);const u=1/a,f=1/l,m=1/c;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=f,Qn.elements[5]*=f,Qn.elements[6]*=f,Qn.elements[8]*=m,Qn.elements[9]*=m,Qn.elements[10]*=m,n.setFromRotationMatrix(Qn),i.x=a,i.y=l,i.z=c,this}makePerspective(e,n,i,r,s,a,l=si,c=!1){const u=this.elements,f=2*s/(n-e),m=2*s/(i-r),h=(n+e)/(n-e),g=(i+r)/(i-r);let _,b;if(c)_=s/(a-s),b=a*s/(a-s);else if(l===si)_=-(a+s)/(a-s),b=-2*a*s/(a-s);else if(l===uo)_=-a/(a-s),b=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=h,u[12]=0,u[1]=0,u[5]=m,u[9]=g,u[13]=0,u[2]=0,u[6]=0,u[10]=_,u[14]=b,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,l=si,c=!1){const u=this.elements,f=2/(n-e),m=2/(i-r),h=-(n+e)/(n-e),g=-(i+r)/(i-r);let _,b;if(c)_=1/(a-s),b=a/(a-s);else if(l===si)_=-2/(a-s),b=-(a+s)/(a-s);else if(l===uo)_=-1/(a-s),b=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return u[0]=f,u[4]=0,u[8]=0,u[12]=h,u[1]=0,u[5]=m,u[9]=0,u[13]=g,u[2]=0,u[6]=0,u[10]=_,u[14]=b,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Mc.prototype.isMatrix4=!0;let Nt=Mc;const cs=new K,Qn=new Nt,wT=new K(0,0,0),MT=new K(1,1,1),Yi=new K,Zo=new K,Pn=new K,N0=new Nt,R0=new ra;class Er{constructor(e=0,n=0,i=0,r=Er.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],l=r[8],c=r[1],u=r[5],f=r[9],m=r[2],h=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-it(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-m,g),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-it(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(h,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:Ve("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return N0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(N0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return R0.setFromEuler(this),this.setFromQuaternion(R0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Er.DEFAULT_ORDER="XYZ";class my{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ET=0;const C0=new K,us=new ra,Ei=new Nt,Qo=new K,ya=new K,TT=new K,AT=new ra,P0=new K(1,0,0),D0=new K(0,1,0),L0=new K(0,0,1),I0={type:"added"},NT={type:"removed"},ds={type:"childadded",child:null},Hu={type:"childremoved",child:null};class sn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=sn.DEFAULT_UP.clone();const e=new K,n=new Er,i=new ra,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new Xe}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new my,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,n){return us.setFromAxisAngle(e,n),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(P0,e)}rotateY(e){return this.rotateOnAxis(D0,e)}rotateZ(e){return this.rotateOnAxis(L0,e)}translateOnAxis(e,n){return C0.copy(e).applyQuaternion(this.quaternion),this.position.add(C0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(P0,e)}translateY(e){return this.translateOnAxis(D0,e)}translateZ(e){return this.translateOnAxis(L0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qo.copy(e):Qo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(ya,Qo,this.up):Ei.lookAt(Qo,ya,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),us.setFromRotationMatrix(Ei),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(I0),ds.child=e,this.dispatchEvent(ds),ds.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(NT),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(I0),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,e,TT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ya,AT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,l=s.length;a<l;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(l=>({...l,boundingBox:l.boundingBox?l.boundingBox.toJSON():void 0,boundingSphere:l.boundingSphere?l.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(l=>({...l})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(l,c){return l[c.uuid]===void 0&&(l[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const c=l.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const m=c[u];s(e.shapes,m)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let c=0,u=this.material.length;c<u;c++)l.push(s(e.materials,this.material[c]));r.material=l}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let l=0;l<this.children.length;l++)r.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let l=0;l<this.animations.length;l++){const c=this.animations[l];r.animations.push(s(e.animations,c))}}if(n){const l=a(e.geometries),c=a(e.materials),u=a(e.textures),f=a(e.images),m=a(e.shapes),h=a(e.skeletons),g=a(e.animations),_=a(e.nodes);l.length>0&&(i.geometries=l),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),h.length>0&&(i.skeletons=h),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(l){const c=[];for(const u in l){const f=l[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}sn.DEFAULT_UP=new K(0,1,0);sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Jo extends sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const RT={type:"move"};class Vu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Jo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Jo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Jo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const l=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const b of e.hand.values()){const x=n.getJointPose(b,i),d=this._getHandJoint(u,b);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}const f=u.joints["index-finger-tip"],m=u.joints["thumb-tip"],h=f.position.distanceTo(m.position),g=.02,_=.005;u.inputState.pinching&&h>g+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=g-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));l!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(RT)))}return l!==null&&(l.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Jo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const gy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ki={h:0,s:0,l:0},el={h:0,s:0,l:0};function Gu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class st{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,rt.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=rt.workingColorSpace){return this.r=e,this.g=n,this.b=i,rt.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=rt.workingColorSpace){if(e=up(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Gu(a,s,e+1/3),this.g=Gu(a,s,e),this.b=Gu(a,s,e-1/3)}return rt.colorSpaceToWorking(this,r),this}setStyle(e,n=jn){function i(s){s!==void 0&&parseFloat(s)<1&&Ve("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],l=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(s[4]),this.setRGB(Math.min(100,parseFloat(s[1]))/100,Math.min(100,parseFloat(s[2]))/100,Math.min(100,parseFloat(s[3]))/100,n);break;case"hsl":case"hsla":if(s=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(l))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ve("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ve("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=jn){const i=gy[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ve("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jn){return rt.workingToColorSpace(fn.copy(this),e),Math.round(it(fn.r*255,0,255))*65536+Math.round(it(fn.g*255,0,255))*256+Math.round(it(fn.b*255,0,255))}getHexString(e=jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=rt.workingColorSpace){rt.workingToColorSpace(fn.copy(this),n);const i=fn.r,r=fn.g,s=fn.b,a=Math.max(i,r,s),l=Math.min(i,r,s);let c,u;const f=(l+a)/2;if(l===a)c=0,u=0;else{const m=a-l;switch(u=f<=.5?m/(a+l):m/(2-a-l),a){case i:c=(r-s)/m+(r<s?6:0);break;case r:c=(s-i)/m+2;break;case s:c=(i-r)/m+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,n=rt.workingColorSpace){return rt.workingToColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=jn){rt.workingToColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,r=fn.b;return e!==jn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ki),this.setHSL(Ki.h+e,Ki.s+n,Ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ki),e.getHSL(el);const i=Ha(Ki.h,el.h,n),r=Ha(Ki.s,el.s,n),s=Ha(Ki.l,el.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new st;st.NAMES=gy;class hp{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new st(e),this.density=n}clone(){return new hp(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class CT extends sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Er,this.environmentIntensity=1,this.environmentRotation=new Er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Jn=new K,Ti=new K,Wu=new K,Ai=new K,fs=new K,hs=new K,U0=new K,Xu=new K,$u=new K,qu=new K,Yu=new Dt,Ku=new Dt,Zu=new Dt;class ri{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Jn.subVectors(e,n),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Jn.subVectors(r,n),Ti.subVectors(i,n),Wu.subVectors(e,n);const a=Jn.dot(Jn),l=Jn.dot(Ti),c=Jn.dot(Wu),u=Ti.dot(Ti),f=Ti.dot(Wu),m=a*u-l*l;if(m===0)return s.set(0,0,0),null;const h=1/m,g=(u*c-l*f)*h,_=(a*f-l*c)*h;return s.set(1-g-_,_,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,s,a,l,c){return this.getBarycoord(e,n,i,r,Ai)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ai.x),c.addScaledVector(a,Ai.y),c.addScaledVector(l,Ai.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Yu.setScalar(0),Ku.setScalar(0),Zu.setScalar(0),Yu.fromBufferAttribute(e,n),Ku.fromBufferAttribute(e,i),Zu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yu,s.x),a.addScaledVector(Ku,s.y),a.addScaledVector(Zu,s.z),a}static isFrontFacing(e,n,i,r){return Jn.subVectors(i,n),Ti.subVectors(e,n),Jn.cross(Ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Jn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ri.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,l;fs.subVectors(r,i),hs.subVectors(s,i),Xu.subVectors(e,i);const c=fs.dot(Xu),u=hs.dot(Xu);if(c<=0&&u<=0)return n.copy(i);$u.subVectors(e,r);const f=fs.dot($u),m=hs.dot($u);if(f>=0&&m<=f)return n.copy(r);const h=c*m-f*u;if(h<=0&&c>=0&&f<=0&&c-f>0)return a=c/(c-f),n.copy(i).addScaledVector(fs,a);qu.subVectors(e,s);const g=fs.dot(qu),_=hs.dot(qu);if(_>=0&&g<=_)return n.copy(s);const b=g*u-c*_;if(b<=0&&u>=0&&_<=0)return l=u/(u-_),n.copy(i).addScaledVector(hs,l);const x=f*_-g*m;if(x<=0&&m-f>=0&&g-_>=0)return U0.subVectors(s,r),l=(m-f)/(m-f+(g-_)),n.copy(r).addScaledVector(U0,l);const d=1/(x+b+h);return a=b*d,l=h*d,n.copy(i).addScaledVector(fs,a).addScaledVector(hs,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class wo{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ei.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ei.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ei.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,l=s.count;a<l;a++)e.isMesh===!0?e.getVertexPosition(a,ei):ei.fromBufferAttribute(s,a),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),tl.copy(i.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Sa),nl.subVectors(this.max,Sa),ps.subVectors(e.a,Sa),ms.subVectors(e.b,Sa),gs.subVectors(e.c,Sa),Zi.subVectors(ms,ps),Qi.subVectors(gs,ms),Lr.subVectors(ps,gs);let n=[0,-Zi.z,Zi.y,0,-Qi.z,Qi.y,0,-Lr.z,Lr.y,Zi.z,0,-Zi.x,Qi.z,0,-Qi.x,Lr.z,0,-Lr.x,-Zi.y,Zi.x,0,-Qi.y,Qi.x,0,-Lr.y,Lr.x,0];return!Qu(n,ps,ms,gs,nl)||(n=[1,0,0,0,1,0,0,0,1],!Qu(n,ps,ms,gs,nl))?!1:(il.crossVectors(Zi,Qi),n=[il.x,il.y,il.z],Qu(n,ps,ms,gs,nl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ni),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ni=[new K,new K,new K,new K,new K,new K,new K,new K],ei=new K,tl=new wo,ps=new K,ms=new K,gs=new K,Zi=new K,Qi=new K,Lr=new K,Sa=new K,nl=new K,il=new K,Ir=new K;function Qu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){Ir.fromArray(t,s);const l=r.x*Math.abs(Ir.x)+r.y*Math.abs(Ir.y)+r.z*Math.abs(Ir.z),c=e.dot(Ir),u=n.dot(Ir),f=i.dot(Ir);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>l)return!1}return!0}const zt=new K,rl=new at;let PT=0;class yr extends ss{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:PT++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=K1,this.updateRanges=[],this.gpuType=gi,this.version=0,this._normalizationScale=e!==void 0?dp(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)rl.fromBufferAttribute(this,n),rl.applyMatrix3(e),this.setXY(n,rl.x,rl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),r=this._normalize(r),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):fy(e,this.array)}_normalize(e){const n=this._normalizationScale;return n!==void 0?Math.round(e*n):hy(e,this.array)}}class xy extends yr{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class vy extends yr{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class yn extends yr{constructor(e,n,i){super(new Float32Array(e),n,i)}}const DT=new wo,ba=new K,Ju=new K;class Xc{constructor(e=new K,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):DT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ba.subVectors(e,this.center);const n=ba.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ba,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ba.copy(e.center).add(Ju)),this.expandByPoint(ba.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let LT=0;const zn=new Nt,ed=new sn,xs=new K,Dn=new wo,wa=new wo,Zt=new K;class ci extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z1(e)?vy:xy)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return zn.makeRotationFromQuaternion(e),this.applyMatrix4(zn),this}rotateX(e){return zn.makeRotationX(e),this.applyMatrix4(zn),this}rotateY(e){return zn.makeRotationY(e),this.applyMatrix4(zn),this}rotateZ(e){return zn.makeRotationZ(e),this.applyMatrix4(zn),this}translate(e,n,i){return zn.makeTranslation(e,n,i),this.applyMatrix4(zn),this}scale(e,n,i){return zn.makeScale(e,n,i),this.applyMatrix4(zn),this}lookAt(e){return ed.lookAt(e),ed.updateMatrix(),this.applyMatrix4(ed.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yn(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ve("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Zt.addVectors(this.boundingBox.min,Dn.min),this.boundingBox.expandByPoint(Zt),Zt.addVectors(this.boundingBox.max,Dn.max),this.boundingBox.expandByPoint(Zt)):(this.boundingBox.expandByPoint(Dn.min),this.boundingBox.expandByPoint(Dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Dn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const l=n[s];wa.setFromBufferAttribute(l),this.morphTargetsRelative?(Zt.addVectors(Dn.min,wa.min),Dn.expandByPoint(Zt),Zt.addVectors(Dn.max,wa.max),Dn.expandByPoint(Zt)):(Dn.expandByPoint(wa.min),Dn.expandByPoint(wa.max))}Dn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Zt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Zt));if(n)for(let s=0,a=n.length;s<a;s++){const l=n[s],c=this.morphTargetsRelative;for(let u=0,f=l.count;u<f;u++)Zt.fromBufferAttribute(l,u),c&&(xs.fromBufferAttribute(e,u),Zt.add(xs)),r=Math.max(r,i.distanceToSquared(Zt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new yr(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const l=[],c=[],u=new Uint8Array(i.count);for(let O=0;O<i.count;O++)l[O]=new K,c[O]=new K;const f=new K,m=new K,h=new K,g=new at,_=new at,b=new at,x=new K,d=new K;function p(O,P,U){u[O]=u[P]=u[U]=1,f.fromBufferAttribute(i,O),m.fromBufferAttribute(i,P),h.fromBufferAttribute(i,U),g.fromBufferAttribute(s,O),_.fromBufferAttribute(s,P),b.fromBufferAttribute(s,U),m.sub(f),h.sub(f),_.sub(g),b.sub(g);const V=1/(_.x*b.y-b.x*_.y);isFinite(V)&&(x.copy(m).multiplyScalar(b.y).addScaledVector(h,-_.y).multiplyScalar(V),d.copy(h).multiplyScalar(_.x).addScaledVector(m,-b.x).multiplyScalar(V),l[O].add(x),l[P].add(x),l[U].add(x),c[O].add(d),c[P].add(d),c[U].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let O=0,P=y.length;O<P;++O){const U=y[O],V=U.start,L=U.count;for(let N=V,B=V+L;N<B;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const S=new K,A=new K,T=new K,v=new K;function w(O){T.fromBufferAttribute(r,O),v.copy(T);const P=l[O];S.copy(P),S.sub(T.multiplyScalar(T.dot(P))).normalize(),A.crossVectors(v,P);const V=A.dot(c[O])<0?-1:1;a.setXYZW(O,S.x,S.y,S.z,V)}for(let O=0,P=i.count;O<P;++O)u[O]&&w(O);this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new yr(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,g=i.count;h<g;h++)i.setXYZ(h,0,0,0);const r=new K,s=new K,a=new K,l=new K,c=new K,u=new K,f=new K,m=new K;if(e)for(let h=0,g=e.count;h<g;h+=3){const _=e.getX(h+0),b=e.getX(h+1),x=e.getX(h+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,b),a.fromBufferAttribute(n,x),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,b),u.fromBufferAttribute(i,x),l.add(f),c.add(f),u.add(f),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(b,c.x,c.y,c.z),i.setXYZ(x,u.x,u.y,u.z)}else for(let h=0,g=n.count;h<g;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),f.subVectors(a,s),m.subVectors(r,s),f.cross(m),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Zt.fromBufferAttribute(e,n),Zt.normalize(),e.setXYZ(n,Zt.x,Zt.y,Zt.z)}toNonIndexed(){function e(l,c){const u=l.array,f=l.itemSize,m=l.normalized,h=new u.constructor(c.length*f);let g=0,_=0;for(let b=0,x=c.length;b<x;b++){l.isInterleavedBufferAttribute?g=c[b]*l.data.stride+l.offset:g=c[b]*f;for(let d=0;d<f;d++)h[_++]=u[g++]}return new yr(h,f,m)}if(this.index===null)return Ve("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ci,i=this.index.array,r=this.attributes;for(const l in r){const c=r[l],u=e(c,i);n.setAttribute(l,u)}const s=this.morphAttributes;for(const l in s){const c=[],u=s[l];for(let f=0,m=u.length;f<m;f++){const h=u[f],g=e(h,i);c.push(g)}n.morphAttributes[l]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let m=0,h=u.length;m<h;m++){const g=u[m];f.push(g.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere=l.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(n))}const s=e.morphAttributes;for(const u in s){const f=[],m=s[u];for(let h=0,g=m.length;h<g;h++)f.push(m[h].clone(n));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,f=a.length;u<f;u++){const m=a[u];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const td=new K,IT=new K,UT=new Xe;class ir{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=td.subVectors(i,n).cross(IT.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(td),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||UT.getNormalMatrix(e),r=this.coplanarPoint(td).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let OT=0;class sa extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OT++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=za,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=G_,this.blendDst=W_,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new st(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=G1,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fu,this.stencilZFail=Fu,this.stencilZPass=Fu,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ve(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ve(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const l in s){const c=s[l];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new st().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ir().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new at().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new at().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ri=new K,nd=new K,sl=new K,al=new K;class _y{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ri.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,n),Ri.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){nd.copy(e).add(n).multiplyScalar(.5),sl.copy(n).sub(e).normalize(),al.copy(this.origin).sub(nd);const s=e.distanceTo(n)*.5,a=-this.direction.dot(sl),l=al.dot(this.direction),c=-al.dot(sl),u=al.lengthSq(),f=Math.abs(1-a*a);let m,h,g,_;if(f>0)if(m=a*c-l,h=a*l-c,_=s*f,m>=0)if(h>=-_)if(h<=_){const b=1/f;m*=b,h*=b,g=m*(m+a*h+2*l)+h*(a*m+h+2*c)+u}else h=s,m=Math.max(0,-(a*h+l)),g=-m*m+h*(h+2*c)+u;else h=-s,m=Math.max(0,-(a*h+l)),g=-m*m+h*(h+2*c)+u;else h<=-_?(m=Math.max(0,-(-a*s+l)),h=m>0?-s:Math.min(Math.max(-s,-c),s),g=-m*m+h*(h+2*c)+u):h<=_?(m=0,h=Math.min(Math.max(-s,-c),s),g=h*(h+2*c)+u):(m=Math.max(0,-(a*s+l)),h=m>0?s:Math.min(Math.max(-s,-c),s),g=-m*m+h*(h+2*c)+u);else h=a>0?-s:s,m=Math.max(0,-(a*h+l)),g=-m*m+h*(h+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,m),r&&r.copy(nd).addScaledVector(sl,h),g}intersectSphere(e,n){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),l=i-a,c=i+a;return c<0?null:l<0?this.at(c,n):this.at(l,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,l,c;const u=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),m>=0?(l=(e.min.z-h.z)*m,c=(e.max.z-h.z)*m):(l=(e.max.z-h.z)*m,c=(e.min.z-h.z)*m),i>c||l>r)||((l>i||i!==i)&&(i=l),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,l=this.direction,c=l.x,u=l.y,f=l.z,m=e.x-a.x,h=e.y-a.y,g=e.z-a.z,_=n.x-a.x,b=n.y-a.y,x=n.z-a.z,d=i.x-a.x,p=i.y-a.y,y=i.z-a.z,S=Math.abs(c),A=Math.abs(u),T=Math.abs(f);let v,w,O,P,U,V,L,N,B,H,j,W;if(S>=A&&S>=T?(O=c,V=m,B=_,W=d,c>=0?(v=u,w=f,P=h,U=g,L=b,N=x,H=p,j=y):(v=f,w=u,P=g,U=h,L=x,N=b,H=y,j=p)):A>=T?(O=u,V=h,B=b,W=p,u>=0?(v=f,w=c,P=g,U=m,L=x,N=_,H=y,j=d):(v=c,w=f,P=m,U=g,L=_,N=x,H=d,j=y)):(O=f,V=g,B=x,W=y,f>=0?(v=c,w=u,P=m,U=h,L=_,N=b,H=d,j=p):(v=u,w=c,P=h,U=m,L=b,N=_,H=p,j=d)),O===0)return null;const z=v/O,G=w/O,J=1/O,ue=P-z*V,Ae=U-G*V,X=L-z*B,oe=N-G*B,me=H-z*W,Ne=j-G*W,ye=me*oe-Ne*X,je=ue*Ne-Ae*me,Be=X*Ae-oe*ue;if(r){if(ye<0||je<0||Be<0)return null}else if((ye<0||je<0||Be<0)&&(ye>0||je>0||Be>0))return null;const Ee=ye+je+Be;if(Ee===0)return null;const Ge=J*(ye*V+je*B+Be*W);return(Ee>0?Ge<0:Ge>0)?null:this.at(Ge/Ee,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class FT extends sa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new st(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.combine=X_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const O0=new Nt,Ur=new _y,ol=new Xc,F0=new K,ll=new K,cl=new K,ul=new K,id=new K,dl=new K,k0=new K,fl=new K;class Si extends sn{constructor(e=new ci,n=new FT){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const l=this.morphTargetInfluences;if(s&&l){dl.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=l[c],m=s[c];f!==0&&(id.fromBufferAttribute(m,e),a?dl.addScaledVector(id,f):dl.addScaledVector(id.sub(n),f))}n.add(dl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ol.copy(i.boundingSphere),ol.applyMatrix4(s),Ur.copy(e.ray).recast(e.near),!(ol.containsPoint(Ur.origin)===!1&&(Ur.intersectSphere(ol,F0)===null||Ur.origin.distanceToSquared(F0)>(e.far-e.near)**2))&&(O0.copy(s).invert(),Ur.copy(e.ray).applyMatrix4(O0),!(i.boundingBox!==null&&Ur.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ur)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,l=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,m=s.attributes.normal,h=s.groups,g=s.drawRange;if(l!==null)if(Array.isArray(a))for(let _=0,b=h.length;_<b;_++){const x=h[_],d=a[x.materialIndex],p=Math.max(x.start,g.start),y=Math.min(l.count,Math.min(x.start+x.count,g.start+g.count));for(let S=p,A=y;S<A;S+=3){const T=l.getX(S),v=l.getX(S+1),w=l.getX(S+2);r=hl(this,d,e,i,u,f,m,T,v,w),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),b=Math.min(l.count,g.start+g.count);for(let x=_,d=b;x<d;x+=3){const p=l.getX(x),y=l.getX(x+1),S=l.getX(x+2);r=hl(this,a,e,i,u,f,m,p,y,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,b=h.length;_<b;_++){const x=h[_],d=a[x.materialIndex],p=Math.max(x.start,g.start),y=Math.min(c.count,Math.min(x.start+x.count,g.start+g.count));for(let S=p,A=y;S<A;S+=3){const T=S,v=S+1,w=S+2;r=hl(this,d,e,i,u,f,m,T,v,w),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const _=Math.max(0,g.start),b=Math.min(c.count,g.start+g.count);for(let x=_,d=b;x<d;x+=3){const p=x,y=x+1,S=x+2;r=hl(this,a,e,i,u,f,m,p,y,S),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function kT(t,e,n,i,r,s,a,l){let c;if(e.side===Cn?c=i.intersectTriangle(a,s,r,!0,l):c=i.intersectTriangle(r,s,a,e.side===es,l),c===null)return null;fl.copy(l),fl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(fl);return u<n.near||u>n.far?null:{distance:u,point:fl.clone(),object:t}}function hl(t,e,n,i,r,s,a,l,c,u){t.getVertexPosition(l,ll),t.getVertexPosition(c,cl),t.getVertexPosition(u,ul);const f=kT(t,e,n,i,ll,cl,ul,k0);if(f){const m=new K;ri.getBarycoord(k0,ll,cl,ul,m),r&&(f.uv=ri.getInterpolatedAttribute(r,l,c,u,m,new at)),s&&(f.uv1=ri.getInterpolatedAttribute(s,l,c,u,m,new at)),a&&(f.normal=ri.getInterpolatedAttribute(a,l,c,u,m,new K),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a:l,b:c,c:u,normal:new K,materialIndex:0};ri.getNormal(ll,cl,ul,h.normal),f.face=h,f.barycoord=m}return f}class BT extends _n{constructor(e=null,n=1,i=1,r,s,a,l,c,u=nn,f=nn,m,h){super(null,a,l,c,u,f,r,s,m,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Or=new Xc,zT=new at(.5,.5),pl=new K;class ho{constructor(e=new ir,n=new ir,i=new ir,r=new ir,s=new ir,a=new ir){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const l=this.planes;return l[0].copy(e),l[1].copy(n),l[2].copy(i),l[3].copy(r),l[4].copy(s),l[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si,i=!1){const r=this.planes,s=e.elements,a=s[0],l=s[1],c=s[2],u=s[3],f=s[4],m=s[5],h=s[6],g=s[7],_=s[8],b=s[9],x=s[10],d=s[11],p=s[12],y=s[13],S=s[14],A=s[15];if(r[0].setComponents(u-a,g-f,d-_,A-p).normalize(),r[1].setComponents(u+a,g+f,d+_,A+p).normalize(),r[2].setComponents(u+l,g+m,d+b,A+y).normalize(),r[3].setComponents(u-l,g-m,d-b,A-y).normalize(),i)r[4].setComponents(c,h,x,S).normalize(),r[5].setComponents(u-c,g-h,d-x,A-S).normalize();else if(r[4].setComponents(u-c,g-h,d-x,A-S).normalize(),n===si)r[5].setComponents(u+c,g+h,d+x,A+S).normalize();else if(n===uo)r[5].setComponents(c,h,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const n=zT.distanceTo(e.center);return Or.radius=.7071067811865476+n,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(pl.x=r.normal.x>0?e.max.x:e.min.x,pl.y=r.normal.y>0?e.max.y:e.min.y,pl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const B0=new Nt;class pp{constructor(){this.coordinateSystem=si,this._frustums=[],this._count=0}setFromArrayCamera(e){const n=e.cameras,i=this._frustums;for(let r=0;r<n.length;r++){const s=n[r];B0.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),i[r]===void 0&&(i[r]=new ho),i[r].setFromProjectionMatrix(B0,s.coordinateSystem,s.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){const n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const n=this._frustums,i=e._frustums;for(let r=0;r<e._count;r++)n[r]===void 0&&(n[r]=new ho),n[r].copy(i[r]);return this._count=e._count,this}clone(){return new pp().copy(this)}}class yy extends sa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new st(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const z0=new Nt,Yf=new _y,ml=new Xc,gl=new K;class jT extends sn{constructor(e=new ci,n=new yy){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ml.copy(i.boundingSphere),ml.applyMatrix4(r),ml.radius+=s,e.ray.intersectsSphere(ml)===!1)return;z0.copy(r).invert(),Yf.copy(e.ray).applyMatrix4(z0);const l=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=l*l,u=i.index,m=i.attributes.position;if(u!==null){const h=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=h,b=g;_<b;_++){const x=u.getX(_);gl.fromBufferAttribute(m,x),j0(gl,x,c,r,e,n,this)}}else{const h=Math.max(0,a.start),g=Math.min(m.count,a.start+a.count);for(let _=h,b=g;_<b;_++)gl.fromBufferAttribute(m,_),j0(gl,_,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const l=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}}function j0(t,e,n,i,r,s,a){const l=Yf.distanceSqToPoint(t);if(l<n){const c=new K;Yf.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(l),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Sy extends _n{constructor(e=[],n=qs,i,r,s,a,l,c,u,f){super(e,n,i,r,s,a,l,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ks extends _n{constructor(e,n,i=bi,r,s,a,l=nn,c=nn,u,f=Mr,m=1){if(f!==Mr&&f!==ur)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:m};super(h,r,s,a,l,c,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class by extends Ks{constructor(e,n=bi,i=qs,r,s,a=nn,l=nn,c,u=Mr){const f={width:e,height:e,depth:1},m=[f,f,f,f,f,f];super(e,e,n,i,r,s,a,l,c,u),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class wy extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mo extends ci{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const l=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],f=[],m=[];let h=0,g=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new yn(u,3)),this.setAttribute("normal",new yn(f,3)),this.setAttribute("uv",new yn(m,2));function _(b,x,d,p,y,S,A,T,v,w,O){const P=S/v,U=A/w,V=S/2,L=A/2,N=T/2,B=v+1,H=w+1;let j=0,W=0;const z=new K;for(let G=0;G<H;G++){const J=G*U-L;for(let ue=0;ue<B;ue++){const Ae=ue*P-V;z[b]=Ae*p,z[x]=J*y,z[d]=N,u.push(z.x,z.y,z.z),z[b]=0,z[x]=0,z[d]=T>0?1:-1,f.push(z.x,z.y,z.z),m.push(ue/v),m.push(1-G/w),j+=1}}for(let G=0;G<w;G++)for(let J=0;J<v;J++){const ue=h+J+B*G,Ae=h+J+B*(G+1),X=h+(J+1)+B*(G+1),oe=h+(J+1)+B*G;c.push(ue,Ae,oe),c.push(Ae,X,oe),W+=6}l.addGroup(g,W,O),g+=W,h+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class $c extends ci{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,l=Math.floor(i),c=Math.floor(r),u=l+1,f=c+1,m=e/l,h=n/c,g=[],_=[],b=[],x=[];for(let d=0;d<f;d++){const p=d*h-a;for(let y=0;y<u;y++){const S=y*m-s;_.push(S,-p,0),b.push(0,0,1),x.push(y/l),x.push(1-d/c)}}for(let d=0;d<c;d++)for(let p=0;p<l;p++){const y=p+u*d,S=p+u*(d+1),A=p+1+u*(d+1),T=p+1+u*d;g.push(y,S,T),g.push(S,A,T)}this.setIndex(g),this.setAttribute("position",new yn(_,3)),this.setAttribute("normal",new yn(b,3)),this.setAttribute("uv",new yn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $c(e.width,e.height,e.widthSegments,e.heightSegments)}}class bc extends ci{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:l},i=Math.floor(i),r=Math.floor(r);const c=[],u=[],f=[],m=[],h=new K,g=new K,_=new K;for(let b=0;b<=i;b++){const x=a+b/i*l;for(let d=0;d<=r;d++){const p=d/r*s;g.x=(e+n*Math.cos(x))*Math.cos(p),g.y=(e+n*Math.cos(x))*Math.sin(p),g.z=n*Math.sin(x),u.push(g.x,g.y,g.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),_.subVectors(g,h).normalize(),f.push(_.x,_.y,_.z),m.push(d/r),m.push(b/i)}}for(let b=1;b<=i;b++)for(let x=1;x<=r;x++){const d=(r+1)*b+x-1,p=(r+1)*(b-1)+x-1,y=(r+1)*(b-1)+x,S=(r+1)*b+x;c.push(d,p,S),c.push(p,y,S)}this.setIndex(c),this.setAttribute("position",new yn(u,3)),this.setAttribute("normal",new yn(f,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}class mp extends ci{constructor(e=1,n=.4,i=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:i,radialSegments:r,p:s,q:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],u=[],f=[],m=new K,h=new K,g=new K,_=new K,b=new K,x=new K,d=new K;for(let y=0;y<=i;++y){const S=y/i*s*Math.PI*2;p(S,s,a,e,g),p(S+.01,s,a,e,_),x.subVectors(_,g),d.addVectors(_,g),b.crossVectors(x,d),d.crossVectors(b,x),b.normalize(),d.normalize();for(let A=0;A<=r;++A){const T=A/r*Math.PI*2,v=-n*Math.cos(T),w=n*Math.sin(T);m.x=g.x+(v*d.x+w*b.x),m.y=g.y+(v*d.y+w*b.y),m.z=g.z+(v*d.z+w*b.z),c.push(m.x,m.y,m.z),h.subVectors(m,g).normalize(),u.push(h.x,h.y,h.z),f.push(y/i),f.push(A/r)}}for(let y=1;y<=i;y++)for(let S=1;S<=r;S++){const A=(r+1)*(y-1)+(S-1),T=(r+1)*y+(S-1),v=(r+1)*y+S,w=(r+1)*(y-1)+S;l.push(A,T,w),l.push(T,v,w)}this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(u,3)),this.setAttribute("uv",new yn(f,2));function p(y,S,A,T,v){const w=Math.cos(y),O=Math.sin(y),P=A/S*y,U=Math.cos(P);v.x=T*(2+U)*.5*w,v.y=T*(2+U)*O*.5,v.z=T*Math.sin(P)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function Zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(H0(r))r.isRenderTargetTexture?(Ve("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(H0(r[0])){const s=[];for(let a=0,l=r.length;a<l;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function gn(t){const e={};for(let n=0;n<t.length;n++){const i=Zs(t[n]);for(const r in i)e[r]=i[r]}return e}function H0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function HT(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function My(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:rt.workingColorSpace}const VT={clone:Zs,merge:gn};var GT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ns extends sa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GT,this.fragmentShader=WT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=HT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new st().setHex(r.value);break;case"v2":this.uniforms[i].value=new at().fromArray(r.value);break;case"v3":this.uniforms[i].value=new K().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Dt().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new Nt().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class XT extends ns{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class rd extends sa{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new st(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new st(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qf,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Er,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $T extends sa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class qT extends sa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class gp extends sn{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new st(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const sd=new Nt,V0=new K,G0=new K;class Ey{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.mapType=In,this.map=null,this.mapPass=null,this.matrix=new Nt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ho,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera;V0.setFromMatrixPosition(e.matrixWorld),n.position.copy(V0),G0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(G0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,r){sd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(sd,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,l=r?r.w/s.y:1,c=r?r.x/s.x:0,u=r?r.y/s.y:0;e.coordinateSystem===uo||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*l,0,.5*l+u,0,0,.5,.5,0,0,0,1),n.multiply(sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xl=new K,vl=new ra,di=new K;class Ty extends sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xl,vl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xl,vl,di.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(xl,vl,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xl,vl,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new K,W0=new at,X0=new at;class Gn extends Ty{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,n){return this.getViewBounds(e,W0,X0),n.subVectors(X0,W0)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ja*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class YT extends Ey{constructor(){super(new Gn(90,1,.5,500)),this.isPointLightShadow=!0}}class $0 extends gp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new YT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Ay extends Ty{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,l=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,l-=f*this.view.offsetY,c=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,l,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class KT extends Ey{constructor(){super(new Ay(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ZT extends gp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(sn.DEFAULT_UP),this.updateMatrix(),this.target=new sn,this.shadow=new KT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class QT extends gp{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const vs=-90,_s=1;class Kf extends sn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gn(vs,_s,e,n);r.layers=this.layers,this.add(r);const s=new Gn(vs,_s,e,n);s.layers=this.layers,this.add(s);const a=new Gn(vs,_s,e,n);a.layers=this.layers,this.add(a);const l=new Gn(vs,_s,e,n);l.layers=this.layers,this.add(l);const c=new Gn(vs,_s,e,n);c.layers=this.layers,this.add(c);const u=new Gn(vs,_s,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,l,c]=n;for(const u of n)this.remove(u);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===uo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,l,c,u,f]=this.children,m=e.getRenderTarget(),h=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.mipmapsAutoUpdate=b,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(m,h,g),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class JT extends Gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}class eA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ve("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function q0(t,e,n,i){const r=tA(i);switch(n){case ry:return t*e;case ay:return t*e/r.components*r.byteLength;case op:return t*e/r.components*r.byteLength;case ts:return t*e*2/r.components*r.byteLength;case lp:return t*e*2/r.components*r.byteLength;case sy:return t*e*3/r.components*r.byteLength;case xi:return t*e*4/r.components*r.byteLength;case cp:return t*e*4/r.components*r.byteLength;case Bl:case zl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case jl:case Hl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case _f:case Sf:return Math.max(t,16)*Math.max(e,8)/4;case vf:case yf:return Math.max(t,8)*Math.max(e,8)/2;case bf:case wf:case Ef:case Tf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Mf:case xc:case Af:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Df:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Uf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Of:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case zf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Hf:case Vf:case Gf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Wf:case Xf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case vc:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function tA(t){switch(t){case In:case ey:return{byteLength:1,components:1};case co:case ty:case wi:return{byteLength:2,components:1};case sp:case ap:return{byteLength:2,components:4};case bi:case rp:case gi:return{byteLength:4,components:1};case ny:case iy:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:np}}));typeof window<"u"&&(window.__THREE__?Ve("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=np);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ny(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function nA(t){const e=new WeakMap;function n(l,c){const u=l.array,f=l.usage,m=u.byteLength,h=t.createBuffer();t.bindBuffer(c,h),t.bufferData(c,u,f),l.onUploadCallback();let g;if(u instanceof Float32Array)g=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)g=t.HALF_FLOAT;else if(u instanceof Uint16Array)l.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)g=t.SHORT;else if(u instanceof Uint32Array)g=t.UNSIGNED_INT;else if(u instanceof Int32Array)g=t.INT;else if(u instanceof Int8Array)g=t.BYTE;else if(u instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:m}}function i(l,c,u){const f=c.array,m=c.updateRanges;if(t.bindBuffer(u,l),m.length===0)t.bufferSubData(u,0,f);else{m.sort((g,_)=>g.start-_.start);let h=0;for(let g=1;g<m.length;g++){const _=m[h],b=m[g];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++h,m[h]=b)}m.length=h+1;for(let g=0,_=m.length;g<_;g++){const b=m[g];t.bufferSubData(u,b.start*f.BYTES_PER_ELEMENT,f,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(l){return l.isInterleavedBufferAttribute&&(l=l.data),e.get(l)}function s(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=e.get(l);c&&(t.deleteBuffer(c.buffer),e.delete(l))}function a(l,c){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=e.get(l);(!f||f.version<l.version)&&e.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const u=e.get(l);if(u===void 0)e.set(l,n(l,c));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,l,c),u.version=l.version}}return{get:r,remove:s,update:a}}var iA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,aA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,fA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,gA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_A=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,wA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,MA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,EA=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,TA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,NA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,RA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,PA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,DA="gl_FragColor = linearToOutputTexel( gl_FragColor );",LA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,IA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,UA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,OA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,FA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,HA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,VA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,GA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,XA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$A=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,qA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,YA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ZA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,QA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,JA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,eN=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tN=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nN=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,iN=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,rN=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,sN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,aN=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,oN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lN=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cN=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uN=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dN=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fN=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hN=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pN=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mN=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gN=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xN=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vN=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_N=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yN=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SN=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wN=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,MN=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,EN=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,TN=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,AN=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,NN=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,RN=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CN=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,PN=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,DN=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,LN=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,IN=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UN=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ON=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,FN=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kN=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,BN=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,zN=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,jN=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HN=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,VN=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,GN=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,WN=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XN=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$N=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qN=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YN=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,KN=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZN=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,QN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,JN=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sR=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cR=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uR=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,dR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_R=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,SR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,MR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ER=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,NR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,LR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:iA,alphahash_pars_fragment:rA,alphamap_fragment:sA,alphamap_pars_fragment:aA,alphatest_fragment:oA,alphatest_pars_fragment:lA,aomap_fragment:cA,aomap_pars_fragment:uA,batching_pars_vertex:dA,batching_vertex:fA,begin_vertex:hA,beginnormal_vertex:pA,bsdfs:mA,iridescence_fragment:gA,bumpmap_pars_fragment:xA,clipping_planes_fragment:vA,clipping_planes_pars_fragment:_A,clipping_planes_pars_vertex:yA,clipping_planes_vertex:SA,color_fragment:bA,color_pars_fragment:wA,color_pars_vertex:MA,color_vertex:EA,common:TA,defaultnormal_vertex:AA,displacementmap_pars_vertex:NA,displacementmap_vertex:RA,emissivemap_fragment:CA,emissivemap_pars_fragment:PA,colorspace_fragment:DA,colorspace_pars_fragment:LA,envmap_fragment:IA,envmap_common_pars_fragment:UA,envmap_pars_fragment:OA,envmap_pars_vertex:FA,envmap_physical_pars_fragment:qA,envmap_vertex:kA,fog_vertex:BA,fog_pars_vertex:zA,fog_fragment:jA,fog_pars_fragment:HA,gradientmap_pars_fragment:VA,lightmap_pars_fragment:GA,lights_lambert_fragment:WA,lights_lambert_pars_fragment:XA,lights_pars_begin:$A,lights_toon_fragment:YA,lights_toon_pars_fragment:KA,lights_phong_fragment:ZA,lights_phong_pars_fragment:QA,lights_physical_fragment:JA,lights_physical_pars_fragment:eN,lights_fragment_begin:tN,lights_fragment_maps:nN,lights_fragment_end:iN,lightprobes_pars_fragment:rN,logdepthbuf_fragment:sN,logdepthbuf_pars_fragment:aN,logdepthbuf_pars_vertex:oN,logdepthbuf_vertex:lN,map_fragment:cN,map_pars_fragment:uN,map_particle_fragment:dN,map_particle_pars_fragment:fN,metalnessmap_fragment:hN,metalnessmap_pars_fragment:pN,morphinstance_vertex:mN,morphcolor_vertex:gN,morphnormal_vertex:xN,morphtarget_pars_vertex:vN,morphtarget_vertex:_N,normal_fragment_begin:yN,normal_fragment_maps:SN,normal_pars_fragment:bN,normal_pars_vertex:wN,normal_vertex:MN,normalmap_pars_fragment:EN,clearcoat_normal_fragment_begin:TN,clearcoat_normal_fragment_maps:AN,clearcoat_pars_fragment:NN,iridescence_pars_fragment:RN,opaque_fragment:CN,packing:PN,premultiplied_alpha_fragment:DN,project_vertex:LN,dithering_fragment:IN,dithering_pars_fragment:UN,roughnessmap_fragment:ON,roughnessmap_pars_fragment:FN,shadowmap_pars_fragment:kN,shadowmap_pars_vertex:BN,shadowmap_vertex:zN,shadowmask_pars_fragment:jN,skinbase_vertex:HN,skinning_pars_vertex:VN,skinning_vertex:GN,skinnormal_vertex:WN,specularmap_fragment:XN,specularmap_pars_fragment:$N,tonemapping_fragment:qN,tonemapping_pars_fragment:YN,transmission_fragment:KN,transmission_pars_fragment:ZN,uv_pars_fragment:QN,uv_pars_vertex:JN,uv_vertex:eR,worldpos_vertex:tR,background_vert:nR,background_frag:iR,backgroundCube_vert:rR,backgroundCube_frag:sR,cube_vert:aR,cube_frag:oR,depth_vert:lR,depth_frag:cR,distance_vert:uR,distance_frag:dR,equirect_vert:fR,equirect_frag:hR,linedashed_vert:pR,linedashed_frag:mR,meshbasic_vert:gR,meshbasic_frag:xR,meshlambert_vert:vR,meshlambert_frag:_R,meshmatcap_vert:yR,meshmatcap_frag:SR,meshnormal_vert:bR,meshnormal_frag:wR,meshphong_vert:MR,meshphong_frag:ER,meshphysical_vert:TR,meshphysical_frag:AR,meshtoon_vert:NR,meshtoon_frag:RR,points_vert:CR,points_frag:PR,shadow_vert:DR,shadow_frag:LR,sprite_vert:IR,sprite_frag:UR},Me={common:{diffuse:{value:new st(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new st(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new st(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new st(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},pi={basic:{uniforms:gn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:gn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:gn([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new st(0)},specular:{value:new st(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:gn([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new st(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:gn([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new st(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:gn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:gn([Me.points,Me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:gn([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:gn([Me.common,Me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:gn([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:gn([Me.sprite,Me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:gn([Me.common,Me.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:gn([Me.lights,Me.fog,{color:{value:new st(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};pi.physical={uniforms:gn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new st(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new st(0)},specularColor:{value:new st(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const _l={r:0,b:0,g:0},OR=new Nt,Ry=new Xe;Ry.set(-1,0,0,0,1,0,0,0,1);function FR(t,e,n,i,r,s){const a=new st(0);let l=r===!0?0:1,c,u,f=null,m=0,h=null;function g(p){let y=p.isScene===!0?p.background:null;if(y&&y.isTexture){const S=p.backgroundBlurriness>0;y=e.get(y,S)}return y}function _(p){let y=!1;const S=g(p);S===null?x(a,l):S&&S.isColor&&(x(S,1),y=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,s):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function b(p,y){const S=g(y);S&&S.isCubeTexture?(u===void 0&&(u=new Si(new Mo(1,1,1),new ns({name:"BackgroundCubeMaterial",uniforms:Zs(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,T,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=S,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(OR.makeRotationFromEuler(y.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(Ry),u.material.toneMapped=rt.getTransfer(S.colorSpace)!==mt,(f!==S||m!==S.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=S,m=S.version,h=t.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Si(new $c(2,2),new ns({name:"BackgroundMaterial",uniforms:Zs(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=rt.getTransfer(S.colorSpace)!==mt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||m!==S.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,m=S.version,h=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function x(p,y){p.getRGB(_l,My(t)),n.buffers.color.setClear(_l.r,_l.g,_l.b,y,s)}function d(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,y=1){a.set(p),l=y,x(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,x(a,l)},render:_,addToRenderList:b,dispose:d}}function kR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,a=!1;function l(U,V,L,N,B){let H=!1;const j=m(U,N,L,V);s!==j&&(s=j,u(s.object)),H=g(U,N,L,B),H&&_(U,N,L,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,S(U,V,L,N),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return t.createVertexArray()}function u(U){return t.bindVertexArray(U)}function f(U){return t.deleteVertexArray(U)}function m(U,V,L,N){const B=N.wireframe===!0;let H=i[V.id];H===void 0&&(H={},i[V.id]=H);const j=U.isInstancedMesh===!0?U.id:0;let W=H[j];W===void 0&&(W={},H[j]=W);let z=W[L.id];z===void 0&&(z={},W[L.id]=z);let G=z[B];return G===void 0&&(G=h(c()),z[B]=G),G}function h(U){const V=[],L=[],N=[];for(let B=0;B<n;B++)V[B]=0,L[B]=0,N[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:L,attributeDivisors:N,object:U,attributes:{},index:null}}function g(U,V,L,N){const B=s.attributes,H=V.attributes;let j=0;const W=L.getAttributes();for(const z in W)if(W[z].location>=0){const J=B[z];let ue=H[z];if(ue===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor)),J===void 0||J.attribute!==ue||ue&&J.data!==ue.data)return!0;j++}return s.attributesNum!==j||s.index!==N}function _(U,V,L,N){const B={},H=V.attributes;let j=0;const W=L.getAttributes();for(const z in W)if(W[z].location>=0){let J=H[z];J===void 0&&(z==="instanceMatrix"&&U.instanceMatrix&&(J=U.instanceMatrix),z==="instanceColor"&&U.instanceColor&&(J=U.instanceColor));const ue={};ue.attribute=J,J&&J.data&&(ue.data=J.data),B[z]=ue,j++}s.attributes=B,s.attributesNum=j,s.index=N}function b(){const U=s.newAttributes;for(let V=0,L=U.length;V<L;V++)U[V]=0}function x(U){d(U,0)}function d(U,V){const L=s.newAttributes,N=s.enabledAttributes,B=s.attributeDivisors;L[U]=1,N[U]===0&&(t.enableVertexAttribArray(U),N[U]=1),B[U]!==V&&(t.vertexAttribDivisor(U,V),B[U]=V)}function p(){const U=s.newAttributes,V=s.enabledAttributes;for(let L=0,N=V.length;L<N;L++)V[L]!==U[L]&&(t.disableVertexAttribArray(L),V[L]=0)}function y(U,V,L,N,B,H,j){j===!0?t.vertexAttribIPointer(U,V,L,B,H):t.vertexAttribPointer(U,V,L,N,B,H)}function S(U,V,L,N){b();const B=N.attributes,H=L.getAttributes(),j=V.defaultAttributeValues;for(const W in H){const z=H[W];if(z.location>=0){let G=B[W];if(G===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(G=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(G=U.instanceColor)),G!==void 0){const J=G.normalized,ue=G.itemSize,Ae=e.get(G);if(Ae===void 0)continue;const X=Ae.buffer,oe=Ae.type,me=Ae.bytesPerElement,Ne=oe===t.INT||oe===t.UNSIGNED_INT||G.gpuType===rp;if(G.isInterleavedBufferAttribute){const ye=G.data,je=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,Be=G.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Ee=0;Ee<z.locationSize;Ee++)d(z.location+Ee,ye.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ee=0;Ee<z.locationSize;Ee++)x(z.location+Ee);t.bindBuffer(t.ARRAY_BUFFER,X);for(let Ee=0;Ee<z.locationSize;Ee++)y(z.location+Ee,ue/z.locationSize,oe,J,je*me,(Be+ue/z.locationSize*Ee)*me,Ne)}else{if(G.isInstancedBufferAttribute){for(let ye=0;ye<z.locationSize;ye++)d(z.location+ye,G.meshPerAttribute);U.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let ye=0;ye<z.locationSize;ye++)x(z.location+ye);t.bindBuffer(t.ARRAY_BUFFER,X);for(let ye=0;ye<z.locationSize;ye++)y(z.location+ye,ue/z.locationSize,oe,J,ue*me,ue/z.locationSize*ye*me,Ne)}}else if(j!==void 0){const J=j[W];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(z.location,J);break;case 3:t.vertexAttrib3fv(z.location,J);break;case 4:t.vertexAttrib4fv(z.location,J);break;default:t.vertexAttrib1fv(z.location,J)}}}}p()}function A(){O();for(const U in i){const V=i[U];for(const L in V){const N=V[L];for(const B in N){const H=N[B];for(const j in H)f(H[j].object),delete H[j];delete N[B]}}delete i[U]}}function T(U){if(i[U.id]===void 0)return;const V=i[U.id];for(const L in V){const N=V[L];for(const B in N){const H=N[B];for(const j in H)f(H[j].object),delete H[j];delete N[B]}}delete i[U.id]}function v(U){for(const V in i){const L=i[V];for(const N in L){const B=L[N];if(B[U.id]===void 0)continue;const H=B[U.id];for(const j in H)f(H[j].object),delete H[j];delete B[U.id]}}}function w(U){for(const V in i){const L=i[V],N=U.isInstancedMesh===!0?U.id:0,B=L[N];if(B!==void 0){for(const H in B){const j=B[H];for(const W in j)f(j[W].object),delete j[W];delete B[H]}delete L[N],Object.keys(L).length===0&&delete i[V]}}}function O(){P(),a=!0,s!==r&&(s=r,u(s.object))}function P(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:l,reset:O,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:T,releaseStatesOfObject:w,releaseStatesOfProgram:v,initAttributes:b,enableAttribute:x,disableUnusedAttributes:p}}function BR(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function l(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];n.update(h,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=l}function zR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const v=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(v.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(v){return!(v!==xi&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(v){const w=v===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(v!==In&&v!==gi&&!w&&i.convert(v)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(v){if(v==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";v="mediump"}return v==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const f=c(u);f!==u&&(Ve("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const m=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=n.logarithmicDepthBuffer===!0&&m===!1;n.reversedDepthBuffer===!0&&m===!1&&Ve("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&m===!0&&Ve("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),A=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:l,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:g,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:p,maxVaryings:y,maxFragmentUniforms:S,maxSamples:A,samples:T}}function jR(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new ir,l=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(m,h){const g=m.length!==0||h||i!==0||r;return r=h,i=m.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(m,h){n=f(m,h,0)},this.setState=function(m,h,g){const _=m.clippingPlanes,b=m.clipIntersection,x=m.clipShadows,d=t.get(m);if(!r||_===null||_.length===0||s&&!x)s?f(null):u();else{const p=s?0:i,y=p*4;let S=d.clippingState||null;c.value=S,S=f(_,h,y,g);for(let A=0;A!==y;++A)S[A]=n[A];d.clippingState=S,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=p}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(m,h,g,_){const b=m!==null?m.length:0;let x=null;if(b!==0){if(x=c.value,_!==!0||x===null){const d=g+b*4,p=h.matrixWorldInverse;l.getNormalMatrix(p),(x===null||x.length<d)&&(x=new Float32Array(d));for(let y=0,S=g;y!==b;++y,S+=4)a.copy(m[y]).applyMatrix4(p,l),a.normal.toArray(x,S),x[S+3]=a.constant}c.value=x,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}class xp extends yi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Sy(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mo(5,5,5),s=new ns({name:"CubemapFromEquirect",uniforms:Zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Cn,blending:Bs});s.uniforms.tEquirect.value=n;const a=new Si(r,s),l=n.minFilter;return n.minFilter===cr&&(n.minFilter=En),new Kf(1,10,this).update(e,a),n.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const Y0=256,HR=3,VR=20,Cy=256,Py=16,GR=3,WR=new K,XR=new st;class wc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Kf(1,10,null),this._boxMesh=new Si(new Mo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:l=WR}=s,c=this._renderer;this._setSize(a);const u=this._allocateTarget(),f=this._getSourceTarget(!0);n>0&&(f.texture.mipmapsAutoUpdate=!1);const m=c.autoClear,h=c.autoClearColor,g=c.autoClearDepth,_=c.autoClearStencil,b=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,b===null&&(e.background=c.getClearColor(XR));const x=new Kf(i,r,f);return x.position.copy(l),x.update(c,e),c.autoClear=m,c.autoClearColor=h,c.autoClearDepth=g,c.autoClearStencil=_,e.background=b,n>0&&(f.texture.mipmapsAutoUpdate=!0,this._blur(u,n)),this._applyPMREM(u),u}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Q0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Z0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(Y0,dy(e))}_fromTexture(e,n){e.mapping===qs||e.mapping===lo?this._setSize(e.image.length===0?Y0:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){const e=this._cubeSize,n=K0(e,!1,!1),i=Math.log2(e)-HR;for(let r=0;r<=i;r++)n.texture.mipmaps.push({width:e>>r,height:e>>r});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){const n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=K0(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){const r=this._boxMesh,s=this._cubeCamera;r.material=i,s.renderTarget=e,s.activeMipmapLevel=n;const a=e.width>>n;e.viewport.set(0,0,a,a),s.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===qs||e.mapping===lo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Q0()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Z0()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=$R(),this._integrationMaterial=qR());const n=this._cubeSize,i=e.texture.mipmaps.length-1,r=this._ggxMaterial.uniforms;r.envMap.value=this._sourceTarget.texture;const s=this._integrationMaterial.uniforms;s.envMap.value=this._sourceTarget.texture,s.sourceLod.value=Math.log2(n/Py);for(let a=0;a<=i;a++){const l=wc.lodToRoughness(a,i);if(a>i-GR)s.roughness.value=l,this._renderCube(e,a,this._integrationMaterial);else{const c=l>0?Math.log2(n)+.5*Math.log2(6/(Cy*Math.pow(l,4)))+.5:0;r.roughness.value=l,r.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=YR());const i=this._blurMaterial,r=i.uniforms,s=this._sourceTarget;r.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,r.envMap.value=s.texture,this._renderCube(e,0,i),r.envMap.value=e.texture,this._renderCube(s,0,i)}}function K0(t,e,n){return new xp(t,{minFilter:cr,generateMipmaps:e,type:wi,colorSpace:_c,depthBuffer:n})}function Eo(t,e,n){return new ns({name:t,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:n,side:Cn,blending:Bs,depthTest:!1,depthWrite:!1})}function $R(){return Eo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Cy}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function qR(){return Eo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Py}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function YR(){return Eo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${VR}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Z0(){return Eo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Q0(){return Eo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function KR(t){let e=new WeakMap,n=new WeakMap,i=null;function r(h,g=!1){return h==null?null:g?a(h):s(h)}function s(h){if(h&&h.isTexture){const g=h.mapping;if(g===Iu||g===Uu)if(e.has(h)){const _=e.get(h).texture;return l(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const b=new xp(_.height);return b.fromEquirectangularTexture(t,h),e.set(h,b),h.addEventListener("dispose",u),l(b.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture&&h.isPMREMTexture!==!0){const g=h.mapping,_=g===Iu||g===Uu,b=g===qs||g===lo;if(_||b){let x=n.get(h);const d=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==d)return i===null&&(i=new wc(t)),x=_?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,n.set(h,x),x.texture;if(x!==void 0)return x.texture;{const p=h.image;return _&&p&&p.height>0||b&&p&&c(p)?(i===null&&(i=new wc(t)),x=_?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,n.set(h,x),h.addEventListener("dispose",f),x.texture):null}}}return h}function l(h,g){return g===Iu?h.mapping=qs:g===Uu&&(h.mapping=lo),h}function c(h){let g=0;const _=6;for(let b=0;b<_;b++)h[b]!==void 0&&g++;return g===_}function u(h){const g=h.target;g.removeEventListener("dispose",u);const _=e.get(g);_!==void 0&&(e.delete(g),_.dispose())}function f(h){const g=h.target;g.removeEventListener("dispose",f);const _=n.get(g);_!==void 0&&(n.delete(g),_.dispose())}function m(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:m}}function ZR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Vl("WebGLRenderer: "+i+" extension not supported."),r}}}function QR(t,e,n,i){const r={},s=new WeakMap,a=new FinalizationRegistry(_=>delete r[_]);function l(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(const x in _.attributes)e.remove(_.attributes[x]);_.removeEventListener("dispose",l),delete r[_.id],a.unregister(_);const b=s.get(_);b&&(e.remove(b),s.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function u(_,b){return r[b.id]!==void 0||(b.addEventListener("dispose",l),r[b.id]=new WeakRef(b),a.register(b,b.id,b),n.memory.geometries++),b}function f(_){const b=_.attributes;for(const x in b)e.update(b[x],t.ARRAY_BUFFER)}function m(_){const b=_.index,x=_.attributes.position;let d=0;if(x===void 0)return;const p=b!==null?b.array.length:x.array.length/3-1,y=x.count>=65535?vy:xy,S=new y(Math.ceil(p/3)*6,1),A=S.array;if(b!==null){const v=b.array;d=b.version;for(let w=0,O=0;w<p;w+=3){const P=v[w+0],U=v[w+1],V=v[w+2];A[O++]=P,A[O++]=U,A[O++]=U,A[O++]=V,A[O++]=V,A[O++]=P}}else{d=x.version;for(let v=0,w=0;v<p;v+=3){const O=v+0,P=v+1,U=v+2;A[w++]=O,A[w++]=P,A[w++]=P,A[w++]=U,A[w++]=U,A[w++]=O}}S.version=d;const T=s.get(_);T&&e.remove(T),s.set(_,S)}function h(_){const b=s.get(_);if(b){const x=_.index;x!==null&&b.version<x.version&&m(_)}else m(_);return s.get(_)}function g(){for(const _ in r){const b=r[_].deref();b!==void 0&&c(b)}}return{get:u,update:f,getWireframeAttribute:h,dispose:g}}function JR(t,e,n){let i;function r(m){i=m}let s,a;function l(m){s=m.type,a=m.bytesPerElement}function c(m,h){t.drawElements(i,h,s,m*a),n.update(h,i,1)}function u(m,h,g){g!==0&&(t.drawElementsInstanced(i,h,s,m*a,g),n.update(h,i,g))}function f(m,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,h,0,s,m,0,g);let b=0;for(let x=0;x<g;x++)b+=h[x];n.update(b,i,1)}this.setMode=r,this.setIndex=l,this.render=c,this.renderInstances=u,this.renderMultiDraw=f}function eC(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,l){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=l*(s/3);break;case t.LINES:n.lines+=l*(s/2);break;case t.LINE_STRIP:n.lines+=l*(s-1);break;case t.LINE_LOOP:n.lines+=l*s;break;case t.POINTS:n.points+=l*s;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function tC(t,e,n){const i=new WeakMap,r=new Dt;function s(a,l,c){const u=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=f!==void 0?f.length:0;let h=i.get(l);if(h===void 0||h.count!==m){let P=function(){w.dispose(),i.delete(l),l.removeEventListener("dispose",P)};var g=P;h!==void 0&&h.texture.dispose();const _=l.morphAttributes.position!==void 0,b=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,d=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let S=0;_===!0&&(S=1),b===!0&&(S=2),x===!0&&(S=3);let A=l.attributes.position.count*S,T=1;A>e.maxTextureSize&&(T=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const v=new Float32Array(A*T*4*m),w=new py(v,A,T,m);w.type=gi,w.needsUpdate=!0;const O=S*4;for(let U=0;U<m;U++){const V=d[U],L=p[U],N=y[U],B=A*T*4*U;for(let H=0;H<V.count;H++){const j=H*O;_===!0&&(r.fromBufferAttribute(V,H),v[B+j+0]=r.x,v[B+j+1]=r.y,v[B+j+2]=r.z,v[B+j+3]=0),b===!0&&(r.fromBufferAttribute(L,H),v[B+j+4]=r.x,v[B+j+5]=r.y,v[B+j+6]=r.z,v[B+j+7]=0),x===!0&&(r.fromBufferAttribute(N,H),v[B+j+8]=r.x,v[B+j+9]=r.y,v[B+j+10]=r.z,v[B+j+11]=N.itemSize===4?r.w:1)}}h={count:m,texture:w,size:new at(A,T)},i.set(l,h),l.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let x=0;x<u.length;x++)_+=u[x];const b=l.morphTargetsRelative?1:1-_;c.getUniforms().setValue(t,"morphTargetBaseInfluence",b),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function nC(t,e,n,i,r){let s=new WeakMap;function a(u){const f=r.render.frame,m=u.geometry,h=e.get(u,m);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==f&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,f))),u.isSkinnedMesh){const g=u.skeleton;s.get(g)!==f&&(g.update(),s.set(g,f))}return h}function l(){s=new WeakMap}function c(u){const f=u.target;f.removeEventListener("dispose",c),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:a,dispose:l}}const iC={[$_]:"LINEAR_TONE_MAPPING",[q_]:"REINHARD_TONE_MAPPING",[Y_]:"CINEON_TONE_MAPPING",[ip]:"ACES_FILMIC_TONE_MAPPING",[Z_]:"AGX_TONE_MAPPING",[Q_]:"NEUTRAL_TONE_MAPPING",[K_]:"CUSTOM_TONE_MAPPING"};function rC(t,e,n,i,r,s){const a=new yi(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let l=null,c=null,u=null;const f=new ci;f.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new yn([0,2,0,0,2,0],2));const m=new XT({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new Si(f,m),g=new Ay(-1,1,1,-1,0,1);let _=null,b=null,x=!1,d,p=null,y=[],S=!1;this.setSize=function(A,T){a.setSize(A,T),l!==null&&l.setSize(A,T),c!==null&&c.setSize(A,T);for(let v=0;v<y.length;v++){const w=y[v];w.setSize&&w.setSize(A,T)}},this.setEffects=function(A){y=A,S=y.length>0&&y[0].isRenderPass===!0;const T=a.width,v=a.height;y.length>0&&l===null&&(l=new yi(T,v,{type:wi,depthBuffer:!1,stencilBuffer:!1}),c=new yi(T,v,{type:wi,depthBuffer:!1,stencilBuffer:!1}));const w=r===!0&&y.some(O=>O.needsDepthTexture===!0);w!==(a.depthTexture!==null)&&(w===!0&&u===null&&(u=new Ks(T,v),s===!0&&(u.format=ur,u.type=Ys)),a.dispose(),a.depthTexture=w?u:null,a.resolveDepthBuffer=w,a.storeMultisampledDepthBuffer=w);for(let O=0;O<y.length;O++){const P=y[O];P.setSize&&P.setSize(T,v),w&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(u)}},this.begin=function(A,T){if(x||A.toneMapping===Fi&&y.length===0)return!1;if(p=T,T!==null){const v=T.width,w=T.height;(a.width!==v||a.height!==w)&&this.setSize(v,w)}return S===!1&&A.setRenderTarget(a),d=A.toneMapping,A.toneMapping=Fi,!0},this.hasRenderPass=function(){return S},this.end=function(A,T){A.toneMapping=d,x=!0;let v=a,w=l;for(let O=0;O<y.length;O++){const P=y[O];P.enabled!==!1&&(P.render(A,w,v,T),P.needsSwap!==!1&&(v=w,w=w===l?c:l))}if(_!==A.outputColorSpace||b!==A.toneMapping){_=A.outputColorSpace,b=A.toneMapping,m.defines={},rt.getTransfer(_)===mt&&(m.defines.SRGB_TRANSFER="");const O=iC[b];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=v.texture,A.setRenderTarget(p),A.render(h,g),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),l!==null&&l.dispose(),c!==null&&c.dispose(),f.dispose(),m.dispose()}}const Dy=new _n,Ly=new Ks(1,1),Iy=new by(1),Uy=new py,Oy=new bT,Fy=new Sy,J0=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function aa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=J0[r];if(s===void 0&&(s=new Float32Array(r),J0[r]=s),e!==0){i.toArray(s,0);for(let a=1,l=0;a!==e;++a)l+=n,t[a].toArray(s,l)}return s}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function $t(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function qc(t,e){let n=eg[e];n===void 0&&(n=new Int32Array(e),eg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function sC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function aC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),$t(n,e)}}function oC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),$t(n,e)}}function lC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),$t(n,e)}}function cC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;ig.set(i),t.uniformMatrix2fv(this.addr,!1,ig),$t(n,i)}}function uC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;ng.set(i),t.uniformMatrix3fv(this.addr,!1,ng),$t(n,i)}}function dC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),$t(n,e)}else{if(Xt(n,i))return;tg.set(i),t.uniformMatrix4fv(this.addr,!1,tg),$t(n,i)}}function fC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function hC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),$t(n,e)}}function pC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),$t(n,e)}}function mC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),$t(n,e)}}function gC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function xC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),$t(n,e)}}function vC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),$t(n,e)}}function _C(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),$t(n,e)}}function Yc(t){return t.version===0&&(t.compareFunction=cy,t.needsUpdate=!0),t}function yC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?s=Yc(Ly):s=Dy,n.setTexture2D(e||s,r)}function SC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Oy,r)}function bC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_CUBE_SHADOW?s=Yc(Iy):s=Fy,n.setTextureCube(e||s,r)}function wC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Uy,r)}function MC(t){switch(t){case 5126:return sC;case 35664:return aC;case 35665:return oC;case 35666:return lC;case 35674:return cC;case 35675:return uC;case 35676:return dC;case 5124:case 35670:return fC;case 35667:case 35671:return hC;case 35668:case 35672:return pC;case 35669:case 35673:return mC;case 5125:return gC;case 36294:return xC;case 36295:return vC;case 36296:return _C;case 35678:case 36198:case 36298:case 36306:case 35682:return yC;case 35679:case 36299:case 36307:return SC;case 35680:case 36300:case 36308:case 36293:return bC;case 36289:case 36303:case 36311:case 36292:return wC}}function EC(t,e){t.uniform1fv(this.addr,e)}function TC(t,e){const n=aa(e,this.size,2);t.uniform2fv(this.addr,n)}function AC(t,e){const n=aa(e,this.size,3);t.uniform3fv(this.addr,n)}function NC(t,e){const n=aa(e,this.size,4);t.uniform4fv(this.addr,n)}function RC(t,e){const n=aa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function CC(t,e){const n=aa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function PC(t,e){const n=aa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DC(t,e){t.uniform1iv(this.addr,e)}function LC(t,e){t.uniform2iv(this.addr,e)}function IC(t,e){t.uniform3iv(this.addr,e)}function UC(t,e){t.uniform4iv(this.addr,e)}function OC(t,e){t.uniform1uiv(this.addr,e)}function FC(t,e){t.uniform2uiv(this.addr,e)}function kC(t,e){t.uniform3uiv(this.addr,e)}function BC(t,e){t.uniform4uiv(this.addr,e)}function zC(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Yc(Ly):a=Dy;for(let l=0;l!==r;++l)n.setTexture2D(e[l]||a,s[l])}function jC(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Oy,s[a])}function HC(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=Yc(Iy):a=Fy;for(let l=0;l!==r;++l)n.setTextureCube(e[l]||a,s[l])}function VC(t,e,n){const i=this.cache,r=e.length,s=qc(n,r);Xt(i,s)||(t.uniform1iv(this.addr,s),$t(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Uy,s[a])}function GC(t){switch(t){case 5126:return EC;case 35664:return TC;case 35665:return AC;case 35666:return NC;case 35674:return RC;case 35675:return CC;case 35676:return PC;case 5124:case 35670:return DC;case 35667:case 35671:return LC;case 35668:case 35672:return IC;case 35669:case 35673:return UC;case 5125:return OC;case 36294:return FC;case 36295:return kC;case 36296:return BC;case 35678:case 36198:case 36298:case 36306:case 35682:return zC;case 35679:case 36299:case 36307:return jC;case 35680:case 36300:case 36308:case 36293:return HC;case 36289:case 36303:case 36311:case 36292:return VC}}class WC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=MC(n.type)}}class XC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=GC(n.type)}}class $C{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const l=r[s];l.setValue(e,n[l.id],i)}}}const ad=/(\w+)(\])?(\[|\.)?/g;function rg(t,e){t.seq.push(e),t.map[e.id]=e}function qC(t,e,n){const i=t.name,r=i.length;for(ad.lastIndex=0;;){const s=ad.exec(i),a=ad.lastIndex;let l=s[1];const c=s[2]==="]",u=s[3];if(c&&(l=l|0),u===void 0||u==="["&&a+2===r){rg(n,u===void 0?new WC(l,t,e):new XC(l,t,e));break}else{let m=n.map[l];m===void 0&&(m=new $C(l),rg(n,m)),n=m}}}class Gl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const l=e.getActiveUniform(n,a),c=e.getUniformLocation(n,l.name);qC(l,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const l=n[s],c=i[l.id];c.needsUpdate!==!1&&l.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function sg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const YC=37297;let KC=0;function ZC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const l=a+1;i.push(`${l===e?">":" "} ${l}: ${n[a]}`)}return i.join(`
`)}const ag=new Xe;function QC(t){rt._getMatrix(ag,rt.workingColorSpace,t);const e=`mat3( ${ag.elements.map(n=>n.toFixed(4))} )`;switch(rt.getTransfer(t)){case yc:return[e,"LinearTransferOETF"];case mt:return[e,"sRGBTransferOETF"];default:return Ve("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function og(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const l=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+ZC(t.getShaderSource(e),l)}else return s}function JC(t,e){const n=QC(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const e2={[$_]:"Linear",[q_]:"Reinhard",[Y_]:"Cineon",[ip]:"ACESFilmic",[Z_]:"AgX",[Q_]:"Neutral",[K_]:"Custom"};function t2(t,e){const n=e2[e];return n===void 0?(Ve("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const yl=new K;function n2(){rt.getLuminanceCoefficients(yl);const t=yl.x.toFixed(4),e=yl.y.toFixed(4),n=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function i2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function r2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function s2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let l=1;s.type===t.FLOAT_MAT2&&(l=2),s.type===t.FLOAT_MAT3&&(l=3),s.type===t.FLOAT_MAT4&&(l=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:l}}return n}function Ca(t){return t!==""}function lg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function cg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const a2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zf(t){return t.replace(a2,o2)}function o2(t,e){const n=Qe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Zf(n)}const l2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ug(t){return t.replace(l2,c2)}function c2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function dg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const u2={[kl]:"SHADOWMAP_TYPE_PCF",[Ra]:"SHADOWMAP_TYPE_VSM"};function d2(t){return u2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const f2={[lo]:"ENVMAP_MODE_REFRACTION"};function h2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":f2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const p2={[X_]:"ENVMAP_BLENDING_MULTIPLY",[B1]:"ENVMAP_BLENDING_MIX",[z1]:"ENVMAP_BLENDING_ADD"};function m2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":p2[t.combine]||"ENVMAP_BLENDING_NONE"}function g2(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,l=n.fragmentShader;const c=d2(n),u=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",f=h2(n),m=m2(n),h=i2(n),g=r2(s),_=r.createProgram();let b,x,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(b=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ca).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Ca).join(`
`),x.length>0&&(x+=`
`)):(b=[dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),x=[dg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",n.envMap?"#define "+m:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Fi?"#define TONE_MAPPING":"",n.toneMapping!==Fi?Qe.tonemapping_pars_fragment:"",n.toneMapping!==Fi?t2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,JC("linearToOutputTexel",n.outputColorSpace),n2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ca).join(`
`)),a=Zf(a),a=lg(a,n),a=cg(a,n),l=Zf(l),l=lg(l,n),l=cg(l,n),a=ug(a),l=ug(l),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,b=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",n.glslVersion===S0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===S0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const p=d+b+a,y=d+x+l,S=sg(r,r.VERTEX_SHADER,p),A=sg(r,r.FRAGMENT_SHADER,y);r.attachShader(_,S),r.attachShader(_,A),n.index0AttributeName!==void 0?r.bindAttribLocation(_,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function T(P){if(t.debug.checkShaderErrors){const U=r.getProgramInfoLog(_)||"",V=r.getShaderInfoLog(S)||"",L=r.getShaderInfoLog(A)||"",N=U.trim(),B=V.trim(),H=L.trim();let j=!0,W=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,_,S,A);else{const z=og(r,S,"vertex"),G=og(r,A,"fragment");ft("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+z+`
`+G)}else N!==""?Ve("WebGLProgram: Program Info Log:",N):(B===""||H==="")&&(W=!1);W&&(P.diagnostics={runnable:j,programLog:N,vertexShader:{log:B,prefix:b},fragmentShader:{log:H,prefix:x}})}r.deleteShader(S),r.deleteShader(A),v=new Gl(r,_),w=s2(r,_)}let v;this.getUniforms=function(){return v===void 0&&T(this),v};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let O=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=r.getProgramParameter(_,YC)),O},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}let x2=0;class v2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new _2(e),n.set(e,i)),i}}class _2{constructor(e){this.id=x2++,this.code=e,this.usedTimes=0}}function y2(t){return t===ts||t===xc||t===vc}function S2(t,e,n,i,r,s){const a=new my,l=new v2,c=new Set,u=[],f=new Map,m=i.logarithmicDepthBuffer,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return c.add(v),v===0?"uv":`uv${v}`}function _(v,w,O,P,U,V){const L=P.fog,N=U.geometry,B=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,H=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,j=e.get(v.envMap||B,H),W=h[v.type];let z=i.precision;v.precision!==null&&(z=i.getMaxPrecision(v.precision),z!==v.precision&&Ve("WebGLProgram.getParameters:",v.precision,"not supported, using",z,"instead."));const G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,J=G!==void 0?G.length:0;let ue=0;N.morphAttributes.position!==void 0&&(ue=1),N.morphAttributes.normal!==void 0&&(ue=2),N.morphAttributes.color!==void 0&&(ue=3);let Ae,X,oe,me;if(W){const we=pi[W];Ae=we.vertexShader,X=we.fragmentShader}else{Ae=v.vertexShader,X=v.fragmentShader;const we=l.getVertexShaderStage(v),pt=l.getFragmentShaderStage(v);l.update(v,we,pt),oe=we.id,me=pt.id}const Ne=t.getRenderTarget(),ye=t.state.buffers.depth.getReversed(),je=U.isInstancedMesh===!0,Be=U.isBatchedMesh===!0,Ee=!!v.map,Ge=!!v.matcap,Je=!!j,We=Je&&j.isPMREMTexture===!0,xt=!!v.aoMap,vt=!!v.lightMap,Rt=!!v.bumpMap&&v.wireframe===!1,Ke=!!v.normalMap,_t=!!v.displacementMap,ot=!!v.emissiveMap,Ut=!!v.metalnessMap,ie=!!v.roughnessMap,Pe=v.anisotropy>0,C=v.clearcoat>0,be=v.diffuseRoughness>0,Re=v.dispersion>0,Fe=v.retroreflectivity>0,pe=v.iridescence>0,Tt=v.sheen>0,Oe=v.transmission>0,He=Pe&&!!v.anisotropyMap,R=C&&!!v.clearcoatMap,M=C&&!!v.clearcoatNormalMap,$=C&&!!v.clearcoatRoughnessMap,ae=be&&!!v.diffuseRoughnessMap,se=pe&&!!v.iridescenceMap,k=pe&&!!v.iridescenceThicknessMap,le=Tt&&!!v.sheenColorMap,Q=Tt&&!!v.sheenRoughnessMap,ee=!!v.specularMap,xe=!!v.specularColorMap,I=!!v.specularIntensityMap,re=Oe&&!!v.transmissionMap,te=Oe&&!!v.thicknessMap,ve=!!v.gradientMap,fe=!!v.alphaMap,ge=v.alphaTest>0,ke=!!v.alphaHash,Ze=!!v.extensions;let de=Fi;v.toneMapped&&(Ne===null||Ne.isXRRenderTarget===!0)&&(de=t.toneMapping);const ze=We?j.isCompressedCubeTexture?j.image[0].mipmaps:j.mipmaps:null,Ye={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:Ae,fragmentShader:X,defines:v.defines,customVertexShaderID:oe,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:z,batching:Be,batchingColor:Be&&U._colorsTexture!==null,instancing:je,instancingColor:je&&U.instanceColor!==null,instancingMorph:je&&U.morphTexture!==null,outputColorSpace:Ne===null?t.outputColorSpace:Ne.isXRRenderTarget===!0?Ne.texture.colorSpace:rt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:Ee,matcap:Ge,envMap:Je,envMapMode:Je&&j.mapping,envMapPMREM:We,envMapMaxLod:We?ze.length-1:null,envMapSize:We?ze[0].width:null,aoMap:xt,lightMap:vt,bumpMap:Rt,normalMap:Ke,displacementMap:_t,emissiveMap:ot,normalMapObjectSpace:Ke&&v.normalMapType===V1,normalMapTangentSpace:Ke&&v.normalMapType===qf,packedNormalMap:Ke&&v.normalMapType===qf&&y2(v.normalMap.format),metalnessMap:Ut,roughnessMap:ie,anisotropy:Pe,anisotropyMap:He,clearcoat:C,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:$,diffuseRoughness:be,diffuseRoughnessMap:ae,dispersion:Re,retroreflection:Fe,iridescence:pe,iridescenceMap:se,iridescenceThicknessMap:k,sheen:Tt,sheenColorMap:le,sheenRoughnessMap:Q,specularMap:ee,specularColorMap:xe,specularIntensityMap:I,transmission:Oe,transmissionMap:re,thicknessMap:te,gradientMap:ve,opaque:v.transparent===!1&&v.blending===za&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:ge,alphaHash:ke,combine:v.combine,mapUv:Ee&&g(v.map.channel),aoMapUv:xt&&g(v.aoMap.channel),lightMapUv:vt&&g(v.lightMap.channel),bumpMapUv:Rt&&g(v.bumpMap.channel),normalMapUv:Ke&&g(v.normalMap.channel),displacementMapUv:_t&&g(v.displacementMap.channel),emissiveMapUv:ot&&g(v.emissiveMap.channel),metalnessMapUv:Ut&&g(v.metalnessMap.channel),roughnessMapUv:ie&&g(v.roughnessMap.channel),anisotropyMapUv:He&&g(v.anisotropyMap.channel),clearcoatMapUv:R&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:M&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(v.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ae&&g(v.diffuseRoughnessMap.channel),iridescenceMapUv:se&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:k&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Q&&g(v.sheenRoughnessMap.channel),specularMapUv:ee&&g(v.specularMap.channel),specularColorMapUv:xe&&g(v.specularColorMap.channel),specularIntensityMapUv:I&&g(v.specularIntensityMap.channel),transmissionMapUv:re&&g(v.transmissionMap.channel),thicknessMapUv:te&&g(v.thicknessMap.channel),alphaMapUv:fe&&g(v.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ke||Pe),vertexNormals:!!N.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!N.attributes.uv&&(Ee||fe),fog:!!L,useFog:v.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||N.attributes.normal===void 0&&Ke===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ye,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ue,numSunLights:w.sun.length,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numSunLightShadows:w.sunShadowMap.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numLightProbeGrids:V.filter(we=>we.texture!==null).length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:t.shadowMap.enabled&&O.length>0,shadowMapType:t.shadowMap.type,toneMapping:de,decodeVideoTexture:Ee&&v.map.isVideoTexture===!0&&rt.getTransfer(v.map.colorSpace)===mt,decodeVideoTextureEmissive:ot&&v.emissiveMap.isVideoTexture===!0&&rt.getTransfer(v.emissiveMap.colorSpace)===mt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Di,flipSided:v.side===Cn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ze&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ze&&v.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function b(v){const w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(const O in v.defines)w.push(O),w.push(v.defines[O]);return v.isRawShaderMaterial===!1&&(x(w,v),d(w,v),w.push(t.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function x(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapPMREM),v.push(w.envMapMaxLod),v.push(w.envMapSize),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.diffuseRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.numSunLights),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numSunLightShadows),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.numLightProbeGrids),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function d(v,w){a.disableAll(),w.instancing&&a.enable(0),w.instancingColor&&a.enable(1),w.instancingMorph&&a.enable(2),w.matcap&&a.enable(3),w.envMap&&a.enable(4),w.normalMapObjectSpace&&a.enable(5),w.normalMapTangentSpace&&a.enable(6),w.clearcoat&&a.enable(7),w.iridescence&&a.enable(8),w.alphaTest&&a.enable(9),w.vertexColors&&a.enable(10),w.vertexAlphas&&a.enable(11),w.vertexUv1s&&a.enable(12),w.vertexUv2s&&a.enable(13),w.vertexUv3s&&a.enable(14),w.vertexTangents&&a.enable(15),w.anisotropy&&a.enable(16),w.alphaHash&&a.enable(17),w.batching&&a.enable(18),w.dispersion&&a.enable(19),w.retroreflection&&a.enable(24),w.diffuseRoughness&&a.enable(25),w.batchingColor&&a.enable(20),w.gradientMap&&a.enable(21),w.packedNormalMap&&a.enable(22),w.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reversedDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),w.numLightProbeGrids>0&&a.enable(22),w.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function p(v){const w=h[v.type];let O;if(w){const P=pi[w];O=VT.clone(P.uniforms)}else O=v.uniforms;return O}function y(v,w){let O=f.get(w);return O!==void 0?++O.usedTimes:(O=new g2(t,w,v,r),u.push(O),f.set(w,O)),O}function S(v){if(--v.usedTimes===0){const w=u.indexOf(v);u[w]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function A(v){l.remove(v)}function T(){l.dispose()}return{getParameters:_,getProgramCacheKey:b,getUniforms:p,acquireProgram:y,releaseProgram:S,releaseShaderCache:A,programs:u,dispose:T}}function b2(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let l=t.get(a);return l===void 0&&(l={},t.set(a,l)),l}function i(a){t.delete(a)}function r(a,l,c){t.get(a)[l]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function w2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function fg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h){let g=0;return h.isInstancedMesh&&(g+=2),h.isSkinnedMesh&&(g+=1),g}function l(h,g,_,b,x,d){let p=t[e];return p===void 0?(p={id:h.id,object:h,geometry:g,material:_,materialVariant:a(h),groupOrder:b,renderOrder:h.renderOrder,z:x,group:d},t[e]=p):(p.id=h.id,p.object=h,p.geometry=g,p.material=_,p.materialVariant=a(h),p.groupOrder=b,p.renderOrder=h.renderOrder,p.z=x,p.group=d),e++,p}function c(h,g,_,b,x,d,p){p.reversedDepth===!0&&(x=-x);const y=l(h,g,_,b,x,d);_.transmission>0?i.push(y):_.transparent===!0?r.push(y):n.push(y)}function u(h,g,_,b,x,d){const p=l(h,g,_,b,x,d);_.transmission>0?i.unshift(p):_.transparent===!0?r.unshift(p):n.unshift(p)}function f(h,g){n.length>1&&n.sort(h||w2),i.length>1&&i.sort(g||fg),r.length>1&&r.sort(g||fg)}function m(){for(let h=e,g=t.length;h<g;h++){const _=t[h];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:m,sort:f}}function M2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new hg,t.set(i,[a])):r>=s.length?(a=new hg,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function E2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new K,color:new st};break;case"SpotLight":n={position:new K,direction:new K,color:new st,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new st,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new st,groundColor:new st};break;case"RectAreaLight":n={color:new st,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function T2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let A2=0;function N2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function R2(t){const e=new E2,n=T2(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new K);const r=new K,s=new Nt,a=new Nt;function l(u){let f=0,m=0,h=0;for(let V=0;V<9;V++)i.probe[V].set(0,0,0);let g=0,_=0,b=0,x=0,d=0,p=0,y=0,S=0,A=0,T=0,v=0,w=0,O=0,P=0;u.sort(N2);for(let V=0,L=u.length;V<L;V++){const N=u[V],B=N.color,H=N.intensity,j=N.distance;let W=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===ts?W=N.shadow.map.texture:W=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)f+=B.r*H,m+=B.g*H,h+=B.b*H;else if(N.isLightProbe){for(let z=0;z<9;z++)i.probe[z].addScaledVector(N.sh.coefficients[z],H);P++}else if(N.isSunLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,J=n.get(N);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),i.sunShadow[_]=J,i.sunShadowMap[_]=W;const ue=G.getViewportCount();for(let Ae=0;Ae<ue;Ae++)i.sunShadowMatrix[b+Ae]=G.getMatrix(Ae),i.sunShadowCascade[b+Ae]=G._cascadeData[Ae];b+=ue,_++}i.sun[g]=z,g++}else if(N.isDirectionalLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){const G=N.shadow,J=n.get(N);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.directionalShadow[x]=J,i.directionalShadowMap[x]=W,i.directionalShadowMatrix[x]=N.shadow.matrix,A++}i.directional[x]=z,x++}else if(N.isSpotLight){const z=e.get(N);z.position.setFromMatrixPosition(N.matrixWorld),z.color.copy(B).multiplyScalar(H),z.distance=j,z.coneCos=Math.cos(N.angle),z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),z.decay=N.decay,i.spot[p]=z;const G=N.shadow;if(N.map&&(i.spotLightMap[w]=N.map,w++,G.updateMatrices(N),N.castShadow&&O++),i.spotLightMatrix[p]=G.matrix,N.castShadow){const J=n.get(N);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,i.spotShadow[p]=J,i.spotShadowMap[p]=W,v++}p++}else if(N.isRectAreaLight){const z=e.get(N);z.color.copy(B).multiplyScalar(H),z.halfWidth.set(N.width*.5,0,0),z.halfHeight.set(0,N.height*.5,0),i.rectArea[y]=z,y++}else if(N.isPointLight){const z=e.get(N);if(z.color.copy(N.color).multiplyScalar(N.intensity),z.distance=N.distance,z.decay=N.decay,N.castShadow){const G=N.shadow,J=n.get(N);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,i.pointShadow[d]=J,i.pointShadowMap[d]=W,i.pointShadowMatrix[d]=N.shadow.matrix,T++}i.point[d]=z,d++}else if(N.isHemisphereLight){const z=e.get(N);z.skyColor.copy(N.color).multiplyScalar(H),z.groundColor.copy(N.groundColor).multiplyScalar(H),i.hemi[S]=z,S++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Me.LTC_FLOAT_1,i.rectAreaLTC2=Me.LTC_FLOAT_2):(i.rectAreaLTC1=Me.LTC_HALF_1,i.rectAreaLTC2=Me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=m,i.ambient[2]=h;const U=i.hash;(U.sunLength!==g||U.directionalLength!==x||U.pointLength!==d||U.spotLength!==p||U.rectAreaLength!==y||U.hemiLength!==S||U.numSunShadows!==_||U.numDirectionalShadows!==A||U.numPointShadows!==T||U.numSpotShadows!==v||U.numSpotMaps!==w||U.numLightProbes!==P)&&(i.sun.length=g,i.directional.length=x,i.spot.length=p,i.rectArea.length=y,i.point.length=d,i.hemi.length=S,i.sunShadow.length=_,i.sunShadowMap.length=_,i.sunShadowMatrix.length=b,i.sunShadowCascade.length=b,i.directionalShadow.length=A,i.directionalShadowMap.length=A,i.directionalShadowMatrix.length=A,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=v,i.spotShadowMap.length=v,i.spotLightMatrix.length=v+w-O,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=O,i.numLightProbes=P,U.sunLength=g,U.directionalLength=x,U.pointLength=d,U.spotLength=p,U.rectAreaLength=y,U.hemiLength=S,U.numSunShadows=_,U.numDirectionalShadows=A,U.numPointShadows=T,U.numSpotShadows=v,U.numSpotMaps=w,U.numLightProbes=P,i.version=A2++)}function c(u,f){let m=0,h=0,g=0,_=0,b=0,x=0;const d=f.matrixWorldInverse;for(let p=0,y=u.length;p<y;p++){const S=u[p];if(S.isSunLight){const A=i.sun[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),m++}else if(S.isDirectionalLight){const A=i.directional[h];A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),h++}else if(S.isSpotLight){const A=i.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),_++}else if(S.isRectAreaLight){const A=i.rectArea[b];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),a.identity(),s.copy(S.matrixWorld),s.premultiply(d),a.extractRotation(s),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),b++}else if(S.isPointLight){const A=i.point[g];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),g++}else if(S.isHemisphereLight){const A=i.hemi[x];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),x++}}}return{setup:l,setupView:c,state:i}}function pg(t){const e=new R2(t),n=[],i=[],r=[];function s(m){f.camera=m,n.length=0,i.length=0,r.length=0}function a(m){m.isLightProbeGrid?r.push(m):n.push(m)}function l(m){i.push(m)}function c(){e.setup(n),r.sort((m,h)=>m.priority-h.priority||m.id-h.id)}function u(m){e.setupView(n,m)}const f={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:f,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:l}}function C2(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let l;return a===void 0?(l=new pg(t),e.set(r,[l])):s>=a.length?(l=new pg(t),a.push(l)):l=a[s],l}function i(){e=new WeakMap}return{get:n,dispose:i}}const P2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,L2=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],I2=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],mg=new Nt,Ma=new K,od=new K;function U2(t,e,n){let i=new ho;const r=new at,s=new at,a=new Dt,l=new $T,c=new qT,u={},f=n.maxTextureSize,m={[es]:Cn,[Cn]:es,[Di]:Di},h=new ns({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:P2,fragmentShader:D2}),g=h.clone();g.defines.HORIZONTAL_PASS=1;const _=new ci;_.setAttribute("position",new yr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Si(_,h),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let d=this.type;this.render=function(T,v,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||T.length===0)return;this.type===y1&&(Ve("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=kl);const O=t.getRenderTarget(),P=t.getActiveCubeFace(),U=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Bs),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const L=d!==this.type;L&&v.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(B=>B.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,B=T.length;N<B;N++){const H=T[N],j=H.shadow;if(j===void 0){Ve("WebGLShadowMap:",H,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const W=j.getFrameExtents();r.multiply(W),s.copy(j.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/W.x),r.x=s.x*W.x,j.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/W.y),r.y=s.y*W.y,j.mapSize.y=s.y));const z=t.state.buffers.depth.getReversed();if(j.camera._reversedDepth=z,j.map===null||L===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Ra){if(H.isPointLight){Ve("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new yi(r.x,r.y,{format:ts,type:wi,minFilter:En,magFilter:En,generateMipmaps:!1}),j.map.texture.name=H.name+".shadowMap",j.map.depthTexture=new Ks(r.x,r.y,gi),j.map.depthTexture.name=H.name+".shadowMapDepth",j.map.depthTexture.format=Mr,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=nn,j.map.depthTexture.magFilter=nn}else H.isPointLight?(j.map=new xp(r.x),j.map.depthTexture=new by(r.x,bi)):(j.map=new yi(r.x,r.y),j.map.depthTexture=new Ks(r.x,r.y,bi)),j.map.depthTexture.name=H.name+".shadowMap",j.map.depthTexture.format=Mr,this.type===kl?(j.map.depthTexture.compareFunction=z?ly:oy,j.map.depthTexture.minFilter=En,j.map.depthTexture.magFilter=En):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=nn,j.map.depthTexture.magFilter=nn);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==r.x||j.map.height!==r.y)&&j.map.setSize(r.x,r.y);const G=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();H.isPointLight!==!0&&j.updateMatrices(H,w);const J=j.camera.layers.mask&4294967294?j.camera.layers:w.layers;for(let ue=0;ue<G;ue++){const Ae=j.getCamera(ue);if(H.isPointLight){const X=j.camera,oe=j.matrix,me=H.distance||X.far;me!==X.far&&(X.far=me,X.updateProjectionMatrix()),Ma.setFromMatrixPosition(H.matrixWorld),X.position.copy(Ma),od.copy(X.position),od.add(L2[ue]),X.up.copy(I2[ue]),X.lookAt(od),X.updateMatrixWorld(),oe.makeTranslation(-Ma.x,-Ma.y,-Ma.z),mg.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),j._frustum.setFromProjectionMatrix(mg,X.coordinateSystem,X.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)t.setRenderTarget(j.map,ue),t.clear();else{ue===0&&(t.setRenderTarget(j.map),t.clear());const X=j.getViewport(ue);a.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),V.viewport(a)}i=j.getFrustum(ue),S(v,w,Ae,H,J,this.type)}j.isPointLightShadow!==!0&&this.type===Ra&&p(j,w),j.needsUpdate=!1}d=this.type,x.needsUpdate=!1,t.setRenderTarget(O,P,U)};function p(T,v){const w=e.update(b);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null?T.mapPass=new yi(r.x,r.y,{format:ts,type:wi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),h.uniforms.shadow_pass.value=T.map.depthTexture,h.uniforms.resolution.value.set(T.map.width,T.map.height),h.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(v,null,w,h,b,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value.set(T.map.width,T.map.height),g.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(v,null,w,g,b,null)}function y(T,v,w,O){let P=null;const U=w.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)P=U;else if(P=w.isPointLight===!0?c:l,t.localClippingEnabled&&v.clipShadows===!0&&Array.isArray(v.clippingPlanes)&&v.clippingPlanes.length!==0||v.displacementMap&&v.displacementScale!==0||v.alphaMap&&v.alphaTest>0||v.map&&v.alphaTest>0||v.alphaToCoverage===!0){const V=P.uuid,L=v.uuid;let N=u[V];N===void 0&&(N={},u[V]=N);let B=N[L];B===void 0&&(B=P.clone(),N[L]=B,v.addEventListener("dispose",A)),P=B}if(P.visible=v.visible,P.wireframe=v.wireframe,O===Ra?P.side=v.shadowSide!==null?v.shadowSide:v.side:P.side=v.shadowSide!==null?v.shadowSide:m[v.side],P.alphaMap=v.alphaMap,P.alphaTest=v.alphaToCoverage===!0?.5:v.alphaTest,P.map=v.map,P.clipShadows=v.clipShadows,P.clippingPlanes=v.clippingPlanes,P.clipIntersection=v.clipIntersection,P.displacementMap=v.displacementMap,P.displacementScale=v.displacementScale,P.displacementBias=v.displacementBias,P.wireframeLinewidth=v.wireframeLinewidth,P.linewidth=v.linewidth,w.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const V=t.properties.get(P);V.light=w}return P}function S(T,v,w,O,P,U){if(T.visible===!1)return;if(T.layers.test(P)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&U===Ra)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,T.matrixWorld);const N=e.update(T),B=T.material;if(Array.isArray(B)){const H=N.groups;for(let j=0,W=H.length;j<W;j++){const z=H[j],G=B[z.materialIndex];if(G&&G.visible){const J=y(T,G,O,U);T.onBeforeShadow(t,T,v,w,N,J,z),t.renderBufferDirect(w,null,N,J,T,z),T.onAfterShadow(t,T,v,w,N,J,z)}}}else if(B.visible){const H=y(T,B,O,U);T.onBeforeShadow(t,T,v,w,N,H,null),t.renderBufferDirect(w,null,N,H,T,null),T.onAfterShadow(t,T,v,w,N,H,null)}}const L=T.children;for(let N=0,B=L.length;N<B;N++)S(L[N],v,w,O,P,U)}function A(T){T.target.removeEventListener("dispose",A);for(const w in u){const O=u[w],P=T.target.uuid;P in O&&(O[P].dispose(),delete O[P])}}}function O2(t,e){function n(){let I=!1;const re=new Dt;let te=null;const ve=new Dt(0,0,0,0);return{setMask:function(fe){te!==fe&&!I&&(t.colorMask(fe,fe,fe,fe),te=fe)},setLocked:function(fe){I=fe},setClear:function(fe,ge,ke,Ze,de){de===!0&&(fe*=Ze,ge*=Ze,ke*=Ze),re.set(fe,ge,ke,Ze),ve.equals(re)===!1&&(t.clearColor(fe,ge,ke,Ze),ve.copy(re))},reset:function(){I=!1,te=null,ve.set(-1,0,0,0)}}}function i(){let I=!1,re=!1,te=null,ve=null,fe=null;return{setReversed:function(ge){if(re!==ge){const ke=e.get("EXT_clip_control");ge?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),re=ge;const Ze=fe;fe=null,this.setClear(Ze)}},getReversed:function(){return re},setTest:function(ge){ge?ye(t.DEPTH_TEST):je(t.DEPTH_TEST)},setMask:function(ge){te!==ge&&!I&&(t.depthMask(ge),te=ge)},setFunc:function(ge){if(re&&(ge=eT[ge]),ve!==ge){switch(ge){case cf:t.depthFunc(t.NEVER);break;case uf:t.depthFunc(t.ALWAYS);break;case df:t.depthFunc(t.LESS);break;case oo:t.depthFunc(t.LEQUAL);break;case ff:t.depthFunc(t.EQUAL);break;case hf:t.depthFunc(t.GEQUAL);break;case pf:t.depthFunc(t.GREATER);break;case mf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ve=ge}},setLocked:function(ge){I=ge},setClear:function(ge){fe!==ge&&(fe=ge,re&&(ge=1-ge),t.clearDepth(ge))},reset:function(){I=!1,te=null,ve=null,fe=null,re=!1}}}function r(){let I=!1,re=null,te=null,ve=null,fe=null,ge=null,ke=null,Ze=null,de=null;return{setTest:function(ze){I||(ze?ye(t.STENCIL_TEST):je(t.STENCIL_TEST))},setMask:function(ze){re!==ze&&!I&&(t.stencilMask(ze),re=ze)},setFunc:function(ze,Ye,we){(te!==ze||ve!==Ye||fe!==we)&&(t.stencilFunc(ze,Ye,we),te=ze,ve=Ye,fe=we)},setOp:function(ze,Ye,we){(ge!==ze||ke!==Ye||Ze!==we)&&(t.stencilOp(ze,Ye,we),ge=ze,ke=Ye,Ze=we)},setLocked:function(ze){I=ze},setClear:function(ze){de!==ze&&(t.clearStencil(ze),de=ze)},reset:function(){I=!1,re=null,te=null,ve=null,fe=null,ge=null,ke=null,Ze=null,de=null}}}const s=new n,a=new i,l=new r;let c={};const u=new WeakMap;let f={},m={},h={},g=new WeakMap,_=[],b=null,x=!1,d=null,p=null,y=null,S=null,A=null,T=null,v=null,w=new st(0,0,0),O=0,P=!1,U=null,V=null,L=null,N=null,B=null;const H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let j=!1,W=0;const z=t.getParameter(t.VERSION);z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(z)[1]),j=W>=1):z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),j=W>=2);let G=null,J={};const ue=t.getParameter(t.SCISSOR_BOX),Ae=t.getParameter(t.VIEWPORT),X=new Dt().fromArray(ue),oe=new Dt().fromArray(Ae);function me(I,re,te,ve){const fe=new Uint8Array(4),ge=t.createTexture();t.bindTexture(I,ge),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ke=0;ke<te;ke++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(re,0,t.RGBA,1,1,ve,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(re+ke,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return ge}const Ne={};Ne[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),Ne[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ne[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Ne[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ye(t.DEPTH_TEST),a.setFunc(oo),Rt(!1),Ke(v0),ye(t.CULL_FACE),xt(Bs);function ye(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function je(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Be(I,re){return h[I]!==re?(t.bindFramebuffer(I,re),h[I]=re,I===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=re),I===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=re),!0):!1}function Ee(I,re){let te=_,ve=!1;if(I){te=g.get(re),te===void 0&&(te=[],g.set(re,te));const fe=I.textures;if(te.length!==fe.length||te[0]!==t.COLOR_ATTACHMENT0){for(let ge=0,ke=fe.length;ge<ke;ge++)te[ge]=t.COLOR_ATTACHMENT0+ge;te.length=fe.length,ve=!0}}else te[0]!==t.BACK&&(te[0]=t.BACK,ve=!0);ve&&t.drawBuffers(te)}function Ge(I){return b!==I?(t.useProgram(I),b=I,!0):!1}const Je={[ys]:t.FUNC_ADD,[b1]:t.FUNC_SUBTRACT,[w1]:t.FUNC_REVERSE_SUBTRACT};Je[M1]=t.MIN,Je[E1]=t.MAX;const We={[T1]:t.ZERO,[A1]:t.ONE,[N1]:t.SRC_COLOR,[G_]:t.SRC_ALPHA,[I1]:t.SRC_ALPHA_SATURATE,[D1]:t.DST_COLOR,[C1]:t.DST_ALPHA,[R1]:t.ONE_MINUS_SRC_COLOR,[W_]:t.ONE_MINUS_SRC_ALPHA,[L1]:t.ONE_MINUS_DST_COLOR,[P1]:t.ONE_MINUS_DST_ALPHA,[U1]:t.CONSTANT_COLOR,[O1]:t.ONE_MINUS_CONSTANT_COLOR,[F1]:t.CONSTANT_ALPHA,[k1]:t.ONE_MINUS_CONSTANT_ALPHA};function xt(I,re,te,ve,fe,ge,ke,Ze,de,ze){if(I===Bs){x===!0&&(je(t.BLEND),x=!1);return}if(x===!1&&(ye(t.BLEND),x=!0),I!==S1){if(I!==d||ze!==P){if((p!==ys||A!==ys)&&(t.blendEquation(t.FUNC_ADD),p=ys,A=ys),ze)switch(I){case za:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lf:t.blendFunc(t.ONE,t.ONE);break;case _0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case y0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ft("WebGLState: Invalid blending: ",I);break}else switch(I){case za:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lf:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case _0:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y0:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",I);break}y=null,S=null,T=null,v=null,w.set(0,0,0),O=0,d=I,P=ze}return}fe=fe||re,ge=ge||te,ke=ke||ve,(re!==p||fe!==A)&&(t.blendEquationSeparate(Je[re],Je[fe]),p=re,A=fe),(te!==y||ve!==S||ge!==T||ke!==v)&&(t.blendFuncSeparate(We[te],We[ve],We[ge],We[ke]),y=te,S=ve,T=ge,v=ke),(Ze.equals(w)===!1||de!==O)&&(t.blendColor(Ze.r,Ze.g,Ze.b,de),w.copy(Ze),O=de),d=I,P=!1}function vt(I,re){I.side===Di?je(t.CULL_FACE):ye(t.CULL_FACE);let te=I.side===Cn;re&&(te=!te),Rt(te),I.blending===za&&I.transparent===!1?xt(Bs):xt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const ve=I.stencilWrite;l.setTest(ve),ve&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ot(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ye(t.SAMPLE_ALPHA_TO_COVERAGE):je(t.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(I){U!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),U=I)}function Ke(I){I!==v1?(ye(t.CULL_FACE),I!==V&&(I===v0?t.cullFace(t.BACK):I===_1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):je(t.CULL_FACE),V=I}function _t(I){I!==L&&(j&&t.lineWidth(I),L=I)}function ot(I,re,te){I?(ye(t.POLYGON_OFFSET_FILL),(N!==re||B!==te)&&(N=re,B=te,a.getReversed()&&(re=-re,te=-te),t.polygonOffset(re,te))):je(t.POLYGON_OFFSET_FILL)}function Ut(I){I?ye(t.SCISSOR_TEST):je(t.SCISSOR_TEST)}function ie(I){I===void 0&&(I=t.TEXTURE0+H-1),G!==I&&(t.activeTexture(I),G=I)}function Pe(I,re,te){te===void 0&&(G===null?te=t.TEXTURE0+H-1:te=G);let ve=J[te];ve===void 0&&(ve={type:void 0,texture:void 0},J[te]=ve),(ve.type!==I||ve.texture!==re)&&(G!==te&&(t.activeTexture(te),G=te),t.bindTexture(I,re||Ne[I]),ve.type=I,ve.texture=re)}function C(){const I=J[G];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function be(){try{t.compressedTexImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function Re(){try{t.compressedTexImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function Fe(){try{t.texSubImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function pe(){try{t.texSubImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function Tt(){try{t.compressedTexSubImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function Oe(){try{t.compressedTexSubImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function He(){try{t.texStorage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function R(){try{t.texStorage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function M(){try{t.texImage2D(...arguments)}catch(I){ft("WebGLState:",I)}}function $(){try{t.texImage3D(...arguments)}catch(I){ft("WebGLState:",I)}}function ae(I){return m[I]!==void 0?m[I]:t.getParameter(I)}function se(I,re){m[I]!==re&&(t.pixelStorei(I,re),m[I]=re)}function k(I){X.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),X.copy(I))}function le(I){oe.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),oe.copy(I))}function Q(I,re){let te=u.get(re);te===void 0&&(te=new WeakMap,u.set(re,te));let ve=te.get(I);ve===void 0&&(ve=t.getUniformBlockIndex(re,I.name),t.uniformBlockBinding(re,ve,ve),te.set(I,ve))}function ee(I,re,te){const fe=u.get(re).get(I);c[fe]!==te&&(t.bindBufferBase(t.UNIFORM_BUFFER,fe,te),c[fe]=te)}function xe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),f={},m={},G=null,J={},h={},c={},g=new WeakMap,_=[],b=null,x=!1,d=null,p=null,y=null,S=null,A=null,T=null,v=null,w=new st(0,0,0),O=0,P=!1,U=null,V=null,L=null,N=null,B=null,X.set(0,0,t.canvas.width,t.canvas.height),oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),l.reset()}return{buffers:{color:s,depth:a,stencil:l},enable:ye,disable:je,bindFramebuffer:Be,drawBuffers:Ee,useProgram:Ge,setBlending:xt,setMaterial:vt,setFlipSided:Rt,setCullFace:Ke,setLineWidth:_t,setPolygonOffset:ot,setScissorTest:Ut,activeTexture:ie,bindTexture:Pe,unbindTexture:C,compressedTexImage2D:be,compressedTexImage3D:Re,texImage2D:M,texImage3D:$,pixelStorei:se,getParameter:ae,updateUBOMapping:Q,uniformBlockBinding:ee,texStorage2D:He,texStorage3D:R,texSubImage2D:Fe,texSubImage3D:pe,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Oe,scissor:k,viewport:le,reset:xe}}function F2(t,e,n,i,r,s,a){const l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new at,f=new WeakMap,m=new Set;let h;const g=new WeakMap,_=new Set,b=new FinalizationRegistry(R=>_.delete(R));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(R,M){return x?new OffscreenCanvas(R,M):Sc("canvas")}function p(R,M,$){let ae=1;const se=He(R);if((se.width>$||se.height>$)&&(ae=$/Math.max(se.width,se.height)),ae<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const k=Math.floor(ae*se.width),le=Math.floor(ae*se.height);h===void 0&&(h=d(k,le));const Q=M?d(k,le):h;return Q.width=k,Q.height=le,Q.getContext("2d").drawImage(R,0,0,k,le),Ve("WebGLRenderer: Texture has been resized from ("+se.width+"x"+se.height+") to ("+k+"x"+le+")."),Q}else return"data"in R&&Ve("WebGLRenderer: Image in DataTexture is too big ("+se.width+"x"+se.height+")."),R;return R}function y(R){return R.generateMipmaps}function S(R){t.generateMipmap(R)}function A(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function T(R,M,$,ae,se,k=!1){if(R!==null){if(t[R]!==void 0)return t[R];Ve("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let le;ae&&(le=e.get("EXT_texture_norm16"),le||Ve("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=M;if(M===t.RED&&($===t.FLOAT&&(Q=t.R32F),$===t.HALF_FLOAT&&(Q=t.R16F),$===t.UNSIGNED_BYTE&&(Q=t.R8),$===t.UNSIGNED_SHORT&&le&&(Q=le.R16_EXT),$===t.SHORT&&le&&(Q=le.R16_SNORM_EXT)),M===t.RED_INTEGER&&($===t.UNSIGNED_BYTE&&(Q=t.R8UI),$===t.UNSIGNED_SHORT&&(Q=t.R16UI),$===t.UNSIGNED_INT&&(Q=t.R32UI),$===t.BYTE&&(Q=t.R8I),$===t.SHORT&&(Q=t.R16I),$===t.INT&&(Q=t.R32I)),M===t.RG&&($===t.FLOAT&&(Q=t.RG32F),$===t.HALF_FLOAT&&(Q=t.RG16F),$===t.UNSIGNED_BYTE&&(Q=t.RG8),$===t.UNSIGNED_SHORT&&le&&(Q=le.RG16_EXT),$===t.SHORT&&le&&(Q=le.RG16_SNORM_EXT)),M===t.RG_INTEGER&&($===t.UNSIGNED_BYTE&&(Q=t.RG8UI),$===t.UNSIGNED_SHORT&&(Q=t.RG16UI),$===t.UNSIGNED_INT&&(Q=t.RG32UI),$===t.BYTE&&(Q=t.RG8I),$===t.SHORT&&(Q=t.RG16I),$===t.INT&&(Q=t.RG32I)),M===t.RGB_INTEGER&&($===t.UNSIGNED_BYTE&&(Q=t.RGB8UI),$===t.UNSIGNED_SHORT&&(Q=t.RGB16UI),$===t.UNSIGNED_INT&&(Q=t.RGB32UI),$===t.BYTE&&(Q=t.RGB8I),$===t.SHORT&&(Q=t.RGB16I),$===t.INT&&(Q=t.RGB32I)),M===t.RGBA_INTEGER&&($===t.UNSIGNED_BYTE&&(Q=t.RGBA8UI),$===t.UNSIGNED_SHORT&&(Q=t.RGBA16UI),$===t.UNSIGNED_INT&&(Q=t.RGBA32UI),$===t.BYTE&&(Q=t.RGBA8I),$===t.SHORT&&(Q=t.RGBA16I),$===t.INT&&(Q=t.RGBA32I)),M===t.RGB&&($===t.UNSIGNED_SHORT&&le&&(Q=le.RGB16_EXT),$===t.SHORT&&le&&(Q=le.RGB16_SNORM_EXT),$===t.UNSIGNED_INT_5_9_9_9_REV&&(Q=t.RGB9_E5),$===t.UNSIGNED_INT_10F_11F_11F_REV&&(Q=t.R11F_G11F_B10F)),M===t.RGBA){const ee=k?yc:rt.getTransfer(se);$===t.FLOAT&&(Q=t.RGBA32F),$===t.HALF_FLOAT&&(Q=t.RGBA16F),$===t.UNSIGNED_BYTE&&(Q=ee===mt?t.SRGB8_ALPHA8:t.RGBA8),$===t.UNSIGNED_SHORT&&le&&(Q=le.RGBA16_EXT),$===t.SHORT&&le&&(Q=le.RGBA16_SNORM_EXT),$===t.UNSIGNED_SHORT_4_4_4_4&&(Q=t.RGBA4),$===t.UNSIGNED_SHORT_5_5_5_1&&(Q=t.RGB5_A1)}return(Q===t.R16F||Q===t.R32F||Q===t.RG16F||Q===t.RG32F||Q===t.RGBA16F||Q===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function v(R,M){let $;return R?M===null||M===bi||M===Ys?$=t.DEPTH24_STENCIL8:M===gi?$=t.DEPTH32F_STENCIL8:M===co&&($=t.DEPTH24_STENCIL8,Ve("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===bi||M===Ys?$=t.DEPTH_COMPONENT24:M===gi?$=t.DEPTH_COMPONENT32F:M===co&&($=t.DEPTH_COMPONENT16),$}function w(R,M){return y(R)===!0||R.isFramebufferTexture&&R.minFilter!==nn&&R.minFilter!==En?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function O(R){const M=new WeakRef(R);i.get(R).__ref=M,_.add(M),b.register(R,M,M)}function P(R){const M=i.get(R).__ref;M!==void 0&&(_.delete(M),b.unregister(M))}function U(R){L(R.target)}function V(R){N(R.target)}function L(R){R.removeEventListener("dispose",U),P(R),H(R),R.isVideoTexture&&f.delete(R),R.isHTMLTexture&&m.delete(R)}function N(R){R.removeEventListener("dispose",V),P(R),W(R)}function B(){for(const R of _){const M=R.deref();M!==void 0&&(M.isRenderTarget===!0?N(M):L(M))}_.clear(),m.clear()}function H(R){const M=i.get(R);if(M.__webglInit===void 0)return;const $=R.source,ae=g.get($);if(ae){const se=ae[M.__cacheKey];se.usedTimes--,se.usedTimes===0&&j(R),Object.keys(ae).length===0&&g.delete($)}i.remove(R)}function j(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const $=R.source,ae=g.get($);delete ae[M.__cacheKey],a.memory.textures--}function W(R){const M=i.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();const $=R.depthTexture;if($&&$.renderTarget===R&&L($),R.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(M.__webglFramebuffer[se]))for(let k=0;k<M.__webglFramebuffer[se].length;k++)t.deleteFramebuffer(M.__webglFramebuffer[se][k]);else t.deleteFramebuffer(M.__webglFramebuffer[se]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[se])}else{if(Array.isArray(M.__webglFramebuffer))for(let se=0;se<M.__webglFramebuffer.length;se++)t.deleteFramebuffer(M.__webglFramebuffer[se]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let se=0;se<M.__webglColorRenderbuffer.length;se++)M.__webglColorRenderbuffer[se]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[se]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const ae=R.textures;for(let se=0,k=ae.length;se<k;se++){const le=i.get(ae[se]);le.__webglTexture&&(t.deleteTexture(le.__webglTexture),a.memory.textures--),i.remove(ae[se])}i.remove(R)}let z=0;function G(){z=0}function J(){return z}function ue(R){z=R}function Ae(){const R=z;return R>=r.maxTextures&&Ve("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),z+=1,R}function X(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function oe(R,M){const $=i.get(R);if(R.isVideoTexture&&Tt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&$.__version!==R.version){const ae=R.image;if(ae===null)Ve("WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)Ve("WebGLRenderer: Texture marked for update but image is incomplete");else{vt($,R,M);return}}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,$.__webglTexture,t.TEXTURE0+M)}function me(R,M){const $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){vt($,R,M);return}else R.isExternalTexture&&($.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,$.__webglTexture,t.TEXTURE0+M)}function Ne(R,M){const $=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&$.__version!==R.version){vt($,R,M);return}n.bindTexture(t.TEXTURE_3D,$.__webglTexture,t.TEXTURE0+M)}function ye(R,M){const $=i.get(R);if(R.version>0&&$.__version!==R.version){Rt($,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture,t.TEXTURE0+M)}const je={[gf]:t.REPEAT,[Ui]:t.CLAMP_TO_EDGE,[xf]:t.MIRRORED_REPEAT},Be={[nn]:t.NEAREST,[j1]:t.NEAREST_MIPMAP_NEAREST,[Ko]:t.NEAREST_MIPMAP_LINEAR,[En]:t.LINEAR,[Ou]:t.LINEAR_MIPMAP_NEAREST,[cr]:t.LINEAR_MIPMAP_LINEAR},Ee={[W1]:t.NEVER,[cy]:t.ALWAYS,[X1]:t.LESS,[oy]:t.LEQUAL,[$1]:t.EQUAL,[ly]:t.GEQUAL,[q1]:t.GREATER,[Y1]:t.NOTEQUAL};function Ge(R,M){if(M.type===gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===En||M.magFilter===Ou||M.magFilter===Ko||M.magFilter===cr||M.minFilter===En||M.minFilter===Ou||M.minFilter===Ko||M.minFilter===cr)&&Ve("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,je[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,je[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,je[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,Be[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,Be[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,Ee[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===nn||M.minFilter!==Ko&&M.minFilter!==cr||M.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Je(R,M){let $=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",U),O(M));const ae=M.source;let se=g.get(ae);se===void 0&&(se={},g.set(ae,se));const k=X(M);if(k!==R.__cacheKey){se[k]===void 0&&(se[k]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,$=!0),se[k].usedTimes++;const le=se[R.__cacheKey];le!==void 0&&(se[R.__cacheKey].usedTimes--,le.usedTimes===0&&j(M)),R.__cacheKey=k,R.__webglTexture=se[k].texture}return $}function We(R,M,$){return Math.floor(Math.floor(R/$)/M)}function xt(R,M,$,ae){const k=R.updateRanges;if(k.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,$,ae,M.data);else{k.sort((I,re)=>I.start-re.start);let le=0;for(let I=1;I<k.length;I++){const re=k[le],te=k[I],ve=re.start+re.count,fe=We(te.start,M.width,4),ge=We(re.start,M.width,4);te.start<=ve+1&&fe===ge&&We(te.start+te.count-1,M.width,4)===fe?re.count=Math.max(re.count,te.start+te.count-re.start):(++le,k[le]=te)}k.length=le+1;const Q=n.getParameter(t.UNPACK_ROW_LENGTH),ee=n.getParameter(t.UNPACK_SKIP_PIXELS),xe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let I=0,re=k.length;I<re;I++){const te=k[I],ve=Math.floor(te.start/4),fe=Math.ceil(te.count/4),ge=ve%M.width,ke=Math.floor(ve/M.width),Ze=fe,de=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(t.UNPACK_SKIP_ROWS,ke),n.texSubImage2D(t.TEXTURE_2D,0,ge,ke,Ze,de,$,ae,M.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Q),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ee),n.pixelStorei(t.UNPACK_SKIP_ROWS,xe)}}function vt(R,M,$){let ae=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ae=t.TEXTURE_3D);const se=Je(R,M),k=M.source;n.bindTexture(ae,R.__webglTexture,t.TEXTURE0+$);const le=i.get(k);if(k.version!==le.__version||se===!0){if(n.activeTexture(t.TEXTURE0+$),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){const de=rt.getPrimaries(rt.workingColorSpace),ze=M.colorSpace===ar?null:rt.getPrimaries(M.colorSpace),Ye=M.colorSpace===ar||de===ze?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye)}n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment);let ee=p(M.image,!1,r.maxTextureSize);ee=Oe(M,ee);const xe=s.convert(M.format,M.colorSpace),I=s.convert(M.type);let re=T(M.internalFormat,xe,I,M.normalized,M.colorSpace,M.isVideoTexture);Ge(ae,M);let te;const ve=M.mipmaps,fe=M.isVideoTexture!==!0,ge=le.__version===void 0||se===!0,ke=k.dataReady,Ze=w(M,ee);if(M.isDepthTexture)re=v(M.format===ur,M.type),ge&&(fe?n.texStorage2D(t.TEXTURE_2D,1,re,ee.width,ee.height):n.texImage2D(t.TEXTURE_2D,0,re,ee.width,ee.height,0,xe,I,null));else if(M.isDataTexture)if(ve.length>0){fe&&ge&&n.texStorage2D(t.TEXTURE_2D,Ze,re,ve[0].width,ve[0].height);for(let de=0,ze=ve.length;de<ze;de++)te=ve[de],fe?ke&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,te.width,te.height,xe,I,te.data):n.texImage2D(t.TEXTURE_2D,de,re,te.width,te.height,0,xe,I,te.data);M.generateMipmaps=!1}else fe?(ge&&n.texStorage2D(t.TEXTURE_2D,Ze,re,ee.width,ee.height),ke&&xt(M,ee,xe,I)):n.texImage2D(t.TEXTURE_2D,0,re,ee.width,ee.height,0,xe,I,ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){fe&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ze,re,ve[0].width,ve[0].height,ee.depth);for(let de=0,ze=ve.length;de<ze;de++)if(te=ve[de],M.format!==xi)if(xe!==null)if(fe){if(ke)if(M.layerUpdates.size>0){const Ye=q0(te.width,te.height,M.format,M.type);for(const we of M.layerUpdates){const pt=te.data.subarray(we*Ye/te.data.BYTES_PER_ELEMENT,(we+1)*Ye/te.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,we,te.width,te.height,1,xe,pt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,te.width,te.height,ee.depth,xe,te.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,de,re,te.width,te.height,ee.depth,0,te.data,0,0);else Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else fe?ke&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,de,0,0,0,te.width,te.height,ee.depth,xe,I,te.data):n.texImage3D(t.TEXTURE_2D_ARRAY,de,re,te.width,te.height,ee.depth,0,xe,I,te.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{fe&&ge&&n.texStorage2D(t.TEXTURE_2D,Ze,re,ve[0].width,ve[0].height);for(let de=0,ze=ve.length;de<ze;de++)te=ve[de],M.format!==xi?xe!==null?fe?ke&&n.compressedTexSubImage2D(t.TEXTURE_2D,de,0,0,te.width,te.height,xe,te.data):n.compressedTexImage2D(t.TEXTURE_2D,de,re,te.width,te.height,0,te.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):fe?ke&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,te.width,te.height,xe,I,te.data):n.texImage2D(t.TEXTURE_2D,de,re,te.width,te.height,0,xe,I,te.data)}else if(M.isDataArrayTexture)if(fe){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Ze,re,ee.width,ee.height,ee.depth),ke)if(M.layerUpdates.size>0){const de=q0(ee.width,ee.height,M.format,M.type);for(const ze of M.layerUpdates){const Ye=ee.data.subarray(ze*de/ee.data.BYTES_PER_ELEMENT,(ze+1)*de/ee.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ze,ee.width,ee.height,1,xe,I,Ye)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,xe,I,ee.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,re,ee.width,ee.height,ee.depth,0,xe,I,ee.data);else if(M.isData3DTexture)fe?(ge&&n.texStorage3D(t.TEXTURE_3D,Ze,re,ee.width,ee.height,ee.depth),ke&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,xe,I,ee.data)):n.texImage3D(t.TEXTURE_3D,0,re,ee.width,ee.height,ee.depth,0,xe,I,ee.data);else if(M.isFramebufferTexture){if(ge)if(fe)n.texStorage2D(t.TEXTURE_2D,Ze,re,ee.width,ee.height);else{let de=ee.width,ze=ee.height;for(let Ye=0;Ye<Ze;Ye++)n.texImage2D(t.TEXTURE_2D,Ye,re,de,ze,0,xe,I,null),de>>=1,ze>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in t){const de=t.canvas;if(de.hasAttribute("layoutsubtree")||de.setAttribute("layoutsubtree","true"),ee.parentNode!==de){de.appendChild(ee),m.add(M),de.onpaint=ze=>{const Ye=ze.changedElements;for(const we of m)Ye.includes(we.image)&&(we.needsUpdate=!0)},de.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ee);else{const Ye=t.RGBA,we=t.RGBA,pt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ye,we,pt,ee)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ve.length>0){if(fe&&ge){const de=He(ve[0]);n.texStorage2D(t.TEXTURE_2D,Ze,re,de.width,de.height)}for(let de=0,ze=ve.length;de<ze;de++)te=ve[de],fe?ke&&n.texSubImage2D(t.TEXTURE_2D,de,0,0,xe,I,te):n.texImage2D(t.TEXTURE_2D,de,re,xe,I,te);M.generateMipmaps=!1}else if(fe){if(ge){const de=He(ee);n.texStorage2D(t.TEXTURE_2D,Ze,re,de.width,de.height)}ke&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,xe,I,ee)}else n.texImage2D(t.TEXTURE_2D,0,re,xe,I,ee);y(M)&&M.mipmapsAutoUpdate===!0&&S(ae),le.__version=k.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Rt(R,M,$){if(M.image.length!==6)return;const ae=Je(R,M),se=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+$);const k=i.get(se);if(se.version!==k.__version||ae===!0){n.activeTexture(t.TEXTURE0+$);const le=rt.getPrimaries(rt.workingColorSpace),Q=M.colorSpace===ar?null:rt.getPrimaries(M.colorSpace),ee=M.colorSpace===ar||le===Q?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);const xe=M.isCompressedTexture||M.image[0].isCompressedTexture,I=M.image[0]&&M.image[0].isDataTexture,re=[];for(let we=0;we<6;we++)!xe&&!I?re[we]=p(M.image[we],!0,r.maxCubemapSize):re[we]=I?M.image[we].image:M.image[we],re[we]=Oe(M,re[we]);const te=re[0],ve=s.convert(M.format,M.colorSpace),fe=s.convert(M.type);let ge=T(M.internalFormat,ve,fe,M.normalized,M.colorSpace);const ke=M.isVideoTexture!==!0,Ze=k.__version===void 0||ae===!0,de=se.dataReady;let ze=w(M,te);Ge(t.TEXTURE_CUBE_MAP,M);let Ye;if(M.isDepthTexture){if(ge=v(M.format===ur,M.type),Ze)if(ke)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ge,te.width,te.height);else for(let we=0;we<6;we++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ge,te.width,te.height,0,ve,fe,null)}else if(xe){ke&&Ze&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,ge,te.width,te.height);for(let we=0;we<6;we++){Ye=re[we].mipmaps;for(let pt=0;pt<Ye.length;pt++){const qt=Ye[pt];M.format!==xi?ve!==null?ke?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt,0,0,qt.width,qt.height,ve,qt.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt,ge,qt.width,qt.height,0,qt.data):Ve("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt,0,0,qt.width,qt.height,ve,fe,qt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt,ge,qt.width,qt.height,0,ve,fe,qt.data)}}}else{if(Ye=M.mipmaps,ke&&Ze){Ye.length>0&&ze++;const we=He(re[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ze,ge,we.width,we.height)}for(let we=0;we<6;we++)if(I){ke?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,re[we].width,re[we].height,ve,fe,re[we].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ge,re[we].width,re[we].height,0,ve,fe,re[we].data);for(let pt=0;pt<Ye.length;pt++){const Xi=Ye[pt].image[we].image;ke?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt+1,0,0,Xi.width,Xi.height,ve,fe,Xi.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt+1,ge,Xi.width,Xi.height,0,ve,fe,Xi.data)}}else{ke?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,ve,fe,re[we]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,ge,ve,fe,re[we]);for(let pt=0;pt<Ye.length;pt++){const qt=Ye[pt];ke?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt+1,0,0,ve,fe,qt.image[we]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+we,pt+1,ge,ve,fe,qt.image[we])}}}y(M)&&M.mipmapsAutoUpdate===!0&&S(t.TEXTURE_CUBE_MAP),k.__version=se.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Ke(R,M,$,ae,se,k){const le=s.convert($.format,$.colorSpace),Q=s.convert($.type),ee=T($.internalFormat,le,Q,$.normalized,$.colorSpace),xe=i.get(M),I=i.get($);if(I.__renderTarget=M,!xe.__hasExternalTextures){const re=Math.max(1,M.width>>k),te=Math.max(1,M.height>>k);se===t.TEXTURE_3D||se===t.TEXTURE_2D_ARRAY?n.texImage3D(se,k,ee,re,te,M.depth,0,le,Q,null):n.texImage2D(se,k,ee,re,te,0,le,Q,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),pe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,se,I.__webglTexture,0,Fe(M)):(se===t.TEXTURE_2D||se>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&se<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,se,I.__webglTexture,k),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _t(R,M,$){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const ae=M.depthTexture,se=ae&&ae.isDepthTexture?ae.type:null,k=v(M.stencilBuffer,se),le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;pe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe(M),k,M.width,M.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe(M),k,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,k,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,R)}else{const ae=M.textures;for(let se=0;se<ae.length;se++){const k=ae[se],le=s.convert(k.format,k.colorSpace),Q=s.convert(k.type),ee=T(k.internalFormat,le,Q,k.normalized,k.colorSpace);pe(M)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Fe(M),ee,M.width,M.height):$?t.renderbufferStorageMultisample(t.RENDERBUFFER,Fe(M),ee,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ee,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function ot(R,M,$){const ae=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const se=i.get(M.depthTexture);se.__renderTarget=M;const k=ae?M.depthTexture.image[0]:M.depthTexture.image;(!se.__webglTexture||k.width!==M.width||k.height!==M.height)&&(k.width=M.width,k.height=M.height,M.depthTexture.needsUpdate=!0),ae?ye(M.depthTexture,0):oe(M.depthTexture,0);const le=se.__webglTexture,Q=Fe(M),ee=ae?t.TEXTURE_CUBE_MAP_POSITIVE_X+$:t.TEXTURE_2D,xe=M.depthTexture.format===ur?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Mr)pe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,xe,ee,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,xe,ee,le,0);else if(M.depthTexture.format===ur)pe(M)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,xe,ee,le,0,Q):t.framebufferTexture2D(t.FRAMEBUFFER,xe,ee,le,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ut(R){const M=i.get(R),$=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const ae=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ae){const se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ae.removeEventListener("dispose",se)};ae.addEventListener("dispose",se),M.__depthDisposeCallback=se}M.__boundDepthTexture=ae}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if($)for(let ae=0;ae<6;ae++)ot(M.__webglFramebuffer[ae],R,ae);else R.texture.mipmaps.length>0?ot(M.__webglFramebuffer[0],R,0):ot(M.__webglFramebuffer,R,0);else if($){M.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[ae]),M.__webglDepthbuffer[ae]===void 0)M.__webglDepthbuffer[ae]=t.createRenderbuffer(),_t(M.__webglDepthbuffer[ae],R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=M.__webglDepthbuffer[ae];t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,k)}}else if(R.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),_t(M.__webglDepthbuffer,R,!1);else{const se=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,k=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,k),t.framebufferRenderbuffer(t.FRAMEBUFFER,se,t.RENDERBUFFER,k)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ie(R,M,$){const ae=i.get(R);M!==void 0&&Ke(ae.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),$!==void 0&&Ut(R)}function Pe(R){const M=R.texture,$=i.get(R),ae=i.get(M);R.addEventListener("dispose",V),O(R);const se=R.textures,k=R.isWebGLCubeRenderTarget===!0,le=se.length>1;if(le||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=M.version,a.memory.textures++),k){$.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps.length>0){$.__webglFramebuffer[Q]=[];for(let ee=0;ee<M.mipmaps.length;ee++)$.__webglFramebuffer[Q][ee]=t.createFramebuffer()}else $.__webglFramebuffer[Q]=t.createFramebuffer()}else{if(M.mipmaps.length>0){$.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)$.__webglFramebuffer[Q]=t.createFramebuffer()}else $.__webglFramebuffer=t.createFramebuffer();if(le)for(let Q=0,ee=se.length;Q<ee;Q++){const xe=i.get(se[Q]);xe.__webglTexture===void 0&&(xe.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&pe(R)===!1){$.__webglMultisampledFramebuffer=t.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let Q=0;Q<se.length;Q++){const ee=se[Q];$.__webglColorRenderbuffer[Q]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,$.__webglColorRenderbuffer[Q]);const xe=s.convert(ee.format,ee.colorSpace),I=s.convert(ee.type),re=T(ee.internalFormat,xe,I,ee.normalized,ee.colorSpace,R.isXRRenderTarget===!0),te=Fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,te,re,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Q,t.RENDERBUFFER,$.__webglColorRenderbuffer[Q])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&($.__webglDepthRenderbuffer=t.createRenderbuffer(),_t($.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(k){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),Ge(t.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Ke($.__webglFramebuffer[Q][ee],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ee);else Ke($.__webglFramebuffer[Q],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);y(M)?S(t.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),n.unbindTexture()}else if(le){for(let Q=0,ee=se.length;Q<ee;Q++){const xe=se[Q],I=i.get(xe);let re=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(re,I.__webglTexture),Ge(re,xe),Ke($.__webglFramebuffer,R,xe,t.COLOR_ATTACHMENT0+Q,re,0),y(xe)&&S(re)}n.unbindTexture()}else{let Q=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Q,ae.__webglTexture),Ge(Q,M),M.mipmaps.length>0)for(let ee=0;ee<M.mipmaps.length;ee++)Ke($.__webglFramebuffer[ee],R,M,t.COLOR_ATTACHMENT0,Q,ee);else Ke($.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,Q,0);y(M)?S(Q):M.mipmaps.length>0&&t.texParameteri(Q,t.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),n.unbindTexture()}R.depthBuffer&&Ut(R)}function C(R){const M=R.textures;for(let $=0,ae=M.length;$<ae;$++){const se=M[$];if(y(se)&&se.mipmapsAutoUpdate===!0){const k=A(R),le=i.get(se).__webglTexture;n.bindTexture(k,le),S(k),n.unbindTexture()}}}const be=[];function Re(R){if(R.samples>0){if(pe(R)===!1){const M=R.textures,$=R.width,ae=R.height;let se=t.COLOR_BUFFER_BIT;const k=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(R),Q=M.length>1;if(Q)for(let xe=0;xe<M.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(se|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(se|=t.STENCIL_BUFFER_BIT)),Q){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[xe]);const I=i.get(M[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,I,0)}t.blitFramebuffer(0,0,$,ae,0,0,$,ae,se,t.NEAREST),c===!0&&(be.length=0,be.push(t.COLOR_ATTACHMENT0+xe),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&be.push(k),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,be))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Q)for(let xe=0;xe<M.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,le.__webglColorRenderbuffer[xe]);const I=i.get(M[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,I,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Fe(R){return Math.min(r.maxSamples,R.samples)}function pe(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Tt(R){const M=a.render.frame;f.get(R)!==M&&(f.set(R,M),R.update())}function Oe(R,M){const $=R.colorSpace,ae=R.format,se=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||$!==_c&&$!==ar&&(rt.getTransfer($)===mt?(ae!==xi||se!==In)&&Ve("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",$)),M}function He(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=Ae,this.resetTextureUnits=G,this.getTextureUnits=J,this.setTextureUnits=ue,this.setTexture2D=oe,this.setTexture2DArray=me,this.setTexture3D=Ne,this.setTextureCube=ye,this.rebindTextures=ie,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=C,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Ke,this.useMultisampledRTT=pe,this.dispose=B}function k2(t,e){function n(i,r=ar){let s;const a=rt.getTransfer(r);if(i===In)return t.UNSIGNED_BYTE;if(i===sp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===ap)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ny)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===iy)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ey)return t.BYTE;if(i===ty)return t.SHORT;if(i===co)return t.UNSIGNED_SHORT;if(i===rp)return t.INT;if(i===bi)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===wi)return t.HALF_FLOAT;if(i===ry)return t.ALPHA;if(i===sy)return t.RGB;if(i===xi)return t.RGBA;if(i===Mr)return t.DEPTH_COMPONENT;if(i===ur)return t.DEPTH_STENCIL;if(i===ay)return t.RED;if(i===op)return t.RED_INTEGER;if(i===ts)return t.RG;if(i===lp)return t.RG_INTEGER;if(i===cp)return t.RGBA_INTEGER;if(i===Bl||i===zl||i===jl||i===Hl)if(a===mt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Bl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Bl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===zl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Hl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===vf||i===_f||i===yf||i===Sf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===vf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===_f)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===yf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bf||i===wf||i===Mf||i===Ef||i===Tf||i===xc||i===Af)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bf||i===wf)return a===mt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Mf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Ef)return s.COMPRESSED_R11_EAC;if(i===Tf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===xc)return s.COMPRESSED_RG11_EAC;if(i===Af)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Nf||i===Rf||i===Cf||i===Pf||i===Df||i===Lf||i===If||i===Uf||i===Of||i===Ff||i===kf||i===Bf||i===zf||i===jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Cf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Df)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Lf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===If)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Of)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ff)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===kf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jf)return a===mt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Hf||i===Vf||i===Gf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Hf)return a===mt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wf||i===Xf||i===vc||i===$f)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Wf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Xf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$f)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const B2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new wy(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new ns({vertexShader:B2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Si(new $c(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H2 extends ss{constructor(e,n){super();const i=this;let r=null,s=1,a=null,l="local-floor",c=1,u=null,f=null,m=null,h=null,g=null,_=null;const b=typeof XRWebGLBinding<"u",x=new j2,d={},p=n.getContextAttributes();let y=null,S=null;const A=[],T=[],v=new at;let w=null,O=null;const P=new Gn;P.viewport=new Dt;const U=new Gn;U.viewport=new Dt;const V=[P,U],L=new JT;let N=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let oe=A[X];return oe===void 0&&(oe=new Vu,A[X]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(X){let oe=A[X];return oe===void 0&&(oe=new Vu,A[X]=oe),oe.getGripSpace()},this.getHand=function(X){let oe=A[X];return oe===void 0&&(oe=new Vu,A[X]=oe),oe.getHandSpace()};function H(X){const oe=T.indexOf(X.inputSource);if(oe===-1)return;const me=A[oe];me!==void 0&&(me.update(X.inputSource,X.frame,u||a),me.dispatchEvent({type:X.type,data:X.inputSource}))}function j(){r.removeEventListener("select",H),r.removeEventListener("selectstart",H),r.removeEventListener("selectend",H),r.removeEventListener("squeeze",H),r.removeEventListener("squeezestart",H),r.removeEventListener("squeezeend",H),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",W);for(let X=0;X<A.length;X++){const oe=T[X];oe!==null&&(T[X]=null,A[X].disconnect(oe))}N=null,B=null,x.reset();for(const X in d)delete d[X];if(e.setRenderTarget(y),g=null,h=null,m=null,r=null,S=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(v.width,v.height,!1),O!==null){const X=O.camera;X.fov=O.fov,X.zoom=O.zoom,X.updateProjectionMatrix(),O=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&Ve("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,i.isPresenting===!0&&Ve("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(X){u=X},this.getBaseLayer=function(){return h!==null?h:g},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(r,n)),m},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",H),r.addEventListener("selectstart",H),r.addEventListener("selectend",H),r.addEventListener("squeeze",H),r.addEventListener("squeezestart",H),r.addEventListener("squeezeend",H),r.addEventListener("end",j),r.addEventListener("inputsourceschange",W),p.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(v),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ne=null,ye=null;p.depth&&(ye=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=p.stencil?ur:Mr,Ne=p.stencil?Ys:bi);const je={colorFormat:n.RGBA8,depthFormat:ye,scaleFactor:s};m=this.getBinding(),h=m.createProjectionLayer(je),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new yi(h.textureWidth,h.textureHeight,{format:xi,type:In,depthTexture:new Ks(h.textureWidth,h.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,me),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new yi(g.framebufferWidth,g.framebufferHeight,{format:xi,type:In,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(l),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(X){for(let oe=0;oe<X.removed.length;oe++){const me=X.removed[oe],Ne=T.indexOf(me);Ne>=0&&(T[Ne]=null,A[Ne].disconnect(me))}for(let oe=0;oe<X.added.length;oe++){const me=X.added[oe];let Ne=T.indexOf(me);if(Ne===-1){for(let je=0;je<A.length;je++)if(je>=T.length){T.push(me),Ne=je;break}else if(T[je]===null){T[je]=me,Ne=je;break}if(Ne===-1)break}const ye=A[Ne];ye&&ye.connect(me)}}function z(X,oe){oe===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(oe.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let oe=X.near,me=X.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(me=x.depthFar)),L.near=U.near=P.near=oe,L.far=U.far=P.far=me,(N!==L.near||B!==L.far)&&(r.updateRenderState({depthNear:L.near,depthFar:L.far}),N=L.near,B=L.far),L.layers.mask=X.layers.mask|6,P.layers.mask=L.layers.mask&-5,U.layers.mask=L.layers.mask&-3;const Ne=X.parent,ye=L.cameras;z(L,Ne);for(let je=0;je<ye.length;je++)z(ye[je],Ne);L.projectionMatrix.copy(P.projectionMatrix),L.projectionMatrixInverse.copy(P.projectionMatrixInverse),O===null&&X.isPerspectiveCamera&&(O={camera:X,fov:X.fov,zoom:X.zoom}),G(X,L,Ne)};function G(X,oe,me){me===null?X.matrix.copy(oe.matrixWorld):(X.matrix.copy(me.matrixWorld),X.matrix.invert(),X.matrix.multiply(oe.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(oe.projectionMatrix),X.projectionMatrixInverse.copy(oe.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=fo*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(h===null&&g===null))return c},this.setFoveation=function(X){c=X,h!==null&&(h.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(L)},this.getCameraTexture=function(X){return d[X]};let J=null;function ue(X,oe){if(f=oe.getViewerPose(u||a),_=oe,f!==null){const me=f.views;g!==null&&(e.setRenderTargetFramebuffer(S,g.framebuffer),e.setRenderTarget(S));let Ne=!1;me.length!==L.cameras.length&&(L.cameras.length=0,Ne=!0);for(let Ee=0;Ee<me.length;Ee++){const Ge=me[Ee];let Je=null;if(g!==null)Je=g.getViewport(Ge);else{const xt=m.getViewSubImage(h,Ge);Je=xt.viewport,Ee===0&&(e.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),e.setRenderTarget(S))}let We=V[Ee];We===void 0&&(We=new Gn,We.layers.enable(Ee),We.viewport=new Dt,V[Ee]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Je.x,Je.y,Je.width,Je.height),Ee===0&&(L.matrix.copy(We.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ne===!0&&L.cameras.push(We)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&b){m=i.getBinding();const Ee=m.getDepthInformation(me[0]);Ee&&Ee.isValid&&Ee.texture&&x.init(Ee,r.renderState)}if(ye&&ye.includes("camera-access")&&b){e.state.unbindTexture(),m=i.getBinding();for(let Ee=0;Ee<me.length;Ee++){const Ge=me[Ee].camera;if(Ge){let Je=d[Ge];Je||(Je=new wy,d[Ge]=Je);const We=m.getCameraImage(Ge);Je.sourceTexture=We}}}}for(let me=0;me<A.length;me++){const Ne=T[me],ye=A[me];Ne!==null&&ye!==void 0&&ye.update(Ne,oe,u||a)}J&&J(X,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Ae=new Ny;Ae.setAnimationLoop(ue),this.setAnimationLoop=function(X){J=X},this.dispose=function(){}}}const V2=new Nt,ky=new Xe;ky.set(-1,0,0,0,1,0,0,0,1);function G2(t,e){function n(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function i(x,d){d.color.getRGB(x.fogColor.value,My(t)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function r(x,d,p,y,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?s(x,d):d.isMeshLambertMaterial?(s(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(s(x,d),m(x,d)):d.isMeshPhongMaterial?(s(x,d),f(x,d),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(s(x,d),h(x,d),d.isMeshPhysicalMaterial&&g(x,d,S)):d.isMeshMatcapMaterial?(s(x,d),_(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),b(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(a(x,d),d.isLineDashedMaterial&&l(x,d)):d.isPointsMaterial?c(x,d,p,y):d.isSpriteMaterial?u(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,n(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===Cn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,n(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===Cn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,n(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,n(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);const p=e.get(d),y=p.envMap,S=p.envMapRotation;y&&(x.envMap.value=y,x.envMapRotation.value.setFromMatrix4(V2.makeRotationFromEuler(S)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(ky),x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,x.aoMapTransform))}function a(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform))}function l(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function c(x,d,p,y){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*p,x.scale.value=y*.5,d.map&&(x.map.value=d.map,n(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function u(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,n(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,n(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function f(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function m(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function h(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function g(x,d,p){x.ior.value=d.ior,d.diffuseRoughness>0&&(x.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=d.diffuseRoughnessMap,n(d.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Cn&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.retroreflectivity>0&&(x.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=p.texture,x.transmissionSamplerSize.value.set(p.width,p.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,x.specularIntensityMapTransform))}function _(x,d){d.matcap&&(x.matcap.value=d.matcap)}function b(x,d){const p=e.get(d).light;x.referencePosition.value.setFromMatrixPosition(p.matrixWorld),x.nearDistance.value=p.shadow.camera.near,x.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function W2(t,e,n,i){let r={},s={};function a(p,y){const S=y.program;i.uniformBlockBinding(p,S,r[p.id])}function l(p,y){let S=r[p.id];S===void 0&&(_(p),S=c(p),r[p.id]=S,p.addEventListener("dispose",x));const A=y.program;i.updateUBOMapping(p,A);const T=e.render.frame;s[p.id]!==T&&(u(p),s[p.id]=T)}function c(p){const y=t.createBuffer(),S=p.__size,A=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,S,A),t.bindBuffer(t.UNIFORM_BUFFER,null),y}function u(p){const y=r[p.id],S=p.uniforms,A=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,y);for(let T=0,v=S.length;T<v;T++){const w=S[T];if(Array.isArray(w))for(let O=0,P=w.length;O<P;O++)f(w[O],T,O,A);else f(w,T,0,A)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function f(p,y,S,A){if(h(p,y,S,A)===!0){const T=p.__offset,v=p.value;if(Array.isArray(v)){let w=0;for(let O=0;O<v.length;O++){const P=v[O],U=b(P,!0);m(P,p.__data,w),w+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else m(v,p.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,T,p.__data)}}function m(p,y,S){typeof p=="number"||typeof p=="boolean"?y[S]=p:p.isMatrix3?(y[S]=p.elements[0],y[S+1]=p.elements[1],y[S+2]=p.elements[2],y[S+3]=0,y[S+4]=p.elements[3],y[S+5]=p.elements[4],y[S+6]=p.elements[5],y[S+7]=0,y[S+8]=p.elements[6],y[S+9]=p.elements[7],y[S+10]=p.elements[8],y[S+11]=0):ArrayBuffer.isView(p)?y.set(p.subarray(0,y.length-S),S):p.toArray(y,S)}function h(p,y,S,A){const T=p.value,v=y+"_"+S;if(Array.isArray(T)){A[v]===void 0&&(A[v]=[]);const w=A[v];let O=!1;for(let P=0;P<T.length;P++)g(T[P],w,P)===!0&&(O=!0);return O}return g(T,A,v)}function g(p,y,S){if(y[S]===void 0)return typeof p=="number"||typeof p=="boolean"?y[S]=p:ArrayBuffer.isView(p)?y[S]=p.slice():y[S]=p.clone(),!0;{const A=y[S];if(typeof p=="number"||typeof p=="boolean"){if(A!==p)return y[S]=p,!0}else{if(ArrayBuffer.isView(p))return!0;if(A.equals(p)===!1)return A.copy(p),!0}}return!1}function _(p){const y=p.uniforms;let S=0;const A=16;for(let v=0,w=y.length;v<w;v++){const O=Array.isArray(y[v])?y[v]:[y[v]];for(let P=0,U=O.length;P<U;P++){const V=O[P],L=Array.isArray(V.value)?V.value:[V.value],N=Array.isArray(y[v])||Array.isArray(V.value);let B=S;for(let j=0,W=L.length;j<W;j++){const z=L[j],G=b(z,N),J=S%A,ue=J%G.boundary,Ae=J+ue;S+=ue,Ae!==0&&A-Ae<G.storage&&(S+=A-Ae),j===0&&(B=S),S+=G.storage}const H=V.type==="int"?Int32Array:V.type==="uint"?Uint32Array:Float32Array;V.__data=new H((S-B)/Float32Array.BYTES_PER_ELEMENT),V.__offset=B}}const T=S%A;return T>0&&(S+=A-T),p.__size=S,p.__cache={},this}function b(p,y){const S={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(S.boundary=4,S.storage=4):p.isVector2?(S.boundary=8,S.storage=8):p.isVector3||p.isColor?(S.boundary=16,S.storage=12):p.isVector4?(S.boundary=16,S.storage=16):p.isMatrix3?(S.boundary=16,S.storage=48):p.isMatrix4?(S.boundary=16,S.storage=64):p.isTexture?Ve("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(p)?(S.boundary=16,S.storage=p.byteLength):Ve("WebGLRenderer: Unsupported uniform value type.",p),y===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function x(p){const y=p.target;y.removeEventListener("dispose",x),t.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function d(){for(const p in r)t.deleteBuffer(r[p]);r={},s={}}return{bind:a,update:l,dispose:d}}const X2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let fi=null;function $2(){return fi===null&&(fi=new BT(X2,16,16,ts,wi),fi.name="DFG_LUT",fi.minFilter=En,fi.magFilter=En,fi.wrapS=Ui,fi.wrapT=Ui,fi.generateMipmaps=!1,fi.needsUpdate=!0),fi}class q2{constructor(e={}){const{canvas:n=Q1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:h=!1,outputBufferType:g=In}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const b=g,x=new Set([cp,lp,op]),d=new Set([In,bi,co,Ys,sp,ap]),p=new Uint32Array(4),y=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]};let A=null,T=null;const v=[],w=[];let O=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let U=!1,V=null,L=null,N=null,B=null;this._outputColorSpace=jn;let H=0,j=0,W=null,z=-1,G=null;const J=new Dt,ue=new Dt;let Ae=null;const X=new st(0);let oe=0,me=n.width,Ne=n.height,ye=1,je=null,Be=null;const Ee=new Dt(0,0,me,Ne),Ge=new Dt(0,0,me,Ne);let Je=!1;const We=new ho,xt=new pp;let vt=!1,Rt=!1;const Ke=new Nt,_t=new K,ot=new Dt,Ut={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Pe(){return W===null?ye:1}let C=i;function be(E,F){return n.getContext(E,F)}let Re,Fe,pe,Tt,Oe,He,R,M,$,ae,se,k,le,Q,ee,xe,I,re,te,ve,fe,ge,ke;try{const E={alpha:!0,depth:r,stencil:s,antialias:l,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:m};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${np}`),n.addEventListener("webglcontextlost",ze,!1),n.addEventListener("webglcontextrestored",Ye,!1),n.addEventListener("webglcontextcreationerror",we,!1),C===null){const F="webgl2";if(C=be(F,E),C===null)throw be(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ze()}catch(E){throw n.removeEventListener("webglcontextlost",ze,!1),n.removeEventListener("webglcontextrestored",Ye,!1),n.removeEventListener("webglcontextcreationerror",we,!1),ft("WebGLRenderer: "+E.message),E}function Ze(){Re=new ZR(C),Re.init(),fe=new k2(C,Re),Fe=new zR(C,Re,e,fe),pe=new O2(C,Re),Fe.reversedDepthBuffer&&h&&pe.buffers.depth.setReversed(!0),L=C.createFramebuffer(),N=C.createFramebuffer(),B=C.createFramebuffer(),Tt=new eC(C),Oe=new b2,He=new F2(C,Re,pe,Oe,Fe,fe,Tt),R=new KR(P),M=new nA(C),ge=new kR(C,M),$=new QR(C,M,Tt,ge),ae=new nC(C,$,M,ge,Tt),re=new tC(C,Fe,He),ee=new jR(Oe),se=new S2(P,R,Re,Fe,ge,ee),k=new G2(P,Oe),le=new M2,Q=new C2(Re),I=new FR(P,R,pe,ae,_,c),xe=new U2(P,ae,Fe),ke=new W2(C,Tt,Fe,pe),te=new BR(C,Re,Tt),ve=new JR(C,Re,Tt),Tt.programs=se.programs,P.capabilities=Fe,P.extensions=Re,P.properties=Oe,P.renderLists=le,P.shadowMap=xe,P.state=pe,P.info=Tt}b!==In&&(O=new rC(b,n.width,n.height,l,r,s));const de=new H2(P,C);this.xr=de,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=Re.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Re.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(E){E!==void 0&&(ye=E,this.setSize(me,Ne,!1))},this.getSize=function(E){return E.set(me,Ne)},this.setSize=function(E,F,Z=!0){if(de.isPresenting){Ve("WebGLRenderer: Can't change size while VR device is presenting.");return}me=E,Ne=F,n.width=Math.floor(E*ye),n.height=Math.floor(F*ye),Z===!0&&(n.style.width=E+"px",n.style.height=F+"px"),O!==null&&O.setSize(n.width,n.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(me*ye,Ne*ye).floor()},this.setDrawingBufferSize=function(E,F,Z){me=E,Ne=F,ye=Z,n.width=Math.floor(E*Z),n.height=Math.floor(F*Z),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(b===In){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Ve("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}O.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(J)},this.getViewport=function(E){return E.copy(Ee)},this.setViewport=function(E,F,Z,q){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,F,Z,q),pe.viewport(J.copy(Ee).multiplyScalar(Pe()).round())},this.getScissor=function(E){return E.copy(Ge)},this.setScissor=function(E,F,Z,q){E.isVector4?Ge.set(E.x,E.y,E.z,E.w):Ge.set(E,F,Z,q),pe.scissor(ue.copy(Ge).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(E){pe.setScissorTest(Je=E)},this.setOpaqueSort=function(E){je=E},this.setTransparentSort=function(E){Be=E},this.getClearColor=function(E){return E.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor(...arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,Z=!0){let q=0;if(E){let Y=!1;if(W!==null){const Se=W.texture.format;Y=x.has(Se)}if(Y){const Se=W.texture.type,De=d.has(Se),_e=I.getClearColor(),Te=I.getClearAlpha(),Ue=_e.r,$e=_e.g,tt=_e.b;De?(p[0]=Ue,p[1]=$e,p[2]=tt,p[3]=Te,C.clearBufferuiv(C.COLOR,0,p)):(y[0]=Ue,y[1]=$e,y[2]=tt,y[3]=Te,C.clearBufferiv(C.COLOR,0,y))}else q|=C.COLOR_BUFFER_BIT}F&&(q|=C.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(q|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&C.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),V=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ze,!1),n.removeEventListener("webglcontextrestored",Ye,!1),n.removeEventListener("webglcontextcreationerror",we,!1),I.dispose(),le.dispose(),Q.dispose(),He.dispose(),Oe.dispose(),R.dispose(),ae.dispose(),$.dispose(),ge.dispose(),ke.dispose(),se.dispose(),de.dispose(),de.removeEventListener("sessionstart",wp),de.removeEventListener("sessionend",Mp),Rr.stop()};function ze(E){E.preventDefault(),w0("WebGLRenderer: Context Lost."),U=!0}function Ye(){w0("WebGLRenderer: Context Restored."),U=!1;const E=Tt.autoReset,F=xe.enabled,Z=xe.autoUpdate,q=xe.needsUpdate,Y=xe.type;Ze(),Tt.autoReset=E,xe.enabled=F,xe.autoUpdate=Z,xe.needsUpdate=q,xe.type=Y}function we(E){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function pt(E){const F=E.target;F.removeEventListener("dispose",pt),qt(F)}function qt(E){Xi(E),Oe.remove(E)}function Xi(E){const F=Oe.get(E).programs;F!==void 0&&(F.forEach(function(Z){se.releaseProgram(Z)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,Z,q,Y,Se){F===null&&(F=Ut);const De=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,_e=jy(E,F,Z,q,Y);pe.setMaterial(q,De);let Te=Z.index,Ue=1;if(q.wireframe===!0){if(Te=$.getWireframeAttribute(Z),Te===void 0)return;Ue=2}const $e=Z.drawRange,tt=Z.attributes.position;let Le=$e.start*Ue,nt=($e.start+$e.count)*Ue;Se!==null&&(Le=Math.max(Le,Se.start*Ue),nt=Math.min(nt,(Se.start+Se.count)*Ue)),Te!==null?(Le=Math.max(Le,0),nt=Math.min(nt,Te.count)):tt!=null&&(Le=Math.max(Le,0),nt=Math.min(nt,tt.count));const Bt=nt-Le;if(Bt<0||Bt===1/0)return;ge.setup(Y,q,_e,Z,Te);let St,yt=te;if(Te!==null&&(St=M.get(Te),yt=ve,yt.setIndex(St)),Y.isMesh)q.wireframe===!0?(pe.setLineWidth(q.wireframeLinewidth*Pe()),yt.setMode(C.LINES)):yt.setMode(C.TRIANGLES);else if(Y.isLine){let on=q.linewidth;on===void 0&&(on=1),pe.setLineWidth(on*Pe()),Y.isLineSegments?yt.setMode(C.LINES):Y.isLineLoop?yt.setMode(C.LINE_LOOP):yt.setMode(C.LINE_STRIP)}else Y.isPoints?yt.setMode(C.POINTS):Y.isSprite&&yt.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Re.get("WEBGL_multi_draw"))yt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const on=Y._multiDrawStarts,Ie=Y._multiDrawCounts,mn=Y._multiDrawCount,dt=Te?M.get(Te).bytesPerElement:1,Cr=Oe.get(q).currentProgram.getUniforms();for(let ln=0;ln<mn;ln++)Cr.setValue(C,"_gl_DrawID",ln),yt.render(on[ln]/dt,Ie[ln])}else if(Y.isInstancedMesh)yt.renderInstances(Le,Bt,Y.count);else if(Z.isInstancedBufferGeometry){const on=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ie=Math.min(Z.instanceCount,on);yt.renderInstances(Le,Bt,Ie)}else yt.render(Le,Bt)};function bp(E,F,Z,q){V!==null&&E.isNodeMaterial&&V.setObject(q,E),vt===!0&&ee.setState(E,Z,!1),E.transparent===!0&&E.side===Di&&E.forceSinglePass===!1?(E.side=Cn,E.needsUpdate=!0,oa(E,F,q),E.side=es,E.needsUpdate=!0,oa(E,F,q),E.side=Di):oa(E,F,q)}this.compile=function(E,F,Z=null){Z===null&&(Z=E),V!==null&&V.renderStart(E,F,Z),T=Q.get(Z),T.init(F),w.push(T),Z.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),E!==Z&&E.traverseVisible(function(Y){Y.isLight&&Y.layers.test(F.layers)&&(T.pushLight(Y),Y.castShadow&&T.pushShadow(Y))}),T.setupLights(),V!==null&&V.updateLights(T.state.lightsArray),Rt=this.localClippingEnabled,vt=ee.init(this.clippingPlanes,Rt),vt===!0&&ee.setGlobalState(this.clippingPlanes,F),V!==null&&xe.render(T.state.shadowsArray,Z,F);const q=new Set;return E.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Se=Y.material;if(Se)if(Array.isArray(Se))for(let De=0;De<Se.length;De++){const _e=Se[De];bp(_e,Z,F,Y),q.add(_e)}else bp(Se,Z,F,Y),q.add(Se)}),T=w.pop(),V!==null&&V.renderEnd(),q},this.compileAsync=function(E,F,Z=null){const q=this.compile(E,F,Z);return new Promise(Y=>{function Se(){if(q.forEach(function(De){const Te=Oe.get(De).currentProgram;(Te===void 0||Te.isReady())&&q.delete(De)}),q.size===0){Y(E);return}setTimeout(Se,10)}Re.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Kc=null;function By(E){Kc&&Kc(E)}function wp(){Rr.stop()}function Mp(){Rr.start()}const Rr=new Ny;Rr.setAnimationLoop(By),typeof self<"u"&&Rr.setContext(self),this.setAnimationLoop=function(E){Kc=E,de.setAnimationLoop(E),E===null?Rr.stop():Rr.start()},de.addEventListener("sessionstart",wp),de.addEventListener("sessionend",Mp),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;V!==null&&V.renderStart(E,F);const Z=de.enabled===!0&&de.isPresenting===!0,q=O!==null&&(W===null||Z)&&O.begin(P,W);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(O===null||O.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(F),F=de.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,F,W),T=Q.get(E,w.length),T.init(F),T.state.textureUnits=He.getTextureUnits(),w.push(T),Ke.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?xt.setFromArrayCamera(F):We.setFromProjectionMatrix(Ke,si,F.reversedDepth),Rt=this.localClippingEnabled,vt=ee.init(this.clippingPlanes,Rt),A=le.get(E,v.length),A.init(),v.push(A),this.info.render.frame++,de.enabled===!0&&de.isPresenting===!0){const De=P.xr.getDepthSensingMesh();De!==null&&Zc(De,F,-1/0,P.sortObjects)}Zc(E,F,0,P.sortObjects),A.finish(),V!==null&&V.updateLights(T.state.lightsArray),P.sortObjects===!0&&A.sort(je,Be),ie=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,ie&&I.addToRenderList(A,E),this.info.autoReset===!0&&this.info.reset(),vt===!0&&ee.beginShadows();const Y=T.state.shadowsArray;if(xe.render(Y,E,F),vt===!0&&ee.endShadows(),(q&&O.hasRenderPass())===!1){const De=A.opaque,_e=A.transmissive;if(T.setupLights(),F.isArrayCamera){const Te=F.cameras;if(_e.length>0)for(let Ue=0,$e=Te.length;Ue<$e;Ue++){const tt=Te[Ue];Tp(De,_e,E,tt)}ie&&I.render(E);for(let Ue=0,$e=Te.length;Ue<$e;Ue++){const tt=Te[Ue];Ep(A,E,tt,tt.viewport)}}else _e.length>0&&Tp(De,_e,E,F),ie&&I.render(E),Ep(A,E,F)}W!==null&&j===0&&(He.updateMultisampleRenderTarget(W),He.updateRenderTargetMipmap(W)),q&&O.end(P),E.isScene===!0&&E.onAfterRender(P,E,F),ge.resetDefaultState(),z=-1,G=null,w.pop(),w.length>0?(T=w[w.length-1],He.setTextureUnits(T.state.textureUnits),vt===!0&&ee.setGlobalState(P.clippingPlanes,T.state.camera)):T=null,v.pop(),v.length>0?A=v[v.length-1]:A=null,V!==null&&V.renderEnd()};function Zc(E,F,Z,q){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){const De=F.isArrayCamera?xt:We;if(!E.frustumCulled||E.intersectsFrustum(De)){q&&ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ke);const _e=ae.update(E),Te=E.material;Te.visible&&A.push(E,_e,Te,Z,ot.z,null,F)}}else if(E.isMesh||E.isLine||E.isPoints){const De=F.isArrayCamera?xt:We;if(!E.frustumCulled||E.intersectsFrustum(De)){const _e=ae.update(E),Te=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ot.copy(E.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ot.copy(_e.boundingSphere.center)),ot.applyMatrix4(E.matrixWorld).applyMatrix4(Ke)),Array.isArray(Te)){const Ue=_e.groups;for(let $e=0,tt=Ue.length;$e<tt;$e++){const Le=Ue[$e],nt=Te[Le.materialIndex];nt&&nt.visible&&A.push(E,_e,nt,Z,ot.z,Le,F)}}else Te.visible&&A.push(E,_e,Te,Z,ot.z,null,F)}}}const Se=E.children;for(let De=0,_e=Se.length;De<_e;De++)Zc(Se[De],F,Z,q)}function Ep(E,F,Z,q){const{opaque:Y,transmissive:Se,transparent:De}=E;T.setupLightsView(Z),vt===!0&&ee.setGlobalState(P.clippingPlanes,Z),q&&pe.viewport(J.copy(q)),Y.length>0&&To(Y,F,Z),Se.length>0&&To(Se,F,Z),De.length>0&&To(De,F,Z),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Tp(E,F,Z,q){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[q.id]===void 0){const Le=Re.has("EXT_color_buffer_half_float")||Re.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[q.id]=new yi(1,1,{generateMipmaps:!0,type:Le?wi:In,minFilter:cr,samples:Math.max(4,Fe.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:rt.workingColorSpace})}const Se=T.state.transmissionRenderTarget[q.id],De=q.viewport||J;Se.setSize(De.z*P.transmissionResolutionScale,De.w*P.transmissionResolutionScale);const _e=P.getRenderTarget(),Te=P.getActiveCubeFace(),Ue=P.getActiveMipmapLevel();P.setRenderTarget(Se),P.getClearColor(X),oe=P.getClearAlpha(),oe<1&&P.setClearColor(16777215,.5),P.clear(),ie&&I.render(Z);const $e=P.toneMapping;P.toneMapping=Fi;const tt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),T.setupLightsView(q),vt===!0&&ee.setGlobalState(P.clippingPlanes,q),To(E,Z,q),He.updateMultisampleRenderTarget(Se),He.updateRenderTargetMipmap(Se),Re.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let nt=0,Bt=F.length;nt<Bt;nt++){const St=F[nt],{object:yt,geometry:on,material:Ie,group:mn}=St;if(Ie.side===Di&&yt.layers.test(q.layers)){const dt=Ie.side;Ie.side=Cn,Ie.needsUpdate=!0,Ap(yt,Z,q,on,Ie,mn),Ie.side=dt,Ie.needsUpdate=!0,Le=!0}}Le===!0&&(He.updateMultisampleRenderTarget(Se),He.updateRenderTargetMipmap(Se))}P.setRenderTarget(_e,Te,Ue),P.setClearColor(X,oe),tt!==void 0&&(q.viewport=tt),P.toneMapping=$e}function To(E,F,Z){const q=F.isScene===!0?F.overrideMaterial:null;for(let Y=0,Se=E.length;Y<Se;Y++){const De=E[Y],{object:_e,geometry:Te,group:Ue}=De;let $e=De.material;$e.allowOverride===!0&&q!==null&&($e=q),_e.layers.test(Z.layers)&&Ap(_e,F,Z,Te,$e,Ue)}}function Ap(E,F,Z,q,Y,Se){V!==null&&Y.isNodeMaterial&&V.setObject(E,Y),E.onBeforeRender(P,F,Z,q,Y,Se),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Y.onBeforeRender(P,F,Z,q,E,Se),Y.transparent===!0&&Y.side===Di&&Y.forceSinglePass===!1?(Y.side=Cn,Y.needsUpdate=!0,P.renderBufferDirect(Z,F,q,Y,E,Se),Y.side=es,Y.needsUpdate=!0,P.renderBufferDirect(Z,F,q,Y,E,Se),Y.side=Di):P.renderBufferDirect(Z,F,q,Y,E,Se),E.onAfterRender(P,F,Z,q,Y,Se)}function Np(E){let F=0;for(const Z of E)Z.texture!==null&&F++;return F}function oa(E,F,Z){F.isScene!==!0&&(F=Ut);const q=Oe.get(E),Y=T.state.lights,Se=T.state.shadowsArray,De=Y.state.version,_e=se.getParameters(E,Y.state,Se,F,Z,T.state.lightProbeGridArray),Te=se.getProgramCacheKey(_e);let Ue=q.programs;q.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,q.fog=F.fog;const $e=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;q.envMap=R.get(E.envMap||q.environment,$e),q.envMapRotation=q.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Ue===void 0&&(E.addEventListener("dispose",pt),Ue=new Map,q.programs=Ue,q.programVariants=new Map);let tt=Ue.get(Te);if(tt!==void 0){if(q.currentProgram===tt&&q.lightsStateVersion===De)return Cp(E,_e),tt}else _e.uniforms=se.getUniforms(E),V!==null&&E.isNodeMaterial&&V.build(E,Z,_e),E.onBeforeCompile(_e,P),tt=se.acquireProgram(_e,Te),Ue.set(Te,tt),q.uniforms=_e.uniforms;const Le=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=ee.uniform),Cp(E,_e),q.needsLights=Vy(E),q.lightsStateVersion=De,q.needsLights&&(Le.ambientLightColor.value=Y.state.ambient,Le.lightProbe.value=Y.state.probe,Le.sunLights.value=Y.state.sun,Le.sunLightShadows.value=Y.state.sunShadow,Le.directionalLights.value=Y.state.directional,Le.directionalLightShadows.value=Y.state.directionalShadow,Le.spotLights.value=Y.state.spot,Le.spotLightShadows.value=Y.state.spotShadow,Le.rectAreaLights.value=Y.state.rectArea,Le.ltc_1.value=Y.state.rectAreaLTC1,Le.ltc_2.value=Y.state.rectAreaLTC2,Le.pointLights.value=Y.state.point,Le.pointLightShadows.value=Y.state.pointShadow,Le.hemisphereLights.value=Y.state.hemi,Le.sunShadowMatrix.value=Y.state.sunShadowMatrix,Le.sunShadowCascade.value=Y.state.sunShadowCascade,Le.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Le.spotLightMatrix.value=Y.state.spotLightMatrix,Le.spotLightMap.value=Y.state.spotLightMap,Le.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.numLightProbeGrids=Np(T.state.lightProbeGridArray),q.currentProgram=tt,q.uniformsList=null,tt}function zy(E,F,Z,q,Y){const Se=Oe.get(E),De=Se.currentProgram.id+","+q+","+Y;let _e=Se.programVariants.get(De);return _e===void 0?(_e=oa(E,F,Z),Se.programVariants.set(De,_e)):(Se.currentProgram=_e,Se.uniformsList=null,Se.outputColorSpace=q,Se.toneMapping=Y),_e}function Rp(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Gl.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Cp(E,F){const Z=Oe.get(E);Z.outputColorSpace=F.outputColorSpace,Z.batching=F.batching,Z.batchingColor=F.batchingColor,Z.instancing=F.instancing,Z.instancingColor=F.instancingColor,Z.instancingMorph=F.instancingMorph,Z.skinning=F.skinning,Z.morphTargets=F.morphTargets,Z.morphNormals=F.morphNormals,Z.morphColors=F.morphColors,Z.morphTargetsCount=F.morphTargetsCount,Z.numClippingPlanes=F.numClippingPlanes,Z.numIntersection=F.numClipIntersection,Z.vertexAlphas=F.vertexAlphas,Z.vertexTangents=F.vertexTangents,Z.toneMapping=F.toneMapping}function jy(E,F,Z,q,Y){F.isScene!==!0&&(F=Ut),He.resetTextureUnits();const Se=F.fog,De=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?F.environment:null,_e=W===null?P.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:rt.workingColorSpace,Te=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ue=R.get(q.envMap||De,Te),$e=q.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!Z.morphAttributes.position,nt=!!Z.morphAttributes.normal,Bt=!!Z.morphAttributes.color;let St=Fi;q.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(St=P.toneMapping);const yt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,on=yt!==void 0?yt.length:0,Ie=Oe.get(q),mn=T.state.lights;if(vt===!0&&(Rt===!0||E!==G)){const Ct=E===G&&q.id===z;ee.setState(q,E,Ct)}let dt=!1,Cr=!1;q.version===Ie.__version?Ie.needsLights&&Ie.lightsStateVersion!==mn.state.version||Y.isBatchedMesh&&Ie.batching===!1||!Y.isBatchedMesh&&Ie.batching===!0||Y.isBatchedMesh&&Ie.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ie.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ie.instancing===!1||!Y.isInstancedMesh&&Ie.instancing===!0||Y.isSkinnedMesh&&Ie.skinning===!1||!Y.isSkinnedMesh&&Ie.skinning===!0||Y.isInstancedMesh&&Ie.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ie.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ie.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ie.instancingMorph===!1&&Y.morphTexture!==null||Ie.envMap!==Ue||q.fog===!0&&Ie.fog!==Se||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==ee.numPlanes||Ie.numIntersection!==ee.numIntersection)||Ie.vertexAlphas!==$e||Ie.vertexTangents!==tt||Ie.morphTargets!==Le||Ie.morphNormals!==nt||Ie.morphColors!==Bt||Ie.morphTargetsCount!==on||Ie.numLightProbeGrids!==Np(T.state.lightProbeGridArray)?dt=!0:(Ie.outputColorSpace!==_e||Ie.toneMapping!==St)&&(Cr=!0):(dt=!0,Ie.__version=q.version);let ln=Ie.currentProgram;(dt===!0||Cr===!0)&&(ln=Cr===!0?zy(q,F,Y,_e,St):oa(q,F,Y),V&&q.isNodeMaterial&&V.onUpdateProgram(q,ln,Ie));let Ao=!1,$i=!1,Pr=!1;const lt=ln.getUniforms(),en=Ie.uniforms;if(pe.useProgram(ln.program)&&(Ao=!0,$i=!0,Pr=!0),q.id!==z&&(z=q.id,$i=!0),Ao||G!==E){pe.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),lt.setValue(C,"projectionMatrix",E.projectionMatrix),lt.setValue(C,"viewMatrix",E.matrixWorldInverse);const Yt=lt.map.cameraPosition;Yt!==void 0&&Yt.setValue(C,_t.setFromMatrixPosition(E.matrixWorld)),Fe.logarithmicDepthBuffer&&lt.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&lt.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),G!==E&&(G=E,$i=!0,Pr=!0)}if(Ie.needsLights&&(mn.state.sunShadowMap.length>0&&lt.setValue(C,"sunShadowMap",mn.state.sunShadowMap,He),mn.state.directionalShadowMap.length>0&&lt.setValue(C,"directionalShadowMap",mn.state.directionalShadowMap,He),mn.state.spotShadowMap.length>0&&lt.setValue(C,"spotShadowMap",mn.state.spotShadowMap,He),mn.state.pointShadowMap.length>0&&lt.setValue(C,"pointShadowMap",mn.state.pointShadowMap,He)),Y.isSkinnedMesh){lt.setOptional(C,Y,"bindMatrix"),lt.setOptional(C,Y,"bindMatrixInverse");const Ct=Y.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),lt.setValue(C,"boneTexture",Ct.boneTexture,He))}Y.isBatchedMesh&&(lt.setOptional(C,Y,"batchingTexture"),lt.setValue(C,"batchingTexture",Y._matricesTexture,He),lt.setOptional(C,Y,"batchingIdTexture"),lt.setValue(C,"batchingIdTexture",Y._indirectTexture,He),lt.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&lt.setValue(C,"batchingColorTexture",Y._colorsTexture,He));const Kn=Z.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&re.update(Y,Z,ln),($i||Ie.receiveShadow!==Y.receiveShadow)&&(Ie.receiveShadow=Y.receiveShadow,lt.setValue(C,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&F.environment!==null&&(en.envMapIntensity.value=F.environmentIntensity),en.dfgLUT!==void 0&&(en.dfgLUT.value=$2()),$i){if(lt.setValue(C,"toneMappingExposure",P.toneMappingExposure),Ie.needsLights&&Hy(en,Pr),Se&&q.fog===!0&&k.refreshFogUniforms(en,Se),k.refreshMaterialUniforms(en,q,ye,Ne,T.state.transmissionRenderTarget[E.id]),Ie.needsLights&&Ie.numLightProbeGrids>0){const Ct=S;let Yt=0;for(const Mi of T.state.lightProbeGridArray)Mi.texture!==null&&(Ct.textures[Yt]=Mi.texture,Ct.min[Yt]=Mi.boundingBox.min,Ct.max[Yt]=Mi.boundingBox.max,Ct.resolution[Yt]=Mi.resolution,Yt++);for(const Mi in Ct)Ct[Mi].length=Yt;en.probesSH.value=Ct.textures,en.probesMin.value=Ct.min,en.probesMax.value=Ct.max,en.probesResolution.value=Ct.resolution}Gl.upload(C,Rp(Ie),en,He)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Gl.upload(C,Rp(Ie),en,He),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&lt.setValue(C,"center",Y.center),lt.setValue(C,"modelViewMatrix",Y.modelViewMatrix),lt.setValue(C,"normalMatrix",Y.normalMatrix),lt.setValue(C,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const Ct=q.uniformsGroups;for(let Yt=0,Mi=Ct.length;Yt<Mi;Yt++){const Dp=Ct[Yt];ke.update(Dp,ln),ke.bind(Dp,ln)}}return ln}function Hy(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Vy(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(E,F,Z){const q=Oe.get(E);q.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Oe.get(E.texture).__webglTexture=F,Oe.get(E.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Z,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){const Z=Oe.get(E);Z.__webglFramebuffer=F,Z.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,Z=0){W=E,H=F,j=Z;let q=null,Y=!1,Se=!1;if(E){const _e=Oe.get(E);if(_e.__useDefaultFramebuffer!==void 0){pe.bindFramebuffer(C.FRAMEBUFFER,_e.__webglFramebuffer),J.copy(E.viewport),ue.copy(E.scissor),Ae=E.scissorTest,pe.viewport(J),pe.scissor(ue),pe.setScissorTest(Ae),z=-1;return}else if(_e.__webglFramebuffer===void 0)He.setupRenderTarget(E);else if(_e.__hasExternalTextures)He.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const $e=E.depthTexture;if(_e.__boundDepthTexture!==$e){if($e!==null&&Oe.has($e)&&(E.width!==$e.image.width||E.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");He.setupDepthRenderbuffer(E)}}const Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(Se=!0);const Ue=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[F])?q=Ue[F][Z]:q=Ue[F],Y=!0):E.samples>0&&He.useMultisampledRTT(E)===!1?q=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?q=Ue[Z]:q=Ue,J.copy(E.viewport),ue.copy(E.scissor),Ae=E.scissorTest}else J.copy(Ee).multiplyScalar(ye).floor(),ue.copy(Ge).multiplyScalar(ye).floor(),Ae=Je;if(Z!==0&&(q=L),pe.bindFramebuffer(C.FRAMEBUFFER,q)&&pe.drawBuffers(E,q),pe.viewport(J),pe.scissor(ue),pe.setScissorTest(Ae),Y){const _e=Oe.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,Z)}else if(Se){const _e=F;for(let Te=0;Te<E.textures.length;Te++){const Ue=Oe.get(E.textures[Te]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Te,Ue.__webglTexture,Z,_e)}}else if(E!==null&&Z!==0){const _e=Oe.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,_e.__webglTexture,Z)}z=-1};function Pp(E){const F=Oe.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=Fe.textureFormatReadable(E.format),F.__typeReadable=Fe.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,Z,q,Y,Se,De,_e=0){if(!(E&&E.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De],Array.isArray(Te)&&(Te=Te[0])),Te){pe.bindFramebuffer(C.FRAMEBUFFER,Te);try{const Ue=E.textures[_e],$e=Ue.format,tt=Ue.type;E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e);const Le=Pp(Ue);if(Le.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-q&&Z>=0&&Z<=E.height-Y&&C.readPixels(F,Z,q,Y,fe.convert($e),fe.convert(tt),Se)}finally{const Ue=W!==null?Oe.get(W).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(E,F,Z,q,Y,Se,De,_e=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&De!==void 0&&(Te=Te[De],Array.isArray(Te)&&(Te=Te[0])),Te)if(F>=0&&F<=E.width-q&&Z>=0&&Z<=E.height-Y){pe.bindFramebuffer(C.FRAMEBUFFER,Te);const Ue=E.textures[_e],$e=Ue.format,tt=Ue.type;E.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+_e);const Le=Pp(Ue);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const nt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,nt),C.bufferData(C.PIXEL_PACK_BUFFER,Se.byteLength,C.STREAM_READ),C.readPixels(F,Z,q,Y,fe.convert($e),fe.convert(tt),0),C.bindBuffer(C.PIXEL_PACK_BUFFER,null);const Bt=W!==null?Oe.get(W).__webglFramebuffer:null;pe.bindFramebuffer(C.FRAMEBUFFER,Bt);const St=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await J1(C,St,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,nt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,Se),C.bindBuffer(C.PIXEL_PACK_BUFFER,null),C.deleteBuffer(nt),C.deleteSync(St),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,Z=0){const q=Math.pow(2,-Z),Y=Math.floor(E.image.width*q),Se=Math.floor(E.image.height*q),De=F!==null?F.x:0,_e=F!==null?F.y:0;He.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,Z,0,0,De,_e,Y,Se),pe.unbindTexture()},this.copyTextureToTexture=function(E,F,Z=null,q=null,Y=0,Se=0){let De,_e,Te,Ue,$e,tt,Le,nt,Bt;const St=E.isCompressedTexture?E.mipmaps[Se]:E.image;if(Z!==null)De=Z.max.x-Z.min.x,_e=Z.max.y-Z.min.y,Te=Z.isBox3?Z.max.z-Z.min.z:1,Ue=Z.min.x,$e=Z.min.y,tt=Z.isBox3?Z.min.z:0;else{const lt=Math.pow(2,-Y);De=Math.floor(St.width*lt),_e=Math.floor(St.height*lt),E.isDataArrayTexture?Te=St.depth:E.isData3DTexture?Te=Math.floor(St.depth*lt):Te=1,Ue=0,$e=0,tt=0}q!==null?(Le=q.x,nt=q.y,Bt=q.z):(Le=0,nt=0,Bt=0);const yt=fe.convert(F.format),on=fe.convert(F.type);let Ie;F.isData3DTexture?(He.setTexture3D(F,0),Ie=C.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(He.setTexture2DArray(F,0),Ie=C.TEXTURE_2D_ARRAY):(He.setTexture2D(F,0),Ie=C.TEXTURE_2D),pe.activeTexture(C.TEXTURE0),pe.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),pe.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),pe.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const mn=pe.getParameter(C.UNPACK_ROW_LENGTH),dt=pe.getParameter(C.UNPACK_IMAGE_HEIGHT),Cr=pe.getParameter(C.UNPACK_SKIP_PIXELS),ln=pe.getParameter(C.UNPACK_SKIP_ROWS),Ao=pe.getParameter(C.UNPACK_SKIP_IMAGES);pe.pixelStorei(C.UNPACK_ROW_LENGTH,St.width),pe.pixelStorei(C.UNPACK_IMAGE_HEIGHT,St.height),pe.pixelStorei(C.UNPACK_SKIP_PIXELS,Ue),pe.pixelStorei(C.UNPACK_SKIP_ROWS,$e),pe.pixelStorei(C.UNPACK_SKIP_IMAGES,tt);const $i=E.isDataArrayTexture||E.isData3DTexture,Pr=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){const lt=Oe.get(E),en=Oe.get(F),Kn=Oe.get(lt.__renderTarget),Ct=Oe.get(en.__renderTarget);pe.bindFramebuffer(C.READ_FRAMEBUFFER,Kn.__webglFramebuffer),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let Yt=0;Yt<Te;Yt++)$i&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Oe.get(E).__webglTexture,Y,tt+Yt),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Oe.get(F).__webglTexture,Se,Bt+Yt)),C.blitFramebuffer(Ue,$e,Ue+De,$e+_e,Le,nt,Le+De,nt+_e,C.DEPTH_BUFFER_BIT,C.NEAREST);pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||E.isRenderTargetTexture||Oe.has(E)){const lt=Oe.get(E),en=Oe.get(F);pe.bindFramebuffer(C.READ_FRAMEBUFFER,N),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,B);for(let Kn=0;Kn<Te;Kn++)$i?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,lt.__webglTexture,Y,tt+Kn):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,lt.__webglTexture,Y),Pr?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,en.__webglTexture,Se,Bt+Kn):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,en.__webglTexture,Se),Y!==0?C.blitFramebuffer(Ue,$e,Ue+De,$e+_e,Le,nt,Le+De,nt+_e,C.COLOR_BUFFER_BIT,C.NEAREST):Pr?C.copyTexSubImage3D(Ie,Se,Le,nt,Bt+Kn,Ue,$e,De,_e):C.copyTexSubImage2D(Ie,Se,Le,nt,Ue,$e,De,_e);pe.bindFramebuffer(C.READ_FRAMEBUFFER,null),pe.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else Pr?E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Ie,Se,Le,nt,Bt,De,_e,Te,yt,on,St.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(Ie,Se,Le,nt,Bt,De,_e,Te,yt,St.data):C.texSubImage3D(Ie,Se,Le,nt,Bt,De,_e,Te,yt,on,St):E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,Se,Le,nt,De,_e,yt,on,St.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,Se,Le,nt,St.width,St.height,yt,St.data):C.texSubImage2D(C.TEXTURE_2D,Se,Le,nt,De,_e,yt,on,St);pe.pixelStorei(C.UNPACK_ROW_LENGTH,mn),pe.pixelStorei(C.UNPACK_IMAGE_HEIGHT,dt),pe.pixelStorei(C.UNPACK_SKIP_PIXELS,Cr),pe.pixelStorei(C.UNPACK_SKIP_ROWS,ln),pe.pixelStorei(C.UNPACK_SKIP_IMAGES,Ao),Se===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&C.generateMipmap(Ie),pe.unbindTexture()},this.initRenderTarget=function(E){Oe.get(E).__webglFramebuffer===void 0&&He.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?He.setTextureCube(E,0):E.isData3DTexture?He.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?He.setTexture2DArray(E,0):He.setTexture2D(E,0),pe.unbindTexture()},this.resetState=function(){H=0,j=0,W=null,pe.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=rt._getDrawingBufferColorSpace(e),n.unpackColorSpace=rt._getUnpackColorSpace()}}const Y2=({onEnter:t})=>{const e=ne.useRef(null),[n,i]=ne.useState(!1),[r,s]=ne.useState(!1);ne.useEffect(()=>{const l=e.current;if(!l)return;const c=new CT;c.fog=new hp(1442566,.04);const u=new Gn(45,window.innerWidth/window.innerHeight,.1,1e3);u.position.set(0,0,11);const f=new q2({antialias:!0,alpha:!0,powerPreference:"high-performance"});f.setSize(window.innerWidth,window.innerHeight),f.setPixelRatio(Math.min(window.devicePixelRatio,2)),f.toneMapping=ip,f.toneMappingExposure=1.25,l.appendChild(f.domElement);const m=new QT(2885132,2);c.add(m);const h=new $0(15849605,4,50);h.position.set(6,6,8),c.add(h);const g=new $0(10361650,3.5,50);g.position.set(-7,-5,6),c.add(g);const _=new ZT(13938487,2.5);_.position.set(0,10,-6),c.add(_);const b=new mp(2.3,.52,220,32,2,3),x=new rd({color:13938487,metalness:.92,roughness:.18,emissive:5114903,emissiveIntensity:.28}),d=new Si(b,x);c.add(d);const p=new bc(4.3,.035,16,120),y=new rd({color:15849605,metalness:.85,roughness:.2,emissive:13938487,emissiveIntensity:.4}),S=new Si(p,y);S.rotation.x=Math.PI/3,c.add(S);const A=new bc(3.6,.025,16,120),T=new rd({color:15057765,metalness:.9,roughness:.25,emissive:8065315,emissiveIntensity:.3}),v=new Si(A,T);v.rotation.y=Math.PI/4,c.add(v);const w=1400,O=new ci,P=new Float32Array(w*3),U=new Float32Array(w);for(let X=0;X<w*3;X+=3)P[X]=(Math.random()-.5)*30,P[X+1]=(Math.random()-.5)*20,P[X+2]=(Math.random()-.5)*25,U[X/3]=Math.random()*.05+.015;O.setAttribute("position",new yr(P,3));const V=new yy({color:15849605,size:.08,transparent:!0,opacity:.75,blending:lf}),L=new jT(O,V);c.add(L);let N=0,B=0,H=0,j=0;const W=X=>{N=(X.clientX/window.innerWidth-.5)*2,B=(X.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",W);const z=()=>{l&&(u.aspect=window.innerWidth/window.innerHeight,u.updateProjectionMatrix(),f.setSize(window.innerWidth,window.innerHeight))};window.addEventListener("resize",z);let G,J=new eA,ue=null;s(!0);const Ae=()=>{G=requestAnimationFrame(Ae);const X=J.getElapsedTime();if(H+=(N-H)*.05,j+=(B-j)*.05,d.rotation.x=X*.28+j*.35,d.rotation.y=X*.35+H*.45,d.rotation.z=Math.sin(X*.2)*.15,S.rotation.z=X*.18,S.rotation.x=Math.PI/3+j*.2,v.rotation.z=-X*.22,v.rotation.y=Math.PI/4+H*.2,L.rotation.y=X*.03,L.rotation.x=Math.sin(X*.05)*.05,n){ue===null&&(ue=X);const oe=X-ue;if(u.position.z-=oe*oe*18,d.rotation.z+=oe*.4,x.emissiveIntensity=gT.lerp(x.emissiveIntensity,3.5,.1),u.position.z<=-2){cancelAnimationFrame(G),t();return}}else u.position.x=H*1.2,u.position.y=-j*.8,u.lookAt(0,0,0);f.render(c,u)};return Ae(),()=>{window.removeEventListener("mousemove",W),window.removeEventListener("resize",z),cancelAnimationFrame(G),l.contains(f.domElement)&&l.removeChild(f.domElement),b.dispose(),x.dispose(),p.dispose(),y.dispose(),A.dispose(),T.dispose(),O.dispose(),V.dispose(),f.dispose()}},[n,t]);const a=()=>{i(!0)};return ne.useEffect(()=>{const l=c=>{(c.key==="Enter"||c.key==="Escape"||c.key===" ")&&a()};return window.addEventListener("keydown",l),()=>window.removeEventListener("keydown",l)},[]),o.jsxs("div",{className:`fixed inset-0 z-50 overflow-hidden bg-[#160306] select-none transition-opacity duration-1000 ${n?"opacity-0 pointer-events-none":"opacity-100"}`,children:[o.jsx("div",{ref:e,className:"absolute inset-0 cursor-grab active:cursor-grabbing"}),o.jsx("div",{className:"absolute inset-0 pointer-events-none bg-radial-gradient from-transparent via-[#2C060C]/35 to-[#160306]/95"}),o.jsxs("div",{className:"relative z-10 flex flex-col justify-between h-full p-8 md:p-14 max-w-7xl mx-auto",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center space-x-3.5",children:[o.jsx("div",{className:"w-10 h-10 rounded-full border border-gold-400/40 bg-burgundy-900/80 flex items-center justify-center shadow-gold-glow",children:o.jsx("span",{className:"font-serif font-black text-sm text-gold-300",children:"BL"})}),o.jsxs("div",{children:[o.jsx("div",{className:"text-[10px] tracking-[0.3em] font-serif uppercase text-gold-400 font-bold",children:"EST. 2026 • BRIGHTLOOP"}),o.jsx("div",{className:"text-xs text-cream-200/70 font-sans tracking-wide",children:"Unified Subscription Infrastructure"})]})]}),o.jsxs("div",{className:"hidden md:flex items-center space-x-3 text-xs text-gold-400/80 bg-burgundy-950/80 px-4 py-1.5 rounded-full border border-gold-500/20 backdrop-blur-md",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),o.jsx("span",{className:"font-medium tracking-wide",children:"System Online • Zero Double-Billing Engine Active"})]})]}),o.jsxs("div",{className:"my-auto max-w-3xl text-center md:text-left pt-12 md:pt-0",children:[o.jsxs("div",{className:"inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-burgundy-900/70 border border-gold-500/30 text-gold-300 text-xs font-serif tracking-widest uppercase mb-5 backdrop-blur-md shadow-gold-subtle",children:[o.jsx(ao,{className:"w-3.5 h-3.5 text-gold-300"}),o.jsx("span",{children:"Autonomous Recurring Architecture"})]}),o.jsxs("h1",{className:"font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-cream-100 leading-[1.08] mb-6 drop-shadow-2xl",children:["BRIGHTLOOP ",o.jsx("br",{}),o.jsx("span",{className:"gold-gradient-text drop-shadow-[0_4px_25px_rgba(212,175,55,0.35)]",children:"SOFTWARE"})]}),o.jsx("p",{className:"text-cream-200/85 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mb-8 font-sans drop-shadow",children:"Experience complete subscription autonomy. From quote templates and dynamic product variants to idempotent daily billing runs and instant financial intelligence."}),o.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10",children:[o.jsxs("div",{className:"bg-burgundy-950/60 border border-gold-500/20 p-3 rounded-xl backdrop-blur-md hover:border-gold-400/50 transition",children:[o.jsx(o1,{className:"w-4 h-4 text-gold-400 mb-1"}),o.jsx("div",{className:"text-[11px] font-bold text-cream-100",children:"Idempotent Runs"}),o.jsx("div",{className:"text-[10px] text-cream-200/60",children:"Zero Skip Guarantee"})]}),o.jsxs("div",{className:"bg-burgundy-950/60 border border-gold-500/20 p-3 rounded-xl backdrop-blur-md hover:border-gold-400/50 transition",children:[o.jsx(Wc,{className:"w-4 h-4 text-gold-400 mb-1"}),o.jsx("div",{className:"text-[11px] font-bold text-cream-100",children:"Odoo Brand Edition"}),o.jsx("div",{className:"text-[10px] text-cream-200/60",children:"+$560 Dynamic Tier"})]}),o.jsxs("div",{className:"bg-burgundy-950/60 border border-gold-500/20 p-3 rounded-xl backdrop-blur-md hover:border-gold-400/50 transition",children:[o.jsx(d_,{className:"w-4 h-4 text-gold-400 mb-1"}),o.jsx("div",{className:"text-[11px] font-bold text-cream-100",children:"Financial Suite"}),o.jsx("div",{className:"text-[10px] text-cream-200/60",children:"< 2s MRR/ARR Ledger"})]}),o.jsxs("div",{className:"bg-burgundy-950/60 border border-gold-500/20 p-3 rounded-xl backdrop-blur-md hover:border-gold-400/50 transition",children:[o.jsx(tp,{className:"w-4 h-4 text-gold-400 mb-1"}),o.jsx("div",{className:"text-[11px] font-bold text-cream-100",children:"Enterprise RBAC"}),o.jsx("div",{className:"text-[10px] text-cream-200/60",children:"Admin • Staff • Portal"})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-5",children:[o.jsxs("button",{onClick:a,className:"w-full sm:w-auto relative group px-8 py-4 rounded-xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 text-burgundy-950 font-serif font-bold text-base tracking-wider uppercase shadow-gold-glow hover:shadow-[0_0_35px_rgba(212,175,55,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center space-x-3 cursor-pointer overflow-hidden",children:[o.jsx("div",{className:"absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"}),o.jsx(ZE,{className:"w-5 h-5 text-burgundy-950 group-hover:rotate-45 transition-transform"}),o.jsx("span",{children:"Enter Command Center"}),o.jsx(l_,{className:"w-5 h-5 text-burgundy-950 group-hover:translate-x-1 transition-transform"})]}),o.jsx("button",{onClick:a,className:"text-xs font-serif uppercase tracking-widest text-gold-400/80 hover:text-gold-300 transition flex items-center space-x-1.5 py-2 cursor-pointer",children:o.jsx("span",{children:"Press [Enter] or [Esc] to quick enter"})})]})]}),o.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream-200/50 border-t border-gold-500/15 pt-4",children:[o.jsx("div",{children:"Move your cursor across the screen to interact with the 3D Gold Möbius loop."}),o.jsx("div",{className:"mt-2 sm:mt-0 font-serif tracking-widest text-gold-400/70",children:"CINEMATIC THREE.JS • POWERED BY FASTAPI & REACT"})]})]})]})},K2=()=>{const[t,e]=ne.useState(null),[n,i]=ne.useState(!0),[r,s]=ne.useState("finance"),[a,l]=ne.useState(null),[c,u]=ne.useState(!0);ne.useEffect(()=>{localStorage.getItem("token")?qe.getMe().then(b=>{e(b),b.role==="customer"?s("portal"):s("finance")}).catch(()=>{localStorage.removeItem("token"),e(null)}).finally(()=>i(!1)):i(!1)},[]);const f=(_,b)=>{e(_),_.role==="customer"?s("portal"):s("finance")},m=()=>{localStorage.removeItem("token"),e(null)},h=async _=>{let b="CustomerPass!2026";_==="admin@brightloop.io"&&(b="BrightloopAdmin!2026"),_==="sarah.sales@brightloop.io"&&(b="StaffMember!2026");try{const x=await qe.login(_,b);localStorage.setItem("token",x.access_token),e(x.user),x.user.role==="customer"?s("portal"):s("finance")}catch(x){console.error("Quick login failed:",x)}},g=_=>{l(_),s("invoices")};return n?o.jsx("div",{className:"min-h-screen bg-gradient-to-br from-burgundy-950 via-burgundy-900 to-burgundy-950 flex items-center justify-center text-cream-50",children:o.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-gradient-to-tr from-gold-300 via-gold-500 to-gold-700 p-[1.5px] shadow-gold-glow animate-pulse",children:o.jsx("div",{className:"w-full h-full bg-burgundy-950 rounded-[14px] flex items-center justify-center font-serif font-black text-2xl text-gold-300",children:"B"})}),o.jsx("span",{className:"text-sm font-serif font-bold text-gold-300 tracking-wider",children:"Initializing Brightloop Platform..."})]})}):o.jsxs(o.Fragment,{children:[c&&o.jsx(Y2,{onEnter:()=>u(!1)}),t?o.jsxs("div",{className:"min-h-screen bg-[#FBF7F0] flex flex-col font-sans selection:bg-gold-500 selection:text-burgundy-950",children:[o.jsx(l1,{currentUser:t,currentTab:r,onTabChange:_=>{_!=="invoices"&&l(null),s(_)},onLogout:m,onQuickLogin:h,onTriggerCinematic:()=>u(!0)}),o.jsx("main",{className:"flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8",children:o.jsx("div",{className:"animate-fade-in-up",children:t.role==="customer"?o.jsx(g1,{currentUser:t}):o.jsxs(o.Fragment,{children:[r==="finance"&&o.jsx(c1,{onNavigateToInvoice:g}),r==="subscriptions"&&o.jsx(d1,{currentUser:t,onNavigateToInvoice:g}),r==="invoices"&&o.jsx(f1,{initialInvoiceId:a}),r==="products"&&o.jsx(h1,{currentUser:t}),r==="plans"&&o.jsx(p1,{currentUser:t}),r==="staff"&&o.jsx(m1,{currentUser:t})]})},r)}),o.jsx("footer",{className:"bg-gradient-to-r from-burgundy-950 via-burgundy-900 to-burgundy-950 border-t border-gold-500/30 py-4.5 text-center text-xs text-cream-200/80 font-serif",children:o.jsxs("div",{className:"max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2",children:[o.jsxs("div",{className:"flex items-center space-x-2",children:[o.jsx("span",{className:"font-bold text-gold-300",children:"Brightloop Software"}),o.jsx("span",{children:"• Subscription Management & Recurring Ledger OS"})]}),o.jsx("div",{className:"text-gold-400/80 tracking-wide font-mono text-[11px]",children:"Burgundy & Cream Edition • Gold Lined"})]})})]}):o.jsx(x1,{onSuccess:f})]})};Nv(document.getElementById("root")).render(o.jsx(ne.StrictMode,{children:o.jsx(K2,{})}));
