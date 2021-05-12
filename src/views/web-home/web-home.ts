import { customElement, html, LitElement, property } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import "./web-home.scss";
import { ToggleService } from "../../services/toggle.service";
import { store } from "../../redux/store";

@customElement("web-home")
export default class WebHome extends PageMixin(LitElement) {
    @property() error = undefined;

    render() {
        return html`
            <h2>Tor-Funktion</h2>
            <br>
            <vaadin-button @click="${this.openDoor}">Tor öffnen</vaadin-button>
        `;
    }

    async openDoor() {
        try {
            ToggleService.createToggle({
                timestamp: new Date().getTime(),
                userId: store.getState().user?.uid!,
                email: store.getState().user?.email!,
            });
        } catch (e) {
            this.error = e;
        }
    }
}
