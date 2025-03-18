"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6883],{5537:(e,t,r)=>{r.d(t,{A:()=>A});var n=r(6540),s=r(8215),a=r(5627),o=r(6347),l=r(372),i=r(604),c=r(1861),u=r(8749);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const s=(0,o.W6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:r,groupId:s}),[p,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Dv)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),v=(()=>{const e=c??p;return b({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!b({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=r(9136);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function j(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),s=l[r].value;s!==n&&(c(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function F(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...t,...e}),(0,x.jsx)(g,{...t,...e})]})}function A(e){const t=(0,m.A)();return(0,x.jsx)(F,{...e,children:d(e.children)},String(t))}},7428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"resources/testnet-servers/testnet-9","title":"testnet-9","description":"Description","source":"@site/tabs/node-operators/resources/testnet-servers/testnet-9.mdx","sourceDirName":"resources/testnet-servers","slug":"/resources/testnet-servers/testnet-9","permalink":"/node-operators/resources/testnet-servers/testnet-9","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/node-operators/resources/testnet-servers/testnet-9&page-local=resources/testnet-servers/testnet-9.mdx","tags":[],"version":"current","lastUpdatedAt":1742267078000,"sidebarPosition":4,"frontMatter":{"title":"testnet-9","sidebar_position":4,"slug":"testnet-9"},"sidebar":"defaultSidebar","previous":{"title":"chaosnet-1","permalink":"/node-operators/resources/testnet-servers/chaosnet-1"},"next":{"title":"testnet-7","permalink":"/node-operators/resources/testnet-servers/testnet-7"}}');var s=r(4848),a=r(8453);r(5537),r(9329);const o={title:"testnet-9",sidebar_position:4,slug:"testnet-9"},l=void 0,i={},c=[{value:"Description",id:"129467da57b781f6a5d5ed8bbf65bb28",level:2},{value:"Post Mortem",id:"129467da57b781d7ba1ec04edc90a351",level:2},{value:"Files",id:"129467da57b781b5a1e9fcc0e38a4488",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"129467da57b781f6a5d5ed8bbf65bb28",children:"Description"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Chain Identifier: ",(0,s.jsx)(t.code,{children:"testnet-9"})]}),"\n",(0,s.jsxs)(t.li,{children:["Expected Hard Fork Date: ",(0,s.jsx)(t.code,{children:"2022-01-07 6:30 PM UTC"})]}),"\n",(0,s.jsxs)(t.li,{children:["Upgrade Proposal Id: ",(0,s.jsx)(t.code,{children:"668"})]}),"\n",(0,s.jsxs)(t.li,{children:["KIRA Manager Checksum: ",(0,s.jsx)(t.code,{children:"0feca1c125f2291596dd115ff2cf720032a7098030f8aa97c164afa9ca79644e"})]}),"\n",(0,s.jsxs)(t.li,{children:["Genesis File Checksum: ",(0,s.jsx)(t.code,{children:"0x111567fa0152bc91d72e395d3604510b8425e4b3a9c48cca1e9d019fdde749f8"})]}),"\n",(0,s.jsxs)(t.li,{children:["Initial Block Height: ",(0,s.jsx)(t.code,{children:"920527"})]}),"\n",(0,s.jsxs)(t.li,{children:["Block Height Reached: ",(0,s.jsx)(t.code,{children:"TBD (never stopped)"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"129467da57b781d7ba1ec04edc90a351",children:"Post Mortem"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Planned to be depreciated by testnet-10"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"129467da57b781b5a1e9fcc0e38a4488",children:"Files"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/f8834219-d9e9-4c4d-ae3e-c06ad98ce3f1/genesis.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TVMX7FF%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDop5Gn54ElmXKorrMezJXZZSU4f1MHbeSjwnjaElT63gIhAPbKEkwvHxSs2uY2%2FnJBDSqMpRffPg4Z2jLYQ92LTsXYKv8DCEgQABoMNjM3NDIzMTgzODA1Igw1yjTW8s7ulAx4Y4Mq3ANygQWKKiYQooaZvWpNhHslAdNcyh9Q%2FMathzDXYxG%2FLepbYq%2BEoOezXOIlGKVmLgQr6IG0YilKLIceiBRQw3saJ7EWXvKskspKHt%2F1UZuiXG%2Bn9%2BIzDzZpGUXjQX3Q%2F9S9s36wYtMlmNKmgq%2BdKcmtH9DDUiRxJ9%2FSlNOjqek2mSAunt34B1uob2sNW8rna8w5%2B%2F2xHHbKwr%2FYffENZf%2Bqy7X9FyQY9DRAZ3ZJbumIuMj8vPrWguFHcNWBKpeCrGYzlRdgGYdjUJhOnxrjkDaM5WfQ%2Bh8oJxIxLTF%2FL4J0QKgb0OkGhVcFpAqtLs3CKwxx4joqaX2KXLzDhHXk5wEFMSONx%2BDMdhjvCs6aMRkNAOwn1YQGeujL6SXfSjRI7b194BbZz9zNe8CmAzM0hP8nyPoJDu9jMD5nEqU7Xkbhu4FMJmO4lcCY8YiL7kjCERk%2FVKLGDqch79U1mLMH%2BE7jmeChETlgls%2FmbsANim1eAoCyTHj4ooeh%2FHioDWyZXy8DRSemzfa%2BLBLI4EjndSMwUsxUnDj5RFRSL70jUnF3GnrON2F4MWGYi0XA%2FOyDKOu6uyRN8Tf4JpBE9UEamdXzALU7PvRT3lXvIjZdwPfbTXRtGU67zllxvEZO%2FzCk6eC%2BBjqkAfv6bB7F5xR36Ta5o2sUrHhOYy1vDlkcHEcj7pjlofRBfNCsBlAwXNsN%2FW99pToVh05uTdSDGF8hnCReV%2BKhClFxLhUuq1bnPLC%2FBaSf8%2BoIDsnW%2B8CxDbDChNyHBwJV4JDsEkmQVSot9BcZqpudOTeM0nxHdrNKrrxNIiANnfBRFxF0D4dNha8D7E6zze2DLhDvF8tzGxrh6eUr7EOcB2%2Fn7Goq&X-Amz-Signature=270a642d2d941511d53c7648603de97dbc3e7b18b05a4cde4c59460dca8326c8&X-Amz-SignedHeaders=host&x-id=GetObject",children:"genesis.json"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(6540);const s={},a=n.createContext(s);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:t},e.children)}},9329:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var n=r(8215);const s={tabItem:"tabItem_Ymn6"};var a=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:r,children:t})}}}]);