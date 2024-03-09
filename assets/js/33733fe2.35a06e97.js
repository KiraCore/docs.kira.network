"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[9250],{6065:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>x,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var r=n(5893),a=n(1151),i=n(4866),t=n(5162);const l={title:"Token Aliases Registrar",sidebar_position:3,slug:"/e163e1d7-f16e-4c0d-945c-db2efc13ea49"},o=void 0,c={id:"Backend---SEKAI/Command-Line-Interface/Modules/Tokens-Module/Token-Aliases-Registrar",title:"Token Aliases Registrar",description:"Concept",source:"@site/tabs/Docs/Backend---SEKAI/Command-Line-Interface/Modules/Tokens-Module/Token-Aliases-Registrar.mdx",sourceDirName:"Backend---SEKAI/Command-Line-Interface/Modules/Tokens-Module",slug:"/e163e1d7-f16e-4c0d-945c-db2efc13ea49",permalink:"/docs/e163e1d7-f16e-4c0d-945c-db2efc13ea49",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/e163e1d7-f16e-4c0d-945c-db2efc13ea49&page-local=backend---sekai/command-line-interface/modules/tokens-module/token-aliases-registrar.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Token Aliases Registrar",sidebar_position:3,slug:"/e163e1d7-f16e-4c0d-945c-db2efc13ea49"},sidebar:"defaultSidebar",previous:{title:"Token Rates Registrar",permalink:"/docs/f19a45b3-88c4-469c-8642-772b941a1b24"},next:{title:"Governance-regulated Foreign Token Transfers",permalink:"/docs/34367cb0-ee71-418f-9dc5-bcc8823b71e5"}},d={},h=[{value:"Concept",id:"84215f46b44147a1ba6665006b16c6cb",level:2},{value:"Parameters",id:"f93deb668b36407dbebb40eb08c034ad",level:2},{value:"CLI Syntax &amp; Examples",id:"0c07ea2abed84b64a7d3e8dffb42147e",level:2},{value:"Transactions",id:"7e749ea08fa54f69ae420982dd493a8c",level:2},{value:"Upsert Token Alias With Sudo Permission",id:"f79ed1469a804d07a5917982c1a7aef3",level:4},{value:"Queries",id:"283adf4202e046ff93eb8328b8f8676b",level:2},{value:"List All Existing Aliases",id:"a7e8ae75c4eb4e8fb52f9d344f6b95c7",level:4},{value:"Query a Token Alias Using Its Symbol",id:"edaf0cb0e0e24dcc8f69459f4b986ef1",level:4},{value:"Query a Token Alias Using Its Denom",id:"3122601581b042d1953a39257f5ba64b",level:4},{value:"Governance",id:"a7b028b5f5b143079a28c52580f96808",level:2},{value:"Proposal to Upsert Token Alias",id:"c4185c208f2c4b7dacb8eafcaf71b79b",level:4}];function u(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"84215f46b44147a1ba6665006b16c6cb",children:"Concept"}),"\n",(0,r.jsx)(s.p,{children:"The Token Aliases enables the creation of friendly on-chain metadata for various cryptocurrencies on the KIRA network. The network governance is responsible for associating metadata with tokens, ensuring the integrity of this information for use in frontend applications. This makes it easier to identify and track different cryptocurrencies on the network."}),"\n",(0,r.jsx)(s.h2,{id:"f93deb668b36407dbebb40eb08c034ad",children:"Parameters"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["Removal of a token from the token aliases registry will automatically disable it by setting its ",(0,r.jsx)(s.a,{href:"/docs/f19a45b3-88c4-469c-8642-772b941a1b24",children:"Token Rates Registrar"})," properties ",(0,r.jsx)(s.code,{children:"stake_token"})," and ",(0,r.jsx)(s.code,{children:"fee_token"})," properties to ",(0,r.jsx)(s.code,{children:"false"}),"."]})}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"NAME"})}),(0,r.jsx)(s.th,{children:(0,r.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"symbol"})}),(0,r.jsxs)(s.td,{children:['The currency code or otherwise short abbreviation of a "single" token in its default denomination. For example: ',(0,r.jsx)(s.code,{children:"KEX"}),", ",(0,r.jsx)(s.code,{children:"ETH"}),", ",(0,r.jsx)(s.code,{children:"BTC"}),", ",(0,r.jsx)(s.code,{children:"DOT"}),", ",(0,r.jsx)(s.code,{children:"ATOM"})," ...."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"name"})}),(0,r.jsxs)(s.td,{children:["Full, explicit name of the currency, for example: ",(0,r.jsx)(s.code,{children:"Bitcoin"}),", ",(0,r.jsx)(s.code,{children:"Ethereum"}),"..."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"icon"})}),(0,r.jsxs)(s.td,{children:["URL to\xa0",(0,r.jsx)(s.strong,{children:".SVG"}),"\xa0image (256kB max) representing currency or network logo"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"decimals"})}),(0,r.jsx)(s.td,{children:"Number of currency decimals in the base of 10. For example value 3 would imply that the smallest unit of currency in it's default denomination would be 0.001"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"denoms"})}),(0,r.jsxs)(s.td,{children:["Array of possible denomination names of the token, such as ",(0,r.jsx)(s.code,{children:"satoshi"}),", ",(0,r.jsx)(s.code,{children:"cent"})," ..."]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"0c07ea2abed84b64a7d3e8dffb42147e",children:"CLI Syntax & Examples"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,r.jsx)(s.a,{href:"/docs/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,r.jsx)(s.em,{children:"Roles & Permissions"})})," ",(0,r.jsx)(s.em,{children:"documentation for more details."})," ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.code,{children:"$SIGNER"})})," ",(0,r.jsx)(s.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,r.jsx)(s.em,{children:(0,r.jsx)(s.code,{children:"$FLAGS_TX"})})," ",(0,r.jsx)(s.em,{children:"and"})," ",(0,r.jsxs)(s.em,{children:[(0,r.jsx)(s.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,r.jsx)(s.em,{children:"section"})]})}),"\n",(0,r.jsxs)(i.Z,{children:[(0,r.jsxs)(t.Z,{value:"transactions",label:"Transactions",children:[(0,r.jsx)(s.h2,{id:"7e749ea08fa54f69ae420982dd493a8c",children:"Transactions"}),(0,r.jsx)(s.table,{children:(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.code,{children:"upsert-alias"})}),(0,r.jsx)(s.th,{children:"Create or modify token aliases with sudo permission."})]})})}),(0,r.jsx)(s.h4,{id:"f79ed1469a804d07a5917982c1a7aef3",children:"Upsert Token Alias With Sudo Permission"}),(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"upsert-alias"})," CLI command allows accounts with sudo permission to create or modify token aliases without a proposal."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Flags"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$SYM"}),": The symbol of the token."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$NAME"}),": The name of the token alias."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$ICON"}),": The icon URL of the token."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$DEC"}),": The number of decimals of the token."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$DENOM"}),": The denom values of the token."]}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx tokens upsert-alias \\\n--from=$SIGNER $FLAGS_TX \\\n--symbol=$SYM --name=$NAME --icon=$ICON --decimals=$DEC --denoms=$DENOM\n"})})]}),(0,r.jsxs)(t.Z,{value:"queries",label:"Queries",children:[(0,r.jsx)(s.h2,{id:"283adf4202e046ff93eb8328b8f8676b",children:"Queries"}),(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.code,{children:"all-aliases"})}),(0,r.jsx)(s.th,{children:"List all existing token aliases."})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"alias"})}),(0,r.jsx)(s.td,{children:"Query a token alias using its symbol."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"aliases-by-denom"})}),(0,r.jsx)(s.td,{children:"Query a token alias using its denomination."})]})]})]}),(0,r.jsx)(s.h4,{id:"a7e8ae75c4eb4e8fb52f9d344f6b95c7",children:"List All Existing Aliases"}),(0,r.jsxs)(s.p,{children:["Use the ",(0,r.jsx)(s.code,{children:"all-aliases"})," command to retrieve all token aliases."]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid query tokens all-aliases $FLAGS_QR | jq\n"})}),(0,r.jsx)(s.h4,{id:"edaf0cb0e0e24dcc8f69459f4b986ef1",children:"Query a Token Alias Using Its Symbol"}),(0,r.jsxs)(s.p,{children:["To query a token alias using its symbol, use the ",(0,r.jsx)(s.code,{children:"alias"})," command."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Args"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$SYM"}),": The symbol of the token whose alias is to be queried."]}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid query tokens alias $SYM $FLAGS_QR | jq\n"})}),(0,r.jsx)(s.h4,{id:"3122601581b042d1953a39257f5ba64b",children:"Query a Token Alias Using Its Denom"}),(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"aliases-by-denom"})," command allows querying a token alias using its denomination."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Args"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$DENOM"}),": The denomination of the token whose alias is to be queried."]}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid query tokens aliases-by-denom $DENOM $FLAGS_QR | jq\n"})})]}),(0,r.jsxs)(t.Z,{value:"governance",label:"Governance",children:[(0,r.jsx)(s.h2,{id:"a7b028b5f5b143079a28c52580f96808",children:"Governance"}),(0,r.jsx)(s.p,{children:"In order to create a proposal to add or modify aliases, an account must possess permission 14[broken link] or 6[broken link] . Similarly, for voting on any alias proposals, an account must have permission 15[broken link] ."}),(0,r.jsx)(s.table,{children:(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:(0,r.jsx)(s.code,{children:"proposal-upsert-alias"})}),(0,r.jsx)(s.th,{children:"Create or update a token alias through a proposal process."})]})})}),(0,r.jsx)(s.h4,{id:"c4185c208f2c4b7dacb8eafcaf71b79b",children:"Proposal to Upsert Token Alias"}),(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"proposal-upsert-alias"})," CLI command is used to create or update a token alias through a proposal process."]}),(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Flags"})}),(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$TITLE"}),": The title of the proposal."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$DESCRIPTION"}),": The description of the proposal."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$SYM"}),": The symbol of the token (e.g., ",(0,r.jsx)(s.code,{children:"BTC"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$NAME"}),": The name of the token alias (e.g., ",(0,r.jsx)(s.code,{children:"Bitcoin"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$ICON"}),": The icon URL of the token."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$DEC"}),": The number of decimals of the token."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"$DENOM"}),": The denom values of the token (e.g., ",(0,r.jsx)(s.code,{children:"satoshi"}),")."]}),"\n"]}),(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-shell",children:"sekaid tx tokens proposal-upsert-alias \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n--symbol=$SYM --name=$NAME --icon=$ICON \\\n--decimals=$DEC --denoms=$DENOM\n"})})]})]})]})}function x(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,s,n)=>{n.d(s,{Z:()=>t});n(7294);var r=n(6905);const a={tabItem:"tabItem_Ymn6"};var i=n(5893);function t(e){let{children:s,hidden:n,className:t}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,t),hidden:n,children:s})}},4866:(e,s,n)=>{n.d(s,{Z:()=>y});var r=n(7294),a=n(6905),i=n(2466),t=n(6550),l=n(469),o=n(1980),c=n(7392),d=n(12);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:a}}=e;return{value:s,label:n,attributes:r,default:a}}))}(n);return function(e){const s=(0,c.l)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function x(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function b(e){let{queryString:s=!1,groupId:n}=e;const a=(0,t.k6)(),i=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const s=new URLSearchParams(a.location.search);s.set(i,e),a.replace({...a.location,search:s.toString()})}),[i,a])]}function m(e){const{defaultValue:s,queryString:n=!1,groupId:a}=e,i=u(e),[t,o]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!x({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:i}))),[c,h]=b({queryString:n,groupId:a}),[m,f]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),j=(()=>{const e=c??m;return x({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{j&&o(j)}),[j]);return{selectedValue:t,selectValue:(0,r.useCallback)((e=>{if(!x({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),f(e)}),[h,f,i]),tabValues:i}}var f=n(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var p=n(5893);function g(e){let{className:s,block:n,selectedValue:r,selectValue:t,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const s=e.currentTarget,n=o.indexOf(s),a=l[n].value;a!==r&&(c(s),t(a))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;s=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;s=o[n]??o[o.length-1];break}}s?.focus()};return(0,p.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},s),children:l.map((e=>{let{value:s,label:n,attributes:i}=e;return(0,p.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>o.push(e),onKeyDown:h,onClick:d,...i,className:(0,a.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function k(e){let{lazy:s,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,p.jsx)("div",{className:"margin-top--md",children:i.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function v(e){const s=m(e);return(0,p.jsxs)("div",{className:(0,a.Z)("tabs-container",j.tabList),children:[(0,p.jsx)(g,{...e,...s}),(0,p.jsx)(k,{...e,...s})]})}function y(e){const s=(0,f.Z)();return(0,p.jsx)(v,{...e,children:h(e.children)},String(s))}},1151:(e,s,n)=>{n.d(s,{Z:()=>l,a:()=>t});var r=n(7294);const a={},i=r.createContext(a);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);