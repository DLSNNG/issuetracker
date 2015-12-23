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
	    "change #department-search-name": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('department-search-name').value;
	        var search = new RegExp('^'+selected, 'i');
	        template.searchParams.set({ name: search });
	        console.log(template.searchParams.get());
	    }
	});

	Template.departmentSearch.helpers({
		departments: function() {
			Meteor.subscribe('departments');
			return Departments.find({});
		}
	});
}
