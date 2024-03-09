"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[1152],{4838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(5893),a=n(1151);n(4866),n(5162);const o={title:"Staking Collectives",sidebar_position:7,slug:"/3997e5c8-f744-4e83-9e22-f6845cc6c3ee"},s=void 0,l={id:"Backend---SEKAI/Command-Line-Interface/Modules/Staking-Collectives/index",title:"Staking Collectives",description:"Staking Collectives offer a community-centric mechanism to pool staking tokens and redirect their dividends. Through Spending Pools, members can lock tokens, reallocating the staking rewards to other network users. The system offers collective control over status, proposals, and changes, with withdrawal limits in place for enhanced protection.",source:"@site/tabs/Docs/Backend---SEKAI/Command-Line-Interface/Modules/Staking-Collectives/index.mdx",sourceDirName:"Backend---SEKAI/Command-Line-Interface/Modules/Staking-Collectives",slug:"/3997e5c8-f744-4e83-9e22-f6845cc6c3ee",permalink:"/docs/3997e5c8-f744-4e83-9e22-f6845cc6c3ee",draft:!1,unlisted:!1,editUrl:"<en><Backend---SEKAI/Command-Line-Interface/Modules/Staking-Collectives/index.mdx<>tabs/Docs<>/docs/3997e5c8-f744-4e83-9e22-f6845cc6c3ee<>current",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Staking Collectives",sidebar_position:7,slug:"/3997e5c8-f744-4e83-9e22-f6845cc6c3ee"},sidebar:"defaultSidebar",previous:{title:"Spending Pools",permalink:"/docs/812fdf31-d225-4daf-a4cd-4501cbc00d95"},next:{title:"Universal Basic Income",permalink:"/docs/c8f1129d-1fa0-4f24-bc4d-b9fa32b28c0e"}},i={},c=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Staking Collectives offer a community-centric mechanism to pool staking tokens and redirect their dividends. Through Spending Pools, members can lock tokens, reallocating the staking rewards to other network users. The system offers collective control over status, proposals, and changes, with withdrawal limits in place for enhanced protection."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://github.com/KiraCore/sekai/tree/master/x/collectives",children:(0,r.jsx)(t.code,{children:"x/collectives"})})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(6905);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(6905),o=n(2466),s=n(6550),l=n(469),i=n(1980),c=n(7392),u=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=f(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=h({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=c??p;return m({value:e,tabValues:o})?e:null})();(0,l.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function k(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=i.indexOf(t),a=l[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=p(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function y(e){const t=(0,b.Z)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>s});var r=n(7294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);