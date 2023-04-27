import firebase from "firebase/compat/app"
import "firebase/compat/storage"


const firebaseConfig = {
    apiKey: "AIzaSyD04lGlo51Lp_hxh1KYMJ1eoU0DRM0rkGI",
    authDomain: "netflix-40a17.firebaseapp.com",
    projectId: "netflix-40a17",
    storageBucket: "netflix-40a17.appspot.com",
    messagingSenderId: "211163610227",
    appId: "1:211163610227:web:df51b7b28d9678ac9cfe06",
    measurementId: "G-N699LDX5P7"
}

const firebaseapp = firebase.initializeApp(firebaseConfig);
export const storage = firebaseapp.storage();
