"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[7191],{5537:(e,s,n)=>{n.d(s,{A:()=>T});var r=n(6540),i=n(8215),t=n(5627),o=n(6347),a=n(372),l=n(604),c=n(1861),d=n(8749);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:n}=e;return(0,r.useMemo)((()=>{const e=s??function(e){return h(e).map((e=>{let{props:{value:s,label:n,attributes:r,default:i}}=e;return{value:s,label:n,attributes:r,default:i}}))}(n);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,n])}function u(e){let{value:s,tabValues:n}=e;return n.some((e=>e.value===s))}function x(e){let{queryString:s=!1,groupId:n}=e;const i=(0,o.W6)(),t=function(e){let{queryString:s=!1,groupId:n}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:s,groupId:n});return[(0,l.aZ)(t),(0,r.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(i.location.search);s.set(t,e),i.replace({...i.location,search:s.toString()})}),[t,i])]}function m(e){const{defaultValue:s,queryString:n=!1,groupId:i}=e,t=p(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:s,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!u({value:s,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:t}))),[c,h]=x({queryString:n,groupId:i}),[m,j]=function(e){let{groupId:s}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(s),[i,t]=(0,d.Dv)(n);return[i,(0,r.useCallback)((e=>{n&&t.set(e)}),[n,t])]}({groupId:i}),g=(()=>{const e=c??m;return u({value:e,tabValues:t})?e:null})();(0,a.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,t]),tabValues:t}}var j=n(9136);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(4848);function v(e){let{className:s,block:n,selectedValue:r,selectValue:o,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),d=e=>{const s=e.currentTarget,n=l.indexOf(s),i=a[n].value;i!==r&&(c(s),o(i))},h=e=>{let s=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;s=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;s=l[n]??l[l.length-1];break}}s?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":n},s),children:a.map((e=>{let{value:s,label:n,attributes:t}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===s?0:-1,"aria-selected":r===s,ref:e=>{l.push(e)},onKeyDown:h,onClick:d,...t,className:(0,i.A)("tabs__item",g.tabItem,t?.className,{"tabs__item--active":r===s}),children:n??s},s)}))})}function b(e){let{lazy:s,children:n,selectedValue:t}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(s){const e=o.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:(0,i.A)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,s)=>(0,r.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function y(e){const s=m(e);return(0,f.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,f.jsx)(v,{...s,...e}),(0,f.jsx)(b,{...s,...e})]})}function T(e){const s=(0,j.A)();return(0,f.jsx)(y,{...e,children:h(e.children)},String(s))}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var r=n(6540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}},9250:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>h});const r=JSON.parse('{"id":"backend---sekai/modules/governance/proposals-&-governance-structure","title":"Proposals & governance structure","description":"Overview","source":"@site/tabs/docs/backend---sekai/modules/governance/proposals-&-governance-structure.mdx","sourceDirName":"backend---sekai/modules/governance","slug":"/backend---sekai/modules/governance/proposals--governance-structure","permalink":"/docs/backend---sekai/modules/governance/proposals--governance-structure","draft":false,"unlisted":false,"editUrl":"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/docs/backend---sekai/modules/governance/proposals--governance-structure&page-local=backend---sekai/modules/governance/proposals-&-governance-structure.mdx","tags":[],"version":"current","lastUpdatedAt":1739294998000,"sidebarPosition":1,"frontMatter":{"title":"Proposals & governance structure","sidebar_position":1,"slug":"proposals--governance-structure"},"sidebar":"defaultSidebar","previous":{"title":"Concept","permalink":"/docs/backend---sekai/modules/governance/concept"},"next":{"title":"Councilors & governance ranking","permalink":"/docs/backend---sekai/modules/governance/councilors--governance-ranking"}}');var i=n(4848),t=n(8453),o=n(5537),a=n(9329);const l={title:"Proposals & governance structure",sidebar_position:1,slug:"proposals--governance-structure"},c=void 0,d={},h=[{value:"Overview",id:"cec5b8b9f4904b3c98c079258d9a4692",level:2},{value:"Proposing &amp; Voting Rights",id:"ca1e33b2b3034f5997ca48f9186e1173",level:3},{value:"Permissioned Governance Set With Equitable Vote Distribution",id:"59c3610b51824c349b62a8d93925a7ea",level:3},{value:"Decision-making Process",id:"3bc3fc5003d64c968b703fe0f949bd75",level:3},{value:"Network Properties",id:"5584c3f171f24ddfa7a616c344690c83",level:2},{value:"Parameters",id:"c87ca8ad5ef4402aab4f8f9c9768b78b",level:2},{value:"Proposal Types",id:"c5381831565e4d2789f7d553745835e5",level:4},{value:"Proposal",id:"e3cd55578cb74dc394f3c4346e73236c",level:4},{value:"Vote Types",id:"c48673132aeb432d977a1554e8a86434",level:4},{value:"Proposal Statuses",id:"703d5727415642f2a6b4d33cd6acff0a",level:4},{value:"CLI Syntax &amp; Examples",id:"b82ffe5632d24d94997e6981477a132b",level:2},{value:"Transactions",id:"54620f9f378f4c1a89d527786da6e1bc",level:2},{value:"Queries",id:"5461ad3bca534f018a45d18d22b0bb69",level:2},{value:"Query Proposals",id:"78011608601e48d08d0a071b9cd5c140",level:4},{value:"Query Proposal",id:"095905665c39445cb75e2850e4b0dc1b",level:4},{value:"Query Vote",id:"63da01ba1e7641f1b655954ba40dd3c0",level:4},{value:"Query Votes",id:"8b6123c73e304d50a928294736b65015",level:4},{value:"Query Whitelisted Proposal Voters",id:"9fa5de3738c7484f84dc315dc112c0f5",level:4},{value:"Query All Proposal Durations",id:"29b4670c8bfc40fd8f62e1f4da02b57d",level:4},{value:"Query Proposal Duration",id:"c998c2f09f9c47168e2dd081f93f842f",level:4},{value:"Governance",id:"8fc5a2c18add467eba69f2af052d32fc",level:2},{value:"Set Proposals Duration",id:"d2441765912d4167b72710bad8af4ea0",level:4}];function p(e){const s={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",math:"math",mfrac:"mfrac",mn:"mn",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h2,{id:"cec5b8b9f4904b3c98c079258d9a4692",children:"Overview"}),"\n",(0,i.jsx)(s.p,{children:"Proposals form the backbone of the governance process within the KIRA Network, empowering selected network members to collectively influence the blockchain application's conduct and make myriad of off-chain decisions."}),"\n",(0,i.jsx)(s.h3,{id:"ca1e33b2b3034f5997ca48f9186e1173",children:"Proposing & Voting Rights"}),"\n",(0,i.jsx)(s.p,{children:"Two types of network participants are empowered to vote on governance proposals:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Consensus nodes"}),": These are individuals who occupy a validator seat and operate nodes that actively generate new blocks."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Councilors:"})," These are non-validator individuals who, having secured a councilor seat, shoulder the responsibility of network governance."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["Together, consensus nodes and councilors constitute the governance set. Inclusion in the governance set doesn't inherently grant the ability to vote on every proposal type. Each governance member necessitates a specific permission to vote on a certain type of proposal. The same principle holds for the creation of new proposals\u2014a specific permission enabling the submission of certain proposals is essential. Permissions can be granted on an individual basis or via roles. This model facilitates an almost infinitely scalable governance system. It allows for the creation of multiple governance sub-councils that can maintain a codependent relationship through ",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/Separation_of_powers#Checks_and_balances",children:"checks and balances"})," or any other governance system. This efficient division of responsibilities enables KIRA governance to manage various on-chain parameters, staking interest rates, and more, concurrently. More details on this can be found in the ",(0,i.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:"Roles & Permissions"})," section."]}),"\n",(0,i.jsx)(s.h3,{id:"59c3610b51824c349b62a8d93925a7ea",children:"Permissioned Governance Set With Equitable Vote Distribution"}),"\n",(0,i.jsxs)(s.p,{children:["KIRA's governance structure aims to promotes a non-sybil community\u2014i.e identifiable individuals who cannot own multiple KIRA accounts with the same or different governance permissions. This non-sybil status is curated by the governance set itself, hence termed \u201cpermissionned\u201d or \u201cgovernance curated\u201d governance set. While ",(0,i.jsx)(s.strong,{children:"members do not need to disclose their identity or undergo KYC procedures"}),", they must be identifiable individual entities. This is primarily achieved through KIRA\u2019s ",(0,i.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/identity-registrar",children:"Identity Registrar"}),", which enables all KIRA users to claim and validate various type of information on-chain. Additionally, the governance has various ways to ensure that new members are genuine individuals\u2014like conducting in-person meetings or group calls."]}),"\n",(0,i.jsx)(s.p,{children:"The voting power among governance members is uniformly distributed. Contrary to governance models where token holdings determine voting weight, KIRA provides equal voting weight to all governance members irrespective of their wealth or token ownership. This mitigates the risk of stolen tokens or accounts being used to manipulate network operations or sway governance votes. This becomes crucial in scenarios where centralized custodians, like exchanges holding large token positions of users, can impact other network operations."}),"\n",(0,i.jsx)(s.h3,{id:"3bc3fc5003d64c968b703fe0f949bd75",children:"Decision-making Process"}),"\n",(0,i.jsx)(s.p,{children:"The KIRA Network's decision-making process is orchestrated through the mechanism of proposals. These can be accepted, vetoed, or dismissed by governance members, provided they have the appropriate voting permission."}),"\n",(0,i.jsx)(s.p,{children:"This process is guided by the following principles:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Voting Eligibility:"})," Only those network participants who are ",(0,i.jsx)(s.strong,{children:"validators"})," or ",(0,i.jsx)(s.strong,{children:"councilors"})," (collectively known as ",(0,i.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/councilors--governance-ranking",children:"Councilors"}),") are eligible to vote on proposals."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Voting Permission:"})," Councilors can vote on a specific proposal only if they have been granted the respective permission that allows them to do so or if they possess a role that encompasses said permission."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Vote Casting:"})," Governance actors have the option to cast one of four distinct vote types: ",(0,i.jsx)(s.code,{children:"yes (1)"}),", ",(0,i.jsx)(s.code,{children:"abstain (2)"}),", ",(0,i.jsx)(s.code,{children:"no (3)"}),", or ",(0,i.jsx)(s.code,{children:"veto (4)"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Proposal Timeline:"})," A proposal cannot be accepted, vetoed, or dismissed until its ",(0,i.jsx)(s.code,{children:"voting_end_time"})," time has elapsed. Furthermore, a proposal cannot take effect until the ",(0,i.jsx)(s.code,{children:"enactment_end_time"})," has elapsed. No votes can be cast during the enactment period, and a proposal only comes into effect after this period ends."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsx)(s.p,{children:"The enactment time allows participants to analyze successful proposal results and act accordingly, avoiding unexpected shifts in voting outcomes."})}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.strong,{children:"Quorum Requirement:"})," A proposal necessitates a minimum number of votes, or a quorum, to be considered valid. The quorum is essential for ensuring adequate participation and representation in the decision-making process. Failing to meet the quorum results in the proposal being marked as ",(0,i.jsx)(s.code,{children:"QuorumNotReached"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["The default proposal minimum quorum percentage is 33% and is configurable by governance via the ",(0,i.jsx)(s.code,{children:"vote_quorum"})," ",(0,i.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/network-properties",children:"network property"}),"."]})}),"\n",(0,i.jsx)(s.p,{children:"The outcome of a proposal is determined based on the following rules:"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Outcome"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"Condition"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Passed"})}),(0,i.jsxs)(s.td,{children:["If quorum is reached and more than ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsxs)(s.mfrac,{children:[(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mn,{children:"2"})]})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"1\\over 2"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(s.span,{className:"mfrac",children:(0,i.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(s.span,{className:"vlist-r",children:[(0,i.jsxs)(s.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,i.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"2"})})})]}),(0,i.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(s.span,{style:{top:"-3.394em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"1"})})})]})]}),(0,i.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.345em"},children:(0,i.jsx)(s.span,{})})})]})}),(0,i.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]})," (>50%) of all votes are ",(0,i.jsx)(s.code,{children:"yes"})," votes."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"Rejected"})}),(0,i.jsxs)(s.td,{children:["If quorum is reached and votes of a type other than ",(0,i.jsx)(s.code,{children:"yes"})," sum to more than or equal to ",(0,i.jsxs)(s.span,{className:"katex",children:[(0,i.jsx)(s.span,{className:"katex-mathml",children:(0,i.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,i.jsxs)(s.semantics,{children:[(0,i.jsx)(s.mrow,{children:(0,i.jsxs)(s.mfrac,{children:[(0,i.jsx)(s.mn,{children:"1"}),(0,i.jsx)(s.mn,{children:"2"})]})}),(0,i.jsx)(s.annotation,{encoding:"application/x-tex",children:"1\\over 2"})]})})}),(0,i.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,i.jsxs)(s.span,{className:"base",children:[(0,i.jsx)(s.span,{className:"strut",style:{height:"1.1901em",verticalAlign:"-0.345em"}}),(0,i.jsxs)(s.span,{className:"mord",children:[(0,i.jsx)(s.span,{className:"mopen nulldelimiter"}),(0,i.jsx)(s.span,{className:"mfrac",children:(0,i.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,i.jsxs)(s.span,{className:"vlist-r",children:[(0,i.jsxs)(s.span,{className:"vlist",style:{height:"0.8451em"},children:[(0,i.jsxs)(s.span,{style:{top:"-2.655em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"2"})})})]}),(0,i.jsxs)(s.span,{style:{top:"-3.23em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,i.jsxs)(s.span,{style:{top:"-3.394em"},children:[(0,i.jsx)(s.span,{className:"pstrut",style:{height:"3em"}}),(0,i.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:(0,i.jsx)(s.span,{className:"mord mtight",children:"1"})})})]})]}),(0,i.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,i.jsx)(s.span,{className:"vlist-r",children:(0,i.jsx)(s.span,{className:"vlist",style:{height:"0.345em"},children:(0,i.jsx)(s.span,{})})})]})}),(0,i.jsx)(s.span,{className:"mclose nulldelimiter"})]})]})})]})," (>=50%) of all votes."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"RejectedWithVeto"})}),(0,i.jsxs)(s.td,{children:["If more than or equal to ",(0,i.jsx)(s.code,{children:"veto_threshold"})," (default 33.4%) votes are ",(0,i.jsx)(s.code,{children:"veto"})," votes, the proposal is rejected (a minority of members can reject a proposal)."]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"QuorumNotReached"})}),(0,i.jsxs)(s.td,{children:["The quorum was not reach before ",(0,i.jsx)(s.code,{children:"voting_end_time"}),"."]})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"5584c3f171f24ddfa7a616c344690c83",children:"Network Properties"}),"\n",(0,i.jsxs)(s.p,{children:["Two fundamental ",(0,i.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/network-properties",children:"network properties"})," establish the baseline for proposal duration and enactment timeframes: ",(0,i.jsx)(s.code,{children:"minimum_proposal_end_time"})," and ",(0,i.jsx)(s.code,{children:"proposal_enactment_time"}),"."]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"minimum_proposal_end_time"})," sets the lower limit for all proposals durations, also known as ",(0,i.jsx)(s.code,{children:"voting_end_time"})," which can be adjusted by the governance for individual proposal ",(0,i.jsx)(s.a,{href:"https://github.com/KiraCore/sekai/blob/master/types/Proposal.go",children:"types"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"proposal_enactment_time"})," creates a consistent rule that applies to all proposals. It sets each proposal's ",(0,i.jsx)(s.code,{children:"enactment_end_time"})," by adding the ",(0,i.jsx)(s.code,{children:"proposal_enactment_time"})," to that proposal's ",(0,i.jsx)(s.code,{children:"voting_end_time"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"There are two additional properties to consider:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"min_proposal_end_blocks"})," sets the minimum number of blocks during which the proposals remain active, which prevails over ",(0,i.jsx)(s.code,{children:"minimum_proposal_end_time"}),". This is used to prevent edge cases where ",(0,i.jsx)(s.code,{children:"minimum_proposal_end_time"})," is set to a value shorter than a single block time, thus making it impossible to vote in time."]}),"\n",(0,i.jsxs)(s.li,{children:["The ",(0,i.jsx)(s.code,{children:"min_proposal_enactment_blocks"})," defines the minimum number of blocks that must pass after a proposal has passed for the proposal to take effect. It prevails over ",(0,i.jsx)(s.code,{children:"proposal_enactment_time"})," for the same reason explained above."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"c87ca8ad5ef4402aab4f8f9c9768b78b",children:"Parameters"}),"\n",(0,i.jsx)(s.h4,{id:"c5381831565e4d2789f7d553745835e5",children:"Proposal Types"}),"\n",(0,i.jsxs)(s.p,{children:["Existing governance proposals types are listed ",(0,i.jsx)(s.a,{href:"https://github.com/KiraCore/sekai/blob/master/types/Proposal.go",children:"here"}),"."]}),"\n",(0,i.jsx)(s.h4,{id:"e3cd55578cb74dc394f3c4346e73236c",children:"Proposal"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"NAME"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"TYPE"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"EXAMPLE"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"proposal_id"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"uint64"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"1"})}),(0,i.jsx)(s.td,{children:"The unique identifier of the proposal."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"title"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"some title"})}),(0,i.jsx)(s.td,{children:"The title of the proposal."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"description"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"string"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"some description"})}),(0,i.jsx)(s.td,{children:"The description of the proposal."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"content"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"google.protobuf.Any"})}),(0,i.jsx)(s.td,{}),(0,i.jsx)(s.td,{children:"The content of the proposal."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"submit_time"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"google.protobuf.Timestamp"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"1677781730"})}),(0,i.jsx)(s.td,{children:"The timestamp when the proposal was submitted."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"voting_end_time"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"google.protobuf.Timestamp"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"1678386530"})}),(0,i.jsx)(s.td,{children:"The timestamp indicating the end of the voting period for the proposal."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"enactment_end_time"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"google.protobuf.Timestamp"})}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"1678991330"})}),(0,i.jsx)(s.td,{children:"The timestamp indicating the end of the enactment period for the proposal."})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"c48673132aeb432d977a1554e8a86434",children:"Vote Types"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"VOTE OPTION"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_OPTION_YES (1)"})}),(0,i.jsx)(s.td,{children:"Councilor agrees with the proposal and wants it to pass successfully."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_OPTION_ABSTAIN (2)"})}),(0,i.jsx)(s.td,{children:"Councilor has no strong opinion on the proposal, but wants to signify that they took note of it."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_OPTION_NO (3)"})}),(0,i.jsx)(s.td,{children:"Councilor disagrees with the proposal and wants to prevent it from passing successfully."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_OPTION_NO_WITH_VETO (4)"})}),(0,i.jsx)(s.td,{children:"Councilor strongly disagrees with a proposal and wants to prevent it from passing successfully bypassing the majority vote percentage requirements for approval due to concerns highly impacting network operations or safety."})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"703d5727415642f2a6b4d33cd6acff0a",children:"Proposal Statuses"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"STATUS"})}),(0,i.jsx)(s.th,{children:(0,i.jsx)(s.strong,{children:"DESCRIPTION"})})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_RESULT_UNKNOWN (0)"})}),(0,i.jsx)(s.td,{children:"Result of the proposal is not yet known/defined"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_RESULT_PASSED (1)"})}),(0,i.jsx)(s.td,{children:"Proposal reached quorum, passed successfully, was enacted and took effect"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_RESULT_REJECTED (2)"})}),(0,i.jsxs)(s.td,{children:["Proposal reached quorum but did NOT pass by lacking a minimum of >50% ",(0,i.jsx)(s.code,{children:"VOTE_OPTION_YES (1)"})," votes"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_RESULT_REJECTED_WITH_VETO (3)"})}),(0,i.jsxs)(s.td,{children:["Proposal reached quorum but did NOT pass due to rejection of >50% ",(0,i.jsx)(s.code,{children:"VOTE_OPTION_NO_WITH_VETO (4)"})," votes"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_PENDING (4)"})}),(0,i.jsx)(s.td,{children:"Proposal is not finalized yet and is still awaiting votes"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_RESULT_QUORUM_NOT_REACHED (5)"})}),(0,i.jsx)(s.td,{children:"Proposal failed to reach quorum and thus was rejected"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_RESULT_ENACTMENT (6)"})}),(0,i.jsx)(s.td,{children:"Proposal was successful but is awaiting enactment time to be passed and thus enforced"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"VOTE_RESULT_PASSED_WITH_EXEC_FAIL (7)"})}),(0,i.jsx)(s.td,{children:"Execution of the proposal logic failed with an unforeseen exception and no changes were made"})]})]})]}),"\n",(0,i.jsx)(s.h2,{id:"b82ffe5632d24d94997e6981477a132b",children:"CLI Syntax & Examples"}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["Each CLI command and proposal process in KIRA requires specific permissions. These permissions must be added to the account's whitelist or obtained as sudo permissions for direct changes. Refer to the ",(0,i.jsx)(s.a,{href:"/docs/backend---sekai/modules/governance/roles--permissions",children:"Roles & Permissions"})," documentation for more details."]})}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"$SIGNER"})," represents the transaction signer's account name or address. For instructions on setting common flags as environment variables, such as ",(0,i.jsx)(s.code,{children:"$FLAGS_TX"})," and ",(0,i.jsx)(s.code,{children:"$FLAGS_QR"}),", see the ",(0,i.jsx)(s.a,{href:"/docs/backend---sekai/cli-guide",children:"CLI Guide"})," page."]})}),"\n",(0,i.jsxs)(o.A,{children:[(0,i.jsxs)(a.A,{value:"transactions",label:"Transactions",children:[(0,i.jsx)(s.h2,{id:"54620f9f378f4c1a89d527786da6e1bc",children:"Transactions"}),(0,i.jsx)(s.p,{children:"There is no transactions other than the governance proposals for this sub-module."})]}),(0,i.jsxs)(a.A,{value:"queries",label:"Queries",children:[(0,i.jsx)(s.h2,{id:"5461ad3bca534f018a45d18d22b0bb69",children:"Queries"}),(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.code,{children:"proposals"})}),(0,i.jsx)(s.th,{children:"Query all proposals with optional filters."})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"proposal"})}),(0,i.jsx)(s.td,{children:"Query details for a specific proposal."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"vote"})}),(0,i.jsx)(s.td,{children:"Query details for a single vote on a proposal."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"votes"})}),(0,i.jsx)(s.td,{children:"Query vote details for a single proposal."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"voters"})}),(0,i.jsx)(s.td,{children:"Query voters for a single proposal."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"all-proposal-durations"})}),(0,i.jsx)(s.td,{children:"Query all proposal durations."})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"proposal-duration"})}),(0,i.jsx)(s.td,{children:"Query a specific proposal duration."})]})]})]}),(0,i.jsx)(s.h4,{id:"78011608601e48d08d0a071b9cd5c140",children:"Query Proposals"}),(0,i.jsxs)(s.p,{children:["Query all paginated proposals that match optional filters using the ",(0,i.jsx)(s.code,{children:"proposals"})," command."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Flags"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$VOTER_ADDRESS"}),": (Optional) Filter by proposals voted on by this voter."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sekaid query customgov gov proposals --voter=$VOTER_ADDRESS \\\n$FLAGS_QR | jq\n"})}),(0,i.jsx)(s.h4,{id:"095905665c39445cb75e2850e4b0dc1b",children:"Query Proposal"}),(0,i.jsxs)(s.p,{children:["Query details for a proposal using the ",(0,i.jsx)(s.code,{children:"proposal"})," command."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Args"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$PROPOSAL_ID"}),": The unique identifier of the proposal."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sekaid query customgov proposal $PROPOSAL_ID \\\n$FLAGS_QR | jq\n"})}),(0,i.jsx)(s.h4,{id:"63da01ba1e7641f1b655954ba40dd3c0",children:"Query Vote"}),(0,i.jsxs)(s.p,{children:["Query details for a single vote on a proposal using the ",(0,i.jsx)(s.code,{children:"vote"})," command."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Args"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$PROPOSAL_ID"}),": The unique identifier of the proposal."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$VOTER_ADDRESS"}),": The address of the voter."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sekaid query customgov vote $PROPOSAL_ID $VOTER_ADDRESS \\\n$FLAGS_QR | jq\n"})}),(0,i.jsx)(s.h4,{id:"8b6123c73e304d50a928294736b65015",children:"Query Votes"}),(0,i.jsxs)(s.p,{children:["Query vote details for a single proposal using the ",(0,i.jsx)(s.code,{children:"votes"})," command."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Args"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$PROPOSAL_ID"}),": The unique identifier of the proposal."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sekaid query customgov votes $PROPOSAL_ID \\\n$FLAGS_QR | jq\n"})}),(0,i.jsx)(s.h4,{id:"9fa5de3738c7484f84dc315dc112c0f5",children:"Query Whitelisted Proposal Voters"}),(0,i.jsxs)(s.p,{children:["Query voters for a single proposal using the ",(0,i.jsx)(s.code,{children:"voters"})," command."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Args"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$PROPOSAL_ID"}),": The unique identifier of the proposal."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sekaid query customgov voters $PROPOSAL_ID \\\n$FLAGS_QR | jq\n"})}),(0,i.jsx)(s.h4,{id:"29b4670c8bfc40fd8f62e1f4da02b57d",children:"Query All Proposal Durations"}),(0,i.jsxs)(s.p,{children:["Query all proposal durations using the ",(0,i.jsx)(s.code,{children:"all-proposal-durations"})," command."]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sekaid query customgov all-proposal-durations \\\n$FLAGS_QR | jq\n"})}),(0,i.jsx)(s.h4,{id:"c998c2f09f9c47168e2dd081f93f842f",children:"Query Proposal Duration"}),(0,i.jsxs)(s.p,{children:["Query a proposal duration using the ",(0,i.jsx)(s.code,{children:"proposal-duration"})," command."]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Args"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$PROPOSAL_TYPE"}),": The type of the proposal."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sekaid query customgov gov proposal-duration $PROPOSAL_TYPE \\\n$FLAGS_QR | jq\n"})})]}),(0,i.jsxs)(a.A,{value:"governance",label:"Governance",children:[(0,i.jsx)(s.h2,{id:"8fc5a2c18add467eba69f2af052d32fc",children:"Governance"}),(0,i.jsx)(s.table,{children:(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:(0,i.jsx)(s.code,{children:"set-proposal-durations-proposal"})}),(0,i.jsxs)(s.th,{children:["Proposes to set the ",(0,i.jsx)(s.code,{children:"voting_end_time"})," of specific proposal types"]})]})})}),(0,i.jsx)(s.h4,{id:"d2441765912d4167b72710bad8af4ea0",children:"Set Proposals Duration"}),(0,i.jsxs)(s.p,{children:["The CLI command, ",(0,i.jsx)(s.code,{children:"set-proposal-durations-proposal"}),", is used to create a proposal to set some proposal ",(0,i.jsx)(s.code,{children:"voting_end_time"})," in one batch. It requires two positional arguments: a list of proposal types and a corresponding list of durations. The command accepts the following flags:"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Args"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$PROPOSAL_PROPERTIES"}),": A comma-separated list of proposal ",(0,i.jsx)(s.a,{href:"https://github.com/KiraCore/sekai/blob/master/types/Proposal.go",children:"properties"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$DURATIONS"}),": A corresponding comma-separated list of durations for the proposal types."]}),"\n"]}),(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"Flags"})}),(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$TITLE"}),": The title of the proposal. This flag is required."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"$DESCRIPTION"}),": The description of the proposal, which can be a URL, some text, etc. This flag is required."]}),"\n"]}),(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sekaid tx customgov proposal set-proposal-durations-proposal \\\n--from=$SIGNER $FLAGS_TX \\\n--title=$TITLE --description=$DESCRIPTION \\\n$PROPOSAL_TYPES $DURATIONS\n"})})]})]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},9329:(e,s,n)=>{n.d(s,{A:()=>o});n(6540);var r=n(8215);const i={tabItem:"tabItem_Ymn6"};var t=n(4848);function o(e){let{children:s,hidden:n,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,r.A)(i.tabItem,o),hidden:n,children:s})}}}]);