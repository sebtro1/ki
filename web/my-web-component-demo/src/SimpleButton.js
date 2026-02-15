// Importieren der Lit-Basisklassen
import { LitElement, css, html } from 'lit';

export class SimpleButton extends LitElement {

    // 1. DEFINITION DER EIGENSCHAFTEN (PROPERTIES)
    // Hier definieren wir, welche Daten von außen reinkommen (Attributes)
    // und welche internen Zustand wir haben.
    static get properties() {
        return {
            label: { type: String },    // Der Text auf dem Button
            variant: { type: String },  // 'primary' oder 'secondary'
            clickCount: { type: Number, state: true } // Interner Status (nicht von außen setzbar)
        };
    }

    constructor() {
        super();
        // Standardwerte setzen
        this.label = 'Klick mich';
        this.variant = 'primary';
        this.clickCount = 0;
    }

    // 2. STYLING (Shadow DOM)
    // Diese Styles gelten NUR für diesen Button. Sie bluten nicht nach außen
    // und globale Styles (z.B. Bootstrap) kommen nicht herein.
    static get styles() {
        return css`
      :host {
        display: inline-block;
        margin: 5px;
      }

      button {
        font-family: sans-serif;
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        cursor: pointer;
        font-size: 16px;
        transition: background 0.2s;
      }

      /* Styles für die Variante 'primary' */
      button.primary {
        background-color: #007bff;
        color: white;
      }
      button.primary:hover {
        background-color: #0056b3;
      }

      /* Styles für die Variante 'secondary' */
      button.secondary {
        background-color: #6c757d;
        color: white;
      }
      button.secondary:hover {
        background-color: #545b62;
      }

      span {
        font-size: 0.8em;
        margin-left: 8px;
        opacity: 0.8;
      }
    `;
    }

    // 3. LOGIK
    _handleClick() {
        this.clickCount++;

        // Wir feuern ein "Custom Event", damit die Außenwelt (z.B. React)
        // mitbekommt, dass etwas passiert ist.
        this.dispatchEvent(new CustomEvent('button-clicked', {
            detail: { count: this.clickCount },
            bubbles: true,
            composed: true
        }));
    }

    // 4. RENDERING
    // Hier beschreiben wir das HTML. Dank Lit wird nur das ge-updatet,
    // was sich wirklich ändert (z.B. der count).
    render() {
        return html`
      <button 
        class="${this.variant}" 
        @click="${this._handleClick}"
      >
        ${this.label}
        ${this.clickCount > 0 ? html`<span>(${this.clickCount})</span>` : ''}
      </button>
    `;
    }
}

// 5. REGISTRIERUNG
// Wir sagen dem Browser: Wenn du <simple-button> siehst, nutze diese Klasse.
customElements.define('simple-button', SimpleButton);