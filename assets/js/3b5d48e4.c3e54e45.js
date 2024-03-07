"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8696],{1512:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var r=t(5893),s=t(1151),a=t(4866),o=t(5162);const i={title:"Governance-regulated Foreign Token Transfers",sidebar_position:4,slug:"/34367cb0-ee71-418f-9dc5-bcc8823b71e5"},l=void 0,c={id:"Backend---SEKAI/Command-Line-Interface/Modules/Tokens-Module/Governance-regulated-Foreign-Token-Transfers",title:"Governance-regulated Foreign Token Transfers",description:"Concept",source:"@site/tabs/Docs/Backend---SEKAI/Command-Line-Interface/Modules/Tokens-Module/Governance-regulated-Foreign-Token-Transfers.mdx",sourceDirName:"Backend---SEKAI/Command-Line-Interface/Modules/Tokens-Module",slug:"/34367cb0-ee71-418f-9dc5-bcc8823b71e5",permalink:"/docs/34367cb0-ee71-418f-9dc5-bcc8823b71e5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Governance-regulated Foreign Token Transfers",sidebar_position:4,slug:"/34367cb0-ee71-418f-9dc5-bcc8823b71e5"},sidebar:"defaultSidebar",previous:{title:"Token Aliases Registrar",permalink:"/docs/e163e1d7-f16e-4c0d-945c-db2efc13ea49"},next:{title:"Token Basketing",permalink:"/docs/6c6d144f-f315-43f7-8fe7-289d98890a69"}},d={},h=[{value:"Concept",id:"22e0f2d993a7488b885efa35c0b62983",level:2},{value:"Filters Mechanism",id:"51d0ee0e8c8c41b8914df112534e1a22",level:3},{value:"Parameters",id:"c0b16997472f4eeb8ba46c949fe5c8fc",level:2},{value:"CLI Syntax &amp; Examples",id:"e11aba2be5c447bb8c11935c4f113602",level:2},{value:"Transactions",id:"d9d37ffa3e5d409ebafdd46a1137665e",level:2},{value:"Queries",id:"2a33689889f04da9889e331913a3d542",level:2},{value:"List Blacklisted &amp; Whitelisted Tokens",id:"00c35df7f2994764862c7136ad5d95ac",level:4},{value:"Governance",id:"68ee4d5375594154b7f930f3ec0d6a17",level:2},{value:"Whitelist And/or Blacklist Token Transfers Proposal",id:"45cfb0e749524b7292eb421de9702f07",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"22e0f2d993a7488b885efa35c0b62983",children:"Concept"}),"\n",(0,r.jsxs)(n.p,{children:["Foreign tokens can significantly impact the network's economy if they are stolen or originate from a compromised network (i.e. Luna). For instance, should a token experience sudden supply exploitation, it could pose a serious risk to the network's spam protection mechanism if used for fee payments. To mitigate this risk, KIRA\u2019s governance has the ability to create and manage blacklist and whitelist filters for foreign token transfers. These filters can be enabled or disabled through the ",(0,r.jsx)(n.code,{children:"enable_token_whitelist"})," and ",(0,r.jsx)(n.code,{children:"enable_token_blacklist"})," ",(0,r.jsx)(n.a,{href:"/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network properties"}),", and their contents are curated through dedicated governance proposals. In the event that a foreign network becomes compromised and its tokens are deposited into KIRA, these filters can be used to recover funds through a planned hard fork. This process is similar to funds recovery in other Proof-of-Stake and Proof-of-Work chains, but offers on-chain signaling of the network governance's intentions."]}),"\n",(0,r.jsx)(n.h3,{id:"51d0ee0e8c8c41b8914df112534e1a22",children:"Filters Mechanism"}),"\n",(0,r.jsxs)(n.p,{children:["When the ",(0,r.jsx)(n.code,{children:"enable_token_whitelist"})," network property is set to ",(0,r.jsx)(n.code,{children:"true"}),", SEKAI will check whether a given token is whitelisted before allowing it to be transferred. Similarly, when the ",(0,r.jsx)(n.code,{children:"enable_token_blacklist"})," network property is set to ",(0,r.jsx)(n.code,{children:"true"}),", SEKAI will check whether a given token is blacklisted before allowing it to be transferred. These checks are performed during the ",(0,r.jsx)(n.code,{children:"AnteHandler"})," phase of transaction processing."]}),"\n",(0,r.jsxs)(n.p,{children:["If a token is not on the whitelist (in the case of ",(0,r.jsx)(n.code,{children:"enable_token_whitelist"})," being set to ",(0,r.jsx)(n.code,{children:"true"}),") or is on the blacklist (in the case of ",(0,r.jsx)(n.code,{children:"enable_token_blacklist"})," being set to ",(0,r.jsx)(n.code,{children:"true"}),"), then the transaction will fail validation during the ",(0,r.jsx)(n.code,{children:"AnteHandler"})," phase, and the transaction will not be broadcasted to the network or included in any block."]}),"\n",(0,r.jsx)(n.h2,{id:"c0b16997472f4eeb8ba46c949fe5c8fc",children:"Parameters"}),"\n",(0,r.jsx)(n.h2,{id:"e11aba2be5c447bb8c11935c4f113602",children:"CLI Syntax & Examples"}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the"})," ",(0,r.jsx)(n.a,{href:"/980ceb2f-9bc1-4133-aad0-bfb8a5c55536",children:(0,r.jsx)(n.em,{children:"Roles & Permissions"})})," ",(0,r.jsx)(n.em,{children:"documentation for more details."})," ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"$SIGNER"})})," ",(0,r.jsx)(n.em,{children:"represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as"})," ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"$FLAGS_TX"})})," ",(0,r.jsx)(n.em,{children:"and"})," ",(0,r.jsxs)(n.em,{children:[(0,r.jsx)(n.code,{children:"$FLAGS_QR"}),"__, see the"]}),"  ",(0,r.jsx)(n.em,{children:"section"})]})}),"\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(o.Z,{value:"transactions",label:"Transactions",children:[(0,r.jsx)(n.h2,{id:"d9d37ffa3e5d409ebafdd46a1137665e",children:"Transactions"}),(0,r.jsx)(n.p,{children:"There is no transactions other than the governance proposals for this sub-module."})]}),(0,r.jsxs)(o.Z,{value:"queries",label:"Queries",children:[(0,r.jsx)(n.h2,{id:"2a33689889f04da9889e331913a3d542",children:"Queries"}),(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"token-black-whites"})}),(0,r.jsx)(n.th,{children:"Query lists of blacklisted/whitelisted tokens."})]})})}),(0,r.jsx)(n.h4,{id:"00c35df7f2994764862c7136ad5d95ac",children:"List Blacklisted & Whitelisted Tokens"}),(0,r.jsx)(n.p,{children:"The following command is used to lists all blacklisted and whitelisted tokens."}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sekaid query tokens token-black-whites $FLAGS_QR | jq\n"})})]}),(0,r.jsxs)(o.Z,{value:"governance",label:"Governance",children:[(0,r.jsx)(n.h2,{id:"68ee4d5375594154b7f930f3ec0d6a17",children:"Governance"}),(0,r.jsx)(n.table,{children:(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.code,{children:"proposal-update-tokens-blackwhite"})}),(0,r.jsx)(n.th,{children:"Create a proposal for whitelisting/blacklisting tokens."})]})})}),(0,r.jsx)(n.h4,{id:"45cfb0e749524b7292eb421de9702f07",children:"Whitelist And/or Blacklist Token Transfers Proposal"}),(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"proposal-update-tokens-blackwhite"})," CLI can be used by accounts with permission 24 to create a proposal for adding or modifying whitelist or blacklist tokens. To vote on the proposal, an account must have permission 25. The ",(0,r.jsx)(n.code,{children:"--is_add"})," flag specifies whether the token should be added (",(0,r.jsx)(n.code,{children:"true"}),") or removed (",(0,r.jsx)(n.code,{children:"false"}),") from the list, while the ",(0,r.jsx)(n.code,{children:"--is_blacklist"})," flag specifies which list to update (",(0,r.jsx)(n.code,{children:"true"})," for blacklist, ",(0,r.jsx)(n.code,{children:"false"})," for whitelist)."]}),(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Flags"})}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$TITLE"}),": The title of the proposal."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$DESCRIPTION"}),": The description of the proposal, which can be a URL, text, etc."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$TOKENS"}),": A token or a comma-separated list of tokens (e.g., ",(0,r.jsx)(n.code,{children:"ATOM, KEX, BTC"}),")."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$ISBLACKLIST"}),": Boolean value; ",(0,r.jsx)(n.code,{children:"true"})," to add/modify blacklist, ",(0,r.jsx)(n.code,{children:"false"})," for whitelist."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"$ISADD"}),": Boolean value; ",(0,r.jsx)(n.code,{children:"true"})," to add, ",(0,r.jsx)(n.code,{children:"false"})," to remove from the list."]}),"\n"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"sekaid tx tokens proposal-update-tokens-blackwhite \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n--is_add=$ISADD --is_blacklist=$ISBLACKLIST --tokens=$TOKENS\n"})})]})]})]})}function f(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(6905);const s={tabItem:"tabItem_Ymn6"};var a=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7294),s=t(6905),a=t(2466),o=t(6550),i=t(469),l=t(1980),c=t(7392),d=t(12);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(s.location.search);n.set(a,e),s.replace({...s.location,search:n.toString()})}),[a,s])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,a=u(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[c,h]=b({queryString:t,groupId:s}),[p,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,a]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=c??p;return f({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),m(e)}),[h,m,a]),tabValues:a}}var m=t(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var k=t(5893);function j(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==r&&(c(n),o(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,k.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,k.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...a,className:(0,s.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,k.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function g(e){const n=p(e);return(0,k.jsxs)("div",{className:(0,s.Z)("tabs-container",x.tabList),children:[(0,k.jsx)(j,{...e,...n}),(0,k.jsx)(v,{...e,...n})]})}function w(e){const n=(0,m.Z)();return(0,k.jsx)(g,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var r=t(7294);const s={},a=r.createContext(s);function o(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);