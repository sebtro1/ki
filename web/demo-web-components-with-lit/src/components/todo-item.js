import { LitElement, css, html } from 'lit';

export class TodoItem extends LitElement {
    static properties = {
        text: { type: String },
        checked: { type: Boolean },
    };

    constructor() {
        super();
        this.text = '';
        this.checked = false;
    }

    static styles = css`
    :host {
      display: block;
      margin-bottom: 8px;
      font-family: sans-serif;
    }
    .todo-item {
      display: flex;
      align-items: center;
      padding: 8px;
      background: #fff;
      border: 1px solid #ddd;
      border-radius: 4px;
      gap: 10px;
    }
    .text {
      flex: 1;
      text-decoration: none;
      color: #333;
    }
    .text.checked {
      text-decoration: line-through;
      color: #888;
    }
    button {
      border: none;
      padding: 4px 8px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 14px;
      color: white;
    }
    .delete-btn {
      background: #ff4444;
    }
    .delete-btn:hover {
      background: #cc0000;
    }
    .toggle-btn {
      background: #5bc0de;
    }
    .toggle-btn:hover {
      background: #46b8da;
    }
    .toggle-btn.checked {
      background: #f0ad4e;
    }
    .toggle-btn.checked:hover {
      background: #eea236;
    }
  `;

    _handleCheckboxChange(e) {
        this.dispatchEvent(new CustomEvent('toggle', {
            bubbles: true,
            composed: true,
            detail: { checked: e.target.checked }
        }));
    }

    _handleToggleClick() {
        this.dispatchEvent(new CustomEvent('toggle', {
            bubbles: true,
            composed: true,
            detail: { checked: !this.checked }
        }));
    }

    _handleDelete() {
        this.dispatchEvent(new CustomEvent('delete', {
            bubbles: true,
            composed: true
        }));
    }

    render() {
        return html`
      <div class="todo-item">
        <input 
          type="checkbox" 
          .checked=${this.checked} 
          @change=${this._handleCheckboxChange}
        >
        <span class="text ${this.checked ? 'checked' : ''}">${this.text}</span>
        <button 
          type="button" 
          class="toggle-btn ${this.checked ? 'checked' : ''}" 
          @click=${this._handleToggleClick}
        >
          ${this.checked ? 'Mark Incomplete' : 'Mark Complete'}
        </button>
        <button 
          type="button" 
          class="delete-btn" 
          @click=${this._handleDelete}
        >
          Delete
        </button>
      </div>
    `;
    }
}

customElements.define('todo-item', TodoItem);
