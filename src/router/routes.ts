export const routes = [
  { path: "/", component: () => import("../pages/home.html?raw") },
  {
    path: "/catalog",
    component: () => import("../pages/catalog.html?raw"),
    children: [
      {
        path: "/creation/constructor",
        component: () => import("../pages/constructor/constructor.html?raw"),
      },
      {
        path: "/creation/module",
        component: () => import("../pages/module/module.html?raw"),
      },
      {
        path: "/creation/revealing-module",
        component: () =>
          import("../pages/revealing-module/revealing-module.html?raw"),
      },
      {
        path: "/creation/singleton",
        component: () => import("../pages/singleton/singleton.html?raw"),
      },
      {
        path: "/creation/prototype",
        component: () => import("../pages/prototype/prototype.html?raw"),
      },
      {
        path: "/creation/factory",
        component: () => import("../pages/factory/factory.html?raw"),
      },
      {
        path: "/creation/abstract-factory",
        component: () =>
          import("../pages/abstract-factory/abstract-factory.html?raw"),
      },
    ],
  },
];
