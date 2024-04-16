var E=Object.defineProperty;var y=(s,e,t)=>e in s?E(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var f=(s,e,t)=>(y(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();const L="modulepreload",P=function(s){return"/design-patterns/"+s},g={},r=function(e,t,n){let o=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.all(t.map(i=>{if(i=P(i),i in g)return;g[i]=!0;const l=i.endsWith(".css"),_=l?'[rel="stylesheet"]':"";if(!!n)for(let h=a.length-1;h>=0;h--){const m=a[h];if(m.href===i&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${_}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":L,l||(u.as="script",u.crossOrigin=""),u.href=i,d&&u.setAttribute("nonce",d),document.head.appendChild(u),l)return new Promise((h,m)=>{u.addEventListener("load",h),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>e()).catch(a=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a})},b=`<div class="not-found page">
  <div>
    <div class="large">404</div>
    <div>Page not found</div>
  </div>
</div>
`,w=`<div class="category">
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
`;class R{constructor(e){f(this,"basePath","/design-patterns");f(this,"routes",[]);this.initRoutes(e),window.addEventListener("resize",()=>this.resolve())}initRoutes(e){e.forEach(t=>{var n;this.addRoute(t.path,t.component),(n=t.children)==null||n.forEach(o=>{this.addRoute(`${t.path}${o.path}`,o.component)})})}addRoute(e,t){const n=e===this.basePath?this.basePath:`${this.basePath}${e}`;this.routes.some(o=>o.path===n)||this.routes.push({path:n,component:t})}async navigate(e){const t=e.startsWith(this.basePath)?e:`${this.basePath}${e}`;window.history.pushState({},"",t),await this.resolve()}async resolve(){const e=window.location.pathname,t=this.basePath.replace(/\/$/,""),n=e.replace(new RegExp(`^${t}`),"").replace(/\/$/,""),o=this.routes.find(i=>{const l=i.path.replace(/\/$/,"");return e===l||n.startsWith(l+"/")}),a={constructor:()=>r(()=>import("./index-D0Aq82mx.js"),[]),module:()=>r(()=>import("./index-CqhFmb13.js"),[]),"revealing-module":()=>r(()=>import("./index-CcMIek3q.js"),[]),singleton:()=>r(()=>import("./index-SeJq0btD.js"),[]),prototype:()=>r(()=>import("./index-aKkA0YZn.js"),[]),factory:()=>r(()=>import("./index-agI14fTH.js"),[]),"abstract-factory":()=>r(()=>import("./index-BWEfs01G.js"),[]),facade:()=>r(()=>import("./index-xoyJwxFS.js"),[]),mixin:()=>r(()=>import("./index-W3DBNO3U.js"),[]),decorator:()=>r(()=>import("./index-BgNNdt_l.js"),[]),flyweight:()=>r(()=>import("./index-DZGwm19n.js"),[]),observer:()=>r(()=>import("./index-9u9qV-F7.js"),[]),mediator:()=>r(()=>import("./index-B8mCYDap.js"),[]),command:()=>r(()=>import("./index-CM4Y0v9R.js"),[])},c=document.querySelector("#router-view")||this.createRouterView(),d=document.querySelector("#router-view");if(o)try{const i=await o.component();c.innerHTML=i.default,this.renderSidebar();const l=n.split("/").pop(),_=a[l||""];if(_){const p=await _();p.default&&p.default()}["/home","/catalog"].includes(o.path)&&d.removeAttribute("style")}catch(i){c.innerHTML=`Failed to load the component, ${i}`}else c.innerHTML=b,d.removeAttribute("style")}renderSidebar(){var a,c;const t=window.location.pathname.replace(new RegExp(`^${this.basePath}`),""),n=document.querySelector("#sidebar"),o=document.querySelector("#toggle");if(n&&((a=n.parentNode)==null||a.removeChild(n)),o&&((c=o.parentNode)==null||c.removeChild(o)),!["/home","/catalog"].includes(t)&&!n){const d=document.createElement("nav");d.id="sidebar",d.innerHTML=w;const i=document.querySelector("#router-view");if(i!=null&&i.firstChild?i.insertBefore(d,i.firstChild):i==null||i.appendChild(d),i.style.left="0",i.style.width="100vw",!o){const l=document.createElement("button");l.id="toggle",window.innerWidth>=768&&this.toggleSidebar(),l.innerHTML=d.classList.contains("active")?`<img src="{${this.basePath}/arrow.svg}" alt="arrow" />`:`<img src="${this.basePath}/arrow.svg" alt="arrow" class="rotate" />`,l.addEventListener("click",()=>{this.toggleSidebar()}),d.insertBefore(l,d.firstChild)}}}addSidebarLinkEventListeners(){document.querySelectorAll("#sidebar a").forEach(t=>{t.addEventListener("click",()=>{this.toggleSidebar()})})}toggleSidebar(){const e=document.querySelector("#sidebar"),t=document.querySelector("#router-view"),n=document.querySelector("#toggle");e&&(e.classList.toggle("active"),e.classList.contains("active")?(t.style.left="300px",t.style.width="calc(100vw - 300px)",n&&(n.innerHTML=`<img src="${this.basePath}/arrow.svg" alt="arrow" />`)):(t.style.left="0",t.style.width="100vw",n&&(n.innerHTML=`<img src="${this.basePath}/arrow.svg" alt="arrow" class="rotate" />`)))}createRouterView(){var t;const e=document.createElement("div");return e.id="router-view",(t=document.querySelector("#app"))==null||t.appendChild(e),e}}const T=[{path:"/home",component:()=>r(()=>import("./home-b6WaDFkp.js"),[])},{path:"/catalog",component:()=>r(()=>import("./catalog-dEymUzp-.js"),[]),children:[{path:"/creation/constructor",component:()=>r(()=>import("./template-DS1XdBJT.js"),[])},{path:"/creation/module",component:()=>r(()=>import("./template-DteUAfNA.js"),[])},{path:"/creation/revealing-module",component:()=>r(()=>import("./template-DQctLPtw.js"),[])},{path:"/creation/singleton",component:()=>r(()=>import("./template-BwAuCHCk.js"),[])},{path:"/creation/prototype",component:()=>r(()=>import("./template-BSqtXZqG.js"),[])},{path:"/creation/factory",component:()=>r(()=>import("./template-YtV1bHzi.js"),[])},{path:"/creation/abstract-factory",component:()=>r(()=>import("./template-BVPLHW8T.js"),[])},{path:"/structure/facade",component:()=>r(()=>import("./template-D4CftreH.js"),[])},{path:"/structure/mixin",component:()=>r(()=>import("./template-CAKViaka.js"),[])},{path:"/structure/decorator",component:()=>r(()=>import("./template-DnOTN1bl.js"),[])},{path:"/structure/flyweight",component:()=>r(()=>import("./template-JFY66-U3.js"),[])},{path:"/behavior/observer",component:()=>r(()=>import("./template-Wqa2WaxE.js"),[])},{path:"/behavior/mediator",component:()=>r(()=>import("./template-dGOakSde.js"),[])},{path:"/behavior/command",component:()=>r(()=>import("./template-DW9vGCVF.js"),[])}]}],O=`<nav id="navbar">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/catalog">Catalog</a></li>
  </ul>
</nav>
<div id="router-view"></div>
`;document.querySelector("#app").innerHTML=O;const v=new R(T);document.addEventListener("click",s=>{const e=s.target;if(e instanceof HTMLElement){const t=e.getAttribute("href");t&&t.startsWith("/")&&(s.preventDefault(),v.navigate(t).catch(n=>console.log(n)))}});console.log(window.location.pathname);document.addEventListener("DOMContentLoaded",()=>{window.location.pathname==="/"||window.location.pathname==="/design-patterns/"?v.navigate("/home").catch(s=>console.error(s)):v.resolve().catch(s=>console.error(s))});