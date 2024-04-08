"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3546],{3709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(5893),i=n(1151);n(4866),n(5162);const s={title:"Overview",sidebar_position:0,slug:"/9a5aaea6-1b50-41fe-9c54-cd035a26d0a5"},o=void 0,r={id:"what-is-kira/layer-2/overview",title:"Overview",description:"KIRA\u2019s base layer (SEKAI) handles governance, token transfers, multi-staking, and all other system security-related on-chain logic. At the same time, SEKAI assists in the execution of decentralized applications taking place on their dedicated off-chain subnets by enabling their orchestration, communication, and settlement. This separation enables parallel scaling of execution, storage, and networking capabilities of each application. KIRA applications, also referred to as \u2018RollApps\u2019, consist of an execution container defining application logic, and a verification container defining how changes in the application state can be verified.",source:"@site/tabs/Learn/what-is-kira/layer-2/overview.mdx",sourceDirName:"what-is-kira/layer-2",slug:"/9a5aaea6-1b50-41fe-9c54-cd035a26d0a5",permalink:"/learn/9a5aaea6-1b50-41fe-9c54-cd035a26d0a5",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/9a5aaea6-1b50-41fe-9c54-cd035a26d0a5&page-local=what-is-kira/layer-2/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"/9a5aaea6-1b50-41fe-9c54-cd035a26d0a5"},sidebar:"defaultSidebar",previous:{title:"Orchestrator - RYOKAI",permalink:"/learn/2ac3bfb7-478c-4207-a290-051d9fa6124f"},next:{title:"Virtual Finality Gadget",permalink:"/learn/bba461ae-7c67-4b66-8f1b-c51c887f2671"}},l={},c=[{value:"Application Submission",id:"844d001a2633403cab43689ba538e666",level:2},{value:"Permissioned Execution, Permissionless Verification",id:"5e7d6296b59b4a568b58b85c47bd7708",level:2},{value:"Sessions",id:"005cf0bade9a46dab57cb779f5bf84b3",level:2}];function u(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"KIRA\u2019s base layer (SEKAI) handles governance, token transfers, multi-staking, and all other system security-related on-chain logic. At the same time, SEKAI assists in the execution of decentralized applications taking place on their dedicated off-chain subnets by enabling their orchestration, communication, and settlement. This separation enables parallel scaling of execution, storage, and networking capabilities of each application. KIRA applications, also referred to as \u2018RollApps\u2019, consist of an execution container defining application logic, and a verification container defining how changes in the application state can be verified."}),"\n",(0,a.jsx)(t.p,{children:"KIRA by default pessimistically assumes incorrectness of all RollApps computations. For a RollApp's state to be finalized, its execution must be verified as correct through a consensus of Verifier nodes, each following its own programmable verification rules. This is in contrast to optimistic rollup systems which by default assume the correctness of all computations unless fraud proofs are presented which unnecessarily prolong the settlement process even if all network participants agree that the RollApp state transitions are correct."}),"\n",(0,a.jsx)(t.h2,{id:"844d001a2633403cab43689ba538e666",children:"Application Submission"}),"\n",(0,a.jsx)(t.p,{children:"Before a RollApp can be executed by the KIRA, its code along with a bond in the form of KEX tokens and metadata describing necessary resources and infrastructure configuration must be published on-chain. This allows Consensus nodes interested in running the app to evaluate if they have sufficient hardware resources and prevent spam. The RollApp submission process is activated by Controllers similar to the Ethereum smart contract deployer, where a transaction with all necessary data is sent on-chain. In KIRA we call the RollApp deployer a \u2018Controller\u2019. There can be one or many Controllers, such as individual KIRA accounts including users designated by governance curated \u2018roles\u2019 such as \u2018validators\u2019 (Consensus nodes) or any other network-related sub-groups. Since KIRA utilizes a concept known from Ethereum as account abstractions, RollApps can own themselves or each other, allowing the \u2018control\u2019 to be delegated into the programmatic constraints of the RollApp\u2019s code itself."}),"\n",(0,a.jsx)(t.p,{children:"When instantiating a new RollApp, a minimum bond in KEX tokens is required, ensuring developers' commitment. A minimum bond must also be reached before the deployment request expires for the RollApp to be launched. The minimum bond can be crowdsourced across collaborators. If it is not reached before the end of the proposal period, the RollApp is rejected and funds are returned. There is also a maximum bond that caps total deposits. Once approved through governance, RollApp tokens representing ownership are minted and paired with the bonded KEX in an AMM pool."}),"\n",(0,a.jsx)(t.p,{children:"This permissionless, crowdsourced process is similar to Polkadot parachain auctions. However, the bonded KEX crowdsourced through the proposal remains liquid: Upon approval, RollApp tokens representing ownership are minted and paired with the bonded KEX in a Uniswap v2-like pool, and the LP tokens are distributed to all investors who contributed to crowdsource. For the RollApp to remain active perpetually, the LP providers must persist a minimum required amount of KEX bonded to the AMM dedicated to the specific RollApp."}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["More information about the crowdsourcing mechanism is described in ",(0,a.jsx)(t.a,{href:"/learn/a6a660a6-3e5c-4a53-9ec3-14aa07f00351",children:"Initial Liquidity Offering "})," page."]})}),"\n",(0,a.jsx)(t.h2,{id:"5e7d6296b59b4a568b58b85c47bd7708",children:"Permissioned Execution, Permissionless Verification"}),"\n",(0,a.jsx)(t.p,{children:"There are two primary roles for participation in a RollApp execution process - Executors and Verifiers, also referred to as Fishermen."}),"\n",(0,a.jsx)(t.p,{children:"KIRA\u2019s Consensus nodes have the option to take on either or both of these roles, they are not compelled and do not need to post a bond to take these roles. This is to ensure they can adapt their hardware to suit the RollApp\u2019s needs and avoid interacting with code logic or content that may pose legal issues in their operating region. However their participation is subject to approval by Controllers, and they can be evicted from SEKAI\u2019s Consensus node set if acting maliciously. If a Consensus node becomes an Executor, they will run the execution container and periodically serve as Leader for Sessions, proposing state changes while also automatically taking on the role of Verifier when not actively leading a Session."}),"\n",(0,a.jsxs)(t.p,{children:["Any users can permissionlessly become Fishermen, i.e. if they have a vested interest in this RollApp. They are not subject to approval by controllers but must submit a bond in the RollApp's ",(0,a.jsx)(t.a,{href:"/learn/a6a660a6-3e5c-4a53-9ec3-14aa07f00351",children:"liquidity pool tokens"}),". The bond amount is set via governance, defaulting to 0.1% of the pool\u2019s total LP tokens circulating supply. In summary, Consensus nodes can opt-in to run as Executors or Verifiers, pending approval. Other users can freely become Fishermen verifiers by providing a bond."]}),"\n",(0,a.jsx)(t.p,{children:"The key difference between the Executors and Verifiers lies in their responsibilities and how each role is held accountable. Only Executors can become Leaders and propose state changes for a RollApp, while Fishermen solely verify its integrity. Executors are held accountable by risking their \u2018validator\u2019 role and income if removed for misconduct. Fishermen are held accountable through the verifier bonds they stake as collateral, which are slashable if they incorrectly judge a valid RollApp execution as invalid, causing an unjustified stoppage."}),"\n",(0,a.jsx)(t.h2,{id:"005cf0bade9a46dab57cb779f5bf84b3",children:"Sessions"}),"\n",(0,a.jsx)(t.p,{children:'In KIRA\'s Layer 2, computation occurs in timed periods called Sessions, similar to the "challenge periods" in Ethereum optimistic rollups. However, unlike Ethereum rollups which optimistically assume correct execution, KIRA pessimistically assumes incorrect results and only settles the state if a sufficient number of verification votes is submitted to vouch for the correctness of each session. The duration of each session is decided by each RollApp individually and can be as fast as a single SEKAI block.'}),"\n",(0,a.jsx)(t.p,{children:"A session proceeds as follows:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"A single Executor acts as the Session leader and performs computation, proposing a new RollApp state root (the hash of the new app database state) and changes to account balances on the base layer. The Leader can only be an active Consensus node and is chosen in a round-robin fashion among existing RollApp\u2019s Executors."}),"\n",(0,a.jsx)(t.li,{children:"Immediately after the current Executor finishes and submits his computation results on-chain, the next leader can optimistically start executing the next session. This mechanism allows for continuous execution without waiting for the prior session's full verification to complete effectively eliminating the halting problem faced by classical smart contracts. In rare scenarios where the previous session was invalid and the following one could not be correctly executed, both sessions can be discarded, although this is unlikely to occur. For this reason, while composing multiple RollApps the KIRA base layer (SEKAI) should be used as a trusted source of account balance data and RollApps state."}),"\n",(0,a.jsx)(t.li,{children:"Other Executors acting as Verifiers collect the input data stream sequenced by INTERX and verify Leader results by casting their approval on proposed state changes or submitting a challenge. The end of the session and settlement requires over 2/3 of the Executor's participation and unanimous agreement. In cases where the RollApp has only one Executor, the end of the session relies on the approval of no less than 2/3 of all active Verifiers as well as a minimum vote count threshold in both cases as a simple censorship attack prevention mechanism."}),"\n",(0,a.jsx)(t.li,{children:"Meanwhile, multiple verifier nodes (Fishermen) verify the integrity of the leader's execution. They can halt settlement if they find incorrect state transitions, but cannot finalize the settlement, only Executors can."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"The number of Verifiers (Fishermen) is uncapped and can be much greater than the number of Executors. However, there is only one Leader at any point in time to guarantee consistent RollApp input sequencing."})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6905);const i={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>A});var a=n(7294),i=n(6905),s=n(2466),o=n(6550),r=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:n,groupId:i}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,u.Nk)(n);return[i,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),g=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,r.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function y(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=r[n].value;i!==a&&(c(t),o(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...e,...t}),(0,v.jsx)(w,{...e,...t})]})}function A(e){const t=(0,b.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var a=n(7294);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);