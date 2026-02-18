import { LitElement, css, html } from 'lit';
import '@shoelace-style/shoelace/dist/themes/light.css';
import '@shoelace-style/shoelace/dist/themes/dark.css';
import './components/todo-input.js';
import './components/todo-item.js';
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';

// Set the base path to the folder you copied Shoelace's assets to.
// In a Vite build, this is usually node_modules, but for assets to work in dev mode 
// without copying, we can point to the CDN or rely on Vite's handling if configured.
// For simplicity in this demo without extra vite config, we'll try the CDN for icons if local fails,
// or just hope Vite resolves the assets correctly from node_modules.
// Actually, with Shoelace 2.x and Vite, we might need a vite plugin or copy assets.
// Let's try setting base path to unpkg for icons to be safe and simple:
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.12.0/dist/');

export class TodoApp extends LitElement {
    static properties = {
        todos: { type: Array },
    };

    constructor() {
        super();
        this.todos = [
            { id: 1, text: 'Explore Shoelace', checked: true },
            { id: 2, text: 'Build a great Todo App', checked: false },
        ];
    }

    static styles = css`
    :host {
      display: block;
      max-width: 600px;
      margin: 2rem auto;
      font-family: var(--sl-font-sans);
      background: var(--sl-color-neutral-0);
      padding: 2rem;
      border-radius: var(--sl-border-radius-large);
      box-shadow: var(--sl-shadow-large);
    }
    h1 {
      text-align: center;
      color: var(--sl-color-primary-600);
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
        color: var(--sl-color-neutral-500);
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
      <h1>Shoelace Todo</h1>
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
