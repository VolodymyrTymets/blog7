Template.About.onRendered(function () {
    // Shod do this for page shows animated
    let res =  MainView.router.load({ pageName: 'about' });

});
Template.About.onDestroyed(function () {
    // if active page be undefined F7 nol load our page again
    MainView.activePage = undefined;
})