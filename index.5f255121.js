var e,t,r,n,o,i,a,s,c,u,l,f,p,h,d,v,m,g,y=globalThis;function b(e){return e&&e.__esModule?e.default:e}var _={},w={},k=y.parcelRequire94c2;null==k&&((k=function(e){if(e in _)return _[e].exports;if(e in w){var t=w[e];delete w[e];var r={id:e,exports:{}};return _[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){w[e]=t},y.parcelRequire94c2=k),(0,k.register)("27Lyk",function(e,t){Object.defineProperty(e.exports,"register",{get:()=>r,set:e=>r=e,enumerable:!0,configurable:!0});var r,n=new Map;r=function(e,t){for(var r=0;r<t.length-1;r+=2)n.set(t[r],{baseUrl:e,path:t[r+1]})}}),k("27Lyk").register(new URL("",import.meta.url).toString(),JSON.parse('["f9fpV","index.5f255121.js","eyyUD","icons.c5b0f01c.svg"]'));var E={},S={},F=function(e){return e&&e.Math===Math&&e};S=F("object"==typeof globalThis&&globalThis)||F("object"==typeof window&&window)||F("object"==typeof self&&self)||F("object"==typeof y&&y)||F("object"==typeof S&&S)||function(){return this}()||Function("return this")();var O={},j={};O=!(j=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]});var L={},x={};x=!j(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var M=Function.prototype.call;L=x?M.bind(M):function(){return M.apply(M,arguments)};var P={}.propertyIsEnumerable,$=Object.getOwnPropertyDescriptor;i=$&&!P.call({1:2},1)?function(e){var t=$(this,e);return!!t&&t.enumerable}:P;var N={};N=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var T={},D={},I={},q=Function.prototype,H=q.call,R=x&&q.bind.bind(H,H),A={},C=(I=x?R:function(e){return function(){return H.apply(e,arguments)}})({}.toString),z=I("".slice);A=function(e){return z(C(e),8,-1)};var U=Object,B=I("".split);D=j(function(){return!U("z").propertyIsEnumerable(0)})?function(e){return"String"===A(e)?B(e,""):U(e)}:U;var G={},W={};W=function(e){return null==e};var J=TypeError;G=function(e){if(W(e))throw new J("Can't call method on "+e);return e},T=function(e){return D(G(e))};var V={},Y={},Q={},K={},X="object"==typeof document&&document.all;K=void 0===X&&void 0!==X?function(e){return"function"==typeof e||e===X}:function(e){return"function"==typeof e},Q=function(e){return"object"==typeof e?null!==e:K(e)};var Z={},ee={};ee=function(e,t){var r;return arguments.length<2?(r=S[e],K(r)?r:void 0):S[e]&&S[e][t]};var et={};et=I({}.isPrototypeOf);var er={},en={},eo={},ei={},ea=S.navigator,es=ea&&ea.userAgent;ei=es?String(es):"";var ec=S.process,eu=S.Deno,el=ec&&ec.versions||eu&&eu.version,ef=el&&el.v8;ef&&(s=(a=ef.split("."))[0]>0&&a[0]<4?1:+(a[0]+a[1])),!s&&ei&&(!(a=ei.match(/Edge\/(\d+)/))||a[1]>=74)&&(a=ei.match(/Chrome\/(\d+)/))&&(s=+a[1]),eo=s;var ep=S.String;er=(en=!!Object.getOwnPropertySymbols&&!j(function(){var e=Symbol("symbol detection");return!ep(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var eh=Object;Z=er?function(e){return"symbol"==typeof e}:function(e){var t=ee("Symbol");return K(t)&&et(t.prototype,eh(e))};var ed={},ev={},em={},eg=String;em=function(e){try{return eg(e)}catch(e){return"Object"}};var ey=TypeError;ev=function(e){if(K(e))return e;throw new ey(em(e)+" is not a function")},ed=function(e,t){var r=e[t];return W(r)?void 0:ev(r)};var eb={},e_=TypeError;eb=function(e,t){var r,n;if("string"===t&&K(r=e.toString)&&!Q(n=L(r,e))||K(r=e.valueOf)&&!Q(n=L(r,e))||"string"!==t&&K(r=e.toString)&&!Q(n=L(r,e)))return n;throw new e_("Can't convert object to primitive value")};var ew={},ek={},eE={};eE=!1;var eS={},eF=Object.defineProperty;eS=function(e,t){try{eF(S,e,{value:t,configurable:!0,writable:!0})}catch(r){S[e]=t}return t};var eO="__core-js_shared__",ej=ek=S[eO]||eS(eO,{});(ej.versions||(ej.versions=[])).push({version:"3.40.0",mode:eE?"pure":"global",copyright:"© 2014-2025 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.40.0/LICENSE",source:"https://github.com/zloirock/core-js"}),ew=function(e,t){return ek[e]||(ek[e]=t||{})};var eL={},ex={},eM=Object;ex=function(e){return eM(G(e))};var eP=I({}.hasOwnProperty);eL=Object.hasOwn||function(e,t){return eP(ex(e),t)};var e$={},eN=0,eT=Math.random(),eD=I(1..toString);e$=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eD(++eN+eT,36)};var eI=S.Symbol,eq=ew("wks"),eH=er?eI.for||eI:eI&&eI.withoutSetter||e$,eR=TypeError,eA=(eL(eq,e="toPrimitive")||(eq[e]=en&&eL(eI,e)?eI[e]:eH("Symbol."+e)),eq[e]);Y=function(e,t){if(!Q(e)||Z(e))return e;var r,n=ed(e,eA);if(n){if(void 0===t&&(t="default"),r=L(n,e,t),!Q(r)||Z(r))return r;throw new eR("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},V=function(e){var t=Y(e,"string");return Z(t)?t:t+""};var eC={},ez={},eU=S.document,eB=Q(eU)&&Q(eU.createElement);ez=function(e){return eB?eU.createElement(e):{}},eC=!O&&!j(function(){return 7!==Object.defineProperty(ez("div"),"a",{get:function(){return 7}}).a});var eG=Object.getOwnPropertyDescriptor;o=O?eG:function(e,t){if(e=T(e),t=V(t),eC)try{return eG(e,t)}catch(e){}if(eL(e,t))return N(!L(i,e,t),e[t])};var eW={},eJ={};eJ=O&&j(function(){return 42!==Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eV={},eY=String,eQ=TypeError;eV=function(e){if(Q(e))return e;throw new eQ(eY(e)+" is not an object")};var eK=TypeError,eX=Object.defineProperty,eZ=Object.getOwnPropertyDescriptor,e0="enumerable",e1="configurable",e2="writable";c=O?eJ?function(e,t,r){if(eV(e),t=V(t),eV(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e2 in r&&!r[e2]){var n=eZ(e,t);n&&n[e2]&&(e[t]=r.value,r={configurable:e1 in r?r[e1]:n[e1],enumerable:e0 in r?r[e0]:n[e0],writable:!1})}return eX(e,t,r)}:eX:function(e,t,r){if(eV(e),t=V(t),eV(r),eC)try{return eX(e,t,r)}catch(e){}if("get"in r||"set"in r)throw new eK("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eW=O?function(e,t,r){return c(e,t,N(1,r))}:function(e,t,r){return e[t]=r,e};var e4={},e7={},e3=Function.prototype,e6=O&&Object.getOwnPropertyDescriptor,e5=eL(e3,"name")&&(!O||O&&e6(e3,"name").configurable),e8={},e9=I(Function.toString);K(ek.inspectSource)||(ek.inspectSource=function(e){return e9(e)}),e8=ek.inspectSource;var te={},tt={},tr=S.WeakMap;tt=K(tr)&&/native code/.test(String(tr));var tn={},to=ew("keys");tn=function(e){return to[e]||(to[e]=e$(e))};var ti={};ti={};var ta="Object already initialized",ts=S.TypeError,tc=S.WeakMap;if(tt||ek.state){var tu=ek.state||(ek.state=new tc);tu.get=tu.get,tu.has=tu.has,tu.set=tu.set,u=function(e,t){if(tu.has(e))throw new ts(ta);return t.facade=e,tu.set(e,t),t},l=function(e){return tu.get(e)||{}},f=function(e){return tu.has(e)}}else{var tl=tn("state");ti[tl]=!0,u=function(e,t){if(eL(e,tl))throw new ts(ta);return t.facade=e,eW(e,tl,t),t},l=function(e){return eL(e,tl)?e[tl]:{}},f=function(e){return eL(e,tl)}}var tf=(te={set:u,get:l,has:f,enforce:function(e){return f(e)?l(e):u(e,{})},getterFor:function(e){return function(t){var r;if(!Q(t)||(r=l(t)).type!==e)throw new ts("Incompatible receiver, "+e+" required");return r}}}).enforce,tp=te.get,th=String,tv=Object.defineProperty,tm=I("".slice),tg=I("".replace),ty=I([].join),tb=O&&!j(function(){return 8!==tv(function(){},"length",{value:8}).length}),t_=String(String).split("String"),tw=e7=function(e,t,r){"Symbol("===tm(th(t),0,7)&&(t="["+tg(th(t),/^Symbol\(([^)]*)\).*$/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eL(e,"name")||e5&&e.name!==t)&&(O?tv(e,"name",{value:t,configurable:!0}):e.name=t),tb&&r&&eL(r,"arity")&&e.length!==r.arity&&tv(e,"length",{value:r.arity});try{r&&eL(r,"constructor")&&r.constructor?O&&tv(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tf(e);return eL(n,"source")||(n.source=ty(t_,"string"==typeof t?t:"")),e};Function.prototype.toString=tw(function(){return K(this)&&tp(this).source||e8(this)},"toString"),e4=function(e,t,r,n){n||(n={});var o=n.enumerable,i=void 0!==n.name?n.name:t;if(K(r)&&e7(r,i,n),n.global)o?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(o=!0):delete e[t]}catch(e){}o?e[t]=r:c(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var tk={},tE={},tS={},tF={},tO={},tj={},tL=Math.ceil,tx=Math.floor;tj=Math.trunc||function(e){var t=+e;return(t>0?tx:tL)(t)},tO=function(e){var t=+e;return t!=t||0===t?0:tj(t)};var tM=Math.max,tP=Math.min;tF=function(e,t){var r=tO(e);return r<0?tM(r+t,0):tP(r,t)};var t$={},tN={},tT=Math.min;tN=function(e){var t=tO(e);return t>0?tT(t,0x1fffffffffffff):0},t$=function(e){return tN(e.length)};var tD=function(e){return function(t,r,n){var o,i=T(t),a=t$(i);if(0===a)return!e&&-1;var s=tF(n,a);if(e&&r!=r){for(;a>s;)if((o=i[s++])!=o)return!0}else for(;a>s;s++)if((e||s in i)&&i[s]===r)return e||s||0;return!e&&-1}},tI={includes:tD(!0),indexOf:tD(!1)}.indexOf,tq=I([].push);tS=function(e,t){var r,n=T(e),o=0,i=[];for(r in n)!eL(ti,r)&&eL(n,r)&&tq(i,r);for(;t.length>o;)eL(n,r=t[o++])&&(~tI(i,r)||tq(i,r));return i};var tH=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");p=Object.getOwnPropertyNames||function(e){return tS(e,tH)},h=Object.getOwnPropertySymbols;var tR=I([].concat);tE=ee("Reflect","ownKeys")||function(e){var t=p(eV(e));return h?tR(t,h(e)):t},tk=function(e,t,r){for(var n=tE(t),i=0;i<n.length;i++){var a=n[i];eL(e,a)||r&&eL(r,a)||c(e,a,o(t,a))}};var tA={},tC=/#|\.prototype\./,tz=function(e,t){var r=tB[tU(e)];return r===tW||r!==tG&&(K(t)?j(t):!!t)},tU=tz.normalize=function(e){return String(e).replace(tC,".").toLowerCase()},tB=tz.data={},tG=tz.NATIVE="N",tW=tz.POLYFILL="P";tA=tz,E=function(e,t){var r,n,i,a,s,c=e.target,u=e.global,l=e.stat;if(r=u?S:l?S[c]||eS(c,{}):S[c]&&S[c].prototype)for(n in t){if(a=t[n],i=e.dontCallGetSet?(s=o(r,n))&&s.value:r[n],!tA(u?n:c+(l?".":"#")+n,e.forced)&&void 0!==i){if(typeof a==typeof i)continue;tk(a,i)}(e.sham||i&&i.sham)&&eW(a,"sham",!0),e4(r,n,a,e)}};var tJ={},tV={},tY=Function.prototype,tQ=tY.apply,tK=tY.call;tV="object"==typeof Reflect&&Reflect.apply||(x?tK.bind(tQ):function(){return tK.apply(tQ,arguments)});var tX={},tZ={},t0=(tZ=function(e){if("Function"===A(e))return I(e)})(tZ.bind);tX=function(e,t){return ev(e),void 0===t?e:x?t0(e,t):function(){return e.apply(t,arguments)}};var t1={};t1=ee("document","documentElement");var t2={};t2=I([].slice);var t4={},t7=TypeError;t4=function(e,t){if(e<t)throw new t7("Not enough arguments");return e};var t3={};t3=/(?:ipad|iphone|ipod).*applewebkit/i.test(ei);var t6={},t5={},t8=function(e){return ei.slice(0,e.length)===e};t6="NODE"===(t5=t8("Bun/")?"BUN":t8("Cloudflare-Workers")?"CLOUDFLARE":t8("Deno/")?"DENO":t8("Node.js/")?"NODE":S.Bun&&"string"==typeof Bun.version?"BUN":S.Deno&&"object"==typeof Deno.version?"DENO":"process"===A(S.process)?"NODE":S.window&&S.document?"BROWSER":"REST");var t9=S.setImmediate,re=S.clearImmediate,rt=S.process,rr=S.Dispatch,rn=S.Function,ro=S.MessageChannel,ri=S.String,ra=0,rs={},rc="onreadystatechange";j(function(){d=S.location});var ru=function(e){if(eL(rs,e)){var t=rs[e];delete rs[e],t()}},rl=function(e){return function(){ru(e)}},rf=function(e){ru(e.data)},rp=function(e){S.postMessage(ri(e),d.protocol+"//"+d.host)};t9&&re||(t9=function(e){t4(arguments.length,1);var t=K(e)?e:rn(e),r=t2(arguments,1);return rs[++ra]=function(){tV(t,void 0,r)},v(ra),ra},re=function(e){delete rs[e]},t6?v=function(e){rt.nextTick(rl(e))}:rr&&rr.now?v=function(e){rr.now(rl(e))}:ro&&!t3?(g=(m=new ro).port2,m.port1.onmessage=rf,v=tX(g.postMessage,g)):S.addEventListener&&K(S.postMessage)&&!S.importScripts&&d&&"file:"!==d.protocol&&!j(rp)?(v=rp,S.addEventListener("message",rf,!1)):v=rc in ez("script")?function(e){t1.appendChild(ez("script"))[rc]=function(){t1.removeChild(this),ru(e)}}:function(e){setTimeout(rl(e),0)});var rh=(tJ={set:t9,clear:re}).clear;E({global:!0,bind:!0,enumerable:!0,forced:S.clearImmediate!==rh},{clearImmediate:rh});var rd=tJ.set,rv={},rm=S.Function,rg=/MSIE .\./.test(ei)||"BUN"===t5&&((t=S.Bun.version.split(".")).length<3||"0"===t[0]&&(t[1]<3||"3"===t[1]&&"0"===t[2]));rv=function(e,t){var r=t?2:1;return rg?function(n,o){var i=t4(arguments.length,1)>r,a=K(n)?n:rm(n),s=i?t2(arguments,r):[],c=i?function(){tV(a,this,s)}:a;return t?e(c,o):e(c)}:e};var ry=S.setImmediate?rv(rd,!1):rd;E({global:!0,bind:!0,enumerable:!0,forced:S.setImmediate!==ry},{setImmediate:ry});var rb=function(e){var t,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(e,t,r){e[t]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,i){var a,s,c=Object.create((r&&r.prototype instanceof m?r:m).prototype);return o(c,"_invoke",{value:(a=new j(i||[]),s=p,function(r,o){if(s===h)throw Error("Generator is already running");if(s===d){if("throw"===r)throw o;return{value:t,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=function e(r,n){var o=n.method,i=r.iterator[o];if(i===t)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),v;var a=f(i,r.iterator,n.arg);if("throw"===a.type)return n.method="throw",n.arg=a.arg,n.delegate=null,v;var s=a.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(i,a);if(c){if(c===v)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(s===p)throw s=d,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);s=h;var u=f(e,n,a);if("normal"===u.type){if(s=a.done?d:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:a.done}}"throw"===u.type&&(s=d,a.method="throw",a.arg=u.arg)}})}),c}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",h="executing",d="completed",v={};function m(){}function g(){}function y(){}var b={};u(b,a,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(L([])));w&&w!==r&&n.call(w,a)&&(b=w);var k=y.prototype=m.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;o(this,"_invoke",{value:function(o,i){function a(){return new t(function(r,a){!function r(o,i,a,s){var c=f(e[o],e,i);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,a,s)},function(e){r("throw",e,a,s)}):t.resolve(l).then(function(e){u.value=e,a(u)},function(e){return r("throw",e,a,s)})}}(o,i,r,a)})}return r=r?r.then(a,a):a()}})}function F(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(F,this),this.reset(!0)}function L(e){if(null!=e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw TypeError(typeof e+" is not iterable")}return g.prototype=y,o(k,"constructor",{value:y,configurable:!0}),o(y,"constructor",{value:g,configurable:!0}),g.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then(function(e){return e.done?e.value:a.next()})},E(k),u(k,c,"Generator"),u(k,a,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=L,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return s.type="throw",s.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else if(u){if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return(a.type=e,a.arg=t,i)?(this.method="next",this.next=i.finallyLoc,v):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;O(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:L(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rb}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rb:Function("r","regeneratorRuntime = r")(rb)}const r_="https://forkify-api.jonas.io/api/v2/recipes/",rw=async function(e){try{let t=await Promise.race([fetch(e),new Promise(function(e,t){setTimeout(function(){t(Error("Request took too long! Timeout after 10 second"))},1e4)})]),r=await t.json();if(!t.ok)throw Error(`${r.message} (${t.status})`);return r}catch(e){throw e}},rk={recipe:{},search:{query:"",results:[],resultsPerPage:15,page:1},bookmarks:[]},rE=async function(e){try{let{recipe:t}=(await rw(`${r_}${e}`)).data;rk.recipe={id:t.id,title:t.title,publisher:t.publisher,sourceUrl:t.source_url,img:t.image_url,servings:t.servings,cookingTime:t.cooking_time,ingredients:t.ingredients},console.log(rk.recipe.ingredients),rk.bookmarks.some(t=>t.id===e)?rk.recipe.bookmarked=!0:rk.recipe.bookmarked=!1}catch(e){throw console.error(`${e} \u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}`),e}},rS=async function(e){try{rk.search.query=e;let t=await rw(`${r_}?search=${e}`);rk.search.results=t.data.recipes.map(e=>({id:e.id,title:e.title,publisher:e.publisher,img:e.image_url})),rk.search.page=1,console.log(rk.search.results)}catch(e){throw console.error(`${e} \u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}\u{1F6D1}`),e}},rF=function(e=rk.search.page){rk.search.page=e;let t=(e-1)*rk.search.resultsPerPage,r=e*rk.search.resultsPerPage;return rk.search.results.slice(t,r)},rO=function(e){rk.recipe.ingredients.forEach(t=>{t.quantity=t.quantity*e/rk.recipe.servings}),rk.recipe.servings=e},rj=function(){localStorage.setItem("bookmarks",JSON.stringify(rk.bookmarks))},rL=function(e){rk.bookmarks.push(e),e.id===rk.recipe.id&&(rk.recipe.bookmarked=!0),rj()},rx=function(e){let t=rk.bookmarks.findIndex(t=>t.id===e);rk.bookmarks.splice(t,1),e===rk.recipe.id&&(rk.recipe.bookmarked=!1),rj()};!function(){let e=localStorage.getItem("bookmarks");e&&(rk.bookmarks=JSON.parse(e))}(),console.log(rk.bookmarks);var rM={};rM=new URL("icons.c5b0f01c.svg",import.meta.url).toString();class rP{_data;render(e,t=!0){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let r=this._generateMarkup();if(!t)return r;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}update(e){this._data=e;let t=this._generateMarkup(),r=Array.from(document.createRange().createContextualFragment(t).querySelectorAll("*")),n=Array.from(this._parentElement.querySelectorAll("*"));r.forEach((e,t)=>{let r=n[t];r&&(e.isEqualNode(r)||e.firstChild?.nodeValue?.trim()===""||(r.textContent=e.textContent),e.isEqualNode(r)||Array.from(e.attributes).forEach(e=>r.setAttribute(e.name,e.value)))})}_clear(){this._parentElement.innerHTML=""}renderSpinner(){let e=`
            <div class="spinner">
            <svg>
              <use href="${b(rM)}#icon-loader"></use>
            </svg>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}renderError(e=this._errorMessage){let t=`<div class="error">
            <div>
              <svg>
                <use href="${b(rM)}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`<div class="error">
            <div>
              <svg>
                <use href="${b(rM)}#icon-smile"></use>
              </svg>
            </div>
            <p>${e}</p>
          </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}}(Fraction=function(e,t){if(void 0!==e&&t)"number"==typeof e&&"number"==typeof t?(this.numerator=e,this.denominator=t):"string"==typeof e&&"string"==typeof t&&(this.numerator=parseInt(e),this.denominator=parseInt(t));else if(void 0===t){if("number"==typeof(num=e))this.numerator=num,this.denominator=1;else if("string"==typeof num){var r,n,o=num.split(" ");if(o[0]&&(r=o[0]),o[1]&&(n=o[1]),r%1==0&&n&&n.match("/"))return new Fraction(r).add(new Fraction(n));if(!r||n)return;if("string"==typeof r&&r.match("/")){var i=r.split("/");this.numerator=i[0],this.denominator=i[1]}else{if("string"==typeof r&&r.match("."))return new Fraction(parseFloat(r));this.numerator=parseInt(r),this.denominator=1}}}this.normalize()}).prototype.clone=function(){return new Fraction(this.numerator,this.denominator)},Fraction.prototype.toString=function(){if("NaN"===this.denominator)return"NaN";var e=this.numerator/this.denominator>0?Math.floor(this.numerator/this.denominator):Math.ceil(this.numerator/this.denominator),t=this.numerator%this.denominator,r=this.denominator,n=[];return 0!=e&&n.push(e),0!=t&&n.push((0===e?t:Math.abs(t))+"/"+r),n.length>0?n.join(" "):0},Fraction.prototype.rescale=function(e){return this.numerator*=e,this.denominator*=e,this},Fraction.prototype.add=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator+=e.numerator,t.normalize()},Fraction.prototype.subtract=function(e){var t=this.clone();return e instanceof Fraction?e=e.clone():e=new Fraction(e),td=t.denominator,t.rescale(e.denominator),e.rescale(td),t.numerator-=e.numerator,t.normalize()},Fraction.prototype.multiply=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.numerator,t.denominator*=e.denominator;else{if("number"!=typeof e)return t.multiply(new Fraction(e));t.numerator*=e}return t.normalize()},Fraction.prototype.divide=function(e){var t=this.clone();if(e instanceof Fraction)t.numerator*=e.denominator,t.denominator*=e.numerator;else{if("number"!=typeof e)return t.divide(new Fraction(e));t.denominator*=e}return t.normalize()},Fraction.prototype.equals=function(e){e instanceof Fraction||(e=new Fraction(e));var t=this.clone().normalize(),e=e.clone().normalize();return t.numerator===e.numerator&&t.denominator===e.denominator},Fraction.prototype.normalize=(r=function(e){return"number"==typeof e&&(e>0&&e%1>0&&e%1<1||e<0&&e%-1<0&&e%-1>-1)},n=function(e,t){if(!t)return Math.round(e);var r=Math.pow(10,t);return Math.round(e*r)/r},function(){if(r(this.denominator)){var e=n(this.denominator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.denominator=Math.round(this.denominator*t),this.numerator*=t}if(r(this.numerator)){var e=n(this.numerator,9),t=Math.pow(10,e.toString().split(".")[1].length);this.numerator=Math.round(this.numerator*t),this.denominator*=t}var o=Fraction.gcf(this.numerator,this.denominator);return this.numerator/=o,this.denominator/=o,(this.numerator<0&&this.denominator<0||this.numerator>0&&this.denominator<0)&&(this.numerator*=-1,this.denominator*=-1),this}),Fraction.gcf=function(e,t){var r=[],n=Fraction.primeFactors(e),o=Fraction.primeFactors(t);return(n.forEach(function(e){var t=o.indexOf(e);t>=0&&(r.push(e),o.splice(t,1))}),0===r.length)?1:function(){var e,t=r[0];for(e=1;e<r.length;e++)t*=r[e];return t}()},Fraction.primeFactors=function(e){for(var t=Math.abs(e),r=[],n=2;n*n<=t;)t%n==0?(r.push(n),t/=n):n++;return 1!=t&&r.push(t),r},Fraction;class r$ extends rP{_parentElement=document.querySelector(".recipe");_errorMessage=`We couldn't find recipe. \u{1F972} Please try another one \u{1F355}`;_message="";addHandlerRender(e){["hashchange","load"].forEach(t=>window.addEventListener(t,e))}addHandlerUpdateServings(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--decrease-servings"),n=t.target.closest(".btn--increase-servings");r&&e(-1),n&&e(1)})}addHandlerAddBookmark(e){this._parentElement.addEventListener("click",function(t){t.target.closest(".btn--bookmark")&&e()})}_generateMarkup(){return`<figure class="recipe__fig">
      <img src="${this._data.img}" alt="Tomato" class="recipe__img" />
      <h1 class="recipe__title">
        <span>${this._data.title}</span>
      </h1>
      </figure>
      
      <div class="recipe__details">
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${b(rM)}#icon-clock"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--minutes">${this._data.cookingTime}</span>
        <span class="recipe__info-text">minutes</span>
      </div>
      <div class="recipe__info">
        <svg class="recipe__info-icon">
          <use href="${b(rM)}#icon-users"></use>
        </svg>
        <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
        <span class="recipe__info-text">servings</span>
  
        <div class="recipe__info-buttons">
          <button class="btn--tiny btn--decrease-servings">
            <svg>
              <use href="${b(rM)}#icon-minus-circle"></use>
            </svg>
          </button>
          <button class="btn--tiny btn--increase-servings">
            <svg>
              <use href="${b(rM)}#icon-plus-circle"></use>
            </svg>
          </button>
        </div>
      </div>
  
      <div class="recipe__user-generated">
      </div>
      <button class="btn--round btn--bookmark">
        <svg class="">
          <use href="${b(rM)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
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
          <use href="${b(rM)}#icon-arrow-right"></use>
        </svg>
      </a>
      </div>`}_generateMarkupIngredient(e){return`
      <li class="recipe__ingredient">
          <svg class="recipe__icon">
            <use href="${b(rM)}#icon-check"></use>
          </svg>
          <div class="recipe__quantity">${e.quantity?new Fraction(e.quantity).toString():""}</div>
          <div class="recipe__description">
            <span class="recipe__unit">${e.unit}</span>
            ${e.description}
          </div>
      </li>`}}var rN=new r$;class rT{_parentEl=document.querySelector(".search");getQuery(){let e=this._parentEl.querySelector(".search__field").value;return this._clearInput(),e}_clearInput(){this._parentEl.querySelector(".search__field").value=""}addHandlerSearch(e){this._parentEl.addEventListener("submit",function(t){t.preventDefault(),e()})}}var rD=new rT,rI=new class extends rP{_parentElement="";_generateMarkup(){let e=window.location.hash.slice(1);return`<li class="preview">
            <a class="preview__link ${this._data.id===e?"preview__link--active":""}" href="#${this._data.id}">
              <figure class="preview__fig">
                <img src="${this._data.img}" alt="${this._data.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${this._data.title}</h4>
                <p class="preview__publisher">${this._data.publisher}</p>
              </div>
            </a>
          </li>`}};class rq extends rP{_parentElement=document.querySelector(".results");_errorMessage=`No recipes found for your query! Please try again \u{1F355}`;_message="";_generateMarkup(){return this._data.map(e=>rI.render(e,!1)).join("")}}var rH=new rq;class rR extends rP{_parentElement=document.querySelector(".pagination");addHandlerClick(e){this._parentElement.addEventListener("click",function(t){let r=t.target.closest(".btn--inline");r&&e(+r.dataset.goto)})}_generateMarkup(){let e=this._data.page,t=Math.ceil(this._data.results.length/this._data.resultsPerPage);console.log(t);let r=`<button data-goto="${e+1}" class="btn--inline pagination__btn--next">
            <span>Page ${e+1}</span>
            <svg class="search__icon">
              <use href="${b(rM)}#icon-arrow-right"></use>
            </svg>
          </button>`,n=`<button data-goto="${e-1}" class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${b(rM)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e-1}</span>
          </button>`;return 1===e&&t>1?r:e===t&&t>1?n:e<t?r+n:""}}var rA=new rR;class rC extends rP{_parentElement=document.querySelector(".bookmarks");_errorMessage=`No bookmarks yet. Find a nice recipe and bookmark it \u{1F355}`;_message="";addHandlerRender(e){window.addEventListener("load",e)}_generateMarkup(){return this._data.map(e=>rI.render(e,!1)).join("")}}var rz=new rC;document.querySelector(".recipe");const rU=async function(){try{let e=window.location.hash.slice(1);if(!e)return;rN.renderSpinner(),rH.update(rF()),rz.update(rk.bookmarks),await rE(e),rN.render(rk.recipe)}catch(e){console.error(e),rN.renderError()}},rB=async function(){try{rH.renderSpinner();let e=rD.getQuery();if(!e)return;await rS(e),rH.render(rF()),rA.render(rk.search),console.log(rk.search)}catch(e){console.log(e)}};rz.addHandlerRender(function(){rz.render(rk.bookmarks)}),rN.addHandlerRender(rU),rN.addHandlerUpdateServings(function(e){rk.recipe.servings+e>0&&rO(rk.recipe.servings+e),rN.update(rk.recipe)}),rN.addHandlerAddBookmark(function(){rk.recipe.bookmarked?rx(rk.recipe.id):rL(rk.recipe),rN.update(rk.recipe),rz.render(rk.bookmarks)}),rD.addHandlerSearch(rB),rA.addHandlerClick(function(e){rH.render(rF(e)),rA.render(rk.search)});
//# sourceMappingURL=index.5f255121.js.map
