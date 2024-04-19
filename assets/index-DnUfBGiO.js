var g=Object.defineProperty;var E=(s,t,e)=>t in s?g(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var p=(s,t,e)=>(E(s,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const y="modulepreload",L=function(s){return"/"+s},h={},r=function(t,e,a){let i=Promise.resolve();if(e&&e.length>0){const n=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.all(e.map(c=>{if(c=L(c),c in h)return;h[c]=!0;const u=c.endsWith(".css"),f=u?'[rel="stylesheet"]':"";if(!!a)for(let _=n.length-1;_>=0;_--){const m=n[_];if(m.href===c&&(!u||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${f}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":y,u||(d.as="script",d.crossOrigin=""),d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),u)return new Promise((_,m)=>{d.addEventListener("load",_),d.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${c}`)))})}))}return i.then(()=>t()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})},w=`<div class="not-found page">
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
`;class b{constructor(t){p(this,"routes",[]);this.initRoutes(t),window.addEventListener("resize",()=>this.resolve())}initRoutes(t){t.forEach(e=>{var a;this.addRoute(e.path,e.component),(a=e.children)==null||a.forEach(i=>{this.addRoute(`${e.path}${i.path}`,i.component)})})}addRoute(t,e){this.routes.some(a=>a.path===t)||this.routes.push({path:t,component:e})}async navigate(t){history.pushState({},"",t),await this.resolve()}async resolve(){const t=window.location.pathname,e=o=>o.replace(/\/$/,""),a=this.routes.find(o=>e(t)===e(o.path)),i={constructor:()=>r(()=>import("./index-D0Aq82mx.js"),[]),module:()=>r(()=>import("./index-CqhFmb13.js"),[]),"revealing-module":()=>r(()=>import("./index-CcMIek3q.js"),[]),singleton:()=>r(()=>import("./index-SeJq0btD.js"),[]),prototype:()=>r(()=>import("./index-aKkA0YZn.js"),[]),factory:()=>r(()=>import("./index-agI14fTH.js"),[]),"abstract-factory":()=>r(()=>import("./index-BWEfs01G.js"),[]),facade:()=>r(()=>import("./index-xoyJwxFS.js"),[]),mixin:()=>r(()=>import("./index-W3DBNO3U.js"),[]),decorator:()=>r(()=>import("./index-BgNNdt_l.js"),[]),flyweight:()=>r(()=>import("./index-DZGwm19n.js"),[]),observer:()=>r(()=>import("./index-9u9qV-F7.js"),[]),mediator:()=>r(()=>import("./index-B8mCYDap.js"),[]),command:()=>r(()=>import("./index-CM4Y0v9R.js"),[])},n=document.querySelector("#router-view")||this.createRouterView();if(n.innerHTML="",a)try{const o=await a.component();n.innerHTML=o.default,this.renderSidebar();const l=t.split("/").pop()||"",c=i[l];c&&(await c()).default(),["/","/catalog"].includes(a.path)&&n.removeAttribute("style")}catch(o){n.innerHTML=`Failed to load the component, ${o}`}else n.innerHTML=w}renderSidebar(){var i,n;const t=window.location.pathname,e=document.querySelector("#sidebar"),a=document.querySelector("#toggle");if(e&&((i=e.parentNode)==null||i.removeChild(e)),a&&((n=a.parentNode)==null||n.removeChild(a)),!["/","/catalog"].includes(t)&&!e){const o=document.createElement("nav");o.id="sidebar",o.innerHTML=R;const l=document.querySelector("#router-view");if(l!=null&&l.firstChild?l.insertBefore(o,l.firstChild):l==null||l.appendChild(o),l.style.left="0",l.style.width="100vw",!a){const c=document.createElement("button");c.id="toggle",window.innerWidth>=768&&this.toggleSidebar(),c.innerHTML=o.classList.contains("active")?"<img src='/arrow.svg' alt='arrow' />":"<img src='/arrow.svg' alt='arrow' class='rotate' />",c.addEventListener("click",()=>{this.toggleSidebar()}),o.insertBefore(c,o.firstChild)}}}addSidebarLinkEventListeners(){document.querySelectorAll("#sidebar a").forEach(e=>{e.addEventListener("click",()=>{this.toggleSidebar()})})}toggleSidebar(){const t=document.querySelector("#sidebar"),e=document.querySelector("#router-view"),a=document.querySelector("#toggle");t&&(t.classList.toggle("active"),t.classList.contains("active")?(e.style.left="300px",e.style.width="calc(100vw - 300px)",a&&(a.innerHTML="<img src='/arrow.svg' alt='arrow' />")):(e.style.left="0",e.style.width="100vw",a&&(a.innerHTML="<img src='/arrow.svg' alt='arrow' class='rotate' />")))}createRouterView(){var e;const t=document.createElement("div");return t.id="router-view",(e=document.querySelector("#app"))==null||e.appendChild(t),t}}const P=[{path:"/",component:()=>r(()=>import("./home-CBRqPNsd.js"),[])},{path:"/catalog",component:()=>r(()=>import("./catalog-DuUudVCM.js"),[]),children:[{path:"/creation/constructor",component:()=>r(()=>import("./template-ChkKQP0Y.js"),[])},{path:"/creation/module",component:()=>r(()=>import("./template-C7roujvv.js"),[])},{path:"/creation/revealing-module",component:()=>r(()=>import("./template-LDM8Y0XB.js"),[])},{path:"/creation/singleton",component:()=>r(()=>import("./template-BmxSVm93.js"),[])},{path:"/creation/prototype",component:()=>r(()=>import("./template-DSQYfC5l.js"),[])},{path:"/creation/factory",component:()=>r(()=>import("./template-Dgrn_5dF.js"),[])},{path:"/creation/abstract-factory",component:()=>r(()=>import("./template-HxBCA7lu.js"),[])},{path:"/structure/facade",component:()=>r(()=>import("./template-BvUrTacS.js"),[])},{path:"/structure/mixin",component:()=>r(()=>import("./template-CVm66qo2.js"),[])},{path:"/structure/decorator",component:()=>r(()=>import("./template-AVUEEASo.js"),[])},{path:"/structure/flyweight",component:()=>r(()=>import("./template-CrsM-EmJ.js"),[])},{path:"/behavior/observer",component:()=>r(()=>import("./template-A98wKBjc.js"),[])},{path:"/behavior/mediator",component:()=>r(()=>import("./template-BnSTc7A1.js"),[])},{path:"/behavior/command",component:()=>r(()=>import("./template-C3nkiUhT.js"),[])}]}],T=`<nav id="navbar">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/catalog">Catalog</a></li>
  </ul>
</nav>
<div id="router-view"></div>
`,v=new b(P);document.querySelector("#app").innerHTML=T;document.addEventListener("DOMContentLoaded",()=>{history.replaceState({},"",window.location.pathname),v.resolve().catch(s=>console.log(s))});document.addEventListener("click",s=>{const t=s.target;if(t instanceof HTMLElement){const e=t.getAttribute("href");e&&e.startsWith("/")&&(s.preventDefault(),v.navigate(e).catch(a=>console.log(a)))}});
