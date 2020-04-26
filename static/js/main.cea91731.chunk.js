/*! For license information please see main.cea91731.chunk.js.LICENSE.txt */
(this["webpackJsonpreact-lumos-example"]=this["webpackJsonpreact-lumos-example"]||[]).push([[0],{14:function(e,t,n){e.exports=n(22)},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(8),c=n.n(o),i=n(2),l=n(1),s=n(9),u=n(3),m=n(10);function f(){var e=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  display: flex;\n  z-index: -1;\n\n  .stage {\n    transition: all 200ms linear;\n    border-right: 1px dotted #333;\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    .divider {\n      border-bottom: 1px dotted #333;\n      flex: 1;\n    }\n  }\n\n  .particles {\n    width: 2px;\n    height: 6px;\n    z-index: 12;\n    background-size: cover;\n    position: fixed;\n    top: 0%;\n    background-color: #333;\n    border-radius: 3px;\n    animation: rain-drop 10s linear infinite backwards;\n  }\n\n  @keyframes rain-drop {\n    from {\n      margin-top: -5%;\n    }\n    to {\n      margin-top: 90%;\n    }\n  }\n"]);return f=function(){return e},e}function d(e,t){return e(t={exports:{}},t.exports),t.exports}var p="function"===typeof Symbol&&Symbol.for,y=p?Symbol.for("react.element"):60103,b=p?Symbol.for("react.portal"):60106,v=p?Symbol.for("react.fragment"):60107,g=p?Symbol.for("react.strict_mode"):60108,h=p?Symbol.for("react.profiler"):60114,E=p?Symbol.for("react.provider"):60109,S=p?Symbol.for("react.context"):60110,O=p?Symbol.for("react.async_mode"):60111,x=p?Symbol.for("react.concurrent_mode"):60111,k=p?Symbol.for("react.forward_ref"):60112,j=p?Symbol.for("react.suspense"):60113,C=p?Symbol.for("react.suspense_list"):60120,w=p?Symbol.for("react.memo"):60115,N=p?Symbol.for("react.lazy"):60116,$=p?Symbol.for("react.block"):60121,P=p?Symbol.for("react.fundamental"):60117,z=p?Symbol.for("react.responder"):60118,_=p?Symbol.for("react.scope"):60119;function T(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case y:switch(e=e.type){case O:case x:case v:case h:case g:case j:return e;default:switch(e=e&&e.$$typeof){case S:case k:case N:case w:case E:return e;default:return t}}case b:return t}}}function I(e){return T(e)===x}var M={AsyncMode:O,ConcurrentMode:x,ContextConsumer:S,ContextProvider:E,Element:y,ForwardRef:k,Fragment:v,Lazy:N,Memo:w,Portal:b,Profiler:h,StrictMode:g,Suspense:j,isAsyncMode:function(e){return I(e)||T(e)===O},isConcurrentMode:I,isContextConsumer:function(e){return T(e)===S},isContextProvider:function(e){return T(e)===E},isElement:function(e){return"object"===typeof e&&null!==e&&e.$$typeof===y},isForwardRef:function(e){return T(e)===k},isFragment:function(e){return T(e)===v},isLazy:function(e){return T(e)===N},isMemo:function(e){return T(e)===w},isPortal:function(e){return T(e)===b},isProfiler:function(e){return T(e)===h},isStrictMode:function(e){return T(e)===g},isSuspense:function(e){return T(e)===j},isValidElementType:function(e){return"string"===typeof e||"function"===typeof e||e===v||e===x||e===h||e===g||e===j||e===C||"object"===typeof e&&null!==e&&(e.$$typeof===N||e.$$typeof===w||e.$$typeof===E||e.$$typeof===S||e.$$typeof===k||e.$$typeof===P||e.$$typeof===z||e.$$typeof===_||e.$$typeof===$)},typeOf:T},R=(d((function(e,t){0})),d((function(e){e.exports=M})),Object.getOwnPropertySymbols),V=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;function L(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var a={};return"abcdefghijklmnopqrst".split("").forEach((function(e){a[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},a)).join("")}catch(r){return!1}})()&&Object.assign;var A="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function U(e,t,n,a,r){}U.resetWarningCache=function(){0};Function.call.bind(Object.prototype.hasOwnProperty);function W(){}function q(){}q.resetWarningCache=W;var J,B=d((function(e){e.exports=function(){function e(e,t,n,a,r,o){if(o!==A){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:q,resetWarningCache:W};return n.PropTypes=n,n}()})),D=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},K=function(){return"rgb(".concat(D(1,250),",").concat(D(1,250),",").concat(D(1,250),")")},G={plain:{key:"backgroundColor",fn:K},gradient:{key:"backgroundImage",fn:function(){return"linear-gradient(".concat(K(),", ").concat(K(),")")}}},H=m.a.div(J||(J=f()));var Y=r.a.memo((function(e){var t=e.size;console.log("divider");for(var n=[],a=0;a<t;a++)n.push(r.a.createElement("div",{key:a,className:"divider"}));return n}));var Q=r.a.memo((function(e){for(var t=e.nop,n=void 0===t?0:t,a=e.style,o=void 0===a?{}:a,c=[],l=function(e){for(var t=[],n=0;n<e;n++)t.push({left:D(0,100)+"%",top:D(-200,100)+"%",backgroundColor:K()});return t}(n),s=0;s<n;s++)c.push(r.a.createElement("div",{className:"particles",key:s,style:Object(i.a)({},l[s],{},o)}));return c}));function X(e){var t=e.style,n=e.delay,o=e.mode,c=e.grid,i=e.particles,s=Object(a.useState)([{backgroundColor:"#333",backgroundImage:"none"}]),m=Object(l.a)(s,2),f=m[0],d=m[1];return Object(a.useEffect)((function(){var e=c.uniform?0:c.size,t=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=G[e]||G.plain;return t>0?function(){for(var e=[],a=0;a<t;a++)e.push(Object(u.a)({},n.key,n.fn()));return e}:function(){return[Object(u.a)({},n.key,n.fn())]}}(o,e),a=setInterval((function(){return d(t)}),n);return function(){clearInterval(a)}}),[n,o,c]),r.a.createElement(H,{style:t},function(e){for(var t=e.bgStyles,n=e.grid,a=[],o=t.length,c=0;c<n.size;c++)a.push(r.a.createElement("div",{key:c,className:"stage",style:t[c%o]},r.a.createElement(Y,{size:n.size})));return a}({bgStyles:f,grid:c}),r.a.createElement("div",null,r.a.createElement(Q,i)))}X.propTypes={style:B.object,delay:B.number,mode:B.string,grid:B.object,uniform:B.bool,particles:B.object},X.defaultProps={style:{},delay:2e3,mode:"gradient",grid:{size:1,uniform:!0},particles:{nop:0,style:[]}};var Z=X,ee=function(e){var t=e.text;return r.a.createElement("div",{className:"label"},t)},te=function(e){var t=e.items,n=e.action,a=e.handleChange,o=e.sel;return r.a.createElement("div",{className:"btn-group"},t.map((function(e,t){return r.a.createElement("button",{key:t,"data-action":n,onClick:a,className:o===e?"selected":""},e)})))},ne=function(e){var t=e.min,n=e.max,a=e.defaultValue,o=e.step,c=e.action,i=e.handleChange,l=e.style;return r.a.createElement("input",{type:"range",min:t,max:n,defaultValue:a,step:o,"data-action":c,onChange:i,style:l})},ae=function(e){var t=e.options,n=JSON.stringify(t,null,4);return r.a.createElement("div",null,r.a.createElement("pre",null,"const options = ",n),r.a.createElement("pre",null,"<Lumos {...options} />"))},re=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("div",null,"L"),r.a.createElement("div",null,"U"),r.a.createElement("div",null,"M"),r.a.createElement("div",null,"O"),r.a.createElement("div",null,"S"))},oe=function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("a",{href:"https://github.com/Kailash-Sankar/react-lumos"},"Kailash Sankar, April 2020"))},ce=function(e){var t=e.handleChange;return r.a.createElement("div",{className:"ctrl-ico","data-action":"toggle-ctrl",onClick:t},"\u27c1")};var ie=function(e){var t=e.meta,n=e.handleChange;if(!e.visible)return"";var a={min:100,max:3e3,defaultValue:t.delay,step:100,action:"speed",handleChange:n,style:{direction:"rtl"}},o={min:1,max:50,defaultValue:t.grid.size,step:1,action:"grid-size",handleChange:n},c={min:0,max:200,defaultValue:t.particles.nop,step:10,action:"particles",handleChange:n};return r.a.createElement("div",{className:"controls sltd-box"},r.a.createElement("div",{className:"row"},r.a.createElement(ee,{text:"Type"}),r.a.createElement("div",{className:"field"},r.a.createElement(te,{items:["plain","gradient"],handleChange:n,action:"bg-type",sel:t.mode}))),r.a.createElement("div",{className:"row"},r.a.createElement(ee,{text:"Speed"}),r.a.createElement("div",{className:"field"},r.a.createElement(ne,a))),r.a.createElement("div",{className:"row"},r.a.createElement(ee,{text:"Grid"}),r.a.createElement("div",{className:"field"},r.a.createElement(ne,o))),r.a.createElement("div",{className:"row"},r.a.createElement(ee,{text:"Particles"}),r.a.createElement("div",{className:"field"},r.a.createElement(ne,c))),r.a.createElement("div",{className:"row"},r.a.createElement(ee,{text:"Uniform"}),r.a.createElement("div",{className:"field"},r.a.createElement("input",{type:"checkbox",defaultChecked:t.grid.uniform,onChange:n,"data-action":"uniform"}))),r.a.createElement("div",{className:"row output"},r.a.createElement(ae,{options:t})))},le=function(){var e=r.a.useState(2e3),t=Object(l.a)(e,2),n=t[0],a=t[1],o=r.a.useState("plain"),c=Object(l.a)(o,2),s=c[0],u=c[1],m=r.a.useState({size:1,uniform:!0}),f=Object(l.a)(m,2),d=f[0],p=f[1],y=r.a.useState({nop:0,style:{}}),b=Object(l.a)(y,2),v=b[0],g=b[1],h=r.a.useState(!1),E=Object(l.a)(h,2),S=E[0],O=E[1],x=function(e){var t=e.target;switch(t.dataset.action){case"speed":a(parseInt(t.value,10));break;case"bg-type":u(t.textContent);break;case"grid-size":p(Object(i.a)({},d,{size:parseInt(t.value)}));break;case"uniform":p(Object(i.a)({},d,{uniform:t.checked}));break;case"toggle-ctrl":O(!S);break;case"particles":var n=parseInt(t.value);g({nop:n,style:{}});break;default:console.log("sup",t.dataset)}},k={delay:n,mode:s,grid:d,particles:v};return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(re,null),r.a.createElement(ce,{handleChange:x}),r.a.createElement(ie,{handleChange:x,meta:k,visible:S})),r.a.createElement("div",{style:{width:"100%",height:"100%"}},r.a.createElement(Z,k)),r.a.createElement(oe,null))};n(21);c.a.render(r.a.createElement(le,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.cea91731.chunk.js.map