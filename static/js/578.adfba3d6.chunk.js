"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[578],{133:function(e,r,t){t.d(r,{FG:function(){return v},a3:function(){return o},g8:function(){return f},gK:function(){return h},jc:function(){return p}});var n=t(861),a=t(757),u=t.n(a),c=t(294),s=t(537),i=c.Z.create({baseURL:s.BQ,params:{language:"en-US"},headers:{Authorization:"Bearer ".concat(s.o3)}}),o=function(){var e=(0,n.Z)(u().mark((function e(){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/search/movie",{params:{query:r,page:1,include_adult:"false"}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"/credits"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(r){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.get("/movie/".concat(r,"/reviews"),{params:{page:1}});case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()},578:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),c=t.n(u),s=t(689),i=t(791),o=t(133),p=t(864),f=t(55),v=t(184);r.default=function(){var e=(0,s.UO)().movieId,r=(0,i.useState)([]),t=(0,a.Z)(r,2),u=t[0],h=t[1],d=(0,i.useState)(!1),l=(0,a.Z)(d,2),m=l[0],w=l[1],x=(0,i.useState)(""),g=(0,a.Z)(x,2),k=g[0],Z=g[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(c().mark((function r(){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return w(!0),Z(""),r.prev=2,r.next=5,(0,o.gK)(e);case 5:t=r.sent,h(t.results),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(2),Z(r.t0.message);case 12:return r.prev=12,w(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[2,9,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}),[e]),(0,v.jsxs)("div",{className:"cast",children:[k&&(0,v.jsx)("h1",{children:k}),m?(0,v.jsx)(p.a,{}):u.length>0?(0,v.jsx)(f.PY,{items:u}):(0,v.jsx)("p",{children:"No reviews found for this movie."})]})}}}]);
//# sourceMappingURL=578.adfba3d6.chunk.js.map