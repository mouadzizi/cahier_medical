import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBP1OTyPEqj9cA15KWYOC5ucCtLBjY44NE",
    authDomain: "cahier-medical.firebaseapp.com",
    databaseURL: "https://cahier-medical.firebaseio.com",
    projectId: "cahier-medical",
    storageBucket: "cahier-medical.appspot.com",
    messagingSenderId: "828983757379",
    appId: "1:828983757379:web:f47f4ec308c3a652c8e2f6",
    measurementId: "G-VC1XHXWK1T"
}

var app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.database();