import { html } from "lit";
import "../styles/home.css";
import { router } from "../scripts/router";

export const Home = () => {
	return html`
		<section id="home">
			<h1>tazas</h1>
			<section class="hero">
				<h2>QUALITY CUPS WITH MODERN AND MINIMAL ARTWORK</h2>
				<p>
					Explore our beautiful cups with more to come as the world keeps going
					and more of them keep coming, aren&apos;t you happy that there's more
					to be said and more to be done?
				</p>
				<button
					class="btn animated"
					@click=${(e) => {
						e.preventDefault();
						router.navigateTo("/shop");
					}}
				>
					EXPLORE CUPS
				</button>
			</section>
		</section>
	`;
};
