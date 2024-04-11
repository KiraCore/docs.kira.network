"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4229],{2039:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=r(5893),n=r(1151);r(4866),r(5162);const s={title:"Overview",sidebar_position:0,slug:"/e9523d9e-40b5-40ed-9773-7fc36af1cdcd"},o=void 0,i={id:"backend---sekai/modules-&-cli/modules/params/overview",title:"Overview",description:"Description",source:"@site/tabs/Docs/backend---sekai/modules-&-cli/modules/params/overview.mdx",sourceDirName:"backend---sekai/modules-&-cli/modules/params",slug:"/e9523d9e-40b5-40ed-9773-7fc36af1cdcd",permalink:"/docs/e9523d9e-40b5-40ed-9773-7fc36af1cdcd",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/e9523d9e-40b5-40ed-9773-7fc36af1cdcd&page-local=backend---sekai/modules-&-cli/modules/params/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"/e9523d9e-40b5-40ed-9773-7fc36af1cdcd"},sidebar:"defaultSidebar",previous:{title:"Transaction validation & processing",permalink:"/docs/f7f02009-1f78-426b-8915-f503cdda9671"},next:{title:"Overview",permalink:"/docs/70b1b18b-298d-42dc-9562-85de3c8bc42f"}},l={},u=[{value:"Description",id:"5c7e1a0d71424136833962296a275433",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"5c7e1a0d71424136833962296a275433",children:"Description"}),"\n",(0,a.jsxs)(t.p,{children:["The Params module is extended from the Cosmos SDK's ",(0,a.jsx)(t.code,{children:"params"})," module. It provides a global parameter store for modules within the network. The module comprises two key types: Keeper and Subspace. Subspace allows for isolated namespaces in the parameter store, where keys are prefixed with a designated namespace, while the Keeper has permission to access all existing namespaces."]}),"\n",(0,a.jsxs)(t.p,{children:["Currently, KIRA only uses the Params module as it is a dependency of the Auth module. The Params module ensures that the Auth module parameters can be modified as needed through the ",(0,a.jsx)(t.code,{children:"x/gov"})," router via a proposal. However, as these parameters are not currently being utilized, the Params module might be deprecated in the future."]}),"\n",(0,a.jsx)(t.p,{children:"For example, here is how the Auth module's Params structure is defined in the Protobuf message format:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-protobuf",children:"protoCopy code\nmessage Params {\n  uint64 max_memo_characters       = 1;\n  uint64 tx_sig_limit              = 2;\n  uint64 tx_size_cost_per_byte     = 3;\n  uint64 sig_verify_cost_ed25519   = 4;\n  uint64 sig_verify_cost_secp256k1 = 5;\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>o});r(7294);var a=r(6905);const n={tabItem:"tabItem_Ymn6"};var s=r(5893);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,o),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(7294),n=r(6905),s=r(2466),o=r(6550),i=r(469),l=r(1980),u=r(7392),c=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=m(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function w(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==a&&(u(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...e,...t}),(0,g.jsx)(x,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var a=r(7294);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);