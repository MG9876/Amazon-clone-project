var firebaseConfig = {
    apiKey: "AIzaSyCp7n1k6xPz26queauLSKtXl_4dMmqdejI",
    authDomain: "clone-7faa8.firebaseapp.com",
    projectId: "clone-7faa8",
    storageBucket: "clone-7faa8.appspot.com",
    messagingSenderId: "922239232095",
    appId: "1:922239232095:web:b6b6f236007604d3e4d3ea",
    measurementId: "G-B0QSWNVJG8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  var db = firebase.firestore();