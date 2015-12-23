if (Meteor.isClient) {
	Template.departmentSearch.helpers({
		departments: function() {
			Meteor.subscribe('departments');
			return Departments.find({});
		}
	});
}
