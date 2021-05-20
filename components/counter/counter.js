class Counter extends HTMLElement {
    constructor() {
        super();
        this.base();
        this.setup();
        this.update();
    }

    base() {
        this.componentEvents = {};
        this.data = {};
    }

    setup() {
        this.count = this.getAttribute("start");
        if(this.count == null || this.count == "") this.count = 0;
        this.min = this.getAttribute("min");
        if(this.min == null || this.min == "") this.min = 0;
        this.max = this.getAttribute("max");
        if(this.max == null || this.max == "") this.max = Infinity;

        this.querySelector("[increment]").addEventListener("click", () => this.increment());
        this.querySelector("[decrement]").addEventListener("click", () => this.decrement());
    }

    watchEvent(eventWatch, functionToCall) {
        if(this.componentEvents[eventWatch] == null) this.componentEvents[eventWatch] = [];
        this.componentEvents[eventWatch].push(functionToCall);
    }

    unwatchEvent(eventWatch, functionToCall) {
        const event = this.componentEvents[eventWatch];
        for(var i = 0; i < event.length; i++) {
            if(functionToCall == event[i]) {
                event.splice(i, 1);
            }
        }
    }

    fireEvent(eventFired, dataPassed = null) {
        if(this.componentEvents[eventFired] == null) return; 
        if(dataPassed == null) dataPassed = this.data;
        for(const fn of this.componentEvents[eventFired]) {
            fn(dataPassed);
        }
    }

    increment() {
        if(this.max > this.count) this.count++;
        this.update();
        this.fireEvent("increment", this.count);
    }

    decrement() {
        if(this.min < this.count) this.count--;
        this.update();
        this.fireEvent("decrement", this.count);
    }

    update() {
        this.querySelector("[value]").innerText = this.count;
    }
}
customElements.define('counter-component', Counter);