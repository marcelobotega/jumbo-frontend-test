(function(e){function t(t){for(var r,a,s=t[0],l=t[1],i=t[2],u=0,d=[];u<s.length;u++)a=s[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function s(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0e70f28e":"75053b69","chunk-0d59fec9":"ca807e9e","chunk-4f431adf":"92346f31"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-0d59fec9":1,"chunk-4f431adf":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0e70f28e":"31d6cfe0","chunk-0d59fec9":"fbf65286","chunk-4f431adf":"9afbbc15"}[e]+".css",o=l.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var i=c[s],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){i=d[s],u=i.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],f.parentNode.removeChild(f),n(c)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var i,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=s(e);var d=new Error;i=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){i({type:"timeout",target:u})}),12e4);u.onerror=u.onload=i,document.head.appendChild(u)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/jumbo-frontend-test/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1e09":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper"},[n("MainNavbar"),n("div",{staticClass:"app-main-content xl:container xl:mx-auto px-3 py-6"},[n("router-view")],1)],1)},o=[],c=n("d4ec"),s=n("262e"),l=n("2caf"),i=n("9ab4"),u=n("1b40"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"main-navbar-wrapper bg-white shadow"},[n("nav",{staticClass:"xl:container xl:mx-auto px-3 py-3"},[n("div",{staticClass:"flex flex-col md:flex-row md:items-center"},[n("div",{staticClass:"flex justify-between items-center"},[n("div",{staticClass:"flex items-center"},[n("router-link",{staticClass:"border-none",attrs:{to:"/"}},[n("svg",{staticClass:"w-32 h-8",attrs:{viewBox:"0 0 150 30"}},[n("g",{attrs:{fill:"none","fill-rule":"nonzero"}},[n("g",{attrs:{fill:"#000"}},[n("path",{attrs:{d:"M18.02.593v19.14c0 4.61-7.029 7.462-12.76 7.462-2.496 0-3.948-.475-5.26-1.028.702.303 2.34 2.38 2.34 2.38 1.303.557 2.764 1.036 5.266 1.036 5.717 0 12.755-2.862 12.755-7.472V2.967L18.019.593M66.87 10.637l-3.6-7.686L60.933.568l5.29 11.312.649-1.243M53.521 11.397v15.257h-4.823l2.349 2.381h4.807V16.398M83.177.568v26.086H71.56l2.325 2.381h11.626V2.945L83.177.569M71.56 11.625l-7.148 15.029H60.66l2.332 2.381h3.759l4.808-10.103v-7.307M101.362 23.944v-8.329c.965-.088 1.807.015 2.703.493a5.364 5.364 0 0 0-1.462-1.779c-1.241-.985-2.313-1.218-3.584-1.1v10.917c.833.089 1.606.044 2.343-.202M99.908 3.022c-.335 0-.545.076-.889.076v7.71c.787-.028 1.581-.06 2.343-.263V5.477c.34 0 .553-.08.888-.08.735 0 1.376.1 1.933.281-.47-1.665-1.926-2.656-4.275-2.656"}}),n("path",{attrs:{d:"M114.664 16.245l-1.958-1.954c1.062 1.274 1.252 2.941 1.238 4.707-.004 4.811-4.075 7.7-13.586 7.7H87.364l2.332 2.375h12.992c9.518 0 13.583-2.906 13.602-7.695.011-1.97-.199-3.817-1.626-5.133M113.016 6.96c0 2.626-1.127 4.581-5.23 5.138 2.252.296 3.686.959 4.604 1.854v-.007c2.285-.88 2.959-2.548 2.959-4.613 0-1.54-.49-2.732-1.38-3.642l-2.26-2.304-.005.021c.841.898 1.312 2.06 1.312 3.553M131.41 24.595c-.683-1.959-.905-4.98-.905-8.593 0-6.416.691-10.996 3.51-10.996h.24c-.542-1.518-1.367-2.39-2.588-2.39-2.812 0-3.507 4.583-3.507 11.013 0 6.204.658 10.685 3.25 10.966"}}),n("path",{attrs:{d:"M145.514 6.871l-1.718-1.74c2.142 2.328 3.426 5.282 3.426 8.498 0 7.499-6.961 13.566-15.555 13.566-4.602 0-8.735-1.743-11.582-4.515l2.233 2.284v-.003c2.86 2.837 7.036 4.622 11.697 4.622 8.586 0 15.546-6.082 15.546-13.581 0-3.52-1.531-6.718-4.047-9.13M36.127 24.359a7.163 7.163 0 0 1-.233-1.86V2.967L33.554.593v19.533c0 1.738.577 3.902 2.542 4.238l.031-.005"}}),n("path",{attrs:{d:"M44.48.593V18.11c0 6.067-2.57 9.14-11.22 9.14-4.257 0-7.251-.958-9.088-2.82l.09.097 1.872 1.862c1.79 2.127 4.899 3.23 9.473 3.23 8.643 0 11.212-3.072 11.212-9.109V2.967L44.48.593"}})]),n("g",{attrs:{fill:"#FDC513"}},[n("path",{attrs:{d:"M0 23.337c.77.386 1.533.66 2.34.66 2.664 0 4.008-1.255 4.008-3.525V.592H18.02v19.14c0 4.611-7.028 7.463-12.76 7.463-2.495 0-3.947-.475-5.259-1.028v-2.83M48.698 26.654V.568h12.234l5.29 11.312L72.125.568h11.052v26.086H71.56v-15.03l-7.148 15.03H60.66l-7.14-15.257v15.257h-4.823M99.02 10.807c1.177-.042 2.374-.083 3.447-.71 1.175-.657 1.884-1.877 1.884-3.129 0-2.432-1.538-3.946-4.443-3.946-.335 0-.545.076-.889.076v7.71zm0 13.34c1.49.157 2.795-.084 4.033-1.216 1.073-.976 1.684-2.388 1.684-3.984 0-1.916-.784-3.566-2.134-4.618-1.241-.985-2.313-1.218-3.584-1.1v10.917zm-11.658 2.551V.593h12.95c7.09 0 12.704 1.21 12.704 6.367 0 2.626-1.127 4.581-5.23 5.138 5.545.729 6.183 3.654 6.158 6.9-.004 4.811-4.075 7.7-13.586 7.7H87.362zM131.667 24.622c2.8 0 3.514-4.584 3.514-10.993 0-6.43-.714-11.014-3.514-11.014-2.812 0-3.507 4.584-3.507 11.014 0 6.409.695 10.993 3.507 10.993M116.12 13.629c0-7.495 6.96-13.58 15.547-13.58 8.594 0 15.555 6.085 15.555 13.58 0 7.499-6.961 13.566-15.555 13.566-8.587 0-15.547-6.067-15.547-13.566M36.639 24.415c-2.407 0-3.085-2.4-3.085-4.29V.594H21.948V18.11c0 6.002 3.59 9.14 11.312 9.14 8.65 0 11.22-3.073 11.22-9.14V.593h-4.743V20.11c0 1.896-.658 4.304-3.098 4.304"}})])])])])],1),n("div",{staticClass:"flex md:hidden"},[n("button",{staticClass:"\n              text-gray-500\n              hover:text-gray-600\n              focus:outline-none focus:text-gray-600\n            ",attrs:{type:"button","aria-label":"toggle menu"},on:{click:function(t){t.preventDefault(),e.isOpen=!e.isOpen}}},[n("svg",{staticClass:"h-6 w-6 fill-current",attrs:{viewBox:"0 0 24 24"}},[n("path",{attrs:{"fill-rule":"evenodd",d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"}})])])])]),n("div",{staticClass:"md:flex items-center",class:e.isOpen?"block":"hidden"},[n("div",{staticClass:"flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1 items-start"},[n("router-link",{staticClass:"\n              my-1\n              text-sm text-gray-700\n              leading-5\n              md:mx-4 md:my-0\n              border-b-2 border-white border-solid\n              hover:border-yellow-400\n            ",attrs:{to:"/stores"}},[e._v("Stores")]),n("router-link",{staticClass:"\n              my-1\n              text-sm text-gray-700\n              leading-5\n              md:mx-4 md:my-0\n              border-b-2 border-white border-solid\n              hover:border-yellow-400\n            ",attrs:{to:"/cities"}},[e._v("Cities")])],1)])])])])},f=[],h=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){var e;return Object(c["a"])(this,n),e=t.apply(this,arguments),e.isOpen=!1,e}return n}(u["d"]);h=Object(i["a"])([u["a"]],h);var p=h,v=p,m=n("2877"),b=Object(m["a"])(v,d,f,!1,null,null,null),g=b.exports,y=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(u["d"]);y=Object(i["a"])([Object(u["a"])({components:{MainNavbar:g}})],y);var x=y,w=x,O=Object(m["a"])(w,a,o,!1,null,null,null),j=O.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),k=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-wrapper content-section"},[n("h1",[e._v("Welcome")]),n("p",{staticClass:"mt-1"},[e._v("Use the menu above to navigate through the system")])])}],_=function(e){Object(s["a"])(n,e);var t=Object(l["a"])(n);function n(){return Object(c["a"])(this,n),t.apply(this,arguments)}return n}(u["d"]);_=Object(i["a"])([u["a"]],_);var P=_,V=P,E=Object(m["a"])(V,k,M,!1,null,null,null),H=E.exports;r["a"].use(C["a"]);var L=[{path:"/",name:"Home",component:H},{path:"/stores",name:"StoresPage",component:function(){return Promise.all([n.e("chunk-0e70f28e"),n.e("chunk-4f431adf")]).then(n.bind(null,"fdb1"))}},{path:"/cities",name:"CitiesPage",component:function(){return Promise.all([n.e("chunk-0e70f28e"),n.e("chunk-0d59fec9")]).then(n.bind(null,"28e2"))}}],S=new C["a"]({mode:"history",linkActiveClass:"border-b-2 border-yellow-400 border-solid",base:"/jumbo-frontend-test/",routes:L}),T=S;n("1e09");r["a"].config.productionTip=!1,new r["a"]({router:T,render:function(e){return e(j)}}).$mount("#app")}});
//# sourceMappingURL=app.6369ad26.js.map