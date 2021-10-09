(this["webpackJsonpculturefit-front"]=this["webpackJsonpculturefit-front"]||[]).push([[0],{32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(16),a=n.n(c),r=n(13),o=n(15),i=n(21),l=Object(o.b)({loginReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loggedIn:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN":return{loggedIn:t.payload};default:return e}}});n(32);var j=n(23),b=n(3),u=n(8),d=n(9),h=n(11),p=n(10),O=(n(33),n(1)),m=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("nav",{className:"navBarFlexContainer",children:[Object(O.jsxs)("div",{className:"navLogo",children:[Object(O.jsx)("span",{className:"cultureLogo",children:"culture"}),Object(O.jsx)("span",{className:"fitLogo",children:"Fit"})]}),Object(O.jsxs)("div",{className:"navBarInnerContainer",children:[Object(O.jsx)("div",{className:"navElement",children:Object(O.jsx)("a",{href:"/",children:"Home"})}),Object(O.jsx)("div",{className:"navElement",children:Object(O.jsx)("a",{href:"/signup",children:"Signup"})}),Object(O.jsx)("div",{className:"navElement",children:Object(O.jsx)("a",{href:"/login",children:"Login"})})]})]})}}]),n}(s.Component),x=(n(35),function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsxs)("div",{className:"gridContainer",children:[Object(O.jsx)("div",{className:"firstSection",children:Object(O.jsx)("h1",{children:"Find the perfect fit for your company\u2019s culture."})}),Object(O.jsx)("div",{className:"secondSection"}),Object(O.jsx)("div",{className:"secondSectionOverlap",children:"DUN DUN DUNNNNN"}),Object(O.jsx)("div",{className:"thirdSection",children:Object(O.jsx)("h2",{children:"Blah blah corporate bullshit blah blah."})}),Object(O.jsx)("div",{className:"fourthSection",children:"footer"})]})]})}}]),n}(s.Component)),g=n(22),f=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(e){var s;return Object(u.a)(this,n),(s=t.call(this)).handleChange=function(e){s.setState(Object(g.a)({},e.target.name,e.target.value),(function(){s.passwordsMatchState()}))},s.passwordsMatchState=function(){console.log(s.state.password!==s.state.confirmpass),s.passwordsMatch()?s.setState({signupError:Object(O.jsx)("div",{style:{color:"red"},children:"*Passwords must match to continue"})}):s.setState({signupError:null})},s.passwordsMatch=function(){return s.state.password!==s.state.confirmpass},s.handleSubmit=function(e){e.preventDefault(),null===s.state.name||null===s.state.email||null===s.state.user_type||null===s.state.password||s.passwordsMatch()?s.setState({signupError:Object(O.jsx)("div",{style:{color:"red"},children:"*All fields must be filled out, and passwords must match"})}):(console.log("valid entries"),s.submitToServer())},s.submitToServer=function(){s.props.history;return fetch("http://127.0.0.1:3001/users",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s.state.name,email:s.state.email,password:s.state.password,user_type:s.state.user_type})}).then((function(e){return e.json()})).then((function(e){s.props.dispatch({type:"LOGIN",payload:!0}),console.log(s.globalState)})).catch((function(e){s.setState({signupError:Object(O.jsx)("div",{style:{color:"red"},children:"Something went wrong"})}),console.error("Error:",e)}))},s.state={name:null,email:null,user_type:null,password:null,confirmpass:null,errorMessage:null,signupError:null},s}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsx)("h1",{children:"Sign Up"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("label",{children:"Username"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"name",onChange:this.handleChange}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"Email"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"email",onChange:this.handleChange}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"Account Type"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"radio",id:"company",name:"user_type",value:"company",onChange:this.handleChange}),Object(O.jsx)("label",{htmlFor:"company",children:"Company"}),Object(O.jsx)("input",{type:"radio",id:"job_seeker",name:"user_type",value:"job_seeker",onChange:this.handleChange}),Object(O.jsx)("label",{htmlFor:"job_seeker",children:"Job Seeker"}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"password",name:"password",onChange:this.handleChange}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"Confirm Password"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"password",name:"confirmpass",onChange:this.handleChange}),Object(O.jsx)("br",{}),this.state.signupError,Object(O.jsx)("input",{type:"submit",value:"Sign Up",className:"submitButton",onClick:this.handleSubmit})]})]})}}]),n}(s.Component),v=Object(r.b)((function(e){return console.log("FROM CONNECT",e),e}))(f),y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,{}),Object(O.jsx)("h1",{children:"Log In"}),Object(O.jsxs)("form",{children:[Object(O.jsx)("label",{children:"Username"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"text",name:"name"}),Object(O.jsx)("br",{}),Object(O.jsx)("br",{}),Object(O.jsx)("label",{children:"Password"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"password",name:"password"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"submit",value:"Log in",className:"submitButton"})]})]})}}]),n}(s.Component);var C=Object(r.b)()((function(e){return console.log(e),console.log("hi"),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(j.a,{basename:"/culturefit-front",children:Object(O.jsx)(b.c,{children:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(b.a,{exact:!0,path:"/",component:x}),Object(O.jsx)(b.a,{exact:!0,path:"/signup",component:v}),Object(O.jsx)(b.a,{exact:!0,path:"/login",component:y})]})})})})})),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,39)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),s(e),c(e),a(e),r(e)}))},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(o.c)(l,e,Object(o.a)(i.a))}();console.log(w),a.a.render(Object(O.jsx)(r.a,{store:w,children:Object(O.jsx)(C,{})}),document.getElementById("root")),N()}},[[38,1,2]]]);
//# sourceMappingURL=main.4fac47b8.chunk.js.map