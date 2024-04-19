var g=Object.defineProperty;var E=(s,e,t)=>e in s?g(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var p=(s,e,t)=>(E(s,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}})();const L="modulepreload",y=function(s){return"/"+s},h={},r=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){const i=document.getElementsByTagName("link"),n=document.querySelector("meta[property=csp-nonce]"),c=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));o=Promise.all(t.map(l=>{if(l=y(l),l in h)return;h[l]=!0;const u=l.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!a)for(let _=i.length-1;_>=0;_--){const m=i[_];if(m.href===l&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":L,u||(d.as="script",d.crossOrigin=""),d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((_,m)=>{d.addEventListener("load",_),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}return o.then(()=>e()).catch(i=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=i,window.dispatchEvent(n),!n.defaultPrevented)throw i})},w=`<div class="not-found page">
  <div>
    <div class="large">404</div>
    <div>Page not found</div>
  </div>
</div>
`,R=`<div class='category'>
  <div class='links'>
    <a href='/' class='link'>Home</a>
    <a href='/catalog' class='link'>Catalog</a>
  </div>
  <h4 class='category-title'>Creational</h4>
  <ul>
    <li><a href='/catalog/creation/constructor'>Constructor</a></li>
    <li><a href='/catalog/creation/module'>Module</a></li>
    <li><a href='/catalog/creation/revealing-module'>Revealing Module</a></li>
    <li><a href='/catalog/creation/singleton'>Singleton</a></li>
    <li><a href='/catalog/creation/prototype'>Prototype</a></li>
    <li><a href='/catalog/creation/factory'>Factory</a></li>
    <li><a href='/catalog/creation/abstract-factory'>Abstract Factory</a></li>
  </ul>
</div>
<div class='category text-center'>
  <h4 class='category-title'>Structural</h4>
  <ul>
    <li><a href='/catalog/structure/facade'>Facade</a></li>
    <li><a href='/catalog/structure/mixin'>Mixin</a></li>
    <li><a href='/catalog/structure/decorator'>Decorator</a></li>
    <li><a href='/catalog/structure/flyweight'>Flyweight</a></li>
  </ul>
</div>
<div class='category text-right'>
  <h4 class='category-title'>Behavioral</h4>
  <ul>
    <li><a href='/catalog/behavior/observer'>Observer</a></li>
    <li><a href='/catalog/behavior/mediator'>Mediator</a></li>
    <li><a href='/catalog/behavior/command'>Command</a></li>
  </ul>
</div>
`;class b{constructor(e){p(this,"routes",[]);p(this,"normalizePath",e=>e.replace(/\/$/,""));this.initRoutes(e),window.addEventListener("resize",()=>this.resolve())}initRoutes(e){e.forEach(t=>{var a;this.addRoute(t.path,t.component),(a=t.children)==null||a.forEach(o=>{this.addRoute(`${t.path}${o.path}`,o.component)})})}addRoute(e,t){this.routes.some(a=>a.path===e)||this.routes.push({path:e,component:t})}async navigate(e){window.location.hash=e,await this.resolve()}async resolve(){const e=window.location.hash.slice(1)||"/",t=this.routes.find(i=>i.path===e),a={constructor:()=>r(()=>import("./index-D0Aq82mx.js"),[]),module:()=>r(()=>import("./index-CqhFmb13.js"),[]),"revealing-module":()=>r(()=>import("./index-CcMIek3q.js"),[]),singleton:()=>r(()=>import("./index-SeJq0btD.js"),[]),prototype:()=>r(()=>import("./index-aKkA0YZn.js"),[]),factory:()=>r(()=>import("./index-agI14fTH.js"),[]),"abstract-factory":()=>r(()=>import("./index-BWEfs01G.js"),[]),facade:()=>r(()=>import("./index-xoyJwxFS.js"),[]),mixin:()=>r(()=>import("./index-W3DBNO3U.js"),[]),decorator:()=>r(()=>import("./index-BgNNdt_l.js"),[]),flyweight:()=>r(()=>import("./index-DZGwm19n.js"),[]),observer:()=>r(()=>import("./index-9u9qV-F7.js"),[]),mediator:()=>r(()=>import("./index-B8mCYDap.js"),[]),command:()=>r(()=>import("./index-CM4Y0v9R.js"),[])},o=document.querySelector("#router-view")||this.createRouterView();if(o.innerHTML="",t)try{const i=await t.component();o.innerHTML=i.default,this.renderSidebar();const n=e.split("/").pop()||"",c=a[n];c&&(await c()).default(),["/","/catalog"].includes(t.path)&&o.removeAttribute("style")}catch(i){o.innerHTML=`Failed to load the component, ${i}`}else o.innerHTML=w}renderSidebar(){var o,i;const e=window.location.hash.slice(1)||"/",t=document.querySelector("#sidebar"),a=document.querySelector("#toggle");if(t&&((o=t.parentNode)==null||o.removeChild(t)),a&&((i=a.parentNode)==null||i.removeChild(a)),!["/","/catalog"].includes(e)&&!t){const n=document.createElement("nav");n.id="sidebar",n.innerHTML=R;const c=document.querySelector("#router-view");if(c!=null&&c.firstChild?c.insertBefore(n,c.firstChild):c==null||c.appendChild(n),c.style.left="0",c.style.width="100vw",!a){const l=document.createElement("button");l.id="toggle",window.innerWidth>=768&&this.toggleSidebar(),l.innerHTML=n.classList.contains("active")?"<img src='/arrow.svg' alt='arrow' />":"<img src='/arrow.svg' alt='arrow' class='rotate' />",l.addEventListener("click",()=>{this.toggleSidebar()}),n.insertBefore(l,n.firstChild)}}}addSidebarLinkEventListeners(){document.querySelectorAll("#sidebar a").forEach(t=>{t.addEventListener("click",()=>{this.toggleSidebar()})})}toggleSidebar(){const e=document.querySelector("#sidebar"),t=document.querySelector("#router-view"),a=document.querySelector("#toggle");e&&(e.classList.toggle("active"),e.classList.contains("active")?(t.style.left="300px",t.style.width="calc(100vw - 300px)",a&&(a.innerHTML="<img src='/arrow.svg' alt='arrow' />")):(t.style.left="0",t.style.width="100vw",a&&(a.innerHTML="<img src='/arrow.svg' alt='arrow' class='rotate' />")))}createRouterView(){var t;const e=document.createElement("div");return e.id="router-view",(t=document.querySelector("#app"))==null||t.appendChild(e),e}}const P=[{path:"/",component:()=>r(()=>import("./home-CBRqPNsd.js"),[])},{path:"/catalog",component:()=>r(()=>import("./catalog-DuUudVCM.js"),[]),children:[{path:"/creation/constructor",component:()=>r(()=>import("./template-ChkKQP0Y.js"),[])},{path:"/creation/module",component:()=>r(()=>import("./template-C7roujvv.js"),[])},{path:"/creation/revealing-module",component:()=>r(()=>import("./template-LDM8Y0XB.js"),[])},{path:"/creation/singleton",component:()=>r(()=>import("./template-BmxSVm93.js"),[])},{path:"/creation/prototype",component:()=>r(()=>import("./template-DSQYfC5l.js"),[])},{path:"/creation/factory",component:()=>r(()=>import("./template-Dgrn_5dF.js"),[])},{path:"/creation/abstract-factory",component:()=>r(()=>import("./template-HxBCA7lu.js"),[])},{path:"/structure/facade",component:()=>r(()=>import("./template-BvUrTacS.js"),[])},{path:"/structure/mixin",component:()=>r(()=>import("./template-CVm66qo2.js"),[])},{path:"/structure/decorator",component:()=>r(()=>import("./template-AVUEEASo.js"),[])},{path:"/structure/flyweight",component:()=>r(()=>import("./template-CrsM-EmJ.js"),[])},{path:"/behavior/observer",component:()=>r(()=>import("./template-A98wKBjc.js"),[])},{path:"/behavior/mediator",component:()=>r(()=>import("./template-BnSTc7A1.js"),[])},{path:"/behavior/command",component:()=>r(()=>import("./template-C3nkiUhT.js"),[])}]}],T=`<nav id="navbar">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/catalog">Catalog</a></li>
  </ul>
</nav>
<div id="router-view"></div>
`,v=new b(P);document.querySelector("#app").innerHTML=T;document.addEventListener("DOMContentLoaded",()=>{v.resolve().catch(s=>console.error("Error resolving initial route:",s))});document.addEventListener("click",s=>{const e=s.target;if(e instanceof HTMLElement){const t=e.getAttribute("href");t&&t.startsWith("/")&&(s.preventDefault(),v.navigate(t).catch(a=>console.log(a)))}});
