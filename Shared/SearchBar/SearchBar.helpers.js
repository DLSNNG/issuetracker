if (Meteor.isClient) {
	Template.searchBar.helpers({
		collectionData: function() {
			Meteor.subscribe(this.collection.toLowerCase());
			var collectionObject = window[this.collection];
			return collectionObject.find({});
		}
	});

	Template.collectionOption.helpers({
		show: function() {
			var doc = Template.parentData();
			var field = this.field;
			return doc[field];
		},
		_id: function() {
			var doc= Template.parentData();
			return doc._id;
		}
	});
}