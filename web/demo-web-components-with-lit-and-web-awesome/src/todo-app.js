import { LitElement, css, html } from 'lit';
import '@awesome.me/webawesome/dist/styles/themes/default.css';
import './components/todo-input.js';
import './components/todo-item.js';

export class TodoApp extends LitElement {
  static properties = {
    todos: { type: Array },
  };

  constructor() {
    super();
    this.todos = [
      { id: 1, text: 'Explore Web Awesome', checked: true },
      { id: 2, text: 'Build a kickass Todo App', checked: false },
    ];
  }

  static styles = css`  
    :host {
      display: block;
      max-width: 600px;
      margin: 2rem auto;
      font-family: var(--wa-font-sans);
      background: var(--wa-color-neutral-0);
      padding: 2rem;
      border-radius: var(--wa-border-radius-large);
      box-shadow: var(--wa-shadow-large);
    }
    h1 {
      text-align: center;
      color: var(--wa-color-primary-600);
      margin-top: 0;
      margin-bottom: 2rem;
    }
    .todo-list {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
    .empty-state {
        text-align: center;
        color: var(--wa-color-neutral-500);
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
      <h1>Web Awesome Todo</h1>
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
