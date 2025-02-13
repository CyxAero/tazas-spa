// src/pages/Shop.js
import { html } from "lit-html";
import { products } from "../data/products.js";
import "../styles/shop.css"; // Import page-specific styles
import { ProductCard } from "../components/ProductCard.js";
import { cart } from "../scripts/db-cart.js";

export const Shop = () => {
	const handleAddToCart = (productId) => {
    const clickedProduct = products.find(product => product.id === productId);
    cart.addItem(clickedProduct);
	};

	return html`
		<section id="shop">
			<h1>shop</h1>
			<div class="product-grid">
				${products.map((product) =>
					ProductCard({
						id: product.id,
						name: product.name,
						price: product.price,
						image: product.images[0],
						onAddToCart: handleAddToCart,
					})
				)}
			</div>
		</section>
	`;
};
