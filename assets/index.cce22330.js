var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o,l=(e,t)=>{for(var r in t||(t={}))n.call(t,r)&&a(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&a(e,r,t[r]);return e},s=(e,o)=>t(e,r(o)),c=(e,t)=>{var r={};for(var a in e)n.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};import{r as p,L as d,s as x,a as m,c as u,b as g,d as f,R as h,u as v,e as E,f as b,g as y,h as w,i as k,v as z,j as S,k as C,B as I,_ as O,p as j,l as P,m as L,n as $,o as F,q as _,t as A,z as N,w as R,x as M,y as D,A as T,C as B,P as U,D as W,E as H,F as Y,S as q,Q as G,G as K,H as V,I as J}from"./vendor.6de0db6b.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const Q=e=>{var t=e,{children:r}=t,o=c(t,["children"]);return p.exports.createElement(d,s(l({},o),{replace:window.location.pathname===o.to}),r)},X=x.div`
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
`,ge=p.exports.createContext({isOpen:!1,setIsOpen:()=>{},handleOpen:()=>{},movieId:0}),fe=({children:e})=>{const[t,r]=p.exports.useState(0),[o,n]=p.exports.useState(!1);const i={isOpen:o,handleOpen:function(e){r(e),n(!0)},setIsOpen:n,movieId:t};return p.exports.createElement(ge.Provider,{value:i},e," ")};function he(){const e=p.exports.useContext(ge);if(!e)throw new Error("useModal must be used within a ModalProvider");return e}const ve=[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}],Ee=({id:e,poster_path:t="",vote_average:r,release_date:o,genre_ids:n,title:i})=>{var a;const{handleOpen:l}=he();return p.exports.createElement(ae,{onClick:()=>l(e)},p.exports.createElement(le,{src:`https://image.tmdb.org/t/p/w500/${t}`},p.exports.createElement(se,null,p.exports.createElement(ce,null,p.exports.createElement(pe,{color:"rgba(255,255,255,.8)"},p.exports.createElement(m.Icon,{icon:g,size:20}),o),p.exports.createElement(pe,null,p.exports.createElement(m.Icon,{icon:f,size:20}),r,"/10")))),p.exports.createElement(de,null,p.exports.createElement(me,null,null==(a=null==n?void 0:n.map((e=>{var t;return null==(t=ve.find((t=>t.id===e)))?void 0:t.name})))?void 0:a.join(" | ")),p.exports.createElement(xe,null,i)))};const be={width:"200px",height:"346px",marginTop:"10px",borderRadius:"5px"},ye=({moviePages:e,isLoading:t,isError:r=!1})=>r?p.exports.createElement("div",null,"Oops. Something went wrong"):p.exports.createElement(ne,null,t?p.exports.createElement(ke,{isLoading:t}):p.exports.createElement(we,{moviePages:e})),we=({moviePages:e})=>p.exports.createElement(p.exports.Fragment,null,null==e?void 0:e.pages.map((e=>{var t;return p.exports.createElement(p.exports.Fragment,{key:e.page},null==(t=null==e?void 0:e.results)?void 0:t.map((e=>p.exports.createElement(Ee,l({key:e.id},e)))))}))),ke=({isLoading:e})=>p.exports.createElement(p.exports.Fragment,null,Array.from(new Array(20),((t,r)=>p.exports.createElement(h,{key:r,type:"rect",ready:!e,color:"#E0E0E0",showLoadingAnimation:!0,style:be,children:null}))));var ze,Se;(Se=ze||(ze={})).POPULARITY="popularity.desc",Se.RELEASE_DATE="release_date.desc";const Ce={sort_by:ze.RELEASE_DATE,primary_release_year:2021,include_adult:!1};function Ie(e,t){const r={baseURL:"https://api.themoviedb.org/3/",params:l({api_key:"3c817edb2c2a10ea7095bc697864900d",page:1,language:"en-US"},t)};return b.get(`${e}`,r).then((({data:e,status:t})=>200===t?e:Promise.reject(e)))}function Oe(e){return!e.isFetchingNextPage&&e.isFetching}const je=e=>{const{total_pages:t,page:r}=e;return t>r?r+1:null};function Pe(e){const t=v(["latestMovies",e],(({pageParam:e=1})=>(async(e=1)=>{try{return await Ie("discover/movie",s(l({},Ce),{page:e}))}catch(t){return console.error("Unable to fetch latest movies",t),Promise.reject(t)}})(e)),{getNextPageParam:je}),r=Oe(t);return s(l({},t),{movies:t.data,isFirstLoad:r})}function Le(e){const t=v(["latestMovies",e],(({pageParam:t=1})=>(async(e=1,t)=>{try{return await Ie("discover/movie",s(l({},Ce),{page:e,with_genre:t}))}catch(r){return console.error("Unable to fetch movies with genre",r),Promise.reject(r)}})(t,e)),{getNextPageParam:je}),r=Oe(t);return s(l({},t),{movies:t.data,isFirstLoad:r})}const $e=async()=>{try{return(await Ie("discover/movie",{sort_by:ze.POPULARITY})).results}catch(e){return console.error("Unable to fetch popular movies",e),Promise.reject(e)}};function Fe(e){const t=E(["movieSearch",e],(()=>async function(e){try{return(await Ie("search/movie",{query:e})).results}catch(t){return console.error("Unable to fetch movie by name",t),Promise.reject(t)}}(e)),{enabled:!!e});return s(l({},t),{movies:t.data||[]})}function _e(e){const t=E(["movie",e],(()=>async function(e){try{return await Ie(`movie/${e}`)}catch(t){return console.error("Unable to fetch movie details",t),Promise.reject(t)}}(e)),{enabled:!!e});return s(l({},t),{movie:t.data})}const Ae=()=>{const{movies:e,isFetching:t,isError:r}=Pe();return p.exports.createElement(X,null,p.exports.createElement(oe,null),p.exports.createElement(ye,{isLoading:t,moviePages:e,isError:r}))},Ne=x.div`
  position: relative;
  display: flex;
  flex-direction: row;
  min-height: 50vh;
  width: 100%;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04), 0 0px 0px rgba(0, 0, 0, 0);
  background-color: var(--colors-secondary);
`,Re=x.video`
  width: 50%;
  height: 100%;
`,Me=x.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  align-items: center;
  justify-content: center;
`,De=x.p`
  font-size: 1.8em;
  font-weight: 500;
  width: 70%;
  color: var(--colors-text);
`;const Te=()=>y.createElement(Ne,null,y.createElement(Re,{autoPlay:!0,loop:!0},y.createElement("source",{src:"/filmy/assets/poster_video.cbd283e7.mp4",type:"video/mp4"})),y.createElement(Me,null,y.createElement(De,null,"We beleive that movies deserve more",y.createElement("span",{role:"img","aria-label":"heart"},"💜")))),Be=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 40vh;
  background-color: var(--colors-primary);
`,Ue=x.p`
  font-size: 1.5em;
  font-weight: 500;
  margin: auto;
  color: var(--colors-text);
`,We=x.span`
  padding: 5px 10px;
  background-color: var(--colors-primary);
  box-shadow: 0px 1px 9px #d4dce4;
  border-radius: 25px;
`,He=x.img`
  width: 100px;
`;const Ye=()=>p.exports.createElement(Be,null,p.exports.createElement(Ue,null,"Handcrafted by"," ",p.exports.createElement(We,null,"Awni Gharbia",p.exports.createElement("span",{role:"img","aria-label":"hand"},"💪"))),p.exports.createElement(He,{src:"/filmy/assets/popcorn.31e8a22a.svg",alt:"poster"})),qe=x.div`
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
`,Ke=x.div`
  position: relative;
  display: flex;
  transform: ${e=>`translateX(${e.transform}px)`};
  transition: transform 0.2s ease-in-out;
`,Ve=x.h3`
  text-align: center;
  font-size: 22px;
  margin-top: 50px;
  font-weight: 500;
  color: var(--colors-text);
`,Je=x.div`
  position: relative;
  transition: 0.4s ease;
  background-image: url(${e=>e.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 60%;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.23), 0 3px 12px rgba(0, 0, 0, 0.16);
  border-radius: 7px;
  flex-shrink: 0;
`,Qe=x(Je)`
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
`,Xe=x.div`
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
`,Ze=x.div`
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
`,et=x(Je)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: 95%;
  z-index: 1;
`,tt=x.h3`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 15px 0px;
  width: 100%;
  color: var(--colors-modal-title);
  transition: color 0.2s ease-in-out;
`,rt=x.div`
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
`,ot=x(rt)`
  left: 20px;
`,nt=x(rt)`
  right: 20px;
`,it=x.div`
  width: 100%;
  height: 1.5px;
  background-color: lightgray;
`,at=x.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-top: 10px;
`,lt=x.p`
  margin: 0px 5px;
`,st=x(lt)`
  font-size: 15px;
  font-weight: 400;
  color: gray;
`,ct=x(lt)`
  font-size: 15px;
  font-weight: 500;
  color: var(--colors-text-secondary);
  transition: color 0.2s ease-in-out;
`,pt=x.div`
  display: flex;
  flex-direction: column;
`,dt=x.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: auto;
  margin-bottom: 20px;
  width: 100%;
`,xt=x.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${e=>e.color};
`,mt=x.span`
  font-weight: 500;
  margin-top: 10px;
  font-size: 16px;
  color: var(--colors-text-secondary);
  transition: color 0.2s ease-in-out;
`,ut=x.div`
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
`;x(ut)`
  width: 90px;
  height: 90px;
  background-color: #ef606f;
`;const gt=x(ut)`
  position: absolute;
  right: -32.5px;
  width: 65px;
  height: 65px;
  bottom: 30px;
  background-color: #3db15a;
  z-index: 3;
`,ft=(...e)=>(...t)=>e.forEach((e=>"function"==typeof e&&e(...t)));function ht(e){const[t,r]=p.exports.useReducer(((e,t)=>l(l({},e),t)),e);return[t,r]}const vt=p.exports.createContext({currentSlide:3,translate:0,movies:[],nextImg:()=>{},prevImg:()=>{}});function Et(){const e=p.exports.useContext(vt);if(!e)throw new Error("useSlider must be used within a SliderProvider");return e}const bt={currentSlide:2,translate:0},yt=e=>{var t=e,{movies:r}=t,o=c(t,["movies"]);const[{currentSlide:n,translate:i},a]=ht(bt),s=n===r.length-1,d=0===n,x=()=>{a(s?bt:{currentSlide:n+1,translate:i-245})},m=()=>{a(d?null:{currentSlide:n-1,translate:i+245})},u=e=>39===e.keyCode?x():37===e.keyCode?m():null;p.exports.useEffect((()=>(document.addEventListener("keydown",u,!1),()=>document.removeEventListener("keydown",u,!1))),[]);const g={currentSlide:n,translate:i,movies:r,nextImg:x,prevImg:m};return p.exports.createElement(vt.Provider,l({value:g},o))},wt=({children:e})=>{const{nextImg:t}=Et();return p.exports.cloneElement(e,{onClick:ft((()=>t()),e.props.onClick)})},kt=({children:e})=>{const{prevImg:t}=Et();return p.exports.cloneElement(e,{onClick:ft((()=>t()),e.props.onClick)})},zt=({children:e})=>{const{currentSlide:t,translate:r}=Et(),o={currentSlide:t,translate:r};return p.exports.cloneElement("function"==typeof e?e(o):e,{translate:r,currentSlide:t})},St=({movies:e,activeIndex:t})=>{const{handleOpen:r}=he();return p.exports.createElement(Xe,null,p.exports.createElement(et,{src:`https://image.tmdb.org/t/p/w500/${e[t].poster_path}`}),p.exports.createElement(Ze,null,p.exports.createElement(tt,null,e[t].title),p.exports.createElement(it,null),p.exports.createElement(Ct,{title:"Release Date",content:`${e[t].release_date}`}),p.exports.createElement(Ct,{title:"Genre",content:"A"}),p.exports.createElement(Ct,{title:"Synopsis",content:e[t].overview}),p.exports.createElement(pt,null),p.exports.createElement(dt,null,p.exports.createElement(xt,{color:"#fec72a"},p.exports.createElement(m.Icon,{icon:w,size:30}),p.exports.createElement(mt,null,e[t].vote_average,"/10")),p.exports.createElement(xt,{color:"#2091EB"},p.exports.createElement(m.Icon,{icon:k,size:30}),p.exports.createElement(mt,null,"English")),p.exports.createElement(xt,{color:"#4FBA6F"},p.exports.createElement(m.Icon,{icon:z,size:30}),p.exports.createElement(mt,null,"1080p"))),p.exports.createElement(gt,{onClick:()=>r(e[t].id)},p.exports.createElement(m.Icon,{icon:S,size:30}))))},Ct=({title:e,content:t})=>p.exports.createElement(at,null,p.exports.createElement(st,null,e),p.exports.createElement(ct,null,t)),It=({translate:e=250,currentSlide:t=0})=>{const{movies:r}=Et();return y.createElement(Ge,null,y.createElement(Ke,{transform:e},r.map((({id:e,poster_path:r},o)=>y.createElement(Qe,{key:e,src:`https://image.tmdb.org/t/p/w500/${r}`,active:o===t})))),y.createElement(St,{movies:r,activeIndex:t}))},Ot=()=>{const{movies:e,isFetching:t,isError:r}=function(){const e=E("popularMovies",$e);return s(l({},e),{movies:e.data||[]})}();return r?p.exports.createElement("div",null,"Oops. Something went wrong"):t?p.exports.createElement("div",null,"Loading..."):p.exports.createElement(yt,{movies:e},p.exports.createElement(qe,null,p.exports.createElement(Ve,null,"Your weekend buddy for this week"),p.exports.createElement(zt,null,p.exports.createElement(It,null)),p.exports.createElement(kt,null,p.exports.createElement(ot,null,p.exports.createElement(m.Icon,{icon:C,size:35}))),p.exports.createElement(wt,null,p.exports.createElement(nt,null,p.exports.createElement(m.Icon,{icon:u,size:35})))))},jt=()=>p.exports.createElement(p.exports.Fragment,null,p.exports.createElement(Ot,null),p.exports.createElement(Ae,null),p.exports.createElement(Te,null),p.exports.createElement(Ye,null));function Pt({target:e,onIntersect:t,threshold:r=1,rootMargin:o="0px",enabled:n=!0}){y.useEffect((()=>{if(!n)return;const i=new IntersectionObserver((e=>e.forEach((e=>e.isIntersecting&&t()))),{rootMargin:o,threshold:r}),a=e&&e.current;return a?(i.observe(a),()=>{i.unobserve(a)}):void 0}),[null==e?void 0:e.current,n])}const Lt=({genre:e})=>{const{movies:t,fetchNextPage:r,hasNextPage:o,isFirstLoad:n,isError:i}=Le(e),a=p.exports.useRef(null);return Pt({target:a,onIntersect:r,enabled:o}),p.exports.createElement(p.exports.Fragment,null,p.exports.createElement(ye,{moviePages:t,isLoading:n,isError:i}),p.exports.createElement(ue,{ref:a,style:{width:"100%",height:"100px"}},p.exports.createElement(I,{color:"#602f75"})))},$t=()=>{const{movies:e,fetchNextPage:t,hasNextPage:r,isFirstLoad:o,isError:n}=Pe("infiniteScroll"),i=p.exports.useRef(null);return Pt({target:i,onIntersect:t,enabled:r}),y.createElement(y.Fragment,null,y.createElement(ye,{moviePages:e,isLoading:o,isError:n}),y.createElement(ue,{ref:i,style:{width:"100%",height:"100px"}},y.createElement(O,{color:"#602f75"})))};const Ft=j.div({open:{x:"0%",delayChildren:200,staggerChildren:50,transition:{type:"spring",damping:20}},closed:{x:"-100%"}}),_t=j.div({opened:{x:"0%",staggerChildren:50},closed:{x:"-100%"}}),At=j.div({opened:{y:0,opacity:1},closed:{y:20,opacity:0}}),Nt=x.div`
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
`;x.img.attrs({src:"/filmy/assets/logo.cd7d5f22.svg"})`
  width: 40px;
`;const Rt=x.div`
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
`,Mt=x(Rt)`
  position: relative;
  color: #602f75;
  z-index: 2;
`,Dt=x(Ft)`
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
`,Tt=x.div`
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
`,Bt=x(At)`
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
`,Ut=x.span`
  font-size: 15px;
  font-weight: 500;
  margin-left: 8px;
`,Wt=x(_t)``,Ht=x.div`
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
`,Yt=x(Rt)`
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
`,Kt=x.div`
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
`;const Vt=x.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  color: red;
`;const Jt=({id:e,title:t,poster_path:r,release_date:o})=>{const{handleOpen:n}=he();return p.exports.createElement("div",{className:"search-result-item",onClick:()=>n(e)},p.exports.createElement("div",{className:"search-result-item-img"},p.exports.createElement("img",{src:`https://image.tmdb.org/t/p/w500/${r}`,alt:"films-boster"})),p.exports.createElement("div",{className:"search-result-item-info"},p.exports.createElement("h1",null,t," (",o,")")))};function Qt(){const[e,t]=p.exports.useState(0),[r,o]=p.exports.useState(""),n=function(e,t=500){const[r,o]=y.useState(e);return y.useEffect((()=>{const r=setTimeout((()=>{o(e)}),t);return()=>{clearTimeout(r)}}),[e,t]),r}(r,500),{movies:i,isError:a}=Fe(n),l=p.exports.useRef(null);return(({ref:e,handler:t})=>{p.exports.useEffect((()=>{const r=r=>{e.current&&!e.current.contains(r.target)&&t(r)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),[])})({ref:l,handler:()=>t(0)}),{focused:e,text:r,movies:i,searchResultRef:l,handleChange:function(e){o(e.target.value),t(2),""===r.trim()&&t(2)},handleFocus:function(){""!==r.trim()?t(2):t(1)},isError:a}}const Xt=()=>{const{text:e,movies:t,focused:r,searchResultRef:o,handleChange:n,handleFocus:i,isError:a}=Qt();return y.createElement("div",{ref:o,className:"search"},2===r&&y.createElement("div",{className:"search-result"},y.createElement("div",{className:"search-results"},a&&y.createElement(Vt,null,"Oops, something went wrong!"),t.map(((e,t)=>y.createElement(Jt,l({key:t},e)))))),y.createElement("div",{className:0===r?"search-input-wrapper":"search-input-wrapper active-search",style:{border:2===r?"none":""}},y.createElement("div",{className:"search-input-img-wrapper"},y.createElement(m.Icon,{size:20,icon:P,style:{height:"20px",display:"inline-block",marginTop:"-6px"}})),y.createElement("input",{type:"text",onChange:n,value:e,onFocus:i,className:"search-input",placeholder:"Search for movie"})))},Zt={dark:{circle:{r:9},mask:{cx:"50%",cy:"23%"},svg:{transform:"rotate(40deg)"},lines:{opacity:0}},light:{circle:{r:5},mask:{cx:"100%",cy:"0%"},svg:{transform:"rotate(90deg)"},lines:{opacity:1}},springConfig:{mass:4,tension:250,friction:35}};let er=0;const tr=e=>{var t=e,{onChange:r,children:o,checked:n=!1,size:i=24,animationProperties:a=Zt,moonColor:p="white",sunColor:d="black",style:x}=t,m=c(t,["onChange","children","checked","size","animationProperties","moonColor","sunColor","style"]);const[u,g]=y.useState(0);y.useEffect((()=>{er+=1,g(er)}),[g]);const f=y.useMemo((()=>a!==Zt?Object.assign(Zt,a):a),[a]),{circle:h,svg:v,lines:E,mask:b}=f[n?"dark":"light"],w=L(s(l({},v),{config:a.springConfig})),k=L(s(l({},h),{config:a.springConfig})),z=L(s(l({},b),{config:a.springConfig})),S=L(s(l({},E),{config:a.springConfig})),C=`circle-mask-${u}`;return y.createElement($.svg,l({xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",color:n?p:d,fill:"none",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",onClick:()=>r(!n),style:l(l({cursor:"pointer"},w),x)},m),y.createElement("mask",{id:C},y.createElement("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"white"}),y.createElement($.circle,l({r:"9",fill:"black"},z))),y.createElement($.circle,l({cx:"12",cy:"12",fill:n?p:d,mask:`url(#${C})`},k)),y.createElement($.g,{stroke:"currentColor",style:S},y.createElement("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),y.createElement("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),y.createElement("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),y.createElement("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),y.createElement("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),y.createElement("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),y.createElement("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),y.createElement("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})))};function rr(){const[e,t]=function(e,t){const r=()=>{if("undefined"==typeof window)return t;try{const r=window.localStorage.getItem(e);return r?JSON.parse(r):t}catch(r){return console.warn(`Error reading localStorage key “${e}”:`,r),t}},[o,n]=p.exports.useState(r);return p.exports.useEffect((()=>{n(r())}),[n]),p.exports.useEffect((()=>{const e=()=>{n(r())};return window.addEventListener("storage",e),window.addEventListener("local-storage",e),()=>{window.removeEventListener("storage",e),window.removeEventListener("local-storage",e)}}),[n]),[o,t=>{"undefined"==typeof window&&console.warn(`Tried setting localStorage key “${e}” even though environment is not a client`);try{const r=t instanceof Function?t(o):t;window.localStorage.setItem(e,JSON.stringify(r)),n(r),window.dispatchEvent(new Event("local-storage"))}catch(r){console.warn(`Error setting localStorage key “${e}”:`,r)}}]}("theme","dark"),r="light"===e?"dark":"light",o="dark"===e;return y.useEffect((()=>{document.body.dataset.theme=e}),[e]),y.createElement(tr,{checked:o,onChange:()=>t(r),size:25})}const or=({onClick:e})=>p.exports.createElement(Nt,null,p.exports.createElement(Mt,{onClick:e},p.exports.createElement(m.Icon,{size:25,icon:F,style:{color:"var(--colors-icon)"}})),p.exports.createElement(Kt,null,p.exports.createElement(Xt,null)),p.exports.createElement(rr,null)),nr=({to:e,activeOnlyWhenExact:t,children:r})=>p.exports.createElement(_,{path:e,exact:t,children:({match:t,location:o})=>{const n=p.exports.Children.map(r,(e=>{if(!p.exports.isValidElement(r))return r;let o=r;return null!=e?p.exports.cloneElement(o,{active:t}):null}));return p.exports.createElement(Q,{style:{textDecoration:"none"},to:e},n)}}),ir=({handleCategories:e,toggleCategories:t,icon:r,size:o,label:n,categoryState:i})=>p.exports.createElement(p.exports.Fragment,null,p.exports.createElement(Tt,{active:!1,onClick:t},p.exports.createElement(m.Icon,{icon:r,size:o}),p.exports.createElement(Ut,null,n)),p.exports.createElement(Wt,{pose:"opened"===i?"opened":"closed",onPoseComplete:()=>"closed"===i?e("none"):null},"none"!==i&&p.exports.createElement(p.exports.Fragment,null,ve.map((({id:e,name:t})=>p.exports.createElement(lr,{exact:!1,key:e,label:t,to:`/categories/${t}`})))))),ar=({to:e,exact:t,size:r,label:o,icon:n})=>p.exports.createElement(nr,{to:e,activeOnlyWhenExact:t},p.exports.createElement(Tt,{active:t},p.exports.createElement(m.Icon,{icon:n,size:r}),p.exports.createElement(Ut,null,o))),lr=({label:e,exact:t,to:r=""})=>p.exports.createElement(nr,{to:r,activeOnlyWhenExact:t},p.exports.createElement(Bt,null,e)),sr=({categoryState:e,isSidebarOpen:t,toggleSidebar:r,handleCategories:o,toggleCategories:n})=>p.exports.createElement(Dt,{pose:t?"open":"closed"},p.exports.createElement(Ht,null,p.exports.createElement(Yt,{onClick:r},p.exports.createElement(m.Icon,{size:25,icon:F})),p.exports.createElement(qt,null,"filmy")),p.exports.createElement(Gt,null,p.exports.createElement(ar,{icon:A,exact:!0,to:"/",size:20,label:"Home"}),p.exports.createElement(ar,{icon:N,exact:!1,to:"/latest-movies",size:20,label:"Latest movies"}),p.exports.createElement(ir,{handleCategories:o,toggleCategories:n,categoryState:e,icon:R,size:20,label:"Categories"}),p.exports.createElement(ar,{exact:!1,to:"/about",icon:M,size:20,label:"Info"}))),cr=()=>{const[e,t]=ht({isSidebarOpen:!1,categoryState:"none"}),r=()=>t({isSidebarOpen:!e.isSidebarOpen,categoryState:!e.isSidebarOpen&&"none"});return p.exports.createElement(p.exports.Fragment,null,p.exports.createElement(or,{onClick:r}),p.exports.createElement(sr,l({toggleCategories:()=>t({categoryState:"closed"===e.categoryState||"none"===e.categoryState?"opened":"closed"}),handleCategories:e=>t({categoryState:e}),toggleSidebar:r},e)))},pr=D`
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
`,dr=j.div({enter:{y:"0%",staggerChildren:50,transition:{type:"spring",damping:20}},exit:{y:"120%"}}),xr=j.div({enter:{opacity:1},exit:{opacity:0}}),mr=T`
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
`,ur=x(xr)`
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
`,gr=x(dr)`
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
`,fr=x.div`
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
`,hr=x.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 1;
  flex-grow: 0;
  justify-content: space-evenly;
  flex: 0.8;
`,vr=x.img`
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
`,Er=x.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0;
  color: var(--colors-text);
`,br=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`,yr=x.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  flex-grow: 1;
`,wr=x.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
`,kr=x.p`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  line-height: 1.5;
  color: var(--colors-text);
`,zr=x.p`
  font-size: 13px;
  margin: 0;
  line-height: 1.5;
  color: var(--colors-text-secondary);
`,Sr=x.ul`
  margin: 0;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 500;
  color: var(--colors-text-secondary);
`,Cr=x.div`
  font-size: 16px;
  color: var(--colors-text-secondary);
  font-weight: 500;
`,Ir=x.div`
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
      ${mr} 3s linear infinite
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
`;const Or=()=>{const{movieId:e,isOpen:t,setIsOpen:r}=he(),{movie:o,isFetching:n,isIdle:i,isSuccess:a,isError:l}=_e(e);return i||n?null:!o||l?p.exports.createElement("div",null,"Error fetching movie"):p.exports.createElement(U,null,t&&[p.exports.createElement(ur,{key:"modal",pose:a},p.exports.createElement(fr,{onClick:()=>r(!1)},p.exports.createElement(m.Icon,{icon:W,size:30})),p.exports.createElement(gr,{key:"content"},p.exports.createElement(hr,null,p.exports.createElement(vr,{src:` https://image.tmdb.org/t/p/w500/${o.poster_path}`,alt:o.poster_path}),p.exports.createElement(Er,null,o.title),p.exports.createElement(Cr,null,p.exports.createElement("span",{role:"img","aria-label":"globe"},"🌐"),"English -",p.exports.createElement("span",{role:"img","aria-label":"star"},"⭐"),o.vote_average,"/10"),p.exports.createElement(br,null,p.exports.createElement(m.Icon,{icon:H,size:30,style:{color:"#4267B2"}}),p.exports.createElement(m.Icon,{icon:Y,size:25,style:{color:"#1da1f2",marginLeft:"10px"}}))),p.exports.createElement(yr,null,p.exports.createElement(jr,{title:"Year"},p.exports.createElement(zr,null,o.release_date)),p.exports.createElement(jr,{title:"Description"},p.exports.createElement(zr,null,o.overview)),p.exports.createElement(jr,{title:"Genres"},p.exports.createElement(Sr,null,o.genres.map(((e,t)=>p.exports.createElement("li",{key:t},e.name))))),p.exports.createElement(jr,{title:"Actors"},p.exports.createElement(Sr,null,p.exports.createElement("li",null,"Kate McKinnon"),p.exports.createElement("li",null,"Mila Kunis"),p.exports.createElement("li",null,"Sam Heughan")))),p.exports.createElement(Ir,null)))])},jr=({title:e,children:t})=>p.exports.createElement(wr,null,p.exports.createElement(kr,null,e),t),Pr=()=>y.createElement(y.Fragment,null,y.createElement(pr,null),y.createElement(fe,null,y.createElement(cr,null),y.createElement(Or,null),y.createElement(q,null,y.createElement(_,{exact:!0,path:"/",render:()=>y.createElement(jt,null)}),y.createElement(_,{path:"/latest-movies",render:()=>y.createElement($t,null)}),y.createElement(_,{path:"/categories/:id",render:({match:e})=>y.createElement(Lt,{genre:e.params.id})}),y.createElement(_,{path:"/about",component:()=>y.createElement("h1",{style:{background:"var(--colors-primary)",height:"100vh",margin:"0px",color:"var(--colors-text)",transition:"color 0.2s ease-in-out, background 0.2s ease-in-out"}},"About")})))),Lr=new G({defaultOptions:{queries:{refetchOnWindowFocus:!1}}});K.render(y.createElement(V,{client:Lr},y.createElement(J,{basename:"/"},y.createElement(Pr,null))),document.getElementById("root"));
