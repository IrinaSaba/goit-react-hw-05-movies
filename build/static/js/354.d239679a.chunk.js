(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[354],{7228:function(r){r.exports=function(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n},r.exports.__esModule=!0,r.exports.default=r.exports},2858:function(r){r.exports=function(r){if(Array.isArray(r))return r},r.exports.__esModule=!0,r.exports.default=r.exports},3646:function(r,t,e){var n=e(7228);r.exports=function(r){if(Array.isArray(r))return n(r)},r.exports.__esModule=!0,r.exports.default=r.exports},3269:function(r,t,e){var n=e(379);r.exports=function(r,t){var e="undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!e){if(Array.isArray(r)||(e=n(r))||t&&r&&"number"===typeof r.length){e&&(r=e);var o=0,a=function(){};return{s:a,n:function(){return o>=r.length?{done:!0}:{done:!1,value:r[o++]}},e:function(r){throw r},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){e=e.call(r)},n:function(){var r=e.next();return i=r.done,r},e:function(r){c=!0,u=r},f:function(){try{i||null==e.return||e.return()}finally{if(c)throw u}}}},r.exports.__esModule=!0,r.exports.default=r.exports},9713:function(r){r.exports=function(r,t,e){return t in r?Object.defineProperty(r,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):r[t]=e,r},r.exports.__esModule=!0,r.exports.default=r.exports},6860:function(r){r.exports=function(r){if("undefined"!==typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)},r.exports.__esModule=!0,r.exports.default=r.exports},3884:function(r){r.exports=function(r,t){var e=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=e){var n,o,a=[],u=!0,i=!1;try{for(e=e.call(r);!(u=(n=e.next()).done)&&(a.push(n.value),!t||a.length!==t);u=!0);}catch(c){i=!0,o=c}finally{try{u||null==e.return||e.return()}finally{if(i)throw o}}return a}},r.exports.__esModule=!0,r.exports.default=r.exports},521:function(r){r.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.__esModule=!0,r.exports.default=r.exports},8206:function(r){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},r.exports.__esModule=!0,r.exports.default=r.exports},3038:function(r,t,e){var n=e(2858),o=e(3884),a=e(379),u=e(521);r.exports=function(r,t){return n(r)||o(r,t)||a(r,t)||u()},r.exports.__esModule=!0,r.exports.default=r.exports},319:function(r,t,e){var n=e(3646),o=e(6860),a=e(379),u=e(8206);r.exports=function(r){return n(r)||o(r)||a(r)||u()},r.exports.__esModule=!0,r.exports.default=r.exports},379:function(r,t,e){var n=e(7228);r.exports=function(r,t){if(r){if("string"===typeof r)return n(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);return"Object"===e&&r.constructor&&(e=r.constructor.name),"Map"===e||"Set"===e?Array.from(r):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(r,t):void 0}},r.exports.__esModule=!0,r.exports.default=r.exports},2354:function(r,t,e){"use strict";e.r(t),e.d(t,{default:function(){return d}});var n=e(8152),o=e(2703),a={Searchbar:"Form_Searchbar__p2GpY",SearchForm:"Form_SearchForm__Dg5L9","SearchForm-button":"Form_SearchForm-button__qeyJd","SearchForm-input":"Form_SearchForm-input__9-uD9"},u=e(2791),i=e(184);function c(r){var t=r.setSearch,e=(0,u.useState)(""),o=(0,n.Z)(e,2),c=o[0],s=o[1];return(0,i.jsxs)("form",{className:a.SearchForm,onSubmit:function(r){r.preventDefault(),""!==c.trim()?(t(c),s("")):alert(" SERGEY we do not have any porno :)")},children:[(0,i.jsx)("input",{className:a["SearchForm-input"],name:"input",type:"text",placeholder:a["Search by movie name"],value:c,onChange:function(r){s(r.target.value.toLowerCase())}}),(0,i.jsx)("button",{type:"submit",className:a["SearchForm-button"],children:(0,i.jsx)("span",{className:a["SearchForm-button-label"],children:"Search"})})]})}var s=e(1523),l=e(9271),f=e(4245),p="error_error__xDb0R";function d(){var r=(0,l.k6)(),t=(0,l.TH)(),e=f.parse(t.search).query,a=(0,u.useState)([]),d=(0,n.Z)(a,2),m=d[0],y=d[1],h=(0,u.useState)(null),v=(0,n.Z)(h,2),b=v[0],g=v[1];return(0,u.useEffect)((function(){e&&o.gG(e).then(y).catch((function(r){return g(r.message)})),g("")}),[e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c,{setSearch:function(t){r.push({pathname:"/movies",search:"?query="+t})}}),b?(0,i.jsx)("p",{className:p,children:b}):(0,i.jsx)("ul",{children:m&&m.map((function(r){return(0,i.jsx)("li",{style:{margin:"10px",fontSize:"15px"},children:(0,i.jsx)(s.rU,{to:{pathname:"movies/".concat(r.id),state:{from:t}},children:r.original_title})},r.id)}))})]})}},2703:function(r,t,e){"use strict";e.d(t,{_L:function(){return a},yK:function(){return u},K7:function(){return i},z6:function(){return c},gG:function(){return s}});var n=e(4569),o=e.n(n);o().defaults.baseURL="https://api.themoviedb.org/3/";var a=function(){return o().defaults.params={api_key:"f02791c07431f6e71112b21384bb0659"},o().get("/trending/movie/day").then((function(r){return r.data.results})).catch((function(r){throw r}))},u=function(r){return o().defaults.params={api_key:"f02791c07431f6e71112b21384bb0659"},o().get("/movie/".concat(r)).then((function(r){return r.data})).catch((function(r){throw r}))},i=function(r){return o().defaults.params={api_key:"f02791c07431f6e71112b21384bb0659"},o().get("/movie/".concat(r,"/credits")).then((function(r){return r.data.cast})).catch((function(r){throw r}))},c=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o().defaults.params={api_key:"f02791c07431f6e71112b21384bb0659",page:t},o().get("/movie/".concat(r,"/reviews")).then((function(r){return r.data})).catch((function(r){throw r}))},s=function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return o().defaults.params={api_key:"f02791c07431f6e71112b21384bb0659",query:r,page:t},o().get("/search/movie").then((function(r){var t=r.data;if(!t.results.length)throw new Error("Porno?! Really?! Sergey are You 18 already?");return t.results})).catch((function(r){throw r}))}},9412:function(r){"use strict";var t="%[a-f0-9]{2}",e=new RegExp(t,"gi"),n=new RegExp("("+t+")+","gi");function o(r,t){try{return decodeURIComponent(r.join(""))}catch(a){}if(1===r.length)return r;t=t||1;var e=r.slice(0,t),n=r.slice(t);return Array.prototype.concat.call([],o(e),o(n))}function a(r){try{return decodeURIComponent(r)}catch(a){for(var t=r.match(e),n=1;n<t.length;n++)t=(r=o(t,n).join("")).match(e);return r}}r.exports=function(r){if("string"!==typeof r)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof r+"`");try{return r=r.replace(/\+/g," "),decodeURIComponent(r)}catch(t){return function(r){for(var e={"%FE%FF":"\ufffd\ufffd","%FF%FE":"\ufffd\ufffd"},o=n.exec(r);o;){try{e[o[0]]=decodeURIComponent(o[0])}catch(t){var u=a(o[0]);u!==o[0]&&(e[o[0]]=u)}o=n.exec(r)}e["%C2"]="\ufffd";for(var i=Object.keys(e),c=0;c<i.length;c++){var s=i[c];r=r.replace(new RegExp(s,"g"),e[s])}return r}(r)}}},2683:function(r){"use strict";r.exports=function(r,t){for(var e={},n=Object.keys(r),o=Array.isArray(t),a=0;a<n.length;a++){var u=n[a],i=r[u];(o?-1!==t.indexOf(u):t(u,i,r))&&(e[u]=i)}return e}},4245:function(r,t,e){"use strict";var n=e(9713).default,o=e(3038).default,a=e(3269).default,u=e(319).default,i=e(499),c=e(9412),s=e(845),l=e(2683),f=Symbol("encodeFragmentIdentifier");function p(r){if("string"!==typeof r||1!==r.length)throw new TypeError("arrayFormatSeparator must be single character string")}function d(r,t){return t.encode?t.strict?i(r):encodeURIComponent(r):r}function m(r,t){return t.decode?c(r):r}function y(r){return Array.isArray(r)?r.sort():"object"===typeof r?y(Object.keys(r)).sort((function(r,t){return Number(r)-Number(t)})).map((function(t){return r[t]})):r}function h(r){var t=r.indexOf("#");return-1!==t&&(r=r.slice(0,t)),r}function v(r){var t=(r=h(r)).indexOf("?");return-1===t?"":r.slice(t+1)}function b(r,t){return t.parseNumbers&&!Number.isNaN(Number(r))&&"string"===typeof r&&""!==r.trim()?r=Number(r):!t.parseBooleans||null===r||"true"!==r.toLowerCase()&&"false"!==r.toLowerCase()||(r="true"===r.toLowerCase()),r}function g(r,t){p((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);var e=function(r){var t;switch(r.arrayFormat){case"index":return function(r,e,n){t=/\[(\d*)\]$/.exec(r),r=r.replace(/\[\d*\]$/,""),t?(void 0===n[r]&&(n[r]={}),n[r][t[1]]=e):n[r]=e};case"bracket":return function(r,e,n){t=/(\[\])$/.exec(r),r=r.replace(/\[\]$/,""),t?void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=[e]:n[r]=e};case"colon-list-separator":return function(r,e,n){t=/(:list)$/.exec(r),r=r.replace(/:list$/,""),t?void 0!==n[r]?n[r]=[].concat(n[r],e):n[r]=[e]:n[r]=e};case"comma":case"separator":return function(t,e,n){var o="string"===typeof e&&e.includes(r.arrayFormatSeparator),a="string"===typeof e&&!o&&m(e,r).includes(r.arrayFormatSeparator);e=a?m(e,r):e;var u=o||a?e.split(r.arrayFormatSeparator).map((function(t){return m(t,r)})):null===e?e:m(e,r);n[t]=u};case"bracket-separator":return function(t,e,n){var o=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),o){var a=null===e?[]:e.split(r.arrayFormatSeparator).map((function(t){return m(t,r)}));void 0!==n[t]?n[t]=[].concat(n[t],a):n[t]=a}else n[t]=e?m(e,r):e};default:return function(r,t,e){void 0!==e[r]?e[r]=[].concat(e[r],t):e[r]=t}}}(t),n=Object.create(null);if("string"!==typeof r)return n;if(!(r=r.trim().replace(/^[?#&]/,"")))return n;var u,i=a(r.split("&"));try{for(i.s();!(u=i.n()).done;){var c=u.value;if(""!==c){var l=s(t.decode?c.replace(/\+/g," "):c,"="),f=o(l,2),d=f[0],h=f[1];h=void 0===h?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?h:m(h,t),e(m(d,t),h,n)}}}catch(F){i.e(F)}finally{i.f()}for(var v=0,g=Object.keys(n);v<g.length;v++){var x=g[v],S=n[x];if("object"===typeof S&&null!==S)for(var j=0,_=Object.keys(S);j<_.length;j++){var k=_[j];S[k]=b(S[k],t)}else n[x]=b(S,t)}return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((function(r,t){var e=n[t];return Boolean(e)&&"object"===typeof e&&!Array.isArray(e)?r[t]=y(e):r[t]=e,r}),Object.create(null))}t.extract=v,t.parse=g,t.stringify=function(r,t){if(!r)return"";p((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);for(var e=function(e){return t.skipNull&&(null===(n=r[e])||void 0===n)||t.skipEmptyString&&""===r[e];var n},n=function(r){switch(r.arrayFormat){case"index":return function(t){return function(e,n){var o=e.length;return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(u(e),null===n?[[d(t,r),"[",o,"]"].join("")]:[[d(t,r),"[",d(o,r),"]=",d(n,r)].join("")])}};case"bracket":return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(u(e),null===n?[[d(t,r),"[]"].join("")]:[[d(t,r),"[]=",d(n,r)].join("")])}};case"colon-list-separator":return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(u(e),null===n?[[d(t,r),":list="].join("")]:[[d(t,r),":list=",d(n,r)].join("")])}};case"comma":case"separator":case"bracket-separator":var t="bracket-separator"===r.arrayFormat?"[]=":"=";return function(e){return function(n,o){return void 0===o||r.skipNull&&null===o||r.skipEmptyString&&""===o?n:(o=null===o?"":o,0===n.length?[[d(e,r),t,d(o,r)].join("")]:[[n,d(o,r)].join(r.arrayFormatSeparator)])}};default:return function(t){return function(e,n){return void 0===n||r.skipNull&&null===n||r.skipEmptyString&&""===n?e:[].concat(u(e),null===n?[d(t,r)]:[[d(t,r),"=",d(n,r)].join("")])}}}}(t),o={},a=0,i=Object.keys(r);a<i.length;a++){var c=i[a];e(c)||(o[c]=r[c])}var s=Object.keys(o);return!1!==t.sort&&s.sort(t.sort),s.map((function(e){var o=r[e];return void 0===o?"":null===o?d(e,t):Array.isArray(o)?0===o.length&&"bracket-separator"===t.arrayFormat?d(e,t)+"[]":o.reduce(n(e),[]).join("&"):d(e,t)+"="+d(o,t)})).filter((function(r){return r.length>0})).join("&")},t.parseUrl=function(r,t){t=Object.assign({decode:!0},t);var e=s(r,"#"),n=o(e,2),a=n[0],u=n[1];return Object.assign({url:a.split("?")[0]||"",query:g(v(r),t)},t&&t.parseFragmentIdentifier&&u?{fragmentIdentifier:m(u,t)}:{})},t.stringifyUrl=function(r,e){e=Object.assign(n({encode:!0,strict:!0},f,!0),e);var o=h(r.url).split("?")[0]||"",a=t.extract(r.url),u=t.parse(a,{sort:!1}),i=Object.assign(u,r.query),c=t.stringify(i,e);c&&(c="?".concat(c));var s=function(r){var t="",e=r.indexOf("#");return-1!==e&&(t=r.slice(e)),t}(r.url);return r.fragmentIdentifier&&(s="#".concat(e[f]?d(r.fragmentIdentifier,e):r.fragmentIdentifier)),"".concat(o).concat(c).concat(s)},t.pick=function(r,e,o){o=Object.assign(n({parseFragmentIdentifier:!0},f,!1),o);var a=t.parseUrl(r,o),u=a.url,i=a.query,c=a.fragmentIdentifier;return t.stringifyUrl({url:u,query:l(i,e),fragmentIdentifier:c},o)},t.exclude=function(r,e,n){var o=Array.isArray(e)?function(r){return!e.includes(r)}:function(r,t){return!e(r,t)};return t.pick(r,o,n)}},845:function(r){"use strict";r.exports=function(r,t){if("string"!==typeof r||"string"!==typeof t)throw new TypeError("Expected the arguments to be of type `string`");if(""===t)return[r];var e=r.indexOf(t);return-1===e?[r]:[r.slice(0,e),r.slice(e+t.length)]}},499:function(r){"use strict";r.exports=function(r){return encodeURIComponent(r).replace(/[!'()*]/g,(function(r){return"%".concat(r.charCodeAt(0).toString(16).toUpperCase())}))}}}]);
//# sourceMappingURL=354.d239679a.chunk.js.map