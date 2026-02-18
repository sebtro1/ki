import { LitElement, css, html } from 'lit';
import './todo-input.js';
import './todo-item.js';

export class TodoApp extends LitElement {
    static properties = {
        todos: { type: Array },
    };

    constructor() {
        super();
        this.todos = [
            { id: 1, text: 'Learn Lit', checked: true },
            { id: 2, text: 'Build a Todo App with Lit', checked: false },
        ];
    }

    static styles = css`
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
  `;

    _addTodo(e) {
        const text = e.detail.text;
        const newTodo = {
            id: Date.now(),
            text,
            checked: false
        };
        this.todos = [...this.todos, newTodo];
    }

    _toggleTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { ...todo, checked: !todo.checked } : todo
        );
    }

    _deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    render() {
        return html`
      <h1>Lit Todo</h1>
      <todo-input @add-todo=${this._addTodo}></todo-input>
      <div class="todo-list">
        ${this.todos.length === 0
                ? html`<div class="empty-state">No tasks yet! Add one above.</div>`
                : this.todos.map(todo => html`
              <todo-item 
                .text=${todo.text} 
                .checked=${todo.checked}
                @toggle=${() => this._toggleTodo(todo.id)}
                @delete=${() => this._deleteTodo(todo.id)}
              ></todo-item>
            `)
            }
      </div>
    `;
    }
}

customElements.define('todo-app', TodoApp);
