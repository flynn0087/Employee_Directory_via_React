(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{24:function(e,t,n){},44:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n.n(c),r=n(12),s=n.n(r),i=(n(24),n(17)),l=n(13),o=n(14),h=n(15),j=n(19),d=n(18),u=n(0);var m=function(e){return Object(u.jsx)("div",{className:"container",children:e.children})};var b=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(u.jsx)("div",{className:t,children:e.children})};var O=function(e){return Object(u.jsx)("form",{children:Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{htmlFor:"search",children:"Employee Search:"}),Object(u.jsx)("input",{value:e.value,onChange:e.handleInputChange,name:"search",type:"text",className:"form-control",placeholder:"Search by employee name",id:"search"}),Object(u.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-success",children:"Search"}),Object(u.jsx)("button",{onClick:e.refreshPage,className:"btn btn-danger",children:"Refresh"})]})})};var p=function(e){return Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:Object(u.jsx)("img",{alt:e.firstName,src:e.picture})}),Object(u.jsx)("td",{children:e.firstName}),Object(u.jsx)("td",{children:e.lastName}),Object(u.jsx)("td",{children:e.email}),Object(u.jsx)("td",{children:e.phone}),Object(u.jsx)("td",{children:e.city})]})})},f=n(16),x=n.n(f),y=function(){return x.a.get("https://randomuser.me/api/?results=20&nat=us")},v=(n(44),function(e){Object(j.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={employees:[],search:""},e.searchName=function(t){console.log("Search by name:",t);var n=e.state.employees.filter((function(e){return-1!==Object.values(e).join("").toLocaleLowerCase().indexOf(t.toLowerCase())}));e.setState({employees:n})},e.handleInputChange=function(t){e.setState(Object(l.a)({},t.target.name,t.target.value))},e.handleFormSubmit=function(t){t.preventDefault(),e.searchName(e.state.search)},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;y().then((function(t){console.log(t),e.setState({employees:t.data.results.map((function(e,t){return{firstName:e.name.first,lastName:e.name.last,picture:e.picture.large,email:e.email,phone:e.phone,city:e.location.city,key:t}}))})})).catch((function(e){return console.log(e)}))}},{key:"refreshPage",value:function(){window.location.reload(!1)}},{key:"render",value:function(){return Object(u.jsxs)(m,{children:[Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(b,{size:"md-3"}),Object(u.jsxs)(b,{size:"md-6",children:[Object(u.jsx)("h2",{children:"Employee Directory"}),Object(u.jsx)(O,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})]}),Object(u.jsx)(b,{size:"md-3"})]}),Object(u.jsx)("div",{className:"row",children:Object(u.jsx)(b,{size:"md-12",children:Object(u.jsxs)("table",{className:"table",children:[Object(u.jsx)("thead",{children:Object(u.jsxs)("tr",{children:[Object(u.jsx)("th",{children:"Photo"}),Object(u.jsx)("th",{children:"First Name"}),Object(u.jsx)("th",{children:"Last Name"}),Object(u.jsx)("th",{children:"Email"}),Object(u.jsx)("th",{children:"Phone"}),Object(u.jsx)("th",{children:"City"})]})}),Object(i.a)(this.state.employees).map((function(e){return Object(u.jsx)(p,{picture:e.picture,firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,city:e.city},e.key)}))]})})})]})}}]),n}(c.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};n(45);s.a.render(Object(u.jsx)(a.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),g()}},[[46,1,2]]]);
//# sourceMappingURL=main.612acf7c.chunk.js.map