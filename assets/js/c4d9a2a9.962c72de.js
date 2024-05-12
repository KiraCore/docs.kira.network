"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8988],{768:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=a(5893),r=a(1151);a(4866),a(5162);const s={title:"Overview",sidebar_position:0,slug:"/75c15eee-1005-4295-8086-92910e7ee7bb"},i=void 0,o={id:"backend---sekai/modules/universal-basic-income/overview",title:"Overview",description:"Through a Universal Basic Income system, regular KEX tokens are awarded to actively participating network members. The sustainability of the network is maintained by establishing a cap on annual KEX production. It accommodates participants' engagement by dynamically adjusting the distribution or ensuring fixed intervals.",source:"@site/tabs/docs/backend---sekai/modules/universal-basic-income/overview.mdx",sourceDirName:"backend---sekai/modules/universal-basic-income",slug:"/75c15eee-1005-4295-8086-92910e7ee7bb",permalink:"/docs/75c15eee-1005-4295-8086-92910e7ee7bb",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/75c15eee-1005-4295-8086-92910e7ee7bb&page-local=backend---sekai/modules/universal-basic-income/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"/75c15eee-1005-4295-8086-92910e7ee7bb"},sidebar:"defaultSidebar",previous:{title:"Universal Basic Income",permalink:"/docs/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e"},next:{title:"Overview",permalink:"/docs/4cd4ebf6-38a6-45ec-86ae-49edb1ae3e1a"}},u={},l=[];function c(e){const t={p:"p",...(0,r.a)(),...e.components};return(0,n.jsx)(t.p,{children:"Through a Universal Basic Income system, regular KEX tokens are awarded to actively participating network members. The sustainability of the network is maintained by establishing a cap on annual KEX production. It accommodates participants' engagement by dynamically adjusting the distribution or ensuring fixed intervals."})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var n=a(6905);const r={tabItem:"tabItem_Ymn6"};var s=a(5893);function i(e){let{children:t,hidden:a,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7294),r=a(6905),s=a(2466),i=a(6550),o=a(469),u=a(1980),l=a(7392),c=a(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,u._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,s=b(e),[i,u]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=p({queryString:a,groupId:r}),[f,v]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:r}),h=(()=>{const e=l??f;return m({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{h&&u(h)}),[h]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),v(e)}),[d,v,s]),tabValues:s}}var v=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(5893);function y(e){let{className:t,block:a,selectedValue:n,selectValue:i,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const t=e.currentTarget,a=u.indexOf(t),r=o[a].value;r!==n&&(l(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",h.tabList),children:[(0,g.jsx)(y,{...e,...t}),(0,g.jsx)(k,{...e,...t})]})}function x(e){const t=(0,v.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>i});var n=a(7294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);