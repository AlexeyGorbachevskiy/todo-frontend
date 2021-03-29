(this["webpackJsonptodo-frontend"]=this["webpackJsonptodo-frontend"]||[]).push([[0],{30:function(e,t,n){},40:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),c=n(31),o=n.n(c),s=(n(40),n(26)),i=n(4),u=n(6);function l(){}var d=Object(a.createContext)({token:null,userId:null,login:l,logout:l,isAuthenticated:!1,email:null}),b=n(7),f="#1C1C24",j="#131419",p="#2b2bc6",h="#235b59",m="#FAFBFC",O="#DFE1E6",g="#5684f6",v="#ffffff",A="#5AAC44",x="#ffa500";function k(){var e=Object(u.a)(['\n  position: relative;\n  z-index: 0;\n  width: 100%;\n  height: 100vh;\n  font-family: "Comic Sans MS", sans-serif;\n  background-color: ',";\n"]);return k=function(){return e},e}var w=b.a.div(k(),(function(e){return e.backgroundColor||f})),C=function(e){var t=e.children,n=e.backgroundColor,a=e.className;return Object(r.jsx)(w,{className:a,backgroundColor:n,children:t})};n(43);function N(){var e=Object(u.a)(["\n  width: 100%;\n  height: 80px;\n  background: ",";\n"]);return N=function(){return e},e}var T=b.a.div(N(),(function(e){return e.backgroundColor||f})),y=function(e){var t=e.children,n=e.backgroundColor,a=e.className;return Object(r.jsx)(T,{backgroundColor:n,className:a,children:t})},I=n.p+"static/media/logo.e3e802a8.png",E=n.p+"static/media/logout.a44263bd.svg",B=n(3);n(44),n(45),n(46);function S(){var e=Object(u.a)(["\n  width: 80px;\n  height: 1px;\n  background-color: #262631;\n"]);return S=function(){return e},e}function D(){var e=Object(u.a)(["\n  display: ",";\n  position: absolute;\n  z-index: 1000;\n  top: 14px;\n  right: ",";\n  \n  width: 100px;\n  min-height: ",";\n  background-color: ",";\n  border: 2px solid #262631;\n  border-radius: 10px;\n  \n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n"]);return D=function(){return e},e}var P=b.a.div(D(),(function(e){return e.isOpen?"flex":"none"}),(function(e){return e.customOffset?"35px":"-90px"}),(function(e){var t=e.renameTodoPending,n=e.isAddTaskPending,r=e.renameTaskPending;return t||n||r?"40px":"80px"}),(function(){return f})),R=b.a.div(S()),U=function(e){var t=e.isOpen,n=e.className,c=e.items,o=e.renameTodoPending,s=e.isAddTaskPending,i=e.renameTaskPending,u=e.customOffset;return Object(r.jsx)(P,{className:n,isOpen:t,items:c,renameTodoPending:o,isAddTaskPending:s,renameTaskPending:i,customOffset:u,children:c.map((function(e,t){return Object(r.jsxs)(a.Fragment,{children:[Object(r.jsx)("div",{className:"todo-popup-btn",onClick:e.handler,children:e.name}),t!==c.length-1&&Object(r.jsx)(R,{})]},t)}))})},L=n(22);function V(){var e=Object(u.a)(["\n   max-width: 400px;\n   width: 100%;\n   height: 44px;\n   padding: .5em;\n   margin: 0 0 1.2em;\n   background-color: ",";\n   border: 2px solid ",";\n   font-size: 14px;\n   border-radius: 3px;\n   transition: background-color .2s ease-in-out 0s, border-color .2s ease-in-out 0s;\n \n  &:focus {\n    background-color: ",";\n    border-color: ",";\n  }\n"]);return V=function(){return e},e}var Q=b.a.input(V(),(function(e){return Object(L.a)(e),m}),(function(e){return e.isEmpty?"red":O}),(function(){return v}),(function(e){return Object(L.a)(e),g})),F=function(e){var t=e.placeholder,n=e.id,a=e.type,c=e.name,o=e.className,s=e.value,i=e.onChange,u=e.autoFocus,l=e.onBlur,d=e.onEnter,b=e.inputRef,f=e.style;return Object(r.jsx)(Q,{placeholder:t,id:n,type:a,name:c,className:o,value:s,onChange:i,autoFocus:u,onBlur:l,onKeyPress:function(e){"Enter"===e.key&&d&&d()},ref:b,style:f})},K=n(2),J=Object(K.e)(null),M=Object(K.e)([]),X=Object(K.e)(""),z=Object(K.e)(""),q=Object(K.e)(""),Y=Object(K.e)(!1),G=Object(K.e)(!1),W=Object(K.d)(),Z=Object(K.d)(),H=Object(K.d)(),_=Object(K.d)(),$=Object(K.d)(),ee=Object(K.d)(),te=Object(K.d)(),ne=Object(K.d)(),re=Object(K.d)(),ae=Object(K.d)(),ce=Object(K.d)(),oe=Object(K.d)(),se=Object(K.d)(),ie=Object(K.d)(),ue=Object(K.d)(),le=Object(K.d)(),de=n(5),be=n.n(de),fe=n(10),je=function(){var e=Object(fe.a)(be.a.mark((function e(t){var n,r,a,c,o,s=arguments;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=s.length>1&&void 0!==s[1]?s[1]:"GET",r=s.length>2&&void 0!==s[2]?s[2]:null,a=s.length>3&&void 0!==s[3]?s[3]:{"Content-Type":"application/json"},e.prev=3,r&&(r=JSON.stringify(r),a["Content-Type"]="application/json"),e.next=7,fetch("https://todo-backend-node-js.herokuapp.com".concat(t),{method:n,body:r,headers:a});case 7:return c=e.sent,e.next=10,c.json();case 10:if(o=e.sent,c.ok){e.next=13;break}throw new Error(o.message||"Error is occurred");case 13:return e.abrupt("return",o);case 16:throw e.prev=16,e.t0=e.catch(3),e.t0;case 19:case"end":return e.stop()}}),e,null,[[3,16]])})));return function(t){return e.apply(this,arguments)}}(),pe=Object(K.c)(function(){var e=Object(fe.a)(be.a.mark((function e(t){var n;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,je("/api/todos","GET",null,{Authorization:"Bearer ".concat(t)});case 4:return n=e.sent,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(1),e.t0;case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()),he=Object(K.c)(function(){var e=Object(fe.a)(be.a.mark((function e(t){var n,r,a,c;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(B.a)(t,2),r=n[0],a=n[1],c=null,e.prev=2,e.next=5,je("/api/todos","POST",{name:r},{Authorization:"Bearer ".concat(a)});case 5:return c=e.sent,e.abrupt("return",c);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),me=Object(K.c)(function(){var e=Object(fe.a)(be.a.mark((function e(t){var n,r,a,c,o,s;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(B.a)(t,2),r=n[0],a=n[1],c=a.name,o=a.todoId,s=null,e.prev=3,e.next=6,je("/api/todos","PUT",{name:c,todoId:o},{Authorization:"Bearer ".concat(r)});case 6:return s=e.sent,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()),Oe=Object(K.c)(function(){var e=Object(fe.a)(be.a.mark((function e(t){var n,r,a,c;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(B.a)(t,2),r=n[0],a=n[1],c=null,e.prev=2,e.next=5,je("/api/todos","DELETE",{todoId:a},{Authorization:"Bearer ".concat(r)});case 5:return c=e.sent,e.abrupt("return",c);case 9:throw e.prev=9,e.t0=e.catch(2),e.t0;case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),ge=Object(K.c)(function(){var e=Object(fe.a)(be.a.mark((function e(t){var n,r,a,c,o,s;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(B.a)(t,2),r=n[0],a=n[1],c=a.name,o=a.todoId,s=null,e.prev=3,e.next=6,je("/api/tasks","POST",{name:c,todoId:o},{Authorization:"Bearer ".concat(r)});case 6:return s=e.sent,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()),ve=Object(K.c)(function(){var e=Object(fe.a)(be.a.mark((function e(t){var n,r,a,c,o,s;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(B.a)(t,2),r=n[0],a=n[1],c=a.todoId,o=a.id,s=null,e.prev=3,e.next=6,je("/api/tasks","DELETE",{todoId:c,taskId:o},{Authorization:"Bearer ".concat(r)});case 6:return s=e.sent,e.abrupt("return",s);case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()),Ae=Object(K.c)(function(){var e=Object(fe.a)(be.a.mark((function e(t){var n,r,a,c,o,s,i,u;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(B.a)(t,2),r=n[0],a=n[1],c=a.name,o=a.todoId,s=a.taskId,i=a.isCompleted,u=null,e.prev=3,e.next=6,je("/api/tasks","PUT",{name:c,todoId:o,taskId:s,isCompleted:i},{Authorization:"Bearer ".concat(r)});case 6:return u=e.sent,e.abrupt("return",u);case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()),xe=Object(K.c)(function(){var e=Object(fe.a)(be.a.mark((function e(t){var n,r,a,c,o,s,i,u,l,d,b;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(B.a)(t,2),r=n[0],a=n[1],c=a.currentTodoId,o=a.targetTodoId,s=a.currentTaskId,i=a.targetTaskIndex,u=a.name,l=a.description,d=a.isCompleted,b=null,e.prev=3,e.next=6,je("/api/drag&Drop","PUT",{currentTodoId:c,targetTodoId:o,currentTaskId:s,targetTaskIndex:i,name:u,description:l,isCompleted:d},{Authorization:"Bearer ".concat(r)});case 6:return b=e.sent,e.abrupt("return",b);case 10:throw e.prev=10,e.t0=e.catch(3),e.t0;case 13:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()),ke=n(14);function we(){var e=Object(u.a)(["\n  cursor: ",";\n  min-height: 20px;\n  border-radius: 15px;\n  background-color: ",";\n"]);return we=function(){return e},e}var Ce=b.a.div(we(),(function(e){return e.isRequestPending?"initial":"pointer"}),(function(e){return e.backgroundColor||h})),Ne=function(e){var t=e.id,n=e.isAddTaskPending,c=e.todoId,o=e.name,s=e.setAddTaskPending,i=e.isCompleted,u=Object(a.useRef)(),l=Object(a.useState)(""),d=Object(B.a)(l,2),b=d[0],f=d[1],j=Object(a.useState)(!1),p=Object(B.a)(j,2),h=p[0],m=p[1],O=Object(a.useState)(!1),g=Object(B.a)(O,2),v=g[0],A=g[1],x=Object(a.useState)(!1),k=Object(B.a)(x,2),w=k[0],C=k[1];Object(a.useEffect)((function(){w&&o&&f(o)}),[w]),Object(a.useEffect)((function(){i&&m(i)}),[i]);var N=function(){n?D():w&&!v?u.current.focus():w&&v&&ue({name:b,todoId:c,taskId:t})},T=[{name:"Rename",handler:function(){C(!0)}},{name:"Remove",handler:function(){ie({todoId:c,id:t})}}];t&&!w||(T=[{name:"Cancel",handler:function(){n&&s(!1),w&&C(!1)}}]);var y=Object(a.useState)(!1),I=Object(B.a)(y,2),E=I[0],S=I[1],D=function(){b.trim()?se({name:b,todoId:c}):u.current.focus()};Object(a.useEffect)((function(){document.addEventListener("click",P)}),[E]);var P=function e(t){var n=document.querySelectorAll(".popup");if(n&&E){var r=!0;n.forEach((function(e){e.contains(t.target)&&(r=!1)})),r&&(S(!1),document.removeEventListener("click",e))}};Ae.done.watch((function(e){e&&e.result&&e.result.allTasks.length&&C(!1)}));var R=Object(ke.a)(G),L=Object(a.useState)(!1),V=Object(B.a)(L,2),Q=V[0],K=V[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{style:Q?{display:"flex"}:{display:"none"},className:"task-shadow",onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDragLeave:function(e){K(!1)},onDrop:function(e){return function(e,t,n){e.preventDefault(),K(!1);var r=e.dataTransfer.getData("currentTodoId"),a=e.dataTransfer.getData("currentTaskId"),c=M.getState(),o=c.findIndex((function(e){return e.id===r})),s=c[o].tasks.findIndex((function(e){return e.id===a})),i=c.findIndex((function(e){return e.id===t})),u=c[i].tasks.findIndex((function(e){return e.id===n})),l=c[o].tasks.find((function(e){return e.id===a}));u=c[i].tasks.length-1-u,s=c[o].tasks.length-1-s,r===t&&s<u&&(u-=1),le({currentTodoId:r,targetTodoId:t,currentTaskId:a,targetTaskIndex:u+=1,name:l.name,description:l.description,isCompleted:l.isCompleted})}(e,c,t)}}),Object(r.jsxs)(Ce,{style:h?{backgroundColor:"rgba(35,91,89, 0.5)"}:{},className:"task",draggable:!R&&!n&&!w,onDragStart:function(e){return function(e,t,n){var r=e.target;setTimeout((function(){r.style.display="none"}),0),t&&e.dataTransfer.setData("currentTodoId",t),n&&e.dataTransfer.setData("currentTaskId",n)}(e,c,t)},onDragEnter:function(e){e.preventDefault();var t=e.target;e.currentTarget!==t&&K(!0)},onDragOver:function(e){return function(e){e.preventDefault()}(e)},onDragEnd:function(e){return function(e){var t=e.target;"none"===e.dataTransfer.dropEffect&&(t.style.display="flex"),K(!1)}(e)},isRequestPending:R,children:[Object(r.jsx)(U,{className:"popup",isOpen:E,items:T,renameTaskPending:w,isAddTaskPending:n,customOffset:"35px"}),Object(r.jsxs)("div",{className:"task-body",children:[n||w?Object(r.jsx)(F,{autoFocus:!0,className:"task-title__input",type:"text",value:b,onChange:function(e){w&&e.target.value.trim()&&A(!0),f(e.target.value)},onBlur:N,onEnter:N,inputRef:u}):Object(r.jsx)("div",{className:"task-title",style:h?{textDecoration:"line-through",color:"red"}:{},children:o}),Object(r.jsx)("input",{checked:h,onChange:function(e){ue({name:o,isCompleted:e.target.checked,input:b,todoId:c,taskId:t}),m(e.target.checked)},className:"checkbox",type:"checkbox"})]}),Object(r.jsxs)("div",{className:"task-label",onClick:function(){S(!E),document.removeEventListener("click",P)},children:[Object(r.jsx)("div",{className:"task-dot"}),Object(r.jsx)("div",{className:"task-dot"}),Object(r.jsx)("div",{className:"task-dot"})]})]})]})};n(48);function Te(){var e=Object(u.a)(["\n  visibility: hidden;\n  cursor:pointer;\n  width: 15px;\n  height: 15px;\n  color: ",";\n  background-color: ",";\n  \n  &:after {\n        width: 14px;\n        height: 14px;\n        border-radius: 15px;\n        top: -2px;\n        left: -1px;\n        position: relative;\n        z-index: 1;\n        background-color: #ffffff;\n        content: '';\n        display: inline-block;\n        visibility: visible;\n        border: 2px solid white;\n    }\n\n    &:checked:after {\n        width: 14px;\n        height: 14px;\n        border-radius: 15px;\n        top: -2px;\n        left: -1px;\n        position: relative;\n        z-index: 1;\n        background-color: ",";\n        content: '';\n        display: inline-block;\n        visibility: visible;\n        border: 2px solid white;\n    }\n \n"]);return Te=function(){return e},e}var ye=b.a.input(Te(),(function(e){return Object(L.a)(e),A}),(function(e){return e.backgroundColor||h}),(function(e){return e.radioBackground||x})),Ie=function(e){var t=e.name,n=e.checked,a=e.value,c=e.id,o=e.onChange,s=e.radioBackground;return Object(r.jsx)(ye,{className:"radio",type:"radio",name:t,checked:n,value:a,id:c,onChange:o,radioBackground:s})},Ee=n(58);function Be(){var e=Object(u.a)(["\n  position: relative;\n  \n  width: 280px;\n  // min-height: 50px;\n  border-radius: 15px;\n  background-color: ",";\n"]);return Be=function(){return e},e}var Se=b.a.div(Be(),(function(e){return e.backgroundColor||f})),De=function(e){var t=e.id,n=e.todoName,c=e.tasks,o=Object(Ee.a)(),s=Object(Ee.a)(),i=Object(Ee.a)(),u=Object(Ee.a)(),l=Object(a.useRef)(),d=Object(a.useState)(""),b=Object(B.a)(d,2),f=b[0],j=b[1],h=Object(a.useState)(!1),m=Object(B.a)(h,2),O=m[0],g=m[1],v=Object(a.useState)(!1),k=Object(B.a)(v,2),w=k[0],C=k[1],N=Object(a.useState)(!1),T=Object(B.a)(N,2),y=T[0],I=T[1],E=Object(a.useState)("All"),S=Object(B.a)(E,2),D=S[0],P=S[1],R=Object(a.useState)([]),L=Object(B.a)(R,2),V=L[0],Q=L[1];Object(a.useEffect)((function(){switch(D){case"All":Q(c);break;case"Progress":Q(c.filter((function(e){return!e.isCompleted})));break;case"Completed":Q(c.filter((function(e){return e.isCompleted})))}}),[D,c]);var K=function(e){var t=e.target.value;P(t)},J=Object(a.useState)(!1),X=Object(B.a)(J,2),z=X[0],q=X[1],Y=[{name:"Add task",handler:function(){q(!0),C(!1),document.removeEventListener("click",G)}},{name:"Rename",handler:function(){g(!0)}},{name:"Remove",handler:function(){ce(t),C(!1),document.removeEventListener("click",G)}}];O&&(Y=[{name:"Cancel",handler:function(){O&&g(!1)}}]),Object(a.useEffect)((function(){document.addEventListener("click",G)}),[w]);var G=function e(t){var n=document.querySelectorAll(".popup");if(n&&w){var r=!0;n.forEach((function(e){e.contains(t.target)&&(r=!1)})),r&&(C(!1),document.removeEventListener("click",e))}};Object(a.useEffect)((function(){O&&n&&j(n)}),[O]);var W=function(){O&&!y?l.current.focus():O&&y&&oe({name:f,todoId:t})};ge.done.watch((function(e){e&&e.result&&e.result.allTasks.length&&q(!1)})),me.done.watch((function(e){e&&e.result&&e.result.allTodos.length&&g(!1)}));var Z=Object(a.useState)(!1),H=Object(B.a)(Z,2),_=H[0],$=H[1];return Object(r.jsxs)(Se,{className:"todo",onDragEnter:function(e){c.length||$(!0)},onDragOver:function(e){c.length||e.preventDefault()},onDrop:function(e){if(!c.length){e.preventDefault(),$(!1);var n=e.dataTransfer.getData("currentTodoId"),r=e.dataTransfer.getData("currentTaskId"),a=M.getState(),o=a.findIndex((function(e){return e.id===n})),s=a[o].tasks.find((function(e){return e.id===r}));le({currentTodoId:n,targetTodoId:t,currentTaskId:r,targetTaskIndex:0,name:s.name,description:s.description,isCompleted:s.isCompleted})}},children:[Object(r.jsx)(U,{className:"popup",isOpen:w,items:Y,renameTodoPending:O}),Object(r.jsxs)("div",{className:"todo-header",children:[O?Object(r.jsx)(F,{autoFocus:!0,className:"todo-title__input",type:"text",value:f,onChange:function(e){O&&e.target.value.trim()&&I(!0),j(e.target.value)},onBlur:W,onEnter:W,inputRef:l}):Object(r.jsx)("div",{className:"todo-title",children:n}),Object(r.jsxs)("div",{className:"menu-icon",onClick:function(){C(!w),document.removeEventListener("click",G)},children:[Object(r.jsx)("div",{style:w?{backgroundColor:"#fff"}:{},className:"todo-dot"}),Object(r.jsx)("div",{style:w?{backgroundColor:"#fff"}:{},className:"todo-dot"}),Object(r.jsx)("div",{style:w?{backgroundColor:"#fff"}:{},className:"todo-dot"})]})]}),Object(r.jsxs)("div",{className:"todo-task-group",children:[Object(r.jsxs)("label",{htmlFor:s,className:"todo-label",children:["All",Object(r.jsx)(Ie,{id:s,name:o,value:"All",onChange:K,checked:"All"===D,radioBackground:p})]}),Object(r.jsxs)("label",{htmlFor:i,className:"todo-label",children:["Progress",Object(r.jsx)(Ie,{id:i,name:o,value:"Progress",onChange:K,checked:"Progress"===D,radioBackground:x})]}),Object(r.jsxs)("label",{htmlFor:u,className:"todo-label",children:["Completed",Object(r.jsx)(Ie,{id:u,name:o,value:"Completed",onChange:K,checked:"Completed"===D,radioBackground:A})]})]}),Object(r.jsxs)("div",{className:"todo-main",children:[!c.length&&!z&&Object(r.jsx)("div",{className:"no-tasks",children:"No tasks added"}),z&&Object(r.jsx)(Ne,{isAddTaskPending:!0,todoId:t,setAddTaskPending:q}),_&&!c.length&&Object(r.jsx)("div",{className:"task-shadow",onDragLeave:function(e){c.length||$(!1)}}),null===V||void 0===V?void 0:V.map((function(e){return Object(r.jsx)(Ne,{id:e.id,todoId:t,name:e.name,isCompleted:e.isCompleted},e.id)}))]})]})},Pe=(n(30),function(e){return e.target.value}),Re=function(e,t){return t},Ue=n(8),Le="userData";function Ve(){var e=Object(u.a)(["\n  cursor: not-allowed;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return Ve=function(){return e},e}X.on(re,Re),J.on(H,Re),M.on(ee,Re),z.on(_,Re),q.on($,Re),Y.on(te,Re),G.on(ne,Re),X.reset(W),Object(K.h)({source:J,clock:Z,target:pe}),pe.pending.watch((function(e){e&&te(!0)})),pe.done.watch((function(e){e&&(ee(e.result.reverse().map((function(e){return Object(Ue.a)(Object(Ue.a)({},e),{},{tasks:e.tasks.reverse()})}))),_(null),te(!1))})),pe.fail.watch((function(e){"No authorization"===e.error.message&&(_(e.error.message),localStorage.removeItem(Le),te(!1))})),Object(K.h)({source:Object(K.b)(X,J),clock:ae,target:he}),he.pending.watch((function(e){e&&ne(!0)})),he.done.watch((function(e){e&&(ee(e.result.allTodos.reverse().map((function(e){return Object(Ue.a)(Object(Ue.a)({},e),{},{tasks:e.tasks.reverse()})}))),ne(!1)),W()})),he.fail.watch((function(){ne(!1),W()})),Object(K.h)({source:J,clock:oe,fn:function(e,t){return[e,t]},target:me}),me.pending.watch((function(e){e&&ne(!0)})),me.done.watch((function(e){e&&e.result&&e.result.allTodos.length&&(Z(),ne(!1))})),me.fail.watch((function(e){ne(!1)})),Object(K.h)({source:J,clock:ce,fn:function(e,t){return[e,t]},target:Oe}),Oe.pending.watch((function(e){e&&ne(!0)})),Oe.done.watch((function(e){e&&(ee(e.result.remainingTodos.reverse().map((function(e){return Object(Ue.a)(Object(Ue.a)({},e),{},{tasks:e.tasks.reverse()})}))),ne(!1))})),Oe.fail.watch((function(e){ne(!1)})),Object(K.h)({source:J,clock:se,fn:function(e,t){return[e,t]},target:ge}),ge.pending.watch((function(e){e&&ne(!0)})),ge.done.watch((function(e){e&&e.result&&e.result.allTasks.length&&(Z(),ne(!1))})),ge.fail.watch((function(e){ne(!1)})),Object(K.h)({source:J,clock:ie,fn:function(e,t){return[e,t]},target:ve}),ve.pending.watch((function(e){e&&ne(!0)})),ve.done.watch((function(e){e&&e.result&&e.result.remainingTasks&&(Z(),ne(!1))})),ve.fail.watch((function(e){ne(!1)})),Object(K.h)({source:J,clock:ue,fn:function(e,t){return[e,t]},target:Ae}),Ae.pending.watch((function(e){e&&ne(!0)})),Ae.done.watch((function(e){e&&e.result&&e.result.allTasks.length&&(Z(),ne(!1))})),Ae.fail.watch((function(e){ne(!1)})),Object(K.h)({source:J,clock:le,fn:function(e,t){return[e,t]},target:xe}),xe.pending.watch((function(e){e&&ne(!0)})),xe.done.watch((function(e){e&&e.result&&e.result.allTodos.length&&(ee(e.result.allTodos.reverse().map((function(e){return Object(Ue.a)(Object(Ue.a)({},e),{},{tasks:e.tasks.reverse()})}))),ne(!1))})),xe.fail.watch((function(e){ne(!1)}));var Qe=b.a.div(Ve()),Fe=function(e){var t=e.style;return Object(r.jsx)(Qe,{style:t,children:Object(r.jsx)("svg",{width:"100px",height:"100px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:Object(r.jsx)("circle",{cx:"50",cy:"50",fill:"none",stroke:"#0d9722",strokeWidth:"6",r:"35",strokeDasharray:"164.93361431346415 56.97787143782138",children:Object(r.jsx)("animateTransform",{attributeName:"transform",type:"rotate",repeatCount:"indefinite",dur:"1s",values:"0 50 50;360 50 50",keyTimes:"0;1"})})})})},Ke=(n(49),function(){return Object(r.jsx)("div",{className:"linear-activity",children:Object(r.jsx)("div",{className:"indeterminate"})})});function Je(){var e=Object(u.a)(["\n   cursor: ",";\n   opacity: ",";\n   width: 40%;\n   height: 35px;\n   margin: 0 1.2em;\n   background-color: ",";\n   border: 0px;\n   color: #fff;\n   border-radius: 3px;\n   transition: background-color .2s ease-in-out 0s, border-color .2s ease-in-out 0s;\n   font-weight: 700;\n   font-size: 14px;\n   outline: none;\n   \n  &:hover {\n    opacity: 0.9;\n    opacity: ",";\n  }\n"]);return Je=function(){return e},e}var Me=b.a.button(Je(),(function(e){return e.disabled?"not-allowed":"pointer"}),(function(e){return e.disabled?"0.1":"none"}),(function(){return A}),(function(e){return e.disabled?"0.1":"0.9"})),Xe=function(e){var t=e.placeholder,n=e.id,a=e.type,c=e.name,o=e.className,s=e.value,i=e.onClick,u=e.style,l=e.disabled,d=e.children;return Object(r.jsx)(Me,{placeholder:t,id:n,type:a,name:c,className:o,value:s,onClick:i,style:u,disabled:l,children:d})};function ze(){var e=Object(u.a)(["\n  margin: 2px 10px 0 0;\n"]);return ze=function(){return e},e}function qe(){var e=Object(u.a)(["\n    width: 140px;  \n    height: 40px;\n    background: #2b2bc6;\n    border-radius: 5px;\n    \n    ","\n"]);return qe=function(){return e},e}function Ye(){var e=Object(u.a)(["\n  color: #ffffff;\n  display: block;\n  height: unset;\n  min-height: calc(100vh - 120px);\n"]);return Ye=function(){return e},e}var Ge=Object(b.a)(C)(Ye()),We=Object(b.a)(Xe)(qe(),(function(e){return!e.disabled&&"&:hover{\n    opacity: 0.7;\n    }"})),Ze=b.a.span(ze());function He(){var e=Object(a.useContext)(d),t=Object(i.g)(),n=Object(ke.a)(Y),c=Object(ke.a)(G),o=Object(ke.a)(M),s=Object(ke.a)(X),u=re.prepend(Pe);e&&e.token&&H(e.token),Object(a.useEffect)((function(){return Z(),function(){ee([])}}),[]);return Object(r.jsxs)(Ge,{className:"container",backgroundColor:j,children:[Object(r.jsxs)("div",{className:"todos-page-content",children:[Object(r.jsxs)(y,{className:"header",children:[Object(r.jsxs)("div",{className:"logo",children:[Object(r.jsx)("img",{className:"logo-icon",src:I,alt:"Logo"}),Object(r.jsx)("a",{rel:"noreferrer",target:"_blank",className:"logo-text",href:"https://alexeygorbachevskiy.github.io/Portfolio",children:"Portfolio"})]}),Object(r.jsxs)("div",{className:"menu",children:[Object(r.jsx)("img",{className:"grid-icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABhSURBVHgB7dPBDYAwDAPAlEXp5mWDsoGJnxRayUh8opzUVy35kcQsKQDs/jqeGv/U3FtBw1xXc1SGAthCcUqONvtZvIJzkT0+5O58dnWyIVzJquYCQl7ykKO8ZLkgLzmgC0V7iapNDfdiAAAAAElFTkSuQmCC",alt:"Grid icon"}),Object(r.jsx)("span",{className:"page-header",children:"Todo List"})]}),Object(r.jsxs)("div",{className:"user",children:[Object(r.jsx)(Ze,{children:e&&e.email}),Object(r.jsx)("img",{className:"logout-icon",src:E,alt:"Logout icon"}),Object(r.jsx)("a",{className:"logout-link",href:"/",onClick:function(n){n.preventDefault(),e.logout(),t.push("/")},children:"Logout"})]})]}),c&&Object(r.jsx)(Ke,{}),Object(r.jsxs)("div",{className:"todos-wrapper",children:[Object(r.jsx)("div",{className:"todos-creator",children:Object(r.jsxs)("div",{className:"todos-creator__create",children:[Object(r.jsx)(F,{className:"input",value:s,onChange:u}),Object(r.jsx)(We,{disabled:c||n,className:"todos-creator__label",onClick:function(e){s.trim().length&&ae(e)},children:"+ Create Todo"})]})}),Object(r.jsx)("div",{className:"todos",children:o.map((function(e){return Object(r.jsx)(De,{id:e.id,tasks:e.tasks,todoName:e.name},e.id)}))})]}),Object(r.jsxs)(y,{className:"footer",children:[Object(r.jsxs)("div",{className:"links",children:[Object(r.jsx)("img",{className:"link",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAASCAYAAACw50UTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAG2SURBVHgBrZVLUsJAEIa7J5Rrli7jDZKNVe7wBHAAIMPOBVByAuAE8rDckhQrV3oD4lJX8QTiDeIe0vbkwcvIpNC/KjUzPck3Tfd0g3CCGo2OFAIcAKwkFvIRaei6975a1evtSqkUhagWjtN5Qlzz5kOgAzeb3T4iDPJ36ZkPtHhcet70OoV3iYcwiqg3n09dOOoxzuC4FGeIiGWxYyyrD/lXzKS8MfO+EkJUQS/mCIefUQonf7uHkuhskX9IVNaRieCFvb523VFYinFIY6IsObHM9BDJIQtUDHn/XXmlgzPrQ4HVPIav1xwfESejlvO+pZLESaxBAbETX9k8hnOs74p4VQxOy2wuEgOM4Z9kGIa/B1eZ5UF7xwtoyfEO9uAqAZ43sTkZrb8coqp0b51NpGxXiMQCThdX5eRi17ApItUX+EYM4UQhRq1Dm7G7CIJX37YvP/lVk5fnUBgM3Jd+tg3j0BAEb4FtXz2mcAsKgSeD3L1sIuVtebVaWXyVuH+QBP29DzmBvTyPN/Akkdjf9matGKrqQoyyMv8VDlvPTW4ENS6oahpzM4Mlj/pDAO4vhquDZvoGGiun9WF7pTwAAAAASUVORK5CYII=",alt:"Facebook icon"}),Object(r.jsx)("img",{className:"link vk",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAQCAYAAAAFzx/vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHfSURBVHgBrVQ7UgJBEO2ZxSpDQkO8gEigpmtmaq7umhn4wRMAJ/BHWWYOnABPIGRAWeUuF3CPgJklMm0332V3YLcsX7I1PTPv9eueXuE4Vx8AmIM5AiF+DpV69KYB1y1mETWdgyxEIITeV6rajMYd5+KVdu1wbDjUh5LEoiQ5rTNuOKDUbR8RXsCA4VDkorGjo3M7KsbIZKAviagGsazBYVfhmJSyCClhWfImHsUmV4J4dMNwJ6u1XhBgl5RKAAk4Pr5w6bMdjQsxOOWvHNcfm/EDcBV1mQQ+Tw5KBq6KUk/BSHASqBnux1wmARFLkQfICJS6L08XI0GlHtRyl2c5SIGTk0sWK8Y5vvfDaznfwIqBh8Zh7RlWgEqYp9G6oeTKcbF5KWOC3Et6sXdxSmHTTE1E0dBTdoXG0odLOWMLL8YDju+GPvwJZKBcr98vVM4KLzyv/VUo7PiUhwv/ACqpnc/vge93WkbBsWg3KBT22LkNqYCK+n+NKAim+VsUtUwUntdpphXVGu7q9WqDCBvL7rDo1tbuZ6/XbVvLiNKK8j+WiLykO2T/gNrVkqvI+JUJITdNM7r6DlTMyYmSlURAD6nv+90aZzfpE2Njsh1IOah43lt/8c7MKfd0fb4j4BcywNKZTDb6xAAAAABJRU5ErkJggg==",alt:"VK icon"}),Object(r.jsx)("img",{className:"link",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAGZSURBVHgBpZPNVcJAEMdndrcA7AA7gArECuDM42O98hCwgtCBiB68uVQgdkAJoQJjB5x5yY6z5OOZGCDo/5C82Z385r+zE4R/SutZLYoiLQS0AbCO8Ed1u6OGUqqNCDMOa/Eq+gouVK83bkmJHn/cKu4R0VcloDuWtXaad3NQwBif4Z0EuFFV3BDZFhaaw/ETgF0Tifd0TUry8QI3mStEexeGUJNSvP3MQRRXquBmmrgpAyWuxNxaaEsJpljImMVO9fv37sqHZU0uujLmZTMYTJz7RTGBCLbuLVjeKZhzxUdpJjCvDJbIdw+FiLfc3BZXKLrMXLkggc2PFRbCHoC5S+ELqQNEDMdHxD27eg2qwOKT7K9dfm5suKkOYBjQQFR153I4nPJNkobT2qXF1RH7a2tFR+vRjodVw1mRn31btu36xr29CUNRgwriFm1PAuMk2vJcDtM4nkEMynL5RJsqQE5CHcPowZjljF03eWf9O1sFWeFjQPcL8l/zGcOeTX5vMucx89J4tVriWeA5aT3uEEkeL/pw7tP1b4uQtLdDMK0sAAAAAElFTkSuQmCC",alt:"Telegram icon"})]}),Object(r.jsx)("div",{className:"rights",children:"\xa9 2021 - All Rights Lecensed"}),Object(r.jsx)("div",{className:"rights",children:"For commercial inquiries"})]})]}),n&&Object(r.jsx)(Fe,{}),!n&&!o.length&&Object(r.jsx)("div",{className:"no-todos",children:"You don't have any todos now."})]})}var _e=n(23),$e=(n(54),n(55),n.p+"static/media/logo.a4857edf.jpg"),et=n.p+"static/media/left.636c3f10.png",tt=n.p+"static/media/right.b3131fd5.png";function nt(){var e=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return nt=function(){return e},e}var rt=Object(b.a)(C)(nt()),at=function(){var e=Object(a.useContext)(d),t=function(){var e=Object(a.useState)(!1),t=Object(B.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(null),o=Object(B.a)(c,2),s=o[0],i=o[1];return{loading:n,request:Object(a.useCallback)(function(){var e=Object(fe.a)(be.a.mark((function e(t){var n,a,c,o,s,u=arguments;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:"GET",a=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{},r(!0),e.prev=4,a&&(a=JSON.stringify(a),c["Content-Type"]="application/json"),e.next=8,fetch("https://todo-backend-node-js.herokuapp.com".concat(t),{method:n,body:a,headers:c});case 8:return o=e.sent,e.next=11,o.json();case 11:if(s=e.sent,o.ok){e.next=14;break}throw new Error(s.message||"Error is occurred");case 14:return r(!1),e.abrupt("return",s);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),i(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:s,clearError:Object(a.useCallback)((function(){return i(null)}),[])}}(),n=t.loading,c=t.request,o=Object(a.useState)({email:"",password:""}),s=Object(B.a)(o,2),i=s[0],u=s[1],l=Object(ke.a)(q),b=Object(ke.a)(z),f=Object(a.useState)(!1),j=Object(B.a)(f,2),p=j[0],h=j[1],m=Object(a.useState)(!1),O=Object(B.a)(m,2),g=O[0],v=O[1],A=function(e){_(null),$(null),"email"===e.target.name&&h(!e.target.value.trim().length),"password"===e.target.name&&v(!e.target.value.trim().length),u(Object(Ue.a)(Object(Ue.a)({},i),{},Object(_e.a)({},e.target.name,e.target.value)))},x=function(){return i.email.trim().length||i.password.trim().length?i.email.trim().length?!i.password.trim().length&&(v(!0),!0):(h(!0),!0):(h(!0),v(!0),!0)},k=function(){var e=Object(fe.a)(be.a.mark((function e(){var t;return be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,h(!1),v(!1),_(null),$(null),!x()){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,c("/api/auth/register","POST",Object(Ue.a)({},i));case 9:t=e.sent,$(t.message),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),_(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var t=Object(fe.a)(be.a.mark((function t(){var n;return be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,h(!1),v(!1),_(null),$(null),!x()){t.next=7;break}return t.abrupt("return");case 7:return t.next=9,c("/api/auth/login","POST",Object(Ue.a)({},i));case 9:n=t.sent,e.login(n.token,n.userId,n.email),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),_(t.t0.message);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(){return t.apply(this,arguments)}}();return Object(r.jsxs)(rt,{className:"container",children:[Object(r.jsxs)("div",{className:"auth-page-content",children:[Object(r.jsxs)("div",{className:"logo-wrapper",children:["ToDo App",Object(r.jsx)("img",{className:"logo",src:$e,alt:"Logo"})]}),Object(r.jsxs)("div",{className:"login-form",style:n?{opacity:.5}:{},children:[Object(r.jsx)("h1",{className:"login-header",children:"Sign In to App"}),Object(r.jsxs)("div",{className:"inputs-wrapper",children:[Object(r.jsx)(F,{placeholder:"Type email",id:"email",type:"text",name:"email",className:"input",value:i.email,onChange:A,style:p?{borderColor:"red"}:{}}),p&&Object(r.jsx)("span",{className:"input-error",children:"Email field is required"}),Object(r.jsx)(F,{placeholder:"Type password",id:"password",type:"password",name:"password",className:"input",value:i.password,onChange:A,style:g?{borderColor:"red"}:{}}),g&&Object(r.jsx)("span",{className:"input-error",children:"Password field is required"}),l&&Object(r.jsx)("div",{className:"message-container",children:l}),b&&Object(r.jsx)("div",{className:"error-container",children:b})]}),Object(r.jsxs)("div",{className:"buttons-wrapper",children:[Object(r.jsx)(Xe,{className:"button",disabled:n||p||g,onClick:w,children:"Sign In"}),Object(r.jsx)(Xe,{className:"button",onClick:k,disabled:n||p||g,children:"Sign Up"})]})]}),Object(r.jsx)("img",{className:"left",src:et,alt:"Left image"}),Object(r.jsx)("img",{className:"right",src:tt,alt:"Right image"})]}),n&&Object(r.jsx)(Fe,{style:{position:"absolute"}})]})};var ct=function(){var e=function(){var e=Object(a.useState)(null),t=Object(B.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(!1),o=Object(B.a)(c,2),s=o[0],i=o[1],u=Object(a.useState)(null),l=Object(B.a)(u,2),d=l[0],b=l[1],f=Object(a.useState)(null),j=Object(B.a)(f,2),p=j[0],h=j[1],m=Object(a.useCallback)((function(e,t,n){r(e),b(t),h(n),localStorage.setItem(Le,JSON.stringify({userId:t,token:e,email:n}))}),[]),O=Object(a.useCallback)((function(){r(null),b(null),h(null),localStorage.removeItem(Le)}),[]);return Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem(Le));e&&e.token&&m(e.token,e.userId,e.email),i(!0)}),[m]),{login:m,logout:O,token:n,userId:d,ready:s,email:p}}(),t=e.token,n=e.login,c=e.logout,o=e.userId,u=e.ready,l=e.email,b=Object(ke.a)(z),f=!!t&&!b,j=function(e){return e?Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/todo-frontend/todos",exact:!0,children:Object(r.jsx)(He,{})}),Object(r.jsx)(i.a,{to:"/todo-frontend/todos"})]}):Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/todo-frontend/auth",exact:!0,children:Object(r.jsx)(at,{})}),Object(r.jsx)(i.a,{to:"/todo-frontend/auth"})]})}(f);return t&&H(t),u?Object(r.jsx)(d.Provider,{value:{token:t,login:n,logout:c,userId:o,isAuthenticated:f,email:l},children:Object(r.jsx)(s.a,{children:j})}):Object(r.jsx)(C,{children:Object(r.jsx)(Fe,{})})},ot=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),a(e),c(e),o(e)}))};o.a.render(Object(r.jsx)(ct,{}),document.getElementById("root")),ot()}},[[56,1,2]]]);
//# sourceMappingURL=main.fd00818b.chunk.js.map