import { cart } from "./db-cart";

window.addEventListener("DOMContentLoaded", () => {
	// ?HANDLING CART OPEN AND CLOSE
	const cartDialog = document.getElementById("cart");
	const cartOpenControl = document.getElementById("cart-open");
	const cartCloseControl = document.getElementById("cart-close");
  const checkoutButton = document.getElementById("checkout-button");

	cartOpenControl.addEventListener("click", (event) => {
		event.preventDefault();
		cartDialog.showModal();
		cart.updateCartUI(); // Update cart UI when opened
	});

	cartCloseControl.addEventListener("click", (event) => {
		event.preventDefault();
		cartDialog.close();
	});

  checkoutButton.addEventListener("click", () => {
    cartDialog.close();
  });

	// Make cart methods available globally for onclick handlers
	window.cart = cart;
});
