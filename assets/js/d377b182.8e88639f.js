"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6116],{1057:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/319785771-75f434ada59642501ced598ca43d2996.png"},1522:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"what-is-kira/layer-2/virtual-finality-gadget","title":"Virtual Finality Gadget","description":"The Virtual Finality Gadget (VFG) is a programmable finality mechanism that grants each application on KIRA the ability to establish its own verification and consensus rules. It divides application logic into execution (operated by Executors) and verification (overseen by Fishermen) components. VFG allows developers and users to customize their finality logic, such as choosing an optimistic model of execution (rollups - valid by default), pessimistic (rolldowns - invalid until verified), or any bespoke verification logic, even allowing for the creation of recursive appchains and human judgment by a defined set of network actors. VFG\u2019s ability to support non-deterministic verification binaries makes it particularly useful for complex, blockchain-less, Web2-scale applications, such as AI and gaming as well as makes it impossible for an attacker to predict if his attack attempt would be successful as the verification rules can be customized by each Fisherman individually and remains private.","source":"@site/tabs/learn/what-is-kira/layer-2/virtual-finality-gadget.mdx","sourceDirName":"what-is-kira/layer-2","slug":"/what-is-kira/layer-2/virtual-finality-gadget","permalink":"/learn/what-is-kira/layer-2/virtual-finality-gadget","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/what-is-kira/layer-2/virtual-finality-gadget&page-local=what-is-kira/layer-2/virtual-finality-gadget.mdx","tags":[],"version":"current","lastUpdatedAt":1727071398000,"sidebarPosition":1,"frontMatter":{"title":"Virtual Finality Gadget","sidebar_position":1,"slug":"virtual-finality-gadget"},"sidebar":"defaultSidebar","previous":{"title":"Overview","permalink":"/learn/what-is-kira/layer-2/overview"},"next":{"title":"Building on KIRA","permalink":"/learn/what-is-kira/layer-2/building-on-kira"}}');var n=a(4848),r=a(8453);a(5537),a(9329);const o={title:"Virtual Finality Gadget",sidebar_position:1,slug:"virtual-finality-gadget"},s=void 0,l={},c=[{value:"How It Works",id:"ff43eea4d8e2429780e1edad7145a61b",level:3}];function u(e){const t={h3:"h3",img:"img",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Virtual Finality Gadget (VFG) is a programmable finality mechanism that grants each application on KIRA the ability to establish its own verification and consensus rules. It divides application logic into execution (operated by Executors) and verification (overseen by Fishermen) components. VFG allows developers and users to customize their finality logic, such as choosing an optimistic model of execution (rollups - valid by default), pessimistic (rolldowns - invalid until verified), or any bespoke verification logic, even allowing for the creation of recursive appchains and human judgment by a defined set of network actors. VFG\u2019s ability to support non-deterministic verification binaries makes it particularly useful for complex, blockchain-less, Web2-scale applications, such as AI and gaming as well as makes it impossible for an attacker to predict if his attack attempt would be successful as the verification rules can be customized by each Fisherman individually and remains private."}),"\n",(0,n.jsx)(t.h3,{id:"ff43eea4d8e2429780e1edad7145a61b",children:"How It Works"}),"\n",(0,n.jsx)(t.p,{children:"In KIRA, RollApp are simply packaged binaries within Docker containers. This ensures security by isolating RollApp from the host OS to prevent malware risks and enabling precise management of resources like CPU, GPU, RAM, and disk space per each individual application."}),"\n",(0,n.jsx)(t.p,{children:"Each application is architecturally divided into two distinct components: the execution logic and the verification logic, each encapsulated within its own Docker container. The execution logic container, managed by Executors, is responsible for running the application's code such as state machine or zkVM, while the verification logic container, overseen by Fishermen, assesses the integrity of the RollApp state changes that Executors submit to the KIRA base layer, SEKAI."}),"\n",(0,n.jsx)(t.p,{children:"From a high-level perspective, Docker containers are executed and monitored by Consensus nodes within KIRA, facilitated by RYOKAI for operational management and coordination. The containers interact with the network through local INTERX nodes (serving as decentralized APIs or DAPI/DA) and SEKAI nodes (connecting to the KIRA blockchain), ensuring seamless integration and communication within the ecosystem."}),"\n",(0,n.jsx)(t.p,{children:"The role of the execution container is to accept input sequenced by INTERX into one of the ports and execute commands from that input according to the code embedded within the container. Since there might be many executors (Multi-Party Computation) one of them is round-robin elected as leader who can then publish state root - publishing the hash of the new app database state and proposing changes to dApp account balances on the KIRA base layer. The application lifecycle has a form of forever changing states (sessions) from one KIRA base layer block to another proposed by a single leader. The proposed changes must then be approved by the verifiers through a process in which a threshold of approvals must be reached. If even a single Fisherman disagrees with the state transition the app is stopped and KIRA governance steps in to resolve the issues."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Visual representation of the example dApp execution process",src:a(1057).A+"",width:"1161",height:"592"})}),"\n",(0,n.jsx)(t.p,{children:"The VFG does not enforce any specific way of evaluating the shift from one application state to another. Instead, it empowers developers and all who participate in the verification of the application execution process to customize the method in which a binary verification outcome is produced \u2014 either 'yes' or 'no' \u2014 to affirm or challenge the transition's validity. This approach presents a strong contrast to current rollup systems, where the verification process relies on an execution binary or container that must remain identical and public among all Executors of a specific application. In the case of the verification container, although a single shared and public version must be provided by developers, possible bounties for catching issues provide an additional economic incentive for Fishermen to customize the verification container."}),"\n",(0,n.jsx)(t.p,{children:"We have to assume that in the future there will always be better and more efficient ways to trustlessly verify computations. Today that might be something as simple as re-execution or zkVM and using GPUs to generate ZK proofs. Tomorrow, it might be something completely different. The VFG protocol was created so that application developers can long-term support their applications without being locked into a single framework or protocol. Our intention is also to signal that Fishermen should not blindly trust developer teams, especially in an era of ever-present bugs and stegomalware. These can turn even seemingly deterministic code into unpredictable chaos, against which no one has yet proposed a reliable method to protect users from."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Visual representation of the example dApp execution process",src:a(9641).A+"",width:"1634",height:"822"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5537:(e,t,a)=>{a.d(t,{A:()=>x});var i=a(6540),n=a(8215),r=a(5627),o=a(6347),s=a(372),l=a(604),c=a(1861),u=a(8749);function d(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:a}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:i,default:n}}=e;return{value:t,label:a,attributes:i,default:n}}))}(a);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,o.W6)(),r=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,l.aZ)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(n.location.search);t.set(r,e),n.replace({...n.location,search:t.toString()})}),[r,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,r=h(e),[o,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=a.find((e=>e.default))??a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:r}))),[c,d]=m({queryString:a,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,r]=(0,u.Dv)(a);return[n,(0,i.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:n}),g=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=a(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(4848);function y(e){let{className:t,block:a,selectedValue:i,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const t=e.currentTarget,a=l.indexOf(t),n=s[a].value;n!==i&&(c(t),o(n))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;t=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;t=l[a]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":a},t),children:s.map((e=>{let{value:t,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...r,className:(0,n.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":i===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function k(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,n.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(w,{...t,...e})]})}function x(e){const t=(0,b.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>s});var i=a(6540);const n={},r=i.createContext(n);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(r.Provider,{value:t},e.children)}},9329:(e,t,a)=>{a.d(t,{A:()=>o});a(6540);var i=a(8215);const n={tabItem:"tabItem_Ymn6"};var r=a(4848);function o(e){let{children:t,hidden:a,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,i.A)(n.tabItem,o),hidden:a,children:t})}},9641:(e,t,a)=>{a.d(t,{A:()=>i});const i=a.p+"assets/images/422487827-6652d0807ee6ec2c6e40bc12547d0739.png"}}]);