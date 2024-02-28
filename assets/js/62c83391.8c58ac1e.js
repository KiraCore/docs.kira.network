"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[7949],{1389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(5893),r=n(1151);n(4866),n(5162);const o={title:"SEKAI | Backend",sidebar_position:0,slug:"/27fe8d79-00c0-4e0b-872b-3d72a246c073"},s=void 0,l={id:"Stack/SEKAI--Backend/index",title:"SEKAI | Backend",description:"Sekai",source:"@site/tabs/Docs/Stack/SEKAI--Backend/index.mdx",sourceDirName:"Stack/SEKAI--Backend",slug:"/27fe8d79-00c0-4e0b-872b-3d72a246c073",permalink:"/docs/27fe8d79-00c0-4e0b-872b-3d72a246c073",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"SEKAI | Backend",sidebar_position:0,slug:"/27fe8d79-00c0-4e0b-872b-3d72a246c073"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/"},next:{title:"System Requirements",permalink:"/docs/d1a56903-4e24-47ce-b39f-f28be9123399"}},i={},u=[{value:"Sekai",id:"9d6b533d3a7d49f28a9b3f19b0b700c5",level:2}];function c(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"9d6b533d3a7d49f28a9b3f19b0b700c5",children:"Sekai"}),"\n",(0,a.jsxs)(t.p,{children:["SEKAI \u4e16\u754c (\u305b\u304b\u3044) - is KIRA\u2019s blockchain application responsible for all on-chain logic such as processing transactions and state transitions. SEKAI is executed by specialized node operators called consensus nodes a.k.a \u201cValidators\u201d who individually propose new blocks and together agree on the correctness of each new block in accordance with the SEKAI codebase. In short, all logic relevant to the block propagation and networking is handled by ",(0,a.jsx)(t.a,{href:"https://tendermint.com/",children:"Tendermint"})," while all application logic is handled by SEKAI (",(0,a.jsx)(t.code,{children:"sekaid"}),")."]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7294),r=n(6905),o=n(2466),s=n(6550),l=n(469),i=n(1980),u=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=b(e),[s,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:n,groupId:r}),[h,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=u??h;return f({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function k(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),r=l[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function I(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,g.jsx)(I,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var a=n(7294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);