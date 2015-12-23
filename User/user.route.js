if (Meteor.isClient) {
	Router.route('/users', {
		template: 'userSearchPage',
		data: function() {
			return Meteor.users.find({});
		}
	});
}