
Departments = new Mongo.Collection("Departments");
Categories = new Mongo.Collection("Categories");
Tickets = new Mongo.Collection("Tickets");


var Schema = {};

Schema.Department = new SimpleSchema({
	name: {
		type: String
	},
	members: {
		type: [Schema.User],
		optional: true
	}
});

Schema.Category = new SimpleSchema({
	name: {
		type: String
	},
	description: {
		type: String,
		optional: true
	},
	createdBy: {
		type: String,
		autoValue: function() {
			if (this.isInsert) {
				return Meteor.userId();
			}
		}
	},
	createdDate: {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			}	
		}
	}
});

Schema.Ticket = new SimpleSchema({
	issue: {
		type: String
	},
	createdBy: {
		type: String,
		autoValue: function() {
			if (this.isInsert) {
				return Meteor.userId();
			}
		}
	},
	createdDate: {
		type: Date,
		autoValue: function() {
			if (this.isInsert) {
				return new Date();
			}
		}
	},
	assignedTo: {
		type: Schema.User,
		optional: true
	},
	status: {
		type: String,
		allowedValues: ['Awaiting review', 'Assigned', 'Need more information on issue', 'Complete'],
		autoValue: function() {
			if (this.isInsert) {
				return 'Awaiting review';
			}
		}
	},
	priority: {
		type: Number,
		allowedValues: [1,2,3,4,5],
		autoValue: function() {
			if (this.isInsert) {
				return 5;
			}
		}
	}
})


Schema.User = new SimpleSchema({
    username: {
        type: String,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    emails: {
        type: Array,
        // For accounts-password, either emails or username is required, but not both. It is OK to make this
        // optional here because the accounts-password package does its own validation.
        // Third-party login packages may not require either. Adjust this schema as necessary for your usage.
        optional: true
    },
    "emails.$": {
        type: Object
    },
    "emails.$.address": {
        type: String,
        regEx: SimpleSchema.RegEx.Email
    },
    "emails.$.verified": {
        type: Boolean
    },
    createdAt: {
        type: Date,
        autoValue: function() {
        	return new Date();
        }
    },
    profile: {
        type: Schema.UserProfile,
        optional: true
    },
    // Make sure this services field is in your schema if you're using any of the accounts packages
    services: {
        type: Object,
        optional: true,
        blackbox: true
    },
    // Add `roles` to your schema if you use the meteor-roles package.
    // Option 1: Object type
    // If you specify that type as Object, you must also specify the
    // `Roles.GLOBAL_GROUP` group whenever you add a user to a role.
    // Example:
    // Roles.addUsersToRoles(userId, ["admin"], Roles.GLOBAL_GROUP);
    // You can't mix and match adding with and without a group since
    // you will fail validation in some cases.
    roles: {
        type: Object,
        optional: true,
        blackbox: true
    }
});

Meteor.users.attachSchema(Schema.User);
Departments.attachSchema(Schema.Department);
Categories.attachSchema(Schema.Category);
Tickets.attachSchema(Schema.Ticket);