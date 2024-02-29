"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3339],{2584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(5893),s=n(1151);n(4866),n(5162);const a={title:"Glossary",sidebar_position:2,slug:"/22c36797-10c8-40e4-9457-d8f1b6b4563b"},i=void 0,r={id:"Glossary",title:"Glossary",description:"- RollApp: Decentralized application",source:"@site/tabs/learn/Glossary.mdx",sourceDirName:".",slug:"/22c36797-10c8-40e4-9457-d8f1b6b4563b",permalink:"/22c36797-10c8-40e4-9457-d8f1b6b4563b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Glossary",sidebar_position:2,slug:"/22c36797-10c8-40e4-9457-d8f1b6b4563b"},sidebar:"defaultSidebar",previous:{title:"Unified Liquid Staking",permalink:"/492e443f-5703-4d95-8508-a101405efde3"}},l={},c=[];function h(e){const t={li:"li",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"RollApp:"})," Decentralized application"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"SEKAI:"})," SEKAI is KIRA Network's base layer (L1) blockchain application sometimes referred to as \u201cbackend\u201d. The role of SEKAI is to be a source of shared security as well as a governance and settlement layer for all KIRA RollApps (L2). KIRA Blockchain preserves information such as user account balances, governance permissions, and RollApp state roots as well as other essential data for coordinating both L1 and L2 operations."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"MBPoS (Multi-Bonded Proof of Stake)"}),": MBPoS is a staking mechanism in SEKAI aimed at enforcing the network's Sybil resistance. It differentiates from typical Proof-of-Stake models by permitting the use of a diverse range of digital assets as staking collateral. This includes but is not limited to, native assets of the KIRA network, non-native assets originating from other blockchain networks such as BTC and ETH, NFTs, RWAs, LP tokens, and stablecoins, all subject to approval via governance proposals. The reason behind multi-staking implementation in KIRA is to increase the security of the network in the scenario where tokens originating from foreign networks add incentives for consensus participants to misbehave. Additionally, MBPoS natively issues liquid staking derivatives (LSD) for all staked assets boosting economic activity and access to assets for all KIRA L2 applications."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"INTERX:"})," INTERX, which stands for Interchain NginX, is a decentralized middleware making it simple and intuitive to interact with KIRA network. INTERX has a supporting role for both frontends as dAPI gateway as well as for the L2 applications abstracting the complexity of blockchains and serving as a Content Availability Layer and P2P node discovery tool. In the context of RollApps INTERX is used as both DA and Sequencer so that developers can focus fully on business logic and not infrastructure. One of the important features of INTERX is acting as a light client replacement and removes the dependency on centralized SSL certificate authorities through a combination of digital signatures and fraud proofs."]}),"\n",(0,o.jsx)(t.li,{children:"RYOKAI: The next generation of the KIRA Manager (KM 2.0) supporting the orchestration of the KIRA L2 applications."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"VFG (Virtual Finality Gadget)"}),": The Virtual Finality Gadget (VFG) is a programmable finality enabling decentralized applications to share the security of the base layer and define their own consensus rules. The VFG is a protocol that enables KIRA to support any type of RollApp (Pessimistic, Optimistic, General Purpose, Recursive Blockchain). At the core of VFG lies the idea of splitting the application into dedicated execution and verification parts. Depending on which network participants run which part (execution or verification logic) any modern consensus type can be virtualized."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Monolithic Blockchain:"})," In a monolithic blockchain, consensus nodes handle all network functions. These include processing transactions for all RollApps, verifying transaction correctness, managing data storage, and achieving consensus among nodes. This model integrates all core tasks into a single blockchain system."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Modular Blockchain:"})," A modular blockchain is a system where various functions of the blockchain stack are separated into independent networks and then interconnected. This approach is similar to the concept of microservices in traditional web architectures, where different components like notifications, storage, monitoring, and payment are split into distinct services and integrated via APIs. In a modular blockchain, components such as the execution layer (i.e. sequencers), data availability layer, and settlement layer are distinct yet linked through specific protocols."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Hypermodularity:"})," Hypermodularity refers to a system where all essential modular components are readily accessible to the nodes that require them, without the need to retrieve them from complex, dependent networks. This architecture aims to reduce unnecessary overhead, complexity, and dependency risk. An example here might be network layer awareness of the node location allowing DA microservice to be positioned right next to the Sequencer on the physical layer or other location relevant to a particular application and user-boosting efficiency."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Rollup/Rolldown:"}),' These terms describe different methods of finalizing the state transitions of Layer 2, particularly user balances or overall database state. In the case of "Rollups," state transitions that are attempted to be settled on the base layer are assumed to be by default correct unless evidence in the form of fraud proof is provided. In the case of "Rolldowns," state transitions that are attempted to be settled require a threshold of verifiers to accept them - for that reason, Rolldowns are sometimes referred to as "Pessimistic Rollups." In general, Rollup might be also referred to as an L2 or an independent network that uses a "pessimistic" or "optimistic" settlement with a larger base layer network (e.g., Ethereum) that it actively observes to gain access to tokens or otherwise communicate with other networks or applications. We might refer to such networks as sidechains, zones, and/or parachains. If such a network serves a very specific purpose, it might be also referred to as an "AppChain," or in other words, an Application Specific Blockchain. As of 2024, AppChains are an extinct concept, but you might come across them in various crypto-related literature and topics. In the case of KIRA, thanks to VFG, we can classify all types of blockchain or blockchain-less applications requiring trustless compute verification as "General Purpose Rollups" and do not have to reason about their inner-workings.']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Optimistic Layer 2:"})," In the optimistic approach, the computation of the new state of L2 is assumed to be correct by the Executor, until proven incorrect. The finality or computational verification of the rollup's new state is rerun only by one or more nodes that choose to do so. If no node disputes the state within a certain time frame (typically 7 days), it is then considered finalized."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Pessimistic Layer 2:"})," In this approach, the computation of the new state of L2 is assumed to be incorrect by the Executor, until proven correct. The finality or computational verification of the rollup's new state is deterministically re-executed by one or more other nodes. An example of a pessimistic rollup is the use of Zero-Knowledge proofs, where the Executor generates a proof, and then another node verifies this proof. The proof verification logic is deterministic and uniform across all verifiers."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"General Layer 2:"})," In the general approach, the computation of the new state of L2 is assumed to be incorrect by the Executor, until proven correct. Finality is still contingent upon at least one node's re-execution of the state transition, but the verification can employ non-deterministic methods. This approach accommodates a broader spectrum of application frameworks, e.g., applications that operate at CPU clock speeds, also known as blockchain-less applications."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Blockchain-less Application:"})," A blockchain-less application is a type of RollApp that processes user transactions in real-time, without the traditional blockchain mempool. This absence of a visible mempool eliminates the possibility of malicious participants manipulating transaction order, thereby reducing common issues such as front-running and Maximum Extractable Value exploitation. The responsibility for maintaining the integrity of transaction processing and execution order lies with the RollApp Leader, who, in the event of any provable misconduct, can be subject to eviction."]}),"\n",(0,o.jsx)(t.li,{children:"Consensus node (validator): A Consensus node is an active network participant responsible for processing transactions, adding new blocks to SEKAI, and storing SEKAI state by running a \u2018validator\u2019 node. Each node is responsible for creating and managing its unique staking pool where delegators can lock their funds to provide security to the network. Additionally, Consensus nodes may opt in to act as Executors for RollApps."}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Delegator"}),": A Delegator is any network participant who engages in consensus by locking assets as collateral to one or multiple staking pools without necessarily running a \u2018validator\u2019 node. Note that KIRA doesn\u2019t require block proposers to have a minimum self-bonded stake to pledge their honesty. It is the responsibility of delegators to exercise due diligence and diversification when choosing a block proposer staking pool, as the risk of staked assets is directly exposed to the block proposer\u2019s actions. However, contrary to other PoS blockchains, double-signing is the only behavior that results in slashing (downtime is not penalized)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Session:"})," A RollApp session refers to a designated period during which a RollApp is executed by a single Executor, known as the RollApp Leader. This session encompasses the operational phase of the RollApp: the execution of its code and the subsequent processing of any changes to SEKAI state and/or the RollApp's internal database. The session concludes with the submission of these changes for verification by Fishermen, and consensus by other Executors, in cases where more than one Executor is involved. For changes to be accepted, they must be approved by a supermajority of Executors and receive no rejections from Fishermen."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Verifier:"})," A Verifier is a participant responsible for verifying the correctness of submissions made by the RollApp Leader following the execution phase of a RollApp session. Verifiers are either Fishermen or Executors who are not currently serving as the RollApp Leader."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Executor:"})," An Executor is a consensus node responsible for the validation and approval of the outcomes of a RollApp session. They are responsible for storing the RollApp's internal state and reviewing and voting on the results submitted by the RollApp Leader, including changes to SEKAI state and updates to the RollApp's internal state. Executors who are not serving as the RollApp Leader automatically assume the role of a Verifier. Executors have the freedom to select which RollApp(s) they wish to run, based on system requirements, and/or they can be appointed by the RollApp's controllers."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"RollApp Leader:"})," A RollApp Leader, also referred to as a Sequencer, is a single Executor responsible for executing a RollApp session. They are tasked with computing the outcomes of the RollApp, such as changes in SEKAI state and/or RollApp internal database updates. The RollApp Leader submits these results for verification by Fishermen, and consensus by other Executors in cases where more than one Executor is involved."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Controller(s):"})," This term refer to the person or team responsible for developing and maintaining a RollApp. They are represented by a set of KIRA addresses and have the ability to update the controller set and the RollApp's binaries through new releases. Note that KIRA implements account abstraction, so a RollApp can serve as its own Controller. As the managers of a RollApp, Controllers have the authority to approve or deny Consensus nodes participation as Executors or Verifiers. This gives them control over who can validate and execute transactions for their particular application. However, they do not have the ability to approve or deny Fishermen, as this verification role is permissionless."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Fishermen:"})," As a subset of RollApp Verifiers, their sole task is to oversee and validate state transitions of a RollApp. Like the Executors, they are responsible for storing the RollApp's internal state. However, they are distinct from Executors in that they are not part of SEKAI Consensus node set and therefore cannot become RollApp leaders. Their primary function is to ensure the correctness of state transitions using any chosen proprietary logic, with the authority to halt an application if they detect incorrect transitions."]}),"\n"]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(6905);const s={tabItem:"tabItem_Ymn6"};var a=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.Z)(s.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(7294),s=n(6905),a=n(2466),i=n(6550),r=n(469),l=n(1980),c=n(7392),h=n(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:s}}=e;return{value:t,label:n,attributes:o,default:s}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=d(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:n,groupId:s}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,h.Nk)(n);return[s,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),g=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,r.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(5893);function v(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),h=e=>{const t=e.currentTarget,n=l.indexOf(t),s=r[n].value;s!==o&&(c(t),i(s))},u=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:h,...a,className:(0,s.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=m(e);return(0,y.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,y.jsx)(v,{...e,...t}),(0,y.jsx)(x,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,y.jsx)(w,{...e,children:u(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>i});var o=n(7294);const s={},a=o.createContext(s);function i(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);