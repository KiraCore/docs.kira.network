"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[1454],{1220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=n(5893),r=n(1151);n(4866),n(5162);const s={title:"testnet-8",sidebar_position:4,slug:"/484978b2-367f-444f-8622-677973bbc585"},i=void 0,o={id:"Testnets/History/testnet-8",title:"testnet-8",description:"Description",source:"@site/tabs/Testnet/Testnets/History/testnet-8.mdx",sourceDirName:"Testnets/History",slug:"/484978b2-367f-444f-8622-677973bbc585",permalink:"/testnet/484978b2-367f-444f-8622-677973bbc585",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/testnet/484978b2-367f-444f-8622-677973bbc585&page-local=testnets/history/testnet-8.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"testnet-8",sidebar_position:4,slug:"/484978b2-367f-444f-8622-677973bbc585"},sidebar:"defaultSidebar",previous:{title:"testnet-5",permalink:"/testnet/ab0460ce-bf1f-4bca-b3a9-506f1b76ae99"},next:{title:"testnet-4",permalink:"/testnet/2318d048-5113-48d0-8ca6-3f5a775e83c8"}},l={},c=[{value:"Description",id:"52f7dd2bb88d41229eef5f60c00a89c3",level:2},{value:"Post Mortem",id:"309d795a5b314d85a1280a760fc8f6a8",level:2},{value:"Files",id:"9f7eec7c8df242b498300fc4e44d7a02",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"52f7dd2bb88d41229eef5f60c00a89c3",children:"Description"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Chain Identifier: ",(0,a.jsx)(t.code,{children:"testnet-8"})]}),"\n",(0,a.jsxs)(t.li,{children:["KIRA Manager Checksum: ",(0,a.jsx)(t.code,{children:"0feca1c125f2291596dd115ff2cf720032a7098030f8aa97c164afa9ca79644e"})]}),"\n",(0,a.jsxs)(t.li,{children:["Genesis File Checksum: ",(0,a.jsx)(t.code,{children:"0x8b688297b8a6f0ce9924eb163a4c254dfe647fe1b0c0d891cff9457869e650b7"})]}),"\n",(0,a.jsxs)(t.li,{children:["Initial Block Height: ",(0,a.jsx)(t.code,{children:"138403"})]}),"\n",(0,a.jsxs)(t.li,{children:["Block Height Reached: ",(0,a.jsx)(t.code,{children:"920527"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"309d795a5b314d85a1280a760fc8f6a8",children:"Post Mortem"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Testnet was expected to be depreciated due to planned hard fork at 4:30 PM 2022-01-07."}),"\n",(0,a.jsxs)(t.li,{children:["During generation of the new genesis file, export tool failed to convert ",(0,a.jsx)(t.code,{children:"proposal_end_time"})," into ",(0,a.jsx)(t.code,{children:"minimum_proposal_end_time"})," and ",(0,a.jsx)(t.code,{children:"jail_max_time"})," into ",(0,a.jsx)(t.code,{children:"unjail_max_time"}),", resulting in the ",(0,a.jsx)(t.code,{children:'panic: unknown field "proposal_end_time" & "jail_max_time" in types.NetworkProperties'})," exception and failure to successfully start SEKAI process."]}),"\n",(0,a.jsxs)(t.li,{children:["After manually fixing network properties in genesis, new issue was found were old proposals become incompatible with the new version of the chain resulting in ",(0,a.jsx)(t.code,{children:'panic: can\'t unmarshal Any nested proto *types.SetNetworkPropertyProposal: unknown value "PROPOSAL_END_TIME" for enum kira.gov.NetworkProperty'})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"9f7eec7c8df242b498300fc4e44d7a02",children:"Files"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/cd34a624-3b15-4cb1-83a9-3c4886be4430/genesis.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240309T130009Z&X-Amz-Expires=3600&X-Amz-Signature=097316dc6837362d0ceea8ef343b545fc09625419e9712131054b9ddcf1a6d6f&X-Amz-SignedHeaders=host&x-id=GetObject",children:"genesis.json"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/e760d76c-a924-4982-8abc-f779e0952dff/valopers-airdrop-snap.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240309T130009Z&X-Amz-Expires=3600&X-Amz-Signature=bd80dda03d8635a953f2069c816f94a0a0cf5c0c19373c9eb554f8074ce168da&X-Amz-SignedHeaders=host&x-id=GetObject",children:"valopers-airdrop-snap.json"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/1b221e68-6ef6-4068-808d-6f56c83b7f9d/votes-upgrade-proposal.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45HZZMZUHI%2F20240309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20240309T130009Z&X-Amz-Expires=3600&X-Amz-Signature=055a732eb01e3b2ca09cb7e079a3531d39304592c6496a529bad286585d97e96&X-Amz-SignedHeaders=host&x-id=GetObject",children:"votes-upgrade-proposal.json"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var s=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(7294),r=n(6905),s=n(2466),i=n(6550),o=n(469),l=n(1980),c=n(7392),u=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=f(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[c,d]=p({queryString:n,groupId:r}),[h,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,u.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),x=(()=>{const e=c??h;return b({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&l(x)}),[x]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(2389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),r=o[n].value;r!==a&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function A(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(j,{...e,...t})]})}function w(e){const t=(0,m.Z)();return(0,g.jsx)(A,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var a=n(7294);const r={},s=a.createContext(r);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);