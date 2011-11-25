// Let's register the name of our application.
Ext.regApplication({
    name: 'blogapp',
    launch: function() {
        this.views.viewport = new this.views.Viewport();
    }
});
