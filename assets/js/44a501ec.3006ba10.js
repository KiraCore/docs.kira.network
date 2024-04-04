"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8186],{4062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(5893),r=n(1151);n(4866),n(5162);const s={title:"BU Setup",sidebar_position:7,slug:"/085fa60c-91e1-448a-a11d-44b5221332e0"},o=void 0,i={id:"bu-setup",title:"BU Setup",description:"Bash Utils (BU) is a simple bash script that will make it easy and convenient for you to interact with KM and simplify many other bash related tasks and interactions.",source:"@site/tabs/Testnet/bu-setup.mdx",sourceDirName:".",slug:"/085fa60c-91e1-448a-a11d-44b5221332e0",permalink:"/testnet/085fa60c-91e1-448a-a11d-44b5221332e0",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/testnet/085fa60c-91e1-448a-a11d-44b5221332e0&page-local=bu-setup.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"BU Setup",sidebar_position:7,slug:"/085fa60c-91e1-448a-a11d-44b5221332e0"},sidebar:"defaultSidebar",previous:{title:"COSIGN Setup",permalink:"/testnet/442bf26d-c72a-4548-acf1-2cf9d3c8fa31"}},l={},u=[];function c(e){const t={a:"a",code:"code",em:"em",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Bash Utils (BU) is a simple bash script that will make it easy and convenient for you to interact with KM and simplify many other bash related tasks and interactions."}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"NOTE: The prerequisite to securely install BU is"})," ",(0,a.jsx)(t.a,{href:"/testnet/442bf26d-c72a-4548-acf1-2cf9d3c8fa31",children:(0,a.jsx)(t.em,{children:"COSIGN tool"})})," ",(0,a.jsx)(t.em,{children:"that will guarantee the integrity of the files you want to download, you MUST install it before proceeding."})]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Simplified Setup Example"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# assume root permissions\nsudo -s\n\n# Install essential dependencies\napt-get install -y wget\n\n# Define version of BU you want to install\nTOOLS_VERSION="v0.3.42"\n\n# Download and install BU\nFILE_NAME="bash-utils.sh" && \\\n UBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36" && \\\n wget --user-agent="$UBUNTU_AGENT" "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}" -O ./$FILE_NAME && \\\n chmod +x ./$FILE_NAME && ./$FILE_NAME bashUtilsSetup && ./etc/profile\n\n# Verify version of BU \nbu bashUtilsVersion\n\n# NOTE: The COSIGN tool is automatically installsed or updated by BU if it was not present or if the version of COSIGN is lower then v2.0.0\ncosign version\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Secure Setup Example"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# assume root permissions\nsudo -s\n\n# Install essential dependencies\napt-get -y wget\n\n# Define version of BU you want to install\nTOOLS_VERSION="v0.3.42"\n\n# Save KIRA public key allowing to verify signed releases\nKIRA_COSIGN_PUB=/usr/keys/kira-cosign.pub && mkdir -p /usr/keys && \\\n cat > $KIRA_COSIGN_PUB << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/IrzBQYeMwvKa44/DF/HB7XDpnE+\nf+mU9F/Qbfq25bBWV2+NlYMJv3KvKHNtu3Jknt6yizZjUV4b8WGfKBzFYw==\n-----END PUBLIC KEY-----\nEOL\n\n# Download BU script\ncd /tmp && FILE_NAME="bash-utils.sh" && rm -rfv ./$FILE_NAME ./${FILE_NAME}.sig && \\\n UBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36" && \\\n wget --user-agent="$UBUNTU_AGENT" "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}" -O ./$FILE_NAME && \\\n wget --user-agent="$UBUNTU_AGENT" "https://github.com/KiraCore/tools/releases/download/$TOOLS_VERSION/${FILE_NAME}.sig" -O ./${FILE_NAME}.sig\n\n# Verify cosign release\ncosign verify-blob --key "$KIRA_COSIGN_PUB" --signature "/tmp/${FILE_NAME}.sig" "/tmp/$FILE_NAME" --insecure-ignore-tlog --insecure-ignore-sct\n\n# Install BU\nchmod +x ./$FILE_NAME && ./$FILE_NAME bashUtilsSetup && ./etc/profile\n\n# Verify version of BU \nbu bashUtilsVersion\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7294),r=n(6905),s=n(2466),o=n(6550),i=n(469),l=n(1980),u=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function f(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=p(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=h({queryString:n,groupId:r}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),g=(()=>{const e=u??b;return f({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!f({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var E=n(5893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,E.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,E.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function I(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,E.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function N(e){const t=b(e);return(0,E.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,E.jsx)(v,{...e,...t}),(0,E.jsx)(I,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,E.jsx)(N,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(7294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);