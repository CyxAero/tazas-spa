import { html } from "lit";
import { router } from "../scripts/router";
import "../styles/not-found.css";

export const NotFound = () => {
	return html`
		<section id="not-found">
			<h1>404 - Page Not Found</h1>
			<p>The page you're looking for doesn't exist, sadly.</p>
			<button
				class="btn animated"
				@click=${() => router.navigateTo("/")}
			>
				RETURN HOME
			</button>
		</section>
	`;
};
