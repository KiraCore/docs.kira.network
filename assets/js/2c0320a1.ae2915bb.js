"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[9125],{2177:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>o,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"backend---sekai/modules/universal-basic-income/universal-basic-income","title":"Universal Basic Income","description":"Overview","source":"@site/tabs/docs/backend---sekai/modules/universal-basic-income/universal-basic-income.mdx","sourceDirName":"backend---sekai/modules/universal-basic-income","slug":"/backend---sekai/modules/universal-basic-income/universal-basic-income","permalink":"/docs/backend---sekai/modules/universal-basic-income/universal-basic-income","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/universal-basic-income/universal-basic-income&page-local=backend---sekai/modules/universal-basic-income/universal-basic-income.mdx","tags":[],"version":"current","lastUpdatedAt":1716175504000,"sidebarPosition":1,"frontMatter":{"title":"Universal Basic Income","sidebar_position":1,"slug":"universal-basic-income"},"sidebar":"defaultSidebar","previous":{"title":"Staking Collectives","permalink":"/docs/backend---sekai/modules/staking-collectives/staking-collectives"},"next":{"title":"Concept","permalink":"/docs/backend---sekai/modules/universal-basic-income/concept"}}');var r=s(4848),t=s(8453),a=s(5537),d=s(9329);const o={title:"Universal Basic Income",sidebar_position:1,slug:"universal-basic-income"},c=void 0,l={},h=[{value:"Overview",id:"7ffc9017e29c48478adefa4f1f84dd92",level:3},{value:"Dynamic Mode",id:"2737f72a27dc4d3cab060bdbe4055e83",level:4},{value:"Parameters",id:"f028bb65c4b0422bb3b62ccd2e0a52c5",level:3},{value:"CLI Syntax &amp; Examples",id:"b3dc078c85c4427c95c52958d0ca5ab6",level:2},{value:"Transactions",id:"47b1445d3df3460e85daf175a211506e",level:2},{value:"Queries",id:"7c4238e3fedc40b2b2d46a697485a072",level:2},{value:"List All Existing Ubi Records",id:"d1d882fb51014efd91039863bae07ed1",level:4},{value:"Query a Specific Ubi Record",id:"b7c6ad0b47b744eba829f570ddfe7c3e",level:4},{value:"Governance",id:"c9550a2bcc6247049aeec0176a8f6060",level:2},{value:"Upsert Ubi Proposal",id:"96e2058b1db94fe9a1332559fad3d2a2",level:4},{value:"Remove Ubi Proposal",id:"caae0d4732a441a0a3187300c9593e6e",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"7ffc9017e29c48478adefa4f1f84dd92",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["The Universal Basic Income (UBI) module in the KIRA network is designed to incentivize non-sybil network participants, such as validators and governance members, through the distribution of a fixed amount of the native KEX token on a regular basis. This helps to ensure the long-term maintenance of network operations and enables these actors to perform their roles effectively. The UBI module uses ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/spending-pool/spending-pools",children:"Spending Pools"})," to distribute the funds to eligible beneficiaries, who can then claim their allotted tokens. The supply of KEX tokens is inflated by a fixed amount at regular intervals, and these tokens are deposited into the designated spending pool(s) for distribution."]}),"\n",(0,r.jsxs)(n.p,{children:["To prevent potential abuse or faults, a ",(0,r.jsx)(n.code,{children:"ubi-hard-cap"})," is set in the ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/network-properties",children:"network properties"}),", limiting the maximum amount of additional KEX that can be created per year (",(0,r.jsx)(n.code,{children:"6000000"})," KEX by default). Governance members are not allowed to create or modify UBI records in a way that would exceed this hard cap."]}),"\n",(0,r.jsx)(n.h4,{id:"2737f72a27dc4d3cab060bdbe4055e83",children:"Dynamic Mode"}),"\n",(0,r.jsxs)(n.p,{children:["Similar to the spending pool, the UBI module provides two modes: dynamic and static, which use the dynamic field. In dynamic mode, the total amount distributed per period decreases by the amount left in the pool. In other words, if some users don't claim their UBI during a particular period, the unclaimed tokens are lost and redistributed in the next period. This is done to limit token inflation and ensure that users are actively claiming their tokens.  If the ",(0,r.jsx)(n.code,{children:"dynamic"})," parameter is set to ",(0,r.jsx)(n.code,{children:"false"}),", the spending pool operates in static mode and distributes a fixed amount of tokens every time period. This way, users can be sure of the amount of tokens they will receive during each period, provided they still respect the target spending pool\u2019s ",(0,r.jsx)(n.code,{children:"claim-expiry"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"f028bb65c4b0422bb3b62ccd2e0a52c5",children:"Parameters"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"NAME"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"TYPE"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"EXAMPLE"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"KEX-UBI"})}),(0,r.jsx)(n.td,{children:"The name of the UBI contract."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"distribution_start"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1643577600"})}),(0,r.jsx)(n.td,{children:"Unix timestamp of the start of the distribution period."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"distribution_end"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1675113600"})}),(0,r.jsx)(n.td,{children:"Unix timestamp of the end of the distribution period."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"distribution_last"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1651401600"})}),(0,r.jsx)(n.td,{children:"Unix timestamp of the last distribution."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"pool"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"community"'})}),(0,r.jsx)(n.td,{children:"The spending pool name where the exact amount of KEX should be deposited."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"amount"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"1000"})}),(0,r.jsxs)(n.td,{children:["The amount of KEX tokens to be minted and distributed every period into ",(0,r.jsx)(n.code,{children:"pool"}),"."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"period"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"uint64"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"86400"})}),(0,r.jsx)(n.td,{children:"Time in seconds that must elapse since distribution_last for the funds to be distributed automatically into the pool."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"dynamic"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"bool"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsxs)(n.td,{children:["A boolean field that defines if UBI is dynamic ",(0,r.jsx)(n.code,{children:"true"})," or static ",(0,r.jsx)(n.code,{children:"false"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"b3dc078c85c4427c95c52958d0ca5ab6",children:"CLI Syntax & Examples"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:"Roles & Permissions"})," documentation for more details."]})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"$SIGNER"})," represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as ",(0,r.jsx)(n.code,{children:"$FLAGS_TX"})," and ",(0,r.jsx)(n.code,{children:"$FLAGS_QR"}),", see the ",(0,r.jsx)(n.a,{href:"/docs/backend---sekai/cli-guide",children:"CLI Guide"})," page."]})}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(d.A,{value:"transactions",label:"Transactions",children:[(0,r.jsx)(n.h2,{id:"47b1445d3df3460e85daf175a211506e",children:"Transactions"}),(0,r.jsx)(n.p,{children:"There is no transactions other than the governance proposals for this sub-module."})]}),(0,r.jsxs)(d.A,{value:"queries",label:"Queries",children:[(0,r.jsx)(n.h2,{id:"7c4238e3fedc40b2b2d46a697485a072",children:"Queries"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"ubi-records"})}),(0,r.jsx)(n.th,{children:"List all existing UBI records."})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ubi-record-by-name"})}),(0,r.jsx)(n.td,{children:"Query a specific UBI record by its name."})]})})]}),(0,r.jsx)(n.h4,{id:"d1d882fb51014efd91039863bae07ed1",children:"List All Existing Ubi Records"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid query ubi ubi-records $FLAGS_QR | jq\n"})}),(0,r.jsx)(n.h4,{id:"b7c6ad0b47b744eba829f570ddfe7c3e",children:"Query a Specific Ubi Record"}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Args"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$NAME"}),": The name of the UBI record."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sekaid query ubi ubi-record-by-name $NAME $FLAGS_QR | jq\n"})})]}),(0,r.jsxs)(d.A,{value:"governance",label:"Governance",children:[(0,r.jsx)(n.h2,{id:"c9550a2bcc6247049aeec0176a8f6060",children:"Governance"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"proposal-upsert-ubi"})}),(0,r.jsx)(n.th,{children:"Create a proposal to insert or update a Universal Basic Income (UBI) distribution."})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"proposal-remove-ubi"})}),(0,r.jsx)(n.td,{children:"Create a proposal to remove a Universal Basic Income (UBI) distribution."})]})})]}),(0,r.jsx)(n.h4,{id:"96e2058b1db94fe9a1332559fad3d2a2",children:"Upsert Ubi Proposal"}),(0,r.jsxs)(n.p,{children:["The CLI command, ",(0,r.jsx)(n.code,{children:"proposal-upsert-ubi"}),", creates a proposal to upsert (insert or update) a Universal Basic Income (UBI) distribution."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$TITLE"}),": The title of a proposal."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal, which can be a URL, text, etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$NAME"}),": Name of the UBI record (e.g., ",(0,r.jsx)(n.code,{children:"ValidatorPerMinuteIncome"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$POOLNAME"}),": Name of the associated spending pool registry for depositing ",(0,r.jsx)(n.code,{children:"$AMOUNT"})," of KEX (e.g., ",(0,r.jsx)(n.code,{children:"ValidatorBasicRewardsPool"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$DISTRIBUTIONSTART"}),": The exact starting time of the UBI, in Unix timestamps."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$DISTRIBUTIONEND"}),": The exact ending time of the UBI, in Unix timestamps."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$PERIOD"}),": Period in seconds for the KEX supply inflation by ",(0,r.jsx)(n.code,{children:"$AMOUNT"})," and deposit in the UBI pool."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$AMOUNT"}),": The amount of KEX tokens to be minted and distributed per ",(0,r.jsx)(n.code,{children:"$PERIOD"})," into the pool."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov proposal-upsert-ubi \\\n--from=$SIGNER $FLAGS_TX \\\n--name=$NAME \\\n--distribution-start=$DISTRIBUTION_START \\\n--distribution-end=$DISTRIBUTION_END \\\n--amount=$AMOUNT \\\n--period=$PERIOD \\\n--pool-name=$POOL_NAME \\\n--title=$TITLE --description=$DESCRIPTION\n"})}),(0,r.jsx)(n.h4,{id:"caae0d4732a441a0a3187300c9593e6e",children:"Remove Ubi Proposal"}),(0,r.jsxs)(n.p,{children:["The CLI command, ",(0,r.jsx)(n.code,{children:"proposal-remove-ubi"}),", creates a proposal to remove a Universal Basic Income (UBI) distribution."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$NAME"}),": The name of the UBI."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$TITLE"}),": The title of the proposal."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov proposal-remove-ubi \\\n--from=$SIGNER $FLAGS_TX \\\n--name=$NAME \\\n--title=$TITLE --description=$DESCRIPTION\n"})})]})]})]})}function x(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9329:(e,n,s)=>{s.d(n,{A:()=>a});s(6540);var i=s(8215);const r={tabItem:"tabItem_Ymn6"};var t=s(4848);function a(e){let{children:n,hidden:s,className:a}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,i.A)(r.tabItem,a),hidden:s,children:n})}},5537:(e,n,s)=>{s.d(n,{A:()=>T});var i=s(6540),r=s(8215),t=s(5627),a=s(6347),d=s(372),o=s(604),c=s(1861),l=s(8749);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:r}}=e;return{value:n,label:s,attributes:i,default:r}}))}(s);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:s}=e;const r=(0,a.W6)(),t=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(t),(0,i.useCallback)((e=>{if(!t)return;const n=new URLSearchParams(r.location.search);n.set(t,e),r.replace({...r.location,search:n.toString()})}),[t,r])]}function b(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,t=u(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:t}))),[c,h]=p({queryString:s,groupId:r}),[b,m]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,t]=(0,l.Dv)(s);return[r,(0,i.useCallback)((e=>{s&&t.set(e)}),[s,t])]}({groupId:r}),j=(()=>{const e=c??b;return x({value:e,tabValues:t})?e:null})();(0,d.A)((()=>{j&&o(j)}),[j]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),m(e)}),[h,m,t]),tabValues:t}}var m=s(9136);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function v(e){let{className:n,block:s,selectedValue:i,selectValue:a,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),l=e=>{const n=e.currentTarget,s=o.indexOf(n),r=d[s].value;r!==i&&(c(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:d.map((e=>{let{value:n,label:s,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>{o.push(e)},onKeyDown:h,onClick:l,...t,className:(0,r.A)("tabs__item",j.tabItem,t?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:t}=e;const a=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function I(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...n,...e}),(0,f.jsx)(g,{...n,...e})]})}function T(e){const n=(0,m.A)();return(0,f.jsx)(I,{...e,children:h(e.children)},String(n))}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>d});var i=s(6540);const r={},t=i.createContext(r);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);