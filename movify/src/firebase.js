

const firebaseConfig = {
    apiKey: "AIzaSyBabjD7SagVvir_n5V80Q7tYgr_q8xjKbk",
    authDomain: "movify-91d68.firebaseapp.com",
    projectId: "movify-91d68",
    storageBucket: "movify-91d68.appspot.com",
    messagingSenderId: "458454748363",
    appId: "1:458454748363:web:abcd828aef75d7bc8fdf4e",
    measurementId: "G-XB2F3HZPTQ"
  };
  

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export {auth, provider, storage};
  export default db;