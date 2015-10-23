Authorized = RouteController.extend({
    onBeforeAction: function () {
        if (Meteor.user())
            this.next();
        else
            Router.go('/login');
    }
});