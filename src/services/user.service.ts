import { LoginCredentials, RegisterCredentials, User } from "../interfaces/user.interface";
import { store } from "../redux/store";
import { userLogin } from "../redux/actions/user.actions";

class userService {
    async register(credentials: RegisterCredentials) {
        await window.firebase.auth().setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
        const { email, password } = credentials;
        try {
            const userCredentials = await window.firebase.auth().createUserWithEmailAndPassword(email, password);
            await this.create({ email: userCredentials.user.email, uid: userCredentials.user.uid, role: "NOPERMISSION" });
        } catch (e) {
            console.error("LOGIN ERROR");
            throw e;
        }
    }

    async login(credentials?: LoginCredentials) {
        if (credentials) {
            await window.firebase.auth().setPersistence(window.firebase.auth.Auth.Persistence.LOCAL);
            const { email, password } = credentials;
            try {
                const userCredentials = await window.firebase.auth().signInWithEmailAndPassword(email, password);
                const userData = userCredentials.user;
                const user = await this.get(userData.uid);
                store.dispatch(userLogin(user));
            } catch (e) {
                console.error("LOGIN ERROR");
                throw e;
            }
        } else {
            return new Promise((resolve, reject) => {
                window.firebase.auth().onAuthStateChanged(async (userData: any) => {
                    if (userData) {
                        const user = await this.get(userData.uid);
                        store.dispatch(userLogin(user));
                        resolve(user);
                    } else {
                        reject(new Error("AUTO_LOGIN_FAILED"));
                    }
                });
            });
        }
    }

    async logout() {
        await window.firebase.auth().signOut();
    }

    collection = "user";

    // Firestore section: Use Firebase for authentication but also handle user-entitys in firestore
    // Means.. Everytime you register, you also create a user in firestore
    async create(user: User) {
        try {
            await window.db.collection(this.collection).doc(window.firebase.auth().currentUser.uid).set(user);
        } catch (e) {
            console.error("ERROR CREATING FIRESTORE USER");
            throw e;
        }
    }

    async get(uid: string): Promise<User> {
        try {
            const collection = window.db.collection(this.collection);
            const snapshot = await collection.where("uid", "==", uid).get();
            if (snapshot.size !== 1) throw new Error("MORE THEN 1 USER FOR THIS EMAIL SAVED!");
            const user = snapshot.docs[0].data();
            return user;
        } catch (e) {
            console.log("COULD NOT FIND THIS FIRESTORE USER");
            throw e;
        }
    }

    async find(): Promise<User[]> {
        try {
            const collection = window.db.collection(this.collection);
            const snapshot = await collection.get();
            const users = snapshot.docs.map((doc: any) => {
                return doc.data();
            })
            return users;
        } catch (e) {
            console.log("COULD NOT FIND THIS FIRESTORE USERS");
            throw e;
        }
    }

    async update(uid: string, user: Partial<User>): Promise<Boolean> {
        try {
            const collection = window.db.collection(this.collection).doc(uid);
            await collection.update(user)
            return true;
        } catch (e) {
            console.log("COULD NOT UPDATE FIRESTORE USER");
            throw e;
        }
    }
}

export const UserService = new userService();
