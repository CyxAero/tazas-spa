// src/components/ProductCard.js
import { html } from "lit-html";
import { router } from "../scripts/router";

export const ProductCard = (props) => {
	const { id, name, price, image, onAddToCart } = props;

	const handleClick = (event) => {
		if (!event.target.closest(".add-to-cart-btn")) {
			event.preventDefault();
			// window.location.href = `/product/${id}`;
			router.navigateTo(`/product/${id}`);
		}
	};

	return html`
		<article
			class="product-card"
			data-product-id=${id}
			@click=${handleClick}
		>
			<div class="product-image-container">
				<picture>
          <img
            src=${image}
            alt=${name}
                    loading="lazy"
          />
        </picture>
				<button
					class="add-to-cart-btn btn"
					@click=${() => onAddToCart(id)}
				>
					ADD TO CART
				</button>
			</div>
			<div>
				<h3>${name}</h3>
				<p class="price">$${price.toFixed(2)}</p>
			</div>
		</article>
	`;
};
