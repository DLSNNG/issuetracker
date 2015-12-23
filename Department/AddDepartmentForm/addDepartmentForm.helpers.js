if (Meteor.isClient) {
  Template.addDepartmentForm.events({
      "submit .add-department-form": function(event) {
        event.preventDefault();
        Meteor.call('addDepartment', event.target.name.value, function(error, result) {
          if(error) {
            throw new Meteor.Error(403, error.reason);
          }
          else {
            console.log(result);
            event.target.name.value = "";
          }
        });
      }
  });
}