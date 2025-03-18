"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6021],{5537:(e,t,r)=>{r.d(t,{A:()=>S});var s=r(6540),a=r(8215),n=r(5627),o=r(6347),l=r(372),i=r(604),c=r(1861),u=r(8749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function b(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:a}}=e;return{value:t,label:r,attributes:s,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function f(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=b(e),[o,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[c,d]=m({queryString:r,groupId:a}),[h,F]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,u.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),p=(()=>{const e=c??h;return f({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{p&&i(p)}),[p]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),F(e)}),[d,F,n]),tabValues:n}}var F=r(9136);const p={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(4848);function B(e){let{className:t,block:r,selectedValue:s,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,n.a_)(),u=e=>{const t=e.currentTarget,r=i.indexOf(t),a=l[r].value;a!==s&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{i.push(e)},onKeyDown:d,onClick:u,...n,className:(0,a.A)("tabs__item",p.tabItem,n?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function A(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function V(e){const t=h(e);return(0,g.jsxs)("div",{className:(0,a.A)("tabs-container",p.tabList),children:[(0,g.jsx)(B,{...t,...e}),(0,g.jsx)(A,{...t,...e})]})}function S(e){const t=(0,F.A)();return(0,g.jsx)(V,{...e,children:d(e.children)},String(t))}},5904:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"resources/testnet-servers/testnet-7","title":"testnet-7","description":"Description","source":"@site/tabs/node-operators/resources/testnet-servers/testnet-7.mdx","sourceDirName":"resources/testnet-servers","slug":"/resources/testnet-servers/testnet-7","permalink":"/node-operators/resources/testnet-servers/testnet-7","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/node-operators/resources/testnet-servers/testnet-7&page-local=resources/testnet-servers/testnet-7.mdx","tags":[],"version":"current","lastUpdatedAt":1742267078000,"sidebarPosition":5,"frontMatter":{"title":"testnet-7","sidebar_position":5,"slug":"testnet-7"},"sidebar":"defaultSidebar","previous":{"title":"testnet-9","permalink":"/node-operators/resources/testnet-servers/testnet-9"},"next":{"title":"testnet-6","permalink":"/node-operators/resources/testnet-servers/testnet-6"}}');var a=r(4848),n=r(8453);r(5537),r(9329);const o={title:"testnet-7",sidebar_position:5,slug:"testnet-7"},l=void 0,i={},c=[{value:"Description",id:"129467da57b78115948df8e398f42e0a",level:2},{value:"Post Mortem",id:"129467da57b781909dfef7ffefbbe82c",level:2},{value:"Files",id:"129467da57b781caa6c8dcfdf8504412",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"129467da57b78115948df8e398f42e0a",children:"Description"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Chain Identifier: ",(0,a.jsx)(t.code,{children:"testnet-7"})]}),"\n",(0,a.jsxs)(t.li,{children:["KIRA Manager Checksum: ",(0,a.jsx)(t.code,{children:"0feca1c125f2291596dd115ff2cf720032a7098030f8aa97c164afa9ca79644e"})]}),"\n",(0,a.jsxs)(t.li,{children:["Genesis File Checksum: ",(0,a.jsx)(t.code,{children:"0x3c7d72740fbd6f840e9757feaa81a3575cabbdb0a213c1e2c1e30913b8771274"})]}),"\n",(0,a.jsxs)(t.li,{children:["Initial Block Height: ",(0,a.jsx)(t.code,{children:"2500"})]}),"\n",(0,a.jsxs)(t.li,{children:["Block Height Reached: ",(0,a.jsx)(t.code,{children:"138403"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"129467da57b781909dfef7ffefbbe82c",children:"Post Mortem"}),"\n",(0,a.jsx)(t.p,{children:"Depreciated due to planned hard fork at 4:30 PM 2021-11-06"}),"\n",(0,a.jsx)(t.h2,{id:"129467da57b781caa6c8dcfdf8504412",children:"Files"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/17bed8fb-535a-4ca0-9857-5f84c5ded601/genesis.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z3U2UV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9J73nMCIQqFli2jP39maQllfYHSCcrujDTWo6zmwCgIgJ5UHeOeTIYtzEhiCjOaBpaiVOZ98%2FnQXoyAhGZ8%2BvsUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJSzzDmabWh7Ge1seyrcA8t0MJdl4XUbCPRSVVlugb%2B%2FNKIzv80BB8kvnxNk14iPaYnnG0u%2B1s63g4%2FR9NDdsCHm5YaVaT1xHsWr%2FFA6BS9artqgl1yMycy8Yh4o71HmtXjjRNJsVCYMPStujFU%2B%2B4PPc2z%2FRi32sVVxindTTb8tVr5wUoSyQ95SAdOfNeMki8EBSFtTFVRnPBdqmVBpl4VBZJGClW%2B53yG42KhbUPxkEorlOug%2BNuf1nsYsp3lVDzVOgomf7DeOfVRbRMMUXlXEHDQ%2FGhboVWYh3nXoFYFNDLwBE3rtNVuFQ7hB%2BfLcDLDamvBDipPgbYjJVvc4AznPYAOYX2FO5sTozk2yFSgDgmMSMBgk5r9M5cFL5p4O7MClYDTVtSFTwXgqidyydA%2BWrzkGtizQKVDbaFz%2F5B3Q%2BmRN42weye9bUwhk2%2Br6G7UGm7rZ1KTb1nCZKNHfpX9W4l%2BZ1ylh8SIWqdjoEKzNv98%2BUy%2Fos5ILjlgfUianTGcMp1tl42JcXj328lGfsMqXEbv2qOmq9V2Tg5A90lOLMAyfbEobCYg%2BSO5CgXVYP2V2PX1XZ5aCUZ2zxSuBGQyQz3tZgzSWkh8EHuqBc6AymMILbJ98X2H0uyor5cpPmu3TseOsrkGe2Q4KMMHp4L4GOqUBXGmDLWbQhp8LI8xygCgAPL5maaoZhxFOH%2Fw7o%2FZtg004zBzGUAf%2FGG%2Bty47Jb1wKhj58wfpbyyZ5pZAVyxOyxcv9LyuFgIJYLvKRXSniMPg9SC3IMfmVxdstY0CqxRwI2OD9rCLDgwruza3RsSvFITwt%2FasEVCffU5SAurhjnXRTPF749cqfEO5m6D%2Fv%2Fij34cBnZ%2FJcMNOTc6iOu%2BTDDr%2FpTV%2Bm&X-Amz-Signature=7975a84fa86d983959a8542aaedcf61ebabadd332728e195c988873385f9faea&X-Amz-SignedHeaders=host&x-id=GetObject",children:"genesis.json"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/6a471bbe-3e59-4937-93c9-9b9d8e7f4ed8/valopers-start.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z3U2UV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9J73nMCIQqFli2jP39maQllfYHSCcrujDTWo6zmwCgIgJ5UHeOeTIYtzEhiCjOaBpaiVOZ98%2FnQXoyAhGZ8%2BvsUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJSzzDmabWh7Ge1seyrcA8t0MJdl4XUbCPRSVVlugb%2B%2FNKIzv80BB8kvnxNk14iPaYnnG0u%2B1s63g4%2FR9NDdsCHm5YaVaT1xHsWr%2FFA6BS9artqgl1yMycy8Yh4o71HmtXjjRNJsVCYMPStujFU%2B%2B4PPc2z%2FRi32sVVxindTTb8tVr5wUoSyQ95SAdOfNeMki8EBSFtTFVRnPBdqmVBpl4VBZJGClW%2B53yG42KhbUPxkEorlOug%2BNuf1nsYsp3lVDzVOgomf7DeOfVRbRMMUXlXEHDQ%2FGhboVWYh3nXoFYFNDLwBE3rtNVuFQ7hB%2BfLcDLDamvBDipPgbYjJVvc4AznPYAOYX2FO5sTozk2yFSgDgmMSMBgk5r9M5cFL5p4O7MClYDTVtSFTwXgqidyydA%2BWrzkGtizQKVDbaFz%2F5B3Q%2BmRN42weye9bUwhk2%2Br6G7UGm7rZ1KTb1nCZKNHfpX9W4l%2BZ1ylh8SIWqdjoEKzNv98%2BUy%2Fos5ILjlgfUianTGcMp1tl42JcXj328lGfsMqXEbv2qOmq9V2Tg5A90lOLMAyfbEobCYg%2BSO5CgXVYP2V2PX1XZ5aCUZ2zxSuBGQyQz3tZgzSWkh8EHuqBc6AymMILbJ98X2H0uyor5cpPmu3TseOsrkGe2Q4KMMHp4L4GOqUBXGmDLWbQhp8LI8xygCgAPL5maaoZhxFOH%2Fw7o%2FZtg004zBzGUAf%2FGG%2Bty47Jb1wKhj58wfpbyyZ5pZAVyxOyxcv9LyuFgIJYLvKRXSniMPg9SC3IMfmVxdstY0CqxRwI2OD9rCLDgwruza3RsSvFITwt%2FasEVCffU5SAurhjnXRTPF749cqfEO5m6D%2Fv%2Fij34cBnZ%2FJcMNOTc6iOu%2BTDDr%2FpTV%2Bm&X-Amz-Signature=283afae7857289e686755c22ed2e8c0d6049dba6da6def2fa688a66814b40356&X-Amz-SignedHeaders=host&x-id=GetObject",children:"valopers-start.json"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/9b9298f5-cbf4-4bec-899c-3eaec5278535/valopers-end.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2Z3U2UV%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCI9J73nMCIQqFli2jP39maQllfYHSCcrujDTWo6zmwCgIgJ5UHeOeTIYtzEhiCjOaBpaiVOZ98%2FnQXoyAhGZ8%2BvsUq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDJSzzDmabWh7Ge1seyrcA8t0MJdl4XUbCPRSVVlugb%2B%2FNKIzv80BB8kvnxNk14iPaYnnG0u%2B1s63g4%2FR9NDdsCHm5YaVaT1xHsWr%2FFA6BS9artqgl1yMycy8Yh4o71HmtXjjRNJsVCYMPStujFU%2B%2B4PPc2z%2FRi32sVVxindTTb8tVr5wUoSyQ95SAdOfNeMki8EBSFtTFVRnPBdqmVBpl4VBZJGClW%2B53yG42KhbUPxkEorlOug%2BNuf1nsYsp3lVDzVOgomf7DeOfVRbRMMUXlXEHDQ%2FGhboVWYh3nXoFYFNDLwBE3rtNVuFQ7hB%2BfLcDLDamvBDipPgbYjJVvc4AznPYAOYX2FO5sTozk2yFSgDgmMSMBgk5r9M5cFL5p4O7MClYDTVtSFTwXgqidyydA%2BWrzkGtizQKVDbaFz%2F5B3Q%2BmRN42weye9bUwhk2%2Br6G7UGm7rZ1KTb1nCZKNHfpX9W4l%2BZ1ylh8SIWqdjoEKzNv98%2BUy%2Fos5ILjlgfUianTGcMp1tl42JcXj328lGfsMqXEbv2qOmq9V2Tg5A90lOLMAyfbEobCYg%2BSO5CgXVYP2V2PX1XZ5aCUZ2zxSuBGQyQz3tZgzSWkh8EHuqBc6AymMILbJ98X2H0uyor5cpPmu3TseOsrkGe2Q4KMMHp4L4GOqUBXGmDLWbQhp8LI8xygCgAPL5maaoZhxFOH%2Fw7o%2FZtg004zBzGUAf%2FGG%2Bty47Jb1wKhj58wfpbyyZ5pZAVyxOyxcv9LyuFgIJYLvKRXSniMPg9SC3IMfmVxdstY0CqxRwI2OD9rCLDgwruza3RsSvFITwt%2FasEVCffU5SAurhjnXRTPF749cqfEO5m6D%2Fv%2Fij34cBnZ%2FJcMNOTc6iOu%2BTDDr%2FpTV%2Bm&X-Amz-Signature=fee8fd8ec31aad14479fbe4ad07a2fa146c1acefa1d76d703807c35060916b43&X-Amz-SignedHeaders=host&x-id=GetObject",children:"valopers-end.json"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var s=r(6540);const a={},n=s.createContext(a);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(n.Provider,{value:t},e.children)}},9329:(e,t,r)=>{r.d(t,{A:()=>o});r(6540);var s=r(8215);const a={tabItem:"tabItem_Ymn6"};var n=r(4848);function o(e){let{children:t,hidden:r,className:o}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,o),hidden:r,children:t})}}}]);