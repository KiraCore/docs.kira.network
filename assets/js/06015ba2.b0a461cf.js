"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[9160],{6154:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(5893),n=r(1151);r(4866),r(5162);const o={title:"Overview",sidebar_position:0,slug:"/853ef97c-8fb2-42e7-8c35-eee173e103f3"},i=void 0,s={id:"backend---sekai/modules-&-cli/modules/distributor/overview",title:"Overview",description:"A reward framework aiming to promote a collaborative method for block generation, deftly balancing decentralization with incentivization while considering potential MEV leakage. This model emphasizes token diversity, allocating distinct rewards to each qualified staking token, enticing a broad spectrum of users across different networks.",source:"@site/tabs/Docs/backend---sekai/modules-&-cli/modules/distributor/overview.mdx",sourceDirName:"backend---sekai/modules-&-cli/modules/distributor",slug:"/853ef97c-8fb2-42e7-8c35-eee173e103f3",permalink:"/docs/853ef97c-8fb2-42e7-8c35-eee173e103f3",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/853ef97c-8fb2-42e7-8c35-eee173e103f3&page-local=backend---sekai/modules-&-cli/modules/distributor/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"/853ef97c-8fb2-42e7-8c35-eee173e103f3"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/583bcfe4-077c-4987-8a8b-e20bdc507b43"},next:{title:"Fees and staking rewards distribution",permalink:"/docs/85d4757d-f36d-4a39-b7ab-62866c1689ba"}},l={},u=[];function c(e){const t={p:"p",...(0,n.a)(),...e.components};return(0,a.jsx)(t.p,{children:"A reward framework aiming to promote a collaborative method for block generation, deftly balancing decentralization with incentivization while considering potential MEV leakage. This model emphasizes token diversity, allocating distinct rewards to each qualified staking token, enticing a broad spectrum of users across different networks."})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var a=r(6905);const n={tabItem:"tabItem_Ymn6"};var o=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,i),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(7294),n=r(6905),o=r(2466),i=r(6550),s=r(469),l=r(1980),u=r(7392),c=r(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=f(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[u,d]=m({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=u??p;return b({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,o]),tabValues:o}}var h=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function k(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=s[r].value;n!==a&&(u(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...o,className:(0,n.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function w(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function x(e){const t=(0,h.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>i});var a=r(7294);const n={},o=a.createContext(n);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);