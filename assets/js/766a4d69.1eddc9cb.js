"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6710],{1869:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var r=a(5893),n=a(1151);a(4866),a(5162);const s={title:"Network Parameter Handling",sidebar_position:1,slug:"/e9523d9e-40b5-40ed-9773-7fc36af1cdcd"},o=void 0,l={id:"Backend---SEKAI/Command-Line-Interface/Modules/Params/Network-Parameter-Handling",title:"Network Parameter Handling",description:"Concept",source:"@site/tabs/Docs/Backend---SEKAI/Command-Line-Interface/Modules/Params/Network-Parameter-Handling.mdx",sourceDirName:"Backend---SEKAI/Command-Line-Interface/Modules/Params",slug:"/e9523d9e-40b5-40ed-9773-7fc36af1cdcd",permalink:"/docs/e9523d9e-40b5-40ed-9773-7fc36af1cdcd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Network Parameter Handling",sidebar_position:1,slug:"/e9523d9e-40b5-40ed-9773-7fc36af1cdcd"},sidebar:"defaultSidebar",previous:{title:"Params",permalink:"/docs/2c0ff397-9a46-4ea5-9b70-92d67ae00aa4"},next:{title:"Middleware - INTERX",permalink:"/docs/be25ed12-b476-4a07-8966-9bc4062bd746"}},u={},i=[{value:"Concept",id:"f1e5640fc58341d29bd64a960ce143c5",level:3}];function c(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"f1e5640fc58341d29bd64a960ce143c5",children:"Concept"}),"\n",(0,r.jsxs)(t.p,{children:["The Params module is extended from the Cosmos SDK's ",(0,r.jsx)(t.code,{children:"params"})," module. It provides a global parameter store for modules within the network. The module comprises two key types: Keeper and Subspace. Subspace allows for isolated namespaces in the parameter store, where keys are prefixed with a designated namespace, while the Keeper has permission to access all existing namespaces."]}),"\n",(0,r.jsxs)(t.p,{children:["Currently, KIRA only uses the Params module as it is a dependency of the Auth module. The Params module ensures that the Auth module parameters can be modified as needed through the ",(0,r.jsx)(t.code,{children:"x/gov"})," router via a proposal. However, as these parameters are not currently being utilized, the Params module might be deprecated in the future."]}),"\n",(0,r.jsx)(t.p,{children:"For example, here is how the Auth module's Params structure is defined in the Protobuf message format:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-protobuf",children:"protoCopy code\nmessage Params {\n  uint64 max_memo_characters       = 1;\n  uint64 tx_sig_limit              = 2;\n  uint64 tx_size_cost_per_byte     = 3;\n  uint64 sig_verify_cost_ed25519   = 4;\n  uint64 sig_verify_cost_secp256k1 = 5;\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var r=a(6905);const n={tabItem:"tabItem_Ymn6"};var s=a(5893);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,o),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(7294),n=a(6905),s=a(2466),o=a(6550),l=a(469),u=a(1980),i=a(7392),c=a(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=m(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[i,d]=f({queryString:a,groupId:n}),[h,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),v=(()=>{const e=i??h;return p({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(5893);function x(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:l}=e;const u=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),n=l[a].value;n!==r&&(i(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":a},t),children:l.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>l,a:()=>o});var r=a(7294);const n={},s=r.createContext(n);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);