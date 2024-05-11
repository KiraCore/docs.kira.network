"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[7507],{9021:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>x,frontMatter:()=>a,metadata:()=>o,toc:()=>h});var i=s(5893),t=s(1151),r=s(4866),d=s(5162);const a={title:"Universal Basic Income",sidebar_position:1,slug:"/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e"},c=void 0,o={id:"backend---sekai/modules/universal-basic-income/universal-basic-income",title:"Universal Basic Income",description:"Concept",source:"@site/tabs/Docs/backend---sekai/modules/universal-basic-income/universal-basic-income.mdx",sourceDirName:"backend---sekai/modules/universal-basic-income",slug:"/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e",permalink:"/docs/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e&page-local=backend---sekai/modules/universal-basic-income/universal-basic-income.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Universal Basic Income",sidebar_position:1,slug:"/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e"},sidebar:"defaultSidebar",previous:{title:"Staking Collectives",permalink:"/docs/3997e5c8-f744-4e83-9e22-f6845cc6c3ee"},next:{title:"Overview",permalink:"/docs/75c15eee-1005-4295-8086-92910e7ee7bb"}},l={},h=[{value:"Concept",id:"7ffc9017e29c48478adefa4f1f84dd92",level:3},{value:"Dynamic Mode",id:"2737f72a27dc4d3cab060bdbe4055e83",level:4},{value:"Parameters",id:"f028bb65c4b0422bb3b62ccd2e0a52c5",level:3},{value:"CLI Syntax &amp; Examples",id:"b3dc078c85c4427c95c52958d0ca5ab6",level:2},{value:"Transactions",id:"47b1445d3df3460e85daf175a211506e",level:2},{value:"Queries",id:"7c4238e3fedc40b2b2d46a697485a072",level:2},{value:"List All Existing Ubi Records",id:"d1d882fb51014efd91039863bae07ed1",level:4},{value:"Query a Specific Ubi Record",id:"b7c6ad0b47b744eba829f570ddfe7c3e",level:4},{value:"Governance",id:"c9550a2bcc6247049aeec0176a8f6060",level:2},{value:"Upsert Ubi Proposal",id:"96e2058b1db94fe9a1332559fad3d2a2",level:4},{value:"Remove Ubi Proposal",id:"caae0d4732a441a0a3187300c9593e6e",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"7ffc9017e29c48478adefa4f1f84dd92",children:"Concept"}),"\n",(0,i.jsxs)(n.p,{children:["The Universal Basic Income (UBI) module in the KIRA network is designed to incentivize non-sybil network participants, such as validators and governance members, through the distribution of a fixed amount of the native KEX token on a regular basis. This helps to ensure the long-term maintenance of network operations and enables these actors to perform their roles effectively. The UBI module uses ",(0,i.jsx)(n.a,{href:"/docs/812fdf31-d225-4daf-a4cd-4501cbc00d95",children:"Spending Pools"})," to distribute the funds to eligible beneficiaries, who can then claim their allotted tokens. The supply of KEX tokens is inflated by a fixed amount at regular intervals, and these tokens are deposited into the designated spending pool(s) for distribution."]}),"\n",(0,i.jsxs)(n.p,{children:["To prevent potential abuse or faults, a ",(0,i.jsx)(n.code,{children:"ubi-hard-cap"})," is set in the ",(0,i.jsx)(n.a,{href:"/docs/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network properties"}),", limiting the maximum amount of additional KEX that can be created per year (",(0,i.jsx)(n.code,{children:"6000000"})," KEX by default). Governance members are not allowed to create or modify UBI records in a way that would exceed this hard cap."]}),"\n",(0,i.jsx)(n.h4,{id:"2737f72a27dc4d3cab060bdbe4055e83",children:"Dynamic Mode"}),"\n",(0,i.jsxs)(n.p,{children:["Similar to the spending pool, the UBI module provides two modes: dynamic and static, which use the dynamic field. In dynamic mode, the total amount distributed per period decreases by the amount left in the pool. In other words, if some users don't claim their UBI during a particular period, the unclaimed tokens are lost and redistributed in the next period. This is done to limit token inflation and ensure that users are actively claiming their tokens.  If the ",(0,i.jsx)(n.code,{children:"dynamic"})," parameter is set to ",(0,i.jsx)(n.code,{children:"false"}),", the spending pool operates in static mode and distributes a fixed amount of tokens every time period. This way, users can be sure of the amount of tokens they will receive during each period, provided they still respect the target spending pool\u2019s ",(0,i.jsx)(n.code,{children:"claim-expiry"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"f028bb65c4b0422bb3b62ccd2e0a52c5",children:"Parameters"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"NAME"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"TYPE"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"EXAMPLE"})}),(0,i.jsx)(n.th,{children:(0,i.jsx)(n.strong,{children:"DESCRIPTION"})})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"name"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"KEX-UBI"})}),(0,i.jsx)(n.td,{children:"The name of the UBI contract."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"distribution_start"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uint64"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1643577600"})}),(0,i.jsx)(n.td,{children:"Unix timestamp of the start of the distribution period."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"distribution_end"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uint64"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1675113600"})}),(0,i.jsx)(n.td,{children:"Unix timestamp of the end of the distribution period."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"distribution_last"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uint64"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1651401600"})}),(0,i.jsx)(n.td,{children:"Unix timestamp of the last distribution."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"pool"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"community"'})}),(0,i.jsx)(n.td,{children:"The spending pool name where the exact amount of KEX should be deposited."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"amount"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uint64"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"1000"})}),(0,i.jsxs)(n.td,{children:["The amount of KEX tokens to be minted and distributed every period into ",(0,i.jsx)(n.code,{children:"pool"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"period"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"uint64"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"86400"})}),(0,i.jsx)(n.td,{children:"Time in seconds that must elapse since distribution_last for the funds to be distributed automatically into the pool."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"dynamic"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"bool"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"true"})}),(0,i.jsxs)(n.td,{children:["A boolean field that defines if UBI is dynamic ",(0,i.jsx)(n.code,{children:"true"})," or static ",(0,i.jsx)(n.code,{children:"false"}),"."]})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"b3dc078c85c4427c95c52958d0ca5ab6",children:"CLI Syntax & Examples"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,i.jsx)(n.a,{href:"/docs/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,i.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,i.jsx)(n.em,{children:"documentation for more details."})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"$SIGNER"})})," ",(0,i.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,i.jsx)(n.em,{children:(0,i.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,i.jsx)(n.em,{children:"and"})," ",(0,i.jsxs)(n.em,{children:[(0,i.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,i.jsx)(n.em,{children:"section"})]})}),"\n",(0,i.jsxs)(r.Z,{children:[(0,i.jsxs)(d.Z,{value:"transactions",label:"Transactions",children:[(0,i.jsx)(n.h2,{id:"47b1445d3df3460e85daf175a211506e",children:"Transactions"}),(0,i.jsx)(n.p,{children:"There is no transactions other than the governance proposals for this sub-module."})]}),(0,i.jsxs)(d.Z,{value:"queries",label:"Queries",children:[(0,i.jsx)(n.h2,{id:"7c4238e3fedc40b2b2d46a697485a072",children:"Queries"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"ubi-records"})}),(0,i.jsx)(n.th,{children:"List all existing UBI records."})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"ubi-record-by-name"})}),(0,i.jsx)(n.td,{children:"Query a specific UBI record by its name."})]})})]}),(0,i.jsx)(n.h4,{id:"d1d882fb51014efd91039863bae07ed1",children:"List All Existing Ubi Records"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sekaid query ubi ubi-records $FLAGS_QR | jq\n"})}),(0,i.jsx)(n.h4,{id:"b7c6ad0b47b744eba829f570ddfe7c3e",children:"Query a Specific Ubi Record"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Args"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$NAME"}),": The name of the UBI record."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"sekaid query ubi ubi-record-by-name $NAME $FLAGS_QR | jq\n"})})]}),(0,i.jsxs)(d.Z,{value:"governance",label:"Governance",children:[(0,i.jsx)(n.h2,{id:"c9550a2bcc6247049aeec0176a8f6060",children:"Governance"}),(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:(0,i.jsx)(n.code,{children:"proposal-upsert-ubi"})}),(0,i.jsx)(n.th,{children:"Create a proposal to insert or update a Universal Basic Income (UBI) distribution."})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"proposal-remove-ubi"})}),(0,i.jsx)(n.td,{children:"Create a proposal to remove a Universal Basic Income (UBI) distribution."})]})})]}),(0,i.jsx)(n.h4,{id:"96e2058b1db94fe9a1332559fad3d2a2",children:"Upsert Ubi Proposal"}),(0,i.jsxs)(n.p,{children:["The CLI command, ",(0,i.jsx)(n.code,{children:"proposal-upsert-ubi"}),", creates a proposal to upsert (insert or update) a Universal Basic Income (UBI) distribution."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Flags"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$TITLE"}),": The title of a proposal."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal, which can be a URL, text, etc."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$NAME"}),": Name of the UBI record (e.g., ",(0,i.jsx)(n.code,{children:"ValidatorPerMinuteIncome"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$POOLNAME"}),": Name of the associated spending pool registry for depositing ",(0,i.jsx)(n.code,{children:"$AMOUNT"})," of KEX (e.g., ",(0,i.jsx)(n.code,{children:"ValidatorBasicRewardsPool"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$DISTRIBUTIONSTART"}),": The exact starting time of the UBI, in Unix timestamps."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$DISTRIBUTIONEND"}),": The exact ending time of the UBI, in Unix timestamps."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$PERIOD"}),": Period in seconds for the KEX supply inflation by ",(0,i.jsx)(n.code,{children:"$AMOUNT"})," and deposit in the UBI pool."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$AMOUNT"}),": The amount of KEX tokens to be minted and distributed per ",(0,i.jsx)(n.code,{children:"$PERIOD"})," into the pool."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov proposal-upsert-ubi \\\n--from=$SIGNER $FLAGS_TX \\\n--name=$NAME \\\n--distribution-start=$DISTRIBUTION_START \\\n--distribution-end=$DISTRIBUTION_END \\\n--amount=$AMOUNT \\\n--period=$PERIOD \\\n--pool-name=$POOL_NAME \\\n--title=$TITLE --description=$DESCRIPTION\n"})}),(0,i.jsx)(n.h4,{id:"caae0d4732a441a0a3187300c9593e6e",children:"Remove Ubi Proposal"}),(0,i.jsxs)(n.p,{children:["The CLI command, ",(0,i.jsx)(n.code,{children:"proposal-remove-ubi"}),", creates a proposal to remove a Universal Basic Income (UBI) distribution."]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Flags"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$NAME"}),": The name of the UBI."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$TITLE"}),": The title of the proposal."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal."]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-shell",children:"sekaid tx customgov proposal-remove-ubi \\\n--from=$SIGNER $FLAGS_TX \\\n--name=$NAME \\\n--title=$TITLE --description=$DESCRIPTION\n"})})]})]})]})}function x(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>d});s(7294);var i=s(6905);const t={tabItem:"tabItem_Ymn6"};var r=s(5893);function d(e){let{children:n,hidden:s,className:d}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.Z)(t.tabItem,d),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>T});var i=s(7294),t=s(6905),r=s(2466),d=s(6550),a=s(469),c=s(1980),o=s(7392),l=s(12);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:s}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:s,attributes:i,default:t}}=e;return{value:n,label:s,attributes:i,default:t}}))}(s);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function x(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:s}=e;const t=(0,d.k6)(),r=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,c._X)(r),(0,i.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function m(e){const{defaultValue:n,queryString:s=!1,groupId:t}=e,r=u(e),[d,c]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=s.find((e=>e.default))??s[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:r}))),[o,h]=b({queryString:s,groupId:t}),[m,p]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,l.Nk)(s);return[t,(0,i.useCallback)((e=>{s&&r.set(e)}),[s,r])]}({groupId:t}),j=(()=>{const e=o??m;return x({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:d,selectValue:(0,i.useCallback)((e=>{if(!x({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),p(e)}),[h,p,r]),tabValues:r}}var p=s(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(5893);function v(e){let{className:n,block:s,selectedValue:i,selectValue:d,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.o5)(),l=e=>{const n=e.currentTarget,s=c.indexOf(n),t=a[s].value;t!==i&&(o(n),d(t))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const s=c.indexOf(e.currentTarget)+1;n=c[s]??c[0];break}case"ArrowLeft":{const s=c.indexOf(e.currentTarget)-1;n=c[s]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":s},n),children:a.map((e=>{let{value:n,label:s,attributes:r}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>c.push(e),onKeyDown:h,onClick:l,...r,className:(0,t.Z)("tabs__item",j.tabItem,r?.className,{"tabs__item--active":i===n}),children:s??n},n)}))})}function g(e){let{lazy:n,children:s,selectedValue:t}=e;const r=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function I(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,t.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(v,{...e,...n}),(0,f.jsx)(g,{...e,...n})]})}function T(e){const n=(0,p.Z)();return(0,f.jsx)(I,{...e,children:h(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>d});var i=s(7294);const t={},r=i.createContext(t);function d(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);