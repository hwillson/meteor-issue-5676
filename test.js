if (Meteor.isClient) {
  Meteor.startup(function () {
    Accounts.forgotPassword({ email: 'test@octonary.com' });
    
    // This following works
    // Accounts.forgotPassword({ email: 'test@octonary.com' }, function () {
    //   console.log('Email sent');
    // });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if (!Meteor.users.findOne({ username:'test' }) ) {
      Accounts.createUser({ username: 'test', email: 'test@octonary.com' });
    }
  });
}
