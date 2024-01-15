import {firestore} from "./firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";



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

    getDatasFromFireStore = async () => {
        const querySnapshot = await getDocs(collection(firestore, this.name));
        const data= querySnapshot.docs.map(doc => ({ id:doc.id, ...doc.data() as T}));
        return data;
    }



}

export default APIClient;