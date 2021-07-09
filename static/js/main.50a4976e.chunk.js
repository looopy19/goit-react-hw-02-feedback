(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{18:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var c,a,i,r,o,s,l,d,b,j,u=n(1),h=n.n(u),x=n(6),g=n.n(x),O=(n(18),n(7)),f=n(8),p=n(9),v=n(12),k=n(11),m=n(2),y=n(3),w=y.a.section(c||(c=Object(m.a)(["\n  padding: 40px 0;\n"]))),F=y.a.h2(a||(a=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 50px;\n  margin-left: auto;\n  margin-right: auto;\n  text-transform: uppercase;\n  font-size: 22px;\n  text-align: center;\n \n"]))),P=n(0),z=function(e){var t=e.title,n=e.children;return Object(P.jsxs)(w,{children:[t&&Object(P.jsxs)(F,{children:[t,"Please leave feedback"===t,"Statistics"===t]}),n]})},T=y.a.div(i||(i=Object(m.a)(["\n  width: 1024px;\n  margin: 0 auto;\n  padding: 0 50px;\n"]))),C=function(e){var t=e.children;return Object(P.jsx)(T,{children:t})},S=y.a.ul(r||(r=Object(m.a)(["\ntext-align: center;\n"]))),N=y.a.li(o||(o=Object(m.a)(["\nmargin-bottom: 5px;\n"]))),R=y.a.p(s||(s=Object(m.a)(["\n  align-items: center;\n  font-size: 18px;\n  font-weight: 500;\n"]))),B=function(e){var t=e.good,n=e.neutral,c=e.bad,a=e.total,i=e.positivePercentage,r=void 0===i?0:i;return Object(P.jsxs)(S,{children:[Object(P.jsx)(N,{children:Object(P.jsxs)(R,{good:!0,children:["Good: ",t]})}),Object(P.jsx)(N,{children:Object(P.jsxs)(R,{neutral:!0,children:["Neutral: ",n]})}),Object(P.jsx)(N,{children:Object(P.jsxs)(R,{bad:!0,children:["Bad: ",c]})}),Object(P.jsx)(N,{children:Object(P.jsxs)(R,{total:!0,children:["Total: ",a]})}),Object(P.jsx)(N,{children:Object(P.jsxs)(R,{percentage:!0,children:["Positive: ",r," %"]})})]})},J=y.a.button(l||(l=Object(m.a)(["\n  width: 140px;\n  padding: 5px 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid gray;\n  border-radius: 10px;\n  cursor: pointer;\n  outline: none;\n  text-transform: capitalize;\n  font-size: 16px;\n  font-weight: 500;\n  background-color: transparent;\n  transition: all 250ms ease-in-out;\n  \n \n  \n  &:hover,\n  &:focus-visible {\n    background-color: ghostwhite;\n  }\n"]))),L=n(4),M=function(e){var t=e.feedback,n=e.onClick;return Object(P.jsxs)(J,{type:"button","data-feedback":t,onClick:n,children:["good"===t&&Object(P.jsx)(L.a,{size:"50",color:"green",style:{marginRight:10}}),"neutral"===t&&Object(P.jsx)(L.b,{size:"50",color:"grey",style:{marginRight:10}}),"bad"===t&&Object(P.jsx)(L.c,{size:"50",color:"red",style:{marginRight:10}}),t]})},A=y.a.ul(d||(d=Object(m.a)(["\n  display: flex;\n  justify-content: center;\n"]))),E=y.a.li(b||(b=Object(m.a)(["\n  &:not(:last-child) {\n    margin-right: 50px;\n  }\n"]))),G=function(e){var t=e.options,n=e.onLeaveFeedback;return t=Object.keys(t),Object(P.jsx)(A,{children:t.map((function(e){return Object(P.jsx)(E,{children:Object(P.jsx)(M,{feedback:e,onClick:n})},e)}))})},I=y.a.p(j||(j=Object(m.a)(["\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n"]))),q=function(){return Object(P.jsx)(I,{children:"No feedback given"})},D=function(e){Object(v.a)(n,e);var t=Object(k.a)(n);function n(){var e;Object(f.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.handleFeedbackOptions=function(t){var n=t.currentTarget.dataset.feedback;e.setState((function(e){return Object(O.a)({},n,e[n]+1)}))},e}return Object(p.a)(n,[{key:"countTotalFeedback",value:function(){return Object.values(this.state).reduce((function(e,t){return e+t}))}},{key:"countPositiveFeedbackPercentage",value:function(){var e=this.countTotalFeedback(),t=this.state.good;return Math.round(100*t/e)}},{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,c=e.bad,a=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage();return Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(z,{title:"Please leave feedback",children:Object(P.jsx)(C,{children:Object(P.jsx)(G,{options:this.state,onLeaveFeedback:this.handleFeedbackOptions})})}),Object(P.jsx)(z,{title:"Statistics",children:Object(P.jsx)(C,{children:a>0?Object(P.jsx)(B,{good:t,neutral:n,bad:c,total:a,positivePercentage:i}):Object(P.jsx)(q,{message:"No feedback given"})})})]})}}]),n}(u.Component);g.a.render(Object(P.jsx)(h.a.StrictMode,{children:Object(P.jsx)(D,{})}),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.50a4976e.chunk.js.map