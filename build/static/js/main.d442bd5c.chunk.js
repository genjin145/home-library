(this["webpackJsonphome-library"]=this["webpackJsonphome-library"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(5),r=n.n(i),o=(n(11),n(2)),s=n(3),l=n(0);var u=function(e){var t=e.isOpen,n=void 0!==t&&t,c=e.close,i=e.children,r=Object(a.useCallback)((function(e){"Escape"===e.key&&c()}),[c]);return Object(a.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}),[r]),n?Object(l.jsxs)("div",{className:"drawer",onKeyDown:function(e){return"Escape"===e.key?c():null},children:[Object(l.jsx)("div",{className:"drawer__overlay",onClick:function(){return c()}}),Object(l.jsx)("div",{className:"drawer__box",children:i})]}):null},j=n(6),d=n.p+"static/media/image.4b683733.svg";var b=function(e){var t=e.image,n=e.getImage,a=Object(l.jsx)("span",{className:"image-loader__info",children:"\u041d\u0430\u0436\u043c\u0438 \u043d\u0430 \u0437\u043d\u0430\u0447\u043e\u043a \u0447\u0442\u043e\u0431\u044b \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443"});return Object(l.jsxs)("label",{className:"image-loader",children:[Object(l.jsx)("img",{className:"image-loader__image",src:t||d,alt:""}),t?null:a,Object(l.jsx)("input",{className:"image-loader__input",type:"file",accept:".jpg, .jpeg, .png, .svg",name:"image",id:"image",onChange:function(e){(function(e){return new Promise((function(t,n){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(a.result)},a.onerror=function(e){return n(e)}}))})(e.target.files[0]).then((function(e){return n(e)}))}})]})};var m=function(e){var t,n=e.id,c=e.image,i=void 0===c?null:c,r=e.title,u=void 0===r?"":r,d=e.author,m=void 0===d?"":d,O=e.addBook,h=e.editBook,f=e.removeBook,x=Object(a.useState)(i),v=Object(s.a)(x,2),g=v[0],p=v[1],k=Object(a.useState)(u),_=Object(s.a)(k,2),N=_[0],w=_[1],y=Object(a.useState)(m),C=Object(s.a)(y,2),S=C[0],B=C[1];return n&&(t=Object(l.jsx)("button",{className:"button-secondary",type:"button",onClick:function(){return f(n)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})),Object(l.jsxs)("form",{className:"book-add form",onSubmit:function(e){e.preventDefault();var t={id:n,image:g,title:N,author:S};n?h(t):O(Object(o.a)(Object(o.a)({},t),{},{id:Object(j.a)()})),w("")},children:[Object(l.jsx)(b,{image:g,getImage:p}),Object(l.jsxs)("div",{className:"form__field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"title",children:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"}),Object(l.jsx)("input",{className:"input",type:"text",name:"title",id:"title",required:!0,value:N,onChange:function(e){return w(e.target.value)}})]}),Object(l.jsxs)("div",{className:"form__field",children:[Object(l.jsx)("label",{className:"label",htmlFor:"author",children:"\u0410\u0432\u0442\u043e\u0440"}),Object(l.jsx)("input",{className:"input",type:"text",name:"author",id:"author",value:S,onChange:function(e){return B(e.target.value)}})]}),Object(l.jsxs)("div",{className:"book-add__buttons",children:[Object(l.jsx)("button",{className:"form__submit button-primary",children:"\u0413\u043e\u0442\u043e\u0432\u043e"}),t]})]})};var O=function(e){var t=e.id,n=e.image,a=e.title,c=e.author,i=e.onClickBook;return Object(l.jsxs)("article",{className:"book",onClick:function(){i({id:t,image:n,title:a,author:c})},children:[Object(l.jsx)("header",{className:"book__header",children:Object(l.jsx)("img",{className:"book__image",src:n||d,alt:a,width:n?145:40,height:n?205:40})}),Object(l.jsx)("h3",{className:"book__title",children:a}),Object(l.jsx)("p",{className:"book__author",children:c||"\u0431\u0435\u0437 \u0430\u0432\u0442\u043e\u0440\u0430"})]})};var h=function(){return Object(l.jsxs)("p",{className:"empty",children:[Object(l.jsx)("span",{className:"empty__smile",children:"\xaf\\_(\u30c4)_/\xaf"}),Object(l.jsx)("span",{className:"empty__text",children:"\u0417\u0434\u0435\u0441\u044c \u043f\u043e\u043a\u0430 \u043f\u0443\u0441\u0442\u043e, \u0434\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0447\u0442\u043e-\u043d\u0438\u0431\u0443\u0434\u044c !"})]})};var f=function(e){var t=e.books,n=e.onClickBook;return t.length?Object(l.jsx)("div",{className:"books-list",children:t.map((function(e){return Object(l.jsx)(O,Object(o.a)({onClickBook:n},e),e.id)}))}):Object(l.jsx)(h,{})};var x=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),r=Object(s.a)(i,2),j=r[0],d=r[1],b=Object(a.useState)({}),O=Object(s.a)(b,2),h=O[0],x=O[1];return Object(a.useEffect)((function(){var e=window.localStorage.getItem("books");e&&c(JSON.parse(e))}),[]),Object(a.useEffect)((function(){window.localStorage.setItem("books",JSON.stringify(n))}),[n]),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{className:"header",children:Object(l.jsx)("div",{className:"header__inner container",children:Object(l.jsx)("button",{className:"header__button-add button-primary",onClick:function(){x({}),d(!0)},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043d\u0438\u0433\u0443"})})}),Object(l.jsxs)("main",{className:"container",children:[Object(l.jsx)("h1",{className:"page-title",children:"\u0414\u043e\u043c\u0430\u0448\u043d\u044f\u044f \u0431\u0438\u0431\u043b\u0438\u043e\u0442\u0435\u043a\u0430"}),Object(l.jsx)(f,{books:n,onClickBook:function(e){x(e),d(!0)}})]}),Object(l.jsx)(u,{isOpen:j,close:function(){return d(!1)},children:Object(l.jsx)(m,Object(o.a)(Object(o.a)({},h),{},{addBook:function(e){c((function(t){return t.concat(e)})),d(!1)},editBook:function(e){c((function(t){return t.map((function(t){return t.id===e.id?Object(o.a)({},e):t}))})),d(!1)},removeBook:function(e){window.confirm("\u0422\u043e\u0447\u043d\u043e \u043f\u0440\u0438 \u0442\u043e\u0447\u043d\u043e \u0443\u0434\u0430\u043b\u044f\u0435\u043c ?")&&(c((function(t){return t.filter((function(t){return t.id!==e}))})),d(!1))}}))})]})};r.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(x,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d442bd5c.chunk.js.map