import { customElement, html, LitElement, internalProperty } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import { router } from "../../client-packages/router/router";
import { getRoute } from './routes';

import './web-root.scss';
import { State } from "../../interfaces/state.interface";

@customElement('web-root')
export default class WebRoot extends PageMixin(LitElement) {

    @internalProperty() isLoggedIn = false;
    minLoadingScreenTime = 1000;

    stateChanged(state: State) {
        if(state.user) {
            // Halte die min LoadingScreenTime ein - vermeidet nerviges flackern bei schnellem Login
            setTimeout(() => this.isLoggedIn = true, this.minLoadingScreenTime);
        } else {
            this.isLoggedIn = false;
        }
    }

    render() {
        return html`
        <div class="root-content">
            ${this.renderOutlet()}
        </div>
        `;
    }

    async firstUpdated() {
        router.subscribe(() => this.requestUpdate());
        // try login user
        try {
            throw Error("mockLoginError");
            // await userService.login();
            if(getRoute(router.getPath()).onAuthSuccess) {
                router.navigate(getRoute(router.getPath()).onAuthSuccess!);
            }
        } catch (e) {
            this.isLoggedIn = false;
            if(getRoute(router.getPath()).onAuthFail) {
                router.navigate(getRoute(router.getPath()).onAuthFail);
            }
        }
    }


    renderOutlet() {
        const route = getRoute(router.getPath());
        if(route.waitAuthenticationLoading && !this.isLoggedIn) {
            return html`<web-loading></web-loading>`;
        }
        return route.template;
    }

}