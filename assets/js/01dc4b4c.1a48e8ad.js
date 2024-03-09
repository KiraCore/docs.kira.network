"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[979],{650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(5893),a=n(1151);n(4866),n(5162);const s={title:"System Requirements",sidebar_position:1,slug:"/sekai-systemreq"},i=void 0,l={id:"Backend---SEKAI/sekai-systemreq",title:"System Requirements",description:"To run a sekaid application the following system requirements must be met:",source:"@site/tabs/Docs/Backend---SEKAI/sekai-systemreq.mdx",sourceDirName:"Backend---SEKAI",slug:"/sekai-systemreq",permalink:"/docs/sekai-systemreq",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/sekai-systemreq&page-local=backend---sekai/sekai-systemreq.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"System Requirements",sidebar_position:1,slug:"/sekai-systemreq"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/30ce0046-922f-4e76-be77-831f5f14528b"},next:{title:"Installation",permalink:"/docs/sekai-installation"}},o={},u=[{value:"Hardware",id:"284fec99661c42cd9db8e573d918616d",level:2},{value:"Networking",id:"9f4bf9ad9ea64d348aff30013f9d46b8",level:2},{value:"Software",id:"136a440426ad451399a598ee82b6966b",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To run a ",(0,r.jsx)(t.code,{children:"sekaid"})," application the following system requirements must be met:"]}),"\n",(0,r.jsx)(t.h2,{id:"284fec99661c42cd9db8e573d918616d",children:"Hardware"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"4 vCPU"})," cores (ARM64 or x64)"]}),"\n",(0,r.jsxs)(t.li,{children:["Minimum ",(0,r.jsx)(t.code,{children:"8GB"})," of RAM"]}),"\n",(0,r.jsxs)(t.li,{children:["Storage space required to persist blockchain state and snapshots (",(0,r.jsx)(t.code,{children:"1TB+"})," recommended)"]}),"\n",(0,r.jsxs)(t.li,{children:["Minimum ",(0,r.jsx)(t.code,{children:"32GB+"})," of ",(0,r.jsx)(t.strong,{children:"free"})," storage space available at all times"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"9f4bf9ad9ea64d348aff30013f9d46b8",children:"Networking"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Stable internet connection with minimum ",(0,r.jsx)(t.code,{children:"64 Mbps"})," Up/Dn speed at all times"]}),"\n",(0,r.jsx)(t.li,{children:"Static IP address or dynamic DNS"}),"\n",(0,r.jsx)(t.li,{children:"Access to router or otherwise your local network configuration"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"136a440426ad451399a598ee82b6966b",children:"Software"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Ubuntu ",(0,r.jsx)(t.code,{children:"20.04 LTS"})," installed on the ",(0,r.jsx)(t.strong,{children:"host"})," instance or VM"]}),"\n",(0,r.jsx)(t.li,{children:"Secure SSH configuration with RSA key or strong password"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var r=n(6905);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var r=n(7294),a=n(6905),s=n(2466),i=n(6550),l=n(469),o=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:n,groupId:a}),[b,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??b;return h({value:e,tabValues:s})?e:null})();(0,l.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=o.indexOf(t),a=l[n].value;a!==r&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;t=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;t=o[n]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function k(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(k,{...e,...t})]})}function j(e){const t=(0,p.Z)();return(0,g.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(7294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);