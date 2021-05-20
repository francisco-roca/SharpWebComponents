class Tabs extends HTMLElement {
  constructor() {
    super();

    const headers = this.querySelectorAll("[tab-reference]");

    for(const header of Object.values(headers)) {
      header.addEventListener("click", () => this.selectTab(header.getAttribute("tab-reference")));
    }

    let defaultTab = this.getAttribute("tab-default");
    if(defaultTab == "") defaultTab = null;
    this.selectTab(defaultTab);
  }

  selectTab(selected = null) {
    const tabs = this.querySelectorAll("[tab-name]");
    if(selected == null) selected = tabs[0].getAttribute("tab-name");

    for(const tab of Object.values(tabs)) {
      tab.getAttribute("tab-name") == selected ? tab.removeAttribute("hidden") : tab.setAttribute("hidden", true);
    }
  }
}

customElements.define('tabs-component', Tabs);