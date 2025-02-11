"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4990],{8067:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>i});const r=JSON.parse('{"id":"backend---sekai/modules/native-cosmossdk-modules/params","title":"Params","description":"Overview","source":"@site/tabs/docs/backend---sekai/modules/native-cosmossdk-modules/params.mdx","sourceDirName":"backend---sekai/modules/native-cosmossdk-modules","slug":"/backend---sekai/modules/native-cosmossdk-modules/params","permalink":"/docs/backend---sekai/modules/native-cosmossdk-modules/params","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/native-cosmossdk-modules/params&page-local=backend---sekai/modules/native-cosmossdk-modules/params.mdx","tags":[],"version":"current","lastUpdatedAt":1719385750000,"sidebarPosition":3,"frontMatter":{"title":"Params","sidebar_position":3,"slug":"params"},"sidebar":"defaultSidebar","previous":{"title":"Bank","permalink":"/docs/backend---sekai/modules/native-cosmossdk-modules/bank"},"next":{"title":"Concept","permalink":"/docs/backend---sekai/modules/multistaking/concept"}}');var s=a(4848),n=a(8453);a(5537),a(9329);const o={title:"Params",sidebar_position:3,slug:"params"},u=void 0,l={},i=[{value:"Overview",id:"a34ab717e63d48ea89abbfa328197430",level:2}];function c(e){const t={code:"code",h2:"h2",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"a34ab717e63d48ea89abbfa328197430",children:"Overview"}),"\n",(0,s.jsxs)(t.p,{children:["The Params module is extended from the Cosmos SDK's ",(0,s.jsx)(t.code,{children:"params"})," module. It provides a global parameter store for modules within the network. The module comprises two key types: Keeper and Subspace. Subspace allows for isolated namespaces in the parameter store, where keys are prefixed with a designated namespace, while the Keeper has permission to access all existing namespaces."]}),"\n",(0,s.jsxs)(t.p,{children:["Currently, KIRA only uses the Params module as it is a dependency of the Auth module. The Params module ensures that the Auth module parameters can be modified as needed through the ",(0,s.jsx)(t.code,{children:"x/gov"})," router via a proposal. However, as these parameters are not currently being utilized, the Params module might be deprecated in the future."]}),"\n",(0,s.jsx)(t.p,{children:"For example, here is how the Auth module's Params structure is defined in the Protobuf message format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-protobuf",children:"protoCopy code\nmessage Params {\n  uint64 max_memo_characters       = 1;\n  uint64 tx_sig_limit              = 2;\n  uint64 tx_size_cost_per_byte     = 3;\n  uint64 sig_verify_cost_ed25519   = 4;\n  uint64 sig_verify_cost_secp256k1 = 5;\n}\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},9329:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var r=a(8215);const s={tabItem:"tabItem_Ymn6"};var n=a(4848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,r.A)(s.tabItem,o),hidden:a,children:t})}},5537:(e,t,a)=>{a.d(t,{A:()=>w});var r=a(6540),s=a(8215),n=a(5627),o=a(6347),u=a(372),l=a(604),i=a(1861),c=a(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:s}}=e;return{value:t,label:a,attributes:r,default:s}}))}(a);return function(e){const t=(0,i.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:a}=e;const s=(0,o.W6)(),n=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(s.location.search);t.set(n,e),s.replace({...s.location,search:t.toString()})}),[n,s])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:s}=e,n=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:n}))),[i,d]=h({queryString:a,groupId:s}),[b,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,n]=(0,c.Dv)(a);return[s,(0,r.useCallback)((e=>{a&&n.set(e)}),[a,n])]}({groupId:s}),v=(()=>{const e=i??b;return p({value:e,tabValues:n})?e:null})();(0,u.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,n]),tabValues:n}}var f=a(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=a(4848);function g(e){let{className:t,block:a,selectedValue:r,selectValue:o,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,n.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),s=u[a].value;s!==r&&(i(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:n}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...n,className:(0,s.A)("tabs__item",v.tabItem,n?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=b(e);return(0,k.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,k.jsx)(g,{...t,...e}),(0,k.jsx)(x,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,k.jsx)(y,{...e,children:d(e.children)},String(t))}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>u});var r=a(6540);const s={},n=r.createContext(s);function o(e){const t=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(n.Provider,{value:t},e.children)}}}]);