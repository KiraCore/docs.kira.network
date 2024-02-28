"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4845],{2873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(5893),r=n(1151);n(4866),n(5162);const o={title:"Frontend - MIRO",sidebar_position:3,slug:"/b5188aa1-563f-45e3-906a-9d71b80bd47a"},s=void 0,i={id:"What-is-KIRA/-Frontend---MIRO",title:"Frontend - MIRO",description:"MIRO \u770b (\u898b\u308b) is KIRA\u2019s frontend application and web wallet. It provides a straightforward interface for users to interact with the KIRA blockchain via the decentralized API, INTERX. This allows for efficient management of KIRA accounts and assets.",source:"@site/tabs/learn/What-is-KIRA/-Frontend---MIRO.mdx",sourceDirName:"What-is-KIRA",slug:"/b5188aa1-563f-45e3-906a-9d71b80bd47a",permalink:"/b5188aa1-563f-45e3-906a-9d71b80bd47a",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Frontend - MIRO",sidebar_position:3,slug:"/b5188aa1-563f-45e3-906a-9d71b80bd47a"},sidebar:"defaultSidebar",previous:{title:"Middleware - INTERX",permalink:"/8a93bc9c-ce24-4129-96d5-9bbe381f6851"},next:{title:"Orchestrator - RYOKAI",permalink:"/2ac3bfb7-478c-4207-a290-051d9fa6124f"}},l={},u=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"MIRO \u770b (\u898b\u308b) is KIRA\u2019s frontend application and web wallet. It provides a straightforward interface for users to interact with the KIRA blockchain via the decentralized API, INTERX. This allows for efficient management of KIRA accounts and assets."}),"\n",(0,a.jsx)(t.p,{children:"The defining feature of MIRO is its self-contained design. Once the MIRO page is loaded into a user's browser, it operates entirely locally on the user's computer. This means all actions taken within MIRO, from transactions to account management, happen within the user's device without the need reliance on external hosting servers. The only requirement is a connection to at least one local or public INTERX node."}),"\n",(0,a.jsx)(t.p,{children:"Notably, MIRO does not rely on light clients and leverages the security of INTERX for blockchain communication. This is possible thanks to INTERX\u2019s swarm request feature, which is designed to work optimally when MIRO interfaces with multiple INTERX nodes, ideally operated by different entities. While it's possible to connect MIRO to a single node, the real strength of swarm requests lies in their ability to cross check signed responses from multiple nodes to identify any inconsistencies and allow the creation of fraud proofs against false data. Such a strategy achieves a level of security comparable to that of light clients, with the safeguard that even one honest node among several can uphold the integrity of the system."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["For a comprehensive explanation of how INTERX's swarm requests leverage signed responses to bolster security, refer to the ",(0,a.jsx)(t.a,{href:"/8a93bc9c-ce24-4129-96d5-9bbe381f6851",children:"Middleware - INTERX"})," page."]})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>R});var a=n(7294),r=n(6905),o=n(2466),s=n(6550),i=n(469),l=n(1980),u=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=f(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=b({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),v=(()=>{const e=u??p;return h({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function I(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,r.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(I,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function R(e){const t=(0,m.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var a=n(7294);const r={},o=a.createContext(r);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);