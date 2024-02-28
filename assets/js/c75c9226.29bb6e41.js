"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4639],{6511:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=t(5893),s=t(1151),i=t(4866),a=t(5162);const c={title:"Fee processing",sidebar_position:2,slug:"/184c11ed-4849-4ec5-acd0-f795b7abf467"},o=void 0,d={id:"Stack/SEKAI--Backend/Modules/Fee-processing/Fee-processing",title:"Fee processing",description:"Concept",source:"@site/tabs/Docs/Stack/SEKAI--Backend/Modules/Fee-processing/Fee-processing.mdx",sourceDirName:"Stack/SEKAI--Backend/Modules/Fee-processing",slug:"/184c11ed-4849-4ec5-acd0-f795b7abf467",permalink:"/docs.kira.network/docs/184c11ed-4849-4ec5-acd0-f795b7abf467",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Fee processing",sidebar_position:2,slug:"/184c11ed-4849-4ec5-acd0-f795b7abf467"},sidebar:"defaultSidebar",previous:{title:"Upgrade Module",permalink:"/docs.kira.network/docs/b87fd14e-b3d8-4a25-b0d2-0cda6bdc6478"},next:{title:"Fee processing",permalink:"/docs.kira.network/docs/d820877a-9fe7-424f-8866-8e822bf9ba84"}},l={},u=[{value:"Concept",id:"a64d114cc8344c4894aa2a47f4cd729c",level:2},{value:"Bounded Fee Range",id:"e2acfd45404a4165b09003c079c4c2d2",level:3},{value:"Parameters",id:"fd6b338759ce4efc92746dd86f6ddb8c",level:2},{value:"CLI Syntax &amp; Examples",id:"724094a9815c4ad3ade4bbe55757b84b",level:2},{value:"Transactions",id:"94b4014034de4cf2b6a908adec732def",level:2},{value:"Updating Execution Fees With Sudo Permission",id:"7f04fc7ef9574a42822d4a1ff95796b0",level:4},{value:"Queries",id:"111168574d0749cf9e568b9864bbf5cb",level:2},{value:"Query Execution Fees",id:"826587771d4d41ee8cb94b8f55770fe0",level:4},{value:"Governance",id:"4a1056edcb7643c1bfc80fa905a8fee1",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"a64d114cc8344c4894aa2a47f4cd729c",children:"Concept"}),"\n",(0,r.jsx)(n.p,{children:'Traditional Layer 1 blockchain networks like Ethereum use a complex, dynamic fee market determined by opcode prices and the computational "gas" consumed during transaction execution. In such a system, calculating the exact transaction cost can be cumbersome and time-consuming. Additionally, these opcode prices are deeply embedded within the protocol, typically requiring a network upgrade or hard fork for changes.'}),"\n",(0,r.jsxs)(n.p,{children:['KIRA\'s approach replaces the conventional "gas" system with a governance-driven structure. Here, transaction fees are predefined for each type of transaction and uniformly denominated in ',(0,r.jsx)(n.code,{children:"ukex"}),", simplifying and stabilizing the fee calculation. Additionally, the governance is tasked with setting failure fees for each transaction type and determining a specific timeout period for transactions. Complementing this streamlined fee structure, KIRA's ",(0,r.jsx)(n.a,{href:"/f19a45b3-88c4-469c-8642-772b941a1b24",children:"Token Rates Registrar"})," allows fees to be paid in other whitelisted tokens at a ",(0,r.jsx)(n.code,{children:"fee_rate"})," defined by the governance. This mechanism ensures a clear and efficient conversion between ",(0,r.jsx)(n.code,{children:"ukex"})," and other tokens, enhancing the network's flexibility and user accessibility."]}),"\n",(0,r.jsx)(n.h3,{id:"e2acfd45404a4165b09003c079c4c2d2",children:"Bounded Fee Range"}),"\n",(0,r.jsxs)(n.p,{children:["While KIRA does have a fee market, it operates within a bounded range set by the ",(0,r.jsx)(n.code,{children:"min_tx_fee"})," and ",(0,r.jsx)(n.code,{children:"max_tx_fee"})," parameters. This approach serves two purposes:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Spam Prevention"}),": The ",(0,r.jsx)(n.code,{children:"min_tx_fee"})," sets a lower boundary, acting as a deterrent against spam transactions, thus maintaining the network's integrity by preventing it from being overloaded with low-value or malicious transactions."]}),"\n",(0,r.jsxs)(n.li,{children:["User Protection: The ",(0,r.jsx)(n.code,{children:"max_tx_fee"})," acts as an upper limit, safeguarding users from inadvertently incurring excessive fees. This is particularly important in preventing significant fund losses that might occur due to mistakenly high fee inputs during transaction submission."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"fd6b338759ce4efc92746dd86f6ddb8c",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"NAME"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"TYPE"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"EXAMPLE"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"transaction_type"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"submit-proposal"})}),(0,r.jsxs)(n.td,{children:["The specific transaction type the following parameters apply to. All existing types can be found ",(0,r.jsx)(n.a,{href:"https://github.com/KiraCore/sekai/blob/master/types/Msg.go#L9",children:(0,r.jsx)(n.strong,{children:"here"})}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"execution_fee"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"100"})}),(0,r.jsx)(n.td,{children:"The required fee for users to successfully execute this particular transaction type."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"failure_fee"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"50"})}),(0,r.jsx)(n.td,{children:"The fee users must pay in case the transaction execution is unsuccessful."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"timeout"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"300"})}),(0,r.jsx)(n.td,{children:"The time duration (in seconds) after which the transaction execution will be considered as failed if not completed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"default_parameters"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"42"})}),(0,r.jsx)(n.td,{children:"The default input values that the corresponding transaction function will utilize before execution."})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"724094a9815c4ad3ade4bbe55757b84b",children:"CLI Syntax & Examples"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,r.jsx)(n.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,r.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,r.jsx)(n.em,{children:"documentation for more details."})," ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"$SIGNER"})})," ",(0,r.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,r.jsx)(n.em,{children:"and"})," ",(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,r.jsx)(n.em,{children:"section"})]})}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(a.Z,{value:"transactions",label:"Transactions",children:[(0,r.jsx)(n.h2,{id:"94b4014034de4cf2b6a908adec732def",children:"Transactions"}),(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"set-execution-fee"})}),(0,r.jsx)(n.th,{children:"Update execution fee parameters for different transaction types."})]})})}),(0,r.jsx)(n.h4,{id:"7f04fc7ef9574a42822d4a1ff95796b0",children:"Updating Execution Fees With Sudo Permission"}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"set-execution-fee"})," CLI command allows accounts with sudo permission 7 to modify execution fee parameters for different transaction types."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$TX_TYPE"}),": The type of transaction for which the fees are being updated."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"$"})}),(0,r.jsx)(n.code,{children:"EXECUTION_FEE"}),": The fee for successful execution of the transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$FAILURE_FEE"}),": The fee for failed execution of the transaction."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$TX_TIMEOUT"}),": The timeout duration for the transaction."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov set-execution-fee \\\n--from=$SIGNER $FLAGS_TX \\\n--transaction_type=$TX_TYPE \\\n--execution_fee=$EXECUTION_FEE \\\n--failure_fee=$FAILURE_FEE \\\n--timeout=$TX_TIMEOUT\n"})})]}),(0,r.jsxs)(a.Z,{value:"queries",label:"Queries",children:[(0,r.jsx)(n.h2,{id:"111168574d0749cf9e568b9864bbf5cb",children:"Queries"}),(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"execution-fee"})}),(0,r.jsx)(n.th,{children:"Retrieve execution fee parameters for a specified transaction type."})]})})}),(0,r.jsx)(n.h4,{id:"826587771d4d41ee8cb94b8f55770fe0",children:"Query Execution Fees"}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"execution-fee"})," CLI command is used to retrieve the execution fee parameters for a specified transaction type."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Args"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$TRANSACTION_TYPE"}),": The type of transaction for which to query the execution fees."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sekaid query customgov execution-fee $TRANSACTION_TYPE $FLAGS_QR | jq\n"})})]}),(0,r.jsxs)(a.Z,{value:"governance",label:"Governance",children:[(0,r.jsx)(n.h2,{id:"4a1056edcb7643c1bfc80fa905a8fee1",children:"Governance"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/KiraCore/sekai/issues/626",children:"https://github.com/KiraCore/sekai/issues/626"})})]})]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(6905);const s={tabItem:"tabItem_Ymn6"};var i=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>T});var r=t(7294),s=t(6905),i=t(2466),a=t(6550),c=t(469),o=t(1980),d=t(7392),l=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,u]=x({queryString:t,groupId:s}),[p,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,l.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),m=(()=>{const e=d??p;return f({value:e,tabValues:i})?e:null})();(0,c.Z)((()=>{m&&o(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),b(e)}),[u,b,i]),tabValues:i}}var b=t(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),l=e=>{const n=e.currentTarget,t=o.indexOf(n),s=c[t].value;s!==r&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:l,...i,className:(0,s.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=p(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function T(e){const n=(0,b.Z)();return(0,j.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>a});var r=t(7294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);