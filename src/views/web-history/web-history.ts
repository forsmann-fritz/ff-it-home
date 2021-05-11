import { customElement, html, LitElement } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import './web-history.scss';

@customElement('web-history')
export default class WebHistory extends PageMixin(LitElement) {

    render() {
        return html`
            HISTORY
        `;
    }
}