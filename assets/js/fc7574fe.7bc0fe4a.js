"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[647],{200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(5893),n=r(1151);r(4866),r(5162);const o={title:"Orchestrator - RYOKAI",sidebar_position:4,slug:"orchestrator---ryokai"},s=void 0,i={id:"what-is-kira/orchestrator---ryokai",title:"Orchestrator - RYOKAI",description:"RYOKAI \u4e86\u89e3 (\u308a\u3087\u304b\u3044), previously known as KIRA Manager, is KIRA\u2019s orchestration tool, a physical infrastructure manager that facilitates backend operations of KIRA stack components for Consensus nodes. It automates critical processes such as SEKAI system upgrades, auto-deployment of containerized Layer 2 applications, and INTERX configuration.",source:"@site/tabs/learn/what-is-kira/orchestrator---ryokai.mdx",sourceDirName:"what-is-kira",slug:"/what-is-kira/orchestrator---ryokai",permalink:"/learn/what-is-kira/orchestrator---ryokai",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/what-is-kira/orchestrator---ryokai&page-local=what-is-kira/orchestrator---ryokai.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:4,frontMatter:{title:"Orchestrator - RYOKAI",sidebar_position:4,slug:"orchestrator---ryokai"},sidebar:"defaultSidebar",previous:{title:"Frontend - MIRO",permalink:"/learn/what-is-kira/frontend---miro"},next:{title:"Overview",permalink:"/learn/what-is-kira/layer-2/overview"}},l={},u=[];function c(e){const t={p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"RYOKAI \u4e86\u89e3 (\u308a\u3087\u304b\u3044), previously known as KIRA Manager, is KIRA\u2019s orchestration tool, a physical infrastructure manager that facilitates backend operations of KIRA stack components for Consensus nodes. It automates critical processes such as SEKAI system upgrades, auto-deployment of containerized Layer 2 applications, and INTERX configuration."}),"\n",(0,a.jsx)(t.p,{children:"RYOKAI facilitates the initialization and management of nodes via a built-in terminal, which permits the direct execution of commands on remote hosts. Additionally, it offers cross-platform support, enabling Consensus nodes to manage their \u2018validator\u2019 accounts on Android, iOS, and Linux devices. These features provide operators with the flexibility to access and control their infrastructure from any location, at any time. For monitoring, RYOKAI eliminates the need for additional computer systems by incorporating Prometheus exporters and the standard Tendermint endpoint (:26660). These tools collect and relay operational data, providing Consensus nodes with a detailed understanding of network health and performance without relying on traditional monitoring infrastructure. Additionally, RYOKAI improves network security through firewall configurations, ssh key management, and encrypted communication channels to prevent unauthorized access and vulnerabilities."})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>s});r(7294);var a=r(6905);const n={tabItem:"tabItem_Ymn6"};var o=r(5893);function s(e){let{children:t,hidden:r,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,s),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>I});var a=r(7294),n=r(6905),o=r(2466),s=r(6550),i=r(469),l=r(1980),u=r(7392),c=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=h(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=u??f;return p({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function y(e){let{className:t,block:r,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=i[r].value;n!==a&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(k,{...t,...e})]})}function I(e){const t=(0,b.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>s});var a=r(7294);const n={},o=a.createContext(n);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);