"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[1923],{4837:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>x,frontMatter:()=>d,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"backend---sekai/modules/native-cosmossdk-modules/transaction-validation-&-processing","title":"Transaction validation & processing","description":"Overview","source":"@site/tabs/docs/backend---sekai/modules/native-cosmossdk-modules/transaction-validation-&-processing.mdx","sourceDirName":"backend---sekai/modules/native-cosmossdk-modules","slug":"/backend---sekai/modules/native-cosmossdk-modules/transaction-validation--processing","permalink":"/docs/backend---sekai/modules/native-cosmossdk-modules/transaction-validation--processing","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/native-cosmossdk-modules/transaction-validation--processing&page-local=backend---sekai/modules/native-cosmossdk-modules/transaction-validation-&-processing.mdx","tags":[],"version":"current","lastUpdatedAt":1719385750000,"sidebarPosition":1,"frontMatter":{"title":"Transaction validation & processing","sidebar_position":1,"slug":"transaction-validation--processing"},"sidebar":"defaultSidebar","previous":{"title":"Keys & accounts","permalink":"/docs/backend---sekai/modules/native-cosmossdk-modules/keys--accounts"},"next":{"title":"Bank","permalink":"/docs/backend---sekai/modules/native-cosmossdk-modules/bank"}}');var r=n(4848),i=n(8453),a=n(5537),c=n(9329);const d={title:"Transaction validation & processing",sidebar_position:1,slug:"transaction-validation--processing"},o=void 0,l={},h=[{value:"Overview",id:"369e904c786849559f583b442cf79b77",level:2},{value:"Parameters",id:"cb3a71b9b28f4cceae1ab341101c1feb",level:2},{value:"Standard Module Params",id:"627dfdf0c9f545fa972225dc3e493b6d",level:4},{value:"Standard Decorators",id:"187c1bf7567240508a620dc14c4cce93",level:3},{value:"Custom Decorators",id:"7ae4eacc2b8e4ec780c5b1988f58d815",level:3},{value:"CLI Syntax &amp; Examples",id:"2ec87135e9df43709bc798e10d3f1cf9",level:2},{value:"Transactions",id:"f60ea4930d09400e872edb6979e2ea1d",level:2},{value:"Sign a Transaction",id:"21ca23e3ce3e43d782feb4a7d8e39568",level:4},{value:"Sign Multiple Transactions",id:"f7252dcb2df14b30bf17212b3b223f6a",level:4},{value:"Multi-sign a Transaction",id:"3a887933c2504b16a5fb3f9151fabe7b",level:4},{value:"Multi-sign a Batch of Transactions",id:"22ece625527c4d69aa19526816334088",level:4},{value:"Validate Transaction Signatures",id:"40a39a4b30a843ee8c4c6759dcaf4ea9",level:4},{value:"Broadcast a Transaction",id:"fa061894e92c4158a80861ea974e952c",level:4},{value:"Aux-to-fee",id:"9671efd0273b4424aab5cf5a233621d4",level:4},{value:"Queries",id:"5f7711aaeb824bb0b9f5635eb4c8e38e",level:2},{value:"Query an Account",id:"669879c5100547f0b933d19f39ee6808",level:4},{value:"Query All Accounts",id:"11cbbf596f6f43d4b1c0da7b5dd1efb0",level:4},{value:"Query Auth Parameters",id:"16dbb6704fef42abb49cd92a1280ec83",level:4},{value:"Governance",id:"4d87891f998146c7959256f7ba3bb6b5",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"369e904c786849559f583b442cf79b77",children:"Overview"}),"\n",(0,r.jsxs)(s.p,{children:["The Auth module in KIRA extends the functionality of the Cosmos SDK's ",(0,r.jsx)(s.code,{children:"auth"})," module, focusing on validating and processing transactions within the network. It utilizes a set of ",(0,r.jsx)(s.code,{children:"AnteDecorators"})," to perform basic transaction validity checks before they are included in the blockchain. These checks involve verifying signatures, ensuring correct nonces, and validating auxiliary fields. The Auth module is also responsible for managing accounts, including their creation, storage, and querying, as well as maintaining associated account information."]}),"\n",(0,r.jsxs)(s.p,{children:["KIRA enriches the standard handlers by introducing custom decorators tailored to its network requirements such as custody rules, poor network conditions and token whitelist/blacklist enforcement.. One key area is fee processing; since KIRA does not have a concept of gas fees, it implements specific decorators for this purpose. More information on KIRA's fee processing can be found in the ",(0,r.jsx)(s.a,{href:"/docs/backend---sekai/modules/fee-processing/fee-processing",children:"Fee processing"})," module."]}),"\n",(0,r.jsx)(s.h2,{id:"cb3a71b9b28f4cceae1ab341101c1feb",children:"Parameters"}),"\n",(0,r.jsx)(s.h4,{id:"627dfdf0c9f545fa972225dc3e493b6d",children:"Standard Module Params"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"All parameters pertaining to gas fees are obsolete."})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"NAME"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"TYPE"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"EXAMPLE"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"max_memo_characters"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint64"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"512"})}),(0,r.jsx)(s.td,{children:"The maximum permitted number of characters in the memo of a transaction"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"tx_sig_limit"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint64"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"7"})}),(0,r.jsx)(s.td,{children:"The maximum number of signers for a transaction. A single transaction can have multiple messages and multiple signers"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"tx_size_cost_per_byte"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint64"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"10"})}),(0,r.jsxs)(s.td,{children:["The cost per byte used to compute the gas consumption of a transaction. ",(0,r.jsx)(s.code,{children:"TxSizeCostPerByte * txsize"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sig_verify_cost_ed25519"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint64"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"590"})}),(0,r.jsx)(s.td,{children:"The gas cost for verifying ED25519 signatures"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"sig_verify_cost_secp256k1"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"uint64"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"1000"})}),(0,r.jsx)(s.td,{children:"The gas cost for verifying Secp256k1 signatures"})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"187c1bf7567240508a620dc14c4cce93",children:"Standard Decorators"}),"\n",(0,r.jsxs)(s.p,{children:["These are ",(0,r.jsx)(s.code,{children:"auth"}),"'s standard ",(0,r.jsx)(s.code,{children:"AnteDecorators"})," that are chained together in a specific ",(0,r.jsx)(s.a,{href:"https://github.com/KiraCore/sekai/blob/master/app/ante/ante.go#L40-L61",children:"order"})," to form an ",(0,r.jsx)(s.code,{children:"AnteHandler"})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"DECORATOR"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"SetUpContextDecorator"})}),(0,r.jsx)(s.td,{children:"Sets up the context and gas meter for transactions."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"RejectExtensionOptionsDecorator"})}),(0,r.jsx)(s.td,{children:"Rejects extension options in protobuf transactions."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"MempoolFeeDecorator"})}),(0,r.jsx)(s.td,{children:"Checks if transaction fees meet the minimum fee requirements during CheckTx."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ValidateBasicDecorator"})}),(0,r.jsx)(s.td,{children:"Validates transaction basics."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"TxTimeoutHeightDecorator"})}),(0,r.jsx)(s.td,{children:"Checks for transaction height timeouts."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ValidateMemoDecorator"})}),(0,r.jsx)(s.td,{children:"Validates transaction memos."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ConsumeGasTxSizeDecorator"})}),(0,r.jsx)(s.td,{children:"Consumes gas proportional to the transaction size."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"DeductFeeDecorator"})}),(0,r.jsx)(s.td,{children:"Deducts transaction fees from the signer's account (or fee granter's account if fee grant module is enabled)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"SetPubKeyDecorator"})}),(0,r.jsx)(s.td,{children:"Sets public keys for signers if not already set in the state machine."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ValidateSigCountDecorator"})}),(0,r.jsx)(s.td,{children:"Validates the number of signatures in the transaction."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"SigGasConsumeDecorator"})}),(0,r.jsx)(s.td,{children:"Consumes gas for each signature."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"SigVerificationDecorator"})}),(0,r.jsx)(s.td,{children:"Verifies that all signatures are valid."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"IncrementSequenceDecorator"})}),(0,r.jsx)(s.td,{children:"Increments account sequence numbers for each signer to prevent replay attacks."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"7ae4eacc2b8e4ec780c5b1988f58d815",children:"Custom Decorators"}),"\n",(0,r.jsxs)(s.p,{children:["These are KIRA\u2019s custom ",(0,r.jsx)(s.code,{children:"AnteDecorators"})]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"DECORATOR"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"DESCRIPTION"})}),(0,r.jsx)(s.th,{children:"MODULE"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"CustodyDecorator"})}),(0,r.jsx)(s.td,{children:"This decorator enforces custody rules for users, such as requiring them to have a valid key or a minimum reward amount when sending a transaction. It also checks whether they're using a whitelist, and if so, whether the recipients are on that whitelist"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/backend---sekai/modules/custody/custody-module",children:"Untitled"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ZeroGasMeterDecorator"})}),(0,r.jsx)(s.td,{children:"This decorator bypasses gas consumption for transactions by setting the gas limit to 0 and indicating no gas is consumed during processing"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/backend---sekai/modules/fee-processing/fee-processing",children:"Untitled"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ValidateFeeRangeDecorator"})}),(0,r.jsxs)(s.td,{children:["This decorator checks if the transaction fee is within the range defined by the ",(0,r.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/network-properties",children:"network properties"}),". If the fee is too high or too low, it returns an error"]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/backend---sekai/modules/fee-processing/fee-processing",children:"Untitled"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"ExecutionFeeRegistrationDecorator"})}),(0,r.jsx)(s.td,{children:"This decorator manages the execution fee return process based on the success or failure of a message execution in a block"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/backend---sekai/modules/fee-processing/fee-processing",children:"Untitled"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"PoorNetworkManagementDecorator"})}),(0,r.jsx)(s.td,{children:"Handles the allowed messages when the network is in a poor state"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/poor-network-conditions",children:"Untitled"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"BlackWhiteTokensCheckDecorator"})}),(0,r.jsx)(s.td,{children:"Checks and prevents transactions involving frozen tokens based on the token blacklist and whitelist"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/backend---sekai/modules/tokens-module/governance-regulated-foreign-token-transfers",children:"Untitled"})})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"2ec87135e9df43709bc798e10d3f1cf9",children:"CLI Syntax & Examples"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the ",(0,r.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:"Roles & Permissions"})," documentation for more details."]})}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"$SIGNER"})," represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as ",(0,r.jsx)(s.code,{children:"$FLAGS_TX"})," and ",(0,r.jsx)(s.code,{children:"$FLAGS_QR"}),", see the ",(0,r.jsx)(s.a,{href:"/docs/backend---sekai/cli-guide",children:"CLI Guide"})," page."]})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(c.A,{value:"transactions",label:"Transactions",children:[(0,r.jsx)(s.h2,{id:"f60ea4930d09400e872edb6979e2ea1d",children:"Transactions"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.code,{children:"tx sign"})}),(0,r.jsx)(s.th,{children:"Sign transactions generated offline."})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"tx sign-batch"})}),(0,r.jsxs)(s.td,{children:["Sign multiple offline generated transactions. Combines signed transactions into one file using ",(0,r.jsx)(s.code,{children:"--append"})," flag."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"tx multisign"})}),(0,r.jsx)(s.td,{children:"Sign transactions by a multisig account offline."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"tx multisign-batch"})}),(0,r.jsxs)(s.td,{children:["Sign a batch of transactions for a multisig account. Does not support the ",(0,r.jsx)(s.code,{children:"--append"})," flag."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"tx validate-signatures"})}),(0,r.jsx)(s.td,{children:"Validate the signatures of a signed transaction."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"tx broadcast"})}),(0,r.jsx)(s.td,{children:"Broadcast a signed transaction to the network."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"tx aux-to-fee"})}),(0,r.jsx)(s.td,{children:"Include aux signer data in a transaction, broadcast it, and send the tip amount to the broadcaster."})]})]})]}),(0,r.jsx)(s.h4,{id:"21ca23e3ce3e43d782feb4a7d8e39568",children:"Sign a Transaction"}),(0,r.jsxs)(s.p,{children:["Sign transactions that were generated offline using the ",(0,r.jsx)(s.code,{children:"sign"})," command."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx sign \\\n--from=$SIGNER $FLAGS_TX \\\ntx.json > tx.signed.json\n"})}),(0,r.jsx)(s.h4,{id:"f7252dcb2df14b30bf17212b3b223f6a",children:"Sign Multiple Transactions"}),(0,r.jsxs)(s.p,{children:["Sign multiple offline generated transactions (",(0,r.jsx)(s.code,{children:"-generate-only"})," flag) using the ",(0,r.jsx)(s.code,{children:"sign-batch"})," command. Transactions can be in one file (one tx per line) or in multiple files. For combining the signed transactions into one transaction, use the ",(0,r.jsx)(s.code,{children:"--append"})," flag."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx sign-batch \\\n--from=$SIGNER $FLAGS_TX \\\ntxs.json > tx.signed.json\n"})}),(0,r.jsx)(s.p,{children:"Or"}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx sign-batch \\\n--from=$SIGNER $FLAGS_TX \\\ntx1.json tx2.json tx3.json > tx.signed.json\n"})}),(0,r.jsx)(s.h4,{id:"3a887933c2504b16a5fb3f9151fabe7b",children:"Multi-sign a Transaction"}),(0,r.jsxs)(s.p,{children:["Sign transactions generated offline (",(0,r.jsx)(s.code,{children:"-generate-only"})," flag) by a multisig account using the ",(0,r.jsx)(s.code,{children:"multi-sign"})," command. Where ",(0,r.jsx)(s.code,{children:"multisigk1k2k3"})," is the multisig account address, ",(0,r.jsx)(s.code,{children:"k1sig.json"})," is the signature of the first signer, ",(0,r.jsx)(s.code,{children:"k2sig.json"})," is the signature of the second signer, and ",(0,r.jsx)(s.code,{children:"k3sig.json"})," is the signature of the third signer."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx multisign \\\n$FLAGS_TX transaction.json multisigk1k2k3 k1sig.json k2sig.json k3sig.json\n\n"})}),(0,r.jsx)(s.h4,{id:"22ece625527c4d69aa19526816334088",children:"Multi-sign a Batch of Transactions"}),(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"multisign-batch"})," works the same way as ",(0,r.jsx)(s.code,{children:"sign-batch"}),", but for multisig accounts. With the difference that the ",(0,r.jsx)(s.code,{children:"--append"})," flag does not exist."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx multisign-batch \\\n$FLAGS_TX transactions.json multisigk1k2k3 k1sigs.json k2sigs.json k3sig.json\n\n"})}),(0,r.jsx)(s.h4,{id:"40a39a4b30a843ee8c4c6759dcaf4ea9",children:"Validate Transaction Signatures"}),(0,r.jsxs)(s.p,{children:["Validate the signatures of a signed transaction using the ",(0,r.jsx)(s.code,{children:"validate-signatures"})," command."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx validate-signatures \\\n$FLAGS_TX tx.signed.json\n\n"})}),(0,r.jsx)(s.h4,{id:"fa061894e92c4158a80861ea974e952c",children:"Broadcast a Transaction"}),(0,r.jsxs)(s.p,{children:["Broadcast a signed transaction to the network using the ",(0,r.jsx)(s.code,{children:"broadcast"})," command."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx broadcast \\\n$FLAGS_TX tx.signed.json\n\n"})}),(0,r.jsx)(s.h4,{id:"9671efd0273b4424aab5cf5a233621d4",children:"Aux-to-fee"}),(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"aux-to-fee"})," command includes the aux signer data in the tx, broadcasts the tx, and sends the tip amount to the broadcaster. ",(0,r.jsx)(s.a,{href:"https://docs.cosmos.network/main/core/tips",children:"Learn more about tip transaction"}),"."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx aux-to-fee \\\n$FLAGS_TX tx.aux.signed.json\n"})})]}),(0,r.jsxs)(c.A,{value:"queries",label:"Queries",children:[(0,r.jsx)(s.h2,{id:"5f7711aaeb824bb0b9f5635eb4c8e38e",children:"Queries"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.code,{children:"auth account"})}),(0,r.jsx)(s.th,{children:"Query an account by its address."})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"auth accounts"})}),(0,r.jsx)(s.td,{children:"Query all available accounts."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"auth params"})}),(0,r.jsx)(s.td,{children:"Query the current authentication parameters."})]})]})]}),(0,r.jsx)(s.h4,{id:"669879c5100547f0b933d19f39ee6808",children:"Query an Account"}),(0,r.jsxs)(s.p,{children:["Query an account by its address using the ",(0,r.jsx)(s.code,{children:"account"})," command."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Args"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$ADDR"}),": The address of the account to query."]}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid query auth account $ADDR $FLAGS_QR\n"})}),(0,r.jsx)(s.h4,{id:"11cbbf596f6f43d4b1c0da7b5dd1efb0",children:"Query All Accounts"}),(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.code,{children:"accounts"})," command to query all available accounts."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid query auth accounts $FLAGS_QR\n"})}),(0,r.jsx)(s.h4,{id:"16dbb6704fef42abb49cd92a1280ec83",children:"Query Auth Parameters"}),(0,r.jsxs)(s.p,{children:["Query the current auth parameters using the ",(0,r.jsx)(s.code,{children:"params"})," command."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid query auth params $FLAGS_QR\n"})})]}),(0,r.jsxs)(c.A,{value:"governance",label:"Governance",children:[(0,r.jsx)(s.h2,{id:"4d87891f998146c7959256f7ba3bb6b5",children:"Governance"}),(0,r.jsx)(s.p,{children:"There is no governance proposal for this sub-module."})]})]})]})}function x(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9329:(e,s,n)=>{n.d(s,{A:()=>a});n(6540);var t=n(8215);const r={tabItem:"tabItem_Ymn6"};var i=n(4848);function a(e){let{children:s,hidden:n,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.A)(r.tabItem,a),hidden:n,children:s})}},5537:(e,s,n)=>{n.d(s,{A:()=>y});var t=n(6540),r=n(8215),i=n(5627),a=n(6347),c=n(372),d=n(604),o=n(1861),l=n(8749);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,t.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:t,default:r}}=e;return{value:s,label:n,attributes:t,default:r}}))}(n);return function(e){const s=(0,o.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function x(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function j(e){let{queryString:s=!1,groupId:n}=e;const r=(0,a.W6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,d.aZ)(i),(0,t.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(r.location.search);s.set(i,e),r.replace({...r.location,search:s.toString()})}),[i,r])]}function f(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,i=u(e),[a,d]=(0,t.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const t=n.find((e=>e.default))??n[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:s,tabValues:i}))),[o,h]=j({queryString:n,groupId:r}),[f,m]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,i]=(0,l.Dv)(n);return[r,(0,t.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),g=(()=>{const e=o??f;return x({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{g&&d(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,i]),tabValues:i}}var m=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(4848);function p(e){let{className:s,block:n,selectedValue:t,selectValue:a,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),l=e=>{const s=e.currentTarget,n=d.indexOf(s),r=c[n].value;r!==t&&(o(s),a(r))},h=e=>{let s=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;s=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;s=d[n]??d[d.length-1];break}}s?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},s),children:c.map((e=>{let{value:s,label:n,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===s?0:-1,"aria-selected":t===s,ref:e=>{d.push(e)},onKeyDown:h,onClick:l,...i,className:(0,r.A)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":t===s}),children:n??s},s)}))})}function v(e){let{lazy:s,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,t.cloneElement)(e,{key:s,hidden:e.props.value!==i})))})}function k(e){const s=f(e);return(0,b.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,b.jsx)(p,{...s,...e}),(0,b.jsx)(v,{...s,...e})]})}function y(e){const s=(0,m.A)();return(0,b.jsx)(k,{...e,children:h(e.children)},String(s))}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>c});var t=n(6540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);