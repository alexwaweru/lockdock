(function() {

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

    // Get elements
    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignup = document.getElementById('btnSignup');
    const btnFacebook = document.getElementById('btnFacebook');
    const btnTwitter = document.getElementById('btnTwitter');
    const btnGoogle = document.getElementById('btnGoogle');

    // Add login event
    btnLogin.addEventListener('click', e => {
        // Get email and password
        // TODO: VALIDATE EMAIL AND PASSWORD AGAIN
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        // Sign in
        const promise = auth.signInWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));
    });

    // Add signup event
    btnSignup.addEventListener('click', e => {
        // Get email and password
        // TODO: VALIDATE EMAIL AND PASSWORD AGAIN
        const email = txtEmail.value;
        const password = txtPassword.value;
        const auth = firebase.auth();
        // Create user
        const promise = auth.createUserWithEmailAndPassword(email, password);
        promise.catch(e => console.log(e.message));

    });

    // Add a Facebook event
    btnFacebook.addEventListener('click', e => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    });

    // Add a Twitter event
    btnTwitter.addEventListener('click', e => {
        var provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            var token = result.credential.accessToken;
            var secret = result.credential.secret;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    });

    // Add a Google plus event
    btnGoogle.addEventListener('click', e => {
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
        firebase.auth().languageCode = 'pt';
        provider.setCustomParameters({
            'login_hint': 'user@example.com'
        });
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
        }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    });


    // Add a realtime authentication listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log('logged in', firebaseUser);
            btnLogout.classList.remove('hide');
            btnSignup.classList.add('hide');
            window.location.href = "home.html";
        } else {
            console.log('not logged in');
            //window.location.href = "login.html";
        }
    });
}());