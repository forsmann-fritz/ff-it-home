import { customElement, html, LitElement, property } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import "./web-profile.scss";
import { store, clearStore } from "../../redux/store";
import { UserService } from "../../services/user.service";
import { router } from "../../client-packages/router/router";
import { User } from "../../interfaces/user.interface";
import { State } from "../../interfaces/state.interface";

@customElement("web-profile")
export default class WebProfile extends PageMixin(LitElement) {
    @property() users: User[] = [];
    @property() user: User | undefined = undefined;

    stateChanged(state: State) {
        if(state.user) {
            this.user = state.user;
        } else {
            this.user = undefined;
        }
    }

    render() {
        return html`
            <h2>Nutzerdaten</h2>
            <div><b>E-Mail: </b>${this.user?.email}</div>
            <div><b>UID: </b><small>${this.user?.uid}</small></div>
            <div><b>ROLE: </b>${this.user?.role}</div>
            <br />
            <vaadin-button @click=${this.logout}>Logout</vaadin-button>
            ${this.user?.role === "ADMIN" ? this.renderAdminControl() : html``}
        `;
    }

    renderAdminControl() {
        const values = ["NOPERMISSION", "USER", "ADMIN"];
        return html`
            <h2>Admin-Panel</h2>

            <vaadin-accordion opened=${-1}>
                ${this.users.map((user) => {
                    return html`
                        <vaadin-accordion-panel>
                            <div slot="summary">${user.email}</div>
                            <vaadin-list-box selected=${values.indexOf(user.role)}>
                                ${values.map((value) => {
                                    return html`<vaadin-item @click=${() => this.changeUserRole(user, value)}>${value}</vaadin-item>`;
                                })}
                            </vaadin-list-box>
                        </vaadin-accordion-panel>
                    `;
                })}
            </vaadin-accordion>
        `;
    }

    logout() {
        UserService.logout();
        window.localStorage.clear();
        store.dispatch(clearStore());
        router.navigate("/login");
    }

    async firstUpdated() {
        this.fetchUsers();
        UserService.allUserCollection.onSnapshot(() => this.fetchUsers());
    }

    async fetchUsers() {
        this.users = (await UserService.find()).filter((user) => user.uid !== store.getState().user?.uid);
        this.requestUpdate();
    }

    async changeUserRole(user: User, role: string) {
        if(role === "ADMIN" || role === "NOPERMISSION" || role === "USER") {
            try {
                await UserService.update(user.uid, {role: role});
                await this.fetchUsers();
            } catch(e) {
                console.error(e);
            }
        }
    }
}
