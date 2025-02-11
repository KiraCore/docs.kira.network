"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[7765],{4168:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"what-is-kira/layer-2/building-on-kira","title":"Building on KIRA","description":"Building on KIRA is intended to replicate classical Web2 design patterns where the developer creates a new REST-API project (server side) and pairs it with his frontend application (client side). The KIRA network acts as a decentralized middleware and infrastructure layer ensuring that applications are accessible and have the resources needed to run. As long the server application remains deterministic and can be re-executed or otherwise proven that execution happened in the expected way (e.g. by using a set of sequenced inputs, ZK proofs, or even AI) it is possible to trustlessly verify the execution and thus transition the application from one state of its database to another. Submitting state hashes of the application database into the KIRA base layer by the application leader elected in each session (database snapshot) allows for achieving consensus and thus for composability (value transfer and data communication) between the apps.","source":"@site/tabs/learn/what-is-kira/layer-2/building-on-kira.mdx","sourceDirName":"what-is-kira/layer-2","slug":"/what-is-kira/layer-2/building-on-kira","permalink":"/learn/what-is-kira/layer-2/building-on-kira","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/what-is-kira/layer-2/building-on-kira&page-local=what-is-kira/layer-2/building-on-kira.mdx","tags":[],"version":"current","lastUpdatedAt":1716175504000,"sidebarPosition":2,"frontMatter":{"title":"Building on KIRA","sidebar_position":2,"slug":"building-on-kira"},"sidebar":"defaultSidebar","previous":{"title":"Virtual Finality Gadget","permalink":"/learn/what-is-kira/layer-2/virtual-finality-gadget"},"next":{"title":"Why KIRA?","permalink":"/learn/why-kira"}}');var r=a(4848),i=a(8453);a(5537),a(9329);const s={title:"Building on KIRA",sidebar_position:2,slug:"building-on-kira"},o=void 0,l={},u=[];function c(e){const t={li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Building on KIRA is intended to replicate classical Web2 design patterns where the developer creates a new REST-API project (server side) and pairs it with his frontend application (client side). The KIRA network acts as a decentralized middleware and infrastructure layer ensuring that applications are accessible and have the resources needed to run. As long the server application remains deterministic and can be re-executed or otherwise proven that execution happened in the expected way (e.g. by using a set of sequenced inputs, ZK proofs, or even AI) it is possible to trustlessly verify the execution and thus transition the application from one state of its database to another. Submitting state hashes of the application database into the KIRA base layer by the application leader elected in each session (database snapshot) allows for achieving consensus and thus for composability (value transfer and data communication) between the apps."}),"\n",(0,r.jsx)(t.p,{children:"To create an example KIRA application, a developer would:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create a deterministic server application and expose a protocol-defined endpoint for receiving user input from the INTERX. The next step is then to package the server application into a docker container."}),"\n",(0,r.jsx)(t.li,{children:"Develop a secondary containerized \u201cverification\u201d application that can either re-compute the same results given the same set of ordered inputs from the INTERX or use other techniques, such as ZK proofs, for lightweight verification of the correct execution."}),"\n",(0,r.jsx)(t.li,{children:"Develop a frontend application that can communicate with the server application for users to be able to experience the app."}),"\n",(0,r.jsx)(t.li,{children:"Submit a transaction to the KIRA blockchain specifying the location of execution and verification docker containers, configuration file defining ports to be exposed/proxied via INTERX, and resources necessary to run the application."}),"\n",(0,r.jsx)(t.li,{children:"Await sufficient KEX amount to be bonded into ILO and validators with sufficient hardware resources to signal they are willing to run the app."}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"If all the conditions above are met users will be able to query any of the INTERX nodes available on the KIRA network to locate a subnet of INTERX nodes that provide access to the app and expose its interfaces thus making interaction possible in a classical Web2 client-server manner."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},9329:(e,t,a)=>{a.d(t,{A:()=>s});a(6540);var n=a(8215);const r={tabItem:"tabItem_Ymn6"};var i=a(4848);function s(e){let{children:t,hidden:a,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,s),hidden:a,children:t})}},5537:(e,t,a)=>{a.d(t,{A:()=>k});var n=a(6540),r=a(8215),i=a(5627),s=a(6347),o=a(372),l=a(604),u=a(1861),c=a(8749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,s.W6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function b(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=p(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[u,d]=f({queryString:a,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Dv)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),v=(()=>{const e=u??b;return h({value:e,tabValues:i})?e:null})();(0,o.A)((()=>{v&&l(v)}),[v]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,i]),tabValues:i}}var m=a(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=a(4848);function w(e){let{className:t,block:a,selectedValue:n,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(u(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function y(e){let{lazy:t,children:a,selectedValue:i}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function x(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function k(e){const t=(0,m.A)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,a)=>{a.d(t,{R:()=>s,x:()=>o});var n=a(6540);const r={},i=n.createContext(r);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);