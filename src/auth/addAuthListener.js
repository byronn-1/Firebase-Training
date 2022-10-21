import firebase from '../Firebase';


/* 
Not async be cause it uses a callback to allow whoever uses it to listen continuously

pass callback to firebases on auth state changed function 
this takes the user object and passes only the relevant parts of it to our callback function
*/
export const addAuthListener = (callback) => {
    
    const onChange = (user) => {
        if (user) {
            callback({});
        } else {
            callback(null);
        }
    }

    return firebase.auth().onAuthStateChanged(onChange);
}