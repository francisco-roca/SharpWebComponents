class Dropdown extends HTMLElement {
  constructor() {
    super();

    const panelStyles = this.querySelector("[panel]").style; 
    const dropdownButton = this.querySelector("[actionable]");

    dropdownButton.addEventListener("focusout", () => panelStyles.display = "none");
    dropdownButton.addEventListener("click", () => {
      if(panelStyles.display == "block") {
        panelStyles.display = "none";
      } else {
        panelStyles.display = "block";
      }
    });
  }
}
customElements.define('dropdown-component', Dropdown);