"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6571],{6992:(e,r,i)=>{i.r(r),i.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var s=i(5893),n=i(1151),t=i(4866),d=i(5162);const c={title:"Identity Registrar",sidebar_position:7,slug:"/d482180d-165a-4c09-8c32-167f061ceb92"},a=void 0,o={id:"Backend---SEKAI/Command-Line-Interface/Modules/Governance/Identity-Registrar",title:"Identity Registrar",description:"Concept",source:"@site/tabs/Docs/Backend---SEKAI/Command-Line-Interface/Modules/Governance/Identity-Registrar.mdx",sourceDirName:"Backend---SEKAI/Command-Line-Interface/Modules/Governance",slug:"/d482180d-165a-4c09-8c32-167f061ceb92",permalink:"/docs/d482180d-165a-4c09-8c32-167f061ceb92",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Identity Registrar",sidebar_position:7,slug:"/d482180d-165a-4c09-8c32-167f061ceb92"},sidebar:"defaultSidebar",previous:{title:"Network Properties",permalink:"/docs/b9b95792-b936-4603-8a46-15566f24e3c0"},next:{title:"Data Registry",permalink:"/docs/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c"}},l={},h=[{value:"Concept",id:"9c97a6c6054d453c8245d2973adc7759",level:2},{value:"Record Verification Process",id:"5c2105975b574720828df7a8b4e61ce6",level:3},{value:"Unique Identity Keys",id:"7cc44d12adbc452199448907f6756306",level:3},{value:"Consensus Node Records Examples",id:"2c29fae12274406b915c3f6df714c39a",level:4},{value:"Users Records Examples",id:"cef2ddb6fb744ca5a8f7312f2246bc20",level:4},{value:"Parameters",id:"026f178a01804399a7ebb999934c01ad",level:2},{value:"CLI Syntax &amp; Examples",id:"f1fb0aad90ad4d53978864b33ac263c9",level:2},{value:"Transactions",id:"335766cd9511406e99cbaeea5b6428cc",level:2},{value:"Adding &amp; Editing Records",id:"62956e6786bf4d3a96b5cd70654c92a9",level:4},{value:"Deleting Records",id:"af09186bc0ce40109ee7c1ac05b80266",level:4},{value:"Requesting Record Verification",id:"bb0d96fae6004b9e8492e36357643c77",level:4},{value:"Verifying or Rejecting Records Verification Requests",id:"9da55fa53fea4987bed3cbc06d80d56d",level:4},{value:"Queries",id:"d13c14d8a80f46f4a2ad26e3cbe8b859",level:2},{value:"Query Identity Record by Id",id:"6776be81baeb48ba8b1e36ff2925d5ff",level:4},{value:"Query Identity Records by Address",id:"865325fc4b494eec95bcd7d9a9743a6f",level:4},{value:"Query Specific Record Id of a Specific Account",id:"6c3f59a1538f4b6c82b64b5789c3b2a8",level:4},{value:"Query Specific Record Key of a Specific Account",id:"56dc6e36f358439c9a4cebcebea4995e",level:4},{value:"Query All Pending Requests of a Specific Record Id",id:"a14eba53930948d0ab0aff5289e8084f",level:4},{value:"Query All Pending Record Requests as Requester",id:"2b3f53912b494d66a3c351452df7d8d8",level:4},{value:"Query All Pending Record Requests as Verifier/approver",id:"89c15277298943eea39981e1bbe61449",level:4},{value:"Governance",id:"f1324a890dd64b178343e16d2b8e8127",level:2}];function u(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h2,{id:"9c97a6c6054d453c8245d2973adc7759",children:"Concept"}),"\n",(0,s.jsx)(r.p,{children:'The Identity Registrar (IR) is a central component of the KIRA network, designed to bolster the integrity and authenticity of user accounts. It addresses the critical challenge of "Sybil attacks", where a single entity poses as multiple users. Through the IR, KIRA emphasizes the significance of genuine, unique user representation, ensuring a more democratic and fair governance structure.'}),"\n",(0,s.jsxs)(r.p,{children:["At its core, the IR provides a mechanism for users to authenticate assertions about themselves, such as ownership of a website or an online handle. Unlike traditional centralized verification systems, the IR operates on mutual verification principles within the community. Users within the KIRA network can endorse the validity of claims made by others by giving their attestation, fostering an environment of collective trust. The framework of the IR is akin to a digital dictionary, allowing users to define key-value pairs relevant to their identity. For instance, associating a key ",(0,s.jsx)(r.code,{children:"website"})," with the value ",(0,s.jsx)(r.code,{children:"example.com"})," serves as proof of ownership of said website. Importantly, any alteration to these authenticated records necessitates re-verification, preserving the integrity of claims."]}),"\n",(0,s.jsx)(r.p,{children:"The essence of IR transcends mere claim verification. Addressing concerns of true sovereignty, IR refines the concept of social attestations. Instead of uniformly weighing attestations, the focus pivots to the trustworthiness of the attestor from an individual or application's perspective. This subjectivity highlights that in the vast sea of approvals, the ones deemed trustworthy to the user or a specific application are the ones that truly matter. It recognizes that while multiple individuals may appear non-sovereign from a network's viewpoint, in reality, their distinct identities hold weight. The IR thus fosters a nuanced, relative view of identity that adapts across applications and purposes, emphasizing the notion that when it comes to digital identity, objective truths are often overshadowed by the diverse perspectives they cater to."}),"\n",(0,s.jsx)(r.h3,{id:"5c2105975b574720828df7a8b4e61ce6",children:"Record Verification Process"}),"\n",(0,s.jsx)(r.p,{children:"The process of verifying an identity record involves a few steps:"}),"\n",(0,s.jsxs)(r.ol,{children:["\n",(0,s.jsx)(r.li,{children:"An user creates an on-chain transaction that includes the desired key and value for the identity record."}),"\n",(0,s.jsx)(r.li,{children:"It then requests verification from a publicly trusted KIRA account for the key-value pair, and include a tip as payment for the service provided."}),"\n",(0,s.jsx)(r.li,{children:"If the verification is successful, the record will remain verified unless any changes are made to the verified key."}),"\n",(0,s.jsx)(r.li,{children:"If any changes are made to the key after the verification process, the record will no longer be considered verified."}),"\n"]}),"\n",(0,s.jsxs)(r.p,{children:["It is important to note that verification requests must include a tip, which cannot be less than the ",(0,s.jsx)(r.code,{children:"min_identity_approval_tip"})," ",(0,s.jsx)(r.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network property"})," (default: 2x the transaction cost of the approval/rejection transaction). This tip is meant to incentivize other accounts to verify identity records, or at least provide them with a refund of the transaction cost. Tips are paid regardless of whether the records are rejected or approved, ensuring that approvers are honest and trusted, rather than motivated solely by financial gain. The network governance can also choose to distrust any account at any time through a proposal process, marking them as potentially malicious and referencing the evidence."]}),"\n",(0,s.jsx)(r.h3,{id:"7cc44d12adbc452199448907f6756306",children:"Unique Identity Keys"}),"\n",(0,s.jsxs)(r.p,{children:["KIRA offers a range of dedicated identity keys designed to make interactions with the network more user-friendly. These keys store various user-related information that can be interpreted by wallets, explorers, visualizers, and other front-end applications. Notably, KIRA allows for the creation of ",(0,s.jsx)(r.strong,{children:"any"})," custom key within the Identity Registrar, but it reserves certain key names like ",(0,s.jsx)(r.code,{children:"username"})," and ",(0,s.jsx)(r.code,{children:"moniker"})," by default. These reserved keys have special significance, affecting the visibility of nodes or accounts across different applications. What's more, the governance of the KIRA network can enforce these key-value pairs to remain globally unique, provided they do not already exist, which is managed by modifying the ",(0,s.jsx)(r.code,{children:"unique_identity_keys"})," ",(0,s.jsx)(r.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network property"}),". As a result, users can send assets not just to a KIRA address, but also by simply providing a unique username or moniker. Once these unique keys are created, they cannot be deleted, ensuring a more streamlined and user-friendly experience."]}),"\n",(0,s.jsx)(r.h4,{id:"2c29fae12274406b915c3f6df714c39a",children:"Consensus Node Records Examples"}),"\n",(0,s.jsx)(r.p,{children:"Governance can create one or more of the following keys in the Identity Registrar as unique to increase consensus node public recognition and trust"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"NAME"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"TYPE"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"DESCRIPTION"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"moniker"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"Identifies validator name as seen on the leaderboard table."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"description"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"A longer description of validator node"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"website"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"URL to the validator website"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"logo"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"URL to\xa0.SVG\xa0image (256kB max) representing validator entity"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"social"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"Any social profiles such as Twitter, Telegram, etc\u2026"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"contact"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"Email address, url, or another emergency contact"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"validator_node_id"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"Node ID of the validator node. Required to identify the node in the network visualizer."})]})]})]}),"\n",(0,s.jsx)(r.h4,{id:"cef2ddb6fb744ca5a8f7312f2246bc20",children:"Users Records Examples"}),"\n",(0,s.jsx)(r.p,{children:"Users can create one or several of the following keys in the Identity Registrar in order to make their account easier to identify and recognize by other users."}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"NAME"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"TYPE"})}),(0,s.jsx)(r.th,{children:(0,s.jsx)(r.strong,{children:"DESCRIPTION"})})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"username"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsxs)(r.td,{children:["Identifies your name as seen on the network explorer. The value can be used for the purpose of sending transactions similarly to ",(0,s.jsx)(r.a,{href:"https://ens.domains/",children:"ENS domain"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"avatar"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:"URL to\xa0.SVG\xa0image or gif (256kB max)"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"026f178a01804399a7ebb999934c01ad",children:"Parameters"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"NAME"}),(0,s.jsx)(r.th,{children:"TYPE"}),(0,s.jsx)(r.th,{children:"EXAMPLE"}),(0,s.jsx)(r.th,{children:"DESCRIPTION"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"id"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"uint64"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"153789"})}),(0,s.jsx)(r.td,{children:"A unique identifier for the Identity Record."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"address"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"kira1vgy0v6l593lxghv9v8a98nl87x4y2uvfn0yn7r"})}),(0,s.jsx)(r.td,{children:"The address of the user associated with the Identity Record."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"key"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"website"})}),(0,s.jsxs)(r.td,{children:['The key representing the type of identity information, e.g., "website" for website ownership. Can be custom or reserved such as ',(0,s.jsx)(r.code,{children:"username"})," or ",(0,s.jsx)(r.code,{children:"moniker"}),"."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"value"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"string"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"example.com"})}),(0,s.jsxs)(r.td,{children:["The value associated with the key, serving as proof of ownership or association, e.g., a website URL for a ",(0,s.jsx)(r.code,{children:"website"})," key."]})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"date"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"google.protobuf.Timestamp"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"2023-09-28T12:34:56Z"})}),(0,s.jsx)(r.td,{children:"The timestamp indicating when the Identity Record was created."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"verifiers"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"[]string"})}),(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:'[kira1vgy0v6l59\u2026, kira1gurt0g67y9\u2026"]'})}),(0,s.jsx)(r.td,{children:"A list of addresses of users who have verified the validity of the Identity Record."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"f1fb0aad90ad4d53978864b33ac263c9",children:"CLI Syntax & Examples"}),"\n",(0,s.jsx)(r.admonition,{type:"note",children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,s.jsx)(r.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,s.jsx)(r.em,{children:"Roles & Permissions"})})," ",(0,s.jsx)(r.em,{children:"documentation for more details."})," ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.code,{children:"$SIGNER"})})," ",(0,s.jsx)(r.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,s.jsx)(r.em,{children:(0,s.jsx)(r.code,{children:"$FLAGS_TX"})})," ",(0,s.jsx)(r.em,{children:"and"})," ",(0,s.jsxs)(r.em,{children:[(0,s.jsx)(r.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,s.jsx)(r.em,{children:"section"})]})}),"\n",(0,s.jsxs)(t.Z,{children:[(0,s.jsxs)(d.Z,{value:"transactions",label:"Transactions",children:[(0,s.jsx)(r.h2,{id:"335766cd9511406e99cbaeea5b6428cc",children:"Transactions"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.code,{children:"register-identity-records"})}),(0,s.jsx)(r.th,{children:"Add or edit identity records."})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"delete-identity-records"})}),(0,s.jsx)(r.td,{children:"Delete one or several identity records."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"request-identity-record-verify"})}),(0,s.jsx)(r.td,{children:"Request verification for an identity record."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"handle-identity-records-verify-request"})}),(0,s.jsx)(r.td,{children:"Verify or reject requests for identity record verification."})]})]})]}),(0,s.jsx)(r.h4,{id:"62956e6786bf4d3a96b5cd70654c92a9",children:"Adding & Editing Records"}),(0,s.jsxs)(r.p,{children:["To add or edit identity records, use the ",(0,s.jsx)(r.code,{children:"register-identity-records"})," CLI command. Provide the desired key-value pairs either in a JSON file by specifying its path with the ",(0,s.jsx)(r.code,{children:"--infos-file"})," flag, or directly in the command as a JSON string using the ",(0,s.jsx)(r.code,{children:"--infos-json"})," flag. Note that certain key names are reserved and may be required to be unique within the Identity Registrar."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Flags"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$INFOSFILE"}),": The path to the file containing information for the identity request."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$INFOSJSON"}),": The JSON string containing information for the identity request."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"sekaid tx customgov register-identity-records \\\n--from=$SIGNER $FLAGS_TX \\\n[ --infos-file=$INFOSFILE || --infos-json=$INFOSJSON ]\n"})}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'# Example\n# from an id.json file with below content : \n#  {\n#      "key1": "value1",\n#      "key2": "value2"\n#  }\nsekaid tx customgov register-identity-records \\\n--from=$SIGNER $FLAGS_TX \\\n--infos-file="path-to-id.json" \n\n# providing json format manually \nsekaid tx customgov register-identity-records \\\n--from=$SIGNER $FLAGS_TX \\ \n--infos-json="{\\"$KEY1\\":\\"$VAL1\\",\\"$KEY2\\":\\"$VAL2\\"}"\n'})}),(0,s.jsx)(r.h4,{id:"af09186bc0ce40109ee7c1ac05b80266",children:"Deleting Records"}),(0,s.jsxs)(r.p,{children:["To delete one or several identity records, use the ",(0,s.jsx)(r.code,{children:"delete-identity-records"})," CLI command and provide the keys to be deleted as a comma-separated list using the ",(0,s.jsx)(r.code,{children:"--keys"})," flag. Note that the keys ",(0,s.jsx)(r.code,{children:"moniker"})," and ",(0,s.jsx)(r.code,{children:"username"})," cannot be deleted."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Flags"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$KEYS"}),": Comma-separated list of keys."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"sekaid tx customgov delete-identity-records \\\n--from=$SIGNER $FLAGS_TX \\\n--keys=$KEYS\n"})}),(0,s.jsx)(r.h4,{id:"bb0d96fae6004b9e8492e36357643c77",children:"Requesting Record Verification"}),(0,s.jsxs)(r.p,{children:["To verify an identity record, use the ",(0,s.jsx)(r.code,{children:"request-identity-record-verify"})," CLI command. Provide the address of the verifier using the ",(0,s.jsx)(r.code,{children:"--verifier"})," flag, and the desired key(s) or record ID(s) using the ",(0,s.jsx)(r.code,{children:"--record-ids"})," flag. Users can also provide a tip using the ",(0,s.jsx)(r.code,{children:"--tip"})," flag to incentivize the verifier to review the request. Note that the tip value must be greater than twice the transaction fee value."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Flags"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$VERIFIER"}),": The verifier\u2019s address."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$RECORDIDS"}),": Comma-separated list of identity record ids."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$TIP"}),": The tip to be given to the verifier."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"sekaid tx customgov request-identity-record-verify \\\n--from=$SIGNER $FLAGS_TX \\\n--verifier=$VERIFIER --record-ids=$RECORDIDS --tip=$TIP\n"})}),(0,s.jsx)(r.h4,{id:"9da55fa53fea4987bed3cbc06d80d56d",children:"Verifying or Rejecting Records Verification Requests"}),(0,s.jsxs)(r.p,{children:["To verify or reject a request for identity record verification, use the ",(0,s.jsx)(r.code,{children:"handle-identity-records-verify-request"})," CLI command. To approve the request, include the ",(0,s.jsx)(r.code,{children:"--approve"})," flag and set its value to ",(0,s.jsx)(r.code,{children:"true"}),". To reject the request, set the value of ",(0,s.jsx)(r.code,{children:"--approve"})," to ",(0,s.jsx)(r.code,{children:"false"}),". The ID of the request must also be provided. Only the verifier specified in the original request can approve or reject it."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Args"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$ID"}),": Id of the key to be approved/rejected."]}),"\n"]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Flags"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$APPROVE"}),": The flag to approve or reject the verification request. Defaults to ",(0,s.jsx)(r.code,{children:"true"}),"."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"sekaid tx customgov handle-identity-records-verify-request \\\n--from=$SIGNER $FLAGS_TX \\\n$ID --approve=$APPROVE\n"})})]}),(0,s.jsxs)(d.Z,{value:"queries",label:"Queries",children:[(0,s.jsx)(r.h2,{id:"d13c14d8a80f46f4a2ad26e3cbe8b859",children:"Queries"}),(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:(0,s.jsx)(r.code,{children:"all-identity-records"})}),(0,s.jsx)(r.th,{children:"Query all identity records."})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"identity-record"})}),(0,s.jsx)(r.td,{children:"Query identity record by id."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"identity-records-by-addr"})}),(0,s.jsx)(r.td,{children:"Query identity records by owner."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"identity-record-verify-request"})}),(0,s.jsx)(r.td,{children:"Query identity record verify request by id."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"identity-record-verify-requests-by-requester"})}),(0,s.jsx)(r.td,{children:"Query identity records verify requests by requester."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.code,{children:"identity-record-verify-requests-by-approver"})}),(0,s.jsx)(r.td,{children:"Query identity record verify request by verifier/approver."})]})]})]}),(0,s.jsx)(r.h4,{id:"6776be81baeb48ba8b1e36ff2925d5ff",children:"Query Identity Record by Id"}),(0,s.jsxs)(r.p,{children:["Retrieve a specific identity record using the ",(0,s.jsx)(r.code,{children:"identity-record"})," subcommand followed by the record\u2019s identifier."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Args"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$ID"}),": ID of the record."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"sekaid query customgov identity-record $ID $FLAGS_QR | jq\n"})}),(0,s.jsx)(r.h4,{id:"865325fc4b494eec95bcd7d9a9743a6f",children:"Query Identity Records by Address"}),(0,s.jsxs)(r.p,{children:["Fetch all identity records associated with a specific account using the ",(0,s.jsx)(r.code,{children:"identity-records-by-addr"})," subcommand followed by the account\u2019s address."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Args"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$ACCOUNT"}),": The account\u2019s address."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"sekaid query customgov identity-records-by-addr $ACCOUNT $FLAGS_QR | jq\n"})}),(0,s.jsx)(r.h4,{id:"6c3f59a1538f4b6c82b64b5789c3b2a8",children:"Query Specific Record Id of a Specific Account"}),(0,s.jsxs)(r.p,{children:["To query a specific record ID of a specific account, utilize the ",(0,s.jsx)(r.code,{children:"identity-records-by-addr"})," subcommand in conjunction with ",(0,s.jsx)(r.code,{children:"jq"})," filtering using the specific record ID."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Args"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$ACCOUNT"}),": The address of the account."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$ID"}),": ID of the record."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'sekaid query customgov identity-records-by-addr $ACCOUNT $FLAGS_QR | jq ".records | .[] | select(.id==\\\\"$ID\\\\")"\n'})}),(0,s.jsx)(r.h4,{id:"56dc6e36f358439c9a4cebcebea4995e",children:"Query Specific Record Key of a Specific Account"}),(0,s.jsxs)(r.p,{children:["Retrieve a specific record key of a specific account using the ",(0,s.jsx)(r.code,{children:"identity-records-by-addr"})," subcommand and ",(0,s.jsx)(r.code,{children:"jq"})," filtering."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Args"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$ACCOUNT"}),": The address of the account."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$KEY"}),": The key of the record."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'sekaid query customgov identity-records-by-addr $ACCOUNT $FLAGS_QR | jq ".records | .[] | select(.key==\\\\"$KEY\\\\")"\n'})}),(0,s.jsx)(r.h4,{id:"a14eba53930948d0ab0aff5289e8084f",children:"Query All Pending Requests of a Specific Record Id"}),(0,s.jsxs)(r.p,{children:["Fetch all pending requests of a specific record ID using the ",(0,s.jsx)(r.code,{children:"identity-record-verify-requests"})," subcommand followed by the record ID."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Args"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$ID"}),": ID of the record."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:"sekaid query customgov identity-record-verify-requests-by-requester $ID $FLAGS_QR | jq\n"})}),(0,s.jsx)(r.h4,{id:"2b3f53912b494d66a3c351452df7d8d8",children:"Query All Pending Record Requests as Requester"}),(0,s.jsxs)(r.p,{children:["Retrieve all pending verification requests of a requester account using the ",(0,s.jsx)(r.code,{children:"identity-record-verify-requests-by-approver"})," subcommand. For a more specific query, an optional ",(0,s.jsx)(r.code,{children:"$VERIFIER"})," argument may be provided to filter the results to only display pending requests sent to a specific verifier/approver account."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Args"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$ACCOUNT"}),": Account\u2019s address."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$VERIFIER"}),": (Optional) The specific verifier\u2019s address."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'# For all pending requests of a requester account\nsekaid query customgov identity-record-verify-requests-by-requester $ACCOUNT $FLAGS_QR | jq\n\n# For all pending requests of a requester account sent to a specific verifier\nsekaid query customgov identity-record-verify-requests-by-requester $ACCOUNT $FLAGS_QR | jq ".verify_records | .[] | select(.verifier==\\\\"$VERIFIER\\\\")"\n'})}),(0,s.jsx)(r.h4,{id:"89c15277298943eea39981e1bbe61449",children:"Query All Pending Record Requests as Verifier/approver"}),(0,s.jsxs)(r.p,{children:["Retrieve all pending verification requests for a verifier using the ",(0,s.jsx)(r.code,{children:"identity-record-verify-requests-by-approver"})," subcommand. For a more specific query, an optional ",(0,s.jsx)(r.code,{children:"$ACCOUNT"})," argument may be provided to filter the results to only display requests from a specific requester account."]}),(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Args"})}),(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$VERIFIER"}),": The verifier\u2019s address."]}),"\n",(0,s.jsxs)(r.li,{children:[(0,s.jsx)(r.code,{children:"$ACCOUNT"}),": (Optional) The specific requester\u2019s address."]}),"\n"]}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-bash",children:'# For all requests of a verifier\nsekaid query customgov identity-record-verify-requests-by-approver $VERIFIER $FLAGS_QR | jq\n\n# For all requests of a verifier of a specific requester account\nsekaid query customgov identity-record-verify-requests-by-approver $VERIFIER $FLAGS_QR | jq ".verify_records | .[] | select(.address==\\\\"$ACCOUNT\\\\")"\n'})})]}),(0,s.jsxs)(d.Z,{value:"governance",label:"Governance",children:[(0,s.jsx)(r.h2,{id:"f1324a890dd64b178343e16d2b8e8127",children:"Governance"}),(0,s.jsx)(r.p,{children:"There is no governance proposal for this sub-module."})]})]})]})}function f(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5162:(e,r,i)=>{i.d(r,{Z:()=>d});i(7294);var s=i(6905);const n={tabItem:"tabItem_Ymn6"};var t=i(5893);function d(e){let{children:r,hidden:i,className:d}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(n.tabItem,d),hidden:i,children:r})}},4866:(e,r,i)=>{i.d(r,{Z:()=>I});var s=i(7294),n=i(6905),t=i(2466),d=i(6550),c=i(469),a=i(1980),o=i(7392),l=i(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:r,children:i}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return h(e).map((e=>{let{props:{value:r,label:i,attributes:s,default:n}}=e;return{value:r,label:i,attributes:s,default:n}}))}(i);return function(e){const r=(0,o.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,i])}function f(e){let{value:r,tabValues:i}=e;return i.some((e=>e.value===r))}function x(e){let{queryString:r=!1,groupId:i}=e;const n=(0,d.k6)(),t=function(e){let{queryString:r=!1,groupId:i}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:r,groupId:i});return[(0,a._X)(t),(0,s.useCallback)((e=>{if(!t)return;const r=new URLSearchParams(n.location.search);r.set(t,e),n.replace({...n.location,search:r.toString()})}),[t,n])]}function j(e){const{defaultValue:r,queryString:i=!1,groupId:n}=e,t=u(e),[d,a]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!f({value:r,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:t}))),[o,h]=x({queryString:i,groupId:n}),[j,p]=function(e){let{groupId:r}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,t]=(0,l.Nk)(i);return[n,(0,s.useCallback)((e=>{i&&t.set(e)}),[i,t])]}({groupId:n}),y=(()=>{const e=o??j;return f({value:e,tabValues:t})?e:null})();(0,c.Z)((()=>{y&&a(y)}),[y]);return{selectedValue:d,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);a(e),h(e),p(e)}),[h,p,t]),tabValues:t}}var p=i(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=i(5893);function v(e){let{className:r,block:i,selectedValue:s,selectValue:d,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),l=e=>{const r=e.currentTarget,i=a.indexOf(r),n=c[i].value;n!==s&&(o(r),d(n))},h=e=>{let r=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const i=a.indexOf(e.currentTarget)+1;r=a[i]??a[0];break}case"ArrowLeft":{const i=a.indexOf(e.currentTarget)-1;r=a[i]??a[a.length-1];break}}r?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":i},r),children:c.map((e=>{let{value:r,label:i,attributes:t}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>a.push(e),onKeyDown:h,onClick:l,...t,className:(0,n.Z)("tabs__item",y.tabItem,t?.className,{"tabs__item--active":s===r}),children:i??r},r)}))})}function m(e){let{lazy:r,children:i,selectedValue:n}=e;const t=(Array.isArray(i)?i:[i]).filter(Boolean);if(r){const e=t.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:t.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==n})))})}function g(e){const r=j(e);return(0,b.jsxs)("div",{className:(0,n.Z)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...e,...r}),(0,b.jsx)(m,{...e,...r})]})}function I(e){const r=(0,p.Z)();return(0,b.jsx)(g,{...e,children:h(e.children)},String(r))}},1151:(e,r,i)=>{i.d(r,{Z:()=>c,a:()=>d});var s=i(7294);const n={},t=s.createContext(n);function d(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);