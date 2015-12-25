Router.route('/categories/add', {
	template: 'addCategoryForm',
	data: function() {
		return Categories.find({});
	}
});

Router.route('/categories', {
	template: 'categorySearchPage',
	data: function() {
		return Categories.find({});
	}
});

Router.route('/category/:catId', {
	template: 'categoryDetails',
	waitOn: function() {
		return Meteor.subscribe('categories');
	},
	data: function() {
		var id = this.params.catId;
		return Categories.findOne({ _id: id });
	}
});