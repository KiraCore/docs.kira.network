"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4390],{9687:(e,d,n)=>{n.r(d),n.d(d,{assets:()=>a,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var s=n(5893),r=n(1151),t=n(4866),i=n(5162);const c={title:"Network Properties",sidebar_position:5,slug:"network-properties"},l=void 0,o={id:"backend---sekai/modules/governance/network-properties",title:"Network Properties",description:"Overview",source:"@site/tabs/docs/backend---sekai/modules/governance/network-properties.mdx",sourceDirName:"backend---sekai/modules/governance",slug:"/backend---sekai/modules/governance/network-properties",permalink:"/docs/backend---sekai/modules/governance/network-properties",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/governance/network-properties&page-local=backend---sekai/modules/governance/network-properties.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:5,frontMatter:{title:"Network Properties",sidebar_position:5,slug:"network-properties"},sidebar:"defaultSidebar",previous:{title:"Polls",permalink:"/docs/backend---sekai/modules/governance/polls"},next:{title:"Identity Registrar",permalink:"/docs/backend---sekai/modules/governance/identity-registrar"}},a={},h=[{value:"Overview",id:"ebfaaf65269241b9a32a9bfeea35b3c8",level:2},{value:"Parameters",id:"6b3d949219294d29982ae09b9f70a8ba",level:2},{value:"CLI Syntax &amp; Examples",id:"dd165dbb682e4cb9b41ccbecbe8874da",level:2},{value:"Transactions",id:"c7b1bcd0db474f468e03cbbcfdb65094",level:2},{value:"Queries",id:"d0f3dff516504a20955bde702560a0c6",level:2},{value:"Query Network Properties",id:"21971178f4ac42c0be7dcc5885715064",level:4},{value:"Governance",id:"21a4bf9b246540458e513ba56c82c5d5",level:2},{value:"Set a Network Property",id:"28134ca7a8f74dc7919c699ec7927cf3",level:4}];function x(e){const d={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(d.h2,{id:"ebfaaf65269241b9a32a9bfeea35b3c8",children:"Overview"}),"\n",(0,s.jsx)(d.p,{children:"KIRA Network utilizes a unique set of on-chain variables known as Network Properties to help control and regulate various behaviors and characteristics of the SEKAI application on a network-wide basis. These parameters serve as the operational gears of the system, allowing for the adjustment of pivotal features such as KEX inflation rate, the minimum transaction fee for any on-chain message to ensure global transaction spam protection, or even the required minimum percentage of governance members necessary to vote on a proposal, making it valid. Such versatility is particularly beneficial, considering the ever-evolving needs of the community and the potential alterations in the network's operational dynamics. Any changes to these network properties require consensus from the network's governance, ensuring that any alterations align with the wishes of the majority of network participants."}),"\n",(0,s.jsx)(d.h2,{id:"6b3d949219294d29982ae09b9f70a8ba",children:"Parameters"}),"\n",(0,s.jsxs)(d.p,{children:["All network properties and their respective default values (which can also be found ",(0,s.jsx)(d.a,{href:"https://github.com/KiraCore/sekai/blob/master/proto/kira/gov/network_properties.proto",children:"here"}),")"]}),"\n",(0,s.jsxs)(d.table,{children:[(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:"#"}),(0,s.jsx)(d.th,{children:"NAME"}),(0,s.jsx)(d.th,{children:"TYPE"}),(0,s.jsx)(d.th,{children:"GENESIS"}),(0,s.jsx)(d.th,{children:"BOUNDS (min - max)"}),(0,s.jsx)(d.th,{children:"DESCRIPTION"})]})}),(0,s.jsxs)(d.tbody,{children:[(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"1"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_tx_fee"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"100"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["Minimum transaction fee in ",(0,s.jsx)(d.code,{children:"ukex"})," that must be sent in order to submit any on-chain message. Global transaction spam protection measure."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"2"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_tx_fee"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1000000"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["Maximum transaction fee in ",(0,s.jsx)(d.code,{children:"ukex"})," that can be sent along any transaction type. Prevents potential loss of funds while specifying wrong transaction fee amount by the user."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"3"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"vote_quorum"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"33"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Required, minimum percentage of governance members with permission to vote on a given proposal to make said proposal valid. If minimum quorum is not reached then passing said proposal is not possible."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"4"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"minimum_proposal_end_time"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"300"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["Minimum time in seconds that proposals must be active and default time for all proposals to remain pending. Duration time of individual proposal can be modified by governance as explained ",(0,s.jsx)(d.a,{href:"/docs/backend---sekai/modules/governance/proposals--governance-structure",children:"here"}),"."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"5"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"proposal_enactment_time"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"300"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Minimum time in seconds for the proposals to take effect after they passed"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"6"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_proposal_end_blocks"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"2"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["Minimum number of blocks during which the proposals MUST remain active. This is used to prevent edge cases where ",(0,s.jsx)(d.code,{children:"minimum_proposal_end_time"})," is set to value shorter than a single block time, thus making it impossible to vote in time."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"7"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_proposal_enactment_blocks"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Minimum number of blocks that must pass after proposal passed for the proposal to take effect."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"8"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"enable_foreign_fee_payments"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Allow transaction fee payments with tokens other than KEX"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"9"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"mischance_rank_decrease_amount"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"When it's certain that validator is offline and failed to participate in a block production, decrease its global rank by the specified value."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"10"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_mischance"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["How many consecutive blocks must the validator miss for the network to change validator status to ",(0,s.jsx)(d.code,{children:"inactive"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"11"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"mischance_confidence"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"110"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"How many consecutive blocks must the validator miss for the network to be certain that the node is offline and not participating in the block signing"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"12"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"inactive_rank_decrease_percent"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0.50"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["By what percentage should the validator global rank decrease when the said validator node status changes to ",(0,s.jsx)(d.code,{children:"inactive"})," due to not participating in signing new blocks."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"13"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_validators"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1000000"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["When ",(0,s.jsx)(d.a,{href:"/docs/backend---sekai/modules/governance/poor-network-conditions",children:"poor network conditions"})," occur, sets the maximum value in ",(0,s.jsx)(d.code,{children:"ukex"})," that can be transferred between accounts."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"14"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"poor_network_max_bank_send"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["Minimum number of consensus nodes that must be active for the network to be considered healthy. If number of validators falls below this value then ",(0,s.jsx)(d.a,{href:"/docs/backend---sekai/modules/governance/poor-network-conditions",children:"poor network conditions"})," occur."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"15"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"unjail_max_time"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"600"})}),(0,s.jsxs)(d.td,{children:["< ",(0,s.jsx)(d.code,{children:"slashing_period"})]}),(0,s.jsx)(d.td,{children:"Maximum amount of time in seconds which a jailed node has to request to be unjailed before becoming permanently jailed (tombstoned)."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"16"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"enable_token_whitelist"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"false"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Enables whitelist of tokens transferable on the network"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"17"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"enable_token_blacklist"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"bool"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"true"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Enable blacklist of tokens transferable on the network"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"18"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_identity_approval_tip"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"200"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["Minimum tip in ",(0,s.jsx)(d.code,{children:"ukex"})," amount that must be sent along ",(0,s.jsx)(d.a,{href:"/docs/backend---sekai/modules/governance/identity-registrar",children:"Untitled"})," record verification request"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"19"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"unique_identity_keys"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"string"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"moniker,username"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["Key values that must remain unique in the ",(0,s.jsx)(d.a,{href:"/docs/backend---sekai/modules/governance/identity-registrar",children:"Untitled"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"20"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"ubi_hardcap"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"6000000"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Maximum amount of additional KEX that can be created per year by the UBI module"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"21"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"validators_fee_share"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0.50"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"0"})," - ",(0,s.jsx)(d.code,{children:"0.5"})]}),(0,s.jsx)(d.td,{children:"Percentage cut a block proposer takes from the block\u2019s transaction fees rewards."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"22"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"inflation_rate"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0.18"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"0"})," - ",(0,s.jsx)(d.code,{children:"0.5"})]}),(0,s.jsx)(d.td,{children:"KEX inflation percentage"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"23"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"inflation_period"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"31557600"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"2629800"})," - ",(0,s.jsx)(d.code,{children:"31557600"})]}),(0,s.jsxs)(d.td,{children:["Period of time in seconds over which current KEX supply is inflated by ",(0,s.jsx)(d.code,{children:"inflation_rate"})]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"24"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"unstaking_period"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"2629800"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"604800"})," - ",(0,s.jsx)(d.code,{children:"31557600"})," or ",(0,s.jsx)(d.code,{children:"slashing_period"})]}),(0,s.jsx)(d.td,{children:"Undelegation cooling period (in seconds)"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"25"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_delegators"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"100"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["Maximum number of delegators allowed per staking pool above which ",(0,s.jsx)(d.code,{children:"min_delegation_pushout"})," can be triggered."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"26"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_delegation_pushout"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10"})}),(0,s.jsx)(d.td,{}),(0,s.jsxs)(d.td,{children:["The minimum stake multiplier amount a user need to provide to push out the weakest delegator of a staking pool who reach its ",(0,s.jsx)(d.code,{children:"max_delegators"})," capacity"]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"27"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"slashing_period"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"3600"})}),(0,s.jsxs)(d.td,{children:["> ",(0,s.jsx)(d.code,{children:"unstaking_period"})]}),(0,s.jsx)(d.td,{children:"The time window in seconds in which a collusion of double-signing event must occur in order for a slashing proposal to be automatically rised"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"28"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_jailed_percentage"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0.25"})}),(0,s.jsxs)(d.td,{children:["< one third of ",(0,s.jsx)(d.code,{children:"active"})," nodes"]}),(0,s.jsxs)(d.td,{children:["The percentage threshold of consensus nodes that must double-sign within the time window ",(0,s.jsx)(d.code,{children:"slashing_period"})," in order for a slashing proposal to be automatically rised."]})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"29"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_slashing_percentage"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0.01"})}),(0,s.jsxs)(d.td,{children:[(0,s.jsx)(d.code,{children:"0"})," - ",(0,s.jsx)(d.code,{children:"1"})]}),(0,s.jsx)(d.td,{children:"Maximum percentage of slashing that can be applied by governance to a jailed consensus node."})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"30"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_custody_reward"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"200"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"31"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_custody_buffer_size"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"8192"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"32"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_custody_tx_size"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"33"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"abstention_rank_decrease_amount"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Amount of rank decrease when absent"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"34"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_abstention"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"2"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Max abstention count for councilor"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"35"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_collective_bond"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"100000"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Minimum bond amount for the collective to be activated"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"36"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_collective_bonding_time"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"86400"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Allowed time to reach min_collective_bond"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"37"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_collective_outputs"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Limitation on the maximum number of spending pools configuration per collective"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"38"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_collective_claim_period"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"14400"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"In seconds"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"39"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"validator_recovery_bond"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"300000"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Amount of KEX to spend for issuing validator recovery token"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"40"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_annual_inflation"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0.35"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Maximum % of KEX by which supply can increase over the period of 1 year"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"41"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_proposal_title_size"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"128"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Maximum title size in the proposal"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"42"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_proposal_description_size"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1024"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Maximum description size in the proposal"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"43"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_proposal_poll_option_size"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"64"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Maximum option size in the proposal"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"44"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_proposal_poll_option_count"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"128"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Maximum possible choices in the proposal"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"45"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_proposal_reference_size"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"512"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Maximum reference size in the proposal"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"46"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_proposal_checksum_size"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"128"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Maximum checksum size in the proposal"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"47"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"min_dapp_bond"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1000000"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"48"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"max_dapp_bond"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10000000"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"49"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dapp_liquidation_threshold"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"50"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dapp_liquidation_period"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"51"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dapp_bond_duration"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"604800"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"52"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dapp_verifier_bond"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0.1"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Percentage of LP token supply to be put to be the verifier of the DApp"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"53"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dapp_auto_denounce_time"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"60"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"In seconds, time the DApp leader is allowed to send execute-dapp-tx"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"54"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dapp_mischance_rank_decrease_amount"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"1"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"55"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dapp_max_mischance"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"56"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dapp_inactive_rank_decrease_percent"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"10"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"57"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"dapp_pool_slippage_default"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"float"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"0.1"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Default"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"58"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"minting_ft_fee"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"100_000_000_000_000"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"59"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"minting_nft_fee"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"100_000_000_000_000"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"-"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{children:"60"}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"autocompound_interval_num_blocks"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"uint64"})}),(0,s.jsx)(d.td,{children:(0,s.jsx)(d.code,{children:"17280"})}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{children:"Block interval for auto-compounding of rewards"})]}),(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{}),(0,s.jsx)(d.td,{})]})]})]}),"\n",(0,s.jsx)(d.h2,{id:"dd165dbb682e4cb9b41ccbecbe8874da",children:"CLI Syntax & Examples"}),"\n",(0,s.jsx)(d.admonition,{type:"note",children:(0,s.jsxs)(d.p,{children:["Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the ",(0,s.jsx)(d.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:"Roles & Permissions"})," documentation for more details."]})}),"\n",(0,s.jsx)(d.admonition,{type:"note",children:(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"$SIGNER"})," represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as ",(0,s.jsx)(d.code,{children:"$FLAGS_TX"})," and ",(0,s.jsx)(d.code,{children:"$FLAGS_QR"}),", see the ",(0,s.jsx)(d.a,{href:"/docs/backend---sekai/cli-guide",children:"CLI Guide"})," page."]})}),"\n",(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(i.Z,{value:"transactions",label:"Transactions",children:[(0,s.jsx)(d.h2,{id:"c7b1bcd0db474f468e03cbbcfdb65094",children:"Transactions"}),(0,s.jsx)(d.p,{children:"There is no transactions apart from the governance ones for this su-module."})]}),(0,s.jsxs)(i.Z,{value:"queries",label:"Queries",children:[(0,s.jsx)(d.h2,{id:"d0f3dff516504a20955bde702560a0c6",children:"Queries"}),(0,s.jsx)(d.table,{children:(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:(0,s.jsx)(d.code,{children:"network-properties"})}),(0,s.jsx)(d.th,{children:"list all network properties and corresponding value"})]})})}),(0,s.jsx)(d.h4,{id:"21971178f4ac42c0be7dcc5885715064",children:"Query Network Properties"}),(0,s.jsxs)(d.p,{children:["List all network properties and corresponding values using the ",(0,s.jsx)(d.code,{children:"network-properties"})," command."]}),(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"sekaid query customgov network-properties $FLAGS_QR | jq\n"})})]}),(0,s.jsxs)(i.Z,{value:"governance",label:"Governance",children:[(0,s.jsx)(d.h2,{id:"21a4bf9b246540458e513ba56c82c5d5",children:"Governance"}),(0,s.jsx)(d.table,{children:(0,s.jsx)(d.thead,{children:(0,s.jsxs)(d.tr,{children:[(0,s.jsx)(d.th,{children:(0,s.jsx)(d.code,{children:"set-network-property"})}),(0,s.jsx)(d.th,{children:"Set a network property\u2019s value"})]})})}),(0,s.jsx)(d.h4,{id:"28134ca7a8f74dc7919c699ec7927cf3",children:"Set a Network Property"}),(0,s.jsxs)(d.p,{children:["Create a proposal to set a value on a network property using the ",(0,s.jsx)(d.code,{children:"set-network-property"})," command followed by the network property ",(0,s.jsx)(d.code,{children:"$PROPERTY"})," and its respective value ",(0,s.jsx)(d.code,{children:"$VALUE"}),"."]}),(0,s.jsx)(d.p,{children:(0,s.jsx)(d.strong,{children:"Args"})}),(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"$PROPERTY"}),": The network property to be updated. All properties are available ",(0,s.jsx)(d.a,{href:"https://github.com/KiraCore/sekai/blob/master/proto/kira/gov/network_properties.proto",children:"here"}),"."]}),(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"$VALUE"}),": The value to be set for the network property."]}),(0,s.jsx)(d.p,{children:(0,s.jsx)(d.strong,{children:"Flags"})}),(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"$TITLE"}),": The title of the proposal."]}),(0,s.jsxs)(d.p,{children:[(0,s.jsx)(d.code,{children:"$DESCRIPTION"}),": The description of the proposal, it can be a URL, some text, etc."]}),(0,s.jsx)(d.pre,{children:(0,s.jsx)(d.code,{className:"language-bash",children:"sekaid tx customgov proposal set-network-property \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n$PROPERTY $VALUE\n"})})]})]})]})}function j(e={}){const{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,s.jsx)(d,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},5162:(e,d,n)=>{n.d(d,{Z:()=>i});n(7294);var s=n(6905);const r={tabItem:"tabItem_Ymn6"};var t=n(5893);function i(e){let{children:d,hidden:n,className:i}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,i),hidden:n,children:d})}},4866:(e,d,n)=>{n.d(d,{Z:()=>k});var s=n(7294),r=n(6905),t=n(2466),i=n(6550),c=n(469),l=n(1980),o=n(7392),a=n(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:d}=e;return!!d&&"object"==typeof d&&"value"in d}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function x(e){const{values:d,children:n}=e;return(0,s.useMemo)((()=>{const e=d??function(e){return h(e).map((e=>{let{props:{value:d,label:n,attributes:s,default:r}}=e;return{value:d,label:n,attributes:s,default:r}}))}(n);return function(e){const d=(0,o.l)(e,((e,d)=>e.value===d.value));if(d.length>0)throw new Error(`Docusaurus error: Duplicate values "${d.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[d,n])}function j(e){let{value:d,tabValues:n}=e;return n.some((e=>e.value===d))}function u(e){let{queryString:d=!1,groupId:n}=e;const r=(0,i.k6)(),t=function(e){let{queryString:d=!1,groupId:n}=e;if("string"==typeof d)return d;if(!1===d)return null;if(!0===d&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:d,groupId:n});return[(0,l._X)(t),(0,s.useCallback)((e=>{if(!t)return;const d=new URLSearchParams(r.location.search);d.set(t,e),r.replace({...r.location,search:d.toString()})}),[t,r])]}function p(e){const{defaultValue:d,queryString:n=!1,groupId:r}=e,t=x(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:d,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(d){if(!j({value:d,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${d}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return d}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:d,tabValues:t}))),[o,h]=u({queryString:n,groupId:r}),[p,m]=function(e){let{groupId:d}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(d),[r,t]=(0,a.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:r}),b=(()=>{const e=o??p;return j({value:e,tabValues:t})?e:null})();(0,c.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!j({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,t]),tabValues:t}}var m=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(5893);function v(e){let{className:d,block:n,selectedValue:s,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),a=e=>{const d=e.currentTarget,n=l.indexOf(d),r=c[n].value;r!==s&&(o(d),i(r))},h=e=>{let d=null;switch(e.key){case"Enter":a(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;d=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;d=l[n]??l[l.length-1];break}}d?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},d),children:c.map((e=>{let{value:d,label:n,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:s===d?0:-1,"aria-selected":s===d,ref:e=>l.push(e),onKeyDown:h,onClick:a,...t,className:(0,r.Z)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":s===d}),children:n??d},d)}))})}function _(e){let{lazy:d,children:n,selectedValue:r}=e;const t=(Array.isArray(n)?n:[n]).filter(Boolean);if(d){const e=t.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:t.map(((e,d)=>(0,s.cloneElement)(e,{key:d,hidden:e.props.value!==r})))})}function g(e){const d=p(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(v,{...d,...e}),(0,f.jsx)(_,{...d,...e})]})}function k(e){const d=(0,m.Z)();return(0,f.jsx)(g,{...e,children:h(e.children)},String(d))}},1151:(e,d,n)=>{n.d(d,{Z:()=>c,a:()=>i});var s=n(7294);const r={},t=s.createContext(r);function i(e){const d=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function c(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:d},e.children)}}}]);