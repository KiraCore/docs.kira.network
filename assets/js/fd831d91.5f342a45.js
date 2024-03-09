"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3697],{8755:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var r=t(5893),a=t(1151);t(4866),t(5162);const s={title:"WSL2 Support",sidebar_position:5,slug:"/fc224b7a-3406-46db-ad7a-5c179d06703c"},o=void 0,u={id:"WSL2-Support",title:"WSL2 Support",description:"The only supported OS for the host machine is Ubuntu, if you find yourself using windows exclusively and want to test KIRA without dedicated hardware you can utilize windows subsystem for linux. Please note that any commands suggested in this document you input on your own risk.",source:"@site/tabs/Testnet/WSL2-Support.mdx",sourceDirName:".",slug:"/fc224b7a-3406-46db-ad7a-5c179d06703c",permalink:"/testnet/fc224b7a-3406-46db-ad7a-5c179d06703c",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/testnet/fc224b7a-3406-46db-ad7a-5c179d06703c&page-local=wsl2-support.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"WSL2 Support",sidebar_position:5,slug:"/fc224b7a-3406-46db-ad7a-5c179d06703c"},sidebar:"defaultSidebar",previous:{title:"Key Management",permalink:"/testnet/775c220a-d41a-481c-9de9-febc1d08a17d"},next:{title:"COSIGN Setup",permalink:"/testnet/442bf26d-c72a-4548-acf1-2cf9d3c8fa31"}},i={},l=[];function c(e){const n={a:"a",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"The only supported OS for the host machine is Ubuntu, if you find yourself using windows exclusively and want to test KIRA without dedicated hardware you can utilize windows subsystem for linux. Please note that any commands suggested in this document you input on your own risk."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Console"})}),"\n",(0,r.jsxs)(n.p,{children:["All commands presented here should be executed in the ",(0,r.jsx)(n.a,{href:"https://git-scm.com/downloads",children:"git-bash console"}),", you have to install it before you can proceed and start the process as administrator."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Initial Setup"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Install WSL\nwsl --install\n\n# Ensure WSL is up to date\nwsl --update\n\n# Verify that your WSL version is 1.1.6.0 or higher otherwise the systemd services will not work!\nwsl --version\n\n# Re/Install Ubuntu\nwsl --install -d Ubuntu-20.04 && \\\n wsl --setdefault Ubuntu-20.04 && \\\n wsl --set-version Ubuntu-20.04 2\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Update Ubuntu Image"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Open your Ubuntu OS and replace <username> with your username\n# NOTE: Your username can NOT be called 'root'\nwsl -d Ubuntu-20.04 --user <username> --cd ~\n\n# Within WSL set default user and enable systemd service\n# Replace <username> in the code below with your username\nsudo tee -a /etc/wsl.conf <<EOF\n[user]\ndefault=<username>\n[boot]\nsystemd=true\nEOF\n\n# Update your ubunu instance for faster KM boot\nsudo apt-get update -y --fix-missing\n\n# Exit and return to your git-bash console\nexit\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Create base image for easy recovery"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Create directory to save image\nmkdir -p /c/linux\n\n# Export base image\ncd /c/linux && wsl --export Ubuntu-20.04 ubuntu-base-20.04.tar\n"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Copy or recover backup of your base image"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'# Import base image copy as new "kira" VM\nwsl --import kira /c/linux/kira /c/linux/ubuntu-base-20.04.tar\n\n# You can delete and recreate "kira" VM at any time\nwsl --terminate kira || echo "WARNING: Could NOT terminate kira VM" && \\\n wsl --unregister kira || echo "WARNING: Could NOT unregister kira VM" && \\\n rm -rfv /c/linux/kira && \\\n wsl --import kira /c/linux/kira /c/linux/ubuntu-base-20.04.tar && \\\n echo "success" || echo "failure"\n'})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Enter virtual machine"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# stop VM if it was started\nwsl --terminate kira\n\n# start VM\n# Replace <username> in the code below with your username\nwsl -d kira --user <username> --cd ~\n\n# within VM \n# enter sudo mode\nsudo -s\n# navigate to /tmp folder\ncd /tmp\n# you are now ready to install KM...\n\n# exit VM whenever needed\nexit\n"})}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var r=t(6905);const a={tabItem:"tabItem_Ymn6"};var s=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(7294),a=t(6905),s=t(2466),o=t(6550),u=t(469),i=t(1980),l=t(7392),c=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=h(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,d]=b({queryString:t,groupId:a}),[m,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),g=(()=>{const e=l??m;return p({value:e,tabValues:s})?e:null})();(0,u.Z)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function w(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=u[t].value;a!==r&&(l(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:u.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(w,{...e,...n}),(0,x.jsx)(y,{...e,...n})]})}function j(e){const n=(0,f.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>u,a:()=>o});var r=t(7294);const a={},s=r.createContext(a);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);