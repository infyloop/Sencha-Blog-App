blogapp.views.FormView = Ext.extend(Ext.form.FormPanel, {
  layout: 'fit',
  initComponent: function(){
    
      var titlebar, buttonbar, searchButton, fields;
        
        titlebar = {
            id: 'userFormTitlebar',
            xtype: 'toolbar',
            title: 'Simple Twitter Search',
        };
        searchButton = {
            id: 'userFormSearchButton',
            text: 'Press to Search',
            ui: 'confirm',
            handler: this.onSearchAction,
            scope: this
        };
        
        buttonbar = {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [ {xtype: 'spacer'}, searchButton, {xtype: 'spacer'}]
        };
        fields = {
            xtype: 'fieldset',
            id: 'userFormFieldset',
            instructions: this.defaultInstructions,
            defaults: {
                xtype: 'textfield',
                labelAlign: 'left',
                labelWidth: '40%',
                required: false,
                useClearIcon: true,
                autoCapitalize : false
            },
            items: [
                {
                    name : 'SearchQuery',
                    label: 'Search Query',
                    autoCapitalize : true
                },
                
                {
                    xtype: 'datepickerfield',
                    name: 'startdate',
                    label: 'Start Date',
                    picker: { yearFrom: 2008, yearTo: 2011 }
                },
                
                {
                    xtype: 'datepickerfield',
                    name: 'enddate',
                    label: 'End Date',
                    picker: { yearFrom: 2008, yearTo: 2011 }
                },
                                
            ]
        };
        Ext.apply(this, {
            scroll: 'vertical',
            dockedItems: [ titlebar, buttonbar ],
            items: [ fields ]
        });
        blogapp.views.FormView.superclass.initComponent.call(this);
    },
    onSearchAction: function() {
        var queryData = this.getRecord();
       console.log(this);
        //Ext.dispatch({
            //controller: blogapp.controllers.appController.search,
            //data      : this.getValues(),
            //record    : this.getRecord(),
            //form      : this
        //});
        blogapp.controllers.appController.search(this);
    },
    
     
  
  
});
// if (Ext.is.Android) {
//     demos.Forms.insert(0, {
//         xtype: 'component',
//         styleHtmlContent: true,
//         html: '<span style="color: red">Forms on Android are currently under development. We are working hard to improve this in upcoming releases.</span>'
//     });
