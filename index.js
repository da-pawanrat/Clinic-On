$(function () {

  
console.log("dasdasdas");
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      //User is signed in.
      displayName = user.displayName;
      email = user.email;
      photoUrl = user.photoURL;
      console.log(displayName,email,photoUrl);

      $("#username").text(email);
      $("#displayname").text(displayName);
      $("#photo").attr("src",photoUrl);

    } else {
      window.location.href = 'signin.html'
    }
  });

})

function signout() {
      firebase.auth().signOut()
        .then(function () {
          // Sign-out successful.
        }).catch(function (error) {
          // An error happened.
        });
    
}

function payment() {
  window.location.href = 'payment.html'
}

function hisHeal() {
  window.location.href = 'docdetail.html'
}

function map() {
  window.location.href = 'map.html'
}

function fav() {
  window.location.href = 'favorite.html'
}

function addPayment() {
  window.location.href = 'addpayment.html'
}