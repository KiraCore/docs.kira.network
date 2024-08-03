"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[2620],{50:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var s=n(4848),o=n(8453);n(1470),n(9365);const a={title:"Concept",sidebar_position:0,slug:"concept"},i=void 0,r={id:"backend---sekai/modules/multistaking/concept",title:"Concept",description:"Proof-of-non-sybil Consensus Model",source:"@site/tabs/docs/backend---sekai/modules/multistaking/concept.mdx",sourceDirName:"backend---sekai/modules/multistaking",slug:"/backend---sekai/modules/multistaking/concept",permalink:"/docs/backend---sekai/modules/multistaking/concept",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/multistaking/concept&page-local=backend---sekai/modules/multistaking/concept.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:0,frontMatter:{title:"Concept",sidebar_position:0,slug:"concept"},sidebar:"defaultSidebar",previous:{title:"Params",permalink:"/docs/backend---sekai/modules/native-cosmossdk-modules/params"},next:{title:"Consensus nodes",permalink:"/docs/backend---sekai/modules/multistaking/consensus-nodes"}},l={},c=[{value:"Proof-of-non-sybil Consensus Model",id:"3dc0559acbed4c5bb20f6cd482d5b6d3",level:2},{value:"With Real Value at Stake.",id:"e3994cfd44d94d7fa2d9467d91cd2480",level:2}];function d(e){const t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"3dc0559acbed4c5bb20f6cd482d5b6d3",children:"Proof-of-non-sybil Consensus Model"}),"\n",(0,s.jsxs)(t.p,{children:["The problem of improving the probabilistic finality of PoW consensuses has been addressed by various committee-based PoS consensuses, such as ",(0,s.jsx)(t.a,{href:"https://tendermint.com/",children:"Tendermint"}),'. Unlike the former mechanism, where all consensus nodes ("miners") can propose a block and one is chosen probabilistically, in a committee-based blockchain, blocks are cooperatively created through a voting mechanism. Consequently, the consensus over the "valid" state of the blockchain relies on the voting behavior of all its consensus nodes. However, since permissionless settings inherently exhibit Sybil vulnerability, assessing nodes\' rational behavior becomes impossible. To mitigate this issue, most PoS networks have implemented strict slashing penalties and a weighted voting power system, where a node\'s influence on both consensus and governance is proportional to the amount of tokens they have staked. In this paradigm, a block (or a governance proposal) is considered valid when it accumulates at least two-thirds of the total voting power from the consensus nodes set (rather than requiring a majority of validators by count, since stake distribution can vary over time). Unfortunately, the weighted voting power approach inherently leads to the centralization of power in the hands of a few large token holders, as exemplified by Cosmos, where more than two-thirds of the voting power of most chains is concentrated in just 5 to 7 entities. But more importantly, this approach still does not guarantee that the intentions of these entities align with the long-term best interests of the network (see ',(0,s.jsx)(t.a,{href:"/docs/backend---sekai/modules/slashing/jailing--slashing-procedures",children:"Jailing & Slashing Procedures"})," page). Consequently, alternative approaches that address these limitations are necessary to ensure the long-term security and decentralization of such systems."]}),"\n",(0,s.jsx)(t.p,{children:"The Multistaking module extends the functionality of the Tendermint consensus engine, and introduce fundamental adjustments to the block proposer role:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Human-Centric Consensus:"}),"\xa0KIRA decouples monetary power from the acts of block production and governance, making it a per capita system, a key distinction from traditional Proof-of-Stake models where influence is proportional to stake size. The block proposer role rotates according to an equal probability round-robin mechanism, ensuring all consensus nodes have an equal chance of proposing new blocks. Consequently, they are rewarded equally, rather than proportionally to their stake. For more information on rewards distribution, please refer to the ",(0,s.jsx)(t.a,{href:"/docs/backend---sekai/modules/distributor/fees-and-staking-rewards-distribution",children:"Fees and staking rewards distribution"})," page."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Governance-Permissioned, Unbounded Validator Set:"}),'\xa0The Committee, also known as the Consensus node set or "Validator" set, is no longer a fixed number of nodes. Instead, network governance controls who can join and leave the committee, and can set requirements such as proof of individuality (through the ',(0,s.jsx)(t.a,{href:"/docs/backend---sekai/modules/governance/identity-registrar",children:"Identity Registrar"}),", for instance, which need not involve KYC), community involvement (such as joining consensus node standups), or adherence to the Code of Conduct in the ",(0,s.jsx)(t.a,{href:"/docs/backend---sekai/modules/governance/data-registry",children:"Data Registry"})," to increase Sybil resistance."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["At its core, KIRA leverages a unique approach that can be described as a Proof-of-non-Sybil consensus mechanism. It utilizes the value staked by validators as a deterrent against double-spend/fork attacks (see ",(0,s.jsx)(t.a,{href:"/docs/backend---sekai/modules/slashing/jailing--slashing-procedures",children:"Slashing"})," page), while relying on governance to ensure the validator set remains Sybil-resistant. This unbounded, human-centric approach aims to improve upon the one-node-one-vote paradigm of Bitcoin and the one-coin-one-vote models of traditional PoS network, enabling powerful features such as:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Malicious Node Removal:"})," A key differentiator of KIRA's permissioned consensus model is the ability to evict malicious nodes, unlike permissionless PoS networks that solely rely on economic penalties through slashing. This is possible because governance decisions are no longer influenced by stake size, therefore malicious actors cannot leverage their coin holdings to sway the outcome of the removal process."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Decentralized, Accessible Network:"})," By eliminating the need ",(0,s.jsx)(t.a,{href:"/docs/backend---sekai/modules/slashing/jailing--slashing-procedures",children:"for strong slashing requirements"})," typically seen in other networks, KIRA drastically lowers the barrier to entry for running a Consensus node - making it accessible even from home environments without professional node operation skills. This accessibility enables a truly decentralized social layer of node operators, diverging from the concentration often overseen by a handful of opaque, capable large entities elsewhere. Moreover, KIRA provides RYOKAI - a tool purposefully designed to empower a wide range of participants to operate infrastructure for resource-intensive RollApps, regardless of their expertise levels. RYOKAI abstracts away the complexities of scaling hardware and deploying RollApps, ensuring opportunities for contributing to the network beyond simply managing SEKAI."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Cross-Chain-Safe Native Token:"})," KIRA's governance-permissioned model decouples monetary power from block production and governance. This allows KEX, KIRA's native token, to have a unique property \u2013 it is the only existing native token that can be safely transferred cross-chain to other networks without undermining the security of its issuing chain. Unlike tokens on other networks that are tied to voting power or governance and present security risks when moved outside their native chains, KIRA preserves its sovereignty over block production and governance within its own ecosystem. This is while still facilitating cross-chain interoperability and use of its native token as a versatile cross-chain asset."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Unlimited Hardware Scaling:"}),"\xa0One of the ambitious goals of KIRA is to strive for hardware scaling capabilities that could potentially match, or even exceed, those of web2 platforms. This could serve as a substantial incentive for companies to transition to web3. KIRA's strategy hinges on its unbounded validator set. Each validator, functioning as a distinct non-Sybil entity, has the ability to dynamically scale their individual hardware resources as needed. This flexibility allows them to provide computational power for resource-intensive RollApps. SEKAI\u2019s block time only sets a lower bound on RollApps session lengths, which can be optimized by governance through adjusting the size of the validator set With more validators joining and individually scaling their hardware, KIRA's overall computing capacity expands unboundedly, enabling unlimited scaling to support an ever-increasing load of RollApps."]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"e3994cfd44d94d7fa2d9467d91cd2480",children:"With Real Value at Stake."}),"\n",(0,s.jsx)(t.p,{children:"In a multichain ecosystem where different networks coexist and interact, bridging foreign tokens introduces security risks. This occurs when the total value of the bridged assets surpasses the value underpinning the consensus mechanism, a concept often termed as the \u2018security ratio.\u2019 This imbalance presents potential incentives for validators to collude and fork the chain to steal the bridged assets if they offer a more enticing value definition than the current blockchain security. As the concept of value is inherently subjective and continually reevaluated, it is impossible to guarantee cryptoeconomic security through single, native token-based slashing."}),"\n",(0,s.jsx)(t.p,{children:"KIRA's Multistaking module introduces the Multi-Bonded Proof-of-Stake (MBPoS) consensus mechanism to tackle the long-term security challenges of a multichain ecosystem. In a concept similar to how banks secure themselves with diversified collateral, MBPoS allows validators to stake a wide range of assets, including tokens from other networks, tokenized securities, and NFTs. By deriving KIRA's security from a diverse asset pool, MBPoS gives network participants a way to reason about what constitutes \u2018real\u2019 value without imposing a rigid definition. This approach minimizes risks associated with a single asset, such as price volatility, failure, or collusion attacks, and provides the network with adaptability in the ever evolving blockchain landscape."})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(8215);const o={tabItem:"tabItem_Ymn6"};var a=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(o.tabItem,i),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>x});var s=n(6540),o=n(8215),a=n(3104),i=n(6347),r=n(205),l=n(7485),c=n(1682),d=n(679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:o}}=e;return{value:t,label:n,attributes:s,default:o}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,i.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:a}))),[c,u]=m({queryString:n,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,d.Dv)(n);return[o,(0,s.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),g=(()=>{const e=c??f;return p({value:e,tabValues:a})?e:null})();(0,r.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(2303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function k(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),o=r[n].value;o!==s&&(c(t),i(o))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:r.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,o.A)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,v.jsx)(k,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function x(e){const t=(0,b.A)();return(0,v.jsx)(w,{...e,children:u(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>r});var s=n(6540);const o={},a=s.createContext(o);function i(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);