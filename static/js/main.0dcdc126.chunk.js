(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{236:function(t,e,n){t.exports=n(504)},242:function(t,e,n){},245:function(t,e,n){},246:function(t,e,n){},247:function(t,e,n){},391:function(t,e){},394:function(t,e){},396:function(t,e){},472:function(t,e){},503:function(t,e,n){},504:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(42),o=n.n(r),i=(n(241),n(242),n(16)),u=n.n(i),s=n(28),l=n(33),f=n(34),h=n(91),p=n(89),d=n(92),b=n(69),v=(n(245),function(t){var e=t.children;return c.a.createElement("div",{className:"PostWrapper"},e)}),m=(n(246),function(){return c.a.createElement("div",{className:"Header"},"POSTS")}),k=n(508),w=(n(247),function(t){var e=t.title,n=t.body;return c.a.createElement("div",{className:"EventPost"},c.a.createElement("h1",null,e),c.a.createElement("p",null,n),c.a.createElement(k.a,{color:"teal",content:"Next",icon:"right arrow",labelPosition:"right",className:"Navigate-right-button"}))}),O=(n(368),{network:{blockchain:"eos",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",host:"api.eoseoul.io",port:443,protocol:"https"}}),j=function(){function t(e){Object(l.a)(this,t)}return Object(f.a)(t,[{key:"getTableUrl",value:function(){var t=O.network,e=t.protocol,n=t.host,a=t.port;return"".concat(e,"://").concat(n,":").concat(a,"/v1/chain/get_table_rows")}},{key:"readTable",value:function(){var t=Object(s.a)(u.a.mark(function t(e,n){var a,c,r;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=this.getTableUrl(),c={code:e,table:n},(r=new Headers).append("Content-Type","text/plain"),t.next=6,fetch(a,{method:"POST",body:c,headers:r});case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,this)}));return function(e,n){return t.apply(this,arguments)}}()}]),t}(),y=function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(p.a)(e).call(this))).fetchItemEventInfo=Object(s.a)(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n.setState({fetching:!0}),t.next=3,n.chain.readTable("eosknightsio","itemevt");case 3:e=t.sent,console.log(e.data),n.setState({eventInfo:e.data,fetching:!1});case 6:case"end":return t.stop()}},t)})),n.state={fetching:!1,eventInfo:null},n.chain=new j(O.network),n}return Object(d.a)(e,t),Object(f.a)(e,[{key:"componentDidMount",value:function(){this.fetchItemEventInfo()}},{key:"render",value:function(){var t=this.state;t.fetching,t.eventInfo;return c.a.createElement(v,null,c.a.createElement(w,{title:"from test",body:"from body"}))}}]),e}(a.Component),g=n(29),x=n.n(g),E=n(227),C=n.n(E),I=n(228),N=n.n(I),T=function(){function t(e,n){Object(l.a)(this,t),this.appName=n,x.a.plugins(new C.a),this.account=null,this.eosOptions={expireInSeconds:60},this.isConnected=!1,this.contract=null,this.eosApi=null,this.net=x.a.Network.fromJson(e),this.auth=null}return Object(f.a)(t,[{key:"connect",value:function(){var t=Object(s.a)(u.a.mark(function t(){var e,n=this;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.net,t.next=3,x.a.connect(this.appName,{network:e});case 3:if(this.isConnected=t.sent,this.isConnected){t.next=6;break}return t.abrupt("return",console.error("connection failed"));case 6:return this.eosApi=x.a.eos(this.net,N.a),t.next=9,x.a.login().then(function(t){if(!t)return console.error("no identity");n.account=x.a.account("eos"),n.auth={authorization:["".concat(n.account.name,"@").concat(n.account.authority)]}});case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"loadContract",value:function(){var t=Object(s.a)(u.a.mark(function t(e){return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.eosApi.contract(e);case 2:this.contract=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),t}(),S=(n(503),function(t){function e(t){var n;return Object(l.a)(this,e),(n=Object(h.a)(this,Object(p.a)(e).call(this,t))).state={},n.scatter=new T(O.network,"EK Event"),n.onClick=n.onClick.bind(Object(b.a)(Object(b.a)(n))),n}return Object(d.a)(e,t),Object(f.a)(e,[{key:"onClick",value:function(){var t=Object(s.a)(u.a.mark(function t(){var e;return u.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.scatter,t.next=3,e.connect();case 3:return t.next=5,e.loadContract("eosknightsio");case 5:return t.next=7,e.contract.signup(e.account.name,e.auth);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement(m,null),c.a.createElement(y,null))}}]),e}(a.Component));o.a.render(c.a.createElement(S,null),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.0dcdc126.chunk.js.map