import { LoginCredentials, RegisterCredentials } from "../interfaces/user.interface";
import { store } from "../redux/store";
import { userLogin } from "../redux/actions/user.actions";

class userService {
    async register (credentials: RegisterCredentials) {
        await window.firebase.auth().setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
        const {email, password} = credentials;
        try {
            const userCredentials = await  window.firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredentials.user;
            console.log(user);
        } catch(e) {
            console.error("LOGIN ERROR");
            throw e;
        }
    }
    
    async login (credentials?: LoginCredentials) {
        if(credentials) {
            await window.firebase.auth().setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
            const {email, password} = credentials;
            try {
                const userCredentials = await  window.firebase.auth().signInWithEmailAndPassword(email, password);
                const user = userCredentials.user;
                store.dispatch(userLogin({email: user.email}))
                console.log(user);
            } catch(e) {
                console.error("LOGIN ERROR");
                throw e;
            }
        } else {
            return new Promise((resolve, reject) => {
                window.firebase.auth().onAuthStateChanged((user: any) => {
                    if(user) {
                        store.dispatch(userLogin({email: user.email}))
                        resolve(user);
                    } else {
                        reject(new Error("AUTO_LOGIN_FAILED"));
                    }
                });
            })

        }

    }

    async logout () {
        await window.firebase.auth().signOut();
    }
}

export const UserService = new userService();