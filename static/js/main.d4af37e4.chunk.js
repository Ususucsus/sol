(this.webpackJsonpsolfront=this.webpackJsonpsolfront||[]).push([[0],{12:function(e,t,a){e.exports=a(22)},17:function(e,t,a){},18:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),l=(a(17),a(1)),i=a(2),o=a(5),m=a(4),u=a(3),p=(a(18),a(24)),h=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:this.props.src}))}}]),a}(r.a.Component),d=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"staticInfoBlock"},r.a.createElement("div",{className:"staticInfo"},r.a.createElement("p",{style:{color:this.props.error?"red":"black"}},this.props.text)),r.a.createElement(h,{src:this.props.error?this.props.src+"-error.png":this.props.src+".png"}))}}]),a}(r.a.Component),v=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={disabled:n.props.isDisabled},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent nameBlockContent"},r.a.createElement("div",{className:"nameOverflowContainter"},r.a.createElement("div",{className:"nameContainer"},r.a.createElement("p",{className:"name"},this.props.name),r.a.createElement("p",{className:"surname"},this.props.surname))),r.a.createElement("div",{className:"staticInfoContainer"},r.a.createElement("div",{className:"InfoContainer"},this.state.disabled?r.a.createElement(d,{className:"staticInfoPanel error",text:"\u041a\u0430\u0440\u0442\u0430 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0430",src:"icons/alert-octagon",error:!0}):r.a.createElement("div",{style:{height:"43px"}}),r.a.createElement(d,{className:"staticInfoPanel",text:this.props.mobile,src:"icons/call-phone"}),r.a.createElement(d,{className:"staticInfoPanel",text:this.props.birthday,src:"icons/calendar-dates"}),r.a.createElement(d,{className:"staticInfoPanel",text:this.props.cardid,src:"icons/creditcard"}))),r.a.createElement("div",{className:"clear"})))}}]),a}(r.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(h,{src:this.props.src}),r.a.createElement("div",{style:{marginLeft:"6px",marginTop:"-5px"}},r.a.createElement("p",{className:"light",style:{fontSize:24}},this.props.text)))}}]),a}(r.a.Component);function f(e){return e<=100?g(e):e>100?g(e%100):void 0}function E(e){return 0==e?"":1==e?"\u0430":2<=e&&e<=4?"\u044b":5<=e&&e<=20?"":void 0}function g(e){return e<=20?E(e):21<=e<=100?E(e%10):void 0}function k(e){return e<=100?j(e):e>100?j(e%100):void 0}function N(e){return 0==e?"\u043e\u0432":1==e?"":2<=e&&e<=4?"\u0430":5<=e&&e<=20?"\u043e\u0432":void 0}function j(e){return e<=20?N(e):21<=e<=100?N(e%10):void 0}function O(e,t){var a=new Headers;a.append("Content-Type","application/json"),a.append("Accept","application/json");var n=JSON.stringify({cardid:e,mobile:t}),r={method:"POST",headers:a,body:n,redirect:"follow"};return console.log(n),new Promise((function(e,t){fetch("https://rscradik.asuscomm.com:5001/api/getRecord",r).then((function(e){return!1===e.ok&&t("result is not ok"),e.json()})).then((function(t){console.log(t),e(t)})).catch((function(e){t("error")}))}))}var y=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"formatMinutes",value:function(){return"\u0412\u0441\u0435\u0433\u043e \u0432 \u0441\u043e\u043b\u044f\u0440\u0438\u0438 \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043e "+this.props.totalMinutes+" \u043c\u0438\u043d\u0443\u0442"+f(this.props.totalMinutes)}},{key:"formatMoney",value:function(){return"\u041d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043e "+this.props.money+" \u0431\u0430\u043b\u043b"+k(this.props.money)}},{key:"formatPercent",value:function(){return"\u0421\u043a\u0438\u0434\u043a\u0430 \u2014 "+this.props.sale+" \u043f\u0440\u043e\u0446\u0435\u043d\u0442"+k(this.props.sale)}},{key:"render",value:function(){return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent"},r.a.createElement("div",{className:"blockTitle"},r.a.createElement("p",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")),r.a.createElement("div",{className:"afterTitleWrapper"},r.a.createElement("div",{className:"sale"},r.a.createElement("p",{className:"semiTitle"},this.formatPercent()),r.a.createElement("div",{className:"saleDescriptionWrapper"},r.a.createElement(b,{src:"icons/alert-circle.png",text:this.props.saleComment}))),r.a.createElement("div",{className:"minutes"},r.a.createElement("p",{className:"semiTitle"},this.formatMoney()),r.a.createElement("div",{className:"minutesDescriptionWrapper"},r.a.createElement(b,{src:"icons/time.png",text:this.formatMinutes()}))))))}}]),a}(r.a.Component),C=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"formatMinutes",value:function(){return this.props.minutes+" \u043c\u0438\u043d\u0443\u0442"+f(this.props.minutes)}},{key:"formatAccessibleFor",value:function(){for(var e="\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u043b\u044f ",t=0;t<this.props.accessibleFor.length-2;t++)e+=this.props.accessibleFor[t]+", ";return this.props.accessibleFor.length>=2?e+=this.props.accessibleFor[this.props.accessibleFor.length-2]+" \u0438 "+this.props.accessibleFor[this.props.accessibleFor.length-1]:e+=this.props.accessibleFor[this.props.accessibleFor.length-1],e+=" \u0441\u043e\u043b\u044f\u0440\u0438\u044f"}},{key:"formatExpireDate",value:function(){return"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e "+this.props.expireDate}},{key:"render",value:function(){return r.a.createElement("div",{className:"minute"},r.a.createElement("p",{className:"semiTitle"},this.formatMinutes()),r.a.createElement("div",{className:"minuteDescriptionWrapper"},r.a.createElement("div",{className:"textWrapper"},r.a.createElement("p",{className:"light"},this.formatAccessibleFor()))),r.a.createElement("div",{className:"minuteDescriptionWrapper"},r.a.createElement(b,{src:"icons/timer.png",text:this.formatExpireDate()})))}}]),a}(r.a.Component),x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.saleMinutes.length;t++){var a=this.props.saleMinutes[t];e.push(r.a.createElement(C,{minutes:a.Minutes,accessibleFor:a.AccessibleFor,expireDate:a.ExpireDate,key:t}))}return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent"},r.a.createElement("div",{className:"blockTitle"},r.a.createElement("p",null,"\u041f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0435 \u043c\u0438\u043d\u0443\u0442\u044b")),r.a.createElement("div",{className:"afterTitleWrapperVertical"},e)))}}]),a}(r.a.Component),M=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"formatExpireDate",value:function(){return"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e "+this.props.expireDate}},{key:"render",value:function(){return r.a.createElement("div",{className:"present"},r.a.createElement("div",{className:"textWrapper"},r.a.createElement("p",{className:"semiTitle"},this.props.name)),r.a.createElement("div",{className:"minuteDescriptionWrapper"},r.a.createElement(b,{src:"icons/timer.png",text:this.formatExpireDate()})))}}]),a}(r.a.Component),D=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){for(var e=[],t=0;t<this.props.presents.length;t++){var a=this.props.presents[t];e.push(r.a.createElement(M,{name:a.Name,expireDate:a.ExpireDate,key:t}))}return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent"},r.a.createElement("div",{className:"blockTitle"},r.a.createElement("p",null,"\u041f\u043e\u0434\u0430\u0440\u043a\u0438")),r.a.createElement("div",{className:"afterTitleWrapperVertical"},e)))}}]),a}(r.a.Component),w=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent"},r.a.createElement("div",{className:"blockTitle"},r.a.createElement("p",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),r.a.createElement("div",{className:"afterTitleWrapperVertical"},r.a.createElement("div",null,r.a.createElement("p",{className:"semiTitle"},"\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c"),r.a.createElement("p",{className:"tire"},"\u2014"),r.a.createElement("p",{className:"after"},"+7 917 802-13-33")),r.a.createElement("div",null,r.a.createElement("p",{className:"semiTitle"},"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"),r.a.createElement("p",{className:"tire"},"\u2014"),r.a.createElement("p",{className:"after"},"mail@mail.ru")),r.a.createElement("div",null,r.a.createElement("p",{className:"semiTitle"},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"),r.a.createElement("p",{className:"tire"},"\u2014"),r.a.createElement("div",{className:"footerIcons"},r.a.createElement(h,{src:"icons/alert-circle.png"}),r.a.createElement(h,{src:"icons/alert-circle.png"}),r.a.createElement(h,{src:"icons/alert-circle.png"}),r.a.createElement(h,{src:"icons/alert-circle.png"}))),r.a.createElement("p",{className:"smol-light"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),r.a.createElement("p",{className:"smol-light"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"))))}}]),a}(r.a.Component),P=a(23),T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleMobileChange=n.handleMobileChange.bind(Object(o.a)(n)),n.handleCardChange=n.handleCardChange.bind(Object(o.a)(n)),n.handleLoginClick=n.handleLoginClick.bind(Object(o.a)(n)),n.handleCardKeyDown=n.handleCardKeyDown.bind(Object(o.a)(n)),n.state={mobile:"",card:"",error:!1,errorMessage:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props.cookies.get("mobile"),a=this.props.cookies.get("card");a&&t&&O(a,t).then((function(t){var a=t;e.props.changeRecord(a),e.props.changePanel("main")})).catch((function(t){e.props.cookies.remove("mobile"),e.props.cookies.remove("card")}))}},{key:"handleMobileChange",value:function(e){var t=e.target.value;this.setState((function(){return{mobile:t,error:!1}}))}},{key:"handleCardChange",value:function(e){var t=e.target.value;this.setState((function(){return{card:t,error:!1}}))}},{key:"handleLoginClick",value:function(){var e=this;console.log("login"),console.log(this.state.mobile),console.log(this.state.card);var t=!1,a="";this.state.mobile&&""!==this.state.mobile?this.state.card&&""!==this.state.card||(a="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b.."):a="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430.",""!==a?(t=!0,this.setState((function(){return{error:t,errorMessage:a}}))):O(this.state.card,this.state.mobile).then((function(t){var a=t;e.props.cookies.set("mobile",e.state.mobile,{maxAge:3600,secure:!0}),e.props.cookies.set("card",e.state.card,{maxAge:3600,secure:!0}),e.props.changeRecord(a),e.props.changePanel("main")})).catch((function(n){t=!0,a="\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0438\u043b\u0438 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437.",e.setState((function(){return{error:t,errorMessage:a}}))}))}},{key:"handleCardKeyDown",value:function(e){"Enter"===e.key&&this.handleLoginClick()}},{key:"render",value:function(){return r.a.createElement("div",{className:"loginBlock"},r.a.createElement("div",{className:"loginContent"},r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"name"},"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),r.a.createElement("input",{className:"mobileInput",name:"mobile",type:"text",placeholder:"+79991234567",onChange:this.handleMobileChange,value:this.state.mobile})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"card"},"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"),r.a.createElement("input",{className:"cardInput",name:"card",type:"number",placeholder:"8000012345",onChange:this.handleCardChange,onKeyDown:this.handleCardKeyDown,value:this.state.card})),this.state.error?r.a.createElement("div",{className:"errorMessage"},this.state.errorMessage):null,r.a.createElement("div",{className:"inputBlock"},r.a.createElement("button",{className:"loginButton",onClick:this.handleLoginClick},"\u0412\u043e\u0439\u0442\u0438"))))}}]),a}(r.a.Component),B=Object(P.a)(T),F=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).logout=n.logout.bind(Object(o.a)(n)),n.state={},n}return Object(i.a)(a,[{key:"logout",value:function(){this.props.cookies.remove("mobile"),this.props.cookies.remove("card"),this.props.changePanel("login")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"block logout"},r.a.createElement("div",{className:"blockContent"},r.a.createElement("button",{onClick:function(){return e.logout()}},"\u0412\u044b\u0439\u0442\u0438")))}}]),a}(r.a.Component),I=Object(P.a)(F),S=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changePanel=n.changePanel.bind(Object(o.a)(n)),n.changeRecord=n.changeRecord.bind(Object(o.a)(n)),n.state={currentView:"login",record:void 0},n}return Object(i.a)(a,[{key:"changePanel",value:function(e){this.setState((function(){return{currentView:e}}))}},{key:"changeRecord",value:function(e){this.setState((function(){return{record:e}}))}},{key:"render",value:function(){var e=this.state.record;return r.a.createElement("div",null,r.a.createElement(p.a,null,"login"===this.state.currentView?r.a.createElement("div",{className:"content"},r.a.createElement(B,{changePanel:this.changePanel,changeRecord:this.changeRecord})):r.a.createElement("div",{className:"content"},r.a.createElement(v,{name:e.Name,surname:e.SurName,isDisabled:e.IsDisabled,cardid:e.CardId,mobile:e.Mobile,birthday:e.Birthday}),r.a.createElement(y,{sale:e.Sale,saleComment:e.SaleComment,money:e.Money,totalMinutes:e.TotalMinutes}),r.a.createElement(x,{saleMinutes:e.SaleMinutes}),r.a.createElement(D,{presents:e.Presents}),r.a.createElement(w,null),r.a.createElement(I,{changePanel:this.changePanel}))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.d4af37e4.chunk.js.map