Meteor.methods({
    'addCategory': function(category){
    	var loggedInUser = Meteor.user();
		if(Roles.userIsInRole(loggedInUser, ['Admin', 'Super User'])) {
			//create department
			var catId = Categories.insert(category);

			return catId;
		}

		throw new Meteor.Error(403, "Not authorized to create new categories");
    }
});