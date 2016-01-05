if (Meteor.isClient) {
	Template.categoryList.helpers({
		categories: function() {
			Meteor.subscribe('categories');
			var params = this.searchParams || {};
			return Categories.find(params);
		}
	});
}