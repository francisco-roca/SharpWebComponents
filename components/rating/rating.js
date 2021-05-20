class Rating extends HTMLElement {
    constructor() {
      super();

      this.rateElements = this.querySelectorAll("[rate-element]");
      this.rate = 0;

      for(const [index, rateElement] of Object.entries(this.rateElements)) {
          rateElement.addEventListener("click", () => this.select(Number(index), rateElement));
      }
    }

    select(index, element) {
        element.src = this.getAttribute("selected-img");
        this.rate = index + 1;

        for(var i = 0; i < this.rateElements.length; i++) {
            this.rateElements[i].src = index >= i ? this.getAttribute("selected-img") : this.getAttribute("not-selected-img");
        }
    }
}
  
customElements.define('rating-component', Rating);
  