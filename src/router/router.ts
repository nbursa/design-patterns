import NotFound from '../pages/not-found.html?raw';
import Sidebar from '../pages/sidebar.html?raw';

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
    window.addEventListener('resize', () => this.resolve());
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

  normalizePath = (path: string) => path.replace(/\/$/, '');

  async navigate(path: string) {
    window.location.hash = path;
    await this.resolve();
  }

  async resolve(): Promise<void> {
    const path = window.location.hash.slice(1) || '/';
    const route = this.routes.find((r) => r.path === path);

    const scriptImports: ScriptImportsMap = {
      constructor: () => import('../pages/constructor/index.ts'),
      module: () => import('../pages/module/index.ts'),
      'revealing-module': () => import('../pages/revealing-module/index.ts'),
      singleton: () => import('../pages/singleton/index.ts'),
      prototype: () => import('../pages/prototype/index.ts'),
      factory: () => import('../pages/factory/index.ts'),
      'abstract-factory': () => import('../pages/abstract-factory/index.ts'),
      facade: () => import('../pages/facade/index.ts'),
      mixin: () => import('../pages/mixin/index.ts'),
      decorator: () => import('../pages/decorator/index.ts'),
      flyweight: () => import('../pages/flyweight/index.ts'),
      observer: () => import('../pages/observer/index.ts'),
      mediator: () => import('../pages/mediator/index.ts'),
      command: () => import('../pages/command/index.ts'),
    };
    const routerView =
      (document.querySelector('#router-view') as HTMLElement) ||
      this.createRouterView();
    routerView.innerHTML = '';

    if (route) {
      try {
        const componentModule = await route.component();
        routerView.innerHTML = componentModule.default;
        this.renderSidebar();

        const lastSegment = path.split('/').pop() || '';
        const pageScriptImport = scriptImports[lastSegment];
        if (pageScriptImport) {
          const pageScript = await pageScriptImport();
          pageScript.default();
        }

        if ([`/`, `/catalog`].includes(route.path)) {
          routerView.removeAttribute('style');
        }
      } catch (error) {
        routerView.innerHTML = `Failed to load the component, ${error}`;
      }
    } else {
      routerView.innerHTML = NotFound;
    }
  }

  renderSidebar(): void {
    const path = window.location.hash.slice(1) || '/';
    const existingSidebar = document.querySelector('#sidebar');
    const existingToggleBtn = document.querySelector('#toggle');

    if (existingSidebar) {
      existingSidebar.parentNode?.removeChild(existingSidebar);
    }
    if (existingToggleBtn) {
      existingToggleBtn.parentNode?.removeChild(existingToggleBtn);
    }
    if (!['/', '/catalog'].includes(path) && !existingSidebar) {
      const sidebar = document.createElement('nav');
      sidebar.id = 'sidebar';
      sidebar.innerHTML = Sidebar;
      const routerView = document.querySelector('#router-view') as HTMLElement;
      if (routerView?.firstChild) {
        routerView.insertBefore(sidebar, routerView.firstChild);
      } else {
        routerView?.appendChild(sidebar);
      }
      routerView.style.left = '0';
      routerView.style.width = '100vw';
      if (!existingToggleBtn) {
        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'toggle';
        if (window.innerWidth >= 768) this.toggleSidebar();
        toggleBtn.innerHTML = sidebar.classList.contains('active')
          ? `<img src='/arrow.svg' alt='arrow' />`
          : `<img src='/arrow.svg' alt='arrow' class='rotate' />`;
        toggleBtn.addEventListener('click', () => {
          this.toggleSidebar();
        });

        sidebar.insertBefore(toggleBtn, sidebar.firstChild);
      }
      // this.addSidebarLinkEventListeners();
    }
  }

  addSidebarLinkEventListeners(): void {
    const sidebarLinks = document.querySelectorAll('#sidebar a');
    sidebarLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.toggleSidebar();
      });
    });
  }

  toggleSidebar(): void {
    const sidebar = document.querySelector('#sidebar');
    const routerView = document.querySelector('#router-view') as HTMLElement;
    const toggleBtn = document.querySelector('#toggle') as HTMLButtonElement;

    if (sidebar) {
      sidebar.classList.toggle('active');

      if (sidebar.classList.contains('active')) {
        routerView.style.left = '300px';
        routerView.style.width = 'calc(100vw - 300px)';

        if (toggleBtn) {
          toggleBtn.innerHTML = `<img src='/arrow.svg' alt='arrow' />`;
        }
      } else {
        routerView.style.left = '0';
        routerView.style.width = '100vw';

        if (toggleBtn) {
          toggleBtn.innerHTML = `<img src='/arrow.svg' alt='arrow' class='rotate' />`;
        }
      }
    }
  }

  createRouterView(): HTMLElement {
    const el = document.createElement('div');
    el.id = 'router-view';
    document.querySelector('#app')?.appendChild(el);
    return el;
  }
}
