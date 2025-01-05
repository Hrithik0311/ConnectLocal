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

      // Check if user.photoURL is defined and not null
      if (user.photoURL) {
          profilePicture.src = user.photoURL;
      } else {
          // Set default profile picture if user.photoURL is not defined or null
          profilePicture.src = "avatar.png"; // Replace with your default picture URL
      }
  }
});
