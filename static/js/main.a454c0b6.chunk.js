(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(t,n,e){t.exports=e(262)},135:function(t,n,e){},138:function(t,n,e){},147:function(t,n){},150:function(t,n){},152:function(t,n){},231:function(t,n){},262:function(t,n,e){"use strict";e.r(n);var c=e(13),a=e.n(c),o=e(124),r=e.n(o),i=(e(135),e(3)),s=e.n(i),u=e(14),l=e(48),h=e(49),p=e(128),f=e(125),k=e(129),d=e(39),b=(e(138),e(9)),v=e.n(b),w=e(126),m=e.n(w),x=e(127),g=e.n(x),O=function(){function t(n,e){Object(l.a)(this,t),this.appName=e,v.a.plugins(new m.a),this.account=null,this.eosOptions={expireInSeconds:60},this.isConnected=!1,this.contract=null,this.eosApi=null,this.network=v.a.Network.fromJson(n)}return Object(h.a)(t,[{key:"connect",value:function(){var t=Object(u.a)(s.a.mark(function t(){var n,e=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=this.network,t.next=3,v.a.connect(this.appName,{net:n}).then(function(t){console.log("connected:"+t),e.isConnected=t,t&&(e.eosApi=v.a.eos(e.network,g.a),console.log("create eos Api"))});case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"login",value:function(){var t=Object(u.a)(s.a.mark(function t(){var n=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isConnected){t.next=5;break}return t.next=3,v.a.login().then(function(t){n.account=v.a.account("eos"),console.log(n.account)});case 3:t.next=6;break;case 5:console.log("check connection first!");case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"loadContract",value:function(){var t=Object(u.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.eosApi.getContract(n);case 2:this.contract=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}()},{key:"logout",value:function(){var t=Object(u.a)(s.a.mark(function t(){var n=this;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.a.logout().then(function(){console.log("logout done!"),n.account=null});case 2:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}()},{key:"sendTx",value:function(){var t=Object(u.a)(s.a.mark(function t(n){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!n.length){t.next=3;break}return t.next=3,this.eosApi.transact({actions:n},{blocksBehind:3,expireSeconds:30});case 3:case"end":return t.stop()}},t,this)}));return function(n){return t.apply(this,arguments)}}()},{key:"makeAction",value:function(t,n,e){return{account:t,name:n,authorization:[{actor:this.account.name,permission:this.account.authority}],data:e}}}]),t}(),y=function(t){function n(t){var e;return Object(l.a)(this,n),(e=Object(p.a)(this,Object(f.a)(n).call(this,t))).network={blockchain:"eos",protocol:"https",host:"api.eoseoul.io",port:443,chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"},e.scatter=new O(e.network,"EOS Knight Event"),e.onClick=e.onClick.bind(Object(d.a)(Object(d.a)(e))),e}return Object(k.a)(n,t),Object(h.a)(n,[{key:"onClick",value:function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.scatter.logout();case 2:return t.next=4,this.scatter.connect();case 4:return t.next=6,this.scatter.login();case 6:return t.next=8,this.scatter.loadContract("eosknightsio");case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("button",{onClick:this.onClick},"Test")))}}]),n}(c.Component);r.a.render(a.a.createElement(y,null),document.getElementById("root"))}},[[130,1,2]]]);
//# sourceMappingURL=main.a454c0b6.chunk.js.map