class ImgExpandable extends HTMLImageElement {
  constructor() {
    super();
    
    this.expandedImg = document.createElement("img");
    this.expandedImg.width = this.width;
    this.expandedImg.height = this.height;
    this.expandedImg.src = this.src;
    this.expandedImg.setAttribute("img-expandable", true);
    this.expandedImg.setAttribute("hidden", true);
    this.insertAdjacentElement("afterend", this.expandedImg);

    this.addEventListener("click", () => this.expand(),{once:true});
  }

  expand() {
    this.expandedImg.removeAttribute("hidden");
    this.expandedImg.addEventListener("click", () => this.revert(),{once:true});
  }

  revert() {
    this.expandedImg.setAttribute("hidden", true);
    this.addEventListener("click", () => this.expand(),{once:true});
  }
}
  
customElements.define('img-expandable', ImgExpandable, {extends: "img"});
  