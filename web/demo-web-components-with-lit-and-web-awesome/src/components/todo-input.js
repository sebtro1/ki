import { LitElement, css, html } from 'lit';
import '@awesome.me/webawesome/dist/components/input/input.js';
import '@awesome.me/webawesome/dist/components/button/button.js';

export class TodoInput extends LitElement {
    static styles = css`
    :host {
      display: block;
      margin-bottom: 20px;
    }
    form {
      display: flex;
      gap: 10px;
      align-items: center;
    }
    wa-input {
      flex: 1;
    }
  `;

    _handleSubmit(e) {
        e.preventDefault();
        const input = this.shadowRoot.querySelector('wa-input');
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
        <wa-input 
          placeholder="Add a new task..." 
          required
        ></wa-input>
        <wa-button type="submit" variant="primary">Add</wa-button>
      </form>
    `;
    }
}

customElements.define('todo-input', TodoInput);
