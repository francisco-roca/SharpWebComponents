class List extends HTMLElement {
    constructor() {
        super();

        this.data = {
            items: []
        };
        for(const el of this.children) {
            this.data.items.push(el);
        }
    }
  
    add(element) {
        this.data.items.push(element);
        this.appendChild(element.cloneNode(true));
    }

    remove(element) {
        this.removeByValue(element);
    } 

    removeByValue(element) {
        for(var i = 0; i < this.data.items.length; i++){ 
            if (this.data.items[i] === element) { 
                this.data.items.splice(i, 1); 
                this.removeChild(this.children[i]);
                break;
            }
        }
    }
}
  
customElements.define('list-component', List);
  