"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[2377],{7828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=n(4848),i=n(8453);n(1470),n(9365);const s={title:"Overview",sidebar_position:0,slug:"overview"},o=void 0,r={id:"what-is-kira/layer-2/overview",title:"Overview",description:"KIRA\u2019s base layer, SEKAI, handles governance, token transfers, multi-staking, and all other system security-related on-chain logic. At the same time, SEKAI assists in the execution of decentralized applications taking place on their dedicated off-chain \u2018subnets\u2019 by enabling their orchestration, communication, and settlement. This separation enables parallel scaling of execution, storage, and networking capabilities of each application. KIRA applications, also referred to as \u2018RollApps\u2019, consist of an execution container defining application logic, and a verification container defining how changes in the application state can be verified.",source:"@site/tabs/learn/what-is-kira/layer-2/overview.mdx",sourceDirName:"what-is-kira/layer-2",slug:"/what-is-kira/layer-2/overview",permalink:"/learn/what-is-kira/layer-2/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/what-is-kira/layer-2/overview&page-local=what-is-kira/layer-2/overview.mdx",tags:[],version:"current",lastUpdatedAt:17179291e5,sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"overview"},sidebar:"defaultSidebar",previous:{title:"Orchestrator - RYOKAI",permalink:"/learn/what-is-kira/orchestrator---ryokai"},next:{title:"Virtual Finality Gadget",permalink:"/learn/what-is-kira/layer-2/virtual-finality-gadget"}},l={},c=[{value:"Application Submission",id:"844d001a2633403cab43689ba538e666",level:2},{value:"Permissioned Execution, Permissionless Verification",id:"5e7d6296b59b4a568b58b85c47bd7708",level:2},{value:"Sessions",id:"005cf0bade9a46dab57cb779f5bf84b3",level:2}];function u(e){const t={a:"a",admonition:"admonition",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"KIRA\u2019s base layer, SEKAI, handles governance, token transfers, multi-staking, and all other system security-related on-chain logic. At the same time, SEKAI assists in the execution of decentralized applications taking place on their dedicated off-chain \u2018subnets\u2019 by enabling their orchestration, communication, and settlement. This separation enables parallel scaling of execution, storage, and networking capabilities of each application. KIRA applications, also referred to as \u2018RollApps\u2019, consist of an execution container defining application logic, and a verification container defining how changes in the application state can be verified."}),"\n",(0,a.jsx)(t.p,{children:"KIRA by default pessimistically assumes incorrectness of all RollApps computations. For a RollApp's state to be finalized, its execution must be verified as correct through a consensus of Verifier nodes, each following its own programmable verification rules. This is in contrast to optimistic rollup systems which by default assume the correctness of all computations unless fraud proofs are presented which unnecessarily prolong the settlement process even if all network participants agree that the RollApp state transitions are correct."}),"\n",(0,a.jsx)(t.h2,{id:"844d001a2633403cab43689ba538e666",children:"Application Submission"}),"\n",(0,a.jsx)(t.p,{children:"Before a RollApp execution can begin, its code must be published on-chain along with two key components:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"metadata describing necessary resources and infrastructure configuration, and"}),"\n",(0,a.jsx)(t.li,{children:"a bond in KEX tokens."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"The metadata allows interested Consensus nodes to assess whether they have adequate hardware resources to serve as Executors for the RollApp's execution. It also includes essential execution requirements for the RollApp's operation that will be enforced by SEKAI, such as the minimum number of Executors and Verifiers required. Meanwhile, the bond, crowdsourced through an Initial Liquidity Offering (ILO), ensures developers' commitment and provides initial liquidity. This submission process helps prevent spam by pruning out less viable projects, and ensures that only well-prepared RollApps proceed to execution."}),"\n",(0,a.jsx)(t.p,{children:'The submission process is initiated by the application\'s deployers\u2014called "Controllers" in KIRA\u2014through a governance proposal. Controllers can be individual KIRA accounts or group of users designated by governance-curated "roles". Importantly, KIRA\'s use of account abstractions allows RollApps to be treated similarly to user accounts. As a result, RollApps can act as Controllers for themselves or each other, enabling governance to be defined by the programmatic constraints of the RollApp\u2019s code.'}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["More information about the crowdsourcing mechanism is described in ",(0,a.jsx)(t.a,{href:"/learn/kira%E2%80%99s-economics/initial-liquidity-offering",children:"Initial Liquidity Offering "})," page."]})}),"\n",(0,a.jsx)(t.h2,{id:"5e7d6296b59b4a568b58b85c47bd7708",children:"Permissioned Execution, Permissionless Verification"}),"\n",(0,a.jsx)(t.p,{children:"There are two primary roles for participation in a RollApp execution process - Executors and Verifiers, also referred to as Fishermen."}),"\n",(0,a.jsx)(t.p,{children:"KIRA\u2019s Consensus nodes have the option to take on either or both of these roles, they are not compelled and do not need to post a bond to take these roles. This is to ensure they can adapt their hardware to suit the RollApp\u2019s needs and avoid interacting with code logic or content that may pose legal issues in their operating region. In addition, this strategy encourages a diverse Consensus node set that can accommodate a wide range of hardware capabilities among its members. This means even those with the most basic hardware have the ability to contribute to network security by simply validating SEKAI. This strategy enhances KIRA's accessibility for operators of home nodes and encourages network decentralization by establishing the minimum participation requirement in SEKAI as the validation of a fundamental, minimalist blockchain application. However the participation of these nodes is contingent on the approval of Controllers, and they can be evicted from SEKAI\u2019s Consensus node set if acting maliciously. If a Consensus node becomes an Executor, they will run the execution container and periodically serve as Leader for Sessions, proposing state changes while also automatically taking on the role of Verifier when not actively leading a Session."}),"\n",(0,a.jsxs)(t.p,{children:["On the other hand, any users can permissionlessly become Fishermen, i.e. if they have a vested interest in this RollApp. They are not subject to approval by controllers but must submit a bond in the RollApp's ",(0,a.jsx)(t.a,{href:"/learn/kira%E2%80%99s-economics/initial-liquidity-offering",children:"liquidity pool tokens"}),". The bond amount is set via governance, defaulting to 0.1% of the pool\u2019s total LP tokens circulating supply. In summary, Consensus nodes can opt-in to run as Executors or Verifiers, pending approval. Other users can freely become Fishermen verifiers by providing a bond."]}),"\n",(0,a.jsx)(t.p,{children:"The key difference between the Executors and Verifiers lies in their responsibilities and how each role is held accountable. Only Executors can become Leaders and propose state changes for a RollApp, while Fishermen solely verify its integrity. Executors are held accountable by risking their \u2018validator\u2019 role and income if removed for misconduct. Fishermen are held accountable through the verifier bonds they stake as collateral, which are slashable if they incorrectly judge a valid RollApp execution as invalid, causing an unjustified stoppage."}),"\n",(0,a.jsx)(t.h2,{id:"005cf0bade9a46dab57cb779f5bf84b3",children:"Sessions"}),"\n",(0,a.jsx)(t.p,{children:'In KIRA\'s Layer 2, computation occurs in timed periods called Sessions, similar to the "challenge periods" in Ethereum optimistic rollups. However, unlike Ethereum rollups which optimistically assume correct execution, KIRA pessimistically assumes incorrect results and only settles the state if a sufficient number of verification votes is submitted to vouch for the correctness of each session. The duration of each session is decided by each RollApp individually and can be as fast as a single SEKAI block.'}),"\n",(0,a.jsx)(t.p,{children:"A session proceeds as follows:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"A single Executor acts as the Session leader and performs computation, proposing a new RollApp state root (the hash of the new app database state) and changes to account balances on the base layer. The Leader can only be an active Consensus node and is chosen in a round-robin fashion among existing RollApp\u2019s Executors."}),"\n",(0,a.jsx)(t.li,{children:"Immediately after the current Executor finishes and submits his computation results on-chain, the next leader can optimistically start executing the next session. This mechanism allows for continuous execution without waiting for the prior session's full verification to complete effectively eliminating the halting problem faced by classical smart contracts. In rare scenarios where the previous session was invalid and the following one could not be correctly executed, both sessions can be discarded, although this is unlikely to occur. For this reason, while composing multiple RollApps the KIRA base layer (SEKAI) should be used as a trusted source of account balance data and RollApps state."}),"\n",(0,a.jsx)(t.li,{children:"Other Executors acting as Verifiers collect the input data stream sequenced by INTERX and verify Leader results by casting their approval on proposed state changes or submitting a challenge. The end of the session and settlement requires over 2/3 of the Executor's participation and unanimous agreement. In cases where the RollApp has only one Executor, the end of the session relies on the approval of no less than 2/3 of all active Verifiers as well as a minimum vote count threshold in both cases as a simple censorship attack prevention mechanism."}),"\n",(0,a.jsx)(t.li,{children:"Meanwhile, multiple verifier nodes (Fishermen) verify the integrity of the leader's execution. They can halt settlement if they find incorrect state transitions, but cannot finalize the settlement, only Executors can."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"The number of Verifiers (Fishermen) is uncapped and can be much greater than the number of Executors. However, there is only one Leader at any point in time to guarantee consistent RollApp input sequencing."})})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var a=n(8215);const i={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(i.tabItem,o),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>A});var a=n(6540),i=n(8215),s=n(3104),o=n(6347),r=n(205),l=n(7485),c=n(1682),u=n(679);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:n,groupId:i}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,u.Dv)(n);return[i,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),g=(()=>{const e=c??m;return p({value:e,tabValues:s})?e:null})();(0,r.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function y(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=r[n].value;i!==a&&(c(t),o(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function A(e){const t=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var a=n(6540);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);