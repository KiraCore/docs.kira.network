"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[4081],{4410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(5893),a=n(1151);n(4866),n(5162);const s={title:"testnet-8",sidebar_position:4,slug:"/testnet-8"},i=void 0,o={id:"testnets/history/testnet-8",title:"testnet-8",description:"Description",source:"@site/tabs/testnet/testnets/history/testnet-8.mdx",sourceDirName:"testnets/history",slug:"/testnet-8",permalink:"/testnet/testnet-8",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/testnet/testnet-8&page-local=testnets/history/testnet-8.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"testnet-8",sidebar_position:4,slug:"/testnet-8"},sidebar:"defaultSidebar",previous:{title:"testnet-5",permalink:"/testnet/testnet-5"},next:{title:"testnet-4",permalink:"/testnet/testnet-4"}},l={},c=[{value:"Description",id:"52f7dd2bb88d41229eef5f60c00a89c3",level:2},{value:"Post Mortem",id:"309d795a5b314d85a1280a760fc8f6a8",level:2},{value:"Files",id:"9f7eec7c8df242b498300fc4e44d7a02",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"52f7dd2bb88d41229eef5f60c00a89c3",children:"Description"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Chain Identifier: ",(0,r.jsx)(t.code,{children:"testnet-8"})]}),"\n",(0,r.jsxs)(t.li,{children:["KIRA Manager Checksum: ",(0,r.jsx)(t.code,{children:"0feca1c125f2291596dd115ff2cf720032a7098030f8aa97c164afa9ca79644e"})]}),"\n",(0,r.jsxs)(t.li,{children:["Genesis File Checksum: ",(0,r.jsx)(t.code,{children:"0x8b688297b8a6f0ce9924eb163a4c254dfe647fe1b0c0d891cff9457869e650b7"})]}),"\n",(0,r.jsxs)(t.li,{children:["Initial Block Height: ",(0,r.jsx)(t.code,{children:"138403"})]}),"\n",(0,r.jsxs)(t.li,{children:["Block Height Reached: ",(0,r.jsx)(t.code,{children:"920527"})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"309d795a5b314d85a1280a760fc8f6a8",children:"Post Mortem"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Testnet was expected to be depreciated due to planned hard fork at 4:30 PM 2022-01-07."}),"\n",(0,r.jsxs)(t.li,{children:["During generation of the new genesis file, export tool failed to convert ",(0,r.jsx)(t.code,{children:"proposal_end_time"})," into ",(0,r.jsx)(t.code,{children:"minimum_proposal_end_time"})," and ",(0,r.jsx)(t.code,{children:"jail_max_time"})," into ",(0,r.jsx)(t.code,{children:"unjail_max_time"}),", resulting in the ",(0,r.jsx)(t.code,{children:'panic: unknown field "proposal_end_time" & "jail_max_time" in types.NetworkProperties'})," exception and failure to successfully start SEKAI process."]}),"\n",(0,r.jsxs)(t.li,{children:["After manually fixing network properties in genesis, new issue was found were old proposals become incompatible with the new version of the chain resulting in ",(0,r.jsx)(t.code,{children:'panic: can\'t unmarshal Any nested proto *types.SetNetworkPropertyProposal: unknown value "PROPOSAL_END_TIME" for enum kira.gov.NetworkProperty'})]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"9f7eec7c8df242b498300fc4e44d7a02",children:"Files"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/cd34a624-3b15-4cb1-83a9-3c4886be4430/genesis.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T032000Z&X-Amz-Expires=3600&X-Amz-Signature=fbc1eff522f76dc9e1fb2a2df31b8275029523c242838b8538b3b4e3e65b0314&X-Amz-SignedHeaders=host&x-id=GetObject",children:"genesis.json"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/e760d76c-a924-4982-8abc-f779e0952dff/valopers-airdrop-snap.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T032000Z&X-Amz-Expires=3600&X-Amz-Signature=c78b866cfe25d767c8a3bda547d43fb98147c72ef121025ee41e548ba147b75f&X-Amz-SignedHeaders=host&x-id=GetObject",children:"valopers-airdrop-snap.json"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/1b221e68-6ef6-4068-808d-6f56c83b7f9d/votes-upgrade-proposal.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240516T032000Z&X-Amz-Expires=3600&X-Amz-Signature=85214a239bf1b206f53c21f9fdd16bf9a86e97e4d025a4c57455510ecd80c76e&X-Amz-SignedHeaders=host&x-id=GetObject",children:"votes-upgrade-proposal.json"})})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var r=n(6905);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),a=n(6905),s=n(2466),i=n(6550),o=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=f(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:n,groupId:a}),[h,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),x=(()=>{const e=c??h;return b({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,g.jsx)(A,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var r=n(7294);const a={},s=r.createContext(a);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);