if (Meteor.isClient) {

	Template.categorySearchPage.onCreated(function(){
		this.searchParams = new ReactiveVar({});
	});

	Template.categorySearchPage.helpers({
		searchParams: function() {
			return Template.instance().searchParams.get();
		}
	});

	Template.categorySearchPage.events({
	    "change #category-search-name": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('category-search-name').value;
	        var search = new RegExp('^'+selected, 'i');
	        template.searchParams.set({ name: search });
	        console.log(template.searchParams.get());
	    }
	});

	Template.categorySearch.helpers({
		categories: function() {
			Meteor.subscribe('categories');
			return Categories.find({});
		}
	});
}