"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[9657],{5556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(5893),r=n(1151);n(4866),n(5162);const s={title:"COSIGN Setup",sidebar_position:6,slug:"/442bf26d-c72a-4548-acf1-2cf9d3c8fa31"},o=void 0,i={id:"cosign-setup",title:"COSIGN Setup",description:"All KIRA Release Files are signed using sigstore cosign tool, you will need to install and verify integrity of that tool in order to securely interact with any testnet tools.",source:"@site/tabs/Testnet/cosign-setup.mdx",sourceDirName:".",slug:"/442bf26d-c72a-4548-acf1-2cf9d3c8fa31",permalink:"/testnet/442bf26d-c72a-4548-acf1-2cf9d3c8fa31",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/testnet/442bf26d-c72a-4548-acf1-2cf9d3c8fa31&page-local=cosign-setup.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"COSIGN Setup",sidebar_position:6,slug:"/442bf26d-c72a-4548-acf1-2cf9d3c8fa31"},sidebar:"defaultSidebar",previous:{title:"WSL2 Support",permalink:"/testnet/fc224b7a-3406-46db-ad7a-5c179d06703c"},next:{title:"BU Setup",permalink:"/testnet/085fa60c-91e1-448a-a11d-44b5221332e0"}},l={},u=[];function c(e){const t={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["All KIRA Release Files are signed using ",(0,a.jsx)(t.a,{href:"https://github.com/sigstore/cosign",children:"sigstore cosign tool"}),", you will need to install and verify integrity of that tool in order to securely interact with any testnet tools."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Secure Setup Example"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'\n# assume root permissions\nsudo -s\n\n# Install essential dependencies\napt-get install -y wget\n\n# Download Cosign\nCOSIGN_VERSION="v2.0.0" && \\\nUBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36" && \\\nif [[ "$(uname -m)" == *"ar"* ]] ; then ARCH="arm64"; else ARCH="amd64" ; fi && \\\n cd /tmp && PLATFORM=$(uname) && declare -l FILE="cosign-${PLATFORM}-${ARCH}" && rm -rfv ./$FILE ./${FILE}.sig && \\\n wget --user-agent="$UBUNTU_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/$FILE -O ./$FILE && \\\n wget --user-agent="$UBUNTU_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/${FILE}.sig -O ./${FILE}.sig\n\n# If you do NOT have cosign installed already you should check that the "$FILE" has one of the below hashes \n# Hashes are only for the \'linux\' platform, for other platforms please refer to the github repository\nCOSIGN_HASH_ARM="8132cb2fb99a4c60ba8e03b079e12462c27073028a5d08c07ecda67284e0c88d" && \\\nCOSIGN_HASH_AMD="169a53594c437d53ffc401b911b7e70d453f5a2c1f96eb2a736f34f6356c4f2b" && \\\nFILE_HASH=$(sha256sum ./$FILE | awk \'{ print $1 }\' | xargs || echo -n "") && \\\nif [ "$FILE_HASH" != "$COSIGN_HASH_ARM" ] && [ "$FILE_HASH" != "$COSIGN_HASH_AMD" ] ; then\n    echoErr "ERROR: Failed to download cosign tool, expected checksum to be \'$COSIGN_HASH_ARM\' or \'$COSIGN_HASH_AMD\', but got \'$FILE_HASH\'"\n    exit 1\nfi\n\n# Move cosign to bin directory\nchmod +x -v ./$FILE && mv -fv ./$FILE /usr/local/bin/cosign \n\n# Check cosign version\ncosign version\n\n# Save public key\ncat > ./sigstore-cosign.pub << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEhyQCx0E9wQWSFI9ULGwy3BuRklnt\nIqozONbbdbqz11hlRJy9c7SG+hdcFl9jE9uE/dwtuwU2MqU9T/cN0YkWww==\n-----END PUBLIC KEY-----\nEOL\n\n# Verify cosign release\ncosign verify-blob --key="./sigstore-cosign.pub" --signature="./${FILE}.sig"  "./$FILE"\n'})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var a=n(6905);const r={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var a=n(7294),r=n(6905),s=n(2466),o=n(6550),i=n(469),l=n(1980),u=n(7392),c=n(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function f(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=f(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=b({queryString:n,groupId:r}),[h,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),m=(()=>{const e=u??h;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(2389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var I=n(5893);function v(e){let{className:t,block:n,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=i[n].value;r!==a&&(u(t),o(r))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,I.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,I.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,r.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function E(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,I.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function S(e){const t=h(e);return(0,I.jsxs)("div",{className:(0,r.Z)("tabs-container",m.tabList),children:[(0,I.jsx)(v,{...e,...t}),(0,I.jsx)(E,{...e,...t})]})}function y(e){const t=(0,g.Z)();return(0,I.jsx)(S,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var a=n(7294);const r={},s=a.createContext(r);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);