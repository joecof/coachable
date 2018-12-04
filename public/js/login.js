$(document).ready(() => {
  var database = firebase.database();

  $loginEmail = $('#email');
  $loginPassword = $('#password');
  $login = $('#login');
  $loginError = $('#loginError')

  $login.on('click', () => {
    let email = $loginEmail.val();
    let password = $loginPassword.val().trim();

    $loginError.text('');

    if (email === "") {
      $loginError.text("Your email cannot be empty!");
    } else if (password === "") {
      $loginError.text("Your passwords cannot be empty!");
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        $loginError.text(errorMessage);
      });

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          firebase.database().ref("users/" + user.uid).update(
            {
              "email" : user.email
            }
          );
          $(location).attr('href', './dashboard');
        }
      });
    }
  })
});
