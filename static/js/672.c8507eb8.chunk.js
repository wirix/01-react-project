"use strict";(self.webpackChunk_01_react_project=self.webpackChunk_01_react_project||[]).push([[672],{5672:function(e,s,n){n.r(s),n.d(s,{default:function(){return f}});var i=n(2807),a=n(6434),t=n(3504),r={dialogs:"Dialogs_dialogs__faiYq",dialogsItems:"Dialogs_dialogsItems__VkZTc",active:"Dialogs_active__PeCqI",messages:"Dialogs_messages__JQ0BC",message:"Dialogs_message__cQnAg"},o=n(184),u=function(e){return(0,o.jsx)("div",{children:(0,o.jsx)("div",{className:r.dialog+" "+r.active,children:(0,o.jsx)(t.OL,{to:"/dialogs/"+e.id,children:e.name})})})},c=function(e){return(0,o.jsx)("div",{className:r.dialog,children:e.message})},d=n(5705),l=function(e){var s=(0,d.TA)({initialValues:{message:""},onSubmit:function(n){e.onSendMessageClick(s.values.message)}});return(0,o.jsxs)("form",{onSubmit:s.handleSubmit,children:[(0,o.jsx)("div",{children:(0,o.jsx)("input",{type:"text",name:"message",onChange:s.handleChange})}),(0,o.jsx)("div",{children:(0,o.jsx)("button",{type:"submit",children:"send"})})]})},g=function(e){var s=e.dialogsPage,n=s.dialogs.map((function(e){return(0,o.jsx)(u,{name:e.name,id:e.id},e.id)})),i=s.messages.map((function(e){return(0,o.jsx)(c,{message:e.message},e.id)}));return(0,o.jsxs)("div",{className:r.dialogs,children:[(0,o.jsx)("div",{className:r.dialogsItems,children:n}),(0,o.jsxs)("div",{className:r.messages,children:[(0,o.jsx)("div",{children:i}),(0,o.jsx)(l,{onSendMessageClick:function(s){e.sendMessage(s)}})]})]})},m=n(7781),h=n(2291),f=(0,m.qC)((0,a.$j)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{sendMessage:function(s){e((0,i.X)(s))}}})),h.S)(g)},2291:function(e,s,n){n.d(s,{S:function(){return m}});var i=n(8683),a=n(5671),t=n(3144),r=n(136),o=n(3668),u=n(2791),c=n(6434),d=n(6871),l=n(184),g=function(e){return{isAuth:e.auth.isAuth}},m=function(e){var s=function(s){(0,r.Z)(u,s);var n=(0,o.Z)(u);function u(){return(0,a.Z)(this,u),n.apply(this,arguments)}return(0,t.Z)(u,[{key:"render",value:function(){return this.props.isAuth?(0,l.jsx)(e,(0,i.Z)({},this.props)):(0,l.jsx)(d.Fg,{to:"/login"})}}]),u}(u.Component);return(0,c.$j)(g)(s)}}}]);
//# sourceMappingURL=672.c8507eb8.chunk.js.map