import { LitElement, html, css } from 'lit';

// 1. WICHTIG: Importiere die PatternFly Komponenten, die du nutzen willst!
import '@patternfly/elements/pf-card/pf-card.js';
import '@patternfly/elements/pf-button/pf-button.js';
import '@patternfly/elements/pf-avatar/pf-avatar.js'; // Falls vorhanden, sonst img

export class MyUserCard extends LitElement {

  // Eigenschaften deiner EIGENEN Komponente
  static get properties() {
    return {
      username: { type: String },
      role: { type: String },
      userId: { type: String }
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        max-width: 300px;
      }
      
      /* Wir stylen hier nur das Layout UNSERER Inhalte.
         Das innere Styling von pf-card oder pf-button bleibt geschützt. */
      .user-info {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;
      }

      /* Custom Styling für den Titel im PatternFly Slot */
      h3 {
        margin: 0;
        color: var(--pf-global--primary-color--100, #0066cc); /* Nutzung von PF Variablen */
      }
    `;
  }

  constructor() {
    super();
    this.username = 'Gast';
    this.role = 'Besucher';
  }

  _handleContact() {
    // Wir feuern ein eigenes, "semantisches" Event nach außen
    this.dispatchEvent(new CustomEvent('contact-user', {
      detail: { id: this.userId, name: this.username },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    // Hier passiert die "Verschachtelung" (Composition)
    return html`
      <pf-card>
      <!-- <h3 slot="header">Mitarbeiter-Profil</h3> -->

      <slot name="header" slot="header">
        <h3>Standard Mitarbeiter-Profil</h3>
      </slot>

        <div class="user-info">
          <img 
            src="https://i.pravatar.cc/150?u=${this.userId}" 
            alt="${this.username}"
            style="width: 50px; height: 50px; border-radius: 50%;"
          >
          <div>
            <strong>${this.username}</strong><br>
            <small>${this.role}</small>
          </div>
        </div>

        <div slot="footer">
          <pf-button @click="${this._handleContact}" variant="primary" style="width: 100%">
            Kontaktieren
          </pf-button>
        </div>
      </pf-card>
    `;
  }
}

customElements.define('my-user-card', MyUserCard);