"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[422],{7422:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});var c=e(9439),a=e(2791),r=e(7689),o=e(3692),i="Cast_cast__5fcZC",s="Cast_item__66r1U",u="Cast_link__OG02T",l="Cast_name__aLctn",f="Cast_image_wrapper__U2rub",h="Cast_image__1PkfW",m="Cast_name_wrapper__CcpQr",d="Cast_character__QND9j",_=e(184);function p(){var n=(0,r.UO)().movieId,t=(0,a.useState)([]),e=(0,c.Z)(t,2),p=e[0],v=e[1];return(0,a.useEffect)((function(){(0,o.xc)(n).then((function(n){v(n.cast)}))}),[n]),(0,_.jsx)(_.Fragment,{children:p&&(0,_.jsx)("ul",{className:i,children:p.map((function(n){var t=n.id,e=n.character,c=n.original_name,a=n.profile_path;return(0,_.jsx)("li",{className:s,children:(0,_.jsxs)("a",{className:u,href:"https://www.google.com/search?q=".concat(c.split(" ").join("+")),target:"_blank",rel:"noreferrer",children:[(0,_.jsx)("div",{className:f,children:a?(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:c,className:h}):(0,_.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:c,className:h})}),(0,_.jsxs)("div",{className:m,children:[(0,_.jsx)("p",{className:l,children:c}),(0,_.jsx)("p",{className:d,children:e})]})]})},t)}))})})}},3692:function(n,t,e){e.d(t,{Hx:function(){return d},Y5:function(){return h},vw:function(){return f},wr:function(){return l},xc:function(){return m}});var c=e(5861),a=e(4687),r=e.n(a),o="https://api.themoviedb.org/3",i="?api_key=256931b667b455c0d040d58938728ff6";function s(){return u.apply(this,arguments)}function u(){return u=(0,c.Z)(r().mark((function n(){var t,e,c,a=arguments;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:"",e=a.length>1&&void 0!==a[1]?a[1]:{},n.next=4,fetch(t,e);case 4:if(!(c=n.sent).ok){n.next=11;break}return n.next=8,c.json();case 8:n.t0=n.sent,n.next=12;break;case 11:n.t0=Promise.reject(new Error("Not found"));case 12:return n.abrupt("return",n.t0);case 13:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function l(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",t="/trending/movie/week";return s("".concat(o).concat(t).concat(i,"&page=").concat(n))}function f(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",e="/search/movie",c="&language=en-US&include_adult=false";return s("".concat(o).concat(e).concat(i,"&query=").concat(n,"&page=").concat(t).concat(c))}function h(n){return s("".concat(o).concat("/movie/").concat(n).concat(i).concat("&language=en-US"))}function m(n){return s("".concat(o).concat("/movie/").concat(n,"/credits").concat(i).concat("&language=en-US"))}function d(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",e="/movie/",c="&language=en-US";return s("".concat(o).concat(e).concat(n,"/reviews").concat(i).concat(c,"&page=").concat(t))}},5861:function(n,t,e){function c(n,t,e,c,a,r,o){try{var i=n[r](o),s=i.value}catch(u){return void e(u)}i.done?t(s):Promise.resolve(s).then(c,a)}function a(n){return function(){var t=this,e=arguments;return new Promise((function(a,r){var o=n.apply(t,e);function i(n){c(o,a,r,i,s,"next",n)}function s(n){c(o,a,r,i,s,"throw",n)}i(void 0)}))}}e.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=422.c20f09ca.chunk.js.map