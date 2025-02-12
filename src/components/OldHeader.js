import { LitElement, html, css } from "lit";

class Header extends LitElement {
	static styles = css`
		header {
      border-block-end: 2px solid var(--black);
      background-color: var(--beige);

			> .wrapper {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-block: 1rem;
				width: min(95%, 1200px);
				margin-inline: auto;

				a {
					text-decoration: none;
					color: currentColor;
				}

				.logo {
					font-weight: 900;
					font-style: italic;
					font-size: 36px;
					font-family: var(--playfair);
				}

				> div {
					&,
					nav {
						display: flex;
						align-items: center;
						gap: 16px;
					}

					a {
						text-decoration-skip-ink: auto;
					}

					span {
						cursor: pointer;
						text-decoration: underline;
					}
				}
			}
		}
    section#cart {
      height: 100%;
      border-inline-start: 2px solid var(--black);
    }
	`;

	constructor() {
		super();
	}

	render() {
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
      <section id="cart" role="dialog">
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
	}
}

customElements.define("app-header", Header);
