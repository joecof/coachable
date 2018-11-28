$(document).ready(() => {
  var database = firebase.database();

  $type = $('#type');
  $email = $('#signUpEmail');
  $password = $('#signUpPassword');
  $confirm = $('#signUpConfirm');
  $submit = $('#submit');
  $signupError = $('#signupError')

  $submit.on('click', () => {
    let type = $type.val();
    let email = $email.val();
    let password = $password.val().trim();
    let confirm = $confirm.val().trim();

    $signupError.text('');

    if (type === null) {
      $signupError.text("Please select one!");
    } else if (email === "") {
      $signupError.text("Your email cannot be enpty!");
    } else if (password === "") {
      $signupError.text("Your passwords cannot be enpty!");
    } else if (confirm === "") {
      $signupError.text("Your passwords cannot be enpty!");
    } else if (password !== confirm) {
      $signupError.text("Your passwords do not match! Please try again.");
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
        $signupError.text(errorMessage);
      });

      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          firebase.database().ref("users/" + user.uid).set(
            {
              "email" : user.email
            }
          );
          $(location).attr('href', './schedule');
        }
      });
    }
  })
});
