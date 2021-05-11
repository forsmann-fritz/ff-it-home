
import { nanoid } from "nanoid";
import { User } from "../../interfaces/user.interface";

export const USER_LOGIN = "USER_LOGIN";
 
export function userLogin(user: User) {
    return {
        id: nanoid(),
        type: USER_LOGIN,
        user: user
    }
}