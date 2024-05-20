"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[2747],{3221:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var a=r(5893),n=r(1151);r(4866),r(5162);const s={title:"Custody",sidebar_position:5,slug:"custody"},o=void 0,u={id:"backend---sekai/modules/custody/index",title:"Custody",description:"Securing digital assets is no longer a luxury, but a necessity. To answer this need, our Custody Module offers a collaborative custody model, secret-protected transfers, and controlled withdrawals via whitelisting. This approach provides users with enhanced protection, tailored to their specific needs",source:"@site/tabs/docs/backend---sekai/modules/custody/index.mdx",sourceDirName:"backend---sekai/modules/custody",slug:"/backend---sekai/modules/custody/custody",permalink:"/docs/backend---sekai/modules/custody/custody",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/custody/custody&page-local=backend---sekai/modules/custody/index.mdx",tags:[],version:"current",lastUpdatedAt:1716175504,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:5,frontMatter:{title:"Custody",sidebar_position:5,slug:"custody"},sidebar:"defaultSidebar",previous:{title:"Fees and staking rewards distribution",permalink:"/docs/backend---sekai/modules/distributor/fees-and-staking-rewards-distribution"},next:{title:"Concept",permalink:"/docs/backend---sekai/modules/spending-pool/concept"}},i={},l=[];function c(e){const t={a:"a",code:"code",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Securing digital assets is no longer a luxury, but a necessity. To answer this need, our Custody Module offers a collaborative custody model, secret-protected transfers, and controlled withdrawals via whitelisting. This approach provides users with enhanced protection, tailored to their specific needs"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/KiraCore/sekai/tree/master/x/custody",children:(0,a.jsx)(t.code,{children:"x/custody"})})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>o});r(7294);var a=r(6905);const n={tabItem:"tabItem_Ymn6"};var s=r(5893);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,o),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(7294),n=r(6905),s=r(2466),o=r(6550),u=r(469),i=r(1980),l=r(7392),c=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=p(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,d]=f({queryString:r,groupId:n}),[h,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=l??h;return b({value:e,tabValues:s})?e:null})();(0,u.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(5893);function g(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),n=u[r].value;n!==a&&(l(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:u.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function w(e){const t=h(e);return(0,y.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(g,{...e,...t}),(0,y.jsx)(k,{...e,...t})]})}function x(e){const t=(0,m.Z)();return(0,y.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>u,a:()=>o});var a=r(7294);const n={},s=a.createContext(n);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);