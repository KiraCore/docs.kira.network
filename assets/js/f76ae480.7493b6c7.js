"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[199],{1180:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>h});var a=s(5893),i=s(1151),t=s(4866),o=s(5162);const r={title:"Jailing & slashing",sidebar_position:2,slug:"/d6fee8b3-1948-493e-bbdd-796bcc996c2b"},l=void 0,c={id:"Stack/SEKAI--Backend/Modules/Slashing/Jailing-&-slashing",title:"Jailing & slashing",description:"Concept",source:"@site/tabs/Docs/Stack/SEKAI--Backend/Modules/Slashing/Jailing-&-slashing.mdx",sourceDirName:"Stack/SEKAI--Backend/Modules/Slashing",slug:"/d6fee8b3-1948-493e-bbdd-796bcc996c2b",permalink:"/docs/d6fee8b3-1948-493e-bbdd-796bcc996c2b",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Jailing & slashing",sidebar_position:2,slug:"/d6fee8b3-1948-493e-bbdd-796bcc996c2b"},sidebar:"defaultSidebar",previous:{title:"Slashing",permalink:"/docs/4672bb94-ed2b-4e45-9d33-af999825c193"},next:{title:"Consensus nodes ranks & statuses",permalink:"/docs/9f763be9-fbd3-452f-8c6e-6e418f34856f"}},d={},h=[{value:"Concept",id:"565f4e1ee9194bec9514949c8445c429",level:2},{value:"Automatic Jailing &amp; Threshold Slashing",id:"e8ce22a553f74f06b7645d8999be4ff4",level:3},{value:"Slashing and Governance Dispute Procedures",id:"252c47c531a94f06a58b55b94777f86f",level:3},{value:"Jailing &amp; Unjailing",id:"02d326b0daf940608fa5f61c6935e19c",level:4},{value:"Slashing",id:"76d940b87b0848bf821f753a5877002f",level:4},{value:"Governance Proposals Hierarchy",id:"f9febb32be5f41198c8b7756fe14513c",level:4},{value:"Slashing Amount",id:"0bad15385fb24eff9cb0bc2c5e02bf5a",level:4},{value:"Slashing Mechanism",id:"579d6eefbae4479b92e5b3b202268667",level:3},{value:"Parameters",id:"2ffbd79dca3b479899e3816d988c93c3",level:2},{value:"CLI Syntax &amp; Examples",id:"bce7d7f9bfc64f43851880529d77ac27",level:2},{value:"Transactions",id:"299caee03182495498646474b6a41509",level:2},{value:"Queries",id:"98c6f1eb65ff43e2a0d8a4698088b6ee",level:2},{value:"Slashing Proposals",id:"109f939f975f4eff99f7f7cf3ae1c324",level:4},{value:"Slashed Pools",id:"3fb8ee10273c49ae94108f23eae5b200",level:4},{value:"Slashing Parameters",id:"857c8142f32b47e380fff730ccab213b",level:4},{value:"Validator Signing Information",id:"ce70267e68794ed18a221bed3952444e",level:4},{value:"Governance",id:"08e02bdedc884132a7b9aec6b77fe999",level:2},{value:"Creating an Unjailing Request Proposal",id:"a37842ba091c4bb993f308d64a839b47",level:4},{value:"Creating a Slashing Proposal",id:"29215838099c4a21b617e91538c858af",level:4},{value:"Submitting a Slashing Proposal Refutation",id:"ea31a4280969443da49d5987e1da50f8",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"565f4e1ee9194bec9514949c8445c429",children:"Concept"}),"\n",(0,a.jsx)(n.p,{children:"Building on the broader concepts explored in our guide, KIRA\u2019s governance-permissioned validator set, a standout feature of its consensus system, addresses the inherent challenges in permissionless environments where any participant can become a validator and removal is nearly impossible. In Kira's framework, malicious validators can be permanently removed by their peers, a process made feasible because voting power isn\u2019t based on the size of one's stake. This ensures that coin ownership doesn't lead to disproportionate influence. Consequently, Kira specifically targets instances of double-signing for potential slashing. By mitigating the risk of severe penalties for minor or unintentional errors, Kira's model aims to foster a strong, diverse validator community, enhancing network decentralization and resilience. This approach not only challenges the traditional necessity for harsh slashing in maintaining network integrity but also seeks a harmonious balance between security and inclusivity. Aligned with Byzantine principles, Kira embraces the inevitability of human error and system failures, showcasing a more adaptable and empathetic approach to network governance."}),"\n",(0,a.jsx)(n.h3,{id:"e8ce22a553f74f06b7645d8999be4ff4",children:"Automatic Jailing & Threshold Slashing"}),"\n",(0,a.jsxs)(n.p,{children:["In KIRA, double-signing is the only penalized fault for consensus nodes. Consensus nodes going offline will not be punished and/or slashed as explained in the ",(0,a.jsx)(n.a,{href:"/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:"Consensus nodes ranks & statuses"}),'. Double-signing occurs when a consensus node proposes or participates in the production of two different blocks at the same block height, creating or attempting to create a fork in the blockchain. A fork is when there are two or more valid chain histories that could be followed, and it\'s not immediately clear which one should be considered the "correct" chain, a.k.a canonical chain. Forks can disrupt network observers, such as light nodes, who do not have the resources to fully validate transactions and therefore rely on a single chain for their own operations. If a light node is unable to determine which fork is the canonical chain, it may be vulnerable to attacks where the same funds are spent multiple times, once on each fork.']}),"\n",(0,a.jsx)(n.p,{children:"However, double-signing does not necessarily mean that a consensus node is acting maliciously and in this case slashing doesn\u2019t actually add any security to the network. There can be various reasons for unintentional misbehavior, such as:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Launching the node before it is fully synced"}),"\n",(0,a.jsx)(n.li,{children:"Application or hardware faults"}),"\n",(0,a.jsx)(n.li,{children:"Misconfiguration"}),"\n",(0,a.jsx)(n.li,{children:"Accidentally deploying two nodes with the same key"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["For this reason, KIRA does not automatically punish nodes for double-signing. Instead, they are ",(0,a.jsx)(n.strong,{children:"automatically jailed"})," and their fate is decided by governance later on, which may choose to unjail them, permanently remove them from the consensus node set, and/or slash them in cases of coordinated attacks. This protects delegators' staked funds and minimizes the risk of accidental loss, which is important when staking valuable assets such as Bitcoin, digital fiat, or commodities. This is possible because the consensus node set is governance-permissioned and voting power is not based on the stake backing them. This means that malicious consensus nodes can be permanently removed by other consensus nodes without being able to influence governance decisions."]}),"\n",(0,a.jsxs)(n.p,{children:["To detect coordinated attacks, KIRA utilizes the concept of ",(0,a.jsx)(n.strong,{children:"threshold slashing"}),". An automatic slashing proposal only occurs if a certain number of consensus nodes double-sign within a specific time frame, with the threshold being less than 1/3 of all consensus nodes. The threshold slashing parameters, ",(0,a.jsx)(n.code,{children:"slashing_period"})," (3600 seconds by default) and ",(0,a.jsx)(n.code,{children:"max_jailed_percentage"})," (25 by default, i.e 25% of all active consensus nodes), are ",(0,a.jsx)(n.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network properties"})," that can be adjusted by governance."]}),"\n",(0,a.jsx)(n.h3,{id:"252c47c531a94f06a58b55b94777f86f",children:"Slashing and Governance Dispute Procedures"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"Slashing a staking pool is a permanent operation. Once a pool has been slashed, it is no longer possible to add deposits to it, and there is no way to return it to its original state."})}),"\n",(0,a.jsx)(n.p,{children:"In KIRA, slashing is governed, meaning that the decision to slash and the amount to be slashed is determined by the governance and evaluated on a case-by-case basis to prevent cases where software bugs could result in the loss of delegator assets. KIRA's governance-permissioned nature reduces the difficulty and risk of running a node, making it accessible to anyone, even those with little experience, rather than requiring expensive cloud provider setups."}),"\n",(0,a.jsx)(n.h4,{id:"02d326b0daf940608fa5f61c6935e19c",children:"Jailing & Unjailing"}),"\n",(0,a.jsxs)(n.p,{children:["If a consensus node is caught double-signing, it will be automatically jailed by the network and its status will be changed to ",(0,a.jsx)(n.code,{children:"jailed"}),". This does not necessarily mean that the node will be slashed, as double-signing is not automatically considered malicious. While a node is ",(0,a.jsx)(n.code,{children:"jailed"}),", it (or any governance member with proposal creation permission 20) can request to be unjailed through a governance proposal using ",(0,a.jsx)(n.code,{children:"sekaid tx customstaking proposal unjail-validator"}),". This request must be made within a certain time frame, defined by the ",(0,a.jsx)(n.code,{children:"unjail_max_time"})," network property (600 seconds by default). If the request is not made or accepted within this time frame, the node will become permanently jailed. The process of unjailing a node is a judgment proposal, meaning that all governance members voting permissions 21 and consensus nodes with ",(0,a.jsx)(n.code,{children:"active"})," status, can vote on whether or not the node should be unjailed."]}),"\n",(0,a.jsxs)(n.p,{children:["While it is ",(0,a.jsx)(n.code,{children:"jailed"}),", a node cannot propose blocks, doesn\u2019t accumulate rewards, cannot receive any new delegations and cannot vote on any proposals. Meanwhile other nodes can wait to see if there is evidence of double-signing collusion with other potential malicious nodes or other suspicious activity during that time window."]}),"\n",(0,a.jsx)(n.h4,{id:"76d940b87b0848bf821f753a5877002f",children:"Slashing"}),"\n",(0,a.jsxs)(n.p,{children:["If a slashing decision is being considered, all governance members with proposal creation permission 57 can rise a slashing proposal using ",(0,a.jsx)(n.code,{children:"proposal-slash-validator"})," to slash and permanently remove the node from the active consensus node set. However, if ",(0,a.jsx)(n.code,{children:"max_jailed_percentage"})," is reached, a slashing proposal for each incriminated consensus node is automatically rised by the network."]}),"\n",(0,a.jsxs)(n.p,{children:['While a slashing proposal is ongoing, the consensus node under investigation can submit counter-evidence, or "refutation," using the ',(0,a.jsx)(n.code,{children:"refute-slashing-proposal"})," method by providing an URL or CID to an IPFS resource. Once the counter-evidence is submitted, it cannot be updated again. If a governance proposal results in a slashing event, the consensus node can no longer be unjailed and its staking pool is slashed and becomes inoperative. Users can only undelegate their existing stake in this case."]}),"\n",(0,a.jsx)(n.p,{children:"A slashing proposal can have one of the following outcome:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the slashing proposal ends without reaching the required quorum, the consensus node is not slashed and can request to be unjailed by rising an unjailing proposal."}),"\n",(0,a.jsxs)(n.li,{children:["If it ends by reaching the required quorum :","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"If the governance decided not to slash, the node is not slashed and can request to be unjailed."}),"\n",(0,a.jsx)(n.li,{children:"If the governance decided to slash, the node is slashed by the percentage determined in the proposal and cannot be unjailed."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"f9febb32be5f41198c8b7756fe14513c",children:"Governance Proposals Hierarchy"}),"\n",(0,a.jsx)(n.p,{children:"Slashing proposals take precedence over unjailing proposals. If a slashing proposal is raised for a given consensus node, any active unjailing proposals related to this node are cancelled, and no new unjailing proposals can be raised until the slashing proposal is finalized. This hierarchical relationship ensures that no unjailing action can be finalized before a slashing action, which prevents malicious consensus nodes from starting to produce blocks and receive new delegations before a potential slashing event. This helps to prevent difficult-to-handle situations where malicious nodes are able to gain an advantage before being punished for their actions or having to slash new, innocent delegators."}),"\n",(0,a.jsx)(n.h4,{id:"0bad15385fb24eff9cb0bc2c5e02bf5a",children:"Slashing Amount"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:["Jailed nodes being slashed as well as any of the others colluders listed in the proposal cannot vote on any proposal as their status is ",(0,a.jsx)(n.code,{children:"jailed"})," and not ",(0,a.jsx)(n.code,{children:"active"}),"."]})}),"\n",(0,a.jsxs)(n.p,{children:["If a slashing proposal is rised, all governance members with voting permission 58 and consensus nodes with the active ",(0,a.jsx)(n.a,{href:"/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:"status"}),", can vote by providing a slashing percentage as an input. This input is limited by the maximum slashing percentage ",(0,a.jsx)(n.code,{children:"max_slashing_percentage"}),", which is a configurable parameter in the network properties. This percentage can range from 0% to 100%, with a default value of 0.5%. This limit is meant to provide delegators to have a quantifiable manner of measuring their potential risks when staking. The exact percentage of slashing for a given proposal is determined by taking the median of all votes inputs. For the slashing to occur, more than 50% of all governance members participating in the proposal process must vote with a non-zero slash."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["If the ",(0,a.jsx)(n.code,{children:"max_slashing_percentage"})," is set to ",(0,a.jsx)(n.code,{children:"0.1"})," and the slashing votes are: ",(0,a.jsx)(n.code,{children:"0, 0, 0, 0, 0, 0.5, 1, 0.5, 0.25, 0.25, 0.25, 0.75, 0.01, 0, 0.25"}),"  then the ",(0,a.jsx)(n.a,{href:"https://www.calculator.net/mean-median-mode-range-calculator.html",children:"median "}),"is ",(0,a.jsx)(n.code,{children:"0.25"})," but the final slashing ",(0,a.jsx)(n.code,{children:"10%"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["If the ",(0,a.jsx)(n.code,{children:"max_slashing_percentage"})," is set to ",(0,a.jsx)(n.code,{children:"0.5"})," and the slashing votes are: ",(0,a.jsx)(n.code,{children:"0, 0, 0, 0.01, 0.01, 0.03, 0.03, 1, 0.04, 0.05, 0.07, 0.08, 1, 0.1"})," then the ",(0,a.jsx)(n.a,{href:"https://www.calculator.net/mean-median-mode-range-calculator.html",children:"median "}),"is ",(0,a.jsx)(n.code,{children:"0.35"})," and the final slashing is ",(0,a.jsx)(n.code,{children:"3.5%"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["If the ",(0,a.jsx)(n.code,{children:"max_slashing_percentage"})," is set to ",(0,a.jsx)(n.code,{children:"0.25"})," and the slashing votes are: ",(0,a.jsx)(n.code,{children:"0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0.5, 0.01, 0, 0, 1"}),", then the ",(0,a.jsx)(n.a,{href:"https://www.calculator.net/mean-median-mode-range-calculator.html",children:"median "}),"is ",(0,a.jsx)(n.code,{children:"0"})," and no slashing takes place."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Slashing proposal structure"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n\t"offender": "kiraXXX...XXX",           // validator address that commited a fault\n\t"staking_pool_id": <integer>,\n  "misbehaviour_time": <timestamp>,      // time at which misbehaviour occured\n  "misbehaviour_type": "double-signing", //string type of evidence (in the future there can be different types)\n  "jailed_percentage": <decimal>,        // percentage of validators that was jailed (colluded)\n  "colluders": [                         // list of validator who colluded with a misbehaving validator\n\t\t"kiraXXX...XXX",\n\t\t"kiraXXX...XXX",\n\t\t...,\n\t\t"kiraXXX...XXX"\n\t],\n  "refutation": "<string/url/CID>"       // validator supplied counter-evidence proving that his behaviour was not intentionally malicious,\n  "votes": [\n    { "voter": "kiraXXX...XXX", "slash": <decimal> },\n\t\t{ "voter": "kiraXXX...XXX", "slash": 0.5 },\n\t\t...\n\t\t{ "voter": "kiraXXX...XXX", "slash": 0 }\n\t]\n}\n'})}),"\n",(0,a.jsx)(n.h3,{id:"579d6eefbae4479b92e5b3b202268667",children:"Slashing Mechanism"}),"\n",(0,a.jsxs)(n.p,{children:["If a governance proposal results in a slashing event, the decided percentage will be taken off all staked tokens within the staking pool. The derivative tokens representing each one of these staked tokens will also lose their 1-to-1 peg. For example, if consensus node V1 is being slashed by 5%, then unstaking 2 of any tokens XYZ would only return 1.9 XYZ, similar to the concept of impermanent loss in automated market maker systems like Uniswap. KIRA's slashing mechanism uses a ",(0,a.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Floor_and_ceiling_functions",children:"ceiling function"})," to avoid transferring 0 amounts and to accommodate singular units and non-fungible tokens. A specific mechanism for non-fungible tokens will be implemented in a future update. The slashed tokens, including KIRA's native token KEX, are transferred to a governance-controlled community spending pool where a decision can be made regarding their final fate, such as giving them away to the community or refunding them in the case of unfair slashing. The information about the slashing, including the percentage and the result of the governance proposal, is recorded in the staking pool and can be ",(0,a.jsx)(n.a,{href:"/d6fee8b3-1948-493e-bbdd-796bcc996c2b",children:"queried"})," for reference."]}),"\n",(0,a.jsx)(n.h2,{id:"2ffbd79dca3b479899e3816d988c93c3",children:"Parameters"}),"\n",(0,a.jsx)(n.h2,{id:"bce7d7f9bfc64f43851880529d77ac27",children:"CLI Syntax & Examples"}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,a.jsx)(n.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,a.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,a.jsx)(n.em,{children:"documentation for more details."})," ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"$SIGNER"})})," ",(0,a.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,a.jsx)(n.em,{children:(0,a.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,a.jsx)(n.em,{children:"and"})," ",(0,a.jsxs)(n.em,{children:[(0,a.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,a.jsx)(n.em,{children:"section"})]})}),"\n",(0,a.jsxs)(t.Z,{children:[(0,a.jsxs)(o.Z,{value:"transactions",label:"Transactions",children:[(0,a.jsx)(n.h2,{id:"299caee03182495498646474b6a41509",children:"Transactions"}),(0,a.jsx)(n.p,{children:"There is no transactions other than the governance proposals for this sub-module."})]}),(0,a.jsxs)(o.Z,{value:"queries",label:"Queries",children:[(0,a.jsx)(n.h2,{id:"98c6f1eb65ff43e2a0d8a4698088b6ee",children:"Queries"}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.code,{children:"slash-proposals"})}),(0,a.jsx)(n.th,{children:"Query slash proposals."})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"slashed-staking-pools"})}),(0,a.jsx)(n.td,{children:"Query slashed staking pools."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"params"})}),(0,a.jsx)(n.td,{children:"Query the current slashing parameters."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"signing-info"})}),(0,a.jsx)(n.td,{children:"Query a validator's signing information."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"signing-infos"})}),(0,a.jsx)(n.td,{children:"Query signing information of all validators."})]})]})]}),(0,a.jsx)(n.h4,{id:"109f939f975f4eff99f7f7cf3ae1c324",children:"Slashing Proposals"}),(0,a.jsx)(n.p,{children:"Query all active proposals for slashing."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing slash-proposals $FLAGS_QR | jq\n"})}),(0,a.jsx)(n.h4,{id:"3fb8ee10273c49ae94108f23eae5b200",children:"Slashed Pools"}),(0,a.jsx)(n.p,{children:"Query pools that have been subjected to slashing penalties."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing slashed-staking-pools $FLAGS_QR | jq\n"})}),(0,a.jsx)(n.h4,{id:"857c8142f32b47e380fff730ccab213b",children:"Slashing Parameters"}),(0,a.jsx)(n.p,{children:"Query the current parameters of the slashing module."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing params $FLAGS_QR | jq\n"})}),(0,a.jsx)(n.h4,{id:"ce70267e68794ed18a221bed3952444e",children:"Validator Signing Information"}),(0,a.jsx)(n.p,{children:"Query the signing information for a specific validator."}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Args"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$ADDRESS"}),": Validator\u2019s address"]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing signing-info $ADDRESS $FLAGS_QR | jq\n"})}),(0,a.jsx)(n.p,{children:"Query the signing information for all validators."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid query customslashing signing-infos $FLAGS_QR | jq\n"})})]}),(0,a.jsxs)(o.Z,{value:"governance",label:"Governance",children:[(0,a.jsx)(n.h2,{id:"08e02bdedc884132a7b9aec6b77fe999",children:"Governance"}),(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:(0,a.jsx)(n.code,{children:"proposal unjail-validator"})}),(0,a.jsx)(n.th,{children:"Create a proposal to unjail a consensus node."})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"proposal-slash-validator"})}),(0,a.jsx)(n.td,{children:"Create a proposal to slash a validator."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"refute-slash-validator-proposal"})}),(0,a.jsx)(n.td,{children:"Refute a slash validator proposal."})]})]})]}),(0,a.jsx)(n.h4,{id:"a37842ba091c4bb993f308d64a839b47",children:"Creating an Unjailing Request Proposal"}),(0,a.jsx)(n.p,{children:"Submit a proposal for unjailing a jailed consensus node. Requires permission 20. Jailed nodes cannot vote on their own unjailing proposals."}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Args"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$OFFENDER"}),": Address of the jailed node."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$REFUTATION"}),": URL or CID to IPFS resource explaining the case."]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"bashCopy code\nsekaid tx customstaking proposal unjail-validator \\\n--from=$SIGNER $FLAGS_TX \\\n$OFFENDER $REFUTATION\n"})}),(0,a.jsx)(n.h4,{id:"29215838099c4a21b617e91538c858af",children:"Creating a Slashing Proposal"}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"proposal-slash-validator"})," CLI allows any users with permission 57 to create a proposal to slash a consensus node. The ",(0,a.jsx)(n.code,{children:"\u2014refutation"})," is left blank and is meant to be updated by the consensus node subject to the proposal later on. The ",(0,a.jsx)(n.code,{children:"\u2014colluders"})," flags is usually left blank and is meant for the network to provide the list of colluders when ",(0,a.jsx)(n.code,{children:"max_jailed_percentage"})," is reached and automatic mass-proposal event is triggered."]}),(0,a.jsxs)(n.p,{children:["To vote on the proposal, an account must have permission 58. However, consensus nodes that have been jailed cannot vote on the proposal because their status is ",(0,a.jsx)(n.code,{children:"jailed"})," and not ",(0,a.jsx)(n.code,{children:"active"}),". Voters must provide a percentage via ",(0,a.jsx)(n.code,{children:"--jail-percentage"})," (decimal value between 0 and 1) by which they believe the staking pool of the consensus node should be slashed."]}),(0,a.jsx)(n.p,{children:"Flags"}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$TITLE"}),": Title of the proposal."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$DESCRIPTION"}),": Description of the proposal."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$OFFENDER"}),": Address of the offending node."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$STAKINGPOOLID"}),": ID of the staking pool associated with the node."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$MISBEHAVIOURTIME"}),": Timestamp of the misconduct."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$MISBEHAVIOURTYPE"}),": Type of misconduct."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$JAILPERCENTAGE"}),": Penalty percentage."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$COLLUDERS"}),": Addresses of any colluders."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$REFUTATION"}),": URL or CID to IPFS resource for refutation."]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"sekaid tx customslashing proposal-slash-validator \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n--offender=$OFFENDER --staking-pool-id=$STAKINGPOOLID \\\n--misbehaviour-time=$MISBEHAVIOURTIME--misbehaviour-type=$MISBEHAVIOURTYPE \\\n--jail-percentage=$JAILPERCENTAGE --colluders=$COLLUDERS --refutation=$REFUTATION\n"})}),(0,a.jsx)(n.h4,{id:"ea31a4280969443da49d5987e1da50f8",children:"Submitting a Slashing Proposal Refutation"}),(0,a.jsxs)(n.p,{children:["Only consensus nodes whose staking pool is being subject to a slashing proposal have the ability to submit a refutation using ",(0,a.jsx)(n.code,{children:"refute-slash-validator-proposal"})," by providing a URL or CID to an IPFS resource (string of up to 2048 characters) explaining the circumstances under which the fault occurred. Once submitted, the proposal\u2019s ",(0,a.jsx)(n.code,{children:"\u2014refutation"})," flag is updated and cannot be modified anymore."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Flags"})}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"$REFUTATION"}),": URL or CID to an IPFS resource for refutation."]}),"\n"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"sekaid tx customslashing refute-slash-validator-proposal \\\n--from=$SIGNER $FLAGS_TX \\\n--refutation=$REFUTATION\n"})})]})]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>o});s(7294);var a=s(6905);const i={tabItem:"tabItem_Ymn6"};var t=s(5893);function o(e){let{children:n,hidden:s,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>w});var a=s(7294),i=s(6905),t=s(2466),o=s(6550),r=s(469),l=s(1980),c=s(7392),d=s(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:i}}=e;return{value:n,label:s,attributes:a,default:i}}))}(s);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:s}=e;const i=(0,o.k6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,l._X)(t),(0,a.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(i.location.search);n.set(t,e),i.replace({...i.location,search:n.toString()})}),[t,i])]}function g(e){const{defaultValue:n,queryString:s=!1,groupId:i}=e,t=u(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:t}))),[c,h]=f({queryString:s,groupId:i}),[g,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,t]=(0,d.Nk)(s);return[i,(0,a.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:i}),m=(()=>{const e=c??g;return p({value:e,tabValues:t})?e:null})();(0,r.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,t]),tabValues:t}}var b=s(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=s(5893);function x(e){let{className:n,block:s,selectedValue:a,selectValue:o,tabValues:r}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.o5)(),d=e=>{const n=e.currentTarget,s=l.indexOf(n),i=r[s].value;i!==a&&(c(n),o(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;n=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;n=l[s]??l[l.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},n),children:r.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...t,className:(0,i.Z)("tabs__item",m.tabItem,t?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:i}=e;const t=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=t.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:t.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,j.jsx)(x,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>o});var a=s(7294);const i={},t=a.createContext(i);function o(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);