import { Toggle } from "../interfaces/toggle.interface";

class toggleService {


    allTogglesCollection: any = undefined;
    collection = "toggle"

    async createToggle(toggle: Toggle) {
        try {
            window.db.collection(this.collection).add(toggle)
        } catch(e) {
            console.error("ERROR IN CREATE TOGGLE");
            throw e;
        }

    }

    async getToggles(): Promise<Toggle[]> {
        try {
            const collection = window.db.collection(this.collection).limit(15).orderBy('timestamp', 'desc');
            this.allTogglesCollection = collection;
            const snapshot = await collection.get();
            const toggles = snapshot.docs.map((doc: any) => {
                return doc.data();
            })
            return toggles;
        } catch(e) {
            console.error("ERROR IN GETTOGGLES");
            throw e;
        }
    }

}

export const ToggleService = new toggleService();