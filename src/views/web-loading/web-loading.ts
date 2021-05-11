import { customElement, html, LitElement, property } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";

import './web-loading.scss';

@customElement('web-loading')
export default class WebLoading extends PageMixin(LitElement) {
    @property({type: String}) text = 'Loading...';

    render() {
        return html`
        <div class="container">
            <div class = "centered">
                <div class = "blob-1"></div>
                <div class = "blob-2"></div>
            </div>
            
            <p>${this.text}</p>
        </div>
        `;
    }
}