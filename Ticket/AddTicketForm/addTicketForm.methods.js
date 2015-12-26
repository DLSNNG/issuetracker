if (Meteor.isServer) {
	Meteor.methods({
	    'addTicket': function(ticket){
	    	var loggedInUser = Meteor.user();
			if(Roles.userIsInRole(loggedInUser, ['Admin', 'Super User'])) {
				//create department
				var ticketId = Tickets.insert(ticket);

				return ticketId;
			}

			throw new Meteor.Error(403, "Not authorized to create new categories");
	    }
	});
};