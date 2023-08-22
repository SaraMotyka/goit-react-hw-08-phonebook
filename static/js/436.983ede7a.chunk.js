"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[436],{3436:function(n,e,r){r.r(e),r.d(e,{default:function(){return wn}});var t=r(9434),o=function(n){return n.contacts.isLoading},a=function(n){return n.contacts.error},i=function(n){return n.filter.filterQuery},c=function(n){var e=function(n){return n.contacts.contacts}(n),r=i(n);return e.filter((function(n){return""===r||n.name.toLowerCase().includes(r.toLowerCase())}))},l=r(2791),u=r(8427),s=r(7462),d=r(3366),f=r(3733),m=r(4419),v=r(6934),p=r(1402),g=r(5527),x=r(5878),h=r(1217);function Z(n){return(0,h.Z)("MuiCard",n)}(0,x.Z)("MuiCard",["root"]);var b=r(184),w=["className","raised"],S=(0,v.ZP)(g.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),j=l.forwardRef((function(n,e){var r=(0,p.Z)({props:n,name:"MuiCard"}),t=r.className,o=r.raised,a=void 0!==o&&o,i=(0,d.Z)(r,w),c=(0,s.Z)({},r,{raised:a}),l=function(n){var e=n.classes;return(0,m.Z)({root:["root"]},Z,e)}(c);return(0,b.jsx)(S,(0,s.Z)({className:(0,f.Z)(l.root,t),elevation:a?8:void 0,ref:e,ownerState:c},i))}));function y(n){return(0,h.Z)("MuiCardActions",n)}(0,x.Z)("MuiCardActions",["root","spacing"]);var C=["disableSpacing","className"],k=(0,v.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var r=n.ownerState;return[e.root,!r.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,s.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),G=l.forwardRef((function(n,e){var r=(0,p.Z)({props:n,name:"MuiCardActions"}),t=r.disableSpacing,o=void 0!==t&&t,a=r.className,i=(0,d.Z)(r,C),c=(0,s.Z)({},r,{disableSpacing:o}),l=function(n){var e=n.classes,r={root:["root",!n.disableSpacing&&"spacing"]};return(0,m.Z)(r,y,e)}(c);return(0,b.jsx)(k,(0,s.Z)({className:(0,f.Z)(l.root,a),ownerState:c,ref:e},i))}));function O(n){return(0,h.Z)("MuiCardContent",n)}(0,x.Z)("MuiCardContent",["root"]);var N=["className","component"],_=(0,v.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),M=l.forwardRef((function(n,e){var r=(0,p.Z)({props:n,name:"MuiCardContent"}),t=r.className,o=r.component,a=void 0===o?"div":o,i=(0,d.Z)(r,N),c=(0,s.Z)({},r,{component:a}),l=function(n){var e=n.classes;return(0,m.Z)({root:["root"]},O,e)}(c);return(0,b.jsx)(_,(0,s.Z)({as:a,className:(0,f.Z)(l.root,t),ownerState:c,ref:e},i))})),E=r(6151),A=r(890),R=r(9439),W=r(3433),q=r(78),P=r(3457),z=r(7078),D=r(418),I=r(8519),F=r(5080),L=r(4942),T=function(n,e,r){var t,o,a=n.keys[0];if(Array.isArray(e))e.forEach((function(e,t){r((function(e,r){t<=n.keys.length-1&&(0===t?Object.assign(e,r):e[n.up(n.keys[t])]=r)}),e)}));else if(e&&"object"===typeof e){(Object.keys(e).length>n.keys.length?n.keys:(t=n.keys,o=Object.keys(e),t.filter((function(n){return o.includes(n)})))).forEach((function(t){if(-1!==n.keys.indexOf(t)){var o=e[t];void 0!==o&&r((function(e,r){a===t?Object.assign(e,r):e[n.up(t)]=r}),o)}}))}else"number"!==typeof e&&"string"!==typeof e||r((function(n,e){Object.assign(n,e)}),e)};function B(n){return n?"Level".concat(n):""}function K(n){return n.unstable_level>0&&n.container}function Q(n){return function(e){return"var(--Grid-".concat(e,"Spacing").concat(B(n.unstable_level),")")}}function V(n){return function(e){return 0===n.unstable_level?"var(--Grid-".concat(e,"Spacing)"):"var(--Grid-".concat(e,"Spacing").concat(B(n.unstable_level-1),")")}}function Y(n){return 0===n.unstable_level?"var(--Grid-columns)":"var(--Grid-columns".concat(B(n.unstable_level-1),")")}var $=function(n){var e=n.theme,r=n.ownerState,t=Q(r),o={};return T(e.breakpoints,r.gridSize,(function(n,e){var a={};!0===e&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===e&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"===typeof e&&(a={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(e," / ").concat(Y(r)).concat(K(r)?" + ".concat(t("column")):"",")")}),n(o,a)})),o},H=function(n){var e=n.theme,r=n.ownerState,t={};return T(e.breakpoints,r.gridOffset,(function(n,e){var o={};"auto"===e&&(o={marginLeft:"auto"}),"number"===typeof e&&(o={marginLeft:0===e?"0px":"calc(100% * ".concat(e," / ").concat(Y(r),")")}),n(t,o)})),t},J=function(n){var e=n.theme,r=n.ownerState;if(!r.container)return{};var t=K(r)?(0,L.Z)({},"--Grid-columns".concat(B(r.unstable_level)),Y(r)):{"--Grid-columns":12};return T(e.breakpoints,r.columns,(function(n,e){n(t,(0,L.Z)({},"--Grid-columns".concat(B(r.unstable_level)),e))})),t},U=function(n){var e=n.theme,r=n.ownerState;if(!r.container)return{};var t=V(r),o=K(r)?(0,L.Z)({},"--Grid-rowSpacing".concat(B(r.unstable_level)),t("row")):{};return T(e.breakpoints,r.rowSpacing,(function(n,t){var a;n(o,(0,L.Z)({},"--Grid-rowSpacing".concat(B(r.unstable_level)),"string"===typeof t?t:null==(a=e.spacing)?void 0:a.call(e,t)))})),o},X=function(n){var e=n.theme,r=n.ownerState;if(!r.container)return{};var t=V(r),o=K(r)?(0,L.Z)({},"--Grid-columnSpacing".concat(B(r.unstable_level)),t("column")):{};return T(e.breakpoints,r.columnSpacing,(function(n,t){var a;n(o,(0,L.Z)({},"--Grid-columnSpacing".concat(B(r.unstable_level)),"string"===typeof t?t:null==(a=e.spacing)?void 0:a.call(e,t)))})),o},nn=function(n){var e=n.theme,r=n.ownerState;if(!r.container)return{};var t={};return T(e.breakpoints,r.direction,(function(n,e){n(t,{flexDirection:e})})),t},en=function(n){var e=n.ownerState,r=Q(e),t=V(e);return(0,s.Z)({minWidth:0,boxSizing:"border-box"},e.container&&(0,s.Z)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:"calc(".concat(r("row")," / -2) calc(").concat(r("column")," / -2)")},e.disableEqualOverflow&&{margin:"calc(".concat(r("row")," * -1) 0px 0px calc(").concat(r("column")," * -1)")}),(!e.container||K(e))&&(0,s.Z)({padding:"calc(".concat(t("row")," / 2) calc(").concat(t("column")," / 2)")},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:"".concat(t("row")," 0px 0px ").concat(t("column"))}))},rn=function(n){var e=[];return Object.entries(n).forEach((function(n){var r=(0,R.Z)(n,2),t=r[0],o=r[1];!1!==o&&void 0!==o&&e.push("grid-".concat(t,"-").concat(String(o)))})),e},tn=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function r(n){return void 0!==n&&("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n&&n>0)}if(r(n))return["spacing-".concat(e,"-").concat(String(n))];if("object"===typeof n&&!Array.isArray(n)){var t=[];return Object.entries(n).forEach((function(n){var e=(0,R.Z)(n,2),o=e[0],a=e[1];r(a)&&t.push("spacing-".concat(o,"-").concat(String(a)))})),t}return[]},on=function(n){return void 0===n?[]:"object"===typeof n?Object.entries(n).map((function(n){var e=(0,R.Z)(n,2),r=e[0],t=e[1];return"direction-".concat(r,"-").concat(t)})):["direction-xs-".concat(String(n))]},an=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],cn=(0,F.Z)(),ln=(0,P.Z)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){return e.root}});function un(n){return(0,z.Z)({props:n,name:"MuiGrid",defaultTheme:cn})}var sn=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.createStyledComponent,r=void 0===e?ln:e,t=n.useThemeProps,o=void 0===t?un:t,a=n.componentName,i=void 0===a?"MuiGrid":a,c=l.createContext(void 0),u=function(n,e){var r=n.container,t=n.direction,o=n.spacing,a=n.wrap,c=n.gridSize,l={root:["root",r&&"container","wrap"!==a&&"wrap-xs-".concat(String(a))].concat((0,W.Z)(on(t)),(0,W.Z)(rn(c)),(0,W.Z)(r?tn(o,e.breakpoints.keys[0]):[]))};return(0,m.Z)(l,(function(n){return(0,h.Z)(i,n)}),{})},v=r(J,X,U,$,nn,en,H),p=l.forwardRef((function(n,e){var r,t,a,i,m,p,g,x,h=(0,D.Z)(),Z=o(n),w=(0,I.Z)(Z),S=l.useContext(c),j=w.className,y=w.children,C=w.columns,k=void 0===C?12:C,G=w.container,O=void 0!==G&&G,N=w.component,_=void 0===N?"div":N,M=w.direction,E=void 0===M?"row":M,A=w.wrap,W=void 0===A?"wrap":A,P=w.spacing,z=void 0===P?0:P,F=w.rowSpacing,L=void 0===F?z:F,T=w.columnSpacing,B=void 0===T?z:T,K=w.disableEqualOverflow,Q=w.unstable_level,V=void 0===Q?0:Q,Y=(0,d.Z)(w,an),$=K;V&&void 0!==K&&($=n.disableEqualOverflow);var H={},J={},U={};Object.entries(Y).forEach((function(n){var e=(0,R.Z)(n,2),r=e[0],t=e[1];void 0!==h.breakpoints.values[r]?H[r]=t:void 0!==h.breakpoints.values[r.replace("Offset","")]?J[r.replace("Offset","")]=t:U[r]=t}));var X=null!=(r=n.columns)?r:V?void 0:k,nn=null!=(t=n.spacing)?t:V?void 0:z,en=null!=(a=null!=(i=n.rowSpacing)?i:n.spacing)?a:V?void 0:L,rn=null!=(m=null!=(p=n.columnSpacing)?p:n.spacing)?m:V?void 0:B,tn=(0,s.Z)({},w,{level:V,columns:X,container:O,direction:E,wrap:W,spacing:nn,rowSpacing:en,columnSpacing:rn,gridSize:H,gridOffset:J,disableEqualOverflow:null!=(g=null!=(x=$)?x:S)&&g,parentDisableEqualOverflow:S}),on=u(tn,h),cn=(0,b.jsx)(v,(0,s.Z)({ref:e,as:_,ownerState:tn,className:(0,f.Z)(on.root,j)},U,{children:l.Children.map(y,(function(n){var e;return l.isValidElement(n)&&(0,q.Z)(n,["Grid"])?l.cloneElement(n,{unstable_level:null!=(e=n.props.unstable_level)?e:V+1}):n}))}));return void 0!==$&&$!==(null!=S&&S)&&(cn=(0,b.jsx)(c.Provider,{value:$,children:cn})),cn}));return p.muiName="Grid",p}({createStyledComponent:(0,v.ZP)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:function(n,e){return e.root}}),componentName:"MuiGrid2",useThemeProps:function(n){return(0,p.Z)({props:n,name:"MuiGrid2"})}}),dn=sn,fn=function(n){var e=(0,t.I0)();return(0,b.jsx)(dn,{xs:4,lg:3,children:(0,b.jsxs)(j,{sx:{minWidth:200},children:[(0,b.jsxs)(M,{children:[(0,b.jsx)(A.Z,{variant:"h5",children:n.name}),(0,b.jsx)(A.Z,{sx:{mb:.5},color:"text.secondary",children:n.number})]}),(0,b.jsx)(G,{children:(0,b.jsx)(E.Z,{size:"small",onClick:function(){e((0,u.GK)(n.id))},color:"error",children:"Delete contact"})})]})})},mn=r(4554),vn=r(9164),pn=function(){var n=(0,t.v9)(c);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(vn.Z,{sx:{mt:2,flexGrow:1},maxWidth:"lg",children:(0,b.jsx)(mn.Z,{sx:{flexGrow:1},style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",marginBottom:"100px"},children:(0,b.jsx)(dn,{container:!0,spacing:{xs:4,md:4},columns:{xs:4,sm:8,md:12},children:n.length?n.map((function(n){return(0,b.jsx)(fn,{id:n.id,name:n.name,number:n.number},n.id)})):(0,b.jsx)("p",{children:"Your phonebook is empty. Add your contacts"})})})})})},gn=r(2956),xn=r(8308),hn=function(){var n=(0,t.I0)(),e=(0,t.v9)(i);return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)(vn.Z,{maxWidth:"xs",children:(0,b.jsxs)(mn.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(A.Z,{component:"h2",variant:"h5",children:"Find contacts:"}),(0,b.jsx)(xn.Z,{margin:"normal",fullWidth:!0,id:"filter",value:e,type:"text",name:"filter",autoFocus:!0,required:!0,onChange:function(e){n((0,gn.p)(e.target.value))}})]})})})},Zn=function(){var n=(0,l.useState)(""),e=(0,R.Z)(n,2),r=e[0],o=e[1],a=(0,l.useState)(""),i=(0,R.Z)(a,2),c=i[0],s=i[1],d=(0,l.useState)(!1),f=(0,R.Z)(d,2),m=f[0],v=f[1],p=(0,l.useState)(!1),g=(0,R.Z)(p,2),x=g[0],h=g[1],Z=(0,t.I0)(),w=function(n){return/^[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c]+(([' -][a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c])?[a-zA-Z\u0104\u0105\u0106\u0107\u0118\u0119\u0141\u0142\u0143\u0144\xd3\xf3\u015a\u015b\u0179\u017a\u017b\u017c]*)*$/.test(n)},S=function(n){return/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(n)};return(0,b.jsx)(vn.Z,{maxWidth:"xs",children:(0,b.jsxs)(mn.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,b.jsx)(A.Z,{component:"h1",variant:"h5",children:"Add your contact"}),(0,b.jsxs)(mn.Z,{component:"form",onSubmit:function(n){n.preventDefault();var e=n.target;w(r)&&S(c)&&Z((0,u.uK)({name:e.elements.name.value,number:e.elements.number.value})),e.reset(),o(""),s(""),v(!1),h(!1)},sx:{mt:1},children:[(0,b.jsx)(xn.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Contact Name",name:"name",autoFocus:!0,value:r,onChange:function(n){o(n.target.value),v(!w(n.target.value))},error:m,helperText:m&&"Name may contain only letters, apostrophe, dash and spaces"}),(0,b.jsx)(xn.Z,{margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Phone number",type:"tel",id:"phone",value:c,onChange:function(n){s(n.target.value),h(!S(n.target.value))},error:x,helperText:x&&"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"}),(0,b.jsx)(E.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:m||x,children:"Add contact"})]})]})})},bn=r(2027),wn=function(){var n=(0,t.I0)(),e=(0,t.v9)(o),r=(0,t.v9)(a);return(0,l.useEffect)((function(){n((0,u.yF)())}),[n]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(Zn,{}),(0,b.jsx)(hn,{}),e&&!r&&(0,b.jsx)(bn.Z,{}),(0,b.jsx)(pn,{})]})}}}]);
//# sourceMappingURL=436.983ede7a.chunk.js.map