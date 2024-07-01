"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[2689],{331:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>i});var n=a(5893),r=a(1151);a(4866),a(5162);const s={title:"Bank",sidebar_position:2,slug:"bank"},o=void 0,u={id:"backend---sekai/modules/native-cosmossdk-modules/bank",title:"Bank",description:"cosmos.sdk/x/bank",source:"@site/tabs/docs/backend---sekai/modules/native-cosmossdk-modules/bank.mdx",sourceDirName:"backend---sekai/modules/native-cosmossdk-modules",slug:"/backend---sekai/modules/native-cosmossdk-modules/bank",permalink:"/docs/backend---sekai/modules/native-cosmossdk-modules/bank",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/native-cosmossdk-modules/bank&page-local=backend---sekai/modules/native-cosmossdk-modules/bank.mdx",tags:[],version:"current",lastUpdatedAt:171938575e4,sidebarPosition:2,frontMatter:{title:"Bank",sidebar_position:2,slug:"bank"},sidebar:"defaultSidebar",previous:{title:"Transaction validation & processing",permalink:"/docs/backend---sekai/modules/native-cosmossdk-modules/transaction-validation--processing"},next:{title:"Params",permalink:"/docs/backend---sekai/modules/native-cosmossdk-modules/params"}},l={},i=[];function c(e){const t={code:"code",p:"p",...(0,r.a)(),...e.components};return(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"cosmos.sdk/x/bank"})})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>o});a(7294);var n=a(6905);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function o(e){let{children:t,hidden:a,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,o),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(7294),r=a(6905),s=a(2466),o=a(6550),u=a(469),l=a(1980),i=a(7392),c=a(812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function b(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[i,d]=p({queryString:a,groupId:r}),[f,k]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),h=(()=>{const e=i??f;return b({value:e,tabValues:s})?e:null})();(0,u.Z)((()=>{h&&l(h)}),[h]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),k(e)}),[d,k,s]),tabValues:s}}var k=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(5893);function g(e){let{className:t,block:a,selectedValue:n,selectValue:o,tabValues:u}=e;const l=[],{blockElementScrollPositionUntilNextRender:i}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=u[a].value;r!==n&&(i(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:u.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function x(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",h.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function w(e){const t=(0,k.Z)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>u,a:()=>o});var n=a(7294);const r={},s=n.createContext(r);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);