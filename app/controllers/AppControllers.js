Ext.debug = true;
Ext.regController('AppControllers', {
  'index': function(options){
    if (!bloagapp.views.mainView){
      blogapp.views.mainView = new blogapp.views.MainView();
    }
  },

  'search': function(options){
    console.log(options);
    blogapp.views.listView = new blogapp.views.ListView();
    blogapp.views.mainView.setActiveItem(blogapp.views.listview,{type: 'flip'});
  }


});

blogapp.controllers.appController = Ext.ControllerManager.get('AppControllers');
