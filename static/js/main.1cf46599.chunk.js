(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{229:function(t,n){},239:function(t,n,e){t.exports=e(506)},245:function(t,n,e){},248:function(t,n,e){},249:function(t,n,e){},250:function(t,n,e){},393:function(t,n){},396:function(t,n){},398:function(t,n){},474:function(t,n){},505:function(t,n,e){},506:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),c=e(42),o=e.n(c),i=(e(244),e(245),e(16)),u=e.n(i),s=e(28),l=e(33),h=e(34),f=e(92),p=e(89),v=e(93),b=e(69),d=(e(248),function(t){var n=t.children;return r.a.createElement("div",{className:"PostWrapper"},n)}),m=(e(249),function(){return r.a.createElement("div",{className:"Header"},"POSTS")}),w=e(510),k=(e(250),function(t){var n=t.title,e=t.body;return r.a.createElement("div",{className:"EventPost"},r.a.createElement("h1",null,n),r.a.createElement("p",null,e),r.a.createElement(w.a,{color:"teal",content:"Next",icon:"right arrow",labelPosition:"right",className:"Navigate-right-button"}))}),O=e(228),j=e.n(O),g=e(229),y=e.n(g),E=function(){function t(n){Object(l.a)(this,t),this.confg=new y.a,this.network=this.confg.network}return Object(h.a)(t,[{key:"getTableUrl",value:function(){return"".concat(this.network.protocol,"://\n                 ").concat(this.network.host,": \n                 ").concat(this.network.port,"/v1/chain/get_table_rows")}},{key:"readTable",value:function(){var t=Object(s.a)(u.a.mark(function t(n,e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.post(this.getTableUrl(),{code:n,table:e});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t,this)}));return function(n,e){return t.apply(this,arguments)}}()}]),t}(),x=e(91),C=e.n(x),I=function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(f.a)(this,Object(p.a)(n).call(this))).fetchItemEventInfo=Object(s.a)(u.a.mark(function t(){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({fetching:!0}),t.next=3,e.chain.readTable("eosknightsio","itemevt");case 3:n=t.sent,console.log(n.data),e.setState({eventInfo:n.data,fetching:!1});case 6:case"end":return t.stop()}},t)})),e.state={fetching:!1,eventInfo:null},e.chain=new E(C.a.network),e}return Object(v.a)(n,t),Object(h.a)(n,[{key:"componentDidMount",value:function(){this.fetchItemEventInfo()}},{key:"render",value:function(){var t=this.state;t.fetching,t.eventInfo;return r.a.createElement(d,null,r.a.createElement(k,{title:"from test",body:"from body"}))}}]),n}(a.Component),N=e(29),S=e.n(N),T=e(230),P=e.n(T),A=e(231),J=e.n(A),U=function(){function t(n,e){Object(l.a)(this,t),this.appName=e,S.a.plugins(new P.a),this.account=null,this.eosOptions={expireInSeconds:60},this.isConnected=!1,this.contract=null,this.eosApi=null,this.net=S.a.Network.fromJson(n),this.auth=null}return Object(h.a)(t,[{key:"connect",value:function(){var t=Object(s.a)(u.a.mark(function t(){var n,e=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.net,t.next=3,S.a.connect(this.appName,{network:n});case 3:if(this.isConnected=t.sent,this.isConnected){t.next=6;break}return t.abrupt("return",console.error("connection failed"));case 6:return this.eosApi=S.a.eos(this.net,J.a),t.next=9,S.a.login().then(function(t){if(!t)return console.error("no identity");e.account=S.a.account("eos"),e.auth={authorization:["".concat(e.account.name,"@").concat(e.account.authority)]}});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"loadContract",value:function(){var t=Object(s.a)(u.a.mark(function t(n){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.eosApi.contract(n);case 2:this.contract=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}()}]),t}(),_=(e(505),function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(f.a)(this,Object(p.a)(n).call(this,t))).state={},e.scatter=new U(C.a.network,"EK Event"),e.onClick=e.onClick.bind(Object(b.a)(Object(b.a)(e))),e}return Object(v.a)(n,t),Object(h.a)(n,[{key:"onClick",value:function(){var t=Object(s.a)(u.a.mark(function t(){var n;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.scatter,t.next=3,n.connect();case 3:return t.next=5,n.loadContract("eosknightsio");case 5:return t.next=7,n.contract.signup(n.account.name,n.auth);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m,null),r.a.createElement(I,null))}}]),n}(a.Component));o.a.render(r.a.createElement(_,null),document.getElementById("root"))},91:function(t,n){}},[[239,1,2]]]);
//# sourceMappingURL=main.1cf46599.chunk.js.map