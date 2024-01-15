import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';


;

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

    apiKey: "AIzaSyDCzXZb3T-IKeNqYpYdmM-iDquvYlsXLbU",

    authDomain: "portfolio-d3156.firebaseapp.com",

    projectId: "portfolio-d3156",

    storageBucket: "portfolio-d3156.appspot.com",

    messagingSenderId: "669023714792",

    appId: "1:669023714792:web:c38ff72c3438d89a42b85d"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const firestore = getFirestore(app)