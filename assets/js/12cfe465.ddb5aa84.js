"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[6529],{2252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var s=n(5893),a=n(1151),r=n(4866),i=n(5162);const o={title:"Bash-utils",sidebar_position:1,slug:"/bash-utils"},l=void 0,u={id:"Tools/bash-utils",title:"Bash-utils",description:"https://github.com/KiraCore/tools/releases",source:"@site/tabs/Docs/Tools/bash-utils.mdx",sourceDirName:"Tools",slug:"/bash-utils",permalink:"/docs/bash-utils",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/bash-utils&page-local=tools/bash-utils.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Bash-utils",sidebar_position:1,slug:"/bash-utils"},sidebar:"defaultSidebar",previous:{title:"Cosign",permalink:"/docs/cosign"}},c={},d=[{value:"Linux",id:"437350f2feaf480b8319b68a2666e5dc",level:2},{value:"Macos",id:"fd030ddb84a245fda72e29dc7ddec525",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/KiraCore/tools/releases",children:"https://github.com/KiraCore/tools/releases"})}),"\n",(0,s.jsx)(t.p,{children:"Bash-utils is a collection of utility functions and aliases for Bash shell scripts developed specifically for KIRA to streamline and simplify the process of executing tasks within the network. It provides various functions for managing environment variables, displaying information, and handling errors."}),"\n",(0,s.jsx)(t.admonition,{type:"caution",children:(0,s.jsxs)(t.p,{children:["The prerequisite to securely install BU is ",(0,s.jsx)(t.a,{href:"/docs/cosign",children:"COSIGN tool"})," that will guarantee the integrity of the files. It MUST be installed and KIRA\u2019s public key added before proceeding."]})}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Always source /etc/profile with ",(0,s.jsx)(t.code,{children:". /etc/profile"})," when starting a new terminal to use BU."]})}),"\n",(0,s.jsxs)(r.Z,{children:[(0,s.jsxs)(i.Z,{value:"linux",label:"Linux",children:[(0,s.jsx)(t.h2,{id:"437350f2feaf480b8319b68a2666e5dc",children:"Linux"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'# assume root permissions\nsudo -s && . /etc/profile\n\n# Install essential dependencies\napt-get install -y wget\n\n# Define version of BU you want to install\nTOOLS_VERSION="v0.3.46"\n\n# Download BU script\nif [ -z "$KIRA_COSIGN_PUB" ] ; then\n  echo "ERROR: KIRA_COSIGN_PUB variable is not set. Please refer to cosign installation to add KIRA\'s public key path as variable."\n  exit\nfi && \\\ncd /tmp && FILE_NAME="bash-utils.sh" && rm -rfv ./$FILE_NAME ./${FILE_NAME}.sig && \\\n UBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36" && \\\n wget --user-agent="$UBUNTU_AGENT" "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}" -O ./$FILE_NAME && \\\n wget --user-agent="$UBUNTU_AGENT" "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}.sig" -O ./${FILE_NAME}.sig\n\n# Verify cosign release\ncosign verify-blob --key "$KIRA_COSIGN_PUB" --signature "/tmp/${FILE_NAME}.sig" "/tmp/$FILE_NAME" --insecure-ignore-tlog --insecure-ignore-sct\n\n# Install BU\nchmod +x ./$FILE_NAME && ./$FILE_NAME bashUtilsSetup && ./etc/profile\n\n# Verify version of BU \nbu bashUtilsVersion\n'})})]}),(0,s.jsxs)(i.Z,{value:"macos",label:"MacOS",children:[(0,s.jsx)(t.h2,{id:"fd030ddb84a245fda72e29dc7ddec525",children:"Macos"}),(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Unfortunately, certain commands within the bash-utils tool may not behave properly on macOS due to slight variations in command behavior, such as the 'sed' command, which exhibit differences between Mac and Linux platforms. If you wish to contribute in addressing these compatibility issues, contact us !"})}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'sudo -s && . /etc/profile\n\nTOOLS_VERSION="v0.3.46" && FILE_NAME="bash-utils.sh" && \\\nif [ -z "$KIRA_COSIGN_PUB" ] ; then\n  echo "ERROR: KIRA_COSIGN_PUB variable is not set. Please refer to cosign installation to add KIRA\'s public key path as variable."\n  exit\nfi && \\\nwget "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}" -O ./$FILE_NAME && \\\nwget "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}.sig" -O ./${FILE_NAME}.sig && \\\ncosign verify-blob --key="$KIRA_COSIGN_PUB" --signature=./${FILE_NAME}.sig ./$FILE_NAME && \\\nchmod -v 555 ./$FILE_NAME && ./$FILE_NAME bashUtilsSetup "/var/kiraglob" && . /etc/profile && \\\necho "Installed bash-utils $(bash-utils bashUtilsVersion)"\n'})})]})]})]})}function b(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var s=n(6905);const a={tabItem:"tabItem_Ymn6"};var r=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>x});var s=n(7294),a=n(6905),r=n(2466),i=n(6550),o=n(469),l=n(1980),u=n(7392),c=n(12);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:s,default:a}}=e;return{value:t,label:n,attributes:s,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,s.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=h(e),[i,l]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=n.find((e=>e.default))??n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:r}))),[u,d]=p({queryString:n,groupId:a}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,s.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),g=(()=>{const e=u??f;return b({value:e,tabValues:r})?e:null})();(0,o.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,s.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var m=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function I(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==s&&(u(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...r,className:(0,a.Z)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===t}),children:n??t},t)}))})}function E(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function _(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(I,{...e,...t}),(0,v.jsx)(E,{...e,...t})]})}function x(e){const t=(0,m.Z)();return(0,v.jsx)(_,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>i});var s=n(7294);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);