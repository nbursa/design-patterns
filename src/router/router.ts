import NotFound from "../pages/not-found.html?raw";
import Sidebar from "../pages/sidebar.html?raw";

type ScriptImportFunction = () => Promise<{
  default: () => void;
}>;

interface ScriptImportsMap {
  [key: string]: ScriptImportFunction;
}

export class Router {
  routes: {
    path: string;
    component: () => Promise<{ default: string }>;
    children?: {
      path: string;
      component: () => Promise<{ default: string }>;
    }[];
  }[] = [];

  constructor(
    routes: {
      path: string;
      component: () => Promise<{ default: string }>;
      children?: {
        path: string;
        component: () => Promise<{ default: string }>;
      }[];
    }[]
  ) {
    this.initRoutes(routes);
  }

  initRoutes(
    routes: {
      path: string;
      component: () => Promise<{ default: string }>;
      children?: {
        path: string;
        component: () => Promise<{ default: string }>;
      }[];
    }[]
  ): void {
    routes.forEach((route) => {
      this.addRoute(route.path, route.component);

      route.children?.forEach((child) => {
        this.addRoute(`${route.path}${child.path}`, child.component);
      });
    });
  }

  addRoute(path: string, component: () => Promise<{ default: string }>): void {
    if (!this.routes.some((route) => route.path === path)) {
      this.routes.push({ path, component });
    }
  }

  async navigate(path: string) {
    window.history.pushState({}, "", path);
    await this.resolve();
  }

  async resolve(): Promise<void> {
    const path = window.location.pathname;
    const route = this.routes.find((route) => route.path.startsWith(path));

    const scriptImports: ScriptImportsMap = {
      constructor: () => import("../pages/constructor/index.ts"),
      module: () => import("../pages/module/index.ts"),
      "revealing-module": () => import("../pages/revealing-module/index.ts"),
      singleton: () => import("../pages/singleton/index.ts"),
      prototype: () => import("../pages/prototype/index.ts"),
      factory: () => import("../pages/factory/index.ts"),
      "abstract-factory": () => import("../pages/abstract-factory/index.ts"),
    };

    const el =
      document.querySelector("#router-view") || this.createRouterView();

    if (route) {
      try {
        const componentModule = await route.component();
        el.innerHTML = componentModule.default;
        this.renderSidebar();

        const lastSegment = path.split("/").pop();
        const pageScriptImport = scriptImports[lastSegment || ""];
        if (pageScriptImport) {
          const pageScript = await pageScriptImport();
          if (pageScript.default) {
            pageScript.default();
          }
        }
      } catch (error) {
        el.innerHTML = `Failed to load the component, ${error}`;
      }
    } else {
      el.innerHTML = NotFound;
    }
  }

  toggleSidebar(): void {
    const sidebar = document.querySelector("#sidebar");
    if (sidebar) {
      sidebar.classList.toggle("active");
    }
    const toggleBtn = document.querySelector("#toggle");
    if (toggleBtn) {
      toggleBtn.textContent = sidebar?.classList.contains("active") ? "<" : ">";
    }
  }

  renderSidebar(): void {
    const path = window.location.pathname;
    const existingSidebar = document.querySelector("#sidebar");
    const existingToggleBtn = document.querySelector("#toggle");

    if (existingSidebar) {
      existingSidebar.parentNode?.removeChild(existingSidebar);
    }
    if (existingToggleBtn) {
      existingToggleBtn.parentNode?.removeChild(existingToggleBtn);
    }

    if (!["/", "/catalog"].includes(path) && !existingSidebar) {
      const sidebar = document.createElement("nav");
      sidebar.id = "sidebar";
      sidebar.innerHTML = Sidebar;
      const routerView = document.querySelector("#router-view");
      if (routerView?.firstChild) {
        routerView.insertBefore(sidebar, routerView.firstChild);
      } else {
        routerView?.appendChild(sidebar);
      }
      if (!existingToggleBtn) {
        const toggleBtn = document.createElement("button");
        toggleBtn.id = "toggle";
        toggleBtn.textContent = sidebar.classList.contains("active")
          ? "<"
          : ">";
        toggleBtn.addEventListener("click", () => {
          this.toggleSidebar();
        });

        sidebar.insertBefore(toggleBtn, sidebar.firstChild);
      }
    }
  }

  createRouterView(): HTMLElement {
    const el = document.createElement("div");
    el.id = "router-view";
    document.querySelector("#app")?.appendChild(el);
    return el;
  }
}
