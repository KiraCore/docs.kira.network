"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[1489],{6135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(5893),s=n(1151);n(4866),n(5162);const a={title:"Become a tester",sidebar_position:0,slug:"become-a-tester"},o=void 0,i={id:"run-a-consensus-node/become-a-tester",title:"Become a tester",description:"To ensure our network's security, Sybil-resistance is essential. Therefore, all our testers undergo rigorous screening to verify their uniqueness. Our testers are not just testers; they are acknowledged as official KIRA Evangelists. This stasus provides them with benefits such as grants, bounties, potential validator seats, governance roles, and Universal Basic Income (UBI). They also gain access to the exclusive private testers chat and more.",source:"@site/tabs/testnet/run-a-consensus-node/become-a-tester.mdx",sourceDirName:"run-a-consensus-node",slug:"/run-a-consensus-node/become-a-tester",permalink:"/testnet/run-a-consensus-node/become-a-tester",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/testnet/run-a-consensus-node/become-a-tester&page-local=run-a-consensus-node/become-a-tester.mdx",tags:[],version:"current",lastUpdatedAt:1720521339e3,sidebarPosition:0,frontMatter:{title:"Become a tester",sidebar_position:0,slug:"become-a-tester"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/testnet/"},next:{title:"System Requirements",permalink:"/testnet/run-a-consensus-node/system-requirements"}},u={},l=[];function c(e){const t={a:"a",admonition:"admonition",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To ensure our network's security, Sybil-resistance is essential. Therefore, all our testers undergo rigorous screening to verify their uniqueness. Our testers are not just testers; they are acknowledged as official KIRA ",(0,r.jsx)(t.a,{href:"/ecosystem/evangelist",children:"Evangelists"}),". ",(0,r.jsx)(t.strong,{children:"This stasus provides them with benefits such as grants, bounties, potential validator seats, governance roles, and Universal Basic Income (UBI)"}),". They also gain access to the exclusive ",(0,r.jsx)(t.a,{href:"https://testers.kira.network/",children:"private testers chat"})," and more."]}),"\n",(0,r.jsx)(t.p,{children:"On the mainnet, a dedicated governance body can identify non-Sybil operators without the need for Know Your Customer (KYC) protocols or any other form of personal identification. It's important to note that there is no limit to the number of validators on either the testnet or the mainnet."}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.p,{children:["Become a KIRA Evangelist and complete the ",(0,r.jsx)(t.a,{href:"https://docs.google.com/forms/d/e/1FAIpQLScnCJcjlzIZwJ9ilts0u1lXSAZt5X9dplcsq8F9BrMkJgNVCA/viewform",children:"Whitelist "}),(0,r.jsx)(t.a,{href:"https://evangelist.kira.network/",children:"Request Form"})]})}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["Regardless of your decision to join our tester community, KIRA extends a warm welcome to all who wish to join our open and public network. To start your journey, simply install our validator or sentry node software, available on our ",(0,r.jsx)(t.a,{href:"https://git.kira.network/",children:"GitHub"}),". Alternatively, you can download our infrastructure management tool, KIRA Manager. We invite everyone with a passion for decentralized systems and fundamental freedoms to explore KIRA and discover its ability to run and secure the next generation of web3 apps."]})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(6905);const s={tabItem:"tabItem_Ymn6"};var a=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),s=n(6905),a=n(2466),o=n(6550),i=n(469),u=n(1980),l=n(7392),c=n(812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=m(e),[o,u]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=p({queryString:n,groupId:s}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=l??f;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&u(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function y(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=u.indexOf(t),s=i[n].value;s!==r&&(l(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>u.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(y,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function k(e){const t=(0,b.Z)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(7294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);