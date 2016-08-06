'use strict';

app.controller('AuthCtrl', function(Auth) {

  var auth = this;

  auth.login = function() {
    console.log('Login clicked');

    var user = Auth.login();
    console.log(user.facebook);
  };

  auth.logout = function() {
    Auth.logout();
  };
});
