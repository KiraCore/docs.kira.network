"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[1042],{6145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(5893),o=n(1151);n(4866),n(5162);const a={title:"Network Upgrades",sidebar_position:5,slug:"network-upgrades"},s=void 0,i={id:"run-a-consensus-node/network-upgrades",title:"Network Upgrades",description:"To ensure a smooth and coordinated upgrade process, all upgrades will be coordinated by the KIRA testnet support team. Any notifications regarding governance proposals or software changes will be communicated through the testers\u2019 chat. Therefore, it is important to regularly monitor the pinned posts in the chat to stay up to date with the latest information.",source:"@site/tabs/testnet/run-a-consensus-node/network-upgrades.mdx",sourceDirName:"run-a-consensus-node",slug:"/run-a-consensus-node/network-upgrades",permalink:"/testnet/run-a-consensus-node/network-upgrades",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/testnet/run-a-consensus-node/network-upgrades&page-local=run-a-consensus-node/network-upgrades.mdx",tags:[],version:"current",lastUpdatedAt:1720521339e3,sidebarPosition:5,frontMatter:{title:"Network Upgrades",sidebar_position:5,slug:"network-upgrades"},sidebar:"defaultSidebar",previous:{title:"Joining Validator Set",permalink:"/testnet/run-a-consensus-node/joining-validator-set"},next:{title:"Account Recovery",permalink:"/testnet/run-a-consensus-node/account-recovery"}},l={},u=[];function c(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsxs)(t.p,{children:["To ensure a smooth and coordinated upgrade process, all upgrades will be coordinated by the KIRA testnet support team. Any notifications regarding governance proposals or software changes will be communicated through the ",(0,r.jsx)(t.a,{href:"https://testers.kira.network/",children:"testers\u2019 chat"}),". Therefore, it is important to regularly monitor the pinned posts in the chat to stay up to date with the latest information."]})}),"\n",(0,r.jsxs)(t.p,{children:["The main highlight of all KIRA testnets is collaboration on performing automated on-chain upgrades. Our upgrade module is a blockchain application that allows validators to coordinate soft & hard forks as well as agree on the integrity and content of each new KIRA release. KIRA Manager will automatically detect upcoming changes, delete all containers, perform snapshots & genesis file exports then rebuild the environment and launch a new release without your assistance. You can enable or disable automated upgrades from within your KM, by selecting option ",(0,r.jsx)(t.code,{children:"[U]"}),". You will also be notified via the KM of the exact time of the upcoming upgrade. All upgrades are scheduled according to timestamps predefined in the upgrade proposals and NOT block-height based thus making it way more predictable to coordinate and apply changes regardless if you plan to use KM or a dedicated continuous deployment (CD) pipeline for your infrastructure."]}),"\n",(0,r.jsxs)(t.p,{children:["It is mandatory for ALL validators to vote on upgrade proposals. If you skip the vote then the on-chain status after the upgrade will be changed to ",(0,r.jsx)(t.code,{children:"inactive"})," and you will not be producing blocks while your validator leaderboard rank will significantly decrease."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Governance proposals voting example"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# With KM (voting in favor)\nvoteYes <proposal-id>\n# With KM (voting against)\nvoteNo <proposal-id>\n\n# Without KM (voting in favor)\nsekaid tx customgov proposal vote <proposal-id> 1 --from=$ACCOUNT --chain-id=$NETWORK_NAME \\\n --keyring-backend=test --fees=100ukex --yes --log_format=json --broadcast-mode=async --output=json\n# Without KM (voting against)\nsekaid tx customgov proposal vote <proposal-id> 0 --from=$ACCOUNT --chain-id=$NETWORK_NAME \\\n --keyring-backend=test --fees=100ukex --yes --log_format=json --broadcast-mode=async --output=json\n"})}),"\n",(0,r.jsxs)(t.p,{children:["If you do not wish to use KM and instead utilize your own dedicated continuous deployment (CD) tools, then you can acquire informations about upcoming upgrades from either the ",(0,r.jsx)(t.code,{children:"sekai"})," CLI or the following two INTERX endpoints:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"<IP>:11000/api/kira/upgrade/current_plan"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.code,{children:"<IP>:11000/api/kira/upgrade/next_plan"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["The \u201ccurrent\u201d plan contains informations & resources regarding the current release while the \u201cnext\u201d plan contains informations & resources regarding upcoming releases. You can also use resource references specified in the \u201ccurrent\u201d plan endpoint of a trusted node while joining the network for the very first time. If you choose not to use KM and a new genesis file is required (hard fork), you can create it by first exporting genesis at the height where the network stopped (your node daemon should be shut down) and then passing it through a dedicated ",(0,r.jsx)(t.code,{children:"new-genesis-from-exported"})," command."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Genesis file upgrade example"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"# export genesis after ensuring your node is stopped\nsekaid export --home=$SEKAID_HOME > ./genesis-export.json\n\n# upgrade release of sekai to the version defined in the on-chain upgrade plan\n\n# execute conversion of the exported genesis file and launch your node using the newly generated genesis\nsekaid new-genesis-from-exported ./genesis-export.json ./new-genesis.json --json-minimize=true\n"})})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>s});n(7294);var r=n(6905);const o={tabItem:"tabItem_Ymn6"};var a=n(5893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),o=n(6905),a=n(2466),s=n(6550),i=n(469),l=n(1980),u=n(7392),c=n(812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:o}}=e;return{value:t,label:n,attributes:r,default:o}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const o=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(o.location.search);t.set(a,e),o.replace({...o.location,search:t.toString()})}),[a,o])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:o}=e,a=p(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[u,d]=g({queryString:n,groupId:o}),[f,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[o,a]=(0,c.Nk)(n);return[o,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:o}),b=(()=>{const e=u??f;return h({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(5893);function w(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),o=i[n].value;o!==r&&(u(t),s(o))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,o.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:o}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function x(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,o.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(w,{...t,...e}),(0,v.jsx)(y,{...t,...e})]})}function k(e){const t=(0,m.Z)();return(0,v.jsx)(x,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const o={},a=r.createContext(o);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);