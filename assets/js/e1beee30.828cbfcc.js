"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3681],{5708:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(4848),a=t(8453);t(1470),t(9365);const r={title:"Introduction",sidebar_position:0,slug:"/"},s=void 0,o={id:"what-is-kira/introduction",title:"Introduction",description:"KIRA is a distributed, verifiable cloud computing network powering trustless, blockchain-less 'layer 2' applications. At the core of KIRA's lies a network of Consensus-Infrastructure provider nodes, each capable of independently scaling its hardware resources to meet the evolving demands of the ecosystem. KIRA introduces an innovative system, known as Virtual Finality Gadget (VFG), which allows flexible validation of application execution by leveraging a network of independent, permissionless verifiers known as Fishermen. This approach goes beyond traditional \u2018layer 2\u2019 systems limitations by allowing developers and users to implement customized finality rules that cater to both their application requirements and/or their individual needs.",source:"@site/tabs/learn/what-is-kira/introduction.mdx",sourceDirName:"what-is-kira",slug:"/",permalink:"/learn/",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/&page-local=what-is-kira/introduction.mdx",tags:[],version:"current",lastUpdatedAt:1728016962e3,sidebarPosition:0,frontMatter:{title:"Introduction",sidebar_position:0,slug:"/"},sidebar:"defaultSidebar",next:{title:"Overview",permalink:"/learn/what-is-kira/backend---sekai/overview"}},l={},c=[{value:"Rollapps: Virtualized, Scalable, With Programmable Finality",id:"7b0c7e64cbc54f9c99a7f9c6cc57b4d2",level:2},{value:"Efficient Deployment and Liquidity for Rollapps",id:"f6c1de570cae43df93997e561b846ec3",level:2},{value:"Hypermodularity: Kira&#39;s All-in-one Architecture",id:"688908768d9540f7aeadc964ce849d56",level:2},{value:"Why KIRA ?",id:"a7c50e68381848c1a94eb42f4f597725",level:2}];function u(e){const i={a:"a",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"KIRA is a distributed, verifiable cloud computing network powering trustless, blockchain-less 'layer 2' applications. At the core of KIRA's lies a network of Consensus-Infrastructure provider nodes, each capable of independently scaling its hardware resources to meet the evolving demands of the ecosystem. KIRA introduces an innovative system, known as Virtual Finality Gadget (VFG), which allows flexible validation of application execution by leveraging a network of independent, permissionless verifiers known as Fishermen. This approach goes beyond traditional \u2018layer 2\u2019 systems limitations by allowing developers and users to implement customized finality rules that cater to both their application requirements and/or their individual needs."}),"\n",(0,n.jsx)(i.p,{children:"Though modular in design, KIRA consolidates its entire stack into a single, all-inclusive solution. This integrated approach\u2014which we often refer to as \u2018hypermodularity\u2019\u2014aims to avoid the compounded complexity, latency, and risks of integrating applications across separate external systems. KIRA's unified stack provides the infrastructure, scalable hardware resources, data availability, sequencing, and shared security needed by new generations of decentralized, resource-intensive, Web2-like applications (such as gaming and AI). With KIRA, these applications can rival Web2 in user access scale, ease of building, deployment time, and operational costs, while remaining independent from traditional blockchain infrastructures and virtual machines."}),"\n",(0,n.jsx)(i.h2,{id:"7b0c7e64cbc54f9c99a7f9c6cc57b4d2",children:"Rollapps: Virtualized, Scalable, With Programmable Finality"}),"\n",(0,n.jsx)(i.p,{children:"KIRA \u2018layer 2\u2019 applications, also referred to as RollApps, run virtualized inside dedicated Docker containers. They are executed by an unbounded set of validators (we will refer to as Consensus nodes) who validate SEKAI (KIRA's blockchain application) and govern the entire KIRA network. These nodes have the flexibility to choose which RollApp(s) they agree to operate and can independently scale their hardware resources to meet its (their) requirements. Individuals with minimal resources or technical expertise can participate from home, as they have the flexibility to choose which RollApps to execute or simply focus on validating SEKAI. This flexible approach enables KIRA to provide tailored cloud-like services for each RollApp while maintaining an accessible entry point for consensus node operators\u2014thus maximizing network\u2019s decentralization."}),"\n",(0,n.jsxs)(i.p,{children:["In KIRA, RollApps benefit from the ",(0,n.jsx)(i.a,{href:"/learn/what-is-kira/layer-2/virtual-finality-gadget",children:"Virtual Finality Gadget"})," which allows developers to use any programming language as well as implement bespoke finality rules, including optimistic and pessimistic verification (e.g. ZK proofs), non-deterministic verification or a tailored blend of verification logics, each specifically designed for a particular subsystem. This provides a level of flexibility unheard of in traditional systems as applications can adjust their verification strategies in response to evolving needs and innovations, without the risk of dedicating substantial resources or time to a single method. This adaptability and degree of freedom allows developers to maximize the potential and full expression of general-purpose rollups."]}),"\n",(0,n.jsx)(i.p,{children:"VFG significantly enhances applications security by naturally incentivizing end-users to become Fishermen for their favorite RollApps with minimal hardware requirements. They can define simple rules\u2014such as verifying their own balance\u2014to protect themselves against hacks without needing to re-execute entire application states for validation. The private nature of these finality rules makes it virtually impossible for attackers to predict the success of their exploits. This contrasts sharply with traditional systems that rely on finality through re-execution of publicly known and deterministic state transition functions."}),"\n",(0,n.jsx)(i.h2,{id:"f6c1de570cae43df93997e561b846ec3",children:"Efficient Deployment and Liquidity for Rollapps"}),"\n",(0,n.jsx)(i.p,{children:"KIRA's deployment process is remarkably simple. Developers simply package their application logic into a Docker container and submit it to KIRA's app registry. KIRA's infrastructure then manages the deployment, resource allocation, and consensus rules, freeing developers to focus on their application logic rather than grappling with complex blockchain integration. The only requirement is that the application must be verifiable by VFG. This means the application's state transitions can be validated through a combination of diverse, private verification rules set by Fishermen. Importantly, these rules need not enforce a single, deterministic outcome. Rather, they can accommodate a range of acceptable states. This approach enables even non-deterministic applications to run on KIRA, as long as their outputs fall within the collective boundaries defined by the Fishermen's rules. This flexibility in verification, a unique feature of VFG, supports a diverse range of applications while maintaining security through distributed, customizable validation. Examples include EVM rollups/sidechains, GPT-style chats, IRC-like chat apps, Nostr servers, Minecraft servers, and snake.io servers and so on."}),"\n",(0,n.jsxs)(i.p,{children:["Complementing this streamlined deployment process, KIRA introduces the ",(0,n.jsx)(i.a,{href:"/learn/kira%E2%80%99s-economics/initial-liquidity-offering-for-rollapps",children:"Initial Liquidity Offering"})," (ILO), a novel economic model ensuring that applications launched on the network meet user demand, and provide sufficient liquidity for their tokens upon launch. By aligning the incentives of users, developers, Executors, and Fishermen, the ILO model promotes the development and enjoyment of high-quality RollApps while enabling all stakeholders to share in these applications' success."]}),"\n",(0,n.jsx)(i.h2,{id:"688908768d9540f7aeadc964ce849d56",children:"Hypermodularity: Kira's All-in-one Architecture"}),"\n",(0,n.jsx)(i.p,{children:"Unlike traditional modular architectures where different parts of a broad system operate independently with distinct security assumptions, KIRA's hypermodular approach integrates various functionalities\u2014such as data availability, dAPI, shared security, and interoperability\u2014into one cohesive stack. This unified architecture enables efficient resource utilization, particularly in terms of bandwidth management, making it possible to run resource-intensive applications in decentralized environments that were previously impractical due to network constraints. Another key advantage of hypermodularity is its improvement of the developer experience. By consolidating components, it removes the need to manage and coordinate multiple disparate systems. In essence, hypermodularity elevates modularity by unifying all crucial stack components under a single security model umbrella and creating a highly optimized system where general-purpose rollups can thrive."}),"\n",(0,n.jsx)(i.p,{children:"The KIRA stack consists of the following components:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/learn/what-is-kira/backend---sekai/overview",children:(0,n.jsx)(i.strong,{children:"SEKAI"})}),": SEKAI is KIRA\u2019s core blockchain application responsible for all on-chain logic, including the settling of users' and RollApp's account balances, preserving state roots\u2019 integrity, and enabling cross-RollApp communication. It orchestrates the infrastructure needed to run RollApps, provides liquid capital to boost economic activity, and ensures shared security for all applications on KIRA."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/learn/what-is-kira/middleware---interx/overview",children:(0,n.jsx)(i.strong,{children:"INTERX"})}),": INTERX is KIRA\u2019s Content Availability Layer. It ensures rapid, scalable queries and access to on-chain (SEKAI) and off-chain (RollApps) data without reliance on third-party RPC service providers such as Infura (Ethereum) and DA networks such as Celestia (Cosmos). INTERX streamlines the creation and maintenance of front-end and RollApp, eliminating the complexities associated with light clients and providing out-of-the-box support for sequencing, storage, fraud-proof generation, replication, proxy, and middleware layer load-balancing."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/learn/what-is-kira/orchestrator---ryokai",children:(0,n.jsx)(i.strong,{children:"RYOKAI"})}),": RYOKAI is KIRA's all-in-one DevOps solution that streamlines network operations for Consensus nodes. It automates on-chain and off-chain upgrades, facilitates scaling, and simplifies RollApp deployment and other management tasks. By simplifying these operations, RYOKAI significantly lowers the technical barrier to entry and turns any user into an infrastructure expert without years of experience. Hence, even those with limited technical knowledge can contribute meaningfully to KIRA's security and growth. This accessibility, combined with the network's modest hardware requirements, aims to maximize KIRA's decentralization potential."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/learn/what-is-kira/frontend---miro",children:(0,n.jsx)(i.strong,{children:"MIRO"})}),": MIRO is KIRA's front-end application, web wallet, and a design pattern for all KIRA RollApp to follow. It provides a user-friendly experience similar to Web2 applications while maintaining decentralized security. MIRO is a static and fully self-contained application, enabling users to seamlessly interact with the KIRA blockchain through INTERX from within the security of their browser, with no centralized parties (including certificate authorities) in the middle (or at the security core) of the communication channel between the user and blockchain/RollApp."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"a7c50e68381848c1a94eb42f4f597725",children:"Why KIRA ?"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Virtual Finality Gadget"})," - VFG enables next-gen blockchain-less and resource-heavy applications to exist without the coordination overhead associated with creation of new networks for every single new use case such as AI, streaming, or gaming."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Infrastructure"})," - KIRA provides the decentralized infrastructure and essential hardware resources like CPU and GPU required to run applications natively on the network. Uniquely, developers can define and choose the specific resources needed for their applications. With decentralized middleware (INTERX) integrated, RollApps are self-contained and do not rely on external providers for RPC, execution, or data availability. This flexible and all-inclusive approach empowers developers to focus solely on building their application's core business logic."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Shared Security"})," - All RollApps inherit base-layer security since only Consensus nodes can become Executors to run the RollApp\u2019s code. By supporting native LSDs, which enable any token to participate in restaking, KIRA can match the security of user deposits from external networks while preserving liquidity."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.strong,{children:"Hypermodularity"})," - KIRA adheres to modular design across its full stack, offering out-of-the-box support for components like sequencing, data availability, application hosting, middleware, proxying, caching, autoscaling, and infrastructure management. This allows hardware providers to focus solely on supplying highly available resources, while developers can prioritize the user experience without worrying about integrating disparate modules with questionable long-term support or managing infrastructure complexities."]}),"\n"]})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},9365:(e,i,t)=>{t.d(i,{A:()=>s});t(6540);var n=t(8215);const a={tabItem:"tabItem_Ymn6"};var r=t(4848);function s(e){let{children:i,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,s),hidden:t,children:i})}},1470:(e,i,t)=>{t.d(i,{A:()=>k});var n=t(6540),a=t(8215),r=t(3104),s=t(6347),o=t(205),l=t(7485),c=t(1682),u=t(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:i}=e;return!!i&&"object"==typeof i&&"value"in i}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:i,children:t}=e;return(0,n.useMemo)((()=>{const e=i??function(e){return d(e).map((e=>{let{props:{value:i,label:t,attributes:n,default:a}}=e;return{value:i,label:t,attributes:n,default:a}}))}(t);return function(e){const i=(0,c.X)(e,((e,i)=>e.value===i.value));if(i.length>0)throw new Error(`Docusaurus error: Duplicate values "${i.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[i,t])}function p(e){let{value:i,tabValues:t}=e;return t.some((e=>e.value===i))}function f(e){let{queryString:i=!1,groupId:t}=e;const a=(0,s.W6)(),r=function(e){let{queryString:i=!1,groupId:t}=e;if("string"==typeof i)return i;if(!1===i)return null;if(!0===i&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:i,groupId:t});return[(0,l.aZ)(r),(0,n.useCallback)((e=>{if(!r)return;const i=new URLSearchParams(a.location.search);i.set(r,e),a.replace({...a.location,search:i.toString()})}),[r,a])]}function m(e){const{defaultValue:i,queryString:t=!1,groupId:a}=e,r=h(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:i,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(i){if(!p({value:i,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${i}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return i}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:i,tabValues:r}))),[c,d]=f({queryString:t,groupId:a}),[m,g]=function(e){let{groupId:i}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(i),[a,r]=(0,u.Dv)(t);return[a,(0,n.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),y=(()=>{const e=c??m;return p({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{y&&l(y)}),[y]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,r]),tabValues:r}}var g=t(2303);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(4848);function v(e){let{className:i,block:t,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const i=e.currentTarget,t=l.indexOf(i),a=o[t].value;a!==n&&(c(i),s(a))},d=e=>{let i=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;i=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;i=l[t]??l[l.length-1];break}}i?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},i),children:o.map((e=>{let{value:i,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===i?0:-1,"aria-selected":n===i,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,a.A)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":n===i}),children:t??i},i)}))})}function w(e){let{lazy:i,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(i){const e=r.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,i)=>(0,n.cloneElement)(e,{key:i,hidden:e.props.value!==a})))})}function x(e){const i=m(e);return(0,b.jsxs)("div",{className:(0,a.A)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...i,...e}),(0,b.jsx)(w,{...i,...e})]})}function k(e){const i=(0,g.A)();return(0,b.jsx)(x,{...e,children:d(e.children)},String(i))}},8453:(e,i,t)=>{t.d(i,{R:()=>s,x:()=>o});var n=t(6540);const a={},r=n.createContext(a);function s(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);