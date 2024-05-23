
// Task
const taskTemplate = document.createElement('template')
taskTemplate.innerHTML = 
`
<style>
    .button {
        position: relative;
        overflow: hidden;
        width: 500px;
        cursor: pointer;
        max-height: 84px;
        max-width: 100%;
    }

    .button:active .front label,
    .button:active .front .icon {
        transform: scale(0.9);
    }

    .front {
        position: absolute;
        display: flex;
        inset: 0;
        gap: 10px;
        justify-content: space-between;
        align-items: center;
        background-color: #dddddd;
        padding: 20px;
        transition: transform 0.3s ease-in-out;
    }

    label {
        font-size: 36px;
        line-height: 36px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        user-select: none;
    }

    .icon {

        width: 48px;
        height: 48px;
        min-width: 48px;
        min-height: 48px;
    }

    .back {
        display: flex;
        justify-content: flex-end;
        background-color: red;
        padding: 20px;
    }
</style>

<div class="button">
    <div class="front">
        <label>Examples</label>
        <div class="icon">
            <svg width="100%" height="100%" viewBox="0 0 24.342 24.342">
                <path
                    d="m12.164 3.25e-7 12.177 12.171-12.177 12.171-3.6954-3.6954 5.8624-5.8624h-14.331v-5.226h14.331l-5.8624-5.8624z" />
            </svg>
        </div>
    </div>

    <div class="back">
        <div class="icon">
            <svg width="100%" height="100%" viewBox="0 0 24.342 24.342" fill="white">
                <path
                    d="m12.171 8.4754-8.4754-8.4754-3.6954 3.6954 8.4754 8.4754-8.4754 8.4754 3.6954 3.6954 8.4754-8.4754 8.4754 8.4754 3.6954-3.6954-8.4754-8.4754 8.4754-8.4754-3.6954-3.6954z" />
            </svg>
        </div>
    </div>

</div>
`

class Task extends HTMLElement {

    view;
    #front;
    #touchX;
    #maxX = 84;
    #currentX;
    #callback;
    shadowRoot;
    constructor(cb) {
        super()

        this.shadowRoot = this.attachShadow({ mode: 'closed' });
        this.shadowRoot.appendChild(taskTemplate.content.cloneNode(true));


        this.#callback = cb;

        this.view = this.shadowRoot.querySelector(".button");
        this.#front = this.view.querySelector(".front");
        
        this.mouseUp = this.mouseUp.bind(this);
        this.mouseMove = this.mouseMove.bind(this);

        this.view.onmousedown = (ev) => this.#mouseDown(ev);
        this.view.onclick = () => {
            if(this.#currentX === 0) this.#callback("clicked");
        }
    }

    #mouseDown(ev) {

        this.#touchX = ev.x
        document.addEventListener("mouseup", this.mouseUp);
        document.addEventListener("mousemove", this.mouseMove);
        this.#front.style.transition = 'none';
        this.#currentX = 0;
    }

    mouseUp() {

        console.log(this);

        document.removeEventListener("mouseup", this.mouseUp);
        document.removeEventListener("mousemove", this.mouseMove);

        if(this.#currentX === this.#maxX) this.#callback("delete!");

        this.#front.style.transition = 'transform .15s ease-in-out';
        this.#front.style.transform = 'translateX(0)';

        this.#touchX = 0;
    }
    mouseMove(ev) {

        console.log(this);


        this.#currentX = this.#touchX - ev.x;
        if(this.#currentX < 0) this.#currentX = 0;
        if(this.#currentX > this.#maxX) this.#currentX = this.#maxX;

        this.#front.style.transform = `translateX(-${this.#currentX}px)`;
    }
}
customElements.define('todo-task', Task)


// Task view

const taskViewTemplate = document.createElement('template')
taskViewTemplate.innerHTML = 

`
<style>

h1 {
    font-size: 4rem;
    color: #FFFFFF;
}

header {
    display: flex;
    flex: 1;
    max-height: 80px;
    background-color: var(--color-primary);

    align-items: center;
    justify-content: flex-start;
    padding: var(--v-padding);
}

footer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    max-height: 80px;;

    background-color: var(--color-primary);
    background-image: url(/assets/icons/plus.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 3rem;
}

section {
    /* border: 3px solid blue; */
    min-width: 100%;
    min-height: 100%;
    position: static;

    scroll-snap-align: start;
}

#tasks-view {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    
    /* max-width: 800px;
    max-height: 1000px; */
    background-color: rgb(255, 255, 255);
}

#items-view > header  {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#lists-container {
    position: relative;
    display: block;
    flex: 1;
    overflow-y: scroll;
    /* border: 3px solid rgb(255, 47, 0); */
}


</style>

<section id="tasks-view">
    <header>
        <h1>TODOs</h1>
    </header>
    <div id="lists-container">
        <ul id="tasks">
    </div>
    <footer></footer>
</section>


`

class TaskView extends HTMLElement {
    
    shadowRoot;
    constructor() {
        super()

        this.shadowRoot = this.attachShadow({ mode: 'closed' });
        this.shadowRoot.appendChild(taskViewTemplate.content.cloneNode(true));
    }
}
customElements.define('task-view', TaskView)



