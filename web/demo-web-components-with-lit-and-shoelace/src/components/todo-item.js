import { LitElement, css, html } from 'lit';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';

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
      background: var(--sl-color-neutral-0);
      border: 1px solid var(--sl-color-neutral-200);
      border-radius: var(--sl-border-radius-medium);
      gap: 10px;
    }
    .text {
      flex: 1;
      font-family: var(--sl-font-sans);
      color: var(--sl-color-neutral-700);
    }
    .text.checked {
      text-decoration: line-through;
      color: var(--sl-color-neutral-400);
    }
    sl-checkbox {
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
        <sl-checkbox 
          ?checked=${this.checked} 
          @sl-change=${this._handleCheckboxChange}
        ></sl-checkbox>
        <span class="text ${this.checked ? 'checked' : ''}">${this.text}</span>
        
        <sl-button 
          size="small" 
          variant=${this.checked ? 'warning' : 'default'}
          @click=${this._handleToggleClick}
        >
          ${this.checked ? 'Mark Incomplete' : 'Mark Complete'}
        </sl-button>

        <sl-button 
          size="small" 
          variant="danger" 
          @click=${this._handleDelete}
        >
          Delete
        </sl-button>
      </div>
    `;
    }
}

customElements.define('todo-item', TodoItem);
