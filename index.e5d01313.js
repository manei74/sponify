var e,t,r,n,i,o,a,s,c,u,l,d,p,f,h,g,m,v,y=globalThis;function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=y.parcelRequire94c2;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},y.parcelRequire94c2=k),(0,k.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),k("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.e5d01313.js","eyyUD","icons.c5b0f01c.svg"]'));var E={},S={},O=function(e){return e&&e.Math===Math&&e};S=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||O("object"==typeof self&&self)||O("object"==typeof y&&y)||O("object"==typeof S&&S)||function(){return this}()||Function("return this")();var j={},L={};j=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var x={},M={};M=!L(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var $=Function.prototype.call;x=M?$.bind($):function(){return $.apply($,arguments)};var F={}.propertyIsEnumerable,P=Object.getOwnPropertyDescriptor;o=P&&!F.call({1:2},1)?function(e){var t=P(this,e);return!!t&&t.enumerable}:F;var T={};T=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var D={},q={},I={},N=Function.prototype,H=N.call,R=M&&N.bind.bind(H,H),A={},U=(I=M?R:function(e){return function(){return H.apply(e,arguments)}})({}.toString),C=I("".slice);A=function(e){return C(U(e),8,-1)};var W=Object,z=I("".split);q=L(function(){return!W("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?z(e,""):W(e)}:W;var B={},G={};G=function(e){return null==e};var Q=TypeError;B=function(e){if(G(e))throw new Q("Can't call method on "+e);return e},D=function(e){return q(B(e))};var J={},V={},Y={},K={},X="object"==typeof document&&document.all;K=void 0===X&&void 0!==X?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e},Y=function(e){return"object"==typeof e?null!==e:K(e)};var Z={},ee={};ee=function(e,t){var r;return arguments.length<2?(r=S[e],K(r)?r:void 0):S[e]&&S[e][t]};var et={};et=I({}.isPrototypeOf);var er={},en={},ei={},eo={},ea=S.navigator,es=ea&&ea.userAgent;eo=es?String(es):"";var ec=S.process,eu=S.Deno,el=ec&&ec.versions||eu&&eu.version,ed=el&&el.v8;ed&&(s=(a=ed.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&eo&&(!(a=eo.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eo.match(/Chrome\/(\d+)/))&&(s=+a[1]),ei=s;var ep=S.String;er=(en=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");return!ep(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ei&&ei<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ef=Object;Z=er?function(e){return"symbol"==typeof e}:function(e){var t=ee("Symbol");return K(t)&&et(t.prototype,ef(e))};var eh={},eg={},em={},ev=String;em=function(e){try{return ev(e)}catch(e){return"Object"}};var ey=TypeError;eg=function(e){if(K(e))return e;throw new ey(em(e)+" is not a function")},eh=function(e,t){var r=e[t];return G(r)?void 0:eg(r)};var eb={},e_=TypeError;eb=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!Y(n=x(r,e))||K(r=e.valueOf)&&!Y(n=x(r,e))||"string"!==t&&K(r=e.toString)&&!Y(n=x(r,e)))return n;throw new e_("Can't convert object to primitive value")};var ew={},ek={},eE={};eE=!1;var eS={},eO=Object.defineProperty;eS=function(e,t){try{eO(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var ej="__core-js_shared__",eL=ek=S[ej]||eS(ej,{});(eL.versions||(eL.versions=[])).push({version:"3.40.0",mode:eE?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ew=function(e,t){return ek[e]||(ek[e]=t||{})};var ex={},eM={},e$=Object;eM=function(e){return e$(B(e))};var eF=I({}.hasOwnProperty);ex=Object.hasOwn||function(e,t){return eF(eM(e),t)};var eP={},eT=0,eD=Math.random(),eq=I(1..toString);eP=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eq(++eT+eD,36)};var eI=S.Symbol,eN=ew("wks"),eH=er?eI.for||eI:eI&&eI.withoutSetter||eP,eR=TypeError,eA=(ex(eN,e="toPrimitive")||(eN[e]=en&&ex(eI,e)?eI[e]:eH("Symbol."+e)),eN[e]);V=function(e,t){if(!Y(e)||Z(e))return e;var r,n=eh(e,eA);if(n){if(void 0===t&&(t="default"),r=x(n,e,t),!Y(r)||Z(r))return r;throw new eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},J=function(e){var t=V(e,"string");return Z(t)?t:t+""};var eU={},eC={},eW=S.document,ez=Y(eW)&&Y(eW.createElement);eC=function(e){return ez?eW.createElement(e):{}},eU=!j&&!L(function(){return 7!==Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});var eB=Object.getOwnPropertyDescriptor;i=j?eB:function(e,t){if(e=D(e),t=J(t),eU)try{return eB(e,t)}catch(e){}if(ex(e,t))return T(!x(o,e,t),e[t])};var eG={},eQ={};eQ=j&&L(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eJ={},eV=String,eY=TypeError;eJ=function(e){if(Y(e))return e;throw new eY(eV(e)+" is not an object")};var eK=TypeError,eX=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";c=j?eQ?function(e,t,r){if(eJ(e),t=J(t),eJ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eZ(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eX(e,t,r)}:eX:function(e,t,r){if(eJ(e),t=J(t),eJ(r),eU)try{return eX(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eG=j?function(e,t,r){return c(e,t,T(1,r))}:function(e,t,r){return e[t]=r,e};var e3={},e4={},e6=Function.prototype,e5=j&&Object.getOwnPropertyDescriptor,e7=ex(e6,"name")&&(!j||j&&e5(e6,"name").configurable),e8={},e9=I(Function.toString);K(ek.inspectSource)||(ek.inspectSource=function(e){return e9(e)}),e8=ek.inspectSource;var te={},tt={},tr=S.WeakMap;tt=K(tr)&&/native code/.test(String(tr));var tn={},ti=ew("keys");tn=function(e){return ti[e]||(ti[e]=eP(e))};var to={};to={};var ta="Object already initialized",ts=S.TypeError,tc=S.WeakMap;if(tt||ek.state){var tu=ek.state||(ek.state=new tc);tu.get=tu.get,tu.has=tu.has,tu.set=tu.set,u=function(e,t){if(tu.has(e))throw new ts(ta);return t.facade=e,tu.set(e,t),t},l=function(e){return tu.get(e)||{}},d=function(e){return tu.has(e)}}else{var tl=tn("state");to[tl]=!0,u=function(e,t){if(ex(e,tl))throw new ts(ta);return t.facade=e,eG(e,tl,t),t},l=function(e){return ex(e,tl)?e[tl]:{}},d=function(e){return ex(e,tl)}}var tp=(te={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Y(t)||(r=l(t)).type!==e)throw new ts("Incompatible receiver, "+e+" required");return r}}}).enforce,tf=te.get,th=String,tg=Object.defineProperty,tm=I("".slice),tv=I("".replace),ty=I([].join),tb=j&&!L(function(){return 8!==tg(function(){},"length",{value:8}).length}),t_=String(String).split("String"),tw=e4=function(e,t,r){"Symbol("===tm(th(t),0,7)&&(t="["+tv(th(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!ex(e,"name")||e7&&e.name!==t)&&(j?tg(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&ex(r,"arity")&&e.length!==r.arity&&tg(e,"length",{value:r.arity});try{r&&ex(r,"constructor")&&r.constructor?j&&tg(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tp(e);return ex(n,"source")||(n.source=ty(t_,"string"==typeof t?t:"")),e};Function.prototype.toString=tw(function(){return K(this)&&tf(this).source||e8(this)},"toString"),e3=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(K(r)&&e4(r,o,n),n.global)i?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tk={},tE={},tS={},tO={},tj={},tL={},tx=Math.ceil,tM=Math.floor;tL=Math.trunc||function(e){var t=+e;return(t>0?tM:tx)(t)},tj=function(e){var t=+e;return t!=t||0===t?0:tL(t)};var t$=Math.max,tF=Math.min;tO=function(e,t){var r=tj(e);return r<0?t$(r+t,0):tF(r,t)};var tP={},tT={},tD=Math.min;tT=function(e){var t=tj(e);return t>0?tD(t,0x1fffffffffffff):0},tP=function(e){return tT(e.length)};var tq=function(e){return function(t,r,n){var i,o=D(t),a=tP(o);if(0===a)return!e&&-1;var s=tO(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tI={includes:tq(!0),indexOf:tq(!1)}.indexOf,tN=I([].push);tS=function(e,t){var r,n=D(e),i=0,o=[];for(r in n)!ex(to,r)&&ex(n,r)&&tN(o,r);for(;t.length>i;)ex(n,r=t[i++])&&(~tI(o,r)||tN(o,r));return o};var tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tS(e,tH)},f=Object.getOwnPropertySymbols;var tR=I([].concat);tE=ee("Reflect","ownKeys")||function(e){var t=p(eJ(e));return f?tR(t,f(e)):t},tk=function(e,t,r){for(var n=tE(t),o=0;o<n.length;o++){var a=n[o];ex(e,a)||r&&ex(r,a)||c(e,a,i(t,a))}};var tA={},tU=/#|\.prototype\./,tC=function(e,t){var r=tz[tW(e)];return r===tG||r!==tB&&(K(t)?L(t):!!t)},tW=tC.normalize=function(e){return String(e).replace(tU,".").toLowerCase()},tz=tC.data={},tB=tC.NATIVE="N",tG=tC.POLYFILL="P";tA=tC,E=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?S:l?S[c]||eS(c,{}):S[c]&&S[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tA(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tk(a,o)}(e.sham||o&&o.sham)&&eG(a,"sham",!0),e3(r,n,a,e)}};var tQ={},tJ={},tV=Function.prototype,tY=tV.apply,tK=tV.call;tJ="object"==typeof Reflect&&Reflect.apply||(M?tK.bind(tY):function(){return tK.apply(tY,arguments)});var tX={},tZ={},t0=(tZ=function(e){if("Function"===A(e))return I(e)})(tZ.bind);tX=function(e,t){return eg(e),void 0===t?e:M?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=ee("document","documentElement");var t2={};t2=I([].slice);var t3={},t4=TypeError;t3=function(e,t){if(e<t)throw new t4("Not enough arguments");return e};var t6={};t6=/(?:ipad|iphone|ipod).*applewebkit/i.test(eo);var t5={},t7={},t8=function(e){return eo.slice(0,e.length)===e};t5="NODE"===(t7=t8("Bun/")?"BUN":t8("Cloudflare-Workers")?"CLOUDFLARE":t8("Deno/")?"DENO":t8("Node.js/")?"NODE":S.Bun&&"string"==typeof Bun.version?"BUN":S.Deno&&"object"==typeof Deno.version?"DENO":"process"===A(S.process)?"NODE":S.window&&S.document?"BROWSER":"REST");var t9=S.setImmediate,re=S.clearImmediate,rt=S.process,rr=S.Dispatch,rn=S.Function,ri=S.MessageChannel,ro=S.String,ra=0,rs={},rc="onreadystatechange";L(function(){h=S.location});var ru=function(e){if(ex(rs,e)){var t=rs[e];delete rs[e],t()}},rl=function(e){return function(){ru(e)}},rd=function(e){ru(e.data)},rp=function(e){S.postMessage(ro(e),h.protocol+"//"+h.host)};t9&&re||(t9=function(e){t3(arguments.length,1);var t=K(e)?e:rn(e),r=t2(arguments,1);return rs[++ra]=function(){tJ(t,void 0,r)},g(ra),ra},re=function(e){delete rs[e]},t5?g=function(e){rt.nextTick(rl(e))}:rr&&rr.now?g=function(e){rr.now(rl(e))}:ri&&!t6?(v=(m=new ri).port2,m.port1.onmessage=rd,g=tX(v.postMessage,v)):S.addEventListener&&K(S.postMessage)&&!S.importScripts&&h&&"file:"!==h.protocol&&!L(rp)?(g=rp,S.addEventListener("message",rd,!1)):g=rc in eC("script")?function(e){t1.appendChild(eC("script"))[rc]=function(){t1.removeChild(this),ru(e)}}:function(e){setTimeout(rl(e),0)});var rf=(tQ={set:t9,clear:re}).clear;E({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rf},{clearImmediate:rf});var rh=tQ.set,rg={},rm=S.Function,rv=/MSIE .\./.test(eo)||"BUN"===t7&&((t=S.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rg=function(e,t){var r=t?2:1;return rv?function(n,i){var o=t3(arguments.length,1)>r,a=K(n)?n:rm(n),s=o?t2(arguments,r):[],c=o?function(){tJ(a,this,s)}:a;return t?e(c,i):e(c)}:e};var ry=S.setImmediate?rg(rh,!1):rh;E({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==ry},{setImmediate:ry});var rb=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return i(c,"_invoke",{value:(a=new L(o||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),g;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,g;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,g):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,g)}(o,a);if(c){if(c===g)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=f;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===g)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",g={};function m(){}function v(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(x([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function x(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return v.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,g):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),g},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),g}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:x(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}({});try{regeneratorRuntime=rb}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}const r_="https://forkify-api.jonas.io/api/v2/recipes/",rw="4c021ba6-8cc1-4668-8a1e-450a788c369b",rk=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rE={recipe:{},search:{query:"",results:[],resultsPerPage:15,page:1},bookmarks:[]},rS=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,img:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rO=async function(e){try{let t=await rk(`${r_}${e}?key=${rw}`);rE.recipe=rS(t),console.log(rE.recipe.ingredients),rE.bookmarks.some(t=>t.id===e)?rE.recipe.bookmarked=!0:rE.recipe.bookmarked=!1}catch(e){throw console.error(`${e} \u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}`),e}},rj=async function(e){try{rE.search.query=e;let t=await rk(`${r_}?search=${e}&key=${rw}`);rE.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,img:e.image_url,...e.key&&{key:e.key}})),rE.search.page=1,console.log(rE.search.results)}catch(e){throw console.error(`${e} \u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}`),e}},rL=function(e=rE.search.page){rE.search.page=e;let t=(e-1)*rE.search.resultsPerPage,r=e*rE.search.resultsPerPage;return rE.search.results.slice(t,r)},rx=function(e){rE.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rE.recipe.servings}),rE.recipe.servings=e},rM=function(){localStorage.setItem("bookmarks",JSON.stringify(rE.bookmarks))},r$=function(e){rE.bookmarks.push(e),e.id===rE.recipe.id&&(rE.recipe.bookmarked=!0),rM()},rF=function(e){let t=rE.bookmarks.findIndex(t=>t.id===e);rE.bookmarks.splice(t,1),e===rE.recipe.id&&(rE.recipe.bookmarked=!1),rM()};!function(){let e=localStorage.getItem("bookmarks");e&&(rE.bookmarks=JSON.parse(e))}(),console.log(rE.bookmarks);const rP=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingridient format! Please use the correct format ✋");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rk(`${r_}?key=${rw}`,r);rE.recipe=rS(n),r$(rE.recipe)}catch(e){throw e}};var rT={};rT=new URL("icons.c5b0f01c.svg",import.meta.url).toString();class rD{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];r&&(e.isEqualNode(r)||e.firstChild?.nodeValue?.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value)))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
            <div class="spinner">
            <svg>
              <use href="${b(rT)}#icon-loader"></use>
            </svg>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
            <div>
              <svg>
                <use href="${b(rT)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="error">
            <div>
              <svg>
                <use href="${b(rT)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}const rq=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof e)this.numerator=e,this.denominator=1;else if("string"==typeof e){var r,n,i=e.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new rq(r).add(new rq(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new rq(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()};rq.prototype.clone=function(){return new rq(this.numerator,this.denominator)},rq.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},rq.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},rq.prototype.add=function(e){var t=this.clone();return e=e instanceof rq?e.clone():new rq(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},rq.prototype.subtract=function(e){var t=this.clone();return e=e instanceof rq?e.clone():new rq(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},rq.prototype.multiply=function(e){var t=this.clone();if(e instanceof rq)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new rq(e));t.numerator*=e}return t.normalize()},rq.prototype.divide=function(e){var t=this.clone();if(e instanceof rq)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new rq(e));t.denominator*=e}return t.normalize()},rq.prototype.equals=function(e){e instanceof rq||(e=new rq(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},rq.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=rq.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),rq.gcf=function(e,t){var r=[],n=rq.primeFactors(e),i=rq.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},rq.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r};class rI extends rD{_parentElement=document.querySelector(".recipe");_errorMessage=`We couldn't find recipe. \u{1F972} Please try another one \u{1F355}`;_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--decrease-servings"),n=t.target.closest(".btn--increase-servings");r&&e(-1),n&&e(1)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
      <img src="${this._data.img}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
      </figure>
      
      <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${b(rT)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${b(rT)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
  
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--decrease-servings">
            <svg>
              <use href="${b(rT)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${b(rT)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
  
      
      <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
        <svg>
          <use href="${b(rT)}#icon-user"></use>
        </svg>
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${b(rT)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
        </svg>
      </button>
      </div>
       
      <div class="recipe__ingredients">
      <h2 class="heading--2">Recipe ingredients</h2>
      <ul class="recipe__ingredient-list">
        ${this._data.ingredients.map(this._generateMarkupIngredient.bind(this)).join("")}
      </ul>
      </div>
  
      <div class="recipe__directions">
      <h2 class="heading--2">How to cook it</h2>
      <p class="recipe__directions-text">
        This recipe was carefully designed and tested by
        <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
        directions at their website.
      </p>
      <a
        class="btn--small recipe__btn"
        href="${this._data.sourceUrl}"
        target="_blank"
      >
        <span>Directions</span>
        <svg class="search__icon">
          <use href="${b(rT)}#icon-arrow-right"></use>
        </svg>
      </a>
      </div>`}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${b(rT)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?new rq(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
      </li>`}}var rN=new rI;class rH{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rR=new rH,rA=new class extends rD{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.img}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
                <div class="preview__user-generated ${this._data.key?"":"hidden"}">
                  <svg>
                    <use href="${b(rT)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`}};class rU extends rD{_parentElement=document.querySelector(".results");_errorMessage=`No recipes found for your query! Please try again \u{1F355}`;_message="";_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rC=new rU;class rW extends rD{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);console.log(t);let r=`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${b(rT)}#icon-arrow-right"></use>
            </svg>
          </button>`,n=`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${b(rT)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>`;return 1===e&&t>1?r:e===t&&t>1?n:e<t?r+n:""}}var rz=new rW;class rB extends rD{_parentElement=document.querySelector(".bookmarks");_errorMessage=`No bookmarks yet. Find a nice recipe and bookmark it \u{1F355}`;_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rG=new rB;class rQ extends rD{_parentElement=document.querySelector(".upload");_message="Recipe was successfully upload!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._window.addEventListener("click",e=>{e.target.closest(".btn--close-modal")&&this._handleCloseAndReset()}),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}_handleCloseAndReset(){this.toggleWindow(),this._parentElement.innerHTML="",this._parentElement.insertAdjacentHTML("afterbegin",this._generateMarkup())}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){return`
      <button type="button" class="btn--close-modal">&times;</button>
      <form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="" required name="title" type="text" />
          <label>URL</label>
          <input value="" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="" required name="image" type="text" />
          <label>Publisher</label>
          <input value="" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value=""
            type="text"
            required
            name="ingredient-1"
            placeholder="1,,Avocado"
          />
          <label>Ingredient 2</label>
          <input
            value=""
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=""
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

<button type="submit" class="btn upload__btn">
  <svg>
     <use href="${b(rT)}#icon-upload-cloud"></use>
  </svg>
  <span>Upload</span>
</button>
      </form>
    `}}var rJ=new rQ;document.querySelector(".recipe");const rV=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rN.renderSpinner(),rC.update(rL()),rG.update(rE.bookmarks),await rO(e),rN.render(rE.recipe)}catch(e){console.error(e),rN.renderError()}},rY=async function(){try{rC.renderSpinner();let e=rR.getQuery();if(!e)return;await rj(e),rC.render(rL()),rz.render(rE.search),console.log(rE.search)}catch(e){console.log(e)}},rK=async function(e){try{rJ.renderSpinner(),await rP(e),console.log(rE.recipe),rN.render(rE.recipe),rJ.renderMessage(),rG.render(rE.bookmarks),window.history.pushState(null,"",`#${rE.recipe.id}`),setTimeout(function(){rJ.toggleWindow()},2500)}catch(e){console.error(e),rJ.renderError(e.message)}};document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".header__logo");e&&(e.onclick=function(){window.location.reload()})}),rG.addHandlerRender(function(){rG.render(rE.bookmarks)}),rN.addHandlerRender(rV),rN.addHandlerUpdateServings(function(e){rE.recipe.servings+e>0&&rx(rE.recipe.servings+e),rN.update(rE.recipe)}),rN.addHandlerAddBookmark(function(){rE.recipe.bookmarked?rF(rE.recipe.id):r$(rE.recipe),rN.update(rE.recipe),rG.render(rE.bookmarks)}),rR.addHandlerSearch(rY),rz.addHandlerClick(function(e){rC.render(rL(e)),rz.render(rE.search)}),rJ.addHandlerUpload(rK);
//# sourceMappingURL=index.e5d01313.js.map
