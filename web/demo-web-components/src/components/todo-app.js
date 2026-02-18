import './todo-input.js';
import './todo-item.js';

export class TodoApp extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.todos = [
            { id: 1, text: 'Learn Web Components', checked: true },
            { id: 2, text: 'Build a Todo App', checked: false }
        ];
    }

    connectedCallback() {
        this.render();
    }

    addTodo(text) {
        const newTodo = {
            id: Date.now(),
            text,
            checked: false
        };
        this.todos = [...this.todos, newTodo];
        this.render();
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        );
        this.render();
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          max-width: 500px;
          margin: 0 auto;
          font-family: sans-serif;
          background: #f9f9f9;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        h1 {
          text-align: center;
          color: #333;
        }
        .todo-list {
          margin-top: 20px;
        }
        .empty-state {
            text-align: center;
            color: #888;
            margin-top: 20px;
        }
      </style>
      <h1>Web Components Todo</h1>
      <todo-input></todo-input>
      <div class="todo-list">
        ${this.todos.length === 0 ? '<div class="empty-state">No tasks yet! Add one above.</div>' : ''}
      </div>
    `;

        const todoList = this.shadowRoot.querySelector('.todo-list');

        // Efficiently render list items without full re-render of list container if possible, 
        // but for simplicity in this demo, we re-create the list.
        // Ideally, we would use a diffing algorithm or a library like lit-html, 
        // but here we stick to vanilla JS as requested.

        // Clear previous items if not empty state
        if (this.todos.length > 0) {
            todoList.innerHTML = '';
            this.todos.forEach(todo => {
                const item = document.createElement('todo-item');
                item.setAttribute('text', todo.text);
                if (todo.checked) {
                    item.setAttribute('checked', '');
                }

                item.addEventListener('toggle', () => this.toggleTodo(todo.id));
                item.addEventListener('delete', () => this.deleteTodo(todo.id));

                todoList.appendChild(item);
            });
        }

        // Event listener for adding todos
        const input = this.shadowRoot.querySelector('todo-input');
        // Remove old listener if any (though in this full render approach it's a new element)
        input.addEventListener('add-todo', (e) => this.addTodo(e.detail.text));
    }
}

customElements.define('todo-app', TodoApp);
