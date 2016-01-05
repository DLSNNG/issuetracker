if (Meteor.isClient) {
	Template.searchBar.helpers({
		collectionData: function() {
			Meteor.subscribe(this.subscription || this.collection.toLowerCase());
			var collectionObject = window[this.collection];
			return collectionObject.find({});
		},
		placeholder: function() {
			return this.placeholder || this.collection + " to search for.."
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