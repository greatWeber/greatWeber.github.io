webpackJsonp([1],{"/3hk":function(t,e){},"/x4R":function(t,e){},"9pbN":function(t,e,n){"use strict";var o={props:{title:String},methods:{back:function(){this.$router.back()}}},i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"header"},[e("p",{staticClass:"back",on:{click:this.back}},[e("i",{staticClass:"iconfont load-back"})]),this._v(" "),e("h1",{staticClass:"title"},[this._v(this._s(this.title))])])},staticRenderFns:[]};var r=n("VU/8")(o,i,!1,function(t){n("/3hk")},"data-v-121fcf12",null);e.a=r.exports},JDZR:function(t,e){},TQvf:function(t,e,n){
/*!
 * clipboard.js v2.0.4
 * https://zenorocha.github.io/clipboard.js
 * 
 * Licensed MIT © Zeno Rocha
 */
var o;o=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),r=c(n(1)),a=c(n(3)),s=c(n(4));function c(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var o=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return o.resolveOptions(n),o.listenClick(t),o}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,a.default),i(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof t.action?t.action:this.defaultAction,this.target="function"==typeof t.target?t.target:this.defaultTarget,this.text="function"==typeof t.text?t.text:this.defaultText,this.container="object"===o(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=(0,s.default)(t,"click",function(t){return e.onClick(t)})}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new r.default({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return u("action",t)}},{key:"defaultTarget",value:function(t){var e=u("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return u("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"==typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach(function(t){n=n&&!!document.queryCommandSupported(t)}),n}}]),e}();function u(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}t.exports=l},function(t,e,n){"use strict";var o,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),a=n(2),s=(o=a)&&o.__esModule?o:{default:o};var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.resolveOptions(e),this.initSelection()}return r(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=(0,s.default)(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=(0,s.default)(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==(void 0===t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}();t.exports=c},function(t,e){t.exports=function(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var o=window.getSelection(),i=document.createRange();i.selectNodeContents(t),o.removeAllRanges(),o.addRange(i),e=o.toString()}return e}},function(t,e){function n(){}n.prototype={on:function(t,e,n){var o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var o=this;function i(){o.off(t,i),e.apply(n,arguments)}return i._=e,this.on(t,i,n)},emit:function(t){for(var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),o=0,i=n.length;o<i;o++)n[o].fn.apply(n[o].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),o=n[t],i=[];if(o&&e)for(var r=0,a=o.length;r<a;r++)o[r].fn!==e&&o[r].fn._!==e&&i.push(o[r]);return i.length?n[t]=i:delete n[t],this}},t.exports=n},function(t,e,n){var o=n(5),i=n(6);t.exports=function(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!o.string(e))throw new TypeError("Second argument must be a String");if(!o.fn(n))throw new TypeError("Third argument must be a Function");if(o.node(t))return function(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}(t,e,n);if(o.nodeList(t))return function(t,e,n){return Array.prototype.forEach.call(t,function(t){t.addEventListener(e,n)}),{destroy:function(){Array.prototype.forEach.call(t,function(t){t.removeEventListener(e,n)})}}}(t,e,n);if(o.string(t))return function(t,e,n){return i(document.body,t,e,n)}(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"==typeof t||t instanceof String},e.fn=function(t){return"[object Function]"===Object.prototype.toString.call(t)}},function(t,e,n){var o=n(7);function i(t,e,n,i,r){var a=function(t,e,n,i){return function(n){n.delegateTarget=o(n.target,e),n.delegateTarget&&i.call(t,n)}}.apply(this,arguments);return t.addEventListener(n,a,r),{destroy:function(){t.removeEventListener(n,a,r)}}}t.exports=function(t,e,n,o,r){return"function"==typeof t.addEventListener?i.apply(null,arguments):"function"==typeof n?i.bind(null,document).apply(null,arguments):("string"==typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,function(t){return i(t,e,n,o,r)}))}},function(t,e){var n=9;if("undefined"!=typeof Element&&!Element.prototype.matches){var o=Element.prototype;o.matches=o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector}t.exports=function(t,e){for(;t&&t.nodeType!==n;){if("function"==typeof t.matches&&t.matches(e))return t;t=t.parentNode}}}])},t.exports=o()},dzkY:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("9pbN"),i=n("qTv8"),r=n("TQvf"),a=n.n(r),s={components:{loadHead:o.a,loadBtn:i.a},data:function(){return{index:1,show:!1,code:""}},mounted:function(){this.code=this.$refs.code.innerHTML,new a.a(".copy")},methods:{change:function(t){this.index==t?this.index=0:this.index=t},openLoad:function(){this.$loading.open("加载中.....","type-one")},closeLoad:function(){this.$loading.close()}}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"loading"}},[n("load-head",{attrs:{title:"加载样式-01"}}),t._v(" "),n("h2",{staticClass:"line",on:{click:function(e){return t.change(1)}}},[t._v("纯样式展示:")]),t._v(" "),1==t.index?n("div",{ref:"code",staticClass:"content"},[t._m(0),t._v(" "),n("div",{staticClass:"codebox-wrapper"},[n("textarea",{staticClass:"codebox",attrs:{id:"code",readonly:""},domProps:{value:t.code}}),t._v(" "),n("span",{staticClass:"copy",attrs:{"data-clipboard-target":"#code"}},[t._v("copy")])])]):t._e(),t._v(" "),n("h2",{staticClass:"line",on:{click:function(e){return t.change(2)}}},[t._v("js调用:")]),t._v(" "),2==t.index?n("div",{staticClass:"content"},[n("load-btn",{attrs:{value:"js调用:(open)"},on:{btn:t.openLoad}}),t._v(" "),n("load-btn",{attrs:{value:"js调用:(close)"},on:{btn:t.closeLoad}}),t._v(" "),t._m(1)],1):t._e(),t._v(" "),n("h2",{staticClass:"line",on:{click:function(e){return t.change(3)}}},[t._v("vue组件调用:")]),t._v(" "),3==t.index?n("div",{staticClass:"content"},[n("load-btn",{attrs:{value:"调用vue组件"},on:{btn:function(e){t.show=!t.show}}}),t._v(" "),n("type-one-loading",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{title:"加载中.."}}),t._v(" "),t._m(2)],1):t._e()],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"type-one-loading flex flex-colmun align-center"},[n("div",{staticClass:" flex-item flex align-center"},[n("div",{staticClass:"type-one-loading__wrapper"},[n("p",{staticClass:"type-one-loading-p type-one-loading-p_1"}),t._v(" "),n("p",{staticClass:"type-one-loading-p type-one-loading-p_2"}),t._v(" "),n("p",{staticClass:"type-one-loading-p type-one-loading-p_3"}),t._v(" "),n("p",{staticClass:"type-one-loading-p type-one-loading-p_4"}),t._v(" "),n("p",{staticClass:"type-one-loading-p type-one-loading-p_5"}),t._v(" "),n("p",{staticClass:"type-one-loading-p type-one-loading-p_6"}),t._v(" "),n("p",{staticClass:"type-one-loading-p type-one-loading-p_7"}),t._v(" "),n("p",{staticClass:"type-one-loading-p type-one-loading-p_8"}),t._v(" "),n("p",{staticClass:"type-one-loading-p type-one-loading-p_9"})])]),t._v(" "),n("p",{staticClass:"type-one-loading__title flex-item flex align-center"},[n("span",{staticClass:"common-loading__span"},[t._v("加载中...")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"explain"},[e("p",[this._v("说明:")]),this._v(" "),e("p",[this._v("可通过var loading = new Loading({type:'type-one'});loading.open()来调用")]),this._v(" "),e("p",[this._v("也可以通过new一个实例后，赋值给vue.prototype来使用。Vue.protptype.$loading = loading; this.$loading.open()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"explain"},[e("p",[this._v("说明:")]),this._v(" "),e("p",[this._v("组件名称: type-one-loading")]),this._v(" "),e("p",[this._v("props: title(加载的文字)")])])}]};var l=n("VU/8")(s,c,!1,function(t){n("/x4R")},null,null);e.default=l.exports},qTv8:function(t,e,n){"use strict";var o={props:{value:String},methods:{btn:function(){console.log("you click button!"),this.$emit("btn")}}},i={render:function(){var t=this.$createElement;return(this._self._c||t)("button",{staticClass:"btn primary",on:{click:this.btn}},[this._v(this._s(this.value))])},staticRenderFns:[]};var r=n("VU/8")(o,i,!1,function(t){n("JDZR")},"data-v-19536daf",null);e.a=r.exports}});
//# sourceMappingURL=1.16f9d1aaba6e78d3fef9.js.map