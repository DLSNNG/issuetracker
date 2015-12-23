if (Meteor.isClient) {

	Template.userSearchPage.onCreated(function() {
		this.searchParams = new ReactiveVar({});
	});

	Template.userSearchPage.helpers({
		searchParams: function() {
			return  Template.instance().searchParams.get();
		}
	});

	Template.userSearchPage.events({
	    "change #user-search-name": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('user-search-name').value;
	        var search = new RegExp('^' + selected, 'i');
	        template.searchParams.set({ username: search });
	        console.log(template.searchParams.get());
	    }
	});

	Template.userSearch.helpers({
		users: function() {
			Meteor.subscribe('users');
			return Meteor.users.find({});
		}
	});
}
