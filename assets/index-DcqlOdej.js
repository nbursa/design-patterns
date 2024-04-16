var g=Object.defineProperty;var E=(l,e,t)=>e in l?g(l,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[e]=t;var m=(l,e,t)=>(E(l,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const y="modulepreload",L=function(l){return"/design-patterns/"+l},f={},r=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){const n=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),s=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.all(t.map(a=>{if(a=L(a),a in f)return;f[a]=!0;const d=a.endsWith(".css"),h=d?'[rel="stylesheet"]':"";if(!!i)for(let _=n.length-1;_>=0;_--){const p=n[_];if(p.href===a&&(!d||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${a}"]${h}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":y,d||(u.as="script",u.crossOrigin=""),u.href=a,s&&u.setAttribute("nonce",s),document.head.appendChild(u),d)return new Promise((_,p)=>{u.addEventListener("load",_),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}return o.then(()=>e()).catch(n=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=n,window.dispatchEvent(c),!c.defaultPrevented)throw n})},P=`<div class="not-found page">
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
`;class w{constructor(e){m(this,"basePath","/design-patterns");m(this,"routes",[]);this.initRoutes(e),window.addEventListener("resize",()=>this.resolve())}initRoutes(e){e.forEach(t=>{var i;this.addRoute(`${this.basePath}${t.path}`,t.component),(i=t.children)==null||i.forEach(o=>{this.addRoute(`${this.basePath}${t.path}${o.path}`,o.component)})})}addRoute(e,t){this.routes.some(i=>i.path===e)||this.routes.push({path:e,component:t})}async navigate(e){window.history.pushState({},"",`${this.basePath}${e}`),await this.resolve()}async resolve(){const t=window.location.pathname.replace(new RegExp(`^${this.basePath}`),""),i=this.routes.find(s=>s.path===t||t.startsWith(s.path+"/"));console.log("route",i);const o={constructor:()=>r(()=>import("./index-D0Aq82mx.js"),[]),module:()=>r(()=>import("./index-CqhFmb13.js"),[]),"revealing-module":()=>r(()=>import("./index-CcMIek3q.js"),[]),singleton:()=>r(()=>import("./index-SeJq0btD.js"),[]),prototype:()=>r(()=>import("./index-aKkA0YZn.js"),[]),factory:()=>r(()=>import("./index-agI14fTH.js"),[]),"abstract-factory":()=>r(()=>import("./index-BWEfs01G.js"),[]),facade:()=>r(()=>import("./index-xoyJwxFS.js"),[]),mixin:()=>r(()=>import("./index-W3DBNO3U.js"),[]),decorator:()=>r(()=>import("./index-BgNNdt_l.js"),[]),flyweight:()=>r(()=>import("./index-DZGwm19n.js"),[]),observer:()=>r(()=>import("./index-9u9qV-F7.js"),[]),mediator:()=>r(()=>import("./index-B8mCYDap.js"),[]),command:()=>r(()=>import("./index-CM4Y0v9R.js"),[])},n=document.querySelector("#router-view")||this.createRouterView(),c=document.querySelector("#router-view");if(i)try{const s=await i.component();n.innerHTML=s.default,this.renderSidebar();const a=t.split("/").pop(),d=o[a||""];if(d){const h=await d();h.default&&h.default()}["/","/catalog"].includes(i.path)&&c.removeAttribute("style")}catch(s){n.innerHTML=`Failed to load the component, ${s}`}else n.innerHTML=P,c.removeAttribute("style")}renderSidebar(){var n,c;const t=window.location.pathname.replace(new RegExp(`^${this.basePath}`),""),i=document.querySelector("#sidebar"),o=document.querySelector("#toggle");if(i&&((n=i.parentNode)==null||n.removeChild(i)),o&&((c=o.parentNode)==null||c.removeChild(o)),!["/","/catalog"].includes(t)&&!i){const s=document.createElement("nav");s.id="sidebar",s.innerHTML=b;const a=document.querySelector("#router-view");if(a!=null&&a.firstChild?a.insertBefore(s,a.firstChild):a==null||a.appendChild(s),a.style.left="0",a.style.width="100vw",!o){const d=document.createElement("button");d.id="toggle",window.innerWidth>=768&&this.toggleSidebar(),d.innerHTML=s.classList.contains("active")?'<img src="/arrow.svg" alt="arrow" />':'<img src="/arrow.svg" alt="arrow" class="rotate" />',d.addEventListener("click",()=>{this.toggleSidebar()}),s.insertBefore(d,s.firstChild)}}}addSidebarLinkEventListeners(){document.querySelectorAll("#sidebar a").forEach(t=>{t.addEventListener("click",()=>{this.toggleSidebar()})})}toggleSidebar(){const e=document.querySelector("#sidebar"),t=document.querySelector("#router-view"),i=document.querySelector("#toggle");e&&(e.classList.toggle("active"),e.classList.contains("active")?(t.style.left="300px",t.style.width="calc(100vw - 300px)",i&&(i.innerHTML='<img src="/arrow.svg" alt="arrow" />')):(t.style.left="0",t.style.width="100vw",i&&(i.innerHTML='<img src="/arrow.svg" alt="arrow" class="rotate" />')))}createRouterView(){var t;const e=document.createElement("div");return e.id="router-view",(t=document.querySelector("#app"))==null||t.appendChild(e),e}}const R=[{path:"/",component:()=>r(()=>import("./home-b6WaDFkp.js"),[])},{path:"/catalog",component:()=>r(()=>import("./catalog-dEymUzp-.js"),[]),children:[{path:"/creation/constructor",component:()=>r(()=>import("./template-DS1XdBJT.js"),[])},{path:"/creation/module",component:()=>r(()=>import("./template-DteUAfNA.js"),[])},{path:"/creation/revealing-module",component:()=>r(()=>import("./template-DQctLPtw.js"),[])},{path:"/creation/singleton",component:()=>r(()=>import("./template-BwAuCHCk.js"),[])},{path:"/creation/prototype",component:()=>r(()=>import("./template-BSqtXZqG.js"),[])},{path:"/creation/factory",component:()=>r(()=>import("./template-YtV1bHzi.js"),[])},{path:"/creation/abstract-factory",component:()=>r(()=>import("./template-BVPLHW8T.js"),[])},{path:"/structure/facade",component:()=>r(()=>import("./template-D4CftreH.js"),[])},{path:"/structure/mixin",component:()=>r(()=>import("./template-CAKViaka.js"),[])},{path:"/structure/decorator",component:()=>r(()=>import("./template-DnOTN1bl.js"),[])},{path:"/structure/flyweight",component:()=>r(()=>import("./template-JFY66-U3.js"),[])},{path:"/behavior/observer",component:()=>r(()=>import("./template-Wqa2WaxE.js"),[])},{path:"/behavior/mediator",component:()=>r(()=>import("./template-dGOakSde.js"),[])},{path:"/behavior/command",component:()=>r(()=>import("./template-DW9vGCVF.js"),[])}]}],T=`<nav id="navbar">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/catalog">Catalog</a></li>
  </ul>
</nav>
<div id="router-view"></div>
`;document.querySelector("#app").innerHTML=T;const v=new w(R);document.addEventListener("click",l=>{const e=l.target;if(e instanceof HTMLElement){const t=e.getAttribute("href");t&&t.startsWith("/")&&(l.preventDefault(),v.navigate(t))}});v.resolve();
