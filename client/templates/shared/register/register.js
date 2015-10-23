Template.Register.onRendered(function () {
    Blog7.loginScreen();
});
Template.Register.events({
    'click a[data-action="sign-up"]':function (e,tmp) {
        e.preventDefault();
        var user = {
            username: tmp.$('input[data-name="username"]').val(),
            email:tmp.$('input[data-name="username"]').val(),
            password:tmp.$('input[data-name="password"]').val()
        };
        if(user.username === '' || user.password === '') return;
        Accounts.createUser(user,function (err,res) {
            if(!err)  Router.go('/');
        })
    }
})