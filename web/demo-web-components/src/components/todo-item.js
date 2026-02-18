export class TodoItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['text', 'checked'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const text = this.getAttribute('text') || '';
    const checked = this.hasAttribute('checked');

    this.shadowRoot.innerHTML = `
        <style>
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
            text-decoration: ${checked ? 'line-through' : 'none'};
            color: ${checked ? '#888' : '#333'};
          }
          button {
            border: none;
            padding: 4px 8px;
            border-radius: 4px;
            cursor: pointer;
            font-size: 14px;
          }
          .delete-btn {
            background: #ff4444;
            color: white;
          }
          .delete-btn:hover {
            background: #cc0000;
          }
          .toggle-btn {
            background: ${checked ? '#f0ad4e' : '#5bc0de'};
            color: white;
          }
          .toggle-btn:hover {
            background: ${checked ? '#eea236' : '#46b8da'};
          }
        </style>
        <div class="todo-item">
          <input type="checkbox" ${checked ? 'checked' : ''}>
          <span class="text">${text}</span>
          <button type="button" class="toggle-btn">${checked ? 'Mark Incomplete' : 'Mark Complete'}</button>
          <button type="button" class="delete-btn">Delete</button>
        </div>
      `;

    this.shadowRoot.querySelector('input').addEventListener('change', (e) => {
      this.dispatchEvent(new CustomEvent('toggle', {
        bubbles: true,
        composed: true,
        detail: { checked: e.target.checked }
      }));
    });

    this.shadowRoot.querySelector('.toggle-btn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('toggle', {
        bubbles: true,
        composed: true,
        detail: { checked: !checked }
      }));
    });

    this.shadowRoot.querySelector('.delete-btn').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('delete', {
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('todo-item', TodoItem);
