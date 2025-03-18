"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[2927],{1066:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"getting-started/system-requirements","title":"System Requirements","description":"Hardware","source":"@site/tabs/node-operators/getting-started/system-requirements.mdx","sourceDirName":"getting-started","slug":"/getting-started/system-requirements","permalink":"/node-operators/getting-started/system-requirements","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/node-operators/getting-started/system-requirements&page-local=getting-started/system-requirements.mdx","tags":[],"version":"current","lastUpdatedAt":1739294998000,"sidebarPosition":0,"frontMatter":{"title":"System Requirements","sidebar_position":0,"slug":"system-requirements"},"sidebar":"defaultSidebar","previous":{"title":"Operators Community","permalink":"/node-operators/operators-community"},"next":{"title":"Installing KENSHO","permalink":"/node-operators/getting-started/installing-kensho"}}');var a=r(4848),s=r(8453);r(5537),r(9329);const o={title:"System Requirements",sidebar_position:0,slug:"system-requirements"},i=void 0,l={},u=[{value:"Hardware",id:"122467da57b7803da2fedb4c9da2b777",level:2},{value:"Networking",id:"122467da57b78078a6cdfc6fe24bcde3",level:2},{value:"Software",id:"122467da57b78079ac28ed7a084bdcd5",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"122467da57b7803da2fedb4c9da2b777",children:"Hardware"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Minimum ",(0,a.jsx)(t.code,{children:"2 vCPU"})," cores (ARM64 or x64)"]}),"\n",(0,a.jsxs)(t.li,{children:["Minimum ",(0,a.jsx)(t.code,{children:"4 GB"})," of RAM memory"]}),"\n",(0,a.jsxs)(t.li,{children:["Storage space required to persist blockchain state and snapshots (",(0,a.jsx)(t.code,{children:"2 TB+"})," recommended)"]}),"\n",(0,a.jsxs)(t.li,{children:["Minimum ",(0,a.jsx)(t.code,{children:"32 GB+"})," of the ",(0,a.jsx)(t.strong,{children:"free"})," storage space available at all times"]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"122467da57b78078a6cdfc6fe24bcde3",children:"Networking"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Stable internet connection with minimum ",(0,a.jsx)(t.code,{children:"128 Mbps"})," Up/Dn speed"]}),"\n",(0,a.jsx)(t.li,{children:"Static IP address or dynamic DNS"}),"\n",(0,a.jsx)(t.li,{children:"Access to router or otherwise your local network configuration"}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"122467da57b78079ac28ed7a084bdcd5",children:"Software"}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["There is NO official support for any virtualization software in the KIRA stack. If you have to use virtualization we recommend ",(0,a.jsx)(t.a,{href:"https://www.vmware.com/",children:"VMWare"})," for MacOS and WSL2[broken link] for Windows."]})}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Ubuntu ",(0,a.jsx)(t.code,{children:"20.04 LTS"})," installed on the ",(0,a.jsx)(t.strong,{children:"host"})," instance, VM or WSL2"]}),"\n",(0,a.jsx)(t.li,{children:"Secure SSH configuration with RSA key or strong password"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5537:(e,t,r)=>{r.d(t,{A:()=>j});var n=r(6540),a=r(8215),s=r(5627),o=r(6347),i=r(372),l=r(604),u=r(1861),c=r(8749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function h(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=m(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[u,d]=p({queryString:r,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),g=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function x(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=i[r].value;a!==n&&(u(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function w(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(t))}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>i});var n=r(6540);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}},9329:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(8215);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:t})}}}]);