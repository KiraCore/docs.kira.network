"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8580],{5425:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(5893),a=t(1151),o=t(4866),r=t(5162);const i={title:"Cosign",sidebar_position:0,slug:"cosign"},l=void 0,c={id:"tools/cosign",title:"Cosign",description:"Cosign",source:"@site/tabs/docs/tools/cosign.mdx",sourceDirName:"tools",slug:"/tools/cosign",permalink:"/docs/tools/cosign",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/tools/cosign&page-local=tools/cosign.mdx",tags:[],version:"current",lastUpdatedAt:1716175504,formattedLastUpdatedAt:"May 20, 2024",sidebarPosition:0,frontMatter:{title:"Cosign",sidebar_position:0,slug:"cosign"},sidebar:"defaultSidebar",previous:{title:"How to Bridge ?",permalink:"/docs/bridge---torii/how-to-bridge-"},next:{title:"Bash-utils",permalink:"/docs/tools/bash-utils"}},u={},d=[{value:"Cosign",id:"faa8ba9b83214b5da78e490484eac301",level:3},{value:"Linux",id:"f93ac041ccba411091571fe5e8875c20",level:2},{value:"Macos",id:"117db8dd77564de1896b82e210f453fb",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"faa8ba9b83214b5da78e490484eac301",children:"Cosign"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/sigstore/cosign",children:"https://github.com/sigstore/cosign"})}),"\n",(0,s.jsxs)(n.p,{children:["All KIRA Release Files are signed using ",(0,s.jsx)(n.a,{href:"https://github.com/sigstore/cosign",children:"sigstore cosign tool"}),". Cosign is a digital signature utility that is used to verify the authenticity and integrity of a file. When a file is signed with a digital signature, it provides a way to verify that the file has not been tampered with, and also to verify the identity of the person or entity who signed the file. It is used in Kira to sign and verify the authenticity of data, such as proprietary tools, binaries and scripts."]}),"\n",(0,s.jsxs)(o.Z,{children:[(0,s.jsxs)(r.Z,{value:"linux",label:"Linux",children:[(0,s.jsx)(n.h2,{id:"f93ac041ccba411091571fe5e8875c20",children:"Linux"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Assume root permissions\nsudo -s\n\n# Install essential dependencies\napt-get install -y wget\n\n# Download Cosign\nCOSIGN_VERSION="v2.0.0" && \\\nUBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36" && \\\nif [[ "$(uname -m)" == *"ar"* ]] ; then ARCH="arm64"; else ARCH="amd64" ; fi && \\\n cd /tmp && PLATFORM=$(uname) && declare -l FILE="cosign-${PLATFORM}-${ARCH}" && rm -rfv ./$FILE ./${FILE}.sig && \\\n wget --user-agent="$UBUNTU_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/$FILE -O ./$FILE && \\\n wget --user-agent="$UBUNTU_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/${FILE}.sig -O ./${FILE}.sig\n\n# If you do NOT have cosign installed already you should check that the "$FILE" has one of the below hashes \n# Hashes are only for the \'linux\' platform, for other platforms please refer to the github repository\nCOSIGN_HASH_ARM="8132cb2fb99a4c60ba8e03b079e12462c27073028a5d08c07ecda67284e0c88d" && \\\nCOSIGN_HASH_AMD="169a53594c437d53ffc401b911b7e70d453f5a2c1f96eb2a736f34f6356c4f2b" && \\\nFILE_HASH=$(sha256sum ./$FILE | awk \'{ print $1 }\' | xargs || echo -n "") && \\\nif [ "$FILE_HASH" != "$COSIGN_HASH_ARM" ] && [ "$FILE_HASH" != "$COSIGN_HASH_AMD" ] ; then\n    echoErr "ERROR: Failed to download cosign tool, expected checksum to be \'$COSIGN_HASH_ARM\' or \'$COSIGN_HASH_AMD\', but got \'$FILE_HASH\'"\n    exit 1\nelse\n    echo "Cosign tool downloaded successfully."\nfi\n\n# Save cosign public key\ncat > ./sigstore-cosign.pub << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEhyQCx0E9wQWSFI9ULGwy3BuRklnt\nIqozONbbdbqz11hlRJy9c7SG+hdcFl9jE9uE/dwtuwU2MqU9T/cN0YkWww==\n-----END PUBLIC KEY-----\nEOL\n\n# Verify cosign release\ncosign verify-blob --key="./sigstore-cosign.pub" --signature="./${FILE}.sig"  "./$FILE"\n\n# Move cosign to bin directory\nchmod +x -v ./$FILE && mv -fv ./$FILE /usr/local/bin/cosign \n\n# Check cosign version\ncosign version\n'})}),(0,s.jsx)(n.p,{children:"Add KIRA\u2019s public key"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Save KIRA public key allowing to verify signed releases\nKIRA_COSIGN_PUB=/usr/keys/kira-cosign.pub && mkdir -p /usr/keys && \\\n cat > $KIRA_COSIGN_PUB << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/IrzBQYeMwvKa44/DF/HB7XDpnE+\nf+mU9F/Qbfq25bBWV2+NlYMJv3KvKHNtu3Jknt6yizZjUV4b8WGfKBzFYw==\n-----END PUBLIC KEY-----\nEOL\n\n# Add key to env\necho "export KIRA_COSIGN_PUB=\\"$KIRA_COSIGN_PUB\\"" >> /etc/profile\n'})})]}),(0,s.jsxs)(r.Z,{value:"macos",label:"MacOS",children:[(0,s.jsx)(n.h2,{id:"117db8dd77564de1896b82e210f453fb",children:"Macos"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Install essential dependencies\nbrew install wget\n\n# Download Cosign\nCOSIGN_VERSION="v2.0.0" && \\\nMAC_AGENT="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36" && \\\nif [[ "$(uname -m)" == *"ar"* ]] ; then ARCH="arm64"; else ARCH="amd64" ; fi && \\\n cd /tmp && PLATFORM=$(uname) && declare -l FILE="cosign-${PLATFORM}-${ARCH}" && rm -rfv ./$FILE ./${FILE}.sig && \\\n wget --user-agent="$MAC_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/$FILE -O ./$FILE && \\\n wget --user-agent="$MAC_AGENT" https://github.com/sigstore/cosign/releases/download/${COSIGN_VERSION}/${FILE}.sig -O ./${FILE}.sig\n\n# If you do NOT have cosign installed already you should check that the "$FILE" has one of the below hashes \n# Hashes are only for the \'mac\' platform, for other platforms please refer to the github repository\nCOSIGN_HASH_ARM="9d7821e1c05da4b07513729cb00d1070c9a95332c66d90fa593ed77d8c72ca2a" && \\\nCOSIGN_HASH_AMD="d2c8fc0edb42a1e9745da1c43a2928cee044f3b8a1b8df64088a384c7e6f5b5d" && \\\nFILE_HASH=$(shasum -a 256 ./$FILE | awk \'{ print $1 }\' | xargs || echo -n "") && \\\nif [ "$FILE_HASH" != "$COSIGN_HASH_ARM" ] && [ "$FILE_HASH" != "$COSIGN_HASH_AMD" ] ; then\n    echo "ERROR: Failed to download cosign tool, expected checksum to be \'$COSIGN_HASH_ARM\' or \'$COSIGN_HASH_AMD\', but got \'$FILE_HASH\'"\n    exit 1\nelse\n    echo "Cosign tool downloaded successfully."\nfi\n\n# Save cosign public key\ncat > ./sigstore-cosign.pub << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEhyQCx0E9wQWSFI9ULGwy3BuRklnt\nIqozONbbdbqz11hlRJy9c7SG+hdcFl9jE9uE/dwtuwU2MqU9T/cN0YkWww==\n-----END PUBLIC KEY-----\nEOL\n\n# Verify cosign release\ncosign verify-blob --key="./sigstore-cosign.pub" --signature="./${FILE}.sig"  "./$FILE"\n\n# Move cosign to bin directory\nchmod +x ./$FILE && mv -fv ./$FILE /usr/local/bin/cosign \n\n# Check cosign version\ncosign version\n'})}),(0,s.jsx)(n.p,{children:"Add KIRA\u2019s public key"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'# Save KIRA public key allowing to verify signed releases\nKIRA_COSIGN_PUB="$HOME/keys/kira-cosign.pub" && mkdir -p $HOME/keys && \\\n cat > $KIRA_COSIGN_PUB << EOL\n-----BEGIN PUBLIC KEY-----\nMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAE/IrzBQYeMwvKa44/DF/HB7XDpnE+\nf+mU9F/Qbfq25bBWV2+NlYMJv3KvKHNtu3Jknt6yizZjUV4b8WGfKBzFYw==\n-----END PUBLIC KEY-----\nEOL\n\n# Add key to env\necho "export KIRA_COSIGN_PUB=\\"$KIRA_COSIGN_PUB\\"" >> /etc/profile\n'})})]})]})]})}function g(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>r});t(7294);var s=t(6905);const a={tabItem:"tabItem_Ymn6"};var o=t(5893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.Z)(a.tabItem,r),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>y});var s=t(7294),a=t(6905),o=t(2466),r=t(6550),i=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:a}}=e;return{value:n,label:t,attributes:s,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,r.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,s.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[r,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:o}))),[c,d]=b({queryString:t,groupId:a}),[f,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,s.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),I=(()=>{const e=c??f;return g({value:e,tabValues:o})?e:null})();(0,i.Z)((()=>{I&&l(I)}),[I]);return{selectedValue:r,selectValue:(0,s.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),p(e)}),[d,p,o]),tabValues:o}}var p=t(2389);const I={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(5893);function E(e){let{className:n,block:t,selectedValue:s,selectValue:r,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=i[t].value;a!==s&&(c(n),r(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",I.tabItem,o?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function A(e){const n=f(e);return(0,m.jsxs)("div",{className:(0,a.Z)("tabs-container",I.tabList),children:[(0,m.jsx)(E,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function y(e){const n=(0,p.Z)();return(0,m.jsx)(A,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var s=t(7294);const a={},o=s.createContext(a);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);