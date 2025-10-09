class TodoForm {

    constructor(id, title, completed) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.createdAt = new Date();
    }

    toggleCompleted() {
        this.completed = !this.completed;
    }

    updateTitle(newTitle) {

        if (!newTitle || newTitle.trim().length < 1) {
            throw new Error("Title cannot be empty");
        }
        this.title = newTitle;
    }
}

class TodoList {

    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(new TodoForm(...todo));
    }

    remove(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}

const todo1 = new TodoForm(1, "Learn JavaScript", false);
console.log(todo1);

todo1.toggleCompleted();
console.log(todo1);