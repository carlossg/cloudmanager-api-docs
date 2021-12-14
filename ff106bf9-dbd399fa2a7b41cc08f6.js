"use strict";(self.webpackChunkcloudmanager_api_docs=self.webpackChunkcloudmanager_api_docs||[]).push([[823],{61078:function(e,t,a){a.r(t);var n=a(15861),o=a(87757),r=a.n(o),i=a(28387),c=a(91232),f=a(89147),s=a(22779),d=a(28490),l=a.n(d),b=a(25444),u=a(72390),p=(a(46438),a(37791)),m=a(48300),h=a(99608),v=a(86366),g=a(24058),A=a(74117),y=a(17953);var w=!!({}.GATSBY_ALGOLIA_APP_ID&&{}.GATSBY_ALGOLIA_API_KEY&&({}.GATSBY_ALGOLIA_INDEX_ALL||{}.GATSBY_ALGOLIA_INDEX_ALL_SRC)&&{}.GATSBY_ALGOLIA_SEARCH_INDEX),S=null;w?S=l()({}.GATSBY_ALGOLIA_APP_ID,{}.GATSBY_ALGOLIA_API_KEY):console.warn("AIO: Algolia config missing.");var I=!(!{}.GATSBY_IMS_SRC||!{}.GATSBY_IMS_CONFIG),_={openAPI:{src:null,block:null,frontMatter:"openAPISpec"},frame:{src:null,block:null,frontMatter:"frameSrc"}},k=function(e){e((function(e){return!e}))},L=function(e){return new Promise((function(t,a){var n=document.createElement("script");n.src=e,n.onload=function(e){return t(e)},n.onerror=function(e){return a(e)},n.onabort=function(e){return a(e)},document.head.appendChild(n)}))},P=function(e,t,n){var o=_[e];o.has=null==t?void 0:t[o.frontMatter],void 0!==o.has&&o.src!==o.has&&(o.src=o.has),o.src&&!o.block&&(n(!0),"openAPI"===e?o.block=(0,s.ZP)((function(){return Promise.all([a.e(35),a.e(461),a.e(910)]).then(a.bind(a,93158))})):"frame"===e&&(o.block=(0,s.ZP)((function(){return a.e(8).then(a.bind(a,68008))}))),o.block.load().then((function(){n(!1)})))},x={name:"hr37al",styles:"grid-area:main"},G={name:"boasoc",styles:"min-height:100vh;background-color:var(--spectrum-global-color-gray-50)"};t.default=function(e){var t=e.children,a=e.pageContext,o=e.location,s=(0,i.useState)(null),d=s[0],l=s[1],Z=(0,i.useState)(!0),E=Z[0],O=Z[1],B=(0,i.useState)(null),C=B[0],M=B[1];(0,i.useEffect)((function(){var e={}.GATSBY_IMS_SRC,t={}.GATSBY_IMS_CONFIG;e&&t?(0,n.Z)(r().mark((function a(){var n;return r().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L(""+e);case 3:(n=JSON.parse(t)).onReady=function(){l(window.adobeIMS)},window.adobeImsFactory.createIMSLib(n),window.adobeIMS.initialize(),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(0),console.error("AIO: IMS error.");case 12:return a.prev=12,O(!1),a.finish(12);case 15:case"end":return a.stop()}}),a,null,[[0,9,12,15]])})))():(console.warn("AIO: IMS config missing."),O(!1))}),[]),(0,i.useEffect)((function(){(0,n.Z)(r().mark((function e(){var t,a;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t={}.GATSBY_ALGOLIA_INDEX_ALL_SRC,a={}.GATSBY_ALGOLIA_INDEX_ALL,e.prev=2,!t){e.next=9;break}return e.next=6,L(""+t);case 6:M(window.AIO_ALGOLIA_INDEX_ALL),e.next=10;break;case 9:a&&M(JSON.parse(a));case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error("AIO: Failed setting search index.");case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))()}),[]);var N=(0,b.K2)("915530536"),Y=N.allMdx,T=N.allSitePage,z=N.site,D=N.allGithub,R=N.allGithubContributors,X=z.siteMetadata,F=z.pathPrefix,q=X.home,H=X.versions,J=X.pages,K=X.subPages,U=X.docs,Q=(0,i.useState)(!1),j=Q[0],V=Q[1],W=(0,i.useState)(!1),$=W[0],ee=W[1],te=(0,i.useState)(!1),ae=te[0],ne=te[1];(0,i.useEffect)((function(){new URL(window.location).searchParams.get(u.AQ.query)&&V(!0)}),[V]),(0,i.useEffect)((function(){window.onpopstate=function(){new URL(window.location).searchParams.get(u.AQ.query)?V(!0):V(!1)}}),[]),o.pathname=(0,u.Dm)(decodeURIComponent(o.pathname)),J.forEach((function(e){(0,u.y)(e),e.menu&&e.menu.forEach((function(e){(0,u.y)(e)}))})),H&&H.forEach((function(e){(0,u.y)(e)})),(0,u.y)(q),(0,u.y)(U);var oe=function e(t){(0,u.y)(t),t.pages&&t.pages.forEach((function(t){e(t)}))};K&&K.forEach((function(e){oe(e)}));var re=(0,u.A6)(o.pathname),ie=(0,u.Gh)(J),ce=(0,u.Lh)(re,K),fe=(0,u.mL)(re,ie,K),se=fe.length>0,de=null==a?void 0:a.frontmatter,le=(0,y.ZP)(),be=(0,y.ZP)(),ue="aio-Search-close";return P("openAPI",de,ne),P("frame",de,ne),(0,f.tZ)(i.default.Fragment,null,(0,f.tZ)(c.q,null,(0,f.tZ)("noscript",null,"\n          <style>\n            #"+le+" {\n              grid-template-columns: 0 auto;\n            }\n            \n            #"+be+" {\n              display: none !important;\n            }\n            \n            .gatsby-resp-image-image {\n              opacity: 1 !important;\n            }\n          </style>\n        ")),(0,f.tZ)(f.xB,{styles:(0,f.iv)("@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff2'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('woff'),url('https://use.typekit.net/af/cb695f/000000000000000000017701/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n4&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff2'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('woff'),url('https://use.typekit.net/af/74ffb1/000000000000000000017702/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=i4&v=3') format('opentype');font-display:swap;font-style:italic;font-weight:400;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff2'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('woff'),url('https://use.typekit.net/af/eaf09c/000000000000000000017703/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:700;}@font-face{font-family:'adobe-clean';src:url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff2'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('woff'),url('https://use.typekit.net/af/40207f/0000000000000000000176ff/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n3&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:300;}@font-face{font-family:'adobe-clean-serif';src:url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff2'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('woff'),url('https://use.typekit.net/af/505d17/00000000000000003b9aee44/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n9&v=3') format('opentype');font-display:swap;font-style:normal;font-weight:900;}html,body{margin:0;text-size-adjust:none;overscroll-behavior:auto contain;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;",j&&"overflow: hidden;",";}*[hidden]{display:none!important;}")}),(0,f.tZ)(p.z,{value:{ims:d,location:o,pageContext:a,hasSideNav:se,siteMetadata:X,pathPrefix:F,allSitePage:T,allMdx:Y,allGithub:D,allGithubContributors:R}},(0,f.tZ)(g.H,{title:null==de?void 0:de.title,description:null==de?void 0:de.description,keywords:null==de?void 0:de.keywords}),(0,f.tZ)("div",{dir:"ltr",className:"spectrum spectrum--medium spectrum--large spectrum--light","color-scheme":"light",css:G},(0,f.tZ)(i.default.Fragment,null,(0,f.tZ)("div",{id:le,css:(0,f.iv)("display:grid;grid-template-areas:'header header' 'sidenav main';grid-template-rows:var(--spectrum-global-dimension-size-800);grid-template-columns:",se?u.dP+" auto":"0 auto",";@media screen and (max-width: ",u.Av,"){grid-template-columns:0px auto;}@media screen and (max-width: ",u.q9,"){grid-template-rows:var(--spectrum-global-dimension-size-1200);}")},(0,f.tZ)("div",{css:(0,f.iv)("grid-area:header;position:fixed;height:var(--spectrum-global-dimension-size-800);left:0;right:0;background-color:var(--spectrum-global-color-gray-50);z-index:2;@media screen and (max-width: ",u.q9,"){height:var(--spectrum-global-dimension-size-600);}")},(0,f.tZ)(v.e,{hasIMS:I,ims:d,isLoadingIms:E,home:q,versions:H,pages:J,docs:U,location:o,hasSideNav:se,toggleSideNav:function(){k(ee)},hasSearch:w&&null!==C,showSearch:j,setShowSearch:V,searchButtonId:ue})),(0,f.tZ)("div",{id:be,hidden:!se,css:(0,f.iv)("grid-area:sidenav;position:fixed;z-index:1;width:",u.dP,";height:100%;background-color:var(--spectrum-global-color-gray-75);@media screen and (max-width: ",u.Av,"){transition:transform var(--spectrum-global-animation-duration-200) ease-in-out;transform:translateX(",$?"0":"-100%",");}")},se&&(0,f.tZ)(h.k,{selectedPages:ce,selectedSubPages:fe,setShowSideNav:ee})),(0,f.tZ)("div",{css:x},(0,f.tZ)("main",{hidden:!_.openAPI.has},_.openAPI.src&&_.openAPI.block&&(0,i.createElement)(_.openAPI.block,{src:_.openAPI.src})),(0,f.tZ)("main",{hidden:!_.frame.has},_.frame.src&&_.frame.block&&(0,i.createElement)(_.frame.block,{src:_.frame.src,height:null==de?void 0:de.frameHeight,location:o})),!_.openAPI.has&&!_.frame.has&&t)),w&&j&&C&&(0,f.tZ)(m.o,{algolia:S,searchIndex:JSON.parse({}.GATSBY_ALGOLIA_SEARCH_INDEX),indexAll:C,showSearch:j,setShowSearch:V,searchButtonId:ue}),(0,f.tZ)("div",{css:(0,f.iv)("position:fixed;top:0;left:0;right:0;bottom:0;display:",ae?"grid":"none",";place-items:center center;")},(0,f.tZ)(A._,{size:"L"})),se&&(0,f.tZ)("div",{css:(0,f.iv)("display:none;@media screen and (max-width: ",u.Av,"){display:block;transition:opacity 160ms ease-in;background-color:rgba(0, 0, 0, 0.4);pointer-events:none;opacity:0;position:fixed;top:0;left:0;height:100%;width:100%;",$&&"\n                    pointer-events: auto;\n                    opacity: 1;\n                  ",";}"),onClick:function(){k(ee)}})))))}}}]);
//# sourceMappingURL=ff106bf9-dbd399fa2a7b41cc08f6.js.map