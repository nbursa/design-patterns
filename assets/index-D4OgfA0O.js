var g=Object.defineProperty;var E=(l,t,e)=>t in l?g(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var p=(l,t,e)=>(E(l,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=e(o);fetch(o.href,n)}})();const y="modulepreload",L=function(l){return"/nbursa/design-patterns/"+l},h={},r=function(t,e,a){let o=Promise.resolve();if(e&&e.length>0){const n=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.all(e.map(c=>{if(c=L(c),c in h)return;h[c]=!0;const d=c.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(!!a)for(let _=n.length-1;_>=0;_--){const m=n[_];if(m.href===c&&(!d||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":y,d||(u.as="script",u.crossOrigin=""),u.href=c,s&&u.setAttribute("nonce",s),document.head.appendChild(u),d)return new Promise((_,m)=>{u.addEventListener("load",_),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>t()).catch(n=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n})},w=`<div class="not-found page">
  <div>
    <div class="large">404</div>
    <div>Page not found</div>
  </div>
</div>
`,b=`<div class="category">
  <h4 class="category-title">Creational</h4>
  <ul>
    <li><a href="/catalog/creation/constructor">Constructor</a></li>
    <li><a href="/catalog/creation/module">Module</a></li>
    <li><a href="/catalog/creation/revealing-module">Revealing Module</a></li>
    <li><a href="/catalog/creation/singleton">Singleton</a></li>
    <li><a href="/catalog/creation/prototype">Prototype</a></li>
    <li><a href="/catalog/creation/factory">Factory</a></li>
    <li><a href="/catalog/creation/abstract-factory">Abstract Factory</a></li>
  </ul>
</div>
<div class="category text-center">
  <h4 class="category-title">Structural</h4>
  <ul>
    <li><a href="/catalog/structure/facade">Facade</a></li>
    <li><a href="/catalog/structure/mixin">Mixin</a></li>
    <li><a href="/catalog/structure/decorator">Decorator</a></li>
    <li><a href="/catalog/structure/flyweight">Flyweight</a></li>
  </ul>
</div>
<div class="category text-right">
  <h4 class="category-title">Behavioral</h4>
  <ul>
    <li><a href="/catalog/behavior/observer">Observer</a></li>
    <li><a href="/catalog/behavior/mediator">Mediator</a></li>
    <li><a href="/catalog/behavior/command">Command</a></li>
  </ul>
</div>
`;class R{constructor(t){p(this,"routes",[]);this.initRoutes(t),window.addEventListener("resize",()=>this.resolve())}initRoutes(t){t.forEach(e=>{var a;this.addRoute(e.path,e.component),(a=e.children)==null||a.forEach(o=>{this.addRoute(`${e.path}${o.path}`,o.component)})})}addRoute(t,e){this.routes.some(a=>a.path===t)||this.routes.push({path:t,component:e})}async navigate(t){window.history.pushState({},"",t),await this.resolve()}async resolve(){const t=window.location.pathname,e=this.routes.find(i=>i.path.startsWith(t)),a={constructor:()=>r(()=>import("./index-D0Aq82mx.js"),[]),module:()=>r(()=>import("./index-CqhFmb13.js"),[]),"revealing-module":()=>r(()=>import("./index-CcMIek3q.js"),[]),singleton:()=>r(()=>import("./index-SeJq0btD.js"),[]),prototype:()=>r(()=>import("./index-aKkA0YZn.js"),[]),factory:()=>r(()=>import("./index-agI14fTH.js"),[]),"abstract-factory":()=>r(()=>import("./index-BWEfs01G.js"),[]),facade:()=>r(()=>import("./index-xoyJwxFS.js"),[]),mixin:()=>r(()=>import("./index-W3DBNO3U.js"),[]),decorator:()=>r(()=>import("./index-BgNNdt_l.js"),[]),flyweight:()=>r(()=>import("./index-DZGwm19n.js"),[]),observer:()=>r(()=>import("./index-9u9qV-F7.js"),[]),mediator:()=>r(()=>import("./index-B8mCYDap.js"),[]),command:()=>r(()=>import("./index-CM4Y0v9R.js"),[])},o=document.querySelector("#router-view")||this.createRouterView(),n=document.querySelector("#router-view");if(e)try{const i=await e.component();o.innerHTML=i.default,this.renderSidebar();const s=t.split("/").pop(),c=a[s||""];if(c){const d=await c();d.default&&d.default()}["/","/catalog"].includes(e.path)&&n.removeAttribute("style")}catch(i){o.innerHTML=`Failed to load the component, ${i}`}else o.innerHTML=w,n.removeAttribute("style")}renderSidebar(){var o,n;const t=window.location.pathname,e=document.querySelector("#sidebar"),a=document.querySelector("#toggle");if(e&&((o=e.parentNode)==null||o.removeChild(e)),a&&((n=a.parentNode)==null||n.removeChild(a)),!["/","/catalog"].includes(t)&&!e){const i=document.createElement("nav");i.id="sidebar",i.innerHTML=b;const s=document.querySelector("#router-view");if(s!=null&&s.firstChild?s.insertBefore(i,s.firstChild):s==null||s.appendChild(i),s.style.left="0",s.style.width="100vw",!a){const c=document.createElement("button");c.id="toggle",window.innerWidth>=768&&this.toggleSidebar(),c.innerHTML=i.classList.contains("active")?'<img src="/arrow.svg" alt="arrow" />':'<img src="/arrow.svg" alt="arrow" class="rotate" />',c.addEventListener("click",()=>{this.toggleSidebar()}),i.insertBefore(c,i.firstChild)}}}addSidebarLinkEventListeners(){document.querySelectorAll("#sidebar a").forEach(e=>{e.addEventListener("click",()=>{this.toggleSidebar()})})}toggleSidebar(){const t=document.querySelector("#sidebar"),e=document.querySelector("#router-view"),a=document.querySelector("#toggle");t&&(t.classList.toggle("active"),t.classList.contains("active")?(e.style.left="300px",e.style.width="calc(100vw - 300px)",a&&(a.innerHTML='<img src="/arrow.svg" alt="arrow" />')):(e.style.left="0",e.style.width="100vw",a&&(a.innerHTML='<img src="/arrow.svg" alt="arrow" class="rotate" />')))}createRouterView(){var e;const t=document.createElement("div");return t.id="router-view",(e=document.querySelector("#app"))==null||e.appendChild(t),t}}const P=[{path:"/",component:()=>r(()=>import("./home-b6WaDFkp.js"),[])},{path:"/catalog",component:()=>r(()=>import("./catalog-dEymUzp-.js"),[]),children:[{path:"/creation/constructor",component:()=>r(()=>import("./template-DS1XdBJT.js"),[])},{path:"/creation/module",component:()=>r(()=>import("./template-DteUAfNA.js"),[])},{path:"/creation/revealing-module",component:()=>r(()=>import("./template-DQctLPtw.js"),[])},{path:"/creation/singleton",component:()=>r(()=>import("./template-BwAuCHCk.js"),[])},{path:"/creation/prototype",component:()=>r(()=>import("./template-BSqtXZqG.js"),[])},{path:"/creation/factory",component:()=>r(()=>import("./template-YtV1bHzi.js"),[])},{path:"/creation/abstract-factory",component:()=>r(()=>import("./template-BVPLHW8T.js"),[])},{path:"/structure/facade",component:()=>r(()=>import("./template-D4CftreH.js"),[])},{path:"/structure/mixin",component:()=>r(()=>import("./template-CAKViaka.js"),[])},{path:"/structure/decorator",component:()=>r(()=>import("./template-DnOTN1bl.js"),[])},{path:"/structure/flyweight",component:()=>r(()=>import("./template-JFY66-U3.js"),[])},{path:"/behavior/observer",component:()=>r(()=>import("./template-Wqa2WaxE.js"),[])},{path:"/behavior/mediator",component:()=>r(()=>import("./template-dGOakSde.js"),[])},{path:"/behavior/command",component:()=>r(()=>import("./template-DW9vGCVF.js"),[])}]}],T=`<nav id="navbar">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/catalog">Catalog</a></li>
  </ul>
</nav>
<div id="router-view"></div>
`;document.querySelector("#app").innerHTML=T;const v=new R(P);document.addEventListener("click",l=>{const t=l.target;if(t instanceof HTMLElement){const e=t.getAttribute("href");e&&e.startsWith("/")&&(l.preventDefault(),v.navigate(e))}});v.resolve();
