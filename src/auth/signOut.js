import firebase from "firebase/compat";



export const signOut = async () => {
    
    try {
        await firebase.auth().signOut();

    } catch (e){
        throw new Error('Error signing out');
    }

}