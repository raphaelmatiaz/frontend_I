const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `
<style>
    @import url("system.css");

</style>

<div>

    <h1>TODOs</h1>
    
</div>

`

class Header extends HTMLElement {
    constructor(){

    }
}
customElements.define('header-element', Header)

const addTemplate = document.createElement('template');
addTemplate.innerHTML = `
<style>

</style>

<div>

</div>

`

class AddToList extends HTMLElement {
    constructor() {

    }
}
customElements.define('add-to-list', AddToList)


const taskListTemplate = document.createElement('template');
taskListTemplate.innerHTML = `
<style>

</style>

<div>

</div>

`
class TaskItem extends HTMLElement {

    view;
    #front;
    #touchX;
    #maxX = 84;
    #currentX;
    #callback;
    items = [];

    constructor(cb) {
        this.#callback = cb;

        this.view = document.querySelector(".button");
        this.#front = this.view.querySelector(".front");
        
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseMove = this.mouseMove.bind(this);
        this.view.onmousedown = (ev) => this.#mouseDown(ev);
        this.view.onclick = () => {
            if(this.#currentX === 0) this.#callback("clicked");
        }
    }

    //Mouse behaviour

    #mouseDown(ev) {

        this.#touchX = ev.x
        document.addEventListener("mouseup", this.mouseUp);
        document.addEventListener("mousemove", this.mouseMove);
        this.#front.style.transition = 'none';
        this.#currentX = 0;
    }

    mouseUp() {
        document.removeEventListener("mouseup", this.mouseUp);
        document.removeEventListener("mousemove", this.mouseMove);

        if(this.#currentX === this.#maxX) this.#callback("delete!");

        this.#front.style.transition = 'transform .15s ease-in-out';
        this.#front.style.transform = 'translateX(0)';

        this.#touchX = 0;
    }
    mouseMove(ev) {
        this.#currentX = this.#touchX - ev.x;
        if(this.#currentX < 0) this.#currentX = 0;
        if(this.#currentX > this.#maxX) this.#currentX = this.#maxX;

        this.#front.style.transform = `translateX(-${this.#currentX}px)`;
    }
}