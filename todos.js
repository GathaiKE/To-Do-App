const todos = []
const todos_container = document.querySelector(".todos");
const submit_btn = document.getElementById("btn");
const input_ele = document.getElementById("todo-input")
const deleteAll =document.getElementById(".delete-all")

const createTodo = (todo) => {
      const todo_container = document.createElement("div");
      todo_container.classList.add("todo");

      const todo_span = document.createElement("span");
      todo_span.innerText = todo.title;

      const check_complete = document.createElement("input");
      check_complete.setAttribute("type", "checkbox");

      const delete_btn = document.createElement("button");
      delete_btn.id = todo.id;
      delete_btn.innerHTML = '<i class="fas fa-trash-alt"></i>'
      todo_container.append(todo_span, check_complete, delete_btn)

      return todo_container
}

const appendTodos = (todos) => {
      todos.map((todo) => {
            todos_container.appendChild(createTodo(todo))
      })
}
appendTodos(todos)

const handleSubmit = () => {

      if (input_ele.value.trim() !== "") {
            const new_todo = { id: new Date().toISOString(), title: input_ele.value, is_complete: false }
            todos.unshift(new_todo)
            todos_container.innerHTML = ""
            input_ele.value = ""

            appendTodos(todos)
      }
}
submit_btn.addEventListener("click", handleSubmit)

todos_container.addEventListener("click", function (e) {
      const item = e.target;
      if (item.matches("span")) {
            todos_container.removeChild(item.parentNode.parentElement)
      }
})

