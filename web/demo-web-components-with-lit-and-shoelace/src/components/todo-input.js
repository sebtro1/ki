import { LitElement, css, html } from 'lit';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

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
    sl-input {
      flex: 1;
    }
  `;

    _handleSubmit(e) {
        e.preventDefault();
        const input = this.shadowRoot.querySelector('sl-input');
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
        <sl-input 
          placeholder="Add a new task..." 
          required
        ></sl-input>
        <sl-button type="submit" variant="primary">Add</sl-button>
      </form>
    `;
    }
}

customElements.define('todo-input', TodoInput);
