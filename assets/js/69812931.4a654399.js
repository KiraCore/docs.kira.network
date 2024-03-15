"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6028],{7250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var n=r(5893),a=r(1151);r(4866),r(5162);const s={title:"Rewards and Incentives Structure",sidebar_position:2,slug:"/5b32eede-3889-4f8e-baf5-0f0dc9179a6b"},i=void 0,o={id:"KIRA\u2019s-Economics/Rewards-and-Incentives-Structure",title:"Rewards and Incentives Structure",description:"Staking Rewards",source:"@site/tabs/Learn/KIRA\u2019s-Economics/Rewards-and-Incentives-Structure.mdx",sourceDirName:"KIRA\u2019s-Economics",slug:"/5b32eede-3889-4f8e-baf5-0f0dc9179a6b",permalink:"/learn/5b32eede-3889-4f8e-baf5-0f0dc9179a6b",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/5b32eede-3889-4f8e-baf5-0f0dc9179a6b&page-local=kira\u2019s-economics/rewards-and-incentives-structure.mdx",tags:[],version:"current",lastUpdatedAt:1710513640,formattedLastUpdatedAt:"Mar 15, 2024",sidebarPosition:2,frontMatter:{title:"Rewards and Incentives Structure",sidebar_position:2,slug:"/5b32eede-3889-4f8e-baf5-0f0dc9179a6b"},sidebar:"defaultSidebar",previous:{title:"KEX, KIRA\u2019s Native Token",permalink:"/learn/39d6465e-61d4-4aff-868f-123b65c86326"},next:{title:"Initial Liquidity Offering",permalink:"/learn/a6a660a6-3e5c-4a53-9ec3-14aa07f00351"}},l={},d=[{value:"Staking Rewards",id:"a63d9225f2ad4a229025a0fdfba77c92",level:2},{value:"Rollapp Incentives",id:"f5729db77406472a86817be36ff4dd9f",level:2},{value:"Auxiliary Rewards",id:"2c07de1a942a4fe18e1c7457e24525e5",level:2},{value:"Recap",id:"4b2b2809dbac4bbd8bb8964de7b10160",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"a63d9225f2ad4a229025a0fdfba77c92",children:"Staking Rewards"}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["For a better understanding regarding network rewards distribution, please refer to the ",(0,n.jsx)(t.a,{href:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:"Fees and staking rewards distribution"})," section."]})}),"\n",(0,n.jsxs)(t.p,{children:["KIRA\u2019s Consensus nodes earn trifold rewards: ",(0,n.jsx)(t.strong,{children:"block rewards, fee rewards, and RollApp incentives."})," They are distributed in slightly different ways but follow a simple generic pattern. They are awarded per block. The selected block proposer first takes a commission before the remainder is shared among its respective delegators who have entrusted their assets to the Consensus nodes to participate in Consensus on their behalf."]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("u",{children:"Block rewards"})," are a fixed amount of KEX tokens minted in each block \u2014 shared between delegators according to the total value of all the tokens they have delegated among all active staking pools. ",(0,n.jsx)(t.strong,{children:"Hence, block rewards compensate delegators proportionally to the risk they are taking network-wise"})," \u2014 this is similar to Cosmos reward distribution."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("u",{children:"Fee rewards"})," are a portion of the ",(0,n.jsx)(t.a,{href:"/docs/184c11ed-4849-4ec5-acd0-f795b7abf467",children:"execution fees"})," paid by users for each transactions shared between its delegators according to their share of the staking pool. ",(0,n.jsx)(t.strong,{children:"Hence, fee rewards only compensate delegators proportionally to the risk they are taking locally"})," \u2014 this is similar to Polkadot reward distribution. Note that fee rewards are not limited to KEX and can also include a variety of different tokens that are whitelisted for fee payment. The composition of the rewards basket may vary based on the type and volume of activity conducted on the network."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:r(5170).Z+"",width:"562",height:"470"})}),"\n",(0,n.jsx)(t.h2,{id:"f5729db77406472a86817be36ff4dd9f",children:"Rollapp Incentives"}),"\n",(0,n.jsxs)(t.p,{children:["A portion of the swap fees generated by the AMM pool of any RollApp will be paid to Consensus nodes serving as active Executors and Verifiers for said RollApp, and by extension their delegators. dApp deployers may choose to offer additional incentives for Consensus nodes to serve as the execution layer for these RollApp. ",(0,n.jsx)(t.strong,{children:"Application incentives are paid in similar fashion to fee rewards."})]}),"\n",(0,n.jsx)(t.h2,{id:"2c07de1a942a4fe18e1c7457e24525e5",children:"Auxiliary Rewards"}),"\n",(0,n.jsx)(t.p,{children:"In addition, KIRA has two subsidiary sources of extrinsic rewards which are more circumstantial:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("u",{children:"Universal Basic Income"})," (from KEX inflation) \u2014 The ",(0,n.jsx)(t.a,{href:"/docs/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e",children:"Universal Basic Income"})," module allows to create various incentivization schemes for a specific network purposes (e.g. increasing block rewards if the network security subsidy becomes too low), or a specific role (e.g. community managers)."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)("u",{children:"Stake grants"})," (from KIRA\u2019s treasury)  \u2014 Winners of the incentivized games will be allocated some amount of ",(0,n.jsx)("u",{children:"staked"})," KEX from the treasury to help them bootstrapping their nodes."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"4b2b2809dbac4bbd8bb8964de7b10160",children:"Recap"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"REWARDS TYPE"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"REWARDS ORIGIN"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"BLOCK PROPOSER SHARE"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"DELEGATORS SHARE"})}),(0,n.jsx)(t.th,{children:(0,n.jsx)(t.strong,{children:"SEKAI MODULE"})})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Block rewards"}),(0,n.jsx)(t.td,{children:"KEX inflation"}),(0,n.jsxs)(t.td,{children:["According to its staking pool ",(0,n.jsx)(t.code,{children:"commission"})," rate",(0,n.jsx)("br",{}),"(",(0,n.jsx)(t.em,{children:"min 1%, max 50%)"})]}),(0,n.jsx)(t.td,{children:"Split according to the total amount of assets they have staked network-wise (all staking pools)"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:"Untitled"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Fee rewards"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/184c11ed-4849-4ec5-acd0-f795b7abf467",children:"Executions fees"})," (multiple tokens)"]}),(0,n.jsxs)(t.td,{children:["According the ",(0,n.jsx)(t.a,{href:"/docs/b9b95792-b936-4603-8a46-15566f24e3c0",children:"network property"})," ",(0,n.jsx)(t.code,{children:"validators_fee_share"})," ",(0,n.jsx)("br",{}),(0,n.jsx)(t.em,{children:"(default 50%)"})]}),(0,n.jsx)(t.td,{children:"Split according to the total amount of assets they have staked locally (in the block proposer\u2019s staking pool)"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba",children:"Untitled"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Universal Basic Income"}),(0,n.jsx)(t.td,{children:"KEX inflation"}),(0,n.jsx)(t.td,{children:"Set by governance proposal"}),(0,n.jsx)(t.td,{children:"Set by governance proposal"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e",children:"Untitled"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stake grants"}),(0,n.jsx)(t.td,{children:"KEX treasury"}),(0,n.jsx)(t.td,{children:"TBD"}),(0,n.jsx)(t.td,{children:"TBD"}),(0,n.jsx)(t.td,{children:"N/A"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"App Incentive"}),(0,n.jsx)(t.td,{children:"L2 AMMs / applications"}),(0,n.jsx)(t.td,{children:"25% share of swap fees originating from dApp token swaps / application dependent"}),(0,n.jsx)(t.td,{children:"None / application dependent only"}),(0,n.jsx)(t.td,{children:"Layer 2"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{})]})]})]})]})}function u(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(6905);const a={tabItem:"tabItem_Ymn6"};var s=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,i),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6905),s=r(2466),i=r(6550),o=r(469),l=r(1980),d=r(7392),c=r(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[d,u]=b({queryString:r,groupId:a}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=d??p;return f({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),m(e)}),[u,m,s]),tabValues:s}}var m=r(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(5893);function g(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=o[r].value;a!==n&&(d(t),i(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:a}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=p(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(v,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(t))}},5170:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/813946695-23ab7c66f75d95f301b39b68590190f2.png"},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var n=r(7294);const a={},s=n.createContext(a);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);