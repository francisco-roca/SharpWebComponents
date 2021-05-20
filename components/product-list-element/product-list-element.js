class ProductListElement extends HTMLDivElement {
  constructor() {
      super();
      this.querySelector("[remove-item-button]").addEventListener("click", () => this.parentElement.remove(this));

      /* 
      this.querySelector("counter-component").watchEvent("decrement", (x) => { return this.log(x); });
      this.querySelector("counter-component").increment();
        */
  }

  log(count) {
      if(count <= 0)
          this.parentElement.remove(this);
  }
}
  
customElements.define('product-list-element', ProductListElement, {extends: "div"});
  