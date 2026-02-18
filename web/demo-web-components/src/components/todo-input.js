export class TodoInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            margin-bottom: 20px;
            font-family: sans-serif;
          }
          form {
            display: flex;
            gap: 10px;
          }
          input {
            flex: 1;
            padding: 8px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
          }
          button {
            padding: 8px 16px;
            font-size: 16px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
          }
          button:hover {
            background-color: #0056b3;
          }
        </style>
        <form>
          <input type="text" placeholder="Add a new task..." required>
          <button type="submit">Add</button>
        </form>
      `;

        this.shadowRoot.querySelector('form').addEventListener('submit', (e) => {
            e.preventDefault();
            const input = this.shadowRoot.querySelector('input');
            const value = input.value.trim();
            if (value) {
                this.dispatchEvent(new CustomEvent('add-todo', {
                    bubbles: true,
                    composed: true,
                    detail: { text: value }
                }));
                input.value = '';
            }
        });
    }
}

customElements.define('todo-input', TodoInput);
