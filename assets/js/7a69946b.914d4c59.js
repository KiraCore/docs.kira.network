"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3705],{9081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(5893),r=n(1151);n(4866),n(5162);const s={title:"Concept",sidebar_position:0,slug:"concept"},o=void 0,i={id:"backend---sekai/modules/universal-basic-income/concept",title:"Concept",description:"Through a Universal Basic Income system, regular KEX tokens are awarded to actively participating network members. The sustainability of the network is maintained by establishing a cap on annual KEX production. It accommodates participants' engagement by dynamically adjusting the distribution or ensuring fixed intervals.",source:"@site/tabs/docs/backend---sekai/modules/universal-basic-income/concept.mdx",sourceDirName:"backend---sekai/modules/universal-basic-income",slug:"/backend---sekai/modules/universal-basic-income/concept",permalink:"/docs/backend---sekai/modules/universal-basic-income/concept",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/universal-basic-income/concept&page-local=backend---sekai/modules/universal-basic-income/concept.mdx",tags:[],version:"current",lastUpdatedAt:1716175504e3,sidebarPosition:0,frontMatter:{title:"Concept",sidebar_position:0,slug:"concept"},sidebar:"defaultSidebar",previous:{title:"Universal Basic Income",permalink:"/docs/backend---sekai/modules/universal-basic-income/universal-basic-income"},next:{title:"Concept",permalink:"/docs/backend---sekai/modules/tokens-module/concept"}},u={},l=[];function c(e){const t={p:"p",...(0,r.a)(),...e.components};return(0,a.jsx)(t.p,{children:"Through a Universal Basic Income system, regular KEX tokens are awarded to actively participating network members. The sustainability of the network is maintained by establishing a cap on annual KEX production. It accommodates participants' engagement by dynamically adjusting the distribution or ensuring fixed intervals."})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var a=n(7294),r=n(6905),s=n(2466),o=n(6550),i=n(469),u=n(1980),l=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=m(e),[o,u]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[l,d]=b({queryString:n,groupId:r}),[f,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),v=(()=>{const e=l??f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),h(e)}),[d,h,s]),tabValues:s}}var h=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function k(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==a&&(l(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function x(e){const t=(0,h.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(7294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);