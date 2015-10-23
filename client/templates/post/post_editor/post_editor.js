Template.PostEditor.onRendered(function () {
    // Shod do this for page shows animated
   MainView.router.load({ pageName: 'postEditor' });

});
Template.PostEditor.onDestroyed(function () {
    // if active page be undefined F7 nol load our page again
    MainView.activePage = undefined;
})

Template.PostEditor.events( {
   'click [data-action="save"]':function(e,tmp){
       e.preventDefault();
       var post = {
           _id:Router.current().params._id,
           name: tmp.$('input[data-name="name"]').val(),
           subject: tmp.$('input[data-name="subject"]').val(),
           description: tmp.$('textarea[data-name="description"]').val()
       }
       if(post.name ==='' || post.description === '' || post.subject === ''){
           return;
       }
       Meteor.call('savePost',post,function(err,res){
           if(!err) Router.go('/');
       })
   }
});