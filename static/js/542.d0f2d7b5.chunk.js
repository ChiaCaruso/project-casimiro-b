"use strict";(self.webpackChunkddocu=self.webpackChunkddocu||[]).push([[542],{6201:function(e,n,t){t.d(n,{Z:function(){return s}});var i="Menu_menuItems__rm3yP",a="Menu_active__2WVqO",o=t(184),s=function(e){var n=e.handleFavorite,t=e.handlePopular,s=e.handleRaccomended,l=e.popular,r=e.favorite,c=e.reccomended;return(0,o.jsxs)("ul",{className:i,children:[(0,o.jsx)("li",{className:r?a:"",onClick:n,children:"PREFERITI"}),(0,o.jsx)("li",{className:l?a:"",onClick:t,children:"POPOLARI"}),(0,o.jsx)("li",{className:c?a:"",onClick:s,children:"CONSIGLIATI"})]})}},241:function(e,n,t){t.d(n,{Z:function(){return l}});var i="InputModal_inputContainer__9YBti",a="InputModal_modalLabel__Gxcl1",o="InputModal_modalInput__7ILEJ",s=t(184);e=t.hmd(e);var l=function(n){return(0,s.jsxs)("div",{className:i,children:[(0,s.jsx)("label",{className:a,htmlFor:"name",children:n.text}),(0,s.jsx)("input",{className:o,type:e.type,name:"name"})]})}},1259:function(e,n,t){t.d(n,{Z:function(){return m}});var i=t(4942),a="TextModal_textComponent__EvH-t",o=t(184),s=function(e){return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("h3",{children:e.title}),(0,o.jsx)("p",{children:e.text})]})},l=t(241),r="ButtonModal_modalBtn__cRYk5",c=function(e){return(0,o.jsx)("button",{className:r,children:e.text})},d=t(6856),u={modalBackground:"Modal_modalBackground__JYAO3",modalContainer:"Modal_modalContainer__Mo71L",modalCloseBtn:"Modal_modalCloseBtn__u3pOX",modalTitle:"Modal_modalTitle__tuAjQ",modalImg:"Modal_modalImg__v5vqu",modalBodyContainer:"Modal_modalBodyContainer__O4Tyn",modalTextContainer:"Modal_modalTextContainer__imzSN",modalTextComponent:"Modal_modalTextComponent__ZBi8k",modalFormDiscover:"Modal_modalFormDiscover__3Pygg",modalFormInput:"Modal_modalFormInput__x8GW7"},m=function(e){var n,t=e.handleClose,a=e.event,r=e.discover,m=e.image,h=e.title,v=e.price,x=e.description,_=e.city,j=new Date(a.date);return(0,o.jsxs)("div",{className:u.modalBackground,children:[(0,o.jsxs)("div",{className:u.modalContainer,children:[(0,o.jsx)("button",(n={className:u.modalCloseBtn},(0,i.Z)(n,"className",u.modalCloseBtn),(0,i.Z)(n,"onClick",t),(0,i.Z)(n,"children",(0,o.jsx)(d.FU5,{})),n)),(0,o.jsx)("img",{className:u.modalImg,src:m,alt:h}),(0,o.jsx)("div",{className:u.modalTitle,children:(0,o.jsx)("h1",{children:h})}),(0,o.jsx)("div",{className:u.modalBodyContainer,children:(0,o.jsxs)("div",{className:u.modalTextContainer,children:[(0,o.jsx)("div",{className:u.modalTextDescription,children:(0,o.jsx)(s,{title:"Description",text:x})}),(0,o.jsxs)("div",{className:u.modalTextComponent,children:[(0,o.jsx)(s,{title:"Price",text:v}),r&&(0,o.jsx)(s,{title:"Date",text:"".concat(j.getDate(),"/").concat(j.getMonth())}),(0,o.jsx)(s,{title:"Location",text:_})]})]})}),(0,o.jsxs)("div",{className:u.modalFormDiscover,children:[(0,o.jsx)("div",{children:(0,o.jsx)("h3",{children:"Prenota Evento"})}),(0,o.jsxs)("div",{className:u.modalFormInput,children:[(0,o.jsx)(l.Z,{type:"text",text:"Nome e Congnome"}),(0,o.jsx)(l.Z,{type:"text",text:"E-mail"}),(0,o.jsx)(c,{text:"Prenota"})]})]})]}),";"]})}},9542:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var i=t(8152),a="DiscoverCard_discoverCard__OFyGX",o="DiscoverCard_title__VF8Kh",s="DiscoverCard_description__+-CIs",l=t(184),r=function(e){var n=e.event,t=e.handleOpen,i=new Date(n.date);return(0,l.jsxs)("div",{className:a,onClick:function(){return t(n.id)},children:[(0,l.jsxs)("div",{className:o,children:[(0,l.jsx)("h2",{children:"".concat(i.getDate(),"/").concat(i.getMonth())}),(0,l.jsx)("h4",{children:n.title}),(0,l.jsx)("img",{src:n.icon,alt:n.id})]}),(0,l.jsxs)("div",{className:s,children:[(0,l.jsx)("img",{src:n.image,alt:n.title}),(0,l.jsx)("p",{children:n.description})]})]})},c=t(953),d=t(2791),u=t(6030),m="Discover_popular__f+-LA",h="Discover_favorite__7J5NB",v="Discover_reccomended__3Wf7V",x="Discover_allCard__CoPKZ",_="Discover_discoverContOne__x4ACm",j="Discover_discoverElementOne__cK7Xk",p="Discover_discoverElementTwo__4v9UG",f="Discover_containerCard__oiVjx",C="Discover_discoverMenuContainer__NaGr3",N="Discover_mobileMenu__YdGf9",g="DiscoverSelect_selectContainer__xe-Ok",y="DiscoverSelect_selectCity__U7B++",D=function(e){var n=e.sort,t=e.sorting;return(0,l.jsx)("div",{className:g,children:(0,l.jsxs)("form",{children:[(0,l.jsx)("label",{children:" Inserisci la tua citt\xe0: "}),(0,l.jsxs)("select",{onChange:t,className:y,value:n,children:[(0,l.jsx)("option",{value:"All",children:" All "}),(0,l.jsx)("option",{value:"Palermo",children:" Palermo "}),(0,l.jsx)("option",{value:"Catania",children:" Catania "}),(0,l.jsx)("option",{value:"Messina",children:" Messina "}),(0,l.jsx)("option",{value:"Agrigento",children:" Agrigento "}),(0,l.jsx)("option",{value:"Caltanissetta",children:" Caltanissetta "}),(0,l.jsx)("option",{value:"Siracusa",children:" Siracusa "})]})]})})},M="DiscoverText_textContainer__JoqNr",k="DiscoverText_quote__KC-gk",I=function(){return(0,l.jsxs)("div",{className:M,children:[(0,l.jsx)("h1",{children:"William Shakespeare Hamlet"}),(0,l.jsx)("p",{children:"Anon comes in a fellow, takes off his crown, kisses it, pours poison in the king's ears, and exit. The Queen returns, finds the King dead, and makes passionate action. The Poisoner with some three or four Mutes, comes in again, seeming to lament with her."}),(0,l.jsxs)("p",{className:k,children:['" The dead body is carried away. The Poisoner wooes the Queen with gifts; she seems loth and unwilling awhile, but in the end accepts his love."',(0,l.jsx)("br",{}),"- R.Hollie"]}),(0,l.jsxs)("p",{children:["The best actors in the world, either for tragedy, comedy, history, pastoral, pastoral-comical, historical-pastoral, tragical-historical, tragical-comical- historical-pastoral, scene individable, or poem.",(0,l.jsx)("br",{}),"unlimited: Seneca cannot be too heavy nor Plautus too light. For the law of writ and the liberty, these are the only men."]})]})},T=t(6201),Z=t(1259),w=function(){var e=(0,u.I0)(),n=(0,d.useState)("All"),t=(0,i.Z)(n,2),a=t[0],o=t[1],s=(0,d.useState)(!1),g=(0,i.Z)(s,2),y=g[0],M=g[1],k=(0,d.useState)(!1),w=(0,i.Z)(k,2),P=w[0],b=w[1],A=(0,d.useState)(!1),B=(0,i.Z)(A,2),O=B[0],F=B[1],S=(0,u.v9)((function(e){return e.events})),E=(0,d.useState)(!1),R=(0,i.Z)(E,2),G=R[0],L=R[1],K=(0,d.useState)([]),q=(0,i.Z)(K,2),J=q[0],V=q[1],W=function(e){V(S.find((function(n){return n.id===e}))),L(!0)};console.log(J);var Y=function(){F(!1),b(!1),M(!y)},H=function(){F(!1),M(!1),b(!P)},Q=function(){M(!1),b(!1),F(!O)};return(0,d.useEffect)((function(){e((0,c.cI)())}),[]),(0,l.jsxs)("div",{children:[G&&(0,l.jsx)(Z.Z,{event:J,discover:!0,image:J.image,title:J.title,price:J.price,description:J.description,city:J.city,handleClose:function(){L(!1),V([])}}),(0,l.jsxs)("div",{className:_,children:[(0,l.jsxs)("div",{className:j,children:[(0,l.jsx)(D,{sorting:function(e){return o(e.target.value)},sort:a}),(0,l.jsx)("div",{className:N,children:(0,l.jsx)(T.Z,{popular:y,favorite:P,reccomended:O,handlePopular:Y,handleFavorite:H,handleRaccomended:Q})}),(0,l.jsx)(I,{})]}),(0,l.jsxs)("div",{className:p,children:[(0,l.jsx)("div",{className:C,children:(0,l.jsx)(T.Z,{popular:y,favorite:P,reccomended:O,handlePopular:Y,handleFavorite:H,handleRaccomended:Q})}),(0,l.jsxs)("div",{className:f,children:[(0,l.jsx)("div",{className:P?f:h,children:null===S||void 0===S?void 0:S.filter((function(e){return!0===e.favorite})).filter((function(e){return"All"!==a?e.city===a:e})).sort((function(e,n){return e.date>n.date?1:-1})).map((function(e,n){return(0,l.jsx)("div",{children:(0,l.jsx)(r,{handleOpen:W,event:e,id:e.id},n)},n)}))}),(0,l.jsx)("div",{className:y?f:m,children:null===S||void 0===S?void 0:S.filter((function(e){return!0===e.popular})).filter((function(e){return"All"!==a?e.city===a:e})).sort((function(e,n){return e.date>n.date?1:-1})).map((function(e,n){return(0,l.jsx)("div",{children:(0,l.jsx)(r,{handleOpen:W,event:e,id:e.id},n)},n)}))}),(0,l.jsx)("div",{className:O?f:v,children:null===S||void 0===S?void 0:S.filter((function(e){return!0===e.recommended})).filter((function(e){return"All"!==a?e.city===a:e})).sort((function(e,n){return e.date>n.date?1:-1})).map((function(e,n){return(0,l.jsx)("div",{children:(0,l.jsx)(r,{handleOpen:W,event:e,id:e.id},n)},n)}))}),(0,l.jsx)("div",{className:P||O||y?x:f,children:null===S||void 0===S?void 0:S.filter((function(e){return"All"!==a?e.city===a:e})).sort((function(e,n){return e.date>n.date?1:-1})).map((function(e,n){return(0,l.jsx)("div",{children:(0,l.jsx)(r,{handleOpen:W,event:e,id:e.id},n)},n)}))})]})]})]})]})}}}]);
//# sourceMappingURL=542.d0f2d7b5.chunk.js.map