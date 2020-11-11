var firebaseConfig = {
    apiKey: "AIzaSyCzYCWd-z6E-_lqMKhN0Y07-rBpfwQD8xw",
    authDomain: "gk-quiz-9765a.firebaseapp.com",
    databaseURL: "https://gk-quiz-9765a.firebaseio.com",
    projectId: "gk-quiz-9765a",
    storageBucket: "gk-quiz-9765a.appspot.com",
    messagingSenderId: "385707901761",
    appId: "1:385707901761:web:5b6e08c7671516bca597c0"
  };
  firebase.initializeApp(firebaseConfig);

let contactInfo = firebase.database().ref("contacts");

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var message = document.querySelector('.message').value;
    var submitBtn = document.getElementById('submitBtn');

    saveContactInfo(name, email, message);
    document.getElementById("submitBtn").disabled = true;
    document.getElementById('contactForm').reset();
    submitBtn.innerText = "Sent!"
}

function saveContactInfo(name,email, message){
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        username: name,
        online_email: email,
        feedback: message
    });
}
