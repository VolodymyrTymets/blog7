Template.Post.onRendered(function () {
    // Shod do this for page shows animated
    MainView.router.load({ pageName: 'post' });

});
Template.Post.onDestroyed(function () {
    // if active page be undefined F7 nol load our page again
    MainView.activePage = undefined;
})