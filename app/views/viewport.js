// The blogapp Viewport is an extension of the Ext.Panel component.
// This is "main" wrapping view.
blogapp.views.Viewport = Ext.extend(Ext.Panel, {
    // Let's set some config options for the panel.
    fullscreen: true,
    layout: 'card',
    
    // Now, we initialize it.
    initComponent: function() {

        // Create new instance of the our FormPage component.
        blogapp.views.formPage = new blogapp.views.FormPage();

        // Let's add our view to the Viewport.
        // This is defined in the "views" folder under its respective name.
        Ext.apply(this, {
            items: [
                blogapp.views.formPage
            ]
        });

        // Similar to calling "super" in languages like Java.  Kicks off initialization in parent classes.
        blogapp.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
