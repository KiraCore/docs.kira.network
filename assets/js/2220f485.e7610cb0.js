"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[5520],{1102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(5893),a=n(1151);n(4866),n(5162);const r={title:"Overview",sidebar_position:0,slug:"/"},i=void 0,s={id:"Overview",title:"Overview",description:"Before proceeding please ensure that you are meeting the minimum system & software requirements to operate a node. As long as those requirements are met it should be possible to launch a validator and other types of KIRA nodes in a home environment and use off-the-shelf single-board computers such as a Raspberry PI.  There are no slashing penalties for validators going offline or becoming temporarily inaccessible. Nodes that go offline for a prolonged period of time will become inactivate and removed from the consensus automatically by the state machine.",source:"@site/tabs/Testnet/Overview.mdx",sourceDirName:".",slug:"/",permalink:"/testnet/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Overview",sidebar_position:0,slug:"/"},sidebar:"defaultSidebar",next:{title:"chaosnet-1",permalink:"/testnet/e031ab39-4738-4895-ab21-e27ebebfe9ac"}},l={},d=[{value:"How to Become a Tester?",id:"ce166438b50a4b1fa0797eb69f3a8264",level:2},{value:"Setup",id:"059134a4048f44368753b199cd162ee8",level:2},{value:"Seed Nodes",id:"d21e624c2a1e420c8648e030abde917a",level:2},{value:"Recovery",id:"946c79548c724eeea70f363e7a5ad96d",level:2},{value:"Joining Validator Set",id:"319f717ddac24b0e91d689dbc1d30073",level:2},{value:"Upgrades",id:"726d221d3cb8401587dd8b5f21895ad3",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Before proceeding please ensure that you are meeting the ",(0,o.jsx)(t.a,{href:"/3525f452-8421-48ce-aab6-10a2955a3e03",children:(0,o.jsx)(t.strong,{children:"minimum system & software requirements"})})," to operate a node. As long as those requirements are met it should be possible to launch a validator and other types of KIRA nodes in a home environment and use off-the-shelf single-board computers such as a Raspberry PI.  There are no slashing penalties for validators going offline or becoming temporarily inaccessible. Nodes that go offline for a prolonged period of time will become ",(0,o.jsx)(t.code,{children:"inactivate"})," and removed from the consensus automatically by the state machine."]}),"\n",(0,o.jsxs)(t.p,{children:["The network is designed to halt in the case where \u2265 1/3 of consensus nodes suddenly become unresponsive, however in the case of individual nodes leaving and entering the consensus randomly there should be no interruption to the network operation. As long as the number of validators does not fall below ",(0,o.jsx)(t.code,{children:"min_validators"})," as defined in ",(0,o.jsx)(t.a,{href:"/docs/b9b95792-b936-4603-8a46-15566f24e3c0",children:"Network Properties"}),", the chain will continue producing new blocks."]}),"\n",(0,o.jsx)(t.h2,{id:"ce166438b50a4b1fa0797eb69f3a8264",children:"How to Become a Tester?"}),"\n",(0,o.jsxs)(t.p,{children:["To ensure the security of the network, we must have Sybil-resistance in place. For this reason, all our testers undergo screening to identify them as unique individuals. Our testers are not just testers; they are recognized as official KIRA ",(0,o.jsx)(t.a,{href:"/7445fb12-93e8-4539-bfb9-6a20a0156b20",children:"Evangelists"}),". ",(0,o.jsx)(t.strong,{children:"This status qualifies them for benefits like grants, bounties, potential validator seats, governance roles, and Universal Basic Income (UBI)"}),". They also get access to the ",(0,o.jsx)(t.a,{href:"https://testers.kira.network/",children:"private testers chat"})," and more."]}),"\n",(0,o.jsx)(t.p,{children:"On the mainnet, a dedicated governance body can identify non-Sybil operators without the need for Know Your Customer (KYC) protocols or any other personal identification. It's worth noting that there's no limit to the number of validators on either the testnet or the mainnet."}),"\n",(0,o.jsxs)(t.p,{children:["To learn more about the role of an Evangelist or to preview your application, please visit our ",(0,o.jsx)(t.a,{href:"/7445fb12-93e8-4539-bfb9-6a20a0156b20",children:"whitelist page"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"https://evangelist.kira.network/",children:"Whitelist Request Form"})})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["Regardless of your decision to participate in our tester's community, KIRA extends a warm welcome to all who wish to join our open and public network. To kick-start your journey, simply install our validator or sentry node software, available on our ",(0,o.jsx)(t.a,{href:"https://git.kira.network/",children:"GitHub"}),". As an alternative, you could also download our infrastructure management tool, KIRA Manager. We heartily invite everyone with a shared passion for decentralized systems and fundamental freedoms to delve into KIRA and discover its ability to run and secure the next generation web3 apps."]})}),"\n",(0,o.jsx)(t.h2,{id:"059134a4048f44368753b199cd162ee8",children:"Setup"}),"\n",(0,o.jsxs)(t.p,{children:["Using ",(0,o.jsx)(t.a,{href:"https://github.com/KiraCore/kira",children:"KIRA Manager (KM)"})," is the quickest way to run your node, as it is a straightforward bash-shell script that can easily create a new personal network or join an existing one on your behalf. However, it is important to note that KM is only intended for internal testing and should not be used on the mainnet. For operating each aspect of the infrastructure manually on the mainnet, please refer to our ",(0,o.jsx)(t.a,{href:"https://docs.kira.network/",children:"public documentation page"})," after you have become comfortable and familiar with the process. At present, KM can only be installed on Ubuntu. If you prefer to use a Mac, you will need to install ",(0,o.jsx)(t.a,{href:"https://www.vmware.com/products/workstation-player/workstation-player-evaluation.html",children:"VMware"})," and virtualize the Ubuntu OS. On Windows, ",(0,o.jsx)(t.a,{href:"/fc224b7a-3406-46db-ad7a-5c179d06703c",children:"WSL2 is supported"}),"."]}),"\n",(0,o.jsx)(t.p,{children:'To join an existing network, you will require knowledge of the specific software version you need to run and the IP address of a trusted node operator within that network. You can find all of this information conveniently located in the "Active Testnets" section below, so there is no need to worry. Let us now examine some simple setup examples.'}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Interactive KM Setup - Terms &amp; Conditions",src:n(7592).Z+"",width:"754",height:"482"})}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"Validators do not store the entire block history in order to conserve disk space. This task should only be performed by sentry and archival nodes. If you are syncing your node from an exposed validator instead of a full node, it is important to ensure that you are connecting to a legitimate network and that the party you are connecting to is trustworthy. It is also important to note that during fast sync mode, the blockchain history will not be replayed which might pose additional risks."})})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Simple Interactive KM Setup from GitHub Releases"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'# assume root permissions\nsudo -s\n\n# Example installation from github releases, please copy entire code section from below.\n# You will be prompted do enter release version. Each testnet has a different KM version.\n# Example release version is v0.11.14, see "Active Testnets" for the correct version to use.\n\ncd /tmp && apt-get install -y wget && \\\n UBUNTU_AGENT="Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36" && \\\n echo -ne "\\033[1;32m\\nPlease enter version of KM to install: \\033[0m" && read V && \\\n wget --user-agent="$UBUNTU_AGENT" https://github.com/KiraCore/kira/releases/download/${V}/init.sh -O ./i.sh && \\\n chmod +x -v ./i.sh && ./i.sh --infra-src="$V" --init-mode="interactive" || echo -e "\\033[1;31mERROR: KM setup failed, error code \'$?\'\\033[0m"\n'})}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Simple Interactive KM Setup from IPFS"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'# assume root permissions\nsudo -s\n\n# Example installation from IPFS CID, please copy entire code section from below.\n# You will be prompted do enter CID. Each testnet has a different KM CID.\n# Example CID is bafybeiczsnbmbf4pvpbbxk3gnjlieno4vinrku4e5c32q7wqqjbw6t2ctu\n# Please see "Active Testnets" for the correct CID to use.\n\ncd /tmp && apt-get install -y wget && \\\n echo -ne "\\033[1;32m\\nPlease enter CID of the KM release you want to install: \\033[0m" && read CID && \\\n wget https://ipfs.kira.network/ipfs/$CID/init.sh -O ./i.sh && chmod +x -v ./i.sh && \\\n ./i.sh --infra-src="$CID" --init-mode="interactive" || echo -e "\\033[1;31mERROR: KM setup failed, error code \'$?\'\\033[0m"\n'})}),"\n",(0,o.jsx)(t.h2,{id:"d21e624c2a1e420c8648e030abde917a",children:"Seed Nodes"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:(0,o.jsx)(t.em,{children:"When connecting to a new network, it is important to pay attention to certain details to ensure that you are joining the correct chain. One of the key factors to consider is the number of peers in the network, as this can give you an idea in regards to the legitimacy of the chain (it is unlikely the attacker would be hosting hundreds of active nodes). In addition, it is crucial to verify both the Genesis Hash and network name to confirm that you are connecting to the intended chain. To find the hash of the genesis file, you can refer to the active testnet information page, which should provide all the necessary information to help you make an informed decision about joining the network."})})}),"\n",(0,o.jsxs)(t.p,{children:["Once you have accepted the initial terms and conditions, you will be presented with the Launcher Menu, which enables you to configure your node, manage networking settings, download snapshots, and preview the hash of a genesis file. Within the Node Launcher Menu, you will need to specify the IP address of a trusted seed node or another validator. Your node will use this connection to synchronize with other nodes on the network and keep its copy of the blockchain up to date. You can request an IP address from any of the fellow validators in the ",(0,o.jsx)(t.a,{href:"https://testers.kira.network/",children:"testers\u2019 chat"}),", or use an address of a genesis validator that is listed in the corresponding testnet section below."]}),"\n",(0,o.jsxs)(t.p,{children:["Every node has a connection limit and the official genesis validator may be targeted by the DOS/DDOS, and thus become non-operational or non-responsive to the new peers. If this happens, node operators will need to coordinate via the ",(0,o.jsx)(t.a,{href:"https://testers.kira.network/",children:"testers\u2019 chat"})," and share between each other IP or DNS addresses of their personal validator, seed, or sentry nodes. Alternatively, testers can utilize any endpoint of an active INTERX node at ",(0,o.jsx)(t.code,{children:"<IP>:11000/api/pub_p2p_list"})," where ",(0,o.jsx)(t.code,{children:"<IP>"})," is an IP of any public testnet node to discover more IP addresses."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Interactive KM Setup - Launcher Menu",src:n(4044).Z+"",width:"733",height:"440"})}),"\n",(0,o.jsx)(t.h2,{id:"946c79548c724eeea70f363e7a5ad96d",children:"Recovery"}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"You should never under any circumstances provide anyone with your private keys or mnemonic words. Keep them stored on a piece of paper offline and keep an online copy only on your validator node. It is also recommended to set up a recovery address that can be used to rotate your validator key in case you suspect that your node might have been compromised. You can learn more about that process from our"})," ",(0,o.jsx)(t.a,{href:"https://docs.kira.network/",children:(0,o.jsx)(t.em,{children:"public docs page"})}),(0,o.jsx)(t.em,{children:"."})]})}),"\n",(0,o.jsxs)(t.p,{children:["As a validator, your most important role is to stay online, be an active participant in the testers\u2019 community, and preserve the cryptographic secrets that your node will use to sign new blocks being proposed to the network. There can be many of those \u201ccryptographic secrets\u201d that you need to know about and archive, so we simplified the entire process into just a single set of bip39 mnemonic words that you need to write down. You can visit the ",(0,o.jsx)(t.a,{href:"/775c220a-d41a-481c-9de9-febc1d08a17d",children:"Key Management"})," page to learn more or utilize KM to generate it all for you automatically. If you choose to go with KM, please make sure to select option ",(0,o.jsx)(t.code,{children:"[M] View or Modify Mnemonic"})," before leaving the \u201cNode Launcher Menu\u201d and follow up with ",(0,o.jsx)(t.code,{children:"[V] Display master mnemonic from keystore"})," within the menu of the \u201cSecrets Manager\u201d."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Interactive KM Setup - Example of a Mater Mnemonic Preview",src:n(9247).Z+"",width:"734",height:"450"})}),"\n",(0,o.jsxs)(t.p,{children:["If by mistake you forgot to write down your mnemonic words, you can always display them by typing the following command in your console window:\xa0",(0,o.jsx)(t.code,{children:'tryGetVar MASTER_MNEMONIC "$KIRA_SECRETS/mnemonics.env"'}),". If your node fails or needs to be recovered, you can regenerate all the secrets by providing the master mnemonic to the KM within the \u201cNode Launcher Menu\u201d. Otherwise, your node will generate a new set of secrets every time you set up a new node on a fresh instance."]}),"\n",(0,o.jsxs)(t.p,{children:["If you ever need to fully recover your validator node, including all its secrets and private keys, you can do so by importing the mnemonic that you previously wrote down. To access this option, simply select",(0,o.jsx)(t.code,{children:"[M] Modify master mnemonic and DELETE all secrets"})," from the main menu of the \u201cSecrets Manager\u201d. However, it is important to note that this process will destroy all auto-generated secrets and replace them with the ones derived from your master mnemonic. You should be very careful when using this option and ensure that you have a backup of your master mnemonic in a secure location. It is also crucial to never attempt to recover your validator or reuse your secrets on two machines simultaneously. Doing so will result in the double signing of a block and lead to your node being jailed."]}),"\n",(0,o.jsx)(t.h2,{id:"319f717ddac24b0e91d689dbc1d30073",children:"Joining Validator Set"}),"\n",(0,o.jsx)(t.p,{children:"To join the validator set you will need to become an official KIRA tester first. Your initial goal will be to determine your validator public address, which you will need to submit as part of the application process to become whitelisted."}),"\n",(0,o.jsxs)(t.p,{children:["Once you have completed the installation process, you can easily find your validator address by typing ",(0,o.jsx)(t.code,{children:"kira"})," into your terminal window to open KIRA Manager. From there, simply press the corresponding number on your keypad to designate your validator container (usually ",(0,o.jsx)(t.code,{children:"[0]"})," by default). You will then be presented with a container manager that provides statistics about your node, including your Validator Address."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"KM - Container Manager",src:n(7339).Z+"",width:"732",height:"444"})}),"\n",(0,o.jsxs)(t.p,{children:["Once you have been whitelisted by the testnet support team, you will be presented with an explicit option to ",(0,o.jsx)(t.code,{children:"[J] Join Validator Set"})," in the main menu of KIRA Manager. Upon executing this option, your node will begin to produce and sign proposed blocks. In addition to this, the main menu of KIRA Manager provides many other options such as configuring the firewall or creating snapshots."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"KM - Main Menu",src:n(1645).Z+"",width:"740",height:"461"})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"NOTE: One of the most useful functions is the maintenance mode. Whenever you need to upgrade your node, move it to another instance, or perform any other operations that might result in your validator signing process stopping, you can select an option to"})," ",(0,o.jsxs)(t.em,{children:[(0,o.jsx)(t.code,{children:"[E] Enter Maintenance Mode"}),"__. This will prevent your validator's on-chain statistics from being reset and entering an"]})," ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.code,{children:"inactive"})})," ",(0,o.jsx)(t.em,{children:"state. Once you have completed your maintenance operation, you can simply disable the maintenance mode by selecting the"})," ",(0,o.jsx)(t.em,{children:(0,o.jsx)(t.code,{children:"[D] Disable Maintenance Mode"})})," ",(0,o.jsx)(t.em,{children:"option."})]}),"\n",(0,o.jsx)(t.h2,{id:"726d221d3cb8401587dd8b5f21895ad3",children:"Upgrades"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.em,{children:"To ensure a smooth and coordinated upgrade process, all upgrades will be coordinated by the KIRA testnet support team. Any notifications regarding governance proposals or software changes will be communicated through the"})," ",(0,o.jsx)(t.a,{href:"https://testers.kira.network/",children:(0,o.jsx)(t.em,{children:"testers\u2019 chat"})}),(0,o.jsx)(t.em,{children:". Therefore, it is important to regularly monitor the pinned posts in the chat to stay up to date with the latest information."})]})}),"\n",(0,o.jsxs)(t.p,{children:["The main highlight of all KIRA testnets is collaboration on performing automated on-chain upgrades. Our upgrade module is a blockchain application that allows validators to coordinate soft & hard forks as well as agree on the integrity and content of each new KIRA release. KIRA Manager will automatically detect upcoming changes, delete all containers, perform snapshots & genesis file exports then rebuild the environment and launch a new release without your assistance. You can enable or disable automated upgrades from within your KM, by selecting option ",(0,o.jsx)(t.code,{children:"[U]"}),". You will also be notified via the KM of the exact time of the upcoming upgrade. All upgrades are scheduled according to timestamps predefined in the upgrade proposals and NOT block-height based thus making it way more predictable to coordinate and apply changes regardless if you plan to use KM or a dedicated continuous deployment (CD) pipeline for your infrastructure."]}),"\n",(0,o.jsxs)(t.p,{children:["It is mandatory for ALL validators to vote on upgrade proposals. If you skip the vote then the on-chain status after the upgrade will be changed to ",(0,o.jsx)(t.code,{children:"inactive"})," and you will not be producing blocks while your validator leaderboard rank will significantly decrease."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Governance proposals voting example"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# With KM (voting in favor)\nvoteYes <proposal-id>\n# With KM (voting against)\nvoteNo <proposal-id>\n\n# Without KM (voting in favor)\nsekaid tx customgov proposal vote <proposal-id> 1 --from=$ACCOUNT --chain-id=$NETWORK_NAME \\\n --keyring-backend=test --fees=100ukex --yes --log_format=json --broadcast-mode=async --output=json\n# Without KM (voting against)\nsekaid tx customgov proposal vote <proposal-id> 0 --from=$ACCOUNT --chain-id=$NETWORK_NAME \\\n --keyring-backend=test --fees=100ukex --yes --log_format=json --broadcast-mode=async --output=json\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you do not wish to use KM and instead utilize your own dedicated continuous deployment (CD) tools, then you can acquire informations about upcoming upgrades from either the ",(0,o.jsx)(t.code,{children:"sekai"})," CLI or the following two INTERX endpoints:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"<IP>:11000/api/kira/upgrade/current_plan"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.code,{children:"<IP>:11000/api/kira/upgrade/next_plan"})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["The \u201ccurrent\u201d plan contains informations & resources regarding the current release while the \u201cnext\u201d plan contains informations & resources regarding upcoming releases. You can also use resource references specified in the \u201ccurrent\u201d plan endpoint of a trusted node while joining the network for the very first time. If you choose not to use KM and a new genesis file is required (hard fork), you can create it by first exporting genesis at the height where the network stopped (your node daemon should be shut down) and then passing it through a dedicated ",(0,o.jsx)(t.code,{children:"new-genesis-from-exported"})," command."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Genesis file upgrade example"})}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"# export genesis after ensuring your node is stopped\nsekaid export --home=$SEKAID_HOME > ./genesis-export.json\n\n# upgrade release of sekai to the version defined in the on-chain upgrade plan\n\n# execute conversion of the exported genesis file and launch your node using the newly generated genesis\nsekaid new-genesis-from-exported ./genesis-export.json ./new-genesis.json --json-minimize=true\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(6905);const a={tabItem:"tabItem_Ymn6"};var r=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(a.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>j});var o=n(7294),a=n(6905),r=n(2466),i=n(6550),s=n(469),l=n(1980),d=n(7392),c=n(12);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return h(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:a}}=e;return{value:t,label:n,attributes:o,default:a}}))}(n);return function(e){const t=(0,d.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=u(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:r}))),[d,h]=m({queryString:n,groupId:a}),[f,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),y=(()=>{const e=d??f;return p({value:e,tabValues:r})?e:null})();(0,s.Z)((()=>{y&&l(y)}),[y]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),g(e)}),[h,g,r]),tabValues:r}}var g=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=n(5893);function v(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),a=s[n].value;a!==o&&(d(t),i(a))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:h,onClick:c,...r,className:(0,a.Z)("tabs__item",y.tabItem,r?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,b.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,b.jsx)(v,{...e,...t}),(0,b.jsx)(w,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,b.jsx)(x,{...e,children:h(e.children)},String(t))}},1645:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1122854462-19a4591ae1e68c5a0afe0d33969d3e3d.png"},7339:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1428085886-119116dfc573c922319ef8f797bc8eb1.png"},9247:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/1803436744-9fd40fcc1b3a9ab919e6b15a7585f41d.png"},4044:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2032290687-fd4b339e9c40cec2401d37335fc08dc1.png"},7592:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/593913258-edcd4e7706fa842b385e721c1190ec44.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var o=n(7294);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);