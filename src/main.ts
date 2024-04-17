import { Router, routes } from "./router";
import Main from "./pages/main.html?raw";
import "./styles/index.scss";

const router = new Router(routes);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = Main;

document.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    window.location.hash = '#/home';
  }
  router.resolve().catch((error) => console.log(error));
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLElement) {
    const href = target.getAttribute("href");
    if (href && href.startsWith("/")) {
      event.preventDefault();
      router.navigate(href).catch(error => console.log(error));
    }
  }
});
