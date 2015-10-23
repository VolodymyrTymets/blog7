Template.Posts.helpers({
    'posts': function () {
        return Posts.find();
    },
    'fromNow':function (date){
        return moment(date).fromNow();
    }
});