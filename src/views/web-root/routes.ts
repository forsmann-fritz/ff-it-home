import { html, TemplateResult } from "lit-element";

export interface ROUTE {
    name: string,
    template: TemplateResult,
    onAuthFail: string,
    onAuthSuccess?: string,
    waitAuthenticationLoading?: boolean
}

export function getRoute(name: string): ROUTE {
    let result = ROUTES.find(route => route.name === name);
    if(!result) result = ROUTES.find(route => route.name === "");
    return result!;
}

export const ROUTES: ROUTE[] = [
    {
        name: "dashboard",
        template: html`<web-dashboard></web-dashboard>`,
        onAuthFail: "register",
        waitAuthenticationLoading: true
    },
    {
        name:"portfolio",
        template: html`<web-portfolio-details></web-portfolio-details>`,
        onAuthFail: "register",
        waitAuthenticationLoading: true
    },
    {
        name: "register",
        template: html`<web-register></web-register>`,
        onAuthFail: "register",
        onAuthSuccess: "dashboard"
    },
    {
        name: "login",
        template: html`<web-login></web-login>`,
        onAuthFail: "login",
        onAuthSuccess: "dashboard"
    },
    {
        name: "configuration",
        template: html`<web-questionaire></web-questionaire>`,
        onAuthFail: "register",
        waitAuthenticationLoading: true
    },
    {
        name: "configuration-result",
        template: html`<web-questionaire-disclaimer></web-questionaire-disclaimer>`,
        onAuthFail: "register",
        waitAuthenticationLoading: true
    },
    {
        name: "",
        template: html`<web-dashboard></web-dashboard>`,
        onAuthFail: "register",
        onAuthSuccess: "dashboard",
    }
]