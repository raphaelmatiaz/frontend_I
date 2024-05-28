export default class TodoModel {
    #tasks = [
    ];

    constructor() {
        if(!this.getTasks()) {
            localStorage.setItem("todos", JSON.stringify(this.#tasks));
        }
    }

    addTask(task) {
        this.#tasks.push(task);
        this.#updateLocalStorage();
    }
    deleteTask(index) {
        this.#tasks.splice(index, 1);
        this.#updateLocalStorage();
    }
    getTasks() {
        const tasks = JSON.parse(localStorage.getItem("todos"));
        if(tasks) this.#tasks = tasks;
        return this.#tasks;
    }

    addItem(taskIndex, item) {
        this.#tasks[taskIndex].items.push(item);
        this.#updateLocalStorage();
    }
    updateItem(taskIndex, itemIndex, value) {
        this.#tasks[taskIndex].items[itemIndex].checked = value + "";
        this.#updateLocalStorage();
    }
    deleteItem(taskIndex, index) {
        this.#tasks[taskIndex].items.splice(index, 1);
        this.#updateLocalStorage();
    }
    getItems(taskIndex) {
        return this.#tasks[taskIndex].items;
    }

    #updateLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.#tasks));
    }
}