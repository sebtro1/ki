// veraltetes Shoelace

// 1. CSS importieren
import '@shoelace-style/shoelace/dist/themes/light.css';

// 2. Icon-Pfad Konfiguration (Wichtig für Web Awesome!)
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.19.0/dist/');

// 3. Komponenten importieren, die wir nutzen wollen
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
import '@shoelace-style/shoelace/dist/components/dialog/dialog.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';

// 4. Deine eigene Komponente importieren wir auch hier
import './SimpleButton.js';

// Neues WebAwsome

// Option 1: import all Web Awesome styles
import '@awesome.me/webawesome/dist/styles/webawesome.css';

// Option 2: import only the default theme
import '@awesome.me/webawesome/dist/styles/themes/default.css';

// <wa-button>
import '@awesome.me/webawesome/dist/components/button/button.js';
// <wa-input>
import '@awesome.me/webawesome/dist/components/input/input.js';

