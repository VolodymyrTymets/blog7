Meteor.methods({
    'savePost':function (post) {
        if(post._id === 'new'){
            delete post._id;
            post.createdOn = new Date();
            Posts.insert(post);
        }
    }
})