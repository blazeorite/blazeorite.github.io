(this["webpackJsonpdevelopers-portfolio"]=this["webpackJsonpdevelopers-portfolio"]||[]).push([[0],{117:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(30),c=t.n(l),s=(t(83),t(51)),i=t(6),o=!0,m={gradientColors:"#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",firstName:"Sujith",middleName:"",lastName:"Nakkala",message:" Aspiring Full Stack Dev",icons:[{image:"fa-github",url:"https://github.com/blazeorite"},{image:"fa-linkedin",url:"https://www.linkedin.com/in/sujith-nakkala-580353143/"}]},u={show:!0,heading:"About Me",imageLink:t(84),imageSize:375,message:"CS Honors student at Central Connecticut State University",resume:t(38)},d={show:!0,heading:"Featured Projects",gitHubUsername:"blazeorite",reposLength:0,specificRepos:["FinalProject","todo","DjangoProject6"]},f={show:!0,heading:"Leadership",message:"Peer mentor, Cs Club officer",images:[{img:t(85),label:"Senior Peer Mentor",paragraph:"Guiding New students to succed in college"},{img:t(86),label:"CS Club",paragraph:"Presenting how SQL injections work"}],imageSize:{width:"615",height:"450"}},g={show:!1,heading:"Skills",hardSkills:[{name:"Python",value:90},{name:"SQL",value:75},{name:"Data Structures",value:85},{name:"C/C++",value:65},{name:"JavaScript",value:90},{name:"React",value:65},{name:"HTML/CSS",value:55},{name:"C#",value:80}],softSkills:[{name:"Goal-Oriented",value:80},{name:"Collaboration",value:90},{name:"Positivity",value:75},{name:"Adaptability",value:85},{name:"Problem Solving",value:75},{name:"Empathy",value:90},{name:"Organization",value:70},{name:"Creativity",value:90}]},p=!0,h="Get In Touch",b="If you have any questions, or if you just want to say hi, please feel free to email me at",E="sujith0709@gmail.com",v={show:!1,heading:"Publications",data:[]},k=t(68),w=t.n(k),N=t(25),y=t(39),x=t(38),S=t.n(x),j=r.a.forwardRef((function(e,a){var t=e.gradient,n=e.title,l=e.message,c=e.icons;return r.a.createElement(y.a,{fluid:!0,id:"home",style:{background:"linear-gradient(136deg,".concat(t,")"),backgroundSize:"1200% 1200%"},className:"title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0"},r.a.createElement("div",{id:"stars"}),r.a.createElement(N.a,{className:"text-center"},r.a.createElement("h1",{ref:a,className:"display-1"},n),r.a.createElement(w.a,{className:"lead typist",cursor:{show:!1}}," ",l),r.a.createElement("div",{className:"p-5"},c.map((function(e,a){return r.a.createElement("a",{key:"social-icon-".concat(a),target:"_blank",rel:"noopener noreferrer",href:e.url,"aria-label":"My ".concat(e.image.split("-")[1])},r.a.createElement("i",{className:"fab ".concat(e.image,"  fa-3x socialicons")}))}))),r.a.createElement("a",{className:"btn btn-outline-dark btn-lg ",href:S.a,role:"button","aria-label":"Resume"},"Resume")))})),_=t(17),O=t.n(_),C=t(26),P=t(8),z=t(21),R=t.n(z),L=new RegExp(/[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/),T=function(e){var a=e.heading,t=e.message,n=e.link,l=e.imgSize,c=e.resume,s=r.a.useState(""),i=Object(P.a)(s,2),o=i[0],m=i[1],u=r.a.useState(Boolean(n)),d=Object(P.a)(u,2),f=d[0],g=d[1];r.a.useEffect((function(){n&&!L.test(n)?p():m(n)}),[n]);var p=function(){var e=Object(C.a)(O.a.mark((function e(){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://www.instagram.com/","/?__a=1",e.prev=2,e.next=5,R.a.get("https://www.instagram.com/"+n+"/?__a=1");case 5:a=e.sent,m(a.data.graphql.user.profile_pic_url_hd),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),g(!1),console.error(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"aboutme",className:"jumbotron jumbotron-fluid m-0"},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-5 d-none d-lg-block align-self-center"},f&&r.a.createElement("img",{className:"border border-secondary rounded-circle",src:o,alt:"profilepicture",width:l,height:l})),r.a.createElement("div",{className:"col-lg-".concat(f?"7":"12")},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a),r.a.createElement("p",{className:"lead text-center"},t),c&&r.a.createElement("p",{className:"lead text-center"},r.a.createElement("a",{className:"btn btn-outline-dark btn-lg",href:c,target:"_blank",rel:"noreferrer noopener",role:"button","aria-label":"Resume/CV"},"Resume"))))))},W=t(69),F=t(77),B=t(34),M=t(33),A=t(37),D=t(31),H=t.n(D),I=function(e){var a=e.svn_url;return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"".concat(a,"/archive/master.zip"),className:"btn btn-outline-secondary mr-3"},r.a.createElement("i",{className:"fab fa-github"})," Clone Project"),r.a.createElement("a",{href:a,target:" _blank",className:"btn btn-outline-secondary"},r.a.createElement("i",{className:"fab fa-github"})," Repo"))},U=function(e){var a=e.languages_url,t=e.repo_url,l=Object(n.useState)([]),c=Object(P.a)(l,2),s=c[0],i=c[1],o=Object(n.useCallback)(Object(C.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.get(a);case 3:return t=e.sent,e.abrupt("return",i(t.data));case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[a]);Object(n.useEffect)((function(){o()}),[o]);var m=[],u=0;for(var d in s)m.push(d),u+=s[d];return r.a.createElement("div",{className:"pb-3"},"Languages:"," ",m.length?m.map((function(e){return r.a.createElement("a",{key:e,className:"badge badge-light card-link",href:t+"/search?l=".concat(e),target:" _blank"},e,":"," ",Math.trunc(s[e]/u*1e3)/10," %")})):"code yet to be deployed.")},G=function(e){var a=e.star_count,t=e.repo_url,l=e.pushed_at,c=Object(n.useState)("0 mints"),s=Object(P.a)(c,2),i=s[0],o=s[1],m=Object(n.useCallback)((function(){var e=new Date(l),a=(new Date).getTime()-e.getTime(),t=Math.trunc(a/1e3/60/60);if(t<24){if(t<1)return o("just now");var n=1===t?"hour":"hours";return o("".concat(t.toString()," ").concat(n," ago"))}var r=new Intl.DateTimeFormat("en-US",{day:"numeric",month:"long",year:"numeric"}).format(e);return o("on ".concat(r))}),[l]);return Object(n.useEffect)((function(){m()}),[m]),r.a.createElement("p",{className:"card-text"},r.a.createElement("a",{href:t+"/stargazers",target:" _blank",className:"text-dark text-decoration-none"},r.a.createElement("span",{className:"text-dark card-link mr-4"},r.a.createElement("i",{className:"fab fa-github"})," Stars"," ",r.a.createElement("span",{className:"badge badge-dark"},a))),r.a.createElement("small",{className:"text-muted"},"Updated ",i))},J=function(e){var a=e.value,t=a.name,n=a.description,l=a.svn_url,c=a.stargazers_count,s=a.languages_url,i=a.pushed_at;return r.a.createElement(M.a,{md:6},r.a.createElement(A.a,{className:"card shadow-lg p-3 mb-5 bg-white rounded"},r.a.createElement(A.a.Body,null,r.a.createElement(A.a.Title,{as:"h5"},t||r.a.createElement(H.a,null)," "),r.a.createElement(A.a.Text,null,n?n||r.a.createElement(H.a,{count:3}):""," "),l?r.a.createElement(I,{svn_url:l}):r.a.createElement(H.a,{count:2}),r.a.createElement("hr",null),s?r.a.createElement(U,{languages_url:s,repo_url:l}):r.a.createElement(H.a,{count:3}),a?r.a.createElement(G,{star_count:c,repo_url:l,pushed_at:i}):r.a.createElement(H.a,null))))},K={name:null,description:null,svn_url:null,stargazers_count:null,languages_url:null,pushed_at:null},q="https://api.github.com",Q=function(e){var a=e.heading,t=e.username,l=e.length,c=e.specfic,s="".concat(q,"/users/").concat(t,"/repos?sort=updated&direction=desc"),i="".concat(q,"/repos/").concat(t),o=new Array(l+c.length).fill(K),m=Object(n.useState)([]),u=Object(P.a)(m,2),d=u[0],f=u[1],g=Object(n.useCallback)(Object(C.a)(O.a.mark((function e(){var a,t,n,r,o,m;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],e.prev=1,e.next=4,R.a.get(s);case 4:t=e.sent,a=Object(F.a)(t.data.slice(0,l)),e.prev=6,n=Object(W.a)(c),e.prev=8,n.s();case 10:if((r=n.n()).done){e.next=18;break}return o=r.value,e.next=14,R.a.get("".concat(i,"/").concat(o));case 14:m=e.sent,a.push(m.data);case 16:e.next=10;break;case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(8),n.e(e.t0);case 23:return e.prev=23,n.f(),e.finish(23);case 26:e.next=31;break;case 28:e.prev=28,e.t1=e.catch(6),console.error(e.t1.message);case 31:f(a),e.next=37;break;case 34:e.prev=34,e.t2=e.catch(1),console.error(e.t2.message);case 37:case"end":return e.stop()}}),e,null,[[1,34],[6,28],[8,20,23,26]])}))),[s,l,c,i]);return Object(n.useEffect)((function(){g()}),[g]),r.a.createElement(y.a,{fluid:!0,id:"projects",className:"bg-light m-0"},r.a.createElement(N.a,{className:""},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement(B.a,null,d.length?d.map((function(e,a){return r.a.createElement(J,{key:"project-card-".concat(a),id:"project-card-".concat(a),value:e})})):o.map((function(e,a){return r.a.createElement(J,{key:"dummy-".concat(a),id:"dummy-".concat(a),value:e})})))))},Z=function(e){return r.a.createElement("footer",{style:{backgroundColor:"#f5f5f5"},className:"mt-auto py-5 text-center "},r.a.createElement(N.a,null,e.children,r.a.createElement("i",{className:"fas fa-code"})," with ",r.a.createElement("i",{className:"fas fa-heart"})," by"," ",r.a.createElement("a",{className:"badge badge-dark",rel:"noopener",href:"https://github.com/blazeorite","aria-label":"My GitHub"},"Sujith")," ","using ",r.a.createElement("i",{className:"fab fa-react"}),r.a.createElement("p",null,r.a.createElement("small",{className:"text-muted"}))))},V="undefined"!==typeof window?n.useLayoutEffect:n.useEffect,X="undefined"!==typeof window;function Y(e){var a=e.element,t=e.useWindow;if(!X)return{x:0,y:0};var n=(a?a.current:document.body).getBoundingClientRect();return t?{x:window.scrollX,y:window.scrollY}:{x:n.left,y:n.top}}function $(e,a,t,r,l){var c=Object(n.useRef)(Y({useWindow:r})),s=null,i=function(){var a=Y({element:t,useWindow:r});e({prevPos:c.current,currPos:a}),c.current=a,s=null};V((function(){if(X){var e=function(){l?null===s&&(s=setTimeout(i,l)):i()};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e),s&&clearTimeout(s)}}}),a)}$.defaultProps={deps:[],element:!1,useWindow:!1,wait:null};var ee=function(e){var a=r.a.useState(null),t=Object(P.a)(a,2),n=t[0],l=t[1];return r.a.useEffect((function(){var a=e.current,t=new ResizeObserver((function(e){e.forEach((function(e){l(e.contentRect)}))}));return t.observe(a),function(){t.unobserve(a)}}),[e]),n},ae=t(36),te=t(20),ne=r.a.forwardRef((function(e,a){var t=Object(n.useState)(!0),l=Object(P.a)(t,2),c=l[0],s=l[1],i=Object(n.useState)(0),o=Object(P.a)(i,2),g=o[0],p=o[1],h=r.a.useRef(),b=ee(h),E=b?b.bottom:0;return $((function(e){e.prevPos;var t=e.currPos;b&&(t.y+a.current.offsetTop-b.bottom>5?s(!0):s(!1),p(t.y))}),[E]),r.a.useEffect((function(){b&&(E-g>=a.current.offsetTop?s(!1):s(!0))}),[E,b,a,g]),r.a.createElement(ae.a,{ref:h,className:" fixed-top  ".concat(c?"navbar-transparent":"navbar-white"),expand:"lg"},r.a.createElement(ae.a.Brand,{className:"brand",href:"/Portfolio-Website/#home"},"<".concat(m.firstName," />")),r.a.createElement(ae.a.Toggle,{"aria-controls":"basic-navbar-nav",className:"toggler"}),r.a.createElement(ae.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(te.a,{className:"mr-auto"},u.show&&r.a.createElement(te.a.Link,{className:"nav-link lead",href:"/Portfolio-Website/#aboutme"},"About"),d.show&&r.a.createElement(te.a.Link,{className:"nav-link lead",href:"/Portfolio-Website/#projects"},"Projects"),r.a.createElement(te.a.Link,{className:"nav-link lead",href:u.resume,target:"_blank",rel:"noreferrer noopener"},"Resume"),f.show&&r.a.createElement(te.a.Link,{className:"nav-link lead",href:"/Portfolio-Website/#leadership"},"Leadership"))))})),re=t(52),le=t(74),ce=t(73);var se=function(e){var a=e.skill,t=e.value,n=e.isScrolled;return r.a.createElement("div",{style:{width:"95%"}},r.a.createElement("p",{className:"lead mb-1 mt-2"},a),r.a.createElement(ce.a,{className:n?" progress-bar-animation":"progress",now:t}))};function ie(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,a.map((function(e,a){return r.a.createElement(se,{key:"".concat(e,"-").concat(a),skill:e.name,value:e.value,isScrolled:t})})))}var oe=function(e){var a=e.skills,t=e.isScrolled;return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{xs:12,md:6},r.a.createElement(ie,{skills:a.slice(0,Math.floor(a.length/2)),isScrolled:t})),r.a.createElement(M.a,{xs:12,md:6},r.a.createElement(ie,{skills:a.slice(Math.floor(a.length/2),a.length),isScrolled:t})))};var me=function(e){var a=e.heading,t=e.hardSkills,n=e.softSkills,l=r.a.useRef(),c=r.a.useState(!1),s=Object(P.a)(c,2),i=s[0],o=s[1];return $((function(e){e.prevPos;var a=e.currPos;!i&&a.y-400<0&&o(!0)}),[],l),r.a.createElement(y.a,{ref:l,fluid:!0,className:"bg-white m-0",id:"skills"},r.a.createElement(N.a,{className:"p-5 "},r.a.createElement("h2",{ref:l,className:"display-4 pb-5 text-center"},a),r.a.createElement(le.a,{className:"skills-tabs",defaultActiveKey:"hard-skills",id:"skills-tabs"},r.a.createElement(re.a,{tabClassName:"skills-tab lead",eventKey:"hard-skills",title:"Technical Skills"},r.a.createElement(B.a,{className:"pt-3 px-1"},r.a.createElement(oe,{skills:t,isScrolled:i}))),r.a.createElement(re.a,{tabClassName:"skills-tab lead",eventKey:"soft-skills",title:"Soft Skills"},r.a.createElement(B.a,{className:"pt-3 px-1"},r.a.createElement(oe,{skills:n,isScrolled:i}))))))},ue=function(e){var a=e.heading,t=e.message,n=e.email;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{className:"display-4 pb-3 text-center"},a),r.a.createElement("p",{className:"lead text-center pb-3"},t,", ",r.a.createElement("a",{href:"mailto:".concat(n)},n),"."))},de=t(48),fe=function(e){var a=e.heading,t=e.message,n=e.img,l=e.imageSize;return r.a.createElement("div",{id:"leadership",className:"jumbotron jumbotron-fluid m-0",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"container container-fluid"},r.a.createElement("h2",{className:"display-4 pb-5 text-center"},a),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-5"},r.a.createElement("p",{className:"lead"},t)),r.a.createElement("div",{className:"col-md-7"},r.a.createElement(de.a,null,n.map((function(e,a){return r.a.createElement(de.a.Item,null,r.a.createElement("img",{className:"d-block w-100",src:e.img,alt:"First slide",width:l.width,height:l.height}),r.a.createElement(de.a.Caption,null,r.a.createElement("h3",null,e.label),r.a.createElement("p",null,e.paragraph)))})))))))},ge=(t(113),t(119)),pe=function(e){var a=e.data;e.paper;return r.a.createElement(M.a,{lg:"6"},r.a.createElement(A.a,{className:"shadow-lg--hover shadow border-0 text-center rounded my-2"},r.a.createElement(A.a.Header,null,r.a.createElement("h5",null,a.company)),r.a.createElement(A.a.Body,{className:"py-5"},r.a.createElement(A.a.Img,{variant:"top",src:a.companylogo}),r.a.createElement(A.a.Title,{tag:"h5"},a.role),r.a.createElement(A.a.Subtitle,null,a.date),r.a.createElement(A.a.Text,{className:"my-3 text-left"},a.desc),r.a.createElement("ul",{className:"text-left"},a.descBullets?a.descBullets.map((function(e){return r.a.createElement("li",{key:e},e)})):null),r.a.createElement("div",null),r.a.createElement(ge.a,{href:a.paper,variant:"outline-success",size:"lg"},"Paper")," ",r.a.createElement(ge.a,{href:a.poster,variant:"outline-info",size:"lg"},"Poster")," ",r.a.createElement(ge.a,{href:a.video,variant:"outline-danger",size:"lg"},a.btnname)," ")))},he=function(e){var a=e.experiences;return r.a.createElement("section",{className:"section"},r.a.createElement(N.a,null,r.a.createElement(y.a,{fluid:!0,className:"bg-white"},r.a.createElement("h2",{className:"display-4 mb-5 text-center"},a.heading),r.a.createElement(B.a,null,a.data.map((function(e){return r.a.createElement(pe,{key:e.company,data:e})}))))))},be=r.a.forwardRef((function(e,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{gradient:m.gradientColors,title:"".concat(m.firstName," ").concat(m.middleName," ").concat(m.lastName),message:m.message,icons:m.icons,ref:a}),u.show&&r.a.createElement(T,{heading:u.heading,message:u.message,link:u.imageLink,imgSize:u.imageSize,resume:u.resume}),v.show&&r.a.createElement(he,{experiences:v}),d.show&&r.a.createElement(Q,{heading:d.heading,username:d.gitHubUsername,length:d.reposLength,specfic:d.specificRepos}),f.show&&r.a.createElement(fe,{heading:f.heading,message:f.message,img:f.images,imageSize:f.imageSize}),g.show&&r.a.createElement(me,{heading:g.heading,hardSkills:g.hardSkills,softSkills:g.softSkills}))})),Ee=function(){var e=r.a.useRef();return r.a.createElement(s.a,{basename:"/Portfolio-Website/"},o&&r.a.createElement(ne,{ref:e}),r.a.createElement(i.a,{path:"/",exact:!0,component:function(){return r.a.createElement(be,{ref:e})}}),r.a.createElement(Z,null,p&&r.a.createElement(ue,{heading:h,message:b,email:E})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ee,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},38:function(e,a,t){e.exports=t.p+"static/media/resume.ec019f1b.pdf"},78:function(e,a,t){e.exports=t(117)},83:function(e,a,t){},84:function(e,a,t){e.exports=t.p+"static/media/profile-pic.6ccd9786.jpg"},85:function(e,a,t){e.exports=t.p+"static/media/cc1.4111f7a7.jpeg"},86:function(e,a,t){e.exports=t.p+"static/media/cc2.a388ffe6.jpeg"}},[[78,1,2]]]);
//# sourceMappingURL=main.0084a663.chunk.js.map