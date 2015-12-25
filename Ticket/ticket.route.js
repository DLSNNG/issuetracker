if (Meteor.isClient) {
	Router.route('/tickets', {
		template: 'ticketSearchPage'
	});

	Router.route('/tickets/add', {
		template: 'addTicketForm'
	});

	Router.route('/ticket/:ticketId', {
		template: 'ticketDetails',
		data: function() {
			Meteor.subscribe('tickets');
			var id = this.params.ticketId;
			return Tickets.findOne({ _id: id });
		}
	});
}