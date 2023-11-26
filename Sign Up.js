var firebaseConfig = {
    apiKey: "AIzaSyCNH5mC5ylndI0S0vFEiQxTmtf-_dXwN9g",
    authDomain: "signup-login-7c21c.firebaseapp.com",
    projectId: "signup-login-7c21c",
    storageBucket: "signup-login-7c21c.appspot.com",
    messagingSenderId: "246766654200",
    appId: "1:246766654200:web:e31fbc756d5346adbbe10d",
    measurementId: "G-YDBTE8SKBJ"
  };
  
  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  // console.log(app)

  function results(){
    var email = document.getElementById("email")
    var password  = document.getElementById("pass")
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
   console.log(errorMessage)
  });
  }
 
  function getValue(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // IdP data available in result.additionalUserInfo.profile.
      // ...
      console.log(user)
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
  }
