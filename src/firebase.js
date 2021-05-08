import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState} from 'react-firebase-hooks/auth';
import { useCollectionData} from 'react-firebase-hooks/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyB1AKLYz8mgCoKghup7X_LNcNt0V3mpmKM",
    authDomain: "chat-app-e1dd8.firebaseapp.com",
    projectId: "chat-app-e1dd8",
    storageBucket: "chat-app-e1dd8.appspot.com",
    messagingSenderId: "469030010891",
    appId: "1:469030010891:web:1ccf0bc7f7f4b2e388870e",
    measurementId: "G-8D3YW7VV0R"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
export { useAuthState, useCollectionData };

