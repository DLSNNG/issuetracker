if (Meteor.isClient) {
	Router.route('/users', {
		template: 'userSearch',
		data: function() {
			return Meteor.users.find({});
		}
	});
}