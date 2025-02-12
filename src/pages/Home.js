import { html } from "lit";
import "../styles/home.css";

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
				<a
					href="/shop"
					class="nav btn animated"
					>EXPLORE CUPS</a
				>
			</section>
		</section>
	`;
};
