if (Meteor.isClient) {
	Template.searchBar.helpers({
		collectionData: function() {
			Meteor.subscribe(this.collection.toLowerCase());
			var collectionObject = window[this.collection];
			console.log("collection", collectionObject.find({}).fetch());
			return collectionObject.find({});
		}
	});

	Template.collectionOption.helpers({
		show: function() {
			var doc = Template.parentData();
			var field = this.field;
			console.log(doc);
			console.log(field);
			return doc[field];
		}
	});
}