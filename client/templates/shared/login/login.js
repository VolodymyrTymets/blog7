Template.Login.onRendered(function () {
    Blog7.loginScreen();
});
Template.Login.events({
    'click a[data-action="sign-in"]':function (e,tmp) {
        var user = {
            username: tmp.$('input[data-name="username"]').val(),
            password:tmp.$('input[data-name="password"]').val()
        };
        if(user.username === '' || user.password === '') return;
        Meteor.loginWithPassword(user.username, user.password,function (err,res) {
            if(!err)  Router.go('/');
        })
    }
})