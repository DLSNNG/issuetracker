if (Meteor.isClient) {

	Template.ticketSearchPage.onCreated(function(){
		this.searchParams = new ReactiveVar({});
	});

	Template.ticketSearchPage.helpers({
		searchParams: function() {
			return  Template.instance().searchParams.get();
		}
	});

	Template.ticketSearchPage.events({
	    "change #Categories-search-string": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('Categories-search-string').value;
	        var search = new RegExp('^' + selected, 'i');
	        var params = template.searchParams.get();
	        params['category.name'] = search;
	        template.searchParams.set(params);
	        console.log(template.searchParams.get());
	    },
	    "change #Tickets-search-string": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('Tickets-search-string').value;
	        var search = new RegExp('^' + selected, 'i');
	        var params = template.searchParams.get();
	        params['title'] = search;
	        template.searchParams.set(params);
	        console.log(template.searchParams.get());
	    },
	    "change #date-start": function(event, template) {
	    	event.preventDefault();
	    	//get start and end dates
	        var start = document.getElementById('date-start').value;
	        var end = document.getElementById('date-end').value;
	        //round to include the entirety of each day
	        var startDate = moment(start).startOf('day').toDate();
	        var endDate = moment(end).endOf('day').toDate();
	        //pull previous search params and add new ones
	        var search = {};
	        var params = template.searchParams.get();
	        
	        if(start) { search.$gte = startDate };
	        if (end) { search.$lte = endDate };
	        
	        params['createdDate'] = search;
	        template.searchParams.set(params);
	        console.log(template.searchParams.get());
	    },
	    "change #date-end": function(event, template) {
	    	event.preventDefault();
	    	//get start and end dates
	        var start = document.getElementById('date-start').value;
	        var end = document.getElementById('date-end').value;
	        //round to include the entirety of each day
	        var startDate = moment(start).startOf('day').toDate();
	        var endDate = moment(end).endOf('day').toDate();
	        //pull previous search params and add new ones
	        var search = {};
	        var params = template.searchParams.get();
	        
	        if(start) { search.$gte = startDate };
	        if (end) { search.$lte = endDate };
	        
	        params['createdDate'] = search;
	        template.searchParams.set(params);
	        console.log(template.searchParams.get());
	    }
	});
}