import { initializeApp } from "firebase/app";
import{createUserWithEmailAndPassword,
     getAuth, 
     signInWithEmailAndPassword,
     signOut} from 'firebase/auth'
import {addDoc, 
    collection,
     getFirestore} from 'firebase/firestore'
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBik7eOAPCYagmm9xBijwtZifEWg4nnJR0",
  authDomain: "netflix-clone-c8f2c.firebaseapp.com",
  projectId: "netflix-clone-c8f2c",
storageBucket: "netflix-clone-c8f2c.firebasestorage.app",
messagingSenderId: "130485669375",
  appId: "1:130485669375:web:c0e17df33819e0e98febca"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
         //user sign up funtion
const signup = async(name, email, password)=>{
    try{
const res = await createUserWithEmailAndPassword(auth, email, password);
const user = res.user;
await addDoc(collection(db, "user"),{
    uid:user.uid,
    name,
    authProvider:"local",
    email,
});
    }catch(error){
console.log(error);
toast.error(error.code.split('/')[1].split('-').join(""))
    }
}
   //login
   const login = async(email, password)=>{
try{
await signInWithEmailAndPassword(auth, email, password)
}catch(error){
console.log(error)
toast.error(error.code.split('/')[1].split('-').join(""))
}
   }
   //logout
   const logout = ()=>{
    signOut(auth)
   }
   export {auth, db, login, signup, logout}