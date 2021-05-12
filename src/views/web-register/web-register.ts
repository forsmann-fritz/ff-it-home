import { customElement, html, LitElement, property, query } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import { router } from '../../client-packages/router/router';
// import userService from "../../services/user.service";
import './web-register.scss';
import { UserService } from "../../services/user.service";

@customElement('web-register')
export default class WebRegister extends PageMixin(LitElement) {

    @query('form')
    formElement!: HTMLFormElement;

    @query('#email')
    emailElement!: HTMLInputElement;

    @query('#password')
    passwordElement!: HTMLInputElement;

    @property({ type: Boolean }) registerError = false;
    @property({ type: Boolean }) loginError = false;

    render() {
        return html`
        <form class="w-30 register-form">
            <section>
                <label for="email">Email</label>
                <input type="email" required id="email" placeholder="john@example.com">
            </section>
            <section>
                <label for="password">Password</label>
                <input type="password" required id="password" placeholder="********">
            </section>
            ${
                this.loginError || this.registerError ?
                html`
                    <section class="error">
                        <span>${this.loginError? "Error by login. Please try again in a moment." : "Error by Register. Maybe this Email is already used." }</span>
                    </section>
                    `
                : null
                }
            <section class="actions">
                <vaadin-button @click="${this.login}" class="secondary">To Login</vaadin-button>
                <vaadin-button @click="${this.register}" type="button" type="submit">Register</vaadin-button>

            </section>
        </form>
     
        `
    }

    async register(event: MouseEvent) {
        event.preventDefault();
        if (this.formElement.reportValidity()) {
            
            try {
                await UserService.register({
                    email: this.emailElement.value,
                    password: this.passwordElement.value
                });
                try {
                    await UserService.login({
                        email: this.emailElement.value,
                        password: this.passwordElement.value
                    });
                    router.navigate('home');
                } catch (error) {
                    console.log(error);
                    this.loginError = true;
                }
            } catch(error) {
                console.log(error);
                this.registerError = true;
                return;
            }
        }
    }

    login() {
        router.navigate('login');
    }
}