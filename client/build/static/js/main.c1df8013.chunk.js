(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{50:function(e,s,t){},70:function(e,s,t){},71:function(e,s,t){},73:function(e,s,t){},74:function(e,s,t){},75:function(e,s,t){},76:function(e,s,t){},77:function(e,s,t){},82:function(e,s,t){},83:function(e,s,t){"use strict";t.r(s);var c=t(1),a=t.n(c),i=t(9),r=t.n(i),n=t(36),l=t(2),o=(t(50),t(0));var j=function(){return Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("nav",{className:"nav-bar",children:[Object(o.jsxs)("ul",{className:"mobile-nav-bar",children:[Object(o.jsx)("li",{className:"nav-link-item"}),Object(o.jsx)("li",{className:"nav-link-item",children:Object(o.jsx)("div",{className:"menu-btn",onClick:function(e){var s=e.target,t=s.classList.contains("menu-btn-burger-icon")?s.closest(".menu-btn"):s,c=document.querySelector("header");t.classList.contains("menu-btn-open")?(t.classList.remove("menu-btn-open"),c.classList.remove("show-mobile-nav-bar")):(t.classList.add("menu-btn-open"),c.classList.add("show-mobile-nav-bar"))},children:Object(o.jsx)("div",{className:"menu-btn-burger-icon"})})})]}),Object(o.jsx)("div",{className:"mobile-menu-link",children:Object(o.jsxs)("ul",{className:"menu-link",children:[Object(o.jsx)("li",{className:"menu-link-item",children:Object(o.jsx)(l.Link,{to:"aboutme",smooth:!0,duration:1e3,children:"about me"})}),Object(o.jsx)("li",{className:"menu-link-item",children:Object(o.jsx)(l.Link,{to:"portfolio",smooth:!0,duration:1e3,children:"portfolio"})}),Object(o.jsx)("li",{className:"menu-link-item",children:Object(o.jsx)(l.Link,{to:"contacts",smooth:!0,duration:1e3,children:"contacts"})})]})}),Object(o.jsxs)("ul",{className:"nav-link",children:[Object(o.jsx)("li",{className:"nav-link-item nav-logo"}),Object(o.jsx)("li",{className:"nav-link-item ml-auto",children:Object(o.jsx)(l.Link,{className:"navLink",to:"aboutme",smooth:!0,duration:1e3,children:"About Me"})}),Object(o.jsx)("li",{className:"nav-link-item",children:Object(o.jsx)(l.Link,{to:"contacts",smooth:!0,duration:1e3,children:"Contacts"})}),Object(o.jsx)("li",{className:"nav-link-item",children:Object(o.jsx)(l.Link,{to:"portfolio",smooth:!0,duration:1e3,children:"Portfolio"})})]})]})})},d=t(10),h=t(33),b=t.n(h),m=function(){return b.a.get("/api/techstack")};t(70);var u=function(){var e=Object(c.useState)([]),s=Object(d.a)(e,2),t=s[0],a=s[1];return Object(c.useEffect)((function(){m().then((function(e){a(e.data)})).catch((function(e){return console.log("No Data")}))}),[]),Object(o.jsxs)("section",{className:"hero-container",children:[Object(o.jsxs)("div",{className:"web-author-info",children:[Object(o.jsx)("h1",{className:"web-author-name",children:"amit karmacharya"}),Object(o.jsx)("h3",{className:"web-author-title",children:"full stack web developer"}),Object(o.jsxs)("div",{className:"web-dev-head",children:[Object(o.jsx)("span",{className:"display-block web-info-tiny",children:"familiar with"}),Object(o.jsx)("span",{className:"display-block web-dev-info",children:"development principles, technologies & tools"}),Object(o.jsx)("span",{className:"display-block web-info-tiny",children:"such as"})]})]}),t.length>0?Object(o.jsxs)("div",{className:"honeycomb-container","data-testid":"honeycomb-container",children:[Object(o.jsx)("div",{className:"honeycomb-techstack"}),Object(o.jsx)("div",{className:"honeycomb-play",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("span",{children:"match tech pair"}),Object(o.jsx)("button",{className:"",children:"play"})]})})]}):Object(o.jsxs)("div",{className:"techstack-text","data-testid":"techstack-text",children:[Object(o.jsxs)("div",{className:"front-end",children:[Object(o.jsx)("h5",{className:"techstack-head",children:"Front-End "}),Object(o.jsx)("p",{children:"html5, css3, javascript, bootstrap, materialize, react"})]}),Object(o.jsxs)("div",{className:"back-end",children:[Object(o.jsx)("h5",{className:"techstack-head",children:"Back-End "}),Object(o.jsx)("p",{children:"nodejs, express, sequelize, mysql, mongoose, mongodb, meteor"})]}),Object(o.jsxs)("div",{className:"principles",children:[Object(o.jsx)("h5",{className:"techstack-head",children:"Development Principles "}),Object(o.jsx)("p",{children:"TDD, agile, git workflow, UX/UI"})]}),Object(o.jsxs)("div",{className:"tools",children:[Object(o.jsx)("h5",{className:"techstack-head",children:"Tools & library "}),Object(o.jsx)("p",{children:"figma, git, github, trello, visual studio code, postman, jest, react testing library"})]})]})]})};t(71);var x=function(){return Object(o.jsxs)("article",{className:"aboutme",children:[Object(o.jsx)("h2",{"data-testid":"page-title",children:"About Me"}),Object(o.jsxs)("div",{className:"web-author-info-container",children:[Object(o.jsx)("div",{className:"avatar-wrapper",children:Object(o.jsx)("div",{className:"avatar-container",children:Object(o.jsx)("img",{className:"web-author-avatar",alt:"web developer, amit karmacharya",src:"./assets/images/amit.jpg"})})}),Object(o.jsx)("h5",{className:"web-author-name",children:"Amit karmacharya"})]}),Object(o.jsx)("section",{className:"social-media-wrapper",children:Object(o.jsxs)("div",{className:"social-media",children:[Object(o.jsxs)("div",{className:"social-media-item resume",children:[Object(o.jsx)("a",{href:"./assets/resume.pdf",target:"_blank",rel:"noreferrer",alt:"author resume link",children:"view resume"}),Object(o.jsx)("a",{href:"./assets/resume.pdf",download:!0,children:Object(o.jsx)("img",{alt:"download author resume",src:"./assets/images/download.png"})})]}),Object(o.jsx)("div",{className:"social-media-item",children:Object(o.jsxs)("a",{href:"https://github.com/amitkarmacharya-edu",target:"_blank",rel:"noreferrer",alt:"author github page",children:[Object(o.jsx)("img",{alt:"download author resume",src:"./assets/images/github-logo.png"}),Object(o.jsx)("span",{children:"@amitkarmacharya-edu"})]})}),Object(o.jsx)("div",{className:"social-media-item",children:Object(o.jsxs)("a",{href:"https://www.linkedin.com/in/amit-karmacharya-b344731ab/",target:"_blank",rel:"noreferrer",alt:"author linkedin page",children:[Object(o.jsx)("img",{alt:"download author resume",src:"./assets/images/linkedin.png"}),Object(o.jsx)("span",{children:"@amit-karmacharya-b344731ab"})]})})]})}),Object(o.jsxs)("div",{className:"author-bio","data-testid":"author-introduction",children:[Object(o.jsx)("h5",{children:"Hi!"}),Object(o.jsx)("p",{children:"I am a Full-stack developer based in Baltimore, Maryland. Before becoming a developer, I was in the retail industry but always thought about transitioning into tech. I started with online learning platforms like Team treehouse (almost 20k points), Coursera, etc. Then, I joined a full-stack Bootcamp from John Hopkins University, which was a good learning experience. I am thrilled that I took steps to start a career I excel in and love."})]})]})},p=t(17),O=t.n(p),g=t(34),v=function(e){var s=e.styling,t=e.text,c=function(e){var s,t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{s=document.execCommand("copy")}catch(c){s=!1}return document.body.removeChild(t),s},a=function(){var e=Object(g.a)(O.a.mark((function e(s){var a,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=s.target,navigator.clipboard||(i=c(t)?"copy-success":"copy-fail"),e.prev=2,e.next=5,navigator.clipboard.writeText(t);case 5:i="copy-success",e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),i="copy-fail";case 11:a.classList.add(i),setTimeout((function(){a.classList.remove(i),console.log(s.target)}),300),console.log(s.target);case 14:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(s){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{style:s,children:Object(o.jsx)("img",{className:"clipboard",alt:"copy email text to clipboard",src:"./assets/images/clipboard.svg",onClick:a})})},f={};t(73);var k=function(){var e=Object(c.useRef)();return Object(c.useEffect)((function(){var s;s=e,console.log("scroll refs added"),console.log(f[s])}),[]),Object(o.jsxs)("section",{ref:e,className:"contacts",children:[Object(o.jsx)("h2",{children:"Contacts"}),Object(o.jsxs)("div",{className:"contacts-content",children:[Object(o.jsxs)("div",{className:"contacts-card",children:[Object(o.jsx)("div",{className:"card-icon",children:Object(o.jsx)("img",{alt:"email-icon",src:"./assets/images/mail.png"})}),Object(o.jsx)("div",{className:"card-head",children:"email"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("a",{className:"author-email",href:"mailto:amitkarmacharya.work@gmail.com",children:"amitkarmacharya.work@gmail.com"}),Object(o.jsx)(v,{text:"amitkarmacharya.work@gmail.com",styling:{display:"inline-block"}})]})]}),Object(o.jsxs)("div",{className:"contacts-card",children:[Object(o.jsx)("div",{className:"card-icon",children:Object(o.jsx)("img",{alt:"github-icon",src:"./assets/images/telephone.png"})}),Object(o.jsx)("div",{className:"card-head",children:"phone number"}),Object(o.jsxs)("div",{className:"card-body",children:[Object(o.jsx)("a",{href:"tel:443-760-7685",rel:"noreferrer",children:"( 443 ) - 760 - 7685"}),Object(o.jsx)(v,{text:"4437607685",styling:{display:"inline-block"}})]})]}),Object(o.jsxs)("div",{className:"contacts-card",children:[Object(o.jsx)("div",{className:"card-icon",children:Object(o.jsx)("img",{alt:"linkedIn-icon",src:"./assets/images/pin.png"})}),Object(o.jsx)("div",{className:"card-head",children:"Location"}),Object(o.jsx)("div",{className:"card-body",children:"Nottingham, MD, 21234"})]})]})]})},N=(t(74),function(){return Object(o.jsxs)("section",{className:"portfolio",children:[Object(o.jsx)("h2",{"data-testid":"page-title",children:"Portfolio"}),Object(o.jsxs)("div",{"data-testid":"portfolio-content",children:[Object(o.jsxs)("section",{className:"portfolio-project",children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)("span",{children:"The Bike Shop"}),Object(o.jsx)("div",{className:"project-role",children:"Full-Stack Developer"})]}),Object(o.jsx)("div",{className:"project-thumbnail",children:Object(o.jsx)("img",{src:"./assets/images/bike-shop.png",alt:"Bike Shop site screenshot"})}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("p",{children:"Bicycle App shop is an application that allows users to select bicycles by brand name, accessories, and service request."}),Object(o.jsxs)("div",{className:"responsibilities",children:[Object(o.jsx)("h4",{children:"Responsibilites"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Design the website and convert it into code."}),Object(o.jsx)("li",{children:"Create local storage based cart system."}),Object(o.jsx)("li",{children:"Create a products pages and catalog page with filters."}),Object(o.jsx)("li",{children:"Find a solution to upload image."})]})]}),Object(o.jsxs)("div",{className:"technologies",children:[Object(o.jsx)("h4",{children:"Technologies"}),Object(o.jsxs)("p",{children:["HTML5, CSS3, Javascript, Handlebar, Node, Express, Mysql, Sequelize, Passport, bcrypt, Figma, Heroku, VSCode, Agile, Git."," "]})]}),Object(o.jsxs)("div",{className:"project-links",children:[Object(o.jsxs)("a",{href:"https://github.com/amitkarmacharya-edu/New-Bike-Shop",target:"_blank",rel:"noreferrer",alt:"author github page",className:"github-project-link",children:[Object(o.jsx)("img",{alt:"download author resume",src:"./assets/images/github-logo.png"}),Object(o.jsx)("span",{children:" Repository"})]}),Object(o.jsx)("a",{href:"https://new-bike-shop.herokuapp.com",target:"_blank",rel:"noreferrer",alt:"author github page",className:"live-project-link",children:Object(o.jsx)("span",{children:" Live Site"})})]})]})]}),Object(o.jsxs)("section",{className:"portfolio-project",children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)("span",{children:"Covid Stats & Test Sites"}),Object(o.jsx)("div",{className:"project-role",children:"Front-End Developer"})]}),Object(o.jsx)("div",{className:"project-thumbnail",children:Object(o.jsx)("img",{src:"./assets/images/covid.png",alt:"Bike Shop site screenshot"})}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("p",{children:"This Covid tracker application delivers the current covid19 updates and statistics nationwide. The User can search for any city and view instantaneous status and search for test sites near their location."}),Object(o.jsxs)("div",{className:"responsibilities",children:[Object(o.jsx)("h4",{children:"Responsibilites"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Create a wireframe for the single page application and convert it into code."}),Object(o.jsx)("li",{children:"Create an auto complete feature for the search bar to help users select the correct addresss."}),Object(o.jsx)("li",{children:"Display the number of positive covid stats for all the coutries."}),Object(o.jsx)("li",{children:"Display the Test locations in the map using markers."}),Object(o.jsx)("li",{children:"Display circle markers to provide visual scale of positive covid cases for all the states in USA."})]})]}),Object(o.jsxs)("div",{className:"technologies",children:[Object(o.jsx)("h4",{children:"Technologies"}),Object(o.jsx)("p",{children:"HTML5, CSS3, Javascript, JQuery, Google API, Figman, VSCode, Git, Github."})]}),Object(o.jsxs)("div",{className:"project-links",children:[Object(o.jsxs)("a",{href:"https://github.com/amitkarmacharya-edu/Project_1",target:"_blank",rel:"noreferrer",alt:"author github page",className:"github-project-link",children:[Object(o.jsx)("img",{alt:"download author resume",src:"./assets/images/github-logo.png"}),Object(o.jsx)("span",{children:" Repository"})]}),Object(o.jsx)("a",{href:"https://amitkarmacharya-edu.github.io/Project_1/",target:"_blank",rel:"noreferrer",alt:"author github page",className:"live-project-link",children:Object(o.jsx)("span",{children:" Live Site"})})]})]})]}),Object(o.jsxs)("section",{className:"portfolio-project",children:[Object(o.jsxs)("h3",{children:[Object(o.jsx)("span",{children:"MBDirect"}),Object(o.jsx)("div",{className:"project-role",children:"Full-Stack Developer"})]}),Object(o.jsx)("div",{className:"project-thumbnail",children:Object(o.jsx)("img",{src:"./assets/images/mbdirect.png",alt:"Bike Shop site screenshot"})}),Object(o.jsxs)("div",{className:"project-info",children:[Object(o.jsx)("p",{children:"A WebRTC application that connects users and businesses directly. What if you could reach any business with just a click? Any user from the internet is just a click away from any company registered with MBDirect. Users can click on the video icon next to the business logo to start a video call and have a conversation with the business representative."}),Object(o.jsxs)("div",{className:"responsibilities",children:[Object(o.jsx)("h4",{children:"Responsibilites"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:"Find a solution to setup video/audio calls."}),Object(o.jsx)("li",{children:"Create wireframes for each stages of the video/audio calls."}),Object(o.jsx)("li",{children:"Convert the wireframes into codes."}),Object(o.jsx)("li",{children:"Create routes and logic to setup video/audio calls."})]})]}),Object(o.jsxs)("div",{className:"technologies",children:[Object(o.jsx)("h4",{children:"Technologies"}),Object(o.jsx)("p",{children:"HTML5, CSS3, Javascript, Socket.io, WebRTC, Node, Express, Mysql, Sequelize, Axios, React, Bcrypt, Passport, Figma, VSCode, Git, Github. Git, Github."})]}),Object(o.jsxs)("div",{className:"project-links",children:[Object(o.jsxs)("a",{href:"https://github.com/amitkarmacharya-edu/MBDirect",target:"_blank",rel:"noreferrer",alt:"author github page",className:"github-project-link",children:[Object(o.jsx)("img",{alt:"download author resume",src:"./assets/images/github-logo.png"}),Object(o.jsx)("span",{children:" Repository"})]}),Object(o.jsx)("a",{href:"https://mbdirect.herokuapp.com",target:"_blank",rel:"noreferrer",alt:"author github page",className:"live-project-link",children:Object(o.jsx)("span",{children:" Live Site"})})]})]})]})]})]})});var y=function(){return Object(o.jsxs)("main",{className:"container",children:[Object(o.jsx)(u,{}),Object(o.jsx)(N,{}),Object(o.jsx)(x,{}),Object(o.jsx)(k,{})]})};t(75);var w=function(){return Object(o.jsxs)("footer",{children:[Object(o.jsxs)("section",{className:"footer-links",children:[Object(o.jsx)("h5",{children:Object(o.jsx)("span",{children:"links"})}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)(l.Link,{to:"/",onClick:function(){l.animateScroll.scrollToTop()},children:"home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.Link,{to:"aboutme",smooth:!0,duration:1e3,children:"about"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.Link,{to:"portfolio",smooth:!0,duration:1e3,children:"portfolio"})}),Object(o.jsx)("li",{children:Object(o.jsx)(l.Link,{to:"contacts",smooth:!0,duration:1e3,children:"contacts"})})]})]}),Object(o.jsxs)("section",{className:"footer-contacts",children:[Object(o.jsx)("h5",{children:Object(o.jsx)("span",{children:"contacts"})}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:"./assets/images/telephone.png",alt:"phone"}),Object(o.jsx)("a",{href:"tel:443-760-7686",children:"443 - 760 -7685"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:"./assets/images/pin.png",alt:"location icon"}),"nottingham, maryland, 21234"]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:"./assets/images/mail.png",alt:"email icon"}),Object(o.jsx)("a",{href:"mailto:amitkarmacharya.work@gmail.com",children:"amitkarmacharya.work@gmail.com"})]})]})]}),Object(o.jsxs)("section",{className:"footer-social-media-links",children:[Object(o.jsx)("h5",{children:Object(o.jsx)("span",{children:"social media"})}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:"./assets/images/github-logo.png",alt:"github icon"}),Object(o.jsx)("a",{href:"https://github.com/amitkarmacharya-edu",target:"_blank",rel:"noreferrer",children:"@amitkarmacharya-edu"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("img",{src:"./assets/images/linkedin.png",alt:"linkedin icon"}),Object(o.jsx)("a",{href:"https://www.linkedin.com/in/amit-karmacharya-b344731ab/",target:"_blank",rel:"noreferrer",children:"@amit-karmacharya-b344731ab"})]})]})]}),Object(o.jsx)("h5",{children:"Have a good day."})]})},S=(t(76),function(e){var s=e.scrollBelow,t=Object(c.useState)(!s),a=Object(d.a)(t,2),i=a[0],r=a[1],n=function(){window.pageYOffset>s?i||r(!0):i&&r(!1)};return Object(c.useEffect)((function(){if(s)return window.addEventListener("scroll",n),function(){return window.removeEventListener("scroll",n)}})),Object(o.jsx)(o.Fragment,{children:!0===i&&Object(o.jsx)("div",{className:"scroll-to-top",onClick:function(e){l.animateScroll.scrollToTop()},children:Object(o.jsx)("div",{className:"scroll-top-icon-container",children:Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-arrow-up-circle-fill",viewBox:"0 0 16 16",children:Object(o.jsx)("path",{d:"M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"})})})})})});t(77);var L=function(){return Object(o.jsxs)(n.a,{children:[Object(o.jsx)(j,{}),Object(o.jsx)(y,{}),Object(o.jsx)(w,{}),Object(o.jsx)(S,{scrollBelow:60})]})};t(82);r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(L,{})}),document.getElementById("root"))}},[[83,1,2]]]);
//# sourceMappingURL=main.c1df8013.chunk.js.map