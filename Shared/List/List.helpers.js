if (Meteor.isClient) {
	Template.list.helpers({
		listItems: function() {
			Meteor.subscribe(this.subscription || this.collection.toLowerCase());
			var collectionObject = window[this.collection];
			var params = this.searchParams || {};
			return collectionObject.find(params);
		}
	});

	Template.listItem.helpers({
		text: function() {
			var doc = Template.parentData();
			var field = this.field;
			return doc[field];
		}
	})
}