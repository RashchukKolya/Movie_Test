(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(t,e,n){},30:function(t,e,n){t.exports=n(63)},35:function(t,e,n){},5:function(t,e,n){"use strict";var a=n(4),o=Object(a.a)();e.a=o},63:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(17),c=n.n(r),i=n(64),l=n(5),u=(n(35),n(18)),s=n(19),d=n(20),h=n(26),m=n(21),f=n(27),p=n(22),g=n.n(p),v=n(23),b=n.n(v),w=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,69))}),E=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,70))}),j=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,71))}),O=function(t){function e(){var t,n;Object(s.a)(this,e);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(h.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(o)))).state={input:"",data:[],movie:[]},n.getInput=function(t){n.setState(Object(u.a)({},t.target.name,t.target.value))},n.getId=function(t){var e=n.state.data.find(function(e){return e.show.id===+t});console.log(e),n.setState({movie:e.show}),l.a.push("/list/detail-info")},n.getData=function(t){t.preventDefault();var e=n.state.input;g.a.get("https://api.tvmaze.com/search/shows?q=".concat(e)).then(function(t){console.log(t.data),n.setState({data:t.data}),l.a.push("/list")}).catch(function(t){return console.log(t)})},n}return Object(f.a)(e,t),Object(d.a)(e,[{key:"render",value:function(){var t=this;return o.a.createElement("div",{className:b.a.main},o.a.createElement(i.c,null,o.a.createElement(a.Suspense,{fallback:o.a.createElement("p",null,"Loading...")},o.a.createElement(i.a,{exact:!0,path:"/",render:function(){return o.a.createElement(w,{input:t.state.input,getInput:t.getInput,getData:t.getData})}}),o.a.createElement(i.a,{exact:!0,path:"/list",render:function(){return o.a.createElement(E,{data:t.state.data,getId:t.getId})}}),o.a.createElement(i.a,{path:"/list/detail-info",render:function(){return o.a.createElement(j,{movie:t.state.movie})}}))))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(i.b,{history:l.a},o.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.3e51819d.chunk.js.map