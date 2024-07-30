const tasks: string[] = [];
// the button that we will use to add the tasks to the todo lists
const add_button = document.querySelector(".add") as HTMLButtonElement;
//  div element to display the tasks we have
const tasks_display = document.querySelector(".tasks");
//  a button we use to edit the task at hand
const edit_button= document.querySelectorAll(".edit") ;
//  button we use to delete task at hand
const delete_button= document.querySelectorAll(".delete");


/*  general function used to display all available tasks
    it also attaches edit and delete event listner for each of
    the task items created
*/
const display_tasks = ():void => {
    if (tasks_display){

        tasks_display.innerHTML = "";
    }
    
    tasks.forEach((item, index) => {
      const task_item = document.createElement("div");
      task_item.classList.add("task_item");
      task_item.innerHTML = `
              <div class = " list-item">
              <div class="name_of_task">${item}</div>
              <button class="edit btn" data-index="${index}"> edit</button>
              <button class="delete btn" data-index="${index}">delete</button>
              </div>
          `;
      tasks_display?.appendChild(task_item);
  
      // Attach the delete button event listener
      task_item?.querySelector(".delete")?.addEventListener("click", (Event) => {
        const target = Event.target as HTMLElement;
        const index = Number(target.dataset.index);
        tasks.splice(index, 1);
        display_tasks();
      });
    });
  
    // Attach the edit button event listener
    const edit_buttons = document.querySelectorAll(".edit");
    edit_buttons.forEach((item, index, array) => {
      item.addEventListener("click", (Event) => {
        const input_field = document.querySelector("input");
        if (input_field?.value){
          alert("can not edit while input field has content")
          return
        }
        const target = Event.target as HTMLElement;

        const index = Number(target.dataset.index);
        if (input_field)
        input_field.value = tasks[index];
        tasks.splice(index, 1);
        display_tasks();
        input_field?.focus();
      });
    });
  };
  
  // adds the task Items from the input field to the tasks array
  
  add_button.addEventListener("click", (Event) => {
    const task_item_name = document.querySelector("input") as HTMLInputElement;
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
      const task_item_name = document.querySelector("input") as HTMLInputElement;
      if (!task_item_name.value) {
        alert("input field needs to have value to enter task");
        return;
      }
      tasks.push(task_item_name.value);
      display_tasks();
      task_item_name.value = "";
    }
  });
  