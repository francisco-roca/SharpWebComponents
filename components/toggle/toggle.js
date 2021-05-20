class ToggleButton extends HTMLButtonElement {
  constructor() {
    super();
    this.toggle = false;

    this.addEventListener("click", () => this.toggleView());      
    this.querySelector("[toggle-after").setAttribute("hidden", true);
  }

  toggleView() {
    if(!this.toggle == false) {
      this.querySelector("[toggle-before]").removeAttribute("hidden");
      this.querySelector("[toggle-after").setAttribute("hidden", true);
    } else {
      this.querySelector("[toggle-before").setAttribute("hidden", true);
      this.querySelector("[toggle-after]").removeAttribute("hidden");
    }
    this.toggle = !this.toggle;
  }
}
  
customElements.define('toggle-button', ToggleButton, {extends: 'button'});