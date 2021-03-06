import { customElement, html, LitElement, property } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import { router } from "../../client-packages/router/router";
import { State } from "../../interfaces/state.interface";
import { clearStore, store } from "../../redux/store";
import logo from '../../../assets/icons/logo.svg';
import './navbar.scss';
import { UserService } from "../../services/user.service";

@customElement('web-navbar')
export class WebNavbar extends PageMixin(LitElement) {
  @property() isLogedIn = false;

  stateChanged(state: State) {
    if(state.user) {
      this.isLogedIn = true;
    } else {
      this.isLogedIn = false;
    }
  }

  constructor() {
    super();
  }

  render() {
    return html`
    <header class="block block-header-2">

      <div class="block-header-2--logo">
        <a href="http://localhost:4000">
          <img src="${logo}" alt="Portfoio" class="logo">
        </a>
      </div>

      <nav class="block-header-2--nav">
          ${this.isLogedIn ? this.getLogedIn() : this.getNotLogedIn()}
      </nav>
    </header>
    `;
  }


  getNotLogedIn() {
    return html`
      <!-- <a class="button primary small block-header-2--cta">Register</a> -->
    `;
  }

  getLogedIn() {
    return html`
      <vaadin-button class="block-header-2--cta" @click="${this.logout}">Logout</vaadin-button>
    `;
  }

  logout() {
    UserService.logout();
    window.localStorage.clear();
    store.dispatch(clearStore());
    router.navigate("/login");
  }

}