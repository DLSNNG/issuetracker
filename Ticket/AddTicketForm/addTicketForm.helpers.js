if (Meteor.isClient) {
	Template.addTicketForm.events({
	    "submit .add-ticket-form": function(event, template) {
	    	event.preventDefault();
	    	var categorySelected = document.getElementById('Categories-search-string').value;
	    	var categoryId = document.getElementById(categorySelected).dataset.id;
	    	var category = Categories.findOne({ _id: categoryId });
	        var ticket = {
	        	title: event.target.ticketTitle.value,
	        	issue: event.target.issue.value,
	        	priority: event.target.priority.value,
	        	category: category
	        };
	        Meteor.call('addTicket', ticket, function(error, ticketId) {
	        	if(error) {
	        		throw new Meteor.Error(403, error.reason);
	        	}
	        	else {
	        		console.log(ticketId);
	        		template.find(".add-ticket-form").reset();
	        	}
	        });
	    }
	});
}