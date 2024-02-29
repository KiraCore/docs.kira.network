"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[2047],{6871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(5893),a=n(1151);n(4866),n(5162);const s={title:"System Requirements",sidebar_position:2,slug:"/d1a56903-4e24-47ce-b39f-f28be9123399"},l=void 0,o={id:"SEKAI--Backend/System-Requirements",title:"System Requirements",description:"To run a sekaid application the following system requirements must be met:",source:"@site/tabs/Docs/SEKAI--Backend/System-Requirements.mdx",sourceDirName:"SEKAI--Backend",slug:"/d1a56903-4e24-47ce-b39f-f28be9123399",permalink:"/docs/d1a56903-4e24-47ce-b39f-f28be9123399",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"System Requirements",sidebar_position:2,slug:"/d1a56903-4e24-47ce-b39f-f28be9123399"},sidebar:"defaultSidebar",previous:{title:"SEKAI | Backend",permalink:"/docs/27fe8d79-00c0-4e0b-872b-3d72a246c073"},next:{title:"Installation",permalink:"/docs/a026f2da-ef09-4092-af96-aad8db6baf66"}},i={},u=[{value:"Hardware",id:"284fec99661c42cd9db8e573d918616d",level:2},{value:"Networking",id:"9f4bf9ad9ea64d348aff30013f9d46b8",level:2},{value:"Software",id:"136a440426ad451399a598ee82b6966b",level:2}];function c(e){const t={code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To run a ",(0,r.jsx)(t.code,{children:"sekaid"})," application the following system requirements must be met:"]}),"\n",(0,r.jsx)(t.h2,{id:"284fec99661c42cd9db8e573d918616d",children:"Hardware"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"4 vCPU"})," cores (ARM64 or x64)"]}),"\n",(0,r.jsxs)(t.li,{children:["Minimum ",(0,r.jsx)(t.code,{children:"8GB"})," of RAM"]}),"\n",(0,r.jsxs)(t.li,{children:["Storage space required to persist blockchain state and snapshots (",(0,r.jsx)(t.code,{children:"1TB+"})," recommended)"]}),"\n",(0,r.jsxs)(t.li,{children:["Minimum ",(0,r.jsx)(t.code,{children:"32GB+"})," of ",(0,r.jsx)(t.strong,{children:"free"})," storage space available at all times"]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"9f4bf9ad9ea64d348aff30013f9d46b8",children:"Networking"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Stable internet connection with minimum ",(0,r.jsx)(t.code,{children:"64 Mbps"})," Up/Dn speed at all times"]}),"\n",(0,r.jsx)(t.li,{children:"Static IP address or dynamic DNS"}),"\n",(0,r.jsx)(t.li,{children:"Access to router or otherwise your local network configuration"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"136a440426ad451399a598ee82b6966b",children:"Software"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Ubuntu ",(0,r.jsx)(t.code,{children:"20.04 LTS"})," installed on the ",(0,r.jsx)(t.strong,{children:"host"})," instance or VM"]}),"\n",(0,r.jsx)(t.li,{children:"Secure SSH configuration with RSA key or strong password"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var r=n(6905);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7294),a=n(6905),s=n(2466),l=n(6550),o=n(469),i=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=f(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:a}),[m,p]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),v=(()=>{const e=u??m;return b({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),p(e)}),[d,p,s]),tabValues:s}}var p=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(5893);function g(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...t}),(0,x.jsx)(j,{...e,...t})]})}function y(e){const t=(0,p.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var r=n(7294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);