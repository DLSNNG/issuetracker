if (Meteor.isServer) {
	Meteor.methods({
	    'addUser': function(user){
	      var user = Accounts.createUser(user);
	      return user;
	    }
	});
}