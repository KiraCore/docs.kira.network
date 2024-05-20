"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[5993],{6631:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(5893),r=n(1151);n(4866),n(5162);const s={title:"Overview",sidebar_position:0,slug:"overview"},o=void 0,i={id:"what-is-kira/backend---sekai/overview",title:"Overview",description:"SEKAI (\u4e16\u754c) is KIRA's core blockchain, managing all on-chain logic, including processing transactions and state transitions. SEKAI iterates upon Tendermint consensus with its own Multi-Bonded Proof of Stake (MBPoS), which enables the staking of multiple whitelisted assets as well as KEX, KIRA\u2019s native token and natively supported Liquid Staking Derivatives. Consensus Nodes, or 'validators,' propose new states of SEKAI blockchain application derived from blocks that contain an ordered list of transactions carrying instructions (user requests). Those instructions are then executed by each full node following the SEKAI codebase which defines how to interpret and apply them.",source:"@site/tabs/learn/what-is-kira/backend---sekai/overview.mdx",sourceDirName:"what-is-kira/backend---sekai",slug:"/what-is-kira/backend---sekai/overview",permalink:"/learn/what-is-kira/backend---sekai/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/what-is-kira/backend---sekai/overview&page-local=what-is-kira/backend---sekai/overview.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"overview"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/learn/"},next:{title:"Consensus",permalink:"/learn/what-is-kira/backend---sekai/consensus"}},l={},u=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"SEKAI (\u4e16\u754c) is KIRA's core blockchain, managing all on-chain logic, including processing transactions and state transitions. SEKAI iterates upon Tendermint consensus with its own Multi-Bonded Proof of Stake (MBPoS), which enables the staking of multiple whitelisted assets as well as KEX, KIRA\u2019s native token and natively supported Liquid Staking Derivatives. Consensus Nodes, or 'validators,' propose new states of SEKAI blockchain application derived from blocks that contain an ordered list of transactions carrying instructions (user requests). Those instructions are then executed by each full node following the SEKAI codebase which defines how to interpret and apply them."}),"\n",(0,a.jsxs)(t.p,{children:["Unlike most existing base layers, SEKAI is not a monolithic chain application. Instead, it depends on multiple modular off-chain components to enable parallel scaling of the execution, storage, and networking capabilities of the network. Those other components are ",(0,a.jsx)(t.a,{href:"/learn/what-is-kira/middleware---interx/overview",children:"INTERX (Content Availability Layer)"})," and ",(0,a.jsx)(t.a,{href:"/learn/what-is-kira/orchestrator---ryokai",children:"RYOKAI (Smart Resource Orchestrator)"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"The primary role of SEKAI in the KIRA hypermodular (hyper-connected modular) network is to facilitate the settlement of user balances, provide shared security to the RollApp-centric execution layer, and facilitate data and token transfers. Each consensus nodes has a supporting role of providing the resources necessary to run both SEKAI and the L2 applications (RollApps). SEKAI is used as a coordination hub allowing Consensus nodes to signal which RollApps they want to run and which they don\u2019t or currently can\u2019t afford to run due to their hardware or networking limitations."}),"\n",(0,a.jsxs)(t.p,{children:["SEKAI greatly simplifies RollApps deployment process - that\u2019s where ",(0,a.jsx)(t.a,{href:"/learn/glossary#eb32e36246ef424186f9f01f7f527741",children:"Controllers"})," submit metadata describing their RollApp needs, which includes references to the execution and verification containers, networking configuration, infrastructure resources needed, and other essential data needed by RYOKAI to run the RollApp. Consensus nodes can then volunteer as Executors for these RollApps and consequently be incentivized by them as well as KIRA\u2019s native liquidity protocol (AMM fees). Based on metadata, they can locate and download the necessary containers, to subsequently run them and propose updates to the app's state and balances on SEKAI. The verification container is then made available to other Consensus nodes and users (acting as Fishermen) for participation in the verification of the RollApp execution process."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["To learn more about how KIRA's RollApps function and how they differ from traditional models, visit our detailed discussion in the ",(0,a.jsx)(t.a,{href:"/learn/what-is-kira/layer-2/overview",children:"Layer 2"})," section."]})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>I});var a=n(7294),r=n(6905),s=n(2466),o=n(6550),i=n(469),l=n(1980),u=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:n,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),v=(()=>{const e=u??b;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var w=n(5893);function k(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=b(e);return(0,w.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,w.jsx)(k,{...t,...e}),(0,w.jsx)(g,{...t,...e})]})}function I(e){const t=(0,m.Z)();return(0,w.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(7294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);