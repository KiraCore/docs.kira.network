"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[9257],{2477:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var a=n(5893),r=n(1151),t=n(4866),i=n(5162);const o={title:"Consensus nodes",sidebar_position:1,slug:"/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b"},d=void 0,c={id:"backend---sekai/modules/multistaking/consensus-nodes",title:"Consensus nodes",description:"Claiming a Validator Seat",source:"@site/tabs/docs/backend---sekai/modules/multistaking/consensus-nodes.mdx",sourceDirName:"backend---sekai/modules/multistaking",slug:"/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",permalink:"/docs/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b&page-local=backend---sekai/modules/multistaking/consensus-nodes.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Consensus nodes",sidebar_position:1,slug:"/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b"},sidebar:"defaultSidebar",previous:{title:"Concept",permalink:"/docs/f7a0a518-e818-481c-aa8c-7c63ee1cf2ab"},next:{title:"Delegators",permalink:"/docs/94e4d0a6-8e45-469c-89a5-8ec65ca16381"}},l={},h=[{value:"Claiming a Validator Seat",id:"6441658f447b4a418784ab7b0ce4ec34",level:3},{value:"Staking Pools Status &amp; Commissions",id:"df95ed895a6b45968a254d7751bebfe9",level:3},{value:"Performance-based Rewards",id:"9884c804414347b9ba608c8c9c006564",level:3},{value:"Consensus Nodes Ranks and Statuses",id:"4d738a03dfa44aa2bc1482fe5e6114a4",level:3},{value:"Consensus Node Faq",id:"326c9ccbe2aa4040adb5182e269872b2",level:3},{value:"Parameters",id:"0ebbc1da2a434d80be94371717737f36",level:2},{value:"CLI Syntax &amp; Examples",id:"b3d08c63c9754edd925df694e86eeeee",level:2},{value:"Transactions",id:"55ed760972db41338ee3c66e283156af",level:2},{value:"Claiming a Consensus Node Seat",id:"3fe4d6fb4aac4669aa4033d67a92121f",level:4},{value:"Creating/editing a Staking Pool",id:"526b85a39e5e4895bbd8025439af5ab9",level:4},{value:"Queries",id:"10b764b83e0f475db4662aafc73454b2",level:2},{value:"Consensus Node Information",id:"628b4115df9348f692fabb4c2a105d93",level:4},{value:"Staking Pool Information",id:"39c8e4e079c149589be3a410bf93933d",level:4},{value:"Governance",id:"a72ec328d33f4233a449cd4634882a8c",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h3,{id:"6441658f447b4a418784ab7b0ce4ec34",children:"Claiming a Validator Seat"}),"\n",(0,a.jsxs)(s.p,{children:['Before any Consensus node can participate in network validation, they must first "claim" their Validator Seat, a process parallel to how governance members claim their Councilor Seat. This action acknowledges the network ',(0,a.jsx)(s.a,{href:"/docs/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c",children:(0,a.jsx)(s.strong,{children:"Code of Conduct"})})," and allows the integration of the node in the consensus registrar. To submit a ",(0,a.jsx)(s.code,{children:"MsgClaimValidator"})," transaction, the account must have permission 2[broken link] , which is assigned either through governance (mainnet) or granted by the sudo account (testnet). In addition, this transaction requires the node's globally unique ",(0,a.jsx)(s.code,{children:"moniker"})," identifier as a parameter. This moniker is a friendly name with minimum 4 non-whitespace characters that can be set in advance by the account via the ",(0,a.jsx)(s.a,{href:"/docs/d482180d-165a-4c09-8c32-167f061ceb92",children:"Identity Registrar"})," module, or directly when submitting the transaction via the ",(0,a.jsx)(s.code,{children:"claim-validator-seat"})," CLI if it has not been assigned a value yet. If a different value than the existing one is provided, the transaction will fail. This process ensures the unique identity of each consensus node in the network."]}),"\n",(0,a.jsx)(s.h3,{id:"df95ed895a6b45968a254d7751bebfe9",children:"Staking Pools Status & Commissions"}),"\n",(0,a.jsxs)(s.p,{children:["Each consensus node operates its own staking pool where delegators can stake their assets. Each staking pool has a unique ID that is linked to the consensus node's address. The consensus node has the ability to ",(0,a.jsx)(s.code,{children:"enable"})," or ",(0,a.jsx)(s.code,{children:"disable"})," the staking pool, as well as set the commission rate on block rewards. Staking pools play a crucial role in reward distribution on KIRA network. All rewards are managed and distributed through these pools, which helps to streamline the process given the network's diverse range of staking tokens."]}),"\n",(0,a.jsxs)(s.p,{children:["Before the block\u2019s and fee rewards of a given block are distributed to proposer staking pool\u2019s delegators, the proposer takes a percentage of both types of rewards as commissions. Regarding block rewards, subsidized by KEX inflation, each consensus node setup their own staking pool\u2019s ",(0,a.jsx)(s.code,{children:"commission"})," rate. The ",(0,a.jsx)(s.code,{children:"commission"})," rate is a decimal value that cannot be set above ",(0,a.jsx)(s.code,{children:"0.5"})," (50%) and under ",(0,a.jsx)(s.code,{children:"0.01"})," (1%) to prevent them from over-charging delegators or undercharging them in order to make ",(0,a.jsx)(s.em,{children:"smaller"})," consensus nodes unprofitable. Commissions over fee rewards from ",(0,a.jsx)(s.a,{href:"/docs/184c11ed-4849-4ec5-acd0-f795b7abf467",children:"execution fees"}),", however, are homogeneous to all staking pools and defined by a governance managed ",(0,a.jsx)(s.code,{children:"validators_fee_share"})," network property. Likewise, ",(0,a.jsx)(s.code,{children:"validators_fee_share"})," is capped at ",(0,a.jsx)(s.code,{children:"0.5"})," (50%) but can be set to 0."]}),"\n",(0,a.jsx)(s.h3,{id:"9884c804414347b9ba608c8c9c006564",children:"Performance-based Rewards"}),"\n",(0,a.jsx)(s.p,{children:"Consensus nodes are subject to a performance evaluation and the amount of rewards they will actually receive from their commission is pro-rata to their participation in the consensus. If they fail to sign consecutive blocks during a given period, some of those rewards are cut off and sent to the community treasury.  Outstanding block and fee rewards are then sent to the consensus node\u2019s staking pool and become claimable by their respective delegators in proportion to the derivative tokens they have. Notice in particular that consensus nodes can be rewarded twice: once through both previous commissions they take as consensus nodes for their service, and once more as delegator if they delegate some assets."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.em,{children:"For more information regarding network rewards distribution mechanisms please refer to the"})," ",(0,a.jsx)(s.a,{href:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:(0,a.jsx)(s.em,{children:"Fees and staking rewards distribution"})})," ",(0,a.jsx)(s.em,{children:"module.\nFor more information regarding KIRA\u2019s economics, please refer to the"})," ",(0,a.jsx)(s.em,{children:"KIRA\u2019s Economics"}),"[broken link] ",(0,a.jsx)(s.em,{children:"page of the Learn section."})]}),"\n",(0,a.jsx)(s.h3,{id:"4d738a03dfa44aa2bc1482fe5e6114a4",children:"Consensus Nodes Ranks and Statuses"}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsx)(s.p,{children:"The status of a consensus node and the status of its staking pool are two distinct things. Consensus nodes that have not created a staking pool or have disabled it can still participate in the consensus process and produce blocks, but they will not be eligible for any rewards."})}),"\n",(0,a.jsxs)(s.p,{children:["KIRA network uses a ",(0,a.jsx)(s.a,{href:"/docs/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:"ranking system"})," to incentivize consensus nodes to stay online, or ",(0,a.jsx)(s.code,{children:"active"}),", and create a friendly, competitive environment. The ranking is based on the number of blocks a consensus node produces and the number of missed blocks. If a consensus node signs a block, their rank increases. If a consensus node consecutively fails to sign a block for a certain number of times, they are deemed offline, or ",(0,a.jsx)(s.code,{children:"inactive"}),", and their rank decreases. The ranking system also includes a mechanism for consensus nodes to temporarily pause their node without affecting their rank, and for the governance to reset all ranks periodically. Inactive consensus nodes are removed from the consensus node set, cannot produce blocks and are unable to perform some actions such as editing their staking pool until they signal they are ready to be active again. If a consensus node is inactive, delegators cannot delegate any tokens; they can only undelegate their stake."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.em,{children:"For more information regarding consensus nodes ranking system please refer to the"})," ",(0,a.jsx)(s.a,{href:"/docs/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:(0,a.jsx)(s.em,{children:"Consensus Nodes Ranking & Status Management"})})," ",(0,a.jsx)(s.em,{children:"section of KIRA\u2019s slashing module."})]}),"\n",(0,a.jsx)(s.h3,{id:"326c9ccbe2aa4040adb5182e269872b2",children:"Consensus Node Faq"}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.a,{href:"https://hub.cosmos.network/main/validators/validator-faq.html",children:"Cosmos Validator FAQ"})," provides a wealth of information about being a consensus node for anyone interested in learning more about this role."]}),"\n",(0,a.jsx)(s.h2,{id:"0ebbc1da2a434d80be94371717737f36",children:"Parameters"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Staking pool properties"})}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"NAME"})}),(0,a.jsx)(s.th,{children:"TYPE"}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"id"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"int"})}),(0,a.jsx)(s.td,{children:"Pool\u2019s ID"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"commission"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"int"})}),(0,a.jsxs)(s.td,{children:["Defines the staking pool\u2019s commission rate over block rewards (cf. ",(0,a.jsx)(s.a,{href:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:"Untitled"}),")"]})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"enabled"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.em,{children:(0,a.jsx)(s.code,{children:"boolean"})})}),(0,a.jsxs)(s.td,{children:["Defines if the pool is enabled or disabled. If set to ",(0,a.jsx)(s.code,{children:"false"})," the pool doesn\u2019t accumulate any reward and delegators are only able to unstake."]})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"b3d08c63c9754edd925df694e86eeeee",children:"CLI Syntax & Examples"}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,a.jsx)(s.a,{href:"/docs/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,a.jsx)(s.em,{children:"Roles & Permissions"})})," ",(0,a.jsx)(s.em,{children:"documentation for more details."})," ",(0,a.jsx)(s.em,{children:(0,a.jsx)(s.code,{children:"$SIGNER"})})," ",(0,a.jsx)(s.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,a.jsx)(s.em,{children:(0,a.jsx)(s.code,{children:"$FLAGS_TX"})})," ",(0,a.jsx)(s.em,{children:"and"})," ",(0,a.jsxs)(s.em,{children:[(0,a.jsx)(s.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,a.jsx)(s.em,{children:"section"})]})}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsxs)(i.Z,{value:"transactions",label:"Transactions",children:[(0,a.jsx)(s.h2,{id:"55ed760972db41338ee3c66e283156af",children:"Transactions"}),(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.code,{children:"claim-validator-seat"})}),(0,a.jsx)(s.th,{children:"Submit a transaction to claim a consensus node seat in KIRA\u2019s consensus node set."})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"upsert-staking-pool"})}),(0,a.jsx)(s.td,{children:"Submit a transaction to create or edit a staking pool as a consensus node."})]})})]}),(0,a.jsx)(s.h4,{id:"3fe4d6fb4aac4669aa4033d67a92121f",children:"Claiming a Consensus Node Seat"}),(0,a.jsxs)(s.p,{children:["To claim a seat in the consensus node set, use the ",(0,a.jsx)(s.code,{children:"claim-validator-seat"})," CLI command. This requires a ",(0,a.jsx)(s.code,{children:"2"})," permission, obtainable through governance (mainnet) or a sudo account (testnet). Ensure your node's unique moniker identifier is pre-set, via the ",(0,a.jsx)(s.a,{href:"/docs/d482180d-165a-4c09-8c32-167f061ceb92",children:"Identity Registrar"})," module, or provide it directly in the CLI command."]}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Flags"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$MONIKER"}),": Moniker identifier of the account claiming a consensus node seat."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$PUBKEY"}),": Public key of the account claiming a consensus node seat."]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sekaid tx customstaking claim-validator-seat \\\n--from=$SIGNER $FLAGS_TX \\\n--moniker=$MONIKER [ --pubkey=$PUBKEY ]\n"})}),(0,a.jsxs)(s.p,{children:["To confirm a successful claim, use the ",(0,a.jsx)(s.a,{href:"/docs/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",children:(0,a.jsx)(s.code,{children:"validator"})})," query which should return the following:"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-json",children:'{\n  "val_key": "kiravaloper1q0fkns62jl4mfxavxug4rvsp7d4770mfkzupzp",\n  "pub_key": {\n    "@type": "/cosmos.crypto.ed25519.PubKey",\n    "key": "YMPiwZecoXe2m7UrO3hJtl51lYrMCGS+rlGuN1I7dpA="\n  },\n  "status": "ACTIVE",\n  "rank": "49",\n  "streak": "49"\n}\n'})}),(0,a.jsx)(s.h4,{id:"526b85a39e5e4895bbd8025439af5ab9",children:"Creating/editing a Staking Pool"}),(0,a.jsxs)(s.p,{children:["An ",(0,a.jsx)(s.a,{href:"/docs/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:(0,a.jsx)(s.code,{children:"active"})})," consensus node can use the ",(0,a.jsx)(s.code,{children:"upsert-staking-pool"})," transaction to create or edit its staking pool. The commission rate must be within ",(0,a.jsx)(s.code,{children:"0.01"})," (1%) to ",(0,a.jsx)(s.code,{children:"0.5"})," (50%)."]}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Args"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$VAL"}),": Address of the consensus node (",(0,a.jsx)(s.code,{children:"kiravaloper..."}),")."]}),"\n"]}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Flags"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$COMMISSION"}),": Commission rate of the staking pool."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$ENABLED"}),": Status of the staking pool (default=",(0,a.jsx)(s.code,{children:"true"}),")."]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sekaid tx multistaking upsert-staking-pool \\\n--from=$SIGNER $FLAGS_TX \\\n--commission=$COMMISSION --enabled=$ENABLED \\\n$VAL\n"})})]}),(0,a.jsxs)(i.Z,{value:"queries",label:"Queries",children:[(0,a.jsx)(s.h2,{id:"10b764b83e0f475db4662aafc73454b2",children:"Queries"}),(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.code,{children:"validator"})}),(0,a.jsxs)(s.th,{children:["Query an active consensus node\u2019s information ",(0,a.jsx)(s.em,{children:"(val key"}),", ",(0,a.jsx)(s.em,{children:"rank, active status, streak)"})," using filters."]})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"validators"})}),(0,a.jsx)(s.td,{children:"Query all existing consensus nodes using specific filters."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"pools"})}),(0,a.jsxs)(s.td,{children:["Query all existing staking pools and return their respective parameters (",(0,a.jsx)(s.em,{children:"enabled, commission)"})," and current metrics (",(0,a.jsx)(s.em,{children:"total staked tokens"}),", ",(0,a.jsx)(s.em,{children:"total accumulated rewards"}),", \u2026)."]})]})]})]}),(0,a.jsx)(s.h4,{id:"628b4115df9348f692fabb4c2a105d93",children:"Consensus Node Information"}),(0,a.jsx)(s.p,{children:"Retrieve information about all consensus nodes, including their address, status, streak, and rank, with the following queries."}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Flags"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$ADDR"}),": Account address."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$VAL"}),": Node address."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$MONIKER"}),": Moniker identifier."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$STATUS"}),": Node status."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$PKEY"}),": Public key."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$PROP"}),": Proposer."]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sekaid query customstaking validators [--addr=$ADDR || --val-addr=$VAL || --moniker=$MONIKER || --status=$STATUS || --pubkey=$PKEY || --proposer=$PROP] $FLAGS_QR | jq\n"})}),(0,a.jsx)(s.p,{children:"Query a specific consensus node\u2019s information using either its account address, its node address or its moniker."}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Flags"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$ADDR"}),": Account address."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$VAL"}),": Node address."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$MONIKER"}),": Moniker identifier."]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sekaid query customstaking validator [--addr=$ADDR || --val-addr=$VAL || --moniker=$MONIKER] $FLAGS_QR | jq\n"})}),(0,a.jsx)(s.h4,{id:"39c8e4e079c149589be3a410bf93933d",children:"Staking Pool Information"}),(0,a.jsx)(s.p,{children:"Query real-time metrics and parameters of all existing staking pools."}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:"sekaid query multistaking pools $FLAGS_QR | jq\n"})})]}),(0,a.jsxs)(i.Z,{value:"governance",label:"Governance",children:[(0,a.jsx)(s.h2,{id:"a72ec328d33f4233a449cd4634882a8c",children:"Governance"}),(0,a.jsx)(s.p,{children:"There is no governance proposal for this sub-module."})]})]})]})}function f(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,s,n)=>{n.d(s,{Z:()=>i});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var t=n(5893);function i(e){let{children:s,hidden:n,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:s})}},4866:(e,s,n)=>{n.d(s,{Z:()=>y});var a=n(7294),r=n(6905),t=n(2466),i=n(6550),o=n(469),d=n(1980),c=n(7392),l=n(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:a,default:r}}=e;return{value:s,label:n,attributes:a,default:r}}))}(n);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function f(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:n}=e;const r=(0,i.k6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,d._X)(t),(0,a.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(r.location.search);s.set(t,e),r.replace({...r.location,search:s.toString()})}),[t,r])]}function b(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,t=u(e),[i,d]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!f({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:t}))),[c,h]=m({queryString:n,groupId:r}),[b,x]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,t]=(0,l.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),j=(()=>{const e=c??b;return f({value:e,tabValues:t})?e:null})();(0,o.Z)((()=>{j&&d(j)}),[j]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),x(e)}),[h,x,t]),tabValues:t}}var x=n(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=n(5893);function g(e){let{className:s,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),l=e=>{const s=e.currentTarget,n=d.indexOf(s),r=o[n].value;r!==a&&(c(s),i(r))},h=e=>{let s=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;s=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;s=d[n]??d[d.length-1];break}}s?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:o.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>d.push(e),onKeyDown:h,onClick:l,...t,className:(0,r.Z)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":a===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=t.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:t.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function k(e){const s=b(e);return(0,p.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,p.jsx)(g,{...e,...s}),(0,p.jsx)(v,{...e,...s})]})}function y(e){const s=(0,x.Z)();return(0,p.jsx)(k,{...e,children:h(e.children)},String(s))}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>i});var a=n(7294);const r={},t=a.createContext(r);function i(e){const s=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);