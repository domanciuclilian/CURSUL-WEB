const firebaseConfig = {
    apiKey: "AIzaSyB4JD0C6_ArSYysqXTaS_NV4Ls3TuQIsLY",
    authDomain: "cursuri-9d654.firebaseapp.com",
    projectId: "cursuri-9d654",
    storageBucket: "cursuri-9d654.appspot.com",
    messagingSenderId: "1047613766547",
    appId: "1:1047613766547:web:2e058462c1ffc82c084666",
    measurementId: "G-6QYJ8K2Y6N"
};

const postareBtn = document.getElementById("postare-btn");

const admin = "vTJwqV1Mc4aZWzOvkxi6GMPLKau1"

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

const temeDb = db.collection("teme");

let user = null;

const yearElement = document.getElementById('year');

if (yearElement) {
    let date = new Date();

    yearElement.innerHTML = date.getFullYear() + " ©";
}

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "") {
        x.className = "mobile";
    } else {
        x.className = "";
    }
}

function refresh() {
    window.location.reload();
}

function isAdmin() {
    if (user == null) {
        return false;
    }

    return admin == user.uid
}

function formatareData(stamp) {
    let data = new Date(stamp);
    let an = data.getFullYear();
    let luna = data.getMonth() + 1;
    let zi = data.getDate();

    let result = zi + "-" + luna + "-" + an;

    return result;
}

auth.onAuthStateChanged(function (fuser) {
    user = fuser;

    if (isAdmin() == true) {
        postareBtn.style.display = "block";
    }
    else {
        postareBtn.style.display = "none";
    }

    document.querySelector("body").style.display = "block";
});
