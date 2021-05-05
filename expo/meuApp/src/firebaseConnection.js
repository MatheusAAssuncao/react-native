import firebase from 'firebase';

let firebaseConfig = {
	apiKey: "AIzaSyB3piNS3XwSUNoVup4wrpUqJ3uoVBdCUnQ",
    authDomain: "meuapp-38091.firebaseapp.com",
    databaseURL: "https://meuapp-38091-default-rtdb.firebaseio.com",
    projectId: "meuapp-38091",
    storageBucket: "meuapp-38091.appspot.com",
    messagingSenderId: "872064606037",
    appId: "1:872064606037:web:82ccf5febe90fac29a59dc",
    measurementId: "G-LM6W9E32LL"
};
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default firebase;