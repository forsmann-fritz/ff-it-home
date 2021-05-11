import { customElement, html, LitElement, property, query } from "lit-element";
import { PageMixin } from "../../client-packages/page-mixin/page.mixin";
import { router } from '../../client-packages/router/router';
// import userService from "../../services/user.service";
import './web-register.scss';

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
                <button @click="${this.login}" type="button">Login</button>
                <button @click="${this.register}" type="submit" class="primary">Register</button>
            </section>
        </form>
     
        `
    }

    async register(event: MouseEvent) {
        event.preventDefault();
        if (this.formElement.reportValidity()) {
            
            try {
                // await userService.register({
                //     email: this.emailElement.value,
                //     password: this.passwordElement.value,
                //     country: this.countryElement.value
                // });
            } catch(error) {
                console.log(error);
                this.registerError = true;
                return;
            }

            try {
                // await userService.login({
                //     email: this.emailElement.value,
                //     password: this.passwordElement.value
                // });
                router.navigate('configuration');
            } catch (error) {
                console.log(error);
                this.loginError = true;
            }



        }
    }

    login() {
        router.navigate('login');
    }
}