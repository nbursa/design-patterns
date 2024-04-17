var E=Object.defineProperty;var y=(s,t,e)=>t in s?E(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var f=(s,t,e)=>(y(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();const L="modulepreload",P=function(s){return"/design-patterns/"+s},v={},r=function(t,e,n){let o=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.all(e.map(i=>{if(i=P(i),i in v)return;v[i]=!0;const l=i.endsWith(".css"),_=l?'[rel="stylesheet"]':"";if(!!n)for(let h=a.length-1;h>=0;h--){const m=a[h];if(m.href===i&&(!l||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${_}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":L,l||(u.as="script",u.crossOrigin=""),u.href=i,d&&u.setAttribute("nonce",d),document.head.appendChild(u),l)return new Promise((h,m)=>{u.addEventListener("load",h),u.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}return o.then(()=>t()).catch(a=>{const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a})},b=`<div class="not-found page">
  <div>
    <div class="large">404</div>
    <div>Page not found</div>
  </div>
</div>
`,w=`
<div class="category">
  <div class="links">
    <a href="/home" class="link">Home</a>
    <a href="/catalog" class="link">Catalog</a>
  </div>
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
`;class R{constructor(t){f(this,"basePath","/design-patterns");f(this,"routes",[]);this.initRoutes(t),window.addEventListener("resize",()=>this.resolve())}initRoutes(t){t.forEach(e=>{var n;this.addRoute(e.path,e.component),(n=e.children)==null||n.forEach(o=>{this.addRoute(`${e.path}${o.path}`,o.component)})})}addRoute(t,e){const n=t===this.basePath?this.basePath:`${this.basePath}${t}`;this.routes.some(o=>o.path===n)||this.routes.push({path:n,component:e})}async navigate(t){window.location.hash=`#${t}`,await this.resolve()}async resolve(){const t=window.location.hash.slice(1),e=this.basePath.replace(/\/$/,""),n=t.replace(new RegExp(`^${e}`),"").replace(/\/$/,""),o=this.routes.find(i=>{const l=i.path.replace(/\/$/,"");return`${e}${t}`===l||n.startsWith(l+"/")}),a={constructor:()=>r(()=>import("./index-D0Aq82mx.js"),[]),module:()=>r(()=>import("./index-CqhFmb13.js"),[]),"revealing-module":()=>r(()=>import("./index-CcMIek3q.js"),[]),singleton:()=>r(()=>import("./index-SeJq0btD.js"),[]),prototype:()=>r(()=>import("./index-aKkA0YZn.js"),[]),factory:()=>r(()=>import("./index-agI14fTH.js"),[]),"abstract-factory":()=>r(()=>import("./index-BWEfs01G.js"),[]),facade:()=>r(()=>import("./index-xoyJwxFS.js"),[]),mixin:()=>r(()=>import("./index-W3DBNO3U.js"),[]),decorator:()=>r(()=>import("./index-BgNNdt_l.js"),[]),flyweight:()=>r(()=>import("./index-DZGwm19n.js"),[]),observer:()=>r(()=>import("./index-9u9qV-F7.js"),[]),mediator:()=>r(()=>import("./index-B8mCYDap.js"),[]),command:()=>r(()=>import("./index-CM4Y0v9R.js"),[])},c=document.querySelector("#router-view")||this.createRouterView(),d=document.querySelector("#router-view");if(o)try{const i=await o.component();c.innerHTML=i.default,this.renderSidebar();const l=n.split("/").pop(),_=a[l||""];if(_){const p=await _();p.default&&p.default()}[`${e}/home`,`${e}/catalog`].includes(o.path)&&d.removeAttribute("style")}catch(i){c.innerHTML=`Failed to load the component, ${i}`}else c.innerHTML=b,d.removeAttribute("style")}renderSidebar(){var a,c;const e=window.location.hash.slice(1).replace(new RegExp(`^${this.basePath}`),""),n=document.querySelector("#sidebar"),o=document.querySelector("#toggle");if(n&&((a=n.parentNode)==null||a.removeChild(n)),o&&((c=o.parentNode)==null||c.removeChild(o)),!["/home","/catalog"].includes(e)&&!n){const d=document.createElement("nav");d.id="sidebar",d.innerHTML=w;const i=document.querySelector("#router-view");if(i!=null&&i.firstChild?i.insertBefore(d,i.firstChild):i==null||i.appendChild(d),i.style.left="0",i.style.width="100vw",!o){const l=document.createElement("button");l.id="toggle",window.innerWidth>=768&&this.toggleSidebar(),l.innerHTML=d.classList.contains("active")?`<img src="${this.basePath}/arrow.svg" alt="arrow" />`:`<img src="${this.basePath}/arrow.svg" alt="arrow" class="rotate" />`,l.addEventListener("click",()=>{this.toggleSidebar()}),d.insertBefore(l,d.firstChild)}}}addSidebarLinkEventListeners(){document.querySelectorAll("#sidebar a").forEach(e=>{e.addEventListener("click",()=>{this.toggleSidebar()})})}toggleSidebar(){const t=document.querySelector("#sidebar"),e=document.querySelector("#router-view"),n=document.querySelector("#toggle");t&&(t.classList.toggle("active"),t.classList.contains("active")?(e.style.left="300px",e.style.width="calc(100vw - 300px)",n&&(n.innerHTML=`<img src="${this.basePath}/arrow.svg" alt="arrow" />`)):(e.style.left="0",e.style.width="100vw",n&&(n.innerHTML=`<img src="${this.basePath}/arrow.svg" alt="arrow" class="rotate" />`)))}createRouterView(){var e;const t=document.createElement("div");return t.id="router-view",(e=document.querySelector("#app"))==null||e.appendChild(t),t}}const T=[{path:"/home",component:()=>r(()=>import("./home-CBRqPNsd.js"),[])},{path:"/catalog",component:()=>r(()=>import("./catalog-DuUudVCM.js"),[]),children:[{path:"/creation/constructor",component:()=>r(()=>import("./template-ChkKQP0Y.js"),[])},{path:"/creation/module",component:()=>r(()=>import("./template-C7roujvv.js"),[])},{path:"/creation/revealing-module",component:()=>r(()=>import("./template-LDM8Y0XB.js"),[])},{path:"/creation/singleton",component:()=>r(()=>import("./template-BmxSVm93.js"),[])},{path:"/creation/prototype",component:()=>r(()=>import("./template-DSQYfC5l.js"),[])},{path:"/creation/factory",component:()=>r(()=>import("./template-Dgrn_5dF.js"),[])},{path:"/creation/abstract-factory",component:()=>r(()=>import("./template-HxBCA7lu.js"),[])},{path:"/structure/facade",component:()=>r(()=>import("./template-BvUrTacS.js"),[])},{path:"/structure/mixin",component:()=>r(()=>import("./template-CVm66qo2.js"),[])},{path:"/structure/decorator",component:()=>r(()=>import("./template-AVUEEASo.js"),[])},{path:"/structure/flyweight",component:()=>r(()=>import("./template-CrsM-EmJ.js"),[])},{path:"/behavior/observer",component:()=>r(()=>import("./template-A98wKBjc.js"),[])},{path:"/behavior/mediator",component:()=>r(()=>import("./template-BnSTc7A1.js"),[])},{path:"/behavior/command",component:()=>r(()=>import("./template-C3nkiUhT.js"),[])}]}],O=`<nav id="navbar">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/catalog">Catalog</a></li>
  </ul>
</nav>
<div id="router-view"></div>
`,g=new R(T);document.querySelector("#app").innerHTML=O;document.addEventListener("DOMContentLoaded",()=>{window.location.hash||(window.location.hash="#/home"),g.resolve().catch(s=>console.log(s))});document.addEventListener("click",s=>{const t=s.target;if(t instanceof HTMLElement){const e=t.getAttribute("href");e&&e.startsWith("/")&&(s.preventDefault(),g.navigate(e).catch(n=>console.log(n)))}});
