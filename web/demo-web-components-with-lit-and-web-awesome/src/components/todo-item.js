import { LitElement, css, html } from 'lit';
import '@awesome.me/webawesome/dist/components/checkbox/checkbox.js';
import '@awesome.me/webawesome/dist/components/button/button.js';
import '@awesome.me/webawesome/dist/components/icon-button/icon-button.js';
import '@awesome.me/webawesome/dist/components/icon/icon.js';

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
    }
    .todo-item {
      display: flex;
      align-items: center;
      padding: 8px;
      background: var(--wa-color-neutral-0);
      border: 1px solid var(--wa-color-neutral-200);
      border-radius: var(--wa-border-radius-medium);
      gap: 10px;
    }
    .text {
      flex: 1;
      font-family: var(--wa-font-sans);
      color: var(--wa-color-neutral-700);
    }
    .text.checked {
      text-decoration: line-through;
      color: var(--wa-color-neutral-400);
    }
    wa-checkbox {
        --size: 1.2rem;
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
        <wa-checkbox 
          ?checked=${this.checked} 
          @wa-change=${this._handleCheckboxChange}
        ></wa-checkbox>
        <span class="text ${this.checked ? 'checked' : ''}">${this.text}</span>
        
        <wa-button 
          size="small" 
          variant=${this.checked ? 'warning' : 'default'}
          @click=${this._handleToggleClick}
        >
          ${this.checked ? 'Mark Incomplete' : 'Mark Complete'}
        </wa-button>

        <wa-button 
          size="small" 
          variant="danger" 
          @click=${this._handleDelete}
        >
          Delete
        </wa-button>
      </div>
    `;
    }
}

customElements.define('todo-item', TodoItem);
