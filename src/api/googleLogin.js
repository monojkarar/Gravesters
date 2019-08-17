// /**
//  * Initializes the Sign-In client.
//  */
// const initClient = function() {
//   if (!window.gapi) {
//     console.error('Google API not loaded yet!');
//   }
//   window.gapi.load('auth2', function(){
//       /**
//        * Retrieve the singleton for the GoogleAuth library and set up the
//        * client.
//        */
//       auth2 = window.gapi.auth2.init({
//           client_id: '902255523439-o198fosmh9lhhivukahoc424sru14mul.apps.googleusercontent.com'
//       });

//       // Attach the click handler to the sign-in button
//       auth2.attachClickHandler('signin-button', {}, onSuccess, onFailure);
//   });
// };

// /**
// * Handle successful sign-ins.
// */
// var onSuccess = function(user) {
//   console.log('Signed in as ' + user.getBasicProfile().getName());
// };

// /**
// * Handle sign-in failures.
// */
// var onFailure = function(error) {
//   console.log(error);
// };
