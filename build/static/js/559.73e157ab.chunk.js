"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559,802],{4559:function(e,n,t){t.r(n),t.d(n,{default:function(){return a}});t(2802);var r=t(184);function i(){return(0,r.jsxs)("form",{className:"SearchForm",children:[(0,r.jsx)("input",{className:"SearchForm-input",name:"query",type:"text",placeholder:"Search by movie name"}),(0,r.jsx)("button",{type:"submit",className:"SearchForm-button",children:(0,r.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})}function a(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i,{})})}},2802:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(8152),i=t(2791),a=t(1523),c=t(9271),s=t(2703),o=t(184),u=(0,i.lazy)((function(){return t.e(247).then(t.bind(t,1247))})),l=(0,i.lazy)((function(){return t.e(186).then(t.bind(t,186))}));function h(){var e=(0,c.UO)().movieId,n=(0,i.useState)([]),t=(0,r.Z)(n,2),h=t[0],d=t[1];return(0,i.useEffect)((function(){h&&s.yK(e).then(d)}),[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("div",{style:{display:"flex",padding:"10px"},children:[h.poster_path&&(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/".concat(h.poster_path),alt:h.original_title}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column",padding:"20px"},children:[(0,o.jsx)("h1",{children:h.original_title}),(0,o.jsxs)("p",{children:["User scores: ",h.vote_average]}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:h.overview}),(0,o.jsx)("h3",{children:"Genres"}),h.genres&&(0,o.jsx)("p",{children:h.genres.map((function(e){return e.name})).join(" ")})]})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[(0,o.jsx)("p",{children:"Additional information"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(e,"/cast"),children:"Cast"})}),(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"/movies/".concat(e,"/reviews"),children:"Reviews"})})]})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)(i.Suspense,{fallback:(0,o.jsx)("h1",{children:"Wait a second, look at the sky during waiting..."}),children:[(0,o.jsx)(c.AW,{path:"/movies/:movieId/cast",children:(0,o.jsx)(u,{})}),(0,o.jsx)(c.AW,{path:"/movies/:movieId/reviews",children:(0,o.jsx)(l,{})})]})]})}},2703:function(e,n,t){t.d(n,{_L:function(){return a},yK:function(){return c},K7:function(){return s},z6:function(){return o}});var r=t(4569),i=t.n(r);i().defaults.baseURL="https://api.themoviedb.org/3/";var a=function(){return i().defaults.params={api_key:"f02791c07431f6e71112b21384bb0659"},i().get("/trending/movie/day").then((function(e){return e.data.results})).catch((function(e){throw e}))},c=function(e){return i().defaults.params={api_key:"f02791c07431f6e71112b21384bb0659"},i().get("/movie/".concat(e)).then((function(e){return e.data})).catch((function(e){throw e}))},s=function(e){return i().defaults.params={api_key:"f02791c07431f6e71112b21384bb0659"},i().get("/movie/".concat(e,"/credits")).then((function(e){return e.data.cast})).catch((function(e){throw e}))},o=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return i().defaults.params={api_key:"f02791c07431f6e71112b21384bb0659",page:n},i().get("/movie/".concat(e,"/reviews")).then((function(e){return e.data})).catch((function(e){throw e}))}}}]);
//# sourceMappingURL=559.73e157ab.chunk.js.map