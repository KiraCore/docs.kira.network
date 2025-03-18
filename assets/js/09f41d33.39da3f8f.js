"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[5857],{5537:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(6540),a=n(8215),s=n(5627),o=n(6347),i=n(372),l=n(604),c=n(1861),u=n(8749);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=b({queryString:n,groupId:a}),[h,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),A=(()=>{const e=c??h;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{A&&l(A)}),[A]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=n(9136);const A={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var F=n(4848);function w(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=i[n].value;a!==r&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,F.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,F.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>{l.push(e)},onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",A.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,F.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function x(e){const t=h(e);return(0,F.jsxs)("div",{className:(0,a.A)("tabs-container",A.tabList),children:[(0,F.jsx)(w,{...t,...e}),(0,F.jsx)(j,{...t,...e})]})}function g(e){const t=(0,f.A)();return(0,F.jsx)(x,{...e,children:d(e.children)},String(t))}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}},9329:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var r=n(8215);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,o),hidden:n,children:t})}},9458:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"resources/testnet-servers/testnet-8","title":"testnet-8","description":"Description","source":"@site/tabs/node-operators/resources/testnet-servers/testnet-8.mdx","sourceDirName":"resources/testnet-servers","slug":"/resources/testnet-servers/testnet-8","permalink":"/node-operators/resources/testnet-servers/testnet-8","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/node-operators/resources/testnet-servers/testnet-8&page-local=resources/testnet-servers/testnet-8.mdx","tags":[],"version":"current","lastUpdatedAt":1742267078000,"sidebarPosition":8,"frontMatter":{"title":"testnet-8","sidebar_position":8,"slug":"testnet-8"},"sidebar":"defaultSidebar","previous":{"title":"testnet-5","permalink":"/node-operators/resources/testnet-servers/testnet-5"},"next":{"title":"testnet-4","permalink":"/node-operators/resources/testnet-servers/testnet-4"}}');var a=n(4848),s=n(8453);n(5537),n(9329);const o={title:"testnet-8",sidebar_position:8,slug:"testnet-8"},i=void 0,l={},c=[{value:"Description",id:"129467da57b781a18d88e88c04147f4a",level:2},{value:"Post Mortem",id:"129467da57b781e58891ee632ed8d021",level:2},{value:"Files",id:"129467da57b781e1b3fcf029b7cd464f",level:2}];function u(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h2,{id:"129467da57b781a18d88e88c04147f4a",children:"Description"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Chain Identifier: ",(0,a.jsx)(t.code,{children:"testnet-8"})]}),"\n",(0,a.jsxs)(t.li,{children:["KIRA Manager Checksum: ",(0,a.jsx)(t.code,{children:"0feca1c125f2291596dd115ff2cf720032a7098030f8aa97c164afa9ca79644e"})]}),"\n",(0,a.jsxs)(t.li,{children:["Genesis File Checksum: ",(0,a.jsx)(t.code,{children:"0x8b688297b8a6f0ce9924eb163a4c254dfe647fe1b0c0d891cff9457869e650b7"})]}),"\n",(0,a.jsxs)(t.li,{children:["Initial Block Height: ",(0,a.jsx)(t.code,{children:"138403"})]}),"\n",(0,a.jsxs)(t.li,{children:["Block Height Reached: ",(0,a.jsx)(t.code,{children:"920527"})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"129467da57b781e58891ee632ed8d021",children:"Post Mortem"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Testnet was expected to be depreciated due to planned hard fork at 4:30 PM 2022-01-07."}),"\n",(0,a.jsxs)(t.li,{children:["During generation of the new genesis file, export tool failed to convert ",(0,a.jsx)(t.code,{children:"proposal_end_time"})," into ",(0,a.jsx)(t.code,{children:"minimum_proposal_end_time"})," and ",(0,a.jsx)(t.code,{children:"jail_max_time"})," into ",(0,a.jsx)(t.code,{children:"unjail_max_time"}),", resulting in the ",(0,a.jsx)(t.code,{children:'panic: unknown field "proposal_end_time" & "jail_max_time" in types.NetworkProperties'})," exception and failure to successfully start SEKAI process."]}),"\n",(0,a.jsxs)(t.li,{children:["After manually fixing network properties in genesis, new issue was found were old proposals become incompatible with the new version of the chain resulting in ",(0,a.jsx)(t.code,{children:'panic: can\'t unmarshal Any nested proto *types.SetNetworkPropertyProposal: unknown value "PROPOSAL_END_TIME" for enum kira.gov.NetworkProperty'})]}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"129467da57b781e1b3fcf029b7cd464f",children:"Files"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/cd34a624-3b15-4cb1-83a9-3c4886be4430/genesis.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G4UEDJW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BCzeWQUPm%2Fz%2FRqHi3z47MpPeIAiYILHPoKLJQazdasAiEAwVGVqukAtinltw49G7CC7NaE0uzyDr1zumnIBJ0UiNkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGayXtH%2BT%2BeLotzbQircA68xnOnLce772Om9c3mKIBgkkjniZh8umXN5mCPVtHO9vVSbfUmRHBP5a3hzeI5cw1WA5fJdvY%2FqC5jjZobdcBOD%2Bq2rlENpS%2BuUNPhGz2QUl%2F0YLB4m1YjGJ%2FdjGU0RiKODiHWCeVCt5N%2FVR9S0Uj%2FzA7PU3wZC4tFShs%2F03kY0SRLda%2BT9%2FOmXmrR%2FfN2p%2F4pkUrRJZg8CkByn3CHxyKAzWxgoPPxQSemZR6vFccuKC40w87EDWa5o%2Fm2w800zVlN9C8qGbsCW479lRhg99DYtTxcpmGz7wRjbS29aVFLjV%2BXv2Igx2x1EFIlct3TZuw5LJn9QjBOlyX2lKUiL93Y8HY6H17exIt8XF5q1KMvgTCjoARBO65rgxad4yO%2BAA8Mb1HO5y4grM%2Fsydg8e0fdptKYbB1u3aXtm1Swaw8G6d%2Bb%2BlPQm08IPtFuTMugY4668uMVrUw8hSOGbSVmVa2e%2FQjdQWaHiBlwB21dLvyQGlXXUlsEGj79i96EZtSj%2BXVwiQym9d%2BHbAo7GgmUNYYc6nrw0zJrX%2BLAGTa2r2YDY%2F7HR0N1E0QkPZIQSM%2BdP0sQdNZIwOx4vM2bSKnQXJrpPoPJrIHp1pTUdPuyiLFhtA4tXaiiTjLZNP8Q1MKTp4L4GOqUByoivWP%2FoHrW9W4iagy9VRuTTEGG7%2BfenqZ9pAtzD3ne8JM696nQ9jH5aclUClkNoJpDnYsou1D4DqdDqJLe3h0Ss5JSJ7M%2F59iSnloj7OaHWiX8neSF7lRl%2BeVArP4PqF1VdApxDclSSb6YnxE6laboo5zGAoKgC4mq%2F%2BMqN3kSNubbxoAwwN6esJv1eZG0Oqf1Kdzgm%2B5A5wX4rpdMnZ%2B05LTiC&X-Amz-Signature=0e40231d73e44f374582f7c2e457def01003e01aec9acce528531853c685d71b&X-Amz-SignedHeaders=host&x-id=GetObject",children:"genesis.json"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/e760d76c-a924-4982-8abc-f779e0952dff/valopers-airdrop-snap.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G4UEDJW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BCzeWQUPm%2Fz%2FRqHi3z47MpPeIAiYILHPoKLJQazdasAiEAwVGVqukAtinltw49G7CC7NaE0uzyDr1zumnIBJ0UiNkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGayXtH%2BT%2BeLotzbQircA68xnOnLce772Om9c3mKIBgkkjniZh8umXN5mCPVtHO9vVSbfUmRHBP5a3hzeI5cw1WA5fJdvY%2FqC5jjZobdcBOD%2Bq2rlENpS%2BuUNPhGz2QUl%2F0YLB4m1YjGJ%2FdjGU0RiKODiHWCeVCt5N%2FVR9S0Uj%2FzA7PU3wZC4tFShs%2F03kY0SRLda%2BT9%2FOmXmrR%2FfN2p%2F4pkUrRJZg8CkByn3CHxyKAzWxgoPPxQSemZR6vFccuKC40w87EDWa5o%2Fm2w800zVlN9C8qGbsCW479lRhg99DYtTxcpmGz7wRjbS29aVFLjV%2BXv2Igx2x1EFIlct3TZuw5LJn9QjBOlyX2lKUiL93Y8HY6H17exIt8XF5q1KMvgTCjoARBO65rgxad4yO%2BAA8Mb1HO5y4grM%2Fsydg8e0fdptKYbB1u3aXtm1Swaw8G6d%2Bb%2BlPQm08IPtFuTMugY4668uMVrUw8hSOGbSVmVa2e%2FQjdQWaHiBlwB21dLvyQGlXXUlsEGj79i96EZtSj%2BXVwiQym9d%2BHbAo7GgmUNYYc6nrw0zJrX%2BLAGTa2r2YDY%2F7HR0N1E0QkPZIQSM%2BdP0sQdNZIwOx4vM2bSKnQXJrpPoPJrIHp1pTUdPuyiLFhtA4tXaiiTjLZNP8Q1MKTp4L4GOqUByoivWP%2FoHrW9W4iagy9VRuTTEGG7%2BfenqZ9pAtzD3ne8JM696nQ9jH5aclUClkNoJpDnYsou1D4DqdDqJLe3h0Ss5JSJ7M%2F59iSnloj7OaHWiX8neSF7lRl%2BeVArP4PqF1VdApxDclSSb6YnxE6laboo5zGAoKgC4mq%2F%2BMqN3kSNubbxoAwwN6esJv1eZG0Oqf1Kdzgm%2B5A5wX4rpdMnZ%2B05LTiC&X-Amz-Signature=0ba06f803c26c4907c18c2dc4e1bc818a31a367a66da205b1d7e5278d1ac2b2c&X-Amz-SignedHeaders=host&x-id=GetObject",children:"valopers-airdrop-snap.json"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/9b5bfc45-bdb5-4b46-80e6-aabe3cae64d0/1b221e68-6ef6-4068-808d-6f56c83b7f9d/votes-upgrade-proposal.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665G4UEDJW%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T150131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH%2BCzeWQUPm%2Fz%2FRqHi3z47MpPeIAiYILHPoKLJQazdasAiEAwVGVqukAtinltw49G7CC7NaE0uzyDr1zumnIBJ0UiNkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDGayXtH%2BT%2BeLotzbQircA68xnOnLce772Om9c3mKIBgkkjniZh8umXN5mCPVtHO9vVSbfUmRHBP5a3hzeI5cw1WA5fJdvY%2FqC5jjZobdcBOD%2Bq2rlENpS%2BuUNPhGz2QUl%2F0YLB4m1YjGJ%2FdjGU0RiKODiHWCeVCt5N%2FVR9S0Uj%2FzA7PU3wZC4tFShs%2F03kY0SRLda%2BT9%2FOmXmrR%2FfN2p%2F4pkUrRJZg8CkByn3CHxyKAzWxgoPPxQSemZR6vFccuKC40w87EDWa5o%2Fm2w800zVlN9C8qGbsCW479lRhg99DYtTxcpmGz7wRjbS29aVFLjV%2BXv2Igx2x1EFIlct3TZuw5LJn9QjBOlyX2lKUiL93Y8HY6H17exIt8XF5q1KMvgTCjoARBO65rgxad4yO%2BAA8Mb1HO5y4grM%2Fsydg8e0fdptKYbB1u3aXtm1Swaw8G6d%2Bb%2BlPQm08IPtFuTMugY4668uMVrUw8hSOGbSVmVa2e%2FQjdQWaHiBlwB21dLvyQGlXXUlsEGj79i96EZtSj%2BXVwiQym9d%2BHbAo7GgmUNYYc6nrw0zJrX%2BLAGTa2r2YDY%2F7HR0N1E0QkPZIQSM%2BdP0sQdNZIwOx4vM2bSKnQXJrpPoPJrIHp1pTUdPuyiLFhtA4tXaiiTjLZNP8Q1MKTp4L4GOqUByoivWP%2FoHrW9W4iagy9VRuTTEGG7%2BfenqZ9pAtzD3ne8JM696nQ9jH5aclUClkNoJpDnYsou1D4DqdDqJLe3h0Ss5JSJ7M%2F59iSnloj7OaHWiX8neSF7lRl%2BeVArP4PqF1VdApxDclSSb6YnxE6laboo5zGAoKgC4mq%2F%2BMqN3kSNubbxoAwwN6esJv1eZG0Oqf1Kdzgm%2B5A5wX4rpdMnZ%2B05LTiC&X-Amz-Signature=d1025ab1f25b9dd1cd87215b7dc50f687a17347187b4beaa860c2e0506966865&X-Amz-SignedHeaders=host&x-id=GetObject",children:"votes-upgrade-proposal.json"})})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}}}]);