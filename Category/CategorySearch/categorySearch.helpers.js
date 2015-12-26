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
	    "change #Categories-search-string": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('Categories-search-string').value;
	        var search = new RegExp('^'+selected, 'i');
	        template.searchParams.set({ name: search });
	        console.log(template.searchParams.get());
	    }
	});
}