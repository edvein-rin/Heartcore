(this.webpackJsonpheartcore=this.webpackJsonpheartcore||[]).push([[0],{37:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),o=n(21),a=n.n(o),c=n(12),s=(n(29),n(2)),l=Object(s.a)(["html{--white:#fff;--black:#2b2b2b;--darker-grey:#222222;--light-grey:#edf0f7;--grey:#4d4d4d;--dark-blue:#293b78;--lighter-orange:#dfba84;--light-orange:#f88e53;--orange:#f95d06;--dark-orange:#893c01;--light-yellow:#f9e39d;--light-blue:#8cb8e1;--blue:#0b5194;--lighter-blue:#a8d7d1;--dark-green:#1b5f57;--background-color:var(--white);--color:var(--black);--highlight-color:var(--orange);}"]),d=Object(s.a)(["@font-face{font-family:Gilroy;src:url('https://uploads-ssl.webflow.com/6023c6394b9a4d541b90dcf4/6023c6394b9a4d9d3f90dd1d_Gilroy-Regular.otf');font-weight:normal;}@font-face{font-family:Gilroy;src:url('https://uploads-ssl.webflow.com/6023c6394b9a4d541b90dcf4/6023c6394b9a4dd77390dd1e_Gilroy-Semibold.otf');font-weight:bold;}@font-face{font-family:Recoleta;src:url('https://uploads-ssl.webflow.com/6023c6394b9a4d541b90dcf4/6023c6394b9a4d618f90dd1c_Recoleta%20Regular.otf');}html,body,div#root{padding:0;margin:0;width:100%;height:100%;background-color:var(--background-color);color:var(--color);font-family:Gilroy,sans-serif;}html.no-scroll{position:fixed;overflow-y:scroll;}*{box-sizing:border-box;}a,a:link,a:visited,a:hover,a:active{text-decoration:none;color:inherit;transition:all 300ms ease;}a:hover{color:var(--highlight-color);}"]),h=n(15),p=n(0);function b(e){var t=e.children,n=e.className;return Object(p.jsx)(j,{className:n,children:t})}var j=s.c.div.withConfig({displayName:"Section__Wrapper",componentId:"sc-l7rfmw-0"})(["display:flex;flex-direction:column;width:100%;box-sizing:border-box;"]),m={mobileS:"320px",mobileM:"375px",mobileL:"480px",tablet:"768px",laptop:"1024px",laptopL:"1440px",desktop:"2560px"},g={up:function(e){return"(min-width: ".concat(m[e],")")},down:function(e){return"(max-width: ".concat(m[e],")")},only:function(e){return"(width: ".concat(m[e],")")}};function u(e){var t=e.children,n=e.className;return Object(p.jsx)(W,{className:n,children:t})}var f,x,O,v,y,w,C,z,_,k,N,I,L,W=s.c.div.withConfig({displayName:"Container__Wrapper",componentId:"sc-1vimm7b-0"})(["display:flex;max-width:1140px;width:100%;margin-right:auto;margin-left:auto;box-sizing:border-box;"," > &{align-self:center;}@media ","{padding-left:15px;padding-right:15px;}@media ","{padding-left:30px;padding-right:30px;}"],j,g.down("tablet"),g.up("tablet")),H=n.p+"static/media/logo.98a9e654.svg",T=n(3),S={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",caption:"span",button:"span",overline:"span"};function P(e){var t=e.children,n=e.align,i=e.color,r=e.hoverColor,o=e.display,a=e.variant,c=void 0===a?"body1":a,s=e.paragraph,l=void 0!==s&&s,d=e.opacity,h=e.font,b=e.textCase,j=e.weight,m=S[c];return Object(p.jsx)(A,{children:t,as:m,align:n,color:i,hoverColor:r,display:o,variant:c,paragraph:l,opacity:d,font:h,textCase:b,weight:j})}var R,A=s.c.span.withConfig({displayName:"Typography__Wrapper",componentId:"sc-nmoyxo-0"})(["display:",";margin-bottom:",";margin-top:0px;text-align:",";color:",";opacity:",";font-family:",";&:hover{color:",";}",";text-transform:",";font-weight:",""],(function(e){return e.display}),(function(e){return e.paragraph?"30px":"0px"}),(function(e){return e.align}),(function(e){var t=e.color;return t&&"var(--"+t+")"}),(function(e){return e.opacity}),(function(e){return e.font}),(function(e){var t=e.hoverColor;return t&&"var(--"+t+")"}),(function(e){switch(e.variant){case"h1":return Object(s.b)(f||(f=Object(T.a)(["\n          letter-spacing: ","rem;\n          font-weight: 300;\n\n          @media "," { font-size: 3.5rem; }\n          @media "," { font-size: 4.7rem; }\n          @media "," { font-size: 5.3rem; }\n          @media "," { font-size: 5.9rem; }\n        "])),1.5/16,g.down("mobileL"),g.up("mobileL"),g.up("tablet"),g.up("laptop"));case"h2":return Object(s.b)(x||(x=Object(T.a)(["\n          letter-spacing: ","rem;\n          font-weight: 300;\n\n          @media "," { font-size: 2.375rem; }\n          @media "," { font-size: 2.9167rem; }\n          @media "," { font-size: 3.3333rem; }\n          @media "," { font-size: 3.75rem; }\n        "])),-.5/16,g.down("mobileL"),g.up("mobileL"),g.up("tablet"),g.up("laptop"));case"h3":return Object(s.b)(O||(O=Object(T.a)(["\n          letter-spacing: 0;\n\n          @media "," { font-size: 2.375rem; }\n          @media "," { font-size: 2.9167rem; }\n          @media "," { font-size: 3.3333rem; }\n          @media "," { font-size: 3.75rem; }\n        "])),g.down("mobileL"),g.up("mobileL"),g.up("tablet"),g.up("laptop"));case"h4":return Object(s.b)(v||(v=Object(T.a)(["\n          letter-spacing: ","rem;\n          font-weight: 500;\n\n          @media "," { font-size: 1.5625rem; }\n          @media "," { font-size: 1.8219rem; }\n          @media "," { font-size: 2.0243rem; }\n        "])),.25/16,g.down("mobileL"),g.up("mobileL"),g.up("tablet"));case"h5":return Object(s.b)(y||(y=Object(T.a)(["\n          letter-spacing: 0;\n          font-weight: 500;\n\n          @media "," { font-size: 1.25rem; }\n          @media "," { font-size: 1.3118rem; }\n          @media "," { font-size: 1.4993rem; }\n        "])),g.down("mobileL"),g.up("mobileL"),g.up("tablet"));case"h6":return Object(s.b)(w||(w=Object(T.a)(["\n          letter-spacing: ","rem;\n          font-weight: 500;\n          \n          @media "," { font-size: 1.125rem; }\n          @media "," { font-size: 1.25rem; }\n        "])),.15/16,g.down("mobileL"),g.up("mobileL"));case"subtitle1":return Object(s.b)(C||(C=Object(T.a)(["\n          font-size: 1rem;\n          letter-spacing: ","rem;\n        "])),.15/16);case"subtitle2":return Object(s.b)(z||(z=Object(T.a)(["\n          font-size: 0.875rem;\n          letter-spacing: ","rem;\n          font-weight: 500;\n        "])),.1/16);case"body1":return Object(s.b)(_||(_=Object(T.a)(["\n          font-size: 1rem;\n          letter-spacing: ","rem;\n        "])),.5/16);case"body2":return Object(s.b)(k||(k=Object(T.a)(["\n          font-size: 0.875rem;\n          letter-spacing: ","rem;\n        "])),.25/16);case"button":return Object(s.b)(N||(N=Object(T.a)(["\n          font-size: 0.875rem;\n          letter-spacing: ","rem;\n          font-weight: 600;\n          text-transform: uppercase;\n        "])),1.25/16);case"caption":return Object(s.b)(I||(I=Object(T.a)(["\n          font-size: 0.75rem;\n          letter-spacing: ","rem;\n          font-weight: 600;\n        "])),.025);case"overline":return Object(s.b)(L||(L=Object(T.a)(["\n          font-size: 0.625rem;\n          letter-spacing: ","rem;\n          font-weight: 600;\n          text-transform: uppercase;\n        "])),1.5/16)}}),(function(e){return e.textCase}),(function(e){return e.weight}));function G(e){var t=e.children,n=e.display,i=e.variant,r=void 0===i?"text":i,o=e.size,a=e.textCase,c=void 0===a?"uppercase":a,s=e.textColor,l=e.textHoverColor,d=void 0===l?"orange":l,h=e.bold,b=void 0===h||h,j=e.italic,m=e.onClick;return Object(p.jsx)(M,{display:n,variant:r,size:o,textCase:c,textColor:s,textHoverColor:d,bold:b,italic:j,onClick:m,children:"text"===r?"big"===o?Object(p.jsx)(P,{variant:"h4",textCase:"uppercase",weight:600,color:s,hoverColor:d,children:t}):Object(p.jsx)(P,{variant:"button",color:s,hoverColor:d,children:t}):t})}var q,M=s.c.button.withConfig({displayName:"Button__Wrapper",componentId:"sc-hy45ge-0"})(["display:",";font-weight:",";font-style:",";cursor:pointer;background:none;border:none;",""],(function(e){return e.display}),(function(e){var t=e.bold;return t&&(t?"bold":"inherit")}),(function(e){var t=e.italic;return t&&(t?"italic":"inherit")}),(function(e){var t=e.variant,n=e.textCase;switch(t){case"text":return Object(s.b)(R||(R=Object(T.a)(["\n          text-transform: ",";\n        "])),n)}})),E=n.p+"static/media/burger.e80ef556.svg",F=s.c.span.withConfig({displayName:"Spacer",componentId:"sc-ft255d-0"})(["display:inline-block;min-width:",";min-height:",";"],(function(e){var t=e.axis,n=e.size;return"vertical"===t?1:n+"px"}),(function(e){var t=e.axis,n=e.size;return"horizontal"===t?1:n+"px"}));function V(e){var t=e.open,n=void 0!==t&&t;return Object(p.jsxs)(J,{open:n,children:[Object(p.jsx)("img",{alt:"",src:E,width:"19px",height:"3px"}),Object(p.jsx)(F,{size:3,axis:"vertical"}),Object(p.jsx)("img",{alt:"",src:E,width:"19px",height:"3px"})]})}var B,J=s.c.div(q||(q=Object(T.a)(["\n  display: flex;\n  flex-direction: column;\n  height: max-content;\n"]))),D=n.p+"static/media/twitter.373fa1b5.svg",K=n.p+"static/media/linkedin.404b843e.svg",Q=n.p+"static/media/rss.23da8ef7.svg",U=s.c.a.withConfig({displayName:"Link",componentId:"sc-cc3ijl-0"})(["&,&:link,&:visited,&:hover,&:active{text-decoration:none;color:inherit;}&:hover{color:var(--highlight-color);}transition:all 300ms ease;& *{transition:inherit;}"]);function X(e){return Object(p.jsx)(Z,{href:e.href,height:e.height,width:e.width,children:Object(p.jsx)("img",{alt:e.alt,src:e.src})})}var Y,Z=Object(s.c)(U)(B||(B=Object(T.a)(["\n  width: ",";\n  height: ",";\n\n  & > img {\n    height: 100%;\n  }\n"])),(function(e){return e.width}),(function(e){return e.height})),$=n(6),ee=Object(s.c)(c.b)(Y||(Y=Object(T.a)(["\n  &, &:link, &:visited, &:hover, &:active {\n    text-decoration: none;\n    color: inherit;\n  }\n\n  &:hover {\n    color: var(--highlight-color);\n  }\n\n  transition: all 300ms ease;\n\n  & * {\n    transition: inherit;\n  }\n"])));function te(e){return Object(p.jsx)(ee,Object($.a)(Object($.a)({},e),{},{children:Object(p.jsx)(G,Object($.a)(Object($.a)({},e),{},{children:e.children}))}))}function ne(e){var t=e.open,n=void 0!==t&&t;return Object(p.jsxs)(re,{open:n,children:[Object(p.jsxs)(u,{className:"menu-items",children:[Object(p.jsx)(te,{to:"/about",size:"big",children:"About"}),Object(p.jsx)(te,{to:"/thesis",size:"big",children:"Thesis"}),Object(p.jsx)(te,{to:"/companies",size:"big",children:"Companies"}),Object(p.jsx)(te,{to:"/team",size:"big",children:"Team"}),Object(p.jsx)(te,{to:"/values",size:"big",children:"Values"}),Object(p.jsx)(te,{to:"/insights",size:"big",children:"Insights"})]}),Object(p.jsxs)(u,{className:"contacts",children:[Object(p.jsx)(X,{alt:"Twitter",src:D,href:"https://twitter.com/heartcorecap",height:"27px"}),Object(p.jsx)(F,{size:53,axis:"horizontal"}),Object(p.jsx)(X,{alt:"Linkedin",src:K,href:"https://www.linkedin.com/company/heartcorecapital/about/",height:"27px"}),Object(p.jsx)(F,{size:53,axis:"horizontal"}),Object(p.jsx)(X,{alt:"Twitter",src:Q,href:"https://heartcore.substack.com/",height:"27px"})]})]})}var ie,re=s.c.div.withConfig({displayName:"Menu__Wrapper",componentId:"sc-q1iqfm-0"})(["position:absolute;left:0;top:80px;z-index:1;display:",";flex-direction:column;justify-content:center;align-items:center;width:100%;height:calc(100% - 80px);background-color:var(--light-grey);& .menu-items{display:flex;flex-direction:column;align-items:center;width:100%;flex-grow:1;padding-top:20px;padding-bottom:20px;}& .menu-items > *{padding-bottom:40px;}& .contacts{width:100%;height:80px;@media ","{display:flex;justify-content:center;align-items:center;}}"],(function(e){return e.open?"flex":"none"}),g.down("tablet"));function oe(e){var t=e.onOpenChange,n=Object(i.useState)(!1),r=Object(h.a)(n,2),o=r[0],a=r[1];return Object(i.useEffect)((function(){var e=document.documentElement;o?e.classList.add("no-scroll"):e.classList.remove("no-scroll")})),Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(G,{variant:"no-style",onClick:function(){a(!o),t(!o)},children:Object(p.jsxs)(ae,{children:[Object(p.jsx)(V,{}),Object(p.jsx)(F,{size:10,axis:"horizontal"}),Object(p.jsx)(P,{variant:"button",children:"Menu"})]})}),Object(p.jsx)(ne,{open:o})]})}var ae=s.c.div(ie||(ie=Object(T.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"])));function ce(){var e=Object(i.useState)(!1),t=Object(h.a)(e,2),n=t[0],r=t[1];return Object(p.jsx)(se,{menuOpen:n,children:Object(p.jsxs)(le,{children:[Object(p.jsx)("img",{alt:"Heartcore",src:H}),Object(p.jsx)(oe,{onOpenChange:function(e){r(e)}})]})})}var se=s.c.header.withConfig({displayName:"Header__Wrapper",componentId:"sc-1110lvy-0"})(["padding-top:18px;padding-bottom:18px;background-color:",";"],(function(e){return e.menuOpen&&"var(--light-grey)"})),le=Object(s.c)(u).withConfig({displayName:"Header__HeaderContainer",componentId:"sc-1110lvy-1"})(["display:flex;justify-content:space-between;align-items:center;"]),de=n(4),he=n.p+"static/media/about.5add8133.png";function pe(e){var t=e.header,n=e.subtitle,i=e.description,r=e.align;return Object(p.jsxs)(be,{children:[Object(p.jsx)(P,{variant:"h1",paragraph:!0,font:"Recoleta",align:r,children:t}),Object(p.jsx)(P,{variant:"h5",align:r,children:n}),i&&Object(p.jsx)(P,{align:r,children:i})]})}var be=s.c.div.withConfig({displayName:"Heading__Wrapper",componentId:"sc-8t6mxs-0"})(["display:flex;flex-direction:column;> *{width:100%;}"," > &{width:100%;}"],W);function je(e){return Object(p.jsxs)(me,Object($.a)(Object($.a)({},e),{},{children:[Object(p.jsx)(P,{variant:"overline",paragraph:!0,children:e.overline}),Object(p.jsx)(P,{variant:"h4",font:"Recoleta",children:e.header}),Object(p.jsx)(P,{opacity:.8,children:e.description})]}))}var me=s.c.div.withConfig({displayName:"Card__Wrapper",componentId:"sc-1z73rt-0"})(["padding:25px 30px;background-color:",";color:",";"],(function(e){return"var(--"+e.bgColor+")"}),(function(e){var t=e.textColor;return t&&"var(--"+t+")"}));function ge(e){return Object(p.jsxs)(ue,{children:[Object(p.jsx)(fe,{children:Object(p.jsx)(u,{children:Object(p.jsx)(pe,{align:"center",header:e.header,subtitle:e.subtitle})})}),Object(p.jsx)(xe,{children:Object(p.jsxs)(Oe,{children:[Object(p.jsx)(je,{overline:"about",header:"100% consumer tech",description:"Specialization drives success",image:he,bgColor:"blue",textColor:"white",noise:!0}),Object(p.jsx)(je,{overline:"thesis",header:"Making people happy",description:"We invest in companies re-enchanting the world through technology",image:he,bgColor:"light-grey",textColor:"grey",noise:!0}),Object(p.jsx)(je,{overline:"companies",header:Object(p.jsxs)("span",{children:["Our ",Object(p.jsx)("em",{children:"raison d'\xeatre"})]}),description:"We're proud to have been among the first investors in 85 category-defining consumer technology companies",image:he,bgColor:"light-orange",textColor:"dark-orange",noise:!0}),Object(p.jsx)(je,{overline:"team",header:"Global at heart",description:"A group of investors in love with our craft and passionate about entrepreneurship",image:he,bgColor:"light-yellow",textColor:"dark-orange",noise:!0}),Object(p.jsx)(je,{overline:"values",header:"Truth + Love = Growth",description:"Radically different venture capital",image:he,bgColor:"light-blue",textColor:"blue",noise:!0}),Object(p.jsx)(je,{overline:"insights",header:"Sharing is caring",description:"Everything you\u2019ve always wanted to know about consumer technology",image:he,bgColor:"lighter-blue",textColor:"dark-green",noise:!0})]})})]})}var ue=s.c.div.withConfig({displayName:"Home__Wrapper",componentId:"sc-1dvdvox-0"})(["display:flex;flex-direction:column;justify-content:center;"]),fe=Object(s.c)(b).withConfig({displayName:"Home__HeaderSection",componentId:"sc-1dvdvox-1"})(["padding-top:80px;padding-bottom:80px;"]),xe=Object(s.c)(b).withConfig({displayName:"Home__CardsSection",componentId:"sc-1dvdvox-2"})(["padding-bottom:80px;"]),Oe=Object(s.c)(u).withConfig({displayName:"Home__CardsContainer",componentId:"sc-1dvdvox-3"})(["display:grid;grid-template-columns:repeat(1fr,7);grid-template-rows:repeat(1fr,8);"]);function ve(){return Object(p.jsx)(ge,{header:"Investing in happiness.",subtitle:"Europe's consumer technology VC"})}function ye(){return Object(p.jsx)(we,{children:"About Page"})}var we=s.c.div.withConfig({displayName:"About__Wrapper",componentId:"sc-1z0jmpn-0"})(["display:flex;justify-content:center;align-items:center;"]);function Ce(){return Object(p.jsx)(ze,{children:"Thesis Page"})}var ze=s.c.div.withConfig({displayName:"Thesis__Wrapper",componentId:"sc-1fszp0d-0"})(["display:flex;justify-content:center;align-items:center;"]);function _e(){return Object(p.jsx)(ke,{children:"Companies Page"})}var ke=s.c.div.withConfig({displayName:"Companies__Wrapper",componentId:"sc-uqdf5h-0"})(["display:flex;justify-content:center;align-items:center;"]);function Ne(){return Object(p.jsx)(Ie,{children:"Team Page"})}var Ie=s.c.div.withConfig({displayName:"Team__Wrapper",componentId:"sc-nl8j1c-0"})(["display:flex;justify-content:center;align-items:center;"]);function Le(){return Object(p.jsx)(We,{children:"Values Page"})}var We=s.c.div.withConfig({displayName:"Values__Wrapper",componentId:"sc-1hvgtev-0"})(["display:flex;justify-content:center;align-items:center;"]);function He(){return Object(p.jsx)(Te,{children:"Insights Page"})}var Te=s.c.div.withConfig({displayName:"Insights__Wrapper",componentId:"sc-8q3th2-0"})(["display:flex;justify-content:center;align-items:center;"]);function Se(){return Object(p.jsx)(Pe,{children:Object(p.jsxs)(de.c,{children:[Object(p.jsx)(de.a,{path:"/",exact:!0,children:Object(p.jsx)(ve,{})}),Object(p.jsx)(de.a,{path:"/about",children:Object(p.jsx)(ye,{})}),Object(p.jsx)(de.a,{path:"/thesis",children:Object(p.jsx)(Ce,{})}),Object(p.jsx)(de.a,{path:"/companies",children:Object(p.jsx)(_e,{})}),Object(p.jsx)(de.a,{path:"/team",children:Object(p.jsx)(Ne,{})}),Object(p.jsx)(de.a,{path:"/values",children:Object(p.jsx)(Le,{})}),Object(p.jsx)(de.a,{path:"/insights",children:Object(p.jsx)(He,{})})]})})}var Pe=s.c.main.withConfig({displayName:"Main__Wrapper",componentId:"sc-elngd4-0"})([""]),Re=n.p+"static/media/inline-logo.933f38ae.svg";function Ae(e){return Object(p.jsx)(U,{href:e.href,children:Object(p.jsx)(G,Object($.a)(Object($.a)({},e),{},{children:e.children}))})}function Ge(e){return Object(p.jsx)(qe,{children:Object(p.jsx)(te,Object($.a)(Object($.a)({},e),{},{children:e.children}))})}var qe=s.c.span.withConfig({displayName:"FooterLink__Wrapper",componentId:"sc-t33drl-0"})(["&&&&{font-size:14px;line-height:14px;font-weight:600;letter-spacing:0.09em;text-transform:uppercase;}"]);function Me(){return Object(p.jsx)(Ee,{children:Object(p.jsxs)(Fe,{children:[Object(p.jsx)("img",{alt:"Heartcore",src:Re}),Object(p.jsx)(Ae,{href:"https://heartcore.substack.com/",textColor:"light-orange",textHoverColor:"orange",children:"subscribe to our newsletter \u2197\ufe0f"}),Object(p.jsx)("div",{className:"quote",children:Object(p.jsx)(P,{color:"grey",variant:"h5",font:"Recoleta",children:"\u201cIt is only with the heart that one can see rightly; what is essential is invisible to the eye.\u201d"})}),Object(p.jsxs)("div",{className:"links",children:[Object(p.jsx)(Ge,{to:"/about",children:"About"}),Object(p.jsx)(Ge,{to:"/thesis",children:"Thesis"}),Object(p.jsx)(Ge,{to:"/companies",children:"Companies"}),Object(p.jsx)(Ge,{to:"/team",children:"Team"}),Object(p.jsx)(Ge,{to:"/values",children:"Values"}),Object(p.jsx)(Ge,{to:"/insights",children:"Insights"})]}),Object(p.jsxs)("div",{className:"contacts",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)(X,{alt:"Twitter",src:D,href:"https://twitter.com/heartcorecap"}),Object(p.jsx)(F,{size:20,axis:"horizontal"}),Object(p.jsx)(X,{alt:"Linkedin",src:K,href:"https://www.linkedin.com/company/heartcorecapital/about/"}),Object(p.jsx)(F,{size:20,axis:"horizontal"}),Object(p.jsx)(X,{alt:"Twitter",src:Q,href:"https://heartcore.substack.com/"})]}),Object(p.jsx)(Ae,{href:"mailto:contact@heartcore.com",textCase:"none",bold:!1,variant:"no-style",children:Object(p.jsx)(P,{variant:"body2",children:"contact@heartcore.com"})})]}),Object(p.jsxs)("div",{className:"copyright",children:[Object(p.jsx)(P,{variant:"body2",children:"All rights reserved \xa9 Heartcore"}),Object(p.jsx)(Ae,{href:"https://uploads-ssl.webflow.com/6023c6394b9a4d541b90dcf4/60dc760184ef9d56a3055aca_20210630%20Privacy%20Policy%20.pdf",textCase:"none",bold:!1,variant:"no-style",children:Object(p.jsx)(P,{variant:"body2",children:"Privacy police"})})]})]})})}var Ee=s.c.footer.withConfig({displayName:"Footer__Wrapper",componentId:"sc-4e5top-0"})(["padding-top:60px;padding-bottom:20px;background-color:var(--light-grey);& .quote{max-width:405px;}& .contacts,& .copyright{display:flex;justify-content:space-between;align-items:center;}& .links{display:grid;grid-template-columns:1fr 1fr 1fr;grid-template-rows:1fr 1fr 1fr;gap:20px;}"]),Fe=Object(s.c)(u).withConfig({displayName:"Footer__FooterContainer",componentId:"sc-4e5top-1"})(["display:grid;gap:30px;@media ","{grid-template-columns:1fr;}@media ","{grid-template-columns:1fr 1fr;}"],g.down("tablet"),g.up("tablet"));function Ve(){return Object(p.jsxs)(Be,{children:[Object(p.jsx)(ce,{}),Object(p.jsx)(Se,{}),Object(p.jsx)(Me,{})]})}var Be=s.c.div.withConfig({displayName:"App__Wrapper",componentId:"sc-1g37rr5-0"})(["display:flex;flex-direction:column;width:100%;height:100%;& > *{width:100%;}"]);a.a.render(Object(p.jsxs)(r.a.StrictMode,{children:[Object(p.jsx)(l,{}),Object(p.jsx)(d,{}),Object(p.jsx)(c.a,{children:Object(p.jsx)(Ve,{})})]}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.399c2640.chunk.js.map