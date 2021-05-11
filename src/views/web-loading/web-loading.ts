import { customElement, html, LitElement, property } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import logo from '../../../assets/icons/logo.svg';

import './web-loading.scss';

@customElement('web-loading')
export default class WebLoading extends PageMixin(LitElement) {
    @property({type: String}) text = 'Loading...';

    render() {
        return html`
        <div class="container">
            <img src="${logo}" alt="Portfoio" class="logo">
            <br>
            <br>
            <div class="loading">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
        </div>
        `;
    }
}