if (Meteor.isClient) {
	Template.userList.helpers({
		users: function() {
			Meteor.subscribe('users');
			var params = this.searchParams || {};
			return Meteor.users.find(params);
		}
	});
}