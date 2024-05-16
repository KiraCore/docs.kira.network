"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4702],{5099:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(5893),i=t(1151);t(4866),t(5162);const r={title:"KIRA\u2019s Approach to Data Availability",sidebar_position:1,slug:"/kiras-approach-to-data-availability"},s=void 0,o={id:"what-is-kira/middleware---interx/kira\u2019s-approach-to-data-availability",title:"KIRA\u2019s Approach to Data Availability",description:"Traditional systems often treat all application data uniformly\u2014both user balances and arbitrary data\u2014 a method that compromises UX and practicality. This is particularly true when quick access to essential and trusted information, like user balances, is required during unexpected interruptions in the application\u2019s sequencing process (e.g. requests rate limiting). KIRA addresses this by clearly distinguishing these types of data. Specifically, user balances can be directly settled on SEKAI, KIRA\u2019s base layer, leveraging account abstraction. This arrangement allows Layer 2 applications to be treated similarly to user accounts, enabling them to perform on-chain actions such as issuing tokens, participating in governance, staking, and even communicating with other applications as if they were autonomous humans.",source:"@site/tabs/learn/what-is-kira/middleware---interx/kira\u2019s-approach-to-data-availability.mdx",sourceDirName:"what-is-kira/middleware---interx",slug:"/kiras-approach-to-data-availability",permalink:"/learn/kiras-approach-to-data-availability",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/kiras-approach-to-data-availability&page-local=what-is-kira/middleware---interx/kira\u2019s-approach-to-data-availability.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"KIRA\u2019s Approach to Data Availability",sidebar_position:1,slug:"/kiras-approach-to-data-availability"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/learn/overview"},next:{title:"Decentralized API Gateway",permalink:"/learn/decentralized-api-gateway"}},l={},c=[];function u(e){const a={li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:"Traditional systems often treat all application data uniformly\u2014both user balances and arbitrary data\u2014 a method that compromises UX and practicality. This is particularly true when quick access to essential and trusted information, like user balances, is required during unexpected interruptions in the application\u2019s sequencing process (e.g. requests rate limiting). KIRA addresses this by clearly distinguishing these types of data. Specifically, user balances can be directly settled on SEKAI, KIRA\u2019s base layer, leveraging account abstraction. This arrangement allows Layer 2 applications to be treated similarly to user accounts, enabling them to perform on-chain actions such as issuing tokens, participating in governance, staking, and even communicating with other applications as if they were autonomous humans."}),"\n",(0,n.jsx)(a.p,{children:"In managing and ensuring the availability of arbitrary application data, INTERX adopts a specialized implementation designed to enhance the data replication versus network overhead ratio. This implementation is underpinned by four foundational concepts:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Integrated Data Management:"})," Consensus nodes operate and autoscale INTERX containers alongside their RollApp execution containers, akin to how edge nodes function within traditional Web2 networks. An edge node serves as a conduit between local environments (SEKAI and RollApp containers in KIRA\u2019s case) and the external world. In this setup, essential data is directly accessible on the same devices that execute the application, thus reducing latency and the dependency issues seen when DA is handled by an external network."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Dedicated DA Sub-networks"}),": Leveraging its node discovery capabilities, INTERX assigns each RollApp its own firewalled and rate-limited DA 'subnet'. This architecture optimizes bandwidth utilization and resource allocation by reducing the exchange and management of the application\u2019s data only to the nodes directly relevant to the application\u2014namely, its executors and verifiers."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Adaptive Data Replication"}),": Traditional DA systems often employ a one-size-fits-all replication factor. Essentially, they define the level of redundancy through a fixed number of copies distributed within the network to ensure data availability. In practice, however, individual applications have distinct requirements for data access speed and replication based on the data type. With INTERX, RollApp data is replicated based on the individual needs of executors and verifiers. Developers can scale this replication level to align precisely with their application's needs, such as minimum bandwidth utilization for noncritical data and/or maximum possible security for application-critical data."]}),"\n",(0,n.jsxs)(a.li,{children:[(0,n.jsx)(a.strong,{children:"Caching:"})," INTERX implements a caching mechanism to efficiently manage high-demand scenarios and prevent system overload. This feature is especially important in KIRA, where SEKAI\u2019s block time can be extended based on the number of consensus nodes involved, influencing the likelihood of data being queried multiple times before any updates occur. By storing data after its initial retrieval, INTERX can swiftly respond to duplicate requests, conserving resources required to perform complex queries and thus maintaining network responsiveness."]}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5162:(e,a,t)=>{t.d(a,{Z:()=>s});t(7294);var n=t(6905);const i={tabItem:"tabItem_Ymn6"};var r=t(5893);function s(e){let{children:a,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,s),hidden:t,children:a})}},4866:(e,a,t)=>{t.d(a,{Z:()=>x});var n=t(7294),i=t(6905),r=t(2466),s=t(6550),o=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:a,children:t}=e;return(0,n.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:i}}=e;return{value:a,label:t,attributes:n,default:i}}))}(t);return function(e){const a=(0,c.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function h(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const i=(0,s.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l._X)(r),(0,n.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(i.location.search);a.set(r,e),i.replace({...i.location,search:a.toString()})}),[r,i])]}function b(e){const{defaultValue:a,queryString:t=!1,groupId:i}=e,r=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!h({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[c,d]=m({queryString:t,groupId:i}),[b,f]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[i,r]=(0,u.Nk)(t);return[i,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),g=(()=>{const e=c??b;return h({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function y(e){let{className:a,block:t,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),u=e=>{const a=e.currentTarget,t=l.indexOf(a),i=o[t].value;i!==n&&(c(a),s(i))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,i.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function w(e){let{lazy:a,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function k(e){const a=b(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...a}),(0,v.jsx)(w,{...e,...a})]})}function x(e){const a=(0,f.Z)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(a))}},1151:(e,a,t)=>{t.d(a,{Z:()=>o,a:()=>s});var n=t(7294);const i={},r=n.createContext(i);function s(e){const a=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),n.createElement(r.Provider,{value:a},e.children)}}}]);