import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBftgAeMvyFablfE90dmA1ChbSRNMlKE0w",
  authDomain: "dance-comp-schedule.firebaseapp.com",
  projectId: "dance-comp-schedule",
  storageBucket: "dance-comp-schedule.appspot.com",
  messagingSenderId: "30683537795",
  appId: "1:30683537795:web:b8cdf8d37a47b5d75fd6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//submit buttom
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault()

  //inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Creating Account...")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
      // ..
    });
});
