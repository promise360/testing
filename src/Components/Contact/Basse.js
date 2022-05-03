import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import  {getStorage} from '@firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyCqav5ch4aBo_z37T94pEg5MlZ_a-7xcnE",
  authDomain: "safehealthyenvironments.firebaseapp.com",
  projectId: "safehealthyenvironments",
  storageBucket: "safehealthyenvironments.appspot.com",
  messagingSenderId: "741419155252",
  appId: "1:741419155252:web:dbb801e7e8ca10abfdaf61"
};


const app = initializeApp(firebaseConfig);
export const deebee = getFirestore(app);
export const storage = getStorage(app);