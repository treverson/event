(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),r=n(50),i=n.n(r),o=(n(60),n(1)),s=n.n(o),u=n(11),h=n(22),p=n(23),l=n(53),d=n(51),f=n(54),k=n(17),b=(n(63),n(16)),v=n.n(b),w=n(52),m=n.n(w),y=n(18),x=function(){function t(e,n){Object(h.a)(this,t),this.appName=n,v.a.plugins(new m.a),this.scatter=v.a.scatter,this.network=e;var c=new y.JsonRpc("".concat(e.protocol,"://").concat(e.host,":").concat(e.port));this.currentAccount=null,this.reqFields={accounts:[e]},this.eosApi=this.scatter.eos(e,y.Api,{rpc:c}),this.isConnected=!1}return Object(p.a)(t,[{key:"connect",value:function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.scatter.connect(this.appName);case 2:this.isConnected=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"getIdentity",value:function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isConnected){t.next=4;break}return t.next=3,this.scatter.getIdentity(this.reqFields);case 3:this.currentAccount=this.scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"sendTx",value:function(){var t=Object(u.a)(s.a.mark(function t(e){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.length){t.next=3;break}return t.next=3,this.eosApi.transact({actions:e},{blocksBehind:3,expireSeconds:30});case 3:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"updateNetwork",value:function(t){var e=new y.JsonRpc("".concat(t.protocol,"://").concat(t.host,":").concat(t.port));this.eosApi=this.scatter.eos(t,y.Api,{rpc:e})}},{key:"makeAction",value:function(t,e,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this.currentAccount.authority;return{account:t,name:e,authorization:[{actor:this.currentAccount.name,permission:c}],data:n}}}]),t}(),O=function(t){function e(t){var n;return Object(h.a)(this,e),(n=Object(l.a)(this,Object(d.a)(e).call(this,t))).state={scatterBridge:null,network:{blockchain:"eos",protocol:"https",host:"api.eoseoul.io",port:443,chainId:"b7fc36d8e5891d9fea7d49df06221b3ac89c793f14e7dacd16a332ce8094d049"}},n.onClick=n.onClick.bind(Object(k.a)(Object(k.a)(n))),n}return Object(f.a)(e,t),Object(p.a)(e,[{key:"componentWillMount",value:function(){this.setState({scatterBridge:new x(this.state.network,"EOS Knight Event")})}},{key:"componentDidMount",value:function(){var t=Object(u.a)(s.a.mark(function t(){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.state.scatterBridge.connect();case 2:return t.next=4,this.state.scatterBridge.getIdentity();case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},a.a.createElement("button",{onClick:this.onClick},"Test")))}}]),e}(c.Component);i.a.render(a.a.createElement(O,null),document.getElementById("root"))},55:function(t,e,n){t.exports=n(108)},60:function(t,e,n){},63:function(t,e,n){},72:function(t,e){},77:function(t,e){},79:function(t,e){}},[[55,1,2]]]);
//# sourceMappingURL=main.532fde34.chunk.js.map