class Toast extends HTMLElement {
    constructor() {
        super();
        this.setAttribute("hidden", true);
        this.duration = this.getAttribute("duration");
        if(this.duration == null || this.duration == "") this.duration = 3000;
    }

    show() {
        this.removeAttribute("hidden");
        setTimeout(() => this.hide(), this.duration);
    }
    
    hide() {
        this.setAttribute("hidden", true);
    }
}
  
customElements.define('toast-component', Toast);
  