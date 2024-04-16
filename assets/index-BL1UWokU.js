var E=Object.defineProperty;var y=(l,t,e)=>t in l?E(l,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[t]=e;var f=(l,t,e)=>(y(l,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const L="modulepreload",w=function(l){return"/design-patterns/"+l},v={},r=function(t,e,n){let o=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));o=Promise.all(e.map(c=>{if(c=w(c),c in v)return;v[c]=!0;const u=c.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(!!n)for(let _=a.length-1;_>=0;_--){const p=a[_];if(p.href===c&&(!u||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${m}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":L,u||(d.as="script",d.crossOrigin=""),d.href=c,s&&d.setAttribute("nonce",s),document.head.appendChild(d),u)return new Promise((_,p)=>{d.addEventListener("load",_),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}return o.then(()=>t()).catch(a=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a})},b=`<div class="not-found page">
  <div>
    <div class="large">404</div>
    <div>Page not found</div>
  </div>
</div>
`,R=`<div class="category">
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
`;class P{constructor(t){f(this,"routes",[]);this.initRoutes(t),window.addEventListener("resize",()=>this.resolve())}initRoutes(t){t.forEach(e=>{var n;this.addRoute(e.path,e.component),(n=e.children)==null||n.forEach(o=>{this.addRoute(`${e.path}${o.path}`,o.component)})})}addRoute(t,e){this.routes.some(n=>n.path===t)||this.routes.push({path:t,component:e})}async navigate(t){window.history.pushState({},"",t),await this.resolve()}async resolve(){const t=window.location.pathname,e="/design-patterns",n=t.replace(new RegExp(`^${e}`),""),o=this.routes.find(c=>c.path===n||n.startsWith(c.path+"/")),a={constructor:()=>r(()=>import("./index-D0Aq82mx.js"),[]),module:()=>r(()=>import("./index-CqhFmb13.js"),[]),"revealing-module":()=>r(()=>import("./index-CcMIek3q.js"),[]),singleton:()=>r(()=>import("./index-SeJq0btD.js"),[]),prototype:()=>r(()=>import("./index-aKkA0YZn.js"),[]),factory:()=>r(()=>import("./index-agI14fTH.js"),[]),"abstract-factory":()=>r(()=>import("./index-BWEfs01G.js"),[]),facade:()=>r(()=>import("./index-xoyJwxFS.js"),[]),mixin:()=>r(()=>import("./index-W3DBNO3U.js"),[]),decorator:()=>r(()=>import("./index-BgNNdt_l.js"),[]),flyweight:()=>r(()=>import("./index-DZGwm19n.js"),[]),observer:()=>r(()=>import("./index-9u9qV-F7.js"),[]),mediator:()=>r(()=>import("./index-B8mCYDap.js"),[]),command:()=>r(()=>import("./index-CM4Y0v9R.js"),[])},i=document.querySelector("#router-view")||this.createRouterView(),s=document.querySelector("#router-view");if(o)try{const c=await o.component();i.innerHTML=c.default,this.renderSidebar();const u=n.split("/").pop(),m=a[u||""];if(m){const h=await m();h.default&&h.default()}["/","/catalog"].includes(o.path)&&s.removeAttribute("style")}catch(c){i.innerHTML=`Failed to load the component, ${c}`}else i.innerHTML=b,s.removeAttribute("style")}renderSidebar(){var o,a;const t=window.location.pathname,e=document.querySelector("#sidebar"),n=document.querySelector("#toggle");if(e&&((o=e.parentNode)==null||o.removeChild(e)),n&&((a=n.parentNode)==null||a.removeChild(n)),!["/","/catalog"].includes(t)&&!e){const i=document.createElement("nav");i.id="sidebar",i.innerHTML=R;const s=document.querySelector("#router-view");if(s!=null&&s.firstChild?s.insertBefore(i,s.firstChild):s==null||s.appendChild(i),s.style.left="0",s.style.width="100vw",!n){const c=document.createElement("button");c.id="toggle",window.innerWidth>=768&&this.toggleSidebar(),c.innerHTML=i.classList.contains("active")?'<img src="/arrow.svg" alt="arrow" />':'<img src="/arrow.svg" alt="arrow" class="rotate" />',c.addEventListener("click",()=>{this.toggleSidebar()}),i.insertBefore(c,i.firstChild)}}}addSidebarLinkEventListeners(){document.querySelectorAll("#sidebar a").forEach(e=>{e.addEventListener("click",()=>{this.toggleSidebar()})})}toggleSidebar(){const t=document.querySelector("#sidebar"),e=document.querySelector("#router-view"),n=document.querySelector("#toggle");t&&(t.classList.toggle("active"),t.classList.contains("active")?(e.style.left="300px",e.style.width="calc(100vw - 300px)",n&&(n.innerHTML='<img src="/arrow.svg" alt="arrow" />')):(e.style.left="0",e.style.width="100vw",n&&(n.innerHTML='<img src="/arrow.svg" alt="arrow" class="rotate" />')))}createRouterView(){var e;const t=document.createElement("div");return t.id="router-view",(e=document.querySelector("#app"))==null||e.appendChild(t),t}}const T=[{path:"/",component:()=>r(()=>import("./home-b6WaDFkp.js"),[])},{path:"/catalog",component:()=>r(()=>import("./catalog-dEymUzp-.js"),[]),children:[{path:"/creation/constructor",component:()=>r(()=>import("./template-DS1XdBJT.js"),[])},{path:"/creation/module",component:()=>r(()=>import("./template-DteUAfNA.js"),[])},{path:"/creation/revealing-module",component:()=>r(()=>import("./template-DQctLPtw.js"),[])},{path:"/creation/singleton",component:()=>r(()=>import("./template-BwAuCHCk.js"),[])},{path:"/creation/prototype",component:()=>r(()=>import("./template-BSqtXZqG.js"),[])},{path:"/creation/factory",component:()=>r(()=>import("./template-YtV1bHzi.js"),[])},{path:"/creation/abstract-factory",component:()=>r(()=>import("./template-BVPLHW8T.js"),[])},{path:"/structure/facade",component:()=>r(()=>import("./template-D4CftreH.js"),[])},{path:"/structure/mixin",component:()=>r(()=>import("./template-CAKViaka.js"),[])},{path:"/structure/decorator",component:()=>r(()=>import("./template-DnOTN1bl.js"),[])},{path:"/structure/flyweight",component:()=>r(()=>import("./template-JFY66-U3.js"),[])},{path:"/behavior/observer",component:()=>r(()=>import("./template-Wqa2WaxE.js"),[])},{path:"/behavior/mediator",component:()=>r(()=>import("./template-dGOakSde.js"),[])},{path:"/behavior/command",component:()=>r(()=>import("./template-DW9vGCVF.js"),[])}]}],A=`<nav id="navbar">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/catalog">Catalog</a></li>
  </ul>
</nav>
<div id="router-view"></div>
`;document.querySelector("#app").innerHTML=A;const g=new P(T);document.addEventListener("click",l=>{const t=l.target;if(t instanceof HTMLElement){const e=t.getAttribute("href");e&&e.startsWith("/")&&(l.preventDefault(),g.navigate(e))}});g.resolve();
