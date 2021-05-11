import { State } from "../interfaces/state.interface";
// import { nanoid } from 'nanoid';

export const INITIAL_STATE_DEFAULT: State = {
    user: undefined
};

export const INITIAL_STATE: State = Object.assign({}, INITIAL_STATE_DEFAULT);