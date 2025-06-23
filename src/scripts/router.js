// src/router.js
import { render } from "lit-html";
import { Home } from "../pages/Home";
import { Shop } from "../pages/Shop";
import { About } from "../pages/About";
import { Product } from "../pages/Product";
import { NotFound } from "../pages/NotFound";

const routes = {
	"/": Home,
	"/shop": Shop,
	"/about": About,
  "/product/:id": Product,
  "/404": NotFound,
};

export const router = {
	init() {
		// Handle initial page load
		this.handleRoute();

		// Handle navigation clicks
		document.addEventListener("click", (e) => {
			if (e.target.matches("[data-link]")) {
				e.preventDefault();
				const path = e.target.getAttribute("href");
				this.navigateTo(path);
			}
		});

		// Handle browser back/forward
		window.addEventListener("popstate", () => this.handleRoute());
	},

	navigateTo(path) {
		window.history.pushState({}, "", path);
		this.handleRoute();
	},

	handleRoute() {
		// const path = window.location.pathname;
		// const page = routes[path] || null;

		// render(page(), document.getElementById("app"));

		const path = window.location.pathname;

		// Handle dynamic routes
		if (path.startsWith("/product/")) {
			const id = path.split("/product/")[1];
			render(Product({ id }), document.getElementById("app"));
			return;
		}

		// Handle static routes
		// const page = routes[path] || null;
		const page = routes[path] ? routes[path] : '/404';
		if (page) {
			render(page(), document.getElementById("app"));
		}
	},
};
