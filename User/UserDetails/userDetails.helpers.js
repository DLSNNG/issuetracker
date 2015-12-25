if (Meteor.isClient) {

	Template.groups.helpers({
		groups: function() {
			var user= this.userId;
			Meteor.subscribe('users');
			console.log(Roles.getGroupsForUser(user));
			return Roles.getGroupsForUser(user);
		}
	});

	Template.roles.helpers({
		roles: function() {
			var user = this.userId;
			Meteor.subscribe('users');
			console.log(Roles.getRolesForUser(user));
			return  Roles.getRolesForUser(user);
		}
	});
}