$(document).ready(() => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (!user) {
      $(location).attr('href', '/');
    }
  });

  const $logout = $('#logout');

  $logout.on('click', () => {
    firebase.auth().signOut().then(function() {
      $(location).attr('href', './')
    }).catch(function(error) {
      // An error happened.
    });
  })

})
