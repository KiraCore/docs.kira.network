"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3681],{5708:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(4848),n=t(8453);t(1470),t(9365);const r={title:"Introduction",sidebar_position:0,slug:"/"},s=void 0,o={id:"what-is-kira/introduction",title:"Introduction",description:"KIRA is a hypermodular network that supports execution of trustless, blockchain-less applications operating as L2 systems. It provides a programmable consensus framework, allowing each application's execution validity to be verified through customizable finality rules. While modular by design, KIRA consolidates the entire full-stack into one all-inclusive solution, avoiding the compounded complexity, latency and risks associated with integrating across separate external systems. This unified stack provides the infrastructure, scalable hardware resources, data availability, sequencing, and shared security required by this new generation of decentralized, resources-intensive, web2-like applications (such as gaming and AI). KIRA empowers its L2 applications to rival Web2 in user access scale, ease of building, deployment time, and operational costs, with independence from traditional blockchain infrastructures and Virtual Machines.",source:"@site/tabs/learn/what-is-kira/introduction.mdx",sourceDirName:"what-is-kira",slug:"/",permalink:"/learn/",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/&page-local=what-is-kira/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0,slug:"/"},sidebar:"defaultSidebar",next:{title:"Overview",permalink:"/learn/what-is-kira/backend---sekai/overview"}},l={},c=[{value:"Rollapps: Virtualized, Scalable, With Programmable Finality",id:"7b0c7e64cbc54f9c99a7f9c6cc57b4d2",level:2},{value:"Rollapp Liquidity Bootstrapping Mechanism",id:"f158579a4606412e9fccf9f64d4a14d7",level:2},{value:"Key Components of KIRA",id:"688908768d9540f7aeadc964ce849d56",level:2},{value:"Why KIRA ?",id:"a7c50e68381848c1a94eb42f4f597725",level:2}];function u(e){const a={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"KIRA is a hypermodular network that supports execution of trustless, blockchain-less applications operating as L2 systems. It provides a programmable consensus framework, allowing each application's execution validity to be verified through customizable finality rules. While modular by design, KIRA consolidates the entire full-stack into one all-inclusive solution, avoiding the compounded complexity, latency and risks associated with integrating across separate external systems. This unified stack provides the infrastructure, scalable hardware resources, data availability, sequencing, and shared security required by this new generation of decentralized, resources-intensive, web2-like applications (such as gaming and AI). KIRA empowers its L2 applications to rival Web2 in user access scale, ease of building, deployment time, and operational costs, with independence from traditional blockchain infrastructures and Virtual Machines."}),"\n",(0,i.jsx)(a.h2,{id:"7b0c7e64cbc54f9c99a7f9c6cc57b4d2",children:"Rollapps: Virtualized, Scalable, With Programmable Finality"}),"\n",(0,i.jsxs)(a.p,{children:["KIRA L2 applications, also referred to as RollApps, run virtualized inside dedicated Docker containers. They are managed by an unbounded set of validators (also referred to as Consensus nodes), who individually choose which RollApps to operate while collectively securing and governing the entire KIRA network. In KIRA, RollApps benefit from the ",(0,i.jsx)(a.a,{href:"/learn/what-is-kira/layer-2/virtual-finality-gadget",children:"Virtual Finality Gadget"})," which allows developers to use any programming language as well as implement bespoke finality rules, including optimistic and pessimistic verification (e.g. ZK proofs), non-deterministic verification or a tailored blend of verification logics, each specifically designed for a particular subsystem. This provides a level of flexibility unheard of in traditional systems as applications can adjust their verification strategies in response to evolving needs and innovations, without the risk of dedicating substantial resources or time to a single method. This adaptability allows KIRA to maximize the potential and full expression of general-purpose rollups."]}),"\n",(0,i.jsx)(a.h2,{id:"f158579a4606412e9fccf9f64d4a14d7",children:"Rollapp Liquidity Bootstrapping Mechanism"}),"\n",(0,i.jsxs)(a.p,{children:["KIRA introduces the ",(0,i.jsx)(a.a,{href:"/learn/kira%E2%80%99s-economics/initial-liquidity-offering",children:"Initial Liquidity Offering"})," (ILO), a novel economic model ensuring that applications launched on the network meet user demand, and provide sufficient liquidity for their ownership tokens after launch. By aligning the incentives of users, developers, ",(0,i.jsx)(a.a,{href:"/learn/glossary#feafa1b612854a9db40223bc3eeec3eb",children:"Executors"}),", and ",(0,i.jsx)(a.a,{href:"/learn/glossary#28e654b37c964ea79c36135ff0986a20",children:"Fishermen"}),", the ILO model promotes the development and enjoyment of high-quality RollApps while enabling all stakeholders to share in these applications' success."]}),"\n",(0,i.jsx)(a.h2,{id:"688908768d9540f7aeadc964ce849d56",children:"Key Components of KIRA"}),"\n",(0,i.jsx)(a.p,{children:"KIRA Network combines several modular components to provide a full-stack experience:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/learn/what-is-kira/backend---sekai/overview",children:(0,i.jsx)(a.strong,{children:"SEKAI"})}),": SEKAI is KIRA\u2019s core blockchain application responsible for all on-chain logic, including the settling of users' and RollApp's account balances, preserving state roots\u2019 integrity, and enabling cross-RollApp communication. It plays a crucial role in orchestrating the necessary infrastructure needed to run the RollApps, liquid capital essential for boosting economic activity, and providing shared security for all applications on KIRA."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/learn/what-is-kira/middleware---interx/overview",children:(0,i.jsx)(a.strong,{children:"INTERX"})}),": INTERX is KIRA\u2019s Content Availability Layer. It ensures rapid, scalable queries and access to on-chain (SEKAI) and off-chain (L2) RollApp data without reliance on third-party RPC service providers such as Infura (Ethereum) and DA networks such as Celestia (Cosmos). INTERX streamlines the creation and maintenance of front-end and RollApp, eliminating the complexities associated with light clients and providing out-of-the-box support for sequencing, storage, fraud-proof generation, replication, proxy, and middleware layer load-balancing."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/learn/what-is-kira/frontend---miro",children:(0,i.jsx)(a.strong,{children:"MIRO"})}),": MIRO is KIRA's front-end application, web wallet, and a design pattern for all KIRA RollApp to follow. It is designed to offer a Web2-like user experience. MIRO is a static and fully self-contained application, enabling users to seamlessly interact with the KIRA blockchain through INTERX from within the security of their browser, with no centralized parties (including certificate authorities) in the middle (or at the security core) of the communication channel between the user and blockchain/RollApp."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.a,{href:"/learn/what-is-kira/orchestrator---ryokai",children:(0,i.jsx)(a.strong,{children:"RYOKAI"})}),": RYOKAI supports network operations by automating on-chain and off-chain upgrades, scaling, RollApp deployment, simplifying consensus nodes' management tasks, and enhancing the network's efficiency and security. In other words, RYOKAI is an all-in-one DevOps tool that turns any network participant into an infrastructure expert without the need for years of experience."]}),"\n"]}),"\n",(0,i.jsx)(a.h2,{id:"a7c50e68381848c1a94eb42f4f597725",children:"Why KIRA ?"}),"\n",(0,i.jsxs)(a.ol,{children:["\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Virtual Finality Gadget"})," (VFG) - ",(0,i.jsx)(a.a,{href:"/learn/what-is-kira/layer-2/virtual-finality-gadget",children:"VFG"})," enables next-gen blockchain-less and resource-heavy applications to exist without the the coordination overhead associated with creation of new networks for every single new use case such as AI, streaming, or gaming."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Infrastructure"})," - KIRA provides the decentralized infrastructure and essential hardware resources like CPU and GPU required to run applications natively on the network. Uniquely, developers can define and choose the specific resources needed for their applications. With decentralized middleware (INTERX) integrated, RollApps are self-contained and do not rely on external providers for RPC, execution, or data availability. This flexible and all-inclusive approach empowers developers to focus solely on building their application's core business logic."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Shared Security"})," - All RollApps inherit base-layer security. By supporting native LSDs, which enable any token to participate in restaking, KIRA can match the security of user deposits from external networks while preserving liquidity."]}),"\n",(0,i.jsxs)(a.li,{children:[(0,i.jsx)(a.strong,{children:"Hypermodularity"})," - KIRA adheres to modular design across its full stack, offering out-of-the-box support for components like sequencing, data availability, application hosting, middleware, proxying, caching, autoscaling, and infrastructure management. This allows hardware providers to focus solely on supplying highly available resources, while developers can prioritize the user experience without worrying about integrating disparate modules with questionable long-term support or managing infrastructure complexities."]}),"\n"]})]})}function d(e={}){const{wrapper:a}={...(0,n.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},9365:(e,a,t)=>{t.d(a,{A:()=>s});t(6540);var i=t(8215);const n={tabItem:"tabItem_Ymn6"};var r=t(4848);function s(e){let{children:a,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,s),hidden:t,children:a})}},1470:(e,a,t)=>{t.d(a,{A:()=>k});var i=t(6540),n=t(8215),r=t(3104),s=t(6347),o=t(205),l=t(7485),c=t(1682),u=t(679);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:a,children:t}=e;return(0,i.useMemo)((()=>{const e=a??function(e){return d(e).map((e=>{let{props:{value:a,label:t,attributes:i,default:n}}=e;return{value:a,label:t,attributes:i,default:n}}))}(t);return function(e){const a=(0,c.X)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function p(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function f(e){let{queryString:a=!1,groupId:t}=e;const n=(0,s.W6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function m(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=h(e),[s,l]=(0,i.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:a,tabValues:r}))),[c,d]=f({queryString:t,groupId:n}),[m,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,u.Dv)(t);return[n,(0,i.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),b=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function y(e){let{className:a,block:t,selectedValue:i,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const a=e.currentTarget,t=l.indexOf(a),n=o[t].value;n!==i&&(c(a),s(n))},d=e=>{let a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;a=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;a=l[t]??l[l.length-1];break}}a?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},a),children:o.map((e=>{let{value:a,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,n.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":i===a}),children:t??a},a)}))})}function w(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,a)=>(0,i.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function x(e){const a=m(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",b.tabList),children:[(0,v.jsx)(y,{...a,...e}),(0,v.jsx)(w,{...a,...e})]})}function k(e){const a=(0,g.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(a))}},8453:(e,a,t)=>{t.d(a,{R:()=>s,x:()=>o});var i=t(6540);const n={},r=i.createContext(n);function s(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);