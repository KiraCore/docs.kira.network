"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[5476],{974:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>x,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var t=s(5893),r=s(1151),a=s(4866),i=s(5162);const c={title:"Transaction validation & processing",sidebar_position:1,slug:"/f7f02009-1f78-426b-8915-f503cdda9671"},d=void 0,o={id:"Backend---SEKAI/Command-Line-Interface/Modules/Auth/Transaction-validation-&-processing",title:"Transaction validation & processing",description:"Concept",source:"@site/tabs/Docs/Backend---SEKAI/Command-Line-Interface/Modules/Auth/Transaction-validation-&-processing.mdx",sourceDirName:"Backend---SEKAI/Command-Line-Interface/Modules/Auth",slug:"/f7f02009-1f78-426b-8915-f503cdda9671",permalink:"/docs/f7f02009-1f78-426b-8915-f503cdda9671",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/f7f02009-1f78-426b-8915-f503cdda9671&page-local=backend---sekai/command-line-interface/modules/auth/transaction-validation-&-processing.mdx",tags:[],version:"current",lastUpdatedAt:1710052418,formattedLastUpdatedAt:"Mar 10, 2024",sidebarPosition:1,frontMatter:{title:"Transaction validation & processing",sidebar_position:1,slug:"/f7f02009-1f78-426b-8915-f503cdda9671"},sidebar:"defaultSidebar",previous:{title:"Auth",permalink:"/docs/cb04c86c-93bc-47bd-8a40-510e60bd7115"},next:{title:"Params",permalink:"/docs/2c0ff397-9a46-4ea5-9b70-92d67ae00aa4"}},l={},h=[{value:"Concept",id:"369e904c786849559f583b442cf79b77",level:3},{value:"Governance",id:"8f77e772510844c4a585a1ecfdc4b3d7",level:3},{value:"Parameters",id:"cb3a71b9b28f4cceae1ab341101c1feb",level:3},{value:"Standard Decorators",id:"187c1bf7567240508a620dc14c4cce93",level:3},{value:"Custom Decorators",id:"7ae4eacc2b8e4ec780c5b1988f58d815",level:3},{value:"CLI Syntax &amp; Examples",id:"2ec87135e9df43709bc798e10d3f1cf9",level:2},{value:"Transactions",id:"f60ea4930d09400e872edb6979e2ea1d",level:2},{value:"Sign a Transaction",id:"21ca23e3ce3e43d782feb4a7d8e39568",level:4},{value:"Sign Multiple Transactions",id:"f7252dcb2df14b30bf17212b3b223f6a",level:4},{value:"Multi-sign a Transaction",id:"3a887933c2504b16a5fb3f9151fabe7b",level:4},{value:"Multi-sign a Batch of Transactions",id:"22ece625527c4d69aa19526816334088",level:4},{value:"Validate Transaction Signatures",id:"40a39a4b30a843ee8c4c6759dcaf4ea9",level:4},{value:"Broadcast a Transaction",id:"fa061894e92c4158a80861ea974e952c",level:4},{value:"Aux-to-fee",id:"9671efd0273b4424aab5cf5a233621d4",level:4},{value:"Queries",id:"5f7711aaeb824bb0b9f5635eb4c8e38e",level:2},{value:"Query an Account",id:"669879c5100547f0b933d19f39ee6808",level:4},{value:"Query All Accounts",id:"11cbbf596f6f43d4b1c0da7b5dd1efb0",level:4},{value:"Query Auth Parameters",id:"16dbb6704fef42abb49cd92a1280ec83",level:4},{value:"Governance",id:"4d87891f998146c7959256f7ba3bb6b5",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"369e904c786849559f583b442cf79b77",children:"Concept"}),"\n",(0,t.jsxs)(n.p,{children:["The Auth module in KIRA extends the functionality of the Cosmos SDK's ",(0,t.jsx)(n.code,{children:"auth"})," module, focusing on validating and processing transactions within the network. It utilizes a set of ",(0,t.jsx)(n.code,{children:"AnteDecorators"})," to perform basic transaction validity checks before they are included in the blockchain. These checks involve verifying signatures, ensuring correct nonces, and validating auxiliary fields. The Auth module is also responsible for managing accounts, including their creation, storage, and querying, as well as maintaining associated account information."]}),"\n",(0,t.jsxs)(n.p,{children:["KIRA enriches the standard handlers by introducing custom decorators tailored to its network requirements such as custody rules, poor network conditions and token whitelist/blacklist enforcement.. One key area is fee processing; since KIRA does not have a concept of gas fees, it implements specific decorators for this purpose. More information on KIRA's fee processing can be found in the ",(0,t.jsx)(n.a,{href:"/docs/184c11ed-4849-4ec5-acd0-f795b7abf467",children:"Fee processing"})," module."]}),"\n",(0,t.jsx)(n.h3,{id:"8f77e772510844c4a585a1ecfdc4b3d7",children:"Governance"}),"\n",(0,t.jsx)(n.p,{children:"Currently, there is no mechanism implemented to change the Auth module parameters through governance. These parameters are initialized during the application setup, and there is no built-in procedure available to modify them subsequently."}),"\n",(0,t.jsx)(n.h3,{id:"cb3a71b9b28f4cceae1ab341101c1feb",children:"Parameters"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsx)(n.p,{children:"All parameters pertaining to gas fees are obsolete."})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"NAME"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"TYPE"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"EXAMPLE"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"max_memo_characters"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uint64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"512"})}),(0,t.jsx)(n.td,{children:"The maximum permitted number of characters in the memo of a transaction"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tx_sig_limit"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uint64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"7"})}),(0,t.jsx)(n.td,{children:"The maximum number of signers for a transaction. A single transaction can have multiple messages and multiple signers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tx_size_cost_per_byte"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uint64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"10"})}),(0,t.jsxs)(n.td,{children:["The cost per byte used to compute the gas consumption of a transaction. ",(0,t.jsx)(n.code,{children:"TxSizeCostPerByte * txsize"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sig_verify_cost_ed25519"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uint64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"590"})}),(0,t.jsx)(n.td,{children:"The gas cost for verifying ED25519 signatures"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"sig_verify_cost_secp256k1"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uint64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"1000"})}),(0,t.jsx)(n.td,{children:"The gas cost for verifying Secp256k1 signatures"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"187c1bf7567240508a620dc14c4cce93",children:"Standard Decorators"}),"\n",(0,t.jsxs)(n.p,{children:["These are ",(0,t.jsx)(n.code,{children:"auth"}),"'s standard ",(0,t.jsx)(n.code,{children:"AnteDecorators"})," that are chained together in a specific ",(0,t.jsx)(n.a,{href:"https://github.com/KiraCore/sekai/blob/master/app/ante/ante.go#L40-L61",children:"order"})," to form an ",(0,t.jsx)(n.code,{children:"AnteHandler"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"DECORATOR"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SetUpContextDecorator"})}),(0,t.jsx)(n.td,{children:"Sets up the context and gas meter for transactions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"RejectExtensionOptionsDecorator"})}),(0,t.jsx)(n.td,{children:"Rejects extension options in protobuf transactions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"MempoolFeeDecorator"})}),(0,t.jsx)(n.td,{children:"Checks if transaction fees meet the minimum fee requirements during CheckTx."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ValidateBasicDecorator"})}),(0,t.jsx)(n.td,{children:"Validates transaction basics."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"TxTimeoutHeightDecorator"})}),(0,t.jsx)(n.td,{children:"Checks for transaction height timeouts."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ValidateMemoDecorator"})}),(0,t.jsx)(n.td,{children:"Validates transaction memos."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ConsumeGasTxSizeDecorator"})}),(0,t.jsx)(n.td,{children:"Consumes gas proportional to the transaction size."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"DeductFeeDecorator"})}),(0,t.jsx)(n.td,{children:"Deducts transaction fees from the signer's account (or fee granter's account if fee grant module is enabled)."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SetPubKeyDecorator"})}),(0,t.jsx)(n.td,{children:"Sets public keys for signers if not already set in the state machine."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ValidateSigCountDecorator"})}),(0,t.jsx)(n.td,{children:"Validates the number of signatures in the transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SigGasConsumeDecorator"})}),(0,t.jsx)(n.td,{children:"Consumes gas for each signature."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"SigVerificationDecorator"})}),(0,t.jsx)(n.td,{children:"Verifies that all signatures are valid."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"IncrementSequenceDecorator"})}),(0,t.jsx)(n.td,{children:"Increments account sequence numbers for each signer to prevent replay attacks."})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"7ae4eacc2b8e4ec780c5b1988f58d815",children:"Custom Decorators"}),"\n",(0,t.jsxs)(n.p,{children:["These are KIRA\u2019s custom ",(0,t.jsx)(n.code,{children:"AnteDecorators"})]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"DECORATOR"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"DESCRIPTION"})}),(0,t.jsx)(n.th,{children:"MODULE"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CustodyDecorator"})}),(0,t.jsx)(n.td,{children:"This decorator enforces custody rules for users, such as requiring them to have a valid key or a minimum reward amount when sending a transaction. It also checks whether they're using a whitelist, and if so, whether the recipients are on that whitelist"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/d6507d16-a726-4383-a84b-85343268b02e",children:"Untitled"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ZeroGasMeterDecorator"})}),(0,t.jsx)(n.td,{children:"This decorator bypasses gas consumption for transactions by setting the gas limit to 0 and indicating no gas is consumed during processing"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/184c11ed-4849-4ec5-acd0-f795b7abf467",children:"Untitled"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ValidateFeeRangeDecorator"})}),(0,t.jsxs)(n.td,{children:["This decorator checks if the transaction fee is within the range defined by the ",(0,t.jsx)(n.a,{href:"/docs/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network properties"}),". If the fee is too high or too low, it returns an error"]}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/184c11ed-4849-4ec5-acd0-f795b7abf467",children:"Untitled"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ExecutionFeeRegistrationDecorator"})}),(0,t.jsx)(n.td,{children:"This decorator manages the execution fee return process based on the success or failure of a message execution in a block"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/184c11ed-4849-4ec5-acd0-f795b7abf467",children:"Untitled"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"PoorNetworkManagementDecorator"})}),(0,t.jsx)(n.td,{children:"Handles the allowed messages when the network is in a poor state"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/65e3e6fe-040a-4716-b13b-9e27def6ff9d",children:"Untitled"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"BlackWhiteTokensCheckDecorator"})}),(0,t.jsx)(n.td,{children:"Checks and prevents transactions involving frozen tokens based on the token blacklist and whitelist"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/34367cb0-ee71-418f-9dc5-bcc8823b71e5",children:"Untitled"})})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"2ec87135e9df43709bc798e10d3f1cf9",children:"CLI Syntax & Examples"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,t.jsx)(n.a,{href:"/docs/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,t.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,t.jsx)(n.em,{children:"documentation for more details."})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$SIGNER"})})," ",(0,t.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,t.jsx)(n.em,{children:"and"})," ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,t.jsx)(n.em,{children:"section"})]})}),"\n",(0,t.jsxs)(a.Z,{children:[(0,t.jsxs)(i.Z,{value:"transactions",label:"Transactions",children:[(0,t.jsx)(n.h2,{id:"f60ea4930d09400e872edb6979e2ea1d",children:"Transactions"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"tx sign"})}),(0,t.jsx)(n.th,{children:"Sign transactions generated offline."})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tx sign-batch"})}),(0,t.jsxs)(n.td,{children:["Sign multiple offline generated transactions. Combines signed transactions into one file using ",(0,t.jsx)(n.code,{children:"--append"})," flag."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tx multisign"})}),(0,t.jsx)(n.td,{children:"Sign transactions by a multisig account offline."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tx multisign-batch"})}),(0,t.jsxs)(n.td,{children:["Sign a batch of transactions for a multisig account. Does not support the ",(0,t.jsx)(n.code,{children:"--append"})," flag."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tx validate-signatures"})}),(0,t.jsx)(n.td,{children:"Validate the signatures of a signed transaction."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tx broadcast"})}),(0,t.jsx)(n.td,{children:"Broadcast a signed transaction to the network."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tx aux-to-fee"})}),(0,t.jsx)(n.td,{children:"Include aux signer data in a transaction, broadcast it, and send the tip amount to the broadcaster."})]})]})]}),(0,t.jsx)(n.h4,{id:"21ca23e3ce3e43d782feb4a7d8e39568",children:"Sign a Transaction"}),(0,t.jsxs)(n.p,{children:["Sign transactions that were generated offline using the ",(0,t.jsx)(n.code,{children:"sign"})," command."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx sign \\\n--from=$SIGNER $FLAGS_TX \\\ntx.json > tx.signed.json\n"})}),(0,t.jsx)(n.h4,{id:"f7252dcb2df14b30bf17212b3b223f6a",children:"Sign Multiple Transactions"}),(0,t.jsxs)(n.p,{children:["Sign multiple offline generated transactions (",(0,t.jsx)(n.code,{children:"-generate-only"})," flag) using the ",(0,t.jsx)(n.code,{children:"sign-batch"})," command. Transactions can be in one file (one tx per line) or in multiple files. For combining the signed transactions into one transaction, use the ",(0,t.jsx)(n.code,{children:"--append"})," flag."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx sign-batch \\\n--from=$SIGNER $FLAGS_TX \\\ntxs.json > tx.signed.json\n"})}),(0,t.jsx)(n.p,{children:"Or"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx sign-batch \\\n--from=$SIGNER $FLAGS_TX \\\ntx1.json tx2.json tx3.json > tx.signed.json\n"})}),(0,t.jsx)(n.h4,{id:"3a887933c2504b16a5fb3f9151fabe7b",children:"Multi-sign a Transaction"}),(0,t.jsxs)(n.p,{children:["Sign transactions generated offline (",(0,t.jsx)(n.code,{children:"-generate-only"})," flag) by a multisig account using the ",(0,t.jsx)(n.code,{children:"multi-sign"})," command. Where ",(0,t.jsx)(n.code,{children:"multisigk1k2k3"})," is the multisig account address, ",(0,t.jsx)(n.code,{children:"k1sig.json"})," is the signature of the first signer, ",(0,t.jsx)(n.code,{children:"k2sig.json"})," is the signature of the second signer, and ",(0,t.jsx)(n.code,{children:"k3sig.json"})," is the signature of the third signer."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx multisign \\\n$FLAGS_TX transaction.json multisigk1k2k3 k1sig.json k2sig.json k3sig.json\n\n"})}),(0,t.jsx)(n.h4,{id:"22ece625527c4d69aa19526816334088",children:"Multi-sign a Batch of Transactions"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"multisign-batch"})," works the same way as ",(0,t.jsx)(n.code,{children:"sign-batch"}),", but for multisig accounts. With the difference that the ",(0,t.jsx)(n.code,{children:"--append"})," flag does not exist."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx multisign-batch \\\n$FLAGS_TX transactions.json multisigk1k2k3 k1sigs.json k2sigs.json k3sig.json\n\n"})}),(0,t.jsx)(n.h4,{id:"40a39a4b30a843ee8c4c6759dcaf4ea9",children:"Validate Transaction Signatures"}),(0,t.jsxs)(n.p,{children:["Validate the signatures of a signed transaction using the ",(0,t.jsx)(n.code,{children:"validate-signatures"})," command."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx validate-signatures \\\n$FLAGS_TX tx.signed.json\n\n"})}),(0,t.jsx)(n.h4,{id:"fa061894e92c4158a80861ea974e952c",children:"Broadcast a Transaction"}),(0,t.jsxs)(n.p,{children:["Broadcast a signed transaction to the network using the ",(0,t.jsx)(n.code,{children:"broadcast"})," command."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx broadcast \\\n$FLAGS_TX tx.signed.json\n\n"})}),(0,t.jsx)(n.h4,{id:"9671efd0273b4424aab5cf5a233621d4",children:"Aux-to-fee"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"aux-to-fee"})," command includes the aux signer data in the tx, broadcasts the tx, and sends the tip amount to the broadcaster. ",(0,t.jsx)(n.a,{href:"https://docs.cosmos.network/main/core/tips",children:"Learn more about tip transaction"}),"."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx aux-to-fee \\\n$FLAGS_TX tx.aux.signed.json\n"})})]}),(0,t.jsxs)(i.Z,{value:"queries",label:"Queries",children:[(0,t.jsx)(n.h2,{id:"5f7711aaeb824bb0b9f5635eb4c8e38e",children:"Queries"}),(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"auth account"})}),(0,t.jsx)(n.th,{children:"Query an account by its address."})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"auth accounts"})}),(0,t.jsx)(n.td,{children:"Query all available accounts."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"auth params"})}),(0,t.jsx)(n.td,{children:"Query the current authentication parameters."})]})]})]}),(0,t.jsx)(n.h4,{id:"669879c5100547f0b933d19f39ee6808",children:"Query an Account"}),(0,t.jsxs)(n.p,{children:["Query an account by its address using the ",(0,t.jsx)(n.code,{children:"account"})," command."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Args"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$ADDR"}),": The address of the account to query."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query auth account $ADDR $FLAGS_QR\n"})}),(0,t.jsx)(n.h4,{id:"11cbbf596f6f43d4b1c0da7b5dd1efb0",children:"Query All Accounts"}),(0,t.jsxs)(n.p,{children:["Use the ",(0,t.jsx)(n.code,{children:"accounts"})," command to query all available accounts."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query auth accounts $FLAGS_QR\n"})}),(0,t.jsx)(n.h4,{id:"16dbb6704fef42abb49cd92a1280ec83",children:"Query Auth Parameters"}),(0,t.jsxs)(n.p,{children:["Query the current auth parameters using the ",(0,t.jsx)(n.code,{children:"params"})," command."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query auth params $FLAGS_QR\n"})})]}),(0,t.jsxs)(i.Z,{value:"governance",label:"Governance",children:[(0,t.jsx)(n.h2,{id:"4d87891f998146c7959256f7ba3bb6b5",children:"Governance"}),(0,t.jsx)(n.p,{children:"There is no governance proposal for this sub-module."})]})]})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>i});s(7294);var t=s(6905);const r={tabItem:"tabItem_Ymn6"};var a=s(5893);function i(e){let{children:n,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>y});var t=s(7294),r=s(6905),a=s(2466),i=s(6550),c=s(469),d=s(1980),o=s(7392),l=s(12);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.k6)(),a=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,d._X)(a),(0,t.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function f(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,a=u(e),[i,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:a}))),[o,h]=j({queryString:s,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,l.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),m=(()=>{const e=o??f;return x({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{m&&d(m)}),[m]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=s(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(5893);function p(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),l=e=>{const n=e.currentTarget,s=d.indexOf(n),r=c[s].value;r!==t&&(o(n),i(r))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=d.indexOf(e.currentTarget)+1;n=d[s]??d[0];break}case"ArrowLeft":{const s=d.indexOf(e.currentTarget)-1;n=d[s]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:l,...a,className:(0,r.Z)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(p,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,g.jsx)(k,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(7294);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);