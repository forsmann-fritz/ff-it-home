import { customElement, html, LitElement } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import './web-home.scss';

@customElement('web-home')
export default class WebHome extends PageMixin(LitElement) {

    render() {
        return html`
            <div>
                <h1>Aktueller Torstatus</h1>
                <p>Geschlossen</p>

                <vaadin-button>Tor öffnen</vaadin-button>
            </div>
        `;
    }
}