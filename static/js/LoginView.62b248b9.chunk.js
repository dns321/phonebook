(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[2],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(33);function r(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,r=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(a=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);a=!0);}catch(c){r=!0,o=c}finally{try{a||null==s.return||s.return()}finally{if(r)throw o}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},115:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(114),r=n(0),o=(n(115),n(12)),i=n(24),s=n(1);t.default=function(e){e.onLogin;var t=Object(r.useState)(""),n=Object(a.a)(t,2),c=n[0],l=n[1],u=Object(r.useState)(""),b=Object(a.a)(u,2),d=b[0],f=b[1],h=Object(o.b)(),j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"email":l(a);break;case"password":f(a);break;default:console.warn("Type input name- ".concat(n," not exist"))}};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Login page"}),Object(s.jsx)("h2",{children:"Please enter Login and Password"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(i.a.logIn({email:c,password:d})),l(""),f("")},autoComplete:"off",className:"login-form",children:[Object(s.jsxs)("label",{className:"logit-label",children:["Email",Object(s.jsx)("input",{type:"email",name:"email",value:c,onChange:j})]}),Object(s.jsxs)("label",{className:"logit-label",children:["Password",Object(s.jsx)("input",{type:"password",name:"password",value:d,onChange:j})]}),Object(s.jsx)("button",{type:"submit",children:"Login"})]})]})}}}]);
//# sourceMappingURL=LoginView.62b248b9.chunk.js.map