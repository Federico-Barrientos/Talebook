(function(e){function n(n){for(var o,a,s=n[0],l=n[1],p=n[2],c=0,f=[];c<s.length;c++)a=s[c],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);u&&u(n);while(f.length)f.shift()();return i.push.apply(i,p||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],o=!0,s=1;s<t.length;s++){var l=t[s];0!==r[l]&&(o=!1)}o&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var o={},r={app:0},i=[];function a(n){if(o[n])return o[n].exports;var t=o[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=o,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)a.d(t,o,function(n){return e[n]}.bind(null,o));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/Talebook/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=n,s=s.slice();for(var p=0;p<s.length;p++)n(s[p]);var u=l;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";t("85ec")},"2e5f":function(e,n,t){},5250:function(e,n,t){"use strict";t("2e5f")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var o=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"},on:{keypress:function(n){return e.handler(n)}}},[t("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"container"},[t("vue-plyr",[t("audio",{attrs:{controls:"",crossorigin:"",playsinline:""}},[t("source",{attrs:{src:"images/CinemaParadiso.mp3",type:"audio/mp3"}})])]),t("Flipbook",{ref:"flipbook",staticClass:"flipbook",attrs:{pages:e.isMobile?e.pagesMobile:e.pagesDesktop,perspective:5e3,canZoomIn:!1},on:{keypress:function(n){return e.handler(n)}}})],1)},s=[],l=t("8330"),p={name:"HelloWorld",props:{msg:String},components:{Flipbook:l["a"]},data:function(){return{pagesDesktop:[null,"images/cover.jpg","images/blank.png","images/Titulo.png","images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/countercover.gif"],pagesMobile:[null,"images/cover.jpg","images/Titulo.png","images/1.png","images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/countercover.gif"]}},mounted:function(){var e=this;window.addEventListener("keydown",(function(n){var t=e.$refs.flipbook;37==n.keyCode&&t.canFlipLeft&&t.flipLeft(),39==n.keyCode&&t.canFlipRight&&t.flipRight()}))},computed:{isMobile:function(){return window.innerWidth<842}},methods:{handler:function(e){console.log(e)},flipRight:function(){console.log("asd"),this.$refs.flipbook.flipRight()},flipLeft:function(){this.$refs.flipbook.flipLeft()}}},u=p,c=(t("5250"),t("2877")),f=Object(c["a"])(u,a,s,!1,null,"206258f8",null),g=f.exports,d={name:"App",components:{HelloWorld:g},methods:{handler:function(e){console.log(e)}}},m=d,b=(t("034f"),Object(c["a"])(m,r,i,!1,null,null,null)),h=b.exports,v=t("666c");t("373e");o["a"].config.productionTip=!1,o["a"].use(l["a"]),o["a"].use(v["a"],{plyr:{autoplay:!0,settings:["play","volume"]}}),new o["a"]({render:function(e){return e(h)}}).$mount("#app")},"85ec":function(e,n,t){}});
//# sourceMappingURL=app.a6dde204.js.map