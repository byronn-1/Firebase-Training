import firebase from "firebase/compat";





/* 
might be getCurrentUser()
*/
 export const currentUser = () => {
     const user = firebase.auth().currentUser;

        if (!user) return null
        return {};
} 