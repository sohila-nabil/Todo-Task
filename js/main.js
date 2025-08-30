var data = [];
var counter = 0;
let todoContainer = document.querySelector(".todo-container");

function addTask() {
  var a = document.getElementById("taskInput");
  var task = a.value;
  if (task !== "" && task !== " ") {
    data.push({ name: task, done: false, id: data.length + 1 });
    a.value = "";
    b();
    console.log(data);
  }
}

function b() {
  sayDone();

  var ul = document.getElementById("taskList");
  ul.innerHTML = "";
  for (let j = 0; j < data.length; j++) {
    var li = document.createElement("li");
    li.className = data[j].done ? "done" : "";

    // Task text
    var span = document.createElement("span");
    span.textContent = data[j].name;

    // Buttons
    var toggleBtn = document.createElement("button");
    toggleBtn.textContent = "Toggle";
    toggleBtn.onclick = () => toggle(j);

    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTask(j);

    li.appendChild(span);
    li.appendChild(toggleBtn);
    li.appendChild(deleteBtn);
    ul.appendChild(li);
  }
}

function toggle(index) {
  //   if (data[index].done === false) {
  //     data[index].done = true;
  //   } else {
  //     data[index].done = false;
  //   }
  data[index].done = !data[index].done;
  b();
  console.log(data);
}

function deleteTask(i) {
  data.splice(i, 1);
  b();
  console.log(data);
}


function sayDone() {
  let statusEl = document.getElementById("statusMessage");
  if (!statusEl) {
    statusEl = document.createElement("p");
    statusEl.id = "statusMessage";
    todoContainer.appendChild(statusEl);
  }

  // Check if all tasks are done
  let allTrue = data.every((task) => task.done === true);

  if (allTrue && data.length > 0) {
    statusEl.textContent = "✅ All tasks are done!";
  } else {
    statusEl.textContent = ""; 
  }
}
