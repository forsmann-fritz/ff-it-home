import { html, TemplateResult } from "lit-element";

const routeIndex = 0;
export interface ROUTE {
    name: string,
    template: TemplateResult,
    onAuthFail: string,
    onAuthSuccess?: string,
    waitAuthenticationLoading?: boolean,
    tabs?: boolean
}

export function getRoute(name: string): ROUTE {
    let result = ROUTES.find(route => route.name === name);
    if(!result) result = ROUTES.find(route => route.name === "");
    return result!;
}

export const ROUTES: ROUTE[] = [
    {
        name: "home",
        template: html`<web-home></web-home>`,
        onAuthFail: "register",
        waitAuthenticationLoading: true,
        tabs: true
    },
    {
        name: "register",
        template: html`<web-register></web-register>`,
        onAuthFail: "register",
        onAuthSuccess: "home"
    },
    {
        name: "login",
        template: html`<web-login></web-login>`,
        onAuthFail: "login",
        onAuthSuccess: "home"
    },
    {
        name: "history",
        template: html`<web-history></web-history>`,
        onAuthFail: "login",
        onAuthSuccess: "history",
        tabs: true
    },
    {
        name: "profile",
        template: html`<web-profile></web-profile>`,
        onAuthFail: "login",
        onAuthSuccess: "profile",
        tabs: true
    },
    {
        name: "",
        template: html`<web-home></web-home>`,
        onAuthFail: "register",
        onAuthSuccess: "home",
        tabs: true
    }
]