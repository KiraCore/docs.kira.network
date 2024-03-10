"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4446],{8968:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=t(5893),r=t(1151);t(4866),t(5162);const i={title:"Introduction",sidebar_position:0,slug:"/"},o=void 0,s={id:"What-is-KIRA/Introduction",title:"Introduction",description:"KIRA is a hypermodular network with a programmable consensus framework designed to support the execution of trustless, blockchain-less applications that function as L2s to the network.",source:"@site/tabs/Learn/What-is-KIRA/Introduction.mdx",sourceDirName:"What-is-KIRA",slug:"/",permalink:"/learn/",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/&page-local=what-is-kira/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1710051586,formattedLastUpdatedAt:"Mar 10, 2024",sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0,slug:"/"},sidebar:"defaultSidebar",next:{title:"Overview",permalink:"/learn/bd45c7be-937d-4648-a162-5574b6a1c23e"}},l={},c=[{value:"Key Components of KIRA",id:"688908768d9540f7aeadc964ce849d56",level:3},{value:"Economic Model and Liquidity",id:"f158579a4606412e9fccf9f64d4a14d7",level:3},{value:"Why KIRA ?",id:"a7c50e68381848c1a94eb42f4f597725",level:3}];function u(e){const n={a:"a",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"KIRA is a hypermodular network with a programmable consensus framework designed to support the execution of trustless, blockchain-less applications that function as L2s to the network.\nWhile adhering to the principles of modular blockchain design, KIRA provides the full stack necessary to serve a new generation of trustless applications by fulfilling their needs for infrastructure, resources, DA, sequencing, and shared security."}),"\n",(0,a.jsxs)(n.p,{children:["KIRA applications, also referred to as RollApps, run virtualized inside dedicated Docker containers. They are managed by an unbounded set of Consensus nodes, who individually choose which RollApps to operate while collectively securing and governing the entire KIRA network. In KIRA, RollApps benefit from the ",(0,a.jsx)(n.a,{href:"/learn/bba461ae-7c67-4b66-8f1b-c51c887f2671",children:"Virtual Finality Gadget"})," (VFG) which allows developers to use any programming language as well as implement bespoke finality rules, including optimistic and pessimistic verification, ZK proofs, non-deterministic verification or any customized verification logic. KIRA empowers its RollApps to rival Web2 in user access scale, ease of building, deployment time, and operational costs, with independence from traditional blockchain infrastructures and Virtual Machines."]}),"\n",(0,a.jsx)(n.h3,{id:"688908768d9540f7aeadc964ce849d56",children:"Key Components of KIRA"}),"\n",(0,a.jsx)(n.p,{children:"KIRA Network combines several modular components to provide a full-stack experience:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"SEKAI"}),": SEKAI is KIRA\u2019s core blockchain application responsible for all on-chain logic, including the settling of users' and RollApp's account balances, preserving state roots\u2019 integrity, and enabling cross-RollApp communication. It plays a crucial role in orchestrating the necessary infrastructure needed to run the RollApps, liquid capital essential for boosting economic activity, and providing shared security for all applications on KIRA."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"INTERX"}),": INTERX is KIRA\u2019s Content Availability Layer. It ensures rapid, scalable queries and access to on-chain (SEKAI) and off-chain (L2) RollApp data without reliance on third-party RPC service providers such as Infura (Ethereum) and DA networks such as Celestia (Cosmos). INTERX streamlines the creation and maintenance of front-end and RollApp, eliminating the complexities associated with light clients and providing out-of-the-box support for sequencing, storage, fraud-proof generation, replication, proxy, and middleware layer load-balancing."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"MIRO"}),": MIRO is KIRA's front-end application, web wallet, and a design pattern for all KIRA RollApp to follow. It is designed to offer a Web2-like user experience. MIRO is a static and fully self-contained application, enabling users to seamlessly interact with the KIRA blockchain through INTERX from within the security of their browser, with no centralized parties (including certificate authorities) in the middle (or at the security core) of the communication channel between the user and blockchain/RollApp."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"RYOKAI"}),": RYOKAI supports network operations by automating on-chain and off-chain upgrades, scaling, RollApp deployment, simplifying consensus nodes' management tasks, and enhancing the network's efficiency and security. In other words, RYOKAI is an all-in-one DevOps tool that turns any network participant into an infrastructure expert without the need for years of experience."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"f158579a4606412e9fccf9f64d4a14d7",children:"Economic Model and Liquidity"}),"\n",(0,a.jsxs)(n.p,{children:["KIRA introduces the ",(0,a.jsx)(n.a,{href:"/learn/a6a660a6-3e5c-4a53-9ec3-14aa07f00351",children:"Initial Liquidity Offering"})," (ILO), a novel economic model ensuring that applications launched on the network meet user demand, and providing sufficient liquidity for their ownership tokens after launch. By aligning the incentives of users, developers, ",(0,a.jsx)(n.a,{href:"/learn/22c36797-10c8-40e4-9457-d8f1b6b4563b#feafa1b612854a9db40223bc3eeec3eb",children:"Executors"}),", and ",(0,a.jsx)(n.a,{href:"/learn/22c36797-10c8-40e4-9457-d8f1b6b4563b#28e654b37c964ea79c36135ff0986a20",children:"Fishermen"}),", the ILO model fosters the development and enjoyment of high-quality RollApps while enabling all stakeholders to share in these applications' success."]}),"\n",(0,a.jsx)(n.h3,{id:"a7c50e68381848c1a94eb42f4f597725",children:"Why KIRA ?"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Virtual Finality Gadget"})," - VFG enables next-gen blockchain-less and resource-heavy applications to exist without the the coordination overhead associated with creation of new networks for every single new use case such as AI, streaming, or gaming."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Infrastructure"})," - KIRA provides the decentralized infrastructure and essential hardware resources like CPU and GPU required to run applications natively on the network. Uniquely, developers can define and choose the specific resources needed for their applications. With decentralized middleware (INTERX) integrated, RollApps are self-contained and do not rely on external providers for RPC, execution, or data availability. This flexible and all-inclusive approach empowers developers to focus solely on building their application's core business logic."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Shared Security"})," - All RollApps inherit base-layer security. By supporting native LSDs, which enable any token to participate in restaking, KIRA can match the security of user deposits from external networks while preserving liquidity."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Hypermodularity"})," - KIRA adheres to modular design across its full stack, offering out-of-the-box support for components like sequencing, data availability, application hosting, middleware, proxying, caching, autoscaling, and infrastructure management. This allows hardware providers to focus solely on supplying highly available resources, while developers can prioritize the user experience without worrying about integrating disparate modules with questionable long-term support or managing infrastructure complexities."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(6905);const r={tabItem:"tabItem_Ymn6"};var i=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(7294),r=t(6905),i=t(2466),o=t(6550),s=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=f({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),g=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(5893);function y(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function I(e){const n=m(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...n}),(0,v.jsx)(w,{...e,...n})]})}function x(e){const n=(0,b.Z)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(7294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);