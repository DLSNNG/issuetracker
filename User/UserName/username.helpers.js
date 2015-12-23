if (Meteor.isClient) {
	Template.username.helpers({
		username: function() {
			return  Meteor.users.findOne({ _id: this._id }).username;
		}
	});
}
