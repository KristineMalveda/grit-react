(this["webpackJsonpgrit-react"]=this["webpackJsonpgrit-react"]||[]).push([[0],{12:function(t,e,o){},13:function(t,e,o){},14:function(t,e,o){"use strict";o.r(e);var n=o(0),r=o.n(n),a=o(6),c=o.n(a),i=(o(12),o(1)),p=o(2),l=o(4),s=o(3),u=(o(13),function(t){Object(l.a)(o,t);var e=Object(s.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"getStyle",value:function(){return{backgroundColor:"#f4f4f4",padding:"10px",borderBottom:"2px dotted #ccc",textDecoration:this.props.todoProp.completed?"line-through":"none"}}},{key:"render",value:function(){var t=this.props.todoProp,e=t.id,o=t.title;return r.a.createElement("div",{style:this.getStyle()},r.a.createElement("p",null,r.a.createElement("input",{type:"checkbox",onChange:this.props.markCompleteProp.bind(this,e)}),o,r.a.createElement("button",{style:d},"x")))}}]),o}(n.Component)),d={background:"#ff0000",color:"#fff",border:"none",borderRadius:"50%",padding:"5px 9px",cursor:"pointer",float:"right"},m=u,h=function(t){Object(l.a)(o,t);var e=Object(s.a)(o);function o(){return Object(i.a)(this,o),e.apply(this,arguments)}return Object(p.a)(o,[{key:"render",value:function(){var t=this;console.log(this.props.todos);var e=this.props.todos;return r.a.createElement("div",null,e.map((function(e){return r.a.createElement(m,{key:e.id,todoProp:e,markCompleteProp:t.props.markComplete})})))}}]),o}(n.Component),f=function(t){Object(l.a)(o,t);var e=Object(s.a)(o);function o(){var t;Object(i.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))).state={todos:[{id:1,title:"Watch movie with the kids",completed:!1},{id:2,title:"Date with husbando",completed:!1},{id:3,title:"Clean the garage",completed:!1}]},t.markComplete=function(e){t.setState({todos:t.state.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},t}return Object(p.a)(o,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(h,{todos:this.state.todos,markComplete:this.markComplete}))}}]),o}(n.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(t,e,o){t.exports=o(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.dde84d2f.chunk.js.map