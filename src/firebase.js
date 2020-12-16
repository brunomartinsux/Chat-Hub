import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDFPBHNZe4Iql369yUmwT5owkcocouxzsA",
    authDomain: "chat-hub-demo.firebaseapp.com",
    projectId: "chat-hub-demo",
    storageBucket: "chat-hub-demo.appspot.com",
    messagingSenderId: "836868125952",
    appId: "1:836868125952:web:7fd8fc0050382c8759efe5",
    measurementId: "G-ZTWSEMB9Z2"
  };

const fire = firebase.initializeApp(firebaseConfig)

firebase.analytics()

export default fire
