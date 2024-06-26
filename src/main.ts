import { Router, routes } from './router';
import Main from './pages/main.html?raw';
import './styles/index.scss';

const router = new Router(routes);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = Main;

document.addEventListener('DOMContentLoaded', () => {
  router
    .resolve()
    .catch((error) => console.error('Error resolving initial route:', error));
});

document.addEventListener('click', (event) => {
  const target = event.target;
  if (target instanceof HTMLElement) {
    const href = target.getAttribute('href');
    if (href && href.startsWith('/')) {
      event.preventDefault();
      router.navigate(href).catch((error) => console.log(error));
    }
  }
});
