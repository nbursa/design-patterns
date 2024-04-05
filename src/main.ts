import { Router } from "./router";
import Main from "./pages/main.html?raw";
import "./styles/index.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = Main;

const routes = [
  { path: "/", component: () => import("./pages/home.html?raw") },
  {
    path: "/catalog",
    component: () => import("./pages/catalog.html?raw"),
    children: [
      {
        path: "/creation/constructor",
        component: () => import("./pages/constructor.html?raw"),
      },
      {
        path: "/creation/module",
        component: () => import("./pages/module.html?raw"),
      },
      {
        path: "/creation/revealing-module",
        component: () => import("./pages/revealing-module.html?raw"),
      },
      {
        path: "/creation/singleton",
        component: () => import("./pages/singleton.html?raw"),
      },
      {
        path: "/creation/prototype",
        component: () => import("./pages/prototype.html?raw"),
      },
      {
        path: "/creation/factory",
        component: () => import("./pages/factory.html?raw"),
      },
      {
        path: "/creation/abstract-factory",
        component: () => import("./pages/abstract-factory.html?raw"),
      },
    ],
  },
];

const router = new Router(routes);

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLElement) {
    const href = target.getAttribute("href");
    if (href && href.startsWith("/")) {
      event.preventDefault();
      router.navigate(href);
    }
  }
});

router.resolve();
