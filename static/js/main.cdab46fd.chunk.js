(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(1),c=n.n(o),a=n(4),r=n.n(a),s=(n(12),n(6)),l=n(2);var i=n(0),d=c.a.createContext();function u(e){var t=function(e,t){var n=c.a.useState(!0),o=Object(l.a)(n,2),a=o[0],r=o[1],s=c.a.useState(!1),i=Object(l.a)(s,2),d=i[0],u=i[1],j=c.a.useState(t),b=Object(l.a)(j,2),m=b[0],x=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var n,o=localStorage.getItem(e);o?n=JSON.parse(o):(localStorage.setItem(e,JSON.stringify(t)),n=t),x(n),r(!1)}catch(d){u(d)}}),1e3)}),[]),{item:m,saveItem:function(t){try{var n=JSON.stringify(t);localStorage.setItem(e,n),x(t)}catch(d){u(d)}},loading:a,error:d}}("TODOS_V1",[]),n=t.item,o=t.saveItem,a=t.loading,r=t.error,u=c.a.useState(""),j=Object(l.a)(u,2),b=j[0],m=j[1],x=c.a.useState(!1),f=Object(l.a)(x,2),p=f[0],h=f[1],O=n.filter((function(e){return e.completed})).length,v=n.length,T=[];T=b.length>=1?n.filter((function(e){var t=e.text.toLowerCase(),n=b.toLowerCase();return t.includes(n)})):n;return Object(i.jsx)(d.Provider,{value:{totalTodos:v,todosCompleted:O,textSearched:b,setTextSearched:m,filtersTodos:T,completeTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c[t].completed=!0,o(c)},deleteTodo:function(e){var t=n.findIndex((function(t){return t.text===e})),c=Object(s.a)(n);c.splice(t,1),o(c)},loading:a,error:r,openModal:p,setOpenModal:h,addTodo:function(e){var t=Object(s.a)(n);t.push({text:e,completed:!1}),o(t)}},children:e.children})}n(14);function j(){var e=c.a.useContext(d),t=e.totalTodos,n=e.todosCompleted;return Object(i.jsxs)("h2",{className:"TodoCounter",children:["Has completado ",n," de ",t," tareas"]})}n(15);function b(){var e=c.a.useContext(d),t=e.textSearched,n=e.setTextSearched;return Object(i.jsx)("input",{className:"TodoSearch",placeholder:"escribe una tarea...",value:t,onChange:function(e){return function(e){n(e.target.value)}(e)}})}n(16);function m(e){return Object(i.jsx)("section",{children:e.children})}n(17);function x(e){return Object(i.jsxs)("li",{className:"TodoItem",children:[Object(i.jsx)("span",{className:"Icon Icon-check ".concat(e.completed&&"Icon-check--active"),onClick:e.onComplete,children:"\u221a"}),Object(i.jsx)("p",{className:"TodoItem-p ".concat(e.completed&&"TodoItem-p--complete"),children:e.text}),Object(i.jsx)("span",{className:"Icon Icon-delete",onClick:e.onDelete,children:"X"})]})}n(18);function f(e){return Object(i.jsx)("button",{className:"CreateTodoButton",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}n(19);function p(e){var t=e.children;return r.a.createPortal(Object(i.jsx)("div",{className:"ModalBackground",children:t}),document.getElementById("modal"))}n(20);function h(){var e=c.a.useState(""),t=Object(l.a)(e,2),n=t[0],o=t[1],a=c.a.useContext(d),r=a.addTodo,s=a.setOpenModal,u=function(){s(!1)};return Object(i.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(n),u()},children:[Object(i.jsx)("label",{children:"Escribe tu nuevo To Do"}),Object(i.jsx)("textarea",{value:n,onChange:function(e){var t=e.target.value;o(t)},placeholder:"Escribe una nueva tarea"}),Object(i.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(i.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:u,children:"Cancelar"}),Object(i.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}function O(){var e=c.a.useContext(d),t=e.error,n=e.loading,o=e.filtersTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(i.jsxs)(c.a.Fragment,{children:[Object(i.jsx)(j,{}),Object(i.jsx)(b,{}),Object(i.jsxs)(m,{children:[t&&Object(i.jsx)("p",{children:"\xa1La App no esta funcionando!"}),n&&Object(i.jsx)("p",{children:"loading normal..."}),!n&&o.length<1&&Object(i.jsx)("p",{children:"no hay tareas para mostrar..."}),o.map((function(e,t){return Object(i.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),s&&Object(i.jsx)(p,{children:Object(i.jsx)("p",{children:Object(i.jsx)(h,{})})}),Object(i.jsx)(f,{setOpenModal:l})]})}var v=function(e){return Object(i.jsx)(u,{children:Object(i.jsx)(O,{})})};r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(v,{name:"jose",children:Object(i.jsx)("h1",{children:"insertando un titulo"})})}),document.getElementById("root"))}],[[21,1,2]]]);
//# sourceMappingURL=main.cdab46fd.chunk.js.map