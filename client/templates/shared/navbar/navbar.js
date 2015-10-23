Template.NavBar.events({
    'click a[data-action="log-out"]':function (e,tmp) {
        Meteor.logout();
    }
});