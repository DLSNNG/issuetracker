if (Meteor.isClient) {

	Template.departmentSearchPage.onCreated(function() {
		this.searchParams = new ReactiveVar({});
	});

	Template.departmentSearchPage.helpers({
		searchParams: function() {
			return  Template.instance().searchParams.get();
		}
	});

	Template.departmentSearchPage.events({
	    "input #Departments-search-string": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('Departments-search-string').value;
	        var search = new RegExp('^'+selected, 'i');
	        template.searchParams.set({ name: search });
	        console.log(template.searchParams.get());
	    }
	});
}
