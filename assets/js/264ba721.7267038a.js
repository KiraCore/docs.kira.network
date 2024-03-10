"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4508],{5150:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>h});var s=a(5893),t=a(1151),i=a(4866),r=a(5162);const d={title:"Delegators",sidebar_position:3,slug:"/94e4d0a6-8e45-469c-89a5-8ec65ca16381"},o=void 0,l={id:"Backend---SEKAI/Command-Line-Interface/Modules/Multistaking/Delegators",title:"Delegators",description:"Concept",source:"@site/tabs/Docs/Backend---SEKAI/Command-Line-Interface/Modules/Multistaking/Delegators.mdx",sourceDirName:"Backend---SEKAI/Command-Line-Interface/Modules/Multistaking",slug:"/94e4d0a6-8e45-469c-89a5-8ec65ca16381",permalink:"/docs/94e4d0a6-8e45-469c-89a5-8ec65ca16381",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/94e4d0a6-8e45-469c-89a5-8ec65ca16381&page-local=backend---sekai/command-line-interface/modules/multistaking/delegators.mdx",tags:[],version:"current",lastUpdatedAt:1710052418,formattedLastUpdatedAt:"Mar 10, 2024",sidebarPosition:3,frontMatter:{title:"Delegators",sidebar_position:3,slug:"/94e4d0a6-8e45-469c-89a5-8ec65ca16381"},sidebar:"defaultSidebar",previous:{title:"Consensus nodes & staking pools",permalink:"/docs/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b"},next:{title:"Slashing",permalink:"/docs/4672bb94-ed2b-4e45-9d33-af999825c193"}},c={},h=[{value:"Concept",id:"5c4703c095ef4be7a1ba267af6071f66",level:2},{value:"Native Liquid Staking",id:"fdb23dc5af87468898b340eda95f2ede",level:3},{value:"Staking Pools &amp; Consensus Nodes Status",id:"c898af44293e44ef96a6c6cae5ed1186",level:3},{value:"Delegating and Associated Parameters",id:"c3d993328dfe4b9e85b1f93f390796af",level:3},{value:"Registration Mechanism for Offshore Staking Pool Delegators",id:"08bfc2b8fbcf411bae24ca442fa49e6a",level:3},{value:"Managing Staking Rewards",id:"df8d14384a764c199e8d69de637577af",level:3},{value:"Claiming Rewards",id:"7e84cbf07ad941c8b29dad7f14b4884f",level:4},{value:"Enabling Auto-compounding",id:"8095488798c1432baa345bae81d3dd4e",level:4},{value:"Undelegating &amp; Cooling Period",id:"55d34613a10e460bb772b415455b2038",level:4},{value:"Delegators Push Out",id:"0a9ed94ceee64117a44cf6658c22a213",level:4},{value:"CLI Syntax &amp; Examples",id:"bf9bed7d9d334bfd9d3d2af659f3437b",level:2},{value:"Transactions",id:"82a71b23509544a2a7ed389e996d72b3",level:2},{value:"Delegating",id:"9f9b21196a384f8984764f64df053d49",level:4},{value:"Undelegating",id:"5a5b0ec50c254a57804362266ba59c01",level:4},{value:"Set Compounding Mode",id:"4a865e4b207d4b01b5d42a932989412f",level:4},{value:"Claim Rewards/pool\u2019s Derivatives",id:"a20c73c980d645b697ce49666e11ffee",level:4},{value:"Claim Undelegation",id:"d81199ad78c94ef1a1aac0d9b8d4cb3f",level:4},{value:"Claiming Matured Undelegations",id:"1c2c1213febd4a98b8c3d3e4edda0f39",level:4},{value:"Delegator Registration",id:"7e12db69b62845f19f519ccf675e7eb2",level:4},{value:"Queries",id:"ba7958814c1e4cec8d89051b5bce8d0d",level:2},{value:"Staking Pool Delegators",id:"d4c36c977d1242f4b0955e6ff9c5b439",level:4},{value:"All Staking Pool Information",id:"2570ce21001f4c8591815b04d233f18f",level:4},{value:"All Pending Undelegations",id:"78231b53b6694172857f1c9ed8917be0",level:4},{value:"Compounding Information",id:"8310aaae479a4f4e807e83e7a7db5e91",level:4},{value:"Outstanding Rewards",id:"ded77962e7e84ed398e024bfb5744e30",level:4},{value:"Governance",id:"aea5c0245c4e4bea8ecfe4c4d2b9c177",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"5c4703c095ef4be7a1ba267af6071f66",children:"Concept"}),"\n",(0,s.jsxs)(n.p,{children:["Delegators are KIRA token holders who want to participate in network security by delegating assets as collateral to one or more consensus nodes' staking pools in exchange for a share of their revenue. Because delegators share revenue and responsibility with their chosen consensus nodes, they should carefully consider which nodes to delegate to and monitor their stakes regularly. Consensus nodes can also be delegators, but they ",(0,s.jsx)("u",{children:"are not required to"}),". Staked assets are directly affected by the conduct of the elected nodes, so it is important for delegators to exercise diligence and diversification in their choices."]}),"\n",(0,s.jsx)(n.h3,{id:"fdb23dc5af87468898b340eda95f2ede",children:"Native Liquid Staking"}),"\n",(0,s.jsxs)(n.p,{children:["Consensus nodes on the Kira Network have staking pools that are designed equivalently to regular AMM liquidity pools like Uniswap, in order to achieve native liquid staking. When a certain number of tokens ",(0,s.jsx)(n.code,{children:"<denom>"})," are deposited in the staking pool of a consensus node ",(0,s.jsx)(n.code,{children:"V<ID>"}),", an equal number of derivative tokens ",(0,s.jsx)(n.code,{children:"V<ID>/<denom>"})," are issued in return (similar to AMM LP tokens). These derivative tokens ",(0,s.jsx)(n.code,{children:"V<ID>/<denom>"})," can be freely moved and traded on and off-chain, while the underlying ",(0,s.jsx)(n.code,{children:"<denom>"})," tokens remain staked. If V1 is slashed for double signing, the staked ",(0,s.jsx)(n.code,{children:"<denom>"})," tokens can either be moved to the treasury, a governance ",(0,s.jsx)(n.a,{href:"/docs/812fdf31-d225-4daf-a4cd-4501cbc00d95",children:"spending pool"})," or destroyed, while the derivative tokens ",(0,s.jsx)(n.code,{children:"V<ID>/<denom>"})," representing them would lose their 1-to-1 peg (similar to impermanent loss in AMM)."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["E.g.: If 50% of ",(0,s.jsx)(n.code,{children:"XYZ"})," tokens staked with block proposer ",(0,s.jsx)(n.code,{children:"V1"})," get slashed, unstaking 2 ",(0,s.jsx)(n.code,{children:"V1/XYZ"})," from ",(0,s.jsx)(n.code,{children:"V1"}),"'s pool would only return 1 ",(0,s.jsx)(n.code,{children:"XYZ"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"c898af44293e44ef96a6c6cae5ed1186",children:"Staking Pools & Consensus Nodes Status"}),"\n",(0,s.jsxs)(n.p,{children:["In KIRA's network, each consensus node operates its own staking pool where delegators can stake their assets. The staking pool has a unique ID and is linked to the consensus node's address. The consensus node has control over the staking pool's status and can enable or disable it, as well as set the commission rate on block rewards. In addition, a consensus node can be ",(0,s.jsx)(n.code,{children:"active"}),", ",(0,s.jsx)(n.code,{children:"inactive"}),", ",(0,s.jsx)(n.code,{children:"paused"}),", or ",(0,s.jsx)(n.code,{children:"jailed"})," depending on its performance, behavior or choice. While it is important to understand that the status of the staking pool is independent of the status of the consensus node, if a consensus node's status is ",(0,s.jsx)(n.code,{children:"inactive"}),", ",(0,s.jsx)(n.code,{children:"paused"}),", or ",(0,s.jsx)(n.code,{children:"jailed"})," , and/or if its staking pool is ",(0,s.jsx)(n.code,{children:"disabled"}),", delegators are not able to delegate any additional tokens to that node\u2019s staking pool. They will only be able to undelegate their existing stake."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"For more information regarding consensus nodes status and ranking system please refer to the"})," ",(0,s.jsx)(n.a,{href:"/docs/9f763be9-fbd3-452f-8c6e-6e418f34856f",children:(0,s.jsx)(n.em,{children:"Consensus nodes ranks & statuses"})})," ",(0,s.jsx)(n.em,{children:"module.\nFor more information regarding consensus nodes staking pool status please refer to the"})," ",(0,s.jsx)(n.a,{href:"/docs/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",children:(0,s.jsx)(n.em,{children:"Consensus nodes & staking pools"})})," ",(0,s.jsx)(n.em,{children:"section."})]}),"\n",(0,s.jsx)(n.h3,{id:"c3d993328dfe4b9e85b1f93f390796af",children:"Delegating and Associated Parameters"}),"\n",(0,s.jsxs)(n.p,{children:["KIRA allows users to delegate and pay ",(0,s.jsx)(n.a,{href:"/docs/184c11ed-4849-4ec5-acd0-f795b7abf467",children:"execution fees"})," with any token that has been whitelisted by governance. To ensure proper network functionality and security, specific management rules and limitations are defined and curated for each foreign token, such as exchange rates and staking pool rewards allowance. These rules are monitored by the ",(0,s.jsx)(n.a,{href:"/docs/f19a45b3-88c4-469c-8642-772b941a1b24",children:"Token Rates Registrar"})," module, which sets bounds on the staking mechanism through the use of three parameters:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stake_cap"})," : Sets the maximum share (%) of staking reward a given whitelisted staking token will be entitled per staking pool to prevent a malicious user from diluting the pool with any particular token in order to claim all the rewards. Setting specific shares also simplifies reward distribution by sidestepping the need to track how much eligible staking tokens are worth in terms of USD or KEX."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"stake_min"}),": Sets the minimum delegation and undelegation amount per transaction for a particular token. This is designed to prevent dust spam attacks, where an attacker might attempt to disrupt block production by continuously staking or withdrawing trivial amounts of tokens with numerous accounts. Importantly, this parameter also ensures that a user cannot undelegate an amount that would leave behind a residual stake less than this minimum. Such a residual would be locked and become non-withdrawable. Detailed considerations related to dust-spam can be found in the ",(0,s.jsx)(n.a,{href:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:"Fees and staking rewards distribution"})," section."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fee_rate"})," : Sets the conversation rate for foreign tokens in terms of KEX to use them as execution fees. ",(0,s.jsx)(n.code,{children:"fee_rate"})," is also used to determine if the ",(0,s.jsx)(n.code,{children:"stake_min"})," value is respected in case of delegation or if ",(0,s.jsx)(n.code,{children:"min_delegation_pushout"})," is reached when a staking pool reaches its ",(0,s.jsx)(n.a,{href:"/docs/94e4d0a6-8e45-469c-89a5-8ec65ca16381",children:"maximum delegators capacity"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"For more information regarding delegators staking rewards distribution please refer to"}),(0,s.jsxs)(n.a,{href:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:[" ",(0,s.jsx)(n.em,{children:"this section"})]})," ",(0,s.jsx)(n.em,{children:"of the"})," ",(0,s.jsx)(n.a,{href:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:(0,s.jsx)(n.em,{children:"Fees and staking rewards distribution"})})," ",(0,s.jsx)(n.em,{children:"module."})]}),"\n",(0,s.jsx)(n.h3,{id:"08bfc2b8fbcf411bae24ca442fa49e6a",children:"Registration Mechanism for Offshore Staking Pool Delegators"}),"\n",(0,s.jsxs)(n.p,{children:["As explained earlier, owning some staking pool's derivatives ",(0,s.jsx)(n.code,{children:"V<ID>/<denom>"})," is equivalent to having some token ",(0,s.jsx)(n.code,{children:"<denom>"})," staked with consensus node ",(0,s.jsx)(n.code,{children:"V<ID>"}),". However, because the Cosmos SDK does not provide a hook on token transfers (yet?) and derivatives can be traded freely inside or outside the KIRA network, it is impossible to track staking pool delegators' shares in real time. To solve this problem, KIRA has implemented a registration mechanism where \"offshore\" delegators, such as users or smart contracts that acquired KIRA's native staking derivative tokens on the open market, can register those derivatives to the corresponding staking pool to earn the corresponding rewards. Additionally, each staking pool performs a balance check on its current delegators whenever it receives rewards (whenever the consensus nodes produces a block) and will automatically deregister any registered delegators that do not hold more than the minimum ",(0,s.jsx)(n.code,{children:"stake_min"})," of derivative tokens."]}),"\n",(0,s.jsx)(n.h3,{id:"df8d14384a764c199e8d69de637577af",children:"Managing Staking Rewards"}),"\n",(0,s.jsx)(n.h4,{id:"7e84cbf07ad941c8b29dad7f14b4884f",children:"Claiming Rewards"}),"\n",(0,s.jsx)(n.p,{children:"With auto-compounding activated, rewards are automatically reinvested, increasing the delegator's stake. However, the staking derivatives, representing these newly compounded rewards, aren't instantly transferred to the delegator's address to reduce overhead. They accumulate in the staking pool and must be claimed manually. Conversely, if a delegator decides not to use auto-compounding, they will have to manually claim all the rewards they accrue. Hence, in both scenarios, the delegator must manually intervene to include their rewards or rewards\u2019 derivatives into their active balance."}),"\n",(0,s.jsx)(n.h4,{id:"8095488798c1432baa345bae81d3dd4e",children:"Enabling Auto-compounding"}),"\n",(0,s.jsxs)(n.p,{children:["Delegators have the flexibility to decide how they manage rewards earned from staking. They can opt for automatic reinvestment through the auto-compounding feature or claim them manually. This decision can be made for any token eligible for staking, as determined by the ",(0,s.jsx)(n.a,{href:"/docs/f19a45b3-88c4-469c-8642-772b941a1b24",children:"Token Rates Registrar"})," . When enabled, rewards are automatically added to the delegator's stake. However, the corresponding staking derivatives are not sent to the delegator's address, as this would be too much of an overhead for the module to handle. Instead, they are simply accumulated in the staking pool and become claimable in the same way as standard rewards. In other words, when a user disables auto compounding, it will have to claim ",(0,s.jsx)("u",{children:"its rewards"})," manually; when it is enabled, it will have to claim ",(0,s.jsx)("u",{children:"its newly issued staking derivatives"})," manually. Each delegator has their unique auto-compounding schedule, distributing the computational demands and preventing the network from being overwhelmed by simultaneous compounding events. Configurations for this feature are maintained per user. Delegators can enable this feature for all tokens or for particular ones."]}),"\n",(0,s.jsxs)(n.p,{children:["Auto-compounding operates based on a consistent interval set across the network by the ",(0,s.jsx)(n.code,{children:"autocompound_interval_num_blocks"})," ",(0,s.jsx)(n.a,{href:"/docs/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network property"}),". The exact block at which a user's rewards get compounded depends on when they activate this feature. For example, with a network interval set at 10,000 blocks, a delegator enabling auto-compounding at block ",(0,s.jsx)(n.code,{children:"3"})," will see their rewards compounded at blocks ",(0,s.jsx)(n.code,{children:"10003"}),", ",(0,s.jsx)(n.code,{children:"20003"})," and so on. This property is set to ",(0,s.jsx)(n.code,{children:"17280"})," blocks at genesis."]}),"\n",(0,s.jsx)(n.h4,{id:"55d34613a10e460bb772b415455b2038",children:"Undelegating & Cooling Period"}),"\n",(0,s.jsxs)(n.p,{children:["A delegator can undelegate their stake at anytime to get back its original tokens. Any undelegation will trigger a fixed cooling period during which the stake remain locked and do not yield any reward. Once the cooling period expires, staked tokens ",(0,s.jsx)(n.code,{children:"<denom>"})," can be claimed by providing the respective pool\u2019s derivative ",(0,s.jsx)(n.code,{children:"V<ID>/<denom>"})," which are then burned. The cooling period is the same for all staking tokens and defined by the governance through the following ",(0,s.jsx)(n.code,{children:"unstaking_period"})," network property (1 month by default)."]}),"\n",(0,s.jsx)(n.h4,{id:"0a9ed94ceee64117a44cf6658c22a213",children:"Delegators Push Out"}),"\n",(0,s.jsxs)(n.p,{children:["KIRA has a feature that protects against dust spam attacks by limiting the maximum number of delegators for each individual staking pool with a network property called ",(0,s.jsx)(n.code,{children:"max_delegators"})," (which is set to 100 by default). If this maximum number of delegators is reached, new delegators will need to provide a higher stake than the smallest delegator in the pool in order to push them out. To prevent large stakeholders from easily pushing out smaller delegators from good consensus nodes, the minimum required stake to push out a delegator is set by the ",(0,s.jsx)(n.code,{children:"min_delegation_pushout"})," property (which is a multiplier of the smallest stake value, 10 by default). This ",(0,s.jsx)(n.a,{href:"/docs/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network property"})," can be adjusted by KIRA's governance and increased as the network grows. When a delegator is pushed out, they automatically receive any outstanding rewards they are owed."]}),"\n",(0,s.jsx)(n.h2,{id:"bf9bed7d9d334bfd9d3d2af659f3437b",children:"CLI Syntax & Examples"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,s.jsx)(n.a,{href:"/docs/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,s.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,s.jsx)(n.em,{children:"documentation for more details."})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"$SIGNER"})})," ",(0,s.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,s.jsx)(n.em,{children:"and"})," ",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,s.jsx)(n.em,{children:"section"})]})}),"\n",(0,s.jsxs)(i.Z,{children:[(0,s.jsxs)(r.Z,{value:"transactions",label:"Transactions",children:[(0,s.jsx)(n.h2,{id:"82a71b23509544a2a7ed389e996d72b3",children:"Transactions"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.code,{children:"delegate"})}),(0,s.jsx)(n.th,{children:"Delegate to a pool."})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undelegate"})}),(0,s.jsx)(n.td,{children:"Start undelegation from a pool."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"claim-rewards"})}),(0,s.jsx)(n.td,{children:"Claim rewards from a pool."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"claim-undelegation"})}),(0,s.jsx)(n.td,{children:"Claim matured undelegation."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"claim-matured-undelegations"})}),(0,s.jsx)(n.td,{children:"Claim all matured undelegations in a single transaction."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"set-compound-info"})}),(0,s.jsx)(n.td,{children:"Set auto compounding mode."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"register-delegator"})}),(0,s.jsx)(n.td,{children:"Register as a pool delegator when acquiring pool derivatives externally."})]})]})]}),(0,s.jsx)(n.h4,{id:"9f9b21196a384f8984764f64df053d49",children:"Delegating"}),(0,s.jsxs)(n.p,{children:["Delegate tokens to a specific staking pool. This action locks the specified amount of ",(0,s.jsx)(n.code,{children:"<denom>"})," tokens to a staking pool using the consensus node\u2019s address. It returns the corresponding pool\u2019s derivative ",(0,s.jsx)(n.code,{children:"V<ID>/<denom>"}),". The delegation amount cannot be lower than ",(0,s.jsx)(n.code,{children:"stake_min"}),". Delegation is only possible to an active consensus node."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Args"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$VAL"}),": Consensus node\u2019s address (",(0,s.jsx)(n.code,{children:"kiravaloper..."}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$COIN"}),": Comma-separated list of coins and their amounts to delegate in the format ",(0,s.jsx)(n.code,{children:"<amount><denom>"})," (e.g., ",(0,s.jsx)(n.code,{children:"20000ukex"}),")."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid tx multistaking delegate \\\n--from=$SIGNER $FLAGS_TX \\\n$VAL $COIN\n"})}),(0,s.jsx)(n.h4,{id:"5a5b0ec50c254a57804362266ba59c01",children:"Undelegating"}),(0,s.jsxs)(n.p,{children:["Undelegating burns the corresponding ",(0,s.jsx)(n.code,{children:"V<ID>/<denom>"})," derivatives and initiates the claim of any outstanding rewards/compounds. The undelegated ",(0,s.jsx)(n.code,{children:"<denom>"})," tokens are assigned an undelegation ID and become claimable after the ",(0,s.jsx)(n.code,{children:"unstaking_period"}),". The undelegation amount must meet the ",(0,s.jsx)(n.code,{children:"stake_min"})," requirements."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Args"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$VAL"}),": Consensus node\u2019s address (",(0,s.jsx)(n.code,{children:"kiravaloper..."}),")."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$COIN"}),": Comma-separated list of coins and their amounts to undelegate in the format ",(0,s.jsx)(n.code,{children:"<amount><denom>"})," (e.g., ",(0,s.jsx)(n.code,{children:"20000ukex"}),")."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid tx multistaking undelegate \\\n--from=$SIGNER $FLAGS_TX \\\n$VAL $COIN\n"})}),(0,s.jsx)(n.h4,{id:"4a865e4b207d4b01b5d42a932989412f",children:"Set Compounding Mode"}),(0,s.jsx)(n.p,{children:"Delegators can activate or deactivate auto compounding for their staked tokens. This can be set for all tokens or specific denominations."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Args"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$ALL"}),": Set compound mode on all tokens (true/false)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$DENOM"}),": Set compound mode on a specific token denomination (e.g., ukex)."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid tx multistaking set-compound-info \\\n--from=$SIGNER $FLAGS_TX \\\n$ALL $DENOM\n"})}),(0,s.jsx)(n.h4,{id:"a20c73c980d645b697ce49666e11ffee",children:"Claim Rewards/pool\u2019s Derivatives"}),(0,s.jsx)(n.p,{children:"Delegators can claim all outstanding rewards (or pool\u2019s derivatives if auto-compounding is active)."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid tx multistaking claim-rewards \\\n--from=$SIGNER $FLAGS_TX\n"})}),(0,s.jsx)(n.h4,{id:"d81199ad78c94ef1a1aac0d9b8d4cb3f",children:"Claim Undelegation"}),(0,s.jsxs)(n.p,{children:["Undelegations can be claimed using corresponding ",(0,s.jsx)(n.a,{href:"/docs/94e4d0a6-8e45-469c-89a5-8ec65ca16381",children:"delegation ID"})," and at the end of their respective ",(0,s.jsx)(n.code,{children:"unstaking_period"}),"."]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Args"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$ID"}),": Undelegation ID."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid tx multistaking claim-undelegation \\\n--from=$SIGNER $FLAGS_TX \\\n$ID\n"})}),(0,s.jsx)(n.h4,{id:"1c2c1213febd4a98b8c3d3e4edda0f39",children:"Claiming Matured Undelegations"}),(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"claim-matured-undelegations"}),", allows users to submit a transaction to claim all matured undelegations in one action. It's a convenient way to handle multiple matured undelegations without specifying each ID individually."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid tx multistaking claim-matured-undelegations \\\n--from=$SIGNER $FLAGS_TX\n"})}),(0,s.jsx)(n.h4,{id:"7e12db69b62845f19f519ccf675e7eb2",children:"Delegator Registration"}),(0,s.jsxs)(n.p,{children:["Users or smart contracts that have acquired KIRA\u2019s native staking derivative tokens can register as delegators to the respective staking pools. Registration is subject to the minimum staking amount requirement ",(0,s.jsx)(n.code,{children:"stake_min"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid tx multistaking register-delegator \\\n--from=$SIGNER $FLAGS_TX\n"})})]}),(0,s.jsxs)(r.Z,{value:"queries",label:"Queries",children:[(0,s.jsx)(n.h2,{id:"ba7958814c1e4cec8d89051b5bce8d0d",children:"Queries"}),(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.code,{children:"undelegations"})}),(0,s.jsx)(n.th,{children:"Query all the undelegation records."})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"staking-pool-delegators"})}),(0,s.jsx)(n.td,{children:"Query staking pool delegators."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"compound-info"})}),(0,s.jsx)(n.td,{children:"Query compound information of a delegator."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"outstanding-rewards"})}),(0,s.jsx)(n.td,{children:"Query outstanding rewards for a delegator."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"pools"})}),(0,s.jsx)(n.td,{children:"Query all existing staking pools and their parameters and metrics."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"query-delegations"})}),(0,s.jsx)(n.td,{children:"Query delegations and rewards by delegator address and specific pool id or validator's address."})]})]})]}),(0,s.jsx)(n.h4,{id:"d4c36c977d1242f4b0955e6ff9c5b439",children:"Staking Pool Delegators"}),(0,s.jsx)(n.p,{children:"Retrieve delegators associated with a specific staking pool."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Args"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$VALIDATOR_ADDRESS"}),": Address of the staking pool node."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid query multistaking staking-pool-delegators $VALIDATOR_ADDRESS \\\n$FLAGS_QR | jq\n"})}),(0,s.jsx)(n.h4,{id:"2570ce21001f4c8591815b04d233f18f",children:"All Staking Pool Information"}),(0,s.jsx)(n.p,{children:"Query metrics and parameters of staking pools."}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid query multistaking pools $FLAGS_QR | jq\n"})}),(0,s.jsx)(n.h4,{id:"78231b53b6694172857f1c9ed8917be0",children:"All Pending Undelegations"}),(0,s.jsxs)(n.p,{children:["Retrieve information about pending undelegations using the ",(0,s.jsx)(n.code,{children:"undelegations"})," query. This query allows for filtering based on the delegator's address and the validator's address."]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If both ",(0,s.jsx)(n.code,{children:"$DELEGATOR_ADDRESS"})," and ",(0,s.jsx)(n.code,{children:"$VALIDATOR_ADDRESS"})," are left as empty strings, the query will return all existing undelegations. To specify an empty string as an argument in the command line, use ",(0,s.jsx)(n.code,{children:'""'}),"."]})}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Args"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$DELEGATOR_ADDRESS"}),": Delegator's address (optional)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$VALIDATOR_ADDRESS"}),": Validator's address (optional)."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sekaid query multistaking undelegations $DELEGATOR_ADDRESS $VALIDATOR_ADDRESS \\\n$FLAGS_QR | jq\n"})}),(0,s.jsx)(n.h4,{id:"8310aaae479a4f4e807e83e7a7db5e91",children:"Compounding Information"}),(0,s.jsx)(n.p,{children:"Retrieve a delegator's compounding information."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Args"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$DELEGATOR_ADDRESS"}),": Delegator's address."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid query multistaking compound-info $DELEGATOR_ADDRESS \\\n$FLAGS_QR | jq\n"})}),(0,s.jsx)(n.h4,{id:"ded77962e7e84ed398e024bfb5744e30",children:"Outstanding Rewards"}),(0,s.jsx)(n.p,{children:"Query a delegator's outstanding rewards."}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Args"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"$DELEGATOR_ADDRESS"}),": Delegator's address."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid query multistaking outstanding-rewards $DELEGATOR_ADDRESS \\\n$FLAGS_QR | jq\n"})})]}),(0,s.jsxs)(r.Z,{value:"governance",label:"Governance",children:[(0,s.jsx)(n.h2,{id:"aea5c0245c4e4bea8ecfe4c4d2b9c177",children:"Governance"}),(0,s.jsx)(n.p,{children:"There is no governance proposal for this sub-module."})]})]})]})}function g(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5162:(e,n,a)=>{a.d(n,{Z:()=>r});a(7294);var s=a(6905);const t={tabItem:"tabItem_Ymn6"};var i=a(5893);function r(e){let{children:n,hidden:a,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(t.tabItem,r),hidden:a,children:n})}},4866:(e,n,a)=>{a.d(n,{Z:()=>w});var s=a(7294),t=a(6905),i=a(2466),r=a(6550),d=a(469),o=a(1980),l=a(7392),c=a(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:a}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:a,attributes:s,default:t}}=e;return{value:n,label:a,attributes:s,default:t}}))}(a);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function g(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,r.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=u(e),[r,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=a.find((e=>e.default))??a[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[l,h]=m({queryString:a,groupId:t}),[f,p]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,c.Nk)(a);return[t,(0,s.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),x=(()=>{const e=l??f;return g({value:e,tabValues:i})?e:null})();(0,d.Z)((()=>{x&&o(x)}),[x]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),p(e)}),[h,p,i]),tabValues:i}}var p=a(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(5893);function j(e){let{className:n,block:a,selectedValue:s,selectValue:r,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),c=e=>{const n=e.currentTarget,a=o.indexOf(n),t=d[a].value;t!==s&&(l(n),r(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":a},n),children:d.map((e=>{let{value:n,label:a,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...i,className:(0,t.Z)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":s===n}),children:a??n},n)}))})}function k(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function v(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,t.Z)("tabs-container",x.tabList),children:[(0,b.jsx)(j,{...e,...n}),(0,b.jsx)(k,{...e,...n})]})}function w(e){const n=(0,p.Z)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>r});var s=a(7294);const t={},i=s.createContext(t);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);