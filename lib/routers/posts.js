Router.route('posts',{
    path:'/',
    template:'Posts',
    waitOn:function () {
        return  Meteor.subscribe('posts',{});
    }
});