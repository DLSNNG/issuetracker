if (Meteor.isClient) {
	Template.addCategoryForm.events({
	    "submit .add-category-form": function(event, template) {
	    	event.preventDefault();
	        var category = {
	        	name: event.target.categoryName.value,
	        	description: event.target.categoryDescription.value
	        };
	        Meteor.call('addCategory', category, function(error, catId) {
	        	if(error) {
	        		throw new Meteor.Error(403, error.reason);
	        	}
	        	else {
	        		console.log(catId);
	        		template.find(".add-category-form").reset();
	        	}
	        });
	    }
	});
}

