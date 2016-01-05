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
	    "input #Categories-search-string": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('Categories-search-string').value;
	        var search = new RegExp('^' + selected, 'i');
	        var params = template.searchParams.get();
	        params['category.name'] = search;
	        template.searchParams.set(params);
	        console.log(template.searchParams.get());
	    },
	    "input #Tickets-search-string": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('Tickets-search-string').value;
	        var search = new RegExp('^' + selected, 'i');
	        var params = template.searchParams.get();
	        params['title'] = search;
	        template.searchParams.set(params);
	        console.log(template.searchParams.get());
	    },
	    "input #Users-search-string": function(event, template) {
	    	event.preventDefault();
	        var selected = document.getElementById('Users-search-string').value;
	        var id = document.getElementById(selected) ? document.getElementById(selected).dataset.id : selected;
	        var search = new RegExp('^' + id, 'i');
	        var params = template.searchParams.get();
	        params['createdBy'] = search;
	        template.searchParams.set(params);
	        console.log(template.searchParams.get());
	    },
	    "input #date-start": function(event, template) {
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
	    "input #date-end": function(event, template) {
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