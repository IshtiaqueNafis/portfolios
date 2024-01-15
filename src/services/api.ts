import {firestore} from "./firebase";
import { addDoc, collection } from "firebase/firestore";

class APIClient<T> {
    name: string

    constructor(name: string) {
        this.name = name;
    }

    addDataTofireStore = async (data: T) => {
        const decRef = await addDoc(collection(firestore, this.name), {
            data
        });
        return decRef.id
    }
}

export default APIClient;