import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDmWI_SeM88SrHalwbalyD2gjwxAnvruFE",
  authDomain: "messages-app-a09e6.firebaseapp.com",
  projectId: "messages-app-a09e6",
  storageBucket: "messages-app-a09e6.appspot.com",
  messagingSenderId: "727192513214",
  appId: "1:727192513214:web:5bfb3638281b873e30ccef",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth, app };
