Router.route('/departments', {
	template: 'departmentSearch',
	waitOn: function() {
		return Meteor.subscribe('departments');
	}
});

Router.route('/addDepartment', {
	template: 'addDepartmentPage'
});

Router.route('/department/:departmentId', {
	template: 'editDepartmentPage',
	waitOn: function() {
		return Meteor.subscribe('departments');
	},
	data: function() {
		var departmentId = this.params.departmentId;
		return Departments.findOne({ _id: departmentId });
	}

});