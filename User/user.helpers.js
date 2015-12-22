if (Meteor.isClient) {
	Template.userList.helpers({
		users: function() {
			Meteor.subscribe('users');
			return Meteor.users.find({});
		}
	});
}

