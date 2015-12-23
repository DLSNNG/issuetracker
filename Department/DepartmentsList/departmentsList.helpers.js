if (Meteor.isClient) {
	Template.departmentsList.helpers({
	    departments: function() {
			return Departments.find({}, {
				transform: function(doc) {
					var newDoc = doc;

					return newDoc;
				}
			});
	    }
	});
}