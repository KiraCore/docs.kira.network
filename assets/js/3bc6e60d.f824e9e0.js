"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8474],{880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"backend---sekai/modules/spending-pool/concept","title":"Concept","description":"The Spending Pool Module, a native token distribution mechanism in KIRA, allows for creation of spending pools for token allocation to specified accounts at a set rate and duration. They function in two modes - fixed and dynamic, each catering to different needs. An open-door policy enables anyone to create a pool, facilitating tokens for network contributors like developers and community managers. Owners govern pool parameters, while beneficiaries are entitled to claim the tokens.","source":"@site/tabs/docs/backend---sekai/modules/spending-pool/concept.mdx","sourceDirName":"backend---sekai/modules/spending-pool","slug":"/backend---sekai/modules/spending-pool/concept","permalink":"/docs/backend---sekai/modules/spending-pool/concept","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/spending-pool/concept&page-local=backend---sekai/modules/spending-pool/concept.mdx","tags":[],"version":"current","lastUpdatedAt":1716175504000,"sidebarPosition":0,"frontMatter":{"title":"Concept","sidebar_position":0,"slug":"concept"},"sidebar":"defaultSidebar","previous":{"title":"Custody","permalink":"/docs/backend---sekai/modules/custody/custody"},"next":{"title":"Spending Pools","permalink":"/docs/backend---sekai/modules/spending-pool/spending-pools"}}');var o=n(4848),r=n(8453);n(5537),n(9329);const s={title:"Concept",sidebar_position:0,slug:"concept"},i=void 0,l={},u=[];function c(e){const t={p:"p",...(0,r.R)(),...e.components};return(0,o.jsx)(t.p,{children:"The Spending Pool Module, a native token distribution mechanism in KIRA, allows for creation of spending pools for token allocation to specified accounts at a set rate and duration. They function in two modes - fixed and dynamic, each catering to different needs. An open-door policy enables anyone to create a pool, facilitating tokens for network contributors like developers and community managers. Owners govern pool parameters, while beneficiaries are entitled to claim the tokens."})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5537:(e,t,n)=>{n.d(t,{A:()=>x});var a=n(6540),o=n(8215),r=n(5627),s=n(6347),i=n(372),l=n(604),u=n(1861),c=n(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}(n);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.W6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(o.location.search);t.set(r,e),o.replace({...o.location,search:t.toString()})}),[r,o])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,r=p(e),[s,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[u,d]=m({queryString:n,groupId:o}),[b,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,r]=(0,c.Dv)(n);return[o,(0,a.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:o}),g=(()=>{const e=u??b;return f({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),h(e)}),[d,h,r]),tabValues:r}}var h=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function k(e){let{className:t,block:n,selectedValue:a,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==a&&(u(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...r,className:(0,o.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:(0,o.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",g.tabList),children:[(0,v.jsx)(k,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function x(e){const t=(0,h.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var a=n(6540);const o={},r=a.createContext(o);function s(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(r.Provider,{value:t},e.children)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var a=n(8215);const o={tabItem:"tabItem_Ymn6"};var r=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,s),hidden:n,children:t})}}}]);