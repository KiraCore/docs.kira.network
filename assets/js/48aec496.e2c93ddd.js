"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[315],{2390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var s=n(5893),a=n(1151),r=n(4866),i=n(5162);const o={title:"Token Rates Registrar",sidebar_position:1,slug:"/f19a45b3-88c4-469c-8642-772b941a1b24"},c=void 0,d={id:"backend---sekai/modules-&-cli/modules/tokens-module/token-rates-registrar",title:"Token Rates Registrar",description:"Concept",source:"@site/tabs/Docs/backend---sekai/modules-&-cli/modules/tokens-module/token-rates-registrar.mdx",sourceDirName:"backend---sekai/modules-&-cli/modules/tokens-module",slug:"/f19a45b3-88c4-469c-8642-772b941a1b24",permalink:"/docs/f19a45b3-88c4-469c-8642-772b941a1b24",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/f19a45b3-88c4-469c-8642-772b941a1b24&page-local=backend---sekai/modules-&-cli/modules/tokens-module/token-rates-registrar.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Token Rates Registrar",sidebar_position:1,slug:"/f19a45b3-88c4-469c-8642-772b941a1b24"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/4cd4ebf6-38a6-45ec-86ae-49edb1ae3e1a"},next:{title:"Token Aliases Registrar",permalink:"/docs/e163e1d7-f16e-4c0d-945c-db2efc13ea49"}},l={},h=[{value:"Concept",id:"27568532b5af487fb7aee6974fab52e4",level:2},{value:"Token Management and Staking Policies",id:"b532e79ee90941d0a948afcfe85cc21f",level:3},{value:"Staking Capability",id:"9da78ef9591b4f7eac68e846a77fb81f",level:4},{value:"Fee Payment Capability",id:"797471526a38443dae4ec626770301dc",level:4},{value:"Fee Exchange Rate",id:"f011644ddd1c459ca667d0ec6eaef9fb",level:4},{value:"Staking Reward Cap",id:"d205c9a9cd8c4311a19782ca1206f9ac",level:4},{value:"Dust Spam Prevention",id:"3731dcd8a65641519adf0409f88261a1",level:4},{value:"Token Rate Deletion",id:"01dc6c9c4dc74ec198c49856d5435201",level:4},{value:"Parameters",id:"9a67ee6002de4f9cbdeaa4e581a13596",level:2},{value:"CLI Syntax &amp; Examples",id:"b9982ccb172d481c9392049afc924fe8",level:2},{value:"Transactions",id:"01d5529dd36e4bb8b1194b5834aa5d86",level:2},{value:"Upsert Token Rate With Sudo Permission",id:"d44f6bfbf118402292bc11b648093700",level:4},{value:"Queries",id:"41ce65d28ef24009b2241d98839343da",level:2},{value:"List All Existing Token Rates",id:"ec7c6fb56a254751b76e874c976677a4",level:4},{value:"Query a Specific Token Rate",id:"bfecbe47c7584fc1b8364dd96a58febb",level:4},{value:"Query Multiple Token Rates",id:"4469a355daec4eaa94330a03f9551724",level:4},{value:"Governance",id:"2e821403aca7404cbbe24ce849ff77a7",level:2},{value:"Proposal to Upsert Token Rate",id:"66cb1d8f16254f498ca6f97660eddb5e",level:4}];function u(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"27568532b5af487fb7aee6974fab52e4",children:"Concept"}),"\n",(0,s.jsx)(t.p,{children:"The Token Rate Registrar in Kira Network allows governance to whitelist foreign tokens, set exchange rates, and define limits on staking rewards distribution in order to maintain the relevance and value of KEX. This enables users to pay execution fees with any whitelisted token, providing easy onboarding for new users directly from foreign networks without requiring them to use centralized exchanges to acquire KEX or deanonymize themselves. The Token Rate Registrar also allows governance to define the distribution of incentives to maintain the relevance and value of KEX, ensuring that the native token remains attractive and desirable for users and stakeholders to hold and use. By incentivizing participation and holding, the network is able to maintain a high level of security and value."}),"\n",(0,s.jsx)(t.h3,{id:"b532e79ee90941d0a948afcfe85cc21f",children:"Token Management and Staking Policies"}),"\n",(0,s.jsx)(t.h4,{id:"9da78ef9591b4f7eac68e846a77fb81f",children:"Staking Capability"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"stake_token"})," property determines whether or not a specific token can be used as collateral by delegators. If the ",(0,s.jsx)(t.code,{children:"stake_token"})," property for a token is set to ",(0,s.jsx)(t.code,{children:"true"}),", then users will be able to stake that token and earn rewards. If it is set to ",(0,s.jsx)(t.code,{children:"false"}),", then it will not be possible to stake the token and no rewards will be distributed."]}),"\n",(0,s.jsx)(t.p,{children:":::\ud83d\udccc"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"stake_token"})," property of a specific token can only be set to ",(0,s.jsx)(t.code,{children:"true"})," if the given token is present in the Token Aliases[broken link], which sets the decimals in the lowest denomination. Removal of a token from the token aliases registry will automatically disable it by setting ",(0,s.jsx)(t.code,{children:"stake_token"})," and ",(0,s.jsx)(t.code,{children:"fee_token"})," properties to ",(0,s.jsx)(t.code,{children:"false"}),"."]}),"\n",(0,s.jsx)(t.p,{children:":::"}),"\n",(0,s.jsx)(t.h4,{id:"797471526a38443dae4ec626770301dc",children:"Fee Payment Capability"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"fee_payment"})," property determines if a given token can be used to pay transaction fees on the Kira Network, provided the ",(0,s.jsx)(t.code,{children:"enable_foreign_fee_payments"})," ",(0,s.jsx)(t.a,{href:"/docs/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network property"})," is enabled. If the ",(0,s.jsx)(t.code,{children:"fee_payment"})," property is set to ",(0,s.jsx)(t.code,{children:"true"}),", then users will be able to use that token to pay transaction fees based on its ",(0,s.jsx)(t.code,{children:"fee_rate"})," parameter, which sets the exchange rate for the token. By allowing users to pay transaction fees with a variety of different tokens, the network can be more accessible and user-friendly, providing an easy onboarding process for new users and allowing them to pay fees without having to acquire the native KEX token."]}),"\n",(0,s.jsx)(t.h4,{id:"f011644ddd1c459ca667d0ec6eaef9fb",children:"Fee Exchange Rate"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"fee_rate"})," sets the exchange rates for whitelisted tokens in terms of KEX. ",(0,s.jsx)(t.a,{href:"/docs/f19a45b3-88c4-469c-8642-772b941a1b24",children:"Token Rates Registrar"})," is not meant to track the market price of assets accurately as this would be too much of an overhead, but rather provides an easy way to convert between tokens and KEX as a way to protect against transaction spam. For example, if the ",(0,s.jsx)(t.code,{children:"fee_rate"})," for token ",(0,s.jsx)(t.code,{children:"u<denom>"})," is 2, it means that 2 ",(0,s.jsx)(t.code,{children:"ukex"})," is equal to 1 ",(0,s.jsx)(t.code,{children:"u<denom>"}),". If the minimum fee payment, as defined by the ",(0,s.jsx)(t.code,{children:"min_tx_fee"})," ",(0,s.jsx)(t.a,{href:"/docs/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network property"}),", is 100 ",(0,s.jsx)(t.code,{children:"ukex"}),", then to make a transfer, the transaction fee should be set to at least 50 ",(0,s.jsx)(t.code,{children:"u<denom>"})," tokens. Rates can also be expressed as decimals. For example, a rate of 0.1 would mean that 0.1 ",(0,s.jsx)(t.code,{children:"ukex"})," is equal to 1 ",(0,s.jsx)(t.code,{children:"u<denom>"}),". In this case, the minimum transaction fee payment in our example would be 1000 ",(0,s.jsx)(t.code,{children:"u<denom>"})," tokens."]}),"\n",(0,s.jsx)(t.p,{children:":::\ud83d\udccc"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"fee_rate"})," for transactions using tokens other than KEX is expected to be higher in order to ensure the security of the blockchain and prevent transaction spam. This is because KIRA must maintain the security of the chain regardless of the market price of other tokens at any given time. The governance system is responsible for adjusting the exchange rates to account for possible black swan events. KIRA does not and will not use any third-party oracles, and instead relies solely on the capabilities of its own governance system. This is to mitigate any potential risks associated with the use of oracles and third parties."]}),"\n",(0,s.jsx)(t.p,{children:":::"}),"\n",(0,s.jsx)(t.h4,{id:"d205c9a9cd8c4311a19782ca1206f9ac",children:"Staking Reward Cap"}),"\n",(0,s.jsxs)(t.p,{children:["Any token eligible for staking has a corresponding ",(0,s.jsx)(t.code,{children:"stake_cap"})," parameter which sets the maximum percentage of staking rewards that it is entitled to receive from a staking pool. For example, if the ",(0,s.jsx)(t.code,{children:"stake_cap"})," for BTC is set to ",(0,s.jsx)(t.code,{children:"0.1"})," (10%), then no matter how much BTC is staked in the pool, only 10% of incoming rewards will be allocated and shared among BTC delegators. This is to prevent a malicious user from diluting the pool with a large amount of a particular token in order to claim all the rewards for themselves. By setting specific shares for each token, the reward distribution process is made simpler and more efficient, as it eliminates the need to track the market value of the staking tokens in terms of a fiat currency such as USD or KEX."]}),"\n",(0,s.jsxs)(t.p,{children:["The cumulative ",(0,s.jsx)(t.code,{children:"stake_cap"})," for all whitelisted tokens in ",(0,s.jsx)(t.a,{href:"/docs/f19a45b3-88c4-469c-8642-772b941a1b24",children:"Token Rates Registrar"})," cannot exceed ",(0,s.jsx)(t.code,{children:"1.0"})," (100%). Any additions or updates to a token's ",(0,s.jsx)(t.code,{children:"stake_cap"})," must adhere to this limit. If the combined reward caps surpasses ",(0,s.jsx)(t.code,{children:"1.0"}),", the ",(0,s.jsx)(t.code,{children:"stake_token"})," property of any new token cannot be set to ",(0,s.jsx)(t.code,{children:"true"}),". For tokens where ",(0,s.jsx)(t.code,{children:"stake_token"})," is set to ",(0,s.jsx)(t.code,{children:"false"}),", staking is not permitted\u2014only unstaking. Such tokens also don't receive any rewards (equivalent to ",(0,s.jsx)(t.code,{children:"fee_rate"})," of 0)."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["KEX ",(0,s.jsx)(t.code,{children:"stake_cap"})," cannot be set under 50%."]})}),"\n",(0,s.jsx)(t.h4,{id:"3731dcd8a65641519adf0409f88261a1",children:"Dust Spam Prevention"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"stake_min"})," property sets the minimum amount of token a user can delegate or undelegate per transaction to prevent a ",(0,s.jsx)(t.em,{children:"dust spam attack"})," where a malicious user would try to massively delay the block production by adding/withdrawing small amounts of staking tokens with many different accounts (c.f ",(0,s.jsx)(t.a,{href:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:"Fees and staking rewards distribution"}),")."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"stake_min"})," cannot be set to 0."]})}),"\n",(0,s.jsx)(t.h4,{id:"01dc6c9c4dc74ec198c49856d5435201",children:"Token Rate Deletion"}),"\n",(0,s.jsxs)(t.p,{children:["Tokens, once registered in the Token Registrar, cannot be removed because of potential complexities when they're involved in other modules, like ",(0,s.jsx)(t.a,{href:"/docs/4b7f76b2-83c1-4f7f-91cf-77f1105fbc6b",children:"Consensus nodes"}),". To address this, an ",(0,s.jsx)(t.code,{children:"invalidated"})," flag is available for each token entry. When this flag is set to ",(0,s.jsx)(t.code,{children:"true"}),", it serves as a metadata signal indicating that the token is no longer active within the network, even though it doesn't impose any operational restrictions on the token itself. Conversely, when the flag is set to ",(0,s.jsx)(t.code,{children:"false"}),", it suggests that the token remains active and can be used according to the other parameters' values."]}),"\n",(0,s.jsx)(t.h2,{id:"9a67ee6002de4f9cbdeaa4e581a13596",children:"Parameters"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["For the native KEX token, only the ",(0,s.jsx)(t.code,{children:"stake_cap"})," and ",(0,s.jsx)(t.code,{children:"stake_min"})," parameters can be modified."]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"NAME"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"TYPE"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"EXAMPLE"})}),(0,s.jsx)(t.th,{children:(0,s.jsx)(t.strong,{children:"DESCRIPTION"})})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"stake_token"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"bool"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsx)(t.td,{children:"Determines whether or not a specific token can be used as collateral by delegators on the KIRA Network."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fee_payment"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"bool"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"true"})}),(0,s.jsx)(t.td,{children:"Determines if a given token can be used to pay transaction fees on the KIRA Network."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"fee_rate"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"float"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0.1"})}),(0,s.jsx)(t.td,{children:"Sets the exchange rates for whitelisted tokens in terms of KEX."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"stake_cap"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"float"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"0.1"})}),(0,s.jsx)(t.td,{children:"Sets the maximum percentage of staking rewards that a given token is entitled to receive from a staking pool."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"stake_min"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"int"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"10"})}),(0,s.jsxs)(t.td,{children:["Sets the minimum amount per delegations and undelegations for a given token to prevent a ",(0,s.jsx)(t.em,{children:"dust spam attack"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"invalidated"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"bool"})}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"false"})}),(0,s.jsxs)(t.td,{children:["Indicates the inactive status of a token. If ",(0,s.jsx)(t.code,{children:"true"}),", the token is marked as inactive for network interactions."]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Example of Token Rate registry"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-json",children:'[ {\n\t\t"denom": "ukex",       // token denom MUST be present in the Token Aliases Registrar  [CAN NOT BE MODIFIED - FOR ukex ONLY]\n\t\t"fee_rate": 1.0,       // paying 1 ukex in fees is equivalent of paying 1 ukex        [CAN NOT BE MODIFIED - FOR ukex ONLY]\n\t\t"stake_cap": 0.50,     // 50% of all block & fee rewards go to KEX delegators         [CAN NOT BE LESS THEN 50% - FOR ukex ONLY]\n    "stake_min": 100,      // can\'t stake less than 100 ukex                              [MUST BE GREATER THAN 0 - FOR ANY TOKEN]\n\t\t"fee_payment": true,   // can be used as fee token                                    [CAN NOT BE MODIFIED - FOR ukex ONLY]\n\t\t"stake_token": true    // can be used as staking token                                [CAN NOT BE MODIFIED - FOR ukex ONLY]\n\t} {\n\t\t"denom": "xbtc",\n\t\t"fee_rate": 175885.0,  // paying 1 satoshi in fees is equivalent of paying 175\'885 ukex for a fee transfer\n\t\t"stake_cap": 0.251,    // 25.1% of all rewards go to BTC delegators\n    "stake_min": 10000,    // can\'t stake less than 10k sats\n\t\t"fee_payment": true,   // can be used as fee token\n\t\t"stake_token": true    // can be used as staking token\n\t}, {\n\t\t"denom": "xeth",\n\t\t"fee_rate":   0.0000012,  // paying 1 wei in fees is equivalent of paying 0.0000012 ukex\n\t\t"stake_cap": 0.1,         // 0% of all rewards go to ETH delegators, because stake_token is set to false\n    "stake_min": 8333333334,  // can\'t stake less than 8\'333\'333\'334 wei\n\t\t"fee_payment": true,      // can be used as fee token\n\t\t"stake_token": false      // can NOT be used as staking token\n\t},{ ... }, ... ]\n'})}),"\n",(0,s.jsx)(t.h2,{id:"b9982ccb172d481c9392049afc924fe8",children:"CLI Syntax & Examples"}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,s.jsx)(t.a,{href:"/docs/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,s.jsx)(t.em,{children:"Roles & Permissions"})})," ",(0,s.jsx)(t.em,{children:"documentation for more details."})," ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"$SIGNER"})})," ",(0,s.jsx)(t.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.code,{children:"$FLAGS_TX"})})," ",(0,s.jsx)(t.em,{children:"and"})," ",(0,s.jsxs)(t.em,{children:[(0,s.jsx)(t.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,s.jsx)(t.em,{children:"section"})]})}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(i.Z,{value:"transactions",label:"Transactions",children:[(0,s.jsx)(t.h2,{id:"01d5529dd36e4bb8b1194b5834aa5d86",children:"Transactions"}),(0,s.jsx)(t.table,{children:(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.code,{children:"proposal-upsert-rate"})}),(0,s.jsx)(t.th,{children:"Create or update a token rate through a proposal."})]})})}),(0,s.jsx)(t.h4,{id:"d44f6bfbf118402292bc11b648093700",children:"Upsert Token Rate With Sudo Permission"}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"upsert-rate"})," CLI command allows accounts with sudo permission to create or modify a token rate without a proposal."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Flags"})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$DENOM"}),": Denomination of the token."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$FEE_PAYMENT"}),": Boolean indicating if the token can be used for fee payment."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$RATE"}),": Token\u2019s exchange rate compared to KEX."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$STAKE_TOKEN"}),": Boolean indicating if the token can be used for staking."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$STAKE_CAP"}),": Staking rewards shares allocated for the token per staking pool."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$STAKE_MIN"}),": Minimum amount of token required to stake per transaction."]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sekaid tx tokens upsert-rate \\\n--from=$SIGNER $FLAGS_TX \\\n--denom=$DENOM --rate=$RATE \\\n--fee_payments=$FEE_PAYMENT --stake_token=$STAKE_TOKEN \\\n--stake_cap=$STAKE_CAP --stake_min=$STAKE_MIN\n"})})]}),(0,s.jsxs)(i.Z,{value:"queries",label:"Queries",children:[(0,s.jsx)(t.h2,{id:"41ce65d28ef24009b2241d98839343da",children:"Queries"}),(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.code,{children:"all-rates"})}),(0,s.jsx)(t.th,{children:"Get all token rates in the system."})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"rate"})}),(0,s.jsx)(t.td,{children:"Get a specific token rate by denomination."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"rates-by-denom"})}),(0,s.jsx)(t.td,{children:"Get token rates of multiple tokens by denomination."})]})]})]}),(0,s.jsx)(t.h4,{id:"ec7c6fb56a254751b76e874c976677a4",children:"List All Existing Token Rates"}),(0,s.jsxs)(t.p,{children:["Use the ",(0,s.jsx)(t.code,{children:"all-rates"})," command to retrieve all token rates."]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sekaid query tokens all-rates $FLAGS_QR | jq\n"})}),(0,s.jsx)(t.h4,{id:"bfecbe47c7584fc1b8364dd96a58febb",children:"Query a Specific Token Rate"}),(0,s.jsxs)(t.p,{children:["To query the rate of a specific token, use the ",(0,s.jsx)(t.code,{children:"rate"})," command."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Args"})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$DENOM"}),": Denomination of the token whose rate is to be queried."]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sekaid query tokens rate $DENOM $FLAGS_QR | jq\n"})}),(0,s.jsx)(t.h4,{id:"4469a355daec4eaa94330a03f9551724",children:"Query Multiple Token Rates"}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"rates-by-denom"})," command allows querying rates of multiple tokens."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Args"})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$DENOM_LIST"}),": A comma-separated list of token denominations to query."]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sekaid query tokens rates-by-denom $DENOM_LIST $FLAGS_QR | jq\n"})})]}),(0,s.jsxs)(i.Z,{value:"governance",label:"Governance",children:[(0,s.jsx)(t.h2,{id:"2e821403aca7404cbbe24ce849ff77a7",children:"Governance"}),(0,s.jsx)(t.p,{children:"In order to create a proposal to add or modify entries in the Token Registrar, an account must possess permission 18 or 8. Similarly, for voting on any of the Token Registrar proposals, an account must have permission 19."}),(0,s.jsx)(t.table,{children:(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:(0,s.jsx)(t.code,{children:"proposal-upsert-rate"})}),(0,s.jsx)(t.th,{children:"Create or update a token rate through a proposal."})]})})}),(0,s.jsx)(t.h4,{id:"66cb1d8f16254f498ca6f97660eddb5e",children:"Proposal to Upsert Token Rate"}),(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"proposal-upsert-rate"})," CLI command is used to create or update a token rate registry through a proposal process."]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Flags"})}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$TITLE"}),": The title of the proposal."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$DESCRIPTION"}),": The description of the proposal, which can be a URL, text, etc."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$DENOM"}),": Denomination of the token (e.g., ",(0,s.jsx)(t.code,{children:"tbtc"}),")."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$FEE_PAYMENT"}),": Boolean indicating if the token can be used for fee payment."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$RATE"}),": Token\u2019s exchange rate compared to KEX."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$STAKE_TOKEN"}),": Boolean indicating if the token can be used for staking."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$STAKE_CAP"}),": Staking rewards shares allocated for the token per staking pool."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"$STAKE_MIN"}),": Minimum amount of token required to stake per transaction."]}),"\n"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"sekaid tx tokens proposal-upsert-rate \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n--denom=$DENOM --rate=$RATE \\\n--fee_payments=$FEE_PAYMENT --stake_token=$STAKE_TOKEN \\\n--stake_cap=$STAKE_CAP --stake_min=$STAKE_MIN\n"})})]})]})]})}function f(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var s=n(6905);const a={tabItem:"tabItem_Ymn6"};var r=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var s=n(7294),a=n(6905),r=n(2466),i=n(6550),o=n(469),c=n(1980),d=n(7392),l=n(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function x(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[i,c]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[d,h]=x({queryString:n,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,l.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),j=(()=>{const e=d??p;return f({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=n(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=n(5893);function b(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),l=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==s&&(d(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>c.push(e),onKeyDown:h,onClick:l,...r,className:(0,a.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function g(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function v(e){const t=p(e);return(0,k.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,k.jsx)(b,{...e,...t}),(0,k.jsx)(g,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,k.jsx)(v,{...e,children:h(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);