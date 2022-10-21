import firebase from "firebase/compat";



export const signIn = async (email, password) => {
    
    try {
        const result = await firebase.auth().signInWithEmailAndPassWord(email, password);

        return {};
    } catch (e){
        throw new Error('Error signing in');
    }

}