if (Meteor.isClient) {

	Template.searchList.onCreated(function(){
		this.searchParams = new ReactiveVar({});
	});

	Template.searchList.helpers({
		searchParams: function() {
			return Template.instance().searchParams.get();
		}
	});

	Template.searchList.events({
	    "input .search-bar": function(event, template) {
	    	event.preventDefault();
	        var selected = event.currentTarget.value;
	        var search = new RegExp('^'+selected, 'i');
	        var searchObj = {};
	        searchObj[this.field] = search;
	        template.searchParams.set(searchObj);
	        console.log(template.searchParams.get());
	    }
	});
}