import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth, onAuthStateChanged
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

onAuthStateChanged(auth, (user) => {
  if (user) {
      const uid = user.uid;
      console.log(user);
      const profilePicture = document.getElementById("userProfilePicture");
      const personName = document.getElementById("personName");
      const email = document.getElementById("email");
      const phoneNumber = document.getElementById("phoneNumber");
      const dateOfBirth = document.getElementById("dateOfBirth");

      // set user Name
      if (user.displayName) {
        personName.innerText = user.displayName;
      } else {
        personName.innerText = 'Harshith Reddy';
      }

      // Set profile picture
      if (user.photoURL) {
          profilePicture.src = user.photoURL;
      } else {
          // Set default profile picture
          profilePicture.src = "img/avatar.png"; // Replace with your default image URL
      }

      // Set other user details
      personName.innerText = user.displayName;
      email.innerText = user.email;
      phoneNumber.innerText = user.PhoneNumber || 'Not Provided!';
      dateOfBirth.innerText = user.dateOfBirth || 'Not Provided!';
  } else {
      window.location.href = "index.html";
  }
});

// Add an event listener for the "Back" button
document.addEventListener("DOMContentLoaded", function() {
    const backButton = document.getElementById("backButton");
    if (backButton) {
        backButton.addEventListener("click", function() {
            window.history.back();
        });
    }
});
