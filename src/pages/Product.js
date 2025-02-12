// src/pages/Product.js
import { html } from "lit-html";
import "../styles/products.css";
import "../scripts/carousel.js";
import { products } from "../data/products";
import { router } from "../scripts/router";
import { cart } from "../scripts/db-cart.js";
import { reInitCarousel } from "../scripts/carousel.js";

export const Product = ({ id }) => {
	// Find product details
	const product = products.find((p) => p.id === id);

	if (!product) {
		return html`
			<div class="error-container">
				<h2>Product Not Found</h2>
				<a
					href="/"
					@click=${(e) => {
						e.preventDefault();
						router.navigate("/");
					}}
					>Return to Shop</a
				>
			</div>
		`;
	}

	// Initializing the embla carousel
	setTimeout(() => reInitCarousel(), 0);

	return html`
		<section id="product-details">
			<div class="product-header">
				<a href="/shop">
					<i class="ph-bold ph-arrow-left"></i>
					<span>GO BACK TO SHOP</span>
				</a>
				<h1>product details</h1>
			</div>
			<section class="product-content">
				<div class="embla">
					<div class="embla__container">
						${product.images.map(
							(image) => html`
								<div class="embla__slide">
									<img
										src=${image}
										alt=${product.name}
										loading="lazy"
									/>
								</div>
							`
						)}
					</div>
				</div>
				<div class="product-info">
					<h1>${product.name}</h1>
					<p class="price">$${product.price.toFixed(2)}</p>
					<p class="description">${product.description}</p>
					<button
						class="add-to-cart-btn btn animated"
						@click=${() => {
							console.log("Add to Cart clicked on:", product.name);
							cart.addItem(product);
						}}
					>
						ADD TO CART
					</button>
				</div>
			</section>
		</section>
	`;
};
