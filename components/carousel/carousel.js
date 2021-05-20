class Carousel extends HTMLElement {
    constructor() {
      super();
      this.selected = 0;
      this.element = this.children[0];
  
      this.element.querySelector("[next-button]").addEventListener("click", () => this.next());
      this.element.querySelector("[previous-button]").addEventListener("click", () => this.previous());
    }
  
    next() {
      this.selected++;
      this.toggleImages();
    }
  
    previous() {
      this.selected--;
      this.toggleImages();
    }
  
    toggleImages() {
        const images = this.getCarouselImages();
        this.selected = Math.max(0, Math.min(this.selected, images.length - 1));
        for(const [key, image] of Object.entries(images)) {
            this.selected == key ? image.classList.remove("d-none") : image.classList.add("d-none");
        }
    }
  
    getCarouselImages() {
      return this.element.querySelectorAll("[carousel-img]");
    }
}
  
customElements.define('carousel-component', Carousel);
  