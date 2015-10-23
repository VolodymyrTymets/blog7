Meteor.publish('posts', function(filter,options) {
    return Posts.find(filter, options);
});
