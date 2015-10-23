Router.route('post',{
    path:'/post/:_id',
    template:'Post',
    waitOn:function () {
        return  Meteor.subscribe('posts',{ _id: this.params._id });
    },
    data: function (){
        return Posts.findOne({ _id: this.params._id });
    }
});