"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[9085],{3097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"frontend---miro/guide/wallet","title":"Wallet","description":"Connect Wallet","source":"@site/tabs/docs/frontend---miro/guide/wallet.mdx","sourceDirName":"frontend---miro/guide","slug":"/frontend---miro/guide/wallet","permalink":"/docs/frontend---miro/guide/wallet","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/frontend---miro/guide/wallet&page-local=frontend---miro/guide/wallet.mdx","tags":[],"version":"current","lastUpdatedAt":1717929100000,"sidebarPosition":1,"frontMatter":{"title":"Wallet","sidebar_position":1,"slug":"wallet"},"sidebar":"defaultSidebar","previous":{"title":"Loading & Choosing Network","permalink":"/docs/frontend---miro/guide/loading--choosing-network"},"next":{"title":"User Account","permalink":"/docs/frontend---miro/guide/user-account"}}');var r=n(4848),s=n(8453);n(5537),n(9329);const i={title:"Wallet",sidebar_position:1,slug:"wallet"},o=void 0,l={},c=[{value:"Connect Wallet",id:"7fb04d76adec4a22ab245e90b50cffef",level:2},{value:"Sign in With Keyfile",id:"271ddc08bffc44d1a5ca690d083ef889",level:3},{value:"Sign in With Mnemonic",id:"1c7d280d05b645e990c069be57ea5fb0",level:3},{value:"Create New Wallet",id:"e71a8876def84ccb84024616dd239762",level:2}];function u(e){const t={h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"7fb04d76adec4a22ab245e90b50cffef",children:"Connect Wallet"}),"\n",(0,r.jsx)(t.p,{children:"This page provides various options for connecting your wallet. If you do not have a Keyfile or Mnemonic, please navigate to the 'Create New Wallet' page, which is the last option from the Connect Wallet page menu."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(1448).A+"",width:"1171",height:"196"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(9369).A+"",width:"395",height:"446"})}),"\n",(0,r.jsx)(t.h3,{id:"271ddc08bffc44d1a5ca690d083ef889",children:"Sign in With Keyfile"}),"\n",(0,r.jsx)(t.p,{children:"This option allows you to securely access your wallet using a Keyfile. All you need to do is upload your Keyfile and enter your password."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(9366).A+"",width:"377",height:"599"})}),"\n",(0,r.jsx)(t.h3,{id:"1c7d280d05b645e990c069be57ea5fb0",children:"Sign in With Mnemonic"}),"\n",(0,r.jsx)(t.p,{children:"Signing in with a Mnemonic involves inputting a series of words that act as a password for your wallet. It's a secure and commonly used method to access wallets."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(9656).A+"",width:"381",height:"985"})}),"\n",(0,r.jsx)(t.h2,{id:"e71a8876def84ccb84024616dd239762",children:"Create New Wallet"}),"\n",(0,r.jsx)(t.p,{children:"Upon landing on this page, your public address, mnemonic, and private key are automatically generated. Although this process is straightforward, it's crucial to remember that once you leave the page, you won't be able to recover your Mnemonic and Keyfile. Please, secure them accordingly."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(9749).A+"",width:"371",height:"830"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(7479).A+"",width:"392",height:"836"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:n(3525).A+"",width:"370",height:"1313"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var a=n(8215);const r={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>j});var a=n(6540),r=n(8215),s=n(5627),i=n(6347),o=n(372),l=n(604),c=n(1861),u=n(8749);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=f(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:n,groupId:r}),[m,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Dv)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=c??m;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function w(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:s}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=m(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function j(e){const t=(0,b.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},9749:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/1179955450-ae6fc763b77fe63302928c1d76d3d311.png"},9656:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/1195850743-6b41c193d4e7aba6ae273547955c51a9.png"},3525:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/1366668206-3a4d036a85adb54094f6321288a8bcf9.png"},9366:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/240419682-de4cae1a8a9acac98227ffe8f8ffd5f9.png"},1448:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/322920960-dfa61912075b10ffa928667b6177c80c.png"},9369:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/342836022-c99ef92420a2a368b059ed1c543b465b.png"},7479:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/692503285-ed911eb700a8bfb9641e9c6c8c2d5542.png"},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var a=n(6540);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);