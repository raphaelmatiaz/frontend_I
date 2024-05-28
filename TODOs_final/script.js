import TodoModel from "./TodoModel.js";

window.onload = async () => {

    //SERVICE WORKER
    if ("serviceWorker" in navigator) {
        try {
            await navigator.serviceWorker.register("serviceWorker.js");
        } catch (error) {
            console.error("Error registering Service Worker:", error);
        }
    } else {
        alert("service worker not supported, use a chromium based browser.");
    }
    
    const model = new TodoModel();
    let currentTaskIndex;

    // O teu código aqui...
    const listsContainer = document.querySelector("#lists-container");
    const todoHeader = document.querySelector("todo-header");
    todoHeader.addEventListener("clicked", () => {
        listsContainer.style.transform = "translateX(0)";
        todoHeader.state = "tasks";
    });
    todoHeader.state = "tasks";

    const todoDialog = document.querySelector("todo-dialog");
    todoDialog.addEventListener("confirm", (ev) => {
        if(todoHeader.state === "tasks") {
            model.addTask({
                title: ev.detail.value,
                items: []
            });
            buildTasksList(model.getTasks());
        } else {
            model.addItem(currentTaskIndex, {
                title: ev.detail.value,
                checked: "false"
            });

            buildItemsList(currentTaskIndex, model.getItems(currentTaskIndex));
        }
    })
    const footer = document.querySelector("footer");
    footer.onclick = () => {
        const val = todoHeader.state === "tasks" ? "Add Task" : "Add Item";
        todoDialog.open(val);
    };

    const buildTasksList = (tasks) => {
        const ul = document.querySelector("#tasks");
        ul.innerHTML = "";

        if(tasks.length === 0) {
            ul.innerHTML = "<li class='empty'>No tasks yet</li>";
            return;
        }
        tasks.forEach((task, index) => {
            const li = document.createElement("li");
            const taskItem = new TaskItem();
            taskItem.title = task.title;
            taskItem.addEventListener("clicked", () => {
                listsContainer.style.transform = "translateX(-100%)";
                todoHeader.state = "items";
                todoHeader.taskName = taskItem.title;
                const itemsData = model.getItems(index);
                buildItemsList(index, itemsData);
                currentTaskIndex = index;
            });
            taskItem.addEventListener("delete", () => {
                model.deleteTask(index);
                buildTasksList(model.getTasks());
            });
            li.append(taskItem);
            ul.append(li);
        });
    }
    const buildItemsList = (taskID, items) => {

        const ul = document.querySelector("#items");
        ul.innerHTML = "";
        if(items.length === 0) {
            ul.innerHTML = "<li class='empty'>No items yet</li>";
            return;
        }
        items.forEach((item, index) => {
            const li = document.createElement("li");
            const checkItem = new CheckItem();
            
            checkItem.title = item.title;
            checkItem.checked = item.checked;
            checkItem.addEventListener("checked", (ev) => {
                model.updateItem(taskID, index, ev.detail.checked);
                buildTasksList(model.getTasks());
            });
            checkItem.addEventListener("delete", () => {

                model.deleteItem(currentTaskIndex, index);
                buildItemsList(currentTaskIndex, model.getItems(currentTaskIndex));
                console.log("delete item");
            });
            li.append(checkItem);
            ul.append(li);
        });
    }
    buildTasksList(model.getTasks());


    document.body.style.opacity = 1;
}