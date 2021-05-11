import { customElement, html, LitElement } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import './web-profile.scss';

@customElement('web-profile')
export default class WebProfile extends PageMixin(LitElement) {

    render() {
        return html`
            PROFILE
        `;
    }
}