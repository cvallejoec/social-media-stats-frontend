(this["webpackJsonpgndx-challenge-social-media"]=this["webpackJsonpgndx-challenge-social-media"]||[]).push([[0],{14:function(e,a,t){e.exports=t.p+"static/media/icon-facebook.a7383764.svg"},15:function(e,a,t){e.exports=t.p+"static/media/icon-twitter.810ccee8.svg"},16:function(e,a,t){e.exports=t.p+"static/media/icon-instagram.991487fe.svg"},17:function(e,a,t){e.exports=t.p+"static/media/icon-youtube.8499da12.svg"},18:function(e,a,t){e.exports=t.p+"static/media/icon-up.95f916a5.svg"},19:function(e,a,t){e.exports=t.p+"static/media/icon-down.69a5c77f.svg"},20:function(e,a,t){e.exports=t(43)},25:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(12),l=t.n(c),s=(t(25),t(2)),o=t(13),i=t.n(o),d=function(e){var a=e.isDarkMode,t=e.setIsDarkMode;return n.a.createElement("div",{className:"toggle"},n.a.createElement("label",{htmlFor:"is-dark-mode"},"Dark Mode"),n.a.createElement("input",{id:"is-dark-mode",type:"checkbox",onChange:function(){t(!a)},checked:a}))},m=t(14),u=t.n(m),p=t(15),E=t.n(p),f=t(16),y=t.n(f),_=t(17),b=t.n(_),v=t(18),g=t.n(v),w=t(19),h=t.n(w),k=function(e){var a=e.socialNetwork,t=e.username,r=e.followers,c=e.todayStats,l=e.todayStatsType;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"facebook"===a?"card__line card__line-facebook":"twitter"===a?"card__line card__line-twitter":"instagram"===a?"card__line card__line-instagram":"youtube"===a?"card__line card__line-youtube":null}),n.a.createElement("div",{className:"card__header"},n.a.createElement("img",{src:"facebook"===a?u.a:"twitter"===a?E.a:"instagram"===a?y.a:"youtube"===a?b.a:null,alt:"icon-facebook"}),n.a.createElement("span",null,"@",t)),n.a.createElement("div",{className:"card__hero"},n.a.createElement("p",{className:"card__hero-number"},r),n.a.createElement("p",{className:"card__hero-description"},"youtube"===a?"subscribers":"followers")),n.a.createElement("div",{className:"increase"===l?"card__stats card__stats-up":"card__stats card__stats-down"},n.a.createElement("img",{src:"increase"===l?g.a:h.a,alt:""}),n.a.createElement("p",null,c," Today")))},S=function(){var e=Object(r.useContext)(x),a=e.data.facebook,t=e.data.twitter,c=e.data.instagram,l=e.data.youtube;return n.a.createElement("div",{className:"grid"},n.a.createElement(k,{socialNetwork:"facebook",username:a.username,followers:a.followers,todayStats:a.todayStats,todayStatsType:a.todayStatsType}),n.a.createElement(k,{socialNetwork:"twitter",username:t.username,followers:t.followers,todayStats:t.todayStats,todayStatsType:t.todayStatsType}),n.a.createElement(k,{socialNetwork:"instagram",username:c.username,followers:c.followers,todayStats:c.todayStats,todayStatsType:c.todayStatsType}),n.a.createElement(k,{socialNetwork:"youtube",username:l.username,followers:l.subscribers,todayStats:l.todayStats,todayStatsType:l.todayStatsType}))},N=function(){return n.a.createElement("div",null,n.a.createElement("h3",null,"Small Card"))},x=Object(r.createContext)();var T=function(){var e=Object(r.useState)((function(){return window.matchMedia("(prefers-color-scheme: dark)").matches})),a=Object(s.a)(e,2),t=a[0],c=a[1],l=Object(r.useState)({loading:!0,data:{},error:""}),o=Object(s.a)(l,2),m=o[0],u=o[1];return Object(r.useEffect)((function(){i.a.get("https://social-media-stats-backend.cvallejoec.vercel.app").then((function(e){u({loading:!1,data:e.data.data,error:""})})).catch((function(e){u({loading:!1,data:{},error:e})}))}),[]),n.a.createElement(x.Provider,{value:m},m.loading?n.a.createElement("p",null,"Loading"):n.a.createElement("div",{className:t?"App is-dark-mode":"App is-light-mode"},n.a.createElement("header",{className:"header"},n.a.createElement("div",{className:"wrapper"},n.a.createElement("div",{className:"header__title-container"},n.a.createElement("h1",{className:"header__title"},"Social Media Dashboard"),n.a.createElement("p",{className:"header__description"},"Total Followers: ",n.a.createElement("span",null,"23.004"))),n.a.createElement(d,{isDarkMode:t,setIsDarkMode:c}))),n.a.createElement("section",{className:"container"},n.a.createElement("div",{className:"wrapper"},n.a.createElement(S,null),n.a.createElement("div",null,n.a.createElement("h2",null,"Overview - Today"),n.a.createElement("div",null,n.a.createElement(N,null),n.a.createElement(N,null),n.a.createElement(N,null)))))))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(T,null)),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3913e5b6.chunk.js.map