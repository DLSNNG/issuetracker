if (Meteor.isClient) {
	Template.departmentList.helpers({
	    departments: function() {
	    	var params = this.searchParams || {};
			return Departments.find(params);
	    }
	});
}