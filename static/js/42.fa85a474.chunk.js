"use strict";(self.webpackChunkreact_hw_05_movies=self.webpackChunkreact_hw_05_movies||[]).push([[42],{5042:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var a=t(9439),c=t(2791),r=t(7689),s=t(3692),o=t(2831),i=t.n(o),u="Reviews_reviews__c1EnG",l="Reviews_reviews__item__cYY4C",d="Reviews_author_info__aNV4-",_="Reviews_avatar__H0LyA",h="Reviews_author__ANsjv",v="Reviews_date__H5PJL",m="Reviews_read_more_less__more__UhOHF",f="Reviews_read_more_less__less__WeL9k",g=t(184);function p(){var e=(0,r.UO)().movieId,n=(0,c.useState)([]),t=(0,a.Z)(n,2),o=t[0],p=t[1],w={year:"numeric",month:"long",day:"numeric",hour:"numeric",minute:"numeric",second:"numeric"};return(0,c.useEffect)((function(){(0,s.Hx)(e).then((function(e){p(e.results)}))}),[e]),(0,g.jsx)(g.Fragment,{children:o.length>0?(0,g.jsx)("ul",{className:u,children:o.map((function(e){var n,t=e.id,a=e.author,c=e.content,r=e.author_details,s=e.created_at;return(0,g.jsxs)("li",{className:l,children:[(0,g.jsxs)("div",{className:d,children:[r.avatar_path?(0,g.jsx)("img",{src:(n=r.avatar_path,n.includes("https")?n.substring(1):"https://image.tmdb.org/t/p/w500".concat(n)),alt:a,className:_}):(0,g.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",alt:a,className:_}),(0,g.jsxs)("div",{children:[(0,g.jsx)("h4",{className:h,children:a}),(0,g.jsx)("p",{className:v,children:new Date(s).toLocaleString("en-US",w)})]})]}),(0,g.jsx)(i(),{charLimit:300,readMoreText:"Read more \u25bc",readLessText:"Read less \u25b2",readMoreClassName:m,readLessClassName:f,children:c})]},t)}))}):(0,g.jsx)("p",{children:"We don't have any reviews for this movie"})})}},3692:function(e,n,t){t.d(n,{Hx:function(){return v},Y5:function(){return _},vw:function(){return d},wr:function(){return l},xc:function(){return h}});var a=t(5861),c=t(4687),r=t.n(c),s="https://api.themoviedb.org/3",o="?api_key=256931b667b455c0d040d58938728ff6";function i(){return u.apply(this,arguments)}function u(){return u=(0,a.Z)(r().mark((function e(){var n,t,a,c=arguments;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:"",t=c.length>1&&void 0!==c[1]?c[1]:{},e.next=4,fetch(n,t);case 4:if(!(a=e.sent).ok){e.next=11;break}return e.next=8,a.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"1",n="/trending/movie/week";return i("".concat(s).concat(n).concat(o,"&page=").concat(e))}function d(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",t="/search/movie",a="&language=en-US&include_adult=false";return i("".concat(s).concat(t).concat(o,"&query=").concat(e,"&page=").concat(n).concat(a))}function _(e){return i("".concat(s).concat("/movie/").concat(e).concat(o).concat("&language=en-US"))}function h(e){return i("".concat(s).concat("/movie/").concat(e,"/credits").concat(o).concat("&language=en-US"))}function v(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"1",t="/movie/",a="&language=en-US";return i("".concat(s).concat(t).concat(e,"/reviews").concat(o).concat(a,"&page=").concat(n))}}}]);
//# sourceMappingURL=42.fa85a474.chunk.js.map