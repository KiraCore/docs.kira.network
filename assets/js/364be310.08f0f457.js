"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[7904],{4289:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(5893),o=n(1151);n(4866),n(5162);const s={title:"Node Setup",sidebar_position:1,slug:"node-setup"},a=void 0,i={id:"run-a-consensus-node/node-setup",title:"Node Setup",description:"Prerequisites",source:"@site/tabs/testnet/run-a-consensus-node/node-setup.mdx",sourceDirName:"run-a-consensus-node",slug:"/run-a-consensus-node/node-setup",permalink:"/testnet/run-a-consensus-node/node-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/testnet/run-a-consensus-node/node-setup&page-local=run-a-consensus-node/node-setup.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Node Setup",sidebar_position:1,slug:"node-setup"},sidebar:"defaultSidebar",previous:{title:"System Requirements",permalink:"/testnet/run-a-consensus-node/system-requirements"},next:{title:"Connecting to Seed Nodes",permalink:"/testnet/run-a-consensus-node/connecting-to-seed-nodes"}},l={},u=[{value:"Prerequisites",id:"f541ab87f9554eb39d264bb15f53c171",level:2},{value:"Setup",id:"f0f66bf4492d487da81fb85e001c1868",level:2},{value:"Simple Interactive Km Setup From Github Releases",id:"86faded2245c4a278fa0159271270c58",level:4},{value:"Simple Interactive Km Setup From Ipfs",id:"6edcd010626949e284597dea626a8d6a",level:4}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"f541ab87f9554eb39d264bb15f53c171",children:"Prerequisites"}),"\n",(0,r.jsxs)(t.p,{children:["Before proceeding please ensure that you are meeting the ",(0,r.jsx)(t.a,{href:"/testnet/run-a-consensus-node/system-requirements",children:(0,r.jsx)(t.strong,{children:"minimum system & software requirements"})})," to operate a node. As long as those requirements are met it should be possible to launch a validator and other types of KIRA nodes in a home environment and use off-the-shelf single-board computers such as a Raspberry PI.  There are no slashing penalties for validators going offline or becoming temporarily inaccessible. Nodes that go offline for a prolonged period of time will become ",(0,r.jsx)(t.code,{children:"inactivate"})," and removed from the consensus automatically by the state machine."]}),"\n",(0,r.jsxs)(t.p,{children:["The network is designed to halt in the case where \u2265 1/3 of consensus nodes suddenly become unresponsive, however in the case of individual nodes leaving and entering the consensus randomly there should be no interruption to the network operation. As long as the number of validators does not fall below ",(0,r.jsx)(t.code,{children:"min_validators"})," as defined in ",(0,r.jsx)(t.a,{href:"/docs/backend---sekai/modules/governance/network-properties",children:"Network Properties"}),", the chain will continue producing new blocks."]}),"\n",(0,r.jsx)(t.h2,{id:"f0f66bf4492d487da81fb85e001c1868",children:"Setup"}),"\n",(0,r.jsxs)(t.p,{children:["Using ",(0,r.jsx)(t.a,{href:"https://github.com/KiraCore/kira",children:"KIRA Manager (KM)"})," is the quickest way to run your node, as it is a straightforward bash-shell script that can easily create a new personal network or join an existing one on your behalf. However, it is important to note that KM is only intended for internal testing and should not be used on the mainnet. For operating each aspect of the infrastructure manually on the mainnet, please refer to our ",(0,r.jsx)(t.a,{href:"https://docs.kira.network/",children:"public documentation page"})," after you have become comfortable and familiar with the process. At present, KM can only be installed on Ubuntu. If you prefer to use a Mac, you will need to install ",(0,r.jsx)(t.a,{href:"https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html",children:"VMware"})," and virtualize the Ubuntu OS. On Windows, ",(0,r.jsx)(t.a,{href:"/testnet/tools/wsl2-support",children:"WSL2 is supported"}),"."]}),"\n",(0,r.jsx)(t.p,{children:'To join an existing network, you will require knowledge of the specific software version you need to run and the IP address of a trusted node operator within that network. You can find all of this information conveniently located in the "Active Testnets" section below, so there is no need to worry. Let us now examine some simple setup examples.'}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Interactive KM Setup - Terms &amp; Conditions",src:n(3598).Z+"",width:"754",height:"482"})}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"Validators do not store the entire block history in order to conserve disk space. This task should only be performed by sentry and archival nodes. If you are syncing your node from an exposed validator instead of a full node, it is important to ensure that you are connecting to a legitimate network and that the party you are connecting to is trustworthy. It is also important to note that during fast sync mode, the blockchain history will not be replayed which might pose additional risks."})}),"\n",(0,r.jsx)(t.h4,{id:"86faded2245c4a278fa0159271270c58",children:"Simple Interactive Km Setup From Github Releases"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# assume root permissions\nsudo -s\n\n# Example installation from github releases, please copy entire code section from below.\n# You will be prompted do enter release version. Each testnet has a different KM version.\n# Example release version is v0.11.14, see "Active Testnets" for the correct version to use.\n\ncd /tmp && apt-get install -y wget && \\\n UBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36" && \\\n echo -ne "\\033[1;32m\\nPlease enter version of KM to install: \\033[0m" && read V && \\\n wget --user-agent="$UBUNTU_AGENT" https://github.com/KiraCore/kira/releases/download/${V}/init.sh -O ./i.sh && \\\n chmod +x -v ./i.sh && ./i.sh --infra-src="$V" --init-mode="interactive" || echo -e "\\033[1;31mERROR: KM setup failed, error code \'$?\'\\033[0m"\n'})}),"\n",(0,r.jsx)(t.h4,{id:"6edcd010626949e284597dea626a8d6a",children:"Simple Interactive Km Setup From Ipfs"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'# assume root permissions\nsudo -s\n\n# Example installation from IPFS CID, please copy entire code section from below.\n# You will be prompted do enter CID. Each testnet has a different KM CID.\n# Example CID is bafybeiczsnbmbf4pvpbbxk3gnjlieno4vinrku4e5c32q7wqqjbw6t2ctu\n# Please see "Active Testnets" for the correct CID to use.\n\ncd /tmp && apt-get install -y wget && \\\n echo -ne "\\033[1;32m\\nPlease enter CID of the KM release you want to install: \\033[0m" && read CID && \\\n wget https://ipfs.kira.network/ipfs/$CID/init.sh -O ./i.sh && chmod +x -v ./i.sh && \\\n ./i.sh --infra-src="$CID" --init-mode="interactive" || echo -e "\\033[1;31mERROR: KM setup failed, error code \'$?\'\\033[0m"\n'})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>a});n(7294);var r=n(6905);const o={tabItem:"tabItem_Ymn6"};var s=n(5893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,a),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),o=n(6905),s=n(2466),a=n(6550),i=n(469),l=n(1980),u=n(7392),c=n(812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const o=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(o.location.search);t.set(s,e),o.replace({...o.location,search:t.toString()})}),[s,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:o}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,s]=(0,c.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:o}),v=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function w(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==r&&(u(t),a(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,o.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,o.Z)("tabs-container",v.tabList),children:[(0,g.jsx)(w,{...t,...e}),(0,g.jsx)(y,{...t,...e})]})}function k(e){const t=(0,b.Z)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},3598:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/593913258-edcd4e7706fa842b385e721c1190ec44.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(7294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);