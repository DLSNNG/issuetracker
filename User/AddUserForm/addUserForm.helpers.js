if (Meteor.isClient) {
	Template.addUserForm.events({
	    "submit .add-user-form": function(event, template) {
	    	event.preventDefault();
	        var user = {
	        	username: event.target.username.value,
	        	password: event.target.password.value,
	        	email: event.target.email.value
	        }
	        Meteor.call('addUser', user, function(error, result) {
	        	if(error) {
	        		throw new Meteor.Error(403, error.reason);
	        	}
	        	else {
	        		console.log(result);
	        		template.find(".add-user-form").reset();
	        	}
	        });
	    }
	});
}