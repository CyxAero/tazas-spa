import { html } from "lit";

const Header = () => {
	return html`
		<header>
			<div class="wrapper">
				<!-- LOGO -->
				<a
					href="/"
					class="logo"
					data-link
					>tazas</a
				>
				<!-- NAVIGATION -->
				<div>
					<nav>
						<a
							href="/shop"
							data-link
							>SHOP</a
						>
						<a
							href="/about"
							data-link
							>ABOUT</a
						>
					</nav>
					<span>CART</span>
				</div>
			</div>
		</header>
		<section
			id="cart"
			role="dialog"
		>
			<section class="cart-item"></section>
			<section class="cart-item"></section>
			<section className="cart-footer">
				<div>
					<span>Total:</span>
					<span id="total">$61.99</span>
				</div>
				<button>Checkout</button>
			</section>
		</section>
	`;
};
