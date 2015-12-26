Router.route('/departments', {
	template: 'departmentSearchPage'
});

Router.route('/addDepartment', {
	template: 'addDepartmentPage'
});

Router.route('/department/:departmentId', {
	template: 'editDepartmentPage',
	data: function() {
		var departmentId = this.params.departmentId;
		return Departments.findOne({ _id: departmentId });
	}
});

Router.route('/departments/add', {
	template: 'addDepartmentForm'
});