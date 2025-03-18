"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[7749],{5537:(e,t,r)=>{r.d(t,{A:()=>E});var s=r(6540),a=r(8215),n=r(5627),i=r(6347),l=r(372),o=r(604),u=r(1861),c=r(8749);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:a}}=e;return{value:t,label:r,attributes:s,default:a}}))}(r);return function(e){const t=(0,u.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:r}=e;const a=(0,i.W6)(),n=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o.aZ)(n),(0,s.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,n=h(e),[i,o]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:n}))),[u,d]=b({queryString:r,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,c.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&n.set(e)}),[r,n])]}({groupId:a}),g=(()=>{const e=u??f;return p({value:e,tabValues:n})?e:null})();(0,l.A)((()=>{g&&o(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),m(e)}),[d,m,n]),tabValues:n}}var m=r(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function y(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,n.a_)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),a=l[r].value;a!==s&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:n}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>{o.push(e)},onKeyDown:d,onClick:c,...n,className:(0,a.A)("tabs__item",g.tabItem,n?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function I(e){let{lazy:t,children:r,selectedValue:n}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,v.jsx)(y,{...t,...e}),(0,v.jsx)(I,{...t,...e})]})}function E(e){const t=(0,m.A)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},7547:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"resources/tools-&-security/bash-utils-(deprecated)","title":"Bash Utils (Deprecated)","description":"With the deprecation of KIRA Manager (KM), Bash Utils is also being deprecated. This documentation remains for internal purposes or for those who still prefer using Bash Utils locally.","source":"@site/tabs/node-operators/resources/tools-&-security/bash-utils-(deprecated).mdx","sourceDirName":"resources/tools-&-security","slug":"/resources/tools-&-security/bash-utils-deprecated","permalink":"/node-operators/resources/tools-&-security/bash-utils-deprecated","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/node-operators/resources/tools-&-security/bash-utils-deprecated&page-local=resources/tools-&-security/bash-utils-(deprecated).mdx","tags":[],"version":"current","lastUpdatedAt":1739294998000,"sidebarPosition":3,"frontMatter":{"title":"Bash Utils (Deprecated)","sidebar_position":3,"slug":"bash-utils-deprecated"},"sidebar":"defaultSidebar","previous":{"title":"WSL2 Support","permalink":"/node-operators/resources/tools-&-security/wsl2-support"},"next":{"title":"Testnet Servers","permalink":"/node-operators/resources/testnet-servers/testnet-servers"}}');var a=r(4848),n=r(8453);r(5537),r(9329);const i={title:"Bash Utils (Deprecated)",sidebar_position:3,slug:"bash-utils-deprecated"},l=void 0,o={},u=[{value:"Secure Installation",id:"180467da57b7805da64edade4cfadb72",level:3},{value:"Ensure KIRA Public Key Availability",id:"180467da57b7800eb932c100d79573bf",level:4},{value:"Download Bash Utils and Signature",id:"180467da57b780a08405cbf15910eee9",level:4},{value:"Verify the Script",id:"180467da57b78045b329e4b2ae3265ab",level:4},{value:"Install Bash Utils",id:"180467da57b780f9af0bc68673bb2a31",level:4},{value:"Verify Installation",id:"180467da57b78015be92e24dcf863d7e",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"With the deprecation of KIRA Manager (KM), Bash Utils is also being deprecated. This documentation remains for internal purposes or for those who still prefer using Bash Utils locally."})}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:["The prerequisite to securely install BU is ",(0,a.jsx)(t.a,{href:"/node-operators/resources/tools-&-security/cosign",children:"COSIGN"})," that will guarantee the integrity of the files you want to download, you MUST install it before proceeding."]})}),"\n",(0,a.jsx)(t.p,{children:"Bash Utils (BU) is a lightweight bash script designed to simplify interactions with SEKAI and KM and streamline other bash-related tasks. This guide provides two installation methods: a simplified setup and a secure setup with signature verification."}),"\n",(0,a.jsx)(t.h3,{id:"180467da57b7805da64edade4cfadb72",children:"Secure Installation"}),"\n",(0,a.jsx)(t.h4,{id:"180467da57b7800eb932c100d79573bf",children:"Ensure KIRA Public Key Availability"}),"\n",(0,a.jsxs)(t.p,{children:["Check if the KIRA public key is already saved. If not, follow the ",(0,a.jsx)(t.a,{href:"/node-operators/resources/tools-&-security/cosign",children:"COSIGN"})," page to install COSIGN and save KIRA\u2019s cosign public key."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'KIRA_COSIGN_PUB=/usr/keys/kira-cosign.pub\nif [ ! -f "$KIRA_COSIGN_PUB" ]; then\n  echo "ERROR: KIRA public key not found. Please refer to the COSIGN setup guide to save the key."\n  exit 1\nfi\n'})}),"\n",(0,a.jsx)(t.h4,{id:"180467da57b780a08405cbf15910eee9",children:"Download Bash Utils and Signature"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'TOOLS_VERSION="v0.3.42"  # Specify the BU version\nFILE_NAME="bash-utils.sh"\nUBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"\n\ncd /tmp\nrm -rfv ./$FILE_NAME ./${FILE_NAME}.sig\nwget --user-agent="$UBUNTU_AGENT" "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/$FILE_NAME" -O ./$FILE_NAME\nwget --user-agent="$UBUNTU_AGENT" "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}.sig" -O ./${FILE_NAME}.sig\n'})}),"\n",(0,a.jsx)(t.h4,{id:"180467da57b78045b329e4b2ae3265ab",children:"Verify the Script"}),"\n",(0,a.jsx)(t.p,{children:"Use the COSIGN tool to verify the downloaded script:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:'cosign verify-blob \\\n  --key "$KIRA_COSIGN_PUB" \\\n  --signature "/tmp/${FILE_NAME}.sig" \\\n  "/tmp/$FILE_NAME" \\\n  --insecure-ignore-tlog --insecure-ignore-sct\n'})}),"\n",(0,a.jsx)(t.h4,{id:"180467da57b780f9af0bc68673bb2a31",children:"Install Bash Utils"}),"\n",(0,a.jsx)(t.p,{children:"Run the installer script after verification:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"chmod +x ./$FILE_NAME\n./$FILE_NAME bashUtilsSetup && ./etc/profile\n"})}),"\n",(0,a.jsx)(t.h4,{id:"180467da57b78015be92e24dcf863d7e",children:"Verify Installation"}),"\n",(0,a.jsx)(t.p,{children:"Confirm the installed version of Bash Utils:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-shell",children:"bu bashUtilsVersion\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>l});var s=r(6540);const a={},n=s.createContext(a);function i(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(n.Provider,{value:t},e.children)}},9329:(e,t,r)=>{r.d(t,{A:()=>i});r(6540);var s=r(8215);const a={tabItem:"tabItem_Ymn6"};var n=r(4848);function i(e){let{children:t,hidden:r,className:i}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:r,children:t})}}}]);