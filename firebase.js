import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBPeBh0Lv3jVj7EYP2jQCLdAB95hVOEx1Y",
    authDomain: "webinar-go.firebaseapp.com",
    projectId: "webinar-go",
    storageBucket: "webinar-go.firebasestorage.app",
    messagingSenderId: "1060599049641",
    appId: "1:1060599049641:web:faf758105bbed597a868b8",
    measurementId: "G-7E0QLBD7TT"
  };
  

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };