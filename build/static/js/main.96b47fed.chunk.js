(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{258:function(e,t,n){e.exports=n(530)},264:function(e,t,n){},267:function(e,t,n){},268:function(e,t,n){},269:function(e,t,n){},389:function(e,t,n){},415:function(e,t){},418:function(e,t){},420:function(e,t){},496:function(e,t){},529:function(e,t,n){},530:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(32),o=n.n(i),c=(n(263),n(264),n(15)),s=n.n(c),u=n(25),l=n(37),p=n(38),m=n(105),h=n(100),f=n(104),d=n(79),b=(n(267),function(e){var t=e.children;return r.a.createElement("div",{className:"PostWrapper"},t)}),g=(n(268),n(538)),v=n(103),k=n(540),w={sponsor:"EOS Nation",itemName:"Nation Armor",itemGrade:"Rare",network:{blockchain:"eos",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",host:"api.eoseoul.io",port:443,protocol:"https"},url:{bastet:"https://bastet.eosknights.io/event/item/"}},E=(n(269),function(e){e.state;var t=e.inputDisabled,n=(e.gotThis,e.time),a=e.timeColor,i=e.imgUrl,o=e.onClickGet,c=e.onChangeName;return r.a.createElement("div",{className:"EventPost"},r.a.createElement("div",null,r.a.createElement("img",{className:"SponsorIcon",src:"https://eosknights.io/img/icon.png"}),r.a.createElement("img",{className:"CrossIcon",src:"https://eosknights.io/img/cross.png"}),r.a.createElement("img",{className:"SponsorIcon",src:"https://eosknights.io/img/bp/eosnation.png"})),r.a.createElement("div",{className:"Sponsor"},"Make your EOS fun with ",w.sponsor),r.a.createElement(g.a,{centered:!0},r.a.createElement("div",{className:"ImgBox"},r.a.createElement("img",{src:i,className:"ItemImage"}),r.a.createElement(v.a,{basic:!0,color:a},n)),r.a.createElement(g.a.Content,null,r.a.createElement(g.a.Header,null,w.itemName),r.a.createElement(g.a.Meta,null,r.a.createElement("span",{className:"date"},w.itemGrade))),r.a.createElement(g.a.Content,{extra:!0},r.a.createElement(k.a,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"EOS Account Id",onChange:c,disabled:t,action:{color:"teal",content:"Get",onClick:o}}))))}),x=n(539),C=n(537),y=(n(389),function(e){var t=e.active;return r.a.createElement("div",null,t?r.a.createElement("div",{className:"SimpleLoader"},r.a.createElement(x.a,{active:t},r.a.createElement(C.a,null))):null)}),O=n(80),S=n.n(O),j=function(){function e(){Object(l.a)(this,e)}return Object(p.a)(e,[{key:"getTableUrl",value:function(){var e=w.network,t=e.protocol,n=e.host,a=e.port;return"".concat(t,"://").concat(n,":").concat(a,"/v1/chain/get_table_rows")}},{key:"readTable",value:function(){var e=Object(u.a)(s.a.mark(function e(t,n){var a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.getTableUrl(),r={scope:t,code:t,table:n,json:!0},e.prev=2,e.next=5,S.a.post(a,r,{headers:{"content-type":"text/plain"}});case 5:return e.abrupt("return",e.sent);case 8:return e.prev=8,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}},e,this,[[2,8]])}));return function(t,n){return e.apply(this,arguments)}}()},{key:"readTableRow",value:function(){var e=Object(u.a)(s.a.mark(function e(t,n,a){var r,i,o,c,u=arguments;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>3&&void 0!==u[3]?u[3]:"name",i=this.getTableUrl(),o={scope:t,code:t,table:n,lower_bound:a,upper_bound:null,key_type:r,index_position:1,limit:1,json:!0},e.prev=3,e.next=6,S.a.post(i,o,{headers:{"content-type":"text/plain"}});case 6:if(null!==(c=e.sent).data&&null!==c.data.rows&&0!==c.data.rows.length){e.next=9;break}return e.abrupt("return",null);case 9:return e.abrupt("return",c.data.rows[0]);case 12:return e.prev=12,e.t0=e.catch(3),e.abrupt("return",null);case 16:case"end":return e.stop()}},e,this,[[3,12]])}));return function(t,n,a){return e.apply(this,arguments)}}()}]),e}(),N=n(39),I=n.n(N),T=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this))).fetchItemEventInfo=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setState({fetching:!0}),e.next=3,n.chain.readTable("eosknightsio","itemevt");case 3:t=e.sent,n.setState({info:t.data.rows[0],fetching:!1,imgUrl:"https://eosknights.io/img/resource/big/item/item_".concat(t.data.rows[0].code,".png")}),n.updateReaminText(),n.timer=setInterval(function(){return n.updateReaminText()},1e3);case 7:case"end":return e.stop()}},e)})),n.handleChange=function(e){n.setState({name:e.target.value})},n.onClickGet=Object(u.a)(s.a.mark(function e(){var t,a;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if("RUN"===n.state.state){e.next=2;break}return e.abrupt("return");case 2:if(n.state.name){e.next=5;break}return I.a.error("Please fill out your eos accout id first",{position:"top-right",effect:"slide",beep:!1,timeout:3e3}),e.abrupt("return");case 5:return n.setState({fetching:!0}),e.next=8,n.chain.readTableRow("eosknightsio","player",n.state.name);case 8:return t=e.sent,e.next=11,n.chain.readTableRow("eosknightsio","playerv2",n.state.name);case 11:if(a=e.sent,n.setState({fetching:!1}),null!=t&&t.owner===n.state.name){e.next=16;break}return I.a.error("Sign up the EOS Knights first!",{position:"top-right",effect:"slide",beep:!1,timeout:3e3}),e.abrupt("return");case 16:if(null===a||a.owner!==n.state.name||a.itemevt!==n.state.info.id){e.next=19;break}return I.a.error("You've already got '".concat(w.itemName,"'"),{position:"top-right",effect:"slide",beep:!1,timeout:3e3}),e.abrupt("return");case 19:return e.next=21,n.getEventItem();case 21:case"end":return e.stop()}},e)})),n.state={fetching:!1,info:{id:0,code:0,from:0,duration:0},name:"",imgUrl:"",time:"CLOSED",timeColor:"grey",state:"CLOSED",inputDisabled:!0},n.chain=new j(w.network),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"getRemainText",value:function(e){var t=String(Math.floor(e/3600)).padStart(2,"0"),n=String(Math.floor(e/60)%60).padStart(2,"0"),a=String(e%60).padStart(2,"0");return"".concat(t,":").concat(n,":").concat(a)}},{key:"updateReaminText",value:function(){var e=this.state.info,t=e.from,n=t+e.duration,a=Math.floor(Date.now()/1e3);if(n<a)this.setState({time:"CLOSED",timeColor:"grey",state:"CLOSED",inputDisabled:!0});else if(a<t){var r=this.getRemainText(t-a);this.setState({time:"-".concat(r),timeColor:"grey",state:"READY",inputDisabled:!0})}else{var i=this.getRemainText(n-a);this.setState({time:"".concat(i),timeColor:"green",state:"RUN",inputDisabled:!1})}}},{key:"getEventItem",value:function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({fetching:!0}),t=w.url.bastet+this.state.name,e.next=4,S.a.get(t).then(function(e){I.a.success("You got a '".concat(w.itemName,"'!"),{position:"top-right",effect:"slide",beep:!1,timeout:7e3})}).catch(function(e){I.a.error("Can not get a '".concat(w.itemName,"'"),{position:"top-right",effect:"slide",beep:!1,timeout:3e3})});case 4:this.setState({fetching:!1});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchItemEventInfo()}},{key:"render",value:function(){var e=this.state,t=e.fetching,n=e.time,a=e.timeColor,i=e.imgUrl,o=e.inputDisabled;return r.a.createElement(b,null,r.a.createElement(E,{imgUrl:i,time:n,timeColor:a,inputDisabled:o,onClickGet:this.onClickGet,onChangeName:this.handleChange}),r.a.createElement(y,{active:t}))}}]),t}(a.Component),D=n(33),R=n.n(D),U=n(247),G=n.n(U),_=n(248),A=n.n(_),M=function(){function e(t,n){Object(l.a)(this,e),this.appName=n,R.a.plugins(new G.a),this.account=null,this.eosOptions={expireInSeconds:60},this.isConnected=!1,this.contract=null,this.eosApi=null,this.net=R.a.Network.fromJson(t),this.auth=null}return Object(p.a)(e,[{key:"connect",value:function(){var e=Object(u.a)(s.a.mark(function e(){var t,n=this;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.net,e.next=3,R.a.connect(this.appName,{network:t});case 3:if(this.isConnected=e.sent,this.isConnected){e.next=6;break}return e.abrupt("return",console.error("connection failed"));case 6:return this.eosApi=R.a.eos(this.net,A.a),e.next=9,R.a.login().then(function(e){if(!e)return console.error("no identity");n.account=R.a.account("eos"),n.auth={authorization:["".concat(n.account.name,"@").concat(n.account.authority)]}});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"loadContract",value:function(){var e=Object(u.a)(s.a.mark(function e(t){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.eosApi.contract(t);case 2:this.contract=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),L=(n(527),n(528),n(529),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={},n.scatter=new M(w.network,"EK Event"),n.onClick=n.onClick.bind(Object(d.a)(Object(d.a)(n))),n}return Object(f.a)(t,e),Object(p.a)(t,[{key:"onClick",value:function(){var e=Object(u.a)(s.a.mark(function e(){var t;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.scatter,e.next=3,t.connect();case 3:return e.next=5,t.loadContract("eosknightsio");case 5:return e.next=7,t.contract.signup(t.account.name,t.auth);case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(I.a,{stack:{limit:3}}))}}]),t}(a.Component));o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.96b47fed.chunk.js.map