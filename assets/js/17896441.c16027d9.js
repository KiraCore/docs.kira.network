"use strict";(self.webpackChunkkira_documentation=self.webpackChunkkira_documentation||[]).push([[8401],{8810:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ce});var n=s(6540),a=s(1003),i=s(9532),l=s(4848);const o=n.createContext(null);function r(e){let{children:t,content:s}=e;const a=function(e){return(0,n.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(s);return(0,l.jsx)(o.Provider,{value:a,children:t})}function c(){const e=(0,n.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:t,assets:s}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:t.keywords,image:s.image??t.image})}var m=s(8215),u=s(4581),h=s(1312),b=s(8774);function x(e){const{permalink:t,title:s,subLabel:n,isNext:a}=e;return(0,l.jsxs)(b.A,{className:(0,m.A)("pagination-nav__link",a?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[n&&(0,l.jsx)("div",{className:"pagination-nav__sublabel",children:n}),(0,l.jsx)("div",{className:"pagination-nav__label",children:s})]})}function p(e){const{previous:t,next:s}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,l.jsx)(x,{...t,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,l.jsx)(x,{...s,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function v(){const{metadata:e}=c();return(0,l.jsx)(p,{previous:e.previous,next:e.next})}var j=s(4586),g=s(4070),f=s(7559),_=s(5597),N=s(2252);const A={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,l.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function C(e){const t=A[e.versionMetadata.banner];return(0,l.jsx)(t,{...e})}function T(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(b.A,{to:s,onClick:n,children:(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:n}}=(0,j.A)(),{pluginId:a}=(0,g.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,_.g1)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,g.HW)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,m.A)(t,f.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(C,{siteTitle:n,versionMetadata:s})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(T,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function L(e){let{className:t}=e;const s=(0,N.r)();return s.banner?(0,l.jsx)(k,{className:t,versionMetadata:s}):null}function M(e){let{className:t}=e;const s=(0,N.r)();return s.badge?(0,l.jsx)("span",{className:(0,m.A)(t,f.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}const y={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function w(e){let{permalink:t,label:s,count:n,description:a}=e;return(0,l.jsxs)(b.A,{href:t,title:a,className:(0,m.A)(y.tag,n?y.tagWithCount:y.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}const B={tags:"tags_jXut",tag:"tag_QGVx"};function I(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(h.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,m.A)(B.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:B.tag,children:(0,l.jsx)(w,{...e})},e.permalink)))})]})}var S=s(4642);function E(){const{metadata:e}=c(),{editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n,tags:a}=e,i=a.length>0,o=!!(t||s||n);return i||o?(0,l.jsxs)("footer",{className:(0,m.A)(f.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,m.A)("row margin-top--sm",f.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(I,{tags:a})})}),o&&(0,l.jsx)(S.A,{className:(0,m.A)("margin-top--sm",f.G.docs.docFooterEditMetaRow),editUrl:t,lastUpdatedAt:s,lastUpdatedBy:n})]}):null}var H=s(1422),V=s(5195);const P={tocCollapsibleButton:"tocCollapsibleButton_TO0P",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_MG3E"};function G(e){let{collapsed:t,...s}=e;return(0,l.jsx)("button",{type:"button",...s,className:(0,m.A)("clean-btn",P.tocCollapsibleButton,!t&&P.tocCollapsibleButtonExpanded,s.className),children:(0,l.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const R={tocCollapsible:"tocCollapsible_ETCw",tocCollapsibleContent:"tocCollapsibleContent_vkbj",tocCollapsibleExpanded:"tocCollapsibleExpanded_sAul"};function F(e){let{toc:t,className:s,minHeadingLevel:n,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,H.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,m.A)(R.tocCollapsible,!i&&R.tocCollapsibleExpanded,s),children:[(0,l.jsx)(G,{collapsed:i,onClick:o}),(0,l.jsx)(H.N,{lazy:!0,className:R.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(V.A,{toc:t,minHeadingLevel:n,maxHeadingLevel:a})})]})}const U={tocMobile:"tocMobile_ITEo"};function D(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(F,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:(0,m.A)(f.G.docs.docTocMobile,U.tocMobile)})}var O=s(7763);function z(){const{toc:e,frontMatter:t}=c();return(0,l.jsx)(O.A,{toc:e,minHeadingLevel:t.toc_min_heading_level,maxHeadingLevel:t.toc_max_heading_level,className:f.G.docs.docTocDesktop})}var W=s(1107),Q=s(7910);function J(e){let{children:t}=e;const s=function(){const{metadata:e,frontMatter:t,contentTitle:s}=c();return t.hide_title||void 0!==s?null:e.title}();return(0,l.jsxs)("div",{className:(0,m.A)(f.G.docs.docMarkdown,"markdown"),children:[s&&(0,l.jsx)("header",{children:(0,l.jsx)(W.A,{as:"h1",children:s})}),(0,l.jsx)(Q.A,{children:t})]})}var K=s(53),$=s(4142),q=s(9169),X=s(6025),Y=s(6347);function Z(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const ee={breadcrumbHomeIcon:"breadcrumbHomeIcon_xK9p"};function te(){const e=`${(0,Y.zy)().pathname.split("/")[1]}/`,t=(0,X.Ay)(e);return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(b.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:t,children:(0,l.jsx)(Z,{className:ee.breadcrumbHomeIcon})})})}const se={breadcrumbsContainer:"breadcrumbsContainer_Alpn"};function ne(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,l.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,l.jsx)(b.A,{className:a,href:s,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:t})}):(0,l.jsx)("span",{className:a,children:t})}function ae(e){let{children:t,active:s,index:n,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,K.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,l.jsx)("meta",{itemProp:"position",content:String(n+1)})]})}function ie(){const e=(0,$.OF)(),t=(0,q.Dt)();return e?(0,l.jsx)("nav",{className:(0,K.A)(f.G.docs.docBreadcrumbs,se.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,l.jsx)(te,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,l.jsx)(ae,{active:n,index:s,addMicrodata:!!a,children:(0,l.jsx)(ne,{href:a,isLast:n,children:t.label})},s)}))]})}):null}var le=s(996);const oe={docItemContainer:"docItemContainer_Djhp",docItemCol:"docItemCol_VOVn"};function re(e){let{children:t}=e;const s=function(){const{frontMatter:e,toc:t}=c(),s=(0,u.l)(),n=e.hide_table_of_contents,a=!n&&t.length>0;return{hidden:n,mobile:a?(0,l.jsx)(D,{}):void 0,desktop:!a||"desktop"!==s&&"ssr"!==s?void 0:(0,l.jsx)(z,{})}}(),{metadata:{unlisted:n}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,m.A)("col",!s.hidden&&oe.docItemCol),children:[n&&(0,l.jsx)(le.A,{}),(0,l.jsx)(L,{}),(0,l.jsxs)("div",{className:oe.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ie,{}),(0,l.jsx)(M,{}),s.mobile,(0,l.jsx)(J,{children:t}),(0,l.jsx)(E,{})]}),(0,l.jsx)(v,{})]})]}),s.desktop&&(0,l.jsx)("div",{className:"col col--3",children:s.desktop})]})}function ce(e){const t=`docs-doc-id-${e.content.metadata.id}`,s=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:t,children:[(0,l.jsx)(d,{}),(0,l.jsx)(re,{children:(0,l.jsx)(s,{})})]})})}},8257:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var n=s(1943),a=s(8774),i=s(7559),l=s(4848);function o(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.A,{...e}),"\xa0 or \xa0",(0,l.jsx)(a.A,{to:"https://github.com/KiraCore/docs.kira.network/issues/new?assignees=&labels=enhancement&projects=&template=feature_request.yaml&title=%5BFEATURE+REQUEST%5D",className:i.G.common.editThisPage,children:"make a suggestion"})]})}},4439:(e,t,s)=>{s.d(t,{A:()=>j});var n=s(2774);s(6540);const a="cards_nyBj",i="card_xNfs",l="icon_oCUM",o="title_SCJF",r="body_ioPd",c="readMore_SpHb",d="cardSmall_PebJ",m="header_YSa0",u="iconSmall_QpSd",h="cardSmallLink_rsT0",b="titleSmall_MMj9",x="bodySmall_B5em";var p=s(8774),v=s(4848);const j={...n.A,Cards:function(e){let{children:t}=e;return(0,v.jsx)("div",{className:a,children:t})},Card:function(e){let{icon:t,title:s,body:n,link:a}=e;return(0,v.jsxs)("div",{className:i,children:[(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("div",{className:o,children:s}),t&&(0,v.jsx)("img",{src:t,alt:"Icon",className:l})]}),(0,v.jsx)("div",{className:r,children:n}),(0,v.jsx)(p.A,{to:a,className:c,children:"READ MORE"})]})},CardSmall:function(e){let{icon:t,title:s,body:n,link:a}=e;return(0,v.jsx)(p.A,{to:a,className:h,children:(0,v.jsxs)("div",{className:d,children:[(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("div",{className:b,children:s}),t&&(0,v.jsx)("img",{src:t,alt:"Icon",className:u})]}),(0,v.jsx)("div",{className:x,children:n})]})})}}}}]);