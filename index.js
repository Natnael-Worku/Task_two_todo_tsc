"use strict";
const tasks = [];
const add_button = document.querySelector(".add");
const tasks_display = document.querySelector(".tasks");
const edit_button = document.querySelectorAll(".edit");
const delete_button = document.querySelectorAll(".delete");
const display_tasks = () => {
    if (tasks_display) {
        tasks_display.innerHTML = "";
    }
    tasks.forEach((item, index) => {
        var _a;
        const task_item = document.createElement("div");
        task_item.classList.add("task_item");
        task_item.innerHTML = `
              <div class = " list-item">
              <div class="name_of_task">${item}</div>
              <button class="edit btn" data-index="${index}"> edit</button>
              <button class="delete btn" data-index="${index}">delete</button>
              </div>
          `;
        tasks_display === null || tasks_display === void 0 ? void 0 : tasks_display.appendChild(task_item);
        (_a = task_item === null || task_item === void 0 ? void 0 : task_item.querySelector(".delete")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (Event) => {
            const target = Event.target;
            const index = Number(target.dataset.index);
            tasks.splice(index, 1);
            display_tasks();
        });
    });
    const edit_buttons = document.querySelectorAll(".edit");
    edit_buttons.forEach((item, index, array) => {
        item.addEventListener("click", (Event) => {
            const input_field = document.querySelector("input");
            if (input_field === null || input_field === void 0 ? void 0 : input_field.value) {
                alert("can not edit while input field has content");
                return;
            }
            const target = Event.target;
            const index = Number(target.dataset.index);
            if (input_field)
                input_field.value = tasks[index];
            tasks.splice(index, 1);
            display_tasks();
            input_field === null || input_field === void 0 ? void 0 : input_field.focus();
        });
    });
};
add_button.addEventListener("click", (Event) => {
    const task_item_name = document.querySelector("input");
    if (!task_item_name.value) {
        alert("input field needs to have value to enter task");
        return;
    }
    tasks.push(task_item_name.value);
    display_tasks();
    task_item_name.value = "";
});
document.addEventListener("keydown", (Event) => {
    if (Event.key === "Enter") {
        const task_item_name = document.querySelector("input");
        if (!task_item_name.value) {
            alert("input field needs to have value to enter task");
            return;
        }
        tasks.push(task_item_name.value);
        display_tasks();
        task_item_name.value = "";
    }
});
