import Dexie from "dexie";
import { pushNotify } from "./toast";

class TazasDatabase extends Dexie {
	constructor() {
		super("TazasDB");
		this.version(1).stores({
			cartItems: "++dbId, productId, name, price, quantity, image",
		});
	}
}

const db = new TazasDatabase();

export const cart = {
	async addItem(product, quantity = 1) {
		try {
			const existingItem = await db.cartItems
				.where("productId")
				.equals(String(product.id))
				.first();

			if (existingItem) {
				await db.cartItems.update(existingItem.dbId, {
					quantity: existingItem.quantity + quantity,
				});
				pushNotify(
					"PRODUCT IS ALREADY IN CART",
					`Increased quantity of ${product.name} in cart.`,
					"info"
				);
			} else {
				await db.cartItems.add({
					productId: String(product.id),
					name: product.name,
					price: product.price,
					quantity: quantity,
					image: product.images[0],
				});
				pushNotify("PRODUCT ADDED TO CART", product.name, "success");
			}
			await this.updateCartUI();
		} catch (error) {
			console.error("Error adding item to cart:", error);
			pushNotify(
				"ERROR ADDING ITEM TO CART",
				product.name,
				"error",
				"bottom right"
			);
		}
	},

	async removeItem(dbId) {
		const product = await db.cartItems.get(dbId);
		try {
			await db.cartItems.delete(dbId);
			await this.updateCartUI();
		} catch (error) {
			console.error("Error removing item:", error);
			pushNotify("ERROR REMOVING ITEM", product.name, "error", "bottom left");
		}
	},

	async updateQuantity(dbId, newQuantity) {
		try {
			if (newQuantity >= 1) {
				await db.cartItems.update(dbId, { quantity: newQuantity });
			}
			await this.updateCartUI();
		} catch (error) {
			console.error("Error updating quantity:", error);
		}
	},

  async updateCartUI() {
    console.log(`Running updateCartUI() function...`);
		const items = await db.cartItems.toArray();
		const cartItemsContainer = document.querySelector("#cart .cart-items");
		const totalElement = document.querySelector("#cart .cart-footer #total");

    if (!cartItemsContainer) return;

    if (items.length > 0) {
      cartItemsContainer.innerHTML = items
        .map(
          (item) => `
        <section class="cart-item" data-id="${item.dbId}">
          <section>
            <img src="${item.image}" alt="${item.name}" loading="lazy" />
            <section>
              <div class="title-and-price">
                <span class="title">${item.name}</span>
                <span class="price">$${item.price}</span>
              </div>
              <div class="amount-actions">
                <i class="ph ph-minus-circle action" onclick="cart.updateQuantity(${
                  item.dbId
                }, ${item.quantity - 1})"></i>
                <span class="amount">${item.quantity}</span>
                <i class="ph ph-plus-circle action" onclick="cart.updateQuantity(${
                  item.dbId
                }, ${item.quantity + 1})"></i>
              </div>
            </section>
          </section>
          <span class="remove-item" onclick="cart.removeItem(${
            item.dbId
          })">REMOVE</span>
        </section>
      `
        )
        .join("");
    } else {
      cartItemsContainer.innerHTML = `
        <section class="empty-state">
          <p>You haven't added any items to your cart yet.</p>
        </section>
      `;
    }


		const total = items.reduce(
			(sum, item) => sum + item.price * item.quantity,
			0
		);
		totalElement.textContent = `$${total.toFixed(2)}`;
	},
};
