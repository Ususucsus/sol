(this.webpackJsonpsolfront=this.webpackJsonpsolfront||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),l=a.n(c),s=(a(13),a(1)),i=a(2),o=a(4),m=a(3),u=(a(14),function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"icon"},r.a.createElement("img",{src:"sol/"+this.props.src}))}}]),a}(r.a.Component)),p=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"staticInfoBlock"},r.a.createElement("div",{className:"staticInfo"},r.a.createElement("p",{style:{color:this.props.error?"red":"black"}},this.props.text)),r.a.createElement(u,{src:this.props.error?this.props.src+"-error.png":this.props.src+".png"}))}}]),a}(r.a.Component),d=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={disabled:!0},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent nameBlockContent"},r.a.createElement("div",{className:"nameOverflowContainter"},r.a.createElement("div",{className:"nameContainer"},r.a.createElement("p",{className:"name"},"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d"),r.a.createElement("p",{className:"surname"},"\u041a\u043e\u043d\u0441\u0442\u0430\u043d\u0442\u0438\u043d\u043e\u0432\u0441\u043a\u0438\u0439"))),r.a.createElement("div",{className:"staticInfoContainer"},r.a.createElement("div",{className:"InfoContainer"},this.state.disabled?r.a.createElement(p,{className:"staticInfoPanel error",text:"\u041a\u0430\u0440\u0442\u0430 \u0437\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u0430",src:"icons/alert-octagon",error:!0}):r.a.createElement("div",{style:{height:"43px"}}),r.a.createElement(p,{className:"staticInfoPanel",text:"+7 999 132-15-56",src:"icons/call-phone"}),r.a.createElement(p,{className:"staticInfoPanel",text:"14.04.2001",src:"icons/calendar-dates"}),r.a.createElement(p,{className:"staticInfoPanel",text:"80000 58434",src:"icons/creditcard"}))),r.a.createElement("div",{className:"clear"})))}}]),a}(r.a.Component),h=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(u,{src:this.props.src}),r.a.createElement("div",{style:{marginLeft:"6px",marginTop:"-5px"}},r.a.createElement("p",{className:"light",style:{fontSize:24}},this.props.text)))}}]),a}(r.a.Component),v=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent"},r.a.createElement("div",{className:"blockTitle"},r.a.createElement("p",null,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f")),r.a.createElement("div",{className:"afterTitleWrapper"},r.a.createElement("div",{className:"sale"},r.a.createElement("p",{className:"semiTitle"},"\u0421\u043a\u0438\u0434\u043a\u0430 \u2014 100 \u043f\u0440\u043e\u0446\u0435\u043d\u0442\u043e\u0432"),r.a.createElement("div",{className:"saleDescriptionWrapper"},r.a.createElement(h,{src:"icons/alert-circle.png",text:"\u0422\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u041f\u0440\u0435\u043c\u0438\u0443\u043c \u0441\u043e\u043b\u044f\u0440\u0438\u0439, \u043f\u043e\u0442\u043e\u043c\u0443 \u0447\u0442\u043e \u043c\u044b \u0442\u0430\u043a \u0445\u043e\u0442\u0438\u043c."}))),r.a.createElement("div",{className:"minutes"},r.a.createElement("p",{className:"semiTitle"},"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u044b\u0445 \u043c\u0438\u043d\u0443\u0442 \u2014 9999"),r.a.createElement("div",{className:"minutesDescriptionWrapper"},r.a.createElement(h,{src:"icons/time.png",text:"\u0412\u0441\u0435\u0433\u043e \u043f\u0440\u043e\u0432\u0435\u0434\u0435\u043d\u043e \u0432 \u0441\u043e\u043b\u044f\u0440\u0438\u0438 92 \u043c\u0438\u043d\u0443\u0442\u044b"}))))))}}]),a}(r.a.Component);function E(e){return 0==e?"":1==e?"\u0430":2<=e&&e<=4?"\u044b":5<=e&&e<=20?"":void 0}function b(e){return e<=20?E(e):21<=e<=100?E(e%10):void 0}var f=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"formatMinutes",value:function(){return this.props.minutes+" \u043c\u0438\u043d\u0443\u0442"+((e=this.props.minutes)<=100?b(e):e>100?b(e%100):void 0);var e}},{key:"formatAccessibleFor",value:function(){for(var e="\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b \u0434\u043b\u044f ",t=0;t<this.props.accessibleFor.length-2;t++)e+=this.props.accessibleFor[t]+", ";return this.props.accessibleFor.length>=2?e+=this.props.accessibleFor[this.props.accessibleFor.length-2]+" \u0438 "+this.props.accessibleFor[this.props.accessibleFor.length-1]:e+=this.props.accessibleFor[this.props.accessibleFor.length-1],e+=" \u0441\u043e\u043b\u044f\u0440\u0438\u044f"}},{key:"formatExpireDate",value:function(){return"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e "+this.props.expireDate}},{key:"render",value:function(){return r.a.createElement("div",{className:"minute"},r.a.createElement("p",{className:"semiTitle"},this.formatMinutes()),r.a.createElement("div",{className:"minuteDescriptionWrapper"},r.a.createElement("div",{className:"textWrapper"},r.a.createElement("p",{className:"light"},this.formatAccessibleFor()))),r.a.createElement("div",{className:"minuteDescriptionWrapper"},r.a.createElement(h,{src:"icons/timer.png",text:this.formatExpireDate()})))}}]),a}(r.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent"},r.a.createElement("div",{className:"blockTitle"},r.a.createElement("p",null,"\u041f\u043e\u0434\u0430\u0440\u043e\u0447\u043d\u044b\u0435 \u043c\u0438\u043d\u0443\u0442\u044b")),r.a.createElement("div",{className:"afterTitleWrapperVertical"},r.a.createElement(f,{minutes:1,accessibleFor:["\u041f\u0440\u0435\u043c\u0438\u0443\u043c"],expireDate:"08.07.2020"}),r.a.createElement(f,{minutes:1211,accessibleFor:["\u042d\u043a\u043e\u043d\u043e\u043c","\u041f\u0440\u0435\u043c\u0438\u0443\u043c"],expireDate:"31.12.2021"}),r.a.createElement(f,{minutes:25,accessibleFor:["\u042d\u043a\u043e\u043d\u043e\u043c","\u041f\u0440\u0435\u043c\u0438\u0443\u043c","\u0412\u0438\u043f"],expireDate:"08.08.2020"}))))}}]),a}(r.a.Component),g=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"present"},r.a.createElement("div",{className:"textWrapper"},r.a.createElement("p",{className:"semiTitle"},"\u0412\u0441\u0435\u043c \u043a\u0442\u043e \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u0435\u0431\u044f \u0432\u0435\u043b \u0432 2020 \u0433\u043e\u0434\u0443, \u043f\u043e\u043b\u0430\u0433\u0430\u0435\u0442\u0441\u044f \u0441\u043a\u0438\u0434\u043a\u0430 \u0432 \u0440\u0430\u0437\u043c\u0435\u0440\u0435 20% \u043d\u0430 \u043f\u0435\u0440\u0432\u043e\u0435 \u043f\u043e\u0441\u0435\u0449\u0435\u043d\u0438\u0435 \u043a\u0430\u043a\u043e\u0433\u043e-\u0442\u043e \u0442\u0430\u043c \u0441\u043e\u043b\u044f\u0440\u0438\u0439 \u0434\u043e \u043a\u043e\u043d\u0446\u0430 2021 \u0433\u043e\u0434\u0430")),r.a.createElement("div",{className:"minuteDescriptionWrapper"},r.a.createElement(h,{src:"icons/timer.png",text:"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u0435\u0442 \u0434\u043e 31.12.2021"})))}}]),a}(r.a.Component),k=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent"},r.a.createElement("div",{className:"blockTitle"},r.a.createElement("p",null,"\u041f\u043e\u0434\u0430\u0440\u043a\u0438")),r.a.createElement("div",{className:"afterTitleWrapperVertical"},r.a.createElement(g,null),r.a.createElement(g,null),r.a.createElement(g,null),r.a.createElement(g,null))))}}]),a}(r.a.Component),O=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"block nameBlock"},r.a.createElement("div",{className:"blockContent"},r.a.createElement("div",{className:"blockTitle"},r.a.createElement("p",null,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),r.a.createElement("div",{className:"afterTitleWrapperVertical"},r.a.createElement("div",null,r.a.createElement("p",{className:"semiTitle"},"\u041f\u043e\u0437\u0432\u043e\u043d\u0438\u0442\u044c"),r.a.createElement("p",{className:"tire"},"\u2014"),r.a.createElement("p",{className:"after"},"+7 999 132-15-56")),r.a.createElement("div",null,r.a.createElement("p",{className:"semiTitle"},"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c"),r.a.createElement("p",{className:"tire"},"\u2014"),r.a.createElement("p",{className:"after"},"mail@mail.ru")),r.a.createElement("div",null,r.a.createElement("p",{className:"semiTitle"},"\u041f\u043e\u0434\u0435\u043b\u0438\u0442\u044c\u0441\u044f"),r.a.createElement("p",{className:"tire"},"\u2014"),r.a.createElement("div",{className:"footerIcons"},r.a.createElement(u,{src:"icons/alert-circle.png"}),r.a.createElement(u,{src:"icons/alert-circle.png"}),r.a.createElement(u,{src:"icons/alert-circle.png"}),r.a.createElement(u,{src:"icons/alert-circle.png"}))),r.a.createElement("p",{className:"smol-light"},"\u041f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),r.a.createElement("p",{className:"smol-light"},"\u041e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"))))}}]),a}(r.a.Component),j=a(5),C=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).handleMobileChange=n.handleMobileChange.bind(Object(j.a)(n)),n.handleCardChange=n.handleCardChange.bind(Object(j.a)(n)),n.handleLoginClick=n.handleLoginClick.bind(Object(j.a)(n)),n.state={mobile:"",card:"",error:!1,errorMessage:""},n}return Object(i.a)(a,[{key:"handleMobileChange",value:function(e){var t=e.target.value;this.setState((function(){return{mobile:t,error:!1}}))}},{key:"handleCardChange",value:function(e){var t=e.target.value;this.setState((function(){return{card:t,error:!1}}))}},{key:"handleLoginClick",value:function(){console.log("login"),console.log(this.state.mobile),console.log(this.state.card);var e=!1,t="";this.state.mobile&&""!==this.state.mobile?this.state.card&&""!==this.state.card||(t="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"):t="\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",""!==t&&(e=!0),this.setState((function(){return{error:e,errorMessage:t}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"loginBlock"},r.a.createElement("div",{className:"loginContent"},r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"name"},"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430"),r.a.createElement("input",{className:"mobileInput",name:"mobile",type:"text",placeholder:"+79991234567",onChange:this.handleMobileChange,value:this.state.mobile})),r.a.createElement("div",{className:"inputBlock"},r.a.createElement("label",{htmlFor:"card"},"\u041d\u043e\u043c\u0435\u0440 \u043a\u0430\u0440\u0442\u044b"),r.a.createElement("input",{className:"cardInput",name:"card",type:"number",placeholder:"8000012345",onChange:this.handleCardChange,value:this.state.card})),this.state.error?r.a.createElement("div",{className:"errorMessage"},this.state.errorMessage):null,r.a.createElement("div",{className:"inputBlock"},r.a.createElement("button",{className:"loginButton",onClick:this.handleLoginClick},"\u0412\u043e\u0439\u0442\u0438"))))}}]),a}(r.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={currentView:"main"},n}return Object(i.a)(a,[{key:"changePanel",value:function(e){this.setState((function(){return{currentView:e}}))}},{key:"render",value:function(){return r.a.createElement("div",null,"login"===this.state.currentView?r.a.createElement("div",{className:"content"},r.a.createElement(C,null)):r.a.createElement("div",{className:"content"},r.a.createElement(d,null),r.a.createElement(v,null),r.a.createElement(N,null),r.a.createElement(k,null),r.a.createElement(O,null)))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.fe0c7d7c.chunk.js.map