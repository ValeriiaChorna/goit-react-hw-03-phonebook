(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{13:function(t,e,n){t.exports=n(21)},18:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(9),o=n.n(r),l=n(12),u=n(1),i=n(2),s=n(4),m=n(3),h=n(5),b=(n(18),function(t){var e=t.children;return c.a.createElement("div",{className:"Layout"},e)}),f=n(10),v=n.n(f),d=n(11),p=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(d.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault(),n.props.onAddContact(n.state),n.setState({name:"",number:""})},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("div",{className:"contactEdit"},c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("label",null,c.a.createElement("p",null,"Name"),c.a.createElement("input",{type:"text",value:e,name:"name",onChange:this.handleChange})),c.a.createElement("label",null,c.a.createElement("p",null,"Number"),c.a.createElement("input",{type:"text",value:n,name:"number",onChange:this.handleChange})),c.a.createElement("button",{type:"submit",className:"submit"},"Add contact")))}}]),e}(a.Component);function E(t){var e=t.name,n=t.id,a=t.number,r=t.onRemoveContact;return c.a.createElement("li",{key:n,className:"contactList"},c.a.createElement("p",null,e,": ",a),c.a.createElement("button",{className:"deleteButton",type:"button",onClick:function(){return r(n)}},"Delete"))}function C(t){var e=t.contacts,n=t.onRemoveContact;return c.a.createElement("ul",null,e.map((function(t){var e=t.name,a=t.id,r=t.number;return c.a.createElement(E,{key:a,name:e,id:a,number:r,onRemoveContact:n})})))}function g(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("div",null,c.a.createElement("input",{type:"text",value:e,onChange:function(t){return n(t.target.value)}}))}var y=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[],filter:""},n.addContact=function(t){var e=t.name,a=t.number,c=n.state.contacts,r={id:v.a.v4(),name:e,number:a};c.some((function(t){return t.name===e}))?alert("".concat(e," is allready exist in contacts.")):n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[r])}}))},n.removeContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n.changeFilter=function(t){n.setState({filter:t})},n.getVisibleContacts=function(){var t=n.state,e=t.contacts,a=t.filter;return e.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},n}return Object(h.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts");t&&this.setState({contacts:JSON.parse(t)})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=this.getVisibleContacts();return c.a.createElement(b,null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(p,{onAddContact:this.addContact}),c.a.createElement("h2",null,"Contacts"),e.length>1&&c.a.createElement("div",null,c.a.createElement("h3",null,"Find contact by name"),c.a.createElement(g,{value:n,onChangeFilter:this.changeFilter})),a.length>0&&c.a.createElement(C,{contacts:a,onRemoveContact:this.removeContact}))}}]),e}(a.Component);o.a.render(c.a.createElement(y,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.d6f42451.chunk.js.map