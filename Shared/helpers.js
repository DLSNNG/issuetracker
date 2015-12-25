if (Meteor.isClient) {
	Template.registerHelper("dateTime", function(date) {
		if (date) {
			return moment(date).format('MM/DD/YYYY, hh:mm A');
		}
	});	
}
