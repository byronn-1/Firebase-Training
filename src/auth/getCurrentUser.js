import firebase from 'firebase/compat/auth';




/* 
might be getCurrentUser()
*/
 export const currentUser = () => {
     const user = firebase.auth().currentUser;

        if (!user) return null
        return {};
} 