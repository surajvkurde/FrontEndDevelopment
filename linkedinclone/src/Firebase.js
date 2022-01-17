import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDaU8fyNqEP4xX8xuPDtUOARi3Dh7Q2PBc",
    authDomain: "linkedinclone-2d714.firebaseapp.com",
    projectId: "linkedinclone-2d714",
    storageBucket: "linkedinclone-2d714.appspot.com",
    messagingSenderId: "941190754200",
    appId: "1:941190754200:web:3a82426749c975be8185ed"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};