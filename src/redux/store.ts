import { reducer } from "./reducer";
import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import { INITIAL_STATE_DEFAULT } from './initial.state';
import { nanoid } from "nanoid";

export const CLEAR_STORE = "CLEAR_STORE";

export const clearStore = () => {
    return {
        type: CLEAR_STORE,
        id: nanoid(),
        // muss so gemacht werden, sonst wird der State zum INITIAL_STATE_DEFAULT (Referenz);
        state: Object.assign({}, INITIAL_STATE_DEFAULT)
    };
};


export const store = createStore(
    reducer,
    composeWithDevTools()
)