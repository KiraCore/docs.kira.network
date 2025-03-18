"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[2915],{1164:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/64192421-64222fb7dc16a55cbed074d83dcfae34.png"},3658:(e,t,a)=>{a.d(t,{A:()=>r});const r=a.p+"assets/images/1462188195-e815ddac48eba30ddb118e42b1c30965.png"},5537:(e,t,a)=>{a.d(t,{A:()=>k});var r=a(6540),n=a(8215),o=a(5627),s=a(6347),i=a(372),l=a(604),u=a(1861),c=a(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function f(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:a}=e;const n=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[u,d]=p({queryString:a,groupId:n}),[b,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:n}),v=(()=>{const e=u??b;return f({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!f({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=a(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(4848);function x(e){let{className:t,block:a,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),n=i[a].value;n!==r&&(u(t),s(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:i.map((e=>{let{value:t,label:a,attributes:o}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...o,className:(0,n.A)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":r===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:o}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},8432:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>u});const r=JSON.parse('{"id":"frontend---miro/guide/validators","title":"Validators","description":"The Validators page presents data about the whitelisted validators of the current network.","source":"@site/tabs/docs/frontend---miro/guide/validators.mdx","sourceDirName":"frontend---miro/guide","slug":"/frontend---miro/guide/validators","permalink":"/docs/frontend---miro/guide/validators","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/frontend---miro/guide/validators&page-local=frontend---miro/guide/validators.mdx","tags":[],"version":"current","lastUpdatedAt":1717929100000,"sidebarPosition":3,"frontMatter":{"title":"Validators","sidebar_position":3,"slug":"validators"},"sidebar":"defaultSidebar","previous":{"title":"User Account","permalink":"/docs/frontend---miro/guide/user-account"},"next":{"title":"Dashboard","permalink":"/docs/frontend---miro/guide/dashboard"}}');var n=a(4848),o=a(8453);a(5537),a(9329);const s={title:"Validators",sidebar_position:3,slug:"validators"},i=void 0,l={},u=[{value:"Details",id:"5cf6a0e133d44174a671aee7cc2ad7ae",level:3}];function c(e){const t={code:"code",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Validators page presents data about the whitelisted validators of the current network."}),"\n",(0,n.jsxs)(t.p,{children:["Validators can exhibit one of four statuses: ",(0,n.jsx)(t.code,{children:"Active"}),", ",(0,n.jsx)(t.code,{children:"Paused"}),", ",(0,n.jsx)(t.code,{children:"Jailed"}),", or ",(0,n.jsx)(t.code,{children:"Inactive"}),". It is also possible to verify if the Staking Pool feature is ",(0,n.jsx)(t.code,{children:"enabled"})," for a validator."]}),"\n",(0,n.jsx)(t.p,{children:"On the Validators page, there is an option to mark specific validators as favorites using the hollow star icon on the right."}),"\n",(0,n.jsx)(t.p,{children:"Each validator's position on the list includes an \u2139\ufe0f icon on the left, which allows for viewing of more detailed information about that specific validator."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(1164).A+"",width:"1231",height:"667"})}),"\n",(0,n.jsx)(t.h3,{id:"5cf6a0e133d44174a671aee7cc2ad7ae",children:"Details"}),"\n",(0,n.jsx)(t.p,{children:"Clicking the info icon will open the details of a specific validator. Different data can be checked here:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"generic info about validator: Status, Staking Pool status, Uptime and Streak"}),"\n",(0,n.jsx)(t.li,{children:"Identity Registrar entries: Contact, Description, Social, etc."}),"\n",(0,n.jsx)(t.li,{children:"Staking pool details (this section can be used by users to stake tokens)."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:a(3658).A+"",width:"1130",height:"788"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>i});var r=a(6540);const n={},o=r.createContext(n);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(o.Provider,{value:t},e.children)}},9329:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);var r=a(8215);const n={tabItem:"tabItem_Ymn6"};var o=a(4848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(n.tabItem,s),hidden:a,children:t})}}}]);