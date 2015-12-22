if (Meteor.isClient) {

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    if(Meteor.users.find({}).count() === 0) {
      var id;

      id = Accounts.createUser({
        username: 'Admin',
        password: 'Admin1234'
      });

      Roles.addUsersToRoles(id, ['admin', 'dept-admin'], Roles.GLOBAL_GROUP);
    }
  });

  Meteor.publish('departments', function() {
    var loggedInUser = this.userId;
    if(!loggedInUser) {
      return false;
    }
    if(Roles.userIsInRole(loggedInUser, ['admin'])) {
      return Departments.find({});
    }
    else {
      return Departments.find({ members: loggedInUser });
    }
  });

  Meteor.publish('users', function() {
    return Meteor.users.find({});
  });
}
