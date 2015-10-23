Router.route('PostEditor',{
    path:'/post/edit/:_id',
    template:'PostEditor',
    controller:Authorized
});