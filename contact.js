const firebaseConfig = {
    apiKey: "AIzaSyDbktb2ANZdCjkDHqdPlc-fGoNIJ7G9obo",
    authDomain: "hr-contact.firebaseapp.com",
    databaseURL: "https://hr-contact-default-rtdb.firebaseio.com",
    projectId: "hr-contact",
    storageBucket: "hr-contact.firebasestorage.app",
    messagingSenderId: "363224913636",
    appId: "1:363224913636:web:d2b1341343578833d73ef1"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to the contact form database
var contactFormDB = firebase.database().ref('contactForm');

// Event listener for form submission
document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    var firstname = getElementVal('firstname');
    var lastname = getElementVal('lastname');
    var emailInfo = getElementVal('emailInfo');
    var PhoneNumber = getElementVal('PhoneNumber');
    var Comments = getElementVal('Comments');

    // Save message and show success toast
    saveMessages(firstname, lastname, emailInfo, PhoneNumber, Comments);
    showToast('successToast');

    // Reset the form
    document.getElementById('contactForm').reset();

    // Redirect to index.html after 5 seconds
    setTimeout(() => {
        window.location.href = "index.html";
    }, 5000);
}

const saveMessages = (firstname, lastname, emailInfo, PhoneNumber, Comments) => {
    // Generate a new unique key and create a new entry
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        FirstName: firstname,
        LastName: lastname,
        EmailId: emailInfo,
        PhoneNumber: PhoneNumber,
        Comments: Comments,
    });
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

const showToast = (id) => {
    const toast = document.getElementById(id);
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}
