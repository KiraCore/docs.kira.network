"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[811],{3455:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var t=s(5893),r=s(1151),i=s(4866),c=s(5162);const a={title:"Fee processing",sidebar_position:1,slug:"fee-processing"},o=void 0,d={id:"backend---sekai/modules/fee-processing/fee-processing",title:"Fee processing",description:"Concept",source:"@site/tabs/docs/backend---sekai/modules/fee-processing/fee-processing.mdx",sourceDirName:"backend---sekai/modules/fee-processing",slug:"/backend---sekai/modules/fee-processing/fee-processing",permalink:"/docs/backend---sekai/modules/fee-processing/fee-processing",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/fee-processing/fee-processing&page-local=backend---sekai/modules/fee-processing/fee-processing.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:1,frontMatter:{title:"Fee processing",sidebar_position:1,slug:"fee-processing"},sidebar:"defaultSidebar",previous:{title:"Upgrade Module",permalink:"/docs/backend---sekai/modules/upgrade/upgrade-module"},next:{title:"Overview",permalink:"/docs/backend---sekai/modules/fee-processing/overview"}},l={},u=[{value:"Concept",id:"a64d114cc8344c4894aa2a47f4cd729c",level:2},{value:"Bounded Fee Range",id:"e2acfd45404a4165b09003c079c4c2d2",level:3},{value:"Parameters",id:"fd6b338759ce4efc92746dd86f6ddb8c",level:2},{value:"CLI Syntax &amp; Examples",id:"724094a9815c4ad3ade4bbe55757b84b",level:2},{value:"Transactions",id:"94b4014034de4cf2b6a908adec732def",level:2},{value:"Updating Execution Fees With Sudo Permission",id:"7f04fc7ef9574a42822d4a1ff95796b0",level:4},{value:"Queries",id:"111168574d0749cf9e568b9864bbf5cb",level:2},{value:"Query Execution Fees",id:"826587771d4d41ee8cb94b8f55770fe0",level:4},{value:"Governance",id:"4a1056edcb7643c1bfc80fa905a8fee1",level:2},{value:"Updating Execution Fees",id:"1ad7e28b92154c648d688f9baf12b4b4",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"a64d114cc8344c4894aa2a47f4cd729c",children:"Concept"}),"\n",(0,t.jsx)(n.h3,{id:"e2acfd45404a4165b09003c079c4c2d2",children:"Bounded Fee Range"}),"\n",(0,t.jsxs)(n.p,{children:["While KIRA does have a fee market, it operates within a bounded range set by the ",(0,t.jsx)(n.code,{children:"min_tx_fee"})," and ",(0,t.jsx)(n.code,{children:"max_tx_fee"})," parameters. This approach serves two purposes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Spam Prevention"}),": The ",(0,t.jsx)(n.code,{children:"min_tx_fee"})," sets a lower boundary, acting as a deterrent against spam transactions, thus maintaining the network's integrity by preventing it from being overloaded with low-value or malicious transactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"User Protection"}),": The ",(0,t.jsx)(n.code,{children:"max_tx_fee"})," acts as an upper limit, safeguarding users from inadvertently incurring excessive fees. This is particularly important in preventing significant fund losses that might occur due to mistakenly high fee inputs during transaction submission."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"fd6b338759ce4efc92746dd86f6ddb8c",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"NAME"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"TYPE"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"EXAMPLE"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"transaction_type"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"submit-proposal"})}),(0,t.jsxs)(n.td,{children:["The specific transaction type the following parameters apply to. All existing types can be found ",(0,t.jsx)(n.a,{href:"https://github.com/KiraCore/sekai/blob/master/types/Msg.go#L9",children:(0,t.jsx)(n.strong,{children:"here"})}),"."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"execution_fee"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uint64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"100"})}),(0,t.jsx)(n.td,{children:"The required fee for users to successfully execute this particular transaction type."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"failure_fee"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uint64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"50"})}),(0,t.jsx)(n.td,{children:"The fee users must pay in case the transaction execution is unsuccessful."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timeout"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uint64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"300"})}),(0,t.jsx)(n.td,{children:"The time duration (in seconds) after which the transaction execution will be considered as failed if not completed."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"default_parameters"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"uint64"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"42"})}),(0,t.jsx)(n.td,{children:"The default input values that the corresponding transaction function will utilize before execution."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"724094a9815c4ad3ade4bbe55757b84b",children:"CLI Syntax & Examples"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,t.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:(0,t.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,t.jsx)(n.em,{children:"documentation for more details."})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$SIGNER"})})," ",(0,t.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,t.jsx)(n.em,{children:(0,t.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,t.jsx)(n.em,{children:"and"})," ",(0,t.jsxs)(n.em,{children:[(0,t.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,t.jsx)(n.em,{children:"section"})]})}),"\n",(0,t.jsxs)(i.Z,{children:[(0,t.jsxs)(c.Z,{value:"transactions",label:"Transactions",children:[(0,t.jsx)(n.h2,{id:"94b4014034de4cf2b6a908adec732def",children:"Transactions"}),(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"set-execution-fee"})}),(0,t.jsx)(n.th,{children:"Update execution fee parameters for different transaction types."})]})})}),(0,t.jsx)(n.h4,{id:"7f04fc7ef9574a42822d4a1ff95796b0",children:"Updating Execution Fees With Sudo Permission"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"set-execution-fee"})," CLI command allows accounts with sudo permission 7 to modify execution fee parameters for different transaction types."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$TX_TYPE"}),": The type of transaction for which the fees are being updated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$"})}),(0,t.jsx)(n.code,{children:"EXECUTION_FEE"}),": The fee for successful execution of the transaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$FAILURE_FEE"}),": The fee for failed execution of the transaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$TX_TIMEOUT"}),": The timeout duration for the transaction."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov set-execution-fee \\\n--from=$SIGNER $FLAGS_TX \\\n--transaction_type=$TX_TYPE \\\n--execution_fee=$EXECUTION_FEE \\\n--failure_fee=$FAILURE_FEE \\\n--timeout=$TX_TIMEOUT\n"})})]}),(0,t.jsxs)(c.Z,{value:"queries",label:"Queries",children:[(0,t.jsx)(n.h2,{id:"111168574d0749cf9e568b9864bbf5cb",children:"Queries"}),(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"execution-fee"})}),(0,t.jsx)(n.th,{children:"Retrieve execution fee parameters for a specified transaction type."})]})})}),(0,t.jsx)(n.h4,{id:"826587771d4d41ee8cb94b8f55770fe0",children:"Query Execution Fees"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"execution-fee"})," CLI command is used to retrieve the execution fee parameters for a specified transaction type."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Args"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$TRANSACTION_TYPE"}),": The type of transaction for which to query the execution fees."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query customgov execution-fee $TRANSACTION_TYPE $FLAGS_QR | jq\n"})})]}),(0,t.jsxs)(c.Z,{value:"governance",label:"Governance",children:[(0,t.jsx)(n.h2,{id:"4a1056edcb7643c1bfc80fa905a8fee1",children:"Governance"}),(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"set-execution-fee"})}),(0,t.jsx)(n.th,{children:"Update execution fee parameters for different transaction types."})]})})}),(0,t.jsx)(n.h4,{id:"1ad7e28b92154c648d688f9baf12b4b4",children:"Updating Execution Fees"}),(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"set-execution-fee"})," CLI command allows accounts with permission XXX to modify execution fee parameters for different transaction types."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Flags"})}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$TX_TYPE"}),": The type of transaction for which the fees are being updated."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"$"})}),(0,t.jsx)(n.code,{children:"EXECUTION_FEE"}),": The fee for successful execution of the transaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$FAILURE_FEE"}),": The fee for failed execution of the transaction."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"$TX_TIMEOUT"}),": The timeout duration for the transaction."]}),"\n"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid tx gov set-execution-fee \\\n--from=$SIGNER $FLAGS_TX \\\n--transaction_type=$TX_TYPE \\\n--execution_fee=$EXECUTION_FEE \\\n--failure_fee=$FAILURE_FEE \\\n--timeout=$TX_TIMEOUT\n"})})]})]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>c});s(7294);var t=s(6905);const r={tabItem:"tabItem_Ymn6"};var i=s(5893);function c(e){let{children:n,hidden:s,className:c}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,c),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>E});var t=s(7294),r=s(6905),i=s(2466),c=s(6550),a=s(469),o=s(1980),d=s(7392),l=s(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function f(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:s}=e;const r=(0,c.k6)(),i=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o._X)(i),(0,t.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function p(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,i=h(e),[c,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[d,u]=x({queryString:s,groupId:r}),[p,j]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,l.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&i.set(e)}),[s,i])]}({groupId:r}),m=(()=>{const e=d??p;return f({value:e,tabValues:i})?e:null})();(0,a.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:c,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),j(e)}),[u,j,i]),tabValues:i}}var j=s(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=s(5893);function g(e){let{className:n,block:s,selectedValue:t,selectValue:c,tabValues:a}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),l=e=>{const n=e.currentTarget,s=o.indexOf(n),r=a[s].value;r!==t&&(d(n),c(r))},u=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:u,onClick:l,...i,className:(0,r.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function T(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function E(e){const n=(0,j.Z)();return(0,b.jsx)(T,{...e,children:u(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var t=s(7294);const r={},i=t.createContext(r);function c(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);