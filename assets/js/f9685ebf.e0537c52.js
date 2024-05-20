"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6654],{240:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var a=s(5893),i=s(1151),o=s(4866),t=s(5162);const r={title:"Jailing & Slashing Procedures",sidebar_position:1,slug:"jailing--slashing-procedures"},l=void 0,d={id:"backend---sekai/modules/slashing/jailing-&-slashing-procedures",title:"Jailing & Slashing Procedures",description:"Automatic Jailing and Threshold Slashing",source:"@site/tabs/docs/backend---sekai/modules/slashing/jailing-&-slashing-procedures.mdx",sourceDirName:"backend---sekai/modules/slashing",slug:"/backend---sekai/modules/slashing/jailing--slashing-procedures",permalink:"/docs/backend---sekai/modules/slashing/jailing--slashing-procedures",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/slashing/jailing--slashing-procedures&page-local=backend---sekai/modules/slashing/jailing-&-slashing-procedures.mdx",tags:[],version:"current",lastUpdatedAt:1716175504,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:1,frontMatter:{title:"Jailing & Slashing Procedures",sidebar_position:1,slug:"jailing--slashing-procedures"},sidebar:"defaultSidebar",previous:{title:"Concept",permalink:"/docs/backend---sekai/modules/slashing/concept"},next:{title:"Consensus Nodes Ranking & Status Management",permalink:"/docs/backend---sekai/modules/slashing/consensus-nodes-ranking--status-management"}},c={},h=[{value:"Automatic Jailing and Threshold Slashing",id:"e8ce22a553f74f06b7645d8999be4ff4",level:3},{value:"Slashing and Governance Dispute Procedures",id:"252c47c531a94f06a58b55b94777f86f",level:3},{value:"Unjailing Process",id:"02d326b0daf940608fa5f61c6935e19c",level:4},{value:"Slashing Proposals and Outcomes",id:"76d940b87b0848bf821f753a5877002f",level:4},{value:"Governance Proposal Hierarchy",id:"f9febb32be5f41198c8b7756fe14513c",level:4},{value:"Slashing Amount",id:"0bad15385fb24eff9cb0bc2c5e02bf5a",level:4},{value:"Slashing Mechanism",id:"579d6eefbae4479b92e5b3b202268667",level:3},{value:"Parameters",id:"2ffbd79dca3b479899e3816d988c93c3",level:2},{value:"CLI Syntax &amp; Examples",id:"bce7d7f9bfc64f43851880529d77ac27",level:2},{value:"Transactions",id:"299caee03182495498646474b6a41509",level:2},{value:"Queries",id:"98c6f1eb65ff43e2a0d8a4698088b6ee",level:2},{value:"Slashing Proposals",id:"109f939f975f4eff99f7f7cf3ae1c324",level:4},{value:"Slashed Pools",id:"3fb8ee10273c49ae94108f23eae5b200",level:4},{value:"Validator Signing Information",id:"ce70267e68794ed18a221bed3952444e",level:4},{value:"Governance",id:"08e02bdedc884132a7b9aec6b77fe999",level:2},{value:"Creating an Unjailing Request Proposal",id:"a37842ba091c4bb993f308d64a839b47",level:4},{value:"Creating a Slashing Proposal",id:"29215838099c4a21b617e91538c858af",level:4},{value:"Submitting a Slashing Proposal Refutation",id:"ea31a4280969443da49d5987e1da50f8",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"e8ce22a553f74f06b7645d8999be4ff4",children:"Automatic Jailing and Threshold Slashing"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Consensus nodes going offline are not punished as explained in the ",(0,a.jsx)(n.a,{href:"/docs/backend---sekai/modules/slashing/consensus-nodes-ranking--status-management",children:"Consensus Nodes Ranking & Status Management"}),"."]})}),"\n",(0,a.jsx)(n.p,{children:'In KIRA, there are two potential punishments for consensus nodes - slashing of stakes and jailing. Slashing is never an automatic consequence, while jailing is an automatic punishment that only triggers for the fault of double-signing. Double-signing occurs when a consensus node proposes or participates in the production of two different blocks at the same block height, creating or attempting to create a fork in the blockchain. A fork is when there are two or more valid chain histories that could be followed, and it\'s not immediately clear which one should be considered the "correct" chain, a.k.a canonical chain. Forks can disrupt network observers, such as light nodes, who do not have the resources to fully validate transactions and therefore rely on a single chain for their own operations. If a light node is unable to determine which fork is the canonical chain, it may be vulnerable to attacks where the same funds are spent multiple times, once on each fork.'}),"\n",(0,a.jsx)(n.p,{children:"However, double-signing does not necessarily mean that a consensus node is acting maliciously and in this case slashing doesn\u2019t actually add any security to the network. There can be various reasons for unintentional misbehavior, such as:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Launching the node before it is fully synced"}),"\n",(0,a.jsx)(n.li,{children:"Application or hardware faults"}),"\n",(0,a.jsx)(n.li,{children:"Misconfiguration"}),"\n",(0,a.jsx)(n.li,{children:"Accidentally deploying two nodes with the same key"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For this reason, KIRA does not automatically slash nodes for double-signing. Instead, they are ",(0,a.jsx)(n.strong,{children:"automatically jailed"})," and their fate is decided by governance later on, which may choose to permanently remove them from the consensus node set and slash them in cases of coordinated attacks. This process protects delegators' staked funds and minimizes the risk of accidental loss, which is important when staking valuable assets such as Bitcoin, digital fiat, or commodities. This is facilitated by KIRA's ",(0,a.jsx)(n.a,{href:"/docs/backend---sekai/modules/multistaking/concept",children:"Multistaking module"}),", which decouples voting power from staked amounts, preventing any single consensus node from having outsized influence on governance decisions."]}),"\n",(0,a.jsxs)(n.p,{children:["To detect coordinated attacks, KIRA utilizes the concept of ",(0,a.jsx)(n.strong,{children:"threshold slashing"}),". An automatic slashing proposal only occurs if a certain number of consensus nodes double-sign within a specific time frame, with the threshold being less than 1/3 of all consensus nodes. The threshold slashing parameters, ",(0,a.jsx)(n.code,{children:"slashing_period"})," (3600 seconds by default) and ",(0,a.jsx)(n.code,{children:"max_jailed_percentage"})," (25 by default, i.e 25% of all active consensus nodes), are ",(0,a.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/network-properties",children:"network properties"})," that can be adjusted by governance."]}),"\n",(0,a.jsx)(n.h3,{id:"252c47c531a94f06a58b55b94777f86f",children:"Slashing and Governance Dispute Procedures"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Slashing a staking pool is a permanent operation. Once a slashing proposal, it is no longer possible to add deposits to it, and the node is permanently excluded from the consensus set."})}),"\n",(0,a.jsx)(n.p,{children:"In KIRA, slashing is governed, meaning that the decision to slash is never automatic and the amount to be slashed is determined by the governance and evaluated on a case-by-case basis to prevent cases where software bugs could result in the loss of delegator assets. KIRA's governance-permissioned nature reduces the difficulty and risk of running a node, making it accessible to anyone, even those with little experience, rather than requiring expensive cloud provider setups."}),"\n",(0,a.jsx)(n.h4,{id:"02d326b0daf940608fa5f61c6935e19c",children:"Unjailing Process"}),"\n",(0,a.jsxs)(n.p,{children:["If a consensus node is caught double-signing, it will be automatically jailed by the network and its status will be changed to ",(0,a.jsx)(n.code,{children:"jailed"}),". This does not necessarily mean that the node will be slashed, as double-signing is not automatically considered malicious. While a node is ",(0,a.jsx)(n.code,{children:"jailed"}),", it (or any governance member with proposal creation permission 20) can request to be unjailed through a governance proposal using ",(0,a.jsx)(n.code,{children:"sekaid tx customstaking proposal unjail-validator"}),". This request must be made within a certain time frame, defined by the ",(0,a.jsx)(n.code,{children:"unjail_max_time"})," network property (600 seconds by default). If the request is not made or accepted within this time frame, the node will become permanently jailed. The process of unjailing a node is a judgment proposal, meaning that all governance members voting permissions 21 and consensus nodes with ",(0,a.jsx)(n.code,{children:"active"})," status, can vote on whether or not the node should be unjailed."]}),"\n",(0,a.jsxs)(n.p,{children:["While it is ",(0,a.jsx)(n.code,{children:"jailed"}),", a node cannot propose blocks, doesn\u2019t accumulate rewards, cannot receive any new delegations and cannot vote on any proposals. Meanwhile other nodes can wait to see if there is evidence of double-signing collusion with other potential malicious nodes or other suspicious activity during that time window."]}),"\n",(0,a.jsx)(n.h4,{id:"76d940b87b0848bf821f753a5877002f",children:"Slashing Proposals and Outcomes"}),"\n",(0,a.jsxs)(n.p,{children:["Governance members with the appropriate permissions (57) can raise a slashing proposal (",(0,a.jsx)(n.code,{children:"proposal-slash-validator"}),") to permanently remove a consensus node from the active set, either due to malicious behavior, lack of resources causing consensus issues, or any other reason deemed valid by governance. However, if a coordinated attack is detected, (i.e. ",(0,a.jsx)(n.code,{children:"max_jailed_percentage"})," is reached within ",(0,a.jsx)(n.code,{children:"slashing_period"}),"), the network will automatically raise slashing proposals for each incriminated node."]}),"\n",(0,a.jsxs)(n.p,{children:['While a slashing proposal is ongoing, the consensus node under investigation can submit counter-evidence, or "refutation," using the ',(0,a.jsx)(n.code,{children:"refute-slashing-proposal"})," method by providing an URL or CID to an IPFS resource. Once the counter-evidence is submitted, ",(0,a.jsx)("u",{children:"it cannot be updated again"}),". If a governance proposal results in a slashing event, the consensus node can no longer be unjailed and its staking pool is slashed and becomes inoperative. Users can only undelegate their existing stake in this case."]}),"\n",(0,a.jsx)(n.p,{children:"A slashing proposal can have one of the following outcome:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["If a consensus node is not currently jailed when a slashing proposal is raised against it, the proposal outcomes are:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the proposal does not reach quorum, no further action is taken."}),"\n",(0,a.jsx)(n.li,{children:"If the proposal reaches quorum and slashing is approved, the node is permanently evicted from the consensus set and its staking pool is slashed."}),"\n",(0,a.jsx)(n.li,{children:"If the proposal reaches quorum but slashing is not approved, the node is permanently evicted but not slashed."}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["If a consensus node is already jailed when a slashing proposal is raised, it can only request to be unjailed by raising an unjailing proposal if:","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The slashing proposal does not reach quorum, or"}),"\n",(0,a.jsx)(n.li,{children:"The slashing proposal reaches quorum but the governance votes not to slash"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"In cases where the slashing proposal reaches quorum and slashing is approved, the jailed node cannot request unjailing and its staking pool will be slashed."}),"\n",(0,a.jsx)(n.h4,{id:"f9febb32be5f41198c8b7756fe14513c",children:"Governance Proposal Hierarchy"}),"\n",(0,a.jsx)(n.p,{children:"Slashing proposals take precedence over unjailing proposals. If a slashing proposal is raised for a given consensus node, any active unjailing proposals related to this node are cancelled, and no new unjailing proposals can be raised until the slashing proposal is finalized. This hierarchical relationship ensures that no unjailing action can be finalized before a slashing action, which prevents malicious consensus nodes from starting to produce blocks and receive new delegations before a potential slashing event. This helps to prevent difficult-to-handle situations where malicious nodes are able to gain an advantage before being punished for their actions or having to slash new, innocent delegators."}),"\n",(0,a.jsx)(n.h4,{id:"0bad15385fb24eff9cb0bc2c5e02bf5a",children:"Slashing Amount"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Jailed nodes being slashed as well as any of the others colluders listed in the proposal cannot vote on any proposal as their status is ",(0,a.jsx)(n.code,{children:"jailed"})," and not ",(0,a.jsx)(n.code,{children:"active"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["If a slashing proposal is raised, all governance members with voting permission 58 and consensus nodes with the active ",(0,a.jsx)(n.a,{href:"/docs/backend---sekai/modules/slashing/consensus-nodes-ranking--status-management",children:"status"}),", can vote by providing a slashing percentage as an input. This input is limited by the maximum slashing percentage ",(0,a.jsx)(n.code,{children:"max_slashing_percentage"}),", which is a configurable parameter in the network properties. This percentage can range from 0% to 100%, with a default value of 0.5%. This limit is meant to provide delegators to have a quantifiable manner of measuring their potential risks when staking. The exact percentage of slashing for a given proposal is determined by taking the median of all votes inputs. For the slashing to occur, more than 50% of all governance members participating in the proposal process must vote with a non-zero slash."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If the ",(0,a.jsx)(n.code,{children:"max_slashing_percentage"})," is set to ",(0,a.jsx)(n.code,{children:"0.1"})," and the slashing votes are: ",(0,a.jsx)(n.code,{children:"0, 0, 0, 0, 0, 0.5, 1, 0.5, 0.25, 0.25, 0.25, 0.75, 0.01, 0, 0.25"}),"  then the ",(0,a.jsx)(n.a,{href:"https://www.calculator.net/mean-median-mode-range-calculator.html",children:"median "}),"is ",(0,a.jsx)(n.code,{children:"0.25"})," but the final slashing ",(0,a.jsx)(n.code,{children:"10%"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["If the ",(0,a.jsx)(n.code,{children:"max_slashing_percentage"})," is set to ",(0,a.jsx)(n.code,{children:"0.5"})," and the slashing votes are: ",(0,a.jsx)(n.code,{children:"0, 0, 0, 0.01, 0.01, 0.03, 0.03, 1, 0.04, 0.05, 0.07, 0.08, 1, 0.1"})," then the ",(0,a.jsx)(n.a,{href:"https://www.calculator.net/mean-median-mode-range-calculator.html",children:"median "}),"is ",(0,a.jsx)(n.code,{children:"0.35"})," and the final slashing is ",(0,a.jsx)(n.code,{children:"3.5%"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["If the ",(0,a.jsx)(n.code,{children:"max_slashing_percentage"})," is set to ",(0,a.jsx)(n.code,{children:"0.25"})," and the slashing votes are: ",(0,a.jsx)(n.code,{children:"0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.01, 0, 0, 1"}),", then the ",(0,a.jsx)(n.a,{href:"https://www.calculator.net/mean-median-mode-range-calculator.html",children:"median "}),"is ",(0,a.jsx)(n.code,{children:"0"})," and no slashing takes place."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"579d6eefbae4479b92e5b3b202268667",children:"Slashing Mechanism"}),"\n",(0,a.jsxs)(n.p,{children:["If a governance proposal results in a slashing event, the decided percentage will be taken off all staked tokens within the staking pool. The derivative tokens representing each one of these staked tokens will also lose their 1-to-1 peg. For example, if consensus node V1 is being slashed by 5%, then unstaking 2 of any tokens XYZ would only return 1.9 XYZ, similar to the concept of impermanent loss in automated market maker systems like Uniswap. KIRA's slashing mechanism uses a ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Floor_and_ceiling_functions",children:"ceiling function"})," to avoid transferring 0 amounts and to accommodate singular units and non-fungible tokens. A specific mechanism for non-fungible tokens will be implemented in a future update. The slashed tokens, including KIRA's native token KEX, are transferred to a governance-controlled community spending pool where a decision can be made regarding their final fate, such as giving them away to the community or refunding them in the case of unfair slashing. The information about the slashing, including the percentage and the result of the governance proposal, is recorded in the staking pool and can be ",(0,a.jsx)(n.a,{href:"/docs/backend---sekai/modules/slashing/jailing--slashing-procedures",children:"queried"})," for reference."]}),"\n",(0,a.jsx)(n.h2,{id:"2ffbd79dca3b479899e3816d988c93c3",children:"Parameters"}),"\n",(0,a.jsx)(n.h2,{id:"bce7d7f9bfc64f43851880529d77ac27",children:"CLI Syntax & Examples"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the ",(0,a.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:"Roles & Permissions"})," documentation for more details."]})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"$SIGNER"})," represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as ",(0,a.jsx)(n.code,{children:"$FLAGS_TX"})," and ",(0,a.jsx)(n.code,{children:"$FLAGS_QR"}),", see the ",(0,a.jsx)(n.a,{href:"/docs/backend---sekai/cli-guide",children:"CLI Guide"})," page."]})}),"\n",(0,a.jsxs)(o.Z,{children:[(0,a.jsxs)(t.Z,{value:"transactions",label:"Transactions",children:[(0,a.jsx)(n.h2,{id:"299caee03182495498646474b6a41509",children:"Transactions"}),(0,a.jsx)(n.p,{children:"There is no transactions other than the governance proposals for this sub-module."})]}),(0,a.jsxs)(t.Z,{value:"queries",label:"Queries",children:[(0,a.jsx)(n.h2,{id:"98c6f1eb65ff43e2a0d8a4698088b6ee",children:"Queries"}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.code,{children:"slash-proposals"})}),(0,a.jsx)(n.th,{children:"Query slash proposals."})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"slashed-staking-pools"})}),(0,a.jsx)(n.td,{children:"Query slashed staking pools."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"params"})}),(0,a.jsx)(n.td,{children:"Query the current slashing parameters."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"signing-info"})}),(0,a.jsx)(n.td,{children:"Query a validator's signing information."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"signing-infos"})}),(0,a.jsx)(n.td,{children:"Query signing information of all validators."})]})]})]}),(0,a.jsx)(n.h4,{id:"109f939f975f4eff99f7f7cf3ae1c324",children:"Slashing Proposals"}),(0,a.jsx)(n.p,{children:"Query all active proposals for slashing."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing slash-proposals $FLAGS_QR | jq\n"})}),(0,a.jsx)(n.h4,{id:"3fb8ee10273c49ae94108f23eae5b200",children:"Slashed Pools"}),(0,a.jsx)(n.p,{children:"Query pools that have been subjected to slashing penalties."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing slashed-staking-pools $FLAGS_QR | jq\n"})}),(0,a.jsx)(n.h4,{id:"ce70267e68794ed18a221bed3952444e",children:"Validator Signing Information"}),(0,a.jsx)(n.p,{children:"Query the signing information for a specific validator."}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Args"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$ADDRESS"}),": Validator\u2019s address"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing signing-info $ADDRESS $FLAGS_QR | jq\n"})}),(0,a.jsx)(n.p,{children:"Query the signing information for all validators."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing signing-infos $FLAGS_QR | jq\n"})})]}),(0,a.jsxs)(t.Z,{value:"governance",label:"Governance",children:[(0,a.jsx)(n.h2,{id:"08e02bdedc884132a7b9aec6b77fe999",children:"Governance"}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.code,{children:"proposal unjail-validator"})}),(0,a.jsx)(n.th,{children:"Create a proposal to unjail a consensus node."})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"proposal-slash-validator"})}),(0,a.jsx)(n.td,{children:"Create a proposal to slash a validator."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"refute-slash-validator-proposal"})}),(0,a.jsx)(n.td,{children:"Refute a slash validator proposal."})]})]})]}),(0,a.jsx)(n.h4,{id:"a37842ba091c4bb993f308d64a839b47",children:"Creating an Unjailing Request Proposal"}),(0,a.jsx)(n.p,{children:"Submit a proposal for unjailing a jailed consensus node. Requires permission 20. Jailed nodes cannot vote on their own unjailing proposals."}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Args"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$OFFENDER"}),": Address of the jailed node."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$REFUTATION"}),": URL or CID to IPFS resource explaining the case."]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"bashCopy code\nsekaid tx customstaking proposal unjail-validator \\\n--from=$SIGNER $FLAGS_TX \\\n$OFFENDER $REFUTATION\n"})}),(0,a.jsx)(n.h4,{id:"29215838099c4a21b617e91538c858af",children:"Creating a Slashing Proposal"}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"proposal-slash-validator"})," CLI allows any users with permission 57 to create a proposal to slash a consensus node. The ",(0,a.jsx)(n.code,{children:"\u2014refutation"})," is left blank and is meant to be updated by the consensus node subject to the proposal later on. The ",(0,a.jsx)(n.code,{children:"\u2014colluders"})," flags is usually left blank and is meant for the network to provide the list of colluders when ",(0,a.jsx)(n.code,{children:"max_jailed_percentage"})," is reached and automatic mass-proposal event is triggered."]}),(0,a.jsxs)(n.p,{children:["To vote on the proposal, an account must have permission 58. However, consensus nodes that have been jailed cannot vote on the proposal because their status is ",(0,a.jsx)(n.code,{children:"jailed"})," and not ",(0,a.jsx)(n.code,{children:"active"}),". Voters must provide a percentage via ",(0,a.jsx)(n.code,{children:"--jail-percentage"})," (decimal value between 0 and 1) by which they believe the staking pool of the consensus node should be slashed."]}),(0,a.jsx)(n.p,{children:"Flags"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$TITLE"}),": Title of the proposal."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$DESCRIPTION"}),": Description of the proposal."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$OFFENDER"}),": Address of the offending node."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$STAKINGPOOLID"}),": ID of the staking pool associated with the node."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$MISBEHAVIOURTIME"}),": Timestamp of the misconduct."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$MISBEHAVIOURTYPE"}),": Type of misconduct."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$JAILPERCENTAGE"}),": Penalty percentage."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$COLLUDERS"}),": Addresses of any colluders."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$REFUTATION"}),": URL or CID to IPFS resource for refutation."]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid tx customslashing proposal-slash-validator \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n--offender=$OFFENDER --staking-pool-id=$STAKINGPOOLID \\\n--misbehaviour-time=$MISBEHAVIOURTIME--misbehaviour-type=$MISBEHAVIOURTYPE \\\n--jail-percentage=$JAILPERCENTAGE --colluders=$COLLUDERS --refutation=$REFUTATION\n"})}),(0,a.jsx)(n.h4,{id:"ea31a4280969443da49d5987e1da50f8",children:"Submitting a Slashing Proposal Refutation"}),(0,a.jsxs)(n.p,{children:["Only consensus nodes whose staking pool is being subject to a slashing proposal have the ability to submit a refutation using ",(0,a.jsx)(n.code,{children:"refute-slash-validator-proposal"})," by providing a URL or CID to an IPFS resource (string of up to 2048 characters) explaining the circumstances under which the fault occurred. Once submitted, the proposal\u2019s ",(0,a.jsx)(n.code,{children:"\u2014refutation"})," flag is updated and cannot be modified anymore."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Flags"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$REFUTATION"}),": URL or CID to an IPFS resource for refutation."]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sekaid tx customslashing refute-slash-validator-proposal \\\n--from=$SIGNER $FLAGS_TX \\\n--refutation=$REFUTATION\n"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>t});s(7294);var a=s(6905);const i={tabItem:"tabItem_Ymn6"};var o=s(5893);function t(e){let{children:n,hidden:s,className:t}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,t),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>y});var a=s(7294),i=s(6905),o=s(2466),t=s(6550),r=s(469),l=s(1980),d=s(7392),c=s(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:i}}=e;return{value:n,label:s,attributes:a,default:i}}))}(s);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:s}=e;const i=(0,t.k6)(),o=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(i.location.search);n.set(o,e),i.replace({...i.location,search:n.toString()})}),[o,i])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,o=u(e),[t,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[d,h]=g({queryString:s,groupId:i}),[f,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,o]=(0,c.Nk)(s);return[i,(0,a.useCallback)((e=>{s&&o.set(e)}),[s,o])]}({groupId:i}),b=(()=>{const e=d??f;return p({value:e,tabValues:o})?e:null})();(0,r.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,o]),tabValues:o}}var m=s(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(5893);function x(e){let{className:n,block:s,selectedValue:a,selectValue:t,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),c=e=>{const n=e.currentTarget,s=l.indexOf(n),i=r[s].value;i!==a&&(d(n),t(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:r.map((e=>{let{value:n,label:s,attributes:o}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...o,className:(0,i.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const o=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(x,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,m.Z)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>t});var a=s(7294);const i={},o=a.createContext(i);function t(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);