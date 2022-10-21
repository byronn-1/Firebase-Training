import firebase from "firebase/compat/app";





/* 
might be getCurrentUser()
*/
 export const getCurrentUser = () => {
     const user = firebase.auth().currentUser;

        if (!user) return null
        return {};
} 