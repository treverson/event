(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(n,t,e){n.exports=e(262)},135:function(n,t,e){},138:function(n,t,e){},147:function(n,t){},150:function(n,t){},152:function(n,t){},231:function(n,t){},262:function(n,t,e){"use strict";e.r(t);var c=e(13),a=e.n(c),r=e(124),o=e.n(r),i=(e(135),e(4)),s=e.n(i),u=e(38),p=e(48),f=e(49),l=e(128),h=e(125),d=e(129),b=e(39),k=(e(138),e(10)),w=e.n(k),m=e(126),v=e.n(m),O=e(127),j=e.n(O),x=function(){function n(t,e){Object(p.a)(this,n),this.appName=e,w.a.plugins(new v.a),this.account=null,this.eosOptions={expireInSeconds:60},this.isConnected=!1,this.contract=null,this.eosApi=null,this.net=w.a.Network.fromJson(t)}return Object(f.a)(n,[{key:"connect",value:function(){var n=Object(u.a)(s.a.mark(function n(){var t,e=this;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.net,n.next=3,w.a.connect(this.appName,{network:t}).then(function(n){if(!n)return console.error("no scatter");e.eosApi=w.a.eos(e.net,j.a),w.a.login().then(function(n){if(!n)return console.error("no identity");e.account=w.a.account("eos")})});case 3:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"loadContract",value:function(){var n=Object(u.a)(s.a.mark(function n(t){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,this.eosApi.contract(t);case 2:this.contract=n.sent;case 3:case"end":return n.stop()}},n,this)}));return function(t){return n.apply(this,arguments)}}()}]),n}(),y=function(n){function t(n){var e;return Object(p.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this,n))).network={blockchain:"eos",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",host:"api.eoseoul.io",port:443,protocol:"https"},e.scatter=new x(e.network,"EK Event"),e.onClick=e.onClick.bind(Object(b.a)(Object(b.a)(e))),e}return Object(d.a)(t,n),Object(f.a)(t,[{key:"onClick",value:function(){var n=Object(u.a)(s.a.mark(function n(){var t;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.scatter,n.next=3,t.connect();case 3:return n.next=5,t.loadContract("eosknightsio");case 5:return n.next=7,t.contract.signup("raindaysmain");case 7:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("button",{onClick:this.onClick},"Test")))}}]),t}(c.Component);o.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.751040e5.chunk.js.map