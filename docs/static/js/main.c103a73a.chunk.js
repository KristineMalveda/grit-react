(this["webpackJsonpgrit-react"]=this["webpackJsonpgrit-react"]||[]).push([[0],{31:function(t,e,o){t.exports=o(59)},36:function(t,e,o){},59:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),r=o(29),c=o.n(r),l=o(18),i=o(7),s=o(8),d=o(10),u=o(9),p=o(13),m=o(1),f=(o(36),function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"getStyle",value:function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"1px  #ccc dotted",textDecoration:this.props.todoProp.completed?"line-through":"none"}}},{key:"render",value:function(){var t=this.props.todoProp,e=t.id,o=t.title;return a.a.createElement("div",{style:this.getStyle()},a.a.createElement("p",null,a.a.createElement("input",{type:"checkbox",onChange:this.props.markCompleteProp.bind(this,e)}),o,a.a.createElement("button",{onClick:this.props.deleteTodoProp.bind(this,e),style:h},"x")))}}]),o}(n.Component)),h={background:"#ff0000",color:"#fff",border:"none",borderRadius:"50%",padding:"5px 9px",cursor:"pointer",float:"right"},b=f,v=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(s.a)(o,[{key:"render",value:function(){var t=this;console.log(this.props.todos);var e=this.props.todos;return a.a.createElement("div",null,e.map((function(e){return a.a.createElement(b,{key:e.id,todoProp:e,markCompleteProp:t.props.markComplete,deleteTodoProp:t.props.deleteTodo})})))}}]),o}(n.Component);var y={background:"#333",color:"#ffff",textAlign:"center",padding:"5px 5px"},E={color:"#fff",textDecoration:"none"},g=function(){return a.a.createElement("header",{style:y},a.a.createElement("h1",null,"Todo List"),a.a.createElement(p.b,{style:E,to:"/"},"Home")," ","|"," ",a.a.createElement(p.b,{style:E,to:"/about"},"About"))},j=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={title:""},t.onChange=function(e){t.setState({title:e.target.value})},t.onSubmit=function(e){e.preventDefault(),t.props.addTodo(t.state.title),t.setState({title:""})},t}return Object(s.a)(o,[{key:"render",value:function(){return a.a.createElement("form",{style:{display:"flex"},onSubmit:this.onSubmit},a.a.createElement("input",{type:"text",placeholder:"Add Todo .. .",name:"title",style:{flex:"10",padding:"5px"},value:this.state.title,onChange:this.onChange}),a.a.createElement("input",{name:"submit",type:"submit",value:"Submit",className:"btn",style:{flex:1}}))}}]),o}(n.Component);var k=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,"About"),a.a.createElement("p",null," This is the TodoList app v1.0.0. It is a part of a React crash course"))},x=o(14),O=o.n(x),C=function(t){Object(d.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={todos:[]},t.deleteTodo=function(e){O.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(o){return t.setState({todos:Object(l.a)(t.state.todos.filter((function(t){return t.id!==e})))})}))},t.markComplete=function(e){var o=t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}));t.setState({todos:o})},t.addTodo=function(e){O.a.post("https://jsonplaceholder.typicode.com/todos",{title:e,completed:!1}).then((function(e){return t.setState({todos:[].concat(Object(l.a)(t.state.todos),[e.data])})}))},t}return Object(s.a)(o,[{key:"componentDidMount",value:function(){var t=this;O.a.get("https://jsonplaceholder.typicode.com/todos?_limit=10").then((function(e){return t.setState({todos:e.data})}))}},{key:"render",value:function(){var t=this;return a.a.createElement(p.a,null,a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"container"},a.a.createElement(g,null),a.a.createElement(m.a,{exact:!0,path:"/",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(j,{addTodo:t.addTodo}),a.a.createElement(v,{todos:t.state.todos,markComplete:t.markComplete,deleteTodo:t.deleteTodo}))}}),a.a.createElement(m.a,{path:"/about",component:k}))))}}]),o}(n.Component);c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(C,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c103a73a.chunk.js.map