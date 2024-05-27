export default class TodoModel {
    #data = [
        {
            title: "Task 1",
            task: [
                {
                    item: "Item 1",
                    checked: "false"
                },
                {
                    item: "Item 2",
                    checked: "false"
                },
                {
                    item: "Item 3",
                    checked: "false"
                }
            ]
        }
    ];

    constructor() {
        localStorage.setItem("todos", JSON.stringify(this.#data));
    }

    addTask(task) {
        this.#data.push(task);
        this.#updateLocalStorage();
    }
    deleteTask(index) {
        this.#data.splice(index, 1);
        this.#updateLocalStorage();
    }
    getTasks() {
        return JSON.parse(localStorage.getItem("todos"));
    }

    #updateLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.#data));
    }
}