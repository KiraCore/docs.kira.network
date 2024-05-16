"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8217],{1423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(5893),a=n(1151);n(4866),n(5162);const o={title:"Overview",sidebar_position:0,slug:"/overview"},s=void 0,i={id:"backend---sekai/modules/fee-processing/overview",title:"Overview",description:'Traditional Layer 1 blockchain networks like Ethereum use a complex, dynamic fee market determined by opcode prices and the computational "gas" consumed during transaction execution. In such a system, calculating the exact transaction cost can be cumbersome and time-consuming. Additionally, these opcode prices are deeply embedded within the protocol, typically requiring a network upgrade or hard fork for changes.',source:"@site/tabs/docs/backend---sekai/modules/fee-processing/overview.mdx",sourceDirName:"backend---sekai/modules/fee-processing",slug:"/overview",permalink:"/docs/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/overview&page-local=backend---sekai/modules/fee-processing/overview.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"/overview"},sidebar:"defaultSidebar",previous:{title:"Fee processing",permalink:"/docs/fee-processing"},next:{title:"Evidence",permalink:"/docs/evidence"}},l={},c=[];function u(e){const t={a:"a",code:"code",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:'Traditional Layer 1 blockchain networks like Ethereum use a complex, dynamic fee market determined by opcode prices and the computational "gas" consumed during transaction execution. In such a system, calculating the exact transaction cost can be cumbersome and time-consuming. Additionally, these opcode prices are deeply embedded within the protocol, typically requiring a network upgrade or hard fork for changes.'}),"\n",(0,r.jsxs)(t.p,{children:['KIRA\'s approach replaces the conventional "gas" system with a governance-driven structure. Here, transaction fees are predefined for each type of transaction and uniformly denominated in ',(0,r.jsx)(t.code,{children:"ukex"}),", simplifying and stabilizing the fee calculation. Additionally, the governance is tasked with setting failure fees for each transaction type and determining a specific timeout period for transactions. Complementing this streamlined fee structure, KIRA's ",(0,r.jsx)(t.a,{href:"/docs/token-rates-registrar",children:"Token Rates Registrar"})," allows fees to be paid in other whitelisted tokens at a rate defined by the governance. This mechanism ensures a clear and efficient conversion between ",(0,r.jsx)(t.code,{children:"ukex"})," and other tokens, enhancing the network's flexibility and user accessibility."]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(6905);const a={tabItem:"tabItem_Ymn6"};var o=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var r=n(7294),a=n(6905),o=n(2466),s=n(6550),i=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[h,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),v=(()=>{const e=c??h;return m({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,o]),tabValues:o}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function k(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(k,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function x(e){const t=(0,b.Z)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);