let todos = [];

function addTodo() {
  const inputField = document.querySelector("input");
  const inputValue = inputField.value.trim();

  if (inputValue === "") return; // Prevent empty todos

  todos.push({ title: inputValue });

  inputField.value = ""; // Clear input after adding
  render();
}

function deleteFirstTodo() {
  if (todos.length > 0) {
    todos.shift();
    render();
  }
}

function deleteLastTodo() {
  if (todos.length > 0) {
    todos.pop();
    render();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

function createTodoComponent(todo, index) {
  const spanEle = document.createElement("span");
  spanEle.textContent = todo.title; // Use textContent for security

  const buttonEle = document.createElement("button");
  buttonEle.textContent = "Delete";
  buttonEle.onclick = () => deleteTodo(index); // Correctly reference the index

  const divEle = document.createElement("div");
  divEle.appendChild(spanEle);
  divEle.appendChild(buttonEle);

  return divEle;
}

function render() {
  const todosContainer = document.querySelector("#todos");
  todosContainer.innerHTML = "";

  todos.forEach((todo, index) => {
    const element = createTodoComponent(todo, index);
    todosContainer.appendChild(element);
  });
}
