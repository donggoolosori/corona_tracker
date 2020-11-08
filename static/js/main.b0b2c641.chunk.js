(this.webpackJsonpcorona_tracker=this.webpackJsonpcorona_tracker||[]).push([[0],{14:function(e,t,a){e.exports={container:"Cards_container__3bjn6",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},203:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),c=a.n(r),o=a(72),s=a.n(o),i=a(7),d=a.n(i),u=a(13),l=a(22),j=a(14),p=a.n(j),f=a(31),b=a.n(f),h=a(32),x=a.n(h),v=a(221),m=a(225),O=a(222),g=a(223),y=function(e){var t=e.data,a=t.confirmed,r=t.recovered,c=t.deaths,o=t.lastUpdate;return a?Object(n.jsx)("div",{className:p.a.container,children:Object(n.jsxs)(v.a,{container:!0,spacing:3,justify:"center",children:[Object(n.jsx)(v.a,{item:!0,component:m.a,xs:12,md:3,className:b()(p.a.card,p.a.infected),children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(g.a,{color:"textSecondary",gutterBottom:!0,children:"Infected"}),Object(n.jsx)(g.a,{variant:"h5",children:Object(n.jsx)(x.a,{start:0,end:a.value,separator:",",duration:2.5})}),Object(n.jsx)(g.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(g.a,{variant:"body2",children:"Number of active cases of COVID-19"})]})}),Object(n.jsx)(v.a,{item:!0,component:m.a,xs:12,md:3,className:b()(p.a.card,p.a.recovered),children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(g.a,{color:"textSecondary",gutterBottom:!0,children:"Recovered"}),Object(n.jsx)(g.a,{variant:"h5",children:Object(n.jsx)(x.a,{start:0,end:r.value,separator:",",duration:2.5})}),Object(n.jsx)(g.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(g.a,{variant:"body2",children:"Number of recoveries of COVID-19"})]})}),Object(n.jsx)(v.a,{item:!0,component:m.a,xs:12,md:3,className:b()(p.a.card,p.a.deaths),children:Object(n.jsxs)(O.a,{children:[Object(n.jsx)(g.a,{color:"textSecondary",gutterBottom:!0,children:"Deaths"}),Object(n.jsx)(g.a,{variant:"h5",children:Object(n.jsx)(x.a,{start:0,end:c.value,separator:",",duration:2.5})}),Object(n.jsx)(g.a,{color:"textSecondary",children:new Date(o).toDateString()}),Object(n.jsx)(g.a,{variant:"body2",children:"Number of deaths caused by COVID-19"})]})})]})}):"Loading..."},_=a(46),C=a(77),w=a.n(C),D=function(e){var t=e.data,a=e.dailyData,r=e.country,c=a.length?Object(n.jsx)(_.Line,{data:{labels:a.map((function(e){return e.date})),datasets:[{data:a.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:a.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,o=t.confirmed?Object(n.jsx)(_.Bar,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"people",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[t.confirmed.value,t.recovered.value,t.deaths.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current State in ".concat(r)}}}):null;return Object(n.jsx)("div",{className:w.a.container,children:r?o:c})},S=a(226),k=a(224),N=a(33),I=a.n(N),B=function(e){var t=e.countriesList,a=e.handleCountryChange;return Object(n.jsx)("div",{className:I.a.container,children:Object(n.jsx)(S.a,{className:I.a.formControl,children:Object(n.jsxs)(k.a,{defaultValue:"",onChange:function(e){a(e.target.value)},className:I.a.nativeSelect,children:[Object(n.jsx)("option",{value:"",children:"Global"}),t.map((function(e,t){return Object(n.jsx)("option",{value:e,children:e},t)}))]})})})},V=a(34),L=a.n(V),U="https://covid19.mathdro.id/api",z=function(){var e=Object(u.a)(d.a.mark((function e(t){var a,n,r,c,o,s,i,u;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=U,t&&(a="".concat(U,"/countries/").concat(t)),e.prev=2,e.next=5,L.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,s=r.deaths,i=r.lastUpdate,u={confirmed:c,recovered:o,deaths:s,lastUpdate:i},e.abrupt("return",u);case 15:e.prev=15,e.t0=e.catch(2),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat(U,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,date:e.reportDate,deaths:e.deaths.total}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat(U,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),G=a(47),J=a.n(G),M=a.p+"static/media/image.9e5d4fc7.png",P=function(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],o=Object(r.useState)([]),s=Object(l.a)(o,2),i=s[0],j=s[1],p=Object(r.useState)(""),f=Object(l.a)(p,2),b=f[0],h=f[1],x=Object(r.useState)([]),v=Object(l.a)(x,2),m=v[0],O=v[1];Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,z();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=j,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(function(){var e=Object(u.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=O,e.next=3,E();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()(),t(),e()}),[]);var g=function(){var e=Object(u.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c,e.next=3,z(t);case 3:e.t1=e.sent,(0,e.t0)(e.t1),h(t);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:J.a.container,children:[Object(n.jsx)("img",{src:M,className:J.a.image,alt:"COVID-19"}),Object(n.jsx)(y,{data:a}),Object(n.jsx)(B,{countriesList:m,handleCountryChange:g}),Object(n.jsx)(D,{data:a,dailyData:i,country:b})]})};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(P,{})}),document.getElementById("root"))},33:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},47:function(e,t,a){e.exports={container:"App_container__1MQN3",image:"App_image__3byI1"}},77:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}}},[[203,1,2]]]);
//# sourceMappingURL=main.b0b2c641.chunk.js.map