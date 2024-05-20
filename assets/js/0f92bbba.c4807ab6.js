"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8683],{1509:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>h});var r=s(5893),o=s(1151),i=s(4866),c=s(5162);const t={title:"Councilors & governance ranking",sidebar_position:2,slug:"councilors--governance-ranking"},a=void 0,l={id:"backend---sekai/modules/governance/councilors-&-governance-ranking",title:"Councilors & governance ranking",description:"Overview",source:"@site/tabs/docs/backend---sekai/modules/governance/councilors-&-governance-ranking.mdx",sourceDirName:"backend---sekai/modules/governance",slug:"/backend---sekai/modules/governance/councilors--governance-ranking",permalink:"/docs/backend---sekai/modules/governance/councilors--governance-ranking",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/governance/councilors--governance-ranking&page-local=backend---sekai/modules/governance/councilors-&-governance-ranking.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:2,frontMatter:{title:"Councilors & governance ranking",sidebar_position:2,slug:"councilors--governance-ranking"},sidebar:"defaultSidebar",previous:{title:"Proposals & governance structure",permalink:"/docs/backend---sekai/modules/governance/proposals--governance-structure"},next:{title:"Roles & Permissions",permalink:"/docs/backend---sekai/modules/governance/roles--permissions"}},d={},h=[{value:"Overview",id:"1dd55411694d46b49d4be4c8a3f37f6f",level:2},{value:"Councilor Seat",id:"08032ef8b6e84b01b9b06ecc8be78ede",level:3},{value:"Councilor Statuses",id:"47ee04ec4d724455814dd13db3e19005",level:3},{value:"Ranking System",id:"219d351e562b427e9e91b88efcd5b77b",level:3},{value:"Pause Raking",id:"011f7ecdc0bf4fb894922b3d99e9d2f5",level:4},{value:"Reset Ranking",id:"61f40654447345f29b8b91badd65f94e",level:4},{value:"Parameters",id:"a167164d509c49c88dc586e266df4356",level:2},{value:"CLI Syntax &amp; Examples",id:"55371914bef9468db8b582cc573776d6",level:2},{value:"Transactions",id:"6839c0e109594116986c3bfdf282f92a",level:2},{value:"Claim Councilor Seat",id:"5f7c76ed81c247f7a6743a762dc04f7d",level:4},{value:"Pause Councilor",id:"ff06ca2acb1f48dd885914146a08d4fd",level:4},{value:"Unpause Councilor",id:"8c99fc30dd5f481c8247d1daae8d6952",level:4},{value:"Activate Councilor",id:"62d7f7ff9f4040b0a4b694038b15dad0",level:4},{value:"Queries",id:"615f1f023f3543ae9e4c1454ecac7bef",level:2},{value:"Query Councilors",id:"26b717c801854e9793afe368e12d269a",level:4},{value:"Query Non-councilors",id:"f5237a8583e44858844c8dc7ab2ce027",level:4},{value:"Query Council Registry",id:"25a16eabea2a4ea29ea337bede7e6951",level:4},{value:"Query Proposer and Voters Count",id:"464b5bdc49f249e1bd1856c2cc62add0",level:4},{value:"Governance",id:"9a0bdd12e2fe4d06b71c62956064d408",level:2},{value:"Jailing Councilors",id:"4244a636534b4f04adad4fa01d469580",level:4},{value:"Reset All Councilors Ranks",id:"611ac52d4d99410cb4b4320f118d3bce",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"1dd55411694d46b49d4be4c8a3f37f6f",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["A KIRA account is considered a Councilor if it has at least one whitelisted ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:(0,r.jsx)(n.strong,{children:"Permission or Role"})})," that allows the creation of proposals or voting. Accounts with no Permissions/Roles or blacklisted Permissions/Roles are not considered Councilors. It is essential to note that having permissions or a role does not automatically imply being a councilor. Councilors are governance members who can collude to raise proposals or vote on said proposals. Sudo users (users with sudo permissions such as 2[broken link] or 3[broken link]) are not considered councilors in this context."]}),"\n",(0,r.jsx)(n.h3,{id:"08032ef8b6e84b01b9b06ecc8be78ede",children:"Councilor Seat"}),"\n",(0,r.jsx)(n.p,{children:":::\ud83d\udccc"}),"\n",(0,r.jsxs)(n.p,{children:["Sending a ",(0,r.jsx)(n.code,{children:"MsgClaimCouncilor"})," transaction is only allowed if the status of the Councilor is ",(0,r.jsx)(n.code,{children:"waiting"})," (see next section)."]}),"\n",(0,r.jsx)(n.p,{children:":::"}),"\n",(0,r.jsxs)(n.p,{children:['Before any governance member can execute their right to create proposals or vote, they must first "claim" their Councilor Seat, similar to how consensus nodes claim their Validator Seat. This action acknowledges the network ',(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/data-registry",children:(0,r.jsx)(n.strong,{children:"Code of Conduct"})})," and allows registering a KIRA user in the governance registrar. When submitting a ",(0,r.jsx)(n.code,{children:"MsgClaimCouncilor"})," transaction using the ",(0,r.jsx)(n.code,{children:"claim-councilor-seat"})," CLI, the user must supply the following information, which will be persisted in the ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/identity-registrar",children:"Identity Registrar"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"username"})," - (required) friendly governance member name with minimum 4 non-whitespace characters. It is globally unique and cannot be deleted (just like consensus nodes\u2019 ",(0,r.jsx)(n.code,{children:"moniker"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"description"})," - (optional) a longer description of the councilor"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"social"})," - (optional) comma-separated URL list of any social profiles such as Twitter, Telegram, etc\u2026"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"contact"})," - (optional) email address, URL, or another emergency contact"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"avatar"})," - (optional) URL to .SVG image or gif"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"47ee04ec4d724455814dd13db3e19005",children:"Councilor Statuses"}),"\n",(0,r.jsx)(n.p,{children:"Councilors have statuses that implies their ability to perform their role in creating proposals and voting."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"STATUS"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"waiting"})}),(0,r.jsxs)(n.td,{children:["Default state after a permission to vote or create a proposal is assigned to the account for the first time. Implies account ability to send a ",(0,r.jsx)(n.code,{children:"MsgClaimCouncilor"})," transaction to claim a Councilor Seat."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"active"})}),(0,r.jsxs)(n.td,{children:["Default state after sending a ",(0,r.jsx)(n.code,{children:"MsgClaimCouncilor"})," transaction. Implies councilor ability to vote and create proposals."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"inactive"})}),(0,r.jsx)(n.td,{children:"Councilor stopped voting on proposals and didn\u2019t signal to the network any planned absence. As defined by the Ranking System (see section below)."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"paused"})}),(0,r.jsx)(n.td,{children:"Councilor signaled planned absence."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"jailed"})}),(0,r.jsx)(n.td,{children:"Councilor is barred from executing any of their permissions."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"219d351e562b427e9e91b88efcd5b77b",children:"Ranking System"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The councilor's status automatically transitions to ",(0,r.jsx)(n.code,{children:"jailed"})," if they are a consensus node and their node's status changes to ",(0,r.jsx)(n.code,{children:"jailed"})," due to being detected double signing."]})}),"\n",(0,r.jsxs)(n.p,{children:["The Councilor ranking system is used to apply changes to statuses and collect statistics that can be utilized by the governance to determine which network actors fulfill their assigned roles. Note that the ranking of Councilors and Consensus nodes is totally independent and has separate logic. The ranking system is based on proposal creation and proposal votes counters. If the Councilor participates in voting or creates a proposal, their ",(0,r.jsx)(n.code,{children:"rank"})," increases by 1 and the ",(0,r.jsx)(n.code,{children:"abstention"})," counter is set to 0. If the Councilor fails to vote, their rank is decreased by ",(0,r.jsx)(n.code,{children:"abstention_rank_decrease_amount"})," (defined in ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/network-properties",children:"Network Properties"}),"), and ",(0,r.jsx)(n.code,{children:"abstention"})," is increased by 1."]}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"abstention"})," counter equals or surpasses the ",(0,r.jsx)(n.code,{children:"max_abstention"})," value (set in ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/network-properties",children:"Network Properties"}),"), a Councilor becomes ",(0,r.jsx)(n.code,{children:"inactive"}),". In this status, they can't vote or initiate proposals, and their ",(0,r.jsx)(n.code,{children:"rank"})," drops to 0. However, their ",(0,r.jsx)(n.code,{children:"abstention"})," count remains. To resume voting, an ",(0,r.jsx)(n.code,{children:"inactive"})," councilor must send a ",(0,r.jsx)(n.code,{children:"MsgCouncilorActivate"})," transaction, resetting their ",(0,r.jsx)(n.code,{children:"abstention"})," count to zero."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Keep in mind, governance can tailor transaction fees for each existing message type through the ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/fee-processing/fee-processing",children:"Fee processing"})," module. This means they might impose a higher fee for ",(0,r.jsx)(n.code,{children:"MsgCouncilorActivate"})," to act as a penalty."]})}),"\n",(0,r.jsx)(n.h4,{id:"011f7ecdc0bf4fb894922b3d99e9d2f5",children:"Pause Raking"}),"\n",(0,r.jsxs)(n.p,{children:["To prevent the status from becoming ",(0,r.jsx)(n.code,{children:"inactive"})," while being absent for prolonged periods of time, Councilors can submit a ",(0,r.jsx)(n.code,{children:"MsgCouncilorPause"})," transaction, which changes their status to ",(0,r.jsx)(n.code,{children:"paused"}),". In the ",(0,r.jsx)(n.code,{children:"paused"})," state, the abstention counter does not change, and the ",(0,r.jsx)(n.code,{children:"rank"})," is not automatically reset, but the Councilor cannot vote or create proposals. To exit the ",(0,r.jsx)(n.code,{children:"paused"})," status, a Councilor must submit a ",(0,r.jsx)(n.code,{children:"MsgCouncilorUnpause"})," transaction, but the ",(0,r.jsx)(n.code,{children:"abstention"})," is not reset as a result."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"rank"})," is reset to 0 if the Councilor's status changes to ",(0,r.jsx)(n.code,{children:"jailed"}),". In the jailed status, a Councilor cannot vote and create proposals unless the Validator is unjailed by the governance, in which case the Councilor's status changes to ",(0,r.jsx)(n.code,{children:"inactive"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"61f40654447345f29b8b91badd65f94e",children:"Reset Ranking"}),"\n",(0,r.jsx)(n.p,{children:"It may be useful for the governance to have the ability to reset all ranks and abstention counters of all governance members simultaneously (e.g., incentivized games, etc.). For this purpose, the governance module has a dedicated proposal and corresponding voting permission."}),"\n",(0,r.jsx)(n.h2,{id:"a167164d509c49c88dc586e266df4356",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"NAME"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"TYPE"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"EXAMPLE"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"address"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cosmos-sdk/types.AccAddress"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"kira1zcjdw..."})}),(0,r.jsx)(n.td,{children:"The account address of the councilor."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"status"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"active"})}),(0,r.jsx)(n.td,{children:"The current status of the councilor."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"rank"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"112"})}),(0,r.jsx)(n.td,{children:"The current rank of the councilor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"abstention"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"int64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"10"})}),(0,r.jsx)(n.td,{children:"The current number of times the councilor missed to vote for a proposal for which it has the permission to vote for."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"55371914bef9468db8b582cc573776d6",children:"CLI Syntax & Examples"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:"Roles & Permissions"})," documentation for more details."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$SIGNER"})," represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as ",(0,r.jsx)(n.code,{children:"$FLAGS_TX"})," and ",(0,r.jsx)(n.code,{children:"$FLAGS_QR"}),", see the ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/cli-guide",children:"CLI Guide"})," page."]})}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(c.Z,{value:"transactions",label:"Transactions",children:[(0,r.jsx)(n.h2,{id:"6839c0e109594116986c3bfdf282f92a",children:"Transactions"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"councilor claim-seat"})})}),(0,r.jsx)(n.th,{children:"Claim a councilor seat."})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"councilor pause"})})}),(0,r.jsx)(n.td,{children:"Signal an absence as a councilor."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"councilor unpause"})})}),(0,r.jsx)(n.td,{children:"Signal re-availability as a councilor."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"councilor activate"})})}),(0,r.jsx)(n.td,{children:"Activate councilor status previously deactivated due to excessive abstention."})]})]})]}),(0,r.jsx)(n.h4,{id:"5f7c76ed81c247f7a6743a762dc04f7d",children:"Claim Councilor Seat"}),(0,r.jsxs)(n.p,{children:["Claim a councilor seat using the ",(0,r.jsx)(n.code,{children:"claim-seat"})," command."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$ADDRESS"}),": The address of the councilor."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$MONIKER"}),": The moniker of the councilor."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$USERNAME"}),": The username of the councilor."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the councilor."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$SOCIAL"}),": The social media handle of the councilor."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$CONTACT"}),": The contact details of the councilor."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$AVATAR"}),": The avatar of the councilor."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid tx customgov councilor claim-seat \\\n--from=$SIGNER $FLAGS_TX \\\n--address=$ADDRESS --moniker=$MONIKER --username=$USERNAME \\\n--description=$DESCRIPTION --social=$SOCIAL --contact=$CONTACT --avatar=$AVATAR\n"})}),(0,r.jsx)(n.h4,{id:"ff06ca2acb1f48dd885914146a08d4fd",children:"Pause Councilor"}),(0,r.jsxs)(n.p,{children:["Signal to the network that you will not be present for a prolonged period of time using the ",(0,r.jsx)(n.code,{children:"pause"})," command."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid tx customgov councilor pause \\\n--from=$SIGNER $FLAGS_TX\n"})}),(0,r.jsx)(n.h4,{id:"8c99fc30dd5f481c8247d1daae8d6952",children:"Unpause Councilor"}),(0,r.jsxs)(n.p,{children:["Signal to the network that you wish to regain voting ability after planned absence using the ",(0,r.jsx)(n.code,{children:"unpause"})," command."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid tx customgov councilor unpause \\\n--from=$SIGNER $FLAGS_TX\n"})}),(0,r.jsx)(n.h4,{id:"62d7f7ff9f4040b0a4b694038b15dad0",children:"Activate Councilor"}),(0,r.jsxs)(n.p,{children:["Signal to the network that Councilor wishes to regain voting ability using the ",(0,r.jsx)(n.code,{children:"activate"})," command."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid tx customgov councilor activate \\\n--from=$SIGNER $FLAGS_TX\n"})})]}),(0,r.jsxs)(c.Z,{value:"queries",label:"Queries",children:[(0,r.jsx)(n.h2,{id:"615f1f023f3543ae9e4c1454ecac7bef",children:"Queries"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"councilors"})})}),(0,r.jsx)(n.th,{children:"Query all councilors, including their statuses, ranks, and abstention counters."})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"non-councilors"})})}),(0,r.jsx)(n.td,{children:"Query all governance members that are not councilors."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"council-registry"})})}),(0,r.jsx)(n.td,{children:"Query the governance registry by address or moniker."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"proposer-voters-count"})})}),(0,r.jsx)(n.td,{children:"Query separate counts for proposers and voters who can create or vote on at least one type of proposal."})]})]})]}),(0,r.jsx)(n.h4,{id:"26b717c801854e9793afe368e12d269a",children:"Query Councilors"}),(0,r.jsx)(n.p,{children:"Query all councilors, waiting or not, including their corresponding statuses, ranks & abstention counters."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid query customgov councilors $FLAGS_QR | jq\n"})}),(0,r.jsx)(n.h4,{id:"f5237a8583e44858844c8dc7ab2ce027",children:"Query Non-councilors"}),(0,r.jsx)(n.p,{children:"Query all governance members that are not councilors."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid query customgov non-councilors $FLAGS_QR | jq\n"})}),(0,r.jsx)(n.h4,{id:"25a16eabea2a4ea29ea337bede7e6951",children:"Query Council Registry"}),(0,r.jsx)(n.p,{children:"Query the governance registry. The registry can be queried by either address or moniker."}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$ADDRESS"}),": The address you want to query information."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$MONIKER"}),": The moniker you want to query information."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid query customgov council-registry \\\n--addr=$ADDRESS --moniker=$MONIKER \\\n$FLAGS_QR | jq\n"})}),(0,r.jsx)(n.h4,{id:"464b5bdc49f249e1bd1856c2cc62add0",children:"Query Proposer and Voters Count"}),(0,r.jsx)(n.p,{children:"Retrieve the count of accounts that can create a proposal (proposers) and the count of accounts that can vote on at least one type of proposal (voters)."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid query customgov proposer_voters_count $FLAGS_QR | jq\n"})})]}),(0,r.jsxs)(c.Z,{value:"governance",label:"Governance",children:[(0,r.jsx)(n.h2,{id:"9a0bdd12e2fe4d06b71c62956064d408",children:"Governance"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"proposal-jail-councilor"})}),(0,r.jsx)(n.th,{children:"Proposes to jail councilors for violating the network's rules"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"proposal-reset-whole-councilor-rank"})}),(0,r.jsx)(n.td,{children:"Proposes to reset the ranking of all councilors"})]})})]}),(0,r.jsx)(n.h4,{id:"4244a636534b4f04adad4fa01d469580",children:"Jailing Councilors"}),(0,r.jsxs)(n.p,{children:["Create a proposal to jail specific councilors using the ",(0,r.jsx)(n.code,{children:"proposal-jail-councilor"})," command followed by councilor(s) ",(0,r.jsx)(n.code,{children:"$COUNCILORS"}),"."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Args"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$COUNCILORS"}),": List of councilors to be jailed, comma separated list of addresses."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$TITLE"}),": The title of the proposal."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal, it can be a URL, some text, etc."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid tx customgov proposal proposal-jail-councilor \\\n--from=$SIGNER $FLAGS_TX \\\n$COUNCILORS --title=$TITLE --description=$DESCRIPTION\n"})}),(0,r.jsx)(n.h4,{id:"611ac52d4d99410cb4b4320f118d3bce",children:"Reset All Councilors Ranks"}),(0,r.jsxs)(n.p,{children:["Create a proposal to reset all councilors rank using the ",(0,r.jsx)(n.code,{children:"proposal-reset-whole-councilor-rank"})," command."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$TITLE"}),": The title of the proposal."]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal, it can be a URL, some text, etc."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid tx customgov proposal proposal-reset-whole-councilor-rank \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION\n"})})]})]})]})}function x(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>c});s(7294);var r=s(6905);const o={tabItem:"tabItem_Ymn6"};var i=s(5893);function c(e){let{children:n,hidden:s,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,c),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>y});var r=s(7294),o=s(6905),i=s(2466),c=s(6550),t=s(469),a=s(1980),l=s(7392),d=s(12);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:r,default:o}}=e;return{value:n,label:s,attributes:r,default:o}}))}(s);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const o=(0,c.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(o.location.search);n.set(i,e),o.replace({...o.location,search:n.toString()})}),[i,o])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:o}=e,i=u(e),[c,a]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=s.find((e=>e.default))??s[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[l,h]=j({queryString:s,groupId:o}),[p,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,i]=(0,d.Nk)(s);return[o,(0,r.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:o}),g=(()=>{const e=l??p;return x({value:e,tabValues:i})?e:null})();(0,t.Z)((()=>{g&&a(g)}),[g]);return{selectedValue:c,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=s(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=s(5893);function f(e){let{className:n,block:s,selectedValue:r,selectValue:c,tabValues:t}=e;const a=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const n=e.currentTarget,s=a.indexOf(n),o=t[s].value;o!==r&&(l(n),c(o))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":s},n),children:t.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>a.push(e),onKeyDown:h,onClick:d,...i,className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:o}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=p(e);return(0,m.jsxs)("div",{className:(0,o.Z)("tabs-container",g.tabList),children:[(0,m.jsx)(f,{...n,...e}),(0,m.jsx)(v,{...n,...e})]})}function y(e){const n=(0,b.Z)();return(0,m.jsx)(k,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>c});var r=s(7294);const o={},i=r.createContext(o);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);