$(document).ready(() => {

  const $logout = $('#logout');

  $logout.on('click', () => {
    firebase.auth().signOut().then(function() {
      $(location).attr('href', './')
    }).catch(function(error) {
      // An error happened.
    });
  })
})
