class TodoList {
    constructor(root, list = []){
        this.todos = list;
        this.root = root;
    }
    add(text){
        let todo = new Todo(text);
        this.todos.push(todo);
        return this.todos.length;
    }
    delete(id){
        let index = this.todos.findIndex((todo) => todo.id === id);
        this.todos.splice(index, 1);
        return this.todos.length;
    }
    // Multiple Todos
    createUi(){
        this.todos.forEach(todo  => {
            this.root.append(todo.createUi());
        });
    }
};

class Todo {
    constructor(text){
        this.text = text;
        this.isDone = false;
        this.id = `id-${Date.now()}`;
    }
    handleCheck(){
        this.isDone = !this.isDone;
    }
    createUi(){
        let li = document.createElement('li');
        let input = document.createElement('input');
        input.type = "checkbox";
        input.checked = this.isDone;
        input.addEventListener('click', this.handleCheck);
        let p = document.createElement('p');
        p.innerText = this.text;
        let span = document.createElement('span');
        span.innerText = "❌";
        span.addEventListener("click", handleCheck);
        li.append(input, p, span);
        return li;
   }
};

let myTodo = new TodoList(document.querySelector(".todos"));

myTodo.add 
