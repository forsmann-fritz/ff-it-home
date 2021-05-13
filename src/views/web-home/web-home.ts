import { customElement, html, LitElement, property } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import "./web-home.scss";
import { ToggleService } from "../../services/toggle.service";
import { store } from "../../redux/store";
import { User } from "../../interfaces/user.interface";
import { State } from "../../interfaces/state.interface";

@customElement("web-home")
export default class WebHome extends PageMixin(LitElement) {
    @property() user: User | undefined = undefined;
    @property() error = undefined;

    stateChanged(state: State) {
        if (state.user) {
            this.user = state.user;
        } else {
            this.user = undefined;
        }
    }

    render() {
        if (this.user?.role === "ADMIN" || this.user?.role === "USER") {
            return this.renderPermission();
        } else {
            return this.renderNoPermission();
        }
    }

    renderPermission() {
        return html`
            <h2>Tor-Funktion</h2>
            <br />
            <vaadin-button @click="${this.openDoor}">Tor öffnen</vaadin-button>
        `;
    }

    renderNoPermission() {
        return html`<h2>Keine Berechtigung</h2>
            <p>Wenden Sie sich bitte an einen der Administratoren.</p>`;
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
