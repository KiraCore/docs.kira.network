"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4590],{6795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(4848),r=n(8453);n(1470),n(9365);const a={title:"Account Recovery",sidebar_position:6,slug:"account-recovery"},s=void 0,i={id:"run-a-consensus-node/account-recovery",title:"Account Recovery",description:"You should never under any circumstances provide anyone with your private keys or mnemonic words. Keep them stored on a piece of paper offline and keep an online copy only on your validator node. It is also recommended to set up a recovery address that can be used to rotate your validator key in case you suspect that your node might have been compromised. You can learn more about that process from our public docs page.",source:"@site/tabs/testnet/run-a-consensus-node/account-recovery.mdx",sourceDirName:"run-a-consensus-node",slug:"/run-a-consensus-node/account-recovery",permalink:"/testnet/run-a-consensus-node/account-recovery",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/testnet/run-a-consensus-node/account-recovery&page-local=run-a-consensus-node/account-recovery.mdx",tags:[],version:"current",lastUpdatedAt:1720521339e3,sidebarPosition:6,frontMatter:{title:"Account Recovery",sidebar_position:6,slug:"account-recovery"},sidebar:"defaultSidebar",previous:{title:"Network Upgrades",permalink:"/testnet/run-a-consensus-node/network-upgrades"},next:{title:"COSIGN Setup",permalink:"/testnet/tools/cosign-setup"}},u={},c=[];function l(e){const t={a:"a",admonition:"admonition",code:"code",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["You should never under any circumstances provide anyone with your private keys or mnemonic words. Keep them stored on a piece of paper offline and keep an online copy only on your validator node. It is also recommended to set up a recovery address that can be used to rotate your validator key in case you suspect that your node might have been compromised. You can learn more about that process from our ",(0,o.jsx)(t.a,{href:"https://docs.kira.network/",children:"public docs page"}),"."]})}),"\n",(0,o.jsxs)(t.p,{children:["As a validator, your most important role is to stay online, be an active participant in the testers\u2019 community, and preserve the cryptographic secrets that your node will use to sign new blocks being proposed to the network. There can be many of those \u201ccryptographic secrets\u201d that you need to know about and archive, so we simplified the entire process into just a single set of bip39 mnemonic words that you need to write down. You can visit the ",(0,o.jsx)(t.a,{href:"/testnet/tools/key-management",children:"Key Management"})," page to learn more or utilize KM to generate it all for you automatically. If you choose to go with KM, please make sure to select option ",(0,o.jsx)(t.code,{children:"[M] View or Modify Mnemonic"})," before leaving the \u201cNode Launcher Menu\u201d and follow up with ",(0,o.jsx)(t.code,{children:"[V] Display master mnemonic from keystore"})," within the menu of the \u201cSecrets Manager\u201d."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Interactive KM Setup - Example of a Mater Mnemonic Preview",src:n(4903).A+"",width:"734",height:"450"})}),"\n",(0,o.jsxs)(t.p,{children:["If by mistake you forgot to write down your mnemonic words, you can always display them by typing the following command in your console window:\xa0",(0,o.jsx)(t.code,{children:'tryGetVar MASTER_MNEMONIC "$KIRA_SECRETS/mnemonics.env"'}),". If your node fails or needs to be recovered, you can regenerate all the secrets by providing the master mnemonic to the KM within the \u201cNode Launcher Menu\u201d. Otherwise, your node will generate a new set of secrets every time you set up a new node on a fresh instance."]}),"\n",(0,o.jsxs)(t.p,{children:["If you ever need to fully recover your validator node, including all its secrets and private keys, you can do so by importing the mnemonic that you previously wrote down. To access this option, simply select",(0,o.jsx)(t.code,{children:"[M] Modify master mnemonic and DELETE all secrets"})," from the main menu of the \u201cSecrets Manager\u201d. However, it is important to note that this process will destroy all auto-generated secrets and replace them with the ones derived from your master mnemonic. You should be very careful when using this option and ensure that you have a backup of your master mnemonic in a secure location. It is also crucial to never attempt to recover your validator or reuse your secrets on two machines simultaneously. Doing so will result in the double signing of a block and lead to your node being jailed."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},9365:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var o=n(8215);const r={tabItem:"tabItem_Ymn6"};var a=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,o.A)(r.tabItem,s),hidden:n,children:t})}},1470:(e,t,n)=>{n.d(t,{A:()=>x});var o=n(6540),r=n(8215),a=n(3104),s=n(6347),i=n(205),u=n(7485),c=n(1682),l=n(679);function d(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u.aZ)(a),(0,o.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,a=m(e),[s,u]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:a}))),[c,d]=h({queryString:n,groupId:r}),[y,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,l.Dv)(n);return[r,(0,o.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:r}),b=(()=>{const e=c??y;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{b&&u(b)}),[b]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);u(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=n(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function g(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:i}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),l=e=>{const t=e.currentTarget,n=u.indexOf(t),r=i[n].value;r!==o&&(c(t),s(r))},d=e=>{let t=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>u.push(e),onKeyDown:d,onClick:l,...a,className:(0,r.A)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:r}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=y(e);return(0,v.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,v.jsx)(g,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function x(e){const t=(0,f.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},4903:(e,t,n)=>{n.d(t,{A:()=>o});const o=n.p+"assets/images/1803436744-9fd40fcc1b3a9ab919e6b15a7585f41d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var o=n(6540);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);