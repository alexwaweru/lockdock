$(document).ready(function() {
    $('[data-toggle="offcanvas"]').click(function() {
        $("#navigation").toggleClass("hidden-xs");
    });
});

document.getElementById('btnLogout').addEventListener('click', logout);

function logout() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyB7XOSvYCu-gQpLx-U6GyHLHZcdFCHMY70",
        authDomain: "lockdoc-io.firebaseapp.com",
        databaseURL: "https://lockdoc-io.firebaseio.com",
        projectId: "lockdoc-io",
        storageBucket: "",
        messagingSenderId: "927197874850"
    };
    firebase.initializeApp(config);

    // Create an auth constant
    const auth = firebase.auth();

    // Sign out user
    auth.signOut().then(function() {
        // Sign-out successful.
        window.location.href = "index.html";
    }).catch(function(error) {
        // An error happened.
    });
}


document.getElementById('btnDocuments').addEventListener('click', createDocForm);
document.getElementById('btnPasswords').addEventListener('click', createPassForm);
document.getElementById('btnImages').addEventListener('click', createImgForm);
document.getElementById('btnCards').addEventListener('click', createCardForm);

function createImgForm() {
    // Create the form
    var dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = '<div class="jumbotron">' +
        '<form id="imgInputForm" class="" action="home.html" method="post">' +
        '<div class="form-group">' +
        '<input type="text" class="form-control form-control-lg" id="modalFTitleInput" placeholder="e.g. Auntie Rose Photo">' +
        '</div>' +
        '<div class="custom-file">' +
        '<label class="custom-file-label" for="CustomImageInput">Choose an image...</label>' +
        '<input type="file" class="custom-file-input form-control-lg" id="CustomFileInput" required>' +
        '<div class="invalid-feedback">Invalid custom file feedback</div>' +
        '</div>' +
        '<button id="btnImg" type="submit" class="btn btn-primary" name="button">Add</button>' +
        '</form>' + '</div>';

}

function createDocForm() {
    // Create the form
    var dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = '<div class="jumbotron">' +
        '<form id="passInputForm" class="" action="home.html" method="post">' +
        '<div class="form-group">' +
        '<input type="text" class="form-control form-control-lg" id="modalFTitleInput" placeholder="e.g. Birth Certificate">' +
        '</div>' +
        '<div class="custom-file">' +
        '<label class="custom-file-label" for="CustomFileInput">Choose file...</label>' +
        '<input type="file" class="custom-file-input form-control-lg" id="CustomFileInput" required>' +
        '<div class="invalid-feedback">Invalid custom file feedback</div>' +
        '</div>' +
        '<button id="btnDoc" type="submit" class="btn btn-primary" name="button">Add</button>' +
        '</form>' + '</div>';

}

function createPassForm() {
    //Create the form
    var dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = '<div class="jumbotron">' +
        '<form id="docInputForm" class="" action="home.html" method="post">' +
        '<div class="form-group">' +
        '<label for="modalDTitleInput">Password Title</label>' +
        '<input type="text" class="form-control form-control-lg" id="modalDTitleInput" placeholder="e.g. Facebook">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="formGroupExampleInput">Website</label>' +
        '<input type="text" class="form-control form-control-lg" id="formGroupExampleInput" placeholder="e.g. www.facebook.com">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="modalUsernameInput">Username</label>' +
        '<input type="text" class="form-control form-control-lg" id="modalUsernameInput" placeholder="Username">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="modalPasswordInput">Password</label>' +
        '<input type="password" class="form-control form-control-lg" id="modalPasswordInput" placeholder="Password">' +
        '</div>' +
        '<button id="btnPass" type="submit" class="btn btn-primary" name="button">Add</button>' +
        '</form>' + '</div>';
}

function createCardForm() {
    //Create the form
    var dashboard = document.getElementById("dashboard");
    dashboard.innerHTML = '<div class="jumbotron">' +
        '<form id="cardInputForm" class="" action="home.html" method="post">' +
        '<div class="form-group">' +
        '<label for="modalDTitleInput">Card Title</label>' +
        '<input type="text" class="form-control form-control-lg" id="modalDTitleInput" placeholder="e.g. Ecobank Card">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="cardNo">Card Number</label>' +
        '<input type="text" class="form-control form-control-lg" id="cardNo" placeholder="e.g. 1028 2223 2347 8901">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="cardName">Name on Card</label>' +
        '<input type="text" class="form-control form-control-lg" id="cardName" placeholder="First Last">' +
        '</div>' +
        '<div class="form-group">' +
        '<label for="securityNo">Security Number</label>' +
        '<input type="text" class="form-control form-control-lg" id="securityNo" placeholder="123">' +
        '</div>' +
        '<button id="btnPass" type="submit" class="btn btn-primary" name="button">Add</button>' +
        '</form>' + '</div>';
}

document.getElementById('docInputForm').addEventListener('submit', saveDocument);
document.getElementById('passInputForm').addEventListener('submit', savePassword);
document.getElementById('cardInputForm').addEventListener('submit', saveCard);
document.getElementById('imgInputForm').addEventListener('submit', saveImage);

function saveDocument() {
    //TODO: Connect to firebase storage, upload rename doc to the title and upload
}

function savePassword() {
    //TODO: Connect to firebase database, convert the form input into a json object and save to database
}

function saveCard() {
    //TODO: Connect to firebase database, convert the form input into a json object and save to database
}

function saveImage() {
    //TODO: Connect to firebase, upload rename img to the title and upload
}


function fetchDocuments() {
    //:TODO: Query all documents from the storage and return their names and download link
}

function fetchDatabaseItems() {
    //:TODO: Query all database items and return json objects of the items
}