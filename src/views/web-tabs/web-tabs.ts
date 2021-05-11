import { customElement, html, LitElement } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import './web-tabs.scss';
import { router } from "../../client-packages/router/router";

interface Tab {
    name: string,
    route: string
}

@customElement('web-tabs')
export default class WebTabs extends PageMixin(LitElement) {

    tabs: Tab[] = [
        {
            name: "Home",
            route: "home"
        },
        {
            name: "Historie",
            route: "history"
        }, 
        {
            name: "Profil",
            route: "profile"
        }
    ]

    render() {
        return html`
            <vaadin-tabs>
                ${this.tabs.map(tab => {
                    return html`<vaadin-tab @click=${() => this.tabclick(tab)}>${tab.name}</vaadin-tab>`
                })}
            </vaadin-tabs>
        `;
    }

    tabclick(tab: Tab) {
        router.navigate(tab.route)
    }
}