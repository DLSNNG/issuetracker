if (Meteor.isClient) {
	Template.ticketList.helpers({
		tickets: function() {
			Meteor.subscribe('tickets');
			var params = this.searchParams || {};
			return Tickets.find(params);
		}
	});
}