(self.webpackChunkglobal_nav=self.webpackChunkglobal_nav||[]).push([[6471],{4504:function(e,a,t){"use strict";t.d(a,{Jr:function(){return r},Ni:function(){return n}});var n,r,s=t(4848),o=t(9998),l=t(2485),i=t.n(l),u=t(7542),c=t(6478);!function(e){e.EXTRA_SMALL="extraSmall",e.SMALL="small",e.MEDIUM="medium",e.LARGE="large"}(n||(n={})),function(e){e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.HOLLOW="hollow",e.HOLLOW_INVERT="hollowInvert",e.TEXT="text",e.LINK="link"}(r||(r={}));const g=(0,o.forwardRef)((({rootElementName:e="button",variant:a=r.PRIMARY,size:t=n.SMALL,children:o,className:l,fullWidth:g=!1,...m},d)=>{let N=e;const h=(0,c.A)("button"),v=i()(h.Button,h[a],h[t],{[h.fullWidth]:g},l);m.href&&"button"===e&&(N="a");const f=i()(m.pendingClassName);return(0,s.jsx)(u.$,{rootElementName:N,...m,className:i()(v,{[f]:m.pending}),ref:d,children:m.pending&&m.pendingChildren?m.pendingChildren:o})}));g.displayName="Button",a.Ay=g},8664:function(e,a,t){"use strict";var n,r=t(4848),s=t(2485),o=t.n(s),l=t(6478);!function(e){e.DEFAULT="default",e.CHECKMARK="checkmark"}(n||(n={}));a.A=({children:e,className:a,orderedList:t=!1,variant:s=n.DEFAULT,...i})=>{const u=(0,l.A)("list"),c=o()(u.List,a,u[s]);return t?(0,r.jsx)("ol",{...i,className:c,children:e}):(0,r.jsx)("ul",{...i,className:c,children:e})}},3879:function(e,a,t){"use strict";var n=t(4848),r=t(2485),s=t.n(r),o=t(6478);a.A=({children:e,className:a,...t})=>{const r=(0,o.A)("list"),l=s()(r.ListItem,a);return(0,n.jsx)("li",{...t,className:l,children:e})}},4986:function(e,a,t){"use strict";t.d(a,{C:function(){return r}});var n=t(9149);const r=e=>{null!=e&&((e,a=0)=>{new Promise((t=>{setTimeout((()=>{e(),t()}),a)}))})((()=>(e=>{if(!e)return(0,n.Mv)(new Error("ga4Track event is not defined"));try{Object.prototype.hasOwnProperty.call(e,"ecommerce")&&window.dataLayer.push({ecommerce:null}),window.dataLayer.push(e)}catch(e){(0,n.Mv)(e)}})(e)))}},9149:function(e,a,t){"use strict";t.d(a,{Mv:function(){return r},p2:function(){return s}});var n=t(3237);const r=(e,a={})=>{((e,a={})=>{(0,n.d)(e,a)})(e,a)};function s(e){return a=>{try{return a?e(a):e()}catch(e){r(e)}return null}}},9690:function(e,a,t){"use strict";var n=t(9149);a.A=(0,n.p2)((({event_name:e,link_text:a,link_url:t,navigation_selection:n,ui_element_location:r})=>({event:"navigation",event_model:"navigation",event_name:null!=e?e:"navigation",link_text:a,link_url:t,...n&&{navigation_selection:n},...r&&{ui_element_location:r}})))},9300:function(e,a,t){"use strict";var n=t(8055),r=t(31),s=t(3802);a.A=()=>{const{footerDataService:e}=(0,s.A)();return(0,n.useSuspenseQuery)({queryKey:r.E.FOOTER_DATA,queryFn:()=>e.fetchFooterData()})}},31:function(e,a,t){"use strict";t.d(a,{E:function(){return n}});const n=Object.freeze({FOOTER_DATA:["FOOTER_DATA"],TRENDING_SEARCH_DATA:["TRENDING_SEARCH_DATA"],USER:["USER"],HEADER_DATA:["HEADER_DATA"],PLAN_INFO:["PLAN_INFO"],RECENT_BOARDS:["RECENT_BOARDS"],CART_COUNT:["CART_COUNT"]})},5011:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return J}});var n=t(9998),r=t(9452),s=t(6260),o=t(4504),l=t(5235),i="OGmDPbmJWVj8YKpCc8jg",u="PsjrKcSzoaSosg7vmRqs",c="bQ9hf5YFfFeCAQAW6YYV",g="JIJBtdyrIlVY1EkwnG8m",m="dWS7RMYOZhQV_60Msxa2",d=t(4848);const N=(0,l._h)({asyncImport:e=>Promise.all([t.e(1979),t.e(5985),t.e(9236),t.e(8247),t.e(8185),t.e(4362)]).then(t.bind(t,4734)),chunkName:e=>"LanguageModal-LanguageModal",options:{}}),h=(0,l._h)({asyncImport:e=>Promise.all([t.e(1979),t.e(5985),t.e(9236),t.e(8247),t.e(8185),t.e(1918)]).then(t.bind(t,3196)),chunkName:e=>"LocaleModal-LocaleModal",options:{}}),v=(0,l._h)({asyncImport:e=>t(5144)(`./${e.country}`),chunkName:e=>`Flags-${e.country}`.replace(/[^a-zA-Z0-9_!§$()=\-^°]+/g,"-"),options:{}});var f=({country:e,languageName:a})=>{const[t,r]=(0,n.useState)(!1),[s,l]=(0,n.useState)(!1),[f,y]=(0,n.useState)(e),p=e.languages.length>1,_=e=>{y(e),l(!1),r(!0)},I=()=>{r(!1),l(!0)};return(0,n.useEffect)((()=>y(e)),[e]),(0,n.useEffect)((()=>{const e=()=>{void 0!==window.eventBus&&window.eventBus.on("openLanguagePicker",I)};return window.addEventListener("load",e),()=>window.removeEventListener("load",e)}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{children:[p&&(0,d.jsxs)(o.Ay,{className:g,variant:o.Jr.HOLLOW,"data-country":e.code,onClick:()=>_(e),fullWidth:!0,children:[a,(0,d.jsx)("span",{className:m})]}),(0,d.jsxs)(o.Ay,{className:i,variant:o.Jr.HOLLOW,"data-country-code":e.code,onClick:I,fullWidth:!0,children:[(0,d.jsx)(v,{country:e.code,className:u}),(0,d.jsx)("span",{className:c,children:e.countryName})]})]}),t&&(0,d.jsx)(n.Suspense,{children:(0,d.jsx)(N,{open:t,country:f,onClose:()=>r(!1),openLocaleModal:I})}),s&&(0,d.jsx)(n.Suspense,{children:(0,d.jsx)(h,{open:s,onClose:()=>l(!1),openLanguageModal:_})})]})};const y=e=>({dataTestId:"learnMoreLinks",headerILoxKey:"learn_more_header",links:[{dataTestId:"PlansAndPricing",iloxKey:"plans_and_pricing",urlFnName:"plansAndPricing",dataNavId:"nav=footer_plans_and_pricing",hideLink:e},{dataTestId:"PromoCodes",iloxKey:"istock_promo_codes",urlFnName:"promoCode",dataNavId:"nav=footer_promo_codes"},{dataTestId:"TipsAndTricks",iloxKey:"tips_and_tricks",urlFnName:"istockBlog",dataNavId:"nav=footer_tips_and_tricks"},{dataTestId:"SearchGuide",iloxKey:"istock_search_guide",urlFnName:"istockSearchGuide",dataNavId:"nav=footer_search_guide"},{dataTestId:"StockPhotos",iloxKey:"photos_ftlp",urlFnName:"stockPhotos",dataNavId:"nav=footer_stock_photos"},{dataTestId:"StockVideos",iloxKey:"videos_ftlp",urlFnName:"video",dataNavId:"nav=footer_stock_videos"},{dataTestId:"StockIllustrations",iloxKey:"illustrations_ftlp",urlFnName:"illustrations",dataNavId:"nav=footer_stock_illustrations"},{dataTestId:"PlugingAndApps",iloxKey:"plugins_and_apps",urlFnName:"pluginsAndApps",dataNavId:"nav=footer_plugins_and_apps"},{dataTestId:"LicenseInformation",iloxKey:"license_information",urlFnName:"licenseInformation",dataNavId:"license_information"},{dataTestId:"LegalPrivacy",iloxKey:"legal_privacy",urlFnName:"legalAndPrivacy",dataNavId:"nav=footer_legal_privacy"}]}),p=e=>({dataTestId:"CompanyLinks",headerILoxKey:"company",links:[{dataTestId:"AboutUs",iloxKey:"about_us",urlFnName:"aboutUs",dataNavId:"nav=footer_about_us"},{dataTestId:"Newsroom",iloxKey:"footer.newsroom",urlFnName:"press",dataNavId:"nav=footer_press",target:"_blank",rel:"noopener noreferrer"},{dataTestId:"Investor",textDisplay:"Investor",urlFnName:"investor",dataNavId:"nav=footer_investor"},{dataTestId:"Careers",iloxKey:"careers",urlFnName:"careers",dataNavId:"nav=footer_careers"},{dataTestId:"Affiliates",iloxKey:"affiliates",urlFnName:"affiliates",dataNavId:"nav=footer_affiliates"},{dataTestId:"SellStock",iloxKey:"sell_stock",urlFnName:"istockWorkWithUs",dataNavId:"nav=footer_sell_stock"},{dataTestId:"ModernSlavery",iloxKey:"modern-slavery",urlFnName:"gettyModernSlavery",dataNavId:"nav=footer_modern_slavery",target:"_blank",rel:"noopener noreferrer",hideLink:"GBR"!==e},{dataTestId:"ContributorSupport",iloxKey:"contributor_support",urlFnName:"contributorSupport",dataNavId:"nav=footer_contributor_support"}]}),_={Facebook:{title:"Facebook",dataNavId:"nav_Facebook",id:"footer-facebook-icon",testId:"fb-link",class:"fb",urlFnName:"facebook"},Twitter:{title:"Twitter",dataNavId:"nav_Twitter",id:"footer-twitter-icon",testId:"tw-link",class:"tw",urlFnName:"twitter"},Instagram:{title:"Instagram",dataNavId:"nav_Instagram",id:"footer-instagram-icon",testId:"ig-link",class:"ig",urlFnName:"instagram"}};var I={navLinks:"vvpOeXjjLmQiaA2i3wHA",navBlockLocale:"MO51h7nAIwUhE60YmNEf",navBlock:"tdMZ8KqlCaX5qFf43L_Q"},k=t(7006),E=t(4253),x=t(9300),A="IxiTZzmKxX3yggS_IvX7",w="w3VCm1ldmDbeHPVhklh2";var L=({iloxTag:e,locale:a})=>{const t=(0,k.c)(),n=(new Date).getUTCFullYear(),r=(0,E.F)(),{data:{geoCountry:s}}=(0,x.A)(),o="en-us"===a&&"USA"===s;return(0,d.jsxs)("div",{"data-nosnippet":!0,className:A,children:[(0,d.jsx)("hr",{}),(0,d.jsx)("p",{className:w,"data-testid":"footer-copy",children:t(e,{zero:n})}),o?(0,d.jsx)("a",{className:w,"data-testid":"privacy-policy",href:r.privacyPolicy(),target:"privacy_policy",rel:"nofollow",children:t("do_not_sell_or_share_information")}):null]})},T=t(9690),S=t(4986),b="Vl3GgfW2lznAUvImi7Un";var j=()=>(0,d.jsxs)("svg",{id:"icons",preserveAspectRatio:"xMidYMid meet",version:"1.1",viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",xmlSpace:"preserve",children:[(0,d.jsx)("defs",{}),(0,d.jsxs)("g",{className:"target",id:"istock-logo",children:[(0,d.jsx)("path",{d:"m 0.7168875,67.91856 0.97054,0 0,-6.73095 -0.984174,0 0,-1.03585 2.10972,0 0,3.00025 c 0.662604,-0.70588 1.429534,-1.04118 2.375869,-1.04118 2.010635,0 3.448365,1.53544 3.448365,3.49993 0,1.98475 -1.46767,3.5108 -3.486499,3.5108 -0.908201,0 -1.615559,-0.32048 -2.317284,-1.03465 l 0,0.88794 -2.116537,0 0,-1.05629 z m 4.412185,-4.71893 c -1.24637,0 -2.316099,1.0304 -2.316099,2.44778 0,1.32906 1.069729,2.38111 2.2998,2.38111 1.254374,0 2.321434,-1.00314 2.321434,-2.44226 0,-1.39278 -1.06706,-2.38663 -2.305135,-2.38663 z m 4.9674955,6.88032 1.04395,0 0.52271,-1.30594 -2.1613905,-5.44941 -0.88103,0 0,-1.05363 2.9772205,0 0,1.05363 -0.91907,0 1.56399,3.98036 1.57476,-3.98036 -0.91502,0 0,-1.05363 2.96497,0 0,1.05363 -0.86889,0 -2.68123,6.75535 0.92865,0 0,1.05086 -3.149621,0 0,-1.05086 z m 12.754749,-5.52548 5.35971,0 0,4.42038 -0.95296,0 0,-1.39278 c -0.96935,1.0561 -2.07583,1.56656 -3.40904,1.56656 -2.64459,0 -4.52076,-2.06625 -4.52076,-4.64573 0,-2.38387 1.91421,-4.52896 4.63615,-4.52896 1.01697,0 1.82737,0.28373 2.685481,0.92045 l 0,-0.74263 0.965209,0 0,2.36639 -1.09146,0 c -0.75893,-0.87975 -1.58583,-1.30614 -2.62849,-1.30614 -1.88566,0 -3.27715,1.5301 -3.27715,3.33021 0,1.93456 1.4405,3.38731 3.260951,3.38731 1.369859,0 2.59855,-0.90415 3.007059,-2.31077 l -4.0347,0 0,-1.06429 z m 13.174121,2.29713 c -0.57013,1.46352 -1.8002,2.28073 -3.27449,2.28073 -1.96182,0 -3.49993,-1.55026 -3.49993,-3.50132 0,-1.99294 1.62504,-3.53925 3.463279,-3.53925 1.959061,0 3.522951,1.52862 3.522951,3.58964 0,0.10037 0,0.22534 -0.023,0.38549 l -5.73591,0 c 0.18603,1.19332 1.13494,1.97526 2.257611,1.97526 0.84725,0 1.564,-0.40989 1.973979,-1.19055 l 1.315531,0 z m -1.027651,-1.73767 c -0.301409,-1.24232 -1.145789,-1.94967 -2.246839,-1.94967 -1.11606,0 -2.052711,0.75754 -2.27263,1.94967 l 4.519469,0 z m 2.62829,-1.80574 -1.033169,0 0,-1.03722 1.033169,0 0,-2.11921 1.12674,0 0,2.11921 0.99246,0 0,1.03722 -0.99246,0 0,4.61037 0.99246,0 0,1.05629 -2.1192,0 0,-5.66666 z m 3.756501,0 -1.02765,0 0,-1.03722 1.02765,0 0,-2.11921 1.130879,0 0,2.11921 0.987041,0 0,1.03722 -0.987041,0 0,4.61037 0.987041,0 0,1.05629 -2.11792,0 0,-5.66666 z m 4.26281,6.77176 1.04404,0 0.5241,-1.30594 -2.16406,-5.44941 -0.87837,0 0,-1.05363 2.97722,0 0,1.05363 -0.92045,0 1.56261,3.98036 1.58296,-3.98036 -0.92184,0 0,-1.05363 2.97188,0 0,1.05363 -0.87293,0 -2.68538,6.75535 0.93684,0 0,1.05086 -3.15662,0 0,-1.05086 z m 9.1735,-2.17344 0.98023,0 0,-6.6945 -0.98023,0 0,-1.06025 3.21482,0 0,1.06025 -1.00877,0 0,6.6945 1.00877,0 0,1.06834 -3.21482,0 0,-1.06834 z m 4.15553,0.0121 0.95453,0 0,-4.61037 -0.94495,0 0,-1.03722 2.06082,0 0,0.95306 c 0.41275,-0.72218 0.99365,-1.06302 1.82599,-1.06302 0.98022,0 1.69567,0.46847 2.104179,1.33459 0.521331,-0.91501 1.159431,-1.34674 2.06358,-1.34674 1.652321,0 2.40838,1.20142 2.40838,2.86173 l 0,2.90797 0.967971,0 0,1.05629 -3.05586,0 0,-1.05629 0.9571,0 0,-2.97041 c 0,-1.1295 -0.521331,-1.7349 -1.448491,-1.7349 -1.06855,0 -1.640069,0.79281 -1.640069,2.37301 l 0,2.3323 0.972029,0 0,1.05629 -3.03284,0 0,-1.05629 0.96659,0 0,-2.22373 c 0,-1.57337 -0.17378,-2.48158 -1.48792,-2.48158 -1.01688,0 -1.60064,0.79281 -1.60064,2.37301 l 0,2.3323 0.970641,0 0,1.05629 -3.04104,0 0,-1.05629 z m 17.59184,0.16834 c -0.70588,0.71417 -1.41729,1.03466 -2.31057,1.03466 -2.03375,0 -3.4864,-1.52605 -3.4864,-3.5108 0,-1.96449 1.401079,-3.49173 3.44016,-3.49173 0.95444,0 1.7189,0.31218 2.38535,1.03297 l 0,-0.88103 2.06764,0 0,1.03722 -0.95167,0 0,4.59831 0.96263,0 0,1.06835 -2.10714,0 0,-0.88795 z m -2.29437,-4.88728 c -1.24074,0 -2.31067,0.99386 -2.31067,2.38664 0,1.43912 1.06993,2.44225 2.31749,2.44225 1.2273,0 2.29713,-1.04384 2.29713,-2.3811 0,-1.41738 -1.06983,-2.44779 -2.30395,-2.44779 z m 6.65636,6.16892 c 0.2376,0.71141 0.86888,1.09156 1.81384,1.09156 1.1947,0 2.19803,-0.85801 2.24674,-2.0948 l 0.0109,-0.33679 c -0.66923,0.7455 -1.40366,1.07942 -2.32954,1.07942 -1.98614,0 -3.44974,-1.50156 -3.44974,-3.49717 0,-1.92518 1.4146,-3.49993 3.4117,-3.49993 0.96392,0 1.73628,0.34616 2.38259,1.10242 l 0,-0.94228 2.07168,0 0,1.05362 -0.95434,0 0,4.54783 c 0,2.30256 -1.33043,3.57057 -3.38997,3.57057 -1.62781,0 -2.69072,-0.6951 -3.12393,-2.07445 l 1.31009,0 z m 4.08647,-3.71026 c 0,-1.41323 -1.05629,-2.45866 -2.29842,-2.45866 -1.23678,0 -2.30513,1.00463 -2.30513,2.3975 0,1.45256 1.07792,2.44503 2.30513,2.44503 1.22997,0 2.29842,-1.05748 2.29842,-2.38387 z m 9.26844,1.19331 c -0.57172,1.46352 -1.79754,2.28074 -3.27725,2.28074 -1.96045,0 -3.50408,-1.55026 -3.50408,-3.50132 0,-1.99295 1.63048,-3.53925 3.46872,-3.53925 1.96034,0 3.5257,1.52862 3.5257,3.58964 0,0.10037 0,0.22534 -0.0245,0.38548 l -5.73997,0 c 0.19147,1.19332 1.13494,1.97527 2.26187,1.97527 0.84705,0 1.56398,-0.40989 1.97111,-1.19056 l 1.31839,0 z m -1.03041,-1.73766 c -0.29598,-1.24232 -1.14175,-1.94968 -2.24684,-1.94968 -1.11607,0 -2.04876,0.75755 -2.27412,1.94968 l 4.52096,0 z m 1.93317,1.74853 1.12002,0 c 0,0.64621 0.5565,1.29508 1.38883,1.29508 0.70459,0 1.11992,-0.37739 1.11992,-1.02498 0,-0.71536 -0.53754,-0.97883 -1.71584,-1.21643 -1.50016,-0.30537 -1.82342,-1.08741 -1.82342,-1.8992 0,-1.11596 0.79015,-1.93466 2.05816,-1.93466 0.54988,0 0.98022,0.1887 1.3414,0.58239 l 0,-0.40723 0.92995,0 0,1.78657 -1.03318,0 c -0.15619,-0.65697 -0.529431,-0.95295 -1.163481,-0.95295 -0.619049,0 -0.967969,0.30675 -0.967969,0.83075 0,0.74262 0.60698,0.88251 1.650819,1.14995 1.30327,0.3516 1.908871,0.89733 1.908871,1.98899 0,1.25437 -0.871641,2.08789 -2.25771,2.08789 -0.634061,0 -1.114571,-0.19946 -1.538201,-0.6626 l 0,0.49702 -1.01817,0 0,-2.12059 z",fill:"white"}),(0,d.jsx)("path",{id:"istock-logo-mobile",d:"m 5.5548975,54.859 -4.813308,0 0,-17.96837 4.813308,0 0,17.96837 z m 4.6206105,-6.92811 c 1.48307,1.62843 3.74136,2.85254 6.11148,2.85254 2.22269,0 3.778929,-1.37233 3.778929,-3.26091 0,-3.3326 -4.814199,-3.74047 -8.296589,-5.77677 -2.0368005,-1.18694 -3.6691805,-2.96467 -3.6691805,-5.89334 0,-4.62929 4.2633405,-7.29545 8.5585195,-7.29545 2.629081,0 5.07424,0.63025 7.52039,2.44516 l -2.59249,3.70329 c -1.0401,-0.96297 -2.78026,-1.7016 -4.48492,-1.7016 -1.88651,0 -3.99944,0.81229 -3.99944,2.8125 0,4.1873 11.96577,2.88864 11.96577,11.63353 0,4.59123 -4.11413,7.77699 -8.78099,7.77699 -3.48141,0 -6.7037595,-1.44165 -9.3713995,-3.88967 l 3.2599195,-3.40627 z m 29.85031,6.92811 c -0.62887,0.2205 -2.07624,0.36783 -3.00076,0.36783 -2.89011,0 -4.99919,-0.96298 -6.22419,-2.59249 -0.92541,-1.22204 -1.33377,-2.813 -1.33377,-5.37137 l 0,-6.29727 -5.000091,0 0,-4.07507 5.000091,0 0,-5.00107 4.816169,0 0,5.00107 5.92745,0 0,4.07507 -5.92745,0 0,6.85109 c 0,1.11563 0.18391,1.77922 0.593261,2.26263 0.47858,0.55658 1.25676,0.88793 2.44221,0.88793 0.705,0 1.63336,-0.10789 1.96658,-0.18392 l 0.7405,4.07557 z M 50.704957,36.52033 c 5.44316,0 9.5563,4.1868 9.5563,9.37327 0,5.18548 -4.11314,9.33323 -9.5563,9.33323 -5.444049,0 -9.55818,-4.14775 -9.55818,-9.33323 0,-5.18647 4.114131,-9.37327 9.55818,-9.37327 z m 0,14.2631 c 2.814971,0 4.73914,-2.1861 4.73914,-4.88983 0,-2.70521 -1.924169,-4.9279 -4.73914,-4.9279 -2.81684,0 -4.74102,2.22269 -4.74102,4.9279 0,2.70373 1.92418,4.88983 4.74102,4.88983 z m 28.572451,0.40728 c -2.11391,2.81595 -4.78244,4.03612 -8.15123,4.03612 -5.55568,0 -9.63223,-4.14775 -9.63223,-9.33323 0,-5.22305 4.18631,-9.37327 9.669799,-9.37327 3.111611,0 5.889011,1.44648 7.555991,3.59304 l -3.40813,3.00037 c -0.961101,-1.25873 -2.40474,-2.14804 -4.147861,-2.14804 -2.77838,0 -4.852749,2.18758 -4.852749,4.9279 0,2.81536 2.03877,4.88983 4.965469,4.88983 1.961651,0 3.51701,-1.18742 4.295181,-2.371 l 3.70576,2.77828 z m 10.83031,-6.22409 9.89228,9.89238 -6.48414,0 -7.595431,-7.78232 0,7.78232 -4.81331,0 0,-25.93174 4.81331,0 0,13.78156 6.18562,-5.81819 6.78266,0 -8.78099,8.07599 z M 2.5e-6,31.70564 c 0,-1.73977 1.410888,-3.14868 3.149176,-3.14868 1.739275,0 3.148189,1.40891 3.148189,3.14868 0,1.73681 -1.408914,3.14858 -3.148189,3.14858 -1.738288,0 -3.149176,-1.41177 -3.149176,-3.14858 z",fill:"white"})]})]});var R=()=>{const e=(0,E.F)().home(),a="iStock Photos homepage";return(0,d.jsx)("a",{"data-testid":"istock-logo",className:b,"aria-label":a,href:e,onClick:()=>{const t=(0,T.A)({link_text:a,link_url:e,ui_element_location:"footer",navigation_selection:"istock-logo"});(0,S.C)(t)},children:(0,d.jsx)(j,{})})},C=t(8664),U=t(3879),F=t(9668);var P=({links:e})=>{const a=(0,k.c)(),t=(0,E.F)(),n=(0,s.Y)();return e.map((e=>{const r=e.supportNumber?`tel:${e.supportNumber.replace(/ /g,"")}`:t[e.urlFnName](n),s=()=>e.supportNumber?e.supportNumber:e.textDisplay?e.textDisplay:a(e.iloxKey);return e.hideLink||""===r?null:(0,d.jsx)(U.A,{children:(0,d.jsx)(F.A,{"data-testid":e.dataTestId,href:r,"data-nav":e.dataNavId,onClick:()=>{const a=(0,T.A)({link_text:s(),link_url:r,ui_element_location:"footer",navigation_selection:e.supportNumber?e.supportNumber:e.textDisplay?e.textDisplay:e.iloxKey});(0,S.C)(a)},target:e.target||"_self",rel:"_blank"===e.target?"noopener noreferrer":"",children:s()})},e.dataNavId)}))},D="XX0fUKz5Y16KJpRa1k5d",K="SQ9aZcw3IANp_BrCz5fP";var M=({content:e})=>{const a=(0,k.c)();return(0,d.jsx)("nav",{className:D,children:(0,d.jsxs)(C.A,{children:[(0,d.jsx)(U.A,{className:K,children:a(e.headerILoxKey)}),(0,d.jsx)(P,{links:e.links})]})})},z={socialLinks:"JawkqUnsDRJ3WL6ZYGbr",fb:"XEUGgdyZAVz2837Udn1W",tw:"y6_unNFJnlNvNVzSLDYh",ig:"YkXwBrhfU3ZbyIzGIwCa"};var O=()=>{const e=(0,E.F)();return(0,d.jsx)("nav",{className:z.socialLinks,children:(0,d.jsx)("ul",{children:["Facebook","Twitter","Instagram"].map((a=>{const t=_[a],n=e[t.urlFnName]();return(0,d.jsx)("li",{children:(0,d.jsx)("a",{"aria-label":t.title,"data-testid":t.testId,"data-nav":t.dataNavId,className:z[t.class],href:n,onClick:()=>{const e=(0,T.A)({link_text:t.title,link_url:n,ui_element_location:"footer",navigation_selection:a});(0,S.C)(e)},children:" "})},a)}))})})},B=t(3498);var W=({teamMember:e,countryCode:a})=>{const t=(0,s.Y)(),n=(t||"en-US").slice(0,2),r=(0,B.A)(),{country:o,language:l}=r.getDefault(a,n);return(0,d.jsxs)("div",{"data-testid":"full-layout-footer",className:I.fullFooter,children:[(0,d.jsxs)("nav",{className:I.navLinks,children:[(0,d.jsxs)("nav",{className:I.navBlockLocale,children:[(0,d.jsx)(R,{}),(0,d.jsx)(f,{country:o,languageName:l.languageName})]}),(0,d.jsx)(M,{"column-type":"learn_more",content:y(e)}),(0,d.jsx)(M,{"column-type":"company",content:p(o.code)}),(0,d.jsx)(M,{"column-type":"support",content:{dataTestId:"SupportLinks",headerILoxKey:"support_footer",links:[{dataTestId:"ContactUs",iloxKey:"contact_us",urlFnName:"contactUs",dataNavId:"nav=footer_contact_us"},{dataTestId:"Faq",iloxKey:"faq",urlFnName:"faq",dataNavId:"nav=footer_faq"},{dataTestId:"SiteMap",iloxKey:"site_map",urlFnName:"sitemap",dataNavId:"nav=footer_site_map"}]}}),(0,d.jsx)("nav",{className:I.navBlock,children:(0,d.jsx)(O,{})})]}),(0,d.jsx)(L,{iloxTag:"metadata_footer",locale:t})]})},H="jYwSmQrnCqugdge1CuXj",G="uW0bcZEWT9XoRCTtwYP4",Y="zJ0DDP8_hUWMxUyq5LZ9";var V=()=>{const e=(0,k.c)(),a=(0,s.Y)();return(0,d.jsxs)("div",{"data-testid":"checkout-layout-footer",className:Y,children:[(0,d.jsx)("nav",{children:(0,d.jsxs)("ul",{className:H,children:[(0,d.jsx)("li",{className:G,children:e("support_footer")}),(0,d.jsx)(P,{links:[{dataTestId:"ContactUs",iloxKey:"contact_us",urlFnName:"contactUs",dataNavId:"nav=footer_contact_us"},{dataTestId:"Faq",iloxKey:"faq",urlFnName:"faq",dataNavId:"nav=footer_faq"},{dataTestId:"SiteMap",iloxKey:"site_map",urlFnName:"sitemap",dataNavId:"nav=footer_site_map"}]})]})}),(0,d.jsx)(L,{iloxTag:"istock_copyright",locale:a})]})},Z="TLCWhWeozSahwvfaQmP4",q="OyunGj8o3Dezjul2imNt";var X=()=>{const e=(0,k.c)(),a=(new Date).getFullYear();return(0,d.jsx)("div",{"data-testid":"minimal-layout-footer",className:Z,children:(0,d.jsxs)("p",{className:q,children:[`©${a} iStockphoto LP. `,(0,d.jsx)("span",{children:e("istock_trademark_statement")})]})})},$="GB7UctwotXmGekz1UqDR";var J=e=>{const{layout:a}=e,t=(0,r.Z)(),{tld:n}=t,s=["com"].includes(n),{data:{countryCode:o,isTeamMember:l}}=(0,x.A)();return(0,d.jsx)("div",{"data-testid":"istock-footer",className:$,children:"minimal"===a?(0,d.jsx)(X,{showUSPrivacyLink:s}):"checkout"===a?(0,d.jsx)(V,{}):(0,d.jsx)(W,{countryCode:o,teamMember:l,showUSPrivacyLink:s})})}},3498:function(e,a,t){"use strict";t.d(a,{A:function(){return I}});var n,r=t(9998),s=t(9452),o=JSON.parse('{"africaMiddleEast":{"ARE":{"languages":{"en":{"countryName":"UAE","languageName":"English"}}},"ISR":{"languages":{"en":{"countryName":"Israel","languageName":"English"}}},"ZAF":{"languages":{"en":{"countryName":"South Africa","languageName":"English"}}}},"asiaPacific":{"AUS":{"languages":{"en":{"countryName":"Australia","languageName":"English"}}},"HKG":{"languages":{"zh":{"countryName":"香港特別行政區","default":true,"languageName":"中文","masterLanguage":true},"en":{"countryName":"Hong Kong","languageName":"English"}}},"IDN":{"languages":{"id":{"countryName":"Indonesia","default":true,"languageName":"Bahasa Indonesia","masterLanguage":true},"en":{"countryName":"Indonesia","languageName":"English"}}},"IND":{"languages":{"en":{"countryName":"India","languageName":"English"}}},"JPN":{"languages":{"ja":{"countryName":"日本","default":true,"languageName":"日本語","masterLanguage":true},"en":{"countryName":"Japan","languageName":"English"}}},"KOR":{"languages":{"ko":{"countryName":"대한민국","default":true,"languageName":"한국어","masterLanguage":true},"en":{"countryName":"South Korea","languageName":"English"}}},"MYS":{"languages":{"en":{"countryName":"Malaysia","languageName":"English"}}},"NZL":{"languages":{"en":{"countryName":"New Zealand","languageName":"English"}}},"SGP":{"languages":{"en":{"countryName":"Singapore","languageName":"English"}}},"THA":{"languages":{"th":{"countryName":"ประเทศไทย","default":true,"languageName":"ไทย","masterLanguage":true},"en":{"countryName":"Thailand","languageName":"English"}}},"VNM":{"languages":{"vi":{"countryName":"Việt Nam","default":true,"languageName":"Tiếng Việt","masterLanguage":true},"en":{"countryName":"Vietnam","languageName":"English"}}}},"northSouthAmerica":{"BRA":{"languages":{"pt":{"default":true,"countryName":"Brasil","languageName":"Português do Brasil"},"en":{"countryName":"Brazil","languageName":"English"}}},"CAN":{"languages":{"en":{"default":true,"countryName":"Canada","languageName":"English"},"fr":{"countryName":"Canada Français","languageName":"Français"}}},"MEX":{"languages":{"es":{"default":true,"countryName":"Latinoamérica","languageName":"Español"},"en":{"countryName":"Latin America","languageName":"English"}}},"USA":{"languages":{"en":{"countryName":"United States","default":true,"languageName":"English","masterLanguage":true},"es":{"countryName":"Estados Unidos","languageName":"Español"}}}},"europe":{"BEL":{"languages":{"fr":{"default":true,"countryName":"Belgique","languageName":"Français"},"en":{"countryName":"Belgium","languageName":"English"},"nl":{"countryName":"België","languageName":"Nederlands"}}},"CZE":{"languages":{"cs":{"default":true,"countryName":"Česká republika","languageName":"Čeština","masterLanguage":true},"en":{"countryName":"Czech Republic","languageName":"English"}}},"DNK":{"languages":{"en":{"countryName":"Denmark","languageName":"English"}}},"DEU":{"languages":{"de":{"default":true,"countryName":"Deutschland","languageName":"Deutsch","masterLanguage":true},"en":{"countryName":"Germany","languageName":"English"}}},"ESP":{"languages":{"es":{"default":true,"countryName":"España","languageName":"Español","masterLanguage":true},"en":{"countryName":"Spain","languageName":"English"}}},"FRA":{"languages":{"fr":{"default":true,"countryName":"France","languageName":"Français","masterLanguage":true},"en":{"countryName":"France","languageName":"English"}}},"IRL":{"languages":{"en":{"countryName":"Ireland","languageName":"English"}}},"ITA":{"languages":{"it":{"default":true,"countryName":"Italia","languageName":"Italiano","masterLanguage":true},"en":{"countryName":"Italy","languageName":"English"}}},"NLD":{"languages":{"nl":{"default":true,"countryName":"Nederland","languageName":"Nederlands","masterLanguage":true},"en":{"countryName":"Netherlands","languageName":"English"}}},"NOR":{"languages":{"en":{"countryName":"Norway","languageName":"English"}}},"AUT":{"languages":{"de":{"default":true,"countryName":"Österreich","languageName":"Deutsch"},"en":{"countryName":"Austria","languageName":"English"}}},"POL":{"languages":{"pl":{"default":true,"countryName":"Polska","languageName":"Polski","masterLanguage":true},"en":{"countryName":"Poland","languageName":"English"}}},"PRT":{"languages":{"pt":{"default":true,"countryName":"Portugal","languageName":"Português","masterLanguage":true},"en":{"countryName":"Portugal","languageName":"English"}}},"CHE":{"languages":{"de":{"default":true,"countryName":"Schweiz","languageName":"Deutsch"},"fr":{"countryName":"Suisse","languageName":"Français"},"it":{"countryName":"Svizzera","languageName":"Italiano"},"en":{"countryName":"Switzerland","languageName":"English"}}},"FIN":{"languages":{"fi":{"default":true,"countryName":"Suomi","languageName":"suomi","masterLanguage":true},"en":{"countryName":"Finland","languageName":"English"}}},"SWE":{"languages":{"sv":{"default":true,"countryName":"Sverige","languageName":"Svenska","masterLanguage":true},"en":{"countryName":"Sweden","languageName":"English"}}},"TUR":{"languages":{"tr":{"default":true,"countryName":"Türkiye","languageName":"Türkçe","masterLanguage":true},"en":{"countryName":"Turkey","languageName":"English"}}},"GBR":{"languages":{"en":{"countryName":"United Kingdom","languageName":"English"}}},"HUN":{"languages":{"hu":{"default":true,"countryName":"Magyarország","languageName":"Magyar","masterLanguage":true},"en":{"countryName":"Hungary","languageName":"English"}}},"ROU":{"languages":{"ro":{"default":true,"countryName":"România","languageName":"Română","masterLanguage":true},"en":{"countryName":"Romania","languageName":"English"}}},"RUS":{"languages":{"ru":{"default":true,"countryName":"Россия","languageName":"Русский","masterLanguage":true},"en":{"countryName":"Russia","languageName":"English"}}},"UKR":{"languages":{"uk":{"default":true,"countryName":"Україна","languageName":"Українська","masterLanguage":true},"en":{"countryName":"Ukraine","languageName":"English"}}}}}');function l(e,a,t){i(e,a),a.set(e,t)}function i(e,a){if(a.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function u(e,a){return e.get(g(e,a))}function c(e,a,t){return e.set(g(e,a),t),t}function g(e,a,t){if("function"==typeof e?e===a:e.has(a))return arguments.length<3?a:t;throw new TypeError("Private element is not present on this object")}var m=new WeakMap,d=new WeakMap,N=new WeakSet;class h{constructor(){var e,a;i(e=this,a=N),a.add(e),l(this,m,void 0),l(this,d,void 0),c(m,this,o),c(d,this,{}),this.c=o}getContinentCountries(e){const a=u(m,this)[e];return Object.keys(a).map((e=>g(N,this,y).call(this,e,a[e])))}getCountry(e){if(u(d,this)[e])return u(d,this)[e];const a=g(N,this,v).call(this,e);return g(N,this,y).call(this,e,a)}getDefault(e,a){let t=e?this.getCountry(e):null,n=t?t.languages.find((e=>e.languageKey===a)):null;return n||(t=g(N,this,f).call(this,a),n=t.languages.find((e=>e.languageKey===a))),{language:n,country:t}}}function v(e){for(const a of Object.keys(u(m,this))){const t=u(m,this)[a],n=Object.keys(t).find((a=>e===a));if(n)return u(m,this)[a][n]}return null}function f(e){for(const a of Object.keys(u(m,this)))for(const t of Object.keys(u(m,this)[a])){const n=u(m,this)[a][t];for(const a of Object.keys(n.languages)){const r=n.languages[a];if(e===a&&r.masterLanguage)return g(N,this,y).call(this,t,n)}}return this.getCountry("us")}function y(e,a){return a?(u(d,this)[e]||(u(d,this)[e]={...a,code:e,countryName:_.call(n,a).countryName,languages:p.call(n,a.languages)}),u(d,this)[e]):null}function p(e){return Object.keys(e).map((a=>({...e[a],languageKey:a})))}function _(e){const a=Object.keys(e.languages),t=1===a.length?a[0]:a.find((a=>!0===e.languages[a].default));return e.languages[t]}n=h;var I=()=>{const e=(0,s.Z)().nickname;return(0,r.useMemo)((()=>new h(e)),[e])}},3802:function(e,a,t){"use strict";t.d(a,{A:function(){return b}});var n=t(9998),r=t(2651);const s={headers:{Accept:"application/json"}};var o="/components/global-nav/api";function l(e,a,t){(function(e,a){if(a.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,a),a.set(e,t)}function i(e,a,t){if("function"==typeof e?e===a:e.has(a))return arguments.length<3?a:t;throw new TypeError("Private element is not present on this object")}var u=new WeakMap;var c=class{constructor(e){var a,t,n;l(this,u,void 0),t=this,n=e,(a=u).set(i(a,t),n),this.baseUrl=`${o}`}fetchFooterData(){const e=`${this.baseUrl}/footer`;return(a=u,t=this,a.get(i(a,t))).get(e);var a,t}};function g(e,a,t){(function(e,a){if(a.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,a),a.set(e,t)}function m(e,a){return e.get(d(e,a))}function d(e,a,t){if("function"==typeof e?e===a:e.has(a))return arguments.length<3?a:t;throw new TypeError("Private element is not present on this object")}var N=new WeakMap;var h=class{constructor(e){var a,t,n;g(this,N,void 0),t=this,n=e,(a=N).set(d(a,t),n),this.baseUrl=`${o}`}fetchHeaderData(){const e=`${this.baseUrl}/header`;return m(N,this).get(e)}fetchGettyHeaderData(){const e=`${this.baseUrl}/header/getty`;return m(N,this).get(e)}};function v(e,a,t){(function(e,a){if(a.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,a),a.set(e,t)}function f(e,a,t){if("function"==typeof e?e===a:e.has(a))return arguments.length<3?a:t;throw new TypeError("Private element is not present on this object")}var y=new WeakMap;var p=class{constructor(e){var a,t,n;v(this,y,void 0),t=this,n=e,(a=y).set(f(a,t),n),this.baseUrl=`${o}`}fetchPlanInfo(){const e=`${this.baseUrl}/planInfo`;return(a=y,t=this,a.get(f(a,t))).get(e);var a,t}};function _(e,a,t){(function(e,a){if(a.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,a),a.set(e,t)}function I(e,a){return e.get(k(e,a))}function k(e,a,t){if("function"==typeof e?e===a:e.has(a))return arguments.length<3?a:t;throw new TypeError("Private element is not present on this object")}var E=new WeakMap;var x=class{constructor(e){var a,t,n;_(this,E,void 0),t=this,n=e,(a=E).set(k(a,t),n),this.baseUrl=`${o}`}getBoardsData(){const e=`${this.baseUrl}/boards`;return I(E,this).get(e)}createNewBoard(e){const a=`${this.baseUrl}/boards`;return I(E,this).post(a,{name:e})}};function A(e,a,t){return(a=function(e){var a=function(e,a){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,a||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===a?String:Number)(e)}(e,"string");return"symbol"==typeof a?a:a+""}(a))in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function w(e,a,t){(function(e,a){if(a.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")})(e,a),a.set(e,t)}function L(e,a,t){if("function"==typeof e?e===a:e.has(a))return arguments.length<3?a:t;throw new TypeError("Private element is not present on this object")}var T=new WeakMap;var S=class{constructor(e){var a,t,n;w(this,T,void 0),A(this,"baseUrl",void 0),t=this,n=e,(a=T).set(L(a,t),n),this.baseUrl=`${o}`}getCartCount(){const e=`${this.baseUrl}/carts/item-count`;return(a=T,t=this,a.get(L(a,t))).get(e);var a,t}};var b=()=>{const e=(0,r.V)();return(0,n.useMemo)((()=>{const a=(t=e,{get:(e,a={})=>t.get(e,{...a,...s}).then((e=>e.data)),post:(e,a={},n={})=>t.post(e,a,{...n,...s}).then((e=>e.data))});var t;return{boardsService:new x(a),footerDataService:new c(a),headerDataService:new h(a),planInfoService:new p(a),cartCountService:new S(a)}}),[])}},5144:function(e,a,t){var n={"./":[1737,9236,8247,8185],"./ARE":[1407,5009],"./ARE.svg":[1407,5009],"./AUS":[3350,5850],"./AUS.svg":[3350,5850],"./AUT":[5227,2053],"./AUT.svg":[5227,2053],"./BEL":[706,8046],"./BEL.svg":[706,8046],"./BGR":[7778,3278],"./BGR.svg":[7778,3278],"./BRA":[6462,3138],"./BRA.svg":[6462,3138],"./CAN":[4043,1957],"./CAN.svg":[4043,1957],"./CHE":[1691,7573],"./CHE.svg":[1691,7573],"./CHN":[6218,8550],"./CHN.svg":[6218,8550],"./CZE":[6269,7635],"./CZE.svg":[6269,7635],"./DEU":[1347,9229],"./DEU.svg":[1347,9229],"./DNK":[4585,74],"./DNK.svg":[4585,74],"./ESP":[1317,2091],"./ESP.svg":[1317,2091],"./FIN":[7071,2172],"./FIN.svg":[7071,2172],"./FRA":[8186,9014],"./FRA.svg":[8186,9014],"./GBR":[5232,792],"./GBR.svg":[5232,792],"./GRC":[159,2897],"./GRC.svg":[159,2897],"./HKG":[8495,5713],"./HKG.svg":[8495,5713],"./HRV":[3465,8247],"./HRV.svg":[3465,8247],"./HUN":[5742,5746],"./HUN.svg":[5742,5746],"./IDN":[456,208],"./IDN.svg":[456,208],"./IND":[7316,3764],"./IND.svg":[7316,3764],"./IRL":[3376,6680],"./IRL.svg":[3376,6680],"./ISL":[8109,1827],"./ISL.svg":[8109,1827],"./ISR":[8067,861],"./ISR.svg":[8067,861],"./ITA":[2857,1559],"./ITA.svg":[2857,1559],"./JPN":[1241,5607],"./JPN.svg":[1241,5607],"./KOR":[865,9903],"./KOR.svg":[865,9903],"./MEX":[1939,4429],"./MEX.svg":[1939,4429],"./MYS":[1654,9402],"./MYS.svg":[1654,9402],"./NLD":[7075,1677],"./NLD.svg":[7075,1677],"./NOR":[8390,8970],"./NOR.svg":[8390,8970],"./NZL":[6189,7699],"./NZL.svg":[6189,7699],"./POL":[9874,2782],"./POL.svg":[9874,2782],"./PRT":[4963,925],"./PRT.svg":[4963,925],"./ROU":[6983,566],"./ROU.svg":[6983,566],"./RUS":[6615,953],"./RUS.svg":[6615,953],"./SGP":[2659,605],"./SGP.svg":[2659,605],"./SRB":[9172,9236],"./SRB.svg":[9172,9236],"./SVN":[7564,9228],"./SVN.svg":[7564,9228],"./SWE":[8904,976],"./SWE.svg":[8904,976],"./THA":[3402,3750],"./THA.svg":[3402,3750],"./TUR":[4446,6386],"./TUR.svg":[4446,6386],"./UKR":[3295,9569],"./UKR.svg":[3295,9569],"./USA":[7038,5346],"./USA.svg":[7038,5346],"./VNM":[7010,2494],"./VNM.svg":[7010,2494],"./XLA":[8138,8406],"./XLA.svg":[8138,8406],"./ZAF":[5200,2520],"./ZAF.svg":[5200,2520],"./index":[1737,9236,8247,8185],"./index.jsx":[1737,9236,8247,8185]};function r(e){if(!t.o(n,e))return Promise.resolve().then((function(){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}));var a=n[e],r=a[0];return Promise.all(a.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(n)},r.id=5144,e.exports=r}}]);
//# sourceMappingURL=components-istock-Footer.f0018472c395f7f10675.js.map