import EmblaCarousel from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";

// TODO: FIX CAROUSEL

// const emblaNode = document.querySelector(".embla");
// const options = { loop: true };
// const plugins = [Autoplay()];
// const emblaApi = EmblaCarousel(emblaNode, options, plugins);

const initCarousel = () => {
  const emblaNode = document.querySelector(".embla");

  if (!emblaNode) return; // Terminate the function if the embla node doesn't exist yet

  const options = { loop: true };

  const plugins = [Autoplay()];

  const emblaApi = EmblaCarousel(emblaNode, options, plugins);
}

// Initialize after navigation
document.addEventListener("DOMContentLoaded", initCarousel);

// Re-initialize when route changes (since it's a SPA)
export const reInitCarousel = () => {
  setTimeout(initCarousel, 0);
};