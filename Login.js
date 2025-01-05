import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  FacebookAuthProvider,
} from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Y3IjHQZpsdU9LjbA1FHR0cSl9Ss2zE0",
  authDomain: "hr-login-a649f.firebaseapp.com",
  projectId: "hr-login-a649f",
  storageBucket: "hr-login-a649f.firebasestorage.app",
  messagingSenderId: "1051510580300",
  appId: "1:1051510580300:web:88e4c1d572f53f48d2c0e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Super Admin credentials (email-password pairs)
const superAdminCredentials = {
  "superadmin@admin.hha": "Hraha@7878",
};

// Admin credentials (email-password pairs)
const adminCredentials = {
  "chorasta@cl.com": "787878",
  "sunnyanumula7@gmail.com": "Sunny@1234",
  "admin3@example.com": "securepassword",
};

// Submit button functionality
const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();

  // Inputs
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate input
  if (!email || !password) {
    alert("Please enter both email and password.");
    return;
  }

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Check if email is a Super Admin and password matches
      if (superAdminCredentials[user.email] === password) {
        alert("Super Admin login successful! Redirecting to super admin page...");
        window.location.href = "superadmin.html";
      }
      // Check if email is an Admin and password matches
      else if (adminCredentials[user.email] === password) {
        window.location.href = "Admin_index.html";
      } else {
        window.location.href = "index.html";
      }
    })
    .catch((error) => {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);

      if (error.code === "auth/invalid-email") {
        alert("Invalid email format. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        alert("No user found with this email.");
      } else if (error.code === "auth/wrong-password") {
        alert("Incorrect password. Please try again.");
      } else {
        alert("Login failed. Please check your credentials and try again.");
      }
    });
});

// Reset password functionality
const reset = document.getElementById("reset");
reset.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();

  if (!email) {
    alert("Please enter your email to reset your password.");
    return;
  }

  sendPasswordResetEmail(auth, email)
    .then(() => {
      alert("Password reset email sent! Check your inbox.");
    })
    .catch((error) => {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);

      if (error.code === "auth/invalid-email") {
        alert("Invalid email format. Please try again.");
      } else if (error.code === "auth/user-not-found") {
        alert("No user found with this email.");
      } else {
        alert("Failed to send password reset email. Please try again.");
      }
    });
});

// Google Login
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById("go-btn");
googleLogin.addEventListener("click", function (event) {
  event.preventDefault();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      alert("Google login successful! Redirecting...");
      window.location.href = "index.html";
    })
    .catch((error) => {
      console.error("Error Code:", error.code);
      console.error("Error Message:", error.message);
      alert("Google login failed. Please try again.");
    });
});

// Facebook Login
const provider2 = new FacebookAuthProvider();
document.addEventListener("DOMContentLoaded", function () {
  const FacebookLogin = document.getElementById("fb-btn");
  FacebookLogin.addEventListener("click", function (event) {
    event.preventDefault();

    signInWithPopup(auth, provider2)
      .then((result) => {
        const user = result.user;
        alert("Facebook login successful! Redirecting...");
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error Code:", error.code);
        console.error("Error Message:", error.message);
        alert("Facebook login failed. Please try again.");
      });
  });
  
});
