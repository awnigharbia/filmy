var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,l=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&a(e,r,t[r]);return e},s=(e,o)=>t(e,r(o)),c=(e,t)=>{var r={};for(var a in e)n.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};import{r as p,L as d,s as x,a as m,c as u,b as g,d as f,R as h,u as v,e as E,f as b,g as y,h as w,i as k,v as z,j as S,k as C,B as I,_ as O,p as j,l as P,m as L,n as $,o as _,q as F,t as A,z as N,w as R,x as M,y as T,A as D,C as B,P as U,D as W,E as H,F as Y,S as K,Q as V,G as q,H as G,I as J}from"./vendor.6de0db6b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const Q=e=>{var t=e,{children:r}=t,o=c(t,["children"]);return p.exports.createElement(d,s(l({},o),{replace:window.location.pathname===o.to}),r)},X=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f8f9fb;
`,Z=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  background-color: var(--colors-secondary);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 0px 0px rgba(0, 0, 0, 0);
  transition: background-color 0.2s ease-in-out;
`,ee=x.h1`
  font-size: 20px;
  font-weight: 500;
  color: var(--colors-text);
  transition: color 0.2s ease-in-out;
`,te=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 22px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: var(--colors-text);
  transition: color 0.2s ease-in-out;
`,re=x(Q)`
  display: flex;
  text-decoration: none;
  flex-direction: row;
  align-items: center;
  padding: 8px 15px;
  outline: none;
  border-radius: 20px;
  background-color: #926dde;
  color: white;
  font-size: 12px;
  letter-spacing: 1.7px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  border: none;
  box-shadow: 0 1px 10px rgba(146, 109, 222, 0.5);
  transition: 0.2s ease-in-out;

  &:hover {
    color: #926dde;
    background-color: white;
  }
`,oe=()=>p.exports.createElement(Z,null,p.exports.createElement(ee,null),p.exports.createElement(te,null,"Latest Movies"),p.exports.createElement(re,{to:"/latest-movies"},"DISCOVER",p.exports.createElement(m.Icon,{size:20,icon:u}))),ne=x.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding: 10px 40px;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-evenly;
  background-color: var(--colors-primary);
`,ie=x.div`
  position: relative;
  transition: 0.4s ease;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  flex-shrink: 0;
`,ae=x.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  flex-wrap: wrap;
  width: 200px;
  transition: 0.2s ease-in-out;
  cursor: pointer;
`,le=x(ie)`
  height: 280px;
  width: 95%;
`,se=x.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 7px;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    transparent 50%,
    rgba(0, 0, 0, 0.8) 100%
  );
  opacity: 0;
  transition: 0.2s ease-in-out;

  ${ae}:hover & {
    opacity: 1;
  }
`,ce=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`,pe=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0.2em 0.4em;
  font-size: 0.85em;
  color: ${e=>e.color||"#fec72a"};
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 25px;
  transition: 0.2s ease-in-out;

  ${ae}:hover & {
    transform: translateY(-15px);
  }
`,de=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  word-break: break-all;
  font-weight: 400;
  align-items: flex-start;
`,xe=x.p`
  font-size: 13.5px;
  margin: 0px 0px 10px 0px;
  background-color: gray;
  border-radius: 25px;
  color: white;
  font-weight: 500;
  padding: 3px 10px;
  transition: 0.2s ease-in-out;

  ${ae}:hover & {
    background-color: rgba(0, 0, 0, 0.7);
  }
`,me=x.p`
  color: gray;
  font-size: 13px;
  font-weight: 400;
  margin: 10px 0px 5px 0px;
`;x.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px 20px;
  background-color: #f7f7f7;
`,x.span`
  font-size: 12px;
  letter-spacing: 1.7px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
`;const ue=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: var(--colors-primary);
`,ge=p.exports.createContext({isOpen:!1,setIsOpen:()=>{},handleOpen:()=>{},movieId:0}),fe=({children:e})=>{const[t,r]=p.exports.useState(0),[o,n]=p.exports.useState(!1);const i={isOpen:o,handleOpen:function(e){r(e),n(!0)},setIsOpen:n,movieId:t};return p.exports.createElement(ge.Provider,{value:i},e," ")};function he(){const e=p.exports.useContext(ge);if(!e)throw new Error("useModal must be used within a ModalProvider");return e}const ve=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],Ee=({id:e,poster_path:t="",vote_average:r,release_date:o,genre_ids:n,title:i})=>{var a;const{handleOpen:l}=he();return p.exports.createElement(ae,{onClick:()=>l(e)},p.exports.createElement(le,{src:`https://image.tmdb.org/t/p/w500/${t}`},p.exports.createElement(se,null,p.exports.createElement(ce,null,p.exports.createElement(pe,{color:"rgba(255,255,255,.8)"},p.exports.createElement(m.Icon,{icon:g,size:20}),o),p.exports.createElement(pe,null,p.exports.createElement(m.Icon,{icon:f,size:20}),r,"/10")))),p.exports.createElement(de,null,p.exports.createElement(me,null,null==(a=null==n?void 0:n.map((e=>{var t;return null==(t=ve.find((t=>t.id===e)))?void 0:t.name})))?void 0:a.join(" | ")),p.exports.createElement(xe,null,i)))};const be={width:"200px",height:"346px",marginTop:"10px",borderRadius:"5px"},ye=({moviePages:e,isLoading:t,isError:r=!1})=>r?p.exports.createElement("div",null,"Oops. Something went wrong"):p.exports.createElement(ne,null,t?p.exports.createElement(ke,{isLoading:t}):p.exports.createElement(we,{moviePages:e})),we=({moviePages:e})=>p.exports.createElement(p.exports.Fragment,null,null==e?void 0:e.pages.map((e=>{var t;return p.exports.createElement(p.exports.Fragment,{key:e.page},null==(t=null==e?void 0:e.results)?void 0:t.map((e=>p.exports.createElement(Ee,l({key:e.id},e)))))}))),ke=({isLoading:e})=>p.exports.createElement(p.exports.Fragment,null,Array.from(new Array(20),((t,r)=>p.exports.createElement(h,{key:r,type:"rect",ready:!e,color:"#E0E0E0",showLoadingAnimation:!0,style:be,children:null}))));var ze,Se;(Se=ze||(ze={})).POPULARITY="popularity.desc",Se.RELEASE_DATE="release_date.desc";const Ce={}.VITE_API_URL,Ie={}.VITE_API_KEY,Oe={sort_by:ze.RELEASE_DATE,primary_release_year:2021,include_adult:!1};function je(e,t){const r={baseURL:Ce,params:l({api_key:Ie,page:1,language:"en-US"},t)};return b.get(`${e}`,r).then((({data:e,status:t})=>200===t?e:Promise.reject(e)))}function Pe(e){return!e.isFetchingNextPage&&e.isFetching}const Le=e=>{const{total_pages:t,page:r}=e;return t>r?r+1:null};function $e(e){const t=v(["latestMovies",e],(({pageParam:e=1})=>(async(e=1)=>{try{return await je("discover/movie",s(l({},Oe),{page:e}))}catch(t){return console.error("Unable to fetch latest movies",t),Promise.reject(t)}})(e)),{getNextPageParam:Le}),r=Pe(t);return s(l({},t),{movies:t.data,isFirstLoad:r})}function _e(e){const t=v(["latestMovies",e],(({pageParam:t=1})=>(async(e=1,t)=>{try{return await je("discover/movie",s(l({},Oe),{page:e,with_genre:t}))}catch(r){return console.error("Unable to fetch movies with genre",r),Promise.reject(r)}})(t,e)),{getNextPageParam:Le}),r=Pe(t);return s(l({},t),{movies:t.data,isFirstLoad:r})}const Fe=async()=>{try{return(await je("discover/movie",{sort_by:ze.POPULARITY})).results}catch(e){return console.error("Unable to fetch popular movies",e),Promise.reject(e)}};function Ae(e){const t=E(["movieSearch",e],(()=>async function(e){try{return(await je("search/movie",{query:e})).results}catch(t){return console.error("Unable to fetch movie by name",t),Promise.reject(t)}}(e)),{enabled:!!e});return s(l({},t),{movies:t.data||[]})}function Ne(e){const t=E(["movie",e],(()=>async function(e){try{return await je(`movie/${e}`)}catch(t){return console.error("Unable to fetch movie details",t),Promise.reject(t)}}(e)),{enabled:!!e});return s(l({},t),{movie:t.data})}const Re=()=>{const{movies:e,isFetching:t,isError:r}=$e();return p.exports.createElement(X,null,p.exports.createElement(oe,null),p.exports.createElement(ye,{isLoading:t,moviePages:e,isError:r}))},Me=x.div`
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  width: 100%;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 0px 0px rgba(0, 0, 0, 0);
  background-color: var(--colors-secondary);
`,Te=x.video`
  width: 50%;
  height: 100%;
`,De=x.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
`,Be=x.p`
  font-size: 1.8em;
  font-weight: 500;
  width: 70%;
  color: var(--colors-text);
`;const Ue=()=>y.createElement(Me,null,y.createElement(Te,{autoPlay:!0,loop:!0},y.createElement("source",{src:"/assets/poster_video.cbd283e7.mp4",type:"video/mp4"})),y.createElement(De,null,y.createElement(Be,null,"We beleive that movies deserve more",y.createElement("span",{role:"img","aria-label":"heart"},"💜")))),We=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 40vh;
  background-color: var(--colors-primary);
`,He=x.p`
  font-size: 1.5em;
  font-weight: 500;
  margin: auto;
  color: var(--colors-text);
`,Ye=x.span`
  padding: 5px 10px;
  background-color: var(--colors-primary);
  box-shadow: 0px 1px 9px #d4dce4;
  border-radius: 25px;
`,Ke=x.img`
  width: 100px;
`;const Ve=()=>p.exports.createElement(We,null,p.exports.createElement(He,null,"Handcrafted by"," ",p.exports.createElement(Ye,null,"Awni Gharbia",p.exports.createElement("span",{role:"img","aria-label":"hand"},"💪"))),p.exports.createElement(Ke,{src:"/assets/popcorn.31e8a22a.svg",alt:"poster"})),qe=x.div`
  position: relative;
  display: flex;
  height: 91vh;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background-color: var(--colors-secondary);
  transition: background-color 0.2s ease-in-out;
`,Ge=x.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
`,Je=x.div`
  position: relative;
  display: flex;
  transform: ${e=>`translateX(${e.transform}px)`};
  transition: transform 0.2s ease-in-out;
`,Qe=x.h3`
  text-align: center;
  font-size: 22px;
  margin-top: 50px;
  font-weight: 500;
  color: var(--colors-text);
`,Xe=x.div`
  position: relative;
  transition: 0.4s ease;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  flex-shrink: 0;
`,Ze=x(Xe)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 230px;
  height: 345px;
  margin: ${e=>e.active?"0px 40vw 0px 0px":"0px 15px 0px 0px"};
  opacity: 0.5;
  z-index: 4;
`,et=x.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 100px;
  left: 0;
  right: 0;
  bottom: 0;
  height: 80%;
  margin: auto;
  z-index: 3;
`,tt=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0px 20px;
  height: 90%;
  flex-shrink: 0;
  background-color: var(--colors-primary);
  transition: background-color 0.2s ease-in-out;
  box-shadow: 0 0px 12px rgba(0, 0, 0, 0.11), 0 10px 40px rgba(0, 0, 0, 0.19);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`,rt=x(Xe)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 95%;
  z-index: 1;
`,ot=x.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 15px 0px;
  width: 100%;
  color: var(--colors-modal-title);
  transition: color 0.2s ease-in-out;
`,nt=x.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 100px;
  bottom: 0;
  margin-top: auto;
  margin-bottom: auto;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.7);
  color: rgba(0, 0, 0, 0.7);
  z-index: 4;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19);
  transition: 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
    background-color: white;
  }
`,it=x(nt)`
  left: 20px;
`,at=x(nt)`
  right: 20px;
`,lt=x.div`
  width: 100%;
  height: 1.5px;
  background-color: lightgray;
`,st=x.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 10px;
`,ct=x.p`
  margin: 0px 5px;
`,pt=x(ct)`
  font-size: 15px;
  font-weight: 400;
  color: gray;
`,dt=x(ct)`
  font-size: 15px;
  font-weight: 500;
  color: var(--colors-text-secondary);
  transition: color 0.2s ease-in-out;
`,xt=x.div`
  display: flex;
  flex-direction: column;
`,mt=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: auto;
  margin-bottom: 20px;
  width: 100%;
`,ut=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${e=>e.color};
`,gt=x.span`
  font-weight: 500;
  margin-top: 10px;
  font-size: 16px;
  color: var(--colors-text-secondary);
  transition: color 0.2s ease-in-out;
`,ft=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.23), 0 10px 40px rgba(0, 0, 0, 0.19);
  color: white;
  border-radius: 50%;

  &:hover {
    transform: scale(1.05);
  }
`;x(ft)`
  width: 90px;
  height: 90px;
  background-color: #ef606f;
`;const ht=x(ft)`
  position: absolute;
  right: -32.5px;
  width: 65px;
  height: 65px;
  bottom: 30px;
  background-color: #3db15a;
  z-index: 3;
`,vt=(...e)=>(...t)=>e.forEach((e=>"function"==typeof e&&e(...t)));function Et(e){const[t,r]=p.exports.useReducer(((e,t)=>l(l({},e),t)),e);return[t,r]}const bt=p.exports.createContext({currentSlide:3,translate:0,movies:[],nextImg:()=>{},prevImg:()=>{}});function yt(){const e=p.exports.useContext(bt);if(!e)throw new Error("useSlider must be used within a SliderProvider");return e}const wt={currentSlide:2,translate:0},kt=e=>{var t=e,{movies:r}=t,o=c(t,["movies"]);const[{currentSlide:n,translate:i},a]=Et(wt),s=n===r.length-1,d=0===n,x=()=>{a(s?wt:{currentSlide:n+1,translate:i-245})},m=()=>{a(d?null:{currentSlide:n-1,translate:i+245})},u=e=>39===e.keyCode?x():37===e.keyCode?m():null;p.exports.useEffect((()=>(document.addEventListener("keydown",u,!1),()=>document.removeEventListener("keydown",u,!1))),[]);const g={currentSlide:n,translate:i,movies:r,nextImg:x,prevImg:m};return p.exports.createElement(bt.Provider,l({value:g},o))},zt=({children:e})=>{const{nextImg:t}=yt();return p.exports.cloneElement(e,{onClick:vt((()=>t()),e.props.onClick)})},St=({children:e})=>{const{prevImg:t}=yt();return p.exports.cloneElement(e,{onClick:vt((()=>t()),e.props.onClick)})},Ct=({children:e})=>{const{currentSlide:t,translate:r}=yt(),o={currentSlide:t,translate:r};return p.exports.cloneElement("function"==typeof e?e(o):e,{translate:r,currentSlide:t})},It=({movies:e,activeIndex:t})=>{const{handleOpen:r}=he();return p.exports.createElement(et,null,p.exports.createElement(rt,{src:`https://image.tmdb.org/t/p/w500/${e[t].poster_path}`}),p.exports.createElement(tt,null,p.exports.createElement(ot,null,e[t].title),p.exports.createElement(lt,null),p.exports.createElement(Ot,{title:"Release Date",content:`${e[t].release_date}`}),p.exports.createElement(Ot,{title:"Genre",content:"A"}),p.exports.createElement(Ot,{title:"Synopsis",content:e[t].overview}),p.exports.createElement(xt,null),p.exports.createElement(mt,null,p.exports.createElement(ut,{color:"#fec72a"},p.exports.createElement(m.Icon,{icon:w,size:30}),p.exports.createElement(gt,null,e[t].vote_average,"/10")),p.exports.createElement(ut,{color:"#2091EB"},p.exports.createElement(m.Icon,{icon:k,size:30}),p.exports.createElement(gt,null,"English")),p.exports.createElement(ut,{color:"#4FBA6F"},p.exports.createElement(m.Icon,{icon:z,size:30}),p.exports.createElement(gt,null,"1080p"))),p.exports.createElement(ht,{onClick:()=>r(e[t].id)},p.exports.createElement(m.Icon,{icon:S,size:30}))))},Ot=({title:e,content:t})=>p.exports.createElement(st,null,p.exports.createElement(pt,null,e),p.exports.createElement(dt,null,t)),jt=({translate:e=250,currentSlide:t=0})=>{const{movies:r}=yt();return y.createElement(Ge,null,y.createElement(Je,{transform:e},r.map((({id:e,poster_path:r},o)=>y.createElement(Ze,{key:e,src:`https://image.tmdb.org/t/p/w500/${r}`,active:o===t})))),y.createElement(It,{movies:r,activeIndex:t}))},Pt=()=>{const{movies:e,isFetching:t,isError:r}=function(){const e=E("popularMovies",Fe);return s(l({},e),{movies:e.data||[]})}();return r?p.exports.createElement("div",null,"Oops. Something went wrong"):t?p.exports.createElement("div",null,"Loading..."):p.exports.createElement(kt,{movies:e},p.exports.createElement(qe,null,p.exports.createElement(Qe,null,"Your weekend buddy for this week"),p.exports.createElement(Ct,null,p.exports.createElement(jt,null)),p.exports.createElement(St,null,p.exports.createElement(it,null,p.exports.createElement(m.Icon,{icon:C,size:35}))),p.exports.createElement(zt,null,p.exports.createElement(at,null,p.exports.createElement(m.Icon,{icon:u,size:35})))))},Lt=()=>p.exports.createElement(p.exports.Fragment,null,p.exports.createElement(Pt,null),p.exports.createElement(Re,null),p.exports.createElement(Ue,null),p.exports.createElement(Ve,null));function $t({target:e,onIntersect:t,threshold:r=1,rootMargin:o="0px",enabled:n=!0}){y.useEffect((()=>{if(!n)return;const i=new IntersectionObserver((e=>e.forEach((e=>e.isIntersecting&&t()))),{rootMargin:o,threshold:r}),a=e&&e.current;return a?(i.observe(a),()=>{i.unobserve(a)}):void 0}),[null==e?void 0:e.current,n])}const _t=({genre:e})=>{const{movies:t,fetchNextPage:r,hasNextPage:o,isFirstLoad:n,isError:i}=_e(e),a=p.exports.useRef(null);return $t({target:a,onIntersect:r,enabled:o}),p.exports.createElement(p.exports.Fragment,null,p.exports.createElement(ye,{moviePages:t,isLoading:n,isError:i}),p.exports.createElement(ue,{ref:a,style:{width:"100%",height:"100px"}},p.exports.createElement(I,{color:"#602f75"})))},Ft=()=>{const{movies:e,fetchNextPage:t,hasNextPage:r,isFirstLoad:o,isError:n}=$e("infiniteScroll"),i=p.exports.useRef(null);return $t({target:i,onIntersect:t,enabled:r}),y.createElement(y.Fragment,null,y.createElement(ye,{moviePages:e,isLoading:o,isError:n}),y.createElement(ue,{ref:i,style:{width:"100%",height:"100px"}},y.createElement(O,{color:"#602f75"})))};const At=j.div({open:{x:"0%",delayChildren:200,staggerChildren:50,transition:{type:"spring",damping:20}},closed:{x:"-100%"}}),Nt=j.div({opened:{x:"0%",staggerChildren:50},closed:{x:"-100%"}}),Rt=j.div({opened:{y:0,opacity:1},closed:{y:20,opacity:0}}),Mt=x.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: var(--colors-primary) !important;
  padding: 10px 25px;
  box-sizing: border-box;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.11), 0 -1px 1px rgba(0, 0, 0, 0.05);
  z-index: 4;
  transition: background-color 0.2s;
`;x.img.attrs({src:"/assets/logo.cd7d5f22.svg"})`
  width: 40px;
`;const Tt=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: 0.3s ease;

  &:hover {
    background-color: #e2e0e0d4;
  }
`,Dt=x(Tt)`
  position: relative;
  color: #602f75;
  z-index: 2;
`,Bt=x(At)`
  position: fixed;
  width: 230px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  bottom: 0;
  z-index: 5;
  background: linear-gradient(to bottom, #819ddd, #2ec9d0);
  box-shadow: 3px 0 5px -5px #6f6e6e;
`,Ut=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 9px;
  width: 100%;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 5px;
  color: ${e=>e.active?"rgba(0, 0, 0, 0.7)":"white"};
  background-color: ${e=>e.active?"white":"transparent"};
  transition: 0.2s ease;
  user-select: none;

  &:hover {
    color: #d4d0d0;
  }
`,Wt=x(Rt)`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 80%;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 5px;
  padding: 8px 10px;
  margin-left: 20px;
  color: ${e=>e.active?"rgba(0, 0, 0, 0.7)":"white"};
  background-color: ${e=>e.active?"white":"transparent"};
  transition: 0.2s ease;
  user-select: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`,Ht=x.span`
  font-size: 15px;
  font-weight: 500;
  margin-left: 8px;
`,Yt=x(Nt)``,Kt=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  height: 60px;
  width: 100%;
  flex-shrink: 0;
  padding: 0px 20px;
  border-bottom: 2px solid #819ddd;
  box-sizing: border-box;
`,Vt=x(Tt)`
  color: 'white';

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }
`,qt=x.h3`
  font-size: 20px;
  margin-left: 10px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
`,Gt=x.div`
  padding: 20px 30px 0px 20px;
  margin-top: 20px;
  overflow: auto;
`,Jt=x.div`
  flex: 0.5;
`;x.input`
  border-radius: 2px;
  border: 2px solid transparent;
  outline: none;
  padding: 10px 10px;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  transition: 0.2s ease-in-out;
  background-color: transparent;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);

  &:focus {
    box-shadow: 0 3px 8px 0 rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.08);
  }
`;const Qt=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: red;
`;const Xt=({id:e,title:t,poster_path:r,release_date:o})=>{const{handleOpen:n}=he();return p.exports.createElement("div",{className:"search-result-item",onClick:()=>n(e)},p.exports.createElement("div",{className:"search-result-item-img"},p.exports.createElement("img",{src:`https://image.tmdb.org/t/p/w500/${r}`,alt:"films-boster"})),p.exports.createElement("div",{className:"search-result-item-info"},p.exports.createElement("h1",null,t," (",o,")")))};function Zt(){const[e,t]=p.exports.useState(0),[r,o]=p.exports.useState(""),n=function(e,t=500){const[r,o]=y.useState(e);return y.useEffect((()=>{const r=setTimeout((()=>{o(e)}),t);return()=>{clearTimeout(r)}}),[e,t]),r}(r,500),{movies:i,isError:a}=Ae(n),l=p.exports.useRef(null);return(({ref:e,handler:t})=>{p.exports.useEffect((()=>{const r=r=>{e.current&&!e.current.contains(r.target)&&t(r)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),[])})({ref:l,handler:()=>t(0)}),{focused:e,text:r,movies:i,searchResultRef:l,handleChange:function(e){o(e.target.value),t(2),""===r.trim()&&t(2)},handleFocus:function(){""!==r.trim()?t(2):t(1)},isError:a}}const er=()=>{const{text:e,movies:t,focused:r,searchResultRef:o,handleChange:n,handleFocus:i,isError:a}=Zt();return y.createElement("div",{ref:o,className:"search"},2===r&&y.createElement("div",{className:"search-result"},y.createElement("div",{className:"search-results"},a&&y.createElement(Qt,null,"Oops, something went wrong!"),t.map(((e,t)=>y.createElement(Xt,l({key:t},e)))))),y.createElement("div",{className:0===r?"search-input-wrapper":"search-input-wrapper active-search",style:{border:2===r?"none":""}},y.createElement("div",{className:"search-input-img-wrapper"},y.createElement(m.Icon,{size:20,icon:P,style:{height:"20px",display:"inline-block",marginTop:"-6px"}})),y.createElement("input",{type:"text",onChange:n,value:e,onFocus:i,className:"search-input",placeholder:"Search for movie"})))},tr={dark:{circle:{r:9},mask:{cx:"50%",cy:"23%"},svg:{transform:"rotate(40deg)"},lines:{opacity:0}},light:{circle:{r:5},mask:{cx:"100%",cy:"0%"},svg:{transform:"rotate(90deg)"},lines:{opacity:1}},springConfig:{mass:4,tension:250,friction:35}};let rr=0;const or=e=>{var t=e,{onChange:r,children:o,checked:n=!1,size:i=24,animationProperties:a=tr,moonColor:p="white",sunColor:d="black",style:x}=t,m=c(t,["onChange","children","checked","size","animationProperties","moonColor","sunColor","style"]);const[u,g]=y.useState(0);y.useEffect((()=>{rr+=1,g(rr)}),[g]);const f=y.useMemo((()=>a!==tr?Object.assign(tr,a):a),[a]),{circle:h,svg:v,lines:E,mask:b}=f[n?"dark":"light"],w=L(s(l({},v),{config:a.springConfig})),k=L(s(l({},h),{config:a.springConfig})),z=L(s(l({},b),{config:a.springConfig})),S=L(s(l({},E),{config:a.springConfig})),C=`circle-mask-${u}`;return y.createElement($.svg,l({xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",color:n?p:d,fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",onClick:()=>r(!n),style:l(l({cursor:"pointer"},w),x)},m),y.createElement("mask",{id:C},y.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),y.createElement($.circle,l({r:"9",fill:"black"},z))),y.createElement($.circle,l({cx:"12",cy:"12",fill:n?p:d,mask:`url(#${C})`},k)),y.createElement($.g,{stroke:"currentColor",style:S},y.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),y.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),y.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),y.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),y.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),y.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),y.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),y.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})))};function nr(){const[e,t]=function(e,t){const r=()=>{if("undefined"==typeof window)return t;try{const r=window.localStorage.getItem(e);return r?JSON.parse(r):t}catch(r){return console.warn(`Error reading localStorage key “${e}”:`,r),t}},[o,n]=p.exports.useState(r);return p.exports.useEffect((()=>{n(r())}),[n]),p.exports.useEffect((()=>{const e=()=>{n(r())};return window.addEventListener("storage",e),window.addEventListener("local-storage",e),()=>{window.removeEventListener("storage",e),window.removeEventListener("local-storage",e)}}),[n]),[o,t=>{"undefined"==typeof window&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const r=t instanceof Function?t(o):t;window.localStorage.setItem(e,JSON.stringify(r)),n(r),window.dispatchEvent(new Event("local-storage"))}catch(r){console.warn(`Error setting localStorage key “${e}”:`,r)}}]}("theme","dark"),r="light"===e?"dark":"light",o="dark"===e;return y.useEffect((()=>{document.body.dataset.theme=e}),[e]),y.createElement(or,{checked:o,onChange:()=>t(r),size:25})}const ir=({onClick:e})=>p.exports.createElement(Mt,null,p.exports.createElement(Dt,{onClick:e},p.exports.createElement(m.Icon,{size:25,icon:_,style:{color:"var(--colors-icon)"}})),p.exports.createElement(Jt,null,p.exports.createElement(er,null)),p.exports.createElement(nr,null)),ar=({to:e,activeOnlyWhenExact:t,children:r})=>p.exports.createElement(F,{path:e,exact:t,children:({match:t,location:o})=>{const n=p.exports.Children.map(r,(e=>{if(!p.exports.isValidElement(r))return r;let o=r;return null!=e?p.exports.cloneElement(o,{active:t}):null}));return p.exports.createElement(Q,{style:{textDecoration:"none"},to:e},n)}}),lr=({handleCategories:e,toggleCategories:t,icon:r,size:o,label:n,categoryState:i})=>p.exports.createElement(p.exports.Fragment,null,p.exports.createElement(Ut,{active:!1,onClick:t},p.exports.createElement(m.Icon,{icon:r,size:o}),p.exports.createElement(Ht,null,n)),p.exports.createElement(Yt,{pose:"opened"===i?"opened":"closed",onPoseComplete:()=>"closed"===i?e("none"):null},"none"!==i&&p.exports.createElement(p.exports.Fragment,null,ve.map((({id:e,name:t})=>p.exports.createElement(cr,{exact:!1,key:e,label:t,to:`/categories/${t}`})))))),sr=({to:e,exact:t,size:r,label:o,icon:n})=>p.exports.createElement(ar,{to:e,activeOnlyWhenExact:t},p.exports.createElement(Ut,{active:t},p.exports.createElement(m.Icon,{icon:n,size:r}),p.exports.createElement(Ht,null,o))),cr=({label:e,exact:t,to:r=""})=>p.exports.createElement(ar,{to:r,activeOnlyWhenExact:t},p.exports.createElement(Wt,null,e)),pr=({categoryState:e,isSidebarOpen:t,toggleSidebar:r,handleCategories:o,toggleCategories:n})=>p.exports.createElement(Bt,{pose:t?"open":"closed"},p.exports.createElement(Kt,null,p.exports.createElement(Vt,{onClick:r},p.exports.createElement(m.Icon,{size:25,icon:_})),p.exports.createElement(qt,null,"filmy")),p.exports.createElement(Gt,null,p.exports.createElement(sr,{icon:A,exact:!0,to:"/",size:20,label:"Home"}),p.exports.createElement(sr,{icon:N,exact:!1,to:"/latest-movies",size:20,label:"Latest movies"}),p.exports.createElement(lr,{handleCategories:o,toggleCategories:n,categoryState:e,icon:R,size:20,label:"Categories"}),p.exports.createElement(sr,{exact:!1,to:"/about",icon:M,size:20,label:"Info"}))),dr=()=>{const[e,t]=Et({isSidebarOpen:!1,categoryState:"none"}),r=()=>t({isSidebarOpen:!e.isSidebarOpen,categoryState:!e.isSidebarOpen&&"none"});return p.exports.createElement(p.exports.Fragment,null,p.exports.createElement(ir,{onClick:r}),p.exports.createElement(pr,l({toggleCategories:()=>t({categoryState:"closed"===e.categoryState||"none"===e.categoryState?"opened":"closed"}),handleCategories:e=>t({categoryState:e}),toggleSidebar:r},e)))},xr=T`
  body[data-theme='light'] {
    --colors-primary: white;
    --colors-secondary: white;
    --colors-search: #eae7e7;
    --colors-text: black;
    --colors-text-secondary: black;
    --colors-modal-title: #475069;
    --colors-icon: black;
  }

  body[data-theme='dark'] {
    --colors-primary: #2C2B37;
    --colors-secondary: #51505D;
    --colors-search: #3E4859;
    --colors-text: white;
    --colors-text-secondary: #ABA9BB;
    --colors-modal-title: white;
    --colors-icon: white;
  }  
`,mr=j.div({enter:{y:"0%",staggerChildren:50,transition:{type:"spring",damping:20}},exit:{y:"120%"}}),ur=j.div({enter:{opacity:1},exit:{opacity:0}}),gr=D`
  0% {
    box-shadow: 0 0 0 0 rgba(17, 183, 25,0.7), 0 0 0 0 rgba(17, 183, 25,0.7);
  }
  40% {
    box-shadow: 0 0 0 10px rgba(17, 183, 25,0), 0 0 0 0px rgba(17, 183, 25,0.7); 
  }
  80% {
    box-shadow: 0 0 0 10px rgba(17, 183, 25,0), 0 0 0 10px rgba(17, 183, 25,0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(17, 183, 25,0.7), 0 0 0 10px rgba(17, 183, 25,0);
  }
`,fr=x(ur)`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 10;
  transition: 0.2s ease;
`,hr=x(mr)`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  background-color: var(--colors-primary);
  max-width: 100%;
  margin-top: auto;
  flex-shrink: 0;
  min-height: 70%;
  padding: 10px 40px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`,vr=x.div`
  display: flex;
  padding: 5px;
  border-radius: 50%;
  margin: 1%;
  color: rgba(255, 255, 255, 1);
  transition: 0.2s ease-in-out;
  margin-left: auto;

  &:hover {
    background-color: rgba(0, 0, 0, 0.15);
  }
`,Er=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 0;
  justify-content: space-evenly;
  flex: 0.8;
`,br=x.img`
  margin-top: -50%;
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 3px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: 0.2s ease-in;
  z-index: 4;

  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`,yr=x.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  color: var(--colors-text);
`,wr=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`,kr=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  flex-grow: 1;
`,zr=x.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
`,Sr=x.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  color: var(--colors-text);
`,Cr=x.p`
  font-size: 13px;
  margin: 0;
  line-height: 1.5;
  color: var(--colors-text-secondary);
`,Ir=x.ul`
  margin: 0;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  color: var(--colors-text-secondary);
`,Or=x.div`
  font-size: 16px;
  color: var(--colors-text-secondary);
  font-weight: 500;
`,jr=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  flex-grow: 1;
  padding: 20px 0px 0px 40px;
`;x.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`,x.select`
  width: 100%;
  flex-shrink: 0;
  border-radius: 5px;
  padding: 5px;
  outline: none;
  border: 1px solid rgba(146, 109, 222, 0.5);
  box-shadow: 0 1px 10px rgba(146, 109, 222, 0.5);
`,x.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.color};
  border-radius: 3px;
  overflow: hidden;
  opacity: 1;
  animation: ${e=>e.animate&&B`
      ${gr} 3s linear infinite
    `};
  transition: 0.2s ease-in-out;
  margin-top: 10px;
  text-decoration: none;

  &:hover {
    opacity: 0.9;
  }
`,x.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border: none;
  color: white;
  font-size: 16px;
  letter-spacing: 1.7px;
  margin-right: auto;
  font-family: 'Open Sans', sans-serif;
  background-color: transparent;
`,x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  color: white;
  margin-right: auto;
  padding: 6px 10px;
  background-color: ${e=>e.color||"inherit"};
`;const Pr=()=>{const{movieId:e,isOpen:t,setIsOpen:r}=he(),{movie:o,isFetching:n,isIdle:i,isSuccess:a,isError:l}=Ne(e);return i||n?null:!o||l?p.exports.createElement("div",null,"Error fetching movie"):p.exports.createElement(U,null,t&&[p.exports.createElement(fr,{key:"modal",pose:a},p.exports.createElement(vr,{onClick:()=>r(!1)},p.exports.createElement(m.Icon,{icon:W,size:30})),p.exports.createElement(hr,{key:"content"},p.exports.createElement(Er,null,p.exports.createElement(br,{src:` https://image.tmdb.org/t/p/w500/${o.poster_path}`,alt:o.poster_path}),p.exports.createElement(yr,null,o.title),p.exports.createElement(Or,null,p.exports.createElement("span",{role:"img","aria-label":"globe"},"🌐"),"English -",p.exports.createElement("span",{role:"img","aria-label":"star"},"⭐"),o.vote_average,"/10"),p.exports.createElement(wr,null,p.exports.createElement(m.Icon,{icon:H,size:30,style:{color:"#4267B2"}}),p.exports.createElement(m.Icon,{icon:Y,size:25,style:{color:"#1da1f2",marginLeft:"10px"}}))),p.exports.createElement(kr,null,p.exports.createElement(Lr,{title:"Year"},p.exports.createElement(Cr,null,o.release_date)),p.exports.createElement(Lr,{title:"Description"},p.exports.createElement(Cr,null,o.overview)),p.exports.createElement(Lr,{title:"Genres"},p.exports.createElement(Ir,null,o.genres.map(((e,t)=>p.exports.createElement("li",{key:t},e.name))))),p.exports.createElement(Lr,{title:"Actors"},p.exports.createElement(Ir,null,p.exports.createElement("li",null,"Kate McKinnon"),p.exports.createElement("li",null,"Mila Kunis"),p.exports.createElement("li",null,"Sam Heughan")))),p.exports.createElement(jr,null)))])},Lr=({title:e,children:t})=>p.exports.createElement(zr,null,p.exports.createElement(Sr,null,e),t),$r=()=>y.createElement(y.Fragment,null,y.createElement(xr,null),y.createElement(fe,null,y.createElement(dr,null),y.createElement(Pr,null),y.createElement(K,null,y.createElement(F,{exact:!0,path:"/",render:()=>y.createElement(Lt,null)}),y.createElement(F,{path:"/latest-movies",render:()=>y.createElement(Ft,null)}),y.createElement(F,{path:"/categories/:id",render:({match:e})=>y.createElement(_t,{genre:e.params.id})}),y.createElement(F,{path:"/about",component:()=>y.createElement("h1",{style:{background:"var(--colors-primary)",height:"100vh",margin:"0px",color:"var(--colors-text)",transition:"color 0.2s ease-in-out, background 0.2s ease-in-out"}},"About")})))),_r=new V({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});q.render(y.createElement(G,{client:_r},y.createElement(J,{basename:"/"},y.createElement($r,null))),document.getElementById("root"));
