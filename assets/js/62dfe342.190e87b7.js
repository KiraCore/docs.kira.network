"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[7975],{5401:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"what-is-kira/backend---sekai/consensus","title":"Consensus","description":"Tendermint","source":"@site/tabs/learn/what-is-kira/backend---sekai/consensus.mdx","sourceDirName":"what-is-kira/backend---sekai","slug":"/what-is-kira/backend---sekai/consensus","permalink":"/learn/what-is-kira/backend---sekai/consensus","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/what-is-kira/backend---sekai/consensus&page-local=what-is-kira/backend---sekai/consensus.mdx","tags":[],"version":"current","lastUpdatedAt":1727071398000,"sidebarPosition":1,"frontMatter":{"title":"Consensus","sidebar_position":1,"slug":"consensus"},"sidebar":"defaultSidebar","previous":{"title":"Overview","permalink":"/learn/what-is-kira/backend---sekai/overview"},"next":{"title":"Governance","permalink":"/learn/what-is-kira/backend---sekai/governance"}}');var s=t(4848),o=t(8453);t(5537),t(9329);const i={title:"Consensus",sidebar_position:1,slug:"consensus"},r=void 0,l={},c=[{value:"Tendermint",id:"f82263dd7b3a455bb49cf5292b3f30df",level:2},{value:"Governance-curated Consensus Node Set",id:"1e2b19cfb65f434ba3c2d2b848c9f549",level:2},{value:"Multi-bonded Proof of Stake",id:"38c624fbdc324bd093974d2abb46c689",level:2}];function u(e){const n={a:"a",admonition:"admonition",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"f82263dd7b3a455bb49cf5292b3f30df",children:"Tendermint"}),"\n",(0,s.jsxs)(n.p,{children:["SEKAI is a \u201cserver application\u201d deriving from Tendermint a consistent PoS\xa0",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Byzantine_fault_tolerance",children:"BFT"}),"\xa0(Proof of Stake Byzantine Fault Tolerant) consensus algorithm, meaning that it can tolerate up to 1/3 faulty nodes. It provides instant finality which minimizes the likelihood of forks at the consensus layer, making it suitable for high-speed RollApps."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For more information regarding Tendermint, visit the following link. ",(0,s.jsx)(n.a,{href:"https://docs.tendermint.com/v0.34/",children:"https://docs.tendermint.com/v0.34/"})]})}),"\n",(0,s.jsx)(n.h2,{id:"1e2b19cfb65f434ba3c2d2b848c9f549",children:"Governance-curated Consensus Node Set"}),"\n",(0,s.jsx)(n.p,{children:"KIRA has customized Tendermint to establish a strong and simple governance-curated system for managing its Consensus node set. Through this mechanism, network governance exercises direct control over Consensus node inclusion and removal. Only candidates meeting specific criteria\u2014such as proof of individuality, community engagement, and adherence to the network's Code of Conduct\u2014are qualified to participate in consensus and governance roles. Unlike permissionless models with a fixed number of committee members, SEKAI's validator set composition is dynamically adjustable, enabling the eviction of malicious nodes or the regulation of block speed to maintain network integrity and performance."}),"\n",(0,s.jsx)(n.p,{children:"SEKAI's Consensus node set expands through the actions of its active members, governed by a principle of inclusivity with no upper limit on the number of nodes. This ensures that the network can scale dynamically while adjusting block production speeds to accommodate Consensus nodes worldwide, regardless of their geographical locations or the quality of their hardware and networking capabilities. Candidates seeking to join must have their KIRA addresses officially recognized as \u2018validators\u2019, a distinction awarded through governance proposals that are submitted and voted on exclusively by existing Consensus nodes. These proposals evaluate the candidate\u2019s commitment to and compliance with the network's standards such as the Code of Conduct. This process guarantees that the growth of the Consensus node set is not only self-sustained but also strictly adheres to SEKAI\u2019s ethos, ensuring optimal security and performance across its expanding infrastructure."}),"\n",(0,s.jsx)(n.p,{children:"By prioritizing adherence to community values over wealth status, KIRA aims to be the first inclusive PoS network that combines human alignment alongside assets at stake to secure the consensus. By subsidizing governance members and Consensus nodes through the Universal Basic Income (UBI), KIRA makes it possible to guarantee the sustainability of hardware operations and their continuous alignment with the long-term network goals without depending on exponentially inflating the KEX token supply and wealth redistribution only to the hands of a small set of privileged nodes and stakeholders."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For a comprehensive overview of SEKAI's governance mechanism, including its structure, roles, and permissions, visit the ",(0,s.jsx)(n.a,{href:"/learn/what-is-kira/backend---sekai/governance",children:"Governance"})," page."]})}),"\n",(0,s.jsx)(n.h2,{id:"38c624fbdc324bd093974d2abb46c689",children:"Multi-bonded Proof of Stake"}),"\n",(0,s.jsx)(n.p,{children:"Proof-of-stake is a Sybil resistance mechanism that complements blockchain consensus protocols. In a proof-of-stake system, Consensus nodes are required to stake the chain's native asset as slashable collateral. PoS bolsters the security of the chain by aligning the Consensus nodes' economic interests with those of the network. Since not all Consensus nodes can afford a large number of assets at stake, \u201cdelegated staking\u201d is often used to increase the \u201ctrust\u201d in the network Consensus node set by allowing anyone to put the tokens at the risk of slashing in the hands of nodes they trust."}),"\n",(0,s.jsx)(n.p,{children:"KIRA iterates upon this mechanism with its Multi-Bonded Proof-of-Stake. Any assets whitelisted by governance, including those not issued on SEKAI, may be staked to Consensus nodes, in addition to the native asset. There are no limitations on the types of assets that can be staked, such as NFTs, RWA, LP tokens, and stablecoins. However, SEKAI maintains the relevancy of its native asset by ensuring a minimum allocation of 50% of block and fee rewards, a figure that governance can adjust."}),"\n",(0,s.jsx)(n.p,{children:"In SEKAI, block production operates on an equal round-robin mechanism. This is distinct from conventional PoS systems, where the chance to produce a block is proportional to stake size; thus, SEKAI effectively treats all nodes as if they had the same stake amount. This approach extends to on-chain governance, which operates on a per-capita basis as well, ensuring equitable influence on network decisions among all participants."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Unlike traditional PoS systems, block production in KIRA is separate from onchain governance. For more details on governance, visit the ",(0,s.jsx)(n.a,{href:"/learn/what-is-kira/backend---sekai/governance",children:"Governance"})," page."]})}),"\n",(0,s.jsx)(n.p,{children:"To form a secure, scalable foundation for complex economic activity, the base layer should natively support the liquidity of all staked assets. Multi-asset staking is necessary to scale both security and liquidity available within the network in an increasingly multichain world. By allowing chain governance to whitelist any asset that it recognizes to hold fundamental value, KIRA attracts liquidity from all spheres of crypto to assume a productive role in its network, thereby presenting a strong value proposition to retain and grow on-chain liquidity through natively supported Liquid Staking Derivatives (LSD). This unlocks the potential for frictionless integration of multichain LSDs and restaking-powered DeFi while decreasing the systematic risk of any single external (non-native) LSD protocol failure."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/learn/kira%E2%80%99s-economics/mbpos-network-rewards-and-incentives-structure",children:"MBPoS, Network Rewards and Incentives Structure"})," page discusses economic incentives for consensus nodes and their delegators."]})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},9329:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(8215);const s={tabItem:"tabItem_Ymn6"};var o=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,i),hidden:t,children:n})}},5537:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(6540),s=t(8215),o=t(5627),i=t(6347),r=t(372),l=t(604),c=t(1861),u=t(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const s=(0,i.W6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(s.location.search);n.set(o,e),s.replace({...s.location,search:n.toString()})}),[o,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,d]=p({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,o]=(0,u.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:s}),g=(()=>{const e=c??f;return m({value:e,tabValues:o})?e:null})();(0,r.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=t(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function k(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=r[t].value;s!==a&&(c(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:r.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...o,className:(0,s.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function w(e){const n=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,v.jsx)(k,{...n,...e}),(0,v.jsx)(y,{...n,...e})]})}function x(e){const n=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(6540);const s={},o=a.createContext(s);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);