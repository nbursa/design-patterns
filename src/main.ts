import { Router } from "./router/router";
import Main from "./pages/main.html?raw";
import { routes } from "./router/routes";
import "./styles/index.scss";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = Main;

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
