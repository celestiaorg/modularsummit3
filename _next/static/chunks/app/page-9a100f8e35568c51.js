(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{379:function(e,t,s){Promise.resolve().then(s.t.bind(s,231,23)),Promise.resolve().then(s.bind(s,373)),Promise.resolve().then(s.bind(s,6328)),Promise.resolve().then(s.bind(s,9546)),Promise.resolve().then(s.bind(s,327)),Promise.resolve().then(s.bind(s,8070)),Promise.resolve().then(s.bind(s,8559)),Promise.resolve().then(s.bind(s,3766))},327:function(e,t,s){"use strict";var l=s(7437);s(2265);var i=s(9424);s(1239);var a=s(7439);t.default=()=>(0,l.jsx)("section",{className:"w-full",children:(0,l.jsx)("div",{className:"w-full pb-4 pt-10 lg:pt-20",children:(0,l.jsxs)("div",{className:"lg:pt-5",children:[(0,l.jsx)("div",{className:"mb-[30px] flex justify-center",children:(0,l.jsxs)("div",{className:"basis-auto text-center",children:[(0,l.jsx)("span",{className:"text-[18px] font-bold tracking-[-0.54px] text-black lg:text-[28px] lg:tracking-[-0.84px]",children:a.X.GallerySection.subtitle}),(0,l.jsx)("h2",{className:"text-[32px] font-bold leading-none tracking-[-0.96px] text-black lg:text-[68px] lg:tracking-[-2.04px]",children:a.X.GallerySection.title})]})}),(0,l.jsx)(i.default,{swipeable:!0,draggable:!1,centerMode:!1,partialVisbile:!0,showDots:!1,responsive:{desktop:{breakpoint:{max:3e3,min:1024},items:2,partialVisibilityGutter:120,slidesToSlide:1},tablet:{breakpoint:{max:1920,min:961},items:2,partialVisibilityGutter:80,slidesToSlide:1},mobile:{breakpoint:{max:960,min:0},items:1,partialVisibilityGutter:40,slidesToSlide:1}},ssr:!0,infinite:!0,autoPlaySpeed:1e3,keyBoardControl:!0,customTransition:"transform 300ms ease-in-out",transitionDuration:300,containerClass:"carousel-container h-[300px] md:h-[450px] xl:h-[600px] gap-10",removeArrowOnDeviceType:["mobile"],dotListClass:"custom-dot-list-style",itemClass:"px-5 relative h-[600px] border-white border-r border-l-[8px] md:border-l-[20px] border-r-[8px] md:border-r-[20px]",children:a.X.GallerySection.images.map(function(e,t){return(0,l.jsx)("img",{src:e,alt:"gallery image",className:"absolute left-0 top-0 h-full w-full object-cover"},t)})})]})})})},8559:function(e,t,s){"use strict";s.d(t,{default:function(){return m}});var l=s(7437),i=s(2265),a=s(7183),n=s(1271),r=s(7322),o=s(9582),d=s(7439),c=s(2096),x=s(1568),m=()=>{let e=(0,i.useRef)(null),t=(0,i.useRef)(null);(0,i.useEffect)(()=>{let s=e.current,l=t.current,i=e=>{o.p8.to(s,{duration:2,x:(e.pageX-window.innerWidth/2)/50,y:-(e.pageY-window.innerHeight/2)/50,ease:"slow"}),o.p8.to(l,{duration:2,x:-(e.pageX-window.innerWidth/2)/100,y:(e.pageY-window.innerHeight/2)/100,ease:"slow"})};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}},[]);let s=()=>(0,l.jsx)("span",{children:"LIVE"}),[m,p]=(0,i.useState)(!1),h=()=>{let e=document.getElementById("video"),t=null==e?void 0:e.play();void 0!==t&&t.catch(e=>{"NotAllowedError"===e.name&&p(!0)}).then(()=>{null==e||e.classList.remove("hidden")})};return(0,i.useEffect)(()=>{h()},[]),(0,l.jsx)("section",{className:"hero-section relative w-full overflow-hidden border-white lg:border-x-[16px] lg:border-b-0",children:(0,l.jsxs)("div",{className:"h-[calc(100vh-40px)] w-full md:max-h-[600px] md:min-h-[600px] lg:min-h-[700px] xl:h-[calc(100vh-(90px+16px))] xl:max-h-[1060px] 2xl:xl:h-[calc(100vh-(120px+16px))] 2xl:max-h-[1300px]",children:[(0,l.jsx)("div",{className:"absolute left-0 top-0 z-[1] h-full w-full bg-black opacity-20"}),(0,l.jsx)("div",{className:"absolute left-0 top-0 z-[0] h-full w-full bg-cover bg-center bg-no-repeat md:hidden",style:{backgroundImage:"url(".concat(r.Z.src,")")}}),(0,l.jsxs)("div",{className:"absolute left-0 top-0 z-0 hidden h-full w-full md:block",children:[m?(0,l.jsx)("div",{className:"layer-1 absolute -bottom-20 -left-10 -right-10 z-0",children:(0,l.jsx)("img",{alt:"Modular Summit",src:a.Z.src,className:"object-cover",ref:e})}):(0,l.jsx)("div",{className:"layer-1 absolute -left-10 -right-10 top-[-10%] z-0 lg:top-[-5%]",children:(0,l.jsxs)("video",{id:"video",loop:!1,playsInline:!0,autoPlay:!0,muted:!0,className:"hidden h-full w-full",children:[(0,l.jsx)("source",{src:"/videos/Celestia_Modular_SUMMIT_bg_anim_crop_2100_25mbps.mp4",type:'video/mp4;codecs="hvc1"'}),(0,l.jsx)("source",{src:"/videos/Celestia_Modular_SUMMIT_bg_anim_crop_2100_25mbps-vp9-chrome.webm",type:"video/webm"})]})}),(0,l.jsx)("div",{className:"layer-2 z-1 absolute -bottom-10 -left-10 -right-10",ref:t,children:(0,l.jsx)("img",{alt:"Modular Summit",src:n.Z.src,className:"object-cover"})})]}),(0,l.jsx)("div",{className:"relative z-[2] flex h-full flex-col justify-end",children:(0,l.jsx)("div",{className:"basis-auto",children:(0,l.jsxs)("div",{className:"flex flex-wrap items-end justify-between px-[16px] pb-[40px] pt-[16px] sm:p-[50px]",children:[(0,l.jsxs)("div",{className:"basis-full text-center lg:basis-1/2 lg:text-left",children:[(0,l.jsx)("h1",{className:"mb-8 text-balance text-[64px] font-bold leading-[0.95em] tracking-[-3.84px] text-white will-change-transform sm:text-[120px] sm:leading-[0.85em] lg:max-w-[650px]",children:d.X.HeroSection.title}),(0,l.jsxs)("div",{className:"mt-[20px] flex flex-wrap justify-center gap-2 text-[24px] font-bold leading-none tracking-[-0.96px] text-white md:gap-0 lg:justify-start lg:text-[26px] lg:tracking-[-1.24px] xl:tracking-[-1.6px] 2xl:text-[40px]",children:[(0,l.jsx)("div",{className:"basis-full md:basis-auto md:pr-[30px]",children:d.X.HeroSection.date}),(0,l.jsx)("div",{className:"basis-full border-white md:basis-auto md:border-l md:pl-[30px]",children:d.X.HeroSection.location})]}),(0,l.jsxs)("div",{className:"mt-10 flex items-center justify-center md:mt-16 lg:justify-start",children:[(0,l.jsx)("div",{className:"mr-5 basis-auto text-nowrap text-[12px] font-medium text-white md:mr-8 md:text-[20px]",children:"Hosted by"}),(0,l.jsx)("div",{className:"basis-auto",children:(0,l.jsx)("img",{src:"/_next/static/media/celestia-labs-white.1aaa490b.png",alt:"Celestia",className:"max-h-[32px] sm:max-h-[48px]"})}),(0,l.jsx)("div",{className:"basis-auto px-4 text-[20px] text-white md:text-[28px]",children:"\xb7"}),(0,l.jsx)("div",{className:"basis-auto pl-1 md:pl-2",children:(0,l.jsx)("img",{src:"/_next/static/media/maven11-white.e3d1d0c8.png",alt:"Maven11",className:"max-h-[16px] sm:max-h-[25px]"})})]})]}),(0,l.jsx)("div",{className:"basis-full lg:basis-1/2",children:(0,l.jsxs)("div",{className:"flex flex-wrap items-center justify-center md:mt-10 lg:mt-0 lg:justify-end",children:[(0,l.jsx)("div",{className:"order-2 basis-full pt-[30px] md:order-1 md:basis-auto md:pr-10 md:pt-0 lg:basis-full lg:pr-0",children:(0,l.jsxs)("div",{className:"flex flex-wrap justify-center md:justify-end",children:[(0,l.jsx)("div",{className:"hidden basis-auto md:block",children:d.X.HeroSection.countDownDate&&(0,l.jsx)(x.m,{name:d.X.HeroSection.calendarButton.addToCalendarProps.name,description:d.X.HeroSection.calendarButton.addToCalendarProps.description,startDate:d.X.HeroSection.calendarButton.addToCalendarProps.startDate,startTime:d.X.HeroSection.calendarButton.addToCalendarProps.startTime,endDate:d.X.HeroSection.calendarButton.addToCalendarProps.endDate,endTime:d.X.HeroSection.calendarButton.addToCalendarProps.endTime,timeZone:d.X.HeroSection.calendarButton.addToCalendarProps.timeZone,location:d.X.HeroSection.calendarButton.addToCalendarProps.location,options:d.X.HeroSection.calendarButton.addToCalendarProps.options,buttonStyle:"round",trigger:"click",listStyle:"dropup-static",size:"10",hideCheckmark:!0,styleLight:" --btn-background: #FFEA72; --btn-text: #000; --btn-border: transparent; --btn-font-weight: 500;"})}),(0,l.jsx)("div",{className:"block basis-auto md:hidden",children:(0,l.jsxs)("a",{className:"flex w-fit items-center rounded-full bg-brand-blue px-[28px] py-[14px] transition-colors hover:bg-[#4e8ec2] max-sm:ml-5",href:d.X.HeroSection.tickets,target:"_blank",rel:"noopener noreferrer",children:[(0,l.jsx)("svg",{className:"mr-4 w-6",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M13 5V7M13 17V19M13 11V13M2 9C2.79565 9 3.55871 9.31607 4.12132 9.87868C4.68393 10.4413 5 11.2044 5 12C5 12.7956 4.68393 13.5587 4.12132 14.1213C3.55871 14.6839 2.79565 15 2 15V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V15C21.2044 15 20.4413 14.6839 19.8787 14.1213C19.3161 13.5587 19 12.7956 19 12C19 11.2044 19.3161 10.4413 19.8787 9.87868C20.4413 9.31607 21.2044 9 22 9V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V9Z",stroke:"black",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})}),(0,l.jsx)("span",{className:"text-[20px] font-normal",children:d.X.HeroSection.ticketButton.title})]})})]})}),(0,l.jsx)("div",{className:"order-1 basis-full md:order-2 md:basis-auto lg:basis-full",children:(0,l.jsx)("div",{className:"mt-[30px] flex flex-wrap justify-center md:mt-0 md:justify-end md:pl-10 lg:mt-10 lg:pl-0",children:(0,l.jsx)("div",{className:"flex basis-auto items-end",children:d.X.HeroSection.countDownDate&&(0,l.jsx)(c.ZP,{date:d.X.HeroSection.countDownDate,renderer:e=>{let{days:t,hours:i,minutes:a,seconds:n,completed:r}=e;return r?(0,l.jsx)(s,{}):(0,l.jsxs)("div",{className:"flex items-center gap-[30px] 2xl:gap-[50px]",children:[(0,l.jsxs)("div",{suppressHydrationWarning:!0,children:[(0,l.jsx)("span",{className:"block text-center text-[40px] font-bold leading-none tracking-[-1.6px] text-white lg:text-[60px] lg:tracking-[-3.24px] xl:text-[80px]",children:t}),(0,l.jsx)("span",{className:"block text-center text-base font-semibold leading-none tracking-[-1.35px] text-white lg:text-[24px] xl:text-[32px]",children:"Days"})]}),(0,l.jsxs)("div",{suppressHydrationWarning:!0,children:[(0,l.jsx)("span",{className:"block text-center text-[40px] font-bold leading-none tracking-[-1.6px] text-white lg:text-[60px] lg:tracking-[-3.24px] xl:text-[80px]",children:i}),(0,l.jsx)("span",{className:"block text-center text-base font-semibold leading-none tracking-[-1.35px] text-white lg:text-[24px] xl:text-[32px]",children:"Hour"})]}),(0,l.jsxs)("div",{suppressHydrationWarning:!0,children:[(0,l.jsx)("span",{className:"block text-center text-[40px] font-bold leading-none tracking-[-1.6px] text-white lg:text-[60px] lg:tracking-[-3.24px] xl:text-[80px]",children:a}),(0,l.jsx)("span",{className:"block text-center text-base font-semibold leading-none tracking-[-1.35px] text-white lg:text-[24px] xl:text-[32px]",children:"Minutes"})]}),(0,l.jsxs)("div",{suppressHydrationWarning:!0,children:[(0,l.jsx)("span",{className:"block text-center text-[40px] font-bold leading-none tracking-[-1.6px] text-white lg:text-[60px] lg:tracking-[-3.24px] xl:text-[80px]",children:n}),(0,l.jsx)("span",{className:"block text-center text-base font-semibold leading-none tracking-[-1.35px] text-white lg:text-[24px] xl:text-[32px]",children:"Seconds"})]})]})}})})})})]})})]})})})]})})}},3766:function(e,t,s){"use strict";var l=s(7437),i=s(2265),a=s(7138),n=s(7439);t.default=()=>{let[e,t]=(0,i.useState)(0),[s,r]=(0,i.useState)(n.X.VideoSection.videos[0].videoId),o=(e,s)=>{t(e),r(s.videoId)};return(0,l.jsx)("section",{className:"w-full",children:(0,l.jsx)("div",{className:"w-full pb-4 lg:p-4 lg:pb-0",children:(0,l.jsx)("div",{className:"bg-[#FBE5DB] px-4 py-10 lg:py-20",children:(0,l.jsxs)("div",{className:"mx-auto max-w-[1280px]",children:[(0,l.jsxs)("div",{className:"flex flex-wrap items-center justify-between",children:[(0,l.jsx)("div",{className:"basis-full lg:basis-auto",children:(0,l.jsx)("h2",{className:"text-[32px] font-bold leading-tight text-black lg:text-[42px]",children:n.X.VideoSection.title})}),(0,l.jsx)("div",{className:"basis-full pt-[20px] lg:basis-auto lg:pt-0",children:(0,l.jsx)(a.default,{href:n.X.VideoSection.button.url,target:n.X.VideoSection.button.target,children:(0,l.jsxs)("button",{className:"inline-flex items-center rounded-full bg-[#234735] px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-black lg:tracking-[-0.28px]",children:[(0,l.jsx)("div",{className:"basis-auto",children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"19",viewBox:"0 0 18 19",fill:"none",children:(0,l.jsx)("path",{d:"M17.8207 5.89998C17.8207 5.89998 17.6449 4.65896 17.1035 4.11404C16.418 3.39685 15.6516 3.39333 15.3 3.35115C12.7828 3.16833 9.00352 3.16833 9.00352 3.16833H8.99648C8.99648 3.16833 5.21719 3.16833 2.7 3.35115C2.34844 3.39333 1.58203 3.39685 0.896484 4.11404C0.355078 4.65896 0.182812 5.89998 0.182812 5.89998C0.182812 5.89998 0 7.35896 0 8.81443V10.1785C0 11.634 0.179297 13.0929 0.179297 13.0929C0.179297 13.0929 0.355078 14.334 0.892969 14.8789C1.57852 15.5961 2.47852 15.5715 2.8793 15.6488C4.3207 15.7859 9 15.8281 9 15.8281C9 15.8281 12.7828 15.8211 15.3 15.6418C15.6516 15.5996 16.418 15.5961 17.1035 14.8789C17.6449 14.334 17.8207 13.0929 17.8207 13.0929C17.8207 13.0929 18 11.6375 18 10.1785V8.81443C18 7.35896 17.8207 5.89998 17.8207 5.89998ZM7.14023 11.8344V6.77537L12.0023 9.31365L7.14023 11.8344Z",fill:"white"})})}),(0,l.jsx)("div",{className:"grow basis-auto pl-4",children:n.X.VideoSection.button.title})]})})})]}),(0,l.jsxs)("div",{className:"mt-10 grid grid-cols-1 lg:mt-[50px] lg:grid-cols-3 lg:gap-[50px]",children:[(0,l.jsx)("div",{className:"col-span-2 h-[300px] lg:h-auto",children:(0,l.jsx)("iframe",{width:"100%",height:"100%",src:"https://www.youtube.com/embed/".concat(s,"?si=GmuTknDRzyiJkxrm"),title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}),(0,l.jsx)("div",{className:"pt-8 lg:pt-0",children:(0,l.jsx)("div",{className:"flex flex-wrap",children:n.X.VideoSection.videos.map(function(t,s){return(0,l.jsxs)("div",{className:"basis-full cursor-pointer border-b border-[#E2E2E2] py-3",onClick:()=>o(s,t),children:[(0,l.jsx)("div",{className:"".concat(e===s?"text-[#EC9455]":"text-black"," mb-1 text-[14px] font-bold leading-tight lg:text-lg"),children:t.title}),(0,l.jsx)("div",{className:"text-[13px] font-medium text-[#959595]",children:t.subtitle})]},s)})})})]})]})})})})}},1271:function(e,t){"use strict";t.Z={src:"/_next/static/media/hero-bottom.ce16ab1b.png",height:1313,width:2100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAk0lEQVR42mPwDjc57xpqassABO5hJkwMUGDsasiiaK3JzGDqoPffwtNkG0gwumARU3JCMXNG90NGBhhQdHD4IO/sNZ8BDVg4KZUbOOj1MVj4uTQx2DGImcblOc3a/58nK6PROXP6VwktV7fNylZqvxisXcw/2TozXDeJ7//tlrbgppsNw6vwtNkvdYPyninoM/wGABXRKzlhGLoQAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:5}},7322:function(e,t){"use strict";t.Z={src:"/_next/static/media/hero-mobile.e98edec2.png",height:1400,width:780,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAIAAABRUclSAAAAc0lEQVR42gFoAJf/AH6bw5Klxpyzy42qzwCkp7mNl8KaqMq5vM0AsqyTjoejh5a8u7inAJqmd6ytn5u2uoimjgCOmY2fp6WtqYyWl3oARmCQSmmiN0VPUFFfACM4SC0wHjkvBDYwIAA4KwAuKxczKh4lKRqY+y6I+hyYfAAAAABJRU5ErkJggg==",blurWidth:4,blurHeight:8}},7183:function(e,t){"use strict";t.Z={src:"/_next/static/media/hero-top.a049ebaa.png",height:1640,width:2100,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAwUlEQVR42g3H3UrCUADA8f/RMyenLFvEUiLI6DJ6k96mnqd3yCtvRfDGG0FxKn5z3FSmzg9EN6e/u5/4/fuPv17fcDe3jFceH09pVMpERFvm2z2i2enGI18w9uGcOJGzbjDj6wOXhr9EJtJJlLnn3QjozR4QRshLXmKbG46TIbLsVMjd3aNok5GfrCILresw0tRKRWTo9ZmvH8mqLJYdkjJaTP2Iht6hu1XkzHXYBQH5zDPCsDmoAsnDAG/hUPj+iS8aeE6v23s8MQAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6}}},function(e){e.O(0,[131,960,357,288,582,909,96,904,971,23,744],function(){return e(e.s=379)}),_N_E=e.O()}]);