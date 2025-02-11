"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[5551],{4524:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"frontend---miro/guide/loading-&-choosing-network","title":"Loading & Choosing Network","description":"Loading Page","source":"@site/tabs/docs/frontend---miro/guide/loading-&-choosing-network.mdx","sourceDirName":"frontend---miro/guide","slug":"/frontend---miro/guide/loading--choosing-network","permalink":"/docs/frontend---miro/guide/loading--choosing-network","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/frontend---miro/guide/loading--choosing-network&page-local=frontend---miro/guide/loading-&-choosing-network.mdx","tags":[],"version":"current","lastUpdatedAt":1717929100000,"sidebarPosition":0,"frontMatter":{"title":"Loading & Choosing Network","sidebar_position":0,"slug":"loading--choosing-network"},"sidebar":"defaultSidebar","previous":{"title":"Overview","permalink":"/docs/frontend---miro/overview"},"next":{"title":"Wallet","permalink":"/docs/frontend---miro/guide/wallet"}}');var a=n(4848),o=n(8453);n(5537),n(9329);const s={title:"Loading & Choosing Network",sidebar_position:0,slug:"loading--choosing-network"},i=void 0,l={},c=[{value:"Loading Page",id:"d24b8855084c42e680d6a58e08b427d5",level:2},{value:"Network List",id:"a2b41c1bcf7a4e3e867785fa86e7a69e",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"d24b8855084c42e680d6a58e08b427d5",children:"Loading Page"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(4186).A+"",width:"610",height:"361"})}),"\n",(0,a.jsx)(t.p,{children:"The loading page is responsible for connecting to the INTERX node. MIRO always tests the server hosting INTERX for availability before establishing a connection. Data can be extracted from two sources:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"IPFS URL"}),": This is an example URL - at the end of the URL, there is an RPC address (",(0,a.jsx)(t.a,{href:"http://148.251.69.56/",children:"http://148.251.69.56"}),"). ",(0,a.jsx)(t.a,{href:"https://ipfs.kira.network/ipfs/bafybeiggh6hd6p54zawzoh2wsh7rk3xagir5eglcpd2c7qqfxn72oijpny/#/app/dashboard?rpc=http://148.251.69.56:11000",children:"https://ipfs.kira.network/ipfs/bafybeiggh6hd6p54zawzoh2wsh7rk3xagir5eglcpd2c7qqfxn72oijpny/#/app/dashboard?rpc=http://148.251.69.56:11000"})]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.strong,{children:"network_list_config.json file"}),": This file contains information about predefined servers in JSON format. MIRO automatically tries to connect to the first server on the list. The JSON structure is as follows:"]}),"\n"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-json",children:'{\n  "refresh_interval_seconds": 60,\n  "proxy_server_url": "<https://cors.kira.network>",\n  "network_list": [\n    {\n      "name": "Public Node 1",\n      "address": "<http://148.251.69.56:11000>"\n    },\n    {\n      "name": "Public Node 2",\n      "address": "<http://128.140.42.2:11000>"\n    }\n  ]\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"a2b41c1bcf7a4e3e867785fa86e7a69e",children:"Network List"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(3856).A+"",width:"516",height:"892"})}),"\n",(0,a.jsx)(t.p,{children:"The Network List Page displays after a failed response from INTERX. In MIRO, there are four possible states for an INTERX server:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Unknown (grey) - MIRO is waiting for a response from INTERX which can take several minutes."}),"\n",(0,a.jsx)(t.li,{children:"Healthy (green) - MIRO will automatically connect if INTERX provides a correct response from the /api/status endpoint, the INTERX version is supported by MIRO, and the difference between the last block time and local user time is less than 5 minutes."}),"\n",(0,a.jsx)(t.li,{children:"Unhealthy (yellow) - MIRO will not connect automatically. User consent is required to connect if INTERX provides a correct response from the /api/status endpoint, but the INTERX version is not supported by MIRO, or the difference between the last block time and local user time exceeds 5 minutes."}),"\n",(0,a.jsx)(t.li,{children:"Offline (red) - If INTERX responds with a bad response code (40X or 50X), it's considered offline."}),"\n"]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["MIRO periodically checks the INTERX status, no more frequently than every 60 seconds. This interval can be lengthened in the ",(0,a.jsx)(t.strong,{children:"network_list_config.json"})," file. Any value below 60 will be reset to avoid unintended excessive requests to servers."]})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},9329:(e,t,n)=>{n.d(t,{A:()=>s});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var o=n(4848);function s(e){let{children:t,hidden:n,className:s}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,s),hidden:n,children:t})}},5537:(e,t,n)=>{n.d(t,{A:()=>y});var r=n(6540),a=n(8215),o=n(5627),s=n(6347),i=n(372),l=n(604),c=n(1861),u=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.W6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[c,d]=f({queryString:n,groupId:a}),[g,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),b=(()=>{const e=c??g;return p({value:e,tabValues:o})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,o]),tabValues:o}}var m=n(9136);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(4848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),s(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function k(e){const t=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(x,{...t,...e})]})}function y(e){const t=(0,m.A)();return(0,v.jsx)(k,{...e,children:d(e.children)},String(t))}},3856:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/1005049361-2020976334a44c614ad84316966e86aa.png"},4186:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/718736515-53199966cc20b44f10225eb24a2553d6.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>i});var r=n(6540);const a={},o=r.createContext(a);function s(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);