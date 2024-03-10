"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[3698],{245:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var n=a(5893),i=a(1151);a(4866),a(5162);const l={title:"Unified Liquid Staking",sidebar_position:4,slug:"/492e443f-5703-4d95-8508-a101405efde3"},t=void 0,m={id:"KIRA\u2019s-Economics/Unified-Liquid-Staking",title:"Unified Liquid Staking",description:"Overview",source:"@site/tabs/Learn/KIRA\u2019s-Economics/Unified-Liquid-Staking.mdx",sourceDirName:"KIRA\u2019s-Economics",slug:"/492e443f-5703-4d95-8508-a101405efde3",permalink:"/learn/492e443f-5703-4d95-8508-a101405efde3",draft:!1,unlisted:!1,editUrl:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=documentation,issue&projects=&template=report_an_issue.yaml&title=%5BISSUE+REPORT%5D&page-github=/learn/492e443f-5703-4d95-8508-a101405efde3&page-local=kira\u2019s-economics/unified-liquid-staking.mdx",tags:[],version:"current",lastUpdatedAt:1710080994,formattedLastUpdatedAt:"Mar 10, 2024",sidebarPosition:4,frontMatter:{title:"Unified Liquid Staking",sidebar_position:4,slug:"/492e443f-5703-4d95-8508-a101405efde3"},sidebar:"defaultSidebar",previous:{title:"Initial Liquidity Offering",permalink:"/learn/a6a660a6-3e5c-4a53-9ec3-14aa07f00351"},next:{title:"Glossary",permalink:"/learn/22c36797-10c8-40e4-9457-d8f1b6b4563b"}},r={},c=[{value:"Overview",id:"17f41ac6a17e4753a0358b8d8fb55a26",level:2},{value:"Constant Product Amm Model",id:"6913f654fbf94d1daed46a4167609f77",level:2},{value:"Maintaining Peg Stability",id:"77f3a6ca3eaf4e9594ae7bcc38e3fa14",level:2}];function h(s){const e={a:"a",annotation:"annotation",h2:"h2",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msub:"msub",munderover:"munderover",p:"p",semantics:"semantics",span:"span",ul:"ul",...(0,i.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"17f41ac6a17e4753a0358b8d8fb55a26",children:"Overview"}),"\n",(0,n.jsxs)(e.p,{children:["KIRA allows Consensus nodes to stake any combination of multiple whitelisted assets through its ",(0,n.jsx)(e.a,{href:"/learn/cf661a9f-09e0-4bc3-8248-bf0e545f0418#38c624fbdc324bd093974d2abb46c689",children:"Multiple Bonded Proof of Stake"})," mechanism. Depositors are automatically issued redeemable receipt tokens representing their staked assets, making them LSDs by default."]}),"\n",(0,n.jsx)(e.p,{children:"Liquid staking has multiple pain points in the current DeFi landscape. Due to competition within the LSD sector, LSD liquidity is fragmented across DeFi. Furthermore, each LSD must be integrated individually for use within DeFi protocols, which introduces coordination overhead, additional attack vectors, and value leaks."}),"\n",(0,n.jsx)(e.p,{children:"KIRA's Token Basketing module solves for the friction associated with liquid staking by aggregating users' receipt tokens by their liquidity denominations, into cohesive fungible assets."}),"\n",(0,n.jsx)(e.h2,{id:"6913f654fbf94d1daed46a4167609f77",children:"Constant Product Amm Model"}),"\n",(0,n.jsx)(e.p,{children:"Token Baskets are simple automated market makers (AMM) following a constant product model, which is self-rebalancing and offers swaps without price impact. A key aspect is that the sum of products of each token's amount multiplied by its weight remains constant before and after any trade, expressed mathematically as:"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"\u230a"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.munderover,{children:[(0,n.jsx)(e.mo,{children:"\u2211"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"0"})]}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{children:"L"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"h"}),(0,n.jsx)(e.mo,{children:"\u2212"}),(0,n.jsx)(e.mn,{children:"1"})]})]}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{children:"w"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"h"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mo,{children:"\u22c5"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"k"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"["}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mo,{stretchy:"false",children:"]"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"})]}),(0,n.jsx)(e.mo,{fence:"true",children:"\u230b"})]}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mi,{children:"c"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\left \\lfloor{ \\sum_{i=0}^{tokens.Length - 1}tokens[i].weight \\cdot tokens[i].amount}\\right \\rfloor  = constant"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"3.1609em",verticalAlign:"-1.2777em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size4",children:"\u230a"})}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mop op-limits",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.8832em"},children:[(0,n.jsxs)(e.span,{style:{top:"-1.8723em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"="}),(0,n.jsx)(e.span,{className:"mord mtight",children:"0"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{children:(0,n.jsx)(e.span,{className:"mop op-symbol large-op",children:"\u2211"})})]}),(0,n.jsxs)(e.span,{style:{top:"-4.3471em",marginLeft:"0em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.05em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"s"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"."}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"L"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"h"}),(0,n.jsx)(e.span,{className:"mbin mtight",children:"\u2212"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})]})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"1.2777em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mord",children:"."}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"h"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\u22c5"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03148em"},children:"k"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mopen",children:"["}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"i"}),(0,n.jsx)(e.span,{className:"mclose",children:"]"}),(0,n.jsx)(e.span,{className:"mord",children:"."}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"am"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,n.jsx)(e.span,{className:"delimsizing size4",children:"\u230b"})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6151em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"co"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"s"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"an"}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"t"})]})]})]})}),"\n",(0,n.jsxs)(e.p,{children:["In other words, this ensures the cumulative value of tokens in the basket remains unchanged (or slightly larger due to rounding). Any additional tokens from slippage account for surplus, while swap fees are paid to the network as ",(0,n.jsx)(e.a,{href:"/learn/5b32eede-3889-4f8e-baf5-0f0dc9179a6b",children:"fee rewards"}),". This constant product model provides stability by preserving the basket's overall value."]}),"\n",(0,n.jsx)(e.p,{children:"Assets within the pool are weighted according to their underlying staked value - these predetermined weights dictate the fixed price ratios at which incoming swaps are filled."}),"\n",(0,n.jsx)(e.p,{children:"Governance ensures each token's weight is properly configured to maintain the issued basket tokens' value. If weights are reconfigured (e.g. due to peg changes), the sum of each token's weighted amount must be greater than or equal to the issued basket tokens. For a basket B<id> containing tokens A, B, and C, governance ensure that:"}),"\n",(0,n.jsx)(e.span,{className:"katex-display",children:(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"A"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"})]})]}),(0,n.jsx)(e.mo,{children:"\xd7"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"A"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"w"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"h"}),(0,n.jsx)(e.mi,{children:"t"})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"B"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"})]})]}),(0,n.jsx)(e.mo,{children:"\xd7"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"B"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"w"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"h"}),(0,n.jsx)(e.mi,{children:"t"})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{children:"+"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{fence:"true",children:"("}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"C"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"})]})]}),(0,n.jsx)(e.mo,{children:"\xd7"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"C"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"w"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"g"}),(0,n.jsx)(e.mi,{children:"h"}),(0,n.jsx)(e.mi,{children:"t"})]})]}),(0,n.jsx)(e.mo,{fence:"true",children:")"})]}),(0,n.jsx)(e.mo,{children:"\u2265"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"B"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mo,{children:"<"}),(0,n.jsx)(e.mi,{children:"I"}),(0,n.jsx)(e.mi,{children:"D"}),(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"_"}),(0,n.jsx)(e.mo,{children:"<"}),(0,n.jsx)(e.mi,{children:"d"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"."}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"l"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"_"}),(0,n.jsx)(e.mi,{children:"a"}),(0,n.jsx)(e.mi,{children:"m"}),(0,n.jsx)(e.mi,{children:"o"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mi,{children:"t"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"_"}),(0,n.jsx)(e.mi,{children:"i"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"s"}),(0,n.jsx)(e.mi,{children:"u"}),(0,n.jsx)(e.mi,{children:"e"}),(0,n.jsx)(e.mi,{children:"d"})]})]})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\left(A_{amount} \\times A_{weight}\\right) + \\left(B_{amount} \\times B_{weight}\\right) + \\left(C_{amount} \\times C_{weight}\\right) \\geq B_{<ID>\\_<denom>.total\\_amount\\_issued}"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2806em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"am"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",children:"A"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"0em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"},children:"w"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"h"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2806em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"am"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"},children:"w"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"h"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"+"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0361em",verticalAlign:"-0.2861em"}}),(0,n.jsxs)(e.span,{className:"minner",children:[(0,n.jsx)(e.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2806em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"am"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xd7"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02691em"},children:"w"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"h"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.2861em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"\u2265"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.0503em",verticalAlign:"-0.367em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.05017em"},children:"B"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3361em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0502em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mrel mtight",children:"<"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.07847em"},children:"I"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"D"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:">"}),(0,n.jsx)(e.span,{className:"mord mtight",style:{marginRight:"0.02778em"},children:"_"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:"<"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"m"}),(0,n.jsx)(e.span,{className:"mrel mtight",children:">"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"."}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"a"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"l"}),(0,n.jsx)(e.span,{className:"mord mtight",style:{marginRight:"0.02778em"},children:"_"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"am"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"o"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"n"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"t"}),(0,n.jsx)(e.span,{className:"mord mtight",style:{marginRight:"0.02778em"},children:"_"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"i"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"ss"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"u"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"e"}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",children:"d"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.367em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})]})]})}),"\n",(0,n.jsx)(e.p,{children:"This safeguards redemption by ensuring sufficient tokens in the basket to cover outstanding basket tokens."}),"\n",(0,n.jsx)(e.h2,{id:"77f3a6ca3eaf4e9594ae7bcc38e3fa14",children:"Maintaining Peg Stability"}),"\n",(0,n.jsx)(e.p,{children:"To protect against depegging scenarios, each token has a configurable maximum limit within its basket. If an incoming swap would disbalance a particular basket's composition, dynamic fees adjust to incentivize rebalancing swaps over those that exacerbate the imbalance, returning it to equilibrium."}),"\n",(0,n.jsx)(e.p,{children:"As Token Baskets are built into the base layer, this weighting system automatically adjusts for changes in underlying staked value. Staking rewards and slashing penalties are natively accounted for, without reliance on third-party oracles."}),"\n",(0,n.jsx)(e.p,{children:"Should intervention be required, on-chain governance has multiple failsafe mechanisms:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"Consensus nodes can vote to include or exclude tokens from baskets"}),"\n",(0,n.jsx)(e.li,{children:"In ongoing emergencies, swaps can be halted by governance until resolved"}),"\n",(0,n.jsx)(e.li,{children:"Accumulated surplus swap fees function as an insurance fund controlled by chain governance. In the unlikely event an asset depegges within its basket, governance can mobilize this surplus fund toward restoring the asset's peg."}),"\n"]})]})}function d(s={}){const{wrapper:e}={...(0,i.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(h,{...s})}):h(s)}},5162:(s,e,a)=>{a.d(e,{Z:()=>t});a(7294);var n=a(6905);const i={tabItem:"tabItem_Ymn6"};var l=a(5893);function t(s){let{children:e,hidden:a,className:t}=s;return(0,l.jsx)("div",{role:"tabpanel",className:(0,n.Z)(i.tabItem,t),hidden:a,children:e})}},4866:(s,e,a)=>{a.d(e,{Z:()=>y});var n=a(7294),i=a(6905),l=a(2466),t=a(6550),m=a(469),r=a(1980),c=a(7392),h=a(12);function d(s){return n.Children.toArray(s).filter((s=>"\n"!==s)).map((s=>{if(!s||(0,n.isValidElement)(s)&&function(s){const{props:e}=s;return!!e&&"object"==typeof e&&"value"in e}(s))return s;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof s.type?s.type:s.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function o(s){const{values:e,children:a}=s;return(0,n.useMemo)((()=>{const s=e??function(s){return d(s).map((s=>{let{props:{value:e,label:a,attributes:n,default:i}}=s;return{value:e,label:a,attributes:n,default:i}}))}(a);return function(s){const e=(0,c.l)(s,((s,e)=>s.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((s=>s.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(s),s}),[e,a])}function x(s){let{value:e,tabValues:a}=s;return a.some((s=>s.value===e))}function j(s){let{queryString:e=!1,groupId:a}=s;const i=(0,t.k6)(),l=function(s){let{queryString:e=!1,groupId:a}=s;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,r._X)(l),(0,n.useCallback)((s=>{if(!l)return;const e=new URLSearchParams(i.location.search);e.set(l,s),i.replace({...i.location,search:e.toString()})}),[l,i])]}function p(s){const{defaultValue:e,queryString:a=!1,groupId:i}=s,l=o(s),[t,r]=(0,n.useState)((()=>function(s){let{defaultValue:e,tabValues:a}=s;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!x({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((s=>s.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((s=>s.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[c,d]=j({queryString:a,groupId:i}),[p,g]=function(s){let{groupId:e}=s;const a=function(s){return s?`docusaurus.tab.${s}`:null}(e),[i,l]=(0,h.Nk)(a);return[i,(0,n.useCallback)((s=>{a&&l.set(s)}),[a,l])]}({groupId:i}),u=(()=>{const s=c??p;return x({value:s,tabValues:l})?s:null})();(0,m.Z)((()=>{u&&r(u)}),[u]);return{selectedValue:t,selectValue:(0,n.useCallback)((s=>{if(!x({value:s,tabValues:l}))throw new Error(`Can't select invalid tab value=${s}`);r(s),d(s),g(s)}),[d,g,l]),tabValues:l}}var g=a(2389);const u={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var N=a(5893);function f(s){let{className:e,block:a,selectedValue:n,selectValue:t,tabValues:m}=s;const r=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),h=s=>{const e=s.currentTarget,a=r.indexOf(e),i=m[a].value;i!==n&&(c(e),t(i))},d=s=>{let e=null;switch(s.key){case"Enter":h(s);break;case"ArrowRight":{const a=r.indexOf(s.currentTarget)+1;e=r[a]??r[0];break}case"ArrowLeft":{const a=r.indexOf(s.currentTarget)-1;e=r[a]??r[r.length-1];break}}e?.focus()};return(0,N.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},e),children:m.map((s=>{let{value:e,label:a,attributes:l}=s;return(0,N.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:s=>r.push(s),onKeyDown:d,onClick:h,...l,className:(0,i.Z)("tabs__item",u.tabItem,l?.className,{"tabs__item--active":n===e}),children:a??e},e)}))})}function b(s){let{lazy:e,children:a,selectedValue:i}=s;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const s=l.find((s=>s.props.value===i));return s?(0,n.cloneElement)(s,{className:"margin-top--md"}):null}return(0,N.jsx)("div",{className:"margin-top--md",children:l.map(((s,e)=>(0,n.cloneElement)(s,{key:e,hidden:s.props.value!==i})))})}function v(s){const e=p(s);return(0,N.jsxs)("div",{className:(0,i.Z)("tabs-container",u.tabList),children:[(0,N.jsx)(f,{...s,...e}),(0,N.jsx)(b,{...s,...e})]})}function y(s){const e=(0,g.Z)();return(0,N.jsx)(v,{...s,children:d(s.children)},String(e))}},1151:(s,e,a)=>{a.d(e,{Z:()=>m,a:()=>t});var n=a(7294);const i={},l=n.createContext(i);function t(s){const e=n.useContext(l);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function m(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(i):s.components||i:t(s.components),n.createElement(l.Provider,{value:e},s.children)}}}]);