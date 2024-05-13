"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3513],{1275:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(5893),a=t(1151);t(4866),t(5162);const r={title:"CLI Guide",sidebar_position:4,slug:"/875c7eb5-aaee-4e48-a859-4ab0d4ba1ba7"},i=void 0,o={id:"backend---sekai/cli-guide",title:"CLI Guide",description:"For the latest status on the functionality of Sekai CLI commands and flags, refer to this KM CLI documentation. This resource meticulously tracks the operability of each feature, offering a clear view of what's currently functional along with examples and additional information: KIRA Network CLI Status.",source:"@site/tabs/docs/backend---sekai/cli-guide.mdx",sourceDirName:"backend---sekai",slug:"/875c7eb5-aaee-4e48-a859-4ab0d4ba1ba7",permalink:"/docs/875c7eb5-aaee-4e48-a859-4ab0d4ba1ba7",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/875c7eb5-aaee-4e48-a859-4ab0d4ba1ba7&page-local=backend---sekai/cli-guide.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"CLI Guide",sidebar_position:4,slug:"/875c7eb5-aaee-4e48-a859-4ab0d4ba1ba7"},sidebar:"defaultSidebar",previous:{title:"Configuration",permalink:"/docs/sekai-config"},next:{title:"Concept",permalink:"/docs/f7a0a518-e818-481c-aa8c-7c63ee1cf2ab"}},d={},c=[{value:"Commands Syntax",id:"e4a1051b836c4dde8929033559feaba1",level:3},{value:"Flags Configuration",id:"9aced983c64b4b898302f62c5b06bd78",level:3},{value:"List of Flags",id:"17069fece0de4a84bb83b7e16b9a6dba",level:4}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["For the latest status on the functionality of Sekai CLI commands and flags, refer to this KM CLI documentation. This resource meticulously tracks the operability of each feature, offering a clear view of what's currently functional along with examples and additional information: ",(0,s.jsx)(n.a,{href:"https://github.com/MrLutik/kira2.0/blob/master/docs/sekai.md",children:"KIRA Network CLI Status"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"e4a1051b836c4dde8929033559feaba1",children:"Commands Syntax"}),"\n",(0,s.jsxs)(n.p,{children:["SEKAI provides a command-line interface (CLI) that enables users to interact with its modules. Using the CLI, users can create, sign, and submit ",(0,s.jsx)(n.code,{children:"Msg"})," transactions, as well as query the blockchain's state and node information. Each module has its own set of CLI commands, which can be accessed through the main CLI entrypoint ",(0,s.jsx)(n.code,{children:"sekaid"}),". These commands fall into two categories: transactions ",(0,s.jsx)(n.code,{children:"tx"}),", which require signing, and queries ",(0,s.jsx)(n.code,{children:"query"}),", which do not. To create a transaction using the CLI, users need to specify the transaction command, as well as any required arguments and flags. For more information on the available commands for a specific module, users can refer to the module's documentation or use the ",(0,s.jsx)(n.code,{children:"--help"})," flag. For example, to see all available CLI commands for bank module, users can run ",(0,s.jsx)(n.code,{children:"sekaid tx bank --help"})," for transactions or ",(0,s.jsx)(n.code,{children:"sekaid query bank --help"})," for queries."]}),"\n",(0,s.jsx)(n.p,{children:"For example, to send tokens from one account to another, users can run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid tx bank send $from_key_or_address $to_address $amount --chain-id=$NETWORK_NAME --home=$SEKAID_HOME --fees=100ukex --keyring-backend=test --yes --broadcast-mode=block --log_format=json --output=json.\n"})}),"\n",(0,s.jsxs)(n.p,{children:["To query the blockchain state or node information, users can use the ",(0,s.jsx)(n.code,{children:"query"})," command followed by the relevant subcommand and arguments. For example, to query the balance of an account, users can run the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sekaid query bank balance $address --home=$SEKAID_HOME --chain-id=$NETWORK_NAME --output=json\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"$NETWORK_NAME"})," and ",(0,s.jsx)(n.code,{children:"$SEKAID_HOME"})," env variables should have been set up during ",(0,s.jsx)(n.a,{href:"/docs/sekai-installation",children:"SEKAI installation"})," process and all other flags can be set as env variable. More on this in the section below."]})}),"\n",(0,s.jsx)(n.h3,{id:"9aced983c64b4b898302f62c5b06bd78",children:"Flags Configuration"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Some flags may be required by specific CLIs."})}),"\n",(0,s.jsxs)(n.p,{children:["SEKAI CLIs offers a range of flags that can be used to customize the behavior of commands and gather additional information from the transaction signer, such as the amount of ",(0,s.jsx)(n.code,{children:"--fees"})," the user is willing to pay. Some common flags include ",(0,s.jsx)(n.code,{children:"--home"}),", which allows users to specify the location of the data directory, and ",(0,s.jsx)(n.code,{children:"--chain-id"}),", which allows users to specify the chain ID. Additionally, users can specify the keys storage backend with ",(0,s.jsx)(n.code,{children:"--keyring-backend"}),". A full list of available flags can be below or accessed using the ",(0,s.jsx)(n.code,{children:"--help"})," flag with the relevant CLI."]}),"\n",(0,s.jsxs)(n.p,{children:["To streamline the process of specifying flags for transactions, users can use the ",(0,s.jsx)(n.code,{children:"bash-utils"})," tool developed by KIRA. This tool, which has been installed alongside SEKAID, allows users to easily set environment variables for common flags and load them as needed. For example, to set common flags for transactions on the testnet (such as ",(0,s.jsx)(n.code,{children:"--keyring-backend=test"}),"), users can add the following environment variable:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'setGlobEnv FLAGS_TX "--home=$SEKAID_HOME --chain-id=$NETWORK_NAME --fees=100ukex --keyring-backend=test --yes --broadcast-mode=block --log_format=json --output=json"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Similar to transactions, users can also set environment variables for common flags used in queries. For example, to set common flags for queries, users can add the following environment variable:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'setGlobEnv FLAGS_QR "--home=$SEKAID_HOME --chain-id=$NETWORK_NAME --output=json"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["To use those newly created environment variables, simply call the ",(0,s.jsx)(n.code,{children:"loadGlobEnvs"})," function:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"loadGlobEnvs\n"})}),"\n",(0,s.jsx)(n.h4,{id:"17069fece0de4a84bb83b7e16b9a6dba",children:"List of Flags"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"FLAG"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"DEFAULT"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--output"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"json"'})}),(0,s.jsxs)(n.td,{children:["Output format (",(0,s.jsx)(n.code,{children:"text"})," or ",(0,s.jsx)(n.code,{children:"json"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--keyring-dir"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"The client Keyring directory; if omitted, the default 'home' directory will be used"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--from"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Name or address of private key with which to sign the transaction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--account-number"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0"})}),(0,s.jsx)(n.td,{children:"The account number of the signing account (offline mode only)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--sequence"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0"})}),(0,s.jsx)(n.td,{children:"The sequence number of the signing account (offline mode only)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--note"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Note to add a description to the transaction (previously ",(0,s.jsx)(n.code,{children:"--memo"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--fees"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Fees to pay along with transaction; eg: ",(0,s.jsx)(n.code,{children:"10ukex"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--gas-prices"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Gas prices in decimal format to determine the transaction fee (e.g. ",(0,s.jsx)(n.code,{children:"0.1ukex"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--node"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"tcp://localhost:26657"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"<host>:<port>"})," to tendermint rpc interface for this chain"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--ledger"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Use a connected Ledger device"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--gas-adjustment"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"DefaultGasAdjustment"})}),(0,s.jsx)(n.td,{children:"adjustment factor to be multiplied against the estimate returned by the tx simulation; if the gas limit is set manually this flag is ignored"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--broadcast-mode"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"BroadcastSync"})}),(0,s.jsxs)(n.td,{children:["Transaction broadcasting mode (",(0,s.jsx)(n.code,{children:"sync"})," or ",(0,s.jsx)(n.code,{children:"async"})," or ",(0,s.jsx)(n.code,{children:"block"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--dry-run"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["ignore the ",(0,s.jsx)(n.code,{children:"--gas"})," flag and perform a simulation of a transaction, but don't broadcast it (when enabled, the local Keybase is not accessible)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--generate-only"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Build an unsigned transaction and write it to STDOUT (when enabled, the local Keybase only accessed when providing a key name)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--offline"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Offline mode (does not allow any online functionality)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--yes"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Skip tx broadcasting prompt confirmation"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--keyring-backend"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"DefaultKeyringBackend"})}),(0,s.jsxs)(n.td,{children:["Select keyring's backend (",(0,s.jsx)(n.code,{children:"os"})," or ",(0,s.jsx)(n.code,{children:"file"})," or ",(0,s.jsx)(n.code,{children:"kwallet"})," or ",(0,s.jsx)(n.code,{children:"pass"})," or ",(0,s.jsx)(n.code,{children:"test"})," or ",(0,s.jsx)(n.code,{children:"memory"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--sign-mode"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Choose sign mode (",(0,s.jsx)(n.code,{children:"direct"})," or ",(0,s.jsx)(n.code,{children:"amino-json"})," or ",(0,s.jsx)(n.code,{children:"direct-aux"}),"), this is an advanced feature"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--timeout-height"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"0"})}),(0,s.jsx)(n.td,{children:"Set a block timeout height to prevent the tx from being committed past a certain height"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--fee-payer"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Fee payer pays fees for the transaction instead of deducting from the signer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--fee-granter"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"Fee granter grants fees for the transaction"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--tip"})}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["Tip is the amount that is going to be transferred to the fee payer on the target chain. ",(0,s.jsx)("br",{}),"This flag is only valid when used with ",(0,s.jsx)(n.code,{children:"--aux"}),", and is ignored if the target chain didn't enable the TipDecorator"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--aux"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Generate aux signer data instead of sending a tx"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"--gas"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'gas limit to set per-transaction; set to "auto" to calculate sufficient gas automatically'})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var s=t(6905);const a={tabItem:"tabItem_Ymn6"};var r=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var s=t(7294),a=t(6905),r=t(2466),i=t(6550),o=t(469),d=t(1980),c=t(7392),l=t(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function x(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,d._X)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(a.location.search);n.set(r,e),a.replace({...a.location,search:n.toString()})}),[r,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,r=u(e),[i,d]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[c,h]=j({queryString:t,groupId:a}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,r]=(0,l.Nk)(t);return[a,(0,s.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:a}),b=(()=>{const e=c??f;return x({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{b&&d(b)}),[b]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),m(e)}),[h,m,r]),tabValues:r}}var m=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function p(e){let{className:n,block:t,selectedValue:s,selectValue:i,tabValues:o}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),l=e=>{const n=e.currentTarget,t=d.indexOf(n),a=o[t].value;a!==s&&(c(n),i(a))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>d.push(e),onKeyDown:h,onClick:l,...r,className:(0,a.Z)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(p,{...e,...n}),(0,g.jsx)(y,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>i});var s=t(7294);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);