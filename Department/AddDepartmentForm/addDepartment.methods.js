Meteor.methods({
	'addDepartment': function(name){
		var loggedInUser = Meteor.user();
		if(Roles.userIsInRole(loggedInUser, ['admin'])) {
			//create department
			var deptId = Departments.insert({
				name: name
			});

			return deptId;
		}

		throw new Meteor.Error(403, "Not authorized to create new departments");
		
	}
});