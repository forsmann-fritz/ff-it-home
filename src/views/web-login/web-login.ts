import { customElement, html, LitElement, property, query } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import { router } from '../../client-packages/router/router';
// import userService from "../../services/user.service";
import './web-login.scss';
import { UserService } from "../../services/user.service";

@customElement('web-login')
export default class WebLogin extends PageMixin(LitElement) {

    @query('form')
    formElement!: HTMLFormElement;

    @query('#email')
    emailElement!: HTMLInputElement;

    @query('#password')
    passwordElement!: HTMLInputElement;

    @property({ type: Boolean })loginError = false;

    render() {
        return html`
        <form class="w-30 login-form">
            <section>
                <label for="email">Email</label>
                <input type="email" required id="email" placeholder="john@example.com">
            </section>
            <section>
                <label for="password">Password</label>
                <input type="password" required id="password" placeholder="********">
            </section>
            ${
                this.loginError ?
                html`
                    <section class="error">
                        <span>Error by login. Please check your Email and Password.</span>
                    </section>
                    `
                : null
                }
            <section class="actions">
                <vaadin-button @click="${this.register}" type="button" class="secondary">To Register</vaadin-button>
                <vaadin-button @click="${this.login}" type="submit" class="primary">Login</vaadin-button>
            </section>
        </form>
        `
    }

    async login(event: MouseEvent) {
        event.preventDefault();
        if (this.formElement.reportValidity()) {
            try {
                await UserService.login({
                    email: this.emailElement.value,
                    password: this.passwordElement.value
                });
                router.navigate('home');
            } catch(e) {
                this.loginError = true;
            }
        }
    }

    register() {
        router.navigate('register');
    }
}