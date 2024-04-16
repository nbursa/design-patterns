export const routes = [
  { path: "/home", component: () => import("../pages/home.html?raw") },
  {
    path: "/catalog",
    component: () => import("../pages/catalog.html?raw"),
    children: [
      {
        path: "/creation/constructor",
        component: () => import("../pages/constructor/template.html?raw"),
      },
      {
        path: "/creation/module",
        component: () => import("../pages/module/template.html?raw"),
      },
      {
        path: "/creation/revealing-module",
        component: () => import("../pages/revealing-module/template.html?raw"),
      },
      {
        path: "/creation/singleton",
        component: () => import("../pages/singleton/template.html?raw"),
      },
      {
        path: "/creation/prototype",
        component: () => import("../pages/prototype/template.html?raw"),
      },
      {
        path: "/creation/factory",
        component: () => import("../pages/factory/template.html?raw"),
      },
      {
        path: "/creation/abstract-factory",
        component: () => import("../pages/abstract-factory/template.html?raw"),
      },
      {
        path: "/structure/facade",
        component: () => import("../pages/facade/template.html?raw"),
      },
      {
        path: "/structure/mixin",
        component: () => import("../pages/mixin/template.html?raw"),
      },
      {
        path: "/structure/decorator",
        component: () => import("../pages/decorator/template.html?raw"),
      },
      {
        path: "/structure/flyweight",
        component: () => import("../pages/flyweight/template.html?raw"),
      },
      {
        path: "/behavior/observer",
        component: () => import("../pages/observer/template.html?raw"),
      },
      {
        path: "/behavior/mediator",
        component: () => import("../pages/mediator/template.html?raw"),
      },
      {
        path: "/behavior/command",
        component: () => import("../pages/command/template.html?raw"),
      },
    ],
  },
];
