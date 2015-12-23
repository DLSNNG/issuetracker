if (Meteor.isClient) {
	Template.userSearch.helpers({
		users: function() {
			Meteor.subscribe('users');
			return Meteor.users.find({});
		}
	});
}
