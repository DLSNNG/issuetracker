if (Meteor.isClient) {
	Router.route('/users', {
		template: 'userSearchPage',
		data: function() {
			return Meteor.users.find({});
		}
	});

	Router.route('/user/:userId', {
		template: 'userDetails',
		data: function() {
			var userId = this.params.userId;
			return Meteor.users.findOne({ _id: userId });
		}
	});
}