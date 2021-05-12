import { customElement, html, LitElement, property, query } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import "./web-history.scss";
import { ToggleService } from "../../services/toggle.service";

@customElement("web-history")
export default class WebHistory extends PageMixin(LitElement) {
    @property() toggles: { email: string; date: string }[] = [];

    @query("#grid")
    gridElement!: any;

    render() {
        return html`
            <vaadin-grid id="grid">
                <vaadin-grid-column path="email" header="E-Mail"></vaadin-grid-column>
                <vaadin-grid-column path="date" header="Datum" text-align="end"></vaadin-grid-column>
            </vaadin-grid>
        `;
    }

    async firstUpdated() {
        this.fetchToogles();
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
        this.gridElement.items = this.toggles;
    }
}
