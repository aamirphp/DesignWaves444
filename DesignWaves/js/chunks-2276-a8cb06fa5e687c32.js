(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2276],{56768:function(e,t){"use strict";t.DF={prefix:"far",iconName:"angle-right",icon:[256,512,[8250],"f105","M89.45 87.5l143.1 152c4.375 4.625 6.562 10.56 6.562 16.5c0 5.937-2.188 11.87-6.562 16.5l-143.1 152C80.33 434.1 65.14 434.5 55.52 425.4c-9.688-9.125-10.03-24.38-.9375-33.94l128.4-135.5l-128.4-135.5C45.49 110.9 45.83 95.75 55.52 86.56C65.14 77.47 80.33 77.87 89.45 87.5z"]},t.yO=t.DF},67581:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,r,n){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2817:function(e,t,r){"use strict";var n=r(44429);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(23903).Z,o=r(15154).Z,l=a(r(2784)),c=r(17744),u=r(4696),i=r(17640),s=r(37258),f=r(84117),d=r(91514),p=r(67581),m=r(5409),h=new Set;function v(e,t,r,n){if(c.isLocalURL(t)){if(!n.bypassPrefetchedCheck){var a=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(h.has(a))return;h.add(a)}Promise.resolve(e.prefetch(t,r,n)).catch(function(e){})}}function y(e){return"string"==typeof e?e:u.formatUrl(e)}var b=l.default.forwardRef(function(e,t){var r,a,u=e.href,h=e.as,b=e.children,_=e.prefetch,x=e.passHref,g=e.replace,k=e.shallow,C=e.scroll,j=e.locale,E=e.onClick,M=e.onMouseEnter,L=e.onTouchStart,w=e.legacyBehavior,N=void 0!==w&&w,B=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);r=b,N&&("string"==typeof r||"number"==typeof r)&&(r=l.default.createElement("a",null,r));var P=!1!==_,S=l.default.useContext(s.RouterContext),O=l.default.useContext(f.AppRouterContext),R=null!=S?S:O,T=!S,D=l.default.useMemo(function(){if(!S){var e=y(u);return{href:e,as:h?y(h):e}}var t=n(c.resolveHref(S,u,!0),2),r=t[0],a=t[1];return{href:r,as:h?c.resolveHref(S,h):a||r}},[S,u,h]),H=D.href,I=D.as,A=l.default.useRef(H),G=l.default.useRef(I);N&&(a=l.default.Children.only(r));var K=N?a&&"object"==typeof a&&a.ref:t,U=n(d.useIntersection({rootMargin:"200px"}),3),W=U[0],z=U[1],F=U[2],Z=l.default.useCallback(function(e){(G.current!==I||A.current!==H)&&(F(),G.current=I,A.current=H),W(e),K&&("function"==typeof K?K(e):"object"==typeof K&&(K.current=e))},[I,K,H,F,W]);l.default.useEffect(function(){R&&z&&P&&v(R,H,I,{locale:j})},[I,H,z,j,P,null==S?void 0:S.locale,R]);var q={ref:Z,onClick:function(e){N||"function"!=typeof E||E(e),N&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(e),R&&!e.defaultPrevented&&function(e,t,r,n,a,o,u,i,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||(!(p=(d=e).currentTarget.target)||"_self"===p)&&!d.metaKey&&!d.ctrlKey&&!d.shiftKey&&!d.altKey&&(!d.nativeEvent||2!==d.nativeEvent.which)&&c.isLocalURL(r)){e.preventDefault();var d,p,m=function(){"beforePopState"in t?t[a?"replace":"push"](r,n,{shallow:o,locale:i,scroll:u}):t[a?"replace":"push"](n||r,{forceOptimisticNavigation:!f})};s?l.default.startTransition(m):m()}}(e,R,H,I,g,k,C,j,T,P)},onMouseEnter:function(e){N||"function"!=typeof M||M(e),N&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),R&&(P||!T)&&v(R,H,I,{locale:j,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){N||"function"!=typeof L||L(e),N&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),R&&(P||!T)&&v(R,H,I,{locale:j,priority:!0,bypassPrefetchedCheck:!0})}};if(!N||x||"a"===a.type&&!("href"in a.props)){var J=void 0!==j?j:null==S?void 0:S.locale,Q=(null==S?void 0:S.isLocaleDomain)&&p.getDomainLocale(I,J,null==S?void 0:S.locales,null==S?void 0:S.domainLocales);q.href=Q||m.addBasePath(i.addLocale(I,J,null==S?void 0:S.defaultLocale))}return N?l.default.cloneElement(a,q):l.default.createElement("a",Object.assign({},B,q),r)});t.default=b,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},39097:function(e,t,r){e.exports=r(2817)},45847:function(e,t,r){e.exports=r(43990)},15756:function(e,t,r){"use strict";r.d(t,{g:function(){return d}});var n=r(81410),a=r(40380),o=r(17107),l=r(97705),c=r(52322),u=(0,o.G)(function(e,t){let{spacing:r,...n}=e,o=(0,a.w)(),u={mx:r,...o.separator};return(0,c.jsx)(l.m.span,{ref:t,role:"presentation",...n,__css:u})});u.displayName="BreadcrumbSeparator";var i=r(25578),s=r(31053),f=r(2784),d=(0,o.G)(function(e,t){let{isCurrentPage:r,separator:o,isLastChild:d,spacing:p,children:m,className:h,...v}=e,y=(0,i.W)(m),b=y.map(e=>e.type===n.A?(0,f.cloneElement)(e,{isCurrentPage:r}):e.type===u?(0,f.cloneElement)(e,{spacing:p,children:e.props.children||o}):e),_=(0,a.w)(),x={display:"inline-flex",alignItems:"center",..._.item},g=(0,s.cx)("chakra-breadcrumb__list-item",h);return(0,c.jsxs)(l.m.li,{ref:t,className:g,...v,__css:x,children:[b,!d&&(0,c.jsx)(u,{spacing:p,children:o})]})});d.displayName="BreadcrumbItem"},81410:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(40380),a=r(17107),o=r(97705),l=r(31053),c=r(52322),u=(0,a.G)(function(e,t){let{isCurrentPage:r,as:a,className:u,href:i,...s}=e,f=(0,n.w)(),d={ref:t,as:a,className:(0,l.cx)("chakra-breadcrumb__link",u),...s};return r?(0,c.jsx)(o.m.span,{"aria-current":"page",__css:f.link,...d}):(0,c.jsx)(o.m.a,{__css:f.link,href:i,...d})});u.displayName="BreadcrumbLink"},40380:function(e,t,r){"use strict";r.d(t,{W:function(){return n},w:function(){return a}});var[n,a]=(0,r(9165).k)({name:"BreadcrumbStylesContext",errorMessage:"useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Breadcrumb />\" "})},10920:function(e,t,r){"use strict";r.d(t,{a:function(){return d}});var n=r(40380),a=r(31053),o=r(25578),l=r(17107),c=r(93506),u=r(84586),i=r(97705),s=r(2784),f=r(52322),d=(0,l.G)(function(e,t){let r=(0,c.jC)("Breadcrumb",e),l=(0,u.Lr)(e),{children:d,spacing:p="0.5rem",separator:m="/",className:h,listProps:v,...y}=l,b=(0,o.W)(d),_=b.length,x=b.map((e,t)=>(0,s.cloneElement)(e,{separator:m,spacing:p,isLastChild:_===t+1})),g=(0,a.cx)("chakra-breadcrumb",h);return(0,f.jsx)(i.m.nav,{ref:t,"aria-label":"breadcrumb",className:g,__css:r.container,...y,children:(0,f.jsx)(n.W,{value:r,children:(0,f.jsx)(i.m.ol,{className:"chakra-breadcrumb__list",...v,__css:{display:"flex",alignItems:"center",...r.list},children:x})})})});d.displayName="Breadcrumb"},89364:function(e,t,r){"use strict";r.d(t,{R:function(){return n}});var n=(0,r(18191).I)({d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z",displayName:"ArrowBackIcon"})}}]);
//# sourceMappingURL=2276-a8cb06fa5e687c32.js.map