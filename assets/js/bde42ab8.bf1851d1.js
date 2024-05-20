"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4328],{7019:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(5893),r=a(1151);a(4866),a(5162);const i={title:"Decentralized API Gateway",sidebar_position:2,slug:"decentralized-api-gateway"},s=void 0,o={id:"what-is-kira/middleware---interx/decentralized-api-gateway",title:"Decentralized API Gateway",description:"A distinctive feature of INTERX is its functionality as a decentralized RPC gateway. This capability stems from its unique setup where each INTERX node, regardless of its associated subnet, is linked to a KIRA account address, with all responses being digitally signed. This architecture allows users to query multiple nodes simultaneously and evaluate the responses against each other. Such a mechanism enables users to identify nodes that consistently deliver precise responses and craft off-chain fraud proofs against nodes disseminating fraudulent or inconsistent data.",source:"@site/tabs/learn/what-is-kira/middleware---interx/decentralized-api-gateway.mdx",sourceDirName:"what-is-kira/middleware---interx",slug:"/what-is-kira/middleware---interx/decentralized-api-gateway",permalink:"/learn/what-is-kira/middleware---interx/decentralized-api-gateway",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/what-is-kira/middleware---interx/decentralized-api-gateway&page-local=what-is-kira/middleware---interx/decentralized-api-gateway.mdx",tags:[],version:"current",lastUpdatedAt:1716175504,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:2,frontMatter:{title:"Decentralized API Gateway",sidebar_position:2,slug:"decentralized-api-gateway"},sidebar:"defaultSidebar",previous:{title:"KIRA\u2019s Approach to Data Availability",permalink:"/learn/what-is-kira/middleware---interx/kiras-approach-to-data-availability"},next:{title:"Frontend - MIRO",permalink:"/learn/what-is-kira/frontend---miro"}},l={},u=[];function c(e){const t={p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"A distinctive feature of INTERX is its functionality as a decentralized RPC gateway. This capability stems from its unique setup where each INTERX node, regardless of its associated subnet, is linked to a KIRA account address, with all responses being digitally signed. This architecture allows users to query multiple nodes simultaneously and evaluate the responses against each other. Such a mechanism enables users to identify nodes that consistently deliver precise responses and craft off-chain fraud proofs against nodes disseminating fraudulent or inconsistent data."}),"\n",(0,n.jsx)(t.p,{children:"While light clients theoretically offer higher security through block-by-block consensus verification (without storing data), they fall short due to the maintenance they require. This maintenance challenge becomes particularly pronounced across hundreds or thousands of applications in a growing multi-chain world. By enabling the creation of fraud proofs, INTERX introduces a practical alternative for decentralization. It establishes a balance between the security offered by light clients and the convenience of Infura-style RPC providers. Through repeated queries to a broad spectrum of INTERX nodes, users can achieve a level of security comparable to that of light clients, assuming these nodes are either verified through the Identity Registrar or have stakes involved. This system underscores that even a single honest INTERX node in the query batch can trigger the eviction or slashing of dishonest ones. However, for maximum safety, users are recommended to operate their own INTERX node as well as a SEKAI instance, essentially running a full node."})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>s});a(7294);var n=a(6905);const r={tabItem:"tabItem_Ymn6"};var i=a(5893);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,s),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>I});var n=a(7294),r=a(6905),i=a(2466),s=a(6550),o=a(469),l=a(1980),u=a(7392),c=a(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,d]=p({queryString:a,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),g=(()=>{const e=u??m;return f({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=a(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=a(5893);function v(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.o5)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(w,{...e,...t})]})}function I(e){const t=(0,b.Z)();return(0,y.jsx)(k,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>s});var n=a(7294);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);