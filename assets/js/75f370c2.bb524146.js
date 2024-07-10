"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6e3],{6596:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var t=a(4848),s=a(8453),r=a(1470),i=a(9365);const l={title:"Evidence",sidebar_position:1,slug:"evidence"},c=void 0,o={id:"backend---sekai/modules/evidence/evidence",title:"Evidence",description:"Description",source:"@site/tabs/docs/backend---sekai/modules/evidence/evidence.mdx",sourceDirName:"backend---sekai/modules/evidence",slug:"/backend---sekai/modules/evidence/evidence",permalink:"/docs/backend---sekai/modules/evidence/evidence",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/evidence/evidence&page-local=backend---sekai/modules/evidence/evidence.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:1,frontMatter:{title:"Evidence",sidebar_position:1,slug:"evidence"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/backend---sekai/modules/fee-processing/overview"},next:{title:"Overview",permalink:"/docs/backend---sekai/modules/evidence/overview"}},d={},u=[{value:"Description",id:"9da6c82434ad47c5908a9dd18371ae39",level:2},{value:"CLI Syntax &amp; Examples",id:"f2eddfbd285d437cab18755acfd6fab9",level:2},{value:"Transactions",id:"723e137d9712400c842928f221446573",level:2},{value:"Queries",id:"fce8b27770f04b908c78f06bd198ef57",level:2},{value:"List All Submitted Evidence (paginated)",id:"3f5710a330774094b495f67a3c3ab6f4",level:4},{value:"Query Specific Evidence by Its Hash",id:"a4fd48a0733f4fce8bd47809d8a6dedc",level:4},{value:"Governance",id:"9a2dbce1f8ac4af589baf48fa108385f",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"9da6c82434ad47c5908a9dd18371ae39",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["In KIRA, the only misbehavior that is handled is double signing. In this case the consensus node is automatically jailed upon detection but not automatically slashed. Instead, the slashing process is managed by governance through the slashing module. ",(0,t.jsx)(n.a,{href:"/docs/backend---sekai/modules/slashing/jailing--slashing-procedures",children:"Jailing & Slashing Procedures"})," provides all the necessary information regarding how this process works."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"// https://github.com/KiraCore/sekai/blob/master/x/evidence/keeper/infraction.go\n// (...)\n\nif !validator.IsJailed() {\n    k.slashingKeeper.Jail(ctx, consAddr)\n}\nk.slashingKeeper.JailUntil(ctx, consAddr, ctx.BlockTime())\nk.SetEvidence(ctx, evidence)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"f2eddfbd285d437cab18755acfd6fab9",children:"CLI Syntax & Examples"}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the ",(0,t.jsx)(n.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:"Roles & Permissions"})," documentation for more details."]})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$SIGNER"})," represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as ",(0,t.jsx)(n.code,{children:"$FLAGS_TX"})," and ",(0,t.jsx)(n.code,{children:"$FLAGS_QR"}),", see the ",(0,t.jsx)(n.a,{href:"/docs/backend---sekai/cli-guide",children:"CLI Guide"})," page."]})}),"\n",(0,t.jsxs)(r.A,{children:[(0,t.jsxs)(i.A,{value:"transactions ",label:"Transactions ",children:[(0,t.jsx)(n.h2,{id:"723e137d9712400c842928f221446573",children:"Transactions"}),(0,t.jsx)(n.p,{children:"There is no transactions for this sub-module."})]}),(0,t.jsxs)(i.A,{value:"queries",label:"Queries",children:[(0,t.jsx)(n.h2,{id:"fce8b27770f04b908c78f06bd198ef57",children:"Queries"}),(0,t.jsx)(n.table,{children:(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.code,{children:"evidence"})}),(0,t.jsx)(n.th,{children:"List all submitted evidence in a paginated format."})]})})}),(0,t.jsx)(n.h4,{id:"3f5710a330774094b495f67a3c3ab6f4",children:"List All Submitted Evidence (paginated)"}),(0,t.jsxs)(n.p,{children:["This command lists all submitted evidence in a paginated format. Replace ",(0,t.jsx)(n.code,{children:"<page_number>"})," with the desired page number and ",(0,t.jsx)(n.code,{children:"<page_size>"})," with the number of items per page. Default values will be used if these are not provided."]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query evidence $FLAGS_QR --page=<page_number> --limit=<page_size> | jq\n"})}),(0,t.jsx)(n.h4,{id:"a4fd48a0733f4fce8bd47809d8a6dedc",children:"Query Specific Evidence by Its Hash"}),(0,t.jsx)(n.p,{children:"To query a specific piece of evidence by its hash, use the following command."}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"sekaid query evidence $HASH $FLAGS_QR | jq\n"})})]}),(0,t.jsxs)(i.A,{value:"governance",label:"Governance",children:[(0,t.jsx)(n.h2,{id:"9a2dbce1f8ac4af589baf48fa108385f",children:"Governance"}),(0,t.jsx)(n.p,{children:"There is no governance proposal for this sub-module."})]})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>i});a(6540);var t=a(8215);const s={tabItem:"tabItem_Ymn6"};var r=a(4848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>y});var t=a(6540),s=a(8215),r=a(3104),i=a(6347),l=a(205),c=a(7485),o=a(1682),d=a(679);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function f(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:a}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=h(e),[i,c]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,u]=p({queryString:a,groupId:s}),[b,m]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,d.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),v=(()=>{const e=o??b;return f({value:e,tabValues:r})?e:null})();(0,l.A)((()=>{v&&c(v)}),[v]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),m(e)}),[u,m,r]),tabValues:r}}var m=a(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(4848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:l}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),s=l[a].value;s!==t&&(o(n),i(s))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...r,className:(0,s.A)("tabs__item",v.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function j(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function k(e){const n=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function y(e){const n=(0,m.A)();return(0,g.jsx)(k,{...e,children:u(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>l});var t=a(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);