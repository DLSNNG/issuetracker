if (Meteor.isClient) {
	Router.route('/users', {
		template: 'userList',
		data: function() {
			return Meteor.users.find({});
		}
	});
}