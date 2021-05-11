import md from "mobile-detect";
import { INITIAL_STATE } from "./initial.state";

(window as any).mobileDetect = new md(window.navigator.userAgent);

export const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        default:
            return state;
    }
};
