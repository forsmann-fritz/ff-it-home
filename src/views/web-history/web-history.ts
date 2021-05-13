import { customElement, html, LitElement, property, query } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import "./web-history.scss";
import { ToggleService } from "../../services/toggle.service";
import { User } from "../../interfaces/user.interface";
import { State } from "../../interfaces/state.interface";
import { UserService } from "../../services/user.service";

@customElement("web-history")
export default class WebHistory extends PageMixin(LitElement) {
    @property() toggles: { email: string; date: string }[] = [];
    @property() user: User | undefined = undefined;

    stateChanged(state: State) {
        if(state.user) {
            this.user = state.user;
        } else {
            this.user = undefined;
        }
    }

    @query("#grid")
    gridElement!: any;

    render() {
        if(this.user?.role === "ADMIN" || this.user?.role === "USER") {
            return this.renderPermission();
        } else {
            return this.renderNoPermission();
        }
        
    }

    renderPermission() {
        return html`
            <vaadin-grid id="grid">
                <vaadin-grid-column path="email" header="E-Mail" width="40%"></vaadin-grid-column>
                <vaadin-grid-column path="date" header="Datum" text-align="end" width="60%"></vaadin-grid-column>
            </vaadin-grid>
        `; 
    }

    renderNoPermission() {
        return html`<h2>Keine Berechtigung</h2>
        <p>Wenden Sie sich bitte an einen der Administratoren.</p>`;
    }

    async firstUpdated() {
        this.fetchToogles();
        UserService.loginUserCollection.onSnapshot(() => this.fetchToogles()); 
        ToggleService.allTogglesCollection.onSnapshot(() => this.fetchToogles());
    }

    async fetchToogles() {
        this.toggles = (await ToggleService.getToggles())
            .sort((toggle1, toggle2) => toggle2.timestamp - toggle1.timestamp)
            .map((toggle) => {
                return {
                    email: toggle.email,
                    date: new Date(toggle.timestamp).toLocaleString(),
                };
            });

        if(this.gridElement) {
            this.gridElement.items = this.toggles;
        }

    }
}
