import { LitElement, css, html } from 'lit';

export class TodoInput extends LitElement {
    static styles = css`
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
  `;

    _handleSubmit(e) {
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
    }

    render() {
        return html`
      <form @submit=${this._handleSubmit}>
        <input type="text" placeholder="Add a new task..." required>
        <button type="submit">Add</button>
      </form>
    `;
    }
}

customElements.define('todo-input', TodoInput);
