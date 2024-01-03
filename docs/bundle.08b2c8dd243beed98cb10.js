/*! For license information please see bundle.08b2c8dd243beed98cb10.js.LICENSE.txt */
!function(){"use strict";var e,t,r,n={7:function(e,t,r){var n=r(294),o=r(745),i=r(655),a=r(858),l=r(335),c=function(){return n.createElement(n.Fragment,null)},u=((0,n.createContext)({}),function(){return n.createElement(n.Fragment,null,n.createElement(l.j3,null),n.createElement(c,null))});function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var p=function(){var e=s((0,n.useState)(Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)),2),t=e[0],r=e[1],o={isMobile:t<=425,isTab:t>425&&t<769,isLaptop:t>768&&t<1440,isDesktop:t>=1440};return(0,n.useEffect)((function(){var e=m.bind(undefined,r);return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),(0,n.useEffect)((function(){o.isMobile=t<=425,o.isTab=t>425&&t<769,o.isLaptop=t>768&&t<1440,o.isDesktop=t>1440}),[t]),o};function m(e,t){e(Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth))}var d=r(989),b="#ffb75e",h="#181818",y={position:"absolute",top:0,left:0,width:"100%",height:"100%"};function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e){var t={flex:"0 0 43%",width:"50%",fontSize:"2.68rem",textAlign:"center",zIndex:1};return(e.isLaptop||e.isTab||e.isMobile)&&(t=v(v({},t),{},{fontSize:"2rem"})),(e.isTab||e.isMobile)&&(t=v(v({},t),{},{fontSize:"1.5rem"})),e.isMobile&&(t=v(v({},t),{},{fontSize:"1rem",width:"80%",marginTop:10})),t}function E(e){var t={zIndex:1,fontSize:"2rem",color:b,position:"relative","::before":{content:'""',position:"absolute",width:"100%",height:"2px",backgroundColor:b,bottom:-1}};return(e.isLaptop||e.isTab||e.isMobile)&&(t=v({},t)),(e.isTab||e.isMobile)&&(t=v(v({},t),{},{fontSize:"1.5rem"})),e.isMobile&&(t=v(v({},t),{},{fontSize:"0.9rem"})),t}function x(e){var t=e.urlObj,r=e.modClass;return t.pngUrl||t.svgUrl?r||"":"loading-img ".concat(r||"")}var j=r(977),T=r(440),S=r(271),M=(0,j.ZF)({apiKey:"AIzaSyB2n72DodslcBkFrpTLyGb7D4u5t3T1nUc",databaseURL:"https://testtaskfl-default-rtdb.europe-west1.firebasedatabase.app/",storageBucket:"gs://testtaskfl.appspot.com"}),P=((0,T.uJ)(M,{persistence:T.a$}),(0,S.cF)(M));function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",l=o.toStringTag||"@@toStringTag";function c(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(e){c=function(e,t,r){return e[t]=r}}function u(e,t,r,o){var i=t&&t.prototype instanceof p?t:p,a=Object.create(i.prototype),l=new T(o||[]);return n(a,"_invoke",{value:O(e,r,l)}),a}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var f={};function p(){}function m(){}function d(){}var b={};c(b,i,(function(){return this}));var h=Object.getPrototypeOf,y=h&&h(h(S([])));y&&y!==t&&r.call(y,i)&&(b=y);var g=d.prototype=p.prototype=Object.create(b);function v(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function w(e,t){function o(n,i,a,l){var c=s(e[n],e,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==k(f)&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){o("next",e,a,l)}),(function(e){o("throw",e,a,l)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return o("throw",e,a,l)}))}l(c.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function O(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return M()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var l=E(a,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var n=s(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,f;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function j(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function S(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:M}}function M(){return{value:void 0,done:!0}}return m.prototype=d,n(g,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:m,configurable:!0}),m.displayName=c(d,l,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,c(e,l,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},v(w.prototype),c(w.prototype,a,(function(){return this})),e.AsyncIterator=w,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new w(u(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},v(g),c(g,l,"Generator"),c(g,i,(function(){return this})),c(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=S,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(l&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),j(r),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:S(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},e}function D(e,t,r,n,o,i,a){try{var l=e[i](a),c=l.value}catch(e){return void r(e)}l.done?t(c):Promise.resolve(c).then(n,o)}function I(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var i=e.apply(t,r);function a(e){D(i,n,o,a,l,"next",e)}function l(e){D(i,n,o,a,l,"throw",e)}a(void 0)}))}}var z=function(e){var t=e.imageName,r=e.imageType,n=e.sourseMod,o=e.svg,i="".concat(r,"/webp/").concat(t,".webp"),a="".concat(r,"/png/").concat(t,".png"),l="".concat(r,"/svg/").concat(t,".svg");return C(o?{pathSvg:l}:n?{pathWebp:i,pathPng:a}:{pathPng:a})};function C(e){return _.apply(this,arguments)}function _(){return(_=I(L().mark((function e(t){var r,n,o,i,a,l;return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.pathPng,n=t.pathSvg,o=t.pathWebp,i="err",a="err",l="err",!n){e.next=10;break}return e.next=7,(0,S.Jt)((0,S.iH)(P,n)).then((function(e){return l=e})).catch((function(e){return l="err"}));case 7:return e.next=9,(0,S.Jt)((0,S.iH)(P,n)).then((function(e){return l=e})).catch((function(e){return l="err"}));case 9:return e.abrupt("return",{svgUrl:l});case 10:if(!o){e.next=18;break}return e.next=13,(0,S.Jt)((0,S.iH)(P,o)).then((function(e){return i=e})).catch((function(e){return i="err"}));case 13:return e.next=15,(0,S.Jt)((0,S.iH)(P,r)).then((function(e){return a=e})).catch((function(e){return a="err"}));case 15:return e.abrupt("return",{webpUrl:i,pngUrl:a});case 18:if(!r){e.next=22;break}return e.next=21,(0,S.Jt)((0,S.iH)(P,r)).then((function(e){return a=e})).catch((function(e){return a="err"}));case 21:return e.abrupt("return",{pngUrl:a});case 22:return e.abrupt("return",{});case 23:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var Z=["imageType","imageName","sourseMod","svg"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},N.apply(this,arguments)}function W(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,l=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{a||null==r.return||r.return()}finally{if(l)throw o}}return i}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return U(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return U(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function A(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var B=n.memo((function(e){var t=e.imageType,r=e.imageName,o=e.sourseMod,i=e.svg,a=A(e,Z),l=W((0,n.useState)({webpUrl:"",pngUrl:"",svgUrl:""}),2),c=l[0],u=l[1];return(0,n.useEffect)((function(){var e=function(e){return e.then((function(e){return u(e)}))};void 0!==o&&e(z({imageType:t,imageName:r,sourseMod:o}));i&&e(z({imageType:t,imageName:r,svg:i}))}),[]),"err"===c.pngUrl?n.createElement("picture",N({},a,{className:"errorDownload ".concat(a.className||"")}),n.createElement("div",{className:"img-mask"}),n.createElement("img",{style:{width:"100%"},src:c.pngUrl,alt:""})):n.createElement("picture",N({},a,{className:x({urlObj:c,modClass:a.className})}),n.createElement("div",{className:"img-mask"}),o?n.createElement("source",{srcSet:c.webpUrl}):"",n.createElement("img",{src:i?c.svgUrl:c.pngUrl,alt:""}))})),F=function(){var e=function(){var e=p();return{Container:d.Z.div({display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",position:"relative",padding:e.isMobile?"9rem 0":"16rem 0",color:"#fff",backgroundColor:"#4E4E4E",fontFamily:"Days One, sans-serif",gap:20}),Title:d.Z.div(O(e)),Text:d.Z.span(E(e)),Background:d.Z.div(v(v({},y),{},{zIndex:0,".loading-img":{backgroundColor:"#00000000"}})),size:e}}(),t=e.Container,r=e.Title,o=e.Text,i=e.Background,a=e.size;return n.createElement(t,null,n.createElement(r,null,"ВЫБЕРИТЕ НАДЁЖНЫЕ ",n.createElement("br",null)," ИНВЕСТИЦИИ И СТАНЬТЕ",n.createElement("br",null)," ВЛАДЕЛЬЦЕМ МИНИ-КОТЕДЖА"),n.createElement(o,null,"ИНВЕСТИЦИИ В ВИДЕ ПОКУПКИ ДОМА"),n.createElement(i,null,n.createElement(B,{imageName:a.isMobile?"previewMobile":"preview",imageType:"image",sourseMod:!0})))};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){H(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function H(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function J(e){var t={display:"flex"};return(e.isTab||e.isMobile)&&(t=G(G({},t),{},{flexDirection:"column"})),t}function Y(e){var t={backgroundColor:"#ffffffda",padding:30,border:"1px solid ".concat(b),borderLeft:"4px solid ".concat(h),fontSize:"1.25rem",fontWeight:500};return e.isLaptop&&(t=G(G({},t),{},{fontSize:"1rem",padding:"20px"})),e.isMobile&&(t=G(G({},t),{},{fontSize:"0.7rem",padding:"10px",width:"100%"})),t}var $=function(){var e=function(){var e=p();return{Container:d.Z.div({margin:"0 auto",width:e.isMobile?"90%":"80%",color:h}),Title:d.Z.div({fontSize:e.isDesktop?"1.75rem":e.isMobile?"1rem":"1.5rem",fontWeight:700,fontFamily:"Days One, sans-serif",marginBottom:e.isMobile?"30px":"75px",width:e.isDesktop?"50%":"70%"}),Main:d.Z.div(J(e)),Left:d.Z.div({flex:"0 0 50%",display:"flex",flexDirection:"column",gap:e.isMobile||e.isTab?"2rem":"5rem",marginBottom:e.isMobile||e.isTab?"2rem":0}),Right:d.Z.div({flex:"0 0 50%",display:"flex",justifyContent:e.isMobile||e.isTab?"start":"end",alignItems:"center"}),Item:d.Z.div({width:"80%",aspectRatio:"2/1",position:"relative"}),Text:d.Z.div(G({},Y(e))),ItemText:d.Z.div(G(G({},y),{},{top:"35%",left:e.isMobile||e.isTab?"24%":"53%",height:"fit-content",minHeight:"70%",width:"86%",display:"flex",alignItems:"center"},Y(e))),size:e}}(),t=e.Container,r=e.Title,o=e.Main,i=e.Left,a=e.Right,l=e.Item,c=e.Text,u=e.ItemText,s=e.size;return n.createElement(t,null,n.createElement(r,null,"Коттеджный посёлок «Грин Лаундж» – проект с уникальным характером"),n.createElement(o,null,n.createElement(i,null,n.createElement(l,null,n.createElement(B,{imageName:"info1",imageType:"image",sourseMod:!1}),n.createElement(u,null,"12 домов, объединенных единой стилистикой и философией, в которой комфорт становится исключительным приоритетом")),n.createElement(c,null,"Концепция «Грин Лаундж», в том числе архитектурные и интерьерные решения, наличие разнообразных объектов инфраструктуры внутри поселка была принята с учётом выгодного месторасположения, большой территории застройки, прекрасных видовых характеристик места и ориентации на требовательного покупателя.")),n.createElement(a,null,n.createElement(l,{style:s.isMobile||s.isTab?{}:{height:"13rem",width:"71%"}},n.createElement(B,{imageName:"info2",imageType:"image",sourseMod:!1}),n.createElement(u,{style:s.isMobile||s.isTab?{}:{right:"53%",left:"auto"}},"Коттеджный поселок расположен в 62 км к северо-западу от Москвы, на живописном берегу Истринского водохранилища"," ")))))};function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){V(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function V(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Q=function(){var e,t=(e=p(),{Container:d.Z.div({display:"flex",justifyContent:e.isMobile||e.isTab?"center":"flex-end",position:"relative",color:"#fff"}),Left:d.Z.div({flex:e.isTab?"0 0 90%":e.isMobile?"0 0 100%":"0 0 55%",zIndex:1,display:"flex",flexDirection:"column",gap:e.isDesktop?40:20,padding:e.isDesktop?"2rem 0":e.isMobile?"1.5rem":"1rem 0"}),Title:d.Z.div({fontFamily:"Days One, sans-serif",fontSize:e.isDesktop?"1.375rem":e.isLaptop?"1.125rem":"1rem",textTransform:"uppercase"}),InfoBox:d.Z.div({display:"flex",borderLeft:"2px solid ".concat(b),borderRight:"2px solid ".concat(b),width:"fit-content",margin:e.isMobile||e.isTab?"0 auto":0}),Info:d.Z.div({borderRight:"2px solid ".concat(b),padding:e.isMobile?"0.5rem":"0.5rem 3rem 1.25rem",display:"flex",flexDirection:"column",alignItems:"center",gap:e.isMobile?8:15,maxWidth:"20rem",fontWeight:500,":nth-last-child(1)":{border:"none"}}),Right:d.Z.div({flex:"0 0 36%",zIndex:1,position:"relative",display:e.isMobile||e.isTab?"none":"block"}),ImageBox:d.Z.div({position:"absolute",bottom:"-10%",right:0,height:"150%",":after":{content:'""',position:"absolute",width:e.isLaptop?"25rem ":"31.125rem",left:e.isLaptop?"10%":0,top:e.isLaptop?"10%":"-10%",aspectRatio:"1/0.6",backgroundColor:b,borderRadius:"50%",filter:"blur(100px)",zIndex:-1}}),InfoTitle:d.Z.div({fontSize:e.isDesktop?"1.75rem":e.isMobile?"1rem":"1.25rem",span:{fontSize:e.isDesktop?"2.5rem":e.isMobile?"1.25rem":"1.75rem",color:b,textTransform:"uppercase"}}),InfoText:d.Z.div({fontSize:e.isDesktop?"1.125rem":e.isMobile?"0.6rem":"1rem",textTransform:"uppercase",textAlign:"center"}),Background:d.Z.div(q(q({},y),{},{zIndex:0})),size:e}),r=t.Container,o=t.Left,i=t.Title,a=t.InfoBox,l=t.Info,c=t.Right,u=t.ImageBox,s=t.InfoTitle,f=t.InfoText,m=t.Background;return n.createElement(r,null,n.createElement(o,null,n.createElement(i,null,"«Грин Лаундж» — ваш ключ к жизни, к пассивному доходу и незабываемым моментам счастья"),n.createElement(a,null,n.createElement(l,null,n.createElement(s,null,n.createElement("span",null,"76")," Га"),n.createElement(f,null,"Территория")),n.createElement(l,null,n.createElement(s,null,n.createElement("span",null,"12")),n.createElement(f,null,"новых мини-коттеджей")))),n.createElement(c,null,n.createElement(u,null,n.createElement(B,{imageName:"lineHouse",imageType:"image",sourseMod:!1}))),n.createElement(m,null,n.createElement(B,{imageName:"lineBackground",imageType:"image",sourseMod:!0})))};function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function re(e,t){var r={display:"flex",gap:t.isMobile||t.isTab?30:50,padding:t.isMobile?"10px":"15px",color:"#fff",textTransform:"uppercase",fontSize:t.isDesktop?"1.5rem":t.isMobile?"0.75rem":"1rem",fontFamily:"Days One, sans-serif",marginBottom:t.isMobile?7:0};return"orange"===e&&(r=ee(ee({},r),{},{transform:"translate(-5%)",minWidth:"110%",width:"150em"})),"yellow"===e&&(r=ee(ee({},r),{},{justifyContent:t.isMobile||t.isTab?"":"space-around",transform:t.isMobile||t.isTab?"translate(-5%)":"",minWidth:t.isMobile||t.isTab?"110%":"100%",width:t.isMobile||t.isTab?"150em":"100%"})),r}var ne=function(){var e,t=(e=p(),{OrangeLine:d.Z.div(re("orange",e)),YellowRed:d.Z.div(re("yellow",e)),size:e}),r=t.OrangeLine,o=t.YellowRed;return n.createElement("div",null,n.createElement(r,{style:{backgroundColor:b}},n.createElement("span",null,"успейте купить до конца октября 2023 года по Акции"),n.createElement("span",null,"успейте купить до конца октября 2023 года по Акции"),n.createElement("span",null,"успейте купить до конца октября 2023 года по Акции")),n.createElement(o,{style:{backgroundColor:"#FFCB46"}},n.createElement("span",null,"Ваши надежные инвестиции"),n.createElement("span",null,"Ваши надежные инвестиции"),n.createElement("span",null,"Ваши надежные инвестиции")))},oe=function(){var e,t=(e=p(),{Container:d.Z.div({height:"fit-content",display:"flex",flexDirection:"column",gap:e.isMobile||e.isTab?"2rem":"5.3rem"}),size:e}).Container;return n.createElement(t,null,n.createElement(F,null),n.createElement($,null),n.createElement(Q,null),n.createElement(ne,null))},ie=function(){return n.createElement(l.Z5,null,n.createElement(l.AW,{path:"/",element:n.createElement(u,null)},n.createElement(l.AW,{index:!0,element:n.createElement(oe,null)})))},ae=r(791),le=r(168),ce=(0,ae.UY)({}),ue=(0,le.xC)({reducer:ce}),se=r(155),fe=document.querySelector("#wrap");(0,o.s)(fe).render(n.createElement(i.VK,{basemname:"/".concat(se.env.PUBLIC_URL)},n.createElement(a.zt,{store:ue},n.createElement(ie,null))))}},o={};function i(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,i),r.exports}i.m=n,e=[],i.O=function(t,r,n,o){if(!r){var a=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],o=e[s][2];for(var l=!0,c=0;c<r.length;c++)(!1&o||a>=o)&&Object.keys(i.O).every((function(e){return i.O[e](r[c])}))?r.splice(c--,1):(l=!1,o<a&&(a=o));if(l){e.splice(s--,1);var u=n();void 0!==u&&(t=u)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]},r=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);i.r(o);var a={};t=t||[null,r({}),r([]),r(r)];for(var l=2&n&&e;"object"==typeof l&&!~t.indexOf(l);l=r(l))Object.getOwnPropertyNames(l).forEach((function(t){a[t]=function(){return e[t]}}));return a.default=function(){return e},i.d(o,a),o},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={179:0};i.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,a=r[0],l=r[1],c=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(c)var s=c(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(s)},r=self.webpackChunkwebpack_to_study=self.webpackChunkwebpack_to_study||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var a=i.O(void 0,[761],(function(){return i(7)}));a=i.O(a)}();