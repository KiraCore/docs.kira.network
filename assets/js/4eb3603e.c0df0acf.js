"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3339],{6797:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var a=t(5893),n=t(1151),r=t(4866),i=t(5162);const c={title:"Data Registry",sidebar_position:7,slug:"/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c"},l=void 0,d={id:"backend---sekai/modules/governance/data-registry",title:"Data Registry",description:"Concept",source:"@site/tabs/Docs/backend---sekai/modules/governance/data-registry.mdx",sourceDirName:"backend---sekai/modules/governance",slug:"/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c",permalink:"/docs/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c&page-local=backend---sekai/modules/governance/data-registry.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Data Registry",sidebar_position:7,slug:"/1a3a9dbd-3c24-454b-b353-ee6a1c2c7a5c"},sidebar:"defaultSidebar",previous:{title:"Identity Registrar",permalink:"/docs/d482180d-165a-4c09-8c32-167f061ceb92"},next:{title:"Poor Network Conditions",permalink:"/docs/65e3e6fe-040a-4716-b13b-9e27def6ff9d"}},o={},h=[{value:"Concept",id:"9a52cc45f0bf457e85fdaedef9706fa6",level:2},{value:"Code of Conduct",id:"aee73893689d4ce6a84e3b3216c48610",level:3},{value:"Parameters",id:"6495b76427444740ba614d6beacf29bc",level:2},{value:"CLI Syntax &amp; Examples",id:"aa1f125af47f4ab7886fd90029d3380c",level:2},{value:"Transactions",id:"cc4eddd5aac24ddb9729522a78cf8320",level:2},{value:"Queries",id:"798c5d84060149699bbef79082f10ee0",level:2},{value:"Query All Keys",id:"281888dffb9e4bc28f293e3f95c9ce67",level:4},{value:"Query Data by Key",id:"9abdf7548d2343979a7f7ad7a714d03f",level:4},{value:"Governance",id:"ef81400b9e8b406d93ba0411684f97f8",level:2},{value:"Create or Edit a Data Registrey Key",id:"47c2dcd1257a49ccbfae4ad5fdcf49cf",level:4}];function u(e){const s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msup:"msup",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.h2,{id:"9a52cc45f0bf457e85fdaedef9706fa6",children:"Concept"}),"\n",(0,a.jsxs)(s.p,{children:["The Data Registry is a curated data reference storage under governance. Its primary role is to sidestep the constraints of on-chain storage by providing references to external data resources, like those found on IPFS or GitHub. By doing so, the Data Registry ensures that large files or extended data sequences aren't directly stored on-chain. Instead, it archives external URLs, metalinks, and various distributed references. A pivotal aspect of the Data Registry is its ability to vouch for the authenticity and integrity of the external data. This is achieved via on-chain checksums, bolstering trustworthiness by verifying the consistency of hosted data. Furthermore, the Data Registry enriches the stored references by supplying supplementary information, including file size and encoding. Akin to how the ",(0,a.jsx)(s.a,{href:"/docs/d482180d-165a-4c09-8c32-167f061ceb92",children:"Identity Registrar"})," assures the legitimacy and uniqueness of user identities, the Data Registry offers a secure, reliable bridge between the on-chain network and the vast external data world."]}),"\n",(0,a.jsx)(s.h3,{id:"aee73893689d4ce6a84e3b3216c48610",children:"Code of Conduct"}),"\n",(0,a.jsxs)(s.p,{children:["An integral property of the Data Registry is the ",(0,a.jsx)(s.code,{children:"code_of_conduct"}),". This can be perceived as the Service-layer Agreement bridging network governance and its users. This off-chain text serves as a guiding beacon, delineating the expected conduct of network participants. In essence, it acts as the network's constitution, providing insights and guidelines to users and incoming governance members alike."]}),"\n",(0,a.jsx)(s.h2,{id:"6495b76427444740ba614d6beacf29bc",children:"Parameters"}),"\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"NAME"}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"TYPE"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"EXAMPLE"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"key"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"doc1"})}),(0,a.jsx)(s.td,{children:"The identifier for the stored property."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"reference"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"ipfs://QmYw..."})}),(0,a.jsx)(s.td,{children:"The URL or metalink directing to the externally hosted file."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"encoding"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"markdown"})}),(0,a.jsx)(s.td,{children:"Specifies the file's encoding type."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"hash"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"string"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"e3b0c442..."})}),(0,a.jsx)(s.td,{children:"The SHA256 checksum, ensuring the file's authenticity."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"size"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"uint64"})}),(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"1024"})}),(0,a.jsx)(s.td,{children:"Denotes the file size in Bytes."})]})]})]}),"\n",(0,a.jsx)(s.h2,{id:"aa1f125af47f4ab7886fd90029d3380c",children:"CLI Syntax & Examples"}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,a.jsx)(s.a,{href:"/docs/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,a.jsx)(s.em,{children:"Roles & Permissions"})})," ",(0,a.jsx)(s.em,{children:"documentation for more details."})," ",(0,a.jsx)(s.em,{children:(0,a.jsx)(s.code,{children:"$SIGNER"})})," ",(0,a.jsx)(s.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,a.jsx)(s.em,{children:(0,a.jsx)(s.code,{children:"$FLAGS_TX"})})," ",(0,a.jsx)(s.em,{children:"and"})," ",(0,a.jsxs)(s.em,{children:[(0,a.jsx)(s.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,a.jsx)(s.em,{children:"section"})]})}),"\n",(0,a.jsxs)(r.Z,{children:[(0,a.jsxs)(i.Z,{value:"transactions",label:"Transactions",children:[(0,a.jsx)(s.h2,{id:"cc4eddd5aac24ddb9729522a78cf8320",children:"Transactions"}),(0,a.jsx)(s.p,{children:"There is no transactions other than the governance proposals for this sub-module"})]}),(0,a.jsxs)(i.Z,{value:"queries",label:"Queries",children:[(0,a.jsx)(s.h2,{id:"798c5d84060149699bbef79082f10ee0",children:"Queries"}),(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.code,{children:"data-registry-keys"})}),(0,a.jsx)(s.th,{children:"Retrieve a list of all keys in the Data Registry."})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:(0,a.jsx)(s.code,{children:"data-registry"})}),(0,a.jsx)(s.td,{children:"Retrieve data associated with a specific key."})]})})]}),(0,a.jsx)(s.h4,{id:"281888dffb9e4bc28f293e3f95c9ce67",children:"Query All Keys"}),(0,a.jsxs)(s.p,{children:["Retrieve a list of all keys in the Data Registry using the ",(0,a.jsx)(s.code,{children:"data-registry-keys"})," command."]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:'sekaid query customgov data-registry-keys --page-key=100000 $FLAGS_QR | jq ".keys"\n'})}),(0,a.jsx)(s.h4,{id:"9abdf7548d2343979a7f7ad7a714d03f",children:"Query Data by Key"}),(0,a.jsxs)(s.p,{children:["Retrieve data associated with a specific key using the ",(0,a.jsx)(s.code,{children:"data-registry"})," command."]}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Args"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:(0,a.jsx)(s.code,{children:"$"})}),(0,a.jsx)(s.code,{children:"KEY"}),": The key whose data is to be queried."]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-shell",children:"sekaid query customgov data-registry $KEY $FLAGS_QR | jq\n"})})]}),(0,a.jsxs)(i.Z,{value:"governance",label:"Governance",children:[(0,a.jsx)(s.h2,{id:"ef81400b9e8b406d93ba0411684f97f8",children:"Governance"}),(0,a.jsx)(s.table,{children:(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.code,{children:"upsert-data-registry"})}),(0,a.jsx)(s.th,{children:"Create a proposal for adding or updating a key in the Data Registry."})]})})}),(0,a.jsx)(s.h4,{id:"47c2dcd1257a49ccbfae4ad5fdcf49cf",children:"Create or Edit a Data Registrey Key"}),(0,a.jsxs)(s.p,{children:["The CLI command, ",(0,a.jsx)(s.code,{children:"upsert-data-registry"}),", is utilized to create a proposal for adding or updating a key in the Data Registry. The command accepts the following arguments and flags:"]}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Args"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$KEY"}),": The key intended to be upserted in the Data Registry."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$CHECKSUM"}),": The checksum corresponding to the data associated with the key."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$VALUE"}),": The value tied to the key."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$FILETYPE"}),": Specifies the type of the file or data that's related to the key."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$SIZE"}),": The size of the file or data linked to the key."]}),"\n"]}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"Flags"})}),(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$TITLE"}),": The title of the proposal. Typically in the form \"Upserting Data Registry key '$KEY'\"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"$DESCRIPTION"}),": The description of the proposal, often described as \"Assign value '",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mi,{children:"V"}),(0,a.jsx)(s.mi,{children:"A"}),(0,a.jsx)(s.mi,{children:"L"}),(0,a.jsx)(s.mi,{children:"U"}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mi,{children:"E"}),(0,a.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"k"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsxs)(s.msup,{children:[(0,a.jsx)(s.mi,{children:"y"}),(0,a.jsx)(s.mo,{mathvariant:"normal",lspace:"0em",rspace:"0em",children:"\u2032"})]})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"VALUE' to key '"})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.9463em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.22222em"},children:"V"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"LU"}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.05764em"},children:"E"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsxs)(s.span,{className:"mord",children:[(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(s.span,{className:"msupsub",children:(0,a.jsx)(s.span,{className:"vlist-t",children:(0,a.jsx)(s.span,{className:"vlist-r",children:(0,a.jsx)(s.span,{className:"vlist",style:{height:"0.7519em"},children:(0,a.jsxs)(s.span,{style:{top:"-3.063em",marginRight:"0.05em"},children:[(0,a.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,a.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:(0,a.jsx)(s.span,{className:"mord mtight",children:"\u2032"})})})]})})})})})]})]})})]}),"KEY'\"."]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-bash",children:'sekaid tx customgov proposal upsert-data-registry \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n "$KEY" "$CHECKSUM" "$VALUE" "$FILETYPE" "$SIZE" \n'})})]})]})]})}function m(e={}){const{wrapper:s}={...(0,n.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,s,t)=>{t.d(s,{Z:()=>i});t(7294);var a=t(6905);const n={tabItem:"tabItem_Ymn6"};var r=t(5893);function i(e){let{children:s,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,i),hidden:t,children:s})}},4866:(e,s,t)=>{t.d(s,{Z:()=>k});var a=t(7294),n=t(6905),r=t(2466),i=t(6550),c=t(469),l=t(1980),d=t(7392),o=t(12);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:t}=e;return(0,a.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:t,attributes:a,default:n}}=e;return{value:s,label:t,attributes:a,default:n}}))}(t);return function(e){const s=(0,d.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,t])}function m(e){let{value:s,tabValues:t}=e;return t.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:t}=e;const n=(0,i.k6)(),r=function(e){let{queryString:s=!1,groupId:t}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:s,groupId:t});return[(0,l._X)(r),(0,a.useCallback)((e=>{if(!r)return;const s=new URLSearchParams(n.location.search);s.set(r,e),n.replace({...n.location,search:s.toString()})}),[r,n])]}function j(e){const{defaultValue:s,queryString:t=!1,groupId:n}=e,r=u(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:s,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!m({value:s,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:r}))),[d,h]=x({queryString:t,groupId:n}),[j,p]=function(e){let{groupId:s}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(s),[n,r]=(0,o.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),f=(()=>{const e=d??j;return m({value:e,tabValues:r})?e:null})();(0,c.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),p(e)}),[h,p,r]),tabValues:r}}var p=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function b(e){let{className:s,block:t,selectedValue:a,selectValue:i,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),o=e=>{const s=e.currentTarget,t=l.indexOf(s),n=c[t].value;n!==a&&(d(s),i(n))},h=e=>{let s=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;s=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;s=l[t]??l[l.length-1];break}}s?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":t},s),children:c.map((e=>{let{value:s,label:t,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===s?0:-1,"aria-selected":a===s,ref:e=>l.push(e),onKeyDown:h,onClick:o,...r,className:(0,n.Z)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":a===s}),children:t??s},s)}))})}function y(e){let{lazy:s,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(s){const e=r.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,s)=>(0,a.cloneElement)(e,{key:s,hidden:e.props.value!==n})))})}function v(e){const s=j(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(b,{...e,...s}),(0,g.jsx)(y,{...e,...s})]})}function k(e){const s=(0,p.Z)();return(0,g.jsx)(v,{...e,children:h(e.children)},String(s))}},1151:(e,s,t)=>{t.d(s,{Z:()=>c,a:()=>i});var a=t(7294);const n={},r=a.createContext(n);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:s},e.children)}}}]);