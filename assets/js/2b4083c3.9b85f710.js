"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[554],{6009:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var i=n(5893),r=n(1151),a=n(4866),t=n(5162);const c={title:"Keys & accounts",sidebar_position:0,slug:"keys--accounts"},d=void 0,o={id:"backend---sekai/modules/core-(cosmossdk)/keys-&-accounts",title:"Keys & accounts",description:"Overview",source:"@site/tabs/docs/backend---sekai/modules/core-(cosmossdk)/keys-&-accounts.mdx",sourceDirName:"backend---sekai/modules/core-(cosmossdk)",slug:"/backend---sekai/modules/core-(cosmossdk)/keys--accounts",permalink:"/docs/backend---sekai/modules/core-(cosmossdk)/keys--accounts",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/core-(cosmossdk)/keys--accounts&page-local=backend---sekai/modules/core-(cosmossdk)/keys-&-accounts.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:0,frontMatter:{title:"Keys & accounts",sidebar_position:0,slug:"keys--accounts"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/backend---sekai/modules/evidence/overview"},next:{title:"Transaction validation & processing",permalink:"/docs/backend---sekai/modules/core-(cosmossdk)/transaction-validation--processing"}},l={},h=[{value:"Overview",id:"82b15b33281f40fab625be06f3e32d64",level:2},{value:"Keyring",id:"8a741e374186404b85f2d68fc0e2a672",level:3},{value:"CLI Syntax &amp; Examples",id:"44798a61b8f749ae87a9a72c100ad055",level:2},{value:"Transactions",id:"67708b3e7e8f472b95c3ed04ad88e90c",level:2},{value:"Creating an Account",id:"b0376794dcd34d20be7c2fdbce645294",level:4},{value:"Deleting an Account",id:"c5ce2ab22e8442daad9098283b8e8f46",level:4},{value:"Recovering an Account Using Mnemonic",id:"6f2516dff83e4005835ca6da620fbc50",level:4},{value:"Queries",id:"0e3940d917c543f9bb11928e2b016cd5",level:2},{value:"Retrieve Key Information by Name or Address",id:"adb811fab06c477abbaf56c4b3cc21a6",level:4},{value:"Governance",id:"3bee0a67d26f4c2999ed12de1540a07f",level:2}];function u(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"82b15b33281f40fab625be06f3e32d64",children:"Overview"}),"\n",(0,i.jsxs)(s.p,{children:["An account in the Cosmos SDK, consists of a pair of a public key ",(0,i.jsx)(s.code,{children:"PubKey"})," and a private key ",(0,i.jsx)(s.code,{children:"PrivKey"}),". The ",(0,i.jsx)(s.code,{children:"PubKey"})," can be used to generate various ",(0,i.jsx)(s.code,{children:"Addresses"}),", which identify users and other parties in the application and are associated with messages to identify the sender. The ",(0,i.jsx)(s.code,{children:"PrivKey"})," is used to generate digital signatures to prove that an ",(0,i.jsx)(s.code,{children:"Address"})," associated with the ",(0,i.jsx)(s.code,{children:"PrivKey"})," has approved a specific message."]}),"\n",(0,i.jsxs)(s.p,{children:['KIRA accounts only exist on the blockchain if they have a non-zero balance. This is a feature of the Cosmos SDK that helps prevent the creation of "spam" accounts that do not hold any value. All KIRA addresses are 44 characters long and are ',(0,i.jsx)(s.a,{href:"https://en.bitcoin.it/wiki/Bech32",children:"Bech32"})," encoded with a ",(0,i.jsx)(s.code,{children:"kira"})," prefix (e.g. ",(0,i.jsx)(s.code,{children:"kira1d52rts8wf508uy2sdcx4a0qxjzvqr3dsnesm4w"}),"). These accounts are derived from ",(0,i.jsx)(s.a,{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki",children:"BIP39 mnemonic words"}),", which must be kept safe by the account holder at all times. Losing access to the mnemonic or revealing its contents will result in permanent and irrecoverable loss of funds."]}),"\n",(0,i.jsx)(s.p,{children:"KIRA network defines 3 types of addresses that specify a context where an account is used:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"AccAddress"}),"\xa0identifies users (the sender of a\xa0",(0,i.jsx)(s.code,{children:"message"}),")."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ValAddress"}),"\xa0identifies consensus node operators (a.k.a validators)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"ConsAddress"}),"\xa0identifies consensus nodes that are participating in consensus. Consensus nodes are derived using the\xa0",(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"ed25519"})}),"\xa0curve."]}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"8a741e374186404b85f2d68fc0e2a672",children:"Keyring"}),"\n",(0,i.jsxs)(s.p,{children:["Like in every Cosmos-based network, Private/Public keys are stored and managed by using an object called a\xa0",(0,i.jsx)(s.a,{href:"https://docs.cosmos.network/v0.47/basics/accounts#keyring",children:(0,i.jsx)(s.code,{children:"Keyring"})})," which default implementation comes from the third-party\xa0",(0,i.jsx)(s.a,{href:"https://github.com/99designs/keyring",children:"99designs/keyring"}),'\xa0library. The private key can be stored in different "backends", such as a file or the operating system\'s own key storage system. The keyring allows users to manage their keys in a secure and convenient way, and can be integrated with various backend storage options to suit the needs of the user. These backends can be specified in the CLI using the ',(0,i.jsx)(s.code,{children:"--keyring-backend"})," flag (cf. )."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"os"})," backend: This backend relies on operating system-specific defaults to handle key storage securely. It is the default option and is designed to meet users' most common needs and provide a comfortable experience without compromising on security."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"file"})," backend: This backend stores the keyring encrypted within the app's configuration directory. It requires a password each time it is accessed, which may result in multiple prompts."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"pass"})," backend: This backend uses the pass utility to manage on-disk encryption of keys' sensitive data and metadata. Keys are stored inside gpg encrypted files within app-specific directories."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"kwallet"})," backend: This backend uses KDE Wallet Manager, which comes installed by default on the GNU/Linux distributions that ships KDE as default desktop environment."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"test"})," backend: This backend is a password-less variation of the file backend and is provided for testing purposes only. It stores keys unencrypted on disk and is not recommended for use in production environments."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"memory"})," backend: This backend stores keys in memory, which are immediately deleted after the program has exited. It is provided for testing purposes only and is not recommended for use in production environments."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"44798a61b8f749ae87a9a72c100ad055",children:"CLI Syntax & Examples"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the ",(0,i.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:"Roles & Permissions"})," documentation for more details."]})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$SIGNER"})," represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as ",(0,i.jsx)(s.code,{children:"$FLAGS_TX"})," and ",(0,i.jsx)(s.code,{children:"$FLAGS_QR"}),", see the ",(0,i.jsx)(s.a,{href:"/docs/backend---sekai/cli-guide",children:"CLI Guide"})," page."]})}),"\n",(0,i.jsxs)(a.Z,{children:[(0,i.jsxs)(t.Z,{value:"transactions",label:"Transactions",children:[(0,i.jsx)(s.h2,{id:"67708b3e7e8f472b95c3ed04ad88e90c",children:"Transactions"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.code,{children:"keys add"})}),(0,i.jsx)(s.th,{children:"Add or recover an encrypted private key."})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"keys delete"})}),(0,i.jsx)(s.td,{children:"Delete a key from the keyring."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"keys recover"})}),(0,i.jsx)(s.td,{children:"Recover a key using a mnemonic."})]})]})]}),(0,i.jsx)(s.h4,{id:"b0376794dcd34d20be7c2fdbce645294",children:"Creating an Account"}),(0,i.jsxs)(s.p,{children:["To create a new key in the keyring, use the ",(0,i.jsx)(s.code,{children:"add"})," subcommand and provide the desired account key name as an argument. You can also specify the keyring backend to use by setting the ",(0,i.jsx)(s.code,{children:"$FLAGS_TX"})," environment variable or by manually using the ",(0,i.jsx)(s.code,{children:"--keyring-backend"})," flag. This is important as it determines where the private/public keypair will be stored and how it will be managed. A ",(0,i.jsx)(s.code,{children:"--multisig"}),"\xa0flag can also be provided to group multiple keys together to create a multisig key."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Flags"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$MULTISIG"}),": List of key names for constructing a legacy multisig key."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$MULTISIGTHRESHOLD"}),": K out of N required signatures for multisig."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$NOSORT"}),": Keys are taken in the order supplied if true."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$PUBLICKEY"}),": Saves key info to file from a JSON format public key."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$INTERACTIVE"}),": Interactively prompt for BIP39 passphrase and mnemonic."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$USELEDGER"}),": Store a reference to a private key on a Ledger device."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$RECOVER"}),": Recover an existing key using a seed phrase."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$NOBACKUP"}),": Don't print out the seed phrase."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$DRYRUN"}),": Perform action without adding key to local keystore."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$HDPATH"}),": Manual HD Path derivation."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$COINTYPE"}),": Coin type number for HD derivation."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$ACCOUNT"}),": Account number for HD derivation."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$INDEX"}),": Address index number for HD derivation."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$KEYALGORITHM"}),": Key signing algorithm for generating keys."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$ACCOUNT_NAME"}),": The account key name."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"sekaid keys add $ACCOUNT_NAME $FLAGS_TX\n"})}),(0,i.jsx)(s.h4,{id:"c5ce2ab22e8442daad9098283b8e8f46",children:"Deleting an Account"}),(0,i.jsxs)(s.p,{children:["To delete a key from the keyring, use the ",(0,i.jsx)(s.code,{children:"delete"})," subcommand and provide the desired account key address as an argument and specify the keyring backend to delete from by setting the ",(0,i.jsx)(s.code,{children:"$FLAGS_TX"})," environment variable or by manually using the ",(0,i.jsx)(s.code,{children:"--keyring-backend"})," flag. ",(0,i.jsx)(s.code,{children:"--force"})," flag can be specified to skip passphrase check and force key deletion unconditionally."]}),(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"Removing offline or ledger keys will remove only the public key references stored locally, i.e. private keys stored in a ledger device cannot be deleted with the CLI."})}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Flags"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$YES"}),": Skip confirmation prompt when deleting keys."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$FORCE"}),": Remove the key unconditionally without asking for the passphrase."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"sekaid keys delete $ACCOUNT_NAME $FLAGS_TX --force --yes\n"})}),(0,i.jsx)(s.h4,{id:"6f2516dff83e4005835ca6da620fbc50",children:"Recovering an Account Using Mnemonic"}),(0,i.jsxs)(s.p,{children:["To recover an account using its respective mnemonic, use the ",(0,i.jsx)(s.code,{children:"add"})," subcommand with the ",(0,i.jsx)(s.code,{children:"\u2014recover"})," flag and provide the desired account key name as an argument."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Args"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$ACCOUNT_MNEMONIC"}),": The account\u2019s mnemonic."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:'yes "$ACCOUNT_MNEMONIC" | sekaid keys add $ACCOUNT_NAME $FLAGS_TX --recover\n'})})]}),(0,i.jsxs)(t.Z,{value:"queries",label:"Queries",children:[(0,i.jsx)(s.h2,{id:"0e3940d917c543f9bb11928e2b016cd5",children:"Queries"}),(0,i.jsx)(s.table,{children:(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.code,{children:"keys show"})}),(0,i.jsx)(s.th,{children:"Display key details by name or address."})]})})}),(0,i.jsx)(s.h4,{id:"adb811fab06c477abbaf56c4b3cc21a6",children:"Retrieve Key Information by Name or Address"}),(0,i.jsxs)(s.p,{children:["To display key details, use the ",(0,i.jsx)(s.code,{children:"show"}),' subcommand and provide the account key name or address. This command can handle multiple names or addresses, creating an ephemeral multisig key named "multi" with the keys provided and the specified multisig threshold.']}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Flags"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$ACCOUNT_KEY"}),": The account key name or address."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$BECHPREFIX"}),": The Bech32 prefix encoding for a key (e.g., acc, val, cons)."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$ADDRESS"}),": Output the address only."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$PUBLICKEY"}),": Output the public key only."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$DEVICE"}),": Output the address in a ledger device."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$MULTISIGTHRESHOLD"}),": K out of N required signatures for a multisig key."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-shell",children:"bashCopy code\nsekaid keys show $ACCOUNT_KEY $FLAGS_QR | jq\n"})})]}),(0,i.jsxs)(t.Z,{value:"governance",label:"Governance",children:[(0,i.jsx)(s.h2,{id:"3bee0a67d26f4c2999ed12de1540a07f",children:"Governance"}),(0,i.jsx)(s.p,{children:"There is no governance proposal for this sub-module."})]})]})]})}function m(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,s,n)=>{n.d(s,{Z:()=>t});n(7294);var i=n(6905);const r={tabItem:"tabItem_Ymn6"};var a=n(5893);function t(e){let{children:s,hidden:n,className:t}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,t),hidden:n,children:s})}},4866:(e,s,n)=>{n.d(s,{Z:()=>v});var i=n(7294),r=n(6905),a=n(2466),t=n(6550),c=n(469),d=n(1980),o=n(7392),l=n(12);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,i.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:i,default:r}}=e;return{value:s,label:n,attributes:i,default:r}}))}(n);return function(e){const s=(0,o.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function m(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function p(e){let{queryString:s=!1,groupId:n}=e;const r=(0,t.k6)(),a=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,d._X)(a),(0,i.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(r.location.search);s.set(a,e),r.replace({...r.location,search:s.toString()})}),[a,r])]}function b(e){const{defaultValue:s,queryString:n=!1,groupId:r}=e,a=u(e),[t,d]=(0,i.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:a}))),[o,h]=p({queryString:n,groupId:r}),[b,f]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[r,a]=(0,l.Nk)(n);return[r,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),x=(()=>{const e=o??b;return m({value:e,tabValues:a})?e:null})();(0,c.Z)((()=>{x&&d(x)}),[x]);return{selectedValue:t,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),f(e)}),[h,f,a]),tabValues:a}}var f=n(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function y(e){let{className:s,block:n,selectedValue:i,selectValue:t,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,a.o5)(),l=e=>{const s=e.currentTarget,n=d.indexOf(s),r=c[n].value;r!==i&&(o(s),t(r))},h=e=>{let s=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;s=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;s=d[n]??d[d.length-1];break}}s?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},s),children:c.map((e=>{let{value:s,label:n,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:i===s?0:-1,"aria-selected":i===s,ref:e=>d.push(e),onKeyDown:h,onClick:l,...a,className:(0,r.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":i===s}),children:n??s},s)}))})}function g(e){let{lazy:s,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=a.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,s)=>(0,i.cloneElement)(e,{key:s,hidden:e.props.value!==r})))})}function k(e){const s=b(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(y,{...s,...e}),(0,j.jsx)(g,{...s,...e})]})}function v(e){const s=(0,f.Z)();return(0,j.jsx)(k,{...e,children:h(e.children)},String(s))}},1151:(e,s,n)=>{n.d(s,{Z:()=>c,a:()=>t});var i=n(7294);const r={},a=i.createContext(r);function t(e){const s=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(a.Provider,{value:s},e.children)}}}]);