const form = document.querySelector(".js-to-do"),
  input = document.querySelector(".js-add-to-do"),
  list = document.querySelector(".js-list");

const TODOS_LS = "toDos";

let toDos = [];

function handleDelete(event) {
  const target = event.target;
  const li = target.parentElement;
  const ul = li.parentElement;
  const toDoId = li.id;
  ul.removeChile(li);

  toDos = toDos.filter(function(toDo) {
    return toDo.id !== parseInt(toDoId);
  });

  persistToDos();
}

function persistToDos() {
  const stringToDo = JSON.stringify(toDos);
  localStorage.setItem(TODOS_LS, stringToDo);
}

function saveToDo(text) {
  const toDoObject = {
    id: toDos.length + 1,
    value: text
  };
  toDos.push(toDoObject);
  persistToDos();
}

function addToDo(text) {
  const toDo = document.createElement("li");
  toDo.className = "toDo";
  toDo.id = toDos.length + 1;

  const delBtn = document.createElement("span");
  delBtn.innerText = "❌";
  delBtn.className = "toDo__button";
  delBtn.addEventListener("click", handleDelete);

  const label = document.createElement("label");
  label.innerHTML = text;
  toDo.appendChild(delBtn);
  toDo.appendChild(label);
  list.appendChild(toDo);

  saveToDo(text);
}

function onSubmit(event) {
  event.preventDefault();
  const value = input.value;
  input.value = "";
  addToDo(value);
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      addToDo(toDo.value);
    });
  }
}

function init() {
  loadToDos();
}

form.addEventListener("submit", onSubmit);

init();
