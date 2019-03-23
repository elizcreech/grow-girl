(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,a){e.exports=a.p+"static/media/agriculture-splash.3f340158.jpg"},106:function(e,t,a){e.exports=a(268)},111:function(e,t,a){},112:function(e,t,a){},268:function(e,t,a){"use strict";a.r(t);var i=a(0),n=a.n(i),r=a(24),l=a.n(r),m=(a(111),a(56),a(15)),o=a(16),c=a(19),s=a(17),u=a(18),p=(a(112),a(70)),h=a(104),L=a.n(h),d=a(105),b=a.n(d),g=a(44),E=a.n(g),f=a(21),O=a.n(f),j=a(29),y=a(28),w=a(20),v=a(22),C=a.n(v),U=a(25),S=a.n(U),k=a(37),_=a.n(k),A=a(38),T=a.n(A),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={tempUpperLimit:"",tempLowerLimit:""},a.handleChange=a.handleChange.bind(Object(w.a)(Object(w.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(w.a)(Object(w.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value)),console.log(e.target.value)}},{key:"handleSubmit",value:function(){var e={tempUpperLimit:this.state.tempUpperLimit,tempLowerLimit:this.state.tempLowerLimit};this.props.tempAddLimits(e)}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,{variant:"h5",gutterBottom:!0},"Set High and Low Temperature Limits"),n.a.createElement(O.a,{variant:"h8",gutterBottom:!0},"Current Lower Limit is set to ",this.props.tempLowerLimit),n.a.createElement(O.a,{variant:"h8",gutterBottom:!0},"Current Upper Limit is set to ",this.props.tempUpperLimit),n.a.createElement(C.a,{container:!0,spacing:24},n.a.createElement(C.a,{item:!0,xs:12,sm:6},n.a.createElement(S.a,{required:!0,id:"tempUpperLimit",name:"tempUpperLimit",label:"High Temperature Limit",fullWidth:!0,autoComplete:"tempUpperLimit",onChange:function(t){return e.handleChange(t)}})),n.a.createElement(C.a,{item:!0,xs:12,sm:6},n.a.createElement(S.a,{required:!0,id:"tempLowerLimit",name:"tempLowerLimit",label:"Low Temperature Limit",fullWidth:!0,autoComplete:"tempLowerLimit",onChange:function(t){return e.handleChange(t)}})),n.a.createElement(C.a,{item:!0,xs:12},n.a.createElement(_.a,{control:n.a.createElement(T.a,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Verify Temperture Units"}))),n.a.createElement("div",{className:"control"},n.a.createElement("button",{onClick:this.handleSubmit,className:"button is-primary",type:"submit"},"Submit")))}}]),t}(i.Component),I=a(39),x=a.n(I),M=function(e){function t(){return Object(m.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Temperature Data"),n.a.createElement(x.a,{data:[{x:[1,2,3,4,5,6,7,8,9,10],y:[71,77,76,75,73,70,69,67,65,64],type:"scatter",mode:"lines+points",marker:{color:"green"}}],layout:{width:320,height:240,title:"Ten Day Temperature"}}),n.a.createElement(D,{tempAddLimits:this.props.tempAddLimits,tempUpperLimit:this.props.tempUpperLimit,tempLowerLimit:this.props.tempLowerLimit}))}}]),t}(i.Component),N=Object(j.b)(function(e){return{tempUpperLimit:e.tempUpperLimit,tempLowerLimit:e.tempLowerLimit}},function(e){return{tempAddLimits:function(t){return e({type:"ADD_TEMP_LIMITS",payload:t})}}})(M),G=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={smUpperLimit:"",smLowerLimit:""},a.handleChange=a.handleChange.bind(Object(w.a)(Object(w.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(w.a)(Object(w.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value)),console.log(e.target.value)}},{key:"handleSubmit",value:function(){var e={lightUpperLimit:this.state.lightUpperLimit,lightLowerLimit:this.state.lightLowerLimit};this.props.lightAddLimits(e)}},{key:"render",value:function(){var e=this;return console.log(this.props.lightAddLimits),n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,{variant:"h5",gutterBottom:!0},"Set Hours of Light Exposure Limits"),n.a.createElement(C.a,{container:!0,spacing:24},n.a.createElement(C.a,{item:!0,xs:12,sm:6},n.a.createElement(S.a,{required:!0,id:"lightUpperLimit",name:"lightUpperLimit",label:"Upper Limit (Max Hours of Light)",fullWidth:!0,autoComplete:"lightUpperLimit",onChange:function(t){return e.handleChange(t)}})),n.a.createElement(C.a,{item:!0,xs:12,sm:6},n.a.createElement(S.a,{required:!0,id:"lightLowerLimit",name:"lightLowerLimit",label:"Lower Limit (Min Hours of Light)",fullWidth:!0,autoComplete:"lightLowerLimit",onChange:function(t){return e.handleChange(t)}})),n.a.createElement(C.a,{item:!0,xs:12},n.a.createElement(_.a,{control:n.a.createElement(T.a,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Verify Lumens Units"}))),n.a.createElement("div",{className:"control"},n.a.createElement("button",{onClick:this.handleSubmit,className:"button is-primary",type:"submit"},"Submit")))}}]),t}(i.Component),H=function(e){function t(){return Object(m.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Light Data"),n.a.createElement(x.a,{data:[{type:"bar",x:[1,2,3,4,5,6,7],y:[12,12.5,13,12.75,11,11.25,12]}],layout:{width:320,height:240,title:"Hours of > 450 lux light"}}),n.a.createElement(G,{lightAddLimits:this.props.lightAddLimits,lightUpperLimit:this.props.lightUpperLimit,lightLowerLimit:this.props.lightLowerLimit}))}}]),t}(i.Component),V=Object(j.b)(function(e){return{lightUpperLimit:e.lightUpperLimit,lightLowerLimit:e.lightLowerLimit}},function(e){return{lightAddLimits:function(t){return e({type:"ADD_LIGHT_LIMITS",payload:t})}}})(H),B=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(c.a)(this,Object(s.a)(t).call(this,e))).state={smUpperLimit:"",smLowerLimit:""},a.handleChange=a.handleChange.bind(Object(w.a)(Object(w.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(w.a)(Object(w.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value)),console.log(e.target.value)}},{key:"handleSubmit",value:function(){var e={smUpperLimit:this.state.smUpperLimit,smLowerLimit:this.state.smLowerLimit};this.props.smAddLimits(e)}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement(O.a,{variant:"h5",gutterBottom:!0},"Set Soil Moisture Limits"),n.a.createElement(O.a,{variant:"h8",gutterBottom:!0},"Current Lower Limit is set to ",this.props.smLowerLimit),n.a.createElement(O.a,{variant:"h8",gutterBottom:!0},"Current Upper Limit is set to ",this.props.smUpperLimit),n.a.createElement(C.a,{container:!0,spacing:24},n.a.createElement(C.a,{item:!0,xs:12,sm:6},n.a.createElement(S.a,{required:!0,id:"smUpperLimit",name:"smUpperLimit",label:"Upper Limit (Volumetric)",fullWidth:!0,autoComplete:"smUpperLimit",onChange:function(t){return e.handleChange(t)}})),n.a.createElement(C.a,{item:!0,xs:12,sm:6},n.a.createElement(S.a,{required:!0,id:"smLowerLimit",name:"smLowerLimit",label:"Lower Limit (Volumetric)",fullWidth:!0,autoComplete:"smLowerLimit",onChange:function(t){return e.handleChange(t)}})),n.a.createElement(C.a,{item:!0,xs:12},n.a.createElement(_.a,{control:n.a.createElement(T.a,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Verify Volumetric Units"}))),n.a.createElement("div",{className:"control"},n.a.createElement("button",{onClick:this.handleSubmit,className:"button is-primary",type:"submit"},"Submit")))}}]),t}(i.Component),W=function(e){function t(){return Object(m.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Volumetric Soil Moisture Data"),n.a.createElement(x.a,{data:[{x:[1,2,3,4,5,6,7,8,9,10],y:[71,77,76,75,73,70,69,67,65,64],type:"scatter",mode:"lines+points",marker:{color:"green"}},{type:"bar",x:[1,2,3,4,5,6,7],y:[12,12.5,13,12.75,11,11.25,12]}],layout:{width:320,height:240,title:"Volumetric Soil Moisture Content"}}),n.a.createElement(B,{smAddLimits:this.props.smAddLimits,smUpperLimit:this.props.smUpperLimit,smLowerLimit:this.props.smLowerLimit}))}}]),t}(i.Component),q=Object(j.b)(function(e){return{smUpperLimit:e.smUpperLimit,smLowerLimit:e.smLowerLimit}},function(e){return{smAddLimits:function(t){return e({type:"ADD_SOIL_LIMITS",payload:t})}}})(W),X=a(103),F=a.n(X),J=function(e){function t(){return Object(m.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("h1",null,"Welcome to Grow Girl!"),n.a.createElement("h3",null," Grow Girl is an exciteing new tool you can use to monitor the health of your plants."),n.a.createElement("h3",null,"You can follow the progress of botany biom from seedling to growth to bloom and fuit stages."),n.a.createElement("img",{src:F.a}))}}]),t}(i.Component);function P(e){return n.a.createElement(O.a,{component:"div",style:{padding:24}},e.children)}var R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(n)))).state={value:0},a.handleChange=function(e,t){a.setState({value:t})},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return n.a.createElement("div",{className:e.root},n.a.createElement(L.a,{position:"static"},n.a.createElement(b.a,{value:t,onChange:this.handleChange},n.a.createElement(E.a,{label:"Grow Home"}),n.a.createElement(E.a,{label:"Temperature"}),n.a.createElement(E.a,{label:"Light Hours"}),n.a.createElement(E.a,{label:"Soil Moisture"}))),0===t&&n.a.createElement(P,null,n.a.createElement(J,null)),1===t&&n.a.createElement(P,null,n.a.createElement(N,null)),2===t&&n.a.createElement(P,null,n.a.createElement(V,null)),3===t&&n.a.createElement(P,null,n.a.createElement(q,null)))}}]),t}(n.a.Component),Y=Object(p.withStyles)(function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}})(R),z=function(e){function t(){return Object(m.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement(Y,null))}}]),t}(i.Component),K=function(e){function t(){return Object(m.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement("h1",null,"Grow Girl"),n.a.createElement(z,null))}}]),t}(i.Component),Q=a(55),Z={tempLimits:[]},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_SOIL_LIMITS":return Object(Q.a)({},e,{smUpperLimit:t.payload.smUpperLimit,smLowerLimit:t.payload.smLowerLimit});case"ADD_LIGHT_LIMITS":return Object(Q.a)({},e,{lightUpperLimit:t.payload.lightUpperLimit,lightLowerLimit:t.payload.lightLowerLimit});case"ADD_TEMP_LIMITS":return console.log(t.payload),Object(Q.a)({},e,{tempUpperLimit:t.payload.tempUpperLimit,tempLowerLimit:t.payload.tempLowerLimit});case"EXCEEDS_LIMITS":default:return e}},ee=a(53),te=Object(ee.b)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(n.a.createElement(j.a,{store:te},n.a.createElement(K,null)),document.getElementById("root"))}},[[106,1,2]]]);
//# sourceMappingURL=main.a8e6c9ca.chunk.js.map