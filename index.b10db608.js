var e,t,r,n,i,o,a,s,c,u,l,d,f,p,h,v,g,m,y=globalThis;function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=y.parcelRequire94c2;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},y.parcelRequire94c2=k),(0,k.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),k("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.b10db608.js","eyyUD","icons.c5b0f01c.svg"]'));var E={},S={},O=function(e){return e&&e.Math===Math&&e};S=O("object"==typeof globalThis&&globalThis)||O("object"==typeof window&&window)||O("object"==typeof self&&self)||O("object"==typeof y&&y)||O("object"==typeof S&&S)||function(){return this}()||Function("return this")();var j={},L={};j=!(L=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var $={},M={};M=!L(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var x=Function.prototype.call;$=M?x.bind(x):function(){return x.apply(x,arguments)};var P={}.propertyIsEnumerable,F=Object.getOwnPropertyDescriptor;o=F&&!P.call({1:2},1)?function(e){var t=F(this,e);return!!t&&t.enumerable}:P;var T={};T=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var N={},D={},H={},q=Function.prototype,I=q.call,R=M&&q.bind.bind(I,I),A={},C=(H=M?R:function(e){return function(){return I.apply(e,arguments)}})({}.toString),U=H("".slice);A=function(e){return U(C(e),8,-1)};var W=Object,z=H("".split);D=L(function(){return!W("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?z(e,""):W(e)}:W;var B={},G={};G=function(e){return null==e};var J=TypeError;B=function(e){if(G(e))throw new J("Can't call method on "+e);return e},N=function(e){return D(B(e))};var V={},Y={},Q={},K={},X="object"==typeof document&&document.all;K=void 0===X&&void 0!==X?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e},Q=function(e){return"object"==typeof e?null!==e:K(e)};var Z={},ee={};ee=function(e,t){var r;return arguments.length<2?(r=S[e],K(r)?r:void 0):S[e]&&S[e][t]};var et={};et=H({}.isPrototypeOf);var er={},en={},ei={},eo={},ea=S.navigator,es=ea&&ea.userAgent;eo=es?String(es):"";var ec=S.process,eu=S.Deno,el=ec&&ec.versions||eu&&eu.version,ed=el&&el.v8;ed&&(s=(a=ed.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&eo&&(!(a=eo.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=eo.match(/Chrome\/(\d+)/))&&(s=+a[1]),ei=s;var ef=S.String;er=(en=!!Object.getOwnPropertySymbols&&!L(function(){var e=Symbol("symbol detection");return!ef(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&ei&&ei<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ep=Object;Z=er?function(e){return"symbol"==typeof e}:function(e){var t=ee("Symbol");return K(t)&&et(t.prototype,ep(e))};var eh={},ev={},eg={},em=String;eg=function(e){try{return em(e)}catch(e){return"Object"}};var ey=TypeError;ev=function(e){if(K(e))return e;throw new ey(eg(e)+" is not a function")},eh=function(e,t){var r=e[t];return G(r)?void 0:ev(r)};var eb={},e_=TypeError;eb=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!Q(n=$(r,e))||K(r=e.valueOf)&&!Q(n=$(r,e))||"string"!==t&&K(r=e.toString)&&!Q(n=$(r,e)))return n;throw new e_("Can't convert object to primitive value")};var ew={},ek={},eE={};eE=!1;var eS={},eO=Object.defineProperty;eS=function(e,t){try{eO(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var ej="__core-js_shared__",eL=ek=S[ej]||eS(ej,{});(eL.versions||(eL.versions=[])).push({version:"3.40.0",mode:eE?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ew=function(e,t){return ek[e]||(ek[e]=t||{})};var e$={},eM={},ex=Object;eM=function(e){return ex(B(e))};var eP=H({}.hasOwnProperty);e$=Object.hasOwn||function(e,t){return eP(eM(e),t)};var eF={},eT=0,eN=Math.random(),eD=H(1..toString);eF=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eD(++eT+eN,36)};var eH=S.Symbol,eq=ew("wks"),eI=er?eH.for||eH:eH&&eH.withoutSetter||eF,eR=TypeError,eA=(e$(eq,e="toPrimitive")||(eq[e]=en&&e$(eH,e)?eH[e]:eI("Symbol."+e)),eq[e]);Y=function(e,t){if(!Q(e)||Z(e))return e;var r,n=eh(e,eA);if(n){if(void 0===t&&(t="default"),r=$(n,e,t),!Q(r)||Z(r))return r;throw new eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},V=function(e){var t=Y(e,"string");return Z(t)?t:t+""};var eC={},eU={},eW=S.document,ez=Q(eW)&&Q(eW.createElement);eU=function(e){return ez?eW.createElement(e):{}},eC=!j&&!L(function(){return 7!==Object.defineProperty(eU("div"),"a",{get:function(){return 7}}).a});var eB=Object.getOwnPropertyDescriptor;i=j?eB:function(e,t){if(e=N(e),t=V(t),eC)try{return eB(e,t)}catch(e){}if(e$(e,t))return T(!$(o,e,t),e[t])};var eG={},eJ={};eJ=j&&L(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eV={},eY=String,eQ=TypeError;eV=function(e){if(Q(e))return e;throw new eQ(eY(e)+" is not an object")};var eK=TypeError,eX=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";c=j?eJ?function(e,t,r){if(eV(e),t=V(t),eV(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eZ(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eX(e,t,r)}:eX:function(e,t,r){if(eV(e),t=V(t),eV(r),eC)try{return eX(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eG=j?function(e,t,r){return c(e,t,T(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e6={},e7=Function.prototype,e8=j&&Object.getOwnPropertyDescriptor,e3=e$(e7,"name")&&(!j||j&&e8(e7,"name").configurable),e5={},e9=H(Function.toString);K(ek.inspectSource)||(ek.inspectSource=function(e){return e9(e)}),e5=ek.inspectSource;var te={},tt={},tr=S.WeakMap;tt=K(tr)&&/native code/.test(String(tr));var tn={},ti=ew("keys");tn=function(e){return ti[e]||(ti[e]=eF(e))};var to={};to={};var ta="Object already initialized",ts=S.TypeError,tc=S.WeakMap;if(tt||ek.state){var tu=ek.state||(ek.state=new tc);tu.get=tu.get,tu.has=tu.has,tu.set=tu.set,u=function(e,t){if(tu.has(e))throw new ts(ta);return t.facade=e,tu.set(e,t),t},l=function(e){return tu.get(e)||{}},d=function(e){return tu.has(e)}}else{var tl=tn("state");to[tl]=!0,u=function(e,t){if(e$(e,tl))throw new ts(ta);return t.facade=e,eG(e,tl,t),t},l=function(e){return e$(e,tl)?e[tl]:{}},d=function(e){return e$(e,tl)}}var tf=(te={set:u,get:l,has:d,enforce:function(e){return d(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=l(t)).type!==e)throw new ts("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=te.get,th=String,tv=Object.defineProperty,tg=H("".slice),tm=H("".replace),ty=H([].join),tb=j&&!L(function(){return 8!==tv(function(){},"length",{value:8}).length}),t_=String(String).split("String"),tw=e6=function(e,t,r){"Symbol("===tg(th(t),0,7)&&(t="["+tm(th(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!e$(e,"name")||e3&&e.name!==t)&&(j?tv(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&e$(r,"arity")&&e.length!==r.arity&&tv(e,"length",{value:r.arity});try{r&&e$(r,"constructor")&&r.constructor?j&&tv(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return e$(n,"source")||(n.source=ty(t_,"string"==typeof t?t:"")),e};Function.prototype.toString=tw(function(){return K(this)&&tp(this).source||e5(this)},"toString"),e4=function(e,t,r,n){n||(n={});var i=n.enumerable,o=void 0!==n.name?n.name:t;if(K(r)&&e6(r,o,n),n.global)i?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(i=!0):delete e[t]}catch(e){}i?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tk={},tE={},tS={},tO={},tj={},tL={},t$=Math.ceil,tM=Math.floor;tL=Math.trunc||function(e){var t=+e;return(t>0?tM:t$)(t)},tj=function(e){var t=+e;return t!=t||0===t?0:tL(t)};var tx=Math.max,tP=Math.min;tO=function(e,t){var r=tj(e);return r<0?tx(r+t,0):tP(r,t)};var tF={},tT={},tN=Math.min;tT=function(e){var t=tj(e);return t>0?tN(t,0x1fffffffffffff):0},tF=function(e){return tT(e.length)};var tD=function(e){return function(t,r,n){var i,o=N(t),a=tF(o);if(0===a)return!e&&-1;var s=tO(n,a);if(e&&r!=r){for(;a>s;)if((i=o[s++])!=i)return!0}else for(;a>s;s++)if((e||s in o)&&o[s]===r)return e||s||0;return!e&&-1}},tH={includes:tD(!0),indexOf:tD(!1)}.indexOf,tq=H([].push);tS=function(e,t){var r,n=N(e),i=0,o=[];for(r in n)!e$(to,r)&&e$(n,r)&&tq(o,r);for(;t.length>i;)e$(n,r=t[i++])&&(~tH(o,r)||tq(o,r));return o};var tI=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");f=Object.getOwnPropertyNames||function(e){return tS(e,tI)},p=Object.getOwnPropertySymbols;var tR=H([].concat);tE=ee("Reflect","ownKeys")||function(e){var t=f(eV(e));return p?tR(t,p(e)):t},tk=function(e,t,r){for(var n=tE(t),o=0;o<n.length;o++){var a=n[o];e$(e,a)||r&&e$(r,a)||c(e,a,i(t,a))}};var tA={},tC=/#|\.prototype\./,tU=function(e,t){var r=tz[tW(e)];return r===tG||r!==tB&&(K(t)?L(t):!!t)},tW=tU.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tz=tU.data={},tB=tU.NATIVE="N",tG=tU.POLYFILL="P";tA=tU,E=function(e,t){var r,n,o,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?S:l?S[c]||eS(c,{}):S[c]&&S[c].prototype)for(n in t){if(a=t[n],o=e.dontCallGetSet?(s=i(r,n))&&s.value:r[n],!tA(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==o){if(typeof a==typeof o)continue;tk(a,o)}(e.sham||o&&o.sham)&&eG(a,"sham",!0),e4(r,n,a,e)}};var tJ={},tV={},tY=Function.prototype,tQ=tY.apply,tK=tY.call;tV="object"==typeof Reflect&&Reflect.apply||(M?tK.bind(tQ):function(){return tK.apply(tQ,arguments)});var tX={},tZ={},t0=(tZ=function(e){if("Function"===A(e))return H(e)})(tZ.bind);tX=function(e,t){return ev(e),void 0===t?e:M?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=ee("document","documentElement");var t2={};t2=H([].slice);var t4={},t6=TypeError;t4=function(e,t){if(e<t)throw new t6("Not enough arguments");return e};var t7={};t7=/(?:ipad|iphone|ipod).*applewebkit/i.test(eo);var t8={},t3={},t5=function(e){return eo.slice(0,e.length)===e};t8="NODE"===(t3=t5("Bun/")?"BUN":t5("Cloudflare-Workers")?"CLOUDFLARE":t5("Deno/")?"DENO":t5("Node.js/")?"NODE":S.Bun&&"string"==typeof Bun.version?"BUN":S.Deno&&"object"==typeof Deno.version?"DENO":"process"===A(S.process)?"NODE":S.window&&S.document?"BROWSER":"REST");var t9=S.setImmediate,re=S.clearImmediate,rt=S.process,rr=S.Dispatch,rn=S.Function,ri=S.MessageChannel,ro=S.String,ra=0,rs={},rc="onreadystatechange";L(function(){h=S.location});var ru=function(e){if(e$(rs,e)){var t=rs[e];delete rs[e],t()}},rl=function(e){return function(){ru(e)}},rd=function(e){ru(e.data)},rf=function(e){S.postMessage(ro(e),h.protocol+"//"+h.host)};t9&&re||(t9=function(e){t4(arguments.length,1);var t=K(e)?e:rn(e),r=t2(arguments,1);return rs[++ra]=function(){tV(t,void 0,r)},v(ra),ra},re=function(e){delete rs[e]},t8?v=function(e){rt.nextTick(rl(e))}:rr&&rr.now?v=function(e){rr.now(rl(e))}:ri&&!t7?(m=(g=new ri).port2,g.port1.onmessage=rd,v=tX(m.postMessage,m)):S.addEventListener&&K(S.postMessage)&&!S.importScripts&&h&&"file:"!==h.protocol&&!L(rf)?(v=rf,S.addEventListener("message",rd,!1)):v=rc in eU("script")?function(e){t1.appendChild(eU("script"))[rc]=function(){t1.removeChild(this),ru(e)}}:function(e){setTimeout(rl(e),0)});var rp=(tJ={set:t9,clear:re}).clear;E({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rp},{clearImmediate:rp});var rh=tJ.set,rv={},rg=S.Function,rm=/MSIE .\./.test(eo)||"BUN"===t3&&((t=S.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rv=function(e,t){var r=t?2:1;return rm?function(n,i){var o=t4(arguments.length,1)>r,a=K(n)?n:rg(n),s=o?t2(arguments,r):[],c=o?function(){tV(a,this,s)}:a;return t?e(c,i):e(c)}:e};var ry=S.setImmediate?rv(rh,!1):rh;E({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==ry},{setImmediate:ry});var rb=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",s=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,o){var a,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(a=new L(o||[]),s=f,function(r,i){if(s===p)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return{value:t,done:!0}}for(a.method=r,a.arg=i;;){var o=a.delegate;if(o){var c=function e(r,n){var i=n.method,o=r.iterator[i];if(o===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var a=d(o,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(o,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===f)throw s=h,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=p;var u=d(e,n,a);if("normal"===u.type){if(s=a.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=h,a.method="throw",a.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var f="suspendedStart",p="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_($([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,o){function a(){return new t(function(r,a){!function r(i,o,a,s){var c=d(e[i],e,o);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(i,o,r,a)})}return r=r?r.then(a,a):a()}})}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function $(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,o=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return o.next=o}}throw TypeError(typeof e+" is not iterable")}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,o){void 0===o&&(o=Promise);var a=new S(l(t,r,n,i),o);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=$,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(j),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],s=a.completion;if("root"===a.tryLoc)return i("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return i(a.catchLoc,!0);if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return i(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return i(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return(a.type=e,a.arg=t,o)?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;j(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:$(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rb}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}const r_="https://forkify-api.jonas.io/api/v2/recipes/",rw="4c021ba6-8cc1-4668-8a1e-450a788c369b",rk=async function(e,t){try{let r=t?fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}):fetch(e),n=await Promise.race([r,new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),i=await n.json();if(!n.ok)throw Error(`${i.message} (${n.status})`);return i}catch(e){throw e}},rE={recipe:{},search:{query:"",results:[],resultsPerPage:15,page:1},bookmarks:[]},rS=function(e){let{recipe:t}=e.data;return{id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,img:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients,...t.key&&{key:t.key}}},rO=async function(e){try{let t=await rk(`${r_}${e}?key=${rw}`);rE.recipe=rS(t),console.log(rE.recipe.ingredients),rE.bookmarks.some(t=>t.id===e)?rE.recipe.bookmarked=!0:rE.recipe.bookmarked=!1}catch(e){throw console.error(`${e} \u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}`),e}},rj=async function(e){try{rE.search.query=e;let t=await rk(`${r_}?search=${e}&key=${rw}`);rE.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,img:e.image_url,...e.key&&{key:e.key}})),rE.search.page=1,console.log(rE.search.results)}catch(e){throw console.error(`${e} \u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}`),e}},rL=function(e=rE.search.page){rE.search.page=e;let t=(e-1)*rE.search.resultsPerPage,r=e*rE.search.resultsPerPage;return rE.search.results.slice(t,r)},r$=function(e){rE.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rE.recipe.servings}),rE.recipe.servings=e},rM=function(){localStorage.setItem("bookmarks",JSON.stringify(rE.bookmarks))},rx=function(e){rE.bookmarks.push(e),e.id===rE.recipe.id&&(rE.recipe.bookmarked=!0),rM()},rP=function(e){let t=rE.bookmarks.findIndex(t=>t.id===e);rE.bookmarks.splice(t,1),e===rE.recipe.id&&(rE.recipe.bookmarked=!1),rM()};!function(){let e=localStorage.getItem("bookmarks");e&&(rE.bookmarks=JSON.parse(e))}(),console.log(rE.bookmarks);const rF=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingridient format! Please use the correct format ✋");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:+e.cookingTime,servings:+e.servings,ingredients:t},n=await rk(`${r_}?key=${rw}`,r);rE.recipe=rS(n),rx(rE.recipe)}catch(e){throw e}};var rT={};rT=new URL("icons.c5b0f01c.svg",import.meta.url).toString();class rN{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];r&&(e.isEqualNode(r)||e.firstChild?.nodeValue?.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value)))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
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
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}const rD=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof e)this.numerator=e,this.denominator=1;else if("string"==typeof e){var r,n,i=e.split(" ");if(i[0]&&(r=i[0]),i[1]&&(n=i[1]),r%1==0&&n&&n.match("/"))return new rD(r).add(new rD(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var o=r.split("/");this.numerator=o[0],this.denominator=o[1]}else{if("string"==typeof r&&r.match("."))return new rD(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()};rD.prototype.clone=function(){return new rD(this.numerator,this.denominator)},rD.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},rD.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},rD.prototype.add=function(e){var t=this.clone();return e=e instanceof rD?e.clone():new rD(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},rD.prototype.subtract=function(e){var t=this.clone();return e=e instanceof rD?e.clone():new rD(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},rD.prototype.multiply=function(e){var t=this.clone();if(e instanceof rD)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new rD(e));t.numerator*=e}return t.normalize()},rD.prototype.divide=function(e){var t=this.clone();if(e instanceof rD)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new rD(e));t.denominator*=e}return t.normalize()},rD.prototype.equals=function(e){e instanceof rD||(e=new rD(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},rD.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var i=rD.gcf(this.numerator,this.denominator);return this.numerator/=i,this.denominator/=i,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),rD.gcf=function(e,t){var r=[],n=rD.primeFactors(e),i=rD.primeFactors(t);return(n.forEach(function(e){var t=i.indexOf(e);t>=0&&(r.push(e),i.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},rD.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r};class rH extends rN{_parentElement=document.querySelector(".recipe");_errorMessage=`We couldn't find recipe. \u{1F972} Please try another one \u{1F355}`;_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--decrease-servings"),n=t.target.closest(".btn--increase-servings");r&&e(-1),n&&e(1)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
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
          <div class="recipe__quantity">${e.quantity?new rD(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
      </li>`}}var rq=new rH;class rI{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rR=new rI,rA=new class extends rN{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
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
          </li>`}};class rC extends rN{_parentElement=document.querySelector(".results");_errorMessage=`No recipes found for your query! Please try again \u{1F355}`;_message="";_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rU=new rC;class rW extends rN{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);console.log(t);let r=`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${b(rT)}#icon-arrow-right"></use>
            </svg>
          </button>`,n=`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${b(rT)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>`;return 1===e&&t>1?r:e===t&&t>1?n:e<t?r+n:""}}var rz=new rW;class rB extends rN{_parentElement=document.querySelector(".bookmarks");_errorMessage=`No bookmarks yet. Find a nice recipe and bookmark it \u{1F355}`;_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rA.render(e,!1)).join("")}}var rG=new rB;class rJ extends rN{_parentElement=document.querySelector(".upload");_message="Recipe was successfully upload!";_window=document.querySelector(".add-recipe-window");_overlay=document.querySelector(".overlay");_btnOpen=document.querySelector(".nav__btn--add-recipe");_btnClose=document.querySelector(".btn--close-modal");constructor(){super(),this._addHandlerShowWindow(),this._addHandlerHideWindow()}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}_addHandlerShowWindow(){this._btnOpen.addEventListener("click",this.toggleWindow.bind(this))}_addHandlerHideWindow(){this._btnClose.addEventListener("click",this.toggleWindow.bind(this)),this._overlay.addEventListener("click",this.toggleWindow.bind(this))}addHandlerUpload(e){this._parentElement.addEventListener("submit",function(t){t.preventDefault(),e(Object.fromEntries([...new FormData(this)]))})}_generateMarkup(){}}var rV=new rJ;document.querySelector(".recipe");const rY=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rq.renderSpinner(),rU.update(rL()),rG.update(rE.bookmarks),await rO(e),rq.render(rE.recipe)}catch(e){console.error(e),rq.renderError()}},rQ=async function(){try{rU.renderSpinner();let e=rR.getQuery();if(!e)return;await rj(e),rU.render(rL()),rz.render(rE.search),console.log(rE.search)}catch(e){console.log(e)}},rK=async function(e){try{rV.renderSpinner(),await rF(e),console.log(rE.recipe),rq.render(rE.recipe),rV.renderMessage(),rG.render(rE.bookmarks),window.history.pushState(null,"",`#${rE.recipe.id}`),setTimeout(function(){rV.toggleWindow()},2500)}catch(e){console.error(e),rV.renderError(e.message)}};rG.addHandlerRender(function(){rG.render(rE.bookmarks)}),rq.addHandlerRender(rY),rq.addHandlerUpdateServings(function(e){rE.recipe.servings+e>0&&r$(rE.recipe.servings+e),rq.update(rE.recipe)}),rq.addHandlerAddBookmark(function(){rE.recipe.bookmarked?rP(rE.recipe.id):rx(rE.recipe),rq.update(rE.recipe),rG.render(rE.bookmarks)}),rR.addHandlerSearch(rQ),rz.addHandlerClick(function(e){rU.render(rL(e)),rz.render(rE.search)}),rV.addHandlerUpload(rK);
//# sourceMappingURL=index.b10db608.js.map
