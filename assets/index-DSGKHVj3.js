var g=Object.defineProperty;var E=(s,t,e)=>t in s?g(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var p=(s,t,e)=>(E(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();const y="modulepreload",L=function(s){return"/"+s},h={},r=function(t,e,a){let o=Promise.resolve();if(e&&e.length>0){const i=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),c=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.all(e.map(l=>{if(l=L(l),l in h)return;h[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!a)for(let _=i.length-1;_>=0;_--){const m=i[_];if(m.href===l&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":y,u||(d.as="script",d.crossOrigin=""),d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((_,m)=>{d.addEventListener("load",_),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}return o.then(()=>t()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},w=`<div class="not-found page">
  <div>
    <div class="large">404</div>
    <div>Page not found</div>
  </div>
</div>
`,R=`
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
`;class b{constructor(t){p(this,"routes",[]);this.initRoutes(t),window.addEventListener("resize",()=>this.resolve())}initRoutes(t){t.forEach(e=>{var a;this.addRoute(e.path,e.component),(a=e.children)==null||a.forEach(o=>{this.addRoute(`${e.path}${o.path}`,o.component)})})}addRoute(t,e){this.routes.some(a=>a.path===t)||this.routes.push({path:t,component:e})}async navigate(t){history.pushState({},"",t),await this.resolve()}async resolve(){const t=window.location.pathname,e=this.routes.find(i=>{const n=i.path.replace(/\/$/,"");return t===n}),a={constructor:()=>r(()=>import("./index-D0Aq82mx.js"),[]),module:()=>r(()=>import("./index-CqhFmb13.js"),[]),"revealing-module":()=>r(()=>import("./index-CcMIek3q.js"),[]),singleton:()=>r(()=>import("./index-SeJq0btD.js"),[]),prototype:()=>r(()=>import("./index-aKkA0YZn.js"),[]),factory:()=>r(()=>import("./index-agI14fTH.js"),[]),"abstract-factory":()=>r(()=>import("./index-BWEfs01G.js"),[]),facade:()=>r(()=>import("./index-xoyJwxFS.js"),[]),mixin:()=>r(()=>import("./index-W3DBNO3U.js"),[]),decorator:()=>r(()=>import("./index-BgNNdt_l.js"),[]),flyweight:()=>r(()=>import("./index-DZGwm19n.js"),[]),observer:()=>r(()=>import("./index-9u9qV-F7.js"),[]),mediator:()=>r(()=>import("./index-B8mCYDap.js"),[]),command:()=>r(()=>import("./index-CM4Y0v9R.js"),[])},o=document.querySelector("#router-view")||this.createRouterView();if(o.innerHTML="",e)try{const i=await e.component();o.innerHTML=i.default,this.renderSidebar();const n=t.split("/").pop()||"",c=a[n];c&&(await c()).default(),console.log(e.path),["/home","/catalog"].includes(e.path)&&o.removeAttribute("style")}catch(i){o.innerHTML=`Failed to load the component, ${i}`}else o.innerHTML=w}renderSidebar(){var o,i;const t=window.location.pathname,e=document.querySelector("#sidebar"),a=document.querySelector("#toggle");if(e&&((o=e.parentNode)==null||o.removeChild(e)),a&&((i=a.parentNode)==null||i.removeChild(a)),!["/home","/catalog"].includes(t)&&!e){const n=document.createElement("nav");n.id="sidebar",n.innerHTML=R;const c=document.querySelector("#router-view");if(c!=null&&c.firstChild?c.insertBefore(n,c.firstChild):c==null||c.appendChild(n),c.style.left="0",c.style.width="100vw",!a){const l=document.createElement("button");l.id="toggle",window.innerWidth>=768&&this.toggleSidebar(),l.innerHTML=n.classList.contains("active")?"<img src='/arrow.svg' alt='arrow' />":"<img src='/arrow.svg' alt='arrow' class='rotate' />",l.addEventListener("click",()=>{this.toggleSidebar()}),n.insertBefore(l,n.firstChild)}}}addSidebarLinkEventListeners(){document.querySelectorAll("#sidebar a").forEach(e=>{e.addEventListener("click",()=>{this.toggleSidebar()})})}toggleSidebar(){const t=document.querySelector("#sidebar"),e=document.querySelector("#router-view"),a=document.querySelector("#toggle");t&&(t.classList.toggle("active"),t.classList.contains("active")?(e.style.left="300px",e.style.width="calc(100vw - 300px)",a&&(a.innerHTML="<img src='/arrow.svg' alt='arrow' />")):(e.style.left="0",e.style.width="100vw",a&&(a.innerHTML="<img src='/arrow.svg' alt='arrow' class='rotate' />")))}createRouterView(){var e;const t=document.createElement("div");return t.id="router-view",(e=document.querySelector("#app"))==null||e.appendChild(t),t}}const P=[{path:"/home",component:()=>r(()=>import("./home-CBRqPNsd.js"),[])},{path:"/catalog",component:()=>r(()=>import("./catalog-DuUudVCM.js"),[]),children:[{path:"/creation/constructor",component:()=>r(()=>import("./template-ChkKQP0Y.js"),[])},{path:"/creation/module",component:()=>r(()=>import("./template-C7roujvv.js"),[])},{path:"/creation/revealing-module",component:()=>r(()=>import("./template-LDM8Y0XB.js"),[])},{path:"/creation/singleton",component:()=>r(()=>import("./template-BmxSVm93.js"),[])},{path:"/creation/prototype",component:()=>r(()=>import("./template-DSQYfC5l.js"),[])},{path:"/creation/factory",component:()=>r(()=>import("./template-Dgrn_5dF.js"),[])},{path:"/creation/abstract-factory",component:()=>r(()=>import("./template-HxBCA7lu.js"),[])},{path:"/structure/facade",component:()=>r(()=>import("./template-BvUrTacS.js"),[])},{path:"/structure/mixin",component:()=>r(()=>import("./template-CVm66qo2.js"),[])},{path:"/structure/decorator",component:()=>r(()=>import("./template-AVUEEASo.js"),[])},{path:"/structure/flyweight",component:()=>r(()=>import("./template-CrsM-EmJ.js"),[])},{path:"/behavior/observer",component:()=>r(()=>import("./template-A98wKBjc.js"),[])},{path:"/behavior/mediator",component:()=>r(()=>import("./template-BnSTc7A1.js"),[])},{path:"/behavior/command",component:()=>r(()=>import("./template-C3nkiUhT.js"),[])}]}],T=`<nav id="navbar">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/catalog">Catalog</a></li>
  </ul>
</nav>
<div id="router-view"></div>
`,v=new b(P);document.querySelector("#app").innerHTML=T;document.addEventListener("DOMContentLoaded",()=>{window.location.pathname==="/"&&history.replaceState({},"","/home"),v.resolve().catch(s=>console.log(s))});document.addEventListener("click",s=>{const t=s.target;if(t instanceof HTMLElement){const e=t.getAttribute("href");e&&e.startsWith("/")&&(s.preventDefault(),v.navigate(e).catch(a=>console.log(a)))}});
