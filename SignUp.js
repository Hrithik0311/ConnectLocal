import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Y3IjHQZpsdU9LjbA1FHR0cSl9Ss2zE0",
  authDomain: "hr-login-a649f.firebaseapp.com",
  projectId: "hr-login-a649f",
  storageBucket: "hr-login-a649f.firebasestorage.app",
  messagingSenderId: "1051510580300",
  appId: "1:1051510580300:web:88e4c1d572f53f48d2c0e9"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Toast trigger
var toastTrigger = document.getElementById('liveToastBtn');
var toastLiveExample = document.getElementById('liveToast');
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
  });
}

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Check if email or password is empty
  if (!email || !password) {
    alert("Please fill in both email and password fields.");
    return; // Exit the function if fields are empty
  }

  // Create user with Firebase Authentication
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      // Redirect to login page
      window.location.href = "Login.html";
    })
    .catch((error) => {
      alert("The Email Entered Is Already Used, Try Another!!");
    });
});
